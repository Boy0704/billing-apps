<template>
    <div>
        <div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
            <div class="ps-3">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb mb-0 p-0">
                        <li class="breadcrumb-item"><nuxt-link to="/"><i class="bx bx-home-alt"></i></nuxt-link>
                        </li>
                        <li class="breadcrumb-item" aria-current="page">
                            <Nuxt-link to="/config-olt">Config OLT</Nuxt-link>
                        </li>
                        <li class="breadcrumb-item active" aria-current="page">Edit</li>
                    </ol>
                </nav>
            </div>
        </div>
        <div class="row">
            <div class="col-xl-12 mx-auto">
                <div class="card border-top border-0 border-4 border-primary">
                    <div class="card-body">
                        <div class="card-title d-flex align-items-center">
                            <div><i class="bx bxs-edit me-1 font-22 text-primary"></i>
                            </div>
                            <h5 class="mb-0 text-primary">Edit OLT</h5>
                        </div>
                        <hr>
                        <form class="row g-3">
                            <div class="col-md-12">
                                <label class="form-label">Nama OLT <span class="text-danger">*</span></label>
                                <input type="text" class="form-control" v-model="olt.olt_name">
                            </div>
                            
                            <div class="col-md-8">
                                <label class="form-label">Host <span class="text-danger">*</span></label>
                                <input type="text" class="form-control" v-model="olt.host">
                            </div>
                            <div class="col-md-8">
                                <label class="form-label">Username <span class="text-danger">*</span></label>
                                <input type="text" class="form-control" v-model="olt.username">
                            </div>
                            <div class="col-md-8">
                                <label class="form-label">Password <span class="text-danger">*</span></label>
                                <input type="text" class="form-control" v-model="olt.password">
                            </div>
                            <div class="col-md-8">
                                <label class="form-label">Port <span class="text-danger">*</span></label>
                                <input type="text" class="form-control" v-model="olt.port">
                            </div>
                            <div class="col-md-12">
                                <a @click="save()" class="btn btn-primary px-5 radius-30">
                                    <i class="bx bxs-save me-1 font-22 text-default"></i>
                                    Simpan
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            olt: {
                olt_name: '',
                host: '',
                username: '',
                password: '',
                port: '',
            },
        }
    },
    
    async asyncData({ $axios, params }) {
        const dataget = await $axios.$get('/olt/' + params.id)
        return { dataget }
    },
    methods: {
        async save() {
            try {
                let response = await this.$axios.$put(
                    '/olt/' + this.$route.params.id,
                    this.olt
                )
                this.$toast.info("Sukses Edit  Data !")
                this.$router.push({
                    name: 'config-olt',
                })
                console.log(response)
            } catch (err) {
                console.log(err)
            }
        },
    },
    mounted() {
        this.olt = this.dataget.data
       
    }
}
</script>
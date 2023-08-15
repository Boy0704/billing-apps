<template>
    <div>
        <div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
            <div class="ps-3">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb mb-0 p-0">
                        <li class="breadcrumb-item"><a href="javascript:;"><i class="bx bx-home-alt"></i></a>
                        </li>
                        <li class="breadcrumb-item" aria-current="page">
                            <Nuxt-link to="/ip-pool">IP Pool</Nuxt-link>
                        </li>
                        <li class="breadcrumb-item active" aria-current="page">Add</li>
                    </ol>
                </nav>
            </div>
        </div>

        <div class="row">
            <div class="col-xl-7 mx-auto">
                <div class="card border-top border-0 border-4 border-primary">
                    <div class="card-body p-5">
                        <div class="card-title d-flex align-items-center">
                            <div><i class="bx bxs-edit me-1 font-22 text-primary"></i>
                            </div>
                            <h5 class="mb-0 text-primary">Tambah IP Pool</h5>
                        </div>
                        <hr>
                        <form class="row g-3">
                            <div class="col-md-12">
                                <label class="form-label">Name Pool</label>
                                <input type="text" class="form-control" v-model="param.pool_name">
                            </div>
                            <div class="col-md-12">
                                <label class="form-label">IP Range</label>
                                <input type="text" class="form-control" v-model="param.ip">
                            </div>

                            <div class="col-12">
                                <a @click="save()" class="btn btn-primary px-5">
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
            param: {
                pool_name: "",
                ip: ""
            }
        }
    },
    methods: {
        async save() {
            try {
                let response = await this.$axios.$post(
                    '/api/ippool',
                    this.param
                )
                // this.$router.push({
                //     name: 'dashboard-projects-id',
                //     params: { id: response.data.id },
                // })
                console.log(response)
            } catch (error) {
                console.log(error)
            }
        }
    }

}
</script>
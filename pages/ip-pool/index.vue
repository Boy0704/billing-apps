<template>
    <div>
        <div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
            <div class="ps-3">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb mb-0 p-0">
                        <li class="breadcrumb-item"><a href="javascript:;"><i class="bx bx-home-alt"></i></a>
                        </li>
                        <li class="breadcrumb-item active" aria-current="page">IP Pool</li>
                    </ol>
                </nav>
            </div>
        </div>
        <div class="card">
            <div class="card-body">
                <nuxt-link to="/ip-pool/add" class="btn btn-primary px-5"><i class="bx bx-plus mr-1"></i>Tambah</nuxt-link>
                <br><br>
                <div class="table-responsive">
                    <table id="example" class="table table-striped table-bordered" style="width:100%">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Name Pool</th>
                                <th>IP Range</th>
                                <th>Option</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(data, index) in ippools.data" :key="data.id">
                                <td>{{ index + 1 }}</td>
                                <td>{{ data.pool_name }}</td>
                                <td>{{ data.ip }}</td>
                                <td>
                                    <nuxt-link :to="'/ip-pool/edit/' + data.id" class="btn btn-xs btn-primary" title="Edit">
                                        <i class="bx bx-edit me-0"></i>
                                    </nuxt-link>

                                    <a @click="deleteData(data.id)" class="btn btn-xs btn-danger" title="Hapus">
                                        <i class="bx bx-trash me-0"></i>
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            ippools: []
        }
    },
    async asyncData({ $axios }) {
        const ippools = await $axios.$get(
            '/ippool'
        )
        return { ippools }
    },
    methods: {
        async deleteData(id) {
            try {
                let response = await this.$axios.$delete(
                    '/ippool/'+id,
                    this.param
                )
                console.log(response)
                if (response.code == 200) {
                    this.$toast.info("Sukses delete data !");
                } else {
                    this.$toast.warning(response.status);
                }
                window.location.reload()
            } catch (error) {
                console.log(error)
                this.$toast.error("Gagal delete data !");
            }
        }
    }
}

</script>
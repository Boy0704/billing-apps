<template>
    <div>
        <div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
            <div class="ps-3">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb mb-0 p-0">
                        <li class="breadcrumb-item"><nuxt-link to="/"><i class="bx bx-home-alt"></i></nuxt-link>
                        </li>
                        <li class="breadcrumb-item active" aria-current="page">Data Nas</li>
                    </ol>
                </nav>
            </div>
        </div>
        <div class="card">
            <div class="card-body border-top border-0 border-4 border-primary">
                <nuxt-link to="/nas/add" class="btn btn-primary px-5"><i
                        class="bx bx-plus mr-1"></i>Tambah</nuxt-link>
                <br><br>
                <div class="table-responsive">
                    <table id="example" class="table table-striped table-bordered" style="width:100%">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Name</th>
                                <th>IP Router</th>
                                <th>Port Radius</th>
                                <th>API username</th>
                                <th>API port</th>
                                <th>Option</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(data, index) in nas.data" :key="data.id">
                                <td>{{ index + 1 }}</td>
                                <td>{{ data.shortname }}</td>
                                <td>{{ data.nasname }}</td>
                                <td>{{ data.ports }}</td>
                                <td>{{ data.api_username }}</td>
                                <td>{{ data.api_port }}</td>
                                <td>
                                    <nuxt-link :to="{
                                        name: 'nas-id-edit',
                                        params: { id: data.id },
                                    }" class="btn btn-xs btn-primary" title="Edit">
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
            nas: []
        }
    },
    async asyncData({ $axios }) {
        const nas = await $axios.$get(
            '/nas'
        )
        return { nas }
    },
    methods: {
        async deleteData(id) {
            try {
                let response = await this.$axios.$delete(
                    '/nas/' + id,
                    this.param
                )
                console.log(response)
                if (response.code == 200) {
                    this.$toast.info("Sukses delete data !");
                    this.refresh()
                } else {
                    this.$toast.warning(response.status);
                }
            } catch (error) {
                console.log(error)
                this.$toast.error("Gagal delete data !");
            }
        },
        refresh() {
            this.$nuxt.refresh()
        },
    }
}
</script>
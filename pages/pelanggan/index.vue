<template>
    <div>
        <div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
            <div class="ps-3">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb mb-0 p-0">
                        <li class="breadcrumb-item">
                            <nuxt-link to="/"><i class="bx bx-home-alt"></i></nuxt-link>
                        </li>
                        <li class="breadcrumb-item active" aria-current="page">
                            Data Pelanggan
                        </li>
                    </ol>
                </nav>
            </div>
        </div>
        <div class="card">
            <div class="card-body border-top border-0 border-4 border-primary">
                <nuxt-link to="/pelanggan/add" class="btn btn-primary px-5"><i
                        class="bx bx-plus mr-1"></i>Tambah</nuxt-link>
                <br /><br />
                <vue-good-table :columns="columns" :rows="pelanggan.data" :pagination-options="{
                    enabled: true,
                }" :search-options="{
    enabled: true
}">

                    <template slot="table-row" slot-scope="props">
                        <span v-if="props.column.field == 'kode_pelanggan'">
                            <span class="badge rounded-pill bg-success">{{ props.row.kode_pelanggan }}</span>
                        </span>
                        <span v-if="props.column.field == 'nama'">
                            {{ props.row.nama_depan }} 
                            {{ props.row.nama_belakang }} 
                        </span>
                        <span v-if="props.column.field == 'option'">
                            <nuxt-link :to="{
                                name: 'pelanggan-id-edit',
                                params: { id: props.row.id },
                            }" class="btn btn-xs btn-primary" title="Edit">
                                <i class="bx bx-edit me-0"></i>
                            </nuxt-link>

                            <a @click="deleteData(props.row.id)" class="btn btn-xs btn-danger" title="Hapus">
                                <i class="bx bx-trash me-0"></i>
                            </a>
                        </span>

                    </template>

                </vue-good-table>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            pelanggan: [],
            columns: [
                {
                    label: 'Kode Pelanggan',
                    field: 'kode_pelanggan',
                },
                {
                    label: 'Nama Pelanggan',
                    field: 'nama',
                },
                {
                    label: 'Option',
                    field: 'option',
                    width: '200px',
                },
            ],
        }
    },
    async asyncData({ $axios }) {
        const pelanggan = await $axios.$get('/pelanggan')
        return { pelanggan }
    },
    methods: {
        async deleteData(id) {
            try {
                let response = await this.$axios.$delete(
                    '/pelanggan/' + id,
                    this.param
                )
                console.log(response)
                if (response.meta.code == 200) {
                    this.$toast.info('Sukses delete data !')
                    this.refresh()
                } else {
                    this.$toast.warning(response.status)
                }
            } catch (error) {
                console.log(error)
                this.$toast.error('Gagal delete data !')
            }
        },
        refresh() {
            this.$nuxt.refresh()
        },
    },
}
</script>

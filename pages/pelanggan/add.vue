<template>
    <div>
        <div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
            <div class="ps-3">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb mb-0 p-0">
                        <li class="breadcrumb-item">
                            <nuxt-link to="/"
                                ><i class="bx bx-home-alt"></i
                            ></nuxt-link>
                        </li>
                        <li class="breadcrumb-item" aria-current="page">
                            <Nuxt-link to="/pelanggan"
                                >Data Pelanggan</Nuxt-link
                            >
                        </li>
                        <li class="breadcrumb-item active" aria-current="page">
                            Tambah
                        </li>
                    </ol>
                </nav>
            </div>
        </div>
        <div class="row">
            <form class="row">
                <div class="col-xl-6 mx-auto">
                    <div
                        class="card border-top border-0 border-4 border-primary"
                    >
                        <div class="card-body">
                            <div class="card-title d-flex align-items-center">
                                <div>
                                    <i
                                        class="bx bxs-edit me-1 font-22 text-primary"
                                    ></i>
                                </div>
                                <h5 class="mb-0 text-primary">
                                    Tambah Data Pelanggan
                                </h5>
                            </div>
                            <hr />
                            <div class="col-md-12 mb-3">
                                <label class="form-label">Nama Depan</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    v-model="pelanggan.nama_depan"
                                />
                            </div>
                            <div class="col-md-12">
                                <div class="col-md-12 mb-3">
                                    <label class="form-label"
                                        >Nama Belakang</label
                                    >
                                    <input
                                        type="text"
                                        class="form-control"
                                        v-model="pelanggan.nama_belakang"
                                    />
                                </div>
                                <div class="col-md-12 mb-3">
                                    <label class="form-label">Alamat</label>
                                    <textarea
                                        class="form-control"
                                        v-model="pelanggan.alamat"
                                    ></textarea>
                                </div>
                                
                                <div class="col-md-12 mb-3">
                                    <label class="form-label">Email</label>
                                    <input
                                        type="email"
                                        class="form-control"
                                        v-model="pelanggan.email"
                                    />
                                </div>
                                <div class="col-md-12 mb-3">
                                    <label class="form-label"
                                        >Nomor Handphone</label
                                    >
                                    <input
                                        type="text"
                                        class="form-control"
                                        v-model="pelanggan.no_telp"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-6 mx-auto">
                    <div
                        class="card border-top border-0 border-4 border-primary"
                    >
                        <div class="card-body">
                            <div class="card-title d-flex align-items-center">
                                <div>
                                    <i
                                        class="bx bxs-edit me-1 font-22 text-primary"
                                    ></i>
                                </div>
                                <h5 class="mb-0 text-primary">Setting Paket</h5>
                            </div>
                            <hr />
                            <div class="col-md-12">
                                <div class="col-md-12 mb-3">
                                    <label class="form-label">IP Pool</label>
                                    <div class="input-group">
                                        <button
                                            class="btn btn-outline-secondary"
                                            type="button"
                                        >
                                            <i class="bx bx-search"></i>
                                        </button>
                                        <select
                                            class="form-select single-select"
                                            id="inputGroupSelect03"
                                            aria-label="Example select with button addon"
                                            v-model="pelanggan.id_ippool"
                                        >
                                            <option selected>Pilih</option>
                                            <option
                                                v-for="(
                                                    item, index
                                                ) in ippool.data"
                                                v-bind:value="item.id"
                                            >
                                                {{ item.pool_name }}
                                            </option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-md-12 mb-3">
                                    <label class="form-label"
                                        >Paket Internet</label
                                    >
                                    <div class="input-group">
                                        <button
                                            class="btn btn-outline-secondary"
                                            type="button"
                                        >
                                            <i class="bx bx-search"></i>
                                        </button>
                                        <select
                                            class="form-select single-select"
                                            id="inputGroupSelect03"
                                            aria-label="Example select with button addon"
                                            v-model="pelanggan.id_paketbw"
                                        >
                                            <option selected>Pilih</option>
                                            <option
                                                v-for="(
                                                    item, index
                                                ) in paketbw.data"
                                                v-bind:value="item.id"
                                            >
                                                {{ item.nama_paket }}
                                            </option>
                                        </select>
                                    </div>
                                </div>
                                <!-- <div class="col-md-12 mb-3">
                                    <label class="form-label"
                                        >Tanggal Register</label
                                    >
                                    <input type="text" class="form-control" />
                                </div>
                                <div class="col-md-12 mb-3">
                                    <label class="form-label"
                                        >Masa Aktif (Hari)</label
                                    >
                                    <input type="text" class="form-control" />
                                </div> -->
                            </div>
                        </div>
                    </div>
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
</template>

<script>
export default {
    data() {
        return {
            pelanggan: {
                nama_depan: '',
                nama_belakang: '',
                alamat: '',
                email: '',
                no_telp: '',
                id_ippool: '',
                id_paketbw: '',
            },
        }
    },

    async asyncData({ $axios }) {
        const ippool = await $axios.$get('/ippool')
        const paketbw = await $axios.$get('/paketbw')

        return { ippool, paketbw }
    },
    methods: {
        async save() {
            try {
                let response = await this.$axios.$post(
                    'pelanggan',
                    this.pelanggan
                )
                this.$toast.info("Sukses Tambah Data !")
                this.$router.push({
                    name: 'pelanggan',
                })
            } catch (error) {
                console.log(error)
                this.$toast.error("Gagal Tambah Data !")
            }
        }
    }
}
</script>

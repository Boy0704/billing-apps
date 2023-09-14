<template>
    <div>
        <div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
            <div class="ps-3">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb mb-0 p-0">
                        <li class="breadcrumb-item"><nuxt-link to="/"><i class="bx bx-home-alt"></i></nuxt-link>
                        </li>
                        <li class="breadcrumb-item" aria-current="page">
                            <Nuxt-link to="/paket-internet">Paket Internet</Nuxt-link>
                        </li>
                        <li class="breadcrumb-item active" aria-current="page">Tambah</li>
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
                            <h5 class="mb-0 text-primary">Tambah Paket Internet</h5>
                        </div>
                        <hr>
                        <form class="row g-3">
                            <div class="col-md-12">
                                <label class="form-label">Nama Paket <span class="text-danger">*</span></label>
                                <input type="text" class="form-control" v-model="paketbw.nama_paket">
                            </div>
                            <div class="col-md-6">
                                <div class="col-md-12 mb-3">
                                    <h5 class="mb-0 text-primary text-center">Target Upload</h5>
                                </div>
                                <div class="col-md-12 mb-3">
                                    <label class="form-label">Max Limit (Bit/s) <span class="text-danger">*</span></label>
                                    <input type="text" class="form-control" v-model="paketbw.up_max_limit">
                                </div>
                                <div class="col-md-12 mb-3">
                                    <label class="form-label">Burst Limit (Bit/s) <span class="text-danger">*</span></label>
                                    <input type="text" class="form-control" v-model="paketbw.up_burst_limit">
                                </div>
                                <div class="col-md-12 mb-3">
                                    <label class="form-label">Burst Treshold Limit (Bit/s) <span class="text-danger">*</span></label>
                                    <input type="text" class="form-control" v-model="paketbw.up_burst_threshold">
                                </div>
                                <div class="col-md-12 mb-3">
                                    <label class="form-label">Burst Time (s) <span class="text-danger">*</span></label>
                                    <input type="text" class="form-control" v-model="paketbw.up_burst_time">
                                </div>
                                <div class="col-md-12 mb-3">
                                    <label class="form-label">Limit At (Bit/s) <span class="text-danger">*</span></label>
                                    <input type="text" class="form-control" v-model="paketbw.up_limitat">
                                </div>

                            </div>
                            <div class="col-md-6">
                                <div class="col-md-12 mb-3">
                                    <h5 class="mb-0 text-primary text-center">Target Download</h5>
                                </div>
                                <div class="col-md-12 mb-3">
                                    <label class="form-label">Max Limit (Bit/s) <span class="text-danger">*</span></label>
                                    <input type="text" class="form-control" v-model="paketbw.down_max_limit">
                                </div>
                                <div class="col-md-12 mb-3">
                                    <label class="form-label">Burst Limit (Bit/s) <span class="text-danger">*</span></label>
                                    <input type="text" class="form-control" v-model="paketbw.down_burst_limit">
                                </div>
                                <div class="col-md-12 mb-3">
                                    <label class="form-label">Burst Treshold Limit (Bit/s) <span class="text-danger">*</span></label>
                                    <input type="text" class="form-control" v-model="paketbw.down_burst_threshold">
                                </div>
                                <div class="col-md-12 mb-3">
                                    <label class="form-label">Burst Time (s) <span class="text-danger">*</span></label>
                                    <input type="text" class="form-control" v-model="paketbw.down_burst_time">
                                </div>
                                <div class="col-md-12 mb-3">
                                    <label class="form-label">Limit At (Bit/s) <span class="text-danger">*</span></label>
                                    <input type="text" class="form-control" v-model="paketbw.down_limitat">
                                </div>

                            </div>
                            <div class="col-md-8">
                                <label class="form-label">Priority <span class="text-danger">*</span></label>
                                <input type="text" class="form-control" v-model="paketbw.priority">
                            </div>
                            <div class="col-md-8">
                              <label class="form-label">Nas Type <span class="text-danger">*</span></label>
                              <select class="form-select mb-3" aria-label="Default select example" v-model="paketbw.nas">
                                <option value="global">Global</option>
                                <option v-for="(item, index) in nas.data" v-bind:value="item.nasname">{{ item.shortname }}</option>
                              </select>
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
import $ from "jquery";

export default {
    data() {
        return {
            paketbw: {
                nama_paket: '',
                up_max_limit: '',
                down_max_limit: '',
                up_burst_limit: '',
                down_burst_limit: '',
                up_burst_threshold: '',
                down_burst_threshold: '',
                up_burst_time: '',
                down_burst_time: '',
                priority: '',
                nas: '',
                up_limitat: '',
                down_limitat: '',
            },
        }
    },
    async asyncData({ $axios }) {
      const nas = await $axios.$get(
        '/api/nas'
      )

      return { nas }
    },
    methods: {
        async save() {
            try {
                let response = await this.$axios.$post(
                    '/api/paketbw',
                    this.paketbw
                )
                this.$toast.info("Sukses Tambah Data !")
                this.$router.push({
                    name: 'paket-internet',
                })
                console.log(response)
            } catch (err) {
                console.log(err)
            }
        },
    },
}
</script>

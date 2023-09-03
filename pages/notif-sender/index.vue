<template>
    <div>
        <div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
            <div class="ps-3">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb mb-0 p-0">
                        <li class="breadcrumb-item"><a href="javascript:;"><i class="bx bx-home-alt"></i></a>
                        </li>
                        <li class="breadcrumb-item active" aria-current="page">Setting Whatsapp</li>
                    </ol>
                </nav>
            </div>
        </div>
        <div class="card">
            <div class="card-body">
                <div class="d-lg-flex align-items-center mb-4 gap-3">
                    <div class="position-relative">
                        <!-- <input type="text" class="form-control ps-5 radius-30" placeholder="Search Order"> <span
                            class="position-absolute top-50 product-show translate-middle-y"><i
                                class="bx bx-search"></i></span> -->
                    </div>
                    <div class="ms-auto"><a href="javascript:;" @click="createInstance($config.baseURLWA)"
                            class="btn btn-primary radius-30 mt-2 mt-lg-0"><i class="bx bxs-plus-square"></i>Tambah Baru</a>
                    </div>
                </div>
                <div v-if="loading" class="alert border-0 border-start border-5 border-info alert-dismissible fade show">
                    <div><span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Loading...</div>
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
                <div class="table-responsive">
                    <table class="table mb-0">
                        <thead class="table-light">
                            <tr>
                                <th>#</th>
                                <th>No WA</th>
                                <th>Nama</th>
                                <th>Secret Key</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(data, index) in walist.data.data">
                                <!-- <tr> -->
                                <td>{{ index + 1 }}</td>
                                <td>{{ data.user.id != null ? data.user.id : "N/A" }}</td>
                                <td>{{ data.user.name != null ? data.user.name : "N/A" }}</td>
                                <td>
                                    <div class="badge rounded-pill text-warning bg-light-warning p-2 text-uppercase px-3">{{
                                        data.instance_key }}</div>
                                </td>
                                <td>
                                    <div v-if="data.phone_connected"
                                        class="badge rounded-pill text-success bg-light-success p-2 text-uppercase px-3">
                                        connect</div>
                                    <div v-if="!data.phone_connected"
                                        class="badge rounded-pill text-danger bg-light-danger p-2 text-uppercase px-3">
                                        disconnect</div>
                                </td>
                                <td>
                                    <div class="d-flex order-actions">
                                        <a href="javascript:;" @click="showQR(data.instance_key, $config.baseURLWA)"
                                            data-bs-toggle="modal" data-bs-target="#exampleModal" title="scan barcode"><i
                                                class='bx bxs-camera'></i></a>
                                        <a href="javascript:;" @click="deleteData(data.instance_key, $config.baseURLWA)"
                                            class="ms-3" title="hapus"><i class='bx bxs-trash'></i></a>
                                        <a href="javascript:;" @click="logoutWa(data.instance_key, $config.baseURLWA)"
                                            class="ms-3" title="logout"><i class='bx bx-log-out-circle'></i></a>
                                    </div>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">QR SCAN WA</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <p style="text-align: center;">
                            <img :src="imageQRCODE" alt="qrcode">
                        </p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" @click="refresh" class="btn btn-secondary"
                            data-bs-dismiss="modal">Close</button>
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
            walist: [],
            imageQRCODE: "",
            loading: false
        }
    },

    methods: {
        async createInstance(url) {
            try {
                this.loading = true
                let response = await this.$axios.get(url + '/instance/init')
                console.log(response)
                if (response.data.error == false) {
                    // this.refresh()
                    console.log("asdfa")
                    this.$toast.info("Sukses create instance !")
                    this.refresh()
                    this.loading = false
                } else {
                    this.$toast.error(response.message);
                }
                // window.location.reload()
            } catch (error) {
                console.log(error)
                this.$toast.error("Gagal create instance !");
            }
        },
        async deleteData(secretKey, url) {
            try {
                console.log(url);
                this.loading = true
                let response = await this.$axios.$delete(url + '/instance/delete?key=' + secretKey, this.param)
                console.log(response)
                if (!response.error) {
                    this.$toast.info("Sukses delete data !");
                    console.log("sukses");
                    this.refresh()
                    this.loading = false
                } else {
                    //this.$toast.warning(response.message);
                }
                // window.location.reload()
            } catch (error) {
                console.log(error)
                this.$toast.error("Gagal delete data !");
            }
        },
        async showQR(secretKey, url) {
            try {
                let response = await this.$axios.get(url + '/instance/qrbase64?key=' + secretKey)
                console.log(response)
                this.imageQRCODE = response.data.qrcode
                // window.location.reload()
            } catch (error) {
                console.log(error)
                this.$toast.error("Gagal load qr !");
            }
        },

        async logoutWa(secretKey, url) {
            try {
                let response = await this.$axios.$delete(url + '/instance/logout?key=' + secretKey, this.param)
                console.log(response)
                this.$toast.info("Sukses logout !")

            } catch (error) {
                console.log(error)
                this.$toast.error("Gagal logout !");
            }
        },
        refresh() {
            this.$nuxt.refresh()
        },

    },
    async asyncData({ $axios, $config }) {
        try {
            // const token = $config.tokenWA
            // console.log(token);
            // const config = {
            //     headers: {
            //         Authorization: 'Bearer '+token,
            //     }
            // };
            // const header = {
            //         Authorization: 'Bearer '+token,
            //     }
            // console.log(config)
            const url = $config.baseURLWA
            // console.log(url)
            const walist = await $axios.get(url + '/instance/list');
            return { walist };
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    },


    mounted() {
        // console.log("hello")
        // this.fetchData()

    }

}
</script>
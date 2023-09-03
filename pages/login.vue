<template>
    <div class="section-authentication-signin d-flex align-items-center justify-content-center my-5 my-lg-0">
        <div class="container-fluid">
            <div class="row row-cols-1 row-cols-lg-2 row-cols-xl-3">
                <div class="col mx-auto">
                    <div class="mb-4 text-center">
                        <img src="~/assets/images/logo-img.png" width="180" alt="" />
                    </div>
                    <div class="card">
                        <div class="card-body">
                            <div class="border p-4 rounded">
                                <div class="text-center">
                                    <h3 class="">Sign in</h3>
                                    <p>Don't have an account yet? <a href="authentication-signup.html">Sign up here</a>
                                    </p>
                                </div>
                                <div class="d-grid">
                                    <a class="btn my-4 shadow-sm btn-white" href="javascript:;"> <span
                                            class="d-flex justify-content-center align-items-center">
                                            <img class="me-2" src="~/assets/images/icons/search.svg" width="16"
                                                alt="Image Description">
                                            <span>Sign in with Google</span>
                                        </span>
                                    </a> <a href="javascript:;" class="btn btn-facebook"><i class="bx bxl-facebook"></i>Sign
                                        in with Facebook</a>
                                </div>
                                <div class="login-separater text-center mb-4"> <span>OR SIGN IN WITH EMAIL</span>
                                    <hr />
                                </div>
                                <div class="form-body">
                                    <form class="row g-3">
                                        <div class="col-12">
                                            <label for="inputEmailAddress" class="form-label">Username</label>
                                            <input type="text" class="form-control" id="inputEmailAddress"
                                                placeholder="Masukkan username" v-model="login.username">
                                        </div>
                                        <div class="col-12">
                                            <label for="inputChoosePassword" class="form-label">Password</label>
                                            <div class="input-group" id="show_hide_password">
                                                <input type="password" class="form-control border-end-0"
                                                    id="inputChoosePassword" placeholder="Masukkan Password"
                                                    v-model="login.password">
                                                <a href="javascript:;" class="input-group-text bg-transparent">
                                                    <!-- <i class='bx bx-hide'></i> -->
                                                </a>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-check form-switch">
                                                <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked"
                                                    checked>
                                                <label class="form-check-label" for="flexSwitchCheckChecked">Remember
                                                    Me</label>
                                            </div>
                                        </div>
                                        <div class="col-md-6 text-end"> <a href="authentication-forgot-password.html">Forgot
                                                Password ?</a>
                                        </div>
                                        <div class="col-12">
                                            <div class="d-grid">
                                                <a @click="userLogin" class="btn btn-primary"><i
                                                        class="bx bxs-lock-open"></i>Sign in</a>
                                                <div v-if="loading"
                                                    class="alert border-0 border-start border-5 border-info alert-dismissible fade show">
                                                    <div><span class="spinner-border spinner-border-sm" role="status"
                                                            aria-hidden="true"></span> Loading...</div>
                                                    <button type="button" class="btn-close" data-bs-dismiss="alert"
                                                        aria-label="Close"></button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!--end row-->
        </div>
    </div>
</template>

<script>
export default {
    layout: 'auth',
    data() {
        return {
            loading: false,
            login: {
                username: '',
                password: '',
            },
        }
    },
    methods: {
        async userLogin() {
            this.loading = true
            try {
                let response = await this.$auth.loginWith('local', { data: this.login })
                this.$auth.setUser(response.data.data)
                console.log(response)
                this.loading = false
                this.$toast.info("Sukses login !")
                
            } catch (err) {
                console.log(err.response)
                this.loading = false
                this.$toast.error("Gagal login !")
            }
        },
    },

}
</script>
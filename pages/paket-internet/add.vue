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
                                <label class="form-label">Nama Paket</label>
                                <input type="text" class="form-control">
                            </div>
                            <div class="col-md-6">
                                <div class="col-md-12 mb-3">
                                    <label class="form-label">Target Upload</label>
                                    <input type="text" class="form-control">
                                </div>
                                <div class="col-md-12 mb-3">
                                    <label class="form-label">Max Limit (Bit/s)</label>
                                    <input type="text" class="form-control">
                                </div>
                                <div class="col-md-12 mb-3">
                                    <label class="form-label">Burst Limit (Bit/s)</label>
                                    <input type="text" class="form-control">
                                </div>
                                <div class="col-md-12 mb-3">
                                    <label class="form-label">Burst Treshold Limit (Bit/s)</label>
                                    <input type="text" class="form-control">
                                </div>
                                <div class="col-md-12 mb-3">
                                    <label class="form-label">Burst Time (s)</label>
                                    <input type="text" class="form-control">
                                </div>
                                <div class="col-md-12 mb-3">
                                    <label class="form-label">Limit At (Bit/s)</label>
                                    <input type="text" class="form-control">
                                </div>
                                <div class="col-md-12 mb-3">
                                    <label class="form-label">Priority</label>
                                    <input type="text" class="form-control">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="col-md-12 mb-3">
                                    <label class="form-label">Target Download</label>
                                    <input type="text" class="form-control">
                                </div>
                                <div class="col-md-12 mb-3">
                                    <label class="form-label">Max Limit (Bit/s)</label>
                                    <input type="text" class="form-control">
                                </div>
                                <div class="col-md-12 mb-3">
                                    <label class="form-label">Burst Limit (Bit/s)</label>
                                    <input type="text" class="form-control">
                                </div>
                                <div class="col-md-12 mb-3">
                                    <label class="form-label">Burst Treshold Limit (Bit/s)</label>
                                    <input type="text" class="form-control">
                                </div>
                                <div class="col-md-12 mb-3">
                                    <label class="form-label">Burst Time (s)</label>
                                    <input type="text" class="form-control">
                                </div>
                                <div class="col-md-12 mb-3">
                                    <label class="form-label">Limit At (Bit/s)</label>
                                    <input type="text" class="form-control">
                                </div>
                                <div class="col-md-12 mb-3">
                                    <label class="form-label">Priority</label>
                                    <input type="text" class="form-control">
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
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>
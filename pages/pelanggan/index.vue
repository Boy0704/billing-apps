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
                        <li class="breadcrumb-item active" aria-current="page">
                            Data Pelanggan
                        </li>
                    </ol>
                </nav>
            </div>
        </div>
        <div class="card">
            <div class="card-body border-top border-0 border-4 border-primary">
                <nuxt-link to="/pelanggan/add" class="btn btn-primary px-5"
                    ><i class="bx bx-plus mr-1"></i>Tambah</nuxt-link
                >
                <br /><br />
                <div class="table-responsive">
                    <table
                        id="example"
                        class="table table-striped table-bordered"
                        style="width: 100%"
                    >
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Kode Pelanggan</th>
                                <th>Nama Pelanggan</th>
                                <th>Option</th>
                            </tr>
                        </thead>
                        <tbody></tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {}
</script>

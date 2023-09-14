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
              Paket Internet
            </li>
          </ol>
        </nav>
      </div>
    </div>
    <div class="card">
      <div class="card-body border-top border-0 border-4 border-primary">
        <div class="d-lg-flex align-items-center mb-4 gap-3">
          <div class="position-relative">
            <select
              class="form-select mb-3"
              aria-label="Default select example"
              v-model="serverNas"
            >
              <option value="global">Global</option>
              <option
                v-for="(item, index) in nas.data"
                v-bind:value="item.nasname"
              >
                {{ item.shortname }}
              </option>
            </select>
          </div>
          <div class="ms-auto">
            <nuxt-link
              to="/paket-internet/add"
              class="btn btn-primary radius-30 mt-2 mt-lg-0"
              ><i class="bx bxs-plus-square"></i>Tambah</nuxt-link
            >
          </div>
        </div>
        <div class="table-responsive">
          <table
            id="example"
            class="table table-striped table-bordered"
            style="width: 100%"
          >
            <thead>
              <tr>
                <th>No</th>
                <th>Nama Paket</th>
                <th>Max Limit</th>
                <th>Burst Limit</th>
                <th>Burst Threshold</th>
                <th>Burst Time</th>
                <th>Priority</th>
                <th>Limit At</th>
                <th>Option</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(data, index) in paketbw.data" :key="data.id">
                <td>{{ index + 1 }}</td>
                <td>{{ data.nama_paket }}</td>
                <td>{{ data.max_limit }}</td>
                <td>{{ data.burst_limit }}</td>
                <td>{{ data.burst_threshold }}</td>
                <td>{{ data.burst_time }}</td>
                <td>{{ data.priority }}</td>
                <td>{{ data.limit_at }}</td>
                <td>
                  <nuxt-link
                    :to="{
                      name: 'paket-internet-id-edit',
                      params: { id: data.id },
                    }"
                    class="btn btn-xs btn-primary"
                    title="Edit"
                  >
                    <i class="bx bx-edit me-0"></i>
                  </nuxt-link>

                  <a
                    @click="deleteData(data.id)"
                    class="btn btn-xs btn-danger"
                    title="Hapus"
                  >
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
import 'jquery/dist/jquery.min.js'
//Datatable Modules
import 'datatables.net-dt/js/dataTables.dataTables'
import 'datatables.net-dt/css/jquery.dataTables.min.css'
import $ from 'jquery'

export default {
  data() {
    return {
      paketbw: [],
      serverNas: 'global',
    }
  },
  async asyncData({ $axios }) {
    const nas = await $axios.$get('/api/nas')
    const paketbw = await $axios.$get('/api/paketbw?nas=global')
    setTimeout(function () {
      $('#example').DataTable()
    }, 1000)
    return { paketbw, nas }
  },
  methods: {
    async deleteData(id) {
      try {
        let response = await this.$axios.$delete(
          '/api/paketbw/' + id,
          this.param
        )
        console.log(response)
        if (response.code == 200) {
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
  watch: {
    serverNas: function (val) {
      this.$axios
        .$get('/api/paketbw?nas=' + val)
        .then((res) => {
          this.paketbw = res
        })
        .catch((e) => {})
      // this.paketbw =  this.$axios.$get(
      //   '/api/paketbw?nas='+val
      // )
      setTimeout(function () {
        $('#example').DataTable()
      }, 1000)
    },
  },
}
</script>

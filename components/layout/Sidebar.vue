<template>
    <!-- <div class="sidebar-wrapper" data-simplebar="true"> -->
    <div class="sidebar-wrapper">
        <div class="sidebar-header">
            <div>
                <img src="~/assets/logo.png" class="logo-icon" alt="logo icon">
            </div>
            
            <div class="toggle-icon ms-auto"><i class='bx bx-arrow-to-left'></i>
            </div>
        </div>
        <!--navigation-->
        <ul class="metismenu" id="menu">
            <li>
                <Nuxt-link to="/">
                    <div class="parent-icon"><i class='bx bx-home-circle'></i>
                    </div>
                    <div class="menu-title">Dashboard</div>
                </Nuxt-link>
            </li>
            <li>
                <Nuxt-link to="/pelanggan">
                    <div class="parent-icon"><i class='lni lni-users'></i>
                    </div>
                    <div class="menu-title">Data Pelanggan</div>
                </Nuxt-link>
            </li>
            <li>
                <Nuxt-link to="/paket-internet">
                    <div class="parent-icon"><i class='lni lni-dropbox'></i>
                    </div>
                    <div class="menu-title">Paket Internet</div>
                </Nuxt-link>
            </li>
            <li>
                <Nuxt-link to="/ip-pool">
                    <div class="parent-icon"><i class='bx bx-bar-chart-square'></i>
                    </div>
                    <div class="menu-title">IP Pool</div>
                </Nuxt-link>
            </li>
            <li>
                <Nuxt-link to="/config-olt">
                    <div class="parent-icon"><i class='bx bx-terminal'></i>
                    </div>
                    <div class="menu-title">Config OLT</div>
                </Nuxt-link>
            </li>

            <li>
                <Nuxt-link to="/billing-pembayaran">
                    <div class="parent-icon"><i class='bx bx-cart-alt'></i>
                    </div>
                    <div class="menu-title">Billing Pembayaran</div>
                </Nuxt-link>
            </li>

            <li>
                <Nuxt-link to="/notif-sender">
                    <div class="parent-icon"><i class='bx bx-paper-plane'></i>
                    </div>
                    <div class="menu-title">Send Notifkasi</div>
                </Nuxt-link>
            </li>

            <li>
                <Nuxt-link to="/config-billing">
                    <div class="parent-icon"><i class='bx bx-infinite'></i>
                    </div>
                    <div class="menu-title">Config ApiKey Billing</div>
                </Nuxt-link>
            </li>

            <li>
                <Nuxt-link to="/manajemen-menu">
                    <div class="parent-icon"><i class='bx bx-list-minus'></i>
                    </div>
                    <div class="menu-title">Manajemen Menu</div>
                </Nuxt-link>
            </li>
            
        </ul>
        <!--end navigation-->
    </div>
</template>

<script>
export default{

}
</script>
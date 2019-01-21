<template>
  <v-app>
    <Navbar/>

    <v-content style="padding-left: 0; padding-right: 0">
      <child/>
    </v-content>

    <v-footer
      class="pa-3"
      inset
      light>
      <div>All rights reserved</div>
      <v-spacer/>
      <div>&copy; {{ new Date().getFullYear() }}</div>
    </v-footer>

    <DownloadsBottomSheet/>
    <ModalHotKeys/>
  </v-app>
</template>

<script>
export default {
  middleware: 'auth',
  name: 'MainLayout',

  components: {
    Navbar: () => import('~/components/Navbar'),
    ModalHotKeys: () => import('~/components/ModalHotKeys'),
    DownloadsBottomSheet: () => import('~/components/DownloadsBottomSheet')
  },

  data: () => ({
    title: window.config.appName
  })
}
</script>

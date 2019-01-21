<template>
  <el-menu
    class="el-menu-demo"
    mode="horizontal"
    :router="true"
  >
    <el-menu-item
      index="1"
      :route="{ name: 'products' }"
    >
      Products
    </el-menu-item>
    <el-menu-item
      index="2"
      :route="{ name: 'users' }"
    >
      users
    </el-menu-item>
    <el-menu-item

      index="3"
      disabled
    >
      Info
    </el-menu-item>
  </el-menu>
</template>
<script>
export default {
  data () {
    return {

    }
  },
  methods: {

  }
}
</script>

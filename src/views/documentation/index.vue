<template>
  <div class="app-container documentation-container">
    <dropdown-menu style="float:left;margin-left:50px;" title='demo列表' :items='articleList'></dropdown-menu>
  </div>
</template>
<script>
import DropdownMenu from '@/components/Share/dropdownMenu'

export default {
  name: 'documentation',
  components: { DropdownMenu },
  data() {
    return {
      articleList: [
        { title: 'demo1', href: 'javascript:void(alert("demo1"))' },
        { title: 'demo2', href: 'javascript:void(alert("demo2"))' },
        { title: 'demo3', href: 'javascript:void(alert("demo3"))' }
      ]
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.documentation-container {
  margin: 50px;
  .document-btn {
    float: left;
    margin-left: 50px;
    vertical-align: middle;
    display: block;
    cursor: pointer;
    background: black;
    color: white;
    height: 60px;
    width: 200px;
    line-height: 60px;
    font-size: 20px;
    text-align: center;
  }
}
</style>

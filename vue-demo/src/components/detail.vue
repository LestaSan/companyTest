<template>
  <Row>
    <Col span="8">
      <Menu :theme="theme2">
        <Submenu name="1">
          <template slot="title">
            内容管理
          </template>
          <MenuItem name="1-1" to="/detail/content/article">文章管理</MenuItem>
          <MenuItem name="1-2" to="/detail/content/comment">评论管理</MenuItem>
          <MenuItem name="1-3" to="/detail/content/report">举报管理</MenuItem>
        </Submenu>
        <Submenu name="2">
          <template slot="title">
            用户管理
          </template>
          <MenuItem name="2-1" to="/detail/users/newUsers">新增用户</MenuItem>
          <MenuItem name="2-2" to="/detail/users/activeUsers">活跃用户</MenuItem>
        </Submenu>
        <Submenu name="3">
          <template slot="title">
            统计分析
          </template>
          <MenuGroup title="使用">
            <MenuItem name="3-1" to="/detail/statistic/increase">新增和启动</MenuItem>
            <MenuItem name="3-2" to="/detail/statistic/active">活跃分析</MenuItem>
            <MenuItem name="3-3" to="/detail/statistic/time">时段分析</MenuItem>
          </MenuGroup>
          <MenuGroup title="留存">
            <MenuItem name="3-4" to="/detail/statistic/stay">用户留存</MenuItem>
            <MenuItem name="3-5" to="/detail/statistic/lose">流失用户</MenuItem>
          </MenuGroup>
        </Submenu>
      </Menu>
      <Menu :theme="theme2">
        <Submenu name="1">
          <template slot="title">
            内容管理
          </template>
          <MenuItem name="1-1">文章管理</MenuItem>
          <MenuItem name="1-2">评论管理</MenuItem>
          <MenuItem name="1-3">举报管理</MenuItem>
        </Submenu>
        <Submenu name="2">
          <template slot="title">
            用户管理
          </template>
          <MenuItem name="2-1">新增用户</MenuItem>
          <MenuItem name="2-2">活跃用户</MenuItem>
        </Submenu>
        <Submenu name="3">
          <template slot="title">
            统计分析
          </template>
          <MenuGroup title="使用">
            <MenuItem name="3-1">新增和启动</MenuItem>
            <MenuItem name="3-2">活跃分析</MenuItem>
            <MenuItem name="3-3">时段分析</MenuItem>
          </MenuGroup>
          <MenuGroup title="留存">
            <MenuItem name="3-4">用户留存</MenuItem>
            <MenuItem name="3-5">流失用户</MenuItem>
          </MenuGroup>
        </Submenu>
      </Menu>
      <Menu :theme="theme2">
        <Submenu name="1">
          <template slot="title">
            内容管理
          </template>
          <MenuItem name="1-1">文章管理</MenuItem>
          <MenuItem name="1-2">评论管理</MenuItem>
          <MenuItem name="1-3">举报管理</MenuItem>
        </Submenu>
        <Submenu name="2">
          <template slot="title">
            用户管理
          </template>
          <MenuItem name="2-1">新增用户</MenuItem>
          <MenuItem name="2-2">活跃用户</MenuItem>
        </Submenu>
        <Submenu name="3">
          <template slot="title">
            统计分析
          </template>
          <MenuGroup title="使用">
            <MenuItem name="3-1">新增和启动</MenuItem>
            <MenuItem name="3-2">活跃分析</MenuItem>
            <MenuItem name="3-3">时段分析</MenuItem>
          </MenuGroup>
          <MenuGroup title="留存">
            <MenuItem name="3-4">用户留存</MenuItem>
            <MenuItem name="3-5">流失用户</MenuItem>
          </MenuGroup>
        </Submenu>
      </Menu>
    </Col>
    <router-view/>
  </Row>
  
</template>
<script>
export default {
  name: 'detail',
  data () {
    return {
      theme2: 'dark'
    }
  }
}
</script>

<style>

</style>

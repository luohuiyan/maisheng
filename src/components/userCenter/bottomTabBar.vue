<template>
  <div>
    <div class="tabBar">
      <ul>
        <li>
          <router-link to="">
            <span><i class="iconfont">&#xe6ea;</i></span>
            <p>入金</p>
          </router-link>
        </li>
        <li>
          <router-link to="">
            <span><i class="iconfont">&#xe675;</i></span>
            <p>出金</p>
          </router-link>
        </li>
        <li>
          <router-link to="/userCenter">
            <span><i class="iconfont inMoney">&#xe600;</i></span>
            <p>分类</p>
          </router-link>
        </li>
        <li>
          <router-link to="">
            <span><i class="iconfont">&#xe6f3;</i></span>
            <p>个人</p>
          </router-link>
        </li>
        <li>
          <router-link to="">
            <span><i class="iconfont">&#xe68c;</i></span>
            <p>设置</p>
          </router-link>
        </li>
      </ul>
    </div>
    <div style="height: 50px;"></div>
  </div>
</template>


<script>
  export default {
      name:'bottomTabBar',
    data(){
      return{
      }
    },

  }
</script>
<style scoped>
  .tabBar{
    position: fixed;
    width:100%;
    left:0;
    bottom:0;
    z-index:1000;
  }
.tabBar ul{
  overflow: hidden;
  background: #f8f8f9;
  height:50px;
  border-top:1px solid #b2b2b2;
  font-size:14px;
}
  .tabBar li{
    float: left;
    width:20%;
    text-align: center;
  }
.tabBar li i{
  font-size:22px;
}
.inMoney{
  font-size:18px !important;
}
  .tabBar li span{
    display: block;
    height:27px;
    padding-top:5px;
  }
  .tabBar li a{
    color: #7a7e83 ;
  }
.router-link-active{
  color: #00b9e4 !important;
}


</style>

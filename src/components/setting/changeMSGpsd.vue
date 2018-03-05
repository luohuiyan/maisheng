<template>
    <div class="dataEdit">
      <div class="registerTab">
        <span class="registerReturn" @click='$router.history.go(-1)'>
          <router-link to=""><i class="iconfont">&#xe604;</i></router-link>
        </span>
        <p class="finishedEdit"><router-link to="">完成</router-link></p>
      </div>
      <div class="datas commonLoginPd">
        <form action="">
          <div class="inputContainer">
            <p class="dataCue">原密码</p>
            <input type="password" class="commonInput" placeholder="请输入原密码">
          </div>
          <div class="inputContainer">
            <p class="dataCue">新密码</p>
            <input type="password" class="commonInput" placeholder="请输入新密码">
          </div>
          <div class="inputContainer">
            <p class="dataCue">确认新密码</p>
            <input type="password" class="commonInput" placeholder="请确认新密码">
          </div>
        </form>
      </div>
      <tabbar></tabbar>
    </div>
</template>
<style scoped>
  .finishedEdit{
    position: fixed;
    right:15px;
    top:12px;
    font-size:16px;
    z-index:100;
  }
.finishedEdit a{
  color: #00b9e4;
}
</style>
<script>
  import tabbar from '../userCenter/bottomTabBar.vue'
  export default {
    name:'changeMSGpsd',
    components:{
      tabbar
    },
    data () {
      return {

      }

    },
    methods: {

    },
    mounted:function () {

    }
  }


</script>

<template>
    <div class="dataEdit">
      <div class="registerTab">
        <span class="registerReturn" @click='$router.history.go(-1)'>
          <router-link to=""><i class="iconfont">&#xe604;</i></router-link>
        </span>
      </div>
      <div class="datas commonLoginPd">
        <form action="">
          <div class="inputContainer">
            <p class="dataCue">新的手机号码</p>
            <input type="number" class="commonInput" placeholder="请填写新的手机号码">
          </div>

          <p class="commonBtn BTNtwo">
            <router-link to="">完成</router-link>
          </p>
        </form>
      </div>
      <tabbar></tabbar>
    </div>
</template>
<style scoped>
  .BTNtwo{
    -webkit-box-shadow: none    ;
    -moz-box-shadow: none    ;
    box-shadow: none    ;
  }
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
    name:'changePhoneDone',
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

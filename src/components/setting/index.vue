<template>
    <div class="setting">
      <rightTab></rightTab>
      <div class="setCon">
        <ul>
          <li>
            <router-link to="">
              <span>手机号</span>
              <p>
                <b>12345678901</b>
                <i class="iconfont">&#xe604;</i>
              </p>
            </router-link>
          </li>
          <li>
            <router-link to="">
              <span>修改MT4密码</span>
              <p>
                <i class="iconfont">&#xe604;</i>
              </p>
            </router-link>
          </li>
          <li>
            <router-link to="">
              <span>修改MSG密码</span>
              <p>
                <i class="iconfont">&#xe604;</i>
              </p>
            </router-link>
          </li>
        </ul>
        <button class="returnLogin">退出登录</button>
      </div>
      <!--解绑银行卡-->
      <div class="shadow">
        <div class="shadowCon addLate">
          <h3>确认退出MSG账户？</h3>
          <span class="sure"><router-link to="/">确认退出</router-link></span>
          <span class="cancel">取消</span>
        </div>
      </div>


      <tabbar></tabbar>
    </div>
</template>
<style scoped>

  .shadow{
    z-index:10000;
  }
.returnLogin{
  display: block;
  height:45px;
  line-height:45px;
  text-align: center;
  color: #000;
  font-size:14px;
  width:100%;
  margin-top:30px;
  background: #fff;
  border-top:1px solid #e5e5e5;
  border-bottom:1px solid #e5e5e5;
}
  .shadowCon{
    text-align: center;
  }
  .shadowCon h3{
    font-weight:normal;
    font-size:16px;
    color: #888888;
    height:65px;
    line-height:65px;
    border-bottom:1px solid #d9d9d9;
  }
  .sure{
    font-size:18px;
    height:60px;
    line-height:54px;
    border-bottom:6px solid #ececec;
    display: block;
    width:100%;
  }
  .sure a{
    display: block;
    width:100%;
    height:100%;
    color: #e64845;
  }
  .cancel{
    font-size:18px;
    height:50px;
    line-height:50px;
    color: #000;
    display: block;
  }



</style>
<script>
  import rightTab from '../userCenter/rightTab.vue'
  import tabbar from '../userCenter/bottomTabBar.vue'

  export default {
    name: 'setting',
    components : {
      rightTab,tabbar
    },
    data () {
      return {

      }
    },
    mounted:function () {
      $(function () {
        $('.setting').css({'background':'#f5f5f9',minHeight:$(window).height()});



      })
    }
  }
</script>


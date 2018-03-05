<template>
    <div class="register1">
        <div class="registerTab">
            <div class="tabsList">
              <p class="regTab1 current"><span></span></p>
              <p class="regTab2 current"><span></span></p>
              <p class="regTab3 current"><span></span></p>
              <p class="regTab4 current"><span></span></p>
            </div>
        </div>
        <div class="successdPart">
          <div class="successdTop">
            <span class="gou"><img src="../../assets/login/gou.png" class="img_zoom"></span>
            <h3>真实账户注册成功</h3>
            <p>感谢您选择MSG平台，您的交易账户信息我们已发送到<br>阁下的邮箱，请注意查收，祝阁下交易愉快！</p>
          </div>
          <div class="successdBottom">
            <p class="startText">使用全球交易系统MetaTrader 4开始你的交易</p>
            <p class="commonBtn btnContainer">
              <router-link to="">下载MT4</router-link>
            </p>
            <p class="commonBtn BTNtwo">
              <router-link to="">MT4使用指南</router-link>
            </p>
            <p class="loginMSG">
              <router-link to="/">登录MSG</router-link>
            </p>
          </div>
        </div>

      <p class="copyBottom">Copyright © 2017 MASTER SELECT GROUP LIMITED. </p>
    </div>
</template>
<script>
  export default {
    name: 'registerRealSuccess',
    components : {
    },
    data () {
      return {

      }
    }
  }
</script>
<style scoped>
.regRealCount{
  position: absolute;
  right:20px;
  top:20px;
  font-size:14px;
}
.regRealCount a{
  color: #00b9e4;
}
.btnContainer{
  margin-top:20px;
}
  .loginMSG{
    padding-top:15px;
    padding-bottom:70px;
    text-align: center;
    font-size:16px;
  }
.loginMSG a{
  color: #00b9e4;
}

</style>


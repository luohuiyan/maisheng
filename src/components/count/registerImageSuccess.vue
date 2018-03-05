<template>
    <div class="register1">
        <div class="registerTab">
            <span class="registerReturn">
              <router-link to="/"><i class="iconfont">&#xe604;</i></router-link>
            </span>
            <span class="regRealCount">
              <router-link to="/">注册真实账户</router-link>
            </span>
        </div>
        <div class="successdPart">
          <div class="successdTop">
            <span class="gou"><img src="../../assets/login/gou.png" class="img_zoom"></span>
            <h3>模拟账户注册成功</h3>
            <p>模拟账户的有效期为申请成功后即日起15天的试用期</p>
          </div>
          <div class="successdBottom">
            <p class="startText">使用全球交易系统MetaTrader 4开始你的交易</p>
            <p class="commonBtn btnContainer">
              <router-link to="">下载MT4</router-link>
            </p>
            <p class="commonBtn BTNtwo">
              <router-link to="">MT4使用指南</router-link>
            </p>
          </div>
        </div>

      <p class="copyBottom" style="position: fixed;left:10px;bottom:10px;">Copyright © 2017 MASTER SELECT GROUP LIMITED. </p>
    </div>
</template>
<script>
  export default {
    name: 'registerImageSuccess',
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
</style>


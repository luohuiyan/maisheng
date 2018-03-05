<template>
    <div class="register1">
        <div class="registerTab">
            <span class="registerReturn">
              <router-link to="/register1"><i class="iconfont">&#xe604;</i></router-link>
            </span>
            <div class="tabsList">
              <p class="regTab1 current"><span></span></p>
              <p class="regTab2 current"><span></span></p>
              <p class="regTab3"><span></span></p>
              <p class="regTab4"><span></span></p>
            </div>
        </div>
        <div class="commonLoginPd">
            <h3 class="registerTitle">安全注册MSG真实账户</h3>
            <h4 class="titleH4">法律声明</h4>
            <p class="lowCue">本网站的所有者，承诺保护您的在线隐私权。请您仔细阅读下列声明以便了解您在本网站登录，注册，以及接受本网站服务时，您的个人信息将会得到的保护政策。本网站将对您所提供的资料进行严格的管理及保护，并将使用相应的技术，防止您的个人资料丢失、被盗用或被篡改。个人信息的共享及披露一般情况下，在未得到您的同意之前，您的任何个人信息将不会被提供给任何无关的第三方。但在下列情况，本网站会将您的个人信息提供给有关的第三方，同时不承担任何责任：本网站的某些服务需由一个合作伙伴(如代理公司、提供相关技术服务的公司、运输公司、 邮寄公司、提供奖品的公司等)提供或共同提供。</p>
          <p class="agreeLaws">
            <label for="agreeLaws">
              <input type="checkbox" id="agreeLaws" checked>
              本人已阅读并同意<a href="">《法律声明》</a><a href="">《使用条款》</a>
            </label>
          </p>
          <div class="btnOter">
            <p class="commonBtn"><router-link to="/registerData">下一步</router-link></p>
          </div>
        </div>
      <p class="copyBottom">Copyright © 2017 MASTER SELECT GROUP LIMITED. </p>
    </div>
</template>
<script>
  export default {
    name: 'registerLaw',
    components : {
    },
    data () {
      return {

      }
    }


  }

</script>
<style scoped>
.registerTitle{
  font-size:22px;
  color: #333;
  height:80px;
  font-weight:normal;
}
.titleH4{
  font-weight:normal;
  font-size:18px;
  color: #333;
  height:30px;
}
  .lowCue{
    font-size:14px;
    color: #888888;
    line-height:22px;
    text-align: justify;
  }
.agreeLaws{
  padding-top:15px;
  font-size:12px;
  color: #00cfff;
}
.agreeLaws a{
  color:  #00cfff;
}
.agreeLaws input{
  position: relative;
  top:2px;
}
  .copyBottom{
    color: #888888;
    font-size:12px;
    text-align: center;
    padding-bottom:15px;
  }

</style>


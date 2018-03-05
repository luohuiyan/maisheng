<template>
    <div class="withdrawGuide">
      <rightTab></rightTab>
      <div class="registerTab">
        <span class="registerReturn" @click='$router.history.go(-1)'>
          <router-link to=""><i class="iconfont">&#xe604;</i></router-link>
        </span>
      </div>
      <div class="guideCon">
        <ul class="moneyGuideList">
          <li>
            <p><b>步骤1：</b>登录个人“账户中心”</p>
            <span>
                <img src="../../assets/images/chargeguide1.jpg" class="img_zoom">
              </span>
          </li>
          <li>
            <p><b>步骤2：</b>在“账户中心”页面底部选择“在线出金”</p>
            <span>
                <img src="../../assets/images/withdrawguide1.jpg" class="img_zoom">
              </span>
          </li>
          <li>
            <p><b>步骤3：</b>出金页面中输入您的出金金额，和选择您
              的出金方式</p>
            <span>
                <img src="../../assets/images/withdrawguide2.jpg" class="img_zoom">
              </span>
          </li>
          <li>
            <p><b>步骤4：</b>根据您选择的出金方式完成出金申请，申
              请成功后，出金金额将在1个工作日内到账</p>
            <span>
                <img src="../../assets/images/withdrawguide3.jpg" class="img_zoom">
              </span>
          </li>
        </ul>
      </div>







    </div>
</template>
<style scoped>
  .withdrawGuide .registerTab{
    left: 0;
    top:0;
    position: fixed;
    z-index: 1001;
    width: 100px;
    height: 45px;
    padding: 0;
  }
  .registerReturn{
    top:12px;
  }
.guideCon{
  padding:40px 15px 20px;
}
.moneyGuideList li {
  padding-bottom:40px;
}
.moneyGuideList li p{
  font-size:15px;
  color:#666666;
  line-height:24px;
  padding-bottom:32px;
}
.moneyGuideList li p b{
  font-size:18px;
  color: #333;
  font-weight:normal;
}
  .moneyGuideList li span{
    display: block;
    width:80%;
    margin:0 auto;
    -webkit-box-shadow: 0 6px 40px rgba(115, 139, 210,.5) ;
    -moz-box-shadow: 0 6px 40px rgba(115, 139, 210,.5) ;
    box-shadow: 0 6px 40px rgba(115, 139, 210,.5) ;
  }

</style>
<script>
  import rightTab from '../userCenter/rightTab.vue'
  export default {
    name:'withdrawGuide',
    components:{
      rightTab
    },
    data () {
      return {

      }

    },
    methods: {

    },
    mounted:function () {
      $('.withdrawGuide').css({'background':'#f5f5f9',minHeight:$(window).height()});


    }
  }
</script>

<template>
    <div class="personalData">
      <h1><img src="../../assets/images/userLogo.png" width='35'></h1>
      <div class="userData">
        <div class="avater">
          <span class="avaterImg"><img src="../../assets/images/userLogo.png" class="img_zoom"></span>
          <h3>杨美人</h3>
          <p class="userCountry">China</p>
          <p class="shiming">已实名认证</p>
          <p class="userCount">88660000</p>
          <span class="edit"><router-link to='/dataEdit'>编辑个人资料</router-link></span>
        </div>
      </div>
      <div class="leftMoney">
        <div>
          <p>3444444.00</p>
          <span class="no">账户余额($)</span>
        </div>
        <div>
          <p>0</p>
          <span class="no">信用额($)</span>
        </div>
        <div>
          <p>0</p>
          <span class="no">净值($)</span>
        </div>
      </div>
      <ul class="payDetail">
        <li>
          <span>手机号</span>
          <p>123456789545</p>
        </li>
        <li>
          <span>邮箱</span>
          <p>123@33qq.com</p>
        </li>
        <li>
          <span>身份证件</span>
          <p>ddgdgfd4445465643656</p>
        </li>
      </ul>


      <tabbar></tabbar>
    </div>
</template>
<style scoped>
  .personalData{
    padding-bottom:30px;
  }
.personalData h1{
  padding:10px 0 0 15px;
  background: #fff;
}
.avaterImg{
  top:20px;
}
.avater{
  padding-left:135px;
}
  .userData{
    padding-left:35px;
    height:190px;
    background: #fff;
    border-bottom:0;
  }
.edit{
  display: inline-block;
  padding:0 10px;
  height:35px;
  line-height:35px;
  text-align: center;
  background: #00cfff;
  -webkit-border-radius:5px;
  -moz-border-radius:5px;
  border-radius:5px;
  font-size:15px;
}
.edit a{
  color: #fff;
  display: block;
  height:100%;
}
.leftMoney{
  overflow: hidden;
  border-top:1px solid #e5e5e5;
  border-bottom:1px solid #e5e5e5;
  background: #fff;
}
.leftMoney div{
  float: left;
  width:33.33333%;
  text-align: center;
  padding:20px 0;
  border-right:1px solid #e5e5e5;
}
.leftMoney div:nth-last-of-type(1){
  border-right:0;
}
.leftMoney div p{
  font-size:20px;
  color: #000;
  height:30px;
}
.leftMoney div span{
  font-size:13px;
}






</style>
<script>
  import tabbar from '../userCenter/bottomTabBar.vue'
  export default {
    name:'positionOrder',
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
      $(function () {
        $('.personalData').css({'background':'#f5f5f9',minHeight:$(window).height()});

      })
    }
  }
</script>

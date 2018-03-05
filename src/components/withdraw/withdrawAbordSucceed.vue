<template>
    <div class="fastPay">
      <right-tab></right-tab>
      <div class="showNums">
        <p class="inputMoneyWord"><i class="iconfont">&#xe605;</i>提现至海外</p>
        <div class="moneyNums">
          <span>$</span>
          <b>0.00</b>
        </div>
        <p class="zhesuan textCenter">人民币为 &yen;1234</p>
      </div>
      <div class="succeedWord">
        <p>您的申请已提交成功，金额在1个工作日内到账。</p>
        <p class="tel">如有疑问可拨打客服热线 <a href="tel:400-1209125">400-1209125</a></p>
      </div>



      <tabbar></tabbar>
    </div>
</template>
<style scoped>
   .moneyNums{
    position: relative;
  }
.moneyNums input{
  position: absolute;
  width:100%;
  left:0;
  bottom:0;
  background: none;
  color: #fff;
  font-size: 60px;
  padding-left: 20px;
  font-weight: normal;
}
.moneyNums span{
  position: absolute;
  bottom:10px;
  top:inherit;
}
.textCenter{
  text-align: center;
}
.inputMoneyWord i{
  color: #0071bc;
  font-size:20px;
  padding-right:5px;
  position: relative;
  top:2px;
}
   .moneyNums{
  text-align: center;
}
   .textCenter{
     padding-top:0;
   }
   .moneyNums span{
     bottom:12px;
   }
  .showNums{
    height:155px;
  }
  .moneyNums b{
    font-size:50px;
  }


</style>
<script>
  import rightTab from '../userCenter/rightTab.vue'
  import tabbar from '../userCenter/bottomTabBar.vue'
  export default {
    name:'fastPay',
    components:{
      rightTab,tabbar
    },
    data () {
      return {

      }
    },
    methods: {

    },
    mounted:function () {
      $(function () {
        $('.fastPay').css({'background':'#f5f5f9',minHeight:$(window).height()});

      })
    }
  }

</script>

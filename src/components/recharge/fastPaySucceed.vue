<template>
    <div class="fastPay">
      <right-tab></right-tab>
      <div class="showNums">
        <p class="inputMoneyWord"><img src="../../assets/images/fastPay.png" width='23'>快捷支付</p>
        <div class="moneyNums">
          <span>$</span>
          <b>0.00</b>
        </div>
        <p class="zhesuan textCenter">人民币为 &yen;1234</p>
      </div>
      <ul class="payDetail">
        <li>
          <span>商家</span>
          <p>Master Select Group Limited</p>
        </li>
        <li>
          <span>商品名称</span>
          <p>MT4入金充值</p>
        </li>
        <li>
          <span>订单号</span>
          <p>ddgdgfd4445465643656</p>
        </li>
        <li>
          <span>创建时间</span>
          <p>12:22:22</p>
        </li>
        <li>
          <span>更多</span>
          <p><router-link to="">出入金记录</router-link></p>
        </li>
      </ul>
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
  .inputMoneyWord img{
    float: left;
    margin-right:5px;
    position: relative;
    top:-1px;
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

<template>
    <div class="rechargeIndex">
      <right-tab></right-tab>
      <div class="showNums">
        <p class="inputMoneyWord">请输入金额（美元）</p>
        <div class="moneyNums bdb">
          <input type="number" value="100">
          <span>$</span>
        </div>
        <p class="zhesuan">折算后人民币为 &yen;1234</p>
      </div>
      <div class="chooseMoney partPad">
        <h3 class="commonTitle">入金选择</h3>
        <ul class="chooseList">
          <li>
            <p class="nums">$1000</p>
            <p class="zhesuanNums">人民币：1234元</p>
          </li>
          <li class="ftR">
            <p class="nums">$2000</p>
            <p class="zhesuanNums">人民币：1234元</p>
          </li>
          <li class="noMG">
            <p class="nums">$5000</p>
            <p class="zhesuanNums">人民币：1234元</p>
          </li>
          <li class="ftR noMG">
            <p class="nums">$10000</p>
            <p class="zhesuanNums">人民币：1234元</p>
          </li>
        </ul>
      </div>
      <div class="payStyle partPad">
        <h3 class="commonTitle">支付方式选择</h3>
        <ul>
          <li>
            <router-link to="">
              <span class="adPD"><img src="../../assets/images/fastPay.png" width='35'></span>
              <p>快捷支付</p>
            </router-link>
          </li>
          <li>
            <a href="">
              <span><img src="../../assets/images/payPal.jpg" width="43"></span>
              <p>PayPal支付</p>
            </a>
          </li>
        </ul>



      </div>
      <tabbar></tabbar>
    </div>
</template>
<style scoped>
.chooseList{
  overflow: hidden;
}
.chooseList li{
  line-height:22px;
  float: left;
  width:48%;
  border:1px solid #00b9e4;
  padding:10px 0;
  color: #00b9e4;
  text-align: center;
  margin-bottom:10px;
  font-size:12px;
  -webkit-border-radius:5px;
  -moz-border-radius:5px;
  border-radius:5px;
}
.chooseList li.current{
  background: #00b9e4;
  color: #fff;
}
.nums{
  font-size:18px;
  font-weight:bold;
}
.commonTitle{
  position: relative;
}
.commonTitle span{
  position: absolute;
  right:0;
  top:0;
  font-size:12px;
  color: #9e9e9e;
}
.commonTitle span i{
  display: inline-block;
  -webkit-transform: rotate(180deg);
  -moz-transform: rotate(180deg);
  -ms-transform: rotate(180deg);
  -o-transform: rotate(180deg);
  transform: rotate(180deg);
}
.payStyle ul{
  padding-top:15px;
  padding-bottom:40px;
}
.payStyle ul {
  overflow: hidden;
}
.payStyle ul li{
  float: left;
  width:35%;
  text-align: center;
  font-size:14px;
}
.payStyle ul li span{
  display: block;
  height:45px;
  overflow: hidden;
}
.payStyle ul li a{
  color: #333;
}
.adPD{
  padding-top:2px;
}
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



</style>
<script>
  import rightTab from '../userCenter/rightTab.vue'
  import tabbar from '../userCenter/bottomTabBar.vue'
  export default {
    name:'rechargeIndex',
    components:{
      rightTab,tabbar
    },
    data () {
      return {

      }
    },
    methods: {

    }
  }
</script>

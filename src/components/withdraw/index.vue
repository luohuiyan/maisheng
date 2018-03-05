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
        <h3 class="commonTitle">出金方式</h3>
        <ul class="withDrawStyle">
          <li>
            <router-link to='/withdrawCard'>
              <span><i class="iconfont">&#xe61c;</i></span>
              <p>提现至银行卡</p>
            </router-link>
          </li>
          <li class="ftR">
            <router-link to='/withdrawAbord'>
              <span><i class="iconfont">&#xe605;</i></span>
              <p>提现至银行卡</p>
            </router-link>
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
.withDrawStyle{
  overflow: hidden;
}
.withDrawStyle li{
  float: left;
  width:48%;
  text-align: center;
  border:1px solid #00b9e4;
  -webkit-border-radius:3px;
  -moz-border-radius:3px;
  border-radius:3px;
  font-size:14px;
}
.withDrawStyle li a{
  color: #00b9e4;
  display: block;
  padding:15px 0;
}
.withDrawStyle li a i{
  color: #0071bc;
  font-size:30px;
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

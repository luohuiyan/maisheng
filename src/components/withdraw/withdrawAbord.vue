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
      <div class="withdrawDetail">
        <ul>
          <li>
            <input type="text" placeholder="开户银行">
          </li>
          <li>
            <input type="text" placeholder="银行卡号">
          </li>
          <li>
            <input type="text" placeholder="银行代号">
          </li>
          <li>
            <input type="text" placeholder="银行地址">
          </li>
        </ul>
      </div>
      <div class="fastBtns">
        <button><router-link to="/withdrawCardSucceed">提交申请</router-link></button>
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

.fastBtns{
  padding:50px 15px 0;
}
   .fastBtns button{
     display: block;
     text-align: center;
     font-size:15px;
     background: #00b9e4;
     width:100%;
     height:42px;
     line-height:42px;
     -webkit-border-radius:5px;
     -moz-border-radius:5px;
     border-radius:5px;
     opacity:.5;
   }
   .fastBtns button a{
     display: block;
     height:100%;
     color: #fff;
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

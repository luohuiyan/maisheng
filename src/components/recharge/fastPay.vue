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
      <div class="phomeYZM">
        <input type="number" placeholder="请输入验证码">
        <span class="sendYZM">发送验证码</span>
      </div>
      <div class="fastBtns">
        <button><router-link to="/fastPaySucceed">确认支付</router-link></button>
        <p class="changeCard">
          使用 <span class="cardName">中国工商银行(1234)</span>付款, <span class="change">更换</span>
        </p>
      </div>
      <div class="shadow">
        <div class="shadowCon addLate">
          <h3><span class="cardClose"><i class="iconfont">&#xe61a;</i></span>选择银行卡</h3>
          <ul>
            <li>
              <span class="cardIcon"></span>
              <p>中国工商银行储蓄卡(1234)</p>
              <span class="cardGou"><img src="../../assets/images/gou.png" width='25'></span>
            </li>
            <li>
              <span class="cardIcon"></span>
              <p>中国工商银行储蓄卡(1234)</p>
              <span class="cardGou"><img src="../../assets/images/gou.png" width='25'></span>
            </li>
          </ul>
          <div class="addCardLink">
            <router-link to="">
              <i class="iconfont cardICON">&#xe61c;</i>
              添加银行卡
              <span class="arrowR"><i class="iconfont cardICON">&#xe604;</i></span>
            </router-link>
          </div>
        </div>
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
.phomeYZM{
  height:45px;
  line-height:45px;
  background: #fff;
  border-top:1px solid #e5e5e5;
  border-bottom:1px solid #e5e5e5;
  margin-top:10px;
  overflow: hidden;
  position: relative;
}
.phomeYZM input{
  float: left;
  font-size:16px;
  color: #333;
  line-height:45px;
  padding-left:20px;
}
.sendYZM{
  position: absolute;
  right:20px;
  top:0;
  font-size:14px;
  color: #00b9e4;
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
.changeCard{
  font-size:14px;
  color: #383838;
  text-align: center;
  padding-top:10px;
}
   .changeCard .change{
     color: #00b9e4;
   }
.shadow{
  z-index:3000;
  overflow: hidden;
  display: none;
}
.shadowCon{
  padding-bottom:15px;
}
.shadowCon h3{
  position: relative;
  height:48px;
  line-height:48px;
  text-align: center;
  font-size:18px;
  color: #333;
  font-weight:normal;
  border-bottom:1px solid #ccc;
}
   .shadowCon h3 span{
     position: absolute;
     left:0;
     top:0;
     width:45px;
     padding-left:15px;
     height:100%;
   }
   .shadowCon h3 span i{
     font-size:26px;
     display: inline-block;
     -webkit-transform: rotate(45deg);
     -moz-transform: rotate(45deg);
     -ms-transform: rotate(45deg);
     -o-transform: rotate(45deg);
     transform: rotate(45deg);
     color:#9d9d9d;
   }
   .shadowCon ul{
     padding-left:15px;
   }
.shadowCon li{
  position: relative;
  padding-left:40px;
  height:70px;
  line-height:70px;
  border-bottom:1px solid #ccc;
  font-size:16px;
  color: #333;
}
.cardIcon{
  width:30px;
  height:30px;
  -webkit-border-radius:100%;
  -moz-border-radius:100%;
  border-radius:100%;
  background: #ccc;
  position: absolute;
  left:0;
  top:20px;
}
   .shadowCon li p{
     width:80%;
     height:100%;
     overflow: hidden;
     text-overflow:ellipsis;
     white-space: nowrap;
   }
.cardGou{
  position: absolute;
  right:20px;
  top:4px;
}
.addCardLink{
  margin-left:15px;
  position: relative;
  height:70px;
  line-height:70px;
  border-bottom:1px solid #ccc;
  font-size:16px;
  color: #333;
}
   .addCardLink a{
     display: block;
     height:100%;
     padding-left:40px;
     color: #333;
   }
   .cardICON{
     position: absolute;
     left:5px;
     color: #00b9e4;
     top:0;
     font-size:24px;
   }
.arrowR{
  position: absolute;
  right:45px;
  top:0;
  color: #ccc;
}
   .arrowR i{
     font-size:28px;
     display: inline-block;
     -webkit-transform: rotate(180deg);
     -moz-transform: rotate(180deg);
     -ms-transform: rotate(180deg);
     -o-transform: rotate(180deg);
     transform: rotate(180deg);
     color: #c5c5ca;
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

//    显示隐藏银行卡列表部分
        $('.change').on('click',function () {
          $('.shadow').stop().fadeIn(500);
          $('.shadowCon').addClass('lateY')
        });
        $('.shadow,.cardClose,.shadowCon li').on('click',function () {
          $('.shadow').stop().fadeOut(500);
          $('.shadowCon').removeClass('lateY')
        });
        $('.shadowCon').on('click',function (e) {
          e.stopPropagation();
        });


      })
    }
  }

</script>

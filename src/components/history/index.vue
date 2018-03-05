<template>
    <div class="rechargeHis">
      <div class="registerTab">
          <span class="registerReturn" @click='$router.history.go(-1)'>
            <router-link to=""><i class="iconfont">&#xe604;</i></router-link>
          </span>
          <div class="hisTabs">
            <span><router-link to='/rechargeHis'>入金记录</router-link></span>
            <span><router-link to='/withdrawHis'>出金记录</router-link></span>
          </div>
      </div>
      <div class="hisDetails">
        <p class="dateTime">32分钟前更新</p>
        <ul class="detailList">
          <li>
            <span class="icons"><img src="../../assets/images/fastPay.png" class="img_zoom"></span>
            <div class="listCon">
              <h3>快捷支付</h3>
              <p class="listTime">017-20-20 2:13:16</p>
              <div class="hisMoney">
                <p>$250</p>
                <span class="deal no ">未付款</span>
              </div>
            </div>
          </li>
          <li>
            <span class="icons">
              <img src="../../assets/images/pal.jpg" class="img_zoom">
            </span>
            <div class="listCon">
              <h3>PayPal支付</h3>
              <p class="listTime">017-20-20 2:13:16</p>
              <div class="hisMoney">
                <p>$250</p>
                <span class="deal done ">已付款</span>
              </div>
            </div>
          </li>
        </ul>
        <p class="loadMore">加载更多...</p>
      </div>
      <div class="shadow">
        <div class="shadowCon">
          <ul class="payDetail">
            <li>
              <span>金额</span>
              <p>000.000USD</p>
            </li>
            <li>
              <span>状态</span>
              <p class="done">已支付</p>
            </li>
            <li>
              <span>时间</span>
              <p>2017-09-12 12:23:34</p>
            </li>
            <li>
              <span>入金方式</span>
              <p>快捷支付</p>
            </li>
            <li>
              <span>原因</span>
              <p>无</p>
            </li>
          </ul>

        </div>
      </div>


    </div>
</template>
<style scoped>
.rechargeHis{
  background: #efeff4;
  overflow: hidden;
}
.registerTab{
  background: #fff;
  padding:15px 0;
}
.hisTabs{
  width:65%;
  margin:0 auto;
  height:30px;
  line-height:30px;
  text-align: center;
  border:1px solid #00cfff;
  -webkit-border-radius:4px;
  -moz-border-radius:4px;
  border-radius:4px;
}
.registerReturn{
  top:18px;
}
.hisTabs span{
  float: left;
  width:50%;
  height:100%;
  font-size:14px;
}
.hisTabs span a{
  display: block;
  height:100%;
  color: #00cfff;
}
.hisTabs span a.router-link-active{
    background: #00cfff;
    color: #fff;
  }
.hisDetails{
  margin:15px 20px 30px;
  background: #fff;
  -webkit-border-radius:6px;
  -moz-border-radius:6px;
  border-radius:6px;
  padding:20px;
}
.dateTime{
  color: #8e8e93;
  font-size:12px;
  height:22px;
}
.detailList li{
  position: relative;
  padding-left:60px;
  padding-top:12px;
}
.icons{
  position: absolute;
  left:0;
  top:12px;
  width:45px;
  height:45px;
  -webkit-border-radius:100%;
  -moz-border-radius:100%;
  border-radius:100%;
  text-align: center;
  line-height:45px;
}
.icons i{
  font-size:26px;
  color: #0071bc;
}
.haiwai{
  font-size:30px !important;
}
.bgGray{
  background: #efeff4;
}
.listCon{
  padding-bottom:12px;
  border-bottom:1px solid #e7e7ea;
  position: relative;
}
.listCon h3{
  font-size:15px;
  color: #000;
  font-weight:normal;
  height:25px;
}
.listTime{
  font-size:12px;
  color: #919196;
}
.hisMoney{
  position: absolute;
  right:0;
  top:2px;
}
.hisMoney p{
  font-size:16px;
  color: #000;
  height:22px;
}
.hisMoney span{
  font-size:12px;
  display: block;
}
  .loadMore{
    font-size:14px;
    color: #999;
    padding-top:20px;
    text-align: center;
  }





</style>
<script>
  export default {
    name:'rechargeHis',
    components:{

    },
    data () {
      return {

      }
    },
    methods: {

    },
    mounted:function () {
      $('.rechargeHis').css({minHeight:$(window).height()});
    }
  }
</script>

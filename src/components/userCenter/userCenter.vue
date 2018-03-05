<template>
    <div class="userCenter">
      <div class="bannerContain">
        <mt-swipe :auto="4000">
          <mt-swipe-item><img @load='imageLoaded' src="../../assets/images/banner.jpg" class="img_zoom aa"></mt-swipe-item>
          <mt-swipe-item><img src="../../assets/images/banner.jpg" class="img_zoom"></mt-swipe-item>
          <mt-swipe-item><img src="../../assets/images/banner.jpg" class="img_zoom"></mt-swipe-item>
        </mt-swipe>
      </div>
      <h3 class="userTitle">交易服务</h3>
      <ul class="userTabList">
        <li>
          <router-link to="">
            <span class="imgCon"><img src="../../assets/images/userIcon1.png"></span>
            <p>出入金历史</p>
          </router-link>
        </li>
        <li>
          <router-link to="">
            <span class="imgCon"><img src="../../assets/images/userIcon2.png" ></span>
            <p>历史交易</p>
          </router-link>
        </li>
        <li>
          <router-link to="">
            <span class="imgCon"><img src="../../assets/images/userIcon3.png" ></span>
            <p>银行卡管理</p>
          </router-link>
        </li>
        <li>
          <router-link to="">
            <span class="imgCon"><img src="../../assets/images/userIcon4.png" ></span>
            <p>持仓订单</p>
          </router-link>
        </li>
        <li>
          <router-link to="">
            <span class="imgCon"><img src="../../assets/images/userIcon5.png" ></span>
            <p>下载MT4</p>
          </router-link>
        </li>
        <li>
          <router-link to="">
            <span class="imgCon"><img src="../../assets/images/userIcon6.png" ></span>
            <p>交易指南</p>
          </router-link>
        </li>
      </ul>
      <h3 class="userTitle">推广活动</h3>
      <ul class="userTabList">
        <li>
          <router-link to="">
            <span class="imgCon"><img src="../../assets/images/userIcon7.png" ></span>
            <p>积分商城</p>
          </router-link>
        </li>
        <li>
          <router-link to="">
            <span class="imgCon"><img src="../../assets/images/userIcon8.png" ></span>
            <p>优惠活动</p>
          </router-link>
        </li>
      </ul>
      <h3 class="userTitle">新闻公告</h3>
      <ul class="userTabList">
        <li>
          <router-link to="">
            <span class="imgCon"><img src="../../assets/images/userIcon9.png" ></span>
            <p>公司公告</p>
          </router-link>
        </li>
        <li>
          <router-link to="">
            <span class="imgCon"><img src="../../assets/images/userIcon10.png" ></span>
            <p>帮助中心</p>
          </router-link>
        </li>
        <li>
          <router-link to="">
            <span class="imgCon"><img src="../../assets/images/userIcon11.png" ></span>
            <p>市场新闻</p>
          </router-link>
        </li>
        <li>
          <router-link to="">
            <span class="imgCon"><img src="../../assets/images/userIcon12.png" ></span>
            <p>行情中心</p>
          </router-link>
        </li>
      </ul>
      <tabbar></tabbar>


    </div>
</template>
<style scoped>
.userTitle{
  font-size:14px;
  color: #888888;
  font-weight:normal;
  height:35px;
  line-height:35px;
  padding-left:15px;
  background: #efeff4;
}
.userTabList{
  overflow: hidden;
}
.userTabList li{
  float: left;
  width:33.33333%;
  text-align: center;
  font-size:15px;
}
.userTabList li:nth-of-type(3n) a{
  border-right:0;
}
.userTabList li a{
  display: block;
  height:100%;
  color:#333;
  padding:25px 0;
  border-right:1px solid #efeff4;
  border-bottom:1px solid #efeff4;
}
.imgCon{
  display: block;
  height: 45px;
}
.imgCon img{
  display: inline-block;
  width:50%;
  max-width:58px;
}







</style>
<script>
  import tabbar from './bottomTabBar.vue'

  export default {
    name: 'userCenter',
    components : {
      tabbar
    },
    data () {
      return {
      }

    },
    methods:{
      imageLoaded() {
        $('.bannerContain').height($('.bannerContain img').height())
      }
    }
  }


</script>

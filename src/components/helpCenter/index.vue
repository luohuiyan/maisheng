<template>
    <div class="guide">
      <rightTab></rightTab>

      <div class="registerTab">
        <span class="registerReturn" @click='$router.history.go(-1)'>
          <router-link to=""><i class="iconfont">&#xe604;</i></router-link>
        </span>
      </div>
      <div class="guideList">
        <ul class="guideListUl">
          <li>
            <router-link to="/rechargeGuide">
              <p class="listP clickPart">
                <span>入金指南</span>
                <i class="iconfont">&#xe604;</i>
              </p>
            </router-link>
          </li>
          <li>
            <router-link to="/withdrawGuide">
              <p class="listP clickPart">
                <span>出金指南</span>
                <i class="iconfont">&#xe604;</i>
              </p>
            </router-link>
          </li>
          <li>
            <router-link to="/guideIndex">
              <p class="listP clickPart">
                <span>交易指南</span>
                <i class="iconfont">&#xe604;</i>
              </p>
            </router-link>
          </li>

        </ul>
        <ul class="guideListUl">
          <li>
            <router-link to="/contact">
              <p class="listP clickPart">
                <span>联系方式</span>
                <i class="iconfont">&#xe604;</i>
              </p>
            </router-link>
          </li>
          <li>
            <router-link to="">
              <p class="listP clickPart">
                <span>在线客服</span>
                <i class="iconfont">&#xe604;</i>
              </p>
            </router-link>
          </li>
        </ul>
      </div>

    </div>
</template>
<style scoped>
.registerTab{
  position: fixed;
  z-index:10000;
  padding: 0;
  left: 0;
  top: 0;
  height: 45px;
  width: 100px;
}
.registerReturn{
  top:11px;
}
.guideListUl{
  background: #fff;
  border-top:1px solid #e5e5e5;
}
.listP{
  height:45px;
  line-height:45px;
  overflow: hidden;
  border-bottom:1px solid #e5e5e5;
  padding:0 15px;
  font-size:14px;
  color: #333;
}
.listP i{
  float: right;
  display: inline-block;
  font-size:24px;
  -webkit-transform: rotate(-180deg);
  -moz-transform: rotate(-180deg);
  -ms-transform: rotate(-180deg);
  -o-transform: rotate(-180deg);
  transform: rotate(-180deg);
  color: #999;
  -webkit-transition: transform .5s;
  -moz-transition: transform .5s;
  -ms-transition: transform .5s;
  -o-transition: transform .5s;
  transition: transform .5s;
}
 .guideListUl{
   margin-bottom:15px;
 }
  .guideListUl li a{
    display: block;
  }
</style>
<script>
  import rightTab from '../userCenter/rightTab.vue'
  export default {
    name:'helpcenter',
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
      $(function () {
        $('.guide').css({'background':'#f5f5f9',minHeight:$(window).height()});

      })

    }
  }


</script>

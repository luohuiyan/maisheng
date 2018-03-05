<template>
  <div class="muneList">
    <div class="flag"></div>
    <div class="topBar">
      <span class="tabLogo"><img src="../../assets/images/userLogo.png" width="35"></span>
      <span class="mune"><img src="../../assets/images/mune.png" width='25'></span>
    </div>
    <div class="allList">
      <div class="listContainer">
        <span class="close"><i class="iconfont">&#xe606;</i></span>
        <div class="userData">
          <div class="avater">
            <span class="avaterImg"><img src="../../assets/images/userLogo.png" class="img_zoom"></span>
            <h3>杨美人</h3>
            <p class="userCountry">China</p>
            <p class="shiming">已实名认证</p>
            <p class="userCount">88660000</p>
          </div>
        </div>
        <ul class="listUl">
          <li>
            <p class="mainTab">交易服务 <i class="iconfont">&#xe604;</i></p>
            <div class="smallTab">
              <p>
                <router-link to="">在线入金 <i class="iconfont">&#xe604;</i></router-link>
              </p>
              <p>
                <router-link to="">在线出金 <i class="iconfont">&#xe604;</i></router-link>
              </p>
              <p>
                <router-link to="">出入金历史 <i class="iconfont">&#xe604;</i></router-link>
              </p>
              <p>
                <router-link to="">历史交易 <i class="iconfont">&#xe604;</i></router-link>
              </p>
              <p>
                <router-link to="">银行卡管理 <i class="iconfont">&#xe604;</i></router-link>
              </p>
              <p>
                <router-link to="">持仓订单 <i class="iconfont">&#xe604;</i></router-link>
              </p>
              <p>
                <router-link to="">下载MT4 <i class="iconfont">&#xe604;</i></router-link>
              </p>
              <p>
                <router-link to="">交易指南 <i class="iconfont">&#xe604;</i></router-link>
              </p>
            </div>
          </li>
          <li>
            <p class="mainTab">推广活动 <i class="iconfont">&#xe604;</i></p>
            <div class="smallTab">
              <p>
                <router-link to="">优惠活动 <i class="iconfont">&#xe604;</i></router-link>
              </p>
            </div>
          </li>
          <li>
            <p class="mainTab">新闻广告 <i class="iconfont">&#xe604;</i></p>
            <div class="smallTab">
              <p>
                <router-link to="">公司公告 <i class="iconfont">&#xe604;</i></router-link>
              </p>
              <p>
                <router-link to="">帮助中心 <i class="iconfont">&#xe604;</i></router-link>
              </p>
              <p>
                <router-link to="">市场新闻 <i class="iconfont">&#xe604;</i></router-link>
              </p>
              <p>
                <router-link to="">行情中心 <i class="iconfont">&#xe604;</i></router-link>
              </p>
            </div>
          </li>
        </ul>

      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name:'rightTab',
    data () {
      return {
      }
    },
    methods: {

    },
    mounted:function () {
      $(function () {
//      侧边栏列表展开和隐藏
        $('.mainTab').click(function () {
          $(this).siblings('.smallTab').stop().slideToggle(300);
          $(this).toggleClass('turn')
          $(this).parent().siblings('li').children('.smallTab').stop().slideUp(300);
          $(this).parent().siblings('li').children('.mainTab').removeClass('turn')
        });

//点击展开和收起侧边栏
        $('.mune').on('click',function () {
          $('.allList').stop().fadeIn(500);
          $('.listContainer').addClass('slideMove')
        });
        $('.allList,.close').on('click',function () {
          $('.allList').stop().fadeOut(500);
          $('.listContainer').removeClass('slideMove');
          $('.smallTab').hide()
        })
        $('.listContainer').on('click',function (e) {
          e.stopPropagation();
        });
      })

    }
  }
</script>

<style>
.flag{
  height:45px;
}
.topBar{
  position: fixed;
  height:45px;
  left:0;
  top:0;
  width:100%;
  background: #fff;
  z-index:1000;
}
.tabLogo{
  padding-left:15px;
  position: relative;
  top:6px;
}
.mune{
  position: absolute;
  right:0;
  top:0;
  padding-top:10px;
  width:60px;
  height: 45px;
  text-align: center;
}
.allList{
    position: fixed;
    width:100%;
    height:100%;
    left:0;
    top:0;
    background: rgba(0,0,0,0.3);
    z-index:2000;
    display: none;
  }
.listContainer{
  width:80%;
  height:100%;
  position: fixed;
  right:0;
  top:0;
  background: #fff;
  z-index:2001;
  overflow-x: hidden;
  overflow-y: auto;
  -webkit-transition: transform .5s;
  -moz-transition: transform .5s;
  -ms-transition: transform .5s;
  -o-transition: transform .5s;
  transition: transform .5s;
  -webkit-transform: translate(100%, 0);
  -moz-transform: translate(100%, 0);
  -ms-transform: translate(100%, 0);
  -o-transform: translate(100%, 0);
  transform: translate(100%, 0);
}
.close{
  position: absolute;
  right:3px;
  top:7px;
  width:30px;
  height:30px;
  line-height:30px;
  text-align: center;
}
.close i{
  font-size:25px;
  color: #ccc;
}
.slideMove{
  -webkit-transform: translate(0, 0);
  -moz-transform: translate(0, 0);
  -ms-transform: translate(0, 0);
  -o-transform: translate(0, 0);
  transform: translate(0, 0);
}
.listUl li p{
  height:45px;
  font-size:15px;
  color: #333;
  line-height:45px;
  padding:0 15px;
  position: relative;
  border-bottom:1px solid #e5e5e5;
}
.listUl li p i{
  position: absolute;
  display: inline-block;
  color: #999999;
  right:10px;
  font-size:21px;
  -webkit-transition: transform .5s;
  -moz-transition: transform .5s;
  -ms-transition: transform .5s;
  -o-transition: transform .5s;
  transition: transform .5s;
  -webkit-transform: rotate(180deg);
  -moz-transform: rotate(180deg);
  -ms-transform: rotate(180deg);
  -o-transform: rotate(180deg);
  transform: rotate(180deg);
}
.smallTab{
  display:none;
}
.smallTab a{
  color: #333;
  display: block;
  height:100%;
}
.smallTab p{
  padding-left:30px !important;
}
.turn i{
  -webkit-transform: rotate(270deg) !important;
  -moz-transform: rotate(270deg) !important;
  -ms-transform: rotate(270deg) !important;
  -o-transform: rotate(270deg) !important;
  transform: rotate(270deg) !important;
}



</style>

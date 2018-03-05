<template>
  <div class="login">
    <span class="loginLogo"><img src="../../assets/login/logo.png" width="120"></span>
    <div class="commonLoginPd">
      <form action="">
        <div class="inputContainer">
          <p class="dataCue">
            <i class="iconfont">&#xe6f3;</i>手机号/交易号
          </p>
          <div class="choosePhone">
            <div class="hasBD">
              <input type="tel" class="phoneNumber" autocomplete="off" maxlength="13" name="phone" placeholder="请输入手机号"/>
              <div class="quhao basicQuhao">
                <p>
                  <span class="CT"><span style="display: inline-block" class="iti-flag cn"></span></span>
                  +<span class="QH">86</span>
                </p>
                <i class="iconfont">&#xe60e;</i>
                <input type="hidden" value='86' name='mobile_fiex'>
              </div>
            </div>
            <div class="chooseQuhao">
              <ul>
                <li class="none">
                  <span class="countryName"><span style="display: inline-block" class="countNum"></span><span class="ContentName">China (中国)</span></span>
                  <p>+ <span class="quhaoNum">86</span></p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="inputContainer">
          <p class="dataCue">
            <i class="iconfont">&#xe61d;</i>密码
          </p>
          <input type="text" class="commonInput" placeholder="请输入密码">
        </div>
      </form>
      <div class="registerAndPsd">
        <p>
          <span class="goCount">注册账号</span>
        </p>
        <p>
          <router-link to="/forgetPSD">忘记密码？</router-link>
        </p>
      </div>
      <div class="shadowBtn">
        <div class="countBTNs">
          <p>
            <router-link to="/register1" >注册真实账号</router-link>
          </p>
          <p>
            <router-link to="/registerImage" >注册模拟账号</router-link>
          </p>
        </div>
      </div>
      <p class="commonBtn"><router-link to="">登录</router-link></p>
      <p class="loginBottomCue">登录即表示您同意<a href="">《使用条款》</a>和<a href="">《免责声明》</a></p>
    </div>



  </div>
</template>

<script>
  // 引入国家相关文件
  import '../../assets/country/country.css'
  import {country} from  '../../assets/country/country.js'

  export default {
  name: 'login',
  components : {
  },
  data () {
    return {
    }
  },
  methods:{

  },
  mounted:function () {

    $(function () {
      $('.shadowBtn').on('click',function () {
        $(this).stop().fadeOut(500);
        $('.countBTNs').removeClass('btnShow');

      })
      $('.countBTNs').on('click',function (e) {
        e.stopPropagation()
      });
      $('.goCount').on('click',function () {
        $('.shadowBtn').stop().fadeToggle(500);
        $('.countBTNs').toggleClass('btnShow')
      })
    })
    loadTel();
    /*获取区号*/
    function loadTel(){
      $(".chooseQuhao ul").children(":gt(0)").remove();
      for(var m in country){
        var content=$(".chooseQuhao .none").clone().removeClass("none");
        content.find(".countNum").addClass(country[m].class);
        content.find(".ContentName").html(country[m].country_name);
        content.find(".quhaoNum").text(country[m].dial);
        $(".chooseQuhao ul").append(content);
      }
    };

    //    区号选择
    $('.quhao').on('click', function () {
      $('.chooseQuhao').stop().slideToggle(200);
    })
    $('.chooseQuhao li').eq(1).addClass('current');
    $('.chooseQuhao li').on('click', function () {
      $(this).addClass('current').siblings('li').removeClass('current');

      var _class =  $(this).find('.countryName').find('span').attr('class');

      $('.CT').html('<span style="display: inline-block" class="'+_class+'"></span>');
      $('.QH').html($(this).children('P').children('.quhaoNum').html());
//            $('.hasBD').css('paddingLeft',$('.quhao').width()+15+'px');
      $('.chooseQuhao').stop().slideUp(200);
      $(".quhao input").val($(this).children('P').children('.quhaoNum').html());

    });

  }


}




</script>


<style scoped>

.registerAndPsd{
  overflow: hidden;
  position: relative;
  top:-10px;
}
.registerAndPsd p{
  float: left;
}
.registerAndPsd p:nth-last-of-type(1){
  float: right;
}
.registerAndPsd p a{
  color:#00b9e4;
  font-size:14px;
}
.shadowBtn{
  position: fixed;
  z-index:100;
  left:0;
  top:0;
  width:100%;
  height:100%;
  background: rgba(0,0,0,.5);
  display: none;
}
.countBTNs{
  position: absolute;
  width:90%;
  left:5%;
  bottom:15px;
  background: #fff;
  -webkit-border-radius:5px;
  -moz-border-radius:5px;
  border-radius:5px;
  text-align: center;
  line-height:60px;
  font-size:16px;
  -webkit-transform: translate(0,140px);
  -moz-transform: translate(0,140px);
  -ms-transform: translate(0,140px);
  -o-transform: translate(0,140px);
  transform: translate(0,140px);
  -webkit-transition: transform .5s;
  -moz-transition: transform .5s;
  -ms-transition: transform .5s;
  -o-transition: transform .5s;
  transition: transform .5s;
}
.btnShow{
  -webkit-transform: translate(0,0);
  -moz-transform: translate(0,0);
  -ms-transform: translate(0,0);
  -o-transform: translate(0,0);
  transform: translate(0,0);
}


.countBTNs p a{
  display: block;
  color: #060606;
}
.countBTNs p:nth-of-type(1) a{
  color: #00b9e4;
  border-bottom:1px solid #d9d9d9;
}
.goCount{
  color: #00b9e4;
  font-size: 14px;
}

</style>

<template>
    <div class="register1">
        <div class="registerTab">
            <span class="registerReturn">
              <router-link to="/"><i class="iconfont">&#xe604;</i></router-link>
            </span>
        </div>
      <span class="loginLogo"><img src="../../assets/login/logo.png" width="120"></span>
        <div class="commonLoginPd">
          <form action="">
            <div class="inputContainer">
              <p class="dataCue"><i class="iconfont">&#xe6f3;</i>手机</p>
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
              <p class="dataCue"><i class="iconfont">&#xe643;</i>验证码</p>
                <input type="text" class="commonInput YZMinput" name="code" placeholder="请输入验证码">
                <button type="button" class="yzmBtn">点击发送验证码</button>
                <p class="YZMcue">无法收到验证码？可点击获取语音验证码</p>
            </div>
            <div class="inputContainer">
              <p class="dataCue">
                <i class="iconfont">&#xe61d;</i>密码
              </p>
              <input type="text" class="commonInput" placeholder="请输入密码">
            </div>
            <div class="inputContainer">
              <p class="dataCue">
                <i class="iconfont">&#xe61d;</i>确认密码
              </p>
              <input type="text" class="commonInput" placeholder="请输入密码">
            </div>
            <div class="btnOter">
              <p class="commonBtn"><router-link to="/">确认</router-link></p>
            </div>
          </form>

        </div>
      <p class="loginBottomCue">登录即表示您同意<a href="">《使用条款》</a>和<a href="">《免责声明》</a></p>
    </div>
</template>
<script>
  // 引入国家相关文件
  import '../../assets/country/country.css'
  import {country} from  '../../assets/country/country.js'

  export default {
    name: 'forgetPSD',
    components : {
    },
    data () {
      return {

      }
    },
    mounted:function () {
      $(function () {
        // 发送验证码
        var flag=true;
        function sendYZM(obj){
          if(flag){
            flag=false;
            var timer = null;
            var num = 59;
            clearInterval(timer);
            if (obj.html()== '点击获取语音验证码') {
              // 此处是点击获取语音验证码代码
              console.log('此处发送语音验证码')
              obj.html('不可重复获取').addClass('yzm');



              return false;
            }
            if (obj.html() != '点击发送验证码') {
              return false;
            };
            console.log('已发送验证码')

            obj.html( 59 + 'S后重新获取').addClass('yzm');
            $('.YZMcue').show();
            timer = setInterval(function () {
              num--;
              obj.html(num + 'S后重新获取');
              if (num <=0) {
                flag=true;
                obj.html('点击获取语音验证码').removeClass('yzm');
                $('.YZMcue').hide()
                clearInterval(timer);
              }
            }, 1000)
          }
        }
        $('.yzmBtn').on('click',function () {
          sendYZM($(this))
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

      })
    }

  }
</script>
<style scoped>
.registerTab{
  height: 45px;padding: 0;
}
  .loginLogo{
    padding-top:0;
  }
.loginBottomCue{
  position: inherit !important;
  padding-bottom:15px;
}

</style>


<template>
    <div class="register1">
        <div class="registerTab">
            <span class="registerReturn" @click='$router.history.go(-1)'>
              <router-link to=""><i class="iconfont">&#xe604;</i></router-link>
            </span>
        </div>
        <div class="commonLoginPd">
          <form action="">
            <div class="inputContainer">
              <p class="dataCue">银行卡号码</p>
              <input type="text" class="commonInput" placeholder="请输入银行卡号码">
            </div>
            <div class="inputContainer">
                <p class="dataCue">银行预留手机号</p>
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
              <p class="cardCue">您的MSG账户添加银行卡是绑定交易出入金操作，请确认姓名、身份证为您本人真确信息，为保护您资金安全，确认后不可更改。</p>
            <div class="btnOter">
              <p class="commonBtn"><router-link to="/registerRealSuccess">完成</router-link></p>
            </div>

          </form>

        </div>
    </div>
</template>
<script>
  // 引入国家相关文件
  import '../../assets/country/country.css'
  import {country} from  '../../assets/country/country.js'
  export default {
    name: 'register1',
    components : {
    },
    data () {
      return {

      }
    },
    mounted:function () {
      $(function () {
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


</style>


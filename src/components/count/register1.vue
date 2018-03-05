<template>
    <div class="register1">
        <div class="registerTab">
            <span class="registerReturn">
              <router-link to="/"><i class="iconfont">&#xe604;</i></router-link>
            </span>
            <div class="tabsList">
              <p class="regTab1 current"><span></span></p>
              <p class="regTab2"><span></span></p>
              <p class="regTab3"><span></span></p>
              <p class="regTab4"><span></span></p>
            </div>
        </div>
        <div class="commonLoginPd">
            <h3 class="registerTitle">安全注册MSG真实账户</h3>
          <form action="">
              <div class="inputContainer">
                <p class="dataCue">地区</p>
                <div class="areas">
                  <p>中国大陆</p>
                  <ul class="areasList changeHeight2"></ul>
                  <i class="iconfont">&#xe60e;</i>
                </div>
              </div>
              <div class="inputContainer">
                <p class="dataCue">手机</p>
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
              <p class="dataCue">邮箱</p>
              <input type="text" class="commonInput" placeholder="正确邮箱格式">
            </div>
            <div class="inputContainer">
              <p class="dataCue">密码</p>
              <input type="password" class="commonInput" placeholder="请输入密码">
            </div>
            <div class="inputContainer">
              <p class="dataCue">确认密码</p>
              <input type="password" class="commonInput" placeholder="请输入密码">
            </div>
            <div class="inputContainer">
              <p class="dataCue">验证码</p>
                <input type="text" class="commonInput YZMinput" name="code" placeholder="请输入验证码">
                <button type="button" class="yzmBtn">点击发送验证码</button>
                <p class="YZMcue">无法收到验证码？可点击获取语音验证码</p>
            </div>
            <div class="btnOter">
              <p class="commonBtn"><router-link to="/registerLaw">下一步</router-link></p>
            </div>

          </form>

        </div>
      <p class="copyBottom">Copyright © 2017 MASTER SELECT GROUP LIMITED. </p>
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
        //        所有地区循环
        var countryArr=['中国大陆','香港特别行政区','澳门特别行政区','台湾地区','蒙古','朝鲜','韩国','日本','菲律宾','越南','加拿大','美国','墨西哥','英国','法国','老挝','德国','柬埔寨','缅甸','巴西','巴勒斯坦','泰国','马来西亚','澳大利亚','新西兰','文莱','哥伦比亚','新加坡','意大利','印度尼西亚','西班牙','葡萄牙','刚果共和国','白俄罗斯','俄罗斯','匈牙利','奥地利','乌克兰','东帝汶','尼泊尔','不丹','孟加拉国','印度','巴基斯坦','斯里兰卡','马尔代夫','哈萨克斯坦','吉尔吉斯斯坦','塔吉克斯坦','乌兹别克斯坦','古巴','牙买加','土库曼斯坦','阿富汗','伊拉克','伊朗','叙利亚','约旦','黎巴嫩','以色列','沙特阿拉伯','巴林','卡塔尔','科威特','阿拉伯联合酋长国','阿曼','也门','格鲁吉亚','亚美尼亚','阿塞拜疆','土耳其','南非','塞浦路斯','芬兰','瑞典','挪威','冰岛','丹麦 法罗群岛','爱沙尼亚','拉脱维亚','立陶宛','摩尔多瓦','波兰','捷克','斯洛伐克','瑞士','列支敦士登','爱尔兰','荷兰','比利时','卢森堡','摩纳哥','罗马尼亚','保加利亚','塞尔维亚','马其顿','阿尔巴尼亚','希腊','斯洛文尼亚','克罗地亚','波斯尼亚','墨塞哥维那','梵蒂冈','圣马力诺','马耳他','安道尔','埃及','利比亚','苏丹','突尼斯','阿尔及利亚','摩洛哥','亚速尔群岛','马德拉群岛','埃塞俄比亚','厄立特里亚','索马里','吉布提','肯尼亚','智利','秘鲁','坦桑尼亚','乌干达','卢旺达','布隆迪','塞舌尔','乍得','中非','喀麦隆','赤道几内亚','加蓬','刚果民主共和国','圣多美及普林西比','毛里塔尼亚','西撒哈拉','塞内加尔','冈比亚','马里','布基纳法索','几内亚','几内亚比绍','佛得角','塞拉利昂','利比里亚','科特迪瓦','加纳','多哥','贝宁','尼日尔','加那利群岛','赞比亚','安哥拉','津巴布韦','马拉维','莫桑比克','博茨瓦纳','纳米比亚','斯威士兰','莱索托','马达加斯加','科摩罗','毛里求斯','留尼旺','圣赫勒拿','巴布亚新几内亚','所罗门群岛','瓦努阿图','密克罗尼西亚','马绍尔群岛','帕劳','瑙鲁','基里巴斯','图瓦卢','萨摩亚','斐济群岛','汤加','库克群岛','关岛','新喀里多尼亚','法属波利尼西亚','皮特凯恩岛','瓦利斯与富图纳','纽埃','托克劳','美属萨摩亚','北马里亚纳','格陵兰','危地马拉','伯利兹','萨尔瓦多','洪都拉斯','尼加拉瓜','哥斯达黎加','巴拿马','巴哈马','海地','多米尼加共和国','安提瓜和巴布达','圣基茨和尼维斯','多米尼克','圣卢西亚','圣文森特和格林纳丁斯','格林纳达','巴巴多斯','特立尼达和多巴哥','波多黎各','英属维尔京群岛','美属维尔京群岛','安圭拉','蒙特塞拉特','瓜德罗普','马提尼克','荷属安的列斯','阿鲁巴','特克斯和凯科斯群岛','开曼群岛','百慕大','委内瑞拉','圭亚那','法属圭亚那','苏里南','厄瓜多尔','玻利维亚','阿根廷','乌拉圭','巴拉圭'];
        for(var i=0;i<countryArr.length;i++){
          if(countryArr[i]=='中国'){
            $('.changeHeight2').append('<li selected>'+countryArr[i]+'</li>');
          }else{
            $('.changeHeight2').append('<li>'+countryArr[i]+'</li>');
          }
        }

//    地区选择
        $('.areas>p').on('click',function () {
          $(this).siblings('.changeHeight2').stop().slideToggle(300)
        })
        $('.changeHeight2 li').on('click',function () {
          $(".country").val($(this).html());
          $(this).parent().siblings('p').html($(this).html());
          $(this).parent().stop().slideUp(300);
        });




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



</style>


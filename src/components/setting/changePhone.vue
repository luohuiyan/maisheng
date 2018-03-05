<template>
    <div class="dataEdit">
      <div class="registerTab">
        <span class="registerReturn" @click='$router.history.go(-1)'>
          <router-link to=""><i class="iconfont">&#xe604;</i></router-link>
        </span>
      </div>
      <div class="datas commonLoginPd">
        <form action="">
          <div class="inputContainer">
            <p class="dataCue">真实姓名</p>
            <input type="text" class="commonInput" placeholder="请填写真实姓名">
          </div>
          <div class="inputContainer">
            <p class="dataCue">身份证</p>
            <input type="number" class="commonInput" placeholder="请填写身份证号">
          </div>
          <div class="inputContainer">
            <p class="dataCue">验证码</p>
            <input type="text" class="commonInput YZMinput" name="code" placeholder="请输入旧验证码">
            <button type="button" class="yzmBtn">点击发送验证码</button>
            <p class="YZMcue">无法收到验证码？可点击获取语音验证码</p>
          </div>

          <p class="commonBtn BTNtwo">
            <router-link to="/changePhoneDone">下一步</router-link>
          </p>
        </form>
      </div>
      <tabbar></tabbar>
    </div>
</template>
<style scoped>
  .BTNtwo{
    -webkit-box-shadow: none    ;
    -moz-box-shadow: none    ;
    box-shadow: none    ;
  }
  .finishedEdit{
    position: fixed;
    right:15px;
    top:12px;
    font-size:16px;
    z-index:100;
  }
.finishedEdit a{
  color: #00b9e4;
}
</style>
<script>
  import tabbar from '../userCenter/bottomTabBar.vue'
  export default {
    name:'changePhone',
    components:{
      tabbar
    },
    data () {
      return {

      }

    },
    methods: {

    },
    mounted:function () {
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
            $('.YZMcue').show().html('语音验证码已发送，请留言您的手机！')


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

    }
  }


</script>

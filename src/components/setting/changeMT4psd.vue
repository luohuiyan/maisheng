<template>
    <div class="dataEdit">
      <div class="registerTab">
        <span class="registerReturn" @click='$router.history.go(-1)'>
          <router-link to=""><i class="iconfont">&#xe604;</i></router-link>
        </span>
        <p class="finishedEdit"><router-link to="">完成</router-link></p>
      </div>
      <div class="datas commonLoginPd">
        <form action="">
          <div class="inputContainer">
            <p class="dataCue">新密码</p>
            <input type="password" class="commonInput" placeholder="请输入新密码">
          </div>
          <div class="inputContainer">
            <p class="dataCue">确认新密码</p>
            <input type="password" class="commonInput" placeholder="请确认新密码">
          </div>
          <div class="inputContainer">
            <p class="dataCue">验证码</p>
            <input type="text" class="commonInput YZMinput" name="code" placeholder="请输入验证码">
            <button type="button" class="yzmBtn">点击发送验证码</button>
            <p class="YZMcue">无法收到验证码？可点击获取语音验证码</p>
          </div>
        </form>
      </div>
      <tabbar></tabbar>
    </div>
</template>
<style scoped>
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
    name:'changeMT4psd',
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

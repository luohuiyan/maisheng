<template>
    <div class="contact">
      <rightTab></rightTab>
      <div class="registerTab">
        <span class="registerReturn" @click='$router.history.go(-1)'>
          <router-link to=""><i class="iconfont">&#xe604;</i></router-link>
        </span>
      </div>
      <div class="msglogo">
        <span><img src="../../assets/images/msglogo.png" class="img_zoom"></span>
        <p>Master Select Group</p>
      </div>
      <ul class="contactList">
        <li>
          <h3>澳大利亚</h3>
          <p>
            <span>电话</span>
            <b>+61289737689</b>
          </p>
          <p>
            <span>邮箱</span>
            <b>manage@msgforex.com</b>
          </p>
        </li>
        <li>
          <h3>香港</h3>
          <p>
            <span>电话</span>
            <b>400-1209125</b>
          </p>
          <p>
            <span>邮箱</span>
            <b>kf@msgforex.com</b>
          </p>
        </li>
        <li>
          <h3>美国</h3>
          <p>
            <span>电话</span>
            <b>(315)510-558</b>
          </p>
          <p>
            <span>邮箱</span>
            <b>info@msgforex.com</b>
          </p>
        </li>
      </ul>

    </div>
</template>
<style scoped>
.contact .registerTab{
  left: 0;
  top:0;
  position: fixed;
  z-index: 1001;
  width: 100px;
  height: 45px;
  padding: 0;
}
.registerReturn{
  top:12px;
}
  .msglogo{
    padding:40px 0;
    background: #fafaff;
    border-top:1px solid #f2f2f7;
    border-bottom:1px solid #f2f2f7;
  }
.msglogo span{
  display: block;
  width:32%;
  max-width:143px;
  margin:0 auto;
}
.msglogo p{
  font-size:18px;
  color: #9c9b9b;
  text-align: center;
  padding-top:15px;
}
.contactList{
  padding-left:15px;
}
.contactList li{
  padding-top:10px;
  padding-bottom:6px;
  padding-right:15px;
  border-bottom:1px solid #aaaaaa;
}
.contactList li:nth-last-of-type(1){
  border-bottom:0;
}
.contactList li h3{
  font-size:16px;
  height:25px;
  color: #000;
  font-weight:normal;
}
.contactList li p{
  font-size:16px;
  overflow: hidden;
  line-height:40px;
}
.contactList li p span{
  float: left;
  color: #c8c8c8;
}
.contactList li p b{
  float: right;
  font-weight:normal;
  color: #007aff;
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


    }
  }

</script>

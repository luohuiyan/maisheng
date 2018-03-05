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
            <p class="dataCue">生日</p>
            <div class="timerCon">
              <input id="demo1" type="text" readonly="" class="commonInput"  placeholder="请选择生日" data-lcalendar="2016-05-11,2016-05-11" />
            </div>
          </div>
          <div class="inputContainer">
            <p class="dataCue">性别</p>
            <div class="areas SEX">
              <p @click="SEXsheet">{{SEXchoosed}}</p>
              <mt-actionsheet cancelText="" :actions="SEXactions" v-model="SEXvisible"></mt-actionsheet>
              <i class="iconfont">&#xe60e;</i>
            </div>
          </div>
          <div class="inputContainer">
            <p class="dataCue">邮箱</p>
            <input type="text" class="commonInput" placeholder="正确邮箱格式">
          </div>
          <div class="inputContainer">
            <p class="dataCue">邮编</p>
            <input type="text" class="commonInput" placeholder="请填写邮政编号">
          </div>
          <div class="inputContainer">
            <p class="dataCue">地址</p>
            <input type="text" class="commonInput" placeholder="请填写详细地址">
          </div>
        </form>
      </div>
      <tabbar></tabbar>
    </div>
</template>
<style scoped>
.timerCon{
  height:50px;
  border-bottom:1px solid #d9d9d9;
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
  import '../../assets/time/js/LCalendar.js'
  import '../../assets/time/css/LCalendar.min.css'

  import tabbar from '../userCenter/bottomTabBar.vue'
  export default {
    name:'positionOrder',
    components:{
      tabbar
    },
    data () {
      return {
//        SEX表示性别选择
        SEXactions:[{name:'男',method:this.SEXfn},{name:'女',method:this.SEXfn}],
        SEXchoosed:"",
        SEXvisible:false,

      }

    },
    methods: {
//      性别切换
      SEXsheet:function () {
        this.SEXvisible=!this.SEXvisible
      },
//      性别选择
      SEXfn:function (action,index) {
        this.SEXchoosed=action.name;
      },

    },
    mounted:function () {
      this.SEXchoosed=this.SEXactions[0].name;

      var calendar = new LCalendar();
      calendar.init({
        'trigger': '#demo1', //标签id
        'type': 'date', //date 调出日期选择 datetime 调出日期时间选择 time 调出时间选择 ym 调出年月选择,
        'minDate': '1900-1-1', //最小日期
        'maxDate': new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate() //最大日期
      });
    }
  }

</script>

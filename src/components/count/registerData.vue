<template>
    <div class="register1">
        <div class="registerTab">
            <span class="registerReturn">
              <router-link to="/registerLaw"><i class="iconfont">&#xe604;</i></router-link>
            </span>
            <div class="tabsList">
              <p class="regTab1 current"><span></span></p>
              <p class="regTab2 current"><span></span></p>
              <p class="regTab3 current"><span></span></p>
              <p class="regTab4"><span></span></p>
            </div>
        </div>
        <div class="commonLoginPd">
            <h3 class="registerTitle">安全注册MSG真实账户</h3>
          <form action="">
            <div class="sexAndName">
              <div class="inputContainer">
                <p class="dataCue">姓名</p>
                <input type="text" class="commonInput" placeholder="请输入姓名">
              </div>
              <div class="inputContainer">
                <p class="dataCue">性别</p>
                <div class="areas SEX">
                  <p @click="SEXsheet">{{SEXchoosed}}</p>
                  <mt-actionsheet cancelText="" :actions="SEXactions" v-model="SEXvisible"></mt-actionsheet>
                  <i class="iconfont">&#xe60e;</i>
                </div>
              </div>
            </div>
            <div class="inputContainer">
              <p class="dataCue">证件类型</p>
              <div class="areas IDlist">
                <p @click="IDsheet">{{IDchoosed}}</p>
                <mt-actionsheet cancelText="" :actions="IDactions" v-model="IDvisible"></mt-actionsheet>
                <i class="iconfont">&#xe60e;</i>
              </div>
            </div>
            <div class="inputContainer">
              <p class="dataCue">证件号码</p>
              <input type="text" class="commonInput" placeholder="必填">
            </div>
            <div class="inputContainer">
              <p class="dataCue">上传证件</p>
              <div class="upImgContainer">
                <div>
                  <input type="file" class="inputFile fileFace" name="file" accept="image/png,image/gif" @change="uploadChange">
                  <p><i class="iconfont">&#xe61a;</i>证件正面</p>
                  <span class="imgBOX"><img :src="imgDataUrl" class="img_zoom"></span>
                </div>
                <div>
                  <input type="file" class="inputFile fileCon" name="file" accept="image/png,image/gif" @change="uploadChange2">
                  <p><i class="iconfont">&#xe61a;</i>证件反面</p>
                  <span class="imgBOX"><img :src="imgDataUrl2" class="img_zoom"></span>
                </div>
              </div>
            </div>
            <div class="inputContainer">
              <p class="dataCue">代理商邀请码</p>
              <input type="text" class="commonInput" placeholder="请输入证件号码">
              <i class="iconfont inputIcon">&#xe64c;</i>
            </div>
            <div class="btnOter">
              <p class="commonBtn"><router-link to="/registerCard">下一步</router-link></p>
            </div>

          </form>

        </div>
      <p class="copyBottom">Copyright © 2017 MASTER SELECT GROUP LIMITED. </p>
    </div>
</template>
<script>
  export default {
    name: 'registerData',
    components : {
    },
    data () {
      return {
//          ID表示证件类型选择
        IDactions:[
          {
            name:'身份证',
            method:this.IDfn
          },
          {
            name:'护照',
            method:this.IDfn
          },
          {
            name:'军官证',
            method:this.IDfn
          },
          {
            name:'台胞证',
            method:this.IDfn
          },
          {
            name:'回乡证',
            method:this.IDfn
          },
          {
            name:'警官证',
            method:this.IDfn
          },
          {
            name:'士兵证',
            method:this.IDfn
          },
          {
            name:'其他证件',
            method:this.IDfn
          }
        ],
        IDchoosed:"",
        IDvisible:false,
//        SEX表示性别选择
        SEXactions:[{name:'男',method:this.SEXfn},{name:'女',method:this.SEXfn}],
        SEXchoosed:"",
        SEXvisible:false,
        imgDataUrl:"",
        imgDataUrl2:"",
    }
    },
    methods:{
//      证件类型切换
      IDsheet:function () {
        this.IDvisible=!this.IDvisible
      },
//      证件类型选择
      IDfn:function (action,index) {
        this.IDchoosed=action.name;
      },
//      性别切换
      SEXsheet:function () {
        this.SEXvisible=!this.SEXvisible
      },
//      性别选择
      SEXfn:function (action,index) {
        this.SEXchoosed=action.name;
      },

//      上传图片
      uploadChange:function(event){
        if(event.target.files.length>0){
          this.files = event.target.files[0];  //提交的图片
          this.getBase64(event.target,(url)=>{
            this.imgDataUrl = 'data:image/png;base64,'+url;

          });
        }
      },
      uploadChange2:function(event){
        if(event.target.files.length>0){
          this.files = event.target.files[0];  //提交的图片
          this.getBase64(event.target,(url)=>{
            this.imgDataUrl2 = 'data:image/png;base64,'+url;
          });
        }
      },
      getBase64 : function(file,callback){
        var maxWidth = 640;
        if(file.files && file.files[0]){
          var thisFile = file.files[0];
          if(thisFile.size>2019200){
            // mualert.alertBox("图片不能超过800K");
            alert("图片不能超过2M");
            return
          };
          var reader = new FileReader();
          reader.onload = function(event){
            var imgUrl = event.target.result;
            var img = new Image();
            img.onload = function(){
              var canvasId = 'canvasBase64Imgid',
                canvas = document.getElementById(canvasId);
              if(canvas!=null){document.body.removeChild(canvas);}
              var canvas = document.createElement("canvas");
              canvas.innerHTML = 'New Canvas';
              canvas.setAttribute("id", canvasId);
              canvas.style.display='none';
              document.body.appendChild(canvas);
              canvas.width = this.width;
              canvas.height = this.height;
              var imageWidth = this.width,
                imageHeight = this.height;
              if (this.width > maxWidth){
                imageWidth = maxWidth;
                imageHeight = this.height * maxWidth/this.width;
                canvas.width = imageWidth;
                canvas.height = imageHeight;
              }
              var context = canvas.getContext('2d');
              context.clearRect(0, 0, imageWidth, imageHeight);
              context.drawImage(this, 0, 0, imageWidth, imageHeight);
              var base64 = canvas.toDataURL('image/png',1);
              var imgbase = base64.substr(22);
              callback(imgbase)
              //this.imgUrl =
            }
            img.src = imgUrl;
          }
          reader.readAsDataURL(file.files[0]);
        }
      }
    },
    mounted:function () {
//        初始化证件类型和性别展示
      this.IDchoosed=this.IDactions[0].name;
      this.SEXchoosed=this.SEXactions[0].name;


    }
  }
</script>
<style scoped>
.changeHeight3{
  height:190px !important;
}
.sexAndName{
  height:110px;
}
.sexAndName .inputContainer{
  float: left;
  width:47%;
}
.sexAndName .inputContainer:nth-last-of-type(1){
  float: right;
}
.upImgContainer{
  overflow: hidden;
}
.upImgContainer>div{
  float: left;
  width:46%;
  height:70px;
  line-height:70px;
  border:1px dashed #ccc;
  -webkit-border-radius:5px;
  -moz-border-radius:5px;
  border-radius:5px;
  position: relative;
  text-align: center;
  font-size:16px;
  color: #c7c7cd;
  overflow: hidden;
}
.upImgContainer>div:nth-last-of-type(1){
  float: right;
}
.inputFile{
  opacity:0;
  position: absolute;
  width:100%;
  height:100%;
  left:0;
  top:0;
  z-index:100;
}
.upImgContainer>div i{
  font-size: 19px;
  color: #999999;
}
.imgBOX{
  position: absolute;
  left:0;
  height:100%;
  width:100%;
  text-align: center;
  top:0;
  z-index:90;
}
.imgBOX img{
  display: inline-block !important;
  height:100% !important;
}








</style>


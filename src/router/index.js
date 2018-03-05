import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/count/Login'
import register1 from '@/components/count/register1'
import registerLaw from '@/components/count/registerLaw'
import registerData from '@/components/count/registerData'
import registerCard from '@/components/count/registerCard'
import registerImage from '@/components/count/registerImage'
import registerImageSuccess from '@/components/count/registerImageSuccess'
import registerRealSuccess from '@/components/count/registerRealSuccess'
import forgetPSD from '@/components/count/forgetPSD'
import userCenter from '@/components/userCenter/userCenter'
import rechargeIndex from '@/components/recharge/index'
import fastPay from '@/components/recharge/fastPay'
import fastPaySucceed from '@/components/recharge/fastPaySucceed'
import withdrawIndex from '@/components/withdraw/index'
import withdrawCard from '@/components/withdraw/withdrawCard'
import withdrawCardSucceed from '@/components/withdraw/withdrawCardSucceed'
import withdrawAbord from '@/components/withdraw/withdrawAbord'
import withdrawAbordSucceed from '@/components/withdraw/withdrawAbordSucceed'
import cardIndex from '@/components/card/index'
import cardList from '@/components/card/cardList'
import rechargeHis from '@/components/history/index'
import withdrawHis from '@/components/history/withdrawHis'
import positionOrder from '@/components/positionOrder/index'
import downIndex from '@/components/downMt4/index'
import personalData from '@/components/person/index'
import dataEdit from '@/components/person/edit'
import setting from '@/components/setting/index'
import changeMT4psd from '@/components/setting/changeMT4psd'
import changeMSGpsd from '@/components/setting/changeMSGpsd'
import changePhone from '@/components/setting/changePhone'
import changePhoneDone from '@/components/setting/changePhoneDone'
import guideIndex from '@/components/tradeGuide/index'
import tradeHistory from '@/components/tradeHistory/index'
import gonggao from '@/components/news/pub'
import marketNew from '@/components/news/marketNew'
import newsDetail from '@/components/news/newsDetail'
import actIndex from '@/components/activity/actIndex'
import helpcenter from '@/components/helpcenter/index'
import contact from '@/components/helpcenter/contact'
import marketCenter from '@/components/marketcenter/index'
import rechargeGuide from '@/components/helpCenter/rechargeGuide'
import withdrawGuide from '@/components/helpCenter/widthdrawGuide'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      meta:{
        title:'登录'
      },
      component: Login,
    },
    {
      path: '/register1',
      name: 'register1',
      meta:{
        title:'基本信息填写'
      },
      component: register1,
    },
    {
      path: '/registerLaw',
      name: 'registerLaw',
      meta:{
        title:'法律声明'
      },
      component: registerLaw,
    },
    {
      path: '/registerData',
      name: 'registerData',
      meta:{
        title:'实名认证'
      },
      component: registerData,
    },
    {
      path: '/registerCard',
      name: 'registerCard',
      meta:{
        title:'绑定银行卡'
      },
      component: registerCard,
    },
    {
      path: '/registerImage',
      name: 'registerImage',
      meta:{
        title:'注册模拟账户'
      },
      component: registerImage,
    },
    {
      path: '/registerImageSuccess',
      name: 'registerImageSuccess',
      meta:{
        title:'模拟账户注册成功'
      },
      component: registerImageSuccess,
    },
    {
      path: '/registerRealSuccess',
      name: 'registerRealSuccess',
      meta:{
        title:'真实账户注册成功'
      },
      component: registerRealSuccess,
    },
    {
      path: '/forgetPSD',
      name: 'forgetPSD',
      meta:{
        title:'忘记密码'
      },
      component: forgetPSD,
    },
    {
      path: '/userCenter',
      name: 'userCenter',
      meta:{
        title:'个人中心'
      },
      component: userCenter,
    },
    {
      path: '/rechargeIndex',
      name: 'rechargeIndex',
      meta:{
        title:'在线入金'
      },
      component: rechargeIndex,
    },
    {
      path: '/fastPay',
      name: 'fastPay',
      meta:{
        title:'快捷支付'
      },
      component: fastPay,
    },
    {
      path: '/fastPaySucceed',
      name: 'fastPaySucceed',
      meta:{
        title:'快捷支付成功'
      },
      component: fastPaySucceed,
    },
    {
      path: '/withdrawIndex',
      name: 'withdrawIndex',
      meta:{
        title:'在线出金'
      },
      component: withdrawIndex,
    },
    {
      path: '/withdrawCard',
      name: 'withdrawCard',
      meta:{
        title:'出金至银行卡'
      },
      component: withdrawCard,
    },
    {
      path: '/withdrawCardSucceed',
      name: 'withdrawCardSucceed',
      meta:{
        title:'出金申请成功'
      },
      component: withdrawCardSucceed,
    },
    {
      path: '/withdrawAbord',
      name: 'withdrawAbord',
      meta:{
        title:'海外提现'
      },
      component: withdrawAbord,
    },
    {
      path: '/withdrawAbordSucceed',
      name: 'withdrawAbordSucceed',
      meta:{
        title:'海外提现申请成功'
      },
      component: withdrawAbordSucceed,
    },
    {
      path: '/cardIndex',
      name: 'cardIndex',
      meta:{
        title:'添加银行卡'
      },
      component: cardIndex,
    },
    {
      path: '/cardList',
      name: 'cardList',
      meta:{
        title:'银行卡列表'
      },
      component: cardList,
    },
    {
      path: '/rechargeHis',
      name: 'rechargeHis',
      meta:{
        title:'入金记录'
      },
      component: rechargeHis,
    },
    {
      path: '/withdrawHis',
      name: 'withdrawHis',
      meta:{
        title:'出金记录'
      },
      component: withdrawHis,
    },
    {
      path: '/positionOrder',
      name: 'positionOrder',
      meta:{
        title:'持仓订单'
      },
      component: positionOrder,
    },
    {
      path: '/downIndex',
      name: 'downIndex',
      meta:{
        title:'下载MT4'
      },
      component: downIndex,
    },
    {
      path: '/personalData',
      name: 'personalData',
      meta:{
        title:'个人资料'
      },
      component: personalData,
    },
    {
      path: '/dataEdit',
      name: 'dataEdit',
      meta:{
        title:'编辑个人资料'
      },
      component: dataEdit,
    },
    {
      path: '/setting',
      name: 'setting',
      meta:{
        title:'设置'
      },
      component: setting,
    },
    {
      path: '/changeMT4psd',
      name: 'changeMT4psd',
      meta:{
        title:'修改MT4密码'
      },
      component: changeMT4psd,
    },
    {
      path: '/changeMSGpsd',
      name: 'changeMSGpsd',
      meta:{
        title:'修改MSG密码'
      },
      component: changeMSGpsd,
    },
    {
      path: '/changePhone',
      name: 'changePhone',
      meta:{
        title:'修改手机号'
      },
      component: changePhone,
    },
    {
      path: '/changePhoneDone',
      name: 'changePhoneDone',
      meta:{
        title:'修改手机号'
      },
      component: changePhoneDone,
    },
    {
      path: '/guideIndex',
      name: 'guideIndex',
      meta:{
        title:'交易指南'
      },
      component: guideIndex,
    },
    {
      path: '/tradeHistory',
      name: 'tradeHistory',
      meta:{
        title:'交易历史'
      },
      component: tradeHistory,
    },
    {
      path: '/gonggao',
      name: 'gonggao',
      meta:{
        title:'公司公告'
      },
      component: gonggao,
    },
    {
      path: '/marketNew',
      name: 'marketNew',
      meta:{
        title:'市场新闻'
      },
      component: marketNew,
    },
    {
      path: '/newsDetail',
      name: 'newsDetail',
      meta:{
        title:'新闻详情'
      },
      component: newsDetail,
    },
    {
      path: '/actIndex',
      name: 'actIndex',
      meta:{
        title:'优惠活动'
      },
      component: actIndex,
    },
    {
      path: '/helpcenter',
      name: 'helpcenter',
      meta:{
        title:'帮助中心'
      },
      component: helpcenter,
    },
    {
      path: '/contact',
      name: 'contact',
      meta:{
        title:'联系我们'
      },
      component: contact,
    },
    {
      path: '/marketCenter',
      name: 'marketCenter',
      meta:{
        title:'行情中心'
      },
      component: marketCenter,
    },
    {
      path: '/rechargeGuide',
      name: 'rechargeGuide',
      meta:{
        title:'入金指南'
      },
      component: rechargeGuide,
    },
    {
      path: '/withdrawGuide',
      name: 'withdrawGuide',
      meta:{
        title:'出金指南'
      },
      component: withdrawGuide,
    }
  ]
})

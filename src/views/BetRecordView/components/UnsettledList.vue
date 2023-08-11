<template>
  <div class="unsettled-list">
    <div class="list-content" v-for="item in unsettledList" :key="item.id">
      <div class="title-box">{{item.title}}</div>
      <div class="order-no-check">
        <div class="logo"></div>
        <div class="check">
          <p class="check-title">{{item.isCheck?'已确认':'未确认'}}</p>
          <p class="check-time">{{item.orderTime}}</p>
        </div>
        <div class="order-no">
          <p class="order-title">{{item.orderType}}</p>
          <p class="order-num">{{item.orderNo}}</p>
        </div>
        <div class="copy">
          <div class="line"></div>
          <div class="btn">复制</div>
        </div>
      </div>
      <!-- 投注额-可赢额 -->
      <div class="bet-win-size">
        <div class="bet">
          <p class="common-title">投注额</p>
          <p class="size">{{item.betSize}}</p>
        </div>
        <div class="line"></div>
        <div class="win">
          <p class="common-title win-title">可赢额</p>
          <p class="size">{{item.winSize}}</p>
        </div>
      </div>
      <div class="game-detail" v-for="itm in item.gameList" :key="itm.id">
        <p class="detail-title-1">{{itm.detailName}}</p>
        <p class="detail-title-2">{{itm.detailType}}</p>
        <p class="detail-title-3">{{itm.detailTime}}</p>
        <p class="detail-title-4">{{itm.detailKey}}<span>{{itm.detailValue}}</span></p>
        <p class="detail-title-4">{{itm.detailWin}}</p>
      </div>
      <div class="currency">
        已提前结算 画笔符号+金额
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
// import vClipboard from '@/directives/clipboard'

const unsettledList = ref([
  {
    id:1111111,
    title: '足球 串关3串1',
    orderNo: 8989812339898,
    isCheck: 1,
    orderType:'IM体育订单号',
    orderTime:'2023/11/11 20:20',
    betSize: '￥101.18',
    winSize: '￥10200.00',
    gameList:[
      {
        id:11111,
        detailName:'新加坡U22 VS 马来西亚U22',
        detailType:'德国青年联赛U19-附加赛',
        detailTime:'2023/11/11 21:00',
        detailKey:'新加坡U22 ',
        detailValue:'@11.00',
        detailWin:'独赢'
      },
      {
        id:22222,
        detailName:'新加坡U22 VS 马来西亚U22',
        detailType:'德国青年联赛U19-附加赛',
        detailTime:'2023/11/11 21:00',
        detailKey:'新加坡U22 ',
        detailValue:'@11.00',
        detailWin:'独赢'
      },
      {
        id:33333,
        detailName:'新加坡U22 VS 马来西亚U22',
        detailType:'德国青年联赛U19-附加赛',
        detailTime:'2023/11/11 21:00',
        detailKey:'新加坡U22 ',
        detailValue:'@11.00',
        detailWin:'独赢'
      }
    ]
  },
  {
    id:2222222,
    title: '足球 单场',
    orderNo: 8989812339898,
    isCheck: 1,
    orderType:'FB体育订单号',
    orderTime:'2023/11/11 20:20',
    betSize: '￥101.18',
    winSize: '￥10200.00',
    gameList:[
      {
        id:111111,
        detailName:'新加坡U22 VS 马来西亚U22',
        detailType:'德国青年联赛U19-附加赛',
        detailTime:'2023/11/11 21:00',
        detailKey:'新加坡U22 ',
        detailValue:'@11.00',
        detailWin:'独赢'
      }
    ]
  },
  {
    id:333333,
    title: '足球 单场',
    orderNo: 8989812339898,
    isCheck: 1,
    orderType:'FB体育订单号',
    orderTime:'2023/11/11 20:20',
    betSize: '￥101.18',
    winSize: '￥10200.00',
    gameList:[
      {
        id:111111,
        detailName:'新加坡U22 VS 马来西亚U22',
        detailType:'德国青年联赛U19-附加赛',
        detailTime:'2023/11/11 21:00',
        detailKey:'新加坡U22 ',
        detailValue:'@11.00',
        detailWin:'独赢'
      }
    ]
  }
])
</script>

<style lang="scss" scoped>
.unsettled-list {
  padding: 0 7px 15px;
  .list-content {
    border-radius: 4px;
    background: #fff;
    box-shadow: 0px 1px 0px 0px #ffdcad inset;
    margin-bottom: 15px;
    padding-bottom: 15px;
    .title-box {
      width: 116px;
      height: 24px;
      line-height: 24px;
      text-align: center;
      border-radius: 4px 40px 40px 0px;
      background: linear-gradient(93deg, #ff9000 0%, #ff5000 100%);
      color: #fff;
      font-family: 'PingFang SC';
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
    }
    .common-title{
          color: #666;
          font-family: 'PingFang SC';
          font-size: 12px;
          font-style: normal;
          font-weight: 400;
          line-height: 16px;
        }
    .order-no-check {
      padding: 9px 15px 10px 0;
      border-bottom: 1px solid #eee;
      display: flex;
      align-items: center;
      .logo{
        width:4px;
        height:20px;
        border-radius: 0px 60px 60px 0px;
        background: #FF5000;
        margin-right:11px;
      }
      .check{
        margin-right:60px;
        .check-title{
          color: #00B42A;
          font-family: 'PingFang SC';
          font-size: 12px;
          font-style: normal;
          font-weight: 400;
          line-height: 16px;
        }
        .check-time{
          color: #111;
          font-family: 'PingFang SC';
          font-size: 12px;
          font-style: normal;
          font-weight: 400;
          line-height: 16px;
        }
      }
      .order-no{
        margin-right:34px;
        .order-title{
          color: #666;
          font-family: 'PingFang SC';
          font-size: 12px;
          font-style: normal;
          font-weight: 400;
          line-height: 16px;
        }
        .order-num{
          color: #111;
          font-family: 'PingFang SC';
          font-size: 12px;
          font-style: normal;
          font-weight: 400;
          line-height: 16px;
        }
      }
      .copy{
        display: flex;
        align-items: center;
        justify-content: space-between;
        .line{
          width:1px;
          height:12px;
          background: #EEE;
          margin-right: 14px;
        }
        .btn{
          color: #FF5000;
          font-family: 'PingFang SC';
          font-size: 14px;
          font-style: normal;
          font-weight: 400;
          line-height: 16px;
        }
      }
    }
    .bet-win-size{
      padding: 10px 15px;
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #eee;
      .bet{
        .size{
          color: #111;
          font-family: 'DIN Alternate';
          font-size: 14px;
          font-style: normal;
          font-weight: 700;
          line-height: 16px;
        }
      }
      .line{
        width:1px;
        height:24px;
        background: #EEE;
      }
      .win{
        .win-title{
          text-align: right;
        }
        .size{
          color: #F53F3F;
          font-family: 'DIN Alternate';
          font-size: 14px;
          font-style: normal;
          font-weight: 700;
          line-height: 16px;
        }
      }
    }
    .game-detail{
      padding:15px;
      border-bottom: 1px solid #eee;
      .detail-title-1{
        color: #111;
        font-family: 'PingFang SC';
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 16px;
      }
      .detail-title-2{
        color: #666;
        font-family: 'PingFang SC';
        font-size: 13px;
        font-style: normal;
        font-weight: 400;
        line-height: 16px;
      }
      .detail-title-3{
        color: #999;
        font-family: 'PingFang SC';
        font-size: 13px;
        font-style: normal;
        font-weight: 400;
        line-height: 16px;
      }
      .detail-title-4{
        color: #111;
        font-family: 'PingFang SC';
        font-size: 13px;
        font-style: normal;
        font-weight: 400;
        line-height: 16px;
        & span{
          color:#FF9000;
          font-weight:600;
        }
      }
      & p{
        margin-bottom:6px;
      }
      & p:last-child{
        margin-bottom: 0;
      }
    }
    .currency{
      margin-top:15px;
    }
  }
}
</style>

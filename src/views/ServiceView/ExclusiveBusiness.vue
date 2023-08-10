<template>
  <div class="exclusive-business">
    <NavBar :border="true" title="专属商务服务" :isShowRight="false" />
    <div class="exclusive-main">
      <div class="exclusive-ask">
        <div class="ask-left-content">
          <div class="ask-left-img">
            <img src="./img/head-phone.png" alt="error" class="img-head" />
          </div>
          <span>代理咨询</span>
        </div>
        <span class="ask-right">咨询</span>
      </div>
      <div class="exclusive-coperation">
        <div class="coperation-left-content">
          <img src="./img/service-68.png" alt="error" class="img-left" />
          <div class="left-content">
            <p class="coperation-68">68代理合作</p>
            <span class="coperation-title">你好</span>
          </div>
        </div>
        <div class="coperation-right-content">
          <div @click="download('http://youtube.com')" class="right-content">下载</div>
          <div class="right-content" v-clipboard="copyContent">复制</div>
        </div>
      </div>
      <div class="exclusive-coperation">
        <div class="coperation-left-content">
          <img src="./img/telegram.png" alt="error" class="img-left" />
          <div class="left-content">
            <p class="coperation-68">Telegram</p>
            <span class="coperation-title">{{ copyTelegram }}</span>
          </div>
        </div>
        <div class="coperation-right-content">
          <div @click="download('http://youtube.com')" class="right-content">下载</div>
          <div class="right-content" v-clipboard="copyTelegram">复制</div>
        </div>
      </div>
      <div class="exclusive-coperation">
        <div class="coperation-left-content">
          <img src="./img/whats-app.png" alt="error" class="img-left" />
          <div class="left-content">
            <p class="coperation-68">WhatsApp</p>
            <span class="coperation-title">https://www.whatsapp.com/1</span>
          </div>
        </div>
        <div class="coperation-right-content">
          <div @click="download('http://youtube.com')" class="right-content">下载</div>
          <div class="right-content" v-clipboard="copyContent">复制</div>
        </div>
      </div>
      <div class="exclusive-coperation">
        <div class="coperation-left-content">
          <img src="./img/QQ.png" alt="error" class="img-left" />
          <div class="left-content">
            <p class="coperation-68">QQ1</p>
            <span class="coperation-title">123456</span>
          </div>
        </div>
        <div class="coperation-right-content">
          <div class="right-content" v-clipboard="copyContent">复制</div>
        </div>
      </div>
      <div class="exclusive-coperation">
        <div class="coperation-left-content">
          <img src="./img/QQ.png" alt="error" class="img-left" />
          <div class="left-content">
            <p class="coperation-68">QQ2</p>
            <span class="coperation-title">654321</span>
          </div>
        </div>
        <div class="coperation-right-content">
          <div class="right-content" v-clipboard="copyContent">复制</div>
        </div>
      </div>
      <div class="exclusive-coperation">
        <div class="coperation-left-content">
          <img src="./img/wechat.png" alt="error" class="img-left" />
          <div class="left-content">
            <p class="coperation-68">微信</p>
            <span class="coperation-title">aa123456</span>
          </div>
        </div>
        <div class="coperation-right-content">
          <div class="right-content" v-clipboard="copyContent">复制</div>
        </div>
      </div>
      <div class="exclusive-coperation">
        <div class="coperation-left-content">
          <img src="./img/QQ.png" alt="error" class="img-left" />
          <div class="left-content">
            <p class="coperation-68">Skype1</p>
            <span class="coperation-title">你好</span>
          </div>
        </div>
        <div class="coperation-right-content">
          <div class="right-content" v-clipboard="copyContent">复制</div>
        </div>
      </div>
      <div class="exclusive-coperation">
        <div class="coperation-left-content">
          <img src="./img/skype.png" alt="error" class="img-left" />
          <div class="left-content">
            <p class="coperation-68">Skype2</p>
            <span class="coperation-title">33542</span>
          </div>
        </div>
        <div class="coperation-right-content">
          <div class="right-content" v-clipboard="copyContent">复制</div>
        </div>
      </div>
      <div class="exclusive-coperation">
        <div class="coperation-left-content">
          <div class="img-email">
            <img src="./img/email.png" alt="error" class="img-left-email" />
          </div>
          <div class="left-content">
            <p class="coperation-68">邮箱</p>
            <span class="coperation-title">An000000000111</span>
          </div>
        </div>
        <div class="coperation-right-content">
          <div class="right-content" v-clipboard="copyContent">复制</div>
        </div>
      </div>
    </div>
    <div class="all-support">
      <span class="support-right">>></span>
      <span class="support-title">全面推广支持</span>
      <span class="support-right">&lt;&lt;</span>
    </div>
    <div class="all-support-excel">
      <div class="support">
        <img src="./img/support.png" alt="error" class="img-support" />
        <p class="support-title">全面推广支持</p>
        <p class="support-paragrah">
          提供全面丰富的图片、推广素材原图. 可定制专属素材图片, 支持分发全网每个角落。
        </p>
      </div>
      <div class="excel">
        <img src="./img/data-excel.png" alt="" class="img-excel" />
        <p class="support-title">最全数据报表</p>
        <p class="support-paragrah">全面分析佣金组成、会员游戏状况 。对你的会员了如指掌。</p>
      </div>
    </div>
    <div class="all-support">
      <span class="support-right">>></span>
      <span class="support-title">行业顶尖竞猜平台</span>
      <span class="support-right">&lt;&lt;</span>
    </div>
    <div class="football-superstar"></div>
    <div class="open-account">
      <div class="open-header">
        <div class="header-linear"></div>
        <div class="header-title">强强联手,共创辉煌</div>
        <div class="header-linear-right"></div>
      </div>
      <div class="open-middle">
        C体育合营计划,助力您多端 、多渠道、多平台推广:提供行业最优质的资源和服务。
      </div>
      <div class="open-v-button">
        <v-button @click="openAccount">立即申请开户</v-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import vClipboard from '@/directives/clipboard'
import { ref } from 'vue'
import { jumpExternalLink } from '@/utils'
// import { useRouter } from 'vue-router'
// const router = useRouter()

const copyContent = ref('111')
const copyTelegram = ref('https:/t.me/bbjya1')
const openAccount = () => {}
const download = (url) => {
  jumpExternalLink({ url, type: 2 })
}
</script>

<style lang="scss" scoped>
@import './styles/service-business.scss';
</style>

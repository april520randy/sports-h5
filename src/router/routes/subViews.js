const ActivityDetailView = () => import('@/views/ActivityDetailView/ActivityDetailView.vue')
const GameView = () => import('@/views/GameView/GameView.vue')
const SponsorView = () => import('@/views/SponsorView/SponsorView.vue')
const WebView = () => import('@/views/WebView/WebView.vue')
const ServiceView = () => import('@/views/ServiceView/ServiceView.vue')
const DepositView = () => import('@/views/DepositView/DepositView.vue')
const WithdrawView = () => import('@/views/WithdrawView/WithdrawView.vue')
const TransferView = () => import('@/views/TransferView/TransferView.vue')
const VIPView = () => import('@/views/VIPView/VIPView.vue')
const PersonalCenterView = () => import('@/views/PersonalCenterView/PersonalCenterView.vue')
const MessageView = () => import('@/views/MessageView/MessageView.vue')
const TransactionRecordView = () =>
  import('@/views/TransactionRecordView/TransactionRecordView.vue')
const BetRecordView = () => import('@/views/BetRecordView/BetRecordView.vue')
const WelfareView = () => import('@/views/WelfareView/WelfareView.vue')
const HelpView = () => import('@/views/HelpView/HelpView.vue')
const FeedbackView = () => import('@/views/FeedbackView/FeedbackView.vue')
const InviteView = () => import('@/views/InviteView/InviteView.vue')
const AgentView = () => import('@/views/AgentView/AgentView.vue')
const AboutUsView = () => import('@/views/AboutUsView/AboutUsView.vue')
const ForgetView = () => import('@/views/ForgetView/ForgetView.vue')
const SponsorDetailView = () => import('@/views/SponsorDetailView/SponsorDetailView.vue')
const list = [
  {
    path: '/sponsor',
    name: 'sponsor',
    component: SponsorView
  },
  {
    path: '/sponsor/:id',
    name: 'sponsor-detail',
    component: SponsorDetailView
  },
  {
    path: '/webview',
    name: 'webview',
    component: WebView,
    meta: {}
  },
  {
    path: '/activity/:actId',
    name: 'activity-detail',
    component: ActivityDetailView
  },
  {
    path: '/game',
    name: 'game',
    component: GameView
  },

  {
    path: '/bet-record',
    name: 'bet-record',
    component: BetRecordView,
    meta: {
      isAuth: true
    }
  },
  {
    path: '/service',
    name: 'service',
    component: ServiceView
  },
  {
    path: '/deposit',
    name: 'deposit',
    component: DepositView,
    meta: {
      isAuth: true
    }
  },
  {
    path: '/withdraw',
    name: 'withdraw',
    component: WithdrawView,
    meta: {
      isAuth: true
    }
  },
  {
    path: '/transfer',
    name: 'transfer',
    component: TransferView,
    meta: {
      isAuth: true
    }
  },
  {
    path: '/vip',
    name: 'vip',
    component: VIPView,
    meta: {
      isAuth: true
    }
  },
  {
    path: '/personal-center',
    name: 'personal-center',
    component: PersonalCenterView,
    meta: {
      isAuth: true
    }
  },

  {
    path: '/message',
    name: 'message',
    component: MessageView,
    meta: {
      isAuth: true
    }
  },
  {
    path: '/transaction-record',
    name: 'transaction-record',
    component: TransactionRecordView,
    meta: {
      isAuth: true
    }
  },
  {
    path: '/welfare',
    name: 'welfare',
    component: WelfareView,
    meta: {
      isAuth: true
    }
  },
  {
    path: '/help',
    name: 'help',
    component: HelpView
  },
  {
    path: '/feedback',
    name: 'feedback',
    component: FeedbackView
  },
  {
    path: '/invite',
    name: 'invite',
    component: InviteView,
    meta: {
      isAuth: true
    }
  },

  {
    path: '/agent',
    name: 'agent',
    component: AgentView,
    meta: {
      isAuth: true
    }
  },
  {
    path: '/about-us',
    name: 'about-us',
    component: AboutUsView
  },
  {
    path: '/forget',
    name: 'forget',
    component: ForgetView
  }
]

export default list

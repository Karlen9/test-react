import { RouteNames, RoutePath } from 'shared/config/routeConfig/routeConfig'
import Analytic from 'shared/assets/icons/analytics.svg'
import Profile from 'shared/assets/icons/profile.svg'
import Moderation from 'shared/assets/icons/moderation.svg'
import Chats from 'shared/assets/icons/chats.svg'
import Banners from 'shared/assets/icons/banners.svg'
import Team from 'shared/assets/icons/team.svg'
import Blog from 'shared/assets/icons/blog.svg'
import Exchange from 'shared/assets/icons/exchange-rate.svg'

export const MenuList = [
  {
    title: RouteNames.ANALYTIC,
    icon: <Analytic />,
    route: RoutePath.analytic
  },
  {
    title: RouteNames.PROFILE,
    icon: <Profile />,
    route: RoutePath.profile
  },
  {
    title: RouteNames.MODERATION,
    icon: <Moderation />,
    route: RoutePath.moderation
  },
  {
    title: RouteNames.CHATS,
    icon: <Chats />,
    route: RoutePath.chats
  },
  {
    title: RouteNames.BANNERS,
    icon: <Banners />,
    route: RoutePath.banners
  },
  {
    title: RouteNames.TEAM,
    icon: <Team />,
    route: RoutePath.team
  },
  {
    title: RouteNames.BLOG,
    icon: <Blog />,
    route: RoutePath.blog
  },
  {
    title: RouteNames.EXCHANGE,
    icon: <Exchange />,
    route: RoutePath.exchange
  }
]

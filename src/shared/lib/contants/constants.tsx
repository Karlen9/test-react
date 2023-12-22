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

export const users = [
  {
    name: 'Артем Иванов',
    email: 'artem@gmail.com',
    permissions: ['Блог', 'Аналитика'],
    image:
      'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
  },
  {
    name: 'Лена Новикова',
    email: 'lenkan@gmail.com',
    permissions: ['Администратор'],
    image:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80'
  },
  {
    name: 'Максим Иванов',
    email: 'maksiim@gmail.com',
    permissions: ['Акции', 'Модерация объявлений', 'Тех. поддержка'],
    image:
      'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-614810.jpg&fm=jpg'
  },
  {
    name: 'Айжулдыз Кошкинбай',
    email: 'aizhzk@gmail.com',
    permissions: ['Обращение клиентов'],
    image: 'https://gorodprizrak.com/wp-content/uploads/2021/01/346545.jpg'
  }
]

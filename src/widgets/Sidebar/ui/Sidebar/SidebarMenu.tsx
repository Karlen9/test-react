import Analytic from 'shared/assets/icons/analytics.svg'
import Profile from 'shared/assets/icons/profile.svg'
import Moderation from 'shared/assets/icons/moderation.svg'
import Chats from 'shared/assets/icons/chats.svg'
import Banners from 'shared/assets/icons/banners.svg'
import Team from 'shared/assets/icons/team.svg'
import Blog from 'shared/assets/icons/blog.svg'
import Exchange from 'shared/assets/icons/exchange-rate.svg'
import Exit from 'shared/assets/icons/exit.svg'
import cls from './Sidebar.module.scss'
import { AppRoutes } from 'shared/config/routeConfig/routeConfig'
import { AppLink } from 'shared/ui/AppLink/AppLink'
import { Button } from 'shared/ui'
import { ButtonTheme } from 'shared/ui/Button/Button'

type SidebarMenuProps = {
  collapsed: boolean
}

export const SidebarMenu: React.FC<SidebarMenuProps> = ({ collapsed }) => {
  return (
    <div className={cls.sidebarMenu}>
      <AppLink to={`/${AppRoutes.ANALYTIC}`}>
        <Analytic />
      </AppLink>
      <AppLink to={`/${AppRoutes.PROFILE}`}>
        <Profile />
      </AppLink>
      <AppLink to={`/${AppRoutes.MODERATION}`}>
        <Moderation />
      </AppLink>
      <AppLink to={`/${AppRoutes.CHATS}`}>
        <Chats />
      </AppLink>
      <AppLink to={`/${AppRoutes.BANNERS}`}>
        <Banners />
      </AppLink>
      <AppLink to={`/${AppRoutes.TEAM}`}>
        <Team />
      </AppLink>
      <AppLink to={`/${AppRoutes.BLOG}`}>
        <Blog />
      </AppLink>
      <AppLink to={`/${AppRoutes.EXCHANGE}`}>
        <Exchange />
      </AppLink>
      <Button theme={ButtonTheme.ICON}>
        <Exit />
      </Button>
    </div>
  )
}

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
import { AppRoutes, RouteNames } from 'shared/config/routeConfig/routeConfig'
import { AppLink } from 'shared/ui/AppLink/AppLink'
import { Button } from 'shared/ui'
import { ButtonTheme } from 'shared/ui/Button/Button'
import { AppRouter } from 'app/providers/router'
import { useScreenSize } from 'shared/hooks/useScreenSize'

type SidebarMenuProps = {
  collapsed: boolean
}

export const SidebarMenu: React.FC<SidebarMenuProps> = ({ collapsed }) => {
  const { isMobile } = useScreenSize()
  return (
    <div className={collapsed ? cls.sidebarMenu : cls.collapsedMenu}>
      <AppLink to={`/${AppRoutes.ANALYTIC}`}>
        <div className={cls.routeWrapper}>
          <div className={cls.iconWrapper}>
            <Analytic />
          </div>
          {isMobile && !collapsed && (
            <div className={cls.routeName}>{RouteNames.ANALYTIC}</div>
          )}
        </div>
      </AppLink>
      <AppLink to={`/${AppRoutes.PROFILE}`}>
        <div className={cls.routeWrapper}>
          <div className={cls.iconWrapper}>
            <Profile />
          </div>
          {isMobile && !collapsed && (
            <div className={cls.routeName}>{RouteNames.PROFILE}</div>
          )}
        </div>
      </AppLink>
      <AppLink to={`/${AppRoutes.MODERATION}`}>
        <div className={cls.routeWrapper}>
          <div className={cls.iconWrapper}>
            <Moderation />
          </div>
          {isMobile && !collapsed && (
            <div className={cls.routeName}>{RouteNames.MODERATION}</div>
          )}
        </div>
      </AppLink>
      <AppLink to={`/${AppRoutes.CHATS}`}>
        <div className={cls.routeWrapper}>
          <div className={cls.iconWrapper}>
            <Chats />
          </div>
          {isMobile && !collapsed && (
            <div className={cls.routeName}>{RouteNames.CHATS}</div>
          )}
        </div>
      </AppLink>
      <AppLink to={`/${AppRoutes.BANNERS}`}>
        <div className={cls.routeWrapper}>
          <div className={cls.iconWrapper}>
            <Banners />
          </div>
          {isMobile && !collapsed && (
            <div className={cls.routeName}>{RouteNames.BANNERS}</div>
          )}
        </div>
      </AppLink>
      <AppLink to={`/${AppRoutes.TEAM}`}>
        <div className={cls.routeWrapper}>
          <div className={cls.iconWrapper}>
            <Team />
          </div>
          {isMobile && !collapsed && (
            <div className={cls.routeName}>{RouteNames.TEAM}</div>
          )}
        </div>
      </AppLink>
      <AppLink to={`/${AppRoutes.BLOG}`}>
        <div className={cls.routeWrapper}>
          <div className={cls.iconWrapper}>
            <Blog />
          </div>
          {isMobile && !collapsed && (
            <div className={cls.routeName}>{RouteNames.BLOG}</div>
          )}
        </div>
      </AppLink>
      <AppLink to={`/${AppRoutes.EXCHANGE}`}>
        <div className={cls.routeWrapper}>
          <div className={cls.iconWrapper}>
            <Exchange />
          </div>
          {isMobile && !collapsed && (
            <div className={cls.routeName}>{RouteNames.EXCHANGE}</div>
          )}
        </div>
      </AppLink>

      <div className={!isMobile ? cls.buttonWrapper : cls.exitMobile}>
        <AppLink to={''} className={cls.exitButton}>
          <div className={cls.iconWrapper}>
            <Exit />
          </div>
        </AppLink>
        {isMobile && <div className={cls.routeName}>Выйти</div>}
      </div>
    </div>
  )
}

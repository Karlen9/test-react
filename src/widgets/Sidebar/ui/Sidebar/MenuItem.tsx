import { AppLink } from 'shared/ui'
import cls from './Sidebar.module.scss'
import { useScreenSize } from 'shared/hooks/useScreenSize'
import { useStore } from 'shared'
import { classNames } from 'shared/lib/classNames/classNames'
import { useLocation } from 'react-router-dom'

type MenuItemProps = {
  title: string
  route: string
  icon: JSX.Element
}

export const MenuItem: React.FC<MenuItemProps> = (props) => {
  const { title, route, icon } = props
  const { isMobile } = useScreenSize()
  const { collapsed, setCollapsed } = useStore()
  const location = useLocation()
  const isActive = location.pathname === route

  const onCloseSidebar = () => {
    setCollapsed(true)
  }

  return (
    <div
      className={classNames(cls.menuItem, {}, [isActive ? cls.isActive : ''])}
      onClick={onCloseSidebar}
    >
      <AppLink to={route}>
        <div className={cls.routeWrapper}>
          <div className={cls.iconWrapper}>{icon}</div>
          {isMobile && !collapsed && (
            <div className={cls.routeName}>{title}</div>
          )}
        </div>
      </AppLink>
    </div>
  )
}

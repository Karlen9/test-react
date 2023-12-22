import cls from './Sidebar.module.scss'
import { AppLink } from 'shared/ui/AppLink/AppLink'
import Exit from 'shared/assets/icons/exit.svg'
import { useScreenSize } from 'shared/hooks/useScreenSize'
import { MenuList } from 'shared/lib/contants/constants'
import React from 'react'
import { MenuItem } from './MenuItem'
import { useLocation } from 'react-router-dom'

type SidebarMenuProps = {
  collapsed: boolean
}

export const SidebarMenu: React.FC<SidebarMenuProps> = ({ collapsed }) => {
  const { isMobile } = useScreenSize()

  return (
    <div className={collapsed ? cls.sidebarMenu : cls.collapsedMenu}>
      {MenuList.map((item) => (
        <React.Fragment key={item.route}>
          <MenuItem title={item.title} route={item.route} icon={item.icon} />
        </React.Fragment>
      ))}

      <div className={!isMobile ? cls.buttonWrapper : cls.exitMobile}>
        <div className={cls.iconWrapper}>
          <Exit />
        </div>
        {isMobile && <div className={cls.routeName}>Выйти</div>}
      </div>
    </div>
  )
}

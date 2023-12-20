import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Sidebar.module.scss'
import { useMemo, useState } from 'react'
import BurgerIcon from 'shared/assets/icons/burger.svg'
import { SidebarMenu } from './SidebarMenu'
import Logo from 'shared/assets/icons/logo.svg'
import profilePic from 'shared/assets/images/profile-pic.png'

export const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(true)

  const onToggle = () => {
    setCollapsed((prev) => !prev)
  }

  return (
    <div
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [])}
    >
      <div className={cls.SidebarContainer}>
        <div className={cls.Logo}>
          <Logo />
        </div>
        <div className={cls.ProfilePic}>
          <img src={profilePic} alt="" />
        </div>
        <SidebarMenu collapsed={collapsed} />
      </div>
    </div>
  )
}

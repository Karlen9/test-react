import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Sidebar.module.scss'
import { useState } from 'react'
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
      <div className={cls.Logo}>
        <Logo />
      </div>
      <div className={cls.pictureWrapper}>
        <img src={profilePic} alt="" />
      </div>
      <SidebarMenu collapsed={collapsed} />
    </div>
  )
}

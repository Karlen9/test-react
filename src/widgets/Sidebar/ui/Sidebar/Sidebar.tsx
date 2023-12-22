import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Sidebar.module.scss'
import { SidebarMenu } from './SidebarMenu'
import Logo from 'shared/assets/icons/logo.svg'
import profilePic from 'shared/assets/images/profile-pic.png'
import { useScreenSize } from 'shared/hooks/useScreenSize'
import { useStore } from 'shared'
import BurgerIcon from 'shared/assets/icons/burger.svg'

export const Sidebar = () => {
  const { isMobile } = useScreenSize()
  const { collapsed, setCollapsed } = useStore()

  return (
    <>
      {isMobile && !collapsed && (
        <div className={cls.mobileSidebar}>
          <div className={cls.burgerMobile} onClick={() => setCollapsed(true)}>
            <BurgerIcon />
          </div>
          <div className={cls.pictureWrapper}>
            <img src={profilePic} alt="" />
          </div>
          <SidebarMenu collapsed={collapsed} />
        </div>
      )}

      {!isMobile && (
        <div
          className={classNames(
            cls.Sidebar,
            { [cls.collapsed]: collapsed },
            []
          )}
        >
          <div className={cls.Logo}>
            <Logo />
          </div>
          <div className={cls.pictureWrapper}>
            <img src={profilePic} alt="" />
          </div>
          <SidebarMenu collapsed={collapsed} />
        </div>
      )}
    </>
  )
}

import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Sidebar.module.scss'
import { useMemo, useState } from 'react'
import BurgerIcon from 'shared/assets/icons/burger.svg'

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
        <div className={cls.BurgerButton} onClick={onToggle}>
          <BurgerIcon width="20px" height="14px" />
        </div>
      </div>
    </div>
  )
}

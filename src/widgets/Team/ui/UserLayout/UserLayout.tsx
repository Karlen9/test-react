import { User } from 'shared/models/User'
import cls from './UserLayout.module.scss'
import OptionsIcon from 'shared/assets/icons/options.svg'
import NoPicture from 'shared/assets/icons/no-picture.svg'
import { ButtonTheme } from 'shared/ui/Button/Button'
import { Button } from 'shared/ui'
import { useEffect, useRef, useState } from 'react'
import { UserOptions } from '../UserOptions'
import { onClickOutsideListener } from 'shared/lib/utils/onClickOutsideListener'
import { classNames } from 'shared/lib/classNames/classNames'

type UserLayoutProps = {
  user: User
  key: string
  removeUser: (email: string) => void
}

type PermissionProps = {
  permission: string
}

export const UserLayout: React.FC<UserLayoutProps> = ({
  user,
  key,
  removeUser
}) => {
  const [isOptionsOpen, setIsOptionsOpen] = useState(false)
  const [listenting, setListenting] = useState(false)
  const optionsRef = useRef<HTMLDivElement>(null)

  const onOptionsClick = () => {
    setIsOptionsOpen((prev) => !prev)
  }

  useEffect(
    onClickOutsideListener(
      listenting,
      setListenting,
      optionsRef,
      setIsOptionsOpen
    )
  )
  return (
    <div className={cls.UserLayout} key={key}>
      <div className={cls.leftBlock}>
        <div className={cls.profilePicture}>
          {user.image ? (
            <img src={user.image} alt="" />
          ) : (
            <div className={cls.noPicture}>
              <NoPicture />
            </div>
          )}
        </div>
        <div className={cls.mainInfo}>
          <div className={cls.upperBlock}>
            <div className={cls.name}>{user.name}</div>
            <div className={cls.isAuthorised}></div>
            <div className={cls.email}>{user.email}</div>
          </div>
          <div className={cls.lowerBlock}>
            {user.permissions.map((permission) => (
              <div key={key}>
                <Permission key={permission} permission={permission} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={cls.options} ref={optionsRef}>
        <Button theme={ButtonTheme.ICON} onClick={onOptionsClick}>
          <OptionsIcon />
        </Button>
        {isOptionsOpen && (
          <UserOptions email={user.email} removeUser={removeUser} />
        )}
      </div>
    </div>
  )
}

const Permission: React.FC<PermissionProps> = ({ permission }) => {
  return (
    <div
      className={classNames(cls.permission, {}, [
        permission === 'Администратор' ? cls.admin : ''
      ])}
    >
      {permission}
    </div>
  )
}

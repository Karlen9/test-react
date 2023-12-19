import { User } from 'shared/models/User'
import cls from './UserLayout.module.scss'
import OptionsIcon from 'shared/assets/icons/options.svg'
import NoPicture from 'shared/assets/icons/no-picture.svg'

type UserLayoutProps = {
  user: User
}

export const UserLayout: React.FC<UserLayoutProps> = ({ user }) => {
  return (
    <div className={cls.UserLayout}>
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
              <Permission permission={permission} />
            ))}
          </div>
        </div>
      </div>

      <div className={cls.options}>
        <button className="icon-button">
          <OptionsIcon />
        </button>
      </div>
    </div>
  )
}

const Permission = ({ permission }) => {
  return <div className={cls.permission}>{permission}</div>
}

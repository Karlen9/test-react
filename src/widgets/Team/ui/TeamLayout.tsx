import cls from './TeamLayout.module.scss'
import SearchIcon from 'shared/assets/icons/search.svg'
import users from '../../../source'
import { UserLayout } from './UserLayout'

export const TeamLayout = () => {
  return (
    <div className={cls.TeamLayout}>
      <div className={cls.header}>
        <div className={cls.leftBlock}>Команда</div>
        <div className={cls.rightBlock}>
          <button className="icon-button">
            <SearchIcon />
          </button>
          <button className="button-thin">Добавить пользователя</button>
        </div>
      </div>
      <div className={cls.usersWrapper}>
        {users.map((user) => (
          <UserLayout user={user} />
        ))}
      </div>
    </div>
  )
}

import cls from './TeamLayout.module.scss'
import SearchIcon from 'shared/assets/icons/search.svg'
import users from '../../../../source'
import { Button } from 'shared/ui'
import { ButtonTheme } from 'shared/ui/Button/Button'
import { UserLayout } from 'widgets/Team'

export const TeamLayout = () => {
  return (
    <div className={cls.TeamLayout}>
      <div className={cls.header}>
        <div className={cls.leftBlock}>Команда</div>
        <div className={cls.rightBlock}>
          <Button theme={ButtonTheme.ICON}>
            <SearchIcon />
          </Button>
          <Button theme={ButtonTheme.THIN}>Добавить пользователя</Button>
        </div>
      </div>
      <div className={cls.usersWrapper}>
        {users.map((user) => (
          <UserLayout key={user.email} user={user} />
        ))}
      </div>
    </div>
  )
}

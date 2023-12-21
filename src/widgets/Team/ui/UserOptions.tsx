import { Button } from 'shared/ui'
import cls from './UserOptions.module.scss'
import { ButtonTheme } from 'shared/ui/Button/Button'

type UserOptionsProps = {
  removeUser: (email: string) => void
  email: string
  permissions: string[]
}

export const UserOptions: React.FC<UserOptionsProps> = ({
  removeUser,
  email,
  permissions
}) => {
  return (
    <div className={cls.UserOptions}>
      <Button theme={ButtonTheme.ICON} className={cls.option}>
        Изменить права доступа
      </Button>
      <Button theme={ButtonTheme.ICON} className={cls.option}>
        Отправить код повторно
      </Button>
      <Button
        theme={ButtonTheme.ICON}
        className={cls.option}
        onClick={() => removeUser(email)}
        disabled={permissions.includes('Администратор')}
      >
        Удалить
      </Button>
    </div>
  )
}

import { Button } from 'shared/ui'
import cls from './UserOptions.module.scss'
import { ButtonTheme } from 'shared/ui/Button/Button'

export const UserOptions = () => {
  return (
    <div className={cls.UserOptions}>
      <Button theme={ButtonTheme.ICON} className={cls.option}>
        Изменить права доступа
      </Button>
      <Button theme={ButtonTheme.ICON} className={cls.option}>
        Отправить код повторно
      </Button>
      <Button theme={ButtonTheme.ICON} className={cls.option}>
        Удалить
      </Button>
    </div>
  )
}

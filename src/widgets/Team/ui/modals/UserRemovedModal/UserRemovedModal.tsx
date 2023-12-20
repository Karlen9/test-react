import { Button } from 'shared/ui'
import cls from './UserRemovedModal.module.scss'
import { ButtonTheme } from 'shared/ui/Button/Button'

export const UserRemovedModal = () => {
  return (
    <div className={cls.UserRemovedModal}>
      <div className="header">пользователь успешно удален</div>
      <Button theme={ButtonTheme.REGULAR}>Закрыть</Button>
    </div>
  )
}

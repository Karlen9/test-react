import { Button } from 'shared/ui'
import cls from './UserRemovedModal.module.scss'
import { ButtonTheme } from 'shared/ui/Button/Button'
import { classNames } from 'shared/lib/classNames/classNames'

export const UserRemovedModal = () => {
  return (
    <div className={classNames(cls.UserRemovedModal, {}, ['modal'])}>
      <div className={cls.header}>Пользователь успешно удален</div>
      <Button theme={ButtonTheme.REGULAR}>Закрыть</Button>
    </div>
  )
}

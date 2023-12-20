import { Button } from 'shared/ui'
import cls from './UserRemovedModal.module.scss'
import { ButtonTheme } from 'shared/ui/Button/Button'
import { classNames } from 'shared/lib/classNames/classNames'

type Props = {
  setIsRemoveModalOpen: (val: boolean) => void
}

export const UserRemovedModal: React.FC<Props> = ({ setIsRemoveModalOpen }) => {
  const onClose = () => {
    setIsRemoveModalOpen(false)
  }
  return (
    <div className={classNames(cls.UserRemovedModal, {}, ['modal'])}>
      <div className={cls.header}>Пользователь успешно удален</div>
      <Button theme={ButtonTheme.REGULAR} onClick={onClose}>
        Закрыть
      </Button>
    </div>
  )
}

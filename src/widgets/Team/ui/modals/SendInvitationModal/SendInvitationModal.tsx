import { Button } from 'shared/ui'
import cls from './SendInvitationModal.module.scss'
import Close from 'shared/assets/icons/close.svg'
import { ButtonTheme } from 'shared/ui/Button/Button'
import { classNames } from 'shared/lib/classNames/classNames'

export const SendInvitationModal = () => {
  return (
    <div className={classNames(cls.SendInvitationModal, {}, ['modal'])}>
      <div className={cls.closeButtonContainer}>
        <Button theme={ButtonTheme.ICON}>
          <div className={cls.closeButtonWrapper}>
            <Close />
          </div>
        </Button>
      </div>

      <div className={cls.main}>
        <div className={cls.header}>Отправьте приглашение</div>
        <input type="email" placeholder="Email" className="email" />
        <select className="select">Выберите права доступа</select>
        <Button theme={ButtonTheme.REGULAR}>Отправить приглашение</Button>
      </div>
    </div>
  )
}

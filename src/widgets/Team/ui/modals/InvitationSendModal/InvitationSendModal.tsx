import { classNames } from 'shared/lib/classNames/classNames'
import cls from './InvitationSendModal.module.scss'
import { Button } from 'shared/ui'
import { ButtonTheme } from 'shared/ui/Button/Button'

type InvitationSendModalProps = {
  email: string
}

export const InvitationSendModal: React.FC<InvitationSendModalProps> = ({
  email
}) => {
  return (
    <div className={classNames(cls.InvitationSendModal, {}, ['modal'])}>
      <div className={cls.header}>
        Приглашение отправлено на почту <br />
        {email}
      </div>
      <div className={cls.buttonWrapper}>
        <Button theme={ButtonTheme.REGULAR}>Закрыть</Button>
      </div>
    </div>
  )
}

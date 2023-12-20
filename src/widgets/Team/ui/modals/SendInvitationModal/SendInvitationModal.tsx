import { Button } from 'shared/ui'
import cls from './SendInvitationModal.module.scss'
import Close from 'shared/assets/icons/close.svg'
import { ButtonTheme } from 'shared/ui/Button/Button'
import { classNames } from 'shared/lib/classNames/classNames'
import { User } from 'shared/models/User'
import { useState } from 'react'

type SendInvitationModalProps = {
  setIsOpen: (val: boolean) => void
  addUser: (val: User) => void
}

export const SendInvitationModal: React.FC<SendInvitationModalProps> = ({
  setIsOpen,
  addUser
}) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const onClose = () => {
    setIsOpen(false)
  }

  const isValidEmail = (email: string) => {
    return /\S+@\S+\.\S+/.test(email)
  }

  const sendInvitation = () => {
    if (!isValidEmail(email)) return setError('Неверный формат почты')
    addUser({ name: 'Пользователь', email: email, permissions: [], image: '' })
    setIsOpen(false)
  }

  return (
    <div className={classNames(cls.SendInvitationModal, {}, ['modal'])}>
      <div className={cls.closeButtonContainer}>
        <Button theme={ButtonTheme.ICON} onClick={onClose}>
          <div className={cls.closeButtonWrapper}>
            <Close />
          </div>
        </Button>
      </div>

      <div className={cls.main}>
        <div className={cls.header}>Отправьте приглашение</div>
        {error && <div className={cls.error}>{error}</div>}
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
          className="email"
        />
        <select className="select">
          <option value="">
            <input type="checkbox" name="opt1" id="" />
          </option>
          <input type="checkbox" name="opt1" id="" />
          <input type="checkbox" name="opt1" id="" />
          <input type="checkbox" name="opt1" id="" />
          <input type="checkbox" name="opt1" id="" />
          <input type="checkbox" name="opt1" id="" />
        </select>
        <Button theme={ButtonTheme.REGULAR} onClick={sendInvitation}>
          Отправить приглашение
        </Button>
      </div>
    </div>
  )
}

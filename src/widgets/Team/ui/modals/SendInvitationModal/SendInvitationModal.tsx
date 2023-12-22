import { Button } from 'shared/ui'
import cls from './SendInvitationModal.module.scss'
import Close from 'shared/assets/icons/close.svg'
import { ButtonTheme } from 'shared/ui/Button/Button'
import { classNames } from 'shared/lib/classNames/classNames'
import { User } from 'shared/models/User'
import { useState } from 'react'
import { CustomSelect } from 'shared/ui/CustomSelect/CustomSelect'

type SendInvitationModalProps = {
  setIsOpen: (val: boolean) => void
  allUsers: User[]
  setAllUsers: (val: User[]) => void
}

export const SendInvitationModal: React.FC<SendInvitationModalProps> = ({
  setIsOpen,
  allUsers,
  setAllUsers
}) => {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [selectedPermissions, setSelectedPermissions] = useState<
    { name: string; id: number }[]
  >([])
  const onClose = () => {
    setIsOpen(false)
  }

  const isValidEmail = (email: string) => {
    return /\S+@\S+\.\S+/.test(email)
  }

  const sendInvitation = () => {
    if (!isValidEmail(email)) return setError('Неверный формат почты')
    if (allUsers.some((user) => user.email === email))
      return setError('Такой пользоватнль уже существует')
    const copiedUsers = [...allUsers]
    setAllUsers([
      {
        name: 'Пользователь',
        email: email,
        permissions: selectedPermissions.map((item) => item.name),
        image: ''
      },
      ...copiedUsers
    ])
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

        <CustomSelect
          selectedPermissions={selectedPermissions}
          setSelectedPermissions={setSelectedPermissions}
        />

        <Button theme={ButtonTheme.REGULAR} onClick={sendInvitation}>
          Отправить приглашение
        </Button>
      </div>
    </div>
  )
}

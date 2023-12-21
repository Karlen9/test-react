import { Button } from 'shared/ui'
import cls from './SendInvitationModal.module.scss'
import Close from 'shared/assets/icons/close.svg'
import { ButtonTheme } from 'shared/ui/Button/Button'
import { classNames } from 'shared/lib/classNames/classNames'
import { User } from 'shared/models/User'
import { useState } from 'react'
import { MultiSelect, Option } from 'react-multi-select-component'

type SendInvitationModalProps = {
  setIsOpen: (val: boolean) => void
  allUsers: User[]
  setAllUsers: (val: User[]) => void
}

const options = [
  { value: 'модерация', label: 'Модерация объявлений' },
  { value: 'блог', label: 'Блог' },
  { value: 'техподдержка', label: 'Тех. поддержка' },
  { value: 'обращения', label: 'Обращения клиентов' },
  { value: 'аналитика', label: 'Аналитика' },
  { value: 'акции', label: 'Акции' }
]

export const SendInvitationModal: React.FC<SendInvitationModalProps> = ({
  setIsOpen,
  allUsers,
  setAllUsers
}) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [selectedPermissions, setSelectedPermissions] = useState<Option[]>([])
  const onClose = () => {
    setIsOpen(false)
  }

  const isValidEmail = (email: string) => {
    return /\S+@\S+\.\S+/.test(email)
  }

  const sendInvitation = () => {
    if (!isValidEmail(email)) return setError('Неверный формат почты')
    const copiedUsers = [...allUsers]
    setAllUsers([
      {
        name: 'Пользователь',
        email: email,
        permissions: [...selectedPermissions.map((e) => e.label)],
        image: ''
      },
      ...copiedUsers
    ])
    setIsOpen(false)
  }

  console.log(selectedPermissions)

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
        <MultiSelect
          options={options}
          value={selectedPermissions}
          onChange={setSelectedPermissions}
          labelledBy="Select"
          overrideStrings={{
            selectAll: 'Все',
            selectSomeItems: 'Выберите права доступа',
            allItemsAreSelected: 'Все права выбраны'
          }}
          className={cls.select}
          // ItemRenderer={(option, onClick, checked) => (
          //   <DropDownOption
          //     checked={checked}
          //     option={option}
          //     onClick={onClick}
          //   />
          // )}
          // valueRenderer={(selected, options) => (
          //   <DropDownHeader selected={selected} options={options} />
          // )}
          disableSearch
        />
        <Button theme={ButtonTheme.REGULAR} onClick={sendInvitation}>
          Отправить приглашение
        </Button>
      </div>
    </div>
  )
}

const DropDownHeader = ({
  selected,
  options
}: {
  selected: Option[]
  options: Option[]
}) => {
  return <div className={cls.SelectComponent}></div>
}

const DropDownOption = ({
  checked,
  option,
  onClick
}: {
  checked: boolean
  option: Option
  onClick: () => void
}) => {
  return (
    <div className={cls.itemRenderer}>
      <input
        type="checkbox"
        onChange={onClick}
        checked={checked}
        tabIndex={-1}
      />
      <span>{option.label}</span>
    </div>
  )
}

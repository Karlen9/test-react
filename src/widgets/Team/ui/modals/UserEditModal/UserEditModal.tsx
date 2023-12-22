import { classNames } from 'shared/lib/classNames/classNames'
import cls from './UserEditModal.module.scss'
import { User } from 'shared/models/User'
import { Button } from 'shared/ui'
import { ButtonTheme } from 'shared/ui/Button/Button'
import { CustomSelect } from 'shared/ui/CustomSelect/CustomSelect'
import { useEffect, useState } from 'react'

type UserEditModalProps = {
  editingUser?: User
  setEditingUser: (email: string) => void
  allUsers: User[]
  setAllUsers: (users: User[]) => void
}

export const UserEditModal: React.FC<UserEditModalProps> = ({
  editingUser,
  setEditingUser,
  allUsers,
  setAllUsers
}) => {
  const onClose = () => {
    setEditingUser('')
  }

  useEffect(() => {
    if (!editingUser) return
    setSelectedPermissions(
      editingUser.permissions.map((item) => {
        return { name: item, id: Math.random() }
      })
    )
  }, [])

  const [selectedPermissions, setSelectedPermissions] = useState<
    { name: string; id: number }[]
  >([])
  const onApplyChanges = () => {
    setAllUsers(
      allUsers.map((user) => {
        if (user.email === editingUser?.email) {
          user.permissions = selectedPermissions.map((item) => item.name)
        }
        return user
      })
    )
    setEditingUser('')
  }
  return (
    <div className={classNames(cls.UserEditModal, {}, ['modal'])}>
      <div className={cls.header}>Изменить пользователя</div>
      {editingUser && (
        <CustomSelect
          selectedPermissions={selectedPermissions}
          setSelectedPermissions={setSelectedPermissions}
        />
      )}
      <Button theme={ButtonTheme.REGULAR} onClick={onApplyChanges}>
        Сохранить
      </Button>
      <Button theme={ButtonTheme.REGULAR} onClick={onClose}>
        Закрыть
      </Button>
    </div>
  )
}

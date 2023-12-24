import { classNames } from 'shared/lib/classNames/classNames'
import cls from './UserEditModal.module.scss'
import { User } from 'shared/models/User'
import { Button } from 'shared/ui'
import { ButtonTheme } from 'shared/ui/Button/Button'
import { CustomSelect } from 'shared/ui/CustomSelect/CustomSelect'
import { useEffect } from 'react'

type UserEditModalProps = {
  editingUser?: User
  setEditingUser: (email: string) => void
  allUsers: User[]
  setAllUsers: (users: User[]) => void
  selectedPermissions: { name: string; id: number }[]
  setSelectedPermissions: (val: { name: string; id: number }[]) => void
}

export const UserEditModal: React.FC<UserEditModalProps> = ({
  editingUser,
  setEditingUser,
  allUsers,
  setAllUsers,
  selectedPermissions,
  setSelectedPermissions
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

  const onApplyChanges = () => {
    setAllUsers(
      allUsers.map((user) =>
        user.email === editingUser?.email
          ? { ...user, permissions: selectedPermissions.map(item => item.name) }
          : user
      )
    )
    setEditingUser('')
  }
  return (
    <div className={classNames(cls.UserEditModal, {}, ['modal'])}>
      <div className={cls.header}>Изменить пользователя <br/> {editingUser?.name}</div>
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

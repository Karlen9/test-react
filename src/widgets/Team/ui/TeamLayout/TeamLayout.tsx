import cls from './TeamLayout.module.scss'
import SearchIcon from 'shared/assets/icons/search.svg'
import { addToArray, removeFromArray, users } from '../../../../source'
import { Button } from 'shared/ui'
import { ButtonTheme } from 'shared/ui/Button/Button'
import { UserLayout } from 'widgets/Team'
import { useEffect, useState } from 'react'
import { SendInvitationModal, UserRemovedModal } from '../modals'
import { User } from 'shared/models/User'

type TeamLayoutProps = {
  setIsModal: (val: boolean) => void
  users: User[]
}

export const TeamLayout: React.FC<TeamLayoutProps> = ({
  setIsModal,
  users
}) => {
  const [isInviteUserModalOpen, setIsInviteUserModalOpen] = useState(false)
  const [isRemoveModalOpen, setIsRemoveModalOpen] = useState(false)
  const [allUsers, setAllUsers] = useState<User[]>([])
  const onAddUser = () => {
    setIsInviteUserModalOpen(true)
    setIsModal(true)
  }
  useEffect(() => {
    setAllUsers(users)
    localStorage.setItem('users', JSON.stringify(users))
  }, [])

  const removeUser = (email: string) => {
    const usersCopy = [...allUsers]
    const newArray = usersCopy.filter((user) => user.email !== email)
    setAllUsers(newArray)
    setIsRemoveModalOpen(true)
    localStorage.setItem('users', JSON.stringify(newArray))
  }

  const addUser = (user: User) => {
    const copiedUsers = [...allUsers]
    setAllUsers([...copiedUsers, user])
    localStorage.setItem('users', JSON.stringify([...copiedUsers, user]))
  }

  return (
    <>
      <div className={cls.TeamLayout}>
        <div className={cls.header}>
          <div className={cls.leftBlock}>Команда</div>
          <div className={cls.rightBlock}>
            <Button theme={ButtonTheme.ICON}>
              <SearchIcon />
            </Button>
            <Button theme={ButtonTheme.THIN} onClick={onAddUser}>
              Добавить пользователя
            </Button>
          </div>
        </div>
        <div className={cls.usersWrapper}>
          {allUsers.length ? (
            allUsers.map((user) => (
              <UserLayout
                key={user.email}
                user={user}
                removeUser={removeUser}
              />
            ))
          ) : (
            <div className={cls.noUsers}>Пользователей нет</div>
          )}
        </div>
      </div>
      {isInviteUserModalOpen && (
        <SendInvitationModal
          addUser={addUser}
          setIsOpen={setIsInviteUserModalOpen}
        />
      )}
      {isRemoveModalOpen && (
        <UserRemovedModal setIsRemoveModalOpen={setIsRemoveModalOpen} />
      )}
    </>
  )
}

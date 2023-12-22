import cls from './TeamLayout.module.scss'
import users from '../../../../source.json'
import { Button } from 'shared/ui'
import { ButtonTheme } from 'shared/ui/Button/Button'
import { UserLayout } from 'widgets/Team'
import { useMemo, useState } from 'react'
import { SendInvitationModal, UserEditModal, UserRemovedModal } from '../modals'
import { User } from 'shared/models/User'
import React from 'react'
import { Search } from '../Search'
import { useScreenSize } from 'shared/hooks/useScreenSize'
import BurgerIcon from 'shared/assets/icons/burger.svg'
import { useStore } from 'shared'

type TeamLayoutProps = {
  users: User[]
}

export const TeamLayout: React.FC<TeamLayoutProps> = () => {
  const [isInviteUserModalOpen, setIsInviteUserModalOpen] = useState(false)
  const [isRemoveModalOpen, setIsRemoveModalOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [allUsers, setAllUsers] = useState<User[]>(users)
  const [searchValue, setSearchValue] = useState('')
  const [editingUser, setEditingUser] = useState('')
  const { setCollapsed } = useStore()
  const onAddUser = () => {
    setIsInviteUserModalOpen(true)
  }

  const { isMobile } = useScreenSize()

  const filteredUsers = useMemo(() => {
    return allUsers.filter((user) => {
      return user.email.toLowerCase().includes(searchValue.toLowerCase())
    })
  }, [searchValue])

  const removeUser = (email: string) => {
    const newArray = allUsers.filter((user) => user.email !== email)
    setAllUsers(newArray)
    setIsRemoveModalOpen(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
  }

  const handleOpenSidebar = () => {
    setCollapsed(false)
  }

  return (
    <>
      <div className={cls.TeamLayout}>
        <div className={cls.header}>
          <div className={cls.leftBlock}>
            {isMobile && (
              <div className={cls.burgerButton} onClick={handleOpenSidebar}>
                <BurgerIcon />
              </div>
            )}
            <div>Команда</div>
          </div>
          <div className={cls.rightBlock}>
            <Search
              isOpen={isSearchOpen || isMobile}
              setIsSearchOpen={setIsSearchOpen}
              searchValue={searchValue}
              handleChange={handleChange}
            />
            <div className={cls.buttonWrapper}>
              <Button theme={ButtonTheme.THIN} onClick={onAddUser}>
                Добавить пользователя
              </Button>
            </div>
          </div>
        </div>
        <div className={cls.usersWrapper}>
          {filteredUsers.length ? (
            filteredUsers.map((user) => (
              <React.Fragment key={Math.random().toString()}>
                <UserLayout
                  user={user}
                  removeUser={removeUser}
                  setEditingUser={setEditingUser}
                />
              </React.Fragment>
            ))
          ) : (
            <div className={cls.noUsers}>Пользователей нет</div>
          )}
        </div>
      </div>
      {isInviteUserModalOpen && (
        <SendInvitationModal
          setIsOpen={setIsInviteUserModalOpen}
          setAllUsers={setAllUsers}
          allUsers={allUsers}
        />
      )}
      {isRemoveModalOpen && (
        <UserRemovedModal setIsRemoveModalOpen={setIsRemoveModalOpen} />
      )}
      {editingUser && (
        <UserEditModal
          editingUser={allUsers.find((user) => user.email === editingUser)}
          setEditingUser={setEditingUser}
          allUsers={allUsers}
          setAllUsers={setAllUsers}
        />
      )}
    </>
  )
}

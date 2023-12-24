import cls from './TeamLayout.module.scss'
import allUsers from '../../../../source.json'
import { Button } from 'shared/ui'
import { ButtonTheme } from 'shared/ui/Button/Button'
import { UserLayout } from 'widgets/Team'
import { useEffect, useMemo, useState } from 'react'
import { SendInvitationModal, UserEditModal, UserRemovedModal } from '../modals'
import { User } from 'shared/models/User'
import React from 'react'
import { Search } from '../Search'
import { useScreenSize } from 'shared/hooks/useScreenSize'
import BurgerIcon from 'shared/assets/icons/burger.svg'
import { useStore } from 'shared'

export const TeamLayout = () => {
  const [isInviteUserModalOpen, setIsInviteUserModalOpen] = useState(false)
  const [isRemoveModalOpen, setIsRemoveModalOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  const [editingUser, setEditingUser] = useState('')
  const { setCollapsed } = useStore()
  const [selectedPermissions, setSelectedPermissions] = useState<
  { name: string; id: number }[]
>([])
  const { isMobile } = useScreenSize()
  const onAddUser = () => {
    setIsInviteUserModalOpen(true)
  }
  const users: User[] = JSON.parse(localStorage.getItem('users') ?? '[]')
  const setUsers =  (users: User[]) => localStorage.setItem('users', JSON.stringify(users))

  useEffect(() => {
    if (users?.length) return
    localStorage.setItem('users', JSON.stringify(allUsers))
  }, [])


  const filteredUsers = useMemo(() => {
    if(!searchValue) return users
    return users.filter((user) => {
      return user.email.toLowerCase().includes(searchValue.toLowerCase())
    })
  }, [searchValue, users])

  const removeUser = (email: string) => {
    const newArray = users.filter((user) => user.email !== email)
    setUsers(newArray)
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
          setAllUsers={setUsers}
          allUsers={users}
          selectedPermissions={selectedPermissions}
          setSelectedPermissions={setSelectedPermissions}
        />
      )}
      {isRemoveModalOpen && (
        <UserRemovedModal setIsRemoveModalOpen={setIsRemoveModalOpen} />
      )}
      {editingUser && (
        <UserEditModal
          editingUser={users.find((user) => user.email === editingUser)}
          setEditingUser={setEditingUser}
          allUsers={users}
          selectedPermissions={selectedPermissions}
          setSelectedPermissions={setSelectedPermissions}
          setAllUsers={setUsers}
        />
      )}
    </>
  )
}

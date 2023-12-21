import cls from './TeamLayout.module.scss'
import users from '../../../../source.json'
import { Button } from 'shared/ui'
import { ButtonTheme } from 'shared/ui/Button/Button'
import { UserLayout } from 'widgets/Team'
import { useEffect, useState } from 'react'
import { SendInvitationModal, UserRemovedModal } from '../modals'
import { User } from 'shared/models/User'
import React from 'react'
import { Search } from '../Search'
import { useScreenSize } from 'shared/hooks/useScreenSize'
import BurgerIcon from 'shared/assets/icons/burger.svg'
import { Sidebar } from 'widgets/Sidebar'
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
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const { collapsed, setCollapsed } = useStore()
  const onAddUser = () => {
    setIsInviteUserModalOpen(true)
  }

  const { isMobile } = useScreenSize()

  useEffect(() => {
    const filteredUsers = allUsers.filter((user) =>
      user.email.includes(searchValue)
    )
    setAllUsers(filteredUsers)
    console.log(searchValue)
  }, [searchValue])

  const removeUser = (email: string) => {
    const newArray = allUsers.filter((user) => user.email !== email)
    setAllUsers(newArray)
    setIsRemoveModalOpen(true)
  }

  const onOpenSearch = () => {
    setIsSearchOpen(true)
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
              onOpenSearch={onOpenSearch}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
            />
            <div className={cls.buttonWrapper}>
              <Button theme={ButtonTheme.THIN} onClick={onAddUser}>
                Добавить пользователя
              </Button>
            </div>
          </div>
        </div>
        <div className={cls.usersWrapper}>
          {allUsers.length ? (
            allUsers.map((user) => (
              <React.Fragment key={Math.random().toString()}>
                <UserLayout user={user} removeUser={removeUser} />
              </React.Fragment>
            ))
          ) : (
            <div className={cls.noUsers}>Пользователей нет</div>
          )}
        </div>
      </div>

      {isSidebarOpen && (
        <div>
          <Sidebar />
        </div>
      )}
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
    </>
  )
}

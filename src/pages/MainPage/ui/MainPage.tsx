import cls from './MainPage.module.scss'
import { useEffect, useMemo, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { TeamLayout } from 'widgets/Team'

const users = [
  {
    name: 'Артем Иванов',
    email: 'artem@gmail.com',
    permissions: ['Блог', 'Аналитика'],
    image:
      'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
  },
  {
    name: 'Лена Новикова',
    email: 'lenkan@gmail.com',
    permissions: ['Администратор'],
    image:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80'
  },
  {
    name: 'Максим Иванов',
    email: 'maksiim@gmail.com',
    permissions: ['Акции', 'Модерация объявлений', 'Тех. поддержка'],
    image:
      'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-614810.jpg&fm=jpg'
  },
  {
    name: 'Айжулдыз Кошкинбай',
    email: 'aizhzk@gmail.com',
    permissions: ['Обращение клиентов'],
    image: 'https://gorodprizrak.com/wp-content/uploads/2021/01/346545.jpg'
  }
]

const MainPage = () => {
  const [isModal, setIsModal] = useState(false)

  return (
    <div className={cls.mainPageWrapper}>
      <div className={isModal ? cls.dark : ''}></div>
      <div className={cls.MainPage}>
        <div className={cls.pageWrapper}>
          <TeamLayout setIsModal={setIsModal} users={users} />
        </div>
      </div>
    </div>
  )
}

export default MainPage

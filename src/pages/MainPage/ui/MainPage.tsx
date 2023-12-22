import cls from './MainPage.module.scss'
import { TeamLayout } from 'widgets/Team'
import { users } from 'shared/lib/contants/constants'

const MainPage = () => {
  return (
    <div className={cls.mainPageWrapper}>
      <div className={cls.MainPage}>
        <div className={cls.pageWrapper}>
          <TeamLayout users={users} />
        </div>
      </div>
    </div>
  )
}

export default MainPage

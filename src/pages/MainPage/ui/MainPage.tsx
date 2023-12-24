import cls from './MainPage.module.scss'
import { TeamLayout } from 'widgets/Team'

const MainPage = () => {
  return (
    <div className={cls.mainPageWrapper}>
      <div className={cls.MainPage}>
        <div className={cls.pageWrapper}>
          <TeamLayout />
        </div>
      </div>
    </div>
  )
}

export default MainPage

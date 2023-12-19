import cls from './MainPage.module.scss'
import { useEffect, useMemo, useState } from 'react'
import { useOneDayForecast } from 'shared/hooks/useOneDayForecast'
import { Sidebar } from 'widgets/Sidebar'
import { TeamLayout } from 'widgets/Team'

const MainPage = () => {
  const city = 'Taganrog'

  const { dayForecast, error: dayForecastError } = useOneDayForecast(city)

  return (
    <>
      <div className={cls.MainPage}>
        <div className={cls.pageWrapper}>
          <TeamLayout />
        </div>
      </div>
    </>
  )
}

export default MainPage

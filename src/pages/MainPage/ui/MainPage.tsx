import cls from './MainPage.module.scss'
import { useEffect, useMemo, useState } from 'react'
import { TeamLayout } from 'widgets/Team'

const MainPage = () => {
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

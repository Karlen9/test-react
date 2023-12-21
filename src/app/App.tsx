import { Sidebar } from 'widgets/Sidebar'
import { AppRouter } from './providers/router'
import './styles/index.scss'
import { Suspense } from 'react'
import { useScreenSize } from 'shared/hooks/useScreenSize'
import { useStore } from 'shared'

const App = () => {
  const { isMobile } = useScreenSize()
  const { collapsed } = useStore()
  return (
    <div className="app">
      <Suspense fallback="">
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  )
}

export default App

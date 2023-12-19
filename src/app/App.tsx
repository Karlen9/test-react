import { Sidebar } from 'widgets/Sidebar'
import { AppRouter } from './providers/router'
import { useTheme } from './providers/ThemeProvider/lib/useTheme'
import './styles/index.scss'
import { Suspense } from 'react'

const App = () => {
  const { theme } = useTheme()

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

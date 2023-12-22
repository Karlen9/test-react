import { AppLink, Button } from 'shared/ui'
import { ButtonTheme } from 'shared/ui/Button/Button'
import cls from './NotAvailableYet.module.scss'

const NotAvailableYet = () => {
  return (
    <div className={cls.NotAvailableYet}>
      Not available yet
      <div>
        <Button theme={ButtonTheme.THIN}>
          <AppLink to={'/team'}>Вернуться на главную</AppLink>
        </Button>
      </div>
    </div>
  )
}

export default NotAvailableYet

import { AppLink, Button } from 'shared/ui'
import cls from './NotFound.module.scss'
import { ButtonTheme } from 'shared/ui/Button/Button'

const NotFound = () => {
  return (
    <div className={cls.NotFound}>
      <div className={cls.errorCode}>404</div>
      <div className={cls.errorText}>Страница не найдена</div>
      <div>
        <Button theme={ButtonTheme.THIN}>
          <AppLink to={'/team'}>Вернуться на главную</AppLink>
        </Button>
      </div>
    </div>
  )
}

export default NotFound

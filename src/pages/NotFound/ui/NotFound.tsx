import { AppLink } from 'shared/ui'
import cls from './NotFound.module.scss'

const NotFound = () => {
  return (
    <div className={cls.NotFound}>
      <div className={cls.errorCode}>404</div>
      <div className={cls.errorText}>Страница не найдена</div>
      <div>
        <AppLink to={'/team'} className="button-thin">
          Вернуться на главную
        </AppLink>
      </div>
    </div>
  )
}

export default NotFound

import type { LinkProps } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './AppLink.module.scss'

interface AppLinkProps extends LinkProps {
  className?: string
}
export const AppLink: React.FC<AppLinkProps> = (props) => {
  const { children, className, to, ...restProps } = props

  return (
    <Link
      to={to}
      className={classNames(cls.AppLink, {}, [className ?? ''])}
      {...restProps}
    >
      {children}
    </Link>
  )
}

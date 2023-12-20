import { ButtonHTMLAttributes } from 'react'
import cls from './Button.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'

export enum ButtonTheme {
  REGULAR = 'regular',
  THIN = 'thin',
  ICON = 'icon'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ButtonTheme
}

export const Button: React.FC<ButtonProps> = (props) => {
  const { className, children, theme, ...restProps } = props
  return (
    <button
      className={classNames(cls.Button, {}, [
        className ?? '',
        cls[theme ?? '']
      ])}
      {...restProps}
    >
      {children}
    </button>
  )
}

import type { ButtonHTMLAttributes, FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import Loading from 'shared/assets/icons/loading.svg'
import cls from './Button.module.scss'

export enum ThemeButton {
  BASIC = 'basic',
  THIN = 'thin',
  CLEAN = 'clean'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ThemeButton
}

export const Button: FC<ButtonProps> = (props) => {
  const { className, children, theme, ...restProps } = props

  return (
    <button
      className={classNames(cls.Button, {}, [
        className ?? '',
        cls[theme ?? '']
      ])}
      {...restProps}
    ></button>
  )
}

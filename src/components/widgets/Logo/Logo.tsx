import { FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { IClassName } from 'shared/types/shared'
import classes from './Logo.module.scss'

interface ILogoProps extends IClassName {}

const Logo: FC<ILogoProps> = ({ className }) => {
  return (
    <div className={classNames(classes.logo, {}, [className])}>
      <img src='images/logo.svg' alt='logotype' />
      <h2 className={classNames(classes.text)}>Healthy food</h2>
    </div>
  )
}

export default Logo

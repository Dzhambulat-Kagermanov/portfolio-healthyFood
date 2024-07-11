import { FC, LinkHTMLAttributes, ReactNode } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { IClassName } from 'shared/types/shared'
import classes from './Link.module.scss'

interface ILinkProps extends IClassName, LinkHTMLAttributes<HTMLAnchorElement> {
  href?: string
}

const Link: FC<ILinkProps> = ({ className, href, children, onClick }) => {
  return (
    <a href={`${href || ''}`} className={classNames(classes.link, {}, [className])} onClick={onClick}>
      {children}
    </a>
  )
}

export default Link

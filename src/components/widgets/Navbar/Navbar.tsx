import { FC, MouseEventHandler } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { IClassName } from 'shared/types/shared'
import classes from './Navbar.module.scss'
import Link from 'shared/ui/Link/Link'

interface INavbar extends IClassName {
  linkOnClick?: MouseEventHandler<HTMLElement>
}

const Navbar: FC<INavbar> = ({ className, linkOnClick }) => {
  return (
    <nav>
      <ul className={classNames(classes.navbar, {}, [className])}>
        <li className={classNames(classes.item)}>
          <Link href={'#anchor-menu'} className={classNames(classes.link)} onClick={linkOnClick}>
            Menu
          </Link>
        </li>
        <li className={classNames(classes.item)}>
          <Link href={'#anchor-recipes'} className={classNames(classes.link)} onClick={linkOnClick}>
            Recipes
          </Link>
        </li>
        <li className={classNames(classes.item)}>
          <Link href={'#anchor-chefs'} className={classNames(classes.link)} onClick={linkOnClick}>
            Chefs
          </Link>
        </li>
        <li className={classNames(classes.item)}>
          <Link href={'#anchor-contacts'} className={classNames(classes.link)} onClick={linkOnClick}>
            Contacts
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar

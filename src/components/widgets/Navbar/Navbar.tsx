import { FC, MouseEventHandler } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { IClassName } from 'shared/types/shared'
import Link from 'shared/ui/Link/Link'
import classes from './Navbar.module.scss'

interface INavbar extends IClassName {
  linkOnClick?: MouseEventHandler<HTMLElement>
  linkClass?: string
  linkItemClass?: string
}

const Navbar: FC<INavbar> = ({ className, linkOnClick, linkClass, linkItemClass }) => {
  return (
    <nav>
      <ul className={classNames(classes.navbar, {}, [className])}>
        <li className={classNames(classes.item, {}, [linkClass])}>
          <Link href={'#anchor-menu'} className={classNames(classes.link, {}, [linkItemClass])} onClick={linkOnClick}>
            Menu
          </Link>
        </li>
        <li className={classNames(classes.item, {}, [linkClass])}>
          <Link
            href={'#anchor-recipes'}
            className={classNames(classes.link, {}, [linkItemClass])}
            onClick={linkOnClick}
          >
            Recipes
          </Link>
        </li>
        <li className={classNames(classes.item, {}, [linkClass])}>
          <Link href={'#anchor-chefs'} className={classNames(classes.link, {}, [linkItemClass])} onClick={linkOnClick}>
            Chefs
          </Link>
        </li>
        <li className={classNames(classes.item, {}, [linkClass])}>
          <Link
            href={'#anchor-contacts'}
            className={classNames(classes.link, {}, [linkItemClass])}
            onClick={linkOnClick}
          >
            Contacts
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar

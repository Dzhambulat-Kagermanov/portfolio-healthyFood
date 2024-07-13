import { Children, cloneElement, FC, ReactElement, ReactNode, useState } from 'react'
import classes from './Dropdown.module.scss'
import { IChildren, IClassName } from 'shared/types/shared'
import { classNames } from 'shared/lib/classNames/classNames'
import Button from '../Button/Button'

interface IDropdownProps extends IClassName, IChildren {
  collapseArrow?: string
  placeholder?: string
}
const Dropdown: FC<IDropdownProps> = ({ children, className, collapseArrow, placeholder }) => {
  const childrenArray: any[] = Children.toArray(children)

  const defaultActiveElem: ReactNode = childrenArray.find((el) => {
    return Object.hasOwn(el.props, 'active')
  })
  const [isActive, setIsActive] = useState<boolean>(false)
  const [activeElem, setActiveElem] = useState<ReactNode>(defaultActiveElem)
  console.log()

  return (
    <div className={classNames(classes.dropdown, { [classes.activeDropdown]: isActive }, [className])}>
      <Button
        className={classNames(classes.activeElem)}
        theme='clear'
        onClick={() => {
          setIsActive((current) => !current)
        }}
      >
        <div className={classNames(classes.activeElemContent)}>{activeElem || placeholder || 'Choose elem'}</div>
        <img
          className={classNames(classes.collapseArrow)}
          src={collapseArrow || 'images/triangleArrow.svg'}
          alt='collapse'
        />
      </Button>
      <ul className={classNames(classes.group)}>
        {childrenArray.map((el, index) => {
          return (
            <li
              onClick={() => {
                setActiveElem(el)
                setIsActive(false)
              }}
              key={index}
            >
              {el}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Dropdown

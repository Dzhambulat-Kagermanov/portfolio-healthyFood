import { Children, FC, ReactElement, ReactNode, useEffect, useState } from 'react'
import { IChildren, IClassName } from 'shared/types/shared'
import { classNames } from 'shared/lib/classNames/classNames'
import Button from '../Button/Button'
import { ErrorMessage as Error, useFormikContext } from 'formik'
import classes from './Dropdown.module.scss'

interface IDropdownProps extends IClassName, IChildren {
  collapseArrow?: string
  placeholder?: string
  activeState?: (elem: ReactNode) => void
  name: string
}
const Dropdown: FC<IDropdownProps> = ({ children, className, collapseArrow, placeholder, activeState, name }) => {
  const { setFieldValue } = useFormikContext<any>()
  const childrenArray: any[] = Children.toArray(children)

  const defaultActiveElem: ReactNode = childrenArray.find((el) => {
    return Object.hasOwn(el.props, 'active')
  })
  const [isActive, setIsActive] = useState<boolean>(false)
  const [activeElem, setActiveElem] = useState<ReactNode>(defaultActiveElem)
  const [activeElemString, setActiveElemString] = useState<string>('')
  useEffect(() => {
    activeState && activeState(defaultActiveElem)
    activeElemString !== placeholder && setFieldValue(name, activeElemString)
  }, [activeElem])

  return (
    <div className={classNames(classes.dropdownWrapper)}>
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
          {childrenArray.map((el: ReactElement, index) => {
            return (
              <li
                onClick={() => {
                  setActiveElem(el)
                  setActiveElemString(el.props.validateValueText)
                  activeState && activeState(el)
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
      <Error name={name}>{(error) => <h2 className={classes.error}>{error}</h2>}</Error>
    </div>
  )
}

export default Dropdown

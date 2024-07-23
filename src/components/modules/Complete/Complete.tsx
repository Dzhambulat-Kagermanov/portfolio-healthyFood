import { FC } from 'react'
import classes from './Complete.module.scss'
import { IChildren, IClassName } from 'shared/types/shared'
import Base from 'shared/ui/Base/Base'
import { classNames } from 'shared/lib/classNames/classNames'
import Head from './Head/Head'
import Button from 'shared/ui/Button/Button'
import { useAppDispatch, useAppSelector } from 'shared/hooks/reduxHooks'
import { toggleComplete } from 'app/providers/store/complete/completeSlice'

interface ICompleteProps extends IClassName, Partial<IChildren> {
  clear?: boolean
}
const Complete: FC<ICompleteProps> = ({ children, className, clear }) => {
  const dispatch = useAppDispatch()
  const completeTitleSelector = useAppSelector((state) => state.complete.title)
  const completeStateSelector = useAppSelector((state) => state.complete.state)

  return (
    <Base
      containerClass={classNames(classes.container, { [classes.completeActive]: completeStateSelector })}
      innerClass={classNames(classes.complete, {}, [className])}
    >
      <Button
        theme='clear'
        className={classNames(classes.closeBtn)}
        onClick={() => {
          dispatch({ type: toggleComplete.type })
        }}
      >
        <img src={require('images/close.svg')} alt='close' />
      </Button>
      {!clear && <Head className={classNames(classes.head)}>{completeTitleSelector}</Head>}
      {children}
    </Base>
  )
}

export default Complete

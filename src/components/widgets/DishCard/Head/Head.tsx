import { FC } from 'react'
import classes from './Head.module.scss'
import { IClassName } from 'shared/types/shared'
import { classNames } from 'shared/lib/classNames/classNames'
import Button from 'shared/ui/Button/Button'

interface IHeadProps extends IClassName {
  image: string
}
const Head: FC<IHeadProps> = ({ className, image }) => {
  return (
    <div className={classNames(classes.head, {}, [className])}>
      <img src={image} alt='dish image' />
      <Button className={classNames(classes.shareBtn)} circle theme='clear'>
        <img src={require('images/share.svg')} alt='share' />
      </Button>
    </div>
  )
}

export default Head

import { FC } from 'react'
import classes from './Head.module.scss'
import { IClassName } from 'shared/types/shared'
import { ISocialCardHead } from '../SocialCard'
import { classNames } from 'shared/lib/classNames/classNames'
import Button from 'shared/ui/Button/Button'

interface IHeadProps extends IClassName, ISocialCardHead {}
const Head: FC<IHeadProps> = ({ socialImg, socialName, className }) => {
  return (
    <div className={classNames(classes.head, {}, [className])}>
      <div className={classNames(classes.info)}>
        <div className={classNames(classes.infoImg)}>
          <img src={socialImg} alt={socialName} />
        </div>
        <h2>{socialName}</h2>
      </div>
      <Button className={classNames(classes.btn)} theme='outlined' size='medium'>
        FOLLOW US
      </Button>
    </div>
  )
}

export default Head

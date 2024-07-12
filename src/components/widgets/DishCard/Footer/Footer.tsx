import { FC } from 'react'
import classes from './Footer.module.scss'
import { IClassName } from 'shared/types/shared'
import { classNames } from 'shared/lib/classNames/classNames'
import RateBar from 'components/widgets/RateBar/RateBar'
import Button from 'shared/ui/Button/Button'

interface IFooterProps extends IClassName {
  rating: number
}
const Footer: FC<IFooterProps> = ({ className, rating }) => {
  return (
    <div className={classNames(classes.footer, {}, [className])}>
      <RateBar rating={rating} className={classNames(classes.rating)} />
      <Button className={classNames(classes.btn)} theme='fill' size='medium'>
        ORDER
      </Button>
    </div>
  )
}

export default Footer

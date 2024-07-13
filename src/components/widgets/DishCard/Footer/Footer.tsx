import { FC } from 'react'
import classes from './Footer.module.scss'
import { IClassName } from 'shared/types/shared'
import { classNames } from 'shared/lib/classNames/classNames'
import RateBar from 'components/widgets/RateBar/RateBar'
import Button from 'shared/ui/Button/Button'
import useModal from 'shared/hooks/useModal'
import { toggleModal } from 'app/providers/store/modal/modalSlice'

interface IFooterProps extends IClassName {
  rating: number
}
const Footer: FC<IFooterProps> = ({ className, rating }) => {
  const modal = useModal(toggleModal.type)
  return (
    <div className={classNames(classes.footer, {}, [className])}>
      <RateBar rating={rating} className={classNames(classes.rating)} />
      <Button
        className={classNames(classes.btn)}
        theme='fill'
        size='medium'
        onClick={() => {
          modal()
        }}
      >
        ORDER
      </Button>
    </div>
  )
}

export default Footer

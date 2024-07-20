import { FC } from 'react'
import classes from './ChefsCard.module.scss'
import { IClassName } from 'shared/types/shared'
import { classNames } from 'shared/lib/classNames/classNames'
import Head from './Head/Head'
import Footer from './Footer/Footer'

export interface IChefsCardHead {
  avatar: string
  name: string
  speciality: string
  footerClass?: string
  headClass?: string
}
export interface IChefsCardFooter {
  portfolio: string[]
}
interface IChefsCardProps extends IClassName, IChefsCardHead, IChefsCardFooter {
  tag?: any
}
const ChefsCard: FC<IChefsCardProps> = ({
  avatar,
  name,
  portfolio,
  speciality,
  className,
  tag,
  headClass,
  footerClass
}) => {
  const Tag = tag || 'div'

  return (
    <Tag className={classNames(classes.chefs, {}, [className])}>
      <Head avatar={avatar} name={name} speciality={speciality} className={classNames(classes.head, {}, [headClass])} />
      <Footer portfolio={portfolio} className={classNames(classes.footer, {}, [footerClass])} />
    </Tag>
  )
}

export default ChefsCard

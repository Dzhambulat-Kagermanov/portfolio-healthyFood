import { FC } from 'react'
import classes from './DishCard.module.scss'
import { IClassName } from 'shared/types/shared'
import Head from './Head/Head'
import { classNames } from 'shared/lib/classNames/classNames'
import Content from './Content/Content'
import { IDishesData } from 'shared/constants/dishes'
import Footer from './Footer/Footer'

interface IDishCardProps extends IClassName, IDishesData {
  tag?: any
  headClass?: string
  contentClass?: string
  footerClass?: string
}
const DishCard: FC<IDishCardProps> = ({
  tag,
  description,
  rating,
  subtitle,
  title,
  className,
  image,
  headClass,
  contentClass,
  footerClass
}) => {
  const Tag = tag || 'div'
  return (
    <Tag className={classNames(classes.dishCard, {}, [className])}>
      <Head image={image} className={classNames(classes.head, {}, [headClass])} />
      <div className={classNames(classes.contentWrapper)}>
        <Content
          className={classNames(classes.content, {}, [contentClass])}
          description={description}
          subtitle={subtitle}
          title={title}
        />
        <Footer rating={rating} className={classNames(classes.footer, {}, [footerClass])} />
      </div>
    </Tag>
  )
}

export default DishCard

import { FC } from 'react'
import classes from './SocialCard.module.scss'
import { IChildren, IClassName, ITag } from 'shared/types/shared'
import Head from './Head/Head'
import { classNames } from 'shared/lib/classNames/classNames'

export interface ISocialCardHead {
  socialName: string
  socialImg: string
}

interface ISocialCardProps extends IClassName, IChildren, ITag, ISocialCardHead {
  contentClass?: string
  contentTag?: any
}
const SocialCard: FC<ISocialCardProps> = ({
  children,
  socialImg,
  socialName,
  tag,
  className,
  contentClass,
  contentTag
}) => {
  const Tag: typeof tag = tag || 'div'
  const ContentTag: typeof contentTag = contentTag || 'div'

  return (
    <Tag className={classNames(classes.social, {}, [className])}>
      <Head socialImg={socialImg} socialName={socialName} className={classNames(classes.head)} />
      <ContentTag className={classNames(classes.content, {}, [contentClass])}>{children}</ContentTag>
    </Tag>
  )
}

export default SocialCard

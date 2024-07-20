import { FC } from 'react'
import classes from './RecipesCard.module.scss'
import { IClassName, ITag } from 'shared/types/shared'
import Button from 'shared/ui/Button/Button'
import Head from './Head/Head'
import Footer from './Footer/Footer'
import { classNames } from 'shared/lib/classNames/classNames'

export interface IRecipesCardFooter {
  recipesGroup: 'breakfast' | 'dinner' | 'lunch' | 'sweets'
  date: string
  socialData: { views: number; comments: number }
}
export interface IRecipesCardHead {
  description: string
  author: string
}
interface IRecipesCardProps extends IClassName, ITag, IRecipesCardFooter, IRecipesCardHead {
  id: number
  isActive: boolean
  setActiveId: (id: number) => void
  footerClass?: string
  headClass?: string
}
const RecipesCard: FC<IRecipesCardProps> = ({
  id,
  setActiveId,
  author,
  date,
  description,
  recipesGroup,
  className,
  socialData,
  isActive,
  tag,
  footerClass,
  headClass
}) => {
  const Tag: typeof tag = tag || 'div'
  return (
    <Tag
      className={classNames(classes.recipes, { [classes.recipesActive]: isActive }, [className, classes[recipesGroup]])}
      onClick={() => {
        if (!isActive) [setActiveId(id)]
      }}
    >
      <Button
        circle
        theme='clear'
        className={classes.backBtn}
        onClick={() => {
          setActiveId(null)
        }}
      >
        <img src='images/arrow.svg' alt='back' />
      </Button>
      <Head className={classNames(classes.head, {}, [headClass])} author={author} description={description} />
      <Footer
        date={date}
        socialData={socialData}
        recipesGroup={recipesGroup}
        className={classNames(classes.footer, {}, [footerClass])}
      />
    </Tag>
  )
}

export default RecipesCard

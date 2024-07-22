import { FC, useState } from 'react'
import classes from './Recipes.module.scss'
import { IClassName } from 'shared/types/shared'
import Base from 'shared/ui/Base/Base'
import { classNames } from 'shared/lib/classNames/classNames'
import DoubleTitle from 'shared/ui/DoubleTitle/DoubleTitle'
import RecipesCard from 'components/widgets/RecipesCard/RecipesCard'
import { recipesData } from 'shared/constants/recipes'
import adaptive from './Adaptive.module.scss'
import { Animate } from './Animate'

interface IRecipesProps extends IClassName {
  id?: string
}
const Recipes: FC<IRecipesProps> = ({ className, id }) => {
  const [activeId, setActivaId] = useState<number>(null)
  let noActiveCounter: number = 0

  Animate({
    recipes: classes.recipes,
    recipesGroup: classes.group,
    recipesItem: classes.item,
    recipesItemActive: adaptive.itemActive
  })

  return (
    <section>
      <Base innerClass={classNames(classes.recipes, {}, [className])} containerID={classNames(id)}>
        <DoubleTitle backTitle='Recipes' className={classNames(classes.title)} backTitleSize='small'>
          Recipes From Our Chefs
        </DoubleTitle>
        <ul className={classNames(classes.group, {}, [adaptive.group])}>
          {recipesData.map(({ author, date, description, id, recipesGroup, socialData }) => {
            activeId !== id && noActiveCounter++
            const noActiveClass: string = activeId ? `slim${noActiveCounter}` : ''

            return (
              <RecipesCard
                tag='li'
                key={id}
                author={author}
                date={date}
                description={description}
                recipesGroup={recipesGroup}
                socialData={{
                  comments: socialData.comments,
                  views: socialData.views
                }}
                setActiveId={setActivaId}
                id={id}
                className={classNames(classes.item, {
                  [adaptive.itemActive]: activeId === id,
                  [adaptive[noActiveClass]]: activeId !== id && noActiveCounter <= 3
                })}
                isActive={activeId === id}
                headClass={classNames(adaptive.itemHead)}
                footerClass={classNames(adaptive.itemFooter)}
              />
            )
          })}
        </ul>
      </Base>
    </section>
  )
}

export default Recipes

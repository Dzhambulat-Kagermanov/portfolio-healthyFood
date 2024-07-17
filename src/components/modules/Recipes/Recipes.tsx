import { FC, useState } from 'react'
import classes from './Recipes.module.scss'
import { IClassName } from 'shared/types/shared'
import Base from 'shared/ui/Base/Base'
import { classNames } from 'shared/lib/classNames/classNames'
import DoubleTitle from 'shared/ui/DoubleTitle/DoubleTitle'
import RecipesCard from 'components/widgets/RecipesCard/RecipesCard'
import { recipesData } from 'shared/constants/recipes'

interface IRecipesProps extends IClassName {
  id?: string
}
const Recipes: FC<IRecipesProps> = ({ className, id }) => {
  const [activeId, setActivaId] = useState<number>(0)

  return (
    <section>
      <Base innerClass={classNames(classes.recipes, {}, [className])} containerID={classNames(id)}>
        <DoubleTitle backTitle='Recipes' className={classNames(classes.title)} backTitleSize='small'>
          Recipes From Our Chefs
        </DoubleTitle>
        <ul className={classNames(classes.group)}>
          {recipesData.map(({ author, date, description, id, recipesGroup, socialData }, index) => (
            <RecipesCard
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
              className={classNames(classes.item)}
              isActive={activeId === id}
            />
          ))}
        </ul>
      </Base>
    </section>
  )
}

export default Recipes

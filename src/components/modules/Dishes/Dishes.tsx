import { FC, ReactNode, useState } from 'react'
import classes from './Dishes.module.scss'
import { IClassName } from 'shared/types/shared'
import DoubleTitle from 'shared/ui/DoubleTitle/DoubleTitle'
import { classNames } from 'shared/lib/classNames/classNames'
import Base from 'shared/ui/Base/Base'
import DishCard from 'components/widgets/DishCard/DishCard'
import { dishesData } from 'shared/constants/dishes'
import Button from 'shared/ui/Button/Button'
import Loader from 'shared/ui/Loader/Loader'
import { getDataTimeout } from 'shared/lib/getDataTimeout/getDataTimeout'
import { getDataPagination } from 'shared/lib/getDataPagination/getDataPagination'

interface IDishesProps extends IClassName {}
const Dishes: FC<IDishesProps> = ({ className }) => {
  const paginationStep: number = 3
  let [paginationPosition, setPaginationPosition] = useState<number>(0)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [loadingData, setLoadingData] = useState<typeof dishesData>(getDataPagination(dishesData, 0, paginationStep))
  const [isLoadData, setIsLoadData] = useState<boolean>(true)

  console.log(loadingData.length)

  return (
    <Base innerClass={classNames(classes.dishes, {}, [className])}>
      <DoubleTitle className={classNames(classes.title)} backTitleSize='medium' backTitle='Dishes'>
        Dish Of The Day
      </DoubleTitle>
      <ul className={classNames(classes.group)}>
        {loadingData.map(({ description, id, image, rating, subtitle, title }) => (
          <DishCard
            description={description}
            key={id}
            id={id}
            image={image}
            rating={rating}
            subtitle={subtitle}
            title={title}
          />
        ))}
      </ul>
      {isLoading && <Loader className={classNames(classes.loader)} theme='squares' />}
      {isLoadData && (
        <Button
          theme='clear'
          className={classNames(classes.moreBtn)}
          onClick={async () => {
            setIsLoading(true)
            const nextStepData: any = await getDataTimeout(
              getDataPagination(dishesData, paginationPosition + paginationStep, paginationStep)
            )
            nextStepData.length || setIsLoadData(false)

            setPaginationPosition((current) => {
              return current + paginationStep
            })
            setLoadingData((current) => {
              return [...current, ...nextStepData]
            })
            setIsLoading(false)
          }}
        >
          More dishes
        </Button>
      )}
    </Base>
  )
}

export default Dishes

import { FC } from 'react'
import classes from './Dishes.module.scss'
import { IClassName } from 'shared/types/shared'
import DoubleTitle from 'shared/ui/DoubleTitle/DoubleTitle'
import { classNames } from 'shared/lib/classNames/classNames'
import Base from 'shared/ui/Base/Base'
import DishCard from 'components/widgets/DishCard/DishCard'
import { dishesData } from 'shared/constants/dishes'
import Button from 'shared/ui/Button/Button'
import Loader from 'shared/ui/Loader/Loader'
import { setDataPagination, setDataPaginationOnClick } from 'shared/lib/setDataPagination/setDataPagination'
import adaptive from './Adaptive.module.scss'

interface IDishesProps extends IClassName {
  id?: string
}
const Dishes: FC<IDishesProps> = ({ className, id }) => {
  let SCREEN_WIDTH = window.innerWidth
  let dishesPaginationStep: number

  if (SCREEN_WIDTH >= 901) {
    dishesPaginationStep = 5
  } else if (SCREEN_WIDTH >= 601) {
    dishesPaginationStep = 3
  } else {
    dishesPaginationStep = 2
  }
  console.log(dishesPaginationStep)

  const {
    paginationStep,
    paginationPosition,
    setPaginationPosition,
    isLoading,
    setIsLoading,
    loadingData,
    setLoadingData,
    isLoadData,
    setIsLoadData
  } = setDataPagination(dishesData, dishesPaginationStep)

  return (
    <section>
      <Base innerClass={classNames(classes.dishes, {}, [className])} containerID={classNames(id)}>
        <DoubleTitle className={classNames(classes.title)} backTitleSize='medium' backTitle='Dishes'>
          Dish Of The Day
        </DoubleTitle>
        <ul className={classNames(classes.group, {}, [adaptive.group])}>
          {loadingData.map(({ description, id, image, rating, subtitle, title }) => (
            <DishCard
              className={classNames(adaptive.item)}
              headClass={classNames(adaptive.itemHead)}
              contentClass={classNames(adaptive.itemContent)}
              footerClass={classNames(adaptive.itemFooter)}
              description={description}
              key={id}
              id={id}
              image={image}
              rating={rating}
              subtitle={subtitle}
              title={title}
              tag='li'
            />
          ))}
        </ul>
        {isLoading && <Loader className={classNames(classes.loader)} theme='squares' />}
        {isLoadData && (
          <Button
            theme='clear'
            className={classNames(classes.moreBtn)}
            onClick={() => {
              setDataPaginationOnClick(dishesData, {
                paginationStep,
                paginationPosition,
                setPaginationPosition,
                isLoading,
                setIsLoading,
                loadingData,
                setLoadingData,
                isLoadData,
                setIsLoadData
              })
            }}
          >
            More dishes
          </Button>
        )}
      </Base>
    </section>
  )
}

export default Dishes

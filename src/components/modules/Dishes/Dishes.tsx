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
import { setDataPagination, setDataPaginationOnClick } from 'shared/lib/setDataPagination/setDataPagination'

interface IDishesProps extends IClassName {}
const Dishes: FC<IDishesProps> = ({ className }) => {
  const dishesPaginationStep: number = 3
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
  )
}

export default Dishes

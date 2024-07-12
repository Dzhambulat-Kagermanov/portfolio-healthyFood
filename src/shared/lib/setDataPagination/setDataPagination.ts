import { useState } from 'react'
import { getDataPagination } from '../getDataPagination/getDataPagination'
import { getDataTimeout } from '../getDataTimeout/getDataTimeout'

export function setDataPagination<T>(data: T[], step: number) {
  // Сколько элементов загружается за раз
  const paginationStep: number = step
  // Сдвиг для пагинации
  let [paginationPosition, setPaginationPosition] = useState<number>(0)
  // Данные загрузились или грузятся для лоадера
  const [isLoading, setIsLoading] = useState<boolean>(false)
  // Данные которые загрузились и которые можно отрисовать
  const [loadingData, setLoadingData] = useState<typeof data>(getDataPagination(data, 0, paginationStep))
  // Есть ли еще данные для загрузки
  const [isLoadData, setIsLoadData] = useState<boolean>(true)

  return {
    paginationStep,
    paginationPosition,
    setPaginationPosition,
    isLoading,
    setIsLoading,
    loadingData,
    setLoadingData,
    isLoadData,
    setIsLoadData
  }
}
export async function setDataPaginationOnClick<T>(
  data: T[],
  { paginationStep, paginationPosition, setPaginationPosition, setIsLoading, setLoadingData, setIsLoadData }: any
) {
  setIsLoading(true)
  const nextStepData: any = await getDataTimeout(
    getDataPagination(data, paginationPosition + paginationStep, paginationStep)
  )
  nextStepData.length || setIsLoadData(false)

  setPaginationPosition((current: any) => {
    return current + paginationStep
  })
  setLoadingData((current: any) => {
    return [...current, ...nextStepData]
  })
  setIsLoading(false)
}

import { useState } from 'react'
import { getDataPagination } from '../getDataPagination/getDataPagination'
import { getDataTimeout } from '../getDataTimeout/getDataTimeout'

export function setDataPagination<T>(data: T[], step: number) {
  const paginationStep: number = step
  let [paginationPosition, setPaginationPosition] = useState<number>(0)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [loadingData, setLoadingData] = useState<typeof data>(getDataPagination(data, 0, paginationStep))
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

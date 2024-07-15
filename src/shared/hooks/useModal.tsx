import { useAppDispatch } from './reduxHooks'

const useModal = (type: string) => {
  const dispatch = useAppDispatch()
  return () => {
    dispatch({ type })
  }
}

export default useModal

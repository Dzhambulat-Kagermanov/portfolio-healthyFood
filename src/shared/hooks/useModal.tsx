import { useAppDispatch } from './reduxHooks'

const useModal = (type: any) => {
  const dispatch = useAppDispatch()
  return () => {
    dispatch({ type })
  }
}

export default useModal

import { useSelector } from 'react-redux'
import { RootState } from '../app/store';
import { useMemo } from 'react'

export const useAuth = () => {

    const isAuth = useSelector((state: RootState) => state.persistedReducer.isAuth)
    return useMemo(() => ({ isAuth }), [isAuth])
  }
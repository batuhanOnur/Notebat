import { useSelector } from 'react-redux'
import { RootState } from '../app/store';
import { useMemo } from 'react'

export const useGetUser = () => {

    const userId = useSelector((state: RootState) => state.persistedReducer.id)
    return useMemo(() => ({ userId }), [userId])
  }
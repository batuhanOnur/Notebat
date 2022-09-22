import { useSelector } from 'react-redux'
import { RootState } from '../app/store';
import { useMemo } from 'react'

export const useGetUser = () => {

    const userId = useSelector((state: RootState) => state.persistedReducer.id)
    console.log('hook cagirildi', userId)
    return useMemo(() => ({ userId }), [userId])
  }
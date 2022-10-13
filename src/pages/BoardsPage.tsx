import React from 'react'
import { useParams } from 'react-router-dom';
import { useGetBoardsQuery } from '../features/api/boardSlice'
import NoBoard from '../components/boards/NoBoard'
import Boards from '../components/boards/Boards'
import { LoadingOverlay } from '@mantine/core';

const BoardsPage = () => {
  
  let { id } = useParams(); // workspace id

  const { data, isSuccess, isLoading } = useGetBoardsQuery(id,{
    refetchOnMountOrArgChange: true,
    skip: false,
  });

  return (
    <div className="relative">
      <LoadingOverlay visible={isLoading} overlayBlur={20}/>
      {
      isSuccess && 
         data.$values.length > 0 
         ? <Boards boards={data.$values} workSpaceId={id}/>
         : <div className="flex items-center justify-center min-h-screen -translate-y-20">
              <NoBoard id={id}/>
           </div>
      }
    </div>
  )
}

export default BoardsPage  
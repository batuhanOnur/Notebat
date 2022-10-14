import React from 'react'
import { useGetKanbanSectionsQuery } from '../../features/api/boardSlice'
import { DragDropContext, Droppable } from "react-beautiful-dnd";

type Props = {
  boardId: string | undefined,
}


const KanbanSections:React.FC<Props> = (props) => {

  const { data, isSuccess, isLoading } = useGetKanbanSectionsQuery(props.boardId,{
    refetchOnMountOrArgChange: true,
    skip: false,
  });

  const onDragEnd = () => {

  }

  if(isSuccess) console.log('sections', data)

  return (
    <div className="p-10">
      <DragDropContext onDragEnd={onDragEnd}>
        { isSuccess && 
          <>
          {
            data.$values.map((section,index) => (
              <div key={section.$id}>{section.title}</div>
              // <Droppable key={index} droppableId={`${index}`}>
                
              // </Droppable>
            ))
          }
          </>
        }
      </DragDropContext>
    </div>
  )
}

export default KanbanSections
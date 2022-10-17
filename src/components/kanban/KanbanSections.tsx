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
    <div className="p-10 grid grid-cols-5 gap-5">
      <DragDropContext onDragEnd={onDragEnd}>
        { isSuccess && 
          <>
          {
            data.$values.map((section,index) => (
              <div className="w-[200px] bg-[#49505e] min-h-[100px] rounded-md">
                <div key={section.$id} className="p-2">{section.title}</div>
                <Droppable key={index} droppableId={`${index}`}>
                  {(provided,snapshot) => (
                    <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    >

                    </div>
                  )}
                </Droppable>
              </div>
            ))
          }
          </>
        }
      </DragDropContext>
    </div>
  )
}

export default KanbanSections
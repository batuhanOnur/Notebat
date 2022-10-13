import React from 'react'
import { Board } from '../../interfaces/board'
import IconProvider from '../../icons/IconProvider';
import { Card,Text,Badge,Group } from '@mantine/core';

type Props = {
  boards: Board[],
}

const Boards:React.FC<Props> = (props) => {

  console.log('board', props)
  return (
    <>
      <div className="flex">
        <IconProvider icon="user" />
        <span>Your Boards</span>
      </div>

      <Group>
      {
        props.boards.map((board) => {
          return(
            <Card 
            shadow="sm" 
            p="lg" 
            radius="md" 
            withBorder 
            className="w-[13%] min-h-[95px] mt-4 cursor-pointer hover:border-sky-500 bg-gradient-to-r from-violet-500 to-fuchsia-500" 
            key={board.id}
            >
              <Text>{board.title}</Text>
              <Badge color="yellow" variant="outline">
                  {board.createdAt.toString()}
              </Badge>
            </Card>
          )
        })
      }
        <Card shadow="sm" p="lg" radius="md" withBorder className="w-[13%] min-h-[95px] mt-4 cursor-pointer hover:border-green-500">
          <Text>Create New Board</Text>
        </Card>
      </Group>
    </>
  )
}

export default Boards
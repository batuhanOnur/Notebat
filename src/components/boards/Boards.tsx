import React, { useState } from 'react'
import { Board } from '../../interfaces/board'
import IconProvider from '../../icons/IconProvider';
import { Card,Text,Badge,Group, Modal } from '@mantine/core';
import BoardForm from '../forms/BoardForm';
import { useNavigate  } from 'react-router-dom'

type Props = {
  boards: Board[],
  workSpaceId: string | undefined
}

const Boards:React.FC<Props> = (props) => {

  const [opened, setOpened] = useState(false);
  const navigate = useNavigate();
  console.log('board', props)

  const navigateKanban = (boardId:any) => {
    navigate(`/boards/kanban/${boardId}`)
  }
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
            className="w-[13%] min-h-[95px] mt-4 cursor-pointer hover:border-sky-500 bg-gradient-to-r from-green-500 to-teal-800" 
            key={board.id}
            onClick={()=> navigateKanban(board.id)}
            >
              <Text color="white">{board.title}</Text>
              <Badge color="yellow" variant="outline">
                  {board.createdAt.toString()}
              </Badge>
            </Card>
          )
        })
      }
        <Card 
        shadow="sm" 
        p="lg" 
        radius="md" 
        withBorder 
        className="w-[13%] min-h-[95px] mt-4 cursor-pointer hover:border-green-500"
        onClick={() => setOpened(true)}
        >
          <Text>Create New Board</Text>
        </Card>

        <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Let's Add Board"
        padding="xl"
        size="xl"
        >
           <BoardForm workspaceId={props.workSpaceId} setOpened={setOpened}/>
        </Modal>
      </Group>
    </>
  )
}

export default Boards
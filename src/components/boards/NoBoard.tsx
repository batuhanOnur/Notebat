import React, { useState } from 'react'
import planeast from '../../assets/planeast.jpg'
import { Modal } from '@mantine/core';
import BoardForm from '../forms/BoardForm';

type Props = {
    id: string | undefined,
}

const NoBoard:React.FC<Props> = (props) => {
    
  const [opened, setOpened] = useState(false);

  return (
    <div className="flex flex-col justify-center items-center">
        <div>
            <img className="w-[200px] h-[200px] rounded-full" src={planeast} alt="noboard" />
        </div>

        <div className="mt-5">
            <span>There is no Board, </span><span onClick={()=> setOpened(true)} className="text-orange-500 underline underline-offset-2 cursor-pointer">Let's Add!</span>
        </div>

        <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Let's Add Board"
        padding="xl"
        size="xl"
        >
           <BoardForm workspaceId={props.id} setOpened={setOpened}/>
        </Modal>
    </div>
  )
}

export default NoBoard
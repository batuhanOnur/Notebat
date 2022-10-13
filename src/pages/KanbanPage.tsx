import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import IconProvider from '../icons/IconProvider'
import { Input,Button,CloseButton } from '@mantine/core';

const KanbanPage = () => {

  let { boardId } = useParams(); // board id
  const [ isOpen, setInputOpen] = useState(false);
   
  return (
    <>
       { isOpen 
        ? <div className="w-[300px] h-[100px] p-2 bg-gray-500">
                <Input placeholder="Enter list title"/>
                <div className="flex justify-between mt-2">
                    <Button color="teal" className="bg-teal-700">Add</Button>
                    <CloseButton title="Close popover" size="lg" iconSize={20} onClick={()=> setInputOpen(false)}/>
                </div>
            </div>
        : <Button leftIcon={<IconProvider icon="plus" />} variant="outline" onClick={()=> setInputOpen(true)}>Add Section</Button>
       }
    </>
  )
}

export default KanbanPage
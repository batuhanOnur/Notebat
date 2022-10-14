import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../app/store'
import { useParams } from 'react-router-dom';
import IconProvider from '../icons/IconProvider'
import { TextInput,Button,CloseButton } from '@mantine/core';
import { useAddKanbanSectionMutation } from '../features/api/boardSlice';
import { useForm } from "@mantine/form";
import KanbanSections from '../components/kanban/KanbanSections'

const KanbanPage = () => {

  let { boardId } = useParams(); // board id

  const createdUser = useSelector((state: RootState) => state.persistedReducer)

  const [ isOpen, setInputOpen] = useState(false);

  const [addKanbanSection] = useAddKanbanSectionMutation()

  const form = useForm({
    initialValues: {
        title: '',
        boardId: boardId,
        createdAt: null,
        createdUser: createdUser.id,
    },
    validate: {
        title:(value) => (value.length < 1 ? 'Title must have at least 1 letter' : null)
    }
  });

  const sendSection = (values:any) => {
    console.log('sections', values)
    addKanbanSection(values)
    .unwrap()
    .then(()=>{
      setInputOpen(false)
    })
  }
   
  return (
    <>
       <KanbanSections boardId={boardId}/>
       { isOpen 
        ? <form onSubmit={form.onSubmit((values:any) => {sendSection(values)})} className="w-[300px] h-[100px] p-2 bg-gray-500">
                <TextInput placeholder="Enter list title" {...form.getInputProps('title')}/>
                <div className="flex justify-between mt-2">
                    <Button color="teal" className="bg-teal-700" type="submit" >Add</Button>
                    <CloseButton title="Close popover" size="lg" iconSize={20} onClick={()=> setInputOpen(false)}/>
                </div>
          </form>
            
        : <Button leftIcon={<IconProvider icon="plus" />} variant="outline" onClick={()=> setInputOpen(true)}>Add Section</Button>
       }
    </>
  )
}

export default KanbanPage
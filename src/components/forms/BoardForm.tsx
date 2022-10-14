import React, { Dispatch, forwardRef, SetStateAction } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../app/store'
import { MultiSelect, Group, Text, Button,TextInput } from '@mantine/core';
import { useGetAllUsersQuery } from '../../features/api/authSlice';
import { useAddBoardMutation } from '../../features/api/boardSlice';
import { useForm } from "@mantine/form";

type Props = {
    workspaceId: string | undefined,
    setOpened : Dispatch<SetStateAction<boolean>>
}

interface ItemProps extends React.ComponentPropsWithoutRef<'div'> {
    value: string,
    name: string,
    email: string,
    lastname: string,
}


const SelectItem = forwardRef<HTMLDivElement, ItemProps>(
    ({ name,lastname,email, ...others }: ItemProps, ref) => (
        <div ref={ref} {...others}>
            <Group>
            <div>
            <Text>{name} { lastname}</Text>
            <Text size="xs" color="dimmed">
                {email}
            </Text>
        </div>
            </Group>
        </div>
    )
)


const BoardForm:React.FC<Props> = (props) => {

    const createdUser = useSelector((state: RootState) => state.persistedReducer)

    const [addBoard] = useAddBoardMutation()

    const { data, isSuccess } = useGetAllUsersQuery(createdUser.id);

    const form = useForm({
        initialValues: {
            title: '',
            workSpaceId: props.workspaceId,
            createdAt: null,
            createdUserId:createdUser.id,
            members:[],
            kanbans:[]
        },
        validate: {
            title:(value) => (value.length < 1 ? 'Name must have at least 1 letter' : null)
        }
    });

    const sendBoard = (values:any) => {
        addBoard(values)
        .unwrap()
        .then(()=>{
            props.setOpened(false)
        })
    }

  return (
    <>
      <form onSubmit={form.onSubmit((values:any) => {sendBoard(values)})}>
          
            { isSuccess &&
            <>
                <div>
                    <div>
                    <TextInput placeholder="Board Title" label="Board Title" {...form.getInputProps('title')}/>
                    </div>
                    <div className="mt-6">
                        <MultiSelect
                        itemComponent={SelectItem}
                        data={data.$values}
                        label="Pick Members"
                        searchable
                        nothingFound="Nothing found"
                        {...form.getInputProps('members')}
                        />
                    </div>
                    <div className="mt-6">
                        <Button type="submit" color="pink" variant="outline">Add</Button>
                    </div>
                </div>   
            </>
            }
            
      </form>
    </>
  )
}

export default BoardForm
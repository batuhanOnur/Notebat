import { Group,TextInput,Text } from '@mantine/core';
import { Select, Button } from '@mantine/core';
import { Dispatch, forwardRef, SetStateAction } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import IconProvider from '../../icons/IconProvider';
import { data } from '../../utils/datas/iconSelectData'
// import { WorkSpace } from '../../interfaces/workSpace';
import { useForm } from "@mantine/form";
import { useAddWorkSpaceMutation } from '../../features/api/workspaceSlice'



interface ItemProps extends React.ComponentPropsWithoutRef<'div'> {
    value: string;
    label: string;
  }

const SelectItem = forwardRef<HTMLDivElement, ItemProps>(
    ({ label, ...others }: ItemProps, ref) => (
        <div ref={ref} {...others}>
            <Group>
                <IconProvider icon={label} />
                <Text>{label}</Text>
            </Group>
        </div>
    )
)

interface Props {
    setOpened : Dispatch<SetStateAction<boolean>>;
}

const WorkSpaceForm: React.FC<Props> = ({setOpened}) => {
 
    const [AddWorkSpace] = useAddWorkSpaceMutation()
    const id = useSelector((state: RootState) => state.persistedReducer.id)
    const form = useForm({
        initialValues: {
            title: '',
            icon: '',
            createdUserId: id,
            iconColor: 'yellow'
        },
    });


    const sendWorkSpace = (values: any) => {
        console.log('values', values)
        AddWorkSpace(values)
        .unwrap()
        .then(() => {
            setOpened(false)
        })
    }

    return(
        <form onSubmit={form.onSubmit((values:any) => {sendWorkSpace(values)})}>
            <Group>
                <div>
                    <TextInput placeholder="Work space name" label="Name" {...form.getInputProps('title')}/>
                </div>

                <div className="ml-4">
                    <Select 
                    placeholder="icon" 
                    label="Icon" 
                    data={data} 
                    itemComponent={SelectItem}
                    {...form.getInputProps('icon')}
                    />
                </div>
                
                <div className="mt-6 ml-4">
                    <Button type="submit" variant="outline">Create</Button>
                </div>
            </Group>
        </form>
    )
}


export default WorkSpaceForm
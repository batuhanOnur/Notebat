import { Group,TextInput,Text,Select, Button, ColorPicker } from '@mantine/core';
import { Dispatch, forwardRef, SetStateAction, useState } from 'react';
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
 
    const [pelette, setPelette] = useState<boolean>(false);
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
        AddWorkSpace(values)
        .unwrap()
        .then(() => {
            setOpened(false)
        })
    }

    return(
        <form onSubmit={form.onSubmit((values:any) => {sendWorkSpace(values)})}>
            <div>
                <div>
                    <TextInput placeholder="Work space name" label="Name" {...form.getInputProps('title')}/>
                </div>

                <div className="mt-6">
                    <Select 
                    placeholder="icon" 
                    label="Icon" 
                    data={data} 
                    itemComponent={SelectItem}
                    {...form.getInputProps('icon')}
                    />
                </div>

                <div className="mt-6 flex items-center">
                    <Text>You can choose Icon color</Text>
                    <Button variant="white" gradient={{ from: 'teal', to: 'lime', deg: 105 }} onClick={()=> setPelette((prev) => !prev )}>
                        { pelette ? 'Close Pelette' : 'Open Icon Color Pelette' }
                    </Button>
                </div> 
                {
                    pelette &&
                <div className="mt-6">
                    <ColorPicker
                        format="hex"
                        swatches={['#25262b', '#868e96', '#fa5252', '#e64980', '#be4bdb', '#7950f2', '#4c6ef5', '#228be6', '#15aabf', '#12b886', '#40c057', '#82c91e', '#fab005', '#fd7e14']}
                        {...form.getInputProps('iconColor')}
                    />
                </div>
                }
 
                <div className="mt-6">
                    <Button type="submit" variant="outline">Create</Button>
                </div>
            </div>
        </form>
    )
}


export default WorkSpaceForm
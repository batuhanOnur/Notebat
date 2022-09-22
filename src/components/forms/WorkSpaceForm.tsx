import { Group,TextInput,Text } from '@mantine/core';
import { Select, Button } from '@mantine/core';
import { forwardRef } from 'react';
import IconProvider from '../../icons/IconProvider';
import { data } from '../../utils/datas/iconSelectData'


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

const WorkSpaceForm = () => {
    return(
        <div>
            <Group>
                <div>
                    <TextInput placeholder="Work space name" label="Name" />
                </div>

                <div className="ml-4">
                    <Select 
                    placeholder="icon" 
                    label="Icon" 
                    data={data} 
                    itemComponent={SelectItem}
                    />
                </div>
                
                <div className="mt-6 ml-4">
                    <Button variant="outline">Create</Button>
                </div>
            </Group>
        </div>
    )
}


export default WorkSpaceForm
import { useState } from 'react';
import { useGetSpacesQuery } from '../../features/api/workspaceSlice'
import { ThemeIcon } from '@mantine/core';
import IconProvider from '../../icons/IconProvider'
import { NavLink } from 'react-router-dom';
import { Modal } from '@mantine/core';
import WorkSpaceForm from '../forms/WorkSpaceForm';


type Props = {
    userId: string
}

const NavbarList: React.FC<Props> = (props) => {
 
    const { data, error, isLoading, isSuccess } = useGetSpacesQuery(props.userId,{
        refetchOnMountOrArgChange: true,
        skip: false,
    });

    const [opened, setOpened] = useState(false);

    if (isLoading) return <div>Loading...</div>
    if (error) {
        console.log('error', data)
    }
    if (isSuccess){
        console.log('success', data)
    }

    return(
        <div>
            <Modal
             size="xl"
             opened={opened}
             onClose={() => setOpened(false)}
             title="Lets create new workspace!"
            >
               <WorkSpaceForm />
            </Modal>
            <div className="flex justify-between">
                <span>Work Spaces</span>
                <div className="cursor-pointer" onClick={() => setOpened(true)}>
                   <IconProvider icon="plus"/>
                </div>
            </div>
            { isSuccess && 
              <>
              {data.$values.map(({title ,$id, iconColor, icon}:any)=>(
                <NavLink
                key={$id} 
                to={`/boards/${$id}`} 
                className={({ isActive }) => (isActive ? 'flex mt-2 p-2 border-l-2 border-green-500 bg-gray-800' : 'flex mt-2 p-2')}
                >
                    <ThemeIcon size="sm" color={iconColor}>
                        <IconProvider icon={icon}/>
                    </ThemeIcon>
                   <div className="ml-2 text-sm">
                     {title}
                   </div>
                </NavLink>
              ))}
              </>
            }
        </div>
    )
}

export default NavbarList
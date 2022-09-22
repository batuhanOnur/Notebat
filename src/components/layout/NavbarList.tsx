import { useGetSpacesQuery } from '../../features/api/workspaceSlice'
import { ThemeIcon } from '@mantine/core';
import IconProvider from '../../icons/IconProvider'
import { NavLink } from 'react-router-dom';

type Props = {
    userId: string
}

const NavbarList: React.FC<Props> = (props) => {
 
    const { data, error, isLoading, isSuccess } = useGetSpacesQuery(props.userId,{
        refetchOnMountOrArgChange: true,
        skip: false,
    });

    if (isLoading) return <div>Loading...</div>
    if (error) {
        console.log('error', data)
    }
    if (isSuccess){
        console.log('success', data)
    }

    return(
        <div>
            <div className="flex justify-between">
                <span>Work Spaces</span>
                <div className="cursor-pointer">
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
import { useGetSpacesQuery } from '../../features/api/workspaceSlice'

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
            { isSuccess && 
              <>
              {data.$values.map(({title ,$id}:any)=>(
                <div key={$id}>{title}</div>
              ))}
              </>
            }
        </div>
    )
}

export default NavbarList
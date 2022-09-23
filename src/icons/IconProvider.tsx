import { 
    IconCookie, 
    IconGrowth,
    IconDatabase,
    IconBook,
    IconPencil,
    IconNotebook,
    IconPlus 
} 
from '@tabler/icons';

type props = {
   icon: string;
}


const IconProvider:React.FC<props> = (props) => {

    const iconSwitch = (parameter : string) => {
        switch(parameter){
          case 'plus':
            return <IconPlus/>
          case 'cookie':
            return <IconCookie size={20}/>
          case 'database':
            return <IconDatabase size={20}/>
          case 'growth':
            return <IconGrowth size={20}/>
          case 'pencil':
            return <IconPencil size={20}/>
          case 'book':
            return <IconBook size={20}/>
          default: 
            return <IconNotebook />
        }
    }

    return (
        <div>
            { iconSwitch(props.icon) }
        </div>
    )
}


export default IconProvider


 
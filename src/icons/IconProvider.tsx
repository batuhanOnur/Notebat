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
            return <IconPlus />
          case 'cookie':
            return <IconCookie />
          case 'database':
            return <IconDatabase />
          case 'growth':
            return <IconGrowth />
          case 'pencil':
            return <IconPencil />
          case 'book':
            return <IconBook />
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


 
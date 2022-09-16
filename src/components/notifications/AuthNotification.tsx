import React, { useEffect } from 'react'
import { useNavigate  } from 'react-router-dom'
import { showNotification } from '@mantine/notifications';

type Props = {
  title: string,
  message: string,
  color: string,
  autoClose: number,
  navigateTo: string
}


const AuthNotification: React.FC<Props> = (props) => {

  const navigate = useNavigate();

  useEffect(() => {
    showNotification({
      title: props.title,
      message: props.message,
      color: props.color,
      autoClose: props.autoClose,
    });

    setTimeout(() => {
       navigate(`/${props.navigateTo}`)
    }, props.autoClose)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])


  return (
    <>
    </>
  )
}

export default AuthNotification
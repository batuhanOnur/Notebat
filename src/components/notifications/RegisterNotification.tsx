import React, { MutableRefObject, useRef, useEffect } from 'react'
import { useNavigate  } from 'react-router-dom'

const RegisterNotification: React.FC = () => {

  const bar = useRef() as MutableRefObject<HTMLDivElement>;
  const navigate = useNavigate();

  useEffect(() => {
    let width:number = 100;
    var id = setInterval(()=> {
      if(width <= 0) {
        clearInterval(id);
          navigate("/login")
      } else {
        width--;
        bar.current.style.width = width + '%'; 
      }
    }, 10);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])


  return (
    <div className="bg-black rounded-lg shadow-md">
        <h3 className="text-white p-3">Register Succesful</h3>
        <div className="bg-grey-500">
            <div ref={bar} className="h-1 w-[100%] bg-green-500 rounded"></div>
        </div>
    </div>
  )
}

export default RegisterNotification
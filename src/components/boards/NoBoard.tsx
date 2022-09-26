import React from 'react'
import planeast from '../../assets/planeast.jpg'
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';

type Props = {
    id: string | undefined,
}

const NoBoard:React.FC<Props> = (props) => {
    const user = useSelector((state: RootState) => state.persistedReducer)
    console.log('storeUser', user)
  return (
    <div className="flex flex-col justify-center items-center">
        <div>
            <img className="w-[200px] h-[200px] rounded-full" src={planeast} alt="noboard" />
        </div>

        <div className="mt-5">
            <span>There is no Board, </span><span className="text-orange-500 underline underline-offset-2 cursor-pointer">Let's Add!</span>
        </div>
    </div>
  )
}

export default NoBoard
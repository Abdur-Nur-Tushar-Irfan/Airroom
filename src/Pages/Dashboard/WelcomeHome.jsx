/* eslint-disable no-unused-vars */
import { useContext } from 'react'
import { AuthContext } from '../../Context/AuthProvider';

const WelcomeHome = () => {
  const { user } = useContext(AuthContext)

  return (
    <div className='mt-32 text-gray-700 flex flex-col justify-center items-center pb-16'>
      <div className='flex justify-center items-center'>
        <p className='text-6xl font-bold'>Welc</p>
        <div className='w-9 h-9 border-8 border-dashed rounded-full animate-spin mt-3 border-green-400'></div>
        <p className='text-6xl font-bold mr-2'>me</p>
        <p className='text-6xl font-bold'>To</p>
      </div>
      <div className='flex justify-center text-gray-500 items-center mt-4'>
        <p className='text-3xl font-medium'>Room Reservation</p>
      </div>
    </div>
  )
}

export default WelcomeHome;
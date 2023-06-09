import { BookmarkIcon, ChatBubbleLeftIcon, FingerPrintIcon, UserPlusIcon } from '@heroicons/react/24/solid'
import { NavLink } from 'react-router-dom'

const UserMenu = () => {
  return (
    <>
      <NavLink
        to='/dashboard/room'
        className={({ isActive }) =>
          `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
            isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
          }`
        }
      >
        <FingerPrintIcon className='w-5 h-5' />

        <span className='mx-4 font-medium'>Add Room</span>
      </NavLink>

      <NavLink
        to='/dashboard/Booking'
        className={({ isActive }) =>
          `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
            isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
          }`
        }
      >
        <BookmarkIcon className='w-5 h-5' />

        <span className='mx-4 font-medium'>Booking</span>
      </NavLink>
      <NavLink
        to='/dashboard/message'
        className={({ isActive }) =>
          `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
            isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
          }`
        }
      >
        <ChatBubbleLeftIcon className='w-5 h-5' />
        <span className='mx-4 font-medium'>Message</span>
      </NavLink>
     
     
    </>
  )
}

export default UserMenu
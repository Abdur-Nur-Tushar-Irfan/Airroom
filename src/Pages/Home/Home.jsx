/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Spinner from '../Spinner/Spinner'
import HomeCard from '../Card/HomeCard'
import SearchForm from '../Form/SearchForm'
import ExpCard from '../Card/ExpCard'
import WelcomeHome from '../Dashboard/WelcomeHome'


const Home = () => {
  // const [loading, setLoading] = useState(false)
  // const [allExp, setAllExp] = useState([])
  // useEffect(() => {
  //   setLoading(true)
  //   fetch('expdata.json')
  //     .then(res => res.json())
  //     .then(data => {
  //       setAllExp(data)
  //       setLoading(false)
  //     })
  // }, [])

  return (
    // <div className='md:flex justify-center gap-10 px-6 md:px-10 lg:px-20'>
    //   <div className='mt-4'>
    //   </div>

    //   <div className='flex-1'>
    //     <div>
    //       <div className='flex justify-between px-4 mt-10'>
    //         <p className='text-xl font-bold'>Guest-House#1</p>
    //         <Link to='/coming-soon'>
    //           <p>See All</p>
    //         </Link>
    //       </div>
    //       <div className='container pb-8 pt-2 mx-auto'>
    //         <div className='flex flex-wrap'>
    //           {[...Array(3)].map((_, i) => (
    //             <HomeCard key={i} />
    //           ))}
    //         </div>
    //       </div>
    //     </div>
    //     {loading ? (
    //       <Spinner></Spinner>
    //     ) : (
    //       <div>
    //         <div className='flex justify-between px-4'>
    //           <p className='text-xl font-bold'>Guest-House#2</p>
    //           <Link to=''>
    //             <p>See All</p>
    //           </Link>
    //         </div>
    //         <div className='container pb-8 pt-2 mx-auto'>
    //           <div className='flex flex-wrap'>
    //             {allExp.slice(0, 4).map((exp, i) => (
    //               <ExpCard key={i} exp={exp} />
    //             ))}
    //           </div>
    //         </div>
    //       </div>
    //     )}
    //   </div>
    // </div>
   <WelcomeHome></WelcomeHome>
  )
}

export default Home
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { CalendarIcon } from '@heroicons/react/20/solid'
import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import { useForm } from 'react-hook-form'


const AddServiceForm = () => {
    const [arrivalDate, setArrivalDate] = useState(new Date())
    const [departureDate, setDepartureDate] = useState(
        new Date(arrivalDate?.getTime() + 24 * 60 * 60 * 1000)
    )
    const { register, handleSubmit } = useForm();
    const handleBooking = (data) => {
        console.log(data)

    }

    return (
        <>
            <div className='flex justify-center'>
                <div className='w-full p-6 space-y-3 text-gray-800 rounded-xl bg-gray-50'>
                    <form
                        onSubmit={handleSubmit(handleBooking)}
                        className='space-y-6 ng-untouched ng-pristine ng-valid'
                    >
                        <div className='flex justify-between gap-2'>
                            <div className='space-y-1 text-sm'>
                                <p className='block text-sm text-gray-500'>Check in</p>
                                <div className='shadow-md rounded-md my-2 p-3 flex justify-between items-center'>
                                    <div>
                                        <DatePicker
                                            selected={arrivalDate}
                                            onChange={date => setArrivalDate(date)}
                                            className='w-2/3'
                                        />
                                    </div>
                                    <CalendarIcon className='h5 w-5' />
                                </div>
                            </div>

                            <div className='space-y-1 text-sm'>
                                <label htmlFor='guest' className='block text-gray-600'>
                                    Duration
                                </label>
                                <input
                                    {...register("duration")}
                                    className='w-full px-4 py-3 text-gray-800 border border-green-300 focus:outline-green-500 rounded-md bg-green-50'
                                    name='duration'
                                    id='duration'
                                    type='number'
                                    placeholder='Duration'
                                    required
                                />
                            </div>
                            <div className='space-y-1 text-sm'>
                                <p className='block text-sm text-gray-500'>Check Out</p>
                                <div className='shadow-md rounded-md my-2 p-3 flex justify-between items-center'>
                                    <div>
                                        <DatePicker
                                            selected={departureDate}
                                            onChange={date => setDepartureDate(date)}
                                            className='w-2/3'
                                        />
                                    </div>
                                    <CalendarIcon className='h5 w-5' />
                                </div>
                            </div>
                            <div className='space-y-1 text-sm'>
                                <label htmlFor='guest' className='block text-gray-600'>
                                    Total Cost
                                </label>
                                <input
                                    {...register("cost")}
                                    className='w-full px-4 py-3 text-gray-800 border border-green-300 focus:outline-green-500 rounded-md bg-green-50'
                                    name='cost'
                                    id='duration'
                                    type='number'
                                    placeholder='Total Cost'
                                    required
                                />
                            </div>
                        </div>
                        <p className='text-lg font-bold'>Room Details</p>

                        <div className='flex justify-between gap-2'>
                            <div className='space-y-1 text-sm'>
                                <label htmlFor='price' className='block text-gray-600'>
                                    Room Type
                                </label>
                                <select {...register("roomtype")} className="select bg-green-50 select-accent select-bordered w-full">
                                    <option>Dulex</option>
                                    <option>Suit</option>
                                </select>
                            </div>

                            <div className='space-y-1 text-sm'>
                                <label htmlFor='guest' className='block text-gray-600'>
                                    Guest House
                                </label>
                                <select {...register("guesthouse")} className="select bg-green-50 select-accent select-bordered w-full">
                                    <option>Guest House-1</option>
                                    <option>Guest House-2</option>
                                </select>
                            </div>

                            <div className='space-y-1 text-sm'>
                                <label htmlFor='guest' className='block text-gray-600'>
                                    Room No
                                </label>
                                <input
                                    {...register("roomno")}
                                    className='w-full px-4 py-3 text-gray-800 border border-green-300 focus:outline-green-500 rounded-md bg-green-50'
                                    id='guest'
                                    type='number'
                                    placeholder='Room No'
                                    required
                                />
                            </div>
                            <div className='space-y-1 text-sm'>
                                <label htmlFor='guest' className='block text-gray-600'>
                                    Guest
                                </label>
                                <input
                                    {...register("guest")}
                                    className='w-full px-4 py-3 text-gray-800 border border-green-300 focus:outline-green-500 rounded-md bg-green-50'
                                    name='guest'
                                    id='guest'
                                    type='number'
                                    placeholder='Total guest'
                                    required
                                />
                            </div>
                        </div>
                        <p className='text-lg font-bold'>Guest Details</p>

                        <div className='flex justify-between gap-2'>
                            <div className='space-y-1 text-sm'>
                                <label htmlFor='bedrooms' className='block text-gray-600'>
                                    Full Name
                                </label>
                                <input
                                    {...register("fullName")}
                                    className='w-full px-4 py-3 text-gray-800 border border-green-300 focus:outline-green-500 rounded-md bg-green-50'

                                    id='name'
                                    type='name'
                                    placeholder='Full Name'
                                    required
                                />
                            </div>

                            <div className='space-y-1 text-sm'>
                                <label htmlFor='bathrooms' className='block text-gray-600'>
                                    Email
                                </label>
                                <input
                                    {...register("email")}
                                    className='w-full px-4 py-3 text-gray-800 border border-green-300 focus:outline-green-500 rounded-md bg-green-50'
                                    name='email'
                                    id='email'
                                    type='email'
                                    placeholder='Email'
                                    required
                                />
                            </div>
                            <div className='space-y-1 text-sm'>
                                <label htmlFor='bathrooms' className='block text-gray-600'>
                                    Nationality
                                </label>
                                <input
                                    {...register("nationality")}
                                    className='w-full px-4 py-3 text-gray-800 border border-green-300 focus:outline-green-500 rounded-md bg-green-50'
                                    name='nationality'
                                    type='name'
                                    placeholder='Nationality'
                                    required
                                />
                            </div>
                            <div className='space-y-1 text-sm'>
                                <label htmlFor='bathrooms' className='block text-gray-600'>
                                    Phone Number
                                </label>
                                <input
                                    {...register("phone")}
                                    className='w-full px-4 py-3 text-gray-800 border border-green-300 focus:outline-green-500 rounded-md bg-green-50'

                                    id='Phone'
                                    type='number'
                                    placeholder='Phone'
                                    required
                                />
                            </div>
                            <div className='space-y-1 text-sm'>
                                <label htmlFor='bathrooms' className='block text-gray-600'>
                                    Address
                                </label>
                                <input
                                    {...register("address")}
                                    className='w-full px-4 py-3 text-gray-800 border border-green-300 focus:outline-green-500 rounded-md bg-green-50'

                                    id='Phone'
                                    placeholder='Address'
                                    required
                                />
                            </div>
                        </div>

                        <div className='space-y-1 text-sm'>
                            <label htmlFor='description' className='block text-gray-600'>
                                Description
                            </label>

                            <textarea
                                {...register("area")}
                                id='description'
                                className='block rounded-md focus:green-300 w-full h-20 px-4 py-3 text-gray-800 bg-green-50 border border-green-300 focus:outline-green-500 '
                            ></textarea>
                        </div>

                        <button
                            type='submit'
                            className='block w-full p-3 text-center font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-gradient-to-r from-emerald-500 to-lime-500 hover:bg-gray-200 hover:text-gray-700 focus:shadow-outline focus:outline-none'
                        >
                            Save and Continue
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default AddServiceForm
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { CalendarIcon } from '@heroicons/react/20/solid'
import React from 'react'
import DatePicker from 'react-datepicker'

const AddServiceForm = ({
    handleSubmit,
    arrivalDate,
    setArrivalDate,
    departureDate,
    setDepartureDate,
    loading,
    handleImageChange,
    preview,
    uploadButtonText,
}) => {
    return (
        <>
            <div className='flex justify-center'>
                <div className='w-full p-6 space-y-3 text-gray-800 rounded-xl bg-gray-50'>
                    <form
                        onSubmit={handleSubmit}
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
                                    className='w-full px-4 py-3 text-gray-800 border border-green-300 focus:outline-green-500 rounded-md bg-green-50'
                                    name='total_guest'
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
                                            selected={arrivalDate}
                                            onChange={date => setArrivalDate(date)}
                                            className='w-2/3'
                                        />
                                    </div>

                                    <CalendarIcon className='h5 w-5' />
                                </div>
                            </div>
                        </div>
                        <p className='text-lg font-bold'>Room Details</p>

                        <div className='flex justify-between gap-2'>
                            <div className='space-y-1 text-sm'>
                                <label htmlFor='price' className='block text-gray-600'>
                                    Room Type
                                </label>
                                <input
                                    className='w-full px-4 py-3 text-gray-800 border border-green-300 focus:outline-green-500 rounded-md bg-green-50'
                                    name='price'
                                    id='price'
                                    placeholder='Room type'
                                    required
                                />
                            </div>

                            <div className='space-y-1 text-sm'>
                                <label htmlFor='guest' className='block text-gray-600'>
                                    Room Plan
                                </label>
                                <input
                                    className='w-full px-4 py-3 text-gray-800 border border-green-300 focus:outline-green-500 rounded-md bg-green-50'
                                    name='total_plan'
                                    id='guest'
                                    type='number'
                                    placeholder='Room Plan'
                                    required
                                />
                            </div>

                            <div className='space-y-1 text-sm'>
                                <label htmlFor='guest' className='block text-gray-600'>
                                    Room No
                                </label>
                                <input
                                    className='w-full px-4 py-3 text-gray-800 border border-green-300 focus:outline-green-500 rounded-md bg-green-50'
                                    name='room_no'
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
                                    className='w-full px-4 py-3 text-gray-800 border border-green-300 focus:outline-green-500 rounded-md bg-green-50'
                                    name='name'
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
                                    Phone Number
                                </label>
                                <input
                                    className='w-full px-4 py-3 text-gray-800 border border-green-300 focus:outline-green-500 rounded-md bg-green-50'
                                    name='Phone'
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
                                    className='w-full px-4 py-3 text-gray-800 border border-green-300 focus:outline-green-500 rounded-md bg-green-50'
                                    name='address'
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
                                id='description'
                                className='block rounded-md focus:green-300 w-full h-20 px-4 py-3 text-gray-800 bg-green-50 border border-green-300 focus:outline-green-500 '
                                name='description'
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
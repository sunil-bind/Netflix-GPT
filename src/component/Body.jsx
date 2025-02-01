import React from 'react'
import Browser from './Browser'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Login from './Login'


const Body = () => {
    const appRouter = createBrowserRouter([
        {
            path :'/',
            element: <Login/>
        },
        {
            path:'/browser',
            element: <Browser />
        }
    ])

  return (
    <RouterProvider router={appRouter} />
  )
}

export default Body
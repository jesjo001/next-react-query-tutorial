"use client"
import React from 'react'
import { User, useUsers } from '../hooks/useUsers'

function page() {
    const { data, isLoading, isError, error,  } = useUsers()

    if(isLoading) return <div className="text-center text-gray-600">Loading users...</div>;
  if (error) return <div className="text-center text-red-500">Error loading users: {error.message}</div>;

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-4">User List</h1>
        <ul className="space-y-2">
        {
            data ? (
                data.map((user: User) => (
                    <li key={user.id} className="text-center text-gray-800 bg-gray-50 p-2 rounded" >
                        {user.name}
                    </li>
                )
            ) ) : (<> No Users found</>)
        }
        </ul>
      </div>
    </div>
  )
}

export default page
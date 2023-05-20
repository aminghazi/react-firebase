import React, { useEffect, useState } from "react"
import User from "./User"

export default function Users() {

    const [users, setUsers] = useState([
        {
            id: 1,
            name: "amin",
            family: "ghazi",
            email: "amingahzi@outlook.com",
        }
    ])
    const [userId, setUserId] = useState("")
    const [userData, setUserData] = useState("")
    const [getData, setGetData] = useState(false)
    const [showDeleteModal, setShowDeleteModal] = useState(false)
    const [showEditModal, setShowEditModal] = useState(false)

    const [name, setName] = useState('')
    const [family, setFamily] = useState('')
    const [email, setEmail] = useState('')
    
    // useEffect(() => {
        // async function fetchData() {
        //     await fetch('firebaseurl/users.json')
        //         .then(res => res.json)
        //         .then(data => {
        //             setUsers(Object.entries(data))
        //         })
        // }
        // fetchData()
    // }, [getData])
        
        const removeHandler = async () => {
            // await fetch(`firebaseurl/users/${userId}.json`, {
            //     method: 'DELETE',
            // }).then(res => console.log(res))
    
            setShowDeleteModal(false)
            setGetData(prev => !prev)
        }
    
        const editHandler = async () => {
            
            let newUser = {
                name,
                family,
                email
            }

            // await fetch(`firebaseurl/users/${userId}.json`, {
            //     method: 'PUT',
            //     body: JSON.stringify(newUser)
            // }).then(res => console.log(res))
    
            setShowEditModal(false)
            setGetData(prev => !prev)
        }
    
        return (
            <>
            {users && <ul className="divide-y divide-gray-100 mx-auto mt-16 max-w-xl sm:mt-20">
                    {users.map((user) => (
                        // <User
                        //     key={user.id}
                        //     {...user}
                        //     onRemove={this.removeUser} />
                        <li key={user.email} className="flex justify-between gap-x-6 py-5">
                            <div className="flex gap-x-4">
                                <div className="min-w-0 flex-auto">
                                <span className="text-sm font-semibold leading-6 text-gray-900">{user.name} {user.family}</span>
                                <p className="mt-1 truncate text-xs leading-5 text-gray-500">{user.email}</p>
                                </div>
                            </div>
                            <div className="flex">
                                <button
                                    onClick={() => {
                                        setShowEditModal(true)
                                        setUserId(user[0])
                                    }}
                                    type="button"
                                    className="text-sm p-1">
                                    Edit
                                </button>
                                
                                <button
                                    onClick={() => {
                                            setShowDeleteModal(true)
                                            setUserId(user[0])
                                        }
                                    }
                                    type="button"
                                    className="text-sm p-1">
                                    Delete
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            }
            
            {/* Remove Modal */}
            <div className="relative">
                {showDeleteModal && (
                    <>
                    <div
                        onClick={() => setShowDeleteModal(false)}
                        className="fixed inset-0 bg-gray-900 bg-opacity-50 z-50"
                        aria-hidden="true"
                    ></div>
                    <div className="fixed inset-0 z-50 overflow-y-auto">
                        <div className="relative bg-white rounded-lg mx-auto max-w-lg lg:max-w-3xl p-5 sm:mt-20">
                            <div className="p-4">
                                <div>
                                    aaaaaa
                                </div>
                                <div className="mt-10 flex flex-row-reverse">
                                    <button onClick={() => setShowDeleteModal(false)} className="bg-sky-500/50 hover:bg-sky-500/60 p-3 m-2 rounded text-white font-semibold text-sm">Close</button>
                                    <button onClick={() => removeHandler()} className="bg-sky-500/50 hover:bg-sky-500/100 p-3 m-2 rounded bg-blue-400 text-white font-semibold text-sm">Yes, Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    </>
                )}
            </div>
                

            {/* Edit Modal */}
            <div className="relative">
                {showEditModal && (
                    <>
                    <div
                        onClick={() => setShowEditModal(false)}
                        className="fixed inset-0 bg-gray-900 bg-opacity-50 z-50"
                        aria-hidden="true"
                    ></div>
                    <div className="fixed inset-0 z-50 overflow-y-auto">
                        <div className="relative bg-white rounded-lg mx-auto max-w-lg lg:max-w-3xl p-5 sm:mt-20">
                            <div className="p-4">
                                <div>
                                    <form autoComplete='false' className="mx-auto mt-16 max-w-xl sm:mt-20">
                                        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                                            <div>
                                                <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
                                                First name
                                                </label>
                                                <div className="mt-2.5">
                                                <input
                                                    type="text"
                                                    name="first-name"
                                                    id="first-name"
                                                    autoComplete="given-name"
                                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                    onChange={event => setName(event.target.value)}
                                                />
                                                </div>
                                            </div>
                                            <div>
                                                <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
                                                Last name
                                                </label>
                                                <div className="mt-2.5">
                                                <input
                                                    type="text"
                                                    name="last-name"
                                                    id="last-name"
                                                    autoComplete="family-name"
                                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                    onChange={event => setFamily(event.target.value)}
                                                />
                                                </div>
                                            </div>
                                            <div>
                                                <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                                                Email
                                                </label>
                                                <div className="mt-2.5">
                                                <input
                                                    type="email"
                                                    name="email"
                                                    id="email"
                                                    autoComplete="email"
                                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                    onChange={event => setEmail(event.target.value)}
                                                />
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className="mt-10 flex flex-row-reverse">
                                    <button onClick={() => setShowEditModal(false)} className="bg-sky-500/50 hover:bg-sky-500/60 p-3 m-2 rounded text-white font-semibold text-sm">Close</button>
                                    <button onClick={() => editHandler()} className="bg-sky-500/50 hover:bg-sky-500/100 p-3 m-2 rounded bg-blue-400 text-white font-semibold text-sm">Edit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    </>
                )}
            </div>
        </>
    )
}

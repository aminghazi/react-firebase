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
    const [userData, setUserData] = useState(false)
    const [showDeleteModal, setShowDeleteModal] = useState(false)
    const [showEditModal, setShowEditModal] = useState(false)

    
    // useEffect(() => {
        // async function fetchData() {
        //     await fetch('firbaseurl/users.json')
        //         .then(res => res.json)
        //         .then(data => {
        //             setUsers(Object.entries(data))
        //         })
        // }
        // fetchData()
        // }, [userData])
        
        const removeHandler = async () => {
            // await fetch(`firbaseurl/users/${userId}.json`, {
            //     method: 'DELETE',
            // }).then(res => console.log(res))
    
            setShowDeleteModal(false)
            setUserData(prev => !prev)
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
                                    type="button" className="text-sm p-1">Edit</button>
                                <button onClick={() => setShowDeleteModal(true)} type="button" className="text-sm p-1">Delete</button>
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
        </>
    )
}

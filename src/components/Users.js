import React, { useEffect, useState } from "react"
import User from "./User"

export default function Users() {

    const [users, setUsers] = useState([])
    
    useEffect(() => {
        async function fetchData() {
            await fetch('')
                .then(res => res.json)
                .then(data => {
                    setUsers(Object.entries(data))
                })
        }
        fetchData()
    }, [])

    return (
        <ul role="list" className="divide-y divide-gray-100 mx-auto mt-16 max-w-xl sm:mt-20">
            {users.map((user) => (
                <User {...user} />
            ))}
        </ul>
    )
}

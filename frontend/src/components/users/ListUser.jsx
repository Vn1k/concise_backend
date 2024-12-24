import {useState, useEffect}from 'react'
import axios from 'axios'
import { fetchUsers } from '../../api/userApi'

function ListUser() {
    const [users, setUsers] = useState([])
    useEffect(() => {
        const getUsers = async () => {
            try {
                const userData = await fetchUsers()
                setUsers(userData)
            } catch (error) {
                console.log('error', error)
            }
        }
        getUsers()
    }, [])
  return (
    <div>
        <h1>List Users</h1>
        <ul>
            {users.map((user) => (
                <li key={user.id}>{user.name}, {user.email}, {user.phone}, {user.address} <a href="/update">edit</a></li>
            ))}
        </ul>
    </div>
  )
}

export default ListUser
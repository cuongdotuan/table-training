import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [users, setUsers] = useState([])
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(1)
  useEffect(() => {
    let ignore = false
    const getUsers = async () => {
      try {
        const res = await axios.get('https://652c9ca6d0d1df5273ef81fd.mockapi.io/students?page=2&limit=10&fbclid=IwAR0fhbk-domPF96cq6mjCk4YBh55zAhECdwZMc94KieDQuekm9MWVJo2HCQ')
        console.log(res.data)
        if (!ignore) {
          setUsers(res.data)
        }
      } catch (error) {
        console.log(error)
      }
    }
    getUsers()
    return () => {
      ignore = true
    }
  }, [])
  return (
    <>
      <h1 className='text-3xl'>Students Table</h1>
      <table className='border-[1px] border-solid border-zinc-700 w-11/12 mx-auto mt-6'>
        <thead className='border-[1px] border-solid border-zinc-700'>
          <tr>
            <td>ID</td>
            <td>Name</td>
            <td>Age</td>
            <td>Birthday</td>
            <td>isGraduated</td>
            <td>Last Active</td>
          </tr>
        </thead>
        <tbody>
          {users.map((user) =>
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user.birthday}</td>
              {/* <td>{user.isGraduated}</td> */}
              {user.isGraduated ? <td>Graduated</td> : <td>Not Graduated</td>}
              <td>{user.lastActive}</td>
            </tr>
          )}
        </tbody>
      </table>
    </>


  )
}

export default App

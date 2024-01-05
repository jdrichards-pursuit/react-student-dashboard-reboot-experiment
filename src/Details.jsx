import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function Details({ fullCohort }) {
    const [student, setStudent] = useState({})
    const { id } = useParams()


    // const { username } = foundStudent
    // console.log(foundStudent)

    useEffect(() => {
        fetch(`http://localhost:5001/api/students/${id}`).then(res => res.json()).then(data => setStudent(data))
    }, [id])

    // return null
    return <div><h1>{student.username}</h1><Link to={`/students/${id}/edit`}>Edit</Link></div>
}
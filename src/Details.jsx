import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function Details({ fullCohort }) {
    const [student, setStudent] = useState({})
    const { id } = useParams()
    const URL = import.meta.env.VITE_BASE_API_URL


    useEffect(() => {
        fetch(`${URL}/api/students/${id}`).then(res => res.json()).then(data => setStudent(data))
    }, [id])


    return <div><h1>{student.username}</h1><Link to={`/students/${id}/edit`}>Edit</Link></div>
}
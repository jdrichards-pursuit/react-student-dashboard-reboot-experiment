
import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'


export default function StudentFormEdit() {
    const URL = import.meta.env.VITE_BASE_API_URL
    const { id } = useParams()
    const navigate = useNavigate()

    const [username, setUsername] = useState({ username: '', id })

    function handleClick(event) {
        setUsername({ ...username, username: event.target.value })
    }


    function handleSubmit(event) {
        event.preventDefault()

        const options = {
            method: 'PATCH',
            body: JSON.stringify(username),
            headers: { "Content-Type": "application/json" }
        }

        fetch(`${URL}/api/students/${id}`, options).then(response => response.json()).then(() => navigate(`/students/${id}`))
    }

    useEffect(() => {
        fetch(`${URL}/api/students/${id}`).then(response => response.json()).then(data => {
            setUsername({ id: data.id, username: data.username })
        })
    }, [id])


    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">
                    First:
                    <input onChange={handleClick} type='text' id="username" value={username.username} />
                </label>
                <br />

                <button>Submit</button>
            </form>
        </>
    )
}
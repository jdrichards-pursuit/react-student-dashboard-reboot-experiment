import { useParams } from 'react-router-dom'

export default function Details({ fullCohort }) {
    const { id } = useParams()

    const foundStudent = fullCohort.filter(student => id === student.id)

    console.log(foundStudent)


    return null;
}
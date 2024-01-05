import { useState, useEffect } from "react";
import { Routes, Route } from 'react-router-dom'
import Student from './Student'
import Details from './Details'
import StudentFormEdit from './StudentFormEdit'



import './App.css'


const URL = import.meta.env.VITE_BASE_API_URL

console.log('url', URL)

const App = () => {
  const [fullCohort, setFullCohort] = useState([])


  useEffect(() => {
    async function fetcher() {
      const res = await fetch(`${URL}/api/students`)
      const data = await res.json()
      setFullCohort(data)
    }
    fetcher()
  }, [])

  return <div>
    <Routes>
      <Route path='/' element={
        <ul className="student-list">
          {fullCohort.map(student => <Student key={student.id} student={student} />)}
        </ul>
      } />
      <Route path='/students/:id' element={<Details fullCohort={fullCohort} />} />
      <Route path='/students/:id/edit' element={<StudentFormEdit fullCohort={fullCohort} />} />
    </Routes>


  </div>
};

export default App;

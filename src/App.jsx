import { useState, useEffect } from "react";
import { Routes, Route } from 'react-router-dom'
import Student from './Student'
import Details from './Details'
import StudentFormEdit from './StudentFormEdit'

import './App.css'

const App = () => {
  const [fullCohort, setFullCohort] = useState([])


  useEffect(() => {
    (async function () {
      const res = await fetch('http://localhost:5001/api/students')
      const data = await res.json()
      setFullCohort(data)
    })()
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

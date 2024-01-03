import { useState, useEffect } from "react";
import Student from './Student'

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
    <ul>
      {fullCohort.map(student => <Student student={student} />)}
    </ul>

  </div>
};

export default App;

import { useState, useEffect } from "react";

const App = () => {
  const [fullCohort, setFullCohort] = useState([])


  useEffect(() => {
    (async function () {
      const res = await fetch('http://localhost:5001/api/students')
      const data = await res.json()
      setFullCohort(data)
    })()
  }, [])

  return <div>{console.log(fullCohort)}
    <h1>Hello</h1>
  </div>
};

export default App;

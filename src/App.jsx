import { useState } from "react";
import { obj, cohortNames } from "./dataFunctions";
import Aside from "./components/Aside";
import Main from "./components/Main";

import data from "./data/data.json";
import { sortCohort } from "./helpers";
import "./App.css";

function App() {
  const [cohortNamesArray] = useState(cohortNames);
  const [cohortSeparatedData, setCohortSeparatedData] = useState(obj);
  const [chosenCohort, setChosenCohort] = useState(sortCohort(data));
  const [mainCohortName, setMainCohortName] = useState("All Students");

  console.log("cNamesArray", cohortNamesArray);
  console.log("cSeparatedData", cohortSeparatedData);
  console.log("chosenCohort", chosenCohort);

  const handleChooseCohort = (val) => {
    if (val === "all") {
      const sortedCohort = sortCohort(data);

      setChosenCohort(sortedCohort);
      setMainCohortName("All Students");
      return;
    }

    const removeSpace = val.replace(/\s/g, "");
    const singleCohort = cohortSeparatedData[removeSpace];
    setChosenCohort(sortCohort(singleCohort));
    setMainCohortName(val);
  };

  return (
    <>
      <header
        style={{
          background: "green",
          color: "white",
          height: 100,
          textAlign: "center",
          padding: 10
        }}
      >
        <h1>Student Dashboard</h1>
      </header>

      <div className="container">
        <aside id="sidebar">
          <h2 style={{ margin: "30px 20px 10px 20px" }}>
            Choose A Class By Start Date
          </h2>
          <Aside
            data={data}
            cohortNamesArray={cohortNamesArray}
            handleChooseCohort={handleChooseCohort}
          />
        </aside>
        <main>
          <Main
            chosenCohort={chosenCohort}
            mainCohortName={mainCohortName}
            setChosenCohort={setChosenCohort}
          />
        </main>
      </div>
    </>
  );
}

export default App;

import MainItem from './MainItem';
import './Main.css';

const Main = ({ chosenCohort, mainCohortName, setChosenCohort }) => {
  return (
    <>
      <h2 style={{ marginLeft: 50, background: 'none', fontSize: '2em' }}>
        {mainCohortName}
      </h2>
      <h3 style={{ marginLeft: 50, fontSize: '1.5em' }}>
        Total Students: {chosenCohort.length}
      </h3>
      <ul id="person-info">
        {chosenCohort?.map((item) => (
          <MainItem
            key={item.id}
            chosenCohort={chosenCohort}
            setChosenCohort={setChosenCohort}
            {...item}
          />
        ))}
      </ul>
    </>
  );
};

export default Main;

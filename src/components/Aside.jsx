// import { useEffect, useState } from 'react';
import { useState } from 'react';
import { ascending, descending, setCohortNames } from '../dataFunctions';

function Aside({ handleChooseCohort }) {
  const [theCohorts, setTheCohorts] = useState(setCohortNames(ascending));
  const [toggleYear, setToggleYear] = useState('ascending');

  return (
    <>
      <button
        style={{
          background: 'green',
          color: 'white',
          marginLeft: 20,
          height: 50,
          borderRadius: 5,
          fontWeight: 'bold'
        }}
        onClick={() => {
          setToggleYear(
            toggleYear === 'descending' ? 'ascending' : 'descending'
          );
          setTheCohorts(
            setCohortNames(toggleYear === 'descending' ? ascending : descending)
          );
        }}
      >
        Sort {toggleYear === 'descending' ? 'Ascending' : 'Descending'} By Year
      </button>{' '}
      <ol>
        <li className="choose-dates" onClick={() => handleChooseCohort('all')}>
          All Students
        </li>
        <hr />
        {theCohorts?.map((item, id) => (
          <li
            className="choose-dates"
            key={id}
            onClick={() => handleChooseCohort(item)}
          >
            {item} <hr />
          </li>
        ))}
      </ol>
    </>
  );
}

export default Aside;

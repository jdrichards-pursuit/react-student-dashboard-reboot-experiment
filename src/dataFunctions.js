import data from './data/data.json';

export let obj = {};
// let sortedCohortNames = [];

//object so split cohorts by year
let setObj = {};

const breakDown = (dta) => {
  let obj = {};
  dta.forEach((item) => (obj[item.id] = item));
  return obj;
};

const normData = breakDown(data);

console.log('norm', normData);

/**separate cohort dates and pass them into an array***/
const cohorts = new Set();

data.forEach((item) => {
  const singleCohort = item.cohort.cohortCode;

  cohorts.add(singleCohort);

  if (obj[singleCohort]) {
    obj[singleCohort] = [...obj[singleCohort], item];
  } else {
    obj[singleCohort] = [item];
  }
});

// cohort Names array from set
export const cohortNames = [...Array.from(cohorts)];

const newArray = [...Array.from(cohorts)];
/********************************************* */

/****store cohort seasons in an object based on year****/
const storeCohorts = (arr) => {
  arr.forEach((item) => {
    const yr = item.slice(item.length - 4);
    if (setObj[yr]) setObj[yr].push(item);
    else setObj[yr] = [item];
  });
};
storeCohorts(cohortNames);

/****move fall to proper position in cohort****/
const adjustCohorts = (obj) => {
  for (let el in obj) {
    let arr = [...obj[el]];

    let sum = arr[1];
    let spr = arr[2];

    arr[1] = spr;
    arr[2] = sum;

    obj[el] = arr;
  }
  console.log('objel', obj);
};
console.log('before', setObj);
adjustCohorts(setObj);
/********************************************* */

/****  sort by year ascending and descending *******/
const sortTheCohortNames = (direction, obj) => {
  let sortedCohortNames = [];
  for (let el in obj) {
    if (direction === 'descending')
      sortedCohortNames = [...obj[el], ...sortedCohortNames];
    else sortedCohortNames = [...sortedCohortNames, ...obj[el]];
  }
  return sortedCohortNames;
};

export const ascending = sortTheCohortNames('ascending', setObj);
export const descending = sortTheCohortNames('descending', setObj);
/********************************************* */

/****  make cohort names readable *******/
export const setCohortNames = (arr) => {
  const x = arr.map((item) => {
    const cohortName = item.split('');
    cohortName.splice(-4, 0, ' ');
    return cohortName.join('');
  });

  return x;
};

/********************************************* */

// Don't remember what this was for. Think it was absorbed into another function
// export const sortNames = (func, arr) => {
//   return func(arr).sort((a, b) => {
//     const one = a.split(' ');
//     const two = b.split(' ');

//     return two.at(-1) - one.at(-1);
//   });
// };

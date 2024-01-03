export function sortCohort(val) {
  return val.sort((a, b) => {
    return a.names.surname > b.names.surname ? 1 : -1;
  });
}

export function setMonth(val) {
  let x = val.split('/');

  const date = new Date(Date.UTC(x[0], x[1], x[2]));

  let options = { month: 'long', day: 'numeric', year: 'numeric' };
  const y = new Intl.DateTimeFormat('en-US', options).format(date);
  return y;
}

export const makePercent = (val) => {
  return parseInt(+val * 100);
};

export const useEmoji = (val) => {
  return val ? '🟢' : '🔴';
};

export function greenYellowRed(val) {
  if (val >= 100) return 'green';
  if (val > 50 && val < 100) return 'purple';
  return 'red';
}

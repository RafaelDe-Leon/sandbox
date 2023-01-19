const companies = [
  { name: 'Company One', category: 'Finance', start: 1986, end: 2022 },
  { name: 'Company Two', category: 'Auto', start: 1986, end: 2017 },
  { name: 'Company Three', category: 'Technology', start: 1986, end: 2010 },
  { name: 'Company Four', category: 'Retail', start: 1990, end: 2007 },
  { name: 'Company Five', category: 'Food', start: 1998, end: 2010 },
  { name: 'Company Six', category: 'Finance', start: 1980, end: 2014 },
  { name: 'Company Seven', category: 'Retail', start: 1981, end: 2022 },
  { name: 'Company Eight', category: 'Retail', start: 1986, end: 1989 },
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// for (let i = 0; i < companies.length; i++) {
//   console.log(companies[i]);
// }

// forEach
// companies.forEach(function (company) {
//   console.log(company.name);
// });

// filter
// Get 21 and Older

// let canDrink = [];
// for (let i = 0; i < ages.length; i++) {
//   if (ages[i] >= 21) {
//     canDrink.push(ages[i]);
//   }
// }

// const canDrink = ages.filter(function (age) {
//   if (age >= 21) {
//     return true;
//   }
// });

// const canDrink = ages.filter(age => age >= 21);

// Filter Retail companies
// const retailCompanies = companies.filter(function (company) {
//   if (company.category === 'Retail') {
//     return true;
//   }
// });

const retailCompanies = companies.filter(
  company => company.category === 'Retail'
);

// Get 80s companies
const eightiesCompanies = companies.filter(
  company => company.start < 1990 && company.start >= 1980
);

// Get companies that lasted 10 years or more
const lastedTenYears = companies.filter(
  company => company.end - company.start >= 10
);
console.log(lastedTenYears);
// map
// sort
// reduce

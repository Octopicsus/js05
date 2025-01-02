const company = {
  id: 1,
  name: "Boss",
  employees: [
    {
      id: 2,
      name: "CTO",
      employees: [
        {
          id: 3,
          name: "Architect",
          employees: [
            {},
            {
              employees: [
                {},{},{},{
                  employees: [
                    {},{},{
                      employees: []
                    }
                  ]
                }
              ]
            }
          ], // lots of employees...
        },
        {
          id: 4,
          name: "Architect2",
          employees: [], // lots of employees...
        },
      ],
    },
    {
      id: 5,
      name: "CFO",
      employees: [
        {
          id: 6,
          name: "Accountant1",
          employees: [], // lots of employees...
        },
        {
          id: 7,
          name: "Acountant2",
          employees: [
            {
              id: 8, 
              name: 'Junior Accountant',
            }
          ], // lots of employees...
        },
      ],
    },
  ],
};

function deepClone(obj) {
  const result = {};

  const keys = Object.keys(obj);

  for (let key of keys) {
    if (typeof obj[key] === 'object') {
      if(Array.isArray(obj[key])) {
        result[key] = [];
        for (let element of obj[key]) {
          result[key].push(deepClone(element));
        }
      } else {
        result[key] = deepClone(obj[key]);
      }
    } else {
      result[key] = obj[key];
    }
  }

  return result;
}

const company2 = deepClone(company);


company2.employees[1].employees[0].name = 'Jack Daniels';
company2.employees[1].employees[0].employees.push({id: 100, name: 'Donald', employees: []});

console.log(company2);
console.log(company);
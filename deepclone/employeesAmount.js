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
                    {},{},{},
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


function calculateEmployeesAmount(obj) {
  let employeesAmount = 1;

  if (!obj.employees || obj.employees.length === 0) {
    return employeesAmount;
  }

  for (let employee of obj.employees) {
    employeesAmount += calculateEmployeesAmount(employee);
  }

  return employeesAmount;
}

const total = calculateEmployeesAmount(company);
console.log(total);
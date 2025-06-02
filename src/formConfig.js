export const formConfig = [
  {
    section: 'Section Header 1 - Personal Information',
    fields: [
      {
        name: 'name',
        label: 'Name *',
        type: 'text',
        required: true,
        fullWidth: false,
      },
      {
        name: 'age',
        label: 'Age',
        type: 'number',
        required: true,
        fullWidth: false,
      },
    ],
  },
  {
    section: 'Section Header 2 - Employment Information',
    fields: [
      {
        name: 'company',
        label: 'Company',
        type: 'dropdown',
        options: ['Google', 'Apple', 'Microsoft'],
        fullWidth: true,
        condition: {
          field: 'age',
          operator: '>=',
          value: 18,
        },
      },
      {
        name: 'role',
        label: 'Role',
        type: 'text',
        required: false,
        fullWidth: true,
        condition: {
          field: 'age',
          operator: '>=',
          value: 18,
        },
      },
    ],
  },
];

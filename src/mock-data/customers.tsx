
const mockDataCustomers = [
    {
      id: 1,
      customerId:"2a70d5fc-aad6-4f19-8cbe-b791646697ce",
      firstName: "John",
      lastName: "Snow",
      fullName:"John Snow",
      email: "jonsnow@gmail.com",
      enabled: true,
      phone: [
        {
          phone: "(665)121-5454",
          enabled: true,
        },
        {
          phone: "(665)121-5454",
          enabled: true,
        }
      ],
      profesionals: ["Cersei Lannister", "Anya Stark"],
      nextsAppointments: {
        profesional: "Cersei Lannister",
        date:"12-03-2023T12:34:45"
      },
    },
    {
      id: 2,
      customerId:"2a70d5fc-aad6-4f19-8cbe-b791646697ce",
      firstName: "Cersei",
      email: "cerseilannister@gmail.com",
      lastName: "Lannister",
      fullName:"Cersei Lannister",
      enabled: true,
      phone: [
        {
          phone: "(665)121-5454",
          enabled: true,
        },
        {
          phone: "(665)121-5454",
          enabled: true,
        }
      ],
      profesionals: ["Cersei Lannister"],
      nextsAppointments: {
        profesional: "Cersei Lannister",
        date:"12-03-2023T12:34:45"
      },
    },
    {
      id: 3,
      customerId:"2a70d5fc-aad6-4f19-8cbe-b791646697ce",
      firstName: "Jaime",
      email: "jaimelannister@gmail.com",
      lastName: "Lannister",
      fullName:"Jaime Lannister",
      enabled: true,
      phone: [{
        phone: "(665)121-5454",
        enabled: true,
      }],
      profesionals: ["Cersei Lannister"],
      nextsAppointments: null,
    },
    {
      id: 4,
      customerId:"2a70d5fc-aad6-4f19-8cbe-b791646697ce",
      firstName: "Anya",
      email: "anyastark@gmail.com",
      lastName: "Stark",
      fullName:"Anya Stark",
      phone: [],
      enabled: true,
      profesionals: ["Cersei Lannister", "Anya Stark"],
      nextsAppointments: {
        profesional: "Cersei Lannister",
        date:"12-03-2023T12:34:45"
      },
    }
  ];
  
export default mockDataCustomers;
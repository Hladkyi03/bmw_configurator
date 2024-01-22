export const carsDetails = [
  {
    id: 2,
    name: "BMW M135i xDrive",
    engineTypes: [
      {
        fuelType: "Petrol",
        horsePowers: 226,
        price: 1300000,
        driveUnit: "Front wheel drive",
        transmission: [
          {
            title: "Механічна коробка передач",
            price: 47000,
            fuelConsumption: 9.5,
            emissionsCO2: "151 - 129",
            acceleration: 10.5,
          },

          {
            title: "7-ступенева трансмісія 'Steptronic' з подвійним зчепленням",
            price: 115000,
            fuelConsumption: 9.6,
            emissionsCO2: "154 - 132",
            acceleration: 10.6,
          },
        ],
      },
    ],
  availableColors: [
    {
      category: "Metallic",
      colors: [
        {
          title: "Mineral white metallic",
          id: "POA96",
          imageSrc: "images/colors/white-color.webp",
          price: 0,
        },

        {
          title: "Melbourne red metallic",
          id: "POA75",
          imageSrc: "images/colors/red-color.webp",
          price: 35000,
        },

        {
          title: "Misano blue metallic",
          id: "POC1D",
          imageSrc: "images/colors/blue-color.webp",
          price: 63000,
        }
      ]
    },

    {
      category: "Non-metallic",
      colors: [
        {
          title: "Black 2",
          id: "PO668",
          imageSrc: "images/colors/black-color.webp",
          price: 0,
        },
      ]
    }
  ]
  },
];

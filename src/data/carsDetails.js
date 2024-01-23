/* eslint-disable max-len */
export const carsDetails = [
  {
    id: 1,
    name: "BMW 1 Series",
    engineTypes: [
      {
        title: "BMW 116i",
        fuelType: "Petrol",
        horsePowers: 109,
        price: 1350000,
        driveUnit: "Front wheel drive",
        transmission: [
          {
            title: "Механічна коробка передач",
            price: 32000,
            fuelConsumption: 6.9,
            emissionsCO2: "133 - 109",
            acceleration: 10.5,
          },

          {
            title: "7-ступенева трансмісія 'Steptronic' з подвійним зчепленням",
            price: 85000,
            fuelConsumption: 6.8,
            emissionsCO2: "130 - 108",
            acceleration: 10.5,
          },
        ],
      },

      {
        title: "128ti",
        fuelType: "Petrol",
        horsePowers: 265,
        price: 1657950,
        driveUnit: "Front wheel drive",
        transmission: [
          {
            title: "Спортивна трансмісія 'Steptronic' з пелюстками перемикання передач на кермі",
            price: 0,
            fuelConsumption: 7.4,
            emissionsCO2: "170 - 156",
            acceleration: 6.1,
          },
        ],
      },

      {
        title: "BMW 118i",
        fuelType: "Petrol",
        horsePowers: 136,
        price: 1400000,
        driveUnit: "Front wheel drive",
        transmission: [
          {
            title: "Механічна коробка передач",
            price: 66000,
            fuelConsumption: 6.7,
            emissionsCO2: "150 - 128",
            acceleration: 8.9,
          },

          {
            title: "Спортивна трансмісія 'Steptronic' з пелюстками перемикання передач на кермі",
            price: 159000,
            fuelConsumption: 6.6,
            emissionsCO2: "151 - 110",
            acceleration: 8.8,
          },
        ],
      },

      {
        title: "BMW 118d",
        fuelType: "Diesel",
        horsePowers: 150,
        price: 1500000,
        driveUnit: "Front wheel drive",
        transmission: [
          {
            title: "Механічна коробка передач",
            price: 86000,
            fuelConsumption: 5.3,
            emissionsCO2: "141 - 121",
            acceleration: 8.5,
          },

          {
            title: "Автоматична трансмісія Steptronic",
            price: 187000,
            fuelConsumption: 5.6,
            emissionsCO2: "147 - 126",
            acceleration: 8.4,
          },

          {
            title: "Спортивна трансмісія 'Steptronic' з пелюстками перемикання передач на кермі",
            price: 195000,
            fuelConsumption: 5.6,
            emissionsCO2: "147 - 125",
            acceleration: 8.4,
          },
        ],
      },

      {
        title: "BMW 120d xDrive",
        fuelType: "Diesel",
        horsePowers: 190,
        price: 1800000,
        driveUnit: "Full wheel drive",
        transmission: [
          {
            title: "Автоматична трансмісія Steptronic",
            price: 152000,
            fuelConsumption: 5.9,
            emissionsCO2: "149 - 121",
            acceleration: 7.1,
          },

          {
            title: "Спортивна трансмісія 'Steptronic' з пелюстками перемикання передач на кермі",
            price: 195200,
            fuelConsumption: 6.0,
            emissionsCO2: "148 - 127",
            acceleration: 7.0,
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
    ],
    wheels: [
      {
        title: `Диски Multi-spoke style 488 Bicolour`,
        diameter: 18,
        id: "SO1L2",
        imageSrc: "images/wheels/wheels-so1l2.webp",
        price: 0,
      },

      {
        title: `Диски Multi-spoke style 546 зі спеціальними шинами`,
        diameter: 17,
        id: "SO1L1",
        imageSrc: "images/wheels/wheels-so1l1.webp",
        price: 44000,
      },

      {
        title: `Диски Double-spoke style 549 Bicolour зі спеціальними шинами`,
        diameter: 17,
        id: "SO1US",
        imageSrc: "images/wheels/wheels-so1us.webp",
        price: 87957,
      }
    ]
  },

  {
    id: 2,
    name: "BMW M135i xDrive",
    engineTypes: [
      {
        title: "BMW 116i",
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

      {
        title: "128ti",
        fuelType: "Petrol",
        horsePowers: 265,
        price: 1657950,
        driveUnit: "Front wheel drive",
        transmission: [
          {
            title: "Спортивна трансмісія 'Steptronic' з пелюстками перемикання передач на кермі",
            price: 0,
            fuelConsumption: 7.4,
            emissionsCO2: "170 - 156",
            acceleration: 6.1,
          },
        ],
      },

      {
        title: "BMW 118i",
        fuelType: "Petrol",
        horsePowers: 136,
        price: 1400000,
        driveUnit: "Front wheel drive",
        transmission: [
          {
            title: "Механічна коробка передач",
            price: 66000,
            fuelConsumption: 6.7,
            emissionsCO2: "150 - 128",
            acceleration: 8.9,
          },

          {
            title: "Спортивна трансмісія 'Steptronic' з пелюстками перемикання передач на кермі",
            price: 159000,
            fuelConsumption: 6.6,
            emissionsCO2: "151 - 110",
            acceleration: 8.8,
          },
        ],
      },

      {
        title: "BMW 118d",
        fuelType: "Diesel",
        horsePowers: 150,
        price: 1500000,
        driveUnit: "Front wheel drive",
        transmission: [
          {
            title: "Механічна коробка передач",
            price: 86000,
            fuelConsumption: 5.3,
            emissionsCO2: "141 - 121",
            acceleration: 8.5,
          },

          {
            title: "Автоматична трансмісія Steptronic",
            price: 187000,
            fuelConsumption: 5.6,
            emissionsCO2: "147 - 126",
            acceleration: 8.4,
          },

          {
            title: "Спортивна трансмісія 'Steptronic' з пелюстками перемикання передач на кермі",
            price: 195000,
            fuelConsumption: 5.6,
            emissionsCO2: "147 - 125",
            acceleration: 8.4,
          },
        ],
      },

      {
        title: "BMW 120d xDrive",
        fuelType: "Diesel",
        horsePowers: 190,
        price: 1800000,
        driveUnit: "Full wheel drive",
        transmission: [
          {
            title: "Автоматична трансмісія Steptronic",
            price: 152000,
            fuelConsumption: 5.9,
            emissionsCO2: "149 - 121",
            acceleration: 7.1,
          },

          {
            title: "Спортивна трансмісія 'Steptronic' з пелюстками перемикання передач на кермі",
            price: 195200,
            fuelConsumption: 6.0,
            emissionsCO2: "148 - 127",
            acceleration: 7.0,
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
    ],
    wheels: [
      {
        title: `M легкосплавні диски V-spoke 557 M Bicolour зі спортивними шинами`,
        diameter: 19,
        id: "SO1EY",
        imageSrc: "images/wheels/wheels-so1ey.webp",
        price: 0,
      },

      {
        title: `M Диски V-spoke style 554 M зі спеціальними шинами`,
        diameter: 18,
        id: "SO1Y0",
        imageSrc: "images/wheels/wheels-so1y0.webp",
        price: 44000,
      },

      {
        title: `M легкосплавні диски Double spoke 552 M Bicolour зі спортивними шинами`,
        diameter: 19,
        id: "SO1EX",
        imageSrc: "images/wheels/wheels-so1ex.webp",
        price: 87957,
      }
    ]
  },

  {
    id: 6,
    name: "BMW M235i xDrive Gran Coupe",
    engineTypes: [
      {
        title: "BMW 218i Gran Coupe",
        fuelType: "Petrol",
        horsePowers: 136,
        price: 1350000,
        driveUnit: "Front wheel drive",
        transmission: [
          {
            title: "Механічна коробка передач",
            price: 70000,
            fuelConsumption: 6.6,
            emissionsCO2: "140 - 119",
            acceleration: 9.2,
          },

          {
            title: "7-ступенева трансмісія 'Steptronic' з подвійним зчепленням",
            price: 120000,
            fuelConsumption: 6.5,
            emissionsCO2: "145 - 125",
            acceleration: 9.1,
          },
        ],
      },

      {
        title: "BMW M235i xDrive Gran Coupe",
        fuelType: "Petrol",
        horsePowers: 306,
        price: 1997950,
        driveUnit: "Full wheel drive",
        transmission: [
          {
            title: "Спортивна трансмісія 'Steptronic' з пелюстками перемикання передач на кермі",
            price: 0,
            fuelConsumption: 8.4,
            emissionsCO2: "170 - 156",
            acceleration: 4.9,
          },
        ],
      },

      {
        title: "BMW 218d Gran Coupe",
        fuelType: "Diesel",
        horsePowers: 150,
        price: 1400000,
        driveUnit: "Front wheel drive",
        transmission: [
          {
            title: "Механічна коробка передач",
            price: 67000,
            fuelConsumption: 5.4,
            emissionsCO2: "143 - 122",
            acceleration: 8.6,
          },

          {
            title: "Автоматична трансмісія Steptronic",
            price: 149000,
            fuelConsumption: 5.2,
            emissionsCO2: "140 - 120",
            acceleration: 8.5,
          },

          {
            title: "Спортивна трансмісія 'Steptronic' з пелюстками перемикання передач на кермі",
            price: 189000,
            fuelConsumption: 5.3,
            emissionsCO2: "143 - 115",
            acceleration: 8.4,
          },
        ],
      },

      {
        title: "BMW 220d xDrive Gran Coupe",
        fuelType: "Diesel",
        horsePowers: 190,
        price: 2000000,
        driveUnit: "Full wheel drive",
        transmission: [
          {
            title: "Автоматична трансмісія Steptronic",
            price: 95000,
            fuelConsumption: 6.0,
            emissionsCO2: "158 - 130",
            acceleration: 7.3,
          },

          {
            title: "Спортивна трансмісія 'Steptronic' з пелюстками перемикання передач на кермі",
            price: 116000,
            fuelConsumption: 6.2,
            emissionsCO2: "160 - 133",
            acceleration: 7.3,
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
    ],
    wheels: [
      {
        title: `M легкосплавні диски V-spoke 557 M Bicolour зі спортивними шинами`,
        diameter: 19,
        id: "S01EY",
        imageSrc: "images/wheels/wheels-1.webp",
        price: 0,
      },

      {
        title: `M Диски V-spoke style 554 M зі спеціальними шинами`,
        diameter: 18,
        id: "S01Y0",
        imageSrc: "images/wheels/wheels-2.webp",
        price: 44000,
      },

      {
        title: `M легкосплавні диски Double spoke 552 M Bicolour зі спортивними шинами`,
        diameter: 19,
        id: "S01EX",
        imageSrc: "images/wheels/wheels-3.webp",
        price: 87957,
      }
    ]
  },
];

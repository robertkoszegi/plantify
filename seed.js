require('dotenv').config();
require('./config/database');

const CategoryModel = require('./models/category');
const PlantModel = require('./models/plant');
const UserModel = require('./models/user')

(async function populateDB() {

  await CategoryModel.deleteMany({});
  const categories = await CategoryModel.create([
    {name: 'Palm'}, //0
    {name: 'Succulent'}, //1
    {name: 'Fern'}, //2
    {name: 'Vine'}, //3
    {name: 'Cacti'}, //4
  ]);

  await UserModel.deleteMany({});
  const users = await UserModel.create(
      [
          {
              name: "testuser",
              email: "testuser@email.com",
              password: "serveruser",
          }
      ]
  )

  await PlantModel.deleteMany({});
  const plants = await PlantModel.create([
    {
        name: 'Chinese Fan Palm', 
        category: categories[0], 
        price: 39.99,
        waterFreq: 'Medium',
        sunCond: ['Full Sun'],
        petFriendly: true,
    },
    {
        name: 'Areca Palm', 
        category: categories[0], 
        price: 30.99,
        waterFreq:'Medium',
        sunCond:['Full Sun'],
        petFriendly:true,
    },
    {
        name: 'Majesty Palm', 
        category: categories[0], 
        price: 30.99,
        waterFreq:'Medium',
        sunCond:['Full Sun'],
        petFriendly:true,
    },
    {
        name: 'Parlor Palm', 
        category: categories[0], 
        price: 25.99,
        waterFreq:'Medium',
        sunCond:['Partial Sun'],
        petFriendly:true,
    },
    {
        name: 'Ponytail Palm', 
        category: categories[0], 
        price: 15.99,
        waterFreq:'Medium',
        sunCond:['Full Sun'],
        petFriendly:true,
    },
    {
        name: 'Jade Plant', 
        category: categories[1],
        price: 10.99,
        waterFreq:'Medium',
        sunCond:['Full Sun'],
        petFriendly:false,},
    {
        name: 'Aloe Vera', 
        category: categories[1], 
        price: 17.99,
        waterFreq:'Low',
        sunCond:['Full','Partial Sun'],
        petFriendly:false,
    },
    {
        name: "Horse's Teeth", 
        category: categories[1], 
        price: 20.99,
        waterFreq:'Low',
        sunCond:['Full','Partial Sun'],
        petFriendly:true,
    },
    {
        name: 'Living Stone Plant', 
        category: categories[1], 
        price: 25.99,
        waterFreq:'Low',
        sunCond:['Full Sun'],
        petFriendly:true,
    },
    {
        name: 'Moonstones Plant', 
        category: categories[1], 
        price: 27.99,
        waterFreq:'Low',
        sunCond:['Full', 'Partial Sun'],
        petFriendly:true,
    },
    {
        name: 'Staghorn Fern',
        category: categories[2],
        price: 20.99,
        waterFreq:'High',
        sunCond:['Partial Sun'],
        petFriendly:true,
    },
    {
        name: 'Maidenhair Fern',
        category: categories[2],
        price: 20.99,
        sunCond:['Partial Sun'],
        waterFreq:'Medium',
        petFriendly:true,
    },
    {
        name: "Rabbit's Foot Fern",
        category: categories[2],
        price: 20.99,
        waterFreq:'High',
        sunCond:['Partial Sun'],
        petFriendly:true,
    },
    {
        name: 'Crocodile Fern',
        category: categories[2],
        price: 20.99,
        waterFreq:'High',
        sunCond:['Partial Sun'],
        petFriendly:true,
    },
    {
        name: 'Kangaroo paw Fern',
        category: categories[2],
        price: 20.99,
        waterFreq:'Medium',
        sunCond:['Partial Sun'],
        petFriendly:true,
    },
    {
        name: 'HeartLeaf Philodendron',
        category: categories[3],
        price: 30.99,
        waterFreq:'Low',
        sunCond:['Partial Sun'],
        petFriendly:false,
    },
    {
        name: 'English Ivy',
        category: categories[3],
        price: 30.99,
        waterFreq:'Medium',
        sunCond:['Shade'],
        petFriendly:false,
    },
    {
        name: 'Pothos',
        category: categories[3],
        price: 34.99,
        waterFreq:'Low',
        sunCond:['Shade','Partial Sun'],
        petFriendly:false,
    },
    {
        name: 'Betel Leaf Plant',
        category: categories[3],
        price: 38.99,
        waterFreq:'Medium',
        sunCond:['Shade','Partial Sun'],
        petFriendly:true,
    },
    {
        name: 'Creeping Fig',
        category: categories[3],
        price: 38.99,
        waterFreq:'High',
        sunCond:['Partial Sun'],
        petFriendly:false,
    },
    {
        name: 'Angel Wings Cactus',
        category: categories[4],
        price: 25.99,
        waterFreq:'Low',
        sunCond:['Full Sun'],
        petFriendly:false,
    },
    {
        name: 'Rat Tail Cactus',
        category: categories[4],
        price: 25.99,
        waterFreq:'Low',
        sunCond:['Full Sun'],
        petFriendly:false,
    },
    {
        name: 'African Milk Tree',
        category: categories[4],
        price: 39.99,
        waterFreq:'Low',
        sunCond:['Full Sun'],
        petFriendly:false,
    },
    {
        name: 'Bishops Cap',
        category: categories[4],
        price: 25.99,
        waterFreq:'Low',
        sunCond:['Full Sun'],
        petFriendly:true,
    },
    
  ]);

  console.log(plants)

  process.exit();

})();
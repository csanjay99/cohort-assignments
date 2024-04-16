/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
    id: 1,
    timestamp: 1656076800000,
    price: 10,
    category: 'Food',
    itemName: 'Pizza',
  }
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {

  const categoryList = [];
  const catOb = {};
  for (let index = 0; index < transactions.length; index++) {
    const element = transactions[index];
    let price = element['price'];
    let category = element['category'];

    if (category in catOb) {
      catOb[category] += price;
    } else {
      catOb[category] = price;
    }
  };

  for (const key in catOb) {
    categoryList.push({
      category: key,
      totalSpent: catOb[key]
    })
  }
  return categoryList
}

module.exports = calculateTotalSpentByCategory;
// console.log(calculateTotalSpentByCategory([
//   {
//     id: 1,
//     timestamp: 1656076800000,
//     price: 10,
//     category: 'Food',
//     itemName: 'Pizza',
//   },
//   {
//     id: 1,
//     timestamp: 1656076800000,
//     price: 30,
//     category: 'Food',
//     itemName: 'Pizza',
//   },
//   {
//     id: 1,
//     timestamp: 1656076800000,
//     price: 5,
//     category: 'Confectionary',
//     itemName: 'mandm',
//   },
//   {
//     id: 1,
//     timestamp: 1656076800000,
//     price: 10,
//     category: 'Bevrage',
//     itemName: 'Milk',
//   },
// ]));

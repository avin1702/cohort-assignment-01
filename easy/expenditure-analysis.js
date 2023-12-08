/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  categoryArr = []
  let lengthOfTransactions = transactions.length
  console.log()
  let ansObj = {}
  let tempCategory =''
  let tempPrice = ''
  let tempAnsObjPrice = ''
  for(i=0;i<lengthOfTransactions;i++)
   {
    let temp_item = transactions[i]
    //  console.log("logging item",temp_item)
    if(temp_item.hasOwnProperty('category'))
    {
      tempCategory = temp_item.category
      tempPrice = temp_item.price
      // tempCategoryArr = {'category':tempCategory,"price":tempPrice}
      // categoryArr.push(tempCategoryArr)
    }
    
    if(ansObj[tempCategory]===NaN || ansObj[tempCategory]===undefined)
{   
    tempAnsObjPrice = tempPrice
    ansObj[tempCategory] = tempAnsObjPrice
    // console.log(tempAnsObjPrice)
    // console.log(ansObj[tempCategory])
  }
  else
  {
    // console.log(ansObj[tempCategory],tempPrice)
    ansObj[tempCategory] = ansObj[tempCategory] + tempPrice
  }
   }
// categoryArr.push(ansObj)

// console.log("logging categoryArr",categoryArr.length)
// console.log(ansObj.length)

console.log(ansObj)
let arrayObject = []
for (const property in ansObj)
{
  tempArrayObject={
    'category': property,
    'totalSpent': ansObj[property]

  }
  categoryArr.push(tempArrayObject)
}
console.log(categoryArr)

return categoryArr;

}

  const transactions = [
    {
      id: 1,
      timestamp: 1656076800000,
      price: 10,
      category: 'Food',
      itemName: 'Pizza',
    },
    {
      id: 2,
      timestamp: 1656259600000,
      price: 20,
      category: 'Food',
      itemName: 'Burger',
    },
    {
      id: 3,
      timestamp: 1656019200000,
      price: 15,
      category: 'Clothing',
      itemName: 'T-Shirt',
    },
    {
      id: 4,
      timestamp: 1656364800000,
      price: 30,
      category: 'Electronics',
      itemName: 'Headphones',
    },
    {
      id: 5,
      timestamp: 1656105600000,
      price: 25,
      category: 'Clothing',
      itemName: 'Jeans',
    },
  ];



calculateTotalSpentByCategory(transactions)
module.exports = calculateTotalSpentByCategory;

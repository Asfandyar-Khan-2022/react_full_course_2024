type Pizza = {
  id: number
  name: string
  price: number
}
let nextPizzaId = 1;

const menu: Pizza[] = [
  {id: nextPizzaId++, name: "Margherita", price: 8},
  {id: nextPizzaId++, name: "Pepperoni", price: 10},
  {id: nextPizzaId++, name: "Hawaiian", price: 5},
  {id: nextPizzaId++, name: 'Veggie', price: 9},
]


type Order = {
  id: number
  pizza: Pizza
  status: 'ordered' | 'completed'
}

let cashInRegister= 100;
let nextOrderId = 1;
let orderQueue: Order[] = [];


function addNewPizza(pizzaObj: Omit<Pizza, 'id'>): Pizza {
  const newPizza: Pizza = {
    id: nextPizzaId++,
    ...pizzaObj
  }
  menu.push(newPizza);
  return newPizza
}

function placeOrder(pizzaName: string): Order | undefined {
  const selectedPizza = menu.find(pizzaObj => pizzaObj.name === pizzaName)
  if (!selectedPizza) {
    console.error(`${pizzaName} does not exist in the menu`)
    return 
  }
  cashInRegister += selectedPizza.price
  const newOrder: Order = { id: nextOrderId++, pizza: selectedPizza, status: 'ordered'}
  orderQueue.push(newOrder)
  return newOrder
}

function completeOrder(orderId: number): Order | Error {
  const order = orderQueue.find(order => order.id === orderId)
  if (!order) {
    console.error(`${order} was not found in the orderQueue`)
    return Error()
  }
  order.status = 'completed'
  return order
}


export function getPizzaDetail(identifier: string | number): Pizza | undefined {
  if (typeof identifier === 'string') {
    return menu.find(pizza => pizza.name.toLowerCase() === identifier.toLowerCase())
  } 
  else if (typeof identifier === 'number') {
    return menu.find(order => order.id === identifier)
  }
  else {
    throw new TypeError('Parameter `identifier` must be either string or a number')
  }
}

addNewPizza({ name: 'Chicken Bacon Ranch', price: 12 })
addNewPizza({ name: 'BBQ Chicken', price: 12 })
addNewPizza({ name: 'Spicy Sausage', price: 12 })

placeOrder('Chicken Bacon Ranch')
completeOrder(1)

console.log('Menu:', menu)
console.log('Cash in register:', cashInRegister)
console.log('Order queue:', orderQueue)


// type User = {
//   id: number
//   username: string
//   role: 'member' | 'contributor' | 'admin'
// }

// type UpdatedUser = Partial<User>

// let nextUserId: number = 1

// const users: User[] = [
//   { id: nextUserId, username: 'john_doe', role: 'member' },
//   { id: nextUserId, username: 'jane_smith', role: 'contributor' },
// ]

// function updateUser(id: number, updates: UpdatedUser): void {
//   const person = users.find(user => user.id == id)
//   if (!person) {
//     console.error('something went wrong')
//     return
//   }
//   Object.assign(person, updates)
// }

// function addNewUser(newUser: Omit<User, 'id'>): User {
//   const user: User = {
//     id: nextUserId++,
//     ...newUser
//   }
//   users.push(user)
//   return user
// }

// addNewUser({ username: 'joe_schmoe', role: 'member' })

// console.log(users)
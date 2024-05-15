import inquirer from 'inquirer'

let isRunning: boolean = true
const userDataBase: any = [
  {
    id: 123,
    name: 'John',
    balance: 20000,
    pin: 123
  },
  {
    id: 456,
    name: 'Jane',
    balance: 40000,
    pin: 456
  }
]
while(isRunning) {
  const answer = await inquirer.prompt([
    {
      type: 'number',
      name: 'id',
      message: 'Enter your id',
    },
    {
      type: 'number',
      name: 'pin',
      message: 'Enter your pin',
    }
  ])

  // verify id and pin
  let user = userDataBase.find((x: any) => {console.log('find: ', x); return x.id === answer.id && x.pin === answer.pin})
  console.log(user)
  
}
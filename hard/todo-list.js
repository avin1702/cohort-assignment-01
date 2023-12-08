/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/


class Todo {
  constructor(){
  this.todoList = []
  }

  add(todo){

    this.todoList.push(todo)
    return this.todoList
  }

  remove(indexOfTodo){
    if(indexOfTodo>this.todoList.length - 1){
      // throw Error("Invalid operation")
    }
    else{
      this.todoList.splice(indexOfTodo,1)
      console.log(this.todoList)
    }

    return this.todoList
   }

  update(index, updatedTodo){
    if(index>this.todoList.length - 1)  {
      
  }else if(index !== -1){
    this.todoList[index] = updatedTodo;
  }


  }

  getAll()
  {
    return this.todoList
  }

  get(indexOfTodo){
   if(indexOfTodo>this.todoList.length - 1){
      return null
   }
    else if (indexOfTodo !== -1) {
      return this.todoList[indexOfTodo]
  }
    
  }

  clear(){

    this.todoList = []
    return this.todoList
  }
}

// let todo = new Todo()
// todo.add('test')

module.exports = Todo;



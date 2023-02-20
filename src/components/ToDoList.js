import React from "react";

import ToDoAdd from "./ToDoAdd";







function ToDoList() {
  const [ToDos, setToDos] = React.useState([]);
  
  
  const buttonRef =React.useRef(null);
 
  

  function addToDOList(item) {
   

    const newTodo = [item, ...ToDos];
    setToDos(newTodo)

   

  }
  function Linethrough(event){
    event.currentTarget.classList.toggle('line-trough');


  }
  function Clear(event){
    const id =event.target.id;
    const erasedToDo = [...ToDos];
    const index = erasedToDo.findIndex(item=>item.id==id)
    erasedToDo.pop(index);
    setToDos(erasedToDo);
    


  }

  return (
    <div className="to-do-list">
       <h1 className="title">What would you  <span className="titleBottom">like to do today?</span></h1>
      <ToDoAdd onClick={addToDOList} />
       <p>You have got {ToDos.length} things in the list. </p>
       {ToDos.map( (ToDo) => {
        return(
          <div  className="list" id={ToDo.id}>

           
          
          <li  onClick={Linethrough} className=  "list-item" key={ToDo.id}> 
          
          {ToDo.Text}
          </li>
          <button  className="funcional-buttons" onClick={Clear} ref={buttonRef} id={ToDo.id}>Delete</button> 
          
          </div>
          )
        
        }
        )}
         
    </div>
  );
}

export default ToDoList;
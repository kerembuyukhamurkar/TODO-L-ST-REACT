import React from "react";


function ToDoAdd(props) {
  const [Input, setInput] = React.useState("");
  const ref=React.useRef(null);
 

  function handleChange(event) {
    setInput(event.target.value);

  }
  function handleClick(event) {
    

  
    

       props.onClick({
        id:Math.floor(Math.random()*100000),
        Text:Input,
        ismouseover:false
      })
      
    ref.current.value="";
   
     
  }




  return (
    <div className="to-do-add">

      <input ref={ref}onChange={handleChange} className="to-do-input" type="text" placeholder="What would you like to do today?" name={Input} />
      <button className="add-button"onClick={handleClick}>Add</button>
    </div>
  );
}

export default ToDoAdd;
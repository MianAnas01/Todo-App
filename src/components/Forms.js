import React from "react";

function Forms({setInputText, todos, setTodos, inputText, setStatus}) {

function inputTextHandler(e) {
// console.log(e.target.value);
setInputText(e.target.value)
}; 

function submitTodoHandler(e) {
    e.preventDefault();
    setTodos([
        ...todos,
        {text: inputText, completed: false, id: Math.random() *1000},
    ]);
setInputText("");
};

function statusHandler(e)  {
   setStatus(e.target.value);
};

return (
<form>

<input 
value = {inputText}
onChange={inputTextHandler} type="text" className="todo-input" />

<button onClick={submitTodoHandler}  className="todo-button" type="submit">
    <i className="fas fa-plus-square"></i>
    </button>

<div className="select">

    <select onChange={statusHandler}  name="todos" className="filter-todo">

<option value="all">All</option>
<option value="completed">completed</option>
<option value="uncompleted">uncompleted</option>
    
    </select>

</div>
</form>

);

};

export default Forms;

import { useState } from "react";
function Todolist(){
    const [tasks,st]=useState(["eatbreakfast","Takeshower","gotoschool"]);
    const [newt,nst]=useState("");
    function hic(event){
        nst(event.target.value);
    }
    function addt(){

    }
    function delt(index){

    }
    function mtu(index){

    }
    function mdt(index){

    }
return(<div className="to-do-list">
    <h1>To-Do-List</h1>
    <div>
        <input type="text" 
        placeholder="Enter a task"
        value={newt}
        onChange={hic}/>
        <button className="button-add" onClick={addt}>
        Add
        </button>

    </div>
    <ol>
        {tasks.map((t,index)=>
        <li key={index}>
            <span className="text">{t}</span>
            <button className="delete-btn" onClick={()=>delt(index)}>
                delete
            </button>
         
            <button className="move-btn" onClick={()=>mtu(index)}>
                👆
            </button>
         
            <button className="delete-btn" onClick={()=>mdt(index)}>
                👇
            </button>

        </li>)}
    </ol>
</div>
);
}
export  default Todolist
import { useState } from "react";
function Todolist(){
    const [tasks,st]=useState(["Eat breakfast","Take shower","Goto school"]);
    const [newt,nst]=useState("");
    function hic(event){
        nst(event.target.value);
    }
    function addt(){
        if(newt.trim()!=" "){
        st(t=>[...t,newt]);
        nst("");
        }
    }
    function delt(index){
        const updatet=tasks.filter((_,i)=>i!==index);
        st(updatet);
    }
    function mtu(index){
        const updatet=[...tasks];
        if(index>0){
        [updatet[index],updatet[index-1]]=[updatet[index-1],updatet[index]]
        st(updatet);
        }
    }
    function mdt(index){
         const updatet=[...tasks];
        if(index<tasks.length-1){
        [updatet[index],updatet[index+1]]=[updatet[index+1],updatet[index]]
        st(updatet);
        }

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
         
            <button className="moveu-btn" onClick={()=>mtu(index)}>
                👆
            </button>
         
            <button className="moveu-btn" onClick={()=>mdt(index)}>
                👇
            </button>

        </li>)}
    </ol>
</div>
);
}
export  default Todolist
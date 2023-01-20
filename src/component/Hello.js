import World from "./Word";
import styles from"./Hello.module.css"
import { useState } from "react";
import UserName from "./UserName";

function callName(){
    console.log("Mike");
}

function callAge(age){
    console.log(age);
}

function showText(e){
    console.log(e.target.value); 
}

const Hello = function(props){
    // let name = "Mike"
    //useState setNameが呼び出されてnameを変更
    //Mikeは初期値
    //stateは別々に管理される
    const [name,setName] = useState('Mike');
    
    function changeName(){
        const newName = name === "Mike" ? "Jane" : "Mike"
        // document.getElementById("name").innerText=name;
        setName(newName);
    }
    
    return (
    <div>
        <p>Hello</p>
        <h2>{name}({props.age})</h2>
        <UserName name={name}></UserName>
        <button onClick={changeName}>changeName</button>
        {/* <World></World>
        <button onClick={callName}>Show name</button>
        <button onClick={()=>callAge(30)}>Show age</button>
        <input type="text" onChange={showText}></input> */}
        {/* <div className={styles.Box}>hello</div> */}
    </div>
    )
};


// const Hello = () =>{
//     <p>Hello</p>
// };

export default Hello;

// export default function Hello(){
//     <p>Hello</p>
// };
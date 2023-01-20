import { useState } from "react";

export default function Word({word : w}){
    const [word,setWord] = useState(w);
    const [isSHow,setIsShow] = useState(false);
    const [isDone,setIsDone] = useState(word.isDone);
    function toggleSHow(){
        setIsShow(!isSHow);
    }
    function toggleDone(){
        fetch(`http://localhost:3001/words/${word.id}`,{
            method : 'PUT',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({
                ...word,
                isDone : !isDone
            })
        })
        .then(res=>{
            if(res.ok){
                setIsDone(!isDone);
            }else{
                console.log(123);
            }
        })
    }

    function del(){
        if(window.confirm('削除うしますか？')){
            fetch(`http://localhost:3001/words/${word.id}`,{
            method : 'DELETE'
        })
        .then(res=>{
            if(res.ok){
                setWord({id:0})
            }
        })
        }
    }

    if(word.id===0){
        return null;
    }
    return (
        <tr className={isDone ? 'off' : ''}>
            <td>
                <input type="checkbox"  checked={isDone} onChange={toggleDone}/>
            </td>
            <td>
                {word.eng} 
            </td>
            <td>
                {isSHow && word.kor}
            </td>
            <td>
                <button onClick={toggleSHow}>
                    解釈 {isSHow ? "隠し" : "見る" }
                </button>
                <button className="btn_del" onClick={del}>削除</button>
            </td>
        </tr>
    );
}
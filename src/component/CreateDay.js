import { useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";

export default function CreateDay(){
    const days = useFetch('http://localhost:3001/days');
    const navigate = useNavigate();

    function addDay(e){
        //ボタンを押下しても更新なし
        e.preventDefault();
        fetch(`http://localhost:3001/days/`,{
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({
                day : days.length+1
            })
        })
        .then(res=>{
            if(res.ok){
                alert("生成が完了いたしました。");
                navigate(`/`);
            }else{
                alert("生成が失敗いたしました。");
            }
        })
    }
    return (
        <div>
            <h3>現在 : {days.length}</h3>
            <button onClick={addDay}>Day 追加</button>
        </div>
    );
}
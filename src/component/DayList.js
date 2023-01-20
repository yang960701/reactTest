import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
export default function DayList(){
    const days = useFetch('http://localhost:3001/days');

    if(days.length === 0){
        return <span>loading...</span>
    }
    // const[days, setDays] = useState([]);
    // const[count, setCount] = useState(0);

    // function onClick(){
    //     setCount(count +1);
    // }
    //ページを描いた後に呼ぶ
    //countが変更された時のみ呼ぶ[COUNT]
    //[]一度だけ呼ぶ
    // useEffect(()=>{
    //     //api非同期通信
    //     fetch('http://localhost:3001/days')
    //     .then (res=>{
    //         return res.json()
    //     })
    //     .then(data=>{
    //         setDays(data)
    //     });
    // },[]);
    return (
        <div>
        <ul className="list_day">
            {days.map(day=>(
                <li key={day.id}>
                    <Link to={`/day/${day.day}`}>
                        Day {day.day}
                    </Link>
                </li>
            ))} 
        </ul>
        </div>  
    );
}
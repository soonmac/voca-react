
import { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import useFetch from "../hooks/useFetch";

export default function DayList() {
    const days = useFetch('http://localhost:3001/days')

    if(days.length ===0) {
        return <span>Loading. . . </span>
    }
    // const [days, setDays] = useState([]);

    // useEffect(()=>{
    //     fetch('http://localhost:3001/days')
    //     .then(res => {
    //         return res.json(); //json을 반환
    //     })
    //     .then(data => {
    //         setDays(data);
    //     })
    // },[])
    //어떤 상태값이 바뀌었을 때 돔이 다 렌더링된 후 함수를 렌더링함
    //첫번째 인자: 함수
    //두번째 인자: 배열 (의존성 배열)
    //두번째 인자 즉 count만 바뀌었을 때만 첫번째 인자인 함수가 실행됨 
    //의존성 배열에 빈 배열을 입력하면 최초 한번만 함수가 실행됨

    return (
    <>
    
    <ul className="list_day">
        {days.map(day => (
            <li key={day.id}>
                <Link to={`/day/${day.day}`}>Day {day.day}</Link>
            </li>
        ))}
    </ul>
    </>
    )
}
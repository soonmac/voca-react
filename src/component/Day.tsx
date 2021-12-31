import {Link} from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Word from './Word.tsx';
import DayList from "./DayList";

export default function Day() {
    const days = useFetch('http://localhost:3001/days')
    let day = Number(useParams().day);
    day %= days.length;
    if(day==0) {
        day = days.length;
    }
    const words = useFetch(`http://localhost:3001/words?day=${day}`)
    return <>
        <h2>Day {day}</h2>
        {words.length ===0 && (<span>Loading. . . </span>)}
    <table>
        <tbody>
            {words.map(word=>(
                <Word word={word} key={word.id}/>

            ))}
        </tbody>
    </table>
    <button>
        <Link to={`/day/${day-1}`}>이전</Link></button>
    <button style={
        {
            marginLeft: "30px"
        }
    }><Link to={`/day/${day + 1}`}>다음</Link></button>
    
    </>
}
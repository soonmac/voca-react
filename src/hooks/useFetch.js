import { useEffect, useState } from "react";

export default function useFetch(url){
    const [data, setData] = useState([]);
    useEffect(()=>{
        fetch(url)
        .then(res => {
            return res.json(); //json을 반환
        })
        .then(data => {
            setData(data);
        })
    },[url])
    //url의 주소가 업데이트되면 함수발동
    return data;
}
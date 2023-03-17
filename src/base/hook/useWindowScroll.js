import { useEffect, useState } from "react";

export function useWindowScroll(){
    const [y,gety] = useState(0)

    useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            const h = document.documentElement.scrollTop
            console.log(h);
            gety(h)
        })
    })
    return y
}
import { useEffect, useState } from "react";
import Button from "../Button/Button";

function ScrollGlobal() {
    const [showGototop,setGoToTop] = useState(false)

    useEffect(()=>{
        const handleScroll= ()=>{
            if(window.scrollY >= 200){
                setGoToTop(true)
            }else{
                setGoToTop(false)
            }
        }
        window.addEventListener('scroll',handleScroll);
        return () =>{
            window.removeEventListener('scroll',handleScroll);
        }
        
    },[])
    const goToTop = () => {
        window.scrollTo({
        top: 0,
        behavior: 'smooth',
        });
    };
    return ( 
        <div> 
            {showGototop &&(<Button onClick={goToTop} rounded style={{position:'fixed',right: 20 , bottom:20}}>Go to Top </Button>)}
        </div>
    )
}


export default ScrollGlobal;
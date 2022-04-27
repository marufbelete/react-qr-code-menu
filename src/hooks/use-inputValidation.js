import { useEffect,useState,useRef } from "react";

export default function useInputValidation(validateValue){
    const [isInputValid,setIsInputValid]=useState(false);
    const [isInputTouched,setIsInputTouched]=useState(false);
    const [input,setInput]=useState('');
    useEffect(()=>{
        !isInputTouched||input?setIsInputValid(true):setIsInputValid(false);
    },[isInputTouched,input])
    
    const ResetHandler=()=>{
        console.log(input)
        setInput('')
        setIsInputTouched(false)
    }
   
    const HandleInputState=(event)=>{
        setInput(event.target.value)
        if(!event.target.value)
        {
            setIsInputValid(false)
        }
        else{
            setIsInputValid(true)
        }
    }
    return{
        isInputValid,
        HandleInputState,
        input,
        setIsInputTouched,
        setIsInputValid
    };
}
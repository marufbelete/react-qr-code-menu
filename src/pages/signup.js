
import { InputFiled,LoginContainer,InputContainer, MainLog, ButtonContainer, Row, Title, Signup } from "../styled/form.styled"
import useInputValidation from "../hooks/use-inputValidation"
import {Link} from 'react-router-dom'
import {signupActions} from "../store/signup-slice";
import { useHistory } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { useEffect } from "react";
import {registerUser} from '../store/authhttp'
let isInitial=true
export default function SignUp(){
const dispatch=useDispatch()
const state=useSelector(state=>state.signup)
const history=useHistory()
useEffect(()=>{
if(isInitial)
{
    isInitial=false
    return;
}
if(state.user.isSubmited)
{
console.log(state.user)
dispatch(signupActions.signup({IsSubmited:false}))
dispatch(registerUser(state.user))
    }
if(state.status==='success')
{
    history.push('/login')
    dispatch(signupActions.status({status:null}))
}
},[state])

const {HandleInputState:HandleNameState,
    isInputValid:isNameValid,
    input:NameValue,
    setIsInputValid:setNameValid,
    setIsInputTouched:setNameTouched}=useInputValidation((value)=>value.trim!=='')
const {HandleInputState:HandleEmailState,
    isInputValid:isEmailValid,
    input:EmailValue,
    setIsInputValid:setEmailValid,
    setIsInputTouched:setEmailTouched}=useInputValidation((value)=>value.trim!=='')
const {HandleInputState:HandlePasswordState,
    isInputValid:isPasswordValid,
    input:PasswordValue,
    setIsInputValid:setPasswordValid,
    setIsInputTouched:setPasswordTouched}=useInputValidation((value)=>value.trim!=='')
const {HandleInputState:HandleConfirmedPasswordState,
    isInputValid:isConfirmedPasswordValid,
    input:ConfirmedPasswordValue,
    setIsInputValid:setConfirmPasswordValid,
    setIsInputTouched:setConfirmPasswordTouched}=useInputValidation((value)=>value.trim!=='')
    const SubmitHandler=(event)=>{
        console.log("signup clicked")
       dispatch(signupActions.status("pending"))
       console.log(state.status)
       event.preventDefault()
       setEmailTouched(true)
       setNameTouched(true)
       setConfirmPasswordTouched(true)
       setPasswordTouched(true)
        !NameValue?setNameValid(false):setNameValid(true)
        !EmailValue?setEmailValid(false):setEmailValid(true)
        !ConfirmedPasswordValue?setConfirmPasswordValid(false):setConfirmPasswordValid(true)
        !PasswordValue?setPasswordValid(false):setPasswordValid(true)
        console.log(PasswordValue,EmailValue,NameValue,ConfirmedPasswordValue)
        if(PasswordValue&&EmailValue&&NameValue&&ConfirmedPasswordValue)dispatch(signupActions.signup({PasswordValue,EmailValue,NameValue,ConfirmedPasswordValue,IsSubmited:true}))
       }
    
return(
    <>
    <MainLog>
    <LoginContainer>
        <Title>Welcom To Our Menu Page</Title>
        <Title>Sign-up</Title>
        <Row>
        </Row>
        <InputContainer>
        <InputFiled 
        onBlur={HandleNameState}
        onChange={HandleNameState}
        nameValid={isNameValid}
        type="text"
        value={NameValue}
        placeholder="Full Name *"/>
        </InputContainer>
        <InputContainer>
        <InputFiled 
        onBlur={HandleEmailState}
        onChange={HandleEmailState}
        emailValid={isEmailValid}
        value={EmailValue}
        type="email"
        placeholder="Email *"/>
        </InputContainer>
        <InputContainer>
        <InputFiled 
        onBlur={HandlePasswordState}
        onChange={HandlePasswordState}
        passwordValid={isPasswordValid}
        value={PasswordValue}
        type="password"
        placeholder="Password *"/>
        </InputContainer>
        <InputContainer>
        <InputFiled 
        onBlur={HandleConfirmedPasswordState}
        onChange={HandleConfirmedPasswordState}
        confirmPasswordValid={isConfirmedPasswordValid}
        value={ConfirmedPasswordValue}
        type="password"
        placeholder="Confirm Password *"/>
        </InputContainer>
        <Signup><Link to="/login">Log-in</Link></Signup>
        <ButtonContainer onClick={SubmitHandler} login>
            Sign-up
        </ButtonContainer>
      
    </LoginContainer>
    </MainLog>

    </>
)

}

import { InputFiled,LoginContainer,InputContainer, MainLog, ButtonContainer, Row, Title, Signup } from "../styled/form.styled"
import useInputValidation from "../hooks/use-inputValidation"
import {Link,useHistory,useLocation,useRouteMatch} from 'react-router-dom'
import { useSelector,useDispatch } from "react-redux";
import {loginActions} from "../store/login-slice";
import { useEffect } from "react";
import { loginUser } from "../store/authhttp";
import {useCookies} from 'react-cookie';
export default function Login(){
    const [cookies,setCookie,removeCookie]=useCookies(['token']);
    console.log(cookies)
    // const reduxState=useSelector(state=>state.key);//for multiple reducer slice
    const dispatch=useDispatch()
    const state=useSelector(state=>state.login)
    const history=useHistory();
  
    let isInitial=false
    useEffect(()=>{
        if(isInitial)
        {
            isInitial=false
            return;
        }
        if(state.user.isSubmited)
        {
        dispatch(loginActions.login({IsSubmited:false}))
        dispatch(loginUser(state.user))
        }
        if(state.isAuthenticated)
        {
            history.push('/menu')
        }
        },[state])

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
    const SubmitHandler=(event)=>{
       event.preventDefault()
       setEmailTouched(true)
       setPasswordTouched(true)
        !EmailValue?setEmailValid(false):setEmailValid(true)
        !PasswordValue?setPasswordValid(false):setPasswordValid(true)
        if(PasswordValue&&EmailValue){
            dispatch(loginActions.login({PasswordValue,EmailValue,IsSubmited:true}))
            dispatch(loginActions.status("pending"))
    }

    }

return(
    <>
    <MainLog>
    <LoginContainer>
        <Title>Welcom To Our Menu Page</Title>
        <Title>Log-in</Title>
        <Row>
    <ButtonContainer>
             Google
        </ButtonContainer>
        <ButtonContainer>
             Facebook
        </ButtonContainer>
        </Row>
        <InputContainer>
        <InputFiled 
        onBlur={HandleEmailState}
        onChange={HandleEmailState}
        emailValid={isEmailValid}
        type="email"
        value={EmailValue}
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
        <Signup><Link to="/signup">Sign-up</Link></Signup>
        {state.status!=='pending'? <ButtonContainer onClick={SubmitHandler} login>
             Log-in
        </ButtonContainer>:<ButtonContainer onClick={SubmitHandler} login>
             Loding...
        </ButtonContainer>}
      
      
    </LoginContainer>
    </MainLog>

    </>
)

}
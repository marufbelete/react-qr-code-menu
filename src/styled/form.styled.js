import styled from "styled-components";

export const MainLog=styled.div`
  display: flex;
  justify-content:center;
  align-items:center;
  width:100%;
  height:100vh;
  background-image: linear-gradient(to right top, #b99ead, #ba9db6, #b79dc1, #af9fcd, #a2a2d9, #92a7df, #80ade3, #6cb2e4, #61b8dd, #60bcd3, #69c0c8, #77c2bd);
`
export const LoginContainer=styled.form`
  display:flex ;
  flex-direction:column;
  font-size: 30px;
  text-align: center;
  justify-content:center;
  align-items:center;
  width:100% ;
`
export const Title=styled.div`
font-size:32px ;
color:#2a23237a ;
margin-bottom:10px ;
@media(max-width:590px)
  {
    flex-direction :column ;
  }
  @media(max-width:480px)
  {
    font-size:23px ;
  }
`
export const Row=styled.div`
display:flex ;
margin-bottom:15px ;
@media(max-width:590px)
  {
    flex-direction :column ;
  }
`
export const Column=styled.div`
display:flex ;
flex-direction:column ;
`
export const InputContainer=styled.div`
  flex:1;
  width:30% ;
  margin-top:18px ;
  @media(max-width:1200px)
  {
    width:35% ; 
  }
  @media(max-width:1000px)
  {
    width:40% ; 
  }
  @media(max-width:950px)
  {
    width:45% ; 
  }
  @media(max-width:830px)
  {
    width:48% ; 
  }
  @media(max-width:780px)
  {
    width:52% ; 
  }
  @media(max-width:710px)
  {
    width:55% ; 
  }
  @media(max-width:660px)
  {
    width:58% ; 
  }
  @media(max-width:620px)
  {
    width:62% ; 
  }
  @media(max-width:590px)
  {
    width:64% ; 
  }
  @media(max-width:480px)
  {
    width:70% ; 
  }
`
export const ButtonContainer=styled.div`
  width:150px;
  margin:15px 10px ;
  padding:8px 10px ;
  border:solid 1px blue ;
  background-color:white ;
  transition-property:transform,background-color ;
  transition-duration:400ms ;
  border-radius:15px ;
  margin-top:${(props)=>props.login?"23px":"15px"};
  &:hover{
  background-color:blue;
  transform:scale(1.04) ;
  color:white ;
  cursor:pointer ;
  }
  @media(max-width:590px)
  {
    margin:4px 0px;
    margin-top:${(props)=>props.login?"30px":"15px"};
  }
  @media(max-width:480px)
  {
    font-size:20px ;
  }
`
export const ErroMessage=styled.div`
font-size:16px ;
color:red ;
position:absolute ;
top:275px;
`
export const InputFiled=styled.input`
width:100%;
height:50px;
font-size:22px ;
border-radius:25px ;
outline:none ;
border:solid 0.3px #0000ff9c ;
text-align:center ;
border-color:${(props)=>props.confirmPasswordValid||props.nameValid||props.emailValid||props.passwordValid?"#0000ff9c ":"red"} ;
@media(max-width:480px)
  {
    font-size:20px ;
  }
`
export const Signup=styled.div`
margin-left:20% ;
a{
    color:white ;
    font-size:19px ;
    text-decoration:none ;
}
a:hover{
    color:blue ;
}

`
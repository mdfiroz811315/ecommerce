import styled from "styled-components";
import { mobile } from "../responsive";
import { useState } from "react";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Register = () => {
 
  const [username, setUserName ] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPass, setConfirmPass] = useState("")

  const registerBody = {
    "username": `${username}`,
    "email": `${email}`,
    "password": `${password}`
  }

  const resgisterUrl = 'http://localhost:5000/api/auth/register'

   async function handleSubmit(event){

    event.preventDefault()

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(registerBody)
  };

    if(password === confirmPass){
      
      const response = await fetch(resgisterUrl, requestOptions)
      
      const data = await response.json()

      console.log(data)


    }
    else{
      console.log("ENTER SAME PASSWORD")
    }

  
  }



  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form onSubmit={handleSubmit}>
          <Input placeholder="username" value={username} onChange={(e) => setUserName(e.target.value)}/>
          <Input placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
          <Input placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
          <Input placeholder="confirm password" value={confirmPass} onChange={(e) => setConfirmPass(e.target.value)}/>
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button type="submit">CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;

import React, { useState } from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

export default function Header() {
const  [openmenu,setopenmenu] = useState(false);

  return (
    <Container>
      <Logo>
      <a >      
        <img src="/images/logo.svg" alt="" />
      </a>
      </Logo>
      <Menu>
          <a href="#">Model x</a>
          <a href="#">Model 3 </a>
          <a href="#">Model y</a>
          <a href="#">Model s</a>

      </Menu>
      
      <Rightmenu>
        <a href="">SHOP</a>
        <a href="">TESLA ACCCOUNT</a>

      </Rightmenu>
      <Custommenu onClick={()=>setopenmenu(true)}>
        <a href="#">
          <MenuIcon />
        </a>
      </Custommenu>
    <Burgermenu show ={openmenu}>
      <BU>
      < CloseIcon onClick={()=> setopenmenu(false)} /> 
      </BU>
    
     
    <li><a href="">EXIXTING INVENTORY</a></li>
    <li><a href="">USED INVENTORY</a></li>
    <li><a href="">TRADE-In</a> </li>
    <li><a href="">CYBERCARK</a></li>
    <li><a href="">ROADSTER</a></li>
    <li><a href="#">Model y</a></li>
    <li><a href="#">Model s</a></li>

      
    



    </Burgermenu>
  
      
    </Container>
  )
}
const Burgermenu = styled.div`
 width:300px;
 height:100vh;
 position:fixed;
 top:0;
 right:0;
 background-color:white;
 z-index:100;
 li{
  text-decoration:none;
  list-style:none;
  padding:15px 20px;
  border-bottom:1px solid black;
 }
 font-weight:600;
 text-transform:uppercase;
 padding: 0 10px;
 transform: ${props => props.show ? 'translateX(0%)' : 'translateX(100%)'};
 transition: transform 0.4s ease-in-out;
`
const Container = styled.div`
min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  top: 0;
  left: 0;
  right:0;
`;
const BU = styled.div`
  display: flex;
  justify-content: flex-end;
  cursor:pointer;
`;


const Logo = styled.div`
display:flex;
justify-content: center;
align-items: center;
`
const Menu = styled.div`
display:flex;
justify-content: center;
align-items: center;
flex:1;
a{
  font-weight:600;
  text-transform:uppercase;
  padding: 0 10px;
  flex-wrap: nowrap; 
}
@media (max-width: 768px) {
  display:none
}

`
const Rightmenu = styled.div`

a{
  font-weight:600;
  text-transform:uppercase;
  padding: 0 10px;
  flex-wrap: nowrap; 
}`
const Custommenu = styled.div`

`
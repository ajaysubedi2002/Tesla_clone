import React from 'react';
import styled from 'styled-components';


export default function Sections({title , description,bgImage,left,right}) {
  return (
    <Wrap bgImage = {bgImage}>
      <ItemText>
        <h1>{title} <br />
        </h1>
        <p>{description}</p>
      </ItemText>
      <Button>
            <ButtonGroup>
                <LeftButton>{left}</LeftButton>
                <RightButton>{right}</RightButton>
            </ButtonGroup>
            <Downarrow src='images/down-arrow.svg'/>
      </Button>

     
    </Wrap>
  );
}

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-image: ${props => `url("images/${props.bgImage}")`
};
 

`;

const ItemText = styled.div`
  text-align: center;
  padding-top: 15vh;
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
  }

  
`;

const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: 10px





 
&:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background:  #b85f05;
  transition: .5s;
  transform: scale(.9);
  z-index: -1;
}

&:hover::before {
  transform: scale(1.1);
  box-shadow: 0 0 15px #b85f05;
}

&:hover {
  color: #b85f05;
  box-shadow: 0 0 5px #b85f05;
  text-shadow: 0 0 5px #b85f05;
}
  }
`;

const RightButton = styled(LeftButton)`
background-color: white;
color: black;
opacity: 0.85;
`;


const Downarrow = styled.img`
margin-top:20px;
height:10px
`

const Button = styled.div`
`
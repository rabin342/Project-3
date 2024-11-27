import React from 'react'
import styled from 'styled-components';
const TotalScore = () => {
  return (
   <ScoreContainer>
      <div>
            <h1>0</h1>
            <p>Total score</p>
        </div>
   </ScoreContainer>
    
 
  )
}

export default TotalScore;
const ScoreContainer = styled.div`
max-width: 200px;
text-align: center;
h1 {
font-size: 100px;
line-height: 150px;
}
p {
font-size: 24px;
font-weight: 500;
}
`;

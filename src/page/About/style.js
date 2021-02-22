import styled from "styled-components";

export const StyledSection = styled.section`
  .ant-row {
    justify-content: center;
    .ant-col {
      display: flex;
      justify-content: space-around;
      margin: 1rem 1rem 2rem 1rem;
      @media (max-width: 770px){
          display: block;
        }
      img {
        width: 40%;
        height: 90%;
        margin: 0 1.5rem;
        box-shadow: 0px 1px 4px ;
        border-radius: .3rem;
        @media (max-width: 770px){
          width: 85%;
          height: 70%;
        }
      }
      div {
        margin: 1rem 0 0 1.5rem; 
        p {
          width: 75%;
          text-shadow: 0px .4px .4px ;
          @media (max-width: 500px){
            width: 90%;
          }
        }
      }
    }
  }
`;

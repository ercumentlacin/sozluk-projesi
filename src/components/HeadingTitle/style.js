import styled from "styled-components";

export const StyledHeadingTitle = styled.div`
  display: flex;
  margin-bottom: 1rem;
  h1 {
    @import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@700&display=swap");

    font-family: "Josefin Sans", sans-serif;
    font-size: 5rem;
    font-weight: 700;
    margin-bottom: 0;
    color: #446866;
    word-wrap: break-word;
    @media (max-width: 500px) {
      font-size: 1.8rem;
    }
  }
  span {
    align-self: center;
    font-size: 3rem;
    margin-left: 1rem;
    @media (max-width: 500px) {
      font-size: 1.3rem;
    }
  }
`;

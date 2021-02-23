import styled from "styled-components";

export const GlobalStyle = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Squada+One&display=swap");

  font-family: "Poppins", sans-serif;

  a {
    text-decoration: none;
    color: rgba(0, 0, 0, 0.9);
    font-weight: 600;
    font-size: 1.25rem;
    transition: all 250ms ease-in-out;

    &:hover {
      color: black;
    }
  }

  .ant-btn-primary {
    padding: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    background: #231f20;
    border: 0;
    transition: all 250ms ease-in-out;

    &:hover {
      opacity: 0.9;
    }
  }
`;

import styled from "styled-components";

export const StyledSection = styled.section`
  min-height: calc(100vh - 8.2875rem);
  background: rgb(221, 221, 221);
  background: linear-gradient(
    0deg,
    rgba(221, 221, 221, 1) 0%,
    rgba(255, 255, 255, 1) 100%
  );
  @media screen and (max-width: 35rem) {
    min-height: calc(100vh - 12.1425rem);
  }

  ul {
    padding: 0 5%;
    padding-top: 5rem;
    margin: 0;
    list-style: none;

    h2 {
      font-size: 1.6rem;
    }
    li {
      font-size: 1rem;
    }
  }
`;

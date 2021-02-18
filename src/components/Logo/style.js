import styled from "styled-components";

export const StyledDıv = styled.div`
  display: flex;
  justify-content: flex-end;

  @media (max-width: 575px) {
    justify-content: center;
  }

  img {
    max-width: 100%;
    height: auto;
    width: 50px;
  }
`;

import styled from "styled-components";

export const StyledSection = styled.section`
  min-height: calc(100vh - 10.2875rem);
  background: rgb(221, 221, 221);
  background: linear-gradient(
    0deg,
    rgba(221, 221, 221, 1) 0%,
    rgba(255, 255, 255, 1) 100%
  );
  @media screen and (max-width: 35rem) {
    min-height: calc(100vh - 14.1425rem);
  }
  .title {
    text-align: center;
    margin: 2rem 0;
    color: #456866;
    font-weight: bold;
    font-size: 2.7rem;
    @media (max-width: 500px) {
      font-size: 1.8rem;
    }
  }
  .ant-row {
    justify-content: space-evenly;
    @media (max-width: 500px) {
      justify-content: space-evenly;
    }
    .ant-col {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 1rem 0;
      width: 100%;
      img {
        width: 280px;
      }
      h2 {
        margin: 1rem 0;
      }
      h3 {
        color: #456866;
      }
      span {
        font-size: 1.8rem;
        margin-right: 0.6rem;
      }
    }
  }
`;

import styled from "styled-components";

export const StyledSection = styled.section`
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@500&display=swap");

  min-height: calc(100vh - 46px);
  background: rgb(221, 221, 221);
  background: linear-gradient(
    0deg,
    rgba(221, 221, 221, 1) 0%,
    rgba(255, 255, 255, 1) 100%
  );
  .ant-row {
    padding-top: 2rem;

    .ant-col {
      p {
        font-family: "Inter", sans-serif;
        font-weight: 500;
      }
    }
    .ataturk__image {
      justify-content: flex-start;
      img {
        max-width: 100%;
        height: auto;
      }
    }
  }
`;

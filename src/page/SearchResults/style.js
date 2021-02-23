import styled from "styled-components";

export const StyledSection = styled.section`
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@500&display=swap");

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

  .ant-row {
    padding-top: 2rem;
    min-height: inherit;

    .ant-col {
      p {
        font-family: "Inter", sans-serif;
        font-weight: 500;
      }
    }
    .ataturk__image {
      display: flex;
      align-items: flex-end;
      justify-content: flex-start;
      img {
        max-width: 100%;
        height: auto;
      }

      @media screen and (max-width: 36.0625rem) {
        display: none;
      }
    }
  }

  .words__links {
    margin-bottom: 2rem;

    a {
      display: inline-block;
      font-size: 0.875rem;
      background-color: #fff;
      transition: color 0.15s ease-in;
      letter-spacing: 0.4px;
      padding: 0.25rem 0.5rem;
      background-color: rgba(0, 0, 0, 0.05);
      color: rgba(0, 0, 0, 0.9);
      font-weight: 400;
      border-radius: 0.25rem;
      margin: 0 0.5rem 0.5rem 0;
    }
  }
`;

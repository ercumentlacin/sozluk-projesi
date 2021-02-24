import styled from "styled-components";

export const StyledSection = styled.section`
  .ant-row {
    padding: 2rem;
    .page__nav {
      flex-direction: column;
      display: flex;

      a {
        padding: 0.5rem 0;
        border-bottom: 1px solid black;

        &:hover {
          opacity: 0.5;
        }
      }
    }

    .ant-col {
      h3 {
        a {
          padding: 0.5rem 0;
          width: inherit;
          display: block;
        }
      }
    }

    @media screen and (max-width: 40rem) {
      flex-direction: column;
      margin-bottom: 2rem;

      .page__nav {
        margin: 2rem 0;
      }
    }
  }
`;

import styled from "styled-components";

export const StyledHeader = styled.header`
  *:focus {
    outline: none;
  }
  background-color: #434343;

  .ant-row {
    .ant-col {
      ul {
        text-align: center;
        background: transparent;
        color: #d9d9d9;
        border: none;

        li {
          border: none;
          > span,
          span a {
            color: #d9d9d9;
          }
        }

        li:hover {
          color: white;
          border: none;

          span a {
            color: white;
          }
        }
      }
    }
  }
`;

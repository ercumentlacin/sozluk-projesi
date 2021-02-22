import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: white;

  .navigation__top {
    display: flex;
    padding: 0.5rem 2rem;
    align-items: center;

    .copy {
      display: flex;
      align-items: center;
      letter-spacing: 0.015625em;
      font-size: 0.875rem;
      margin-right: 2rem;
      text-decoration: none;
      line-height: 1.15;

      &__icon {
        img {
          height: 1.5rem;
          width: auto;
          margin-right: 0.5rem;
        }
      }

      &__link {
        a {
          color: black;
          font-weight: 600;
          transition: all 250ms ease-in-out;
          font-size: 0.875rem;

          &:hover {
            opacity: 0.5;
            text-decoration: underline;
          }
        }
      }
    }

    .links {
      display: flex;
      margin-left: auto;
      list-style: none;
      margin-bottom: 0;
      padding-left: 0;

      li {
        a {
          display: block;
          padding: 0.625rem;
          color: #000;
          letter-spacing: 0.015625em;
          font-size: 0.875rem;
          transition: all 0.15s ease-in;

          &:hover {
            opacity: 0.5;
          }
        }
      }
    }
  }
`;

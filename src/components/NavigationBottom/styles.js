import styled from "styled-components";

export const StyledNavigationBottom = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  padding: 0.625rem 2rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  flex-wrap: wrap;

  /* Logo Area */
  .logo {
    margin-right: 2rem;
    h1 {
      margin-bottom: 0;

      a {
        display: flex;
        flex-direction: column;
        color: black;
        font-size: 2rem;
        line-height: 1.625rem;
        letter-spacing: 1px;

        span {
          font-family: "Squada One", cursive;
        }
      }
    }
  }

  /* Form Area */
  form {
    flex: 1;
    margin-right: auto;
    position: relative;
    display: flex;
    height: 3.25rem;

    /* Input ARea */
    .search__input {
      display: flex;
      position: relative;
      flex: 1;
      input {
        outline: none;
        border: none;
        flex-grow: 1;
        border: 1px solid #f2f2f2;
        position: relative;
        padding: 0.3125rem 2.5rem;
        background: #f2f2f2;
        white-space: nowrap;
      }
      .anticon.anticon-search {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        padding: 0 0.5rem;
        font-size: 1.3rem;
      }
    }

    /* Button Area */
    button {
      border: none;
      outline: none;
      font-family: "Poppins";
      letter-spacing: 0.3px;
      font-weight: bold;
      background-color: #231f20;
      font-size: 0.875rem;
      padding: 0.5rem 2rem;
      color: white;
      line-height: 1.15;
      margin: 0;
      cursor: pointer;
      transition: all 250ms ease;

      &:hover {
        opacity: 0.9;
      }
    }
  }
  /* Responsive Style for max 550px */
  @media screen and (max-width: 34.5rem) {
    flex-direction: column;

    .logo {
      margin-bottom: 0.625rem;
    }

    form {
      margin-right: 0;
      width: 100%;

      .search__input {
        flex: 1;
      }
    }
  }
`;

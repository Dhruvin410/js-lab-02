import styled from 'styled-components';

export default {
  Nav: styled.nav`
    background: #FFA500;
    display: flex;
    align-items: center;
    height: 60px;
    ul {
      display: flex;
      padding: 0;
      margin: 0;
      li {
        list-style: none;
        a {
          color: #0000CD;
          text-decoration: none;
          padding: 2em;
          &:hover {
            color: #000000;
          }
        }
      }
    }
  `
};
import styled from 'styled-components';
import './styles.css';

export default {
  Header: styled.header`
    padding: 3em;
    border-radius: 1000px;
    margin: 7 auto;
    width: 80%;
    margin-top: 5em;
    margin-bottom: 5em;
    background: #000000;
    color: #000000;
    display: flex;
    align-items: center;
    justify-content: center;
    
    h1 {
      padding: 0;
      margin: 0;
      font: italic bold 50px/30px Georgia, serif;
      color: #FFD700;
    }
    
    h2 {
      font-weight: bold;
      font: italic bold 12px/30px Georgia, serif;
      
    }
  `
}
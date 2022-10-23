import styled from 'styled-components';

export const ButtonList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 24px;
`;

export const Button = styled.button`
  padding: 10px;
  min-width: 70px;
  font-size: 14px;
  text-transform: capitalize;
  color: #fff;
  background-color: ${p => {
    switch (p.name) {
      case 'good':
        return '#00ff00';
      case 'neutral':
        return '#2196f3';
      case 'bad':
        return '#ff0000';
      default:
        return 'grey';
    }
  }};

  border: none;
  border-radius: 8px;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    transform: scale(1.1);
  }
`;

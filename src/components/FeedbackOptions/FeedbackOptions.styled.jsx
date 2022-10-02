import styled from '@emotion/styled';

const btnColor = props => {
  switch (props['data-set']) {
    case 'good':
      return 'green';
    case 'neutral':
      return 'orange';
    case 'bad':
      return 'red';
    default:
      return 'black';
  }
};

export const Button = styled.button`
  display: inline-block;
  padding: 5px 20px;
  margin: 0 10px;
  position: relative;
  overflow: hidden;

  color: ${btnColor};

  background-color: #fff;

  border: 2px solid ${btnColor};
  border-radius: 8px;

  cursor: pointer;

  transition: 0.2s ease-in-out;

  :before {
    content: '';
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.1),
      rgba(255, 255, 255, 0.5)
    );
    height: 50px;
    width: 50px;
    position: absolute;
    top: -8px;
    left: -75px;
    transform: skewX(-45deg);
  }

  :hover {
    background: ${btnColor};
    color: #fff;
  }

  :hover:before {
    left: 150px;
    transition: 0.5s ease-in-out;
  }
`;

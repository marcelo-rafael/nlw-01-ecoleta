import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  background: #0e0a14;
  opacity: 0.95;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  span {
    display: flex;
    align-items: center;
    justify-content: center;

    > svg {
      color: var(--primary-color);
      width: 50px;
      height: 50px;
    }
  }

  strong {
    color: #fff;
    font-size: 40px;
  }
`;

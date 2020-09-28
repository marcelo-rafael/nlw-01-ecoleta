import React from 'react';
import { Link } from 'react-router-dom';
import { FiCheckCircle } from 'react-icons/fi';

import { Container, Content } from './styles';

const Success: React.FC = () => {
  return (
    <Container>
      <Content>
        <Link to="/">
          <span>
            <FiCheckCircle />
          </span>
          <strong>Cadastro concluído</strong>
        </Link>
      </Content>
    </Container>
  );
};

export default Success;

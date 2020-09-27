import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import logo from '../../assets/logo.svg';

import {
  Container,
  Field,
  // Input,
  FieldGroup,
  ItemsGrid,
  // Button,
} from './styles';

const CreatePoint: React.FC = () => {
  return (
    <Container>
      <header>
        <img src={logo} alt="Ecoleta" />

        <Link to="/">
          <FiArrowLeft />
          Voltar para home
        </Link>
      </header>

      <form>
        <h1>
          Cadastro do <br /> ponto de coleta
        </h1>

        <fieldset>
          <legend>
            <h2>Dados</h2>
          </legend>

          <Field>
            <label htmlFor="name">Nome da entidade</label>
            <input type="text" name="name" id="name" />
          </Field>

          <FieldGroup>
            <Field>
              <label htmlFor="email">E-mail</label>
              <input type="email" name="email" id="email" />
            </Field>
            <Field>
              <label htmlFor="whatsapp">Whatsapp</label>
              <input type="text" name="whatsapp" id="whatsapp" />
            </Field>
          </FieldGroup>
        </fieldset>

        <fieldset>
          <legend>
            <h2>Endereço</h2>
            <span>Selecione o endereço no mapa</span>
          </legend>

          <FieldGroup>
            <Field>
              <label htmlFor="uf">Estado (UF)</label>
              <select name="uf" id="uf">
                <option value="0">Selecione uma UF</option>
              </select>
            </Field>
            <Field>
              <label htmlFor="city">Cidade</label>
              <select name="city" id="city">
                <option value="0">Selecione uma cidade</option>
              </select>
            </Field>
          </FieldGroup>
        </fieldset>

        <fieldset>
          <legend>
            <h2>Ítens de coleta</h2>
            <span>Selecione um ou mais itens abaixo</span>
          </legend>

          <ItemsGrid>
            <li className="selected">
              <img src="http://localhost:3333/uploads/oleo.svg" alt="teste" />
            </li>
            <li>
              <img src="http://localhost:3333/uploads/oleo.svg" alt="teste" />
            </li>
            <li>
              <img src="http://localhost:3333/uploads/oleo.svg" alt="teste" />
            </li>
            <li>
              <img src="http://localhost:3333/uploads/oleo.svg" alt="teste" />
            </li>
            <li>
              <img src="http://localhost:3333/uploads/oleo.svg" alt="teste" />
            </li>
            <li>
              <img src="http://localhost:3333/uploads/oleo.svg" alt="teste" />
            </li>
          </ItemsGrid>
        </fieldset>

        <button type="submit">Cadastrar ponto de coleta</button>
      </form>
    </Container>
  );
};

export default CreatePoint;

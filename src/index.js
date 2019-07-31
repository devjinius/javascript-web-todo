import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled, { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const GlobalStyle = createGlobalStyle`
  ${normalize}
`;

const ContentWrapper = styled.div`
  width: 500px;
  margin: 2rem;
  box-sizing: border-box;
`;

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <GlobalStyle />
        <ContentWrapper>
          <TodoForm />
          <TodoList />
        </ContentWrapper>
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

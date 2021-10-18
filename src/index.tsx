import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query';
import App from './App';

import { store } from './app/store';

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ReduxProvider store={store}>
        <App />
      </ReduxProvider>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

import ReactDOM from 'react-dom/client';

import { App } from './app/App';

import './commons/assets/styles/index.scss';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(<App />);

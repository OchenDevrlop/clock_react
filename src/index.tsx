import ReactDOM from 'react-dom/client';
import Clock from './Clock';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
console.clear();
root.render(
  // <React.StrictMode>
    <Clock />
  // </React.StrictMode>
);
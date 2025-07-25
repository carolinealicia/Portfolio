import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { MacbookAir } from './screens/MacbookAir';
import './index.css';

createRoot(document.getElementById('app')!).render(
  <StrictMode>
    <MacbookAir />
  </StrictMode>,
);
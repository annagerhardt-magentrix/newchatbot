import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// Syncfusion Core Styles
import '@syncfusion/ej2-base/styles/tailwind.css';
import '@syncfusion/ej2-buttons/styles/tailwind.css';
import '@syncfusion/ej2-calendars/styles/tailwind.css';
import '@syncfusion/ej2-dropdowns/styles/tailwind.css';
import '@syncfusion/ej2-inputs/styles/tailwind.css';
import '@syncfusion/ej2-navigations/styles/tailwind.css';
import '@syncfusion/ej2-react-lists/styles/tailwind.css';
import '@syncfusion/ej2-popups/styles/tailwind.css';
import '@syncfusion/ej2-react-grids/styles/tailwind.css';
import '@syncfusion/ej2-interactive-chat/styles/tailwind.css';
// Syncfusion License Registration
import { registerLicense } from '@syncfusion/ej2-base';

// Register your license key here
// You can get your free license key from the Syncfusion dashboard
registerLicense('Ngo9BigBOggjHTQxAR8/V1JGaF1cXmhKYVJ+WmFZfVhgdV9FYIZRQGY/P1ZhSXxVdkdiX35dc3JWTmFZVkN9XEA=');

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

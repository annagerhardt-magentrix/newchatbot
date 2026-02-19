import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { ChatDrawer } from './components/ChatDrawer';
import { Dashboard } from './pages/Dashboard';
import { FabComponent } from '@syncfusion/ej2-react-buttons';
import { useState } from 'react';
import './App.css';

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="flex w-full h-screen bg-background text-on-surface overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0 main-content relative overflow-hidden">
        <Header />
        <div className="flex-1 overflow-auto bg-gray-50/50">
          <Dashboard />
        </div>

        {/* Floating Action Button for Chat - Hide when drawer is open */}
        {!isChatOpen && (
          <div style={{ position: 'fixed', bottom: '2rem', right: '2rem', zIndex: 900 }}>
            <FabComponent
              iconCss="e-icons e-ai-sparkle"
              cssClass="e-primary e-round shadow-2xl hover-lift transition-all"
              style={{ borderRadius: '50%', width: '56px', height: '56px' }}
              onClick={() => setIsChatOpen(true)}
            />
          </div>
        )}

        <ChatDrawer isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
      </div>
    </div>
  );
}

export default App;

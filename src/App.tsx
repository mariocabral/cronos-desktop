import React, { Suspense } from 'react';
import "./App.css";
import { info, attachConsole } from 'tauri-plugin-log-api';
import AppSidebar from './components/AppSidebar';
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';
import AppContent from './components/AppContent';
import { ThemeConfig } from "./theme";
import { HashRouter } from 'react-router-dom';


const detach = await attachConsole()

const App: React.FC = () => {

  info("Info");
  detach();
  const loading = (
    <div className="pt-3 text-center">
      <div className="sk-spinner sk-spinner-pulse"></div>
    </div>
  )

  return (
      <ThemeConfig>
        <HashRouter>
        <div className="app">
          <AppSidebar />
          <main className="content">
            <AppHeader/>
            <Suspense fallback={loading}>
              <AppContent />
            </Suspense>
            <AppFooter />
          </main>
        </div>
        </HashRouter>
      </ThemeConfig>
  );
}

export default App;

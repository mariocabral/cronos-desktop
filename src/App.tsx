import React, { Suspense } from 'react';
import "./App.css";
import { info, attachConsole } from 'tauri-plugin-log-api'
import { ProSidebarProvider } from 'react-pro-sidebar';
import { HashRouter } from 'react-router-dom';
import AppSidebar from './components/AppSidebar';
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';
import AppContent from './components/AppContent';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Grid2 from '@mui/material/Unstable_Grid2'; 

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
    <ProSidebarProvider>
      <CssBaseline />
      <HashRouter>
        <Suspense fallback={loading}>
          <div className="app">
            <AppSidebar /> 
            <main className="content">
              <AppHeader />
              <AppContent />
              <AppFooter />
            </main>
          </div>
        </Suspense>
      </HashRouter>
    </ProSidebarProvider>
  );
}

export default App;

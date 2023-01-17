import React, { Suspense } from 'react';
import "./App.css";
import { info, attachConsole } from 'tauri-plugin-log-api';
import AppSidebar from './components/AppSidebar';
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';
import AppContent from './components/AppContent';
import { ThemeConfig } from "./theme";
import { HashRouter, Route, Routes } from 'react-router-dom';
import { Stack } from '@mui/material';


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
          <Stack direction="column" justifyContent="space-between" alignItems="stretch" spacing={0.5} sx={{ width: '100%' }}>
            <AppHeader/>
            <Suspense fallback={loading}>
              <Routes>
                <Route path="*"  element={<AppContent />} />
              </Routes>
            </Suspense>
            <AppFooter />
            </Stack>
        </div>
        </HashRouter>
      </ThemeConfig>
  );
}

export default App;

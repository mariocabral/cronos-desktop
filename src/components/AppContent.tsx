import React, { Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

// routes config
import routes from './../routes';

const AppContent: React.FC = () => {
  return (
    
      <Suspense >
        <Routes>
          {routes.map((route: any, idx: any) => {
            return (
              route.element && (
                <Route
                  key={idx}
                  path={route.path}
                  element={<route.element />}
                />
              )
            )
          })}
          <Route path="/" element={<Navigate to="dashboard" replace />} />
        </Routes>
      </Suspense>
    
  )
}

export default React.memo(AppContent)

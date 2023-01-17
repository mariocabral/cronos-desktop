import React, { Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
// routes config
import {navegationItems, NavigationRouteItem, ComponentItemType} from './../routes';
import { IconFidgetSpinner } from '@tabler/icons';
import { Box, Container } from '@mui/material';


const AppContent: React.FC = () => {

  return (
    <Container  maxWidth="sm" >
      <Box display="fixed" >
        <Suspense fallback={<IconFidgetSpinner color="primary" />}>
          <Routes>
            {navegationItems
            .filter((item: NavigationRouteItem) => item.type === ComponentItemType.access)
            .map((route: NavigationRouteItem, idx: any) => {
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
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
          </Routes>
        </Suspense>
      </Box>
    </Container>
    
  )
}

export default React.memo(AppContent)

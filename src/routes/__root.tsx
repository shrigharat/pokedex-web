import * as React from 'react';
import { Outlet, createRootRoute } from '@tanstack/react-router';
import { Footer } from '../components/footer';
import { Navbar } from '../components/navbar';

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <React.Fragment>
      <Navbar />
      <Outlet />
      <Footer />
    </React.Fragment>
  );
}

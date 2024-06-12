import React from 'react';
import Home from 'features/homepage/views'

import { HomepageProvider } from 'contexts/homePageContext'

export default function App() {
  return (
    <HomepageProvider >
      <Home />
    </HomepageProvider>
  );
}

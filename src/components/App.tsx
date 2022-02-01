import { useState } from 'react';
import { Provider as MosaicProvider } from '@stoplight/mosaic';
import { GlobalContext, GlobalContextProps } from '../context';
import { Navbar } from './Navbar';
import { Swagger } from './Swagger';

function App() {
  const [globalState, setGlobalState] = useState<GlobalContextProps>({
    apiDescriptionUrl: new URL(document.location.href).searchParams.get('spec') || '',
    setDescriptionUrl: _value => {
      const value = _value.trim() || '';

      let nextUrl = '/';
      if (value && value !== '') {
        nextUrl = `?spec=${value}`;
      }

      window.history.pushState(undefined, '', nextUrl);

      setTimeout(() => {
        setGlobalState({
          ...globalState,
          apiDescriptionUrl: value,
        });
      }, 0);
    },
  });

  return (
    <MosaicProvider>
      <GlobalContext.Provider value={globalState}>
        <div id="wrapper">
          <Navbar />
          <Swagger />
        </div>
      </GlobalContext.Provider>
    </MosaicProvider>
  );
}

export default App;

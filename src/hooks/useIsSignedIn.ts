import { useState, useEffect } from 'react';
import { Providers, ProviderState } from '@microsoft/mgt-element';

function useIsSignedIn(): [boolean] {
    const [isSignedIn, setIsSignedIn] = useState(false);
  
    useEffect(() => {
      const updateState = () => {
        const provider = Providers.globalProvider;
        setIsSignedIn(provider && provider.state === ProviderState.SignedIn);
      };
  
      Providers.onProviderUpdated(updateState);
      updateState();
  
      return () => {
        Providers.removeProviderUpdatedListener(updateState);
      }
    }, []);
  
    return [isSignedIn];
  }

  export default useIsSignedIn;
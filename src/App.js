
import React, {lazy,Suspense} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import SuspenseFallback from './SuspenseFallback';
const Home = lazy(() => import('./components/Home/home'))

function App() {
  let routes = (
    <Switch>
      {
        <>
          <Suspense fallback={<SuspenseFallback />}>
            <Route exact path="/" component={Home} />
          </Suspense>
          
        </>  
      }
    </Switch>
  );
  return (
    <BrowserRouter>
      <div className="App">
        {routes}
      </div>
    </BrowserRouter>
  );
}

export default App;

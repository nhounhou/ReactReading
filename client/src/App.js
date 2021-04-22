import React from "react";
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// The app will not render correctly until you setup a Route component.
// Refer to the Basic Example documentation if you need to.
// (https://reacttraining.com/react-router/web/example/basic)
function App() {
  return (
    <BrowserRouter>
    <div>
      <Nav />
      <Switch>
        {/* part 1 */}
        {/* <Route exact path={['/', '/books']} component={Books} /> */}
        {/* Both works, the following is best practice */}
        <Route exact path={['/', '/books']}>
          <Books />
        </Route>
        {/* part 3 */}
        <Route path='/books/:id' children={<Detail />} />
        {/* part 2 */}
        <Route path="*">
            <NoMatch />
        </Route>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;

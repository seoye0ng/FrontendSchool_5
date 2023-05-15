// import RouteStudy from './RouterSolve/RouteStudy';
// import RouteSolve from './RouterSolve/RouteSolve';
import Counter from './HookUseEffect/TryUseEffect';
import Time from './HookUseEffect/Quiz2';
import TryUseRef from './HookUseRef/TryUseRef';
import TryUseRefDom from './HookUseRef/TryUseRefDom';
import TryUseMemo from './HookUseMemo/TryUseMemo';

function App() {
  return (
    <div>
      {/* <RouteSolve /> */}
      <Counter />
      <Time />
      <TryUseRef />
      <TryUseRefDom />
      <TryUseMemo />
    </div>
  );
}
export default App;

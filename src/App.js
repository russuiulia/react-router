import Products from './components/Products';
import Welcome from './components/Welcome';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div>
      <Routes>
        <Route path="/welcome" element={<Welcome />}>

        </Route>
        <Route path="/products" element={<Products />}>
        </Route>
      </Routes>
    </div>
  );
}

export default App;

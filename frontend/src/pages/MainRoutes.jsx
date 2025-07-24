import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from './Home';

const MainRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
      
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default MainRoutes;
import { Routes, Route } from 'react-router-dom';
import DetailPage from './pages/DetailPage';
import Layout from './pages/Layout';
import MainPage from './pages/MainPage';
import Page404 from './pages/Page404';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="/:name/:title" element={<DetailPage />} />
        <Route path="/404" element={<Page404 />} />
      </Route>
    </Routes>
  );
};

export default App;

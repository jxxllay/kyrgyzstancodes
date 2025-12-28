import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layot';
import { Main } from './main/Main';
import FaqPage from './faqPage/FAQ';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Main />
            </Layout>
          }
        />
        <Route
          path="/faq"
          element={
            <Layout>
              <FaqPage />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
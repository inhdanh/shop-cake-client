import { Routes, Route } from "react-router-dom";
import { CakeList } from "./components/CakeList";
import Layout from "./components/Layout";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <CakeList />
          </Layout>
        }
      />
      <Route path="/cakes/:id" element={null} />
    </Routes>
  );
}

export default App;

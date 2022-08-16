// import Home from "./components/Home_Page/Home";
import "bootstrap/dist/css/bootstrap.min.css";

import NavBar from "./components/Home_Page/NavBar";
import { useState } from "react";
import Home from "./components/Home_Page/Home";
import Domains from "./components/Domains_list/Domains";
import { Route, Routes } from "react-router-dom";
import AnalyticsReportList from "./components/Home_Page/AnalyticsReportList";
import SpinnerLoading from "./components/Spinner/Spinner";
function App() {
  const [showSpinner, setShowSpinner] = useState(false);
  return (
    <div>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={<Home setShowSpinner={setShowSpinner} />}
        ></Route>
        <Route
          path="/domains"
          element={<Domains setShowSpinner={setShowSpinner} />}
        ></Route>
        <Route
          path="/AnalyaticsReportList"
          element={<AnalyticsReportList />}
        ></Route>
      </Routes>
      {showSpinner && <SpinnerLoading />}
    </div>
  );
}

export default App;

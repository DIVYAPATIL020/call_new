import "./App.css";
import SideBar from "./components/Sidebar/SideBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./pages/Call_report.css";

import Call_report from "./pages/Call_report";
import Call_typewise from "./pages/Call_typewise";
import Miss_call from "./pages/Miss_call";
import Userwise_call from "./pages/Userwise_call";

function App() {
  return (
    <Router>
      <SideBar>
        <Routes>
          <Route path="/Call_report" element={<Call_report />} />
          <Route path="/Call_typewise" element={<Call_typewise />} />
          <Route path="/Miss_call" element={<Miss_call />} />
          <Route path="/Userwise_call" element={<Userwise_call />} />

          <Route path="*" element={<> not found</>} />
        </Routes>
      </SideBar>
    </Router>
  );
}

export default App;

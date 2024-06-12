import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Todo from "./pages/Todo";
import Contacts from "./pages/Contacts";
import Voting from "./pages/Voting";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/voting" element={<Voting />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SignIn, SignUp, ForgotPassword, Home, PageNotFound } from "src/pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<PageNotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

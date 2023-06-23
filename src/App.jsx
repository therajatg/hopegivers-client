import { Home } from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import { Footer, Navbar } from "./components";
import { PaymentSuccess } from "./pages/PaymentSuccess";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/paymentsuccess" element={<PaymentSuccess />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

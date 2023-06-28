import { Home } from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import { Footer, Navbar } from "./components";
import { PaymentSuccess } from "./pages/PaymentSuccess";
import { AdminPanel } from "./pages/AdminPanel";
import { RequiresAuth } from "./RequiresAuth";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/admin"
          element={
            <RequiresAuth>
              <AdminPanel />
            </RequiresAuth>
          }
        />
        <Route path="/paymentsuccess" element={<PaymentSuccess />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

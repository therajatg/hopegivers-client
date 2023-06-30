import { Home } from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import { Footer, Navbar } from "./components";
import { PaymentSuccess } from "./pages/PaymentSuccess";
import { AdminPanel } from "./pages/AdminPanel";
import { RequiresAuth } from "./RequiresAuth";
import PageNotFound from "./pages/PageNotFound";
import { About } from "./pages/About";
import { ContactUs } from "./pages/ContactUs";
import { AdminPics } from "./components/AdminPics";
import { AdminContact } from "./components/AdminContact";

function App() {
  return (
    <div className="h-[100vh]">
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
        >
          <Route path="/admin" element={<AdminPics />} />
          <Route path="/admin/contact" element={<AdminContact />} />
        </Route>
        <Route path="/about" element={<About />} />

        <Route path="/paymentsuccess" element={<PaymentSuccess />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

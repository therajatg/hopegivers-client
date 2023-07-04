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
import { Volunteer } from "./pages/Volunteer";
import { OurWork } from "./pages/OurWork";
import { useState } from "react";

function App() {
  const [modal, setModal] = useState(false);
  return (
    <div className="h-[100vh]">
      <Navbar modal={modal} setModal={setModal} />

      <Routes>
        <Route path="/" element={<Home modal={modal} setModal={setModal} />} />
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
        <Route path="/our-work" element={<OurWork />} />
        <Route path="/volunteer" element={<Volunteer />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/paymentsuccess" element={<PaymentSuccess />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

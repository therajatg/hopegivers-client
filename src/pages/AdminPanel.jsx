import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "../axios";

export const AdminPanel = () => {
  const navigate = useNavigate();
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    getContactInfo();
  }, []);

  const getContactInfo = async () => {
    const res = await axios.get("/api/contacts");
    setContacts(res.data);
  };
  return (
    <div>
      {contacts.length > 0 && (
        <div className="bg-gray-300 mb-12">
          <div className="flex max-w-sm justify-around">
            <button
              onClick={() => navigate("/admin")}
              className="bg-blue-600 text-white rounded px-2 py-1"
            >
              Pictures
            </button>
            <button
              onClick={() => navigate("/admin/contact")}
              className="bg-blue-600 text-white rounded px-2 py-1"
            >
              Contact Info
            </button>
          </div>
        </div>
      )}
      <Outlet context={[contacts, setContacts]} />
    </div>
  );
};

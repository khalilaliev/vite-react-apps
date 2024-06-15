import { useEffect, useState } from "react";
import { API } from "../Helpers/Helpers";
import ContactsTable from "./ContactsTable";
import NewContact from "./NewContact";

const ContactsWrapper = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(API);
        if (!res.ok) {
          throw new Error("Something went wrong");
        }
        const data = await res.json();
        setData(data);
      } catch (e) {
        console.error(e.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const deleteContact = (id) => {
    setData(data.filter((contact) => contact.id !== id));
  };

  const addContact = (newContact) => {
    setData((prevData) => [
      ...prevData,
      {
        ...newContact,
        id: Math.floor(Math.random() * 1000),
      },
    ]);
  };

  return (
    <>
      <div className=" text-center flex flex-col gap-7 w-1/2 my-0 mx-auto">
        {loading ? (
          <div className="my-0 mx-auto spinner-simple"></div>
        ) : (
          <>
            <ContactsTable data={data} deleteContact={deleteContact} />
            <NewContact addContact={addContact} />
          </>
        )}
      </div>
    </>
  );
};

export default ContactsWrapper;

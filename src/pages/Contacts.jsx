import ContactsWrapper from "../components/Contacts/ContactsWrapper";
import Title from "../components/Title/Title";

const Contacts = () => {
  return (
    <>
      <Title title="Contacts" />
      <div className=" text-center flex flex-col gap-7 w-1/2 my-0 mx-auto">
        <ContactsWrapper />
      </div>
    </>
  );
};

export default Contacts;

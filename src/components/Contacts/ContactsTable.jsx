import { FaRegTrashCan } from "react-icons/fa6";

const ContactsTable = ({ data, deleteContact }) => {
  if (!data || data.length === 0) return;

  const fields = ["name", "username", "phone"];

  return (
    <>
      <h2>Contacts table</h2>
      <div className="flex w-full overflow-x-auto">
        <table className="table" border="1">
          <thead className="text-center">
            <tr>
              {fields.map((header, index) => (
                <th key={index}>
                  {header.charAt(0).toUpperCase() + header.slice(1)}
                </th>
              ))}
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {fields.map((field, colIndex) => (
                  <td key={colIndex}>{String(row[field])}</td>
                ))}
                <td>
                  <FaRegTrashCan
                    onClick={() => {
                      deleteContact(row.id);
                    }}
                    className=" cursor-pointer text-xl"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ContactsTable;

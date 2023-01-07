import Link from "next/link";
import React from "react";

const ProjectList = () => {
  const data = [
    {
      name: "project1",
      duration: "54 mins",
      dataAdded: "24/02/2022",
      dateModified: "30/12/2022",
    },
    {
      name: "project2",
      duration: "54 mins",
      dataAdded: "24/02/2022",
      dateModified: "30/12/2022",
    },
    {
      name: "project3",
      duration: "54 mins",
      dataAdded: "24/02/2022",
      dateModified: "30/12/2022",
    },
  ];

  const tableRows = data.map((item) => {
    return (
      <tr className="bg-white border-b dark:bg-gray-200 text-black dark:border-gray-400 hover:bg-gray-50 dark:hover:bg-gray-300">
        <th
          scope="row"
          className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-black"
        >
          <Link href={item.name}>{item.name}</Link>
        </th>
        <td className="py-4 px-6">{item.duration}</td>
        <td className="py-4 px-6">{item.dataAdded}</td>
        <td className="py-4 px-6">{item.dateModified}</td>
      </tr>
    );
  });
  return (
    <div>
      <div className="overflow-x-auto relative shadow-md sm:rounded-lg mx-20 my-3">
        <table className="w-full text-sm text-left text-black dark:text-gray-400">
          <thead className="text-xs text-white dark:border-gray-400 uppercase bg-primary-200 dark:bg-gray-200 dark:text-black">
            <tr>
              <th scope="col" className="py-3 px-6">
                Project name
              </th>
              <th scope="col" className="py-3 px-6">
                Duration
              </th>
              <th scope="col" className="py-3 px-6">
                Date added
              </th>
              <th scope="col" className="py-3 px-6">
                Date modified
              </th>
            </tr>
          </thead>
          <tbody>{tableRows}</tbody>
        </table>
      </div>
    </div>
  );
};

export default ProjectList;

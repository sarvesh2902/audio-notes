import Link from "next/link";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";

const ProjectList = () => {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    const userEmail = JSON.parse(localStorage.getItem("userData")).email;
    axios({
      method: "post",
      data: {
        email: userEmail,
      },
      withCredentials: true,
      url: "http://localhost:8787/dashboard/provide-all-record",
    })
      .then(function (res) {
        console.log(res.data.message);
        setRecords(res.data.message);
        return;
        router.push("/dashboard");
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const tableRows = records.map((item) => {
    return (
      <tr
        key={item.projectName}
        className="bg-white border-b dark:bg-gray-200 text-black dark:border-gray-400 hover:bg-gray-50 dark:hover:bg-gray-300"
      >
        <th
          scope="row"
          className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-black"
        >
          <Link href={item.url}>{item.projectName}</Link>
        </th>
        <td className="py-4 px-6">{item.duration}</td>
        <td className="py-4 px-6">{item.createdAt.substring(0, 10)}</td>
        <td className="py-4 px-6">{item.updatedAt.substring(0, 10)}</td>
      </tr>
    );
  });
  return (
    <div>
      {records.length ? (
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
                  Created Date
                </th>
                <th scope="col" className="py-3 px-6">
                  Date modified
                </th>
              </tr>
            </thead>
            <tbody>{tableRows}</tbody>
          </table>
        </div>
      ) : (
        <div className="flex justify-center">
          <Image
            src="https://res.cloudinary.com/sarveshp46/image/upload/v1673151583/no_projects_yet_fngawa.webp"
            width={300}
            height={300}
          />
        </div>
      )}
    </div>
  );
};

export default ProjectList;

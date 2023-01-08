import Link from "next/link";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import { Button } from "flowbite-react";

const ProjectList = () => {
  const [records, setRecords] = useState([]);

  const handleDelete = () => {
    console.log("deleted");
  };

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
        <td className="py-4 px-6">{`${item.duration.min} : ${item.duration.sec}`}</td>
        <td className="py-4 px-6">{item.createdAt.substring(0, 10)}</td>
        <td className="py-4 px-6">{item.updatedAt.substring(0, 10)}</td>
        {/* <td className="py-4 px-6">
          <button
            onClick={handleDelete}
            className="hover:bg-red-600 hover:text-white p-1 rounded transition-all"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
          </button>
        </td> */}
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
                {/* <th scope="col" className="py-3 px-6"></th> */}
              </tr>
            </thead>
            <tbody>{tableRows}</tbody>
          </table>
        </div>
      ) : (
        <div className="flex justify-center">
          <Image
            src="https://res.cloudinary.com/sarveshp46/image/upload/v1673158646/nothing-here_w38mzj.webp"
            width={300}
            height={300}
          />
        </div>
      )}
    </div>
  );
};

export default ProjectList;

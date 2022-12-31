import React from "react";

const ProjectList = () => {
    return (
        <div>
            <div className="overflow-x-auto relative shadow-md sm:rounded-lg mx-20 my-3">
                <table className="w-full text-sm text-left text-black dark:text-gray-400">
                    <thead className="text-xs text-white dark:border-gray-400 uppercase bg-primary-600 dark:bg-gray-200 dark:text-black">
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
                    <tbody>
                        <tr className="bg-white border-b dark:bg-gray-200 text-black dark:border-gray-400 hover:bg-gray-50 dark:hover:bg-gray-300">
                            <th
                                scope="row"
                                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-black"
                            >
                                Podcast 1
                            </th>
                            <td className="py-4 px-6">54 mins </td>
                            <td className="py-4 px-6">24/02/2022</td>
                            <td className="py-4 px-6">30/12/2022</td>
                        </tr>

                        <tr className="bg-white border-b dark:bg-gray-200 text-black dark:border-gray-400 hover:bg-gray-50 dark:hover:bg-gray-300">
                            <th
                                scope="row"
                                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-black"
                            >
                                Podcast 2
                            </th>
                            <td className="py-4 px-6">54 mins</td>
                            <td className="py-4 px-6">23/11/2022</td>
                            <td className="py-4 px-6">05/12/2022</td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-200 text-black dark:border-gray-400 hover:bg-gray-50 dark:hover:bg-gray-300">
                            <th
                                scope="row"
                                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-black"
                            >
                                Podcast 3
                            </th>
                            <td className="py-4 px-6">39 mins </td>
                            <td className="py-4 px-6">12/12/2022</td>
                            <td className="py-4 px-6">29/12/2022</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ProjectList;

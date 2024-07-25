import React from 'react';

function TableHeader() {
    return (
        <thead>
            <tr className="bg-[#464660] hover:bg-gray-700 transition duration-300 ease-in-out text-white border border-gray-700">
                <th className="px-4 py-2 border-gray-700 rounded-l-md text-left w-[8%] text-sm">Grade</th>
                <th className="px-4 py-2 border-gray-700 text-left w-[45%] text-sm">Name</th>
                <th className="px-4 py-2 border-gray-700 text-center w-[23%] text-sm">Total Vulnerabilities</th>
                <th className="px-4 py-2 border-gray-700  rounded-r-md text-center w-[24%] text-sm">Last Seen</th>
            </tr>
        </thead>
    );
}

export default TableHeader;

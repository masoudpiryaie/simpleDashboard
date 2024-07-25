import React from 'react';
import './TableRow.css';

function TableRow({ asset }) {
    return (
        <tr className="bg-[#2a2b3f] hover:bg-gray-700 transition duration-300 ease-in-out text-white border border-gray-700">
            <td className="p-4 py-2 border-gray-700 rounded-l-md text-left w-[8%]">
                <div className="pentagon">{asset.grade}</div>
            </td>
            <td className="px-4 py-2 border-gray-700 text-left w-[45%]">{asset.name}</td>
            <td className="px-4 py-2 border-gray-700 text-center  w-[23%]">{asset.total_vuls}</td>
            <td className="px-4 py-2 border-gray-700 rounded-r-md text-center w-[24%]">{new Date(asset.lastSeen).toLocaleString()}</td>
        </tr>
    );
}

export default TableRow;

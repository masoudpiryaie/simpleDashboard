import React from 'react';
import TableHeader from './TableHeader';
import TableRow from './TableRow';

const Assets = ({ assets, filter }) => {
    const filteredAssets = filter === 'all' ? assets : assets.filter(asset => asset.type === filter);

    return (
        <div className='w-[95%] bg-[#1d1e2c] rounded-lg p-2'>
            <h1 className='text-white'>Assets</h1>
            <table className="w-full border-separate border-spacing-y-2">
                <TableHeader />
                <tbody>
                    {filteredAssets.map((asset, index) => (
                        <TableRow key={index} asset={asset} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Assets;

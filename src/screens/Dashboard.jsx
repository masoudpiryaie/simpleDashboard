import React, { useEffect, useState } from 'react';
import Cards from '../components/Cards';
import Assets from '../components/Assets';
import axios from 'axios';

const Dashboard = () => {
    const url = 'https://run.mocky.io/v3/72e7e252-2f2b-462c-8e60-30a8a0cac801';

    const [fetchData, setFetchData] = useState({});
    const [filter, setFilter] = useState('all');

    useEffect(() => {
        axios.get(url)
            .then(response => {
                setFetchData(response.data);
                console.log('Fetched Data:', response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const handleFilterChange = (type) => {
        setFilter(type);
    };

    return (
        <div className='flex flex-col items-center'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6'>
                <Cards className='cursor-pointer' onClick={() => handleFilterChange('domain')} type="domain" data={fetchData} />
                <Cards className='cursor-pointer' onClick={() => handleFilterChange('ip')} type="ip" data={fetchData} />
                <Cards className='cursor-pointer' onClick={() => handleFilterChange('cloud')} type="cloud" data={fetchData} />
            </div>
            <Assets assets={fetchData.assets || []} filter={filter} />
        </div>
    );
};

export default Dashboard;

import React from 'react';
import EarthPlanet from '../assets/EarthPlanet.png';
import DownLeftArrow from "../assets/DownLeftArrow.png";
import dashboardfull from "../assets/dashboardfull.png";
import Globe from "../assets/Globe.png";
import Conflict from "../assets/Conflict.png";
import Bug from '../assets/Bug.png';
import uploadCloud from "../assets/UploadCloud.png";

const Cards = ({ onClick, type, data }) => {
    const cardTitle = {
        domain: "Domain",
        cloud: "Cloud",
        ip: "IP Adddress",
    };

    const getBackgroundColor = (type) => {
        switch (type) {
            case 'domain':
                return 'bg-[#df6710]';
            case 'ip':
                return 'bg-[#565392]';
            case 'cloud':
                return 'bg-[#d1b003]';
            default:
                return 'bg-gray-100';
        }
    };

    return (
        <div className='bg-[#1d2229] w-[300px] h-[300px] rounded-xl cursor-pointer' onClick={onClick}>
            <div className='flex flex-row justify-between'>
                <div className='m-3'>
                    <div className={`${getBackgroundColor(type)} w-14 h-11 rounded-t-lg items-center flex justify-center`}>
                        <img src={type === 'cloud' ? uploadCloud : EarthPlanet} alt="icon" width={40} />
                    </div>
                    <div className='bg-white w-14 h-5 rounded-b-lg flex justify-center items-center text-sm'>300</div>
                </div>
                <div className='m-3'>
                    <img src={DownLeftArrow} alt="arrow" width={20} />
                </div>
            </div>
            <p className='text-white text-sm m-3'>{cardTitle[type]}</p>
            <div className='w-[280px] bg-gray-500 h-px m-auto'></div>
            <div className='flex flex-row items-center my-5'>
                <div className='ml-4 mr-3'>
                    <p className='text-white text-xs'>Live</p>
                    <p className='text-white'>{data[type]?.total_live}</p>
                </div>
                <img src={dashboardfull} alt="dashboard" className='w-16 h-10' />
                <div className='ml-6 mr-3'>
                    <p className='text-white text-xs'>Monitored</p>
                    <p className='text-white'>{data[type]?.total_monitored}</p>
                </div>
                <img src={dashboardfull} alt="dashboard" className='w-16 h-10' />
            </div>
            <div className='w-[280px] bg-gray-500 h-px m-auto'></div>
            <div className='flex flex-row my-6 mx-3 justify-between'>
                <div className='flex flex-row'>
                    <img src={Globe} alt="globe" className='w-10 h-10 bg-[#327694] p-2 rounded-lg' />
                    <div className='ml-1'>
                        <p className='text-white text-xs'>IPs</p>
                        <p className='text-white'>{data[type]?.ips}</p>
                    </div>
                </div>
                <div className='flex flex-row'>
                    <img src={Conflict} alt="conflict" className='w-10 h-10 bg-[#327694] p-2 rounded-lg' />
                    <div className='ml-1'>
                        <p className='text-white text-xs'>Ports</p>
                        <p className='text-white'>{data[type]?.ports}</p>
                    </div>
                </div>
                <div className='flex flex-row'>
                    <img src={Bug} alt="bug" className='w-10 h-10 bg-[#327694] p-2 rounded-lg' />
                    <div className='ml-1'>
                        <p className='text-white text-xs'>Vulns</p>
                        <p className='text-white'>{data[type]?.vulns}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cards;

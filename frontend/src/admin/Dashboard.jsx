import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-neutral-50 ">
      <div className="w-full mx-auto border-r-2 border-zinc-200">
        <div className="flex">
          {/* Sidebar */}
          <div className="lg:w-[16rem] w-[14rem] h-full fixed border-r-2 border-zinc-200">
            <Sidebar />
          </div>

          {/* Main Content */}
          <div className=" lg:ml-[16rem] ml-[14rem] w-full ">
            <div className='fixed w-full z-30'>
              <Header />
            </div>
            <main className='mt-[48px] p-4'>
              <Outlet />
            </main>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

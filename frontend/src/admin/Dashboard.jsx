import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-neutral-50">
      <div className="w-full mx-auto">
        <div className="flex">
          {/* Sidebar */}
          <div className="lg:w-[16rem] w-[14rem] h-[90.99vh] border-r-2 border-zinc-200 fixed">
            <Sidebar />
          </div>

          {/* Main Content */}
          <div className=" lg:ml-[16rem] ml-[14rem] w-full ">
            <div className='fixed w-full'>
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

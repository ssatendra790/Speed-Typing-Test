import React from 'react';
import PersonIcon from '@mui/icons-material/Person';
import GroupsIcon from '@mui/icons-material/Groups';

const HomeHeader: React.FC = () => {
  return (
    <div className='flex p-4 flex-wrap justify-between items-center w-1/2 mt-6'>
      <h1 className='text-5xl font-bold text-white font-serif absolute left-10'>TallyType</h1>
      {/* App Name */}

      <div className='flex justify-center items-center ml-48'>
        <button className='flex flex-row justify-center items-center bg-slate-500/50 px-4 py-2 rounded-2xl ml-1 text-white font-bold w-32 transform transition duration-500 hover-125 hover:bg-yellow-600'>
          <PersonIcon style={{ color: 'white' }} fontSize='large' />
          <h1 className='mt-1 ml-1 text-lg'> Single </h1>
        </button>
        {/* Single Player Button */}

        <button className='flex flex-row justify-between items-center bg-slate-800 px-4 py-2 rounded-2xl ml-24 text-white font-bold transform transition duration-500 hover-125 hover:bg-yellow-600'>
          <GroupsIcon style={{ color: 'white' }} fontSize='large' />
          <h1 className='mt-1 ml-1 text-lg'> Multiplayer </h1>
        </button>
        {/* Multiplayer Button */}
      </div>
    </div>
  );
};

export default HomeHeader;

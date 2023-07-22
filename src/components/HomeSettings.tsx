import React from 'react';
import RestartButton from './RestartButton';
import useEngine from '../hooks/useEngine';

const HomeSettings: React.FC = () => {

    const { restart } = useEngine();

  return (
    <div className='bg-slate-500/50 text-white flex items-center justify-around mt-14 h-14 w-1/2 justify-self-center rounded-3xl'>
      <div className='flex justify-evenly flex-row items-center'>
        <button className='px-3 py-2 rounded-xl hover:text-yellow-600 font-bold'>Easy</button>
        <button className='px-3 py-2 rounded-xl hover:text-yellow-600 font-bold'>Medium</button>
        <button className='px-3 py-2 rounded-xl hover:text-yellow-600 font-bold'>Hard</button>
      </div>
      {/* Easy/Medium/Hard Buttons */}

      <div className='flex justify-center flex-row items-center'>
        <button className='px-3 py-2 rounded-xl hover:text-yellow-600 font-bold'>15</button>
        <button className='px-3 py-2 rounded-xl hover:text-yellow-600 font-bold'>30</button>
        <button className='px-3 py-2 rounded-xl hover:text-yellow-600 font-bold'>60</button>
        <button className='px-3 py-2 rounded-xl hover:text-yellow-600 font-bold'>120</button>
      </div>
      {/* Word Counts */}

      {/* <button className='px-1 py-2 rounded-xl font-bold transform transition duration-500 hover-125 hover:bg-yellow-600'> */}
      {/* <RefreshIcon style={{color:'white'}} fontSize='large'/> */}
      {/* Refresh */}
      {/* </button> */}
      <RestartButton
        className={"mx-auto mt-10 text-slate-500"}
        onRestart={restart}
      />
      {/* Refresh Button */}
    </div>
  );
};

export default HomeSettings;





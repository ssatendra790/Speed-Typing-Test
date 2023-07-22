import React from "react";
import GeneratedWords from "./components/GeneratedWords";
import RestartButton from "./components/RestartButton";
import Results from "./components/Results";
import UserTypings from "./components/userTypings";
import useEngine from "./hooks/useEngine";
import { calculateAccuracyPercentage } from "./utils/helpers";
import HomeHeader from "./components/Header";

const App = () => {
  const { words, typed, errors, state, restart, totalTyped, wpm } = useEngine();

  return (
    <div className="bg-slate-800 text-slate-50 h-screen flex flex-col tracking-wider font-mono">


      <div className="flex w-full justify-center items-center">
        <HomeHeader />
      </div>
    


    <div className="flex w-full justify-center items-center">
      <div className='bg-slate-500/50 text-white flex items-center justify-around mt-14 h-14 w-1/2 justify-self-center rounded-3xl'>
        <div className='flex justify-evenly flex-row items-center'>
          <button className='px-3 py-2 rounded-xl hover:text-yellow-600 font-bold'>Easy</button>
          <button className='px-3 py-2 rounded-xl hover:text-yellow-600 font-bold'>Medium</button>
          <button className='px-3 py-2 rounded-xl hover:text-yellow-600 font-bold'>Hard</button>
        </div>

        <div className='flex justify-center flex-row items-center'>
          <button className='px-3 py-2 rounded-xl hover:text-yellow-600 font-bold'>15</button>
          <button className='px-3 py-2 rounded-xl hover:text-yellow-600 font-bold'>30</button>
          <button className='px-3 py-2 rounded-xl hover:text-yellow-600 font-bold'>60</button>
          <button className='px-3 py-2 rounded-xl hover:text-yellow-600 font-bold'>120</button>
        </div>
        <RestartButton
          className={"px-1 py-2 rounded-xl font-bold transform transition duration-500 hover-125 hover:text-yellow-600"}
          onRestart={restart}
        />
      </div>
      </div>





      <div className="flex w-full justify-center items-center flex-col mt-16">
        {/* <CountdownTimer timeLeft={timeLeft} /> */}
        <WordsContainer>
          <GeneratedWords key={words} words={words} />
          {/* User typed characters will be overlayed over the generated words */}
          <UserTypings
            className="absolute inset-0"
            words={words}
            userInput={typed}
          />
        </WordsContainer>
        {/* <RestartButton
        className={"mx-auto mt-10 text-slate-500"}
        onRestart={restart}
      /> */}
        <Results
          className="mt-20"
          state={state}
          errors={errors}
          accuracyPercentage={calculateAccuracyPercentage(errors, totalTyped)}
          total={totalTyped}
          wpm={wpm}
        />
      </div>




    </div>
  );
};

const WordsContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative text-3xl max-w-xl leading-relaxed break-all mt-3">
      {children}
    </div>
  );
};

const CountdownTimer = ({ timeLeft }: { timeLeft: number }) => {
  return <h2 className="text-primary-400 font-medium">Time: {timeLeft}</h2>;
};

export default App;


import { motion } from "framer-motion";
import { State } from "../hooks/useEngine";
import { formatPercentage } from "../utils/helpers";

const Results = ({
  state,
  errors,
  accuracyPercentage,
  total,
  wpm,
  className = "",
}: {
  state: State;
  errors: number;
  accuracyPercentage: number;
  total: number;
  wpm: number;
  className?: string;
}) => {
  if (state !== "finish") {
    return null;
  }

  const initial = { opacity: 0 };
  const animate = { opacity: 1 };

  return (
    <motion.ul
      className={`flex flex-row items-center
       justify-around font-bold h-12 rounded-full
      text-white space-x-3 text-2xl  ${className}`}
    >

      <motion.li
        initial={initial}
        animate={animate}
        transition={{duration: 0.3 }}
        className="flex flex-col justify-center items-center"
      >
        <h1 className='ml-2 text-xl text-slate-100/50'>Speed </h1>
        <h1 className='ml-2'> {wpm}</h1>
      </motion.li>


      <motion.li
        initial={initial}
        animate={animate}
        transition={{ duration: 0.3, delay: 0.5 }}
        className="flex flex-col justify-center items-center"
      >
        <h1 className='ml-2 text-xl text-slate-100/50'>Accuracy </h1>
        <h1 className='ml-2'>{formatPercentage(accuracyPercentage)}</h1>
      </motion.li>

      <motion.li
        initial={initial}
        animate={animate}
        transition={{duration: 0.3, delay: 1 }}
        className="flex flex-col justify-center items-center text-red-800"
      >
        <h1 className='ml-2 text-xl text-slate-100/50'>Errors </h1>
        <h1 className='ml-2'> {errors}</h1>
      </motion.li>

      <motion.li
        initial={initial}
        animate={animate}
        transition={{ duration: 0.3, delay: 1.4 }}
        className="flex flex-col justify-center items-center"
      >
        <h1 className='ml-2 text-xl text-slate-100/50'>Typed </h1>
        <h1 className='ml-2'> {total}</h1>
      </motion.li>

    </motion.ul>
  );
};

export default Results;
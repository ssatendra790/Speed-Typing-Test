import { useCallback, useEffect, useState } from "react";
import { countErrors } from "../utils/helpers";
import useWords from "./useWords";
import useTypings from "./useTypings";

export type State = "start" | "run" | "finish";

const NUMBER_OF_WORDS = 10;

const useEngine = () => {
  const [state, setState] = useState<State>("start");
  const { words, updateWords } = useWords(NUMBER_OF_WORDS);
  const { cursor, typed, clearTyped, resetTotalTyped } = useTypings(
    state !== "finish"
  );
  const [errors, setErrors] = useState(0);
  const [isTestFinished, setIsTestFinished] = useState(false); 

  const areWordsFinished = cursor === words.length;

  const restart = useCallback(() => {
    setState("start");
    setErrors(0);
    setIsTestFinished(false); 
    updateWords();
    clearTyped();
  }, [clearTyped, updateWords]);

  const sumErrors = useCallback(() => {
    const wordsReached = words.substring(0, Math.min(cursor, words.length));
    setErrors((prevErrors) => prevErrors + countErrors(typed, wordsReached));
  }, [typed, words, cursor]);

  useEffect(() => {
    if (areWordsFinished && !isTestFinished) { 
      setState("finish");
      sumErrors();
      setIsTestFinished(true); 
    }
  }, [areWordsFinished, isTestFinished, sumErrors]);

  const wpm = Math.round((cursor / NUMBER_OF_WORDS) * (60 / NUMBER_OF_WORDS));

  return { state, words, typed, errors, restart, totalTyped: cursor, wpm };
};

export default useEngine;



































// import { useCallback, useEffect, useState } from "react";
// import { countErrors, debug } from "../utils/helpers";
// import useCountdown from "./useCountdown";
// import useTypings from "./useTypings";
// import useWords from "./useWords";

// export type State = "start" | "run" | "finish";

// const NUMBER_OF_WORDS = 12;
// const COUNTDOWN_SECONDS = 30;

// const useEngine = () => {
//   const [state, setState] = useState<State>("start");
//   const { timeLeft, startCountdown, resetCountdown } =
//     useCountdown(COUNTDOWN_SECONDS);
//   const { words, updateWords } = useWords(NUMBER_OF_WORDS);
//   const { cursor, typed, clearTyped, totalTyped, resetTotalTyped } = useTypings(
//     state !== "finish"
//   );
//   const [errors, setErrors] = useState(0);

//   const isStarting = state === "start" && cursor > 0;
//   const areWordsFinished = cursor === words.length;

//   const restart = useCallback(() => {
//     debug("restarting...");
//     resetCountdown();
//     resetTotalTyped();
//     setState("start");
//     setErrors(0);
//     updateWords();
//     clearTyped();
//   }, [clearTyped, updateWords, resetCountdown, resetTotalTyped]);

//   const sumErrors = useCallback(() => {
//     debug(`cursor: ${cursor} - words.length: ${words.length}`);
//     const wordsReached = words.substring(0, Math.min(cursor, words.length));
//     setErrors((prevErrors) => prevErrors + countErrors(typed, wordsReached));
//   }, [typed, words, cursor]);

//   // as soon the user starts typing the first letter, we start
//   useEffect(() => {
//     if (isStarting) {
//       setState("run");
//       startCountdown();
//     }
//   }, [isStarting, startCountdown]);

//   // when the time is up, we've finished
//   useEffect(() => {
//     if (!timeLeft && state === "run") {
//       debug("time is up...");
//       setState("finish");
//       sumErrors();
//     }
//   }, [timeLeft, state, sumErrors]);

//   /**
//    * when the current words are all filled up,
//    * we generate and show another set of words
//    */
//   useEffect(() => {
//     if (areWordsFinished) {
//       debug("words are finished...");
//       sumErrors();
//       updateWords();
//       clearTyped();
//     }
//   }, [clearTyped, areWordsFinished, updateWords, sumErrors]);

//   return { state, words, typed, errors, restart, timeLeft, totalTyped };
// };

// export default useEngine;




// import { useCallback, useEffect, useState } from "react";
// import { countErrors, debug } from "../utils/helpers";
// import useWords from "./useWords";
// import useTypings from "./useTypings";

// export type State = "start" | "run" | "finish";

// const NUMBER_OF_WORDS = 12;

// const useEngine = () => {
//   const [state, setState] = useState<State>("start");
//   const { words, updateWords } = useWords(NUMBER_OF_WORDS);
//   const { cursor, typed, clearTyped, resetTotalTyped } = useTypings(
//     state !== "finish"
//   );
//   const [errors, setErrors] = useState(0);

//   const areWordsFinished = cursor === words.length;

//   const restart = useCallback(() => {
//     debug("restarting...");
//     setState("start");
//     setErrors(0);
//     updateWords();
//     clearTyped();
//   }, [clearTyped, updateWords]);

//   const sumErrors = useCallback(() => {
//     debug(`cursor: ${cursor} - words.length: ${words.length}`);
//     const wordsReached = words.substring(0, Math.min(cursor, words.length));
//     setErrors((prevErrors) => prevErrors + countErrors(typed, wordsReached));
//   }, [typed, words, cursor]);

//   useEffect(() => {
//     // When all words are typed, finish the game
//     if (areWordsFinished) {
//       debug("words are finished...");
//       setState("finish");
//       sumErrors();
//     }
//   }, [areWordsFinished, sumErrors]);

//   return { state, words, typed, errors, restart, totalTyped: cursor };
// };

// export default useEngine;














// import { useCallback, useEffect, useState } from "react";
// import { countErrors } from "../utils/helpers";
// import useWords from "./useWords";
// import useTypings from "./useTypings";

// export type State = "start" | "run" | "finish";

// const useEngine = (numberOfWords: number) => {
//   const [state, setState] = useState<State>("start");
//   const { words, updateWords } = useWords(numberOfWords);
//   const { cursor, typed, clearTyped, resetTotalTyped } = useTypings(
//     state !== "finish"
//   );
//   const [errors, setErrors] = useState(0);
//   const [isTestFinished, setIsTestFinished] = useState(false);

//   const areWordsFinished = cursor === words.length;

//   const restart = useCallback(() => {
//     setState("start");
//     setErrors(0);
//     setIsTestFinished(false);
//     updateWords();
//     clearTyped();
//   }, [clearTyped, updateWords]);

//   const sumErrors = useCallback(() => {
//     const wordsReached = words.substring(0, Math.min(cursor, words.length));
//     setErrors((prevErrors) => prevErrors + countErrors(typed, wordsReached));
//   }, [typed, words, cursor]);

//   useEffect(() => {
//     if (areWordsFinished && !isTestFinished) {
//       setState("finish");
//       sumErrors();
//       setIsTestFinished(true);
//     }
//   }, [areWordsFinished, isTestFinished, sumErrors]);

//   const wpm = Math.round((cursor / numberOfWords) * (60 / numberOfWords));

//   return { state, words, typed, errors, restart, totalTyped: cursor, wpm, updateWords };
// };

// export default useEngine;





























// import { useCallback, useEffect, useState } from "react";
// import { countErrors, debug } from "../utils/helpers";
// import useTypings from "./useTypings";
// import { Word } from "../types";

// export type Difficulty = "easy" | "medium" | "hard";
// export type WordCount = 15 | 30 | 60 | 120;

// interface DifficultyConfig {
//   words: Word[]; // An array of words for the paragraph
//   text: string; // The full paragraph text
// }

// // Define the objects for each difficulty level and word count combination
// const difficultyConfigs: Record<Difficulty, Record<WordCount, DifficultyConfig>> = {
//   easy: {
//     15: {
//       words: ["easy", "difficulty", "example", "paragraph", "with", "15", "words", "to", "type"],
//       text: "This is an example paragraph for easy difficulty with 15 words to type.",
//     },
//     30: {
//       words: ["easy", "difficulty", "example", "paragraph", "with", "30", "words", "to", "type", "in", "total"],
//       text: "This is an example paragraph for easy difficulty with 30 words to type in total.",
//     },
//     60: {
//       words: ["easy", "difficulty", "example", "paragraph", "with", "60", "words", "to", "type", "in", "this", "exercise"],
//       text: "This is an example paragraph for easy difficulty with 60 words to type in this exercise.",
//     },
//     120: {
//       words: ["easy", "difficulty", "example", "paragraph", "with", "120", "words", "to", "type", "to", "test", "your", "typing", "skills"],
//       text: "This is an example paragraph for easy difficulty with 120 words to type to test your typing skills.",
//     },
//   },
//   // medium: {
//   //   // Define the paragraphs for medium difficulty with different word counts similarly
//   // },
//   // hard: {
//   //   // Define the paragraphs for hard difficulty with different word counts similarly
//   // },
// };

// const useEngine = (difficulty: Difficulty, wordCount: WordCount) => {
//   const [state, setState] = useState<"start" | "finish">("start");
//   const [words, setWords] = useState<Word[]>([]);
//   const { cursor, typed, clearTyped, resetTotalTyped } = useTypings(state !== "finish");
//   const [errors, setErrors] = useState(0);
//   const [wordsTyped, setWordsTyped] = useState(0);

//   const areWordsFinished = cursor === words.length;

//   const updateWords = useCallback(() => {
//     const config = difficultyConfigs[difficulty][wordCount];
//     setWords(config.words);
//   }, [difficulty, wordCount]);

//   const restart = useCallback(() => {
//     debug("restarting...");
//     setState("start");
//     setErrors(0);
//     setWordsTyped(0);
//     updateWords();
//     clearTyped();
//   }, [clearTyped, updateWords]);

//   const sumErrors = useCallback(() => {
//     debug(`cursor: ${cursor} - words.length: ${words.length}`);
//     const wordsReached = words.slice(0, Math.min(cursor, words.length)).join(" "); // Convert back to a string
//     setErrors((prevErrors) => prevErrors + countErrors(typed, wordsReached));
//   }, [typed, words, cursor]);

//   useEffect(() => {
//     if (areWordsFinished) {
//       debug("words are finished...");
//       setState("finish");
//       sumErrors();
//     }
//   }, [areWordsFinished, sumErrors]);

//   const wpm = Math.round((wordsTyped / wordCount) * (60 / wordCount));

//   return { state, words, typed, errors, restart, totalTyped: cursor, wpm, updateWords };
// };

// export default useEngine;











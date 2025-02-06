import { motion, AnimatePresence } from "framer-motion";
import { useScoreContext } from "./Context/Score.tsx";
import GuessButtonsContainer from "./Components/GuessButtonsContainer";
import MysteryBox from "./Components/MysteryBox";
import CorrectGuessBox from "./Components/CorrectGuessBox";
import WrongGuessBox from "./Components/WrongGuessBox";
import ScoreIndicator from "./Components/ScoreIndicator";
import NewGame from "./Components/NewGame";
import "./index.css";
import colors from "./Data/colors.json";

const App = () => {
  const { correctGuesses, guessStatus, incorrectGuesses } = useScoreContext();
  
  return (
    <div className="container">
      <ScoreIndicator correctScore={correctGuesses} incorrectScore={incorrectGuesses} />
      
      <AnimatePresence mode="wait">
        {guessStatus === "correct" && (
          <motion.div
            key="correct"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
            className="guess-box correct"
          >
            <CorrectGuessBox />
          </motion.div>
        )}

        {guessStatus === "wrong" && (
          <motion.div
            key="wrong"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
            className="guess-box wrong"
          >
            <WrongGuessBox />
          </motion.div>
        )}

        {guessStatus === "stale" && (
          <motion.div
            key="mystery"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
            className="guess-box"
          >
            <MysteryBox />
          </motion.div>
        )}
      </AnimatePresence>

      <GuessButtonsContainer colors={colors[0]} />
      <NewGame />
    </div>
  );
};

export default App;

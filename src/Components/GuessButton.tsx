import { useScoreContext } from "../Context/Score";
import colors from '../Data/colors.json';

const GuessButton = ({color}: {color: string}) => {
    const { setMysteryBoxBackgroundColor, mysteryBoxValueColor, setMysteryBoxValueColor} = useScoreContext();
    const handleGuess = ({color}: {color: string}) => {
        console.log(color);
        console.log(mysteryBoxValueColor)        
        const randomColorIndex = Math.floor(Math.random() * (5 - 0 + 1)) + 0;
        if (color === mysteryBoxValueColor){
            setCorrectGuesses(correctGuesses + 1);
            setGuessStatus("correct");
            setMysteryBoxBackgroundColor(colors[1][randomColorIndex]);
            setMysteryBoxValueColor(colors[0][randomColorIndex]);
        }
        else {
            setIncorrectGuesses(incorrectGuesses + 1);
            setGuessStatus("wrong");
            setMysteryBoxBackgroundColor(colors[1][randomColorIndex]);
            setMysteryBoxValueColor(colors[0][randomColorIndex]);
        }

        const timer = setTimeout(() => {
            setGuessStatus("stale");
          }, 2000);

        return () => clearTimeout(timer);
    }
    const {correctGuesses=0, incorrectGuesses=0, setCorrectGuesses, setIncorrectGuesses, setGuessStatus} = useScoreContext();
    return(
        <div data-testid="colorOption" className="button" style={{backgroundColor: color}} onClick={() => {
            handleGuess({color});
        }}>

        </div>
    );
};

export default GuessButton;
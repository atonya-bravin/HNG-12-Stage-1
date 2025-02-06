import { useScoreContext } from "../Context/Score";

const NewGame = () => {
    const {setCorrectGuesses, setIncorrectGuesses} = useScoreContext();
    const handleNewGame = () => {
        setCorrectGuesses(0);
        setIncorrectGuesses(0);
    }
    return (
        <div className="button newButton roboto-medium" data-testid="newGameButton"
            onClick={() => {
                handleNewGame();
            }}
        >
            New Game
        </div>
    );
};

export default NewGame;
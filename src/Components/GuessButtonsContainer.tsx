import GuessButton from "./GuessButton";

const GuessButtonsContainer = ({colors}: {colors:string[]}) => {
    return(
        <div className="guessButtonsContainer">
            <div className="roboto-medium">Click to select your guess</div>
            <div className="buttons">
                {
                    colors.map((color) => (
                        <GuessButton color={color} key={color} />
                    ))
                }
            </div>
        </div>
    );
};

export default GuessButtonsContainer;
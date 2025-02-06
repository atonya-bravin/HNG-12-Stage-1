const ScoreIndicator = ({correctScore, incorrectScore}:{correctScore: number | undefined, incorrectScore: number | undefined}) => {
    if (!correctScore) correctScore = 0;
    if (!incorrectScore) incorrectScore = 0;
    return (
        <div className="scoreIndicator">
            <div className="correctScoreIndicator-container">
                <div className="outerCircle correctScoreIndicator-outerCircle">
                    <div className="innerCircle correctScoreIndicator-innerCircle roboto-semiBold" data-testid="score">
                        {correctScore}
                    </div>
                </div>
                <div className="roboto-regular">Correct Guesses</div>
            </div>
            <div className="wrongScoreIndicator-container">
                <div className="outerCircle wrongScoreIndicator-outerCircle">
                    <div className="innerCircle wrongScoreIndicator-innerCircle roboto-semiBold">
                        {incorrectScore}
                    </div>
                </div>
                <div className="roboto-regular">Wrong Guesses</div>
            </div>
        </div>
    );
};

export default ScoreIndicator;
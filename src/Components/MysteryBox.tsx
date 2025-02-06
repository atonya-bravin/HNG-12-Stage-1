import { useScoreContext } from "../Context/Score";

const MysteryBox = () => {
    const {mysteryBoxBackgroundColor} = useScoreContext();
    return (
        <div className="mysteryBox roboto-medium" style={{backgroundColor:`${mysteryBoxBackgroundColor}`}} data-testid="colorBox">
            <div className="mysteryText" data-testid="gameInstructions">Guess The Color Behind Me</div>
        </div>
    );
};

export default MysteryBox;
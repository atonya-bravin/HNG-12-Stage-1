import React, { useState, useContext, Dispatch, SetStateAction, createContext } from "react";

type ScoreContextType = {
    incorrectGuesses: number | undefined;
    guessStatus: string | undefined;
    mysteryBoxBackgroundColor: string | undefined;
    mysteryBoxValueColor: string | undefined;
    correctGuesses: number | undefined;
    setGuessStatus: Dispatch<SetStateAction<string | undefined>>;
    setCorrectGuesses: Dispatch<SetStateAction<number | undefined>>;
    setIncorrectGuesses: Dispatch<SetStateAction<number | undefined>>;
    setMysteryBoxBackgroundColor: Dispatch<SetStateAction<string | undefined>>;
    setMysteryBoxValueColor: Dispatch<SetStateAction<string | undefined>>;
};

const ScoreContext = createContext<ScoreContextType | undefined>(
    {
        guessStatus: "stale", // stale, correct, wrong
        mysteryBoxBackgroundColor: "#012030",
        mysteryBoxValueColor: "#10454F",
        correctGuesses: 0,
        incorrectGuesses: 0,
        setCorrectGuesses: () => {},
        setIncorrectGuesses: () => {},
        setGuessStatus: () => {},
        setMysteryBoxBackgroundColor: () => {},
        setMysteryBoxValueColor: () => {},
    }
);

export default function ScoreInfo({children}: {children: React.ReactNode}){
    const [correctGuesses, setCorrectGuesses] = useState<number | undefined>(0);
    const [incorrectGuesses, setIncorrectGuesses] = useState<number | undefined>(0);
    const [guessStatus, setGuessStatus ] = useState<string | undefined>("stale");
    const [mysteryBoxBackgroundColor, setMysteryBoxBackgroundColor] = useState<string | undefined>("#012030");
    const [mysteryBoxValueColor, setMysteryBoxValueColor] = useState<string | undefined>("#10454F");
    return(
        <ScoreContext.Provider value={{correctGuesses, guessStatus,  incorrectGuesses, mysteryBoxBackgroundColor, mysteryBoxValueColor, setCorrectGuesses, setIncorrectGuesses, setGuessStatus, setMysteryBoxBackgroundColor, setMysteryBoxValueColor}}>
            {children}
        </ScoreContext.Provider>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export function useScoreContext() {
    const context = useContext(ScoreContext);

    if (!context) {
        throw new Error("ScoreContext must be used within a TaskInfo provider.");
    }

    return context;
}


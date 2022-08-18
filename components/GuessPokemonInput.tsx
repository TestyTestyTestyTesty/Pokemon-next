import React, { useState } from "react";

export default function GuessPokemonInput({ name }: { name: string }) {
    const [pokemonName, setPokemonName] = useState(name);
    const [inputText, setInputText] = useState("");

    const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputText(e.target.value);
    };
    const submitHandler = (e: React.SyntheticEvent) => {
        e.preventDefault();
        if (inputText.toLowerCase() === pokemonName) {
            alert("brawo");
        } else {
            alert("probuj dalej");
        }
    };
    return (
        <form onSubmit={submitHandler}>
            <label>
                <input
                    type="text"
                    name="name"
                    value={inputText}
                    onChange={(e) => inputHandler(e)}
                />
            </label>
            <input
                type="submit"
                value="Check"
                disabled={inputText.length < 1}
            />
        </form>
    );
}

import React, { useState } from "react";
import {
    FormStyles,
    InputStyles,
    SubmitStyles,
} from "./styles/GuessPokemonInput.styled";

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
        <FormStyles onSubmit={submitHandler}>
            <InputStyles
                type="text"
                name="name"
                value={inputText}
                onChange={(e) => inputHandler(e)}
            />
            <SubmitStyles
                type="submit"
                value="Check"
                disabled={inputText.length < 1}
            />
        </FormStyles>
    );
}

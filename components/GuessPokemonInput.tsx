import React, { useState, useEffect } from "react";
import { FormStyles } from "./styles/GuessPokemonInput.styled";

export default function GuessPokemonInput({
    name,
    answerStatus,
    answerStatusHandler,
}: any) {
    const [inputText, setInputText] = useState("");
    useEffect(() => {
        answerStatusHandler(false);
    }, [name, answerStatusHandler]);
    const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputText(e.target.value);
    };
    const submitHandler = (e: React.SyntheticEvent) => {
        e.preventDefault();
        if (inputText.toLowerCase() === name) {
            answerStatusHandler(true);
        } else {
            alert("probuj dalej");
        }
    };
    return (
        <FormStyles onSubmit={submitHandler}>
            <label>
                {}
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
        </FormStyles>
    );
}

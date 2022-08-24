import React from "react";
interface props {
    symbol: string;
    label: string;
}
const Emoji = ({ symbol, label }: props) => (
    <span
        className="emoji"
        role="img"
        aria-label={label ? label : ""}
        aria-hidden={label ? "false" : "true"}
    >
        {symbol}
    </span>
);
export default Emoji;

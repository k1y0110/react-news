import ReactDOM from "react-dom";
import Board from "./components/tsx/Board";
import Game from "./components/tsx/Game";
import "./index.css";

ReactDOM.render(
    <>
        <Board />
        <Game />
    </>,
    document.getElementById("root")
);

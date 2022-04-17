import React, { useState } from "react";
import ActionButtonStyle from "../ActionButton/ActionButton.module.css";
import GlobalStyle from "../styles/global.module.css";
import ModalStyle from "./Modal.module.css";

interface Props {
    show: boolean;
    addItem: Function;
}

export const Moddal = ({ show, addItem }: Props): JSX.Element => {
    const [title, setTitle] = useState<string>("");
    const [obs, setObs] = useState<string>("");

    const handleSubmit = (event: React.FormEvent): void => {
        event.preventDefault();
        const temp_tile = title;
        const temp_obs = obs;
        setTitle("");
        setObs("");
        addItem(temp_tile, temp_obs);
    };

    return (
        <div
            className={`${GlobalStyle.rounded} ${ModalStyle.modal} ${
                show ? ModalStyle.show_up : ""
            }`}
        >
            <form
                onSubmit={(event) => {
                    handleSubmit(event);
                }}
                className={`${GlobalStyle.flex_column}`}
            >
                <input
                    type="text"
                    name="item-title"
                    id="item-title"
                    placeholder="Digite o nome do Item..."
                    value={title}
                    required
                    onChange={(event) => {
                        setTitle(event?.target.value);
                    }}
                    className={`${GlobalStyle.bg_primary} ${GlobalStyle.rounded} ${GlobalStyle.white}`}
                />
                <input
                    type="text"
                    name="item-obs"
                    id="item-obs"
                    value={obs}
                    onChange={(event) => {
                        setObs(event?.target.value);
                    }}
                    className={`${GlobalStyle.bg_primary} ${GlobalStyle.rounded} ${GlobalStyle.white}`}
                />
                <button
                    className={`${ActionButtonStyle.button} ${GlobalStyle.rounded} 
                        ${GlobalStyle.flex_center} 
                        ${GlobalStyle.bg_succes} 
                        ${GlobalStyle.white}`}
                >
                    Adicionar
                </button>
            </form>
        </div>
    );
};

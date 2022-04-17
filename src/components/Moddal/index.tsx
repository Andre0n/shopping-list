import React, { useState } from "react";
import ActionButtonStyle from "../ActionButton/ActionButton.module.css";

import GlobalStyle from "../../styles/global.module.css";
import CustomButtonStyle from "../../styles/button.module.css";
import ModalStyle from "./Modal.module.css";

interface Props {
    show: boolean;
    addItem: Function;
    hideModal: Function;
}

export const Moddal = ({ show, addItem, hideModal }: Props): JSX.Element => {
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

    const handleCancelClick = () => {
        setTitle("");
        setObs("");
        hideModal();
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
                    placeholder="Digite as observações"
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
                <button
                    className={`${CustomButtonStyle.mt} ${ActionButtonStyle.button} ${GlobalStyle.rounded} 
                        ${GlobalStyle.flex_center}
                        ${GlobalStyle.bg_danger}
                        ${GlobalStyle.white}`}
                    onClick={handleCancelClick}
                >
                    Cancelar
                </button>
            </form>
        </div>
    );
};

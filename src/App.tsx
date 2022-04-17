import { useEffect, useState } from "react";
import GlobalStyle from "./styles/global.module.css";
import CustomButtonStyle from "./styles/button.module.css";

import "./App.css";

import { LItem } from "./types/LItem";
import { List } from "./components/List";
import { Moddal } from "./components/Moddal";
import { ActionButton } from "./components/ActionButton";
import { FaPlus } from "react-icons/fa";

export const App = () => {
    const [items, setItems] = useState<LItem[]>([]);
    const [shwModal, setShowModal] = useState<boolean>(false);

    useEffect(() => {
        checkLocalItems();
    }, [items]);

    const checkLocalItems = (): void => {
        const lsItems = localStorage.getItem("list-items");
        if (!lsItems) {
            return;
        }
        setItems(JSON.parse(lsItems));
    };

    const updateLocalStorage = () => {
        localStorage.setItem("list-items", JSON.stringify([...items]));
    };

    const addItem = (title: string, obs: string): void => {
        const item: LItem = { title, obs };
        items.push(item);
        setItems([...items]);
        updateLocalStorage();
        setShowModal(false);
    };

    const removeItem = (index: number): void => {
        items.splice(index, 1);
        setItems([...items]);
        updateLocalStorage();
    };

    return (
        <div className="App">
            <h1>Lista De Compras</h1>
            <List items={items} removeItem={removeItem} />
            <Moddal show={shwModal} addItem={addItem} />
            <ActionButton
                Icon={FaPlus}
                accessibleName="Add new Item"
                action={() => {
                    if (!shwModal) setShowModal(!shwModal);
                }}
                customClasses={`${GlobalStyle.rounded_full} 
                                ${GlobalStyle.bg_succes} 
                                ${GlobalStyle.white} 
                                ${CustomButtonStyle.button_add}`}
            />
        </div>
    );
};

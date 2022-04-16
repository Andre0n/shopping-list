import GlobalStyle from "../styles/global.module.css";
import ListStyle from "./List.module.css";

import { FaPlus } from "react-icons/fa";
import { ListItem } from "../ListItem";
import { ActionButton } from "../ActionButton";
import { useState } from "react";

interface LItem {
    title: string;
    obs?: string;
}

export const List = (): JSX.Element => {
    const [items, setItems] = useState([]);

    const addItem = (): void => {};

    const removeItem = (index: number): void => {
        items.splice(index, 1);
        setItems([...items]);
    };

    return (
        <ul className={`${GlobalStyle.flex_column} ${ListStyle.list}`}>
            {items.map((item: LItem, index: number) => {
                return (
                    <ListItem
                        title={item.title}
                        obs={item.obs}
                        key={index}
                        removeFunction={() => removeItem(index)}
                    />
                );
            })}
            <ActionButton
                Icon={FaPlus}
                action={addItem}
                customClasses={`${GlobalStyle.rounded_full} 
                                ${GlobalStyle.bg_succes} 
                                ${GlobalStyle.white} 
                                ${ListStyle.button_add}`}
            />
        </ul>
    );
};

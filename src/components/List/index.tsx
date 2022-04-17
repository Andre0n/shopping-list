import GlobalStyle from "../styles/global.module.css";
import ListStyle from "./List.module.css";

import { FaPlus } from "react-icons/fa";
import { ListItem } from "../ListItem";
import { ActionButton } from "../ActionButton";
import { useState } from "react";
import { Moddal } from "../Moddal";

interface LItem {
    title: string;
    obs?: string;
}

export const List: React.FC = (): JSX.Element => {
    const [items, setItems] = useState<LItem[]>(
        new Array<LItem>(10).fill({
            title: "Açucar",
            obs: "dakdskdçskdaçsdkakdkasdkasçdkaçdkaçsd",
        })
    );
    const [shwModal, setShowModal] = useState<boolean>(false);

    const addItem = (title: string, obs: string): void => {
        const item: LItem = { title, obs };
        items.push(item);
        setItems([...items]);
        setShowModal(false);
    };

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

            <Moddal show={shwModal} addItem={addItem} />

            <ActionButton
                Icon={FaPlus}
                action={() => {
                    if (!shwModal) setShowModal(!shwModal);
                }}
                customClasses={`${GlobalStyle.rounded_full} 
                                ${GlobalStyle.bg_succes} 
                                ${GlobalStyle.white} 
                                ${ListStyle.button_add}`}
            />
        </ul>
    );
};

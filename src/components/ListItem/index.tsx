import { useState } from "react";
import { FaCheck, FaTrashAlt } from "react-icons/fa";
import { ActionButton } from "../ActionButton";

import GlobalStyle from "../styles/global.module.css";
import ListItemStyle from "./ListItem.module.css";

interface Props {
    title: string;
    obs?: string;
    removeFunction: any;
}

export const ListItem = ({
    title,
    obs,
    removeFunction,
}: Props): JSX.Element => {
    const [checked, setChecked] = useState(false);

    const handleCheck = (): void => {
        setChecked(!checked);
    };

    return (
        <li
            className={`${GlobalStyle.flex_row} ${GlobalStyle.bg_primary} ${
                GlobalStyle.rounded
            } ${ListItemStyle.list_item} ${
                checked ? ListItemStyle.checked : ""
            } `}
        >
            <div className={ListItemStyle.list_item_info}>
                <p className={ListItemStyle.item_title}>{title}</p>
                <p className={ListItemStyle.item_obs}>{obs}</p>
            </div>
            <div className={`${GlobalStyle.flex_row} ${ListItemStyle.buttons}`}>
                <ActionButton
                    Icon={FaCheck}
                    action={handleCheck}
                    customClasses={`${GlobalStyle.bg_secondary} ${GlobalStyle.white}`}
                />
                <ActionButton
                    Icon={FaTrashAlt}
                    action={removeFunction}
                    customClasses={`${GlobalStyle.bg_danger} ${GlobalStyle.white}`}
                />
            </div>
        </li>
    );
};

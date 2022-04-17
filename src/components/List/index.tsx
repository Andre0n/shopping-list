import GlobalStyle from "../../styles/global.module.css";
import ListStyle from "./List.module.css";

import { LItem } from "../../types/LItem";
import { ListItem } from "../ListItem";

interface Props {
    items: LItem[];
    removeItem: Function;
}

export const List = ({ items, removeItem }: Props): JSX.Element => {
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
        </ul>
    );
};

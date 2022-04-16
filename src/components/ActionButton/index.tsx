import { IconType } from "react-icons";
import GlobalStyle from "../styles/global.module.css";
import ActionButtonStyle from "./ActionButton.module.css";

interface ActionButton {
    text?: string;
    Icon: IconType;
    action: any;
    customClasses?: string;
}
export const ActionButton = ({
    Icon,
    action,
    customClasses,
    text,
}: ActionButton): JSX.Element => {
    const executeAction = (event: any) => {
        event.preventDefault();
        action();
    };
    return (
        <button
            className={`
                        ${ActionButtonStyle.button} 
                        ${GlobalStyle.rounded} 
                        ${GlobalStyle.flex_center} 
                        ${customClasses}
                    `}
            onClick={executeAction}
        >
            {text ? text : <Icon />}
        </button>
    );
};

import BaseIcon from "../Icon/BaseIcon";
import "./ActionButton.css"

export type ActionButtonProps = {
    name : string;
    action : () => void;
    icon? : string;
    cor? : string;
}

export default function ActionButton(props : ActionButtonProps){

    const {
        name,
        action,
        icon,
        cor
    } = props;

    return(
        <div 
            className="button-container" 
            onClick={action}
            style={cor ? {
                backgroundColor: cor
            } : {}}
        >
            <span className="button-name">{name}</span>
            {
                icon !== undefined && 
                <BaseIcon
                    iconName={icon}
                    color="inherit"
                />
            }
        </div>
    )

}
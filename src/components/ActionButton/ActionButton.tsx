import BaseIcon from "../Icon/BaseIcon";
import "./ActionButton.css"

export type ActionButtonProps = {
    name : string;
    action : () => void;
    icon? : string
}

export default function ActionButton(props : ActionButtonProps){

    const {
        name,
        action,
        icon
    } = props;

    return(
        <div className="button-container" onClick={action}>
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
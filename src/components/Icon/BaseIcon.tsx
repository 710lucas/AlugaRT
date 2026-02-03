import "./BaseIcon.css"

export type BaseIconProps = {
    iconName : string;
    size? : number;
    fill? : boolean;
    color? : string;
    borderSize? : number;
}


export default function BaseIcon (props : BaseIconProps) {

    const {size = 24, iconName, color = 'black', fill = false, borderSize = 1} = props;

    return (
        <div className="base-icon-container">
            <span className="material-symbols-outlined base-icon-span"
                style={{
                    color: color,
                    fontVariationSettings: fill ? "'FILL' 1" : '',
                    width: `${size}px`,
                    height: `${size}px`,
                    fontSize: `${size}px`,
                }}
            >{iconName}</span>
        </div>
    )

}
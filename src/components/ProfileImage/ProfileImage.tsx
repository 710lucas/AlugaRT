import './ProfileImage.css'
import BaseIcon from '../Icon/BaseIcon';

type ProfileImageProps = {
    src?: string; 
    alt?: string;
    size?: number; 
}

export default function ProfileImage({ src, alt = "Foto de perfil", size = 50 }: ProfileImageProps) {
    return (
        <div 
            className="profileImageContainer" 
            style={{ width: size, height: size }}
        >
            {src ? (
                <img 
                    src={src} 
                    alt={alt} 
                    className="profileImage"
                />
            ) : (
                <BaseIcon 
                    iconName="person" 
                    size={size * 0.7} 
                    color="#757575" 
                    fill={true}
                />
            )}
        </div>
    )
}
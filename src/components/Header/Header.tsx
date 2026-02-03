import BaseIcon from '../Icon/BaseIcon';
import QuickSearchButtons from './components/quickSearchButtons/quickSearchButtons';
import './style.css';



export default function Header() {

    return (

        <div className="header-container">
            <div className="logo-container">
                Aluga<span style={{ color: "var(--vermelho)" }}>RT</span>
            </div>

            <div className="search-bar-container">
                <input type="text" className="search-bar" placeholder='O que você procura?' />
                <div className="quick-search-buttons-container">
                    <QuickSearchButtons name='Casas' onClick={() => {}}/>
                    <QuickSearchButtons name='Apartamentos' onClick={() => {}}/>
                    <QuickSearchButtons name='Disponíveis' onClick={() => {}}/>
                </div>
            </div>

            <div className="profile-container">
                <div className="favorites-container">
                    Favoritos 
                    <BaseIcon iconName='favorite' color='red' fill={false}/>
                </div>
                <div className="profile-picture"></div>
            </div>

        </div>

    )

}
import { useContext, useState } from 'react';
import BaseIcon from '../Icon/BaseIcon';
import QuickSearchButtons from './components/quickSearchButtons/quickSearchButtons';
import './style.css';
import { AuthContext } from '../../contexts/AuthContext/AuthContext';
import FilterModal from '../FilterModal/FilterModal';
import { Filtros } from '../../pages/home/index';

interface HeaderProps {
    onFiltersApply?: (filtros: Filtros) => void;
    onSearch?: (searchTerm: string) => void;
    onQuickSearch?: (type: 'casas' | 'apartamentos' | 'disponiveis', active: boolean) => void;
}

export default function Header({ onFiltersApply, onSearch, onQuickSearch }: HeaderProps) {
    const authContext = useContext(AuthContext);
    const [userSubmenu, setUserSubmenu] = useState(false);
    const [filterModal, setFilterModal] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <div className="header-container">
            <div className="logo-container">
                Aluga<span style={{ color: "var(--vermelho)" }}>RT</span>
            </div>

            <div className="search-bar-container">
                <div className="search-input-wrapper">
                    <div className="filter-icon-btn" onClick={() => setFilterModal(true)}>
                        <BaseIcon iconName='filter_list' color='#666' size={22} />
                    </div>

                    <input 
                        type="text" 
                        className="search-bar" 
                        placeholder='O que você procura?' 
                        value={searchTerm}
                        onChange={(e) => {
                            setSearchTerm(e.target.value);
                            onSearch?.(e.target.value);
                        }}
                    />

                    <div className="search-lupa-btn">
                        <BaseIcon iconName='search' color='#666' size={22} />
                    </div>
                </div>

                <div className="quick-search-buttons-container">
                    <QuickSearchButtons name='Casas' onClick={(clicked) => onQuickSearch?.('casas', clicked)}/>
                    <QuickSearchButtons name='Apartamentos' onClick={(clicked) => onQuickSearch?.('apartamentos', clicked)}/>
                    <QuickSearchButtons name='Disponíveis' onClick={(clicked) => onQuickSearch?.('disponiveis', clicked)}/>
                </div>
            </div>

            <div className="profile-container">
                <div className="favorites-container">
                    Favoritos 
                    <BaseIcon iconName='favorite' color='red' fill={false}/>
                </div>

                {authContext.usuario ? (
                    <div className="user-profile-wrapper">
                        <div className="profile-picture" onClick={() => setUserSubmenu(prev => !prev)}>
                            {authContext.usuario?.nome.charAt(0).toUpperCase()}
                        </div>
                        
                        {userSubmenu && (
                            <div className="userSubmenu">
                                <div className="submenuButton" onClick={() => authContext.logout()}>
                                    <BaseIcon iconName='door_open' color='var(--vermelho)'/>
                                    Logout
                                </div>
                                <div className="submenuButton" onClick={() => {document.location='/usuario/'+authContext.usuario?.id}}>
                                    <BaseIcon iconName='person' color='var(--vermelho)'/>
                                    Perfil
                                </div>
                            </div>
                        )}
                    </div>
                ) : (
                    <a href="/login" className="loginButton">Fazer Login</a>
                )}
            </div>

            {filterModal && <FilterModal onClose={() => setFilterModal(false)} onApplyFilters={onFiltersApply} />}
        </div>
    );
}
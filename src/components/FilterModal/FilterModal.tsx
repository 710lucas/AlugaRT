import { useState } from 'react';
import './FilterModal.css';
import BaseIcon from '../Icon/BaseIcon';
import ActionButton from '../ActionButton/ActionButton';
import TagParaCasa from '../Tag/Tag';
import { Filtros } from '../../pages/home/index';

interface FilterModalProps {
    onClose: () => void;
    onApplyFilters?: (filtros: Filtros) => void;
}

export default function FilterModal({ onClose, onApplyFilters }: FilterModalProps) {
    const [selectedTags, setSelectedTags] = useState<string[]>([]);
    const [quartos, setQuartos] = useState('');

    const tagsDisponiveis = ["Casa", "Mobiliada", "Garagem", "Pets", "Piscina", "Fumante", "Suíte", "Quintal"];

    const toggleTag = (tag: string) => {
        setSelectedTags(prev => 
            prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
        );
    };

    return (
        <div className="filter-overlay">
            <div className="filter-content">
                <div className="filter-header">
                    <h2>Filtros personalizados:</h2>
                    <div className="close-icon" onClick={onClose}>
                        <BaseIcon iconName="close" color="#333" size={20} />
                    </div>
                </div>

                <div className="filter-section">
                    <div className="tags-grid">
                        {tagsDisponiveis.map(tag => (
                            <div 
                                key={tag} 
                                onClick={() => toggleTag(tag)}
                                className={`tag-wrapper ${selectedTags.includes(tag) ? 'active' : ''}`}
                            >
                                <TagParaCasa name={tag} />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="filter-inputs-row">
                    <div className="filter-input-group">
                        <label>Quartos</label>
                        <input 
                            type="number" 
                            placeholder="Quantidade de quartos" 
                            min="0"
                            max="10"
                            value={quartos}
                            onChange={(e) => {
                                const valor = e.target.value;
                                if (valor === '') {
                                    setQuartos('');
                                } else {
                                    const num = parseInt(valor);
                                    if (num >= 0 && num <= 10) {
                                        setQuartos(valor);
                                    }
                                }
                            }}
                        />
                    </div>
                </div>

                <div className="filter-actions">
                    <ActionButton 
                        name="Filtrar" 
                        cor="var(--vermelho)" 
                        action={() => {
                            onApplyFilters?.({
                                tags: selectedTags,
                                quartos: quartos
                            });
                            onClose();
                        }} 
                    />
                </div>
            </div>
        </div>
    );
}
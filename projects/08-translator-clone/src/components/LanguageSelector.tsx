import { Form } from 'react-bootstrap';
import { FromLanguage, SectionType, SupportedLanguages, ToLanguage } from '../types/translate';
import { ChangeEvent } from 'react';


type LanguageSelectorProps = 
    | { type: SectionType.From, value: FromLanguage, onChange: (language: FromLanguage) => void }
    | { type: SectionType.To, value: ToLanguage, onChange: (language: ToLanguage) => void }

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({ type, onChange, value }) => {
    const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
        if (type === SectionType.From) onChange(value as FromLanguage);
        else onChange(value as ToLanguage);
    }

    return(
        <Form.Select aria-label='Selecciona el idioma' value={value} onChange={handleChange}>
            {type === SectionType.From && <option value='auto'>Detectar idioma</option>}
            {
                Object.entries(SupportedLanguages).map(([code, label]) => (
                    <option key={code} value={code}>
                      {label}
                    </option>
                  )
                )
            }
        </Form.Select>
    )
}
import { Form } from 'react-bootstrap';
import { FromLanguage, SupportedLanguages, ToLanguage } from '../types/translate';
import { ChangeEvent } from 'react';


type LanguageSelectorProps = 
    | { type: 'from', value: FromLanguage, onChange: (language: FromLanguage) => void }
    | { type: 'to', value: ToLanguage, onChange: (language: ToLanguage) => void }

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({ type, onChange }) => {

    const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
        if (type === 'from')
        {
            onChange(value as FromLanguage);
        }
        else
        {
            onChange(value as ToLanguage);
        }
    }

    return(
        <Form.Select aria-label='Selecciona el idioma' onChange={handleChange}>
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
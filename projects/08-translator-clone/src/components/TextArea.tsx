import React, { ChangeEvent } from "react"
import { Form } from "react-bootstrap"
import './TextArea.css'
import { SectionType, SupportedVoices, ToLanguage } from "../types/translate"
import { ClipboardIcon, SpeakerIcon } from "./Icons"
import { useSnackbar } from "notistack"

type TextAreaProps = 
    | { type: SectionType.From, onChange: (value: string) => void, value: string, language: ToLanguage }
    | { type: SectionType.To, loading: boolean, onChange: (value: string) => void, value: string, language: ToLanguage}


export const TextArea: React.FC<TextAreaProps> = (props) => {
    const { enqueueSnackbar } = useSnackbar();
    const isTo = props.type === SectionType.To;
    const className = `text-area ${isTo ? 'to' : 'from'}`;
    const placeholder = isTo
        ? props.loading ? 'Traduciendo...' : 'Traducción'
        : '';

    const handleSpeak = () => {
        const utterance = new SpeechSynthesisUtterance(props.value);
        utterance.lang = props.language as SupportedVoices;
        utterance.rate = 0.9;
        speechSynthesis.speak(utterance);
    }

    const handleCopyToClipboard = () => {
        navigator.clipboard.writeText(props.value)
        enqueueSnackbar('Traducción copiada')
    }

    return(
        <>
            <Form.Control 
                as='textarea' 
                placeholder={placeholder}
                className={className}
                autoFocus={!isTo}
                value={props.value}
                readOnly={isTo}
                disabled={isTo}
                onChange={(event: ChangeEvent<HTMLTextAreaElement>) => props.onChange(event.target.value)}
            />
            <section className="bottom-icons">
                <div>
                    <button hidden={props.value === ''} onClick={handleSpeak}><SpeakerIcon /></button>
                </div>
                <div>
                    { !isTo && <div className="caracters-container"><span>{props.value.length} / 5000</span></div> }
                    { isTo && <button hidden={props.value === ''} onClick={handleCopyToClipboard}><ClipboardIcon/></button>}
                </div>
            </section>
        </>
    )
}
import React, { ChangeEvent } from "react"
import { Form } from "react-bootstrap"
import './TextArea.css'
import { SectionType } from "../types/translate"
import { ClipboardIcon, SpeakerIcon } from "./Icons"

type TextAreaProps = 
    | { type: SectionType.From, onChange: (value: string) => void, value: string }
    | { type: SectionType.To, loading: boolean, onChange: (value: string) => void, value: string}


export const TextArea: React.FC<TextAreaProps> = (props) => {
    const isTo = props.type === SectionType.To;
    const className = `text-area ${isTo ? 'to' : 'from'}`;
    const placeholder = isTo
        ? props.loading ? 'Traduciendo...' : 'Traducción'
        : '';
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
                    <button><SpeakerIcon /></button>
                </div>
                <div>
                    { !isTo && <div className="caracters-container"><span>{props.value.length} / 5000</span></div> }
                    { isTo && <button onClick={() => navigator.clipboard.writeText(props.value)}><ClipboardIcon/></button>}
                </div>
            </section>
        </>
    )
}
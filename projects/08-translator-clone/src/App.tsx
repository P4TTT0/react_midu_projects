import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useTranslate } from './hooks/useTranslate';
import { Container, Row, Col, Button, Form, Stack } from 'react-bootstrap';
import { LanguageSelector } from './components/LanguageSelector';
import { ArrowsIcon } from './components/Icons';
import { SectionType } from './types/translate';
import { TextArea } from './components/TextArea';

function App() {

  const { state, setFromLanguage, setToLanguage, swapLanguages, setResult, setFromText } = useTranslate();
  return (
    <Container fluid>
      <h1>Google Translate</h1>
      <Row>
        <Col>
          <Stack gap={2}>
            <LanguageSelector type={SectionType.From} value={state.fromLanguage} onChange={setFromLanguage}/>
            <TextArea type={SectionType.From} value={state.fromText} onChange={setFromText}/>
          </Stack>
        </Col>
        <Col xs='auto'>
          <Button variant='link' disabled={state.fromLanguage === 'auto'} onClick={swapLanguages}>
            <ArrowsIcon/>
          </Button>
        </Col>
        <Col>
          <Stack gap={2}>
              <LanguageSelector type={SectionType.To} value={state.toLanguage} onChange={setToLanguage}/>
              <TextArea type={SectionType.To} value={state.result} loading={state.loading} onChange={setResult}/>
          </Stack>
        </Col>
      </Row>
    </Container>
  )
}

export default App

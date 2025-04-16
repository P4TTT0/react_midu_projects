import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useTranslate } from './hooks/useTranslate';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { LanguageSelector } from './components/LanguageSelector';
import { ArrowsIcon } from './components/Icons';
import { SectionType } from './types/translate';

function App() {

  const { state, setFromLanguage, setToLanguage, swapLanguages } = useTranslate();
  return (
    <Container fluid>
      <h1>Google Translate</h1>
      <Row>
        <Col>
          <LanguageSelector type={SectionType.From} value={state.fromLanguage} onChange={setFromLanguage}/>
        </Col>
        <Col>
          <Button variant='link' disabled={state.fromLanguage === 'auto'} onClick={swapLanguages}>
            <ArrowsIcon/>
          </Button>
        </Col>
        <Col>
          <LanguageSelector type={SectionType.To} value={state.toLanguage} onChange={setToLanguage}/>
        </Col>
      </Row>
    </Container>
  )
}

export default App

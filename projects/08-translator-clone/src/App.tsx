import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useTranslate } from './hooks/useTranslate';
import { Container, Row, Col, Button, Stack } from 'react-bootstrap';
import { LanguageSelector } from './components/LanguageSelector';
import { ArrowsIcon } from './components/Icons';
import { SectionType, ToLanguage } from './types/translate';
import { TextArea } from './components/TextArea';
import { useEffect } from 'react';
import { translate } from './services/translateService';
import { useDebounce } from './hooks/useDebounce';
import { useSnackbar } from 'notistack';
import Header from './components/Header';

function App() {

  const { enqueueSnackbar } = useSnackbar();
  const { state, setFromLanguage, setToLanguage, swapLanguages, setResult, setFromText } = useTranslate();

  const debouncedFromText = useDebounce(state.fromText, 300);

  useEffect(() => {
    if (debouncedFromText === '') return;

    translate({
      text: debouncedFromText, 
      fromLanguage: state.fromLanguage,
      toLanguage: state.toLanguage
    }).then(result => {
      setResult(result);
    }).catch(error => {
      enqueueSnackbar(error);
    })

  },[debouncedFromText, state.fromLanguage, state.toLanguage])

  return (
    <>
      <Header/>
      <Container fluid className='main-content'>
        <Row>
          <Col>
            <Stack gap={2}>
              <LanguageSelector type={SectionType.From} value={state.fromLanguage} onChange={setFromLanguage}/>
              { /*TODO: Mejorar el tipado del LANGUAGE ya que no es legible.*/ }
              <TextArea type={SectionType.From} value={state.fromText} onChange={setFromText} language={state.fromLanguage as ToLanguage}/>
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
                <TextArea type={SectionType.To} value={state.result} loading={state.loading} onChange={setResult} language={state.toLanguage}/>
            </Stack>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default App

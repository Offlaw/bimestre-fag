import './App.css';
import Evento from './Evento';
import TipoIngresso from './TipoIngresso';


function App() {

//Declarar as variáveis de evento
const nome = "GUSTAVO LIMA"
const data = '2 de agosto de 2019 (Sexta-Feira)'
const horario = '18h30 - 00h00'
const local = 'Parque do Povo'
const cidade = 'Campina Grande - PR'
const genero = 'Arte em forma de SERTANEJO'   

//Declarar as variáveis de tipo do ingresso
const camaroteOpenBar = "Camarote (open bar)"
const camarote = "Camarote"
const frontStage = "Front-stage"
const Pista = "Pista" 

//Declarar as variáveis de valor para os tipos de camarote
const valorCamaroteOpenBar = "R$ 150,00"
const valorCamarote = "R$ 100,00"
const valorFrontStage = "R$ 60,00"
const valorPista = "R$ 30,00"

  return (
    <div className="App">
      <Evento 
      nome={nome}
      data={data}
      horario={horario}
      local={local}
      cidade={cidade}
      genero={genero}
      />

      <TipoIngresso
      camaroteOpenBar={camaroteOpenBar}
      camarote={camarote}
      frontStage={frontStage}
      Pista={Pista}
      valorCamaroteOpenBar={valorCamaroteOpenBar}
      valorCamarote={valorCamarote}
      valorFrontStage={valorFrontStage}
      valorPista={valorPista}
      />


    </div>
  )
} 
 

export default App;

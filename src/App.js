import { Button } from 'reactstrap';

import { MenuTab } from './source/components/MenuTab';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
//Imagenes
import objeto from './source/img/objeto.png'
import rpc  from './source/img/rpc.png'
import p2p from  './source/img/2p2.png'
import soa from  './source/img/SOA.jpg'
function App() {
  return (
    <view>
    <MenuTab/>
    <MenuLetter>
    
      
      <img src={'https://pandorafms.com/blog/wp-content/uploads/2023/04/Sistemas-distribuidos-caracteristicas-y-mejores-practicas.jpg'}  alt="Responsive image" />


    </MenuLetter>
    <div>
    
    <h3>¿Que es la comunicacion en los sistemas distribuidos</h3>
      <p id="comunication">Se le conoce como comunicacion dentro de un sistema distribuida al procreso que se 
      encuentra en el nucleo de los sistemas distribuidos, es decir que la comunicacion generalmente sucede en el paso 
      de mensaje a nivel bajo, el cual la comunicacion puede ser sincronica y asincronica </p>
      <br></br>
      <ol>
        
        <li>Comunicacion Sincrónica</li>
        <p>Este tipo de comunicación tiene la principal funcion 
          de que el remitente es desactivado o bloqueado hasta que se 
          pueda obtener el estado de que la peticion ha sido aceptada.
          <b>En pocas palabras Envio y recepcion de información se realizan de forma simultanea</b>
        </p>
        
        <li>comunicación asincronica</li>
        
        <p>A lo contrario este envio no requiere que el receptor este esperando  , ya que este tipo de comunicacion es aquella que permite que el remitente
          pueda tener las posibilidades de que continue inmediatamente despues de que ha pasado el mensaje. Lo que significa que el mensajea puede quedar en un 
          estado de modo temporal
        </p>
      </ol>
    </div>
    </view>
     
    
  );
  
}

export default App;


const MenuLetter  = styled.div `
 background-color: #F5F5;
 font-family: 'Roboto', sans-serif;
`
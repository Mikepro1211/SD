import { Button } from 'reactstrap';
import '../src/prueba.css';
import { MenuTab } from './source/components/MenuTab';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import Col from 'reactstrap';


//Imagenes
import objeto from './source/img/objeto.png'
import rpc  from './source/img/rpc.png'
import p2p from  './source/img/2p2.png'
import soa from  './source/img/SOA.jpg'
import ContainerColumns from './ContainerColumns';
function App() {
  return (
    <view>


    <MenuTab/>
   
    <div className="containers">
      <div className='containerText'>
     <h1 className='titulos'>¿Que es un sistema distribuido?</h1>
     </div>
     <img  className="imagenGrande"src={'https://dc722jrlp2zu8.cloudfront.net/media/uploads/2018/07/31/sistema-distribuido.png'}  alt="Responsive image" />
     
    </div>

    <div className="informacion">
      <h1 className='titulos'>¿Que es un sistemas Distribuido?</h1>
      <p className='paragraph'>Un sistema distribuido es un conjunto de programas informáticos que utilizan recursos computacionales en varios nodos de cálculo distintos para lograr un objetivo compartido común. La finalidad de los sistemas distribuidos es eliminar los cuellos de botella o los puntos de error centrales de un sistema.</p>
      <p className='paragraph'>Un sistema distribuido es un conjunto de programas informáticos que utilizan recursos computacionales en varios nodos de cálculo distintos para lograr un objetivo compartido común. Este tipo de sistemas, también denominados "computación distribuida" o "bases de datos distribuidas", usan nodos distintos para comunicarse y sincronizarse a través de una red común. Estos nodos suelen representar dispositivos de hardware físicos diferentes, pero también pueden representar procesos de software diferentes u otros sistemas encapsulados recursivos. La finalidad de los sistemas distribuidos es eliminar los cuellos de botella o los puntos de error centrales de un sistema.</p>
      
    </div>
    <div>
     <h1 className='titulosBlack'>Caracteristicas de un sistema distribuido</h1>
    
    <ContainerColumns/>
    </div>
      
    </view>
          
  );
  
}

export default App;


const MenuLetter  = styled.div `
 background-color: #F5F5;
 font-family: 'Roboto', sans-serif;
`

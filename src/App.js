import { Button } from 'reactstrap';
import Navbar  from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import objeto from './source/img/objeto.png'
import rpc  from './source/img/rpc.png'
import p2p from  './source/img/2p2.png'
import soa from  './source/img/SOA.jpg'
function App() {
  return (
    <><nav class="navbar navbar-expand-lg bg-light" >
      <div class="container-fluid">
        <a class="navbar-brand" href="#">PR222602 MP</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#com">Comunicacion en objetos distribuidos</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#rpc">Comunicacion llamadas a procedimiento remotos</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#mensaje">Comunicacion orientada a mensaje</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#soa">Arquitectura orientada a objetos</a>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
    <div id='#comunicacionsd' class="container" >
      <h1>Comunicacion en sistemas distribuidos</h1>
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

      <h3>tipos de comunicación
      
      </h3>
      <ol>
        <a href='#com'><li>Comunicacion basada en objetos distribuidos</li></a>
        <a href='#rpc'><li>Comunicacion llamadas a procedimiento remotos </li></a>
        <a href='#mensaje'><li>Comunicacion orientada a mensaje </li></a>
        <a href='#soa'><li>Arquitectura orientada a objetos </li></a>

      </ol>

    </div>
    
  
    <div  class="container" >
    <h2 id='com'>¿Que es la comunicación basada en objeto distribuidos?</h2>
    <p>Cuando hablamos de los sistemas basados en objetos distribuidos , nos referimos a la nocion
      de un objeto que desempeña un rol fundamental en alguna distribucion, es decir que todo  equipo que
      se usa en un sistema distribuido son aquellos equipos que forman parte de un sistema distribuido sin embargo 
      del lado del cliente pueden facilmente ocultarse con el fin de que el cliente solo pueda acceder a los datos de 
      información.
      
     
    </p>
    <br></br>
    <p> Debido a que en los sistemas se le conoce a cualquier cosa como objetose
      en este tipo de modelo se encarga de brindar servicios y recursos referente a la 
      forma el cual se pueda invocar como  un objeto.
    </p>

    <h4>
      ¿Cómo funciona?
    </h4>
    <p>Primeramente este modelo pone enfasis en la identificación y caracterización con el fin de ser
      modelados como objetos. 
    </p>
    <p>Como segundo punto los objetos se distribuyen mendiante diferentes
      computadoras  entre una red y se comunican mediante un middleware
    </p>
    <p>Como tercer punto la unica forma de accedder a los objetos es mediante 
      llamadas a sus metodos
    </p>

    <h4>¿Qué es un objeto remoto?</h4>
    <p>Este objeto como su palabra lo dice es un objeto que se instancia en el servido 
      con el proposito de que pueda responder las invocaciones de clientes locales y remotos
    </p>

    <img  src={objeto} class="img-fluid" ></img>

       
  <h4>Elementos que componen la comunicacion basada en objeto</h4>
  <div class="container text-center">
  <div class="row">
    <div class="col-6 col-sm-4"><b>Proxy</b> Este se encarga de una implementacion de la interfaz de un objeto 
    que se carga en un espacion a la direccion de un cliente  </div>
    <div class="col-6 col-sm-4"><b>Esqueleto</b> Este hace referencia al objeto remoto implementado
    del lado del servidor , ya que este recibe las peticiones de los clientes </div>
    <div class="col-6 col-sm-4"><b>Object Request Broker</b> Este es el componente principal del middleware orientado
    a objetos ya que se encargar de identificar y saber localizar los objetos , asi tambien 
    funciones como ciclo de vida de los objetos   </div>


    
    <div class="w-100 d-none d-md-block"></div>
    <br></br>

    
    
    </div>
    </div>
    <br></br>
    
    <ul class="list-group">
    <li class="list-group-item active" aria-current="true">Ventajes  del modelo de objetos distribuidos</li>
    <li class="list-group-item">Escabilidad </li>
    <li class="list-group-item">Transparencia</li>
    <li class="list-group-item">Aprovecha la programacion orientada a objetos</li>
  </ul>
    </div>

    <br>
    </br>

    <div class="container">
     <h1 id='rpc'>Comunicacion llamadas a procedimiento remotos</h1>
     <h3>¿Que es el RPC?</h3>
     <p>Es un metodo de comunicacion de los sistemas distribuidos que nos permite estables muchas
     estructuras colaborativas y operativas en redes y arquitecturas cliente-servidor., Es decir, el intercambio de información entre procesos de sistema.
     Obteniendo asi una comunicacion cliente -servidor ejecutando tareas en un procreso diferente.
     Se le conoce como llamada a una funcion o subrutina remota
     </p>
     <h2>Como funciona el procreso RPC</h2>
     <img  src={rpc} class="img-fluid" ></img>
     <ol>
      <li>El cliente hace la llamda al procedimiento remoto</li>
      <p>Mediante un mensaje a traves de la red, luego este se detiene debido a que es un 
        procreso síncrono, es decir que necesita una respuesta del servidor
      </p>
      <li>El servidor recibe la perticion</li>
      <p>Desempaqueta  el mensaje para extraer la informacion necesaria 
        para realizar la tarea anteriomente solicitada </p>
       <li>El servidor ejecuta la tarea</li>
       <li>El cliente recibe la respuesta del servidor</li> 
     </ol>
     <ul class="list-group">
    <li class="list-group-item active" aria-current="true">Ventajes de Comunicacion llamadas a procedimiento remotos</li>
    <li class="list-group-item">Requiere tiempo de procresamiento corto </li>
    <li class="list-group-item">Modularización</li>
    <li class="list-group-item">Escabilidad</li>
  </ul>

    </div>  

    <div class="container">
    <h1 id='mensaje'>Comunicacion orientada a mensaje</h1>
    <p>Este sistema de comunicacion esta basado en sistema distribuido 
      de tipo pear to pear, esto debido a que en los sitemas peer to peer no 
      se requiere una infraestructura dedicada. Sino que el modelo  cliente 
      servidor no exites, ya que cada peer puede tomar el papel de servidor como 
      de cliente al mimos tiempo
    </p>
    <br></br>
    <p>Debido a que el sistema peer to peer , un peer puede tomar el 
      papel de cliente o servidor al mismo  tiempo, por lo tanto este trabaja 
      en un sistema de conlas de mensajes mediante la comunicacion asincronica
    </p>
    <h3>¿Qué es el sistema de colas de mensajes?</h3>
    <p>Es el espacio en donde un aplicacion se comunica enviando mensajes
      en colas especificas, por lo que no es necesario que el destinatario se 
      encuentre disponible  en el mismo momento , sino que gracias a la cola 
      de mensaje se estan reenviando  los mensajes en una serie de servidores  de comunicacion
    </p>
    <img  src={p2p} class="img-fluid" ></img>

    <ul class="list-group">
    <li class="list-group-item active" aria-current="true">Ventajes de Comunicacion orientadas a mensajes</li>
    <li class="list-group-item">Todos los recursos son proporcionados por los peers </li>
    <li class="list-group-item">Son utilizados para applicaciones de mensajeria</li>
    <li class="list-group-item">Autoincrementacion cada vez que se agrega un peer</li>
  </ul>
  </div>
       <br></br>
    <div class="container">
    <h1 id='soa'>Arquitectura orientada servicios</h1>
    <h3>¿Qué es el SOA?</h3>
    <p>El SOA o arquitectura orientada de servicios es la 
      representacion de la evolucion a nuevo modelo de comunicacion 
      que permite la contruccion de aplicaciones distribuidas. Los
      servicios implementados en esta arquitectura utilizan una 
      plataforma de desarrollo  que involucra  multiples componentes, pero 
      es importante mencionar que tiene sus propios elementos de 
      diseño, arquitectura, tecnologias y entornos de conceptos e entornos de la 
      relacion entre los sistemas que forman parte de una SOA
    </p>
    <img  src={soa} class="img-fluid" ></img>
    <ul class="list-group">
    <li class="list-group-item active" aria-current="true">Ventajes de una arquitectura orientada a servicios</li>
    <li class="list-group-item">Tienen sus propios patrones </li>
    <li class="list-group-item">Son utilizados para applicaciones de e-commerce ---como ebay ,amazon ...etc</li>
    <li class="list-group-item">Aumenta la enficiencia en procresos</li>
  </ul>
    </div>
    
    </>
     
    
  );
  
}

export default App;

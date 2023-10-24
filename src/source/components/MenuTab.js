import styled from 'styled-components';

export function  MenuTab(){
    return (
        <nav class="navbar navbar-expand-md navbar-dark bg-dark" >
        <div class="container-fluid">
    
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#com">objetos distribuidos</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#rpc">procedimiento remotos</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#mensaje"> orientado a mensaje</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#soa">Arquitectura orientada a objetos</a>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    
    )
}



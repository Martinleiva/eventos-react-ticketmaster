import React from 'react';
import Evento from './Evento';

import { EventosConsumer } from '../context/EventosContext'; 

const ListaEventos = () => {
    return (
        <div className="uk-child-width-1-3@m" uk-grid="true">
            <EventosConsumer>
                {(value) => {
                    console.log(value.eventos);
                    
                    return(
                        value.eventos.length 
                        ? value.eventos.map(evento => (
                                <Evento 
                                    evento={evento}
                                    key={evento.id}
                                />
                        ))
                        : <h1 className="uk-text-danger">No hay resultados!</h1>
                    )
                }} 
            </EventosConsumer>
        </div>
    );
};

export default ListaEventos;
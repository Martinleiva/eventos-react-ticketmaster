import React from 'react';

const Evento = ({evento}) => {
    
    return (
        <div>
            <div className="uk-card uk-card-default">
                <div className="uk-card-media-top">
                    {evento.images  
                        ? <img src={evento.images[0].url} alt={evento.name} />
                        : null
                    }    
                </div>
                <div className="uk-card-body">
                    <h3 className="uk-card-title">{evento.name}</h3>
                    <p><b>Descripción importante</b>: {evento.pleaseNote}</p>
                </div>
                <div className="uk-card-footer">
                    <a className="uk-button uk-button-secondary" href={evento.url} target="_blank" rel="noopener noreferrer" >Más info y Tickets!</a>
                </div>
            </div>
        </div>
    );
};

export default Evento;
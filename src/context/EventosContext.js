import React, { Component } from 'react';
import axios from 'axios';

const EventosContext = React.createContext();
export const EventosConsumer = EventosContext.Consumer;

class EventosProvider extends Component {

    token = 'E0xs7hLYNVJq8uNouhN9bILrF9EVxAWE';

    state = {
        eventos: []
    }

    
    obtenerEventos = async (busqueda) => {

        let url;

        busqueda.categoria 
        ? url = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${this.token}&size=20&keyword=${busqueda.nombre}&venueId=${busqueda.categoria}`
        : url = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${this.token}&size=20&keyword=${busqueda.nombre}`;
        //Consultar la API con la url
        const eventos = await axios(url);

        if(eventos.data.page.totalElements !== 0 ) {
            this.setState({
                eventos: eventos.data._embedded.events
            });
        } else {
            this.setState({
                eventos: []
            });
        }
    }
    render() {
        return (
            <EventosContext.Provider 
                value={{
                    eventos: this.state.eventos,
                    obtenerEventos: this.obtenerEventos
                }}>
                    {this.props.children}
            </EventosContext.Provider>
        );
    }
}

export default EventosProvider;
import React, { Component } from 'react';
import axios from 'axios';

//Crear el context
const CategoriasContext = React.createContext();
export const CategoriasConsumer = CategoriasContext.Consumer;

class CategoriasProvider extends Component {

    token = 'E0xs7hLYNVJq8uNouhN9bILrF9EVxAWE';

    state = {
        categorias : []
    }

    componentDidMount(){
        this.obtenerCategorias();
    }
    //ATRACCIONES BOTON
    obtenerCategorias = async() => {
        let url  = `https://app.ticketmaster.com//discovery/v2/venues.json?apikey=${this.token}&size=15`;

        let categorias = await axios.get(url);

        this.setState({
            categorias: categorias.data._embedded.venues
        });
        
    }

    render() {
        return (
            <CategoriasContext.Provider 
                value={{
                    categorias : this.state.categorias
                }}
            >
                {this.props.children}
            </CategoriasContext.Provider>
        );
    }
}

export default CategoriasProvider;
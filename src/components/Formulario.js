import React, { Component } from 'react';

import { CategoriasConsumer } from '../context/CategoriasContext'; 
import { EventosConsumer } from '../context/EventosContext'; 


class Formulario extends Component {

    state = {
        nombre: '',
        categoria: '',
    }

    //Si el usuario agrega un evento o categoria
    obetenerDatosEventos = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        });
    }

    render() {
        return (
            <EventosConsumer>
                {(value) => {
                    return(
                        <form onSubmit={(e) => {
                            e.preventDefault();
                            value.obtenerEventos(this.state)
                        }}>
                            <fieldset className="uk-fieldset uk-margin">
                                <legend className="uk-legend uk-text-center">
                                    Busca por eventos o por lugares y compra tickets!
                                </legend>
                            </fieldset>

                            <div className="uk-column-1-3@m uk-margin">
                                <div className="uk-margin" uk-margin="true">
                                    <input 
                                        type="text" 
                                        name='nombre' 
                                        className="uk-input" 
                                        placeholder="Nombre de evento" 
                                        onChange={this.obetenerDatosEventos}
                                    />
                                </div>

                                <div className="uk-margin" uk-margin="true">
                                    <select className="uk-select" name="categoria" onChange={this.obetenerDatosEventos}>
                                        <option value="">--Selecciona Lugar--</option>
                                        <CategoriasConsumer>
                                            {(value) => {
                                                return(
                                                    value.categorias.map(categoria => (
                                                        <option 
                                                            key={categoria.id} 
                                                            value={categoria.id}
                                                            data-uk-form-select>
                                                                {categoria.name}
                                                        </option>
                                                    ))
                                                )
                                            }}
                                        </CategoriasConsumer>
                                    </select>
                                </div>

                                <div className="uk-margin" uk-margin="true">
                                    <input type="submit" className="uk-button uk-button-danger" value="Buscar eventos" />
                                </div>

                            </div>
                        </form>
                    )
                }}
            </EventosConsumer>
        );
    }
}

export default Formulario;
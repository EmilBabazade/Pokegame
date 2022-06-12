import React, {Component} from 'react';
import { Pokecard } from './Pokecard';

import './Pokedex.css';

export default class Pokedex extends Component {
    render() {
        const {pokemons, isWinning, exp} = this.props;
        return (
        <div>
            <h1 
                className='Pokedex-heading' 
                style={{color: isWinning ? 'green' : '#ff0000b8'}}>
                    {isWinning ? 'Winner' : 'Loser'}
            </h1>
            <p style={{textAlign: 'center', fontFamily: 'monospace'}}>Total experience: {exp}</p>
            <div className='Pokedex-card-container'>
                {pokemons.map(p => 
                    <Pokecard
                        key={p.id}
                        id={p.id}
                        name={p.name}
                        type={p.type}
                        base_experience={p.base_experience} />
                )}
            </div>
        </div>);
    }
}
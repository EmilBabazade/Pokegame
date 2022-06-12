import React, {Component} from 'react';
import Pokedex from './Pokedex';
import './Pokegame.css';

function randomlyDivideArray(array) {
    array.sort(() => Math.random() - 0.5);
    const res = [];
    for(let i = 0; i < 4; i++) {
        res.push(array.pop());
    }
    return res;
}

export default class Pokegame extends Component {
    static defaultProps = {
        pokemons: [
            {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
            {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
            {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
            {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
            {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
            {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
            {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
            {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
          ]
    };

    render() {
        const {pokemons} = this.props;
        const player1 = randomlyDivideArray(pokemons);
        const player1EXP = player1.map(p => p.base_experience).reduce((p, c) => p + c);
        const player2 = pokemons;
        const player2EXP = player2.map(p => p.base_experience).reduce((p, c) => p + c);
        const winnerColor = 'green';
        const loserColor = '#ff0000b8';
        const winnerText = 'Winner';
        const loserText = 'Loser';
        return (
            <div>
                <Pokedex 
                    pokemons={player1}
                    isWinning={player1EXP > player2EXP}
                    exp={player1EXP} />
                <Pokedex 
                    pokemons={player2}
                    isWinning={player2EXP > player1EXP}
                    exp={player2EXP} />
            </div>
        );
    }
}
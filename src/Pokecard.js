import React, {Component} from 'react';
import './Pokecard.css';

export class Pokecard extends Component {
    render() {
        const {id, name, type, base_experience} = this.props;
        const imgSrc = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id.toString().padStart(3, '0')}.png`;
        return (<div className='Pokecard'>
            <div className='Pokecard-img-container'>
                <img className='Pokecard-img ' src={imgSrc} alt={name} />
            </div>
            <p className='Pokecard-name'>{name}</p>
            <p className='Pokecard-details'>
                Type: {type}
                <br></br>
                EXP: {base_experience}
            </p>
        </div>);
    }
}
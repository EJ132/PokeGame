import React, {Component} from 'react';
import './Pokecard.css';
//const Poke_API = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"
const Poke_API = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/`

let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3) : number);

class PokeCard extends Component {
    render (){
        let imgSrc = `${Poke_API}${padToThree(this.props.id)}.png`
         return (
             <div className = "Pokecard">
             <h1 className="Pokecard-Title">{this.props.name}</h1>
             <img alt='pokemon img' src={imgSrc}/>
             <div className="Pokecard-Data">Type: {this.props.type}</div>
             <div className="Pokecard-Data">Exp: {this.props.exp}</div>
             </div>
         );
    }
}

export default PokeCard;
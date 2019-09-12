import React, { Component } from 'react'
import Pokedex from './Pokedex'

class PokeGame extends Component {

    static defaultProps = { Pokemon: [
        {id: 4, name: 'Charmander', type: 'Fire', exp: 62},
        {id: 7, name: 'Squirtle', type: 'Water', exp: 63},
        {id: 11, name: 'Metapod', type: 'Bug', exp: 72},
        {id: 12, name: 'Butterfree', type: 'Flying', exp: 178},
        {id: 25, name: 'Pikachu', type: 'Electric', exp: 112},
        {id: 39, name: 'Jigglypuff', type: 'Normal', exp: 95},
        {id: 94, name: 'Gengar', type: 'Poison', exp: 225},
        {id: 133, name: 'Eevee', type: 'Normal', exp: 65}  
        ]};

    render () {
        let hand1 = [];
        let hand2 = [...this.props.Pokemon];
        while (hand1.length < hand2.length) {
            let RandIdx = Math.floor(Math.random() * hand2.length);
            let RandPokemon = hand2.splice(RandIdx, 1)[0];
            hand1.push(RandPokemon);
        }

        let exp1 = hand1.reduce((exp, Pokemon) => exp + Pokemon.exp, 0);
        let exp2 = hand2.reduce((exp, Pokemon) => exp + Pokemon.exp, 0);

        return (
            <div>
                    <Pokedex Pokemon={hand1} exp={exp1} isWinner={exp1 > exp2}/>
                    <Pokedex Pokemon={hand2} exp={exp2} isWinner={exp2 > exp1}/>
            </div>
        );
    }
}

export default PokeGame;


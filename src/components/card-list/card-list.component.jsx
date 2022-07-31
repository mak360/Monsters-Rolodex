import { Component } from 'react';

import CardContainer from '../card-container/card-container.component'

import './card-list.style.css'

class CardList extends Component {
    render(){
        const { monsters } = this.props;
        return(
            <div className='card-list'>
                {monsters.map(monster => {
                return (
                   <CardContainer monster={monster} /> 
                )})};
            </div>);
    }
}

export default CardList;
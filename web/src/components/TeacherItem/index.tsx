import React from 'react'
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

function TeacherItem(){
    return (
        <article className='teacher-item'>
            <header>
                <img src="https://avatars1.githubusercontent.com/u/23019379?s=460&u=8783f4865e9111d0808760aed6fe6f83b2c114a3&v=4" alt="Sabrina Corrêa"/>
                <div>
                    <strong>Sabrina Corrêa</strong>
                    <span>Química</span>
                </div>
            </header> 
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                <br/><br/> 
                Veritatis dignissimos, facilis repellendus est explicabo suscipit quis! Quibusdam, culpa nesciunt tempore nisi libero architecto corrupti maxime consequuntur, explicabo ducimus expedita distinctio!
            </p>
            <footer>
                <p>Preço/Hora
                <strong>R$ 80,00</strong>
                </p>
                <button type='button'>
                    <img src={whatsappIcon} alt="whatsapp"/>
                    Entrar em Contato
                </button>
            </footer>
        </article> 
    );
}

export default TeacherItem;
import {bro} from './bro'
import Gremio from './gremio.png'
import './styles/main.scss';

console.log(bro('Rafinha Gomes'))

function component() {
    const element = document.createElement('div')
    const gremio = new Image();

    element.appendChild(gremio)
    return element
}

document.body.appendChild(component())

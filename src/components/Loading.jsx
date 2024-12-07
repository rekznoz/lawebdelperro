// Componente de carga mientras se cargan los demás componentes
import {Component} from "react"

/**
 * Componente de carga
 * @returns {JSX.Element} Componente
 */
export class Loading extends Component {
    render() {
        return (
            <div id="cargador">
                <div id="spinner"></div>
            </div>
        )
    }
}
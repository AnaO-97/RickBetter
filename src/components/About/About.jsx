import foto from '../../Imagenes/Foto.PNG'
import styles from "./About.module.css"
import { Link } from 'react-router-dom';

export default function About (){
    return(
    <div className = { styles.containerGeneral }>                
        <div className = { styles.ImgnPicture }>
            <h3> Ana María Orozco </h3>        
            <img src = {foto}/>
        </div> 

        <div className = { styles.information }>
            <div className = { styles.containerA }>
                <h3>Ingeniera Biomédica</h3>
                <h3>Universidad Autónoma de Manizales</h3>
                <h3>Colombia</h3>
                <h3>Developer Full Stack</h3>
                <h3>BootCamp Henry</h3>
                <h3>Argentina</h3>
            </div>
            <div className = { styles.containerB }>
                <img src = "/IESOG.png" alt = "Error" />
                <img src = "/SENA.png"  alt = "Error" />
                <img src = "/UAM.png"   alt = "Error" />
                <img src = "/Henry.png" alt = "Error" />
            </div>
        </div>
    </div>);
}
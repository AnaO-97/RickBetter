import foto from '../../Imagenes/Foto.PNG'
import styles from "./About.module.css"
import { Link } from 'react-router-dom';

export default function About (){
    return(
    <div className = { styles.containerGeneral }>                
        <div className = { styles.ImgnPicture }>
            <h3> Ana María Orozco </h3>        
            <img src = {foto}/>
            <h5>Stack MERN</h5>
        </div> 

        <div className = { styles.information }>
            <div className = { styles.containerA }>
                <h5>Ingeniera Biomédica</h5>
                <h5>Universidad Autónoma de Manizales</h5>
                <h5>Colombia</h5>
                <h5>Developer Full Stack</h5>
                <h5>BootCamp Henry</h5>
                <h5>Argentina</h5>
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
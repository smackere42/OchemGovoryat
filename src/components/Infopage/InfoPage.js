import InfoModal from "./InfoModal";
import { usestate, useEffect } from 'react';
import phrases from "../PopUp/phrases";
import styles from "./styles.module.scss"

const InfoPage = () =>{

    useEffect(()=> {
        const modal = document.getElementById('modal');
        const modalOff = document.getElementById('modalToggle');

        

        modalOff.addEventListener('click', function(e){
            modal.classList.remove('modalShow');
            modal.classList.add('modalHide');
        })
    })
    return(
        <div>
            <InfoModal/>
            <div id="logo" tabIndex={0} className='logo'>
                <a tabIndex={0} className={styles.logo} href='https://drugoedelo.ru/' title='Другое дело' alt='Другое дело сылка'><div className={styles.logoMain}></div></a>
            </div>
            <div className={styles.infoContent}>
            </div>
        </div>
    )
}

export default InfoPage;
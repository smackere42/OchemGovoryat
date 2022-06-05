import InfoModal from "./InfoModal";
import { useEffect } from 'react';
import styles from "./styles.module.scss"

const InformPage = () =>{

    useEffect(()=> {
        const modal = document.getElementById('modal');
        const modalOff = document.getElementById('modalToggle');

        modalOff.addEventListener('click', function (e) {
            modal.classList.remove('modalShow');
            modal.classList.add('modalHide');
        })
    });
    return(
        <div className={styles.infoContent}>
            <InfoModal/>
            <div id="logo" tabIndex={0} className='logo'>
                <a tabIndex={0} className={styles.logo} href='https://drugoedelo.ru/' title='Другое дело' alt='Другое дело сылка'><div className={styles.logoMain}></div></a>
            </div>
        </div>
    )
}

export default InformPage;
import InfoModal from '../Infopage/InfoModal';
import styles from './styles.module.scss'
import { useEffect, useState } from 'react';
import phrases from '../PopUp/phrases';
import { useRouter } from 'next/router';
import classnames from "classnames/bind";
import PopUp from '../PopUp/PopUp';

const clx = classnames.bind(styles);

const TryPage = () => {
    const router = useRouter();
    const { query } = router;

    const city = parseInt(query.city || -1);
    const firstP = phrases[0];

    useEffect(()=> {
        const modal = document.getElementById('modal');
        const modalOff = document.getElementById('modalToggle');
        const popUp = document.getElementById('popActivate');
        const closeBut = document.getElementById('pop-toggle');
        const popupt = document.getElementById('pop-container');

        closeBut.addEventListener('click', function() {
            router.push(`/map?city=${city}`);
        })
        
        popUp.addEventListener('click', function(e) {
            popupt.classList.remove('popHide');
            popupt.classList.add('popShow');
        })

        modalOff.addEventListener('click', function (e) {
            modal.classList.remove('modalShow');
            modal.classList.add('modalHide');
        })
    });

    return(
        <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
            <PopUp index={0}/>
            <InfoModal/>
            <div id="logo" tabIndex={0} className='logo'>
                <a tabIndex={0} className={styles.logo} href='https://drugoedelo.ru/' title='Другое дело' alt='Другое дело сылка'><div className={styles.logoMain}></div></a>
            </div>
            <div className={styles.relinkWrapper}>
                <div className={styles.content}>
                    <div className={styles.pojectLogo}/>
                    <div className={clx(styles.city, firstP.class)}>
                        {firstP.city}
                    </div>
                    <div id='popActivate' className={styles.marker}/>
                    <div className={styles.instruction}>
                        Нажми на город <br/>и узнай что в нём говорят!
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TryPage;
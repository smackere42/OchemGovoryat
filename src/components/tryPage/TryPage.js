import InfoModal from '../Infopage/InfoModal';
import styles from './styles.module.scss'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import classnames from "classnames/bind";
import PopUp from '../PopUp/PopUp';

const clx = classnames.bind(styles);

const TryPage = () => {
    const router = useRouter();

    useEffect(()=> {
        const modal = document.getElementById('modal');
        const modalOff = document.getElementById('modalToggle');
        const popUp = document.getElementById('popActivate');
        const closeBut = document.getElementById('pop-toggle');
        const popupt = document.getElementById('pop-container');

        closeBut.addEventListener('click', function() {
            router.push(`/map?city=-1`);
        })
        
        popUp.addEventListener('click', function(e) {
            popupt.classList.remove('popHide');
            popupt.classList.add('popShow');
        })

        modalOff.addEventListener('click', function (e) {
            modal.classList.remove('modalShow');
            modal.classList.add('modalHide');
        })

        document.addEventListener('keyup', function (e) {
            if (e.key === 'Escape') {
                if (modal.classList.contains = 'modalShow') {
                    modal.classList.remove('modalShow');
                    modal.classList.add('modalHide');
                }
            }
          });
    },[router]);

    return(
        <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
            <PopUp index={0}/>
            <InfoModal/>
            <div id="logo" tabIndex={0} className='logo' role="link">
                <a tabIndex={0} className={styles.logo} href='https://drugoedelo.ru/' title='Другое дело' alt='Другое дело сылка'><div className={styles.logoMain}></div></a>
            </div>
            <div className={styles.relinkWrapper}>
                    <div tabIndex={0} id='popActivate' title="Нажми чтобы узнать что говорят в россии" role="button" className={styles.marker}></div>
                    <img
                        src="/static/infoPage/index-bg-1920.png"
                        className={styles.mapImage}
                    />
            </div>
        </div>
    )
}

export default TryPage;
import InfoModal from "./InfoModal";
import { usestate, useEffect } from 'react';

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
        <div className="infoWrapper">
            <InfoModal/>
            <div id="logo" tabIndex={0} className='logo'>
                <a tabIndex={0} className='drugoeDelo' href='https://drugoedelo.ru/' title='Другое дело' alt='Другое дело сылка'><div className='logoMap'></div></a>
            </div>
            <div>
            </div>
        </div>
    )
}

export default InfoPage;
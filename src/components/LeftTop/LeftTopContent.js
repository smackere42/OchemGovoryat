import styles from'./leftTop.module.scss'

const LeftTop = () => {
return(
    <div id="leftTop" className='leftTop'>
    <a tabIndex={0} className='drugoeDelo' href='https://drugoedelo.ru/' title='Другое дело' alt='Другое дело сылка'><div className='logoMap'></div></a>
    <div className='instruction'></div>
    </div>
)};

export default LeftTop;
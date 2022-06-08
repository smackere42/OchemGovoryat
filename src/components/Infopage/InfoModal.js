import styles from './styles.module.scss';
import { useEffect, useState } from 'react';
const InfoModal = () => {

  const [host, setHost] = useState('')

  useEffect(() => {
    const url = window.location.host;
    setHost(url);
  }, [])

  const linkToMain = `${host}`;
  const tgLink = `https://t.me/share/url?url=${linkToMain}&title=О чем говорят в россии`;
  const vkLink = `https://vk.com/share.php?url=${linkToMain}&title=О чем говорят в россии`;
  const odnoklassnikiLink = `https://connect.ok.ru/offer?url=${linkToMain}&title=О чем говорят в россии`;

  return(
      <div id='modal' className="modalShow">
        <div className={styles.modalWrapper}>
            <div tabIndex={0} id='modalToggle' className={styles.modalToggle} role="button"  aria-label="Нажмите escape или enter чтобы закрыть"></div>
            <div id="logo" className={styles.logo}>
                <a tabIndex={0} href='https://drugoedelo.ru/' title='Другое дело' alt='Другое дело сылка'><div className={styles.logo}></div></a>
            </div>
            <div className={styles.textContainer} role="textbox">
              <h2 tabIndex={0} alt="Другое Дело и проект Sloooshai решили вместе узнать,о чём говорят в разных городах России.">Другое Дело и проект Sloooshai решили вместе узнать,<br/>о чём говорят в разных городах России.</h2>
              <div tabIndex={0} className={styles.standrtText} alt="С 17 января по 7 февраля 2022 года мы собрали больше 1000 подслушанных фраз от участников проекта Другое Дело со всех городов России.">С 17 января по 7 февраля 2022 года мы собрали больше 1000 подслушанных фраз от участников проекта Другое Дело со всех городов России.</div>
              <div tabIndex={0} className={styles.standrtText} alt="Мы просили рассказать, что можно было нечаянно услышать на улице, дома, в школе, в университете, на молодежной тусовке или даже на работе?">Мы просили рассказать, что можно было нечаянно услышать на улице, дома, в школе, в университете, на молодежной тусовке или даже на работе?</div>
              <div tabIndex={0} className={styles.standrtText} alt="Прислать подслушку можно было выполнив задание в приложении. Суть задания: написать популярные фразы, окказионализмы, мемы и фразеологизмы среди молодёжи.За участие авторы подслушек получили баллы в приложении Другое Дело.">Прислать подслушку можно было выполнив задание в приложении. Суть задания: написать популярные фразы, окказионализмы, мемы и фразеологизмы среди молодёжи.За участие авторы подслушек получили баллы в приложении Другое Дело. </div>
              <div tabIndex={0} className={styles.standrtText} alt="И наконец-то мы подготовили гид подслушек.">И наконец-то мы подготовили гид подслушек.</div>
              <div tabIndex={0} className={styles.standrtText} alt="Больше сотни самых интересных фраз из предоставленных участниками проекта попали в этот гид. Смотри, читай, изучай, возможно твоя подслушка уже есть в этом гиде.<br />Ну, и делись понравившейся фразой в своих социальных сетях, конечно же.">Больше сотни самых интересных фраз из предоставленных участниками проекта попали в этот гид. Смотри, читай, изучай, возможно твоя подслушка уже есть в этом гиде.<br />Ну, и делись понравившейся фразой в своих социальных сетях, конечно же.</div>
              <div tabIndex={0} className={styles.standrtText} alt="Целью проекта было узнать, что слышит молодёжь, как реагирует на это и как использует эти фразы в своей жизни.">Целью проекта было узнать, что слышит молодёжь, как реагирует на это и как использует эти фразы в своей жизни.</div>
              <div tabIndex={0} className={styles.standrtTextBreaker} alt="Теперь, приезжая в любой город России, мы будем знать, что здесь находятся не только известные достопримечательности, но и, может быть, место, где была произнесена та самая фраза, которая попала в гид благодаря пользователям Другого Дела.">Теперь, приезжая в любой город России, мы будем знать, что здесь находятся не только известные достопримечательности, но и, может быть, место, где была произнесена та самая фраза, которая попала в гид благодаря пользователям Другого Дела.</div>
              <div tabIndex={0} className={styles.standrtText} alt="Организатор: Другое Дело)">Организатор:<br/><a href='https://vk.com/drugoedelo'>Другое Дело</a> (https://vk.com/drugoedelo)</div>
              <div tabIndex={0} className={styles.standrtText}>«Другое Дело» — платформа, на которой ты получаешь бонусы за то, что вносишь разнообразие и свежие краски в свою и чужие жизни.</div>
              <div tabIndex={0} className={styles.standrtText}>Мы — не просто система бонусов. Мы — новый образ жизни.</div>
              <div tabIndex={0} className={styles.standrtText}>Заходи в <a href='https://vk.com/app7785085?utm_campaign=generic&utm_term=all&utm_source=dd&utm_content=button&utm_medium=website&mt_click_id=mt-zdras5-1654304530-1806938819&mt_creative=button&mt_network=dd&mt_sub1=website&mt_campaign=generic&mt_adset=all#mt_campaign=generic&mt_adset=all&mt_network=dd&mt_creative=button&mt_sub1=website' className={styles.bold}>приложение</a>. Выполняй задания. Получай баллы и обменивай их на призы, которые достаются тебе за то, что ты уделяешь<br/> внимание своей жизни.</div>
              <div tabIndex={0} className={styles.standrtTextBreaker}>Это ведь совсем Другое Дело</div>
              <div tabIndex={0} className={styles.standrtText}>Партнер:<br/><a href='https://vk.com/sloooshai'>Sloooshai</a> (ссылка https://vk.com/sloooshai)</div>
              <div tabIndex={0} className={styles.standrtText}>Проект Sloooshai — ребята, которые слушают город и расклеивают стикеры с подслушанными фразами в том месте, где они были услышаны. Sloooshai хотят подчеркивать милые, необычные и иногда смешные формулировки, которые люди используют в обычных разговорах, без подготовки. Они не выверенные, а потому очень естественные. Такие слова — самые живые.</div>
              <div tabIndex={0} className={styles.standrtTextBreaker}>Над проектом работали:<br/>Идея: Тристан Иван<br/>Авторы и редакторы: Зуева Аксинья Зуева, Озерова Виктория, Полетаева Александра, Тристан Иван</div>
              <div tabIndex={0} className={styles.standrtTextBreaker}>© Другое Дело<br/>Проект АНО “Россия - страна возможностей”<br/>Отдельные публикации могут содержать информацию, не предназначенную для пользователей до 16 лет</div>
              <div tabIndex={0} className={styles.standrtTextBreaker}>Контактная информация:</div>
              <div tabIndex={0} className={styles.standrtText}>Сайт: <a href='https://www.drugoedelo.ru'>https://www.drugoedelo.ru</a><br/>Группа в ВК: <a href='https://vk.com/drygoedelo'>https://vk.com/drygoedelo</a><br/>Электронная почта: support.dd@rsv.ru</div>
              <div tabIndex={0} className={styles.standrtTextBreaker}></div>
            </div>
            <div className='modalShare'>
              <div alt='Поделиться' className='shareLinks'>Поделиться:</div>
              <div className='shareLinks'>
                <a href={vkLink} target="_blank" role="link">
                  <div className='vk'  title='Поделиться вконтакте' alt="Поделтьбся вконтакте"/>
                </a>
                <a href={tgLink} target="_blank" role="link">
                  <div className='telegramm'  title='Поделиться в телеграмме' alt="Поделаиться в телеграмме"/>
                </a>
                <a  href={odnoklassnikiLink} target="_blank">
                  <div className='odnoklassniki'  title='Поделиться в одноклассниках' role="link" alt="Поделаиться в одноклассниках"/>
                </a>
              </div>
            </div>
        </div>
      </div>
  )
}

export default InfoModal;
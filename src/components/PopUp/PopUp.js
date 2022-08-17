import classnames from "classnames/bind";
import phrases from "./phrases";
import styles from "./styles.module.scss";
import FocusLock from 'react-focus-lock';
import { useEffect, useState } from 'react';

const clx = classnames.bind(styles);

const PopUp = ({ index }) => {
  const [host, setHost] = useState('')

  useEffect(() => {
    const url = window.location.host;
    setHost(url);
  }, [])

  const creator = phrases[index];

  const linkToMain = `${host}/map?city=${index}`;
  const tgLink = `https://t.me/share/url?url=${linkToMain}`;
  const vkLink = `https://vk.com/share.php?url=${linkToMain}`;
  const odnoklassnikiLink = `https://connect.ok.ru/offer?url=${linkToMain}`;
  return (
    <div
			id="pop-container"
			className="popHide"
      role="alert"
		>
        <div className="pop-wrapper">
          <div id="pop-toggle" className="hide" title="закрыть нажмите escape" tabIndex={0} role="button" />
          <p
            className={creator.class}
            title={creator.city}
            tabIndex={1}
            aria-label={creator.city}
            alt={creator.city}
            role="tab"
          >
            {creator.city}
          </p>
          <div className={styles.phrasesWrapper}>
            {creator.phrases.map((phrase) => (
              <div className={styles.phraseContainer}>
                <p tabIndex={0} aria-label={phrase.place} className={clx(styles.lablePos)}>
                  {phrase.place}
                </p>
                <p
                  className={clx(phrase.class, "phrase", "borderRadiusLeftDown", {
                    [styles.phraseWithAnswer]: Boolean(phrase.answer),
                  })}
                  tabIndex={0}
                  aria-labelledby={phrase.phrase}
                  alt={phrase.phrase}
                  role="tab"
                >
                  {phrase.phrase}
                </p>
                <p
                  className={clx(
                    phrase.answerclass,
                    "blueb",
                    "phrase",
                    styles.answerBorderPosition,
                    styles.answer,
                    {
                      [styles.withoutAnswer]: !Boolean(phrase.answer),
                    }
                  )}
                  tabIndex={0}
                  aria-label={phrase.answer}
                  alt={phrase.answer}
                  title={phrase.answer}
                  role="tab"
                >
                  {phrase.answer}
                </p>
                <p
                  className={clx("phrase", "borderRadiusRound", phrase.phrase2class, {
                    [styles.withoutAnswer]: !Boolean(phrase.phrase2),
                  })}
                  tabIndex={0}
                  aria-label={phrase.phrase2}
                  title={phrase.phrase2}
                  role="tab"
                >
                  {phrase.phrase2}
                </p>
                <div className="shareLinks">
                  <a href={vkLink + '&title='+ phrase.phrase + (phrase.answer || '') + (phrase.phrase2 || '')} target="_blank"><div className="vk" tabIndex={1} title='поделиться вконтакте'></div></a>
                  <a href={tgLink + '&text='+ phrase.phrase + (phrase.answer || '') + (phrase.phrase2 || '')} target="_blank"><div className="telegramm" tabIndex={1} title='поделиться в телеграме'></div></a>
                  <a href={odnoklassnikiLink + '&title='+ phrase.phrase + (phrase.answer || '') + (phrase.phrase2 || '')} target="_blank" role="link"><div className="odnoklassniki" tabIndex={1} title='поделиться в одноклассниках'></div></a>
                </div>
              </div>
            ))}
          </div>
        </div>
    </div>
  );
};

export default PopUp;

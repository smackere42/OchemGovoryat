import classnames from "classnames/bind";
import phrases from "./phrases";
import styles from "./styles.module.scss";
import FocusLock from 'react-focus-lock';

const clx = classnames.bind(styles);

const PopUp = ({ index }) => {
  const creator = phrases[index];
  const linkToMain = 'http://localhost:3000/?count=' + index;
  const tgLink = 'https://t.me/share/url?url='
  const text = '&text='

  return (
    <FocusLock>
    <div
			id="pop-container"
			className="popHide"
      role="alert"
		>
      <div className="pop-wrapper">
        <div id="pop-toggle" className="hide" title="закрыть нажмите escape" tabIndex={0} />
        <div
          className={creator.class}
          title={creator.city}
          tabIndex={1}
          aria-label={creator.city}
          alt={creator.city}
        >
          {creator.city}
        </div>
        <div className={styles.phrasesWrapper}>
          {creator.phrases.map((phrase) => (
            <div className={styles.phraseContainer}>
              <p tabIndex={1} aria-label={phrase.place} className={clx(phrase.lablepos)}>
                {phrase.place}
              </p>
              <div
                className={clx(phrase.class, "phrase", "borderRadiusLeftDown", {
                  [styles.phraseWithAnswer]: Boolean(phrase.answer),
                })}
                tabIndex={1}
                aria-labelledby={phrase.phrase}
                alt={phrase.phrase}
              >
                {phrase.phrase}
              </div>
              <div
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
                tabIndex={1}
                aria-label={phrase.answer}
                alt={phrase.answer}
                title={phrase.answer}
              >
                {phrase.answer}
              </div>
              <div
                className={clx("phrase", "borderRadiusRound", phrase.phrase2class, {
                  [styles.withoutAnswer]: !Boolean(phrase.phrase2),
                })}
                tabIndex={1}
                aria-label={phrase.phrase2}
                title={phrase.phrase2}
              >
                {phrase.phrase2}
              </div>
              <div className="shareLinks">
                <a href=""><div className="vk" tabIndex={1} title='поделиться вконтакте' target="_blank"></div></a>
                <a href={tgLink + linkToMain + text + phrase.phrase + phrase.phrase + phrase.answer + phrase.phrase2} title='поделиться в телеграмме' target="_blank"><div className="telegramm" tabIndex={1} title='поделиться в телеграме'></div></a>
                <a href=""><div className="odnoklassniki" tabIndex={1} title='поделиться в одноклассниках' target="_blank"></div></a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </FocusLock>
  );
};

export default PopUp;

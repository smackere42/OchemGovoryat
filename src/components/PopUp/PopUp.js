import classnames from "classnames/bind";
import phrases from "./phrases";
import styles from "./styles.module.scss";

const clx = classnames.bind(styles);

const PopUp = ({ index }) => {
  const creator = phrases[index];

  return (
    <div
			id="pop-container"
			className="popHide"
      role="alert"
		>
      <div className="pop-wrapper">
        <div id="pop-toggle" title="закрыть" tabIndex={0} />
        <div
          className={creator.class}
          title={creator.city}
          tabIndex={1}
          aria-label={creator.city}
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
                aria-lable={phrase.phrase}
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
              >
                {phrase.answer}
              </div>
              <div
                className={clx("phrase", "borderRadiusRound", phrase.phrase2class, {
                  [styles.withoutAnswer]: !Boolean(phrase.phrase2),
                })}
                tabIndex={1}
                aria-label={phrase.phrase2}
              >
                {phrase.phrase2}
              </div>
              <div className="shareLinks">
                <a><div className="vk" tabIndex={1} title='поделиться вконтакте'></div></a>
                <a><div className="telegramm" tabIndex={1} title='поделиться в телеграме'></div></a>
                <a><div className="odnoklassniki" tabIndex={1} title='поделиться в одноклассниках'></div></a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopUp;

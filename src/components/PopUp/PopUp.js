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
		>
      <div className="pop-wrapper">
        <div id="pop-toggle" title="закрыть" tabIndex={0} />
        <div
          className={creator.class}
          title=""
          tabIndex={1}
          aria-label={creator.city}
        >
          {creator.city}
        </div>
        <div className={styles.phrasesWrapper}>
          {creator.phrases.map((phrase) => (
            <div className={styles.phraseContainer}>
              <p tabIndex={1} aria-label={phrase.place}>
                {phrase.place}
              </p>
              <div
                className={clx(phrase.class, "yellowb", "phrase", "bld", {
                  [styles.phraseWithAnswer]: Boolean(phrase.answer),
                })}
                tabIndex={1}
                aria-lable={phrase.phrase}
              >
                {phrase.phrase}
              </div>
              <div
                className={clx(
                  phrase.class,
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
                className={clx("phrase", "bld", phrase.phrase2, {
                  [styles.withoutAnswer]: !Boolean(phrase.phrase2),
                })}
                tabIndex={1}
                aria-label={phrase.phrase2}
              >
                {phrase.phrase2}
              </div>
              <div className="shareLinks">
                <a><div className="vk"></div></a>
                <a><div className="telegramm"></div></a>
                <a><div className="odnoklassniki"></div></a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopUp;

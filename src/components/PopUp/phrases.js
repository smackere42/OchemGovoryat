const borders = ['borderRafiusLeftDown', 'borderRadisLeftUp', 'borderRadiusRightUp', 'borderRadiusRightDown', 'borderRadisRound'];
const colors = ['pinkbg', 'seabg', 'bluebg', 'yellowbg' ]

const phrases = [{
    city: 'Москва',
    class: 'city bluebg borderRadiusRightDown',
    phrases: [
        {
            phrase: 'Ну, что, новогодние продержались! Еще Крещенье, а дальше - просто жизнь!',
            place: 'Метро «Войковская»',
            class: 'yellowbg',
            labelpos: '',
        },
        {
            phrase: 'Ты что, собрался наследить в истории?',
            place: 'Метро «Площадь революции»',
            class: 'pinkbg',
            labelpos: '',
        },
        {
            phrase: 'Сейчас бы снова отъесть бока, и как 10 лет назад к тебе в спортзал, чтобы заново в тебя влюбиться',
            place: 'Метро «Белорусская»',
            class: 'seabg',
            labelpos: '',
        },
        {
            phrase: 'Гендер Сюрприз - всегда дарит радость!',
            place: 'У метро «Юго-Западная»',
            class: 'bluebg',
            labelpos: '',
        },
        {
            phrase: 'Ты был прав, назвав меня незнакомкой',
            place: 'Люблино',
            class: 'yellowbg',
            labelpos: '',
        },
        {
            phrase: 'Недопытали',
            place: 'Детская стоматологическая поликлиника в районе Чертаново',
            class: 'pinkbg',
            labelpos: '',
        },
        {
            phrase: 'Обожду покаместь, любезный...',
            place: 'Метро «Китай-город»',
            class: 'bluebg',
            labelpos: 'seabg',
        },
        {
            phrase: 'Теперь я хочу в твою голову залесть и послушать',
            place: 'Общежитие',
            class: 'yellowbg',
            labelpos: '',
        },
        {
            phrase: 'Если не сейчас, то и не потом, если не потом, то уж когда-нибудь',
            place: 'Улица 1905 года',
            class: 'pinkbg',
            labelpos: '',
        },
        {
            phrase: 'Ой я не помню как чай назывется, но у него такая упаковка, ну вот цвет, как обои на стенах',
            place: 'Метро «Комсомольская»',
            class: 'seabg',
            labelpos: '',
        },
        {
            phrase: 'Что бы почувствовать себя счастливым, нажно снять лапшу с ушей',
            place: 'Красная Площадь',
            class: 'bluebg',
            labelpos: '',
        },
        {
            phrase: 'Он невысокий, но аккуратно невысокий',
            place: 'Рижская застава',
            class: 'yellowbg',
            labelpos: '',
        },
        {
            phrase: 'Сидит сейчас в небесной канцелярии новый начальник отдела московской погоды, пьёт чай и мысленно себя хвалит: успел. Успел к началу зимы разложить снег. Global warming, my ass.',
            place: 'На Плющихе',
            class: 'pinkbg',
            labelpos: '',
        },
        {
            phrase: 'Меня укусила муха-трудоголичка',
            place: 'Полярная улица, дом 54, корпус 1',
            class: 'seabg',
            labelpos: '',
        },
        {
            phrase: 'Ухожу в астрал, потому что я устал.',
            place: 'Дом',
            class: 'bluebg',
            labelpos: '',
        },
        {
            phrase: 'Самое страшное во взрослой жизни - это же придётся платить по счетам, общаться с ЖКХ!',
            place: 'На улице возле школы',
            class: 'yellowbg',
            labelpos: '',
        },
        {
            phrase: 'Самые длинные разговоры только о любви',
            place: 'МГУ',
            class: 'pinkbg',
            labelpos: '',
        },
        {
            phrase: 'Красота не требует жертв',
            place: 'Красная площадь',
            class: 'seabg',
            labelpos: '',
        },
        {
            phrase: 'Счастье-делает нас красивыми',
            place: 'Кофейня Starbacks',
            class: 'bluebg',
            labelpos: '',
        },
        {
            phrase: 'Беги беги, моя уродинка',
            place: 'Политехнический',
            class: 'yellowbg',
            labelpos: '',
        },
    ],
},{
    city: 'Санкт-Петербург',
    class: 'city yellowbg borderRadiusRightDown',
    phrases: [
        {
            phrase: 'Для тебя - хоть русалку на шпагат',
            place: 'Кафе на Ломоносовской',
            class: 'pinkbg',
            labelpos: '',
        },
        {
            phrase: 'Все как хочешь.',
            place: 'Востания',
            class: 'seabg',
            labelpos: '',
        },
        {
            phrase: '— Я ног не чувствую, я устала',
            place: 'На остановке «Улица Оптиков дом 52»',
            class: 'bluebg',
            answer: '— Что? Ты ноготь чистый? Ты русала?',
            answerclass: 'yellowbg',
        },
        {
            phrase: '— Почему горелым пахнет?',
            place: 'Политехнический университет',
            class: 'pinkbg',
            answer: '— Это я перегорела',
            answerclass: 'seabg',
            labelpos: '',
        },
        {
            phrase: 'Время летит, как чайка за хлебом',
            place: 'Невский проспект',
            class: 'bluebg',
            labelpos: '',
        },
        {
            phrase: 'Командовать в доме должен кто-то ОДНА',
            place: 'Метро «Новочеркасская»',
            class: 'yellowbg',
            labelpos: '',
        }
    ],
},{
    city: 'Барнаул',
    class: 'city bluebg borderRadiusLeftUp',
    phrases: [{
        phrase: 'На что способна эта госпожа-эволюция?',
        place: 'На лекции',
        class: 'pinkbg',
        labelpos: '',
    }],
},{
    city: 'Белгород',
    class: 'city bluebg borderRadiusLeftUp',
    phrases: [{
        phrase: 'А я вот вчера видел в озере рыбу-молот',
        place: 'Дом Культуры',
        class: 'pinkbg',
        labelpos: '',
    }
    ],
},{
    city: 'Великий Новгород',
    class: 'city pinkbg borderRadiusRightUp',
    phrases: [
        {
            phrase: 'Последней пары не будет',
            place: 'ПТК НовГУ',
            class: 'seabg',
            labelpos: '',
        },
        {
            phrase: 'Потомок - это тот, кто делает всё потом',
            place: 'На улице',
            class: 'bluebg',
            labelpos: '',
        }
    ],
},{
    city: 'Владивосток',
    class: 'city seabg borderRadiusLeftDown',
    phrases: [
    {
        phrase: 'Человек лучше, чем сумма его недостатков',
        place: 'Книжный магазин',
        class: 'bluebg',
        labelpos: '',
    },
    {
        phrase: 'Кажется книга знает больше чем я',
        place: 'Отель «Версаль»',
        class: 'yellowbg',
        labelpos: '',
    }],
},{
    city: 'Воронеж',
    class: 'city yellowbg borderRadiusRound',
    phrases: [{
        phrase: 'Я тебя люблю как Крупская Ленина',
        place: 'ТЦ «Максимир»',
        class: 'pinkbg',
        labelpos: '',
    }],
},{
    city: 'Дзержинск',
    class: 'city pinkbg borderRadiusLeftUp',
    phrases: [
    {
        phrase: 'Мне не хватает какого-нибудь клоуна в жизни',
        place: 'В автобусе',
        class: 'seabg',
        labelpos: '',
    },
    {
        phrase: 'Я надеюсь, что вся энергия дочери выльется на котов. В конце концов, я их кормлю, я даю им дом, так что это их работа - развлекать ребёнка.',
        place: 'На детской площадке',
        class: 'bluebg',
        labelpos: '',
    },
    {
        phrase: 'Я, как и вы, раб школьных занятий, так что не стоит так удивляться моему опозданию, вызванному слишком медленной скоростью',
        place: 'Школа',
        class: 'yellowbg',
        labelpos: '',
    }],
},{
    city: 'Дудинка',
    class: 'city bluebg borderRadiusLeftUp',
    phrases: [{
        phrase: 'У меня ресницы слиплись от увиденного!',
        place: 'Школа 2 «Дудинская гимназия»',
        class: 'yellowbg',
        labelpos: '',
    }],
},{
    city: 'Екатеринбург',
    class: 'city pinkbg borderRadiusRightUp',
    phrases: [
        {
            phrase: 'Какие вы согласительные',
            place: 'АЗС «Газпром»',
            class: 'seabg',
            labelpos: '',
        },
        {
            phrase: 'Я устоявшаяся личность, пойду возьму конфетку',
            place: 'Здание бывшего кинотеатра Салют»',
            class: 'bluebg',
            labelpos: '',
        }
    ],
},{
    city: 'Железногорск',
    class: 'city pinkbg borderRadiusRightDown',
    phrases: [{
        phrase: 'Если это твои глаза такие голубые, а не линзы, то я готов в них утонуть',
        place: 'Площадь перед администрацией города',
        class: 'seabg',
        labelpos: '',
    }],
},{
    city: 'Казань',
    class: 'city seabg borderRadiusLeftUp',
    phrases: [
    {
        phrase: 'Плата за индивидуальность — одиночество',
        place: 'Метро «Амьево»',
        class: 'bluebg',
        labelpos: '',
    },
    {
        phrase: 'Не живите ожиданиями',
        place: 'Автобус',
        class: 'yellowbg',
        labelpos: '',
    }],
},{
    city: 'Калуга',
    class: 'city yellowbg borderRadiusRightUp',
    phrases: [{
        phrase: 'Точка кипения настолько горяча сейчас',
        place: 'Антикафе',
        class: 'pinkbg',
        labelpos: '',
    }],
},{
    city: "Камышлов",
    class: 'city pinkbg borderRadiusLeftDown',
    phrases: [{
        phrase: "Ах вы stupid'ы!",
        place: 'Общежитие педагогического колледжа',
        class: 'seabg',
        labelpos: '',
    }],
},{
    city: 'Краснодар',
    class: 'city bluebg borderRadiusRound',
    phrases: [
    {
        phrase: 'Гуси крались быстро',
        place: 'ТЦ Галереяс',
        class: 'yellowbg',
        labelpos: '',
    },
    {
        phrase: 'Караван лает , собаки идут',
        place: 'Улица Горная, дом 13А',
        class: 'pinkbg',
        labelpos: '',
    }],
},{
    city: 'Красноярск',
    class: 'city bluebg borderRadiusLeftUp',
    phrases: [{
        phrase: 'Мы делаем все и со всеми, чего бы ты не хотел',
        place: 'В автобусе №14',
        class: 'yellowbg',
        labelpos: '',
    },{
        phrase: 'Я — человек с сердцем, которое занимает всю площадь моего организма, конечно же',
        place: 'У городских часов',
        class: 'pinkbg',
        labelpos: '',
    }],
},{
    city: 'Курган',
    class: 'city yellowbg borderRadiusRound',
    phrases: [{
        phrase: 'Я у нее на стене увидела, прочитала и все.  Я теперь когда такой контент вижу, сразу пролистываю',
        place: 'Раздевалка на катке',
        class: 'pinkbg',
        labelpos: '',
    },{
        phrase: 'Мишка, мы существуем. Чувствуешь? ',
        place: 'Курган	Курганский государственный университет',
        class: 'seabg',
        labelpos: '',
    }],
},{
    city: 'Кюсюр',
    class: 'city bluebg borderRadiusRightDown',
    phrases: [{
        phrase: 'Плыви по лене своей дальше',
        place: 'Клуб «Ровестник»',
        class: 'yellowbg',
        labelpos: '',
    }],
},{
    city: 'Липецк',
    class: 'city bluebg borderRadiusRound',
    phrases: [{
        phrase: 'Пельмени спасут мир',
        place: 'Общежитие ЛГТУ',
        class: 'yellowbg',
        labelpos: '',
    }],
},{
    city: 'Магадан',
    class: 'city pinkbg borderRadiusRightDown',
    phrases: [{
        phrase: 'Лучше колымить на Гондурасе, чем гондурасить на Колыме…',
        place: 'Аэропорт',
        class: 'seabg',
        labelpos: '',
    }],
},{
    city: 'Минск',
    class: 'city',
    phrases: [
    {
        phrase: 'Опоздал — не спеши',
        place: 'Общежитие на Борисовском тракте',
        class: '',
        labelpos: '',
    },
    {
        phrase: 'Самые длинные разговоры только о любви',
        place: 'ТЦ «Столица»',
        class: '',
        labelpos: '',
    }],
},{
    city: 'Кировск',
    class: 'city seabg borderRadiusRound',
    phrases: [
    {
        phrase: 'Вы не подумайте у меня не сто тысяч рублей подоходного налога в месяц , у меня сто тысяч в год.  Да, мы так и поняли, считать умеем.',
        place: 'В университете',
        class: 'bluebg',
        labelpos: '',
    }],
},{
    city: 'Нижневартовск',
    class: 'city yellowbg borderRadiusRightDown',
    phrases: [{
        phrase: 'Было так здорово, что чуть сердце из груди не выпрыгнуло',
        place: 'Площадь Нефтяников',
        class: 'pinkbg',
        labelpos: '',
    }],
},{
    city: 'Нижний-Новгород',
    class: 'city seabg borderRadiusLeftDown',
    phrases: [{
        phrase: 'Если собрались наследить в истории - выбирайте обувь!',
        place: 'Улица Веденяпина',
        class: 'bluebg',
        labelpos: '',
    }],
},{
    city: 'Омск',
    class: 'city seabg borderRadiusLeftDown',
    phrases: [
    {
        phrase: 'Прям бровью режешь мою совесть',
        place: 'Гимназия №146',
        class: 'bluebg',
        labelpos: '',
    },
    {
        phrase: 'Мария Михайловна, я уже опаздываю на восьминар! Ооой, то есть семинар!',
        place: 'Автобус',
        class: 'yellowbg',
        labelpos: '',
    }],
},{
    city: 'Пензенская область р.п Земетчино',
    class: 'city seabg borderRadiusRound',
    phrases: [{
        phrase: 'Весь мир кастрюля, а ты в нем рисинка',
        place: 'Торговый центр «Апельсин»',
        class: 'pinkbg',
        labelpos: '',
    }],
},{
    city: 'Переславль-Залесский',
    class: 'city yellowbg borderRadiusLeftDown',
    phrases: [{
        phrase: 'Всё, что будет происходить с вами- это не простое совпадение.',
        place: 'Народная площадь',
        class: 'pinkbg',
        labelpos: '',
    }],
},{
    city: 'Ростов-на-Дону',
    class: 'city seabg borderRadiusLeftUp',
    phrases: [
    {
        phrase: 'Ели вы грустите - не грустите!',
        place: 'Офис РРДМОО «Содружество детей и молодежи Дона»',
        class: 'bluebg',
        labelpos: '',
    },
    {
        phrase: 'Коварная, однако, штука, этот ваш сипипыл-дипипыл',
        place: 'Проспект имени М. Нагибина, 32/2',
        class: 'yellowbg',
        labelpos: '',
    }],
},{
    city: 'Рубцовск',
    class: 'city pinkbg borderRadiusLeftUp',
    phrases: [{
        phrase: 'Копай здесь, а я пока узнаю где надо',
        place: 'остановка общественного транспорта «Сквер»',
        class: 'seabg',
        labelpos: '',
    }],
},{
    city: 'Рязани нет',
    class: 'city',
    phrases: [{
        phrase: 'Мамочка, а почему мир раньше был чёрно-белый?',
        place: 'ЦПКИО',
        class: '',
        labelpos: '',
    }],
},{
    city: 'Сахалин',
    class: 'city bluebg borderRadiusLeftDown',
    phrases: [{
        phrase: 'Лучше чем надо — лучше не надо',
        place: 'Завод РК имени Кирова',
        class: 'yellowbg',
        labelpos: '',
    }],
},{
    city: 'Симферополь',
    class: 'city pinkbg borderRadiusRightDown',
    phrases: [{
        phrase: 'История циклична: матриархат вернётся',
        place: 'Автобусная остановка ТНУ',
        class: 'seabg',
        labelpos: '',
    }],
},{
    city: 'Смоленск',
    class: 'city seabg borderRadiusRound',
    phrases: [{
        phrase: '— Здрасьте, пограничный контроль! ',
        place: 'Вокзал центральный',
        class: 'bluebg',
        answer: '— Я ничего не сделал!!',
        answerclass: 'yellowbg',
        labelpos: '',
     }],
},{
    city: 'Сосновый бор',
    class: 'city seabg borderRadiusRound',
    phrases: [{
        phrase: 'Да вас милый по пальщам пересчитать',
        place: 'На остановке',
        class: 'bluebg',
        labelpos: '',
    }],
},{
    city: 'Стерлитамак',
    class: 'city seabg borderRadiusLeftUp',
    phrases: [{
        phrase: 'Гагарин долетался, а ты договоришься',
        place: 'На автобусной остановке',
        class: 'bluebg',
        labelpos: '',
    }],
},{
    city: 'Сызрань',
    class: 'city yellowbg borderRadiusRound',
    phrases: [{
        phrase: 'Старый организм как машина, лечишь одну болезнь, появляются новые две',
        place: 'Электричка',
        class: 'pinkbg',
        labelpos: '',
    }],
},{
    city: 'Таганрог',
    class: 'city yellowbg borderRadiusRound',
    phrases: [{
        phrase: 'На мне мурашки не бегают, а организованными колоннами по двое не спеша покидают тело, согласно плану эвакуации',
        place: 'Таганрогский авиационный колледж им. Петлякова',
        labelpos: '',
        class: 'pinkbg',
    }],
},{
    city: 'Томск',
    class: 'city yellowbg borderRadiusRound',
    phrases: [{
        phrase: 'Завтра посмотришь на прошлое сверху.',
        place: 'Остановка ТЮЗ',
        class: 'pinkbg',
        labelpos: '',
    }],
},{
    city: 'Туапсе',
    class: 'city yellowbg borderRadiusRightUp',
    phrases: [{
        phrase: 'Меня безукаризненно поражает ваше безчувственное нахальство молодой вы человек. Мы таких поступков в наше время себе не позволяли милый!',
        place: 'Средняя школа',
        class: 'pinkbg',
        labelpos: '',
    }],
},{
    city: 'Тюмень',
    class: 'city bluebg borderRadiusRound',
    phrases: [
    {
        phrase: 'НикогдА не говори «нЕкогда»',
        place: 'ГАОУ ТО ФМШ',
        class: 'yellowbg',
        labelpos: '',
    },
    {
        phrase: 'Разочарование со вкусом успехa',
        place: 'Автобус',
        class: 'pinkbg',
        labelpos: '',
    }],
},{
    city: 'Урюпинск',
    class: 'city pinkbg borderRadiusRound',
    phrases: [{
        phrase: 'Ты либо тут, либо там, а не туда сюда',
        place: 'Улица Доценко, дом 10А',
        class: 'seabg',
        labelpos: '',
    }],
},{
    city: 'Хабаровск',
    class: 'city yellowbg borderRadiusRightDown',
    phrases: [{
        phrase: 'Нетривиальная задач по работе с моим узким профилем',
        place: 'Школа',
        class: 'pinkbg',
        labelpos: '',
    }],
},{
    city: 'Черепаново',
    class: 'city seabg borderRadiusLeftDown',
    phrases: [{
        phrase: 'У меня сверниголовая идея',
        place: 'Детский дом творчества',
        class: 'blubg',
        labelpos: '',
    }],
},{
    city: 'Чита',
    class: 'city seabg borderRadiusLeftDown',
    phrases: [
    {
        phrase: 'Айда на каток, катище, каташонок',
        place: 'Мегаполис-спорт',
        class: 'bluebg',
        labelpos: '',
    },
    {
        phrase: 'Это полный предел кислородного купола',
        place: 'Выстовочная улица',
        class: 'yellowbg',
        labelpos: '',
    }],
},{
    city: 'Саратов',
    class: 'city bluebg borderRadiusRound',
    phrases: [{
        phrase: 'Вот это поворот, давай наоборот',
        place: 'Площадь у городского цирка',
        class: 'yellowbg',
        labelpos: '',
    },{
        phrase: 'Весна, жизнь расцветает, радости в жизни становится больше',
        place: 'Аграрный университет',
        class: 'pinkbg',
        labelpos: '',
    }],
},{
    city: 'Эгвекинот',
    class: 'city yellowbg borderRadiusLeftDown',
    phrases: [{
        phrase: 'Вот так и не поймешь, когда не знаешь как жить на самом вотоке',
        place: 'Дом Культуры',
        class: 'pinkbg',
        labelpos: '',
    }],
},{
    city: 'Якутск',
    class: 'city yellowbg borderRadiusRightDown',
    phrases: [{
        phrase: 'Кажется я больше не Саха',
        place: 'Аэропорт',
        class: 'pinkbg',
        labelpos: '',
    }],
},{
    city: 'Брянск',
    class: 'city pinkbg borderRadiusRightUp',
    phrases: [{
        phrase: 'Школа вам не жизнь — это рай для отличника!',
        place: 'Школа',
        class: 'seabg',
        labelpos: '',
    }],
},{
    city: 'Новосибирск',
    class: 'city yellowbg borderRadiusRightUp',
    phrases: [{
        phrase: '— Я смотрю в небо, и знаешь что?',
        place: 'Школа',
        class: 'pinkbg',
        answer: '—  Что? ',
        answerclass: 'seabg',
        phrase2: '— Его вижу в каждом облаке.',
        phrase2class: 'bluebg',
        labelpos: '',
    },{
        phrase: 'О —  осознанность! Приди ко мнеи дай мне осознание, чтобы сегодня получить пятерку',
        place: 'Экономический лицей',
        class: 'yellowbg',
        labelpos: '',
    }],
},{
    city: 'Ижевск',
    class: 'city bluebg borderRadiusLeftDown',
    phrases: [{
        phrase: 'Не хочу двойку по-алгебре, по геометрии ставьте, а то дома не поймут!',
        place: 'Школа',
        class: 'yellowbg',
        labelpos: '',
    }],
},{
    city: 'Архангельск',
    class: 'city bluebg borderRadiusRightDown',
    phrases: [{
        phrase: 'Плачу, от сильной любви',
        place: 'Морской кадетский корпус',
        class: 'yellowbg',
        labelpos: '',
    }],
},{
    city: 'Астрахань',
    class: 'city yellowbg borderRadiusLeftUp',
    phrases: [{
        phrase: 'Витя, ну какой же это подвиг. Снова тройка. А ты бы хоть раз четверку получил у меня на уроке',
        place: 'Школа №55',
        class: 'pinkbg',
        labelpos: '',
    }],
},{
    city: 'Волгоград',
    class: 'city yellowbg borderRadiusRound',
    phrases: [{
        phrase: 'Бонджорно, юный деятель! Пора приблизить тебя к прекрасному.',
        place: 'Музей изобразительных искусств',
        class: 'pinkbg',
        labelpos: '',
    },{
        phrase: 'Ну все, я опаздываю. Мне на вторую пятилетку успеть нужно',
        place: 'Кооперативный институт',
        class: 'seabg',
        labelpos: '',
    }],
},{
    city: 'Ленск',
    class: 'city bluebg borderRadiusLeftDown',
    phrases: [{
        phrase: 'Твой глаз Витенька, не алмаз, твой глаз бриллиант. Нет, изумруд, он же зеленый!',
        place: 'Вечерняя школа',
        class: 'yellowbg',
        labelpos: '',
    }],
},{
    city: 'Уфа',
    class: 'city yellowbg borderRadiusRound',
    phrases: [{
        phrase: 'Возле меня махнула хвостом хоть какая-то живность, мало-мальски напоминающая рыбу',
        place: 'Национальный музей',
        class: 'pinkbg',
        labelpos: '',
    }],
},{
    city: 'Иркутск',
    class: 'city yellowbg borderRadiusLeftDown',
    phrases: [{
        phrase: '— Какой ответ в этом примере?',
        place: 'Школа',
        class: 'pinkbg',
        answer: '— Там же два',
        answerclass: 'seabg',
        phrase2: '— Два — это товя оценка по математике!',
        phrase2class: 'bluebg',
        labelpos: '',
    },
    {
        phrase: 'А ну-ка спрятался, и дал шанс подумать каждому',
        place: 'Школа №26',
        class: 'yellowbg',
        labelpos: '',
    }],
},{
    city: 'Оренбург',
    class: 'city yelllowbg borderRadiusLeftUp',
    phrases: [{
        phrase: 'И мы были настолько уничтожены и переиграны, что переиграли сами себя',
        place: 'Школа №41',
        class: 'pinkbg',
        labelpos: '',
    }],
},{
    city: 'Норильск',
    class: 'city pinkbg borderRadiusLeftDown',
    phrases: [{
        phrase: 'Да если бы я знакла, что мне уроков столько делать. Да это как на санях до Самары. Я же каждые выходные в 6 утра, туда и обратно!',
        place: 'Гимназия №4',
        class: 'seabg',
        labelpos: '',
    }],
},{
    city: 'Воркута',
    class: 'city seabg borderRadiusLeftUp',
    phrases: [{
        phrase: 'Так всегда веселее. Так всегда проще — человек это существо социальное',
        place: 'Политехнически техникум',
        class: 'bluebg',
        labelpos: '',
    }],
},{
    city: 'Вилюйск',
    class: 'city seabg borderRadiusRightDown',
    phrases: [{
        phrase: 'Развиваться надо уметь, как Толстой, как Лермонтов, вон, как я например! ',
        place: 'Педагогический колледж имени Н.Г.Чернышевского',
        class: 'bluebg',
        labelpos: '',
    }],
}];

export default phrases;
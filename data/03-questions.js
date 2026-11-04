BOOK.push({ n: 3, id: 'questions', title: 'Вопросы',
intro: 'Как задать вопрос по-английски: вопросительные слова, порядок слов и вспомогательные глаголы. Раздел опирается на времена из раздела 2: вопросы строятся с помощью <i>do / does / did</i> и глагола <i>to be</i>.',
topics: [

{ id: 'qs-wh', level: 'A1', title: 'Вопросительные слова', sub: 'what, who, where, when, why, how',
  rule: `
<p>Вопросительные слова ставятся в самое начало вопроса и показывают, что именно мы хотим узнать: кто, что, где, когда, почему или как. Почти все они начинаются с <i>wh-</i>, поэтому такие вопросы часто называют wh-вопросами. Исключение одно — слово <i>how</i> («как»), но строится вопрос с ним точно так же.</p>
${T(["Слово", "Перевод", "О чем спрашиваем", "Пример"], [
  ["<i><b>what</b></i>", "что, какой", "предмет, действие", "<i><b>What</b> is your name?</i> — Как тебя зовут?"],
  ["<i><b>who</b></i>", "кто", "человек", "<i><b>Who</b> is that girl?</i> — Кто эта девочка?"],
  ["<i><b>where</b></i>", "где, куда", "место", "<i><b>Where</b> do you live?</i> — Где ты живешь?"],
  ["<i><b>when</b></i>", "когда", "время", "<i><b>When</b> is your birthday?</i> — Когда у тебя день рождения?"],
  ["<i><b>why</b></i>", "почему, зачем", "причина", "<i><b>Why</b> are you sad?</i> — Почему ты грустишь?"],
  ["<i><b>how</b></i>", "как", "способ, состояние", "<i><b>How</b> do you get to school?</i> — Как ты добираешься до школы?"],
  ["<i><b>which</b></i>", "который, какой из", "выбор из нескольких", "<i><b>Which</b> bag is yours: the red one or the blue one?</i> — Какая сумка твоя: красная или синяя?"],
  ["<i><b>whose</b></i>", "чей", "владелец", "<i><b>Whose</b> phone is this?</i> — Чей это телефон?"]
])}
<p>В примере с <i>which</i> слово <i>one</i> заменяет уже названное существительное, чтобы не повторять его: <i>the red <b>one</b></i> = <i>the red bag</i> — красная (сумка).</p>
<p>Некоторые слова образуют устойчивые сочетания. Их удобно запомнить целиком, как готовые вопросы:</p>
${T(["Сочетание", "Перевод", "Пример"], [
  ["<i><b>what time</b></i>", "во сколько, который час", "<i><b>What time</b> does the film start?</i> — Во сколько начинается фильм?"],
  ["<i><b>what colour / what kind of</b></i>", "какого цвета / какой (вид)", "<i><b>What colour</b> is your car? <b>What kind of</b> music do you like?</i> — Какого цвета твоя машина? Какую музыку ты любишь?"],
  ["<i><b>how old</b></i>", "сколько лет", "<i><b>How old</b> is your brother?</i> — Сколько лет твоему брату?"],
  ["<i><b>how much</b></i>", "сколько стоит; сколько чего-то, что не считают штуками (денег, воды, времени)", "<i><b>How much</b> is this bag?</i> — Сколько стоит эта сумка?"],
  ["<i><b>how many</b></i>", "сколько (штук)", "<i><b>How many</b> brothers do you have?</i> — Сколько у тебя братьев?"],
  ["<i><b>how often</b></i>", "как часто", "<i><b>How often</b> do you go to the gym?</i> — Как часто ты ходишь в спортзал?"],
  ["<i><b>how far</b></i>", "как далеко", "<i><b>How far</b> is the station?</i> — Далеко до вокзала?"],
  ["<i><b>how long</b></i>", "какой длины, сколько длится", "<i><b>How long</b> is the lesson?</i> — Сколько длится урок?"]
])}
<h3>Как построить вопрос</h3>
<p>Порядок слов такой же, как в вопросах из тем 2.1 и 2.2: вспомогательный глагол стоит перед подлежащим, а вопросительное слово — перед вспомогательным глаголом. В отрицательном вопросе к <i>do / does / did</i> добавляется <i>n't</i>: <i>Why <b>didn't</b> you come?</i> — почему ты не пришел?</p>
${F("Вопросительное слово + <b>do / does / did</b> + подлежащее + глагол")}
${F("Вопросительное слово + <b>am / is / are / was / were</b> + подлежащее")}
${E([
  ["Where <b>do</b> they <b>work</b>?", "Где они работают?"],
  ["What <b>does</b> she <b>do</b>?", "Чем она занимается?"],
  ["When <b>did</b> they <b>arrive</b>?", "Когда они приехали?"],
  ["Why <b>are</b> you late?", "Почему ты опоздал?"],
  ["Where <b>was</b> he yesterday?", "Где он был вчера?"]
])}
<h3>Вопрос к подлежащему</h3>
<p>Если <i>who</i> или <i>what</i> спрашивают о том, кто или что совершает действие, то есть само слово и есть подлежащее, вспомогательный глагол не нужен. Порядок слов при этом остается таким же, как в обычном утверждении, а глагол в настоящем времени получает окончание <i>-s</i>, как после <i>he / she</i>.</p>
${E([
  ["<b>Who lives</b> here?", "Кто здесь живет? (кто — подлежащее)"],
  ["<b>Who called</b> you?", "Кто тебе позвонил? (кто — подлежащее)"],
  ["Who <b>did</b> you <b>call</b>?", "Кому ты позвонил? (подлежащее — you)"],
  ["<b>What happened</b>?", "Что случилось?"]
])}
<h3>What или which</h3>
<p>Оба слова переводятся как «какой», но <i>which</i> используют, когда выбор идет из небольшого известного набора: из двух сумок, трех цветов, вот этих книг. А <i>what</i> подходит для открытого вопроса, когда вариантов может быть сколько угодно: <i>What music do you like?</i> Запомнить легко: <i>which</i> — это выбор.</p>
<p>В книгах встречается еще слово <i>whom</i> («кого», «кому»), но в разговоре вместо него говорят просто <i>who</i>: <i>Who did you see?</i> — кого ты видел?</p>
<h3>Предлог в конце вопроса</h3>
<p>В русском предлог стоит перед вопросительным словом: «с кем», «о чем», «из какой страны». В английском он обычно уходит в самый конец вопроса.</p>
${E([
  ["Where are you <b>from</b>?", "Откуда ты?"],
  ["Who did you go <b>with</b>?", "С кем ты ходил?"],
  ["What is the book <b>about</b>?", "О чем эта книга?"]
])}
${N("Когда спрашивают о точном времени по часам, чаще говорят <i><b>What time</b> does the train leave?</i> — во сколько отправляется поезд?, а <i>when</i> оставляют для более общего вопроса — в какой день, месяц или год.")}`,
  /* перевод слов в упражнениях: по наведению или касанию (gloss.js); ключи — в нижнем регистре, как слово стоит в тексте */
  gloss: {
    'sport': 'спорт',
    'bank': 'банк', 'cake': 'торт', 'cat': 'кошка', 'chocolate': 'шоколад', 'concert': 'концерт', 'favourite': 'любимый', 'friday': 'пятница', 'helped': 'помог', 'her': 'ее, ей', 'horse': 'лошадь', 'leaves': 'уходит, уезжает; листья', 'lemon': 'лимон', 'mum': 'мама', 'nine': 'девять', 'shop': 'магазин', 'three': 'три',
    'brother': 'брат', 'old': 'старый', 'how old': 'сколько лет', 'lesson': 'урок', 'sister': 'сестра', 'film': 'фильм', 'twice': 'дважды', 'week': 'неделя',
    'man': 'мужчина', 'umbrella': 'зонт', 'bag': 'сумка', 'blue': 'синий, голубой', 'uncle': 'дядя', 'is that': 'это (вон то)?',
    "it's": 'это (= it is)', 'i': 'я', 'he': 'он', 'she': 'она', 'it': 'это; он, она (о предмете)', 'they': 'они', 'my': 'мой, моя, мое',
    'is': 'есть, является (форма to be)', 'are': 'есть (форма to be)', 'go': 'идти, ехать', 'the': 'определенный артикль',
    'at': 'в (о времени); у, на (о месте)', 'in': 'в', 'what': 'что, какой', 'that': 'тот, та, то; что (союз)', 'london': 'Лондон',
    'go to': 'ходить в, идти в', 'a': 'неопределенный артикль', 'dog': 'собака', 'very': 'очень', 'red': 'красный',
    'this': 'этот, эта, это', 'aunt': 'тетя', 'moscow': 'Москва', 'on': 'на; в (о днях)', 'day': 'день',
    'of': 'предлог родительного падежа', 'girl': 'девочка, девушка', 'live': 'жить', 'who': 'кто', 'boy': 'мальчик', 'and': 'и',
    'two': 'два', 'every': 'каждый', 'year': 'год', 'birthday': 'день рождения', 'buy': 'купить', 'for': 'для; в течение',
    'see': 'увидеть', 'mother': 'мама', 'to': 'в, на (куда); частица перед глаголом', 'there': 'там, туда', 'table': 'стол',
    'why': 'почему', 'cold': 'холодный; холодно', 'your': 'твой, ваш', 'where': 'где, куда', 'ten': 'десять', 'yesterday': 'вчера',
    'by': 'на (о транспорте); к (о сроке)', 'by bus': 'на автобусе', 'seven': 'семь', 'school': 'школа', 'bus': 'автобус',
    'home': 'дом; домой', 'often': 'часто', 'father': 'отец', 'now': 'сейчас', 'with': 'с', 'me': 'меня, мне',
    'do': 'делать; вспомогательный глагол', 'from': 'из, от', 'want': 'хотеть', 'come': 'приходить', 'you': 'ты, вы',
    'parents': 'родители', 'yours': 'твой, ваш', 'how': 'как', 'kazan': 'Казань', 'last': 'прошлый', 'late': 'поздно',
    'party': 'вечеринка', 'saturday': 'суббота', 'twelve': 'двенадцать', 'were': 'были (форма to be)', 'when': 'когда',
    'every day': 'каждый день', 'time': 'время', 'did': 'вспомогательный глагол прошедшего времени', 'eight': 'восемь', 'keys': 'ключи',
    'work': 'работа; работать', 'here': 'здесь, сюда', "i'm": 'я (= I am)', 'one': 'один', 'close': 'закрыть; близко', 'grandmother': 'бабушка',
    'may': 'май', 'or': 'или', 'hi': 'привет', 'away': 'прочь; five minutes away — в пяти минутах (отсюда)', 'night': 'ночь', 'was': 'был (форма to be)', "aren't": 'не (= are not)',
    'called': 'позвонил (от call)', 'five': 'пять', 'because': 'потому что', 'play': 'играть', 'last year': 'в прошлом году',
    'got': 'получил; добрался (от get)', 'get': 'добраться; получить', 'over': 'более, свыше', 'over there': 'вон там', 'minutes': 'минуты', 'about': 'о; около',
    'bags': 'сумки', 'does': 'делает; вспомогательный глагол', 'job': 'работа', 'just': 'только что; просто', 'little': 'маленький; мало',
    'lost': 'потерял; потерянный', 'market': 'рынок', 'minsk': 'Минск', 'name': 'имя', 'sad': 'грустный', "sister's": 'сестры (чей?)',
    'start': 'начинать', 'starts': 'начинается', 'tennis': 'теннис', 'these': 'эти'
  },
  ex: [
    { type: 'gap', task: 'Впишите вопросительное слово: what, who, where, when, why, how, which или whose.', items: [
      ["___ is your favourite sport? — Tennis.", "what"], ["___ does your aunt work? — In a bank.", "where"],
      ["___ is the concert? — On Friday.", "when"], ["___ is that man? — He is my uncle.", "who"],
      ["___ were you sad yesterday? — Because I lost my bag.", "why"], ["___ do you go to school? — By bus.", "how"],
      ["___ bag is this? — It's my sister's.", "whose"], ["___ cake do you want: the chocolate one or the lemon one?", "which"],
      ["___ time does the shop close? — At nine.", "what"], ["___ old is your cat? — She is three.", "how"],
      ["___ did you see at the party? — Tom and Kate.", "who|whom"], ["___ often do you play tennis? — Twice a week.", "how"]
    ]},
    { type: 'gap', task: 'Впишите do, does, did, is, are, was или were.', items: [
      ["Where ___ your parents work?", "do"], ["What ___ your sister do?", "does"],
      ["When ___ you come home yesterday?", "did"], ["Where ___ my keys? They aren't on the table.", "are"],
      ["Why ___ she late for the lesson yesterday?", "was"], ["Who ___ that girl with the red umbrella over there?", "is"],
      ["How ___ your father get to work every day?", "does"], ["What ___ he buy at the market last Saturday?", "did"],
      ["Where ___ you last night?", "were"], ["How old ___ your grandmother?", "is"]
    ]},
    { type: 'choice', task: 'Выберите правильно построенный вопрос.', items: [
      ["___? — In London.", ["Where does your sister work", "Where your sister works", "Where does your sister works"]],
      ["___? — Kate helped me.", ["Who helped you", "Who did help you", "Who did you help"]],
      ["___? — I helped my mum.", ["Who did you help", "Who helped you", "Who you helped"]],
      ["___? — It leaves at eight.", ["What time does the bus leave", "What time the bus leaves", "What time does the bus leaves"]],
      ["___? — Because it was cold.", ["Why did you close the window", "Why you closed the window", "Why did you closed the window"]],
      ["___? — It's about a girl and her horse.", ["What is the film about", "About what is the film", "What the film is about"]],
      ["___ of these two bags is yours?", ["Which", "What", "Who"]],
      ["___? — It's Kate's.", ["Whose umbrella is this", "Who umbrella is this", "Whose is umbrella this"]],
    ]},
    { type: 'text', task: 'Впишите в диалог вопросительные слова.', text: "— Hi! ___ is your name? — I'm Max. — ___ are you from? — I'm from Minsk. — ___ old are you? — I'm twelve. — ___ do you live now? — In Moscow, with my aunt. — ___ did you come to Moscow? — Last year. — ___ did you come here? — Because my mother got a job here. — ___ is your school? — Very close, just five minutes away.",
      answers: ["what", "where", "how", "where", "when", "why", "where"] },
    { type: 'translate', task: 'Переведите на английский.', items: [
      ["Куда ты ходил вчера?", "Where did you go yesterday?"],
      ["Когда начинаются каникулы?", "When do the holidays start?|When do the holidays begin?"],
      ["Кто живет в этом доме?", "Who lives in this house?"],
      ["Почему ты не позвонил мне?", "Why didn't you call me?|Why didn't you phone me?|Why didn't you ring me?"],
      ["Сколько тебе лет?", "How old are you?"],
      ["Во сколько начинается урок?", "What time does the lesson start?|What time does the lesson begin?"],
      ["Чьи это ключи?", "Whose keys are these?|Whose keys are those?|Whose are these keys?"],
    ]},
    { type: 'listen', at: 2, task: 'Прослушайте предложение и соберите его из слов.', items: [
      ["Where did you buy this beautiful scarf?", "Где ты купила этот красивый шарф?"],
      ["Who lives in that big house?", "Кто живет в том большом доме?"],
      ["What time does the last train leave?", "Во сколько отправляется последний поезд?"]
    ]}
  ]},

{ id: 'qs-tags', level: 'B1', title: 'Разделительные вопросы', sub: "It's cold, isn't it?",
  rule: `
<p>Разделительный вопрос — это обычное утверждение, к которому в конце добавлен короткий «хвостик». По-русски ему соответствуют слова «правда?», «не так ли?», «да?». С его помощью мы не столько спрашиваем, сколько просим собеседника подтвердить то, в чем почти уверены: <i>It's cold today, <b>isn't it</b>?</i> — сегодня холодно, правда?</p>
<p>Главное правило — «хвостик» всегда противоположен утверждению. Если утверждение положительное, «хвостик» отрицательный, а если утверждение отрицательное, «хвостик» положительный.</p>
${F("утверждение <b>+</b> &nbsp;→&nbsp; хвостик <b>−</b> &nbsp;·&nbsp; утверждение <b>−</b> &nbsp;→&nbsp; хвостик <b>+</b>")}
${E([
  ["You <b>are</b> busy, <b>aren't</b> you?", "Ты занят, да?"],
  ["You <b>aren't</b> busy, <b>are</b> you?", "Ты ведь не занят?"]
])}
<h3>Из чего состоит «хвостик»</h3>
<p>В «хвостик» входят два слова: вспомогательный глагол и местоимение. Глагол берется из самого утверждения: если там есть <i>be</i>, <i>will</i> или вспомогательный <i>have</i> (как в Present Perfect), повторяем его. А вот <i>have</i> в значении «иметь» ведет себя как обычный глагол: <i>You have a car, <b>don't you</b>?</i> Если же в утверждении только смысловой глагол в Present Simple или Past Simple, на помощь приходят <i>do / does / did</i> — так же, как при построении обычного вопроса. Подлежащее заменяется местоимением: <i>Tom</i> → <i>he</i>, <i>your parents</i> → <i>they</i>, <i>this film</i> → <i>it</i>.</p>
${T(["В утверждении", "Хвостик", "Пример"], [
  ["<i>is / are</i>", "<i>isn't / aren't</i>", "<i>She <b>is</b> a doctor, <b>isn't she</b>?</i> — Она ведь врач?"],
  ["<i>was / were</i>", "<i>wasn't / weren't</i>", "<i>They <b>were</b> at home, <b>weren't they</b>?</i> — Они были дома, да?"],
  ["Present Simple", "<i>don't / doesn't</i>", "<i>He <b>lives</b> here, <b>doesn't he</b>?</i> — Он живет здесь, правда?"],
  ["Past Simple", "<i>didn't</i>", "<i>You <b>called</b> her, <b>didn't you</b>?</i> — Ты ей звонил, да?"],
  ["Present Perfect", "<i>haven't / hasn't</i>", "<i>She <b>has</b> left, <b>hasn't she</b>?</i> — Она ведь ушла?"],
  ["<i>will</i>", "<i>won't</i>", "<i>It <b>will</b> rain, <b>won't it</b>?</i> — Пойдет дождь, да?"],
  ["Continuous", "<i>isn't / aren't / wasn't / weren't</i>", "<i>You <b>are</b> joking, <b>aren't you</b>?</i> — Ты ведь шутишь?"],
  ["<i>used to</i>", "<i>didn't</i>", "<i>You <b>used to</b> live here, <b>didn't you</b>?</i> — Ты ведь раньше жил здесь?"]
])}
<p>Будьте внимательны с сокращением <i>'s</i>: оно может означать и <i>is</i>, и <i>has</i>. Подсказку дает следующее слово: <i>He's been to London</i> = <i>he <b>has</b> been</i> → <i>hasn't he?</i>; <i>He's tired</i> = <i>he <b>is</b> tired</i> → <i>isn't he?</i></p>
<p>Так же строится «хвостик» с модальными глаголами (они разобраны в разделе 9): <i>She <b>can</b> swim, <b>can't she</b>?</i> — она ведь умеет плавать? А если утверждение начинается с <i>there is / there are</i>, в «хвостике» тоже остается <i>there</i>: <i>There is a bank near here, <b>isn't there</b>?</i> — здесь рядом есть банк, правда?</p>
<h3>Особые случаи</h3>
<p>Несколько «хвостиков» нужно просто запомнить. После <i>I am</i> по правилу должно было бы получиться <i>am I not</i>, но так говорят только в очень книжной речи, а в обычной — <i>aren't I</i>. Оборот <i>Let's</i> (сокращение от <i>let us</i>) значит «давай(те)», им предлагают сделать что-то вместе; к нему добавляют <i>shall we?</i> — давай?, хорошо? Здесь <i>shall</i> выражает предложение, а подробно этот глагол разобран в разделе 9 «Модальные глаголы». Если же предложение — это просьба или приказ без подлежащего (<i>Close the door</i> — закрой дверь), в «хвостике» ставят <i>will you?</i>, а еще вежливее — <i>would you?</i> или <i>could you?</i>: это смягчает приказ до просьбы. И наконец, слова <i>never</i> («никогда»), <i>nobody</i>, <i>nothing</i> сами делают утверждение отрицательным, хотя <i>not</i> в нем нет, поэтому «хвостик» будет положительным.</p>
${E([
  ["I'm late, <b>aren't I</b>?", "Я опоздал, да? (после I am; am I not — очень книжно, am not I — ошибка)"],
  ["Let's go, <b>shall we</b>?", "Пойдем, ладно? (после Let's)"],
  ["Close the door, <b>will you</b>?", "Закрой дверь, хорошо? (просьба)"],
  ["You <b>never</b> eat meat, <b>do</b> you?", "Ты ведь никогда не ешь мясо? (never)"]
])}
<h3>Как отвечать</h3>
<p>Отвечаем по сути дела, а не «в тон» вопросу: <i>yes</i> всегда идет с положительным ответом (<i>Yes, I am</i>), <i>no</i> — с отрицательным (<i>No, I'm not</i>). Здесь русские часто ошибаются, потому что по-русски на «Ты ведь не голоден?» можно ответить «Да, не голоден». По-английски так нельзя: <i>— You aren't hungry, are you? — <b>No, I'm not</b>.</i> (не голоден) или <i><b>Yes, I am</b>.</i> (голоден).</p>
${N("Частая ошибка — ставить <i>isn't it?</i> после любого утверждения, как русское «не так ли?». Правильно подбирать глагол по утверждению: <i>You like tea, <b>don't you</b>?</i>, а не <i>You like tea, isn't it?</i>")}
<p>Интонация тоже важна. Если голос в конце понижается, говорящий почти уверен и ждет согласия. Если повышается — он действительно сомневается и задает вопрос.</p>`,
  /* перевод слов в упражнениях: по наведению или касанию (gloss.js); ключи — в нижнем регистре, как слово стоит в тексте */
  gloss: {
    'coat': 'пальто', 'cold': 'холодный; холодно', 'help': 'помогать', 'me': 'меня, мне', 'pass': 'передать; сдать', 'rome': 'Рим', 'salt': 'соль', "she's": 'она (= she is / she has)', 'tired': 'уставший', 'us': 'нас, нам', 'warm': 'теплый',
    'brother': 'брат', 'house': 'дом', 'hour': 'час', 'sister': 'сестра', 'film': 'фильм', 'twice': 'дважды', "it's": 'это (= it is)',
    'i have': 'у меня есть', 'has': 'имеет; вспомогательный глагол', 'i': 'я', 'she': 'она', 'it': 'это; он, она (о предмете)',
    'they': 'они', 'is': 'есть, является (форма to be)', 'are': 'есть (форма to be)', 'have': 'иметь; есть (о еде)', 'go': 'идти, ехать',
    'the': 'определенный артикль', 'at': 'в (о времени); у, на (о месте)', 'london': 'Лондон', 'go to': 'ходить в, идти в',
    'a': 'неопределенный артикль', 'very': 'очень', 'today': 'сегодня', 'this': 'этот, эта, это', 'door': 'дверь', 'live': 'жить',
    'and': 'и', 'two': 'два', 'year': 'год', 'buy': 'купить', 'to': 'в, на (куда); частица перед глаголом', 'there': 'в обороте there is / there are: есть, имеется',
    'park': 'парк', 'near': 'рядом с, около', 'your': 'твой, ваш', 'yesterday': 'вчера', "let's": 'давай(те)', 'morning': 'утро',
    'home': 'дом; домой', 'cinema': 'кино', 'summer': 'лето', 'now': 'сейчас', 'do': 'делать; вспомогательный глагол',
    'long': 'долго; длинный', 'works': 'работает', 'you': 'ты, вы', 'parents': 'родители', 'like': 'нравиться, любить', 'lunch': 'обед',
    'at home': 'дома', 'again': 'снова', 'hungry': 'голодный', 'last': 'прошлый', 'late': 'поздно', 'married': 'женат, замужем',
    'tomorrow': 'завтра', 'were': 'были (форма to be)', 'when': 'когда', 'car': 'машина', 'coffee': 'кофе', 'hospital': 'больница',
    'jazz': 'джаз', 'meat': 'мясо', 'tv': 'телевизор', 'ago': 'назад', 'did': 'вспомогательный глагол прошедшего времени',
    "don't": 'не (= do not)', "i'm": 'я (= I am)', 'call': 'звонить', 'close': 'закрыть', 'rain': 'дождь', 'seaside': 'морское побережье',
    'an': 'неопределенный артикль', 'raining': 'идет дождь (от rain)', 'went': 'пошел, поехал (от go)', "aren't": 'не (= are not)',
    'called': 'позвонил (от call)', 'finished': 'закончил (от finish)', "haven't": 'не (= have not)', 'seen': 'видел (3-я форма see)',
    'been': 'был (3-я форма be)', "didn't": 'не (= did not)', 'last year': 'в прошлом году', 'got married': 'поженились', "i've got": 'у меня есть (= I have got)',
    'station': 'вокзал, станция', 'going to': 'собирается', 'report': 'отчет', 'will': 'вспомогательный глагол будущего времени',
    'already': 'уже', 'busy': 'занят, занятый', 'cats': 'кошки', "doesn't": 'не (= does not)', 'drink': 'пить', 'dry': 'сухой',
    'eat': 'есть (принимать пищу)', 'had': 'имел; вспомогательный глагол', "he's": 'он (= he is / he has)', "i've": 'я (= I have)',
    "isn't": 'не (= is not)', 'never': 'никогда', 'streets': 'улицы', 'watching': 'смотрит', 'windy': 'ветреный',
    "you've": 'ты, вы (= you have)'
  },
  ex: [
    { type: 'gap', task: 'Допишите разделительный вопрос.', items: [
      ["It's windy today, ___?", "isn't it"], ["You live near the station, ___?", "don't you"],
      ["Your sister works at the hospital, ___?", "doesn't she"], ["They went to the seaside last summer, ___?", "didn't they"],
      ["You aren't tired, ___?", "are you"], ["Tom has already finished the report, ___?", "hasn't he"],
      ["Your brother will help us, ___?", "won't he"], ["Your parents were at home yesterday, ___?", "weren't they"],
      ["She doesn't eat meat, ___?", "does she"], ["You were watching TV when I called, ___?", "weren't you"],
      ["There is a park near your house, ___?", "isn't there"], ["This film is very long, ___?", "isn't it"]
    ]},
    { type: 'choice', task: 'Выберите правильный «хвостик».', items: [
      ["I'm late again, ___?", ["aren't I", "am not I", "isn't I"]], ["Let's go to the cinema, ___?", ["shall we", "don't we", "won't we"]],
      ["Pass me the salt, ___?", ["will you", "do you", "don't you"]], ["You never drink coffee, ___?", ["do you", "don't you", "did you"]],
      ["Kate and Mike got married last year, ___?", ["didn't they", "didn't he", "haven't they"]], ["She's been to Rome, ___?", ["hasn't she", "isn't she", "wasn't she"]],
      ["Your brother is going to buy a car, ___?", ["isn't he", "doesn't he", "won't he"]], ["You like jazz, ___?", ["don't you", "isn't it", "aren't you"]]
    ]},
    { type: 'choice', task: 'Выберите ответ, который подходит по смыслу.', items: [
      ["— You aren't cold, are you? — ___. I've got a warm coat.", ["No, I'm not", "Yes, I'm not", "Yes, I am"]],
      ["— You don't like cats, do you? — ___. I have two at home!", ["Yes, I do", "No, I don't", "Yes, I don't"]],
      ["— Ann didn't call, did she? — ___. She called twice this morning.", ["Yes, she did", "No, she didn't", "Yes, she didn't"]],
      ["— It isn't raining, is it? — ___. The streets are dry.", ["No, it isn't", "Yes, it isn't", "Yes, it is"]],
      ["— You've seen this film, haven't you? — ___. I've never seen it.", ["No, I haven't", "Yes, I haven't", "No, I have"]]
    ]},
    { type: 'translate', task: 'Переведите на английский.', items: [
      ["Фильм был скучный, правда?", "The film was boring, wasn't it?|The movie was boring, wasn't it?"],
      ["Ты ведь не видел мои ключи?", "You haven't seen my keys, have you?|You didn't see my keys, did you?"],
      ["Они живут в Лондоне, да?", "They live in London, don't they?"],
      ["Давай закажем пиццу, хорошо?", "Let's order pizza, shall we?|Let's order a pizza, shall we?"],
      ["Ты был там вчера, не так ли?", "You were there yesterday, weren't you?|Yesterday you were there, weren't you?"],
      ["Она не говорит по-французски, да?", "She doesn't speak French, does she?"]
    ]},
    { type: 'listen', at: 2, task: 'Прослушайте предложение и соберите его из слов.', items: [
      ["You haven't forgotten about the party, have you?", "Ты ведь не забыл про вечеринку?"],
      ["Your brother works in a bank, doesn't he?", "Твой брат работает в банке, правда?"],
      ["It was a great day, wasn't it?", "Отличный был день, правда?"]
    ]}
  ]}

]});

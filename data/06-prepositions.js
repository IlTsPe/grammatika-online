BOOK.push({ n: 6, id: 'prepositions', title: 'Предлоги',
intro: 'Предлоги места, времени и направления, а также глаголы и прилагательные, после которых требуется определенный предлог.',
topics: [

{ id: 'prep-place', level: 'A1', title: 'Предлоги места', sub: 'in, on, at, under, between',
  rule: `
<p>Предлоги места отвечают на вопрос <i>где?</i> и показывают, как один предмет расположен относительно другого: внутри, на поверхности, под, над, рядом. Главные из них — <i>in, on, at</i>, но есть и много других, которые собраны в таблице ниже.</p>
${T(["Предлог", "Значение", "Пример"], [
  ["<i>in</i>", "в, внутри (объем, пространство)", "<i><b>in</b> the box, <b>in</b> the room, <b>in</b> Moscow</i>"],
  ["<i>on</i>", "на (поверхности)", "<i><b>on</b> the table, <b>on</b> the wall, <b>on</b> the floor</i>"],
  ["<i>at</i>", "у, в (точка, место события)", "<i><b>at</b> the door, <b>at</b> the bus stop, <b>at</b> school</i>"],
  ["<i>under</i>", "под", "<i><b>under</b> the bed</i>"],
  ["<i>above / over</i>", "над", "<i>a lamp <b>above</b> the table</i>"],
  ["<i>behind / in front of</i>", "за / перед", "<i><b>behind</b> the house, <b>in front of</b> the school</i>"],
  ["<i>next to / near / by</i>", "рядом, около", "<i><b>next to</b> the window</i>"],
  ["<i>between / among</i>", "между двумя / среди многих", "<i><b>between</b> Tom and Ann, <b>among</b> the trees</i>"],
  ["<i>opposite</i>", "напротив", "<i><b>opposite</b> the bank</i>"]
])}
${E([
  ["<b>in</b> the street / <b>on</b> the street", "на улице (in — чаще брит., on — амер. и брит.)"],
  ["<b>on</b> the first floor, <b>on</b> the bus, <b>on</b> the left", "на этаже, в автобусе, слева"],
  ["<b>in</b> the picture, <b>in</b> the sky, <b>in</b> a car", "на картине, в небе, в машине"],
  ["<b>at</b> home, <b>at</b> work, <b>at</b> the cinema, <b>at</b> a party", "дома, на работе, в кино, на вечеринке"]
])}
<h3>Почему on the bus, но in a car</h3>
<p>Русские «в» и «на» здесь не помогают: в английском свои привычки, и у части из них есть логика. С транспортом правило такое: в большом общественном транспорте можно стоять и ходить по салону, как по полу, поэтому англичане говорят <i>on</i> — словно человек стоит на площадке: <i><b>on</b> the bus</i> — в автобусе, <i><b>on</b> the train</i> — в поезде, <i><b>on</b> the plane</i> — в самолете. А в маленьком транспорте можно только сидеть внутри, как в коробке, поэтому — <i>in</i>: <i><b>in</b> a car</i> — в машине, <i><b>in</b> a taxi</i> — в такси. На велосипеде и мотоцикле сидят сверху, поэтому тоже <i>on</i>: <i><b>on</b> a bike</i> — на велосипеде.</p>
<p>Логика есть и у других примеров выше: этаж — это поверхность, на которой стоишь (<i>on the first floor</i>), а картина и небо — пространство, внутри которого что-то видно (<i>in the picture</i>, <i>in the sky</i>). А выражения <i>at home</i> и <i>at work</i> вы уже знаете из темы 1.4.</p>
<h3>Above и over</h3>
<p>Оба предлога значат «над», и часто их можно заменить друг другом. Но <i>above</i> просто показывает, что один предмет находится выше другого: <i>The picture hangs <b>above</b> the sofa</i> — картина висит над диваном. А <i>over</i> чаще используют, когда что-то накрывает предмет или движется над ним с одной стороны на другую: <i>She put a blanket <b>over</b> the child</i> — она укрыла ребенка одеялом; <i>The plane flew <b>over</b> the city</i> — самолет пролетел над городом.</p>
${N("Русское «на» не всегда переводится как <i>on</i>. Например, «на концерте» — <i>at the concert</i>. И осторожнее с этажами: британцы считают их иначе. Наш первый этаж у них — <i>the ground floor</i>, а второй — <i>the first floor</i>. В американском английском счет такой же, как у нас.")}`,
  /* перевод слов в упражнениях: по наведению или касанию (gloss.js); ключи — в нижнем регистре, как слово стоит в тексте */
  gloss: {
    'old': 'старый', 'house': 'дом', 'man': 'мужчина', 'i': 'я', 'he': 'он', 'it': 'это; он, она (о предмете)', 'we': 'мы',
    'my': 'мой, моя, мое', 'is': 'есть, является (форма to be)', 'are': 'есть (форма to be)', 'the': 'определенный артикль',
    'at': 'в (о времени); у, на (о месте)', 'london': 'Лондон', 'look at': 'посмотри на', 'a': 'неопределенный артикль',
    'please': 'пожалуйста', 'shop': 'магазин', 'day': 'день', 'door': 'дверь', 'live': 'жить', 'third': 'третий', 'floor': 'этаж',
    'who': 'кто', 'and': 'и', 'two': 'два', 'every': 'каждый', 'for': 'для; в течение', 'her': 'ее, ей', 'big': 'большой',
    'there': 'в обороте there is / there are: есть, имеется', 'park': 'парк', 'some': 'немного, несколько', 'eggs': 'яйца', 'bank': 'банк', 'kitchen': 'кухня',
    'table': 'стол', 'our': 'наш', 'yesterday': 'вчера', 'look': 'смотреть; смотри', 'morning': 'утро', 'school': 'школа',
    'bus': 'автобус', 'home': 'дом; домой', 'evening': 'вечер', 'me': 'меня, мне', 'from': 'из, от', 'parents': 'родители',
    'friend': 'друг', 'picture': 'картина, рисунок', 'party': 'вечеринка', 'were': 'были (форма to be)', 'years': 'годы, лет',
    'all': 'весь, все', 'café': 'кафе', 'keys': 'ключи', 'letter': 'письмо', 'way': 'путь, дорога', 'work': 'работа; работать',
    'box': 'коробка', 'wait': 'ждать', 'sky': 'небо', 'children': 'дети', 'birds': 'птицы', 'left': 'оставил; ушел (от leave); левый',
    'met': 'встретил (от meet)', 'was': 'был (форма to be)', 'five': 'пять', 'lived': 'жил (от live)', 'all day': 'весь день',
    'found': 'нашел (от find)', 'six': 'шесть', 'cars': 'машины', 'ball': 'мяч', 'ceiling': 'потолок', 'chair': 'стул',
    "children's": 'детский', 'garden': 'сад', "grandmother's": 'бабушкин', 'hangs': 'висит', 'lamp': 'лампа', 'office': 'офис',
    'papers': 'бумаги', 'pictures': 'картины, фотографии', 'post': 'почта; отправить', 'post office': 'почта', 'sit': 'сидеть', 'slept': 'спал (от sleep)',
    'stop': 'остановить(ся), перестать', 'bus stop': 'автобусная остановка', 'wall': 'стена'
  },
  ex: [
    { type: 'gap', task: 'Впишите in, on или at.', items: [
      ["There are six eggs ___ the box.", "in"], ["There were two old pictures ___ the wall.", "on"],
      ["There was a man ___ the door yesterday evening.", "at"], ["My parents were ___ work all day.", "at"],
      ["We live ___ the third floor.", "on"], ["Look at the birds ___ the sky!", "in"],
      ["Every morning I wait for my friend ___ the bus stop.", "at"], ["Her children lived ___ London for five years.", "in"],
      ["Who is the man ___ the picture?", "in"], ["I left my keys ___ the kitchen table.", "on"],
      ["We met ___ a party.", "at"], ["He slept ___ the bus all the way home.", "on"]
    ]},
    { type: 'choice', task: 'Выберите предлог.', items: [
      ["The children's ball was ___ the chair.", ["under", "between", "among"]], ["The bank is ___ the post office and the café.", ["between", "among", "opposite of"]],
      ["There was a big garden ___ my grandmother's house.", ["behind", "behind of", "back"]], ["Our school is ___ the park.", ["opposite", "opposite of", "in front"]],
      ["There were some cars ___ the shop.", ["in front of", "in front", "before of"]], ["I found my letter ___ the old papers.", ["among", "between", "at"]],
      ["There is a lamp ___ the table. It hangs from the ceiling.", ["above", "on", "at"]], ["Sit ___ me, please.", ["next to", "next", "near of"]]
    ]},
    { type: 'translate', task: 'Переведите на английский.', items: [
      ["Мои книги были на столе.", "My books were on the table."],
      ["Собака спит под деревом.", "The dog is sleeping under the tree.|The dog is sleeping under a tree."],
      ["Мы живем на втором этаже.", "We live on the first floor.|We live on the second floor."],
      ["Я видел его на остановке.", "I saw him at the bus stop."],
      ["Магазин находится напротив школы.", "The shop is opposite the school.|The shop is across from the school."]
    ]},
    { type: 'listen', at: 2, task: 'Прослушайте предложение и соберите его из слов.', items: [
      ["The cat slept under the table in the kitchen.", "Кошка спала под столом на кухне."],
      ["We met at the bus stop between the bank and the post office.", "Мы встретились на остановке между банком и почтой."],
      ["There is a picture on the wall above my bed.", "На стене над моей кроватью висит картина."]
    ]}
  ]},

{ id: 'prep-time', level: 'A2', title: 'Предлоги времени', sub: 'at 5, on Monday, in May, for, since',
  rule: `
<p>Три главных предлога времени легко различать по длине отрезка. <i>At</i> ставят перед точным моментом (<i>at 7 o'clock</i>), <i>on</i> — перед конкретным днем или датой (<i>on Monday, on 15 March</i>), а <i>in</i> — перед более длинным периодом: месяцем, годом, временем года (<i>in May, in 2005, in winter</i>).</p>
${T(["Предлог", "С чем", "Пример"], [
  ["<i>at</i>", "время по часам, праздники, выражения", "<i><b>at</b> 5 o'clock, <b>at</b> noon, <b>at</b> night, <b>at</b> Christmas, <b>at</b> the weekend</i> (брит.; амер. <i><b>on</b> the weekend</i>)"],
  ["<i>on</i>", "дни и даты", "<i><b>on</b> Monday, <b>on</b> 9 May, <b>on</b> my birthday, <b>on</b> Friday morning</i>"],
  ["<i>in</i>", "месяцы, годы, сезоны, части дня", "<i><b>in</b> May, <b>in</b> 2010, <b>in</b> winter, <b>in</b> the morning</i>"],
  ["<i>in</i>", "через (о будущем)", "<i>I'll be back <b>in</b> ten minutes.</i> — Я вернусь через десять минут."],
  ["<i>for</i>", "в течение (длительность)", "<i><b>for</b> two hours, <b>for</b> a week</i>"],
  ["<i>since</i>", "с (момента)", "<i><b>since</b> 2015, <b>since</b> Monday</i>"],
  ["<i>during</i>", "во время (события)", "<i><b>during</b> the lesson</i>"],
  ["<i>till / until, by</i>", "до (продолжается) / к (не позже)", "<i>sleep <b>till</b> noon; come back <b>by</b> 10</i>"],
  ["<i>from … to</i>", "с … до", "<i><b>from</b> 9 <b>to</b> 5</i>"]
])}
${N("Если перед словом времени стоит <i>this, next, last</i> или <i>every</i>, предлог не нужен: говорят <i>next week, last Monday, every day</i>. Вариант <i>on next Monday</i> будет ошибкой.")}
<h3>In — «через»</h3>
<p>Когда речь идет о будущем, <i>in</i> перед отрезком времени значит «через столько-то, начиная с этого момента»: <i>I'll call you <b>in</b> five minutes</i> — я позвоню тебе через пять минут. Русское «через» хочется перевести как <i>after</i>, но <i>after five minutes</i> значит «спустя пять минут после какого-то другого события», и о будущем, отсчитанном от «сейчас», так не говорят.</p>
${E([
  ["The train leaves <b>in</b> an hour.", "Поезд уходит через час."],
  ["We'll meet again <b>in</b> two weeks.", "Мы снова встретимся через две недели."]
])}
<h3>During</h3>
<p><i>For</i> и <i>since</i> употребляются так же, как в Present Perfect (тема 2.9). А <i>during</i> отвечает на вопрос «когда?» и ставится перед названием события, а не перед числом часов или дней: <i>during the lesson</i> — во время урока, но <i>for an hour</i> — в течение часа.</p>
${E([
  ["She fell asleep <b>during</b> the film.", "Она уснула во время фильма."]
])}
<h3>Till / until и by</h3>
<p>Оба предлога переводятся как «до», но смысл у них разный. <i>Till</i> и <i>until</i> (это одно и то же, <i>till</i> разговорнее) говорят, что действие продолжается вплоть до этого момента, а потом прекращается: <i>I'll wait <b>till</b> six</i> — я буду ждать до шести (а потом перестану). А <i>by</i> (как в теме 2.15) говорит, что действие должно закончиться к этому сроку, а не длиться до него: <i>Finish the work <b>by</b> six</i> — закончите работу к шести.</p>
${E([
  ["The shop is open <b>until</b> 9 pm.", "Магазин открыт до девяти вечера."],
  ["Please send me the report <b>by</b> Friday.", "Пожалуйста, пришлите мне отчет к пятнице. (не позже пятницы)"]
])}`,
  /* перевод слов в упражнениях: по наведению или касанию (gloss.js); ключи — в нижнем регистре, как слово стоит в тексте */
  gloss: {
    'been': 'был (3-я форма be)', 'has': 'у него (у нее) есть', 'ill': 'больной', 'she': 'она',
    'return': 'вернуть; вернуться',
    'books': 'книги', 'please': 'пожалуйста',
    'lesson': 'урок', 'film': 'фильм', 'week': 'неделя', 'i': 'я', 'he': 'он', 'we': 'мы', 'my': 'мой, моя, мое',
    'is': 'есть, является (форма to be)', 'are': 'есть (форма to be)', 'the': 'определенный артикль', 'what': 'что, какой',
    'a': 'неопределенный артикль', 'open': 'открыт; открыть', 'shop': 'магазин', 'monday': 'понедельник', 'two': 'два',
    'birthday': 'день рождения', 'her': 'ее, ей', 'see': 'увидеть', 'to': 'в, на (куда); частица перед глаголом', 'shops': 'магазины',
    'yesterday': 'вчера', 'morning': 'утро', 'evening': 'вечер', 'often': 'часто', 'father': 'отец',
    'do': 'делать; вспомогательный глагол', 'long': 'долго; длинный', 'winter': 'зима', 'works': 'работает', 'you': 'ты, вы',
    'test': 'контрольная', 'friday': 'пятница', 'last': 'прошлый', "o'clock": 'часов (ровно)', 'ready': 'готов', 'saturday': 'суббота',
    'sundays': 'воскресенья', 'time': 'время', 'did': 'вспомогательный глагол прошедшего времени', 'weekend': 'выходные',
    'here': 'здесь, сюда', "i'm": 'я (= I am)', 'next': 'следующий', 'be': 'быть', 'met': 'встретил (от meet)', 'night': 'ночь',
    'skiing': 'катался на лыжах', 'started': 'начал (от start)', 'was': 'был (форма to be)', 'went': 'пошел, поехал (от go)',
    'five': 'пять', "haven't": 'не (= have not)', 'lived': 'жил (от live)', 'read': 'читать; прочитал', 'seen': 'видел (3-я форма see)',
    'hours': 'часы, часов', 'going to': 'собираюсь', 'next week': 'на следующей неделе', 'report': 'отчет',
    'will': 'вспомогательный глагол будущего времени', 'minutes': 'минуты', 'born': 'родился (be born)', 'closed': 'закрыт',
    'finish': 'закончить', 'had': 'имел; вспомогательный глагол', "i'll": 'я (= I will)', "i've": 'я (= I have)', 'march': 'март',
    'midday': 'полдень', 'nobody': 'никто', "sister's": 'сестры (чей?)', 'slept': 'спал (от sleep)', 'talked': 'разговаривал',
    'waited': 'ждал'
  },
  ex: [
    { type: 'gap', task: 'Впишите at, on, in или «-», если предлог не нужен.', items: [
      ["Yesterday the film started ___ 7 o'clock.", "at"], ["I was born ___ 2005.", "in"],
      ["We had a test ___ Monday.", "on"], ["We went skiing ___ winter.", "in"],
      ["What did you do ___ the weekend?", "at|on"], ["My sister's birthday is ___ 15 March.", "on"],
      ["I'm going to read ___ the evening.", "in"], ["I'll see you ___ next week.", "-|0"],
      ["The shops are closed ___ Sundays.", "on"], ["My father often works ___ night.", "at"],
      ["I'll be ready ___ five minutes.", "in"], ["We met ___ last Friday.", "-|0"]
    ]},
    { type: 'choice', task: 'Выберите предлог.', items: [
      ["She has been ill ___ Monday.", ["since", "for", "from"]], ["We waited ___ two hours.", ["for", "since", "during"]],
      ["Nobody talked ___ the lesson.", ["during", "for", "while"]], ["Please return the books ___ Monday.", ["by", "till", "since"]],
      ["Yesterday the shop was open ___ 9 to 6.", ["from", "since", "at"]], ["He slept ___ midday.", ["until", "by", "since"]],
      ["I haven't seen her ___ a long time.", ["for", "since", "during"]], ["See you ___ Saturday morning!", ["on", "in", "at"]]
    ]},
    { type: 'translate', task: 'Переведите на английский.', items: [
      ["Концерт начнется в восемь.", "The concert starts at eight.|The concert will start at eight.|The concert starts at 8.|The concert will start at 8.|The concert begins at eight.|The concert will begin at eight."],
      ["Я родился в мае.", "I was born in May."],
      ["Увидимся в понедельник.", "See you on Monday.|I will see you on Monday."],
      ["Я живу здесь с 2010 года.", "I have lived here since 2010.|I have been living here since 2010."],
      ["Мы поедем в отпуск через месяц.", "We will go on holiday in a month.|We are going on holiday in a month.|We are going to go on holiday in a month."],
    ]},
    { type: 'listen', at: 2, task: 'Прослушайте предложение и соберите его из слов.', items: [
      ["On Monday the lesson started at nine o'clock.", "В понедельник урок начался в девять часов."],
      ["My grandparents have lived in this village since 1990.", "Мои бабушка и дедушка живут в этой деревне с 1990 года."],
      ["We are going to the sea in July for two weeks.", "В июле мы едем на море на две недели."]
    ]}
  ]},

{ id: 'prep-movement', level: 'A2', title: 'Предлоги направления', sub: 'to, into, out of, across, through',
  rule: `
<p>Предлоги направления отвечают на вопросы <i>куда?</i> и <i>откуда?</i>. Они показывают, как движется человек или предмет: внутрь, наружу, через, вдоль, мимо. Поэтому обычно они стоят после глаголов движения — <i>go, come, walk, run, jump</i>.</p>
${T(["Предлог", "Значение", "Пример"], [
  ["<i>to</i>", "к, в (направление)", "<i>go <b>to</b> school, come <b>to</b> me</i>"],
  ["<i>from</i>", "от, из", "<i>a letter <b>from</b> Ann, come <b>from</b> Spain</i>"],
  ["<i>into / out of</i>", "в (внутрь) / из (наружу)", "<i>go <b>into</b> the room, get <b>out of</b> the car</i>"],
  ["<i>onto / off</i>", "на (поверхность) / с", "<i>jump <b>onto</b> the table, fall <b>off</b> the bike</i>"],
  ["<i>across</i>", "через (поверхность, с одной стороны на другую)", "<i>swim <b>across</b> the river</i>"],
  ["<i>through</i>", "через, сквозь (внутри чего-то)", "<i>walk <b>through</b> the forest</i>"],
  ["<i>along</i>", "вдоль, по", "<i>walk <b>along</b> the street</i>"],
  ["<i>past</i>", "мимо", "<i>drive <b>past</b> the station</i>"],
  ["<i>up / down</i>", "вверх / вниз", "<i>climb <b>up</b> the hill</i>"],
  ["<i>round / around</i>", "вокруг", "<i>travel <b>around</b> the world</i>"]
])}
${N("Два частых исключения. Со словом <i>home</i> предлог <i>to</i> не ставят: <i>go <b>home</b>, come home</i>. А после <i>arrive</i> («прибывать») используют не <i>to</i>, а <i>in</i> — для городов и стран (<i>arrive <b>in</b> Moscow</i>) или <i>at</i> — для зданий и мест (<i>arrive <b>at</b> the station</i>).")}`,
  /* перевод слов в упражнениях: по наведению или касанию (gloss.js); ключи — в нижнем регистре, как слово стоит в тексте */
  gloss: {
    'house': 'дом', 'bag': 'сумка', 'pen': 'ручка', 'i': 'я', 'he': 'он', 'she': 'она', 'it': 'это; он, она (о предмете)', 'we': 'мы',
    'they': 'они', 'my': 'мой, моя, мое', 'go': 'идти, ехать', 'the': 'определенный артикль', 'at': 'в (о времени); у, на (о месте)',
    'in': 'в', 'london': 'Лондон', 'a': 'неопределенный артикль', 'window': 'окно', 'and': 'и', 'her': 'ее, ей', 'room': 'комната',
    'river bank': 'берег реки', 'bank': 'берег; банк', 'our': 'наш', 'look': 'смотреть; смотри', "let's": 'давай(те)', 'bus': 'автобус', 'cinema': 'кино',
    'tonight': 'сегодня вечером', 'long': 'долго; длинный', 'river': 'река', 'come': 'приходить', 'bike': 'велосипед', 'cat': 'кошка',
    'train': 'поезд', 'his': 'его', 'letter': 'письмо', 'box': 'коробка', 'next': 'следующий', 'grandmother': 'бабушка', 'sat down': 'сел',
    'arrived': 'приехал (от arrive)', 'down': 'вниз', 'midnight': 'полночь', 'sat': 'сел (от sit)', 'took': 'взял; занял (от take)',
    'went': 'пошел, поехал (от go)', "didn't": 'не (= did not)', 'came': 'пришел (от come)', 'got': 'получил (от get)', 'thief': 'вор',
    'get': 'добраться; получить', 'asleep': 'спящий', 'climbed': 'забрался', 'drove': 'ехал за рулем (от drive)', 'fell': 'упал (от fall)',
    'hurt': 'причинить боль; ушибся', 'jumped': 'прыгнул', 'knee': 'колено', 'stop': 'остановка; остановиться',
    'swam': 'плавал (от swim)', 'travelled': 'путешествовал', 'tunnel': 'туннель', 'walked': 'шел пешком, гулял', 'world': 'мир'
  },
  ex: [
    { type: 'gap', task: 'Впишите предлог: to, into, out of, across, through, along, past, off или from.', items: [
      ["She took a pen ___ her bag.", "out of|from"], ["The train went ___ a long tunnel.", "through"],
      ["He fell ___ his bike and hurt his knee.", "off"], ["They swam ___ the river.", "across"],
      ["Let's go ___ the cinema tonight.", "to"], ["The cat jumped ___ the box and fell asleep in it.", "into"],
      ["We walked ___ the river bank.", "along"], ["I got a letter ___ my grandmother.", "from"],
      ["The bus drove ___ our house. It didn't stop.", "past"], ["Come ___ the window and look!", "to"]
    ]},
    { type: 'choice', task: 'Выберите правильный вариант.', items: [
      ["We arrived ___ London at midnight.", ["in", "to", "at"]], ["Let's go ___.", ["home", "to home", "at home"]],
      ["The thief climbed ___ the window.", ["through", "across", "along"]], ["Get ___ the bus at the next stop.", ["off", "out", "from"]],
      ["They travelled ___ the world.", ["around", "across of", "through of"]], ["He came ___ the room and sat down.", ["into", "in to", "onto"]]
    ]},
    { type: 'translate', task: 'Переведите на английский.', items: [
      ["Мальчик спрыгнул со стула.", "The boy jumped off the chair.|The boy jumped down from the chair."],
      ["Кошка пробежала через сад.", "The cat ran through the garden.|The cat ran across the garden."],
      ["Она перешла через улицу.", "She went across the street.|She walked across the street.|She crossed the street.|She went across the road.|She walked across the road.|She crossed the road."],
      ["Мы прибыли в аэропорт в шесть.", "We arrived at the airport at six.|We got to the airport at six.|We arrived at the airport at 6.|We got to the airport at 6."],
      ["Я пришел домой поздно.", "I came home late.|I got home late."]
    ]},
    { type: 'listen', at: 2, task: 'Прослушайте предложение и соберите его из слов.', items: [
      ["She ran out of the house and across the road.", "Она выбежала из дома и перебежала через дорогу."],
      ["We walked through the park to the river.", "Мы прошли через парк к реке."],
      ["He jumped into the water from the bridge.", "Он прыгнул в воду с моста."]
    ]}
  ]},

{ id: 'prep-dependent', level: 'B1', title: 'Глаголы и прилагательные с предлогами', sub: 'depend on, afraid of, good at',
  rule: `
<p>После многих глаголов и прилагательных в английском нужен определенный предлог. Часто он не совпадает с русским: например, «зависеть <b>от</b>» — <i>depend <b>on</b></i>, а «хорош <b>в</b>» — <i>good <b>at</b></i>. Поэтому такие сочетания лучше учить сразу парой — слово вместе с его предлогом.</p>
${T(["Глагол + предлог", "Прилагательное + предлог"], [
  ["<i>depend <b>on</b></i> — зависеть от", "<i>afraid <b>of</b></i> — бояться"],
  ["<i>listen <b>to</b></i> — слушать", "<i>good / bad <b>at</b></i> — хорош / плох в"],
  ["<i>look <b>at</b></i> — смотреть на", "<i>interested <b>in</b></i> — интересоваться"],
  ["<i>look <b>for</b></i> — искать", "<i>proud <b>of</b></i> — гордиться"],
  ["<i>wait <b>for</b></i> — ждать", "<i>fond <b>of</b></i> — любить"],
  ["<i>think <b>of / about</b></i> — думать о", "<i>angry <b>with</b></i> кого-то / <i><b>about</b></i> что-то — сердиться на кого-то / из-за чего-то"],
  ["<i>agree <b>with</b></i> — соглашаться с", "<i>famous <b>for</b></i> — знаменитый чем"],
  ["<i>pay <b>for</b></i> — платить за", "<i>different <b>from</b></i> — отличающийся от"],
  ["<i>laugh <b>at</b></i> — смеяться над", "<i>tired <b>of</b></i> — уставший от"],
  ["<i>belong <b>to</b></i> — принадлежать", "<i>married <b>to</b></i> — женат на, замужем за"]
])}
${N("Бывает и наоборот: в русском предлог есть, а в английском его нет. Например, <i>enter the room</i> — войти <b>в</b> комнату, <i>answer the question</i> — ответить <b>на</b> вопрос. А «обсудить план» — это просто <i>discuss the plan</i>, без <i>about</i>.")}
<h3>with / by, to / of</h3>
<p>В английском почти нет падежей (кроме притяжательного, тема 4.2), и их роль выполняют предлоги. Например, русский творительный падеж («написал карандашом», «написан Толстым») переводится то через <i>with</i>, то через <i>by</i> — в зависимости от смысла. А дательный падеж («дай сестре») — обычно через <i>to</i>.</p>
${T(["Предлог", "Значение", "Пример"], [
  ["<i>with</i>", "инструмент: чем", "<i>write <b>with</b> a pen, cut <b>with</b> a knife</i>"],
  ["<i>by</i>", "исполнитель, способ, транспорт", "<i>a novel <b>by</b> Tolstoy, <b>by</b> bus, <b>by</b> post, <b>by</b> hand</i>"],
  ["<i>to</i>", "кому, куда", "<i>give it <b>to</b> him, explain <b>to</b> us, a letter <b>to</b> my friend</i>"],
  ["<i>of</i>", "чей, чего, часть целого", "<i>the leg <b>of</b> the table, a cup <b>of</b> tea, the capital <b>of</b> France</i>"]
])}
<p>Разница между <i>with</i> и <i>by</i> такая: <i>with</i> называет предмет, которым что-то делают (<i>write with a pen</i> — писать ручкой), а <i>by</i> — того, кто это сделал, или способ: <i>a novel by Tolstoy</i> — роман Толстого, то есть написанный Толстым. Чаще всего <i>by</i> в таком значении встречается в страдательном залоге, когда действие совершается над предметом, а исполнителя называют в конце: <i>The book was written <b>by</b> Tolstoy</i> — книга написана Толстым. Страдательный залог подробно разобран в разделе 10.</p>
<h3>Think of и think about</h3>
<p>В первой таблице у <i>think</i> два предлога, и смысл у них немного разный. <i>Think about</i> — думать о чем-то долго, обдумывать: <i>I'm thinking <b>about</b> my new job</i> — я думаю о новой работе. <i>Think of</i> — вспомнить, придумать (прийти в голову) или иметь мнение: <i>I can't think <b>of</b> his name</i> — не могу вспомнить, как его зовут; <i>What do you think <b>of</b> the film?</i> — что ты думаешь о фильме? (как он тебе?). В значении «иметь мнение» подходят оба предлога: <i>What do you think <b>of</b> / <b>about</b> his idea?</i> — что ты думаешь о его идее? А в значениях «придумать» и «вспомнить» — только <i>of</i>.</p>`,
  /* перевод слов в упражнениях: по наведению или касанию (gloss.js); ключи — в нижнем регистре, как слово стоит в тексте */
  gloss: {
    'hamlet': '«Гамлет»', 'holiday': 'отпуск, каникулы', 'play': 'играть',
    'old': 'старый', 'good': 'хороший', 'man': 'мужчина', 'bag': 'сумка', 'teacher': 'учитель', 'i have': 'у меня есть',
    'has': 'имеет; вспомогательный глагол', 'i': 'я', 'he': 'он', 'she': 'она', 'it': 'это; он, она (о предмете)', 'we': 'мы',
    'my': 'мой, моя, мое', 'is': 'есть, является (форма to be)', 'are': 'есть (форма to be)', 'have': 'иметь; вспомогательный глагол',
    'the': 'определенный артикль', 'what': 'что, какой', 'a': 'неопределенный артикль', 'open': 'открыть', 'please': 'пожалуйста',
    'this': 'этот, эта, это', 'moscow': 'Москва', 'door': 'дверь', 'who': 'кто', 'son': 'сын', 'and': 'и', 'child': 'ребенок',
    'for': 'для; в течение', 'big': 'большой', 'to': 'в, на (куда); частица перед глаголом', 'room': 'комната', 'twenty': 'двадцать',
    'kitchen': 'кухня', 'why': 'почему', 'famous': 'знаменитый', 'our': 'наш', 'town': 'город', 'yesterday': 'вчера',
    'look': 'смотреть; смотри', 'bus': 'автобус', 'always': 'всегда', 'me': 'меня, мне', 'russia': 'Россия', 'you': 'ты, вы',
    'cup': 'чашка', 'books': 'книги', 'picture': 'картина, рисунок', 'pencil': 'карандаш', 'tired': 'уставший', 'again': 'снова',
    'doctor': 'врач', 'married': 'женат, замужем', 'weather': 'погода', 'were': 'были (форма to be)', 'when': 'когда', 'coffee': 'кофе',
    'history': 'история', 'maths': 'математика', 'train': 'поезд', 'him': 'его, ему', 'his': 'его', 'keys': 'ключи', 'letter': 'письмо',
    'bring': 'принести', 'cake': 'торт', "i'm": 'я (= I am)', 'grandmother': 'бабушка', 'us': 'нас, нам', 'doing': 'делаешь (от do)',
    'seaside': 'морское побережье', 'was': 'был (форма to be)', 'went': 'пошел, поехал (от go)', 'seen': 'видел (3-я форма see)',
    'been': 'был (3-я форма be)', "didn't": 'не (= did not)', 'will': 'вспомогательный глагол будущего времени', 'minutes': 'минуты',
    'them': 'их, им', 'tickets': 'билеты', 'afraid': 'боится', 'agreed': 'согласился', 'angry': 'сердитый', 'answer': 'ответ; ответить',
    'belonged': 'принадлежал', 'capital': 'столица', 'centuries': 'века', 'churches': 'церкви', 'cousins': 'двоюродные братья и сестры',
    'cut': 'резать; порезал', 'depends': 'зависит', 'discussed': 'обсудили', 'documents': 'документы', 'dogs': 'собаки',
    'entered': 'вошел', 'everybody': 'все', 'explained': 'объяснил', 'gave': 'дал (от give)', 'interested': 'заинтересован',
    'its': 'его, ее (о предмете)', 'joke': 'шутка', 'key': 'ключ', 'knife': 'нож', 'laughed': 'засмеялся', 'listening': 'слушает',
    'looking': 'смотрит; ищет', 'never': 'никогда', 'nobody': 'никто', 'noise': 'шум', 'novel': 'роман', 'pay': 'платить',
    'peace': 'мир, покой', 'plan': 'план', 'post': 'почта; отправить', 'proud': 'гордый', 'question': 'вопрос', 'race': 'гонка, забег',
    'rule': 'правило', 'sent': 'отправил (от send)', 'waited': 'ждал', 'war': 'война', 'won': 'выиграл (от win)', 'wrote': 'написал'
  },
  ex: [
    { type: 'gap', task: 'Впишите предлог.', items: [
      ["It depends ___ the weather.", "on"], ["Nobody was listening ___ the teacher.", "to"],
      ["I'm looking ___ my keys. Have you seen them?", "for"], ["When she was a child, she was afraid ___ dogs.", "of"],
      ["My son has always been good ___ maths.", "at"], ["Are you interested ___ history?", "in"],
      ["We were proud ___ our son when he won the race.", "of"], ["I have never agreed ___ him.", "with"],
      ["Who will pay ___ the tickets?", "for"], ["This town has been famous ___ its churches for centuries.", "for"],
      ["Everybody laughed ___ his joke.", "at"], ["She is married ___ a doctor.", "to"],
      ["We waited ___ the bus for twenty minutes.", "for"], ["I'm tired ___ this noise.", "of"]
    ]},
    { type: 'choice', task: 'Нужен ли предлог? Выберите вариант.', items: [
      ["He didn't answer ___ my question.", ["—", "on", "to"]], ["We discussed ___ our holiday.", ["—", "about", "on"]],
      ["She entered ___ the kitchen.", ["—", "into", "in"]], ["This bag belonged ___ my grandmother.", ["to", "—", "with"]],
      ["Why were you angry ___ me yesterday?", ["with", "on", "to"]], ["Look ___ this picture! What is the man doing?", ["at", "on", "—"]]
    ]},
    { type: 'translate', task: 'Переведите на английский.', items: [
      ["Я ищу свой телефон.", "I am looking for my phone."],
      ["Она боится темноты.", "She is afraid of the dark.|She's afraid of the dark.|She is afraid of darkness."],
      ["Все зависит от тебя.", "Everything depends on you.|It all depends on you."],
      ["Он хорошо играет в шахматы.", "He is good at chess.|He plays chess well.|He is good at playing chess.|He plays chess very well."],
      ["Он не ответил на мое письмо.", "He didn't answer my letter.|He hasn't answered my letter."],
    ]},
    { type: 'gap', task: 'Впишите with, by, to или of.', items: [
      ["He wrote the letter ___ a pencil.", "with"], ["Hamlet is a play ___ Shakespeare.", "by"],
      ["We went to the seaside ___ train.", "by"], ["She cut the cake ___ a big knife.", "with"],
      ["I gave my old books ___ my cousins.", "to"], ["Moscow is the capital ___ Russia.", "of"],
      ["Bring me a cup ___ coffee, please.", "of"], ["The teacher explained the rule ___ us again.", "to"],
      ["We sent the documents ___ post.", "by"], ["Open the door ___ the kitchen ___ this key.", ["of|to", "with"]]
    ]},
    { type: 'listen', at: 2, task: 'Прослушайте предложение и соберите его из слов.', items: [
      ["My sister was afraid of spiders, but she was fond of snakes.", "Моя сестра боялась пауков, но любила змей."],
      ["The price depends on the size of the room.", "Цена зависит от размера комнаты."],
      ["Is your brother interested in football or tennis?", "Твой брат интересуется футболом или теннисом?"],
    ]}
  ]}
]});

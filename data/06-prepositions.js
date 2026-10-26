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
  ["<b>in</b> the street / <b>on</b> the street", "на улице (оба варианта: брит. и амер.)"],
  ["<b>on</b> the first floor, <b>on</b> the bus, <b>on</b> the left", "на этаже, в автобусе, слева"],
  ["<b>in</b> the picture, <b>in</b> the sky, <b>in</b> a car", "на картине, в небе, в машине"],
  ["<b>at</b> home, <b>at</b> work, <b>at</b> the cinema, <b>at</b> a party", "дома, на работе, в кино, на вечеринке"]
])}
<h3>Above и over</h3>
<p>Оба предлога значат «над», и часто их можно поменять местами. Но <i>above</i> просто показывает, что один предмет находится выше другого: <i>The picture hangs <b>above</b> the sofa</i> — картина висит над диваном. А <i>over</i> чаще используют, когда что-то накрывает предмет или движется над ним с одной стороны на другую: <i>She put a blanket <b>over</b> the child</i> — она укрыла ребенка одеялом; <i>The plane flew <b>over</b> the city</i> — самолет пролетел над городом.</p>
${N("Русское «на» не всегда переводится как <i>on</i>. Например, «на картине» — <i>in the picture</i>, «на улице» — <i>in the street</i>, «на концерте» — <i>at the concert</i>. И осторожнее с этажами: британцы считают их иначе. Наш первый этаж у них — <i>the ground floor</i>, а второй — <i>the first floor</i>. В американском английском счет такой же, как у нас.")}`,
  ex: [
    { type: 'gap', task: 'Впишите in, on или at.', items: [
      ["The cat slept ___ the box all day.", "in"], ["There were two old pictures ___ the wall.", "on"],
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
      ["Вчера кошка спала под кроватью.", "Yesterday the cat slept under the bed.|The cat slept under the bed yesterday."],
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
  ["<i>till / until, by</i>", "до (продолжается) / к (не позже)", "<i>wait <b>till</b> 6; finish <b>by</b> 6</i>"],
  ["<i>from … to</i>", "с … до", "<i><b>from</b> 9 <b>to</b> 5</i>"]
])}
${N("Если перед словом времени стоит <i>this, next, last</i> или <i>every</i>, предлог не нужен: говорят <i>next week, last Monday, every day</i>. Вариант <i>on next Monday</i> будет ошибкой.")}
<h3>In — «через»</h3>
<p>Когда речь идет о будущем, <i>in</i> перед отрезком времени значит «через столько-то, начиная с этого момента»: <i>I'll be back <b>in</b> ten minutes</i> — я вернусь через десять минут. Русское «через» хочется перевести как <i>after</i>, но <i>after ten minutes</i> значит «спустя десять минут после какого-то другого события», и о будущем, отсчитанном от «сейчас», так не говорят.</p>
${E([
  ["The train leaves <b>in</b> an hour.", "Поезд уходит через час."],
  ["We'll meet again <b>in</b> two weeks.", "Мы снова встретимся через две недели."]
])}
<h3>For, since и during</h3>
<p>Предлог <i>for</i> отвечает на вопрос «как долго?» и ставится перед длиной отрезка: <i>for two hours</i> — два часа, в течение двух часов. Предлог <i>since</i> отвечает на вопрос «с какого времени?» и ставится перед моментом, с которого что-то началось и продолжается до сих пор: <i>since 2015</i> — с 2015 года. Поэтому с <i>since</i> и часто с <i>for</i> употребляется Present Perfect — время, которое связывает прошлое с настоящим (оно разобрано в разделе 2). А <i>during</i> отвечает на вопрос «когда?» и ставится перед названием события, а не перед числом часов или дней: <i>during the lesson</i> — во время урока, но <i>for an hour</i> — в течение часа.</p>
${E([
  ["I have lived here <b>for</b> ten years.", "Я живу здесь десять лет."],
  ["I have lived here <b>since</b> 2015.", "Я живу здесь с 2015 года."],
  ["She fell asleep <b>during</b> the film.", "Она уснула во время фильма."]
])}
<h3>Till / until и by</h3>
<p>Оба предлога переводятся как «до», но смысл у них разный. <i>Till</i> и <i>until</i> (это одно и то же, <i>till</i> разговорнее) говорят, что действие продолжается вплоть до этого момента, а потом прекращается: <i>I'll wait <b>till</b> six</i> — я буду ждать до шести (и все это время буду ждать). <i>By</i> значит «к этому моменту, не позже»: действие должно закончиться в любое время до указанного срока, например <i>Finish the work <b>by</b> six</i> — закончите работу к шести.</p>
${E([
  ["The shop is open <b>until</b> 9 p.m.", "Магазин открыт до девяти вечера."],
  ["Please send me the report <b>by</b> Friday.", "Пожалуйста, пришлите мне отчет до пятницы (не позже пятницы)."]
])}`,
  ex: [
    { type: 'gap', task: 'Впишите at, on, in или «-», если предлог не нужен.', items: [
      ["Yesterday the film started ___ 7 o'clock.", "at"], ["I was born ___ 2005.", "in"],
      ["We had a test ___ Monday.", "on"], ["We went skiing ___ winter.", "in"],
      ["What did you do ___ the weekend?", "at|on"], ["My sister's birthday is ___ 15 March.", "on"],
      ["I'm going to read ___ the evening.", "in"], ["I'll see you ___ next week.", "-|0"],
      ["The shops are closed ___ Christmas Day.", "on"], ["Owls hunt ___ night.", "at"],
      ["I'll be ready ___ five minutes.", "in"], ["We met ___ last Friday.", "-|0"]
    ]},
    { type: 'choice', task: 'Выберите предлог.', items: [
      ["I've lived here ___ 2015.", ["since", "for", "from"]], ["We waited ___ two hours.", ["for", "since", "during"]],
      ["Nobody talked ___ the lesson.", ["during", "for", "while"]], ["I will finish the report ___ Friday.", ["by", "till", "since"]],
      ["Yesterday the shop was open ___ 9 to 6.", ["from", "since", "at"]], ["He slept ___ midday.", ["until", "by", "since"]],
      ["I haven't seen her ___ a long time.", ["for", "since", "during"]], ["See you ___ Saturday morning!", ["on", "in", "at"]]
    ]},
    { type: 'translate', task: 'Переведите на английский.', items: [
      ["Вчера урок начался в девять часов.", "Yesterday the lesson started at nine o'clock.|The lesson started at nine o'clock yesterday.|Yesterday the lesson began at nine o'clock.|The lesson began at nine o'clock yesterday.|Yesterday the lesson started at nine.|The lesson started at nine yesterday."],
      ["Я родился в мае.", "I was born in May."],
      ["Увидимся в понедельник.", "See you on Monday.|I will see you on Monday."],
      ["Я живу здесь с 2010 года.", "I have lived here since 2010.|I have been living here since 2010."],
      ["Я вернусь через час.", "I will be back in an hour.|I will come back in an hour.|I will return in an hour."]
    ]},
    { type: 'listen', at: 2, task: 'Прослушайте предложение и соберите его из слов.', items: [
      ["On Monday the lesson started at nine o'clock.", "В понедельник урок начался в девять часов."],
      ["I have lived here since 2015.", "Я живу здесь с 2015 года."],
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
  ex: [
    { type: 'gap', task: 'Впишите предлог: to, into, out of, across, through, along, past, off или from.', items: [
      ["She took a pen ___ her bag.", "out of|from"], ["We walked ___ the forest.", "through"],
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
      ["Он вошел в комнату.", "He went into the room.|He came into the room.|He walked into the room.|He entered the room."],
      ["Мы шли через лес.", "We walked through the forest.|We were walking through the forest.|We went through the forest."],
      ["Она переплыла реку.", "She swam across the river."],
      ["Мы приехали в Москву вечером.", "We arrived in Moscow in the evening.|We came to Moscow in the evening.|In the evening we arrived in Moscow."],
      ["Пойдем домой.", "Let's go home."]
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
  ["<i>think <b>of / about</b></i> — думать о", "<i>angry <b>with</b></i> кого-то / <i><b>about</b></i> что-то"],
  ["<i>agree <b>with</b></i> — соглашаться с", "<i>famous <b>for</b></i> — знаменитый чем"],
  ["<i>pay <b>for</b></i> — платить за", "<i>different <b>from</b></i> — отличный от"],
  ["<i>laugh <b>at</b></i> — смеяться над", "<i>tired <b>of</b></i> — уставший от"],
  ["<i>belong <b>to</b></i> — принадлежать", "<i>married <b>to</b></i> — женат на, замужем за"]
])}
${N("Бывает и наоборот: в русском предлог есть, а в английском его нет. Например, <i>enter the room</i> — войти <b>в</b> комнату, <i>answer the question</i> — ответить <b>на</b> вопрос. А «обсудить план» — это просто <i>discuss the plan</i>, без <i>about</i>.")}
<h3>with / by, to / of</h3>
<p>В английском нет падежей, как в русском, и их роль выполняют предлоги. Например, русский творительный падеж («написал карандашом», «написан Толстым») переводится то через <i>with</i>, то через <i>by</i> — в зависимости от смысла. А дательный падеж («дай сестре») — обычно через <i>to</i>.</p>
${T(["Предлог", "Значение", "Пример"], [
  ["<i>with</i>", "инструмент: чем", "<i>write <b>with</b> a pen, cut <b>with</b> a knife</i>"],
  ["<i>by</i>", "исполнитель, способ, транспорт", "<i>a novel <b>by</b> Tolstoy, <b>by</b> bus, <b>by</b> post, <b>by</b> hand</i>"],
  ["<i>to</i>", "кому, куда", "<i>give it <b>to</b> him, explain <b>to</b> us, a letter <b>to</b> my friend</i>"],
  ["<i>of</i>", "чей, чего, часть целого", "<i>the leg <b>of</b> the table, a cup <b>of</b> tea, the capital <b>of</b> France</i>"]
])}
<p>Разница между <i>with</i> и <i>by</i> такая: <i>with</i> называет предмет, которым что-то делают (<i>write with a pen</i> — писать ручкой), а <i>by</i> — того, кто это сделал, или способ: <i>a novel by Tolstoy</i> — роман Толстого, то есть написанный Толстым. Чаще всего <i>by</i> в таком значении встречается в страдательном залоге, когда действие совершается над предметом, а исполнителя называют в конце: <i>The book was written <b>by</b> Tolstoy</i> — книга написана Толстым. Страдательный залог подробно разобран в разделе 10.</p>
<h3>Think of и think about</h3>
<p>В первой таблице у <i>think</i> два предлога, и смысл у них немного разный. <i>Think about</i> — думать о чем-то долго, обдумывать: <i>I'm thinking <b>about</b> my new job</i> — я думаю о новой работе. <i>Think of</i> — вспомнить, прийти в голову или иметь мнение: <i>I can't think <b>of</b> his name</i> — не могу вспомнить, как его зовут; <i>What do you think <b>of</b> the film?</i> — Что ты думаешь о фильме? (как он тебе?). Часто подходят оба предлога, но в выражениях «придумать» и «вспомнить» нужен именно <i>of</i>.</p>`,
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
      ["He didn't answer ___ my question.", ["—", "on", "to"]], ["We discussed ___ the plan.", ["—", "about", "on"]],
      ["She entered ___ the room.", ["—", "into", "in"]], ["This bag belonged ___ my grandmother.", ["to", "—", "with"]],
      ["Why were you angry ___ me yesterday?", ["with", "on", "to"]], ["Look ___ this picture! What is the man doing?", ["at", "on", "—"]]
    ]},
    { type: 'translate', task: 'Переведите на английский.', items: [
      ["Я ищу свой телефон.", "I am looking for my phone."],
      ["Она боится темноты.", "She is afraid of the dark.|She's afraid of the dark.|She is afraid of darkness."],
      ["Все зависит от тебя.", "Everything depends on you.|It all depends on you."],
      ["Он хорошо играет в шахматы.", "He is good at chess.|He plays chess well.|He is good at playing chess.|He plays chess very well."],
      ["Он не ответил на мой вопрос.", "He didn't answer my question.|He hasn't answered my question."]
    ]},
    { type: 'gap', task: 'Впишите with, by, to или of.', items: [
      ["He wrote the letter ___ a pencil.", "with"], ["War and Peace is a novel ___ Tolstoy.", "by"],
      ["We went to the seaside ___ train.", "by"], ["She cut the cake ___ a big knife.", "with"],
      ["I gave my old books ___ my cousins.", "to"], ["Moscow is the capital ___ Russia.", "of"],
      ["Bring me a cup ___ coffee, please.", "of"], ["The teacher explained the rule ___ us again.", "to"],
      ["We sent the documents ___ post.", "by"], ["The top ___ the mountain is white ___ snow.", ["of", "with"]]
    ]},
    { type: 'listen', at: 2, task: 'Прослушайте предложение и соберите его из слов.', items: [
      ["My sister was afraid of dogs, but she was fond of cats.", "Моя сестра боялась собак, но любила кошек."],
      ["It depends on tomorrow's weather.", "Это зависит от завтрашней погоды."],
      ["Are you interested in music or art?", "Тебе интересна музыка или искусство?"]
    ]}
  ]}
]});

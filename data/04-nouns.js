BOOK.push({ n: 4, id: 'nouns', title: 'Существительное',
intro: 'Множественное число, притяжательный падеж и деление существительных на исчисляемые и неисчисляемые — от этого зависят и артикли, и выбор <i>much / many</i>.',
topics: [

{ id: 'noun-plural', level: 'A1', title: 'Множественное число', sub: 'boxes, babies, children',
  rule: `
<p>Чаще всего множественное число образуется очень просто — к слову добавляется окончание <i>-s</i>: <i>book → books</i>, <i>cat → cats</i>. Все остальные правила этой темы касаются того, как меняется написание на конце слова, и небольшого списка исключений, которые нужно запомнить.</p>
${T(["Правило", "Пример"], [
  ["после <i>s, ss, sh, ch, x, z</i> пишем <i>-es</i>", "<i>bus → bus<b>es</b>, watch → watch<b>es</b>, box → box<b>es</b></i>"],
  ["согласная + <i>o</i> → <i>-es</i> (есть исключения)", "<i>tomato → tomato<b>es</b>, hero → hero<b>es</b>; но photo<b>s</b>, piano<b>s</b>, radio<b>s</b></i>"],
  ["согласная + <i>y</i> → <i>-ies</i>", "<i>city → cit<b>ies</b>, baby → bab<b>ies</b></i>"],
  ["гласная + <i>y</i> → <i>-s</i>", "<i>boy → boy<b>s</b>, day → day<b>s</b></i>"],
  ["<i>f / fe</i> → <i>-ves</i>", "<i>knife → kni<b>ves</b>, leaf → lea<b>ves</b>, wife → wi<b>ves</b>; но roof<b>s</b>, chief<b>s</b></i>"]
])}
<h3>Исключения</h3>
${T(["Единственное", "Множественное"], [
  ["<i>man, woman</i>", "<i>men, women</i>"],
  ["<i>child</i>", "<i>children</i>"],
  ["<i>foot, tooth, goose</i>", "<i>feet, teeth, geese</i>"],
  ["<i>mouse</i>", "<i>mice</i>"],
  ["<i>ox</i>", "<i>oxen</i>"],
  ["<i>person</i>", "<i>people</i>"],
  ["<i>sheep, fish, deer, aircraft</i>", "не меняются"]
])}
${N("Если слово заканчивается на <i>man</i> или <i>woman</i>, во множественном числе меняется именно эта часть: <i>policeman → policemen</i>, <i>Englishwoman → Englishwomen</i>. А в словах через дефис окончание получает главное по смыслу слово: <i>passer-by → passers-by</i> (прохожий — прохожие).")}
<h3>Род существительных</h3>
<p>В отличие от русского, у английских существительных нет грамматического рода: не нужно запоминать, «он» стол или «она». Но для некоторых людей и животных есть отдельное слово женского рода. Чаще всего его образуют с помощью суффикса <i>-ess</i>: <i>actor → actress</i>, <i>lion → lioness</i>.</p>
${T(["Мужской род", "Женский род"], [
  ["<i>actor, waiter, host, prince, lion</i>", "<i>actr<b>ess</b>, waitr<b>ess</b>, host<b>ess</b>, princ<b>ess</b>, lion<b>ess</b></i>"],
  ["<i>hero, emperor, tiger</i>", "<i>hero<b>ine</b>, emp<b>ress</b>, tig<b>ress</b></i>"],
  ["<i>man, boy, father, brother, uncle, king, husband, nephew</i>", "<i>woman, girl, mother, sister, aunt, queen, wife, niece</i>"]
])}
${N("Сегодня большинство профессий называют одним словом и для мужчин, и для женщин: <i>a doctor, a teacher, a writer</i>. Слова <i>poetess</i> и <i>authoress</i> почти вышли из употребления — говорят просто <i>poet</i> и <i>author</i>. И даже <i>actor</i> все чаще используют, когда говорят об актрисе.")}`,
  ex: [
    { type: 'gap', task: 'Поставьте слово в скобках во множественное число.', items: [
      ["There were three ___ (box) on the floor.", "boxes"], ["Two ___ (baby) cried all night.", "babies"],
      ["We stayed in London for five ___ (day).", "days"], ["I put the ___ (knife) on the table.", "knives"],
      ["The ___ (child) played in the garden yesterday.", "children"], ["Mum bought ___ (tomato) and potatoes at the market.", "tomatoes"],
      ["I took ten ___ (photo) of the sea.", "photos"], ["My ___ (foot) were cold after the walk.", "feet"],
      ["The farmer has twenty ___ (sheep).", "sheep"], ["Two ___ (woman) were at the door.", "women"],
      ["He has two ___ (watch): an old one and a new one.", "watches"], ["There were thirty ___ (person) at the party.", "people|persons"],
      ["The cat caught two ___ (mouse) last night.", "mice"], ["In autumn the ___ (leaf) are yellow and red.", "leaves"],
      ["I lost my ___ (key) yesterday.", "keys"], ["Three ___ (policeman) came to the bank.", "policemen"]
    ]},
    { type: 'gap', task: 'Поставьте существительное во множественное число.', items: [
      ["This child was very quiet. → These ___ were very quiet.", "children"],
      ["That man was a doctor. → Those ___ were doctors.", "men"],
      ["My tooth hurt yesterday. → My ___ hurt yesterday.", "teeth"],
      ["The leaf fell from the tree. → The ___ fell from the tree.", "leaves"],
      ["The city was beautiful. → The ___ were beautiful.", "cities"],
      ["The bus was late. → The ___ were late.", "buses"],
      ["He caught a big fish. → He caught two big ___.", "fish"],
      ["There was a goose in the yard. → There were three ___ in the yard.", "geese"]
    ]},
    { type: 'translate', task: 'Переведите на английский.', items: [
      ["Эти дети — мои племянники.", "These children are my nephews.|These kids are my nephews."],
      ["Вчера у меня болели зубы.", "My teeth hurt yesterday.|My teeth ached yesterday.|Yesterday my teeth hurt.|Yesterday my teeth ached.|I had toothache yesterday.|I had a toothache yesterday."],
      ["Вчера на столе лежали три ножа.", "There were three knives on the table yesterday.|Yesterday there were three knives on the table.|There were 3 knives on the table yesterday."],
      ["Эти женщины работали в нашей школе.", "These women worked at our school.|These women worked in our school."],
      ["В поле было семь овец.", "There were seven sheep in the field.|There were 7 sheep in the field.|There were seven sheep in the meadow."]
    ]},
    { type: 'gap', task: 'Впишите существительное женского рода.', items: [
      ["He is an actor, and his sister is an ___ too.", "actress"], ["The waiter was busy, so a ___ brought our soup.", "waitress"],
      ["Our host met us at the door, and the ___ showed us the house.", "hostess"], ["The prince lived in a castle with a beautiful ___.", "princess"],
      ["The lion lay under a tree, and the ___ looked after the cubs.", "lioness"], ["The hero of the book is a boy, and the ___ is his friend Mary.", "heroine"],
      ["The emperor and the ___ lived in a big palace.", "empress"], ["At the zoo we saw a tiger and a ___.", "tigress"],
      ["The king and the ___ visited our city last year.", "queen"], ["Tom is a good husband, and Kate is a good ___.", "wife"],
      ["I have a nephew, Sam, and a ___, Lucy.", "niece"], ["My uncle Bob and my ___ Mary live in York.", "aunt"]
    ]},
    { type: 'listen', at: 2, task: 'Прослушайте предложение и соберите его из слов.', items: [
      ["The children played with two little puppies.", "Дети играли с двумя маленькими щенками."],
      ["These women bought tomatoes and three knives.", "Эти женщины купили помидоры и три ножа."],
      ["There are five sheep and ten geese on the farm.", "На ферме пять овец и десять гусей."]
    ]}
  ]},

{ id: 'noun-possessive', level: 'A1', title: 'Притяжательный падеж', sub: "Kate's bag, my parents' house",
  rule: `
<p>Чтобы сказать, кому что-то принадлежит, к названию человека или животного добавляют окончание <i>'s</i>: <i>Tom's bike</i> — велосипед Тома. Если же владелец — предмет, обычно используют предлог <i>of</i>: <i>the end of the film</i> — конец фильма, а не <i>the film's end</i>.</p>
${T(["Случай", "Как образуется", "Пример"], [
  ["единственное число", "<i>+ 's</i>", "<i><b>Kate's</b> bag, my <b>brother's</b> car</i>"],
  ["множественное на <i>-s</i>", "только апостроф <i>'</i>", "<i>my <b>parents'</b> house, the <b>girls'</b> room</i>"],
  ["неправильное множественное", "<i>+ 's</i>", "<i>the <b>children's</b> toys, <b>women's</b> clothes</i>"],
  ["два владельца вместе", "<i>'s</i> у последнего", "<i><b>Tom and Ann's</b> flat</i> — общая квартира"],
  ["время и расстояние", "<i>+ 's</i>", "<i><b>today's</b> paper, a <b>week's</b> holiday, a <b>mile's</b> walk</i>"],
  ["предметы", "<i>of</i>", "<i>the roof <b>of the house</b>, the end <b>of the film</b></i>"]
])}
${E([
  ["I'm going to <b>the dentist's</b>.", "Я иду к зубному (в кабинет зубного)."],
  ["We had dinner at <b>my aunt's</b>.", "Мы ужинали у тети (дома у тети)."]
])}
<h3>Притяжательный падеж без существительного</h3>
<p>В примерах выше после <i>'s</i> нет существительного, и это не ошибка. Слово, которое и так понятно из ситуации, англичане просто пропускают. Так, <i>the dentist's</i> — это сокращение от <i>the dentist's surgery</i> — кабинет зубного врача, а <i>my aunt's</i> — от <i>my aunt's house</i> — дом моей тети. Чаще всего так говорят о доме человека и о местах, где работают люди разных профессий: <i>the doctor's</i> — у врача, <i>the hairdresser's</i> — в парикмахерской, <i>the baker's</i> — в булочной. По-русски в таких случаях обычно говорят «у врача», «у тети», «в парикмахерской».</p>
${E([
  ["I need to go to <b>the hairdresser's</b>.", "Мне нужно сходить в парикмахерскую."],
  ["We spent the weekend at <b>my grandmother's</b>.", "Мы провели выходные у бабушки."]
])}
${N("Обратите внимание на место апострофа — от него зависит смысл. <i>The boy's toys</i> — это игрушки одного мальчика, а <i>the boys' toys</i> — игрушки нескольких мальчиков.")}`,
  ex: [
    { type: 'gap', task: 'Образуйте притяжательный падеж слова в скобках.', items: [
      ["I rode ___ (Tom) bike yesterday.", "Tom's"], ["The ___ (girls) bedroom is upstairs.", "girls'"],
      ["The ___ (children) coats were on the floor.", "children's"], ["My ___ (sister) husband worked in Paris last year.", "sister's"],
      ["Did you read ___ (today) newspaper?", "today's"], ["My ___ (parents) friends came to dinner.", "parents'"],
      ["This shop sells ___ (women) shoes.", "women's"], ["We stayed at my ___ (uncle) for a week.", "uncle's"],
      ["After the exams I had a ___ (week) rest.", "week's"], ["The ___ (students) answers were correct.", "students'"]
    ]},
    { type: 'choice', task: 'Выберите правильный вариант.', items: [
      ["I forgot ___.", ["the name of this street", "this street's name's", "the street name of"]], ["Yesterday was ___ birthday.", ["my mother's", "my mothers", "of my mother"]],
      ["___ toys were all over the room. (у нескольких детей)", ["The kids'", "The kid's", "The kids's"]], ["We went to ___ yesterday.", ["the doctor's", "the doctors", "doctor's the"]],
      ["___ wedding was beautiful. (их общая свадьба)", ["Ann and Mike's", "Ann's and Mike's", "Ann and Mike"]], ["I liked ___.", ["the end of the film", "the film's end's", "the end film"]]
    ]},
    { type: 'translate', task: 'Переведите на английский.', items: [
      ["Это машина моего брата.", "This is my brother's car.|It is my brother's car.|It's my brother's car."],
      ["Комната девочек наверху.", "The girls' room is upstairs."],
      ["Вчера игрушки детей лежали на полу.", "The children's toys were on the floor yesterday.|Yesterday the children's toys were on the floor.|The kids' toys were on the floor yesterday.|Yesterday the kids' toys were on the floor."],
      ["Я был у врача.", "I was at the doctor's.|I was at the doctor.|I went to the doctor's.|I went to the doctor.|I have been to the doctor's.|I have been to the doctor."],
      ["Мне понравился конец этой книги.", "I liked the end of this book.|I liked the ending of this book."]
    ]},
    { type: 'listen', at: 2, task: 'Прослушайте предложение и соберите его из слов.', items: [
      ["My sister's husband works at the children's hospital.", "Муж моей сестры работает в детской больнице."],
      ["We spent a week's holiday at my parents' house.", "Мы провели недельный отпуск в доме моих родителей."],
      ["Tom and Ann's flat is at the end of the street.", "Квартира Тома и Анны в конце улицы."]
    ]}
  ]},

{ id: 'noun-countable', level: 'A2', title: 'Исчисляемые и неисчисляемые', sub: 'an apple, some bread, a piece of advice',
  rule: `
<p><b>Исчисляемые</b> существительные — это то, что можно посчитать по штукам: <i>an apple, two apples</i>. <b>Неисчисляемые</b> обозначают вещества (<i>water, milk</i>), массы (<i>furniture, money</i>) и отвлеченные понятия (<i>advice, information</i>). Их нельзя посчитать напрямую, поэтому у них нет множественного числа и перед ними не ставят <i>a / an</i>. Будьте внимательны: некоторые слова исчисляемые в русском, но неисчисляемые в английском — например, <i>advice</i> (совет) и <i>news</i> (новости).</p>
${T(["Неисчисляемые", "Как посчитать"], [
  ["<i>water, milk, tea, juice</i>", "<i>a glass of water, a cup of tea, a bottle of milk</i>"],
  ["<i>bread, cheese, meat, butter</i>", "<i>a loaf of bread, a piece of cheese, a kilo of meat</i>"],
  ["<i>sugar, salt, rice</i>", "<i>a spoonful of sugar, a packet of rice</i>"],
  ["<i>advice, information, news, music, work</i>", "<i>a piece of advice, a piece of information, a piece of music</i>"],
  ["<i>money, furniture, luggage, homework</i>", "<i>a piece of furniture, two pieces of luggage</i>"],
  ["<i>weather, progress, fun, traffic</i>", "—"]
])}
<h3>Согласование с глаголом</h3>
${E([
  ["The news <b>is</b> good.", "Новости хорошие. (неисчисляемое)"],
  ["Your money <b>is</b> on the table.", "Твои деньги на столе. (неисчисляемое)"],
  ["My trousers <b>are</b> new.", "Мои брюки новые. (парный предмет)"]
])}
<p>Неисчисляемое существительное, даже если по-русски оно стоит во множественном числе («деньги», «новости»), в английском согласуется с глаголом в единственном числе: <i>is, was, has</i>. С парными предметами все наоборот: <i>trousers</i> (брюки), <i>jeans</i> (джинсы), <i>glasses</i> (очки), <i>scissors</i> (ножницы) состоят из двух одинаковых частей, поэтому всегда стоят во множественном числе, и глагол после них тоже во множественном. Чтобы посчитать такие предметы, говорят <i>a pair of</i> — пара: <i>a pair of jeans</i> — одни джинсы, <i>two pairs of scissors</i> — двое ножниц.</p>
<h3>Что ставить перед неисчисляемыми</h3>
<p>Раз перед неисчисляемым существительным нельзя поставить <i>a / an</i>, вместо него часто ставят <i>some</i> — немного, некоторое количество: <i>some bread</i> — (немного) хлеба, <i>some advice</i> — совет. А чтобы сказать «много» или «мало», с неисчисляемыми берут <i>much</i> и <i>little</i>, а не <i>many</i> и <i>few</i>: <i>much time</i> — много времени. Подробно о <i>some</i> и <i>any</i> рассказано в разделе 5, а о <i>much, many, little, few</i> — в разделе 7. В последней строке таблицы собраны слова, для которых нет привычного способа посчитать «по одному»: их просто употребляют без счета, например <i>The weather is nice</i> — погода хорошая.</p>
${N("Некоторые слова бывают и исчисляемыми, и неисчисляемыми, но значат при этом разное. Например, <i>a glass</i> — это стакан, а <i>glass</i> — стекло; <i>a paper</i> — газета, а <i>paper</i> — бумага; <i>a hair</i> — один волосок, а <i>hair</i> — волосы на голове.")}`,
  ex: [
    { type: 'choice', task: 'Выберите правильный вариант.', items: [
      ["The news ___ very good yesterday.", ["was", "were"]], ["Please give me ___.", ["some advice", "an advice", "advices"]],
      ["Last year my jeans ___ blue, but now I wear black ones.", ["were", "was"]], ["The teacher gave us ___ about the course.", ["some information", "an information", "informations"]],
      ["Her hair ___ very long last year.", ["was", "were"]], ["We bought ___ for the new flat.", ["some furniture", "a furniture", "furnitures"]],
      ["Bring me ___, please.", ["a cup of tea", "a tea cup of", "a teas"]], ["My ___ was very heavy, so I took a taxi.", ["luggage", "luggages", "a luggage"]],
      ["Where ___ my glasses? I'm looking for them.", ["are", "is"]], ["The weather ___ terrible yesterday.", ["was", "were"]]
    ]},
    { type: 'gap', task: 'Впишите слово-измеритель: glass, piece, loaf, cup, bar, bottle, kilo.', items: [
      ["I bought a ___ of bread at the bakery.", "loaf|piece"], ["She ate a ___ of chocolate after dinner.", "bar|piece"],
      ["My grandfather gave me a useful ___ of advice.", "piece"], ["He drank a ___ of water after the run.", "glass|bottle|cup"],
      ["I'm going to make a ___ of coffee.", "cup"], ["They have just opened a ___ of wine.", "bottle"],
      ["We will need a ___ of potatoes for the soup.", "kilo"], ["We have bought a new ___ of furniture for the living room.", "piece"]
    ]},
    { type: 'translate', task: 'Переведите на английский.', items: [
      ["У меня есть для тебя хорошие новости.", "I have good news for you.|I've got good news for you.|I have some good news for you.|I've got some good news for you."],
      ["Я положил деньги в сумку.", "I put the money in the bag.|I put my money in my bag.|I put my money in the bag.|I put the money into the bag.|I have put the money in the bag.|I put the money in my bag.|I put my money into my bag.|I put my money into the bag.|I put the money into my bag.|I have put my money in my bag.|I have put my money in the bag.|I have put the money in my bag."],
      ["Дай мне совет.", "Give me some advice.|Give me a piece of advice.|Give me advice."],
      ["Я потерял очки.", "I have lost my glasses.|I lost my glasses."],
      ["Купи буханку хлеба, пожалуйста.", "Buy a loaf of bread, please.|Please buy a loaf of bread."]
    ]},
    { type: 'listen', at: 2, task: 'Прослушайте предложение и соберите его из слов.', items: [
      ["The news is good, but the weather was terrible.", "Новости хорошие, а погода была ужасная."],
      ["Please give me a piece of advice about the course.", "Пожалуйста, дайте мне совет насчет курса."],
      ["I bought a loaf of bread and two bottles of milk.", "Я купил буханку хлеба и две бутылки молока."]
    ]}
  ]},

{ id: 'noun-collective', level: 'B2', title: 'Собирательные существительные', sub: 'the police are, my family is / are',
  rule: `
<p>Слова вроде <i>family</i> — семья, <i>team</i> — команда, <i>class</i> — класс, <i>staff</i> — сотрудники, <i>crew</i> — экипаж, <i>audience</i> — зрители, <i>government</i> — правительство, <i>police</i> — полиция — называют группу людей как одно целое. Сложность с ними одна: какой глагол ставить после такого слова — в единственном числе или во множественном. По-русски мы всегда говорим «семья пришла», а в английском возможны оба варианта, и выбор зависит от смысла.</p>
${T(["Слова", "Глагол", "Пример"], [
  ["<i>family, team, class, staff, crew, audience, government, company</i>", "ед. ч. — группа как целое; мн. ч. — ее отдельные члены", "<i>My family <b>is</b> very large.</i> — Моя семья очень большая. <i>My family <b>are</b> all doctors.</i> — В моей семье все врачи."],
  ["<i>police, people, cattle</i>", "всегда мн. ч.", "<i>The police <b>are</b> looking for him.</i> — Полиция его ищет."]
])}
<h3>Группа как целое или ее члены</h3>
<p>Если мы думаем о группе как об одном целом — одной семье, одной команде, одной компании, — глагол стоит в единственном числе: <i>The team <b>has</b> won its first match</i> — команда выиграла свой первый матч. Если же важны отдельные люди внутри группы, каждый со своими действиями и мнением, в британском английском глагол ставят во множественном числе: <i>The team <b>are</b> arguing about the plan</i> — члены команды спорят о плане. В американском английском в обоих случаях глагол обычно ставят в единственном числе.</p>
<p>Местоимение после такого слова согласуется с глаголом. С единственным числом говорят <i>it</i> и <i>its</i>, со множественным — <i>they</i> и <i>their</i>: <i>The company <b>has</b> opened <b>its</b> new office</i>, но <i>My family <b>are</b> packing <b>their</b> bags</i>. Смешивать их в одном предложении не стоит.</p>
<h3>Police и people</h3>
<p>Слово <i>police</i> всегда требует глагола во множественном числе: <i>The police <b>have</b> arrived</i> — полиция приехала. Одного полицейского так назвать нельзя: говорят <i>a police officer</i>. Слово <i>people</i> («люди») — это множественное число от <i>person</i>, поэтому и с ним глагол всегда во множественном числе: <i>People <b>say</b> that…</i> — люди говорят, что… Так же ведет себя <i>cattle</i> — крупный рогатый скот; одно животное — <i>a cow</i>. Об одном человеке из группы говорят <i>a member of staff</i> или <i>a member of the team</i>. А сами слова <i>team, family, class</i> — обычные исчисляемые существительные со множественным числом: <i>two teams, three families</i>.</p>
${N("Главная ловушка для русскоязычных — фразы вроде «Полиция задержала вора»: по-русски тут единственное число, а по-английски только множественное: <i>The police <b>have</b> caught the thief</i>.")}`,
  ex: [
    { type: 'choice', task: 'Выберите правильную форму глагола.', items: [
      ["The police ___ looking for the thief.", ["are", "is"]],
      ["People ___ that this restaurant is very good.", ["say", "says"]],
      ["The club ___ opened its new stadium.", ["has", "have"]],
      ["The family ___ all coming to dinner, and they are bringing their children.", ["are", "is"]],
      ["My family ___ very large: there are twelve of us.", ["is", "are"]],
      ["The cattle ___ in the field near the river.", ["are", "is"]],
      ["The government ___ announced its new plan.", ["has", "have"]],
      ["The staff ___ arguing about their holidays again.", ["are", "is"]]
    ]},
    { type: 'gap', task: 'Впишите it, its, they или their.', items: [
      ["The committee has made ___ final decision.", "its"],
      ["The team are proud of ___ new coach.", "their"],
      ["The company is growing. ___ has opened three new shops this year.", "it"],
      ["The police have closed the road. ___ are looking for a lost child.", "they"],
      ["The class has finished ___ project on time.", "its"],
      ["My family are going on holiday. ___ are leaving tomorrow morning.", "they"]
    ]},
    { type: 'translate', task: 'Переведите на английский.', items: [
      ["Полиция уже приехала.", "The police have already arrived.|The police have arrived already.|The police have arrived.|The police have already come.|The police have come."],
      ["Полиция ищет пропавшую собаку.", "The police are looking for the missing dog.|The police are looking for the lost dog.|The police are searching for the missing dog."],
      ["Наша команда выиграла матч.", "Our team won the match.|Our team has won the match.|Our team have won the match.|Our team won the game.|Our team has won the game.|Our team have won the game."],
      ["Вся семья сидела за столом.", "The whole family was sitting at the table.|The whole family were sitting at the table.|All the family were sitting at the table.|All the family was sitting at the table.|The whole family sat at the table.|All the family sat at the table.|The entire family was sitting at the table.|The entire family were sitting at the table.|The entire family sat at the table."],
      ["Правительство приняло новый закон.", "The government has passed a new law.|The government passed a new law.|The government have passed a new law.|The government has adopted a new law.|The government adopted a new law.|The government have adopted a new law."]
    ]},
    { type: 'listen', at: 2, task: 'Прослушайте предложение и соберите его из слов.', items: [
      ["The police are still looking for the stolen car.", "Полиция все еще ищет украденную машину."],
      ["Our class has its own website with photos and news.", "У нашего класса есть свой сайт с фотографиями и новостями."],
      ["The audience were clapping and cheering for ten minutes.", "Зрители хлопали и кричали «браво» десять минут."]
    ]}
  ]}
]});

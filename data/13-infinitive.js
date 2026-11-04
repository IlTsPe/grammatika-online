BOOK.push({ n: 13, id: 'infinitive', title: 'Инфинитив',
intro: 'Инфинитив называет действие, не указывая лица и числа. Раздел о том, где он нужен и какие формы принимает.',
topics: [

{ id: 'inf-to', level: 'B1', title: 'Инфинитив с to и без to', sub: 'want to go · can go · make him go',
  rule: `
<p>Инфинитив — это начальная форма глагола, и обычно перед ней стоит частица <i>to</i>: <i>I want <b>to go</b></i>. Но в некоторых случаях <i>to</i> не нужна. Их немного, они собраны в таблице, и их стоит запомнить.</p>
${T(["Без to", "Пример"], [
  ["после модальных глаголов (кроме <i>ought to, have to, be to</i>)", "<i>I can <b>swim</b>. You must <b>go</b>.</i> — Я умею плавать. Ты должен идти."],
  ["после <i>make</i> и <i>let</i> (заставить, позволить)", "<i>She made me <b>cry</b>. Let him <b>go</b>.</i> — Она довела меня до слез. Отпусти его."],
  ["после <i>had better</i> и <i>would rather</i>", "<i>You'd better <b>stay</b>. I'd rather <b>walk</b>.</i> — Тебе лучше остаться. Я лучше пройдусь пешком."],
  ["после <i>see, hear, watch, feel</i> + дополнение", "<i>I saw him <b>leave</b>.</i> — Я видел, как он ушел."],
  ["после <i>help</i> — можно и так, и так", "<i>Help me (<b>to</b>) <b>carry</b> it.</i> — Помоги мне это донести."]
])}
<p>Оборот <i>would rather</i> («я бы предпочел», «лучше я…») говорит о собственном выборе: <i>I'd rather stay at home</i> — я лучше останусь дома. Отрицание ставится перед глаголом: <i>I'd rather not say</i> — я лучше промолчу.</p>
<p>Сочетание «глагол восприятия + кто-то + действие» называется сложным дополнением; подробно оно разобрано в разделе 17 «Complex Object».</p>
${T(["С to", "Пример"], [
  ["после глаголов <i>want, would like, decide, hope, plan, agree, refuse, promise, learn, manage, forget, try, offer, need</i>", "<i>She decided <b>to leave</b>.</i> — Она решила уйти."],
  ["после прилагательных", "<i>It's easy <b>to understand</b>. I'm glad <b>to see</b> you.</i> — Это легко понять. Рад тебя видеть."],
  ["после вопросительных слов", "<i>I don't know what <b>to do</b>. Show me how <b>to use</b> it.</i> — Я не знаю, что делать. Покажи мне, как этим пользоваться."],
  ["после <i>the first, the last, the only</i>", "<i>He was the first <b>to come</b>.</i> — Он пришел первым."]
])}
<p>Инфинитив после <i>the first, the last, the only</i> показывает, кто первым, последним или единственным сделал что-то. По-русски его обычно переводят глаголом в прошедшем или настоящем времени: <i>She was the last to leave</i> — она ушла последней; <i>He is the only one to know</i> — только он один знает.</p>
${N("Если предложение с <i>make</i> поставить в пассив, <i>to</i> возвращается: <i>He was made <b>to work</b></i> — его заставили работать.")}
<h3>Устойчивые обороты с инфинитивом</h3>
<p>Некоторые обороты с инфинитивом превратились в устойчивые вводные выражения, как русские «по правде говоря» или «мягко говоря». Они показывают отношение говорящего к тому, что он говорит, и обычно отделяются запятой.</p>
${T(["Оборот", "Перевод"], [
  ["<i>to tell the truth</i>", "по правде говоря"],
  ["<i>to be honest</i>", "честно говоря"],
  ["<i>to begin with</i>", "начнем с того, что; во-первых"],
  ["<i>to say nothing of</i>", "не говоря уже о"],
  ["<i>to put it mildly</i>", "мягко говоря"],
  ["<i>to make matters worse</i>", "в довершение всего"],
  ["<i>strange to say</i>", "как ни странно"],
  ["<i>needless to say</i>", "само собой разумеется"]
])}`,
  /* перевод слов в упражнениях: по наведению или касанию (gloss.js); ключи — в нижнем регистре, как слово стоит в тексте */
  gloss: {
    'decide': 'решать',
    'dress': 'платье', 'finish': 'закончить', 'on': 'на', 'one': 'один', 'our': 'наш', 'team': 'команда', 'time': 'время', 'which': 'какой (из), который',
    'bus': 'автобус', 'cheaper': 'дешевле',
    'film': 'фильм', 'book': 'книга', "it's": 'это (= it is)', 'i have': 'у меня есть', 'i': 'я', 'he': 'он', 'she': 'она',
    'it': 'это; он, она (о предмете)', 'we': 'мы', 'they': 'они', 'my': 'мой, моя, мое', 'have': 'иметь; есть (о еде)',
    'go': 'идти, ехать', 'the': 'определенный артикль', 'what': 'что, какой', 'london': 'Лондон',
    'go to': 'ходить в, идти в', 'a': 'неопределенный артикль', 'very': 'очень', 'new': 'новый', 'this': 'этот, эта, это', 'and': 'и',
    'only': 'только', 'see': 'увидеть', 'to': 'в, на (куда); частица перед глаголом', 'park': 'парк', 'room': 'комната',
    'no': 'нет, никакой', "let's": 'давай(те)', 'always': 'всегда', 'tell': 'говорить, рассказывать',
    'me': 'меня, мне', 'homework': 'домашнее задание', 'visit': 'посещают', 'want': 'хотеть', 'swim': 'плавать', 'you': 'ты, вы',
    'meet': 'встретить, познакомиться', 'parents': 'родители', 'like': 'нравиться, любить', 'speaks': 'говорит', 'french': 'французский',
    'tired': 'уставший', 'doctor': 'врач', 'how': 'как', 'last': 'последний', 'late': 'поздно', 'but': 'но',
    'english': 'английский', 'arrive': 'приезжать, прибывать', 'his': 'его', "don't": 'не (= do not)', "i'm": 'я (= I am)',
    'wait': 'ждать', 'decided': 'решили (от decide)', 'made': 'заставил (от make)', 'coat': 'пальто', 'help': 'помогать',
    'raining': 'идет дождь (от rain)', 'was': 'был (форма to be)', "haven't": 'не (= have not)', 'read': 'читать; прочитал',
    'seen': 'видел (3-я форма see)', 'got': 'добрался (от get)', 'got lost': 'заблудились', 'station': 'вокзал, станция', 'get': 'добраться; получить',
    "i'd rather": 'я бы предпочел', 'agreed': 'согласился', 'besides': 'кроме того', 'better': 'лучше', "can't": 'не может, не могу (= cannot)',
    'difficult': 'трудный', 'does': 'делает; вспомогательный глагол', 'german': 'немецкий', 'gets': 'получает; становится', 'glad': 'рад',
    'harder': 'усерднее', "i'd": 'я бы (= I would / I had)', "i'd like": 'я бы хотел(а)', "i've": 'я (= I have)', "isn't": 'не (= is not)', 'job': 'работа',
    'know': 'знать', 'let': 'позволять', 'lost': 'потерял; потерянный', 'make': 'заставлять; делать', 'marks': 'оценки', 'money': 'деньги',
    'must': 'должен', 'never': 'никогда', 'polite': 'вежливый', 'promised': 'пообещал', 'rather': 'довольно; скорее',
    'should': 'следует, стоит', 'text': 'текст', 'top': 'вершина', "you'd": 'ты бы (= you would / you had)', "you'd better": 'тебе лучше'
  },
  ex: [
    { type: 'choice', task: 'Нужна ли частица to? Выберите вариант.', items: [
      ["I want ___ a doctor.", ["to become", "become"]], ["You must ___ harder.", ["work", "to work"]],
      ["My parents let me ___ late.", ["stay", "to stay"]], ["She decided ___ a new job.", ["to find", "find"]],
      ["You'd better ___ a coat.", ["take", "to take"]], ["The film made me ___.", ["laugh", "to laugh"]],
      ["I can't decide which dress ___.", ["to buy", "buy"]], ["It's difficult ___ this text.", ["to translate", "translate"]],
      ["He was made ___ the room.", ["to leave", "leave"]], ["I'd rather ___ the bus — it's cheaper.", ["take", "to take"]]
    ]},
    { type: 'gap', task: 'Впишите to там, где она нужна, или «-», где не нужна.', items: [
      ["I'd like ___ visit London.", "to"], ["You should ___ see a doctor.", "-|0"],
      ["She promised ___ help me.", "to"], ["Let's ___ go to the park.", "-|0"],
      ["I'm glad ___ meet you.", "to"], ["He can't ___ swim.", "-|0"],
      ["They agreed ___ wait.", "to"], ["Don't make me ___ wait!", "-|0"],
      ["Our team was the only one ___ finish on time.", "to"], ["Tell me how ___ get to the station.", "to"]
    ]},
    { type: 'translate', task: 'Переведите на английский.', items: [
      ["Я хочу научиться плавать.", "I want to learn to swim.|I want to learn how to swim."],
      ["Мама не разрешает мне смотреть телевизор поздно.", "Mum doesn't let me watch TV late.|My mother doesn't let me watch TV late.|My mum doesn't let me watch TV late.|Mum doesn't allow me to watch TV late.|My mum doesn't allow me to watch TV late.|My mother doesn't allow me to watch TV late."],
      ["Я не знаю, куда идти.", "I don't know where to go."],
      ["Тебе лучше позвонить ему сегодня.", "You had better call him today.|You had better phone him today.|You had better ring him today."]
    ]},
    { type: 'choice', task: 'Выберите подходящий оборот.', items: [
      ["___, I haven't read the book — I've only seen the film.", ["To tell the truth", "To begin with", "To make matters worse"]],
      ["I can't go: ___, I have no money, and besides, I'm tired.", ["to begin with", "to put it mildly", "strange to say"]],
      ["It was raining, and ___, we got lost.", ["to make matters worse", "to begin with", "to put it mildly"]],
      ["He isn't very polite, ___.", ["to put it mildly", "to begin with", "to make matters worse"]],
      ["He speaks French and German, ___ English.", ["to say nothing of", "to tell the truth", "to begin with"]],
      ["___, he never does his homework, but he always gets top marks.", ["Strange to say", "To put it mildly", "To say nothing of"]]
    ]},
    { type: 'listen', at: 2, task: 'Прослушайте предложение и соберите его из слов.', items: [
      ["My parents made me practise the piano every day.", "Родители заставляли меня каждый день заниматься на пианино."],
      ["We would like to spend our holiday by the sea.", "Мы бы хотели провести отпуск на море."],
      ["You had better take a taxi. It's too late for the bus.", "Тебе лучше взять такси: для автобуса уже слишком поздно."]
    ]}
  ]},

{ id: 'inf-purpose', level: 'B1', title: 'Инфинитив цели; too и enough', sub: 'to buy bread · too young to drive',
  rule: `
<p>Инфинитив часто отвечает на вопрос «зачем?» и переводится словом «чтобы». Он же стоит после <i>too</i> («слишком») и <i>enough</i> («достаточно»).</p>
${E([
  ["I went to the shop <b>to buy</b> bread.", "Я пошел в магазин, чтобы купить хлеб."],
  ["She works hard <b>in order to</b> pass the exam.", "Она много занимается, чтобы сдать экзамен."],
  ["He left early <b>so as not to</b> be late.", "Он вышел пораньше, чтобы не опоздать."]
])}
<p>Обычный инфинитив цели с <i>to</i> подходит для большинства случаев. Обороты <i>in order to</i> и <i>so as to</i> значат то же самое, но звучат книжнее и подчеркивают, что речь именно о цели. Они особенно нужны, когда цель отрицательная — «чтобы не»: просто <i>not to</i>, без <i>so as</i> или <i>in order</i>, в значении цели звучит неестественно, поэтому говорят <i>so as not to</i> или <i>in order not to</i>. Например, <i>I wrote it down so as not to forget</i> — я записал это, чтобы не забыть.</p>
${T(["Конструкция", "Значение", "Пример"], [
  ["<i>too + прил. + to V</i>", "слишком …, чтобы", "<i>He is <b>too young to drive</b>.</i> — Он слишком молод, чтобы водить машину."],
  ["<i>прил. + enough + to V</i>", "достаточно …, чтобы", "<i>She is <b>old enough to drive</b>.</i> — Она достаточно взрослая, чтобы водить машину."],
  ["<i>enough + сущ. + to V</i>", "достаточно чего-то", "<i>We have <b>enough money to buy</b> it.</i> — У нас достаточно денег, чтобы это купить."],
  ["<i>too … for someone to V</i>", "для кого-то", "<i>The box is <b>too heavy for me to carry</b>.</i> — Коробка слишком тяжелая, мне ее не унести."]
])}
<p>Конструкция с <i>for</i> нужна, когда действие инфинитива выполняет не подлежащее, а кто-то другой. В предложении <i>The box is too heavy for me to carry</i> тяжелая — коробка, а нести ее должен «я». Этого человека называют после <i>for</i>, а уже потом ставят инфинитив: <i>for me to carry</i> — чтобы я мог нести. Так же говорят и с <i>enough</i>: <i>The text is easy enough for children to read</i> — текст достаточно простой, чтобы его могли прочитать дети.</p>
${N("Место <i>enough</i> зависит от соседнего слова: оно стоит <b>после</b> прилагательного (<i>big enough</i>), но <b>перед</b> существительным (<i>enough time</i>). И помните: «чтобы» не переводится как <i>for</i> с глаголом — правильно <i>I came <b>to see</b> you</i>, а не <i>for see you</i>.")}`,
  /* перевод слов в упражнениях: по наведению или касанию (gloss.js); ключи — в нижнем регистре, как слово стоит в тексте */
  gloss: {
    'baby': 'малыш', 'quietly': 'тихо', 'spoke': 'говорил (от speak)',
    'bag': 'сумка', 'i': 'я', 'he': 'он', 'she': 'она', 'we': 'мы', 'is': 'есть, является (форма to be)', 'have': 'иметь; есть (о еде)',
    'go': 'идти, ехать', 'the': 'определенный артикль', 'go to': 'ходить в, идти в', 'a': 'неопределенный артикль', 'dog': 'собака',
    'today': 'сегодня', 'new': 'новый', 'this': 'этот, эта, это', 'first': 'первый', 'to': 'в, на (куда); частица перед глаголом',
    'museum': 'музей', 'our': 'наш', 'lift': 'лифт', 'school': 'школа', 'homework': 'домашнее задание', 'tea': 'чай',
    'car': 'машина', 'train': 'поезд', 'up': 'вверх', 'him': 'его, ему', "don't": 'не (= do not)', 'heavy': 'тяжелый',
    'here': 'здесь, сюда', 'us': 'нас, нам', 'went': 'пошел, поехал (от go)',
    'called': 'позвонил (от call)', 'early': 'рано', 'came': 'пришел (от come)', 'got': 'добрался (от get)', 'got up': 'встали', 'so': 'поэтому; так',
    'over': 'через', 'too': 'тоже; слишком', 'as': 'как; в качестве', 'so as': 'чтобы', 'about': 'о; около', 'alone': 'один, в одиночестве',
    'drink': 'пить', 'fence': 'забор', 'finish': 'закончить', 'jump': 'прыгать', 'money': 'деньги', 'office': 'офис', 'parcel': 'посылка',
    'post': 'почта; отправить', 'post office': 'почта', 'saves': 'экономит'
  },
  ex: [
    { type: 'gap', task: 'Закончите предложение инфинитивом цели (глагол в скобках). Если в скобках несколько слов через косую черту, используйте в ответе их все — в нужной форме и порядке.', items: [
      ["I went to the post office ___ (send) a parcel.", "to send"], ["She came ___ (help) us.", "to help"],
      ["He saves money ___ (buy) a car.", "to buy"], ["We got up early ___ (catch) the first train.", "to catch"],
      ["I called him ___ (ask) about the homework.", "to ask"], ["We spoke quietly so as ___ (not / wake) the baby.", "not to wake"]
    ]},
    { type: 'choice', task: 'Выберите правильный вариант.', items: [
      ["Our dog is ___ to jump over the fence.", ["too old", "enough old", "very old"]], ["She is ___ to go to school alone.", ["old enough", "enough old", "too old"]],
      ["We don't have ___ to finish today.", ["enough time", "enough of time", "too time"]], ["The tea is ___ to drink.", ["too hot", "hot enough not", "enough hot"]],
      ["This bag is too heavy ___ to lift.", ["for her", "to her", "her"]], ["We came here ___ the new museum.", ["to visit", "for visit", "for visiting"]]
    ]},
    { type: 'translate', task: 'Переведите на английский.', items: [
      ["Я пришел, чтобы помочь тебе.", "I came to help you.|I have come to help you."],
      ["Он слишком устал, чтобы работать.", "He is too tired to work.|He's too tired to work.|He was too tired to work."],
      ["Он достаточно высокий, чтобы достать до полки.", "He is tall enough to reach the shelf.|He's tall enough to reach the shelf."],
      ["У нас недостаточно яиц, чтобы испечь торт.", "We don't have enough eggs to bake a cake.|We haven't got enough eggs to bake a cake.|We don't have enough eggs to make a cake.|We haven't got enough eggs to make a cake."]
    ]},
    { type: 'listen', at: 2, task: 'Прослушайте предложение и соберите его из слов.', items: [
      ["She went to the library to return some books.", "Она пошла в библиотеку вернуть книги."],
      ["My little sister is still too young to stay at home alone.", "Моя младшая сестра еще слишком мала, чтобы оставаться дома одной."],
      ["It wasn't warm enough in the room to sit without a jacket.", "В комнате было недостаточно тепло, чтобы сидеть без куртки."]
    ]}
  ]},

{ id: 'inf-forms', level: 'B2', title: 'Формы инфинитива', sub: 'to do, to be done, to have done',
  rule: `
<p>Формы инфинитива, как и формы обычного глагола, показывают две вещи. Во-первых, когда происходит действие: одновременно с главным или позже него (<i>to see</i>) либо раньше него (<i>to have seen</i>). Во-вторых, выполняет ли его само подлежащее (<i>to tell</i>) или действие совершают над подлежащим (<i>to be told</i>).</p>
${T(["Форма", "Актив", "Пассив"], [
  ["Simple — одновременно / позже", "<i>to <b>write</b></i>", "<i>to <b>be written</b></i>"],
  ["Continuous — в процессе", "<i>to <b>be writing</b></i>", "—"],
  ["Perfect — раньше", "<i>to <b>have written</b></i>", "<i>to <b>have been written</b></i>"],
  ["Perfect Continuous — длилось до", "<i>to <b>have been writing</b></i>", "—"]
])}
${E([
  ["I'm glad <b>to see</b> you.", "Рад тебя видеть. (сейчас)"],
  ["I'm glad <b>to have seen</b> you.", "Рад, что повидал тебя. (раньше)"],
  ["This letter must <b>be answered</b> today.", "На это письмо нужно ответить сегодня. (пассив)"],
  ["She seems <b>to be sleeping</b>.", "Кажется, она спит. (сейчас, процесс)"],
  ["He seems <b>to have forgotten</b> about it.", "Кажется, он об этом забыл. (раньше)"],
  ["They seem <b>to have been waiting</b> for hours.", "Похоже, они ждут уже несколько часов. (длилось до момента речи)"]
])}
<p>Пример пассивного инфинитива: <i>I want to be invited</i> — я хочу, чтобы меня пригласили. Отрицательная частица <i>not</i> ставится перед любой формой инфинитива: <i>I'm sorry <b>not to have sent</b> it</i> — простите, что не отправил.</p>
<p>Оборот <i>seem to</i> («кажется», «похоже») — самый частый спутник разных форм инфинитива, потому что по форме инфинитива видно, о каком времени догадка: <i>seems to be</i> — сейчас, <i>seems to have been</i> — раньше. Такие предложения называются сложным подлежащим; подробно они разобраны в разделе 18 «Complex Subject».</p>
${N("Чаще всего перфектный инфинитив стоит после <i>seem, be lucky, be sorry, be glad</i>.")}`,
  /* перевод слов в упражнениях: по наведению или касанию (gloss.js); ключи — в нижнем регистре, как слово стоит в тексте */
  gloss: {
    'rubbish': 'мусор',
    'birthday': 'день рождения', 'evening': 'вечер', 'every': 'каждый', 'on': 'на', 'out': 'наружу', 'your': 'твой, ваш',
    'friendly': 'дружелюбный', 'hopes': 'надеется',
    'school': 'школа', 'such': 'такой', 'team': 'команда',
    'house': 'дом', 'week': 'неделя', 'i': 'я', 'he': 'он', 'she': 'она', 'they': 'они', 'is': 'есть, является (форма to be)',
    'the': 'определенный артикль', 'at': 'в (о времени); у, на (о месте)', 'in': 'в', 'what': 'что, какой', 'a': 'неопределенный артикль',
    'today': 'сегодня', 'this': 'этот, эта, это', 'for': 'для; в течение', 'to': 'в, на (куда); частица перед глаголом',
    'yesterday': 'вчера', 'look': 'выглядеть', 'now': 'сейчас', 'do': 'делать; вспомогательный глагол',
    'you': 'ты, вы', 'like': 'нравиться, любить', 'tired': 'уставший', 'last week': 'на прошлой неделе', 'last': 'последний',
    'when': 'когда', 'years': 'годы, лет', 'ago': 'назад', 'happy': 'счастливый', 'letter': 'письмо',
    "i'm": 'я (= I am)', 'ticket': 'билет', 'at the moment': 'в данный момент', 'children': 'дети', 'moment': 'момент', 'each': 'каждый',
    'other': 'другой', 'came': 'пришел (от come)', 'hours': 'часы, часов', 'exam': 'экзамен', 'tickets': 'билеты', 'in advance': 'заранее',
    'each other': 'друг друга', 'advance': 'продвижение', "doesn't": 'не (= does not)', 'hundred': 'сто',
    'lucky': 'везучий', 'must': 'должен', 'pretended': 'притворился', 'problem': 'проблема', 'seem': 'казаться', 'seems': 'кажется',
    'sorry': 'извините; жаль'
  },
  ex: [
    { type: 'choice', task: 'Выберите нужную форму инфинитива.', items: [
      ["She is happy ___ in such a friendly team now.", ["to work", "to have worked", "to be worked"]], ["I'm sorry ___ you yesterday.", ["to have disturbed", "to disturb", "to be disturbed"]],
      ["The tickets must ___ in advance.", ["be booked", "book", "have booked"]], ["She seems ___ at the moment.", ["to be working", "to have worked", "to work at"]],
      ["He doesn't like ___ what to do.", ["to be told", "to tell", "to have told"]], ["She is lucky ___ the last ticket yesterday.", ["to have got", "to get", "to be got"]],
      ["The children seem ___ for hours. They look tired.", ["to have been playing", "to play", "to be played"]], ["This house seems ___ a hundred years ago.", ["to have been built", "to be built", "to build"]]
    ]},
    { type: 'gap', task: 'Поставьте инфинитив в нужную форму. Если в скобках несколько слов через косую черту, используйте в ответе их все — в нужной форме и порядке.', items: [
      ["She hopes ___ (choose) for the school team.", "to be chosen"], ["She is happy ___ (pass) the exam yesterday.", "to have passed"],
      ["He pretended ___ (read) when I came in.", "to be reading"], ["The rubbish must ___ (take) out every evening.", "be taken"],
      ["They seem ___ (know) each other for years.", "to have known"], ["I'm sorry ___ (not / call) you on your birthday.", "not to have called"]
    ]},
    { type: 'translate', task: 'Переведите на английский.', items: [
      ["Кажется, они заблудились.", "They seem to have lost their way.|They seem to have got lost.|They seem to be lost.|It seems that they have got lost.|It seems they have got lost.|It seems that they are lost.|It seems they are lost."],
      ["Я рад, что побывал в Риме.", "I am glad to have been to Rome.|I am glad to have visited Rome.|I am glad that I have been to Rome.|I am glad I have been to Rome.|I am glad I visited Rome.|I am glad that I visited Rome."],
      ["Эти цветы нужно поливать каждый день.", "These flowers must be watered every day.|These flowers have to be watered every day.|These flowers need to be watered every day.|These flowers should be watered every day."],
      ["Кажется, они нас ждут.", "They seem to be waiting for us.|It seems that they are waiting for us.|It seems they are waiting for us."]
    ]},
    { type: 'listen', at: 2, task: 'Прослушайте предложение и соберите его из слов.', items: [
      ["I'm glad to have met your parents at last.", "Я рад, что наконец познакомился с твоими родителями."],
      ["The windows need to be cleaned before the guests arrive.", "Окна нужно помыть до приезда гостей."],
      ["The road seems to have been repaired recently.", "Дорогу, кажется, недавно отремонтировали."]
    ]}
  ]}
]});

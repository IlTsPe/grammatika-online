BOOK.push({ n: 12, id: 'infinitive', title: 'Инфинитив',
intro: 'Когда инфинитив употребляется с частицей <i>to</i>, а когда без нее; инфинитив цели и конструкции с <i>too / enough</i>; формы инфинитива.',
topics: [

{ id: 'inf-to', level: 'B1', title: 'Инфинитив с to и без to', sub: 'want to go · can go · make him go',
  rule: `
<p>Инфинитив — это начальная форма глагола, и обычно перед ней стоит частица <i>to</i>: <i>I want <b>to go</b></i>. Но есть несколько случаев, когда <i>to</i> не нужна — например, после модальных глаголов (<i>can go</i>) и после <i>let</i> и <i>make</i>. Эти случаи немногочисленны, и их стоит запомнить.</p>
${T(["Без to", "Пример"], [
  ["после модальных глаголов (кроме ought to, have to, be to)", "<i>I can <b>swim</b>. You must <b>go</b>.</i>"],
  ["после <i>make</i> и <i>let</i> (заставить, позволить)", "<i>She made me <b>cry</b>. Let him <b>go</b>.</i>"],
  ["после <i>had better</i> и <i>would rather</i>", "<i>You'd better <b>stay</b>. I'd rather <b>walk</b>.</i>"],
  ["после <i>see, hear, watch, feel</i> + дополнение", "<i>I saw him <b>leave</b>.</i>"],
  ["после <i>help</i> — можно и так, и так", "<i>Help me (<b>to</b>) <b>carry</b> it.</i>"]
])}
${T(["С to (самые частые глаголы)", "Пример"], [
  ["<i>want, would like, decide, hope, plan, agree, refuse, promise, learn, manage, forget, try, offer, need</i>", "<i>She decided <b>to leave</b>.</i>"],
  ["после прилагательных", "<i>It's easy <b>to understand</b>. I'm glad <b>to see</b> you.</i>"],
  ["после вопросительных слов", "<i>I don't know what <b>to do</b>. Show me how <b>to use</b> it.</i>"],
  ["после <i>the first, the last, the only</i>", "<i>He was the first <b>to come</b>.</i>"]
])}
${N("После <i>make</i> («заставить») частица <i>to</i> не нужна: <i>They made him <b>work</b></i>. Но если это предложение перевести в пассив, <i>to</i> возвращается: <i>He was made <b>to work</b></i> — его заставили работать.")}
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
  ex: [
    { type: 'choice', task: 'Нужна ли частица to? Выберите вариант.', items: [
      ["I want ___ a doctor.", ["to become", "become"]], ["You must ___ harder.", ["work", "to work"]],
      ["My parents let me ___ late.", ["stay", "to stay"]], ["She decided ___ a new job.", ["to find", "find"]],
      ["You'd better ___ a coat.", ["take", "to take"]], ["The film made me ___.", ["laugh", "to laugh"]],
      ["I don't know what ___.", ["to say", "say"]], ["It's difficult ___ this text.", ["to translate", "translate"]],
      ["He was made ___ the room.", ["to leave", "leave"]], ["I'd rather ___ at home.", ["stay", "to stay"]]
    ]},
    { type: 'gap', task: 'Впишите to там, где он нужен, или «-», где не нужен.', items: [
      ["I'd like ___ visit London.", "to"], ["You should ___ see a doctor.", "-|0"],
      ["She promised ___ help me.", "to"], ["Let's ___ go to the park.", "-|0"],
      ["I'm glad ___ meet you.", "to"], ["He can't ___ swim.", "-|0"],
      ["They agreed ___ wait.", "to"], ["Don't make me ___ wait!", "-|0"],
      ["She was the last ___ arrive.", "to"], ["Tell me how ___ get to the station.", "to"]
    ]},
    { type: 'translate', task: 'Переведите на английский.', items: [
      ["Я хочу стать врачом.", "I want to become a doctor.|I want to be a doctor."],
      ["Мама не разрешает мне смотреть телевизор поздно.", "Mum doesn't let me watch TV late.|My mother doesn't let me watch TV late.|My mum doesn't let me watch TV late.|Mum doesn't allow me to watch TV late.|My mum doesn't allow me to watch TV late.|My mother doesn't allow me to watch TV late."],
      ["Я не знаю, что делать.", "I don't know what to do."],
      ["Тебе лучше остаться дома.", "You had better stay at home.|You'd better stay at home.|You'd better stay home.|You had better stay home."]
    ]},
    { type: 'choice', task: 'Выберите подходящий оборот.', items: [
      ["___, I haven't read the book — I've only seen the film.", ["To tell the truth", "To begin with", "To make matters worse"]],
      ["I can't go: ___, I have no money, and besides, I'm tired.", ["to begin with", "to put it mildly", "strange to say"]],
      ["It was raining, and ___, we got lost.", ["to make matters worse", "to begin with", "to put it mildly"]],
      ["He isn't very polite, ___.", ["to put it mildly", "to begin with", "to make matters worse"]],
      ["He speaks French and German, ___ English.", ["to say nothing of", "to tell the truth", "to begin with"]],
      ["___, he passed the exam although he hadn't studied at all.", ["Strange to say", "To put it mildly", "To say nothing of"]]
    ]},
    { type: 'listen', at: 2, task: 'Прослушайте предложение и соберите его из слов.', items: [
      ["My parents made me practise the piano every day.", "Родители заставляли меня каждый день заниматься на пианино."],
      ["I would like to visit the Maldives one day.", "Я бы хотел когда-нибудь побывать на Мальдивах."],
      ["You had better take a taxi. It's too late for the bus.", "Тебе лучше взять такси: для автобуса уже слишком поздно."]
    ]}
  ]},

{ id: 'inf-purpose', level: 'B1', title: 'Инфинитив цели; too и enough', sub: 'to buy bread · too young to drive',
  rule: `
<p>Инфинитив часто отвечает на вопрос «зачем?» и переводится словом «чтобы»: <i>I went to the shop <b>to buy</b> bread</i> — я пошел в магазин, чтобы купить хлеба. Он же стоит после <i>too</i> («слишком») и <i>enough</i> («достаточно»): <i>too young <b>to drive</b></i> — слишком молод, чтобы водить.</p>
${E([
  ["I went to the shop <b>to buy</b> bread.", "Я пошел в магазин, чтобы купить хлеб."],
  ["She works hard <b>in order to</b> pass the exam.", "in order to — книжнее, «для того чтобы»."],
  ["He left early <b>so as not to</b> be late.", "Отрицательная цель: so as not to / in order not to."]
])}
${T(["Конструкция", "Значение", "Пример"], [
  ["<i>too + прил. + to V</i>", "слишком …, чтобы", "<i>He is <b>too young to drive</b>.</i>"],
  ["<i>прил. + enough + to V</i>", "достаточно …, чтобы", "<i>She is <b>old enough to drive</b>.</i>"],
  ["<i>enough + сущ. + to V</i>", "достаточно чего-то", "<i>We have <b>enough money to buy</b> it.</i>"],
  ["<i>too … for someone to V</i>", "для кого-то", "<i>The box is <b>too heavy for me to carry</b>.</i>"]
])}
${N("Место <i>enough</i> зависит от соседнего слова: оно стоит <b>после</b> прилагательного (<i>big enough</i>), но <b>перед</b> существительным (<i>enough time</i>). И помните: «чтобы» не переводится как <i>for</i> с глаголом — правильно <i>I came <b>to see</b> you</i>, а не <i>for see you</i>.")}`,
  ex: [
    { type: 'gap', task: 'Закончите предложение инфинитивом цели (глагол в скобках).', items: [
      ["I went to the shop ___ (buy) some bread.", "to buy"], ["She came ___ (help) us.", "to help"],
      ["He saves money ___ (buy) a car.", "to buy"], ["We got up early ___ (catch) the first train.", "to catch"],
      ["I called him ___ (ask) about the homework.", "to ask"], ["She left early so as ___ (not / be) late.", "not to be"]
    ]},
    { type: 'choice', task: 'Выберите правильный вариант.', items: [
      ["He is ___ to drive a car.", ["too young", "enough young", "young enough not"]], ["She is ___ to go to school alone.", ["old enough", "enough old", "too old"]],
      ["We don't have ___ to finish today.", ["enough time", "enough of time", "too time"]], ["The tea is ___ to drink.", ["too hot", "hot enough not", "enough hot"]],
      ["The box is too heavy ___ to carry.", ["for me", "to me", "me"]], ["I came here ___ you.", ["to see", "for see", "for seeing"]]
    ]},
    { type: 'translate', task: 'Переведите на английский.', items: [
      ["Я пришел, чтобы помочь тебе.", "I came to help you.|I have come to help you."],
      ["Он слишком устал, чтобы работать.", "He is too tired to work.|He's too tired to work.|He was too tired to work."],
      ["Она достаточно взрослая, чтобы понять это.", "She is old enough to understand it.|She's old enough to understand it.|She is old enough to understand this.|She's old enough to understand this.|She is old enough to understand that.|She's old enough to understand that."],
      ["У нас достаточно денег, чтобы купить машину.", "We have enough money to buy a car.|We've got enough money to buy a car."]
    ]},
    { type: 'listen', at: 2, task: 'Прослушайте предложение и соберите его из слов.', items: [
      ["She went to the market to buy some fresh fish.", "Она пошла на рынок купить свежей рыбы."],
      ["My brother is still too young to drive.", "Мой брат еще слишком молод, чтобы водить машину."],
      ["It wasn't warm enough in the room to sit without a jacket.", "В комнате было недостаточно тепло, чтобы сидеть без куртки."]
    ]}
  ]},

{ id: 'inf-forms', level: 'B2', title: 'Формы инфинитива', sub: 'to do, to be done, to have done',
  rule: `
<p>У инфинитива, как и у обычного глагола, есть разные формы. Они показывают две вещи. Во-первых, когда происходит действие — одновременно с главным (<i>to see</i>) или раньше него (<i>to have seen</i>). Во-вторых, кто его выполняет — само подлежащее (<i>to tell</i>) или кто-то другой над ним (<i>to be told</i>).</p>
${T(["Форма", "Актив", "Пассив"], [
  ["Simple — одновременно / позже", "<i>to <b>write</b></i>", "<i>to <b>be written</b></i>"],
  ["Continuous — в процессе", "<i>to <b>be writing</b></i>", "—"],
  ["Perfect — раньше", "<i>to <b>have written</b></i>", "<i>to <b>have been written</b></i>"],
  ["Perfect Continuous — длилось до", "<i>to <b>have been writing</b></i>", "—"]
])}
${E([
  ["I'm glad <b>to see</b> you.", "Рад видеть (сейчас)."],
  ["I'm glad <b>to have seen</b> you.", "Рад, что повидал (уже)."],
  ["This letter must <b>be answered</b> today.", "На письмо нужно ответить (пассив)."],
  ["She seems <b>to be sleeping</b>.", "Кажется, она спит (сейчас, процесс)."],
  ["He seems <b>to have forgotten</b> about it.", "Кажется, он забыл (раньше)."]
])}
${N("Перфектный инфинитив после <i>seem, be lucky, be sorry, be glad</i> показывает, что действие произошло раньше: <i>I'm sorry <b>to have disturbed</b> you</i> — простите, что побеспокоил.")}`,
  ex: [
    { type: 'choice', task: 'Выберите нужную форму инфинитива.', items: [
      ["I'm glad ___ you now.", ["to see", "to have seen", "to be seen"]], ["I'm sorry ___ you yesterday.", ["to have disturbed", "to disturb", "to be disturbed"]],
      ["The work must ___ by Friday.", ["be done", "do", "have done"]], ["She seems ___ at the moment.", ["to be working", "to have worked", "to work at"]],
      ["He doesn't like ___ what to do.", ["to be told", "to tell", "to have told"]], ["She is lucky ___ the last ticket yesterday.", ["to have got", "to get", "to be got"]],
      ["The children seem ___ for hours. They look tired.", ["to have been playing", "to play", "to be played"]], ["This house seems ___ a hundred years ago.", ["to have been built", "to be built", "to build"]]
    ]},
    { type: 'gap', task: 'Поставьте инфинитив в нужную форму.', items: [
      ["I want ___ (invite) to the party.", "to be invited"], ["She is happy ___ (pass) the exam yesterday.", "to have passed"],
      ["He pretended ___ (read) when I came in.", "to be reading"], ["This problem must ___ (solve) today.", "be solved"],
      ["They seem ___ (know) each other for years.", "to have known"], ["I'm sorry ___ (not / send) the letter last week.", "not to have sent"]
    ]},
    { type: 'translate', task: 'Переведите на английский.', items: [
      ["Кажется, он забыл об этом.", "He seems to have forgotten about it.|He seems to have forgotten it."],
      ["Рад, что повидал тебя.", "I am glad to have seen you.|Glad to have seen you."],
      ["Это письмо нужно отправить сегодня.", "This letter must be sent today.|This letter has to be sent today.|This letter needs to be sent today."],
      ["Кажется, она спит.", "She seems to be sleeping.|She seems to be asleep."]
    ]},
    { type: 'listen', at: 2, task: 'Прослушайте предложение и соберите его из слов.', items: [
      ["I'm glad to have met your parents at last.", "Я рад, что наконец познакомился с твоими родителями."],
      ["This letter needs to be answered by Friday.", "На это письмо нужно ответить к пятнице."],
      ["She pretended to be reading when I came in.", "Когда я вошел, она сделала вид, что читает."]
    ]}
  ]}
]});

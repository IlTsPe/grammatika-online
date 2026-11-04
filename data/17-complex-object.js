BOOK.push({ n: 17, id: 'complex-object', title: 'Сложное дополнение (Complex Object)',
intro: 'Конструкция «дополнение + инфинитив»: <i>I want <b>you to come</b></i>. На русский ее обычно переводят придаточным со словами «чтобы», «как», «что».',
topics: [

{ id: 'co-want', level: 'B1', title: 'Want / expect + кто-то + to V', sub: 'I want you to help me',
  rule: `
<p>По-русски мы говорим «Я хочу, <b>чтобы</b> ты пришел». В английском такого «чтобы» нет: после глаголов желания и ожидания (<i>want, expect, would like</i>) ставят того, кто должен действовать, а за ним — инфинитив с <i>to</i>: <i>I want <b>you to come</b></i>. Эта конструкция и называется сложным дополнением.</p>
${F("want / would like / expect / ask / tell + <b>me / him / Tom</b> + <b>to V</b>")}
${T(["Пример", "Кто действует + что делает"], [
  ["<i>I want <b>you to help</b> me.</i> — Я хочу, <b>чтобы ты помог</b> мне.", "<i>you + to help</i>"],
  ["<i>Mum wants <b>me to become</b> a doctor.</i> — Мама хочет, <b>чтобы я стал</b> врачом.", "<i>me + to become</i>"],
  ["<i>I didn't expect <b>him to come</b>.</i> — Я не ожидал, <b>что он придет</b>.", "<i>him + to come</i>"],
  ["<i>The teacher asked <b>us not to make</b> a noise.</i> — Учитель попросил нас <b>не шуметь</b>.", "<i>us + not to make</i>"],
  ["<i>I'd like <b>you to come</b>.</i> — Мне бы хотелось, <b>чтобы вы пришли</b>.", "<i>you + to come</i>"]
])}
<h3>Просьбы, советы и приказы</h3>
<p>По той же схеме строятся предложения с глаголами <i>ask, tell, advise, order</i> (вы уже встречали их в косвенной речи, тема 12.3), а также <i>allow</i>.</p>
${E([
  ["The officer <b>ordered the soldiers to stop</b>.", "Офицер приказал солдатам остановиться."]
])}
${N("Дословный перевод «хочу, чтобы» через <i>that</i> — ошибка: <i>I want that you help me</i> так не говорят. И обратите внимание на форму местоимения: после <i>want</i> оно стоит в объектной форме — <i>me, him, her, us, them</i>: <i>I want <b>him</b> to come</i>.")}`,
  /* перевод слов в упражнениях: по наведению или касанию (gloss.js); ключи — в нижнем регистре, как слово стоит в тексте */
  gloss: {
    'car': 'машина', 'eat': 'есть (принимать пищу)', 'grandmother': 'бабушка', 'more': 'больше, более', 'vegetables': 'овощи', 'wash': 'мыть',
    'dad': 'папа', 'take': 'брать; занимать (о времени)', 'taxi': 'такси', 'win': 'выиграть',
    'umbrella': 'зонт', 'i': 'я', 'he': 'он', 'she': 'она', 'we': 'мы', 'my': 'мой, моя, мое', 'the': 'определенный артикль',
    'at': 'в (о времени); у, на (о месте)', 'a': 'неопределенный артикль', 'window': 'окно', 'please': 'пожалуйста',
    'on': 'на; в (о днях)', 'buy': 'купить', 'her': 'ее, ей', 'mother': 'мама', 'to': 'в, на (куда); частица перед глаголом',
    'some': 'немного, несколько', 'bread': 'хлеб', 'table': 'стол', 'your': 'твой, ваш', 'home': 'дом; домой', 'with': 'с',
    'me': 'меня, мне', 'do': 'делать; вспомогательный глагол', 'want': 'хотеть', 'come': 'приходить', 'you': 'ты, вы',
    'like': 'нравиться, любить', 'doctor': 'врач', 'tomorrow': 'завтра', 'mum': 'мама', 'him': 'его, ему', 'his': 'его',
    'way': 'путь, дорога', "don't": 'не (= do not)', 'forget': 'забывать', 'heavy': 'тяжелый', 'think': 'думать', 'be': 'быть',
    'call': 'звонить', 'told': 'сказал (от tell)', 'us': 'нас, нам', 'help': 'помогать', "didn't": 'не (= did not)', 'six': 'шесть',
    'advised': 'посоветовал', 'asked': 'спросил, попросил', 'bags': 'сумки', 'expect': 'ожидать',
    "i'd": 'я бы (= I would / I had)', "i'd like": 'я бы хотел(а)', 'match': 'матч', 'said': 'сказал (от say)', 'says': 'говорит', 'should': 'следует, стоит',
    'these': 'эти', 'truth': 'правда', 'wanted': 'хотел', 'wants': 'хочет', 'would': 'бы; вспомогательный глагол', 'would like': 'хотела бы'
  },
  ex: [
    { type: 'gap', task: 'Закончите предложение, используя Complex Object (кто-то + инфинитив).', items: [
      ["Wash the car, please. → I want you ___ the car.", "to wash"], ["“Come at six,” he said to us. → He wanted ___ at six.", "us to come"],
      ["My grandmother says: “Eat more vegetables!” → My grandmother wants ___ more vegetables.", "me to eat"],
      ["I didn't think she would win. → I didn't expect ___.", "her to win"], ["“Don't forget your umbrella,” she said to him. → She told ___ his umbrella.", "him not to forget"],
      ["Please call me tomorrow. → I'd like ___ me tomorrow.", "you to call"], ["“Tom, buy some bread on your way home, please,” she said. → She wanted ___ some bread on his way home.", "Tom to buy"],
      ["“You should take a taxi,” Dad said to me. → Dad advised ___ a taxi.", "me to take"]
    ]},
    { type: 'choice', task: 'Выберите правильный вариант.', items: [
      ["I want ___ the truth.", ["you to tell me", "that you tell me", "you tell me"]], ["She would like ___ her.", ["him to visit", "he visits", "he to visit"]],
      ["Mum told ___ the table.", ["me to lay", "me lay", "I to lay"]], ["We expect ___ the match.", ["them to win", "they win", "they to win"]],
      ["He asked ___ the window.", ["her not to open", "her don't open", "her to not opening"]], ["Do you want ___ with you?", ["me to go", "that I go", "I go"]]
    ]},
    { type: 'translate', task: 'Переведите на английский.', items: [
      ["Я хочу, чтобы ты пришел на мой день рождения в субботу.", "I want you to come to my birthday party on Saturday.|I want you to come to my birthday on Saturday.|I would like you to come to my birthday party on Saturday.|I'd like you to come to my birthday party on Saturday.|I would like you to come to my birthday on Saturday.|I'd like you to come to my birthday on Saturday."],
      ["Папа хочет, чтобы я выучил английский.", "Dad wants me to learn English.|My dad wants me to learn English.|My father wants me to learn English."],
      ["Мы не ожидали, что она так быстро ответит.", "We didn't expect her to answer so quickly.|We didn't expect her to reply so quickly.|We didn't expect her to answer so fast.|We didn't expect her to reply so fast."],
      ["Учитель попросил нас закрыть окна.", "The teacher asked us to close the windows.|The teacher asked us to shut the windows."],
      ["Я бы хотел, чтобы вы подождали здесь.", "I would like you to wait here."]
    ]},
    { type: 'listen', at: 2, task: 'Прослушайте предложение и соберите его из слов.', items: [
      ["I want you to meet my new friend from school.", "Я хочу, чтобы ты познакомился с моим новым школьным другом."],
      ["The teacher expects all the students to come on time.", "Учитель ждет, что все ученики придут вовремя."],
      ["My parents would like me to study in Germany.", "Родители хотели бы, чтобы я учился в Германии."]
    ]}
  ]},

{ id: 'co-make-let', level: 'B1', title: 'Make / let + кто-то + V', sub: 'She made me laugh · Let me go',
  rule: `
<p>После глаголов <i>make</i> («заставлять») и <i>let</i> («позволять») тоже ставят того, кто действует, а затем инфинитив — но уже <b>без</b> частицы <i>to</i>, как в теме 13.1: <i>The film made me <b>cry</b></i> — фильм заставил меня плакать; <i>Let me <b>help</b> you</i> — позволь мне помочь.</p>
${T(["Глагол", "Значение", "Пример"], [
  ["<i>make + кто-то + V</i>", "заставить", "<i>She <b>made</b> me <b>laugh</b>. The teacher made us <b>rewrite</b> it.</i> — Она меня рассмешила. Учитель заставил нас это переписать."],
  ["<i>let + кто-то + V</i>", "позволить, разрешить", "<i>My parents <b>let</b> me <b>go</b> to the party.</i> — Родители отпустили меня на вечеринку."],
  ["<i>allow / force + кто-то + to V</i>", "разрешить / вынудить (с to!)", "<i>They <b>allowed</b> us <b>to stay</b>.</i> — Они разрешили нам остаться."]
])}
<p>Глаголы <i>allow</i> и <i>force</i> близки по смыслу к <i>let</i> и <i>make</i>, но строятся иначе — с частицей <i>to</i>, как <i>want</i> из темы 17.1. <i>Allow</i> значит «разрешить», и звучит он официальнее, чем <i>let</i>. <i>Force</i> значит «вынудить, принудить», то есть заставить силой или обстоятельствами, против воли. Почему в этих парах <i>to</i> опускают после <i>make</i> и <i>let</i>, но не после <i>allow</i> и <i>force</i>, объяснить нельзя — это нужно просто запомнить.</p>
${E([
  ["The rain <b>forced</b> us <b>to stay</b> at home.", "Дождь вынудил нас остаться дома."],
  ["Our school doesn't <b>allow</b> students <b>to use</b> phones in class.", "В нашей школе ученикам не разрешают пользоваться телефонами на уроках."]
])}
${N("Глагол <i>let</i> в пассиве не используют — вместо него говорят <i>be allowed to</i>: <i>I <b>was allowed to</b> go</i> — мне разрешили пойти.")}`,
  /* перевод слов в упражнениях: по наведению или касанию (gloss.js); ключи — в нижнем регистре, как слово стоит в тексте */
  gloss: {
    'dad': 'папа', 'dinner': 'ужин', 'in': 'в', 'please': 'пожалуйста', 'river': 'река',
    'hour': 'час', 'teacher': 'учитель', 'we': 'мы', 'they': 'они', 'the': 'определенный артикль',
    'for': 'для; в течение', 'always': 'всегда', 'me': 'меня, мне', 'test': 'контрольная', 'again': 'снова',
    'were': 'были (форма to be)', "don't": 'не (= do not)',
    'made': 'заставил (от make)', 'us': 'нас, нам', 'an': 'неопределенный артикль', "didn't": 'не (= did not)',
    'allowed': 'разрешили', 'cutting': 'режет', 'let': 'позволять', 'make': 'заставлять', 'makes': 'заставляет', 'myself': 'сам, себя',
    'onions': 'лук', 'pool': 'бассейн'
  },
  ex: [
    { type: 'gap', task: 'Впишите глагол в нужной форме (с to или без to).', items: [
      ["Cutting onions always makes me ___ (cry).", "cry"], ["Please let me ___ (pay) for dinner.", "pay"],
      ["They allowed us ___ (use) the pool.", "to use"], ["The teacher made us ___ (write) the test again.", "write"],
      ["Don't make me ___ (laugh)!", "laugh"], ["Let me ___ (introduce) myself.", "introduce"],
      ["We were made ___ (wait) for an hour.", "to wait"], ["Dad didn't let us ___ (swim) in the river.", "swim"]
    ]},
    { type: 'translate', task: 'Переведите на английский.', items: [
      ["Мама заставила меня убрать комнату.", "Mum made me clean the room.|My mother made me clean the room.|My mum made me clean my room.|Mother made me clean my room.|Mum made me tidy my room.|My mother made me tidy the room.|Mum made me clean my room.|My mum made me clean the room.|My mother made me clean my room.|Mum made me tidy the room.|My mum made me tidy the room.|My mum made me tidy my room.|My mother made me tidy my room.|Mum made me tidy up my room."],
      ["Позволь мне объяснить.", "Let me explain."],
      ["Родители не разрешают мне завести кошку.", "My parents don't let me have a cat.|My parents don't allow me to have a cat.|My parents don't let me keep a cat.|My parents don't allow me to keep a cat."],
      ["Этот фильм заставил меня задуматься.", "This film made me think.|This movie made me think.|The film made me think."]
    ]},
    { type: 'listen', at: 2, task: 'Прослушайте предложение и соберите его из слов.', items: [
      ["The sad ending of the film made my mother cry.", "Из-за грустного конца фильма мама заплакала."],
      ["Will your parents let you stay at our house tonight?", "Родители разрешат тебе переночевать у нас?"],
      ["The dentist made me open my mouth wider.", "Стоматолог заставил меня шире открыть рот."]
    ]}
  ]},

{ id: 'co-see', level: 'B2', title: 'See / hear / watch + кто-то + V / V-ing', sub: 'I saw him cross · I saw him crossing',
  rule: `
<p>После глаголов восприятия — <i>see, hear, watch, feel</i> — тоже ставят того, кто действует, и инфинитив <b>без</b> <i>to</i>, если действие увидели или услышали целиком. Вместо инфинитива можно поставить форму на <i>-ing</i>, если важно, что действие было в процессе.</p>
${F("see / hear / watch / feel / notice + <b>кто-то</b> + <b>V</b> или <b>V-ing</b>")}
${T(["Форма", "Значение", "Пример"], [
  ["<i>+ V</i>", "видел действие целиком, от начала до конца", "<i>I saw him <b>cross</b> the street.</i> — Я видел, как он перешел улицу."],
  ["<i>+ V-ing</i>", "видел часть процесса", "<i>I saw him <b>crossing</b> the street.</i> — Я видел, как он переходил улицу."]
])}
${E([
  ["We heard her <b>sing</b>.", "Мы слышали, как она спела. (песню целиком)"],
  ["I felt something <b>touching</b> my leg.", "Я почувствовал, как что-то касается моей ноги."],
  ["Nobody noticed him <b>leave</b>.", "Никто не заметил, как он ушел."]
])}
<h3>Когда see и hear значат «понимать» и «узнавать»</h3>
<p>Глаголы <i>see</i> и <i>hear</i> не всегда говорят о том, что человек видел или слышал своими глазами и ушами. <i>See</i> часто значит «понимать», а <i>hear</i> — «узнавать, слышать от других». Например, <i>I see</i> — это «понятно», а не «я вижу». В таком значении после них ставят не сложное дополнение, а придаточное предложение со словом <i>that</i> (его можно опустить). Сравните: <i>I heard him <b>sing</b></i> — я слышал, как он спел (сам слышал пение), и <i>I heard <b>that</b> he sings</i> — я слышал (узнал от других), что он поет.</p>
${E([
  ["I <b>see that</b> you are tired.", "Я вижу (понимаю), что ты устал."],
  ["I <b>heard that</b> he had moved to Moscow.", "Я слышал (мне рассказали), что он переехал в Москву."]
])}
<p>Теперь о пассиве. Если предложение <i>Someone saw him enter the house</i> поставить в пассив, то есть сделать главным того, кого видели, получится <i>He <b>was seen to enter</b> the house</i> — видели, как он вошел в дом. В таком предложении частица <i>to</i> обязательна, хотя в активном ее не было. Похожие конструкции «подлежащее + пассив + инфинитив» разобраны в разделе 18.</p>`,
  /* перевод слов в упражнениях: по наведению или касанию (gloss.js); ключи — в нижнем регистре, как слово стоит в тексте */
  gloss: {
    'closed': 'закрыт', 'window': 'окно',
    'house': 'дом', 'i': 'я', 'he': 'он', 'she': 'она', 'it': 'это; он, она (о предмете)', 'we': 'мы', 'they': 'они',
    'my': 'мой, моя, мое', 'the': 'определенный артикль', 'in': 'в', 'door': 'дверь', 'her': 'ее, ей', 'see': 'увидеть', 'room': 'комната',
    'bank': 'банк', 'under': 'под', 'you': 'ты, вы', 'football': 'футбол', 'were': 'были (форма to be)',
    'car': 'машина', 'did': 'вспомогательный глагол прошедшего времени', 'him': 'его, ему', 'next': 'следующий', 'baby': 'малыш',
    'birds': 'птицы', 'saw': 'увидел (от see)', 'singing': 'петь (от sing)', 'was': 'был (форма to be)', 'arm': 'рука',
    'seen': 'видел (3-я форма see)', 'stopped': 'остановился; прекратился', 'around': 'по (вокруг)', 'them': 'их, им',
    'feet': 'ноги, ступни', 'felt': 'чувствовал (от feel)', 'garden': 'сад', 'ground': 'земля',
    'heard': 'слышал (от hear)', 'notice': 'замечать', 'opened': 'открыл', 'playing': 'играет', 'somebody': 'кто-то', 'touched': 'тронул',
    'watched': 'смотрел'
  },
  ex: [
    { type: 'choice', task: 'Выберите правильный вариант.', items: [
      ["I saw him ___ the house.", ["leave", "to leave", "left"]], ["We heard the baby ___ in the next room.", ["crying", "to cry", "cried"]],
      ["Did you notice her ___ in?", ["come", "to come", "came"]], ["I felt the ground ___ under my feet.", ["shaking", "to shake", "shaken"]],
      ["She watched the birds ___ around the garden.", ["flying", "to fly", "flown"]], ["He was seen ___ the bank.", ["to enter", "enter", "entered"]]
    ]},
    { type: 'gap', task: 'Закончите предложение, используя Complex Object с глаголом восприятия: V — если действие в первом предложении завершено, V-ing — если оно было в процессе.', items: [
      ["She closed the window. I saw it. → I saw her ___ the window.", "close"],
      ["She was singing. I heard it. → I heard her ___.", "singing"],
      ["The door opened. We heard it. → We heard the door ___.", "open"],
      ["They were playing football. We watched them. → We watched them ___ football.", "playing"],
      ["Somebody touched my arm. I felt it. → I felt somebody ___ my arm.", "touch"],
      ["The car stopped. Did you see it? → Did you see the car ___?", "stop"]
    ]},
    { type: 'translate', task: 'Переведите на английский.', items: [
      ["Я видел, как он сел в машину.", "I saw him get into the car.|I saw him get in the car."],
      ["Мы слышали, как смеются дети.", "We heard the children laughing.|We heard the children laugh."],
      ["Я видел, как она улыбнулась.", "I saw her smile."]
    ]},
    { type: 'listen', at: 2, task: 'Прослушайте предложение и соберите его из слов.', items: [
      ["I saw a little boy cross the road at a red light.", "Я видел, как маленький мальчик перешел дорогу на красный свет."],
      ["We heard somebody singing in the flat upstairs.", "Мы слышали, как кто-то поет в квартире наверху."],
      ["She watched the children playing in the snow.", "Она смотрела, как дети играют в снегу."]
    ]}
  ]}
]});

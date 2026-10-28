BOOK.push({ n: 17, id: 'complex-object', title: 'Сложное дополнение (Complex Object)',
intro: 'Конструкция «дополнение + инфинитив»: <i>I want <b>you to come</b></i>. В русском ее обычно переводят придаточным со словами «чтобы», «как», «что».',
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
<p>По той же схеме строятся предложения с глаголами <i>ask, tell, advise, order, allow</i> — вы уже встречали их в косвенной речи (тема 12.3).</p>
${E([
  ["The officer <b>ordered the soldiers to stop</b>.", "Офицер приказал солдатам остановиться."]
])}
${N("Дословный перевод «хочу, чтобы» через <i>that</i> — ошибка: <i>I want that you help me</i> так не говорят. И обратите внимание на форму местоимения: после <i>want</i> оно стоит в объектной форме — <i>me, him, her, us, them</i>: <i>I want <b>him</b> to come</i>.")}`,
  ex: [
    { type: 'gap', task: 'Закончите предложение, используя Complex Object (местоимение + инфинитив).', items: [
      ["Help me with these heavy bags, please. → I want you ___ me with these heavy bags.", "to help"], ["“Come at six,” he said to us. → He wanted ___ at six.", "us to come"],
      ["My mother says: “Be a doctor!” → My mother wants ___ a doctor.", "me to be|me to become"],
      ["I didn't think he would come. → I didn't expect ___.", "him to come"], ["“Don't be late,” the teacher said to them. → The teacher told ___ late.", "them not to be"],
      ["Please call me tomorrow. → I'd like ___ me tomorrow.", "you to call"], ["“Tom, buy some bread on your way home, please,” she said. → She wants ___ some bread on his way home.", "Tom to buy"],
      ["The doctor said I should rest. → The doctor advised ___.", "me to rest"]
    ]},
    { type: 'choice', task: 'Выберите правильный вариант.', items: [
      ["I want ___ the truth.", ["you to tell me", "that you tell me", "you tell me"]], ["She would like ___ her.", ["him to visit", "he visits", "he to visit"]],
      ["Mum told ___ the table.", ["me to lay", "me lay", "I to lay"]], ["We expect ___ the match.", ["them to win", "they win", "they to win"]],
      ["He asked ___ the window.", ["her not to open", "her don't open", "her to not opening"]], ["Do you want ___ with you?", ["me to go", "that I go", "I go"]]
    ]},
    { type: 'translate', task: 'Переведите на английский.', items: [
      ["Я хочу, чтобы ты пришел на мой день рождения в субботу.", "I want you to come to my birthday party on Saturday.|I want you to come to my birthday on Saturday.|I would like you to come to my birthday party on Saturday.|I'd like you to come to my birthday party on Saturday.|I would like you to come to my birthday on Saturday.|I'd like you to come to my birthday on Saturday."],
      ["Мама хочет, чтобы я стал врачом.", "Mum wants me to become a doctor.|My mother wants me to become a doctor.|My mum wants me to become a doctor.|Mother wants me to become a doctor.|My mother wants me to be a doctor.|Mum wants me to be a doctor.|My mum wants me to be a doctor."],
      ["Я не ожидал, что он позвонит.", "I didn't expect him to call.|I didn't expect him to phone.|I didn't expect him to ring."],
      ["Учитель попросил нас закрыть окна.", "The teacher asked us to close the windows.|The teacher asked us to shut the windows."],
      ["Я бы хотел, чтобы вы мне помогли.", "I would like you to help me.|I'd like you to help me."]
    ]},
    { type: 'listen', at: 2, task: 'Прослушайте предложение и соберите его из слов.', items: [
      ["I want you to tell me what happened yesterday.", "Я хочу, чтобы ты рассказал мне, что случилось вчера."],
      ["The teacher expects all the students to come on time.", "Учитель ждет, что все ученики придут вовремя."],
      ["My parents would like me to study in Germany.", "Родители хотели бы, чтобы я учился в Германии."]
    ]}
  ]},

{ id: 'co-make-let', level: 'B1', title: 'Make / let + кто-то + V', sub: 'She made me laugh · Let me go',
  rule: `
<p>После глаголов <i>make</i> («заставлять») и <i>let</i> («позволять») тоже ставят того, кто действует, а затем инфинитив — но уже <b>без</b> частицы <i>to</i>: <i>The film made me <b>cry</b></i> — фильм заставил меня плакать; <i>Let me <b>help</b> you</i> — позволь мне помочь.</p>
${T(["Глагол", "Значение", "Пример"], [
  ["<i>make + кто-то + V</i>", "заставить", "<i>She <b>made</b> me <b>laugh</b>. The teacher made us <b>rewrite</b> it.</i> — Она меня рассмешила. Учитель заставил нас это переписать."],
  ["<i>let + кто-то + V</i>", "позволить, разрешить", "<i>My parents <b>let</b> me <b>go</b> to the party.</i> — Родители отпустили меня на вечеринку."],
  ["<i>allow / force + кто-то + to V</i>", "разрешить / вынудить (с to!)", "<i>They <b>allowed</b> us <b>to stay</b>.</i> — Они разрешили нам остаться."]
])}
<p>Глаголы <i>allow</i> и <i>force</i> близки по смыслу к <i>let</i> и <i>make</i>, но строятся иначе — с частицей <i>to</i>, как <i>want</i> из темы 17.1. <i>Allow</i> значит «разрешить», и звучит он официальнее, чем <i>let</i>. <i>Force</i> значит «вынудить, принудить», то есть заставить силой или обстоятельствами, против воли. Почему в этой паре <i>to</i> опускают после <i>make</i> и <i>let</i>, но не после <i>allow</i> и <i>force</i>, объяснить нельзя — это нужно просто запомнить.</p>
${E([
  ["The rain <b>forced</b> us <b>to stay</b> at home.", "Дождь вынудил нас остаться дома."],
  ["Our school doesn't <b>allow</b> students <b>to use</b> phones in class.", "В нашей школе ученикам не разрешают пользоваться телефонами на уроках."]
])}
${N("Глагол <i>let</i> в пассиве не используют — вместо него говорят <i>be allowed to</i>: <i>I <b>was allowed to</b> go</i> — мне разрешили пойти.")}`,
  ex: [
    { type: 'gap', task: 'Впишите глагол в нужной форме (с to или без to).', items: [
      ["The film made me ___ (cry).", "cry"], ["My parents let me ___ (stay) up late.", "stay"],
      ["They allowed us ___ (use) the pool.", "to use"], ["The teacher made us ___ (write) the test again.", "write"],
      ["Don't make me ___ (laugh)!", "laugh"], ["Let me ___ (introduce) myself.", "introduce"],
      ["We were made ___ (wait) for an hour.", "to wait"], ["Mum didn't let us ___ (watch) TV.", "watch"]
    ]},
    { type: 'translate', task: 'Переведите на английский.', items: [
      ["Мама заставила меня убрать комнату.", "Mum made me clean the room.|My mother made me clean the room.|My mum made me clean my room.|Mother made me clean my room.|Mum made me tidy my room.|My mother made me tidy the room.|Mum made me clean my room.|My mum made me clean the room.|My mother made me clean my room.|Mum made me tidy the room.|My mum made me tidy the room.|My mum made me tidy my room.|My mother made me tidy my room.|Mum made me tidy up my room."],
      ["Позволь мне помочь тебе.", "Let me help you."],
      ["Родители не разрешают мне гулять поздно.", "My parents don't let me go out late.|My parents don't let me walk late.|My parents don't let me stay out late.|My parents don't allow me to go out late.|My parents don't allow me to stay out late."],
      ["Этот фильм заставил меня задуматься.", "This film made me think.|This movie made me think.|The film made me think."]
    ]},
    { type: 'listen', at: 2, task: 'Прослушайте предложение и соберите его из слов.', items: [
      ["The sad ending of the film made my mother cry.", "Из-за грустного конца фильма мама заплакала."],
      ["Will your parents let you go to the party?", "Родители отпустят тебя на вечеринку?"],
      ["Our teacher made us read the text again.", "Учитель заставил нас еще раз прочитать текст."]
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
  ["We heard her <b>sing</b>.", "Мы слышали, как она спела (песню целиком)."],
  ["I felt something <b>touching</b> my leg.", "Я почувствовал, как что-то касается моей ноги."],
  ["Nobody noticed him <b>leave</b>.", "Никто не заметил, как он ушел."]
])}
<h3>Когда see и hear значат «понимать» и «узнавать»</h3>
<p>Глаголы <i>see</i> и <i>hear</i> не всегда говорят о том, что человек видел или слышал своими глазами и ушами. <i>See</i> часто значит «понимать», а <i>hear</i> — узнавать, слышать от других. Например, <i>I see</i> — это «понятно», а не «я вижу». В таком значении после них ставят не сложное дополнение, а придаточное предложение со словом <i>that</i> (его можно опустить). Сравните: <i>I heard him <b>sing</b></i> — я слышал, как он спел (сам слышал пение), и <i>I heard <b>that</b> he sings</i> — я слышал (узнал от других), что он поет.</p>
${E([
  ["I <b>see that</b> you are tired.", "Я вижу (понимаю), что ты устал."],
  ["I <b>heard that</b> he had moved to Moscow.", "Я слышал (мне рассказали), что он переехал в Москву."]
])}
<p>Теперь о пассиве. Если предложение <i>Someone saw him enter the house</i> перевести в пассив, то есть сделать главным того, кого видели, получится <i>He <b>was seen to enter</b> the house</i> — видели, как он вошел в дом. В таком предложении частица <i>to</i> обязательна, хотя в активном ее не было. Похожие конструкции «подлежащее + пассив + инфинитив» разобраны в разделе 18.</p>`,
  ex: [
    { type: 'choice', task: 'Выберите правильный вариант.', items: [
      ["I saw him ___ the house.", ["leave", "to leave", "left"]], ["We heard the baby ___ in the next room.", ["crying", "to cry", "cried"]],
      ["Did you notice her ___ in?", ["come", "to come", "came"]], ["I felt the ground ___ under my feet.", ["shaking", "to shake", "shaken"]],
      ["She watched the children ___ in the park.", ["playing", "to play", "played"]], ["He was seen ___ the bank.", ["to enter", "enter", "entered"]]
    ]},
    { type: 'gap', task: 'Закончите предложение, используя Complex Object с глаголом восприятия.', items: [
      ["He crossed the street. I saw it. → I saw him ___ the street.", "cross|crossing"],
      ["She was singing. I heard it. → I heard her ___.", "singing|sing"],
      ["The door opened. We heard it. → We heard the door ___.", "open|opening"],
      ["They were playing football. We watched them. → We watched them ___ football.", "playing|play"],
      ["Somebody touched my arm. I felt it. → I felt somebody ___ my arm.", "touch|touching"],
      ["The car stopped. Did you see it? → Did you see the car ___?", "stop|stopping"]
    ]},
    { type: 'translate', task: 'Переведите на английский.', items: [
      ["Я видел, как он вошел в дом.", "I saw him enter the house.|I saw him come into the house.|I saw him go into the house.|I saw him walk into the house."],
      ["Мы слышали, как она поет.", "We heard her singing.|We heard her sing."],
      ["Я почувствовал, как кто-то коснулся моей руки.", "I felt somebody touch my hand.|I felt someone touch my hand.|I felt somebody touch my arm.|I felt someone touch my arm."]
    ]},
    { type: 'listen', at: 2, task: 'Прослушайте предложение и соберите его из слов.', items: [
      ["I saw a little boy cross the road at a red light.", "Я видел, как маленький мальчик перешел дорогу на красный свет."],
      ["We heard somebody singing in the flat upstairs.", "Мы слышали, как кто-то поет в квартире наверху."],
      ["She watched the children playing in the snow.", "Она смотрела, как дети играют в снегу."]
    ]}
  ]}
]});

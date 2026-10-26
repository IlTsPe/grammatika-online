BOOK.push({ n: 8, id: 'modals', title: 'Модальные глаголы',
intro: 'Умение, разрешение, необходимость, совет и предположение. После модальных глаголов инфинитив стоит без <i>to</i> (кроме <i>ought to, have to, be to</i>), а сами они не меняются по лицам.',
topics: [

{ id: 'mod-can', level: 'A2', title: 'Can, could, be able to', sub: 'I can swim · I could read at four',
  rule: `
<p>Глагол <i>can</i> говорит о том, что человек умеет или может что-то сделать (<i>I can swim</i>), а также о разрешении (<i>Can I come in?</i>). У него всего две формы: <i>can</i> для настоящего и <i>could</i> для прошлого. Поэтому, когда нужно другое время — например, будущее, — вместо него используют <i>be able to</i>.</p>
${T(["Форма", "Значение", "Пример"], [
  ["<i>can / can't</i>", "умею, могу (сейчас)", "<i>I <b>can</b> swim. She <b>can't</b> come today.</i>"],
  ["<i>can</i>", "разрешение (разговорное)", "<i><b>Can</b> I open the window?</i>"],
  ["<i>could</i>", "умел в прошлом (вообще)", "<i>I <b>could</b> read when I was four.</i>"],
  ["<i>could</i>", "вежливая просьба", "<i><b>Could</b> you help me, please?</i>"],
  ["<i>was / were able to</i>", "смог (в конкретной ситуации)", "<i>The fire spread fast, but everyone <b>was able to</b> escape.</i>"],
  ["<i>will be able to</i>", "смогу (в будущем)", "<i>I'<b>ll be able to</b> help you tomorrow.</i>"],
  ["<i>have been able to</i>", "смог (Present Perfect)", "<i>I <b>haven't been able to</b> sleep lately.</i>"]
])}
${N("Поставить <i>can</i> в будущее время нельзя: вместо <i>will can</i> говорят <i>will be able to</i> («смогу»). Но если договоренность или возможность есть уже сейчас, <i>can</i> можно сказать и о будущем: <i>I <b>can</b> come tomorrow</i> — завтра я могу прийти. И обратите внимание на написание отрицания: оно пишется слитно — <i>cannot</i> или коротко <i>can't</i>.")}`,
  ex: [
    { type: 'gap', task: 'Впишите can, can\'t, could, couldn\'t или нужную форму be able to.', items: [
      ["I ___ swim when I was five.", "could|was able to"], ["___ you help me with these heavy boxes, please?", "could|can"],
      ["She has lived in many countries, so she ___ speak three languages.", "can"], ["I'm sorry, I ___ come to your party tomorrow.", "cannot|will not be able to"],
      ["Next year I ___ drive a car. (смогу)", "will be able to"], ["The test was difficult, but I ___ answer all the questions. (сумел)", "was able to"],
      ["My grandfather ___ walk without a stick now.", "cannot"], ["I haven't ___ to call you this week. Sorry!", "been able"],
      ["___ I use your phone?", "can|could|may"], ["When I was young I ___ run very fast.", "could|was able to"]
    ]},
    { type: 'choice', task: 'Выберите правильный вариант.', items: [
      ["She can ___ three languages.", ["speak", "to speak", "speaks"]], ["___ you swim when you were five?", ["Could", "Can", "Were"]],
      ["I'll ___ to come tomorrow.", ["be able", "can", "could"]], ["Everybody ___ to escape from the fire.", ["was able", "could", "can"]],
      ["___ you tell me the way to the station?", ["Could", "Do", "Are"]], ["I ___ find my keys anywhere!", ["can't", "don't can", "can't to"]]
    ]},
    { type: 'translate', task: 'Переведите на английский.', items: [
      ["Я умею плавать лучше брата.", "I can swim better than my brother.|I can swim better than my brother can."],
      ["Вы не могли бы помочь мне с чемоданами?", "Could you help me with my suitcases?|Could you help me with the suitcases?|Can you help me with my suitcases?|Can you help me with the suitcases?|Could you help me with my luggage?|Can you help me with my luggage?"],
      ["В детстве я умел рисовать.", "When I was a child I could draw.|I could draw when I was a child.|As a child I could draw.|I could draw as a child."],
      ["Завтра я смогу прийти.", "I will be able to come tomorrow.|Tomorrow I will be able to come.|I can come tomorrow.|Tomorrow I can come."]
    ]},
    { type: 'listen', at: 2, task: 'Прослушайте предложение и соберите его из слов.', items: [
      ["When I was five, I could already read and write.", "В пять лет я уже умел читать и писать."],
      ["Will you be able to come to my birthday party on Saturday?", "Ты сможешь прийти на мой день рождения в субботу?"],
      ["Can you tell me the way to the nearest bank?", "Не подскажете, как пройти к ближайшему банку?"]
    ]}
  ]},

{ id: 'mod-may', level: 'B1', title: 'May и might', sub: 'May I come in? · It might rain',
  rule: `
<p>Глагол <i>may</i> используют в двух случаях. Во-первых, чтобы вежливо попросить или дать разрешение: <i>May I come in?</i> Во-вторых, чтобы высказать предположение: <i>It may rain</i> — возможно, пойдет дождь. <i>Might</i> тоже выражает предположение, но с меньшей уверенностью.</p>
${T(["Форма", "Значение", "Пример"], [
  ["<i>May I…?</i>", "вежливая просьба о разрешении", "<i><b>May</b> I come in?</i> — Можно войти?"],
  ["<i>You may…</i>", "разрешение", "<i>You <b>may</b> go now.</i>"],
  ["<i>may not</i>", "запрет (мягкий, формальный)", "<i>You <b>may not</b> use phones during the exam.</i>"],
  ["<i>may / might</i>", "возможно (предположение)", "<i>It <b>may</b> rain. She <b>might</b> be at home.</i>"],
  ["<i>be allowed to</i>", "разрешение в других временах", "<i>We <b>were allowed to</b> stay up late.</i>"]
])}
${E([
  ["— <b>May</b> I take your pen? — Yes, you <b>may</b>. / Yes, of course.", "Ответ на просьбу."],
  ["I <b>might</b> go to the party, but I'm not sure.", "Может быть, пойду (не уверен)."]
])}
${N("Если хочется спросить, возможно ли что-то, вопрос с <i>might</i> звучит неестественно. Вместо <i>Might it rain?</i> лучше спросить <i>Do you think it will rain?</i> — «Как думаешь, будет дождь?»")}`,
  ex: [
    { type: 'choice', task: 'Выберите правильный вариант.', items: [
      ["___ I come in? I've brought your books.", ["May", "Am", "Do"]], ["It has been cloudy all morning. Take an umbrella: it ___ rain later.", ["might", "must", "can't"]],
      ["You ___ use your phones during the exam.", ["may not", "not may", "may not to"]], ["I haven't decided yet. I ___ go to the cinema with my friends tonight.", ["might", "can't", "mightn't to"]],
      ["Children ___ to swim here without an adult.", ["are not allowed", "may not", "can not"]], ["She ___ be at home — there is a light in her window.", ["may", "can't", "mustn't"]]
    ]},
    { type: 'translate', task: 'Переведите на английский.', items: [
      ["Можно мне взять твою ручку?", "May I take your pen?|Can I take your pen?|Could I take your pen?|May I borrow your pen?|Can I borrow your pen?|Could I borrow your pen?"],
      ["Может быть, вечером пойдет снег.", "It may snow in the evening.|It might snow in the evening.|It may snow tonight.|It might snow tonight.|Maybe it will snow in the evening.|It may snow this evening.|It might snow this evening.|It could snow in the evening.|Maybe it will snow tonight.|Maybe it will snow this evening.|Perhaps it will snow in the evening.|Perhaps it will snow tonight."],
      ["Вы можете идти: урок закончился.", "You may go: the lesson is over.|You may go: the lesson has finished.|You may go: the lesson has ended.|You can go: the lesson is over.|You can go: the lesson has finished.|You can go: the lesson has ended."],
      ["Нам разрешили остаться.", "We were allowed to stay.|They let us stay.|We were permitted to stay."]
    ]},
    { type: 'listen', at: 2, task: 'Прослушайте предложение и соберите его из слов.', items: [
      ["May I borrow your dictionary for a few minutes?", "Можно взять твой словарь на несколько минут?"],
      ["Take a warm coat. It might snow in the mountains.", "Возьми теплое пальто: в горах может пойти снег."],
      ["Tom isn't answering. He may be in the shower.", "Том не отвечает. Возможно, он в душе."]
    ]}
  ]},

{ id: 'mod-must', level: 'B1', title: 'Must, have to, mustn\'t, don\'t have to', sub: 'I must go · You don\'t have to come',
  rule: `
<p>И <i>must</i>, и <i>have to</i> переводятся как «должен», но оттенок у них разный. <i>Must</i> — когда говорящий сам считает что-то необходимым, а <i>have to</i> — когда так требуют обстоятельства или правила. Еще важнее, что их отрицания значат совсем разное — об этом в заметке ниже.</p>
${T(["Форма", "Значение", "Пример"], [
  ["<i>must</i>", "необходимость по личному убеждению, сильный совет", "<i>I <b>must</b> call Mum. You <b>must</b> see this film!</i>"],
  ["<i>have to</i>", "необходимость из-за правил, обстоятельств", "<i>I <b>have to</b> wear a uniform at school.</i>"],
  ["<i>had to / will have to</i>", "прошедшее и будущее (у must их нет)", "<i>I <b>had to</b> wait an hour.</i>"],
  ["<i>mustn't</i>", "<b>нельзя</b>, запрет", "<i>You <b>mustn't</b> smoke here.</i>"],
  ["<i>don't have to</i>", "<b>не обязательно</b>, нет необходимости", "<i>You <b>don't have to</b> come if you're busy.</i>"],
  ["<i>be to</i>", "необходимость по плану, договоренности", "<i>We <b>are to</b> meet at six.</i>"]
])}
${N("Запомните главную разницу: <i>mustn't</i> — это запрет, а <i>don't have to</i> — отсутствие необходимости. «Тебе нельзя идти» — <i>You mustn't go</i>. «Тебе не обязательно идти» (можешь, если хочешь) — <i>You don't have to go</i>.")}`,
  ex: [
    { type: 'choice', task: 'Выберите правильный вариант.', items: [
      ["You ___ smoke here. It's forbidden.", ["mustn't", "don't have to"]], ["Tomorrow is Saturday, so I ___ get up early.", ["don't have to", "mustn't"]],
      ["In Britain people ___ drive on the left.", ["have to", "can", "mustn't"]], ["I ___ remember to call Mum — it's her birthday!", ["must", "can", "could"]],
      ["Yesterday I ___ stay at work till nine.", ["had to", "must", "have to"]], ["You ___ tell anybody. It's a secret!", ["mustn't", "don't have to", "not must"]],
      ["Did she ___ wear glasses as a child?", ["have to", "must", "has to"]], ["We ___ meet at the station at 5 — that was the plan.", ["were to", "must", "are to"]]
    ]},
    { type: 'gap', task: 'Впишите must, mustn\'t, have to, has to, had to или don\'t / doesn\'t have to.', items: [
      ["Pupils ___ wear a uniform at our school. It's the rule.", "have to|must"], ["You ___ eat in the library.", "must not"],
      ["It's a holiday tomorrow. We ___ go to school.", "do not have to"], ["I missed the bus, so I ___ walk home.", "had to"],
      ["She ___ get up at six every day because she starts work at seven.", "has to"], ["He has won a lot of money, so he ___ work any more.", "does not have to"],
      ["You ___ touch the stove — it's hot!", "must not"], ["I ___ go now, or I'll be late.", "must|have to"]
    ]},
    { type: 'translate', task: 'Переведите на английский.', items: [
      ["Здесь нельзя курить.", "You mustn't smoke here.|Smoking is not allowed here.|You can't smoke here.|No smoking here."],
      ["Тебе не нужно было приходить так рано.", "You didn't have to come so early.|You didn't need to come so early."],
      ["Вчера мне пришлось работать до вечера.", "Yesterday I had to work till evening.|I had to work until the evening yesterday.|I had to work till the evening yesterday.|Yesterday I had to work until the evening.|Yesterday I had to work till the evening.|I had to work till evening yesterday.|I had to work until evening yesterday."],
      ["Мне пора идти: мама ждет меня дома.", "I must go: Mum is waiting for me at home.|I must go: my mum is waiting for me at home.|I must go: my mother is waiting for me at home.|I have to go: Mum is waiting for me at home.|I have to go: my mum is waiting for me at home.|I have to go: my mother is waiting for me at home.|I must go: Mum is waiting for me.|I have to go: Mum is waiting for me.|I must go: my mum is waiting for me.|I have to go: my mum is waiting for me.|I have got to go: Mum is waiting for me at home.|I need to go: Mum is waiting for me at home."]
    ]},
    { type: 'listen', at: 2, task: 'Прослушайте предложение и соберите его из слов.', items: [
      ["You mustn't take photos in the museum.", "В музее нельзя фотографировать."],
      ["We don't have to get up early on Sundays.", "По воскресеньям нам не нужно рано вставать."],
      ["I had to wait for the bus for half an hour.", "Мне пришлось ждать автобус полчаса."]
    ]}
  ]},

{ id: 'mod-should', level: 'B1', title: 'Should, ought to, need', sub: 'You should see a doctor · You needn\'t worry',
  rule: `
<p><i>Should</i> и <i>ought to</i> нужны, чтобы дать совет или сказать, как правильно поступить: <i>You should see a doctor</i> — тебе стоит сходить к врачу. Глагол <i>need</i> ведет себя двояко: он может быть обычным глаголом (<i>I need to go</i>), а в отрицании бывает модальным (<i>You needn't worry</i> — можешь не волноваться).</p>
${T(["Форма", "Значение", "Пример"], [
  ["<i>should / shouldn't</i>", "совет, следует", "<i>You <b>should</b> see a doctor. You <b>shouldn't</b> eat so much.</i>"],
  ["<i>ought to</i>", "следует (долг, чуть сильнее)", "<i>You <b>ought to</b> respect your parents.</i>"],
  ["<i>needn't + V</i>", "нет необходимости (модальный)", "<i>You <b>needn't</b> worry.</i>"],
  ["<i>don't need to + V</i>", "нет необходимости (обычный глагол)", "<i>You <b>don't need to</b> worry.</i>"],
  ["<i>need to + V</i>", "нужно (утверждение)", "<i>I <b>need to</b> buy some bread.</i>"],
  ["<i>had better</i>", "лучше (а то хуже будет)", "<i>You'<b>d better</b> hurry.</i>"]
])}
${N("Следите за частицей <i>to</i>. После <i>ought</i> она нужна всегда: <i>You ought <b>to</b> go</i>. А после модального <i>needn't</i> ее нет: <i>You needn't <b>go</b></i>. Вариант <i>You needn't to go</i> — ошибка.")}`,
  ex: [
    { type: 'choice', task: 'Выберите правильный вариант.', items: [
      ["You look tired. You ___ go to bed.", ["should", "can", "have"]], ["You ___ eat so many sweets. It's bad for your teeth.", ["shouldn't", "needn't", "don't have"]],
      ["You ___ worry. Everything is fine.", ["needn't", "needn't to", "shouldn't to"]], ["You've broken two cups today. You ought ___ be more careful.", ["to", "—", "for"]],
      ["I ___ to buy some milk.", ["need", "needn't", "must"]], ["It's raining. You'd ___ take an umbrella.", ["better", "rather", "should"]]
    ]},
    { type: 'gap', task: 'Впишите should, shouldn\'t, ought, needn\'t или need.', items: [
      ["Your tooth has been hurting for a week. You ___ see a dentist.", "should|ought to"], ["You ___ come tomorrow: we have already finished the work.", "need not|do not need to|do not have to"],
      ["Children ___ watch too much TV.", "should not|ought not to"], ["We ___ to leave now — it's getting late.", "need|ought"],
      ["You ___ hurry. We have plenty of time.", "need not|do not need to|do not have to"], ["___ I take a coat? — Yes, it's cold.", "should|need"]
    ]},
    { type: 'translate', task: 'Переведите на английский.', items: [
      ["Тебе следует читать больше книг на английском.", "You should read more books in English.|You should read more English books.|You ought to read more books in English.|You ought to read more English books."],
      ["Не нужно беспокоиться.", "You needn't worry.|You don't need to worry.|There is no need to worry.|No need to worry.|You don't have to worry."],
      ["Мне нужно купить хлеба.", "I need to buy some bread.|I need to buy bread."],
      ["Тебе не следует так много работать.", "You shouldn't work so much.|You shouldn't work so hard.|You ought not to work so much.|You ought not to work so hard."]
    ]},
    { type: 'listen', at: 2, task: 'Прослушайте предложение и соберите его из слов.', items: [
      ["You look tired. You should go to bed earlier.", "Ты выглядишь усталым. Тебе стоит раньше ложиться спать."],
      ["You needn't bring any food. We have plenty.", "Еду можешь не приносить, у нас ее много."],
      ["We ought to thank our neighbours: they helped us a lot.", "Нам следует поблагодарить соседей: они нам очень помогли."]
    ]}
  ]},

{ id: 'mod-deduction', level: 'C1', title: 'Модальные с перфектным инфинитивом', sub: 'must have done · can\'t have done · should have done',
  rule: `
<p>Модальные глаголы помогают показать, насколько вы уверены в своей догадке. <i>Must</i> — «наверняка», <i>might</i> — «возможно», <i>can't</i> — «не может быть». Если после такого глагола поставить <i>have</i> и третью форму, догадка будет о прошлом: <i>He must have left</i> — должно быть, он уже ушел.</p>
${T(["Уверенность", "О настоящем", "О прошлом"], [
  ["точно да (≈ 95%)", "<i>He <b>must be</b> tired.</i>", "<i>He <b>must have been</b> tired.</i>"],
  ["возможно (≈ 50%)", "<i>She <b>might / may / could be</b> at home.</i>", "<i>She <b>might have forgotten</b>.</i>"],
  ["точно нет (≈ 95%)", "<i>That <b>can't be</b> Anna.</i>", "<i>He <b>can't / couldn't have stolen</b> it.</i>"]
])}
<h3>Упрек и сожаление</h3>
${E([
  ["You <b>should have told</b> me earlier!", "Тебе следовало сказать раньше (но ты не сказал)."],
  ["You <b>shouldn't have shouted</b> at him.", "Не стоило на него кричать (но ты кричал)."],
  ["You <b>could have helped</b> me!", "Мог бы и помочь!"]
])}
${N("Если нужно сказать «не может быть, чтобы…», используют <i>can't</i>, а не <i>mustn't</i>: <i>He <b>can't have</b> done it</i> — не может быть, чтобы он это сделал. <i>Mustn't</i> означает запрет, а не вывод.")}`,
  ex: [
    { type: 'choice', task: 'Выберите правильный вариант.', items: [
      ["He's been working all day. He ___ be tired.", ["must", "can't", "mustn't"]], ["That ___ be Anna — she's in Paris this week.", ["can't", "must", "should"]],
      ["The ground is wet. It ___ rained last night.", ["must have", "can't have", "should have"]], ["I'm not sure where Kate is. She ___ be at the library.", ["might", "must", "can't"]],
      ["He ___ stolen the money — he was with me all evening.", ["can't have", "must have", "should have"]], ["You ___ told me earlier! Now it's too late.", ["should have", "must have", "can't have"]],
      ["She didn't answer the phone. She ___ been asleep.", ["might have", "should have", "can have"]], ["I ___ left my bag on the bus. It's not here.", ["must have", "can't have", "should have"]]
    ]},
    { type: 'gap', task: 'Закончите предложение: must have, can\'t have, might have или should have + V3.', items: [
      ["The windows are broken. Somebody ___ (break) them.", "must have broken"],
      ["She ___ (see) me — she didn't say hello. (возможно, не видела)", "might not have seen|may not have seen"],
      ["He ___ (write) this letter — he can't write!", "cannot have written|could not have written"],
      ["You failed the test. You ___ (study) more.", "should have studied|ought to have studied"],
      ["They're very late. They ___ (miss) the train.", "must have missed|might have missed|may have missed"],
      ["You ___ (not / eat) so much cake — now you feel sick.", "should not have eaten|ought not to have eaten"]
    ]},
    { type: 'translate', task: 'Переведите на английский.', items: [
      ["Должно быть, он уже ушел.", "He must have left already.|He must have already left.|He must have gone already."],
      ["Не может быть, чтобы она это сказала.", "She can't have said that.|She couldn't have said that.|She can't have said it."],
      ["Тебе следовало позвонить мне.", "You should have called me.|You should have phoned me.|You ought to have called me."],
      ["Возможно, он забыл о встрече.", "He may have forgotten about the meeting.|He might have forgotten about the meeting."]
    ]},
    { type: 'listen', at: 2, task: 'Прослушайте предложение и соберите его из слов.', items: [
      ["The streets are wet. It must have rained in the night.", "Улицы мокрые. Наверное, ночью шел дождь."],
      ["She can't have forgotten about the meeting.", "Не может быть, чтобы она забыла о встрече."],
      ["You should have told me about it earlier.", "Тебе следовало сказать мне об этом раньше."]
    ]}
  ]},

{ id: 'mod-nuances', level: 'C2', title: 'Тонкости модальных глаголов', sub: "needn't have · was to · won't",
  rule: `
<p>Здесь собраны пары и обороты с модальными глаголами, в которых путаются даже те, кто хорошо знает язык. Разница между ними часто тонкая, поэтому внимательно смотрите на примеры и их перевод.</p>
${T(["Форма", "Значение", "Пример"], [
  ["<i>needn't have + V3</i>", "сделал, но это было не нужно", "<i>I <b>needn't have cooked</b> so much.</i>"],
  ["<i>didn't need to + V</i>", "не было нужно (обычно и не делал)", "<i>We <b>didn't need to</b> take a taxi.</i>"],
  ["<i>was / were to + V</i>", "было суждено; было запланировано", "<i>He <b>was to</b> become famous.</i>"],
  ["<i>was to have + V3</i>", "планировалось, но не состоялось", "<i>The meeting <b>was to have taken</b> place on Monday.</i>"],
  ["<i>won't / wouldn't</i>", "отказ, упрямство (в том числе о вещах)", "<i>The car <b>won't</b> start. He <b>wouldn't</b> listen.</i>"],
  ["<i>be bound to</i>", "непременно, наверняка", "<i>It's <b>bound to</b> rain.</i>"],
  ["<i>might as well</i>", "можно с тем же успехом, почему бы и нет", "<i>We <b>might as well</b> walk.</i>"]
])}
${N("Фраза <i>You <b>needn't have</b> bought me a present</i> — это вежливое «не стоило»: подарок уже куплен, и говорящий благодарит, но мягко показывает, что в этом не было необходимости.")}`,
  ex: [
    { type: 'choice', task: 'Выберите правильный вариант.', items: [
      ["I ___ cooked so much food — only three guests came.", ["needn't have", "didn't need to", "mustn't have"]], ["Tom gave us a lift, so we ___ take a taxi.", ["didn't need to", "needn't have"]],
      ["The meeting ___ taken place on Monday, but they cancelled it.", ["was to have", "must have", "should"]], ["He left home at seventeen. Twenty years later he ___ become a famous painter.", ["was to", "should", "must"]],
      ["I've asked him twice, but he ___ listen!", ["won't", "mustn't", "shan't"]], ["There's nothing good on TV. We ___ go to bed early.", ["might as well", "are bound", "would rather to"]],
      ["Take an umbrella. It's ___ to rain.", ["bound", "must", "certain of"]], ["You ___ have bought me a present, but thank you!", ["needn't", "mustn't", "can't"]]
    ]},
    { type: 'translate', task: 'Переведите на английский.', items: [
      ["Тебе не нужно было покупать мне подарок.", "You needn't have bought me a present.|You didn't have to buy me a present.|You didn't need to buy me a present."],
      ["Машина не заводится.", "The car won't start."],
      ["Наверняка пойдет дождь.", "It is bound to rain.|It is sure to rain.|It will definitely rain."],
      ["Мы можем с тем же успехом пойти пешком.", "We might as well walk.|We may as well walk.|We might as well go on foot."]
    ]},
    { type: 'listen', at: 2, task: 'Прослушайте предложение и соберите его из слов.', items: [
      ["We needn't have taken so much money, everything was cheap.", "Зря мы взяли столько денег: все было дешево."],
      ["The old door won't open, however hard I push it.", "Старая дверь никак не открывается, как сильно я ни толкаю."],
      ["The last bus has gone, so we might as well walk.", "Последний автобус ушел, так что можно и пешком."]
    ]}
  ]}
]});

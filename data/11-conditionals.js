BOOK.push({ n: 11, id: 'conditionals', title: 'Условные предложения. Сослагательное наклонение после I wish',
intro: 'Четыре типа условных предложений — от реальных фактов до сожалений о прошлом — и конструкция <i>I wish</i>, которая строится по тем же правилам.',
topics: [

{ id: 'cond-01', level: 'B1', title: 'Условные 0 и 1 типа', sub: 'If you heat ice, it melts · If it rains, we will stay',
  rule: `
<p>Условные предложения нулевого и первого типа говорят о реальных условиях. Нулевой тип — о том, что бывает всегда при таком условии: <i>If you heat ice, it melts</i>. Первый тип — о том, что вполне может произойти в будущем: <i>If it rains, we will stay at home</i>.</p>
${T(["Тип", "Условие (if)", "Результат", "Пример"], [
  ["0 — всегда так", "<i>Present Simple</i>", "<i>Present Simple</i>", "<i>If you <b>heat</b> ice, it <b>melts</b>.</i> — Если нагреть лед, он тает."],
  ["1 — реальное будущее", "<i>Present Simple</i>", "<i>will + V</i>", "<i>If it <b>rains</b>, we <b>will stay</b> at home.</i> — Если пойдет дождь, мы останемся дома."],
  ["1 — с модальным / приказом", "<i>Present Simple</i>", "<i>can / may / must или повелительное наклонение</i>", "<i>If you <b>are</b> tired, <b>go</b> to bed.</i> — Если устал, иди спать."]
])}
<p>В последней строке вместо <i>will</i> во второй части стоит модальный глагол или повелительное наклонение — то есть просьба, совет или приказ, начинающийся прямо с глагола: <i>Go to bed!</i>, <i>Call me!</i> Так говорят, когда результат условия — не предсказание, а совет или указание: <i>If you need help, call me</i> — если нужна помощь, позвони мне.</p>
<h3>Unless и запятая</h3>
<p>Союз <i>unless</i> значит «если не»: <i>unless you hurry</i> = <i>if you don't hurry</i>. Поскольку отрицание уже спрятано внутри <i>unless</i>, глагол после него стоит в утвердительной форме, а второе <i>not</i> не нужно. Запятая между частями ставится, только если условие идет первым. Если же предложение начинается с результата, а часть с <i>if</i> стоит второй, запятая не нужна.</p>
${E([
  ["<b>Unless</b> you hurry, you'll miss the train.", "Если не поторопишься, опоздаешь на поезд. (unless = if not)"],
  ["We'll go out <b>if</b> the rain stops.", "Мы выйдем на улицу, если дождь прекратится. (часть с if стоит второй, поэтому запятой нет)"]
])}
${N("В части с <i>if</i> будущее время не ставят, даже если речь о будущем: <i>If it <b>rains</b> tomorrow</i>, а не <i>If it will rain</i>. По-русски мы говорим «если пойдет дождь», поэтому эту ошибку делают особенно часто.")}`,
  ex: [
    { type: 'gap', task: 'Поставьте глагол в нужную форму.', items: [
      ["If you heat ice, it ___ (melt).", "melts"], ["If it ___ (rain) tomorrow, we will stay at home.", "rains"],
      ["She will be angry if you ___ (be) late.", "are"], ["Unless you hurry, you ___ (miss) the train.", "will miss"],
      ["If you ___ (mix) red and blue, you get purple.", "mix"], ["I ___ (buy) some bread if I go to the shop.", "will buy"],
      ["If he ___ (not / come), we'll start without him.", "does not come"], ["If you ___ (see) Tom, say hello to him.", "see"],
      ["If you ___ (need) help, call me.", "need"], ["We ___ (not / go) to the beach tomorrow if it's cold.", "will not go"]
    ]},
    { type: 'choice', task: 'Выберите правильный вариант.', items: [
      ["If you ___ water to 100 °C, it boils.", ["heat", "will heat", "would heat"]], ["I'll call you if I ___ time.", ["have", "will have", "would have"]],
      ["We ___ the match unless we train more.", ["won't win", "don't win", "wouldn't won"]], ["If you're hungry, ___ a sandwich.", ["have", "will have", "had"]],
      ["If it ___ sunny tomorrow, we'll go to the park.", ["is", "will be", "was"]], ["If she ___ the bus, she'll be late.", ["misses", "will miss", "missed"]]
    ]},
    { type: 'translate', task: 'Переведите на английский.', items: [
      ["Если завтра будет дождь, мы останемся дома.", "If it rains tomorrow, we will stay at home.|If it rains tomorrow, we will stay home.|We will stay at home if it rains tomorrow.|We will stay home if it rains tomorrow."],
      ["Если ты устал, иди спать.", "If you are tired, go to bed.|Go to bed if you are tired."],
      ["Если я увижу Тома, я ему скажу.", "If I see Tom, I will tell him.|I will tell Tom if I see him."],
      ["Если не поторопишься, опоздаешь.", "If you don't hurry, you will be late.|Unless you hurry, you will be late.|If you don't hurry up, you will be late.|Unless you hurry up, you will be late."]
    ]},
    { type: 'listen', at: 2, task: 'Прослушайте предложение и соберите его из слов.', items: [
      ["If you mix red and yellow, you get orange.", "Если смешать красный и желтый, получится оранжевый."],
      ["If you are free on Saturday, we will go to the theatre.", "Если в субботу ты свободен, мы пойдем в театр."],
      ["I won't go unless you come with me.", "Я не пойду, если ты не пойдешь со мной."]
    ]}
  ]},

{ id: 'cond-2', level: 'B1', title: 'Условные 2 типа', sub: 'If I had money, I would buy…',
  rule: `
<p>Условные предложения второго типа описывают <b>нереальное</b> или маловероятное условие — то, чего сейчас нет, но о чем можно помечтать: <i>If I had more money, I would buy a house</i>. По-русски такие предложения строятся с «если бы…, то…».</p>
${F("If + <b>Past Simple</b>, would + <b>V</b>")}
${E([
  ["If I <b>had</b> money, I <b>would buy</b> a house.", "Если бы у меня были деньги, я бы купил дом (но их нет)."],
  ["If I <b>were</b> you, I <b>wouldn't do</b> that.", "На твоем месте я бы этого не делал."],
  ["What <b>would</b> you <b>do</b> if you <b>won</b> the lottery?", "Что бы ты сделал, если бы выиграл в лотерею?"],
  ["If he <b>knew</b> her number, he <b>could call</b> her.", "Если бы он знал ее номер, он мог бы ей позвонить. (could вместо would)"]
])}
<p>Вместо <i>would</i> во второй части можно поставить <i>could</i> или <i>might</i>, если нужно сказать не «сделал бы», а «мог бы сделать» или «возможно, сделал бы». Например, <i>If I had a car, I could drive you home</i> — если бы у меня была машина, я мог бы отвезти тебя домой. В разговоре <i>would</i> обычно сокращают до <i>'d</i>: <i>I'd help</i> = <i>I would help</i>.</p>
<h3>1 тип или 2 тип</h3>
${T(["1 тип: реально", "2 тип: нереально"], [
  ["<i>If I <b>have</b> time, I'<b>ll help</b> you.</i> — Если у меня будет время, я тебе помогу. (возможно, будет время)", "<i>If I <b>had</b> time, I'<b>d help</b> you.</i> — Если бы у меня было время, я бы тебе помог. (времени нет)"]
])}
${N("В таких предложениях глагол <i>be</i> принято ставить в форме <i>were</i> для всех лиц: <i>If I <b>were</b> you</i>, <i>If she <b>were</b> taller</i>. А <i>would</i> ставится только во второй части — в части с <i>if</i> условного предложения его не бывает. Исключение — <i>If only… would</i>, о нем в теме про <i>I wish</i>.")}`,
  ex: [
    { type: 'gap', task: 'Поставьте глагол в нужную форму.', items: [
      ["If I ___ (have) more money, I would buy a house.", "had"], ["If I were you, I ___ (not / do) that.", "would not do|'d not do"],
      ["If he ___ (know) her number, he would call her.", "knew"], ["What would you do if you ___ (win) the lottery?", "won"],
      ["If she ___ (be) taller, she could be a model.", "were|was"], ["We ___ (go) to the sea if we had a car.", "would go"],
      ["If I ___ (can) fly, I would visit every country.", "could"], ["I ___ (help) you if I had time.", "would help"],
      ["If they ___ (live) closer, we would see them more often.", "lived"], ["If it ___ (not / be) so cold, we would go out.", "were not|was not"]
    ]},
    { type: 'choice', task: 'Выберите правильный вариант.', items: [
      ["If I ___ you, I'd apologise.", ["were", "am", "will be"]], ["If she ___ harder, she would get better marks.", ["worked", "works", "will work"]],
      ["I would buy that car if it ___ cheaper.", ["were", "is", "will be"]], ["If I knew the answer, I ___ you.", ["would tell", "will tell", "told"]],
      ["Where ___ you live if you could live anywhere?", ["would", "will", "did"]], ["If I ___ a million dollars, I'd travel the world.", ["had", "have", "would have"]]
    ]},
    { type: 'translate', task: 'Переведите на английский.', items: [
      ["Если бы у меня было время, я бы тебе помог.", "If I had time, I would help you.|If I had time, I'd help you.|I would help you if I had time."],
      ["На твоем месте я бы не стал этого делать.", "If I were you, I wouldn't do that.|If I were you, I wouldn't do it.|If I was you, I wouldn't do that.|I wouldn't do that if I were you.|I wouldn't do it if I were you."],
      ["Что бы ты сделал, если бы был президентом?", "What would you do if you were president?|What would you do if you were the president?"],
      ["Если бы он знал английский, он бы нашел работу.", "If he knew English, he would find a job.|If he knew English, he'd find a job.|If he spoke English, he would find a job.|If he knew English, he could find a job."]
    ]},
    { type: 'listen', at: 2, task: 'Прослушайте предложение и соберите его из слов.', items: [
      ["If I had more free time, I would learn Japanese.", "Будь у меня больше свободного времени, я бы учил японский."],
      ["What would you do if you found a wallet in the street?", "Что бы ты сделал, если бы нашел на улице кошелек?"],
      ["If I were you, I wouldn't trust anybody.", "На твоем месте я бы никому не доверял."]
    ]}
  ]},

{ id: 'cond-3', level: 'B2', title: 'Условные 3 типа и смешанные', sub: 'If I had known, I would have come',
  rule: `
<p>Третий тип говорит о нереальном условии в <b>прошлом</b>. Событие уже случилось (или не случилось), и изменить это нельзя — можно лишь представить, как было бы иначе: <i>If you had studied harder, you would have passed the exam</i> — если бы ты лучше готовился, ты бы сдал экзамен.</p>
${F("If + <b>Past Perfect</b>, would have + <b>V3</b>")}
${E([
  ["If you <b>had studied</b>, you <b>would have passed</b>.", "Если бы ты занимался, ты бы сдал экзамен. (но ты не сдал)"],
  ["If we <b>hadn't missed</b> the bus, we <b>wouldn't have been</b> late.", "Если бы мы успели на автобус, мы бы не опоздали."],
  ["She <b>could have won</b> if she <b>had tried</b>.", "Она могла бы победить, если бы постаралась. (could have вместо would have)"]
])}
<p>Как и во втором типе, вместо <i>would have</i> можно поставить <i>could have</i> («мог бы») или <i>might have</i> («возможно, …бы»). В разговоре <i>had</i> и <i>would</i> часто сокращают до одинакового <i>'d</i>: <i>If I'd known, I'd have come</i>. Различить их легко: после <i>if</i> это <i>had</i>, а перед <i>have</i> — <i>would</i>.</p>
<h3>Смешанный тип</h3>
<p>Иногда условие и результат относятся к разному времени. Самый частый случай: условие касается прошлого, а результат виден сейчас. Например, человек когда-то не взял работу в Лондоне и поэтому сейчас живет в другом городе. Тогда в части с <i>if</i> ставят Past Perfect, как в третьем типе, а во второй части — <i>would + V</i>, как во втором типе. Бывает и наоборот: условие — постоянное качество человека в настоящем, а результат относится к прошлому событию. Тогда в части с <i>if</i> стоит Past Simple, а во второй части — <i>would have + V3</i>. Чтобы выбрать форму, задайте себе два вопроса: к какому времени относится условие и к какому — результат.</p>
${T(["Условие", "Результат", "Пример"], [
  ["прошлое (Past Perfect)", "настоящее (would + V)", "<i>If I <b>had taken</b> that job, I <b>would live</b> in London now.</i> — Если бы я тогда согласился на ту работу, я бы сейчас жил в Лондоне."],
  ["настоящее (Past Simple)", "прошлое (would have + V3)", "<i>If I <b>were</b> braver, I <b>would have said</b> no.</i> — Будь я смелее, я бы тогда отказался."]
])}
${N("По-русски и второй, и третий тип звучат одинаково — «если бы…». Поэтому выбирайте тип по смыслу: если речь о настоящем, нужен второй тип, а если о том, что уже было в прошлом, — третий.")}`,
  ex: [
    { type: 'gap', task: 'Поставьте глагол в нужную форму.', items: [
      ["If you ___ (study) harder, you would have passed the exam.", "had studied|'d studied"], ["If we had left earlier, we ___ (not / miss) the train.", "would not have missed"],
      ["If I had taken the job, I ___ (live) in London now.", "would live|would be living|'d live|'d be living"], ["She would have come if you ___ (invite) her.", "had invited|'d invited"],
      ["If it ___ (not / rain), we would have gone to the beach.", "had not rained"], ["If I had known about the party, I ___ (come).", "would have come"],
      ["He ___ (not / have) the accident if he had driven more carefully.", "would not have had"], ["If you ___ (tell) me, I would have helped you.", "had told|'d told"]
    ]},
    { type: 'choice', task: '2 тип, 3 тип или смешанный? Выберите правильный вариант.', items: [
      ["If I ___ the answer yesterday, I would have told you.", ["had known", "knew", "would know"]], ["If I ___ the answer now, I would tell you.", ["knew", "had known", "know"]],
      ["If she hadn't missed the plane, she ___ here now.", ["would be", "would have been", "will be"]], ["We ___ lost if we had taken a map.", ["wouldn't have got", "wouldn't get", "didn't get"]],
      ["If he had saved money, he ___ a car now.", ["would have", "would have had", "has"]], ["I ___ you if I had seen you.", ["would have called", "would call", "called"]]
    ]},
    { type: 'translate', task: 'Переведите на английский.', items: [
      ["Если бы ты пришел вчера, ты бы увидел его.", "If you had come yesterday, you would have seen him.|If you'd come yesterday, you'd have seen him."],
      ["Если бы я знал, я бы тебе тогда сказал.", "If I had known, I would have told you.|If I'd known, I'd have told you."],
      ["Если бы мы не опоздали на поезд, мы бы уже были дома.", "If we hadn't missed the train, we would be at home now.|If we had not missed the train, we would be home now.|If we hadn't missed the train, we'd be home now.|If we hadn't missed the train, we would already be at home.|If we hadn't missed the train, we would already be home.|If we hadn't missed the train, we would be home already."]
    ]},
    { type: 'listen', at: 2, task: 'Прослушайте предложение и соберите его из слов.', items: [
      ["If we had left earlier, we wouldn't have missed the train.", "Если бы мы вышли раньше, мы бы не опоздали на поезд."],
      ["If she had studied harder, she would have passed the exam.", "Если бы она лучше занималась, она бы сдала экзамен."],
      ["If I had taken your advice, I wouldn't be in trouble now.", "Если бы я тогда послушал твоего совета, у меня сейчас не было бы проблем."]
    ]}
  ]},

{ id: 'cond-wish', level: 'B2', title: 'I wish и If only', sub: 'I wish I knew · I wish I had known',
  rule: `
<p>Конструкция <i>I wish</i> помогает выразить сожаление: «жаль, что…» или «хотел бы я…». Время после <i>wish</i> выбирается так же, как в нереальных условных предложениях: о настоящем — прошедшее время (<i>I wish I knew</i>), о прошлом — Past Perfect (<i>I wish I had gone</i>).</p>
${T(["Сожаление о…", "Форма", "Пример"], [
  ["настоящем", "<i>wish + Past Simple</i>", "<i>I wish I <b>knew</b> the answer.</i> — Жаль, что я не знаю."],
  ["настоящем (быть)", "<i>wish + were</i>", "<i>I wish I <b>were</b> taller.</i> — Хотел бы я быть выше."],
  ["прошлом", "<i>wish + Past Perfect</i>", "<i>I wish I <b>hadn't said</b> that.</i> — Жаль, что я это сказал."],
  ["возможностях", "<i>wish + could</i>", "<i>I wish I <b>could</b> swim.</i> — Жаль, что я не умею плавать."],
  ["чужом поведении или ситуации, которую хочется изменить", "<i>wish + would</i>", "<i>I wish you <b>would be</b> quiet.</i> — Хоть бы ты помолчал."]
])}
<p>Форма <i>were</i> для всех лиц здесь та же, что в условных предложениях второго типа: <i>I wish I were</i>, <i>I wish she were</i>. В разговоре допустимо и <i>was</i>.</p>
<h3>Wish + would</h3>
<p>Сочетание <i>wish + would</i> выражает не сожаление, а недовольство или нетерпение: говорящему не нравится, как кто-то себя ведет или что происходит, и он хочет, чтобы это изменилось. Например, <i>I wish you would stop talking</i> — хоть бы ты замолчал. Так можно сказать и о погоде или ситуации: <i>I wish it would stop raining</i> — хоть бы дождь кончился. А вот о себе так не говорят: вместо <i>I wish I would</i> используют <i>I wish I could</i>, потому что свое поведение мы можем изменить сами.</p>
${N("Будьте внимательны при переводе: утверждение после <i>wish</i> становится в русском отрицанием, и наоборот. <i>I wish I <b>had</b> a car</i> — «Жаль, что у меня <b>нет</b> машины». Конструкция <i>If only…</i> значит то же самое, только звучит эмоциональнее: <i>If only I had more time!</i> — «Если бы только у меня было больше времени!»")}`,
  ex: [
    { type: 'gap', task: 'Поставьте глагол в нужную форму после wish / if only.', items: [
      ["I wish I ___ (know) the answer. (сейчас)", "knew"], ["I wish I ___ (not / say) that yesterday.", "had not said"],
      ["I wish you ___ (listen) to me!", "would listen"], ["I wish I ___ (be) taller.", "were|was"],
      ["If only I ___ (have) more time now!", "had"], ["I wish I ___ (can) play the guitar.", "could"],
      ["She wishes she ___ (go) to the party last night.", "had gone"], ["I wish it ___ (get) warmer.", "would get"],
      ["I wish we ___ (live) by the sea.", "lived"], ["He wishes he ___ (not / buy) that old car.", "had not bought"]
    ]},
    { type: 'translate', task: 'Переведите на английский, используя I wish.', items: [
      ["Жаль, что у меня нет собаки.", "I wish I had a dog."],
      ["Жаль, что я не знаю английский.", "I wish I knew English.|I wish I spoke English.|I wish I could speak English."],
      ["Жаль, что я не пошел с тобой.", "I wish I had gone with you.|I wish I'd gone with you."],
      ["Жаль, что сейчас не лето.", "I wish it were summer now.|I wish it was summer now.|I wish it were summer.|I wish it was summer."],
      ["Хоть бы он замолчал!", "I wish he would be quiet!|If only he would be quiet!|I wish he would stop talking!|I wish he would shut up!|I wish he would keep quiet!"]
    ]},
    { type: 'listen', at: 2, task: 'Прослушайте предложение и соберите его из слов.', items: [
      ["I wish I could speak Spanish as well as you.", "Жаль, что я не говорю по-испански так же хорошо, как ты."],
      ["If only we had bought the tickets earlier!", "Если бы только мы купили билеты раньше!"],
      ["She wishes she lived closer to the sea.", "Ей хотелось бы жить ближе к морю."]
    ]}
  ]}
]});

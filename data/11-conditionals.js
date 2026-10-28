BOOK.push({ n: 11, id: 'conditionals', title: 'Условные предложения. Сослагательное наклонение после I wish',
intro: 'Четыре типа условных предложений — от реальных фактов до сожалений о прошлом — и конструкция <i>I wish</i>, которая строится по тем же правилам.',
topics: [

{ id: 'cond-0', level: 'A2', title: 'Условные 0 типа', sub: 'If you heat ice, it melts',
  rule: `
<p>Нулевой тип говорит о том, что бывает всегда, если выполнено условие: законы природы, правила, привычки. Обе части здесь стоят в Present Simple: <i>If you <b>heat</b> ice, it <b>melts</b></i> — если нагреть лед, он тает. Вместо <i>if</i> можно сказать <i>when</i>, и смысл почти не изменится: «каждый раз, когда».</p>
${F("<b>If / When</b> + Present Simple, Present Simple")}
${E([
  ["If you <b>mix</b> red and blue, you <b>get</b> purple.", "Если смешать красный и синий, получится фиолетовый."],
  ["When I <b>am</b> tired, I <b>go</b> to bed early.", "Когда я устаю, я рано ложусь спать."]
])}
<p>Если часть с <i>if</i> или <i>when</i> стоит первой, после нее ставят запятую: <i>If you heat ice, it melts</i>. Если второй — запятая не нужна: <i>Ice melts if you heat it</i>.</p>
${N("Будущее время здесь не нужно: речь о том, что происходит всегда. Фраза <i>If you heat ice, it will melt</i> тоже правильная, но звучит уже как прогноз об одном конкретном случае — это первый тип (тема 11.2).")}`,
  ex: [
    { type: 'gap', task: 'Поставьте глагол в нужную форму.', items: [
      ["If you leave milk in the sun, it ___ (go) bad.", "goes"],
      ["If you mix black and white, you ___ (get) grey.", "get"],
      ["When I ___ (be) hungry, I eat an apple.", "am"],
      ["If people ___ (not / sleep) enough, they feel tired.", "do not sleep"],
      ["When my sister ___ (have) a cold, she drinks hot tea with lemon.", "has"],
      ["If you ___ (press) this button, the machine starts.", "press"],
      ["Water ___ (freeze) if the temperature falls below zero.", "freezes"],
      ["When it ___ (snow), the children play outside.", "snows"]
    ]},
    { type: 'choice', task: 'Выберите правильный вариант.', items: [
      ["Water ___ if you heat it to 100 °C.", ["boils", "boil", "boiled"]],
      ["When the bell ___, the lesson ends.", ["rings", "will ring", "rang"]],
      ["Plants die if they ___ water.", ["don't get", "won't get", "didn't get"]],
      ["If you ___ sugar into hot tea, it dissolves.", ["put", "will put", "putting"]],
      ["My dog ___ when someone knocks at the door.", ["barks", "is barking", "barked"]],
      ["If I drink coffee in the evening, I ___ sleep well.", ["don't", "doesn't", "didn't"]]
    ]},
    { type: 'translate', task: 'Переведите на английский.', items: [
      ["Если положить масло на солнце, оно тает.", "If you put butter in the sun, it melts.|Butter melts if you put it in the sun.|If you leave butter in the sun, it melts.|Butter melts if you leave it in the sun.|When you put butter in the sun, it melts."],
      ["Если смешать желтый и синий, получится зеленый.", "If you mix yellow and blue, you get green.|If you mix blue and yellow, you get green.|When you mix yellow and blue, you get green.|When you mix blue and yellow, you get green.|If you mix yellow with blue, you get green.|If you mix blue with yellow, you get green.|When you mix yellow with blue, you get green."],
      ["Когда идет дождь, я беру зонт.", "When it rains, I take an umbrella.|If it rains, I take an umbrella.|I take an umbrella when it rains.|I take an umbrella if it rains.|When it rains, I take my umbrella.|I take my umbrella when it rains.|If it rains, I take my umbrella.|I take my umbrella if it rains."],
      ["Растения умирают, если их не поливать.", "Plants die if you don't water them.|Plants die if nobody waters them.|If you don't water plants, they die.|Plants die if they are not watered.|Plants die when you don't water them.|When you don't water plants, they die.|If plants are not watered, they die.|If nobody waters plants, they die."]
    ]},
    { type: 'listen', at: 2, task: 'Прослушайте предложение и соберите его из слов.', items: [
      ["If you mix red and yellow, you get orange.", "Если смешать красный и желтый, получится оранжевый."],
      ["When my cat is hungry, it sits by the fridge.", "Когда моя кошка голодна, она сидит у холодильника."],
      ["Ice melts if you leave it in the sun.", "Лед тает, если оставить его на солнце."]
    ]}
  ]},

{ id: 'cond-01', level: 'B1', title: 'Условные 1 типа', sub: 'If it rains, we will stay at home',
  rule: `
<p>Первый тип говорит о том, что вполне может произойти в будущем, если выполнится условие. Это реальное условие: вероятность того, что оно сбудется, высокая.</p>
${T(["Значение", "Условие (if)", "Результат", "Пример"], [
  ["прогноз", "<i>Present Simple</i>", "<i>will + V</i>", "<i>If it <b>rains</b>, we <b>will stay</b> at home.</i> — Если пойдет дождь, мы останемся дома."],
  ["совет, разрешение, приказ", "<i>Present Simple</i>", "<i>can / may / must или повелительное наклонение</i>", "<i>If you <b>are</b> tired, <b>go</b> to bed.</i> — Если устал, иди спать."]
])}
<p>Повелительное наклонение — это просьба, совет или приказ, начинающийся прямо с глагола: <i>Go to bed!</i>, <i>Call me!</i> Так говорят, когда результат условия — не предсказание, а совет или указание: <i>If you need help, call me</i> — если нужна помощь, позвони мне.</p>
<h3>Unless и запятая</h3>
<p>Союз <i>unless</i> значит «если не»: <i>unless you hurry</i> = <i>if you don't hurry</i>. Поскольку отрицание уже спрятано внутри <i>unless</i>, глагол после него стоит в утвердительной форме, а второе <i>not</i> не нужно. Запятая ставится так же, как в нулевом типе (тема 11.1).</p>
${E([
  ["<b>Unless</b> you hurry, you'll miss the train.", "Если не поторопишься, опоздаешь на поезд. (unless = if not)"],
  ["We'll go out <b>if</b> the rain stops.", "Мы выйдем на улицу, если дождь прекратится."]
])}
<h3>Придаточные времени</h3>
<p>По той же схеме строятся предложения со словами времени: <i>when</i>, <i>as soon as</i>, <i>before</i>, <i>after</i>, <i>until</i>, <i>by the time</i>. Если речь об одном случае в будущем, в части с этими словами стоит Present Simple, а <i>will</i> (или повелительное наклонение) — только в главной части. Разница между <i>if</i> и <i>when</i> в том, что <i>if</i> говорит о событии, которое может и не случиться, а <i>when</i> — о том, что точно произойдет: <i>If I see Tom, I'll tell him</i> — если увижу Тома, <i>When I see Tom, I'll tell him</i> — когда увижу Тома. В нулевом типе эта разница почти не видна, потому что речь о том, что бывает всегда.</p>
${T(["Союз", "Перевод", "Пример"], [
  ["<i>when</i>", "когда", "<i>I'll call you when I <b>arrive</b>.</i> — Я позвоню тебе, когда приеду."],
  ["<i>as soon as</i>", "как только", "<i>We'll start as soon as everyone <b>comes</b>.</i> — Мы начнем, как только все придут."],
  ["<i>before</i>", "до того как, перед тем как", "<i>Wash your hands before you <b>eat</b>.</i> — Помой руки перед едой."],
  ["<i>after</i>", "после того как", "<i>After the film <b>ends</b>, we'll go to a café.</i> — После того как фильм закончится, мы пойдем в кафе."],
  ["<i>until / till</i>", "пока не, до тех пор пока", "<i>Wait here until I <b>come</b> back.</i> — Жди здесь, пока я не вернусь."],
  ["<i>by the time</i>", "к тому времени как", "<i>By the time you <b>get</b> home, dinner will be ready.</i> — К тому времени как ты придешь домой, ужин будет готов."]
])}
<p>Русскому «пока не» в <i>until</i> соответствует утвердительный глагол, как и после <i>unless</i>: <i>until the rain <b>stops</b></i>, а не <i>until the rain doesn't stop</i>.</p>
${N("По-русски «если пойдет дождь» и «когда приеду» — будущее время, поэтому так и хочется сказать <i>If it will rain</i> или <i>when I will arrive</i>. По-английски — <i>If it <b>rains</b></i>, <i>when I <b>arrive</b></i>.")}`,
  ex: [
    { type: 'gap', task: 'Поставьте глагол в нужную форму.', items: [
      ["If you leave now, you ___ (catch) the bus.", "will catch"], ["If it ___ (rain) tomorrow, we will stay at home.", "rains"],
      ["She will be angry if you ___ (be) late.", "are"], ["Unless you hurry, you ___ (miss) the train.", "will miss"],
      ["If you ___ (study) hard, you will pass the exam.", "study"], ["I ___ (buy) some bread if I go to the shop.", "will buy"],
      ["If he ___ (not / come), we'll start without him.", "does not come"], ["If you ___ (see) Tom, say hello to him.", "see"],
      ["If you ___ (need) help, call me.", "need"], ["We ___ (not / go) to the beach tomorrow if it's cold.", "will not go"]
    ]},
    { type: 'choice', task: 'Выберите правильный вариант.', items: [
      ["If you ___ me your address, I'll send you a postcard.", ["give", "will give", "would give"]], ["I'll call you if I ___ time.", ["have", "will have", "would have"]],
      ["We ___ the match unless we train more.", ["won't win", "don't win", "wouldn't win"]], ["If you're hungry, ___ a sandwich.", ["have", "will have", "had"]],
      ["If it ___ sunny tomorrow, we'll go to the park.", ["is", "will be", "was"]], ["If she ___ the bus, she'll be late.", ["misses", "will miss", "missed"]]
    ]},
    { type: 'translate', task: 'Переведите на английский.', items: [
      ["Если завтра будет дождь, мы останемся дома.", "If it rains tomorrow, we will stay at home.|If it rains tomorrow, we will stay home.|We will stay at home if it rains tomorrow.|We will stay home if it rains tomorrow.|If it rains tomorrow, we will stay in.|We will stay in if it rains tomorrow."],
      ["Если ты устал, иди спать.", "If you are tired, go to bed.|Go to bed if you are tired.|If you are tired, go to sleep.|Go to sleep if you are tired."],
      ["Если я увижу Тома, я ему скажу.", "If I see Tom, I will tell him.|I will tell Tom if I see him."],
      ["Если не поторопишься, опоздаешь.", "If you don't hurry, you will be late.|Unless you hurry, you will be late.|If you don't hurry up, you will be late.|Unless you hurry up, you will be late."]
    ]},
    { type: 'listen', at: 2, task: 'Прослушайте предложение и соберите его из слов.', items: [
      ["If the weather is nice tomorrow, we will have a picnic.", "Если завтра будет хорошая погода, мы устроим пикник."],
      ["If you are free on Saturday, we will go to the theatre.", "Если в субботу ты будешь свободен, мы пойдем в театр."],
      ["I won't go unless you come with me.", "Я не пойду, если ты не пойдешь со мной."]
    ]},
    { type: 'gap', task: 'Придаточные времени: поставьте глагол в нужную форму.', items: [
      ["I'll text you when the train ___ (leave).", "leaves"],
      ["As soon as she ___ (get) her results, she'll tell us.", "gets"],
      ["Turn off the TV before you ___ (go) to bed.", "go"],
      ["We'll wait until the rain ___ (stop).", "stops"],
      ["After I ___ (finish) my homework, I'll call you.", "finish"],
      ["When she ___ (finish) school, she will go to university.", "finishes"],
      ["By the time we ___ (get) to the cinema, the film will have started.", "get"],
      ["I won't leave until you ___ (tell) me the truth.", "tell"]
    ]},
    { type: 'translate', task: 'Переведите на английский.', items: [
      ["Я напишу тебе, когда закончу работу.", "I will text you when I finish work.|I will write to you when I finish work.|When I finish work, I will text you.|When I finish work, I will write to you.|I will message you when I finish work.|I will text you when I finish my work.|I will write to you when I finish my work."],
      ["Как только он придет, мы начнем.", "As soon as he comes, we will start.|As soon as he arrives, we will start.|We will start as soon as he comes.|We will start as soon as he arrives.|As soon as he comes, we will begin.|We will begin as soon as he comes.|As soon as he arrives, we will begin.|We will begin as soon as he arrives.|As soon as he gets here, we will start.|We will start as soon as he gets here."],
      ["Подожди, пока я не вернусь.", "Wait until I come back.|Wait till I come back.|Wait until I get back.|Wait till I get back.|Wait until I return.|Wait till I return.|Wait until I am back.|Wait till I am back."],
      ["Перед тем как выйти, выключи свет.", "Before you leave, turn off the light.|Before you go out, turn off the light.|Turn off the light before you leave.|Turn off the light before you go out.|Before you leave, switch off the light.|Switch off the light before you leave.|Before you leave, turn off the lights.|Turn off the lights before you leave.|Before you go out, switch off the light.|Switch off the light before you go out.|Before you leave, switch off the lights.|Switch off the lights before you leave.|Before you go out, turn off the lights.|Turn off the lights before you go out.|Turn off the light before leaving."]
    ]}
  ]},

{ id: 'cond-2', level: 'B1', title: 'Условные 2 типа', sub: 'If I had money, I would buy…',
  rule: `
<p>Условные предложения второго типа описывают <b>нереальное</b> или маловероятное условие — то, чего сейчас нет, но о чем можно помечтать. По-русски такие предложения строятся с «если бы…, то…».</p>
${F("If + <b>Past Simple</b>, would + <b>V</b>")}
${E([
  ["If I <b>had</b> money, I <b>would buy</b> a house.", "Если бы у меня были деньги, я бы купил дом (но их нет)."],
  ["If I <b>were</b> you, I <b>wouldn't do</b> that.", "На твоем месте я бы этого не делал."],
  ["What <b>would</b> you <b>do</b> if you <b>won</b> the lottery?", "Что бы ты сделал, если бы выиграл в лотерею?"],
  ["If he <b>knew</b> her number, he <b>could call</b> her.", "Если бы он знал ее номер, он мог бы ей позвонить."]
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
<p>Третий тип говорит о нереальном условии в <b>прошлом</b>. Событие уже случилось (или не случилось), и изменить это нельзя — можно лишь представить, как было бы иначе.</p>
${F("If + <b>Past Perfect</b>, would have + <b>V3</b>")}
${E([
  ["If you <b>had studied</b>, you <b>would have passed</b>.", "Если бы ты занимался, ты бы сдал экзамен. (но ты не сдал)"],
  ["If we <b>hadn't missed</b> the bus, we <b>wouldn't have been</b> late.", "Если бы мы успели на автобус, мы бы не опоздали."],
  ["She <b>could have won</b> if she <b>had tried</b>.", "Она могла бы победить, если бы постаралась."]
])}
<p>Как и во втором типе, вместо <i>would have</i> можно поставить <i>could have</i> («мог бы») или <i>might have</i> («возможно, …бы»). В разговоре <i>had</i> и <i>would</i> часто сокращают до одинакового <i>'d</i>: <i>If I'd known, I'd have come</i>. Различить их легко: после <i>if</i> это <i>had</i>, а перед <i>have</i> — <i>would</i>.</p>
<h3>Смешанный тип</h3>
<p>Иногда условие и результат относятся к разному времени, поэтому формы для них берут из разных типов: для прошлого — из третьего, для настоящего — из второго. Чтобы выбрать форму, задайте себе два вопроса: к какому времени относится условие и к какому — результат.</p>
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
<p>Конструкция <i>I wish</i> помогает выразить сожаление: «жаль, что…» или «хотел бы я…». Время после <i>wish</i> выбирается так же, как в нереальных условных предложениях.</p>
${T(["Сожаление о…", "Форма", "Пример"], [
  ["настоящем", "<i>wish + Past Simple</i>", "<i>I wish I <b>knew</b> the answer.</i> — Жаль, что я не знаю."],
  ["настоящем (быть)", "<i>wish + were</i>", "<i>I wish I <b>were</b> taller.</i> — Хотел бы я быть выше."],
  ["прошлом", "<i>wish + Past Perfect</i>", "<i>I wish I <b>hadn't said</b> that.</i> — Жаль, что я это сказал."],
  ["возможностях", "<i>wish + could</i>", "<i>I wish I <b>could</b> swim.</i> — Жаль, что я не умею плавать."],
  ["чужом поведении или ситуации", "<i>wish + would</i>", "<i>I wish you <b>would be</b> quiet.</i> — Хоть бы ты помолчал."]
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

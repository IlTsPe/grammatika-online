BOOK.push({ n: 12, id: 'reported', title: 'Согласование времен. Косвенная речь',
intro: 'Если главное предложение стоит в прошедшем времени, время придаточного сдвигается «на шаг назад». На этом правиле строится вся косвенная речь: утверждения, вопросы, просьбы и приказы.',
topics: [

{ id: 'rep-sequence', level: 'B1', title: 'Согласование времен', sub: 'I knew that he was ill',
  rule: `
<p>В русском языке время во второй части предложения не зависит от первой: мы говорим «Я знал, что он болен» — «болен» в настоящем, хотя «знал» в прошедшем. В английском так нельзя: если главный глагол стоит в прошедшем времени, глагол во второй части тоже «сдвигается» в прошлое: <i>I knew that he <b>was</b> ill</i>.</p>
${T(["Действие придаточного", "Форма", "Пример"], [
  ["одновременно", "Past Simple / Past Continuous", "<i>I knew that he <b>was</b> ill. I thought she <b>was sleeping</b>.</i> — Я знал, что он болен. Я думал, что она спит."],
  ["раньше", "Past Perfect", "<i>I knew that he <b>had been</b> ill.</i> — Я знал, что он болел."],
  ["позже", "would + V (будущее в прошедшем)", "<i>I knew that he <b>would come</b>.</i> — Я знал, что он придет."]
])}
<p>Форма <i>would + V</i> в последней строке называется «будущее в прошедшем». Это то же самое <i>will</i>, только «сдвинутое» в прошлое: когда мы смотрим на будущее событие из прошлого момента, <i>will</i> превращается в <i>would</i>. По-русски при этом остается обычное будущее время: «я знал, что он <b>придет</b>». Подробнее о таких формах — в теме «Будущее в прошедшем» этого раздела.</p>
${E([
  ["He says he <b>is</b> busy. → He said he <b>was</b> busy.", "Он говорит, что занят. → Он сказал, что занят. (если главный глагол в настоящем, сдвига нет; если в прошедшем — время сдвигается)"],
  ["She hoped she <b>would pass</b> the exam.", "Она надеялась, что сдаст экзамен. (будущее в прошедшем)"]
])}
${N("Сдвигать время не нужно, если во второй части — общеизвестный факт, который верен всегда: <i>The teacher said that the Earth <b>goes</b> round the Sun.</i>")}`,
  ex: [
    { type: 'gap', task: 'Поставьте глагол в скобках в нужную форму по правилу согласования времен.', items: [
      ["I knew that he ___ (be) ill.", "was"], ["She said that she ___ (live) in Kazan.", "lived"],
      ["We didn't know that they ___ (already / leave).", "had already left"], ["He hoped that he ___ (win) the race.", "would win"],
      ["I thought you ___ (sleep). Why are you up?", "were sleeping"], ["She told me that she ___ (lose) her key the day before.", "had lost"],
      ["They were sure that it ___ (rain) in the evening.", "would rain"], ["He said that he ___ (not / like) coffee.", "did not like"],
      ["I was afraid that I ___ (miss) the train.", "would miss"], ["Our teacher said that water ___ (boil) at 100 °C.", "boils|boiled"]
    ]},
    { type: 'choice', task: 'Выберите правильный вариант.', items: [
      ["I knew she ___ in Moscow.", ["lived", "lives", "will live"]], ["He said he ___ me the next day.", ["would call", "will call", "calls"]],
      ["She didn't know where I ___.", ["had been", "have been", "am"]], ["I thought you ___ coming.", ["weren't", "aren't", "won't"]],
      ["He told us the Moon ___ round the Earth.", ["goes", "is going", "had gone"]], ["We were sure they ___ the match.", ["would win", "will win", "win"]]
    ]},
    { type: 'translate', task: 'Переведите на английский.', items: [
      ["Я знал, что он болен.", "I knew that he was ill.|I knew he was ill.|I knew that he was sick.|I knew he was sick."],
      ["Я думал, что ты спишь.", "I thought that you were sleeping.|I thought you were sleeping.|I thought you were asleep.|I thought that you were asleep."],
      ["Она надеялась, что сдаст экзамен.", "She hoped that she would pass the exam.|She hoped she would pass the exam."],
      ["Мы не знали, что они уже уехали.", "We didn't know that they had already left.|We didn't know they had already left."]
    ]},
    { type: 'listen', at: 2, task: 'Прослушайте предложение и соберите его из слов.', items: [
      ["I knew that my sister was living in the north of England.", "Я знал, что сестра живет на севере Англии."],
      ["We didn't know that our neighbours had moved a few weeks earlier.", "Мы не знали, что соседи переехали за несколько недель до этого."],
      ["She thought that nobody would notice her new haircut.", "Она думала, что никто не заметит ее новую стрижку."]
    ]}
  ]},

{ id: 'rep-statements', level: 'B1', title: 'Утверждения в косвенной речи', sub: 'He said that he was tired',
  rule: `
<p>Когда мы пересказываем чужие слова, в предложении меняются три вещи. Время глагола сдвигается в прошлое. Местоимения меняются по смыслу: «я» говорящего становится «он» или «она». Слова времени и места тоже меняются: <i>today</i> становится <i>that day</i>, а <i>here</i> — <i>there</i>.</p>
${T(["Прямая речь", "Косвенная речь"], [
  ["<i>Present Simple: “I <b>am</b> tired”</i> — «Я устала».", "<i>Past Simple: she said she <b>was</b> tired</i> — она сказала, что устала."],
  ["<i>Present Continuous: “I <b>am working</b>”</i> — «Я работаю».", "<i>Past Continuous: he said he <b>was working</b></i> — он сказал, что работает."],
  ["<i>Present Perfect: “I <b>have lost</b> it”</i> — «Я это потерял».", "<i>Past Perfect: he said he <b>had lost</b> it</i> — он сказал, что потерял это."],
  ["<i>Past Simple: “I <b>saw</b> him”</i> — «Я его видела».", "<i>Past Perfect: she said she <b>had seen</b> him</i> — она сказала, что видела его."],
  ["<i>will / can / may / must</i>", "<i>would / could / might / had to</i>"]
])}
<p>Модальные глаголы в последней строке тоже сдвигаются в прошлое. <i>Will</i> превращается в <i>would</i>, <i>can</i> — в <i>could</i>, <i>may</i> — в <i>might</i>. У <i>must</i> собственной формы прошедшего времени нет, поэтому вместо него обычно берут <i>had to</i> («пришлось, нужно было»), хотя <i>must</i> можно и оставить без изменений. Например, <i>“I must go,” Ann said</i> → <i>Ann said she had to go</i> — Анна сказала, что ей нужно идти. Союз <i>that</i> («что») после <i>said</i> и <i>told</i> часто опускают: <i>She said (that) she was tired</i>.</p>
<h3>Слова времени и места</h3>
${T(["Было", "Стало"], [
  ["<i>now, today, tonight</i>", "<i>then, that day, that night</i>"],
  ["<i>tomorrow</i>", "<i>the next day / the following day</i>"],
  ["<i>yesterday</i>", "<i>the day before / the previous day</i>"],
  ["<i>next week, last week</i>", "<i>the following week, the week before</i>"],
  ["<i>ago, here, this, these</i>", "<i>before, there, that, those</i>"]
])}
${N("После <i>tell</i> обязательно нужно сказать, кому: <i>He <b>told me</b> that…</i>. А после <i>say</i> этого не нужно, или «кому» вводят через <i>to</i>: <i>He <b>said</b> that…</i> или <i>He said to me that…</i>")}`,
  ex: [
    { type: 'gap', task: 'Передайте слова в косвенной речи.', items: [
      ["“I am tired,” she said. → She said that she ___ tired.", "was"],
      ["“We will help you,” they said. → They said they ___ help us.", "would"],
      ["“I have lost my phone,” he said. → He said he ___ his phone.", "had lost"],
      ["“I can swim,” Tom said. → Tom said he ___ swim.", "could"],
      ["“I saw her yesterday,” he said. → He said he had seen her ___.", "the day before|the previous day"],
      ["“I'm reading,” Kate said. → Kate said she ___.", "was reading"],
      ["“We live here,” they said. → They said they lived ___.", "there"],
      ["“I must go,” Ann said. → Ann said she ___ go.", "had to|must"],
      ["“I'll come tomorrow,” he said. → He said he would come ___.", "the next day|the following day"],
      ["“I bought this book,” she said. → She said she had bought ___ book.", "that"]
    ]},
    { type: 'choice', task: 'Выберите правильный вариант.', items: [
      ["Tom ___ me he was busy.", ["told", "said", "asked"]], ["She ___ that she was hungry.", ["said", "told", "asked"]],
      ["He said he ___ the next day.", ["would come", "will come", "comes"]], ["She said she had visited Paris two years ___.", ["before", "ago", "last"]],
      ["They told us they ___ moving.", ["were", "will", "have"]], ["He said, “I ___ it.” → He said he had done it.", ["did", "had", "would do"]]
    ]},
    { type: 'translate', task: 'Переведите на английский.', items: [
      ["Она сказала, что устала.", "She said that she was tired.|She said she was tired."],
      ["Он сказал мне, что живет в Москве.", "He told me that he lived in Moscow.|He told me he lived in Moscow."],
      ["Они сказали, что придут завтра. (Пересказываете через несколько дней.)", "They said that they would come the next day.|They said they would come the next day.|They said they would come the following day.|They said that they would come the following day."],
      ["Я знал, что она потеряла ключи.", "I knew that she had lost her keys.|I knew she had lost her keys."]
    ]},
    { type: 'listen', at: 2, task: 'Прослушайте предложение и соберите его из слов.', items: [
      ["He said that he had already seen these two films.", "Он сказал, что уже видел эти два фильма."],
      ["Ann told me that her children were afraid of the dark.", "Анна сказала мне, что ее дети боятся темноты."],
      ["The guide said that the castle had been built in the twelfth century.", "Экскурсовод сказал, что замок был построен в двенадцатом веке."]
    ]}
  ]},

{ id: 'rep-commands', level: 'B1', title: 'Просьбы и приказы', sub: 'She told us not to be late',
  rule: `
<p>Просьбы и приказы в косвенной речи передают с помощью инфинитива с <i>to</i>: «Закрой дверь» → <i>She asked me <b>to close</b> the door</i>. Глагол, который вводит такую фразу, выбирают по смыслу: <i>ask</i> — для просьбы, <i>tell</i> — для приказа или указания («велел»), <i>order</i> — для строгого, официального приказа («приказал»), <i>advise</i> — для совета.</p>
${F("told / asked / ordered / advised + <b>кого-то</b> + <b>(not) to V</b>")}
${T(["Прямая речь", "Косвенная речь"], [
  ["<i>“Close the window, please.”</i> — «Закрой, пожалуйста, окно».", "<i>She <b>asked</b> me <b>to close</b> the window.</i> — Она попросила меня закрыть окно."],
  ["<i>“Don't be late!”</i> — «Не опаздывайте!»", "<i>She <b>told</b> us <b>not to be</b> late.</i> — Она велела нам не опаздывать."],
  ["<i>“Sit down!”</i> — «Садись!»", "<i>The teacher <b>told</b> him <b>to sit</b> down.</i> — Учитель велел ему сесть."],
  ["<i>“You should rest.”</i> — «Вам следует отдохнуть».", "<i>The doctor <b>advised</b> me <b>to rest</b>.</i> — Врач посоветовал мне отдохнуть."],
  ["<i>“Let's go to the cinema.”</i> — «Давай сходим в кино».", "<i>He <b>suggested going</b> to the cinema.</i> — Он предложил сходить в кино."]
])}
${N("Если просьба с отрицанием («не опаздывайте»), <i>not</i> ставится перед <i>to</i>: <i>told us <b>not to</b> be late</i>, а не <i>to not be</i>.")}
<h3>Suggest — «предложить сделать вместе»</h3>
<p>Фразу с <i>Let's…</i> («давай…») обычно пересказывают глаголом <i>suggest</i>. После него идет не инфинитив, а форма на <i>-ing</i> — герундий: <i>He suggested going to the cinema</i>. Подробно герундий разобран в разделе 14 «Герундий». Есть и второй способ: после <i>suggest</i> поставить целое придаточное с <i>that</i>, а в нем — подлежащее и глагол в начальной форме или с <i>should</i>. Например, <i>Tom suggested (that) we go home</i> или <i>Tom suggested that we should go home</i> — Том предложил пойти домой. А вот сказать <i>suggested us to go</i> нельзя.</p>`,
  ex: [
    { type: 'gap', task: 'Передайте просьбу или приказ в косвенной речи.', items: [
      ["“Don't be late!” the teacher said. → The teacher told us ___ late.", "not to be"],
      ["“Close the door, please,” Mum said. → Mum asked me ___ the door.", "to close"],
      ["“Don't touch it!” he said. → He told me ___ it.", "not to touch"],
      ["“Open your books,” the teacher said. → The teacher told us ___ our books.", "to open"],
      ["“Please help me,” she said. → She asked me ___ her.", "to help"],
      ["“Don't worry,” he said. → He told me ___.", "not to worry"],
      ["“Stay in bed,” the doctor said. → The doctor advised me ___ in bed.", "to stay"],
      ["“Let's go home,” Tom said. → Tom suggested ___ home.", "going|we go|that we go|we should go|that we should go"]
    ]},
    { type: 'choice', task: 'Выберите правильный вариант.', items: [
      ["Mum told me ___ the window.", ["to close", "close", "closing"]], ["She asked us ___ noise.", ["not to make", "not make", "don't make"]],
      ["He suggested ___ a taxi.", ["taking", "to take", "take"]], ["The doctor ___ me to go to bed earlier.", ["advised", "said", "suggested"]]
    ]},
    { type: 'translate', task: 'Переведите на английский.', items: [
      ["Учитель велел нам открыть книги.", "The teacher told us to open our books.|The teacher told us to open the books."],
      ["Мама попросила меня не опаздывать.", "Mum asked me not to be late.|Mother asked me not to be late.|My mother asked me not to be late.|My mum asked me not to be late."],
      ["Врач посоветовал мне остаться в постели.", "The doctor advised me to stay in bed."],
      ["Он велел мне не трогать его вещи.", "He told me not to touch his things."]
    ]},
    { type: 'listen', at: 2, task: 'Прослушайте предложение и соберите его из слов.', items: [
      ["The doctor told me not to eat too much sugar.", "Врач велел мне не есть слишком много сахара."],
      ["Mum asked us to take off our shoes in the hall.", "Мама попросила нас снять обувь в прихожей."],
      ["Our coach told us to run across the field twice.", "Тренер велел нам дважды пробежать через поле."]
    ]}
  ]},

{ id: 'rep-questions', level: 'B2', title: 'Вопросы в косвенной речи', sub: 'She asked me where I lived',
  rule: `
<p>Когда мы пересказываем чужой вопрос, он превращается в обычное утверждение. Поэтому порядок слов становится прямым — сначала подлежащее, потом сказуемое; вспомогательные <i>do / does / did</i> исчезают; а в конце ставится точка, а не вопросительный знак: <i>Where do you live?</i> → <i>She asked me where I lived.</i> (она спросила, где я живу)</p>
${T(["Тип", "Прямая речь", "Косвенная речь"], [
  ["специальный", "<i>“Where <b>do you live</b>?”</i> — «Где ты живешь?»", "<i>She asked me where <b>I lived</b>.</i> — Она спросила меня, где я живу."],
  ["специальный", "<i>“What <b>are you doing</b>?”</i> — «Что ты делаешь?»", "<i>He asked what <b>I was doing</b>.</i> — Он спросил, что я делаю."],
  ["общий", "<i>“<b>Are</b> you hungry?”</i> — «Ты голоден?»", "<i>He asked <b>if / whether</b> I was hungry.</i> — Он спросил, не голоден ли я."],
  ["общий", "<i>“<b>Did</b> you see the film?”</i> — «Ты видел этот фильм?»", "<i>She asked <b>if</b> I had seen the film.</i> — Она спросила, видел ли я этот фильм."]
])}
<h3>Специальные и общие вопросы</h3>
<p>Специальный вопрос начинается с вопросительного слова (<i>where, what, why, how</i> и других), и в косвенной речи это слово остается на своем месте, а за ним идет прямой порядок слов. Общий вопрос — это вопрос, на который отвечают «да» или «нет»; в нем вопросительного слова нет (подробно типы вопросов разобраны в разделе 3 «Вопросы»). Чтобы пересказать общий вопрос, нужен союз <i>if</i> или <i>whether</i>, который соответствует русской частице «ли»: <i>He asked if I was hungry</i> — он спросил, голоден ли я. Между <i>if</i> и <i>whether</i> почти нет разницы: <i>whether</i> чуть книжнее, и его обычно выбирают, когда в вопросе есть выбор «или… или нет»: <i>She asked whether I was coming or not</i> — она спросила, приду я или нет.</p>
${N("Самая частая ошибка — оставить вопросительный порядок слов: <i>She asked me where <s>did I live</s></i>. Правильно: <i>where <b>I lived</b></i>. Так же строятся вежливые вопросы: <i>Do you know where the station <b>is</b>?</i>, а не <i>where is the station</i>.")}
<h3>Вежливые косвенные вопросы</h3>
<p>Косвенный вопрос встречается не только при пересказе. Чтобы спросить что-то вежливо, особенно у незнакомого человека, вопрос «прячут» внутрь вступительной фразы: <i>Do you know…?</i>, <i>Can you tell me…?</i>, <i>Could you tell me…?</i> Порядок слов во второй части тогда прямой, как в любом косвенном вопросе. Но время здесь не сдвигается, потому что вступительная фраза стоит в настоящем времени.</p>
${E([
  ["Can you tell me what time the train <b>leaves</b>?", "Не подскажете, во сколько отправляется поезд?"],
  ["Do you know if the shop <b>is</b> open?", "Вы не знаете, открыт ли магазин?"]
])}`,
  ex: [
    { type: 'gap', task: 'Закончите косвенный вопрос.', items: [
      ["“Where do you live?” she asked. → She asked me where I ___.", "lived"],
      ["“Are you hungry?” he asked. → He asked me ___ I was hungry.", "if|whether"],
      ["“What time is it?” Tom asked. → Tom asked what time ___.", "it was"],
      ["“Did you like the film?” she asked. → She asked if I ___ the film.", "had liked|liked"],
      ["“Can you swim?” he asked. → He asked if I ___ swim.", "could"],
      ["“Why are you crying?” Mum asked. → Mum asked why I ___.", "was crying"],
      ["“Where is the station?” → Do you know where the station ___?", "is"],
      ["“How old are you?” she asked. → She asked how old I ___.", "was"],
      ["“Have you finished?” the teacher asked. → The teacher asked if we ___.", "had finished"],
      ["“Will you come?” he asked. → He asked ___ I would come.", "if|whether"]
    ]},
    { type: 'choice', task: 'Выберите правильный вариант.', items: [
      ["She asked me where ___.", ["I lived", "did I live", "do I live"]], ["She asked me ___ I liked jazz.", ["if", "that", "do"]],
      ["Can you tell me what time ___?", ["the train leaves", "does the train leave", "leaves the train"]], ["He asked me why ___ late.", ["I was", "was I", "I am"]],
      ["I wonder ___ she will come.", ["whether", "that", "what"]], ["They asked us how long ___ there.", ["we had been", "had we been", "we have been"]]
    ]},
    { type: 'translate', task: 'Переведите на английский.', items: [
      ["Он спросил, где я живу.", "He asked where I lived.|He asked me where I lived."],
      ["Она спросила, люблю ли я кофе.", "She asked if I liked coffee.|She asked me if I liked coffee.|She asked whether I liked coffee.|She asked me whether I liked coffee."],
      ["Она спросила меня, сколько мне лет.", "She asked me how old I was.|She asked how old I was."],
      ["Учитель спросил, закончили ли мы.", "The teacher asked if we had finished.|The teacher asked whether we had finished.|The teacher asked us if we had finished.|The teacher asked us whether we had finished."]
    ]},
    { type: 'listen', at: 2, task: 'Прослушайте предложение и соберите его из слов.', items: [
      ["She asked me where I had bought such a nice umbrella.", "Она спросила, где я купил такой хороший зонт."],
      ["The teacher asked us if we had any questions.", "Учитель спросил, есть ли у нас вопросы."],
      ["He wanted to know how much the tickets to Paris cost.", "Он хотел знать, сколько стоят билеты в Париж."]
    ]}
  ]},

{ id: 'rep-future-past', level: 'C1', title: 'Будущее в прошедшем', sub: 'was going to · would · was about to',
  rule: `
<p>Иногда о будущем рассказывают, глядя из прошлого: «Я знал, что ты придешь», «Я собирался позвонить». В таких случаях обычное будущее время не подходит — используются особые формы: <i>would</i>, <i>was going to</i>, <i>was about to</i>.</p>
${T(["Форма", "Значение", "Пример"], [
  ["<i>would + V</i>", "будущее относительно прошлого", "<i>I knew you <b>would</b> like it.</i> — Я знал, что тебе понравится."],
  ["<i>was / were going to + V</i>", "намерение, часто не осуществленное", "<i>I <b>was going to</b> call you, but I forgot.</i> — Я собирался тебе позвонить, но забыл."],
  ["<i>was / were about to + V</i>", "вот-вот, собирался в ту минуту", "<i>We <b>were about to</b> leave when the phone rang.</i> — Мы уже собирались уходить, когда зазвонил телефон."],
  ["<i>was on the point of + -ing</i>", "был на грани того, чтобы", "<i>He <b>was on the point of giving</b> up.</i> — Он был готов вот-вот сдаться."],
  ["<i>was / were to + V</i>", "судьба, то, что произошло потом", "<i>They <b>were</b> never <b>to</b> meet again.</i> — Им больше не суждено было встретиться."],
  ["<i>Past Continuous</i>", "договоренность в прошлом", "<i>They <b>were leaving</b> the next morning.</i> — На следующее утро они уезжали."]
])}
<h3>Откуда берутся эти формы</h3>
<p>Каждая из этих форм — это знакомая форма будущего, перенесенная в прошлое. <i>Was going to</i> — это прошедшее время от <i>am going to</i> («собираюсь»), поэтому оно говорит о намерении, которое было тогда; часто оно так и не осуществилось. <i>Was about to</i> — прошедшее от <i>be about to</i> («вот-вот сделаю»): действие должно было случиться через мгновение. Оборот <i>be on the point of</i> значит почти то же самое, но после него, как после любого предлога, ставится форма на <i>-ing</i> (герундий, раздел 14), а не инфинитив. <i>Was / were to</i> — прошедшее от <i>be to</i> из раздела 9 «Модальные глаголы»: в рассказе оно сообщает о том, что случилось позже и было как бы предрешено. Наконец, Past Continuous для договоренности — это прошедшее от Present Continuous в значении будущего (<i>I'm leaving tomorrow</i> — я завтра уезжаю), которое разобрано в разделе 2 «Времена».</p>
${N("Когда пересказываем чьи-то слова о будущем, <i>will</i> превращается в <i>would</i>: <i>She said she <b>would</b> come later</i>, а не <i>will come</i>.")}`,
  ex: [
    { type: 'choice', task: 'Выберите правильный вариант.', items: [
      ["I ___ call you, but I forgot.", ["was going to", "will", "am going to"]], ["She said she ___ come later.", ["would", "will", "is going to"]],
      ["We were just ___ leave when the phone rang.", ["about to", "going", "on the point to"]], ["He was on the point of ___ up when he found the answer.", ["giving", "give", "to give"]],
      ["They didn't know then that they ___ never meet again.", ["were to", "are to", "will"]], ["I knew you ___ like this film.", ["would", "will", "are going to"]],
      ["They ___ leaving the next morning, so they packed in the evening.", ["were", "would", "are"]]
    ]},
    { type: 'translate', task: 'Переведите на английский.', items: [
      ["Я собирался тебе позвонить, но забыл.", "I was going to call you, but I forgot.|I was going to phone you, but I forgot."],
      ["Мы уже собирались уходить, когда зазвонил телефон.", "We were about to leave when the phone rang.|We were going to leave when the phone rang.|We were just about to leave when the phone rang."],
      ["Я знал, что тебе понравится.", "I knew you would like it.|I knew that you would like it."],
      ["Она сказала, что придет позже.", "She said she would come later.|She said that she would come later."]
    ]},
    { type: 'listen', at: 2, task: 'Прослушайте предложение и соберите его из слов.', items: [
      ["I was sure that the weather would be better than the day before.", "Я был уверен, что погода будет лучше, чем накануне."],
      ["We were going to leave, but then it started to snow.", "Мы собирались уходить, но тут пошел снег."],
      ["The film was about to begin when somebody's phone rang.", "Фильм вот-вот должен был начаться, когда у кого-то зазвонил телефон."]
    ]}
  ]}
]});

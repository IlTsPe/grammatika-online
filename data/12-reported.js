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
${N("Сдвигать время не нужно, если во второй части — общеизвестный факт, который верен всегда: <i>The teacher said that the Earth <b>goes</b> round the Sun</i> — учитель сказал, что Земля вращается вокруг Солнца.")}`,
  /* перевод слов в упражнениях: по наведению или касанию (gloss.js); ключи — в нижнем регистре, как слово стоит в тексте */
  gloss: {
    'sound': 'звук',
    'faster': 'быстрее', 'light': 'свет', 'than': 'чем',
    'realised': 'понял',
    'promised': 'пообещал', 'soon': 'скоро',
    'teacher': 'учитель', 'i': 'я', 'he': 'он', 'she': 'она', 'it': 'это; он, она (о предмете)', 'we': 'мы', 'they': 'они',
    'are': 'есть (форма to be)', 'the': 'определенный артикль', 'at': 'в (о времени); у, на (о месте)', 'in': 'в',
    'that': 'тот, та, то; что (союз)', 'moscow': 'Москва', 'moon': 'луна', 'her': 'ее, ей', 'there': 'там, туда',
    'why': 'почему', 'our': 'наш', 'home': 'дом; домой', 'evening': 'вечер', 'me': 'меня, мне', 'you': 'ты, вы', 'at home': 'дома',
    'kazan': 'Казань', 'were': 'были (форма to be)', 'coffee': 'кофе', 'train': 'поезд', 'up': 'не спит (be up)', 'water': 'вода',
    'told': 'сказал (от tell)', 'us': 'нас, нам', 'was': 'был (форма to be)', "didn't": 'не (= did not)',
    'before': 'до, раньше', 'sure': 'уверен', 'knew': 'знал (от know)', 'afraid': 'боится', 'coming': 'приходить (от come)', 'earth': 'Земля',
    'hoped': 'надеялся', 'key': 'ключ', 'know': 'знать', 'match': 'матч', 'race': 'гонка, забег', 'round': 'вокруг',
    'said': 'сказал (от say)', 'thought': 'думал (от think)'
  },
  ex: [
    { type: 'gap', task: 'Поставьте глагол в скобках в нужную форму по правилу согласования времен. Если в скобках несколько слов через косую черту, используйте в ответе их все — в нужной форме и порядке.', items: [
      ["I knew that she ___ (be) at home.", "was"], ["She said that she ___ (live) in Kazan.", "lived"],
      ["We didn't know that they ___ (already / leave).", "had already left"], ["He hoped that he ___ (win) the race.", "would win|had won"],
      ["I thought you ___ (sleep). Why are you up?", "were sleeping"], ["She realised that she ___ (lose) her key.", "had lost"],
      ["They were sure that it ___ (rain) in the evening.", "would rain"], ["He said that he ___ (not / like) coffee.", "did not like"],
      ["I was afraid that I ___ (miss) the train.", "would miss|had missed"], ["Our teacher said that water ___ (boil) at 100 °C.", "boils|boiled"]
    ]},
    { type: 'choice', task: 'Выберите правильный вариант.', items: [
      ["I knew she ___ in Moscow.", ["lived", "lives", "will live"]], ["He promised he ___ me soon.", ["would call", "will call", "calls"]],
      ["She didn't know that I ___ there before.", ["had been", "have been", "am"]], ["I thought you ___ coming.", ["weren't", "aren't", "won't"]],
      ["He told us that light ___ faster than sound.", ["travels", "is travelling", "had travelled"]], ["We were sure they ___ the match.", ["would win", "will win", "win"]]
    ]},
    { type: 'translate', task: 'Переведите на английский.', items: [
      ["Я знал, что она работает в банке.", "I knew that she worked in a bank.|I knew she worked in a bank.|I knew that she worked at a bank.|I knew she worked at a bank.|I knew that she was working in a bank.|I knew she was working in a bank."],
      ["Я думал, что ты в отпуске.", "I thought that you were on holiday.|I thought you were on holiday."],
      ["Он надеялся, что поезд не опоздает.", "He hoped that the train would not be late.|He hoped the train would not be late.|He hoped that the train would be on time.|He hoped the train would be on time."],
      ["Мы не знали, что магазин уже закрылся.", "We didn't know that the shop had already closed.|We didn't know the shop had already closed.|We didn't know that the shop was already closed.|We didn't know the shop was already closed."]
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
<p>Модальные глаголы в последней строке тоже сдвигаются в прошлое. У <i>must</i> собственной формы прошедшего времени нет, поэтому вместо него обычно берут <i>had to</i> («пришлось, нужно было»), хотя <i>must</i> можно оставить и без изменений. Например, <i>“I must go,” Ann said</i> → <i>Ann said she had to go</i> — Анна сказала, что ей нужно идти. Союз <i>that</i> («что») после <i>said</i> и <i>told</i> часто опускают: <i>She said (that) she was tired</i>.</p>
<h3>Слова времени и места</h3>
${T(["Было", "Стало"], [
  ["<i>now, today, tonight</i>", "<i>then, that day, that night</i>"],
  ["<i>tomorrow</i>", "<i>the next day / the following day</i>"],
  ["<i>yesterday</i>", "<i>the day before / the previous day</i>"],
  ["<i>next week, last week</i>", "<i>the following week, the week before</i>"],
  ["<i>ago, here, this, these</i>", "<i>before, there, that, those</i>"]
])}
${N("После <i>tell</i> обязательно нужно сказать, кому: <i>He <b>told me</b> that…</i> После <i>say</i> этого не нужно: <i>He <b>said</b> that…</i> А если «кому» все же называют, его вводят через <i>to</i>: <i>He said <b>to me</b> that…</i>")}`,
  /* перевод слов в упражнениях: по наведению или касанию (gloss.js); ключи — в нижнем регистре, как слово стоит в тексте */
  gloss: {
    'cold': 'холодный; холодно',
    'early': 'рано', 'leave': 'уезжать, уходить; оставлять',
    'book': 'книга', 'i have': 'у меня есть', 'i': 'я', 'he': 'он', 'she': 'она', 'it': 'это; он, она (о предмете)', 'we': 'мы',
    'they': 'они', 'my': 'мой, моя, мое', 'have': 'иметь; есть (о еде)', 'that': 'тот, та, то; что (союз)',
    'a': 'неопределенный артикль', 'this': 'этот, эта, это', 'live': 'жить', 'two': 'два', 'her': 'ее, ей', 'yesterday': 'вчера',
    'me': 'меня, мне', 'from': 'из, от', 'swim': 'плавать', 'come': 'приходить', 'you': 'ты, вы', 'tired': 'уставший',
    'hungry': 'голодный', 'paris': 'Париж', 'tomorrow': 'завтра', 'years': 'годы, лет', 'his': 'его', 'rome': 'Рим', 'here': 'здесь, сюда',
    "i'm": 'я (= I am)', 'postcard': 'открытка', 'bought': 'купил (от buy)', 'told': 'сказал (от tell)', 'us': 'нас, нам',
    'help': 'помогать', 'phone': 'телефон', 'reading': 'читаю (от read)', 'saw': 'увидел (от see)', 'was': 'был (форма to be)',
    'lived': 'жил (от live)', 'seen': 'видел (3-я форма see)', 'am': 'есть (форма to be с I)', 'done': 'сделал (3-я форма do)',
    'will': 'вспомогательный глагол будущего времени', 'busy': 'занятой', 'can': 'мочь, уметь', 'had': 'имел; вспомогательный глагол',
    "i'll": 'я (= I will)', 'lost': 'потерял; потерянный', 'moving': 'переезжать (от move)', 'must': 'должен', 'said': 'сказал (от say)',
    'visited': 'посетил', 'would': 'бы; вспомогательный глагол'
  },
  ex: [
    { type: 'gap', task: 'Передайте слова в косвенной речи.', items: [
      ["“I am cold,” she said. → She said that she ___ cold.", "was"],
      ["“We will help you,” they said. → They said they ___ help us.", "would"],
      ["“I have lost my phone,” he said. → He said he ___ his phone.", "had lost"],
      ["“I can swim,” Tom said. → Tom said he ___ swim.", "could"],
      ["“I saw her yesterday,” he said. → He said he had seen her ___.", "the day before|the previous day"],
      ["“I'm reading,” Kate said. → Kate said she ___.", "was reading"],
      ["“We live here,” they said. → They said they lived ___.", "there"],
      ["“I must leave early,” Kate said. → Kate said she ___ leave early.", "had to|must"],
      ["“I'll come tomorrow,” he said. → He said he would come ___.", "the next day|the following day"],
      ["“I bought this book,” she said. → She said she had bought ___ book.", "that"]
    ]},
    { type: 'choice', task: 'Выберите правильный вариант.', items: [
      ["Tom ___ me he was busy.", ["told", "said", "asked"]], ["She ___ that she was hungry.", ["said", "told", "asked"]],
      ["She said she ___ us a postcard from Rome.", ["would send", "will send", "sends"]], ["She said she had visited Paris two years ___.", ["before", "ago", "last"]],
      ["They told us they ___ moving.", ["were", "will", "have"]], ["He said, “I ___ it.” → He said he had done it.", ["did", "had", "would do"]]
    ]},
    { type: 'translate', task: 'Переведите на английский.', items: [
      ["Он сказал, что плохо себя чувствует.", "He said that he felt bad.|He said he felt bad.|He said that he didn't feel well.|He said he didn't feel well.|He said that he felt ill.|He said he felt ill.|He said that he was ill.|He said he was ill."],
      ["Он сказал мне, что живет в Москве.", "He told me that he lived in Moscow.|He told me he lived in Moscow."],
      ["Они сказали, что придут завтра. (Пересказываете через несколько дней.)", "They said that they would come the next day.|They said they would come the next day.|They said they would come the following day.|They said that they would come the following day."],
      ["Я знал, что она потеряла ключи.", "I knew that she had lost her keys.|I knew she had lost her keys."]
    ]},
    { type: 'listen', at: 2, task: 'Прослушайте предложение и соберите его из слов.', items: [
      ["He said that he had already seen those two films.", "Он сказал, что уже видел эти два фильма."],
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
${N("Если просьба с отрицанием («не жди меня»), <i>not</i> ставится перед <i>to</i>: <i>She asked me <b>not to</b> wait</i>, а не <i>to not wait</i>.")}
<h3>Suggest — «предложить сделать вместе»</h3>
<p>Фразу с <i>Let's…</i> («давай…») обычно пересказывают глаголом <i>suggest</i>. После него идет не инфинитив, а форма на <i>-ing</i> — герундий: <i>She suggested having a break</i> — она предложила сделать перерыв. Подробно герундий разобран в разделе 14 «Герундий». Есть и второй способ: после <i>suggest</i> поставить целое придаточное с <i>that</i>, а в нем — подлежащее и глагол в начальной форме или с <i>should</i>. Например, <i>Tom suggested (that) we go home</i> или <i>Tom suggested that we should go home</i> — Том предложил пойти домой. А вот сказать <i>suggested us to go</i> нельзя.</p>`,
  /* перевод слов в упражнениях: по наведению или касанию (gloss.js); ключи — в нижнем регистре, как слово стоит в тексте */
  gloss: {
    'corridor': 'коридор',
    'dishes': 'посуда', 'football': 'футбол', 'play': 'играть', 'run': 'бегать', 'wash': 'мыть',
    'teacher': 'учитель', 'he': 'он', 'she': 'она', 'it': 'это; он, она (о предмете)', 'go': 'идти, ехать', 'the': 'определенный артикль',
    'in': 'в', 'go to': 'ходить в, идти в', 'a': 'неопределенный артикль', 'open': 'открыть', 'window': 'окно', 'please': 'пожалуйста',
    'door': 'дверь', 'her': 'ее, ей', 'to': 'в, на (куда); частица перед глаголом', 'your': 'твой, ваш', 'our': 'наш',
    'go to bed': 'ложиться спать', "let's": 'давай(те)', 'home': 'дом; домой', 'bed': 'кровать', 'me': 'меня, мне', 'books': 'книги',
    'doctor': 'врач', 'late': 'поздно', 'mum': 'мама', "don't": 'не (= do not)', 'worry': 'волноваться', 'be': 'быть', 'close': 'закрыть',
    'told': 'сказал (от tell)', 'us': 'нас, нам', 'help': 'помогать', 'stay': 'оставаться', 'taxi': 'такси', 'advised': 'посоветовал',
    'asked': 'спросил, попросил', 'earlier': 'раньше', 'noise': 'шум', 'said': 'сказал (от say)', 'suggested': 'предложил',
    'touch': 'трогать'
  },
  ex: [
    { type: 'gap', task: 'Передайте просьбу или приказ в косвенной речи.', items: [
      ["“Don't run in the corridor!” the teacher said. → The teacher told us ___ in the corridor.", "not to run"],
      ["“Wash the dishes, please,” Mum said. → Mum asked me ___ the dishes.", "to wash"],
      ["“Don't touch it!” he said. → He told me ___ it.", "not to touch"],
      ["“Open your books,” the teacher said. → The teacher told us ___ our books.", "to open"],
      ["“Please help me,” she said. → She asked me ___ her.", "to help"],
      ["“Don't worry,” he said. → He told me ___.", "not to worry"],
      ["“Stay in bed,” the doctor said. → The doctor advised me ___ in bed.", "to stay"],
      ["“Let's play football,” Tom said. → Tom suggested ___ football.", "playing|we play|that we play|we should play|that we should play"]
    ]},
    { type: 'choice', task: 'Выберите правильный вариант.', items: [
      ["Mum told me ___ the window.", ["to close", "close", "closing"]], ["She asked us ___ noise.", ["not to make", "not make", "don't make"]],
      ["He suggested ___ a taxi.", ["taking", "to take", "take"]], ["The doctor ___ me to go to bed earlier.", ["advised", "said", "suggested"]]
    ]},
    { type: 'translate', task: 'Переведите на английский.', items: [
      ["Тренер велел нам не разговаривать.", "The coach told us not to talk.|The coach told us not to speak."],
      ["Мама попросила меня не кормить кошку.", "Mum asked me not to feed the cat.|My mum asked me not to feed the cat.|Mother asked me not to feed the cat.|My mother asked me not to feed the cat."],
      ["Мама велела мне вымыть руки.", "Mum told me to wash my hands.|My mum told me to wash my hands.|Mother told me to wash my hands.|My mother told me to wash my hands."],
      ["Он велел мне не звонить ему после десяти.", "He told me not to call him after ten.|He told me not to phone him after ten.|He told me not to ring him after ten."]
    ]},
    { type: 'listen', at: 2, task: 'Прослушайте предложение и соберите его из слов.', items: [
      ["The doctor told me not to eat too much sugar.", "Врач велел мне не есть слишком много сахара."],
      ["Mum asked us to take off our shoes in the hall.", "Мама попросила нас снять обувь в прихожей."],
      ["Our coach told us to run across the field twice.", "Тренер велел нам дважды пробежать через поле."]
    ]}
  ]},

{ id: 'rep-questions', level: 'B2', title: 'Вопросы в косвенной речи', sub: 'She asked me where I lived',
  rule: `
<p>Когда мы пересказываем чужой вопрос, он превращается в обычное утверждение. Поэтому порядок слов становится прямым — сначала подлежащее, потом сказуемое; вспомогательные <i>do / does / did</i> исчезают; а в конце ставится точка, а не вопросительный знак.</p>
${T(["Тип", "Прямая речь", "Косвенная речь"], [
  ["специальный", "<i>“Where <b>do you live</b>?”</i> — «Где ты живешь?»", "<i>She asked me where <b>I lived</b>.</i> — Она спросила меня, где я живу."],
  ["специальный", "<i>“What <b>are you doing</b>?”</i> — «Что ты делаешь?»", "<i>He asked what <b>I was doing</b>.</i> — Он спросил, что я делаю."],
  ["общий", "<i>“<b>Are</b> you hungry?”</i> — «Ты голоден?»", "<i>He asked <b>if / whether</b> I was hungry.</i> — Он спросил, не голоден ли я."],
  ["общий", "<i>“<b>Did</b> you see the film?”</i> — «Ты видел этот фильм?»", "<i>She asked <b>if</b> I had seen the film.</i> — Она спросила, видел ли я этот фильм."]
])}
<h3>Общие вопросы: if и whether</h3>
<p>Общий вопрос (на него отвечают «да» или «нет») пересказывают с союзом <i>if</i> или <i>whether</i>, который соответствует русской частице «ли». Между <i>if</i> и <i>whether</i> почти нет разницы: <i>whether</i> чуть книжнее, и его обычно выбирают, когда в вопросе есть выбор «или… или нет»: <i>She asked whether I was coming or not</i> — она спросила, приду я или нет.</p>
${N("И в специальных, и в общих вопросах самая частая ошибка — оставить вопросительный порядок слов: <i>She asked me where <s>did I live</s></i>. Правильно: <i>where <b>I lived</b></i>.")}
<h3>Вежливые косвенные вопросы</h3>
<p>Косвенный вопрос встречается не только при пересказе. Чтобы спросить что-то вежливо, особенно у незнакомого человека, вопрос «прячут» внутрь вступительной фразы: <i>Do you know…?</i>, <i>Can you tell me…?</i>, <i>Could you tell me…?</i> Порядок слов во второй части тогда прямой, как в любом косвенном вопросе. Но время здесь не сдвигается, потому что вступительная фраза стоит в настоящем времени.</p>
${E([
  ["Can you tell me what time the train <b>leaves</b>?", "Не подскажете, во сколько отправляется поезд?"],
  ["Do you know if the shop <b>is</b> open?", "Вы не знаете, открыт ли магазин?"]
])}`,
  /* перевод слов в упражнениях: по наведению или касанию (gloss.js); ключи — в нижнем регистре, как слово стоит в тексте */
  gloss: {
    'concert': 'концерт', 'enjoy': 'наслаждаться, нравиться', 'tired': 'уставший',
    'go': 'ходить, ездить', 'school': 'школа', 'to': 'в, на (куда)',
    'old': 'старый', 'how old': 'сколько лет', 'film': 'фильм', 'teacher': 'учитель', 'i': 'я', 'he': 'он', 'she': 'она', 'it': 'это; он, она (о предмете)',
    'we': 'мы', 'they': 'они', 'is': 'есть, является (форма to be)', 'are': 'есть (форма to be)', 'have': 'иметь; вспомогательный глагол',
    'the': 'определенный артикль', 'what': 'что, какой', 'there': 'там, туда', 'why': 'почему', 'where': 'где, куда',
    'tell': 'говорить, рассказывать', 'me': 'меня, мне', 'do': 'делать; вспомогательный глагол', 'long': 'долго; длинный',
    'swim': 'плавать', 'come': 'приходить', 'you': 'ты, вы', 'like': 'нравиться, любить', 'how': 'как', 'hungry': 'голодный',
    'late': 'поздно', 'jazz': 'джаз', 'mum': 'мама', 'time': 'время', 'did': 'вспомогательный глагол прошедшего времени', 'us': 'нас, нам',
    'was': 'был (форма to be)', 'finished': 'закончил (от finish)', 'how long': 'как долго', 'crying': 'плачет (от cry)',
    'station': 'вокзал, станция', 'will': 'вспомогательный глагол будущего времени', 'asked': 'спросил, попросил', 'can': 'мочь, уметь',
    'if': 'если; ли', 'know': 'знать', 'liked': 'нравился', 'wonder': 'интересно, задаваться вопросом',
    'would': 'бы; вспомогательный глагол'
  },
  ex: [
    { type: 'gap', task: 'Закончите косвенный вопрос.', items: [
      ["“Where do you go to school?” she asked. → She asked me where I ___ to school.", "went"],
      ["“Are you tired?” he asked. → He asked me ___ I was tired.", "if|whether"],
      ["“What time is it?” Tom asked. → Tom asked what time ___.", "it was"],
      ["“Did you enjoy the concert?” she asked. → She asked if I ___ the concert.", "had enjoyed|enjoyed"],
      ["“Can you swim?” he asked. → He asked if I ___ swim.", "could"],
      ["“Why are you crying?” Mum asked. → Mum asked why I ___.", "was crying"],
      ["“Where is the station?” → Do you know where the station ___?", "is"],
      ["“How old are you?” she asked. → She asked how old I ___.", "was"],
      ["“Have you finished?” the teacher asked. → The teacher asked if we ___.", "had finished"],
      ["“Will you come?” he asked. → He asked ___ I would come.", "if|whether"]
    ]},
    { type: 'choice', task: 'Выберите правильный вариант.', items: [
      ["She asked me what ___.", ["I wanted", "did I want", "do I want"]], ["She asked me ___ I liked jazz.", ["if", "that", "do"]],
      ["Can you tell me where ___?", ["the post office is", "is the post office", "the post office does"]], ["He asked me why ___ late.", ["I was", "was I", "I am"]],
      ["I wonder ___ she will come.", ["whether", "that", "what"]], ["They asked us how long ___ there.", ["we had been", "had we been", "we have been"]]
    ]},
    { type: 'translate', task: 'Переведите на английский.', items: [
      ["Он спросил, где я работаю.", "He asked where I worked.|He asked me where I worked."],
      ["Она спросила, умею ли я водить машину.", "She asked if I could drive.|She asked me if I could drive.|She asked whether I could drive.|She asked me whether I could drive."],
      ["Она спросила, когда начинается фильм.", "She asked when the film started.|She asked me when the film started.|She asked when the film began.|She asked me when the film began.|She asked what time the film started.|She asked me what time the film started."],
      ["Он спросил, видела ли я его брата.", "He asked if I had seen his brother.|He asked whether I had seen his brother.|He asked me if I had seen his brother.|He asked me whether I had seen his brother."]
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
  ["<i>would + V</i>", "будущее относительно прошлого (как в теме 12.1)", "<i>Nobody guessed that she <b>would</b> win.</i> — Никто не догадывался, что она победит."],
  ["<i>was / were going to + V</i>", "намерение, часто не осуществленное", "<i>I <b>was going to</b> call you, but I forgot.</i> — Я собирался тебе позвонить, но забыл."],
  ["<i>was / were about to + V</i>", "вот-вот, собирался в ту минуту", "<i>We <b>were about to</b> leave when the phone rang.</i> — Мы уже собирались уходить, когда зазвонил телефон."],
  ["<i>was on the point of + -ing</i>", "был на грани того, чтобы", "<i>He <b>was on the point of giving</b> up.</i> — Он был готов вот-вот сдаться."],
  ["<i>was / were to + V</i>", "судьба, то, что произошло потом (как в теме 9.7)", "<i>They <b>were</b> never <b>to</b> meet again.</i> — Им больше не суждено было встретиться."],
  ["<i>Past Continuous</i>", "договоренность в прошлом", "<i>They <b>were leaving</b> the next morning.</i> — На следующее утро они уезжали."]
])}
<p>Почти все эти формы — знакомые формы будущего, перенесенные в прошлое. Оборот <i>be on the point of</i> значит почти то же, что <i>was about to</i>, но после <i>of</i>, как после любого предлога, ставится форма на <i>-ing</i>, а не инфинитив.</p>`,
  /* перевод слов в упражнениях: по наведению или касанию (gloss.js); ключи — в нижнем регистре, как слово стоит в тексте */
  gloss: {
    'sixteen': 'шестнадцать', 'village': 'деревня',
    'and': 'и', 'at': 'в (о месте)', 'he': 'он', 'his': 'его', 'left': 'ушел (от leave); оставшийся; левый', 'return': 'вернуть; вернуться',
    'flying': 'летать', 'offered': 'предложили',
    'address': 'адрес', 'bed': 'кровать', 'began': 'начал (от begin)', 'children': 'дети', 'day': 'день', 'early': 'рано', 'her': 'ее, ей', 'it': 'это; он, она (о предмете)', 'job': 'работа', 'lost': 'потерял; потерянный', 'love': 'любить', 'match': 'матч', 'money': 'деньги', 'more': 'больше, более', 'present': 'подарок', 'rain': 'дождь', 'rome': 'Рим', 'start': 'начинать', 'sure': 'уверен', 'to': 'частица перед глаголом', 'went': 'пошел, поехал (от go)', 'write': 'писать', 'your': 'твой, ваш',
    'i': 'я', 'she': 'она', 'we': 'мы', 'they': 'они', 'the': 'определенный артикль',
    'that': 'тот, та, то; что (союз)', 'on': 'на; в (о днях)', 'of': 'предлог родительного падежа',
    'come': 'приходить', 'you': 'ты, вы', 'meet': 'встретиться',
    'again': 'снова', 'when': 'когда', 'but': 'но', 'next': 'следующий',
    'was': 'был (форма to be)', "didn't": 'не (= did not)',
    'so': 'поэтому; так', 'later': 'позже', 'then': 'потом, тогда',
    'just': 'как раз; только что', 'know': 'знать',
    'leaving': 'уход, уходить (от leave)', 'never': 'никогда', 'point': 'смысл; точка', 'on the point of': 'вот-вот, чуть не', 'said': 'сказал (от say)'
  },
  ex: [
    { type: 'choice', task: 'Выберите правильный вариант.', items: [
      ["I ___ write to you, but I lost your address.", ["was going to", "will", "am going to"]], ["She said she ___ come later.", ["would", "will", "is going to"]],
      ["The match was just ___ start when it began to rain.", ["about to", "going", "on the point to"]], ["She was on the point of ___ her job when they offered her more money.", ["leaving", "leave", "to leave"]],
      ["He left his village at sixteen and ___ never return.", ["was to", "is to", "will"]], ["I was sure the children ___ love the present.", ["would", "will", "are going to"]],
      ["We ___ flying to Rome the next day, so we went to bed early.", ["were", "would", "are"]]
    ]},
    { type: 'translate', task: 'Переведите на английский.', items: [
      ["Я собирался купить хлеба, но магазин был закрыт.", "I was going to buy some bread, but the shop was closed.|I was going to buy bread, but the shop was closed.|I was going to buy some bread, but the shop had closed.|I was going to buy bread, but the shop had closed."],
      ["Я уже собирался лечь спать, когда ты позвонил.", "I was about to go to bed when you called.|I was about to go to bed when you phoned.|I was just about to go to bed when you called.|I was just about to go to bed when you phoned."],
      ["Я был уверен, что он опоздает.", "I was sure he would be late.|I was sure that he would be late."],
      ["Он обещал, что поможет нам.", "He promised that he would help us.|He promised he would help us.|He promised to help us."]
    ]},
    { type: 'listen', at: 2, task: 'Прослушайте предложение и соберите его из слов.', items: [
      ["I was sure that the weather would be better than the day before.", "Я был уверен, что погода будет лучше, чем накануне."],
      ["We were going to leave, but then it started to snow.", "Мы собирались уходить, но тут пошел снег."],
      ["The film was about to begin when a little boy started crying.", "Фильм вот-вот должен был начаться, когда заплакал маленький мальчик."]
    ]}
  ]}
]});

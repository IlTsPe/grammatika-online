BOOK.push({ n: 20, id: 'extra', title: 'Дополнительно: продвинутые конструкции',
intro: 'Здесь собраны конструкции уровней B1–C2, которые встречаются в экзаменах и книжной речи. Беритесь за них, когда основные разделы уже пройдены.',
topics: [

{ id: 'x-relative', level: 'B1', title: 'Относительные придаточные', sub: 'who, which, that, whose, where',
  rule: `
<p>Относительное придаточное — это часть предложения, которая уточняет, о ком или о чем речь, как русское «который»: <i>the woman <b>who</b> lives next door</i> — женщина, которая живет по соседству. Слово, которое его вводит, зависит от того, о чем говорим: о человеке — <i>who</i>, о предмете — <i>which</i>, о месте — <i>where</i>.</p>
${T(["Слово", "О чем", "Пример"], [
  ["<i>who</i>", "люди", "<i>The woman <b>who</b> lives next door…</i> — Женщина, которая живет по соседству…"],
  ["<i>which</i>", "предметы, животные", "<i>The book <b>which</b> I bought…</i> — Книга, которую я купил…"],
  ["<i>that</i>", "люди и предметы (только в определительных)", "<i>The car <b>that</b> he drives…</i> — Машина, на которой он ездит…"],
  ["<i>whose</i>", "чей", "<i>The man <b>whose</b> car was stolen…</i> — Человек, у которого угнали машину…"],
  ["<i>where</i>", "место", "<i>The town <b>where</b> I was born…</i> — Город, где я родился…"],
  ["<i>when</i>", "время", "<i>The day <b>when</b> we met…</i> — День, когда мы познакомились…"]
])}
<h3>Определительные и описательные придаточные</h3>
<p>Придаточные бывают двух видов, и от этого зависят запятые и выбор слова. Определительное придаточное нужно, чтобы понять, о ком именно идет речь: если его убрать, смысл потеряется. Например, в <i>The man who called you is my boss</i> без придаточного неясно, какой человек имеется в виду. Такие придаточные запятыми не выделяют, и в них можно использовать <i>that</i>. Описательное придаточное только добавляет сведения о том, кто и так понятен: в <i>My brother, who lives in Kazan, is a teacher</i> ясно, о каком брате речь, а то, что он живет в Казани, — просто дополнительная информация. Такие придаточные выделяют запятыми, и <i>that</i> в них не ставят.</p>
<p>Кроме того, в определительном придаточном слово <i>who, which</i> или <i>that</i> можно опустить, если оно не подлежащее, а дополнение, то есть если после него идет свое подлежащее: <i>the book (that) <b>you</b> gave me</i>. А в <i>the man who called you</i> слово <i>who</i> — подлежащее (кто позвонил?), поэтому опускать его нельзя.</p>
${E([
  ["The man <b>who called</b> you is my boss.", "Человек, который тебе звонил, — мой начальник. (определительное: без него непонятно, о ком речь; без запятых)"],
  ["My brother, <b>who lives in Kazan</b>, is a teacher.", "Мой брат, который живет в Казани, — учитель. (описательное: дополнительная информация; с запятыми, that нельзя)"],
  ["The book (<b>that</b>) you gave me was great.", "Книга, которую ты мне подарил, была отличная. (that — дополнение, его можно опустить)"]
])}
${N("Если придаточное просто добавляет сведения и выделяется запятыми, <i>that</i> в нем не используют: <i>Moscow, <b>which</b> is the capital of Russia, is huge</i>.")}`,
  ex: [
    { type: 'gap', task: 'Впишите who, which, that, whose, where или when. Если слово можно опустить, допустим и «-».', items: [
      ["The woman ___ lives next door is a doctor.", "who|that"], ["This is the house ___ I was born.", "where"],
      ["The book ___ you gave me was great.", "which|that|-|0"], ["That's the man ___ car was stolen.", "whose"],
      ["Moscow, ___ is the capital of Russia, is huge.", "which"], ["I remember the day ___ we first met.", "when|that|-|0"],
      ["My brother, ___ lives in Kazan, is a teacher.", "who"], ["The film ___ we saw yesterday was boring.", "which|that|-|0"],
      ["Is this the shop ___ you bought your coat?", "where"], ["The girl ___ mother is a singer is in my class.", "whose"]
    ]},
    { type: 'translate', task: 'Переведите на английский.', items: [
      ["Женщина, которая живет по соседству, — врач.", "The woman who lives next door is a doctor.|The woman that lives next door is a doctor."],
      ["Это дом, где я родился.", "This is the house where I was born.|This is the house in which I was born.|This is the house I was born in.|This is the house that I was born in.|This is the house which I was born in."],
      ["Это человек, у которого украли машину.", "This is the man whose car was stolen.|That is the man whose car was stolen."],
      ["Книга, которую ты мне дал, очень интересная.", "The book you gave me is very interesting.|The book that you gave me is very interesting.|The book which you gave me is very interesting."]
    ]},
    { type: 'listen', at: 2, task: 'Прослушайте предложение и соберите его из слов.', items: [
      ["The woman who lives next door is a famous singer.", "Женщина, которая живет по соседству, известная певица."],
      ["This is the town where my grandparents were born.", "Это город, где родились мои бабушка и дедушка."],
      ["I have a friend whose father works at the zoo.", "У меня есть друг, чей отец работает в зоопарке."]
    ]}
  ]},

{ id: 'x-inversion', level: 'C1', title: 'Инверсия', sub: 'Never have I seen…',
  rule: `
<p>Если предложение начинается с отрицательного или ограничивающего слова — <i>never, rarely, hardly, not only</i>, — порядок слов меняется, как в вопросе: сначала идет <b>вспомогательный глагол</b>, потом <b>подлежащее</b>: <i>Never <b>have I</b> seen such a sunset</i>. Так говорят, чтобы подчеркнуть мысль, и это звучит книжно.</p>
${T(["Начало", "Значение", "Пример"], [
  ["<i>Never / Rarely / Seldom</i>", "никогда / редко", "<i>Never <b>have I</b> seen such a sunset.</i> — Никогда я не видел такого заката."],
  ["<i>Hardly / Scarcely … when</i>", "едва… как", "<i>Hardly <b>had she</b> sat down when the phone rang.</i> — Едва она села, как зазвонил телефон."],
  ["<i>No sooner … than</i>", "не успел… как", "<i>No sooner <b>had we</b> arrived than it started to rain.</i> — Не успели мы приехать, как пошел дождь."],
  ["<i>Not only … but also</i>", "мало того что… еще и", "<i>Not only <b>was he</b> late, but he also forgot the tickets.</i> — Мало того что он опоздал, так еще и забыл билеты."],
  ["<i>Only when / Only after / Only then</i>", "только когда / только после / только тогда", "<i>Only when I got home <b>did I</b> realise I had lost my keys.</i> — Только дома я понял, что потерял ключи."],
  ["<i>Not until</i>", "лишь, только (не раньше чем)", "<i>Not until morning <b>did he</b> learn the truth.</i> — Лишь утром он узнал правду."],
  ["<i>Little</i>", "совсем не, и не (подозревал)", "<i>Little <b>did they</b> know what was waiting for them.</i> — Они и не подозревали, что их ждет."],
  ["<i>Under no circumstances</i>", "ни в коем случае", "<i>Under no circumstances <b>should you</b> open it.</i> — Ни в коем случае не открывайте это."]
])}
<h3>Hardly… when и No sooner… than</h3>
<p>Эти две конструкции значат одно и то же: одно действие произошло сразу после другого — «едва… как», «не успел… как». Первое действие случилось чуть раньше, поэтому в части с инверсией стоит Past Perfect (<i>had she sat down</i>), а во второй части — обычный Past Simple (<i>the phone rang</i>). Запомните пары слов: <i>hardly</i> и <i>scarcely</i> идут вместе с <i>when</i>, а <i>no sooner</i> — с <i>than</i>, потому что <i>sooner</i> — сравнительная степень («раньше»).</p>
<h3>Little и under no circumstances</h3>
<p>В начале предложения <i>little</i> значит не «мало», а «совсем не»: <i>Little did they know</i> — они совсем не знали, даже не подозревали. Обычно так говорят, когда человек не догадывается о том, что случится потом. А <i>under no circumstances</i> («ни при каких обстоятельствах») — строгий запрет, его часто можно увидеть в инструкциях. Отрицание уже есть в самом выражении, поэтому <i>not</i> после него не ставят.</p>
${N("Если в предложении Present или Past Simple, для инверсии нужен вспомогательный <i>do / does / did</i>: <i>Rarely <b>do</b> we go out</i>. А в конструкциях <i>Only when…</i> и <i>Not until…</i> порядок слов меняется не сразу, а во <b>второй, главной</b> части: <i>Only when I got home <b>did I</b> realise…</i>")}`,
  ex: [
    { type: 'gap', task: 'Впишите пропущенное слово.', items: [
      ["Never ___ I seen such a beautiful sunset.", "have"], ["No sooner had we arrived ___ it started to rain.", "than"],
      ["Hardly had she sat down ___ the phone rang.", "when"], ["Not only ___ he late, but he also forgot the tickets.", "was"],
      ["Only when I got home ___ I realise I had lost my keys.", "did"], ["Little ___ they know what was waiting for them.", "did"],
      ["Under no circumstances ___ you open this door.", "should|must"], ["Rarely ___ we go out these days.", "do"]
    ]},
    { type: 'choice', task: 'Выберите правильный вариант.', items: [
      ["Not until the next morning ___ the truth.", ["did he learn", "he learned", "he did learn"]], ["Seldom ___ such talent in one so young.", ["have I seen", "I have seen", "I saw"]],
      ["Scarcely ___ the house when it began to snow.", ["had we left", "we had left", "did we leave"]], ["Only after the meeting ___ how serious the problem was.", ["did they understand", "they understood", "understood they"]]
    ]},
    { type: 'listen', at: 2, task: 'Прослушайте предложение и соберите его из слов.', items: [
      ["Never have I seen such a beautiful sunset.", "Никогда я не видел такого красивого заката."],
      ["Not only did he forget my birthday, but he was also late.", "Он не только забыл о моем дне рождения, но еще и опоздал."],
      ["Hardly had we sat down when the phone rang.", "Едва мы сели, как зазвонил телефон."]
    ]}
  ]},

{ id: 'x-unreal-past', level: 'C1', title: 'Нереальное прошедшее', sub: "it's time · would rather · as if",
  rule: `
<p>После некоторых выражений прошедшее время говорит вовсе не о прошлом, а о том, чего на самом деле нет, или о том, чего хотелось бы. Например, <i>It's time we <b>went</b> home</i> — нам пора домой (сейчас, а не в прошлом).</p>
${T(["Выражение", "Форма", "Пример"], [
  ["<i>It's (high) time</i>", "<i>+ Past Simple</i>", "<i>It's high time you <b>found</b> a job.</i> — Тебе давно пора найти работу."],
  ["<i>would rather</i> (о себе)", "<i>+ V</i>", "<i>I'd rather <b>stay</b> at home.</i> — Я бы лучше остался дома."],
  ["<i>would rather</i> (о другом)", "<i>+ Past Simple</i>", "<i>I'd rather you <b>didn't smoke</b> here.</i> — Я бы предпочел, чтобы вы здесь не курили."],
  ["<i>would rather</i> (о прошлом)", "<i>+ Past Perfect</i>", "<i>I'd rather you <b>had told</b> me.</i> — Лучше бы ты мне сказал."],
  ["<i>as if / as though</i>", "<i>+ Past (нереально)</i>", "<i>He talks as if he <b>knew</b> everything.</i> — Он говорит так, как будто все знает."]
])}
<h3>Как понимать эти выражения</h3>
<p><i>It's time</i> значит «пора», а со словом <i>high</i> — «давно пора», то есть с упреком: это уже надо было сделать. Если речь идет о самом себе или вообще, без указания лица, проще сказать <i>It's time to go</i>; если же назван тот, кто должен действовать, после него идет Past Simple: <i>It's time <b>we went</b></i>.</p>
<p><i>Would rather</i> (сокращенно <i>'d rather</i>) значит «лучше бы, предпочел бы». Если человек говорит о своем собственном желании, после <i>would rather</i> идет начальная форма глагола без <i>to</i>. Если он хочет, чтобы что-то сделал другой человек, этого человека называют, а глагол ставят в Past Simple, хотя речь о настоящем. А если жалеют о прошлом, о том, что уже не изменить, нужен Past Perfect. Это та же логика, что в предложениях с <i>I wish</i> (тема 11.4).</p>
<p><i>As if</i> и <i>as though</i> значат «как будто». Past после них показывает, что сравнение не соответствует действительности: на самом деле он знает не все. В книжной речи после <i>as if</i> часто говорят <i>were</i> для всех лиц: <i>She behaves as if she <b>were</b> the boss</i> — она ведет себя так, будто она здесь начальник.</p>
<h3>Сослагательное после глаголов требования</h3>
<p>После глаголов <i>suggest, insist, recommend, demand</i> и выражений <i>it is essential that</i>, <i>it is vital that</i> глагол стоит в начальной форме — без <i>-s</i>, даже с <i>he</i> и <i>she</i>: <i>The doctor insisted that he <b>stay</b> in bed</i>. В британском английском так же часто говорят с <i>should</i>: <i>that he <b>should stay</b></i>. Такую форму называют сослагательным наклонением: она показывает, что речь идет не о факте, а о том, что кто-то требует, советует или считает нужным. Это похоже на русское «чтобы»: «настоял, чтобы он лежал», а не «настоял, что он лежит». Отрицание ставят прямо перед глаголом, без <i>do</i>: <i>He suggested that we <b>not go</b></i> — он предложил, чтобы мы не ходили.</p>
${E([
  ["The doctor insisted that he <b>stay</b> in bed.", "Врач настоял, чтобы он лежал."],
  ["It is essential that every student <b>attend</b>.", "Важно, чтобы присутствовал каждый."]
])}`,
  ex: [
    { type: 'gap', task: 'Поставьте глагол в нужную форму.', items: [
      ["It's high time you ___ (find) a job.", "found"], ["I'd rather you ___ (not / smoke) in here.", "did not smoke"],
      ["I'd rather ___ (stay) at home tonight.", "stay"], ["He talks as if he ___ (know) everything.", "knew"],
      ["I'd rather you ___ (tell) me the truth yesterday.", "had told|'d told"], ["The doctor insisted that he ___ (stay) in bed.", "stay|should stay"],
      ["It is essential that every student ___ (attend) the meeting.", "attend|should attend"], ["It's time we ___ (go) home.", "went"]
    ]},
    { type: 'translate', task: 'Переведите на английский.', items: [
      ["Тебе давно пора найти работу.", "It is high time you found a job.|It is time you found a job.|It is about time you found a job.|It is high time you got a job.|It is about time you got a job."],
      ["Я бы предпочел, чтобы ты здесь не курил.", "I would rather you didn't smoke here.|I would rather you didn't smoke in here."],
      ["Он говорит так, будто все знает.", "He talks as if he knew everything.|He speaks as if he knew everything.|He talks as though he knew everything.|He speaks as though he knew everything."]
    ]},
    { type: 'listen', at: 2, task: 'Прослушайте предложение и соберите его из слов.', items: [
      ["It's time we went home. It's getting dark.", "Нам пора домой: темнеет."],
      ["I'd rather you didn't tell anyone about it.", "Я бы предпочел, чтобы ты никому об этом не рассказывал."],
      ["He talks as if he knew everything about everything.", "Он говорит так, будто знает обо всем на свете."]
    ]}
  ]},

{ id: 'x-cleft', level: 'C1', title: 'Расщепленные предложения', sub: 'It was Tom who… · What I need is…',
  rule: `
<p>Чтобы выделить какую-то часть предложения, в английском его «расщепляют» на две части: <i><b>It was Tom who</b> broke the window</i> — это Том разбил окно. В русском для такого выделения обычно хватает интонации или слова «именно».</p>
${T(["Конструкция", "Пример", "Что выделяем"], [
  ["<i>It is / was … that / who …</i>", "<i><b>It was Tom who</b> broke the window.</i> — Это Том разбил окно.", "именно Том"],
  ["", "<i><b>It was in 2010 that</b> we met.</i> — Мы познакомились именно в 2010 году.", "именно в 2010-м"],
  ["<i>What … is / was …</i>", "<i><b>What I need is</b> a holiday.</i> — Что мне нужно, так это отпуск.", "то, что мне нужно"],
  ["<i>What … did was (to) V</i>", "<i><b>What he did was</b> (to) call the police.</i> — Он сделал вот что: позвонил в полицию.", "его действие"],
  ["<i>All … is …</i>", "<i><b>All I want is</b> a cup of tea.</i> — Все, чего я хочу, — это чашка чая.", "единственное, что"]
])}
<h3>Как строить такие предложения</h3>
<p>В конструкции <i>It is / was … that / who …</i> то, что хотят выделить, ставят между <i>it was</i> и <i>that</i>, а остальное предложение идет после. Если выделяют человека, можно сказать <i>who</i> или <i>that</i>; если что-то другое — время, место, предмет, — только <i>that</i>: <i>It was <b>in Paris</b> that they met</i> — именно в Париже они познакомились. Время глагола <i>be</i> зависит от того, о каком времени речь: о прошлом — <i>it was</i>, о настоящем — <i>it is</i>.</p>
<p>В конструкции с <i>What…</i> сначала говорят, о чем пойдет речь, а самое важное оставляют на конец, после <i>is</i> или <i>was</i>. Когда выделяют целое действие, используют <i>What … did was</i>, а затем называют действие начальной формой глагола; частицу <i>to</i> перед ним можно поставить, а можно опустить. Вариант с <i>All … is</i> устроен так же, но значит «единственное, что; всего лишь»: человек хочет только чаю и ничего больше.</p>
${N("В конструкции с <i>What…</i> глагол обычно стоит в единственном числе, даже если дальше идет множественное: <i>What we need <b>is</b> more people</i>.")}`,
  ex: [
    { type: 'gap', task: 'Впишите пропущенное слово или «-», если оно не нужно.', items: [
      ["It was Tom ___ broke the window, not me.", "who|that"], ["___ I need is a long holiday.", "what"],
      ["It was in 2010 ___ we first met.", "that"], ["All I want ___ a cup of tea.", "is"],
      ["What he did ___ to call the police.", "was"], ["The reason ___ I called is to apologise.", "why|that|-|0"],
      ["It ___ not until midnight that she came home.", "was"], ["What surprised me ___ his reaction.", "was"]
    ]},
    { type: 'translate', task: 'Переведите на английский.', items: [
      ["Именно Том разбил окно.", "It was Tom who broke the window.|It was Tom that broke the window."],
      ["Что мне нужно, так это отпуск.", "What I need is a holiday.|What I need is a vacation."],
      ["Все, чего я хочу, — это чашка чая.", "All I want is a cup of tea."],
      ["Мы познакомились именно в 2010 году.", "It was in 2010 that we met.|It was in 2010 that we first met."]
    ]},
    { type: 'listen', at: 2, task: 'Прослушайте предложение и соберите его из слов.', items: [
      ["It was my brother who broke the window, not me.", "Это мой брат разбил окно, а не я."],
      ["What I need now is a cup of hot tea.", "Что мне сейчас нужно, так это чашка горячего чая."],
      ["It was in Rome that they first met.", "Именно в Риме они впервые встретились."]
    ]}
  ]},

{ id: 'x-inverted-conditionals', level: 'C2', title: 'Условия без if', sub: 'Had I known… · Should you need…',
  rule: `
<p>В формальной речи условие можно выразить без <i>if</i>: его убирают, а вспомогательный глагол ставят в самое начало. Например, вместо <i>If I had known</i> говорят <i>Had I known</i>. Кроме того, условие можно ввести и другими словами — <i>provided</i>, <i>as long as</i>, <i>but for</i>.</p>
${T(["Обычная форма", "С инверсией"], [
  ["<i>If I had known…</i>", "<i><b>Had I known</b>, I would have helped.</i> — Если бы я знал, я бы помог."],
  ["<i>If you should need help…</i>", "<i><b>Should you need</b> any help, call me.</i> — Если вдруг понадобится помощь, звоните мне."],
  ["<i>If the government were to raise taxes…</i>", "<i><b>Were the government to</b> raise taxes, there would be protests.</i> — Если бы правительство повысило налоги, начались бы протесты."],
  ["<i>If it were not for…</i>", "<i><b>Were it not for</b> the rain, we could play outside.</i> — Если бы не дождь, мы могли бы поиграть на улице."],
  ["<i>If it had not been for…</i>", "<i><b>Had it not been for</b> your support, I would have given up.</i> — Если бы не твоя поддержка, я бы сдался."]
])}
<h3>Что значат should, were to и were it not for</h3>
<p>Вариант с <i>had</i> — это обычное условное предложение 3 типа, только без <i>if</i> (условные предложения подробно разобраны в разделе 11). А вот три других оборота стоит разобрать отдельно. <i>If you should…</i> («если вдруг…») говорит о том, что событие возможно, но маловероятно; его часто используют в вежливых предложениях помощи и в официальных письмах. <i>If … were to…</i> описывает воображаемую ситуацию в будущем, обычно маловероятную: «если бы вдруг правительство решило…». <i>If it were not for…</i> и <i>if it had not been for…</i> значат «если бы не…»: первый говорит о настоящем, второй — о прошлом. Во всех случаях инверсия делает фразу более официальной, а смысл не меняется.</p>
<h3>Другие слова для условия</h3>
<p>Условие можно ввести и без <i>if</i> и без инверсии. <i>But for</i> — это короткая замена <i>if it were not for</i> и <i>if it had not been for</i>, то есть тоже «если бы не», и после него идет существительное. <i>As long as</i> и <i>provided (that)</i> значат «при условии, что», то есть ставят обязательное условие. <i>Supposing</i> значит «предположим, что; а что если» и вводит воображаемую ситуацию.</p>
${E([
  ["<b>But for</b> his help, we would have failed.", "Если бы не его помощь, мы бы провалились."],
  ["You can borrow it <b>as long as</b> / <b>provided</b> you're careful.", "Можешь взять его при условии, что будешь аккуратен."],
  ["<b>Supposing</b> you won, what would you do?", "А что если бы ты выиграл — что бы ты сделал?"]
])}
${N("В таких предложениях отрицание не сокращают: правильно <i>Had it <b>not</b> been for…</i>, а не <i>Hadn't it been for…</i>")}`,
  ex: [
    { type: 'gap', task: 'Впишите пропущенное слово.', items: [
      ["___ I known about the problem, I would have helped.", "had"], ["___ you need any help, call me.", "should"],
      ["___ it not been for your support, I would have given up.", "had"], ["___ it not for the rain, we could play outside.", "were"],
      ["___ the government to raise taxes, there would be protests.", "were"], ["But ___ his help, we would have failed.", "for"],
      ["Had she ___ (study) harder, she would have passed.", "studied"], ["You can borrow my car as ___ as you drive carefully.", "long"]
    ]},
    { type: 'choice', task: 'Выберите правильный вариант.', items: [
      ["___ you change your mind, let me know.", ["Should", "Would", "Had"]], ["Had I ___ earlier, I would have caught the train.", ["left", "leave", "been left"]],
      ["___ for the storm, the plane would have landed on time.", ["Had it not been", "Were it not", "Should it not"]], ["I'll lend you the money ___ you pay it back next month.", ["provided", "unless", "otherwise"]]
    ]},
    { type: 'listen', at: 2, task: 'Прослушайте предложение и соберите его из слов.', items: [
      ["Had I known about the traffic, I would have left earlier.", "Знай я о пробках, выехал бы раньше."],
      ["Should you need any help, just call me.", "Если вам понадобится помощь, просто позвоните мне."],
      ["Were I in your place, I would accept the offer.", "Будь я на вашем месте, я бы принял предложение."]
    ]}
  ]},

{ id: 'x-ellipsis', level: 'C2', title: 'Эллипсис и замещение', sub: 'I hope not · so can I · the red one',
  rule: `
<p>В живой речи англичане не любят повторяться. Вместо уже названных слов они используют короткие заменители (<i>one, so, do</i>) или просто опускают лишнее: <i>— Is she coming? — I think <b>so</b></i> — думаю, да.</p>
${T(["Заместитель", "Пример", "Значение"], [
  ["<i>so / not</i>", "<i>I think <b>so</b>. I hope <b>not</b>. I'm afraid <b>not</b>.</i> — Думаю, да. Надеюсь, что нет. Боюсь, что нет.", "заменяет целое предложение"],
  ["<i>one / ones</i>", "<i>Can I see the red <b>one</b>? Bigger <b>ones</b>?</i> — Можно посмотреть красный? А побольше есть?", "заменяет исчисляемое существительное"],
  ["вспомогательный глагол", "<i>She said she'd call, but she <b>didn't</b>.</i> — Она сказала, что позвонит, но не позвонила.", "заменяет глагольную группу"],
  ["<i>so / neither + aux + подлежащее</i>", "<i>He can swim, and <b>so can I</b>.</i> — Он умеет плавать, и я тоже. <i>— I'm not tired. — <b>Neither am I</b>.</i> — Я не устал. — Я тоже.", "«я тоже», «я тоже не»"],
  ["<i>to</i>", "<i>You don't have to if you don't want <b>to</b>.</i> — Не обязательно, если не хочешь.", "заменяет инфинитив"]
])}
<h3>Как работают заместители</h3>
<p>Слова <i>so</i> и <i>not</i> заменяют целое предложение после глаголов мнения и чувства: <i>think, hope, suppose, expect, be afraid</i>. Например, на вопрос <i>Will it rain?</i> (будет дождь?) отвечают <i>I'm afraid so</i> — боюсь, что да, или <i>I hope not</i> — надеюсь, что нет, и не повторяют <i>it will rain</i>.</p>
<p><i>One</i> заменяет исчисляемое существительное в единственном числе, а <i>ones</i> — во множественном, чтобы не повторять его: <i>this cup or <b>that one</b></i> — эта чашка или та. С неисчисляемыми существительными (<i>water, money</i>) так не делают.</p>
<p>Оборот <i>so / neither + вспомогательный глагол + подлежащее</i> значит «я тоже» или «я тоже не». <i>So</i> отвечает на утверждение, <i>neither</i> (или <i>nor</i>) — на отрицание. Порядок слов здесь обратный, как в вопросе. Вспомогательный глагол берут тот же, что был в первой фразе: <i>can — so can I</i>, <i>am not — neither am I</i>. Если там было Present или Past Simple без вспомогательного глагола, нужен <i>do, does</i> или <i>did</i>: <i>— I liked the film. — <b>So did I</b></i> — Мне понравился фильм. — Мне тоже.</p>
<p>Вспомогательный глагол может заменить и всю глагольную группу: <i>but she didn't</i> значит <i>but she didn't call</i>. Похоже работает и частица <i>to</i>: вместо того чтобы повторять весь инфинитив, оставляют только <i>to</i> (<i>if you don't want <b>to</b></i> = <i>if you don't want to do it</i>).</p>
${N("Отрицательный короткий ответ строят по-разному. После <i>hope</i> говорят <i>I hope <b>not</b></i> — надеюсь, что нет. А после <i>think</i> — <i>I <b>don't think so</b></i> — думаю, что нет.")}`,
  ex: [
    { type: 'gap', task: 'Впишите одно слово.', items: [
      ["— Will it rain tomorrow? — I hope ___.", "not"], ["— Is she coming? — I think ___.", "so"],
      ["I don't like this dress. Can I see the red ___?", "one"], ["He can play the piano, and so ___ his sister.", "can"],
      ["— I'm not hungry. — Neither ___ I.", "am"], ["You don't have to come if you don't want ___.", "to"],
      ["These shoes are too small. Have you got any bigger ___?", "ones"], ["— Did you lock the door? — I'm afraid ___. Sorry!", "not"],
      ["She promised to call, but she ___ (не позвонила).", "did not"], ["— I love jazz. — So ___ I.", "do"]
    ]},
    { type: 'translate', task: 'Переведите на английский.', items: [
      ["Надеюсь, что нет.", "I hope not."],
      ["— Я устал. — Я тоже.", "I am tired. — So am I.|I am tired. — Me too."],
      ["Мне не нравится эта сумка. Покажите красную.", "I don't like this bag. Show me the red one.|I don't like this bag. Can I see the red one?|I don't like this bag. Could you show me the red one?|I don't like this bag. Can you show me the red one?"],
      ["Она обещала позвонить, но не позвонила.", "She promised to call, but she didn't.|She promised to phone, but she didn't.|She promised to ring, but she didn't."]
    ]},
    { type: 'listen', at: 2, task: 'Прослушайте предложение и соберите его из слов.', items: [
      ["Is the shop still open? I'm afraid not.", "Магазин еще открыт? Боюсь, что нет."],
      ["She can swim very fast, and so can her brother.", "Она умеет очень быстро плавать, и ее брат тоже."],
      ["I don't like the red dress, but I like the blue one.", "Мне не нравится красное платье, а синее нравится."]
    ]}
  ]}
]});

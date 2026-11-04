BOOK.push({ n: 20, id: 'extra', title: 'Дополнительно: продвинутые конструкции',
intro: 'Здесь собраны конструкции уровней B1–C2, которые встречаются в экзаменах и книжной речи. Беритесь за них, когда основные разделы уже пройдены.',
topics: [

{ id: 'x-relative', level: 'B1', title: 'Относительные придаточные', sub: 'who, which, that, whose, where',
  rule: `
<p>Относительное придаточное — это часть предложения, которая уточняет, о ком или о чем речь, как русское «который»: <i>the woman <b>who</b> lives next door</i> — женщина, которая живет по соседству. Какое слово его вводит, зависит от того, о чем говорим (см. таблицу).</p>
${T(["Слово", "О чем", "Пример"], [
  ["<i>who</i>", "люди", "<i>The doctor <b>who</b> helped me…</i> — Врач, который мне помог…"],
  ["<i>which</i>", "предметы, животные", "<i>The book <b>which</b> I bought…</i> — Книга, которую я купил…"],
  ["<i>that</i>", "люди и предметы (только в определительных придаточных, о них ниже)", "<i>The car <b>that</b> he drives…</i> — Машина, на которой он ездит…"],
  ["<i>whose</i>", "принадлежность (чей)", "<i>The man <b>whose</b> car was stolen…</i> — Человек, у которого угнали машину…"],
  ["<i>where</i>", "место", "<i>The town <b>where</b> I was born…</i> — Город, где я родился…"],
  ["<i>when</i>", "время", "<i>The day <b>when</b> we met…</i> — День, когда мы познакомились…"]
])}
<h3>Определительные и описательные придаточные</h3>
<p>Придаточные бывают двух видов, и от этого зависят запятые и выбор слова. Определительное придаточное нужно, чтобы понять, о ком именно идет речь: если его убрать, смысл потеряется. Например, <i>The man who called you is my boss</i> — человек, который тебе звонил, мой начальник. Без придаточного неясно, какой человек имеется в виду. Такие придаточные запятыми не выделяют, и в них можно использовать <i>that</i>. Описательное придаточное только добавляет сведения о том, кто и так понятен: <i>My brother, who lives in Kazan, is a teacher</i> — мой брат, который живет в Казани, учитель. Здесь ясно, о каком брате речь, а то, что он живет в Казани, — просто дополнительная информация. Такие придаточные выделяют запятыми, и <i>that</i> в них не ставят.</p>
<p>Кроме того, в определительном придаточном слово <i>who, which</i> или <i>that</i> можно опустить, если оно не подлежащее, а дополнение, то есть если после него идет свое подлежащее: <i>the book (that) <b>you</b> gave me</i>. А в <i>the man who called you</i> слово <i>who</i> — подлежащее (кто позвонил?), поэтому опускать его нельзя. После слов <i>day, year, time</i> вместо <i>when</i> можно сказать <i>that</i> или ничего: <i>the day (that) we met</i> — день, когда мы познакомились.</p>
${E([
  ["The girl <b>who sits</b> next to me is from Minsk.", "Девочка, которая сидит рядом со мной, из Минска. (определительное: без него непонятно, о ком речь; без запятых)"],
  ["Our teacher, <b>who is from London</b>, speaks Russian well.", "Наш учитель, который родом из Лондона, хорошо говорит по-русски. (описательное: дополнительная информация; с запятыми, that нельзя)"],
  ["The book (<b>that</b>) you gave me was great.", "Книга, которую ты мне подарил, была отличная. (that — дополнение, его можно опустить)"]
])}`,
  /* перевод слов в упражнениях: по наведению или касанию (gloss.js); ключи — в нижнем регистре, как слово стоит в тексте */
  gloss: {
    'forget': 'забывать', "i'll": 'я (= I will)', 'moved': 'переехал', 'never': 'никогда', 'year': 'год',
    'fixed': 'починил',
    'did': 'вспомогательный глагол прошедшего времени', 'do': 'делать', 'great': 'отличный', 'job': 'работа', 'know': 'знать', 'our': 'наш', 'plays': 'играет', 'roof': 'крыша', 'son': 'сын', 'team': 'команда',
    'house': 'дом', 'film': 'фильм', 'man': 'мужчина', 'this is': 'это', 'i': 'я', 'we': 'мы', 'my': 'мой, моя, мое',
    'is': 'есть, является (форма to be)', 'the': 'определенный артикль', 'in': 'в', 'a': 'неопределенный артикль',
    'this': 'этот, эта, это', 'shop': 'магазин', 'aunt': 'тетя', 'moscow': 'Москва', 'first': 'первый', 'day': 'день',
    'of': 'предлог родительного падежа', 'girl': 'девочка, девушка', 'mother': 'мама',
    'to': 'в, на (куда); частица перед глаголом', 'class': 'класс', 'your': 'твой, ваш', 'yesterday': 'вчера', 'with': 'с',
    'russia': 'Россия', 'works': 'работает', 'huge': 'огромный', 'you': 'ты, вы',
    'hospital': 'больница', 'cake': 'торт', 'boring': 'скучный', 'bought': 'купил (от buy)',
    'made': 'сделали; приняли (решение)', 'us': 'нас, нам', 'coat': 'пальто', 'stay': 'оставаться', 'met': 'встретил (от meet)',
    'saw': 'увидел (от see)', 'was': 'был (форма to be)', 'born': 'родился (be born)', 'capital': 'столица', 'coming': 'приходит, придет',
    'delicious': 'вкусный', 'granny': 'бабуля', 'remember': 'помнить', 'singer': 'певец',
    'woman': 'женщина'
  },
  ex: [
    { type: 'gap', task: 'Впишите who, which, that, whose, where или when. Если слово можно опустить, допустим и «-».', items: [
      ["The man ___ fixed our roof did a great job.", "who|that"], ["This is the house ___ I was born.", "where"],
      ["The cake ___ my granny made was delicious.", "which|that|-|0"], ["Do you know the woman ___ son plays in our team?", "whose"],
      ["Moscow, ___ is the capital of Russia, is huge.", "which"], ["I'll never forget the year ___ we moved to Moscow.", "when|that|-|0"],
      ["My aunt, ___ works in a hospital, is coming to stay with us.", "who"], ["The film ___ we saw yesterday was boring.", "which|that|-|0"],
      ["Is this the shop ___ you bought your coat?", "where"], ["The girl ___ mother is a singer is in my class.", "whose"]
    ]},
    { type: 'translate', task: 'Переведите на английский.', items: [
      ["Женщина, которая продает цветы, — моя тетя.", "The woman who sells flowers is my aunt.|The woman that sells flowers is my aunt."],
      ["Это кафе, где мы впервые встретились.", "This is the cafe where we first met.|This is the café where we first met.|This is the cafe where we met for the first time.|This is the café where we met for the first time."],
      ["Я знаю женщину, чья дочь стала актрисой.", "I know a woman whose daughter became an actress.|I know the woman whose daughter became an actress.|I know a woman whose daughter has become an actress."],
      ["Платье, которое она купила, очень красивое.", "The dress she bought is very beautiful.|The dress that she bought is very beautiful.|The dress which she bought is very beautiful.|The dress she bought is very pretty.|The dress that she bought is very pretty.|The dress which she bought is very pretty."]
    ]},
    { type: 'listen', at: 2, task: 'Прослушайте предложение и соберите его из слов.', items: [
      ["The man who repaired our car lives in this street.", "Человек, который починил нашу машину, живет на этой улице."],
      ["This is the park where we played as children.", "Это парк, где мы играли в детстве."],
      ["I have a friend whose father works at the zoo.", "У меня есть друг, чей отец работает в зоопарке."]
    ]}
  ]},

{ id: 'x-emphatic', level: 'B2', title: 'Эмфатические конструкции', sub: 'I do like it · He did come',
  rule: `
<p>В обычное утвердительное предложение можно добавить вспомогательный глагол <i>do / does / did</i>, чтобы усилить сказанное: <i>I like it</i> — мне нравится, <i>I <b>do</b> like it</i> — мне правда нравится. По-русски такое усиление передают словами «правда», «действительно», «все-таки», «же», «обязательно».</p>
${F("<b>do / does / did</b> + V")}
<p>После <i>do / does / did</i> глагол стоит в начальной форме, как в вопросе: <i>She <b>does</b> know</i>, а не <i>does knows</i>; <i>He <b>did</b> come</i>, а не <i>did came</i>. В устной речи на вспомогательный глагол всегда падает ударение — именно оно и создает усиление.</p>
${T(["Когда говорят", "Пример"], [
  ["возражают собеседнику", "<i>— You don't like jazz. — I <b>do</b> like jazz!</i> — Ты не любишь джаз. — Да люблю я джаз!"],
  ["что-то вышло вопреки ожиданию", "<i>I thought he wouldn't come, but he <b>did</b> come.</i> — Я думал, он не придет, но он все-таки пришел."],
  ["противопоставляют", "<i>I don't eat meat, but I <b>do</b> eat fish.</i> — Мясо я не ем, а вот рыбу ем."],
  ["настойчиво и тепло приглашают", "<i><b>Do</b> sit down!</i> — Садитесь же! <i><b>Do</b> come again!</i> — Обязательно приходите еще!"]
])}
<p>Так усиливают только Present Simple и Past Simple. Если в предложении уже есть <i>be</i>, <i>have</i> в перфектном времени или модальный глагол, <i>do</i> не добавляют, а усиливают голосом — ударением на этом глаголе: <i>I <b>am</b> ready!</i> — я правда готов! На письме такое ударение обычно выделяют курсивом. Если же <i>have</i> — смысловой глагол или часть <i>have to</i>, <i>do</i> нужен: <i>I <b>do</b> have time</i> — время у меня правда есть, <i>I <b>do</b> have to go</i> — мне правда нужно идти. Исключение — повелительное наклонение: в нем <i>do</i> можно поставить и перед <i>be</i>: <i><b>Do</b> be careful!</i> — будь же осторожен!</p>
${N("Сам вспомогательный глагол по-русски отдельным словом не переводят: <i>I do like it</i> — это не «я делаю нравится», а «мне правда нравится».")}`,
  /* перевод слов в упражнениях: по наведению или касанию (gloss.js); ключи — в нижнем регистре, как слово стоит в тексте */
  gloss: {
    'messages': 'сообщения', 'yourself': 'сам, себя',
    'cake': 'торт', 'read': 'читать; прочитал', 'them': 'их, им',
    'film': 'фильм', 'twice': 'дважды', 'week': 'неделя', 'book': 'книга', "it's": 'это (= it is)', 'i': 'я', 'he': 'он', 'she': 'она',
    'it': 'это; он, она (о предмете)', 'we': 'мы', 'my': 'мой, моя, мое', 'is': 'есть, является (форма to be)',
    'have': 'иметь; есть (о еде)', 'go': 'идти, ехать', 'the': 'определенный артикль', 'at': 'в (о времени); у, на (о месте)',
    'day': 'день', 'and': 'и', 'two': 'два', 'every': 'каждый', 'birthday': 'день рождения', 'for': 'для; в течение', 'see': 'увидеть',
    'to': 'в, на (куда); частица перед глаголом', 'some': 'немного, несколько', 'why': 'почему', 'our': 'наш', "let's": 'давай(те)',
    'home': 'дом; домой', 'me': 'меня, мне', 'come': 'приходить', 'you': 'ты, вы', 'like': 'нравиться, любить', 'tea': 'чай',
    'cup': 'чашка', 'french': 'французский', 'football': 'футбол', 'at home': 'дома', 'not': 'не', 'party': 'вечеринка', 'ready': 'готов',
    'every day': 'каждый день', 'but': 'но', 'speak': 'говорить', 'time': 'время', 'tv': 'телевизор', 'weekend': 'выходные',
    "don't": 'не (= do not)', 'next': 'следующий', 'think': 'думать', 'call': 'звонить', 'listen': 'слушать', 'radio': 'радио',
    'help': 'помогать', 'dishes': 'посуда', 'down': 'вниз', "aren't": 'не (= are not)', 'spanish': 'испанский', "didn't": 'не (= did not)',
    'too': 'тоже; слишком', 'next week': 'на следующей неделе', 'answer': 'ответ; ответить', 'believe': 'верить', 'busy': 'занятой',
    'delicious': 'вкусный', "doesn't": 'не (= does not)', "he's": 'он (= he is / he has)', 'helps': 'помогает', 'know': 'знать',
    'matches': 'спички; матчи', 'never': 'никогда', 'remember': 'помнить', 'say': 'сказать', 'says': 'говорит', 'shy': 'застенчивый',
    'soup': 'суп', "that's": 'это (= that is)', 'true': 'правда, верный', 'watch': 'смотреть; часы', 'win': 'выиграть',
    'would': 'бы; вспомогательный глагол'
  },
  ex: [
    { type: 'gap', task: 'Усильте утверждение: впишите do, does или did и глагол из скобок в нужной форме.', items: [
      ["— You never read my messages. — I ___ (read) them! Every day.", "do read"],
      ["I didn't think she would remember my birthday, but she ___ (remember) it.", "did remember"],
      ["She doesn't speak French, but she ___ (speak) Spanish.", "does speak"],
      ["— Why didn't you call me? — I ___ (call) you! Twice!", "did call"],
      ["I know you don't believe me, but I ___ (want) to help you.", "do want"],
      ["He says he's busy, but he ___ (find) time for football every weekend.", "does find"],
      ["We didn't win the cup, but we ___ (win) two matches.", "did win"],
      ["___ (help) yourself to some cake!", "do help"]
    ]},
    { type: 'choice', task: 'Выберите правильный вариант.', items: [
      ["She ___ the answer, but she is too shy to say it.", ["does know", "does knows", "do knows"]],
      ["I didn't see the film, but I ___ the book.", ["did read", "did readed", "do read"]],
      ["— Tom never helps at home. — That's not true! He ___ the dishes every day.", ["does wash", "does washes", "is wash"]],
      ["___ come to our party next week! (тепло приглашаем)", ["Do", "Does", "Did"]],
      ["— You aren't ready! — I ___ ready! Let's go.", ["am", "do be", "did be"]],
      ["I don't watch TV, but I ___ listen to the radio.", ["do", "does", "did"]]
    ]},
    { type: 'translate', task: 'Переведите на английский, усилив утверждение с помощью do, does или did.', items: [
      ["Мне правда нравится твоя новая прическа.", "I do like your new haircut.|I do like your new hairstyle.|I really do like your new haircut.|I really do like your new hairstyle.|I do like your new hair.|I really do like your new hair."],
      ["Она все-таки сдала экзамен.", "She did pass the exam.|She did pass the exam after all.|She did pass the exam in the end."],
      ["Она действительно много работает.", "She does work hard.|She does work a lot.|She really does work hard.|She really does work a lot."],
      ["Обязательно попробуйте этот торт!", "Do try this cake!|Do try the cake!"],
      ["Я не пью кофе, но чай я пью.", "I don't drink coffee, but I do drink tea."]
    ]},
    { type: 'listen', at: 2, task: 'Прослушайте предложение и соберите его из слов.', items: [
      ["I do like your idea, but we need more time.", "Мне правда нравится твоя идея, но нам нужно больше времени."],
      ["He did promise to call, but he forgot.", "Он ведь обещал позвонить, но забыл."],
      ["Do sit down and tell me about your trip.", "Садись же и расскажи мне о своей поездке."]
    ]}
  ]},

{ id: 'x-inversion', level: 'C1', title: 'Инверсия', sub: 'Never have I seen…',
  rule: `
<p>Если предложение начинается с отрицательного или ограничивающего слова — <i>never, rarely, hardly, not only</i>, — порядок слов меняется, как в вопросе: сначала идет <b>вспомогательный глагол</b>, потом <b>подлежащее</b>: <i>Seldom <b>have I</b> heard such music</i> — редко я слышал такую музыку. Так говорят, чтобы подчеркнуть мысль, и это звучит книжно.</p>
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
<p>В начале предложения <i>little</i> значит не «мало», а «совсем не»: <i>Little did they know</i> — они совсем не знали, даже не подозревали. Обычно так говорят, когда человек не догадывается о том, что случится потом. А <i>under no circumstances</i> (ни при каких обстоятельствах) выражает строгий запрет, его часто можно увидеть в инструкциях. Отрицание уже есть в самом выражении, поэтому <i>not</i> после него не ставят.</p>
${N("Если в предложении Present или Past Simple, для инверсии нужен вспомогательный <i>do / does / did</i>: <i>Rarely <b>do</b> we go out</i> — мы редко куда-то выходим. А в конструкциях <i>Only when…</i> и <i>Not until…</i> порядок слов меняется не сразу, а во <b>второй, главной</b> части: <i>Only when I got home <b>did I</b> realise…</i>")}`,
  /* перевод слов в упражнениях: по наведению или касанию (gloss.js); ключи — в нижнем регистре, как слово стоит в тексте */
  gloss: {
    'anyone': 'кто-нибудь; никому (в отрицании)', 'funny': 'смешной', 'password': 'пароль',
    'abroad': 'за границей', 'give': 'дать', 'grandparents': 'бабушка и дедушка', 'happened': 'случилось', 'heard': 'слышал (от hear)', 'letter': 'письмо', 'my': 'мой, моя, мое', 'read': 'читать; прочитал', 'story': 'история, рассказ', 'travel': 'путешествовать', 'what': 'что', 'your': 'твой, ваш',
    'house': 'дом', 'lesson': 'урок', 'i': 'я', 'she': 'она', 'it': 'это; он, она (о предмете)', 'we': 'мы',
    'is': 'есть, является (форма to be)', 'the': 'определенный артикль', 'in': 'в', 'that': 'тот, та, то; что (союз)',
    'a': 'неопределенный артикль', 'very': 'очень', 'clever': 'умный', 'kind': 'добрый',
    'door': 'дверь', 'only': 'только', 'not only': 'не только', 'see': 'увидеть', 'to': 'в, на (куда); частица перед глаголом', 'no': 'нет, никакой',
    'under': 'под', 'meeting': 'встреча', 'after': 'после', 'you': 'ты, вы', 'again': 'снова', 'how': 'как',
    'not': 'не', 'when': 'когда', 'young': 'молодой', 'but': 'но', 'cat': 'кошка', 'him': 'его, ему',
    'one': 'один', 'off': 'прочь (switch off — выключить)', 'went off': 'сработала (о сигнализации)', 'plane': 'самолет', 'began': 'начал (от begin)', 'out': 'наружу',
    'snow': 'снег', 'was': 'был (форма to be)', 'went': 'пошел, поехал (от go)', 'so': 'поэтому; так',
    'alarm': 'будильник; сигнализация', 'also': 'также', 'begun': 'начался (3-я форма begin)', 'circumstances': 'обстоятельства',
    'feel': 'чувствовать', 'fire': 'пожар; огонь', 'had': 'имел; вспомогательный глагол', 'hardly': 'едва, почти не', 'know': 'знать',
    'landed': 'приземлился', 'little': 'маленький; мало', 'never': 'никогда', 'opened': 'открыл', 'problem': 'проблема',
    'ran': 'бежал (от run)', 'rarely': 'редко', 'safe': 'безопасный', 'scarcely': 'едва', 'seldom': 'редко', 'serious': 'серьезный',
    'sooner': 'раньше', 'such': 'такой', 'talent': 'талант', 'until': 'до, пока не',
    'would': 'бы; вспомогательный глагол'
  },
  ex: [
    { type: 'gap', task: 'Впишите пропущенное слово.', items: [
      ["Never ___ I heard such a funny story.", "have"], ["No sooner had I opened the door ___ the cat ran out.", "than"],
      ["Hardly had the lesson begun ___ the fire alarm went off.", "when"], ["Not only ___ she clever, but she is also very kind.", "is"],
      ["Only when the plane landed ___ I feel safe.", "did"], ["Little ___ we know that we would never see him again.", "did"],
      ["Under no circumstances ___ you give your password to anyone.", "should|must|can|may"], ["Rarely ___ my grandparents travel abroad.", "do"]
    ]},
    { type: 'choice', task: 'Выберите правильный вариант.', items: [
      ["Not until she read the letter ___ what had happened.", ["did she understand", "she understood", "she did understand"]], ["Seldom ___ such talent in one so young.", ["have I seen", "I have seen", "I saw"]],
      ["Scarcely ___ the house when it began to snow.", ["had we left", "we had left", "did we leave"]], ["Only after the meeting ___ how serious the problem was.", ["did they understand", "they understood", "understood they"]]
    ]},
    { type: 'listen', at: 2, task: 'Прослушайте предложение и соберите его из слов.', items: [
      ["Never have I eaten such delicious pizza.", "Никогда я не ел такой вкусной пиццы."],
      ["Not only did she cook dinner, but she also washed the dishes.", "Она не только приготовила ужин, но еще и помыла посуду."],
      ["No sooner had the film started than the lights went out.", "Не успел начаться фильм, как погас свет."]
    ]}
  ]},

{ id: 'x-unreal-past', level: 'C1', title: 'Нереальное прошедшее', sub: "it's time · would rather · as if",
  rule: `
<p>После некоторых выражений прошедшее время говорит вовсе не о прошлом, а о том, чего на самом деле нет, или о том, чего хотелось бы. Например, <i>It's time we <b>went</b> home</i> — нам пора домой (сейчас, а не в прошлом).</p>
${T(["Выражение", "Форма", "Пример"], [
  ["<i>It's (high) time</i>", "<i>+ Past Simple</i>", "<i>It's high time you <b>found</b> a job.</i> — Тебе давно пора найти работу."],
  ["<i>would rather</i> (о себе)", "<i>+ V</i>", "<i>I'd rather <b>take</b> a taxi.</i> — Я бы лучше поехал на такси."],
  ["<i>would rather</i> (о другом, о настоящем)", "<i>+ Past Simple</i>", "<i>I'd rather you <b>didn't smoke</b> here.</i> — Я бы предпочел, чтобы вы здесь не курили."],
  ["<i>would rather</i> (о другом, о прошлом)", "<i>+ Past Perfect</i>", "<i>I'd rather you <b>had told</b> me.</i> — Лучше бы ты мне сказал."],
  ["<i>as if / as though</i>", "<i>+ Past (нереально)</i>", "<i>He talks as if he <b>knew</b> everything.</i> — Он говорит так, как будто все знает."]
])}
<h3>Как понимать эти выражения</h3>
<p><i>It's time</i> значит «пора», а со словом <i>high</i> — «давно пора», то есть с упреком: это уже надо было сделать. Если речь идет о самом себе или вообще, без указания лица, проще сказать <i>It's time to go</i> — пора идти; если же назван тот, кто должен действовать, после него идет Past Simple: <i>It's time <b>we went</b></i> — нам пора.</p>
<p><i>Would rather</i> (сокращенно <i>'d rather</i>) значит «лучше бы, предпочел бы». Если человек говорит о своем собственном желании, после <i>would rather</i> идет глагол без <i>to</i>, как в теме 13.1. Если он хочет, чтобы что-то сделал другой человек, этого человека называют, а глагол ставят в Past Simple, хотя речь о настоящем. А если жалеют о прошлом, о том, что уже не изменить, нужен Past Perfect. Это та же логика, что в предложениях с <i>I wish</i> (тема 11.5).</p>
<p><i>As if</i> и <i>as though</i> значат «как будто». Past после них показывает, что сравнение не соответствует действительности: в примере <i>He talks as if he knew everything</i> на самом деле он знает не все. В книжной речи после <i>as if</i> часто говорят <i>were</i> для всех лиц: <i>She behaves as if she <b>were</b> the boss</i> — она ведет себя так, будто она здесь начальник.</p>
<h3>Сослагательное после глаголов требования</h3>
<p>После глаголов <i>suggest, insist, recommend, demand</i> и выражений <i>it is essential that</i>, <i>it is vital that</i> глагол в придаточном с <i>that</i> стоит в начальной форме — без <i>-s</i>, даже с <i>he</i> и <i>she</i>. В британском английском так же часто говорят с <i>should</i>: <i>insisted that he <b>should stay</b></i>. Такую форму называют сослагательным наклонением: она показывает, что речь идет не о факте, а о том, что кто-то требует, советует или считает нужным. Это похоже на русское «чтобы»: «предложил, чтобы мы пошли», а не «предложил, что мы идем». Отрицание ставят прямо перед глаголом, без <i>do</i>: <i>He suggested that we <b>not go</b></i> — он предложил, чтобы мы не ходили.</p>
${E([
  ["The doctor insisted that he <b>stay</b> in bed.", "Врач настоял, чтобы он лежал."],
  ["It is essential that every student <b>attend</b>.", "Важно, чтобы присутствовал каждый."]
])}`,
  /* перевод слов в упражнениях: по наведению или касанию (gloss.js); ключи — в нижнем регистре, как слово стоит в тексте */
  gloss: {
    'behaves': 'ведет себя', 'vital': 'жизненно важный',
    'before': 'до, раньше', 'bike': 'велосипед', 'day': 'день', 'dinner': 'ужин', 'essay': 'сочинение', 'homework': 'домашнее задание', 'late': 'поздно', 'medicine': 'лекарство', 'my': 'мой, моя, мое', 'myself': 'сам, себя', 'place': 'место', 'road': 'дорога', 'she': 'она', 'so': 'поэтому; так', 'teacher': 'учитель', 'they': 'они', 'this': 'этот, эта, это', 'took': 'взял; занял (от take)', 'your': 'твой, ваш',
    'it is': 'это', "it's": 'это (= it is)', 'he': 'он', 'it': 'это; он, она (о предмете)',
    'is': 'есть, является (форма to be)', 'the': 'определенный артикль',
    'that': 'тот, та, то; что (союз)', 'every': 'каждый',
    'me': 'меня, мне', 'high': 'высокий', 'you': 'ты, вы',
    'time': 'время', 'as': 'как; в качестве', 'as if': 'как будто',
    "i'd rather": 'я бы предпочел', "i'd": 'я бы (= I would / I had)', 'if': 'если; ли',
    'insisted': 'настаивал', 'rather': 'довольно; скорее'
  },
  ex: [
    { type: 'gap', task: 'Поставьте глагол в нужную форму. Если в скобках несколько слов через косую черту, используйте в ответе их все — в нужной форме и порядке.', items: [
      ["It's high time they ___ (repair) this road.", "repaired"], ["I'd rather you ___ (not / call) me so late.", "did not call"],
      ["I'd rather ___ (cook) dinner myself.", "cook"], ["He behaves as if he ___ (own) the place.", "owned"],
      ["I'd rather you ___ (ask) me before you took my bike.", "had asked|'d asked"], ["The teacher insisted that she ___ (rewrite) the essay.", "rewrite|should rewrite"],
      ["It is vital that he ___ (take) this medicine every day.", "take|should take"], ["It's time you ___ (start) your homework.", "started"]
    ]},
    { type: 'translate', task: 'Переведите на английский.', items: [
      ["Тебе давно пора подстричься.", "It is high time you had your hair cut.|It is high time you got your hair cut.|It is high time you had a haircut.|It is high time you got a haircut.|It is about time you had your hair cut.|It is about time you got your hair cut.|It is time you had your hair cut."],
      ["Я бы предпочел, чтобы ты пришел завтра.", "I would rather you came tomorrow.|I would prefer you to come tomorrow.|I would prefer it if you came tomorrow."],
      ["Она разговаривает со мной так, будто я ребенок.", "She talks to me as if I were a child.|She talks to me as if I was a child.|She talks to me as though I were a child.|She talks to me as though I was a child.|She speaks to me as if I were a child.|She speaks to me as if I was a child."]
    ]},
    { type: 'listen', at: 2, task: 'Прослушайте предложение и соберите его из слов.', items: [
      ["It's high time the children went to bed.", "Детям давно пора спать."],
      ["I'd rather you didn't tell anyone about it.", "Я бы предпочел, чтобы ты никому об этом не рассказывал."],
      ["She spends money as if she were a millionaire.", "Она тратит деньги так, будто она миллионерша."]
    ]}
  ]},

{ id: 'x-cleft', level: 'C1', title: 'Расщепленные предложения', sub: 'It was Tom who… · What I need is…',
  rule: `
<p>Чтобы выделить какую-то часть предложения, в английском его «расщепляют» на две части. В русском для такого выделения обычно хватает интонации или слова «именно».</p>
${T(["Конструкция", "Пример", "Что выделяем"], [
  ["<i>It is / was … that / who …</i>", "<i><b>It was Tom who</b> broke the window.</i> — Это Том разбил окно.", "именно Том"],
  ["", "<i><b>It was in 2010 that</b> we met.</i> — Мы познакомились именно в 2010 году.", "именно в 2010-м"],
  ["<i>What … is / was …</i>", "<i><b>What I need is</b> a holiday.</i> — Что мне нужно, так это отпуск.", "то, что мне нужно"],
  ["<i>What … did was (to) V</i>", "<i><b>What he did was</b> (to) call the police.</i> — Он сделал вот что: позвонил в полицию.", "его действие"],
  ["<i>All … is …</i>", "<i><b>All I want is</b> a cup of tea.</i> — Все, чего я хочу, — это чашка чая.", "единственное, что"]
])}
<h3>Как строить такие предложения</h3>
<p>В конструкции <i>It is / was … that / who …</i> то, что хотят выделить, ставят между <i>it was</i> и <i>that</i>, а остальное предложение идет после. Если выделяют человека, можно сказать <i>who</i> или <i>that</i>; если что-то другое — время, место, предмет, — только <i>that</i>: <i>It was <b>in Paris</b> that they met</i> — именно в Париже они познакомились. Время глагола <i>be</i> зависит от того, о каком времени речь: о прошлом — <i>it was</i>, о настоящем — <i>it is</i>.</p>
<p>В конструкции с <i>What…</i> сначала говорят, о чем пойдет речь, а самое важное оставляют на конец, после <i>is</i> или <i>was</i>. Когда выделяют целое действие, используют <i>What … did was</i>, а затем называют действие начальной формой глагола; частицу <i>to</i> перед ним можно поставить, а можно опустить. Вариант с <i>All … is</i> устроен так же, но значит «единственное, что; всего лишь»: в <i>All I want is a cup of tea</i> человек хочет только чаю и ничего больше.</p>
${N("В конструкции с <i>What…</i> глагол <i>is / was</i> обычно стоит в единственном числе, даже если дальше идет множественное: <i>What we need <b>is</b> more people</i> — нам нужно больше людей.")}`,
  /* перевод слов в упражнениях: по наведению или касанию (gloss.js); ключи — в нижнем регистре, как слово стоит в тексте */
  gloss: {
    "night's": "ночной (a good night's sleep — хороший сон)",
    'at': 'в (о месте)', 'bag': 'сумка', 'called': 'позвонил (от call)', 'good': 'хороший', 'little': 'маленький; мало', 'lost': 'потерял; потерянный', 'more': 'больше, более', 'open': 'открыть', 'she': 'она', 'sleep': 'сон', 'station': 'вокзал, станция', 'time': 'время', 'you': 'ты, вы',
    'i': 'я', 'he': 'он', 'it': 'это; он, она (о предмете)', 'we': 'мы', 'my': 'мой, моя, мое', 'is': 'есть, является (форма to be)',
    'the': 'определенный артикль', 'what': 'что, какой', 'a': 'неопределенный артикль', 'window': 'окно',
    'mother': 'мама', 'to': 'в, на (куда); частица перед глаголом', 'why': 'почему',
    'me': 'меня, мне', 'need': 'нуждаться', 'not': 'не',
    'all': 'весь, все', 'did': 'вспомогательный глагол прошедшего времени', 'his': 'его',
    "don't": 'не (= do not)', 'understand': 'понимать', 'left': 'ушел (от leave); оставшийся; левый',
    'was': 'был (форма to be)', 'cook': 'готовить',
    'reaction': 'реакция', 'surprised': 'удивленный', 'taught': 'учил (от teach)'
  },
  ex: [
    { type: 'gap', task: 'Впишите пропущенное слово.', items: [
      ["It was Kate ___ called you, not me.", "who|that"], ["___ I need is a good night's sleep.", "what|all"],
      ["It was at the station ___ I lost my bag.", "that"], ["All we need ___ a little more time.", "is"],
      ["What she did ___ to open the window.", "was"], ["It was my mother ___ taught me to cook.", "who|that"],
      ["What I don't understand ___ why he left.", "is"], ["What surprised me ___ his reaction.", "was"]
    ]},
    { type: 'translate', task: 'Переведите на английский.', items: [
      ["Именно Анна нашла мой телефон.", "It was Anna who found my phone.|It was Anna that found my phone."],
      ["Что мне нравится, так это его улыбка.", "What I like is his smile."],
      ["Все, что тебе нужно, — это немного отдохнуть.", "All you need is some rest.|All you need is a little rest.|All you need is a rest."],
      ["Именно в Лондоне я выучил английский.", "It was in London that I learnt English.|It was in London that I learned English."]
    ]},
    { type: 'listen', at: 2, task: 'Прослушайте предложение и соберите его из слов.', items: [
      ["It was my sister who told me the news.", "Это сестра рассказала мне новость."],
      ["What we need now is a good map.", "Что нам сейчас нужно, так это хорошая карта."],
      ["It was in Rome that I first tried real pizza.", "Именно в Риме я впервые попробовал настоящую пиццу."]
    ]}
  ]},

{ id: 'x-inverted-conditionals', level: 'C2', title: 'Условия без if', sub: 'Had I known… · Should you need…',
  rule: `
<p>В формальной речи условие можно выразить без <i>if</i>: <i>if</i> убирают, а вспомогательный глагол ставят в самое начало.</p>
${T(["Обычная форма", "С инверсией"], [
  ["<i>If I had known…</i>", "<i><b>Had I known</b>, I would have helped.</i> — Если бы я знал, я бы помог."],
  ["<i>If you should need help…</i>", "<i><b>Should you need</b> any help, call me.</i> — Если вдруг понадобится помощь, звоните мне."],
  ["<i>If the government were to raise taxes…</i>", "<i><b>Were the government to</b> raise taxes, there would be protests.</i> — Если бы правительство повысило налоги, начались бы протесты."],
  ["<i>If I were in your place…</i>", "<i><b>Were I</b> in your place, I would accept.</i> — Будь я на вашем месте, я бы согласился."],
  ["<i>If it were not for…</i>", "<i><b>Were it not for</b> the rain, we could play outside.</i> — Если бы не дождь, мы могли бы поиграть на улице."],
  ["<i>If it had not been for…</i>", "<i><b>Had it not been for</b> your support, I would have given up.</i> — Если бы не твоя поддержка, я бы сдался."]
])}
<h3>Что значат should, were to и were it not for</h3>
<p>Вариант с <i>had</i> — это обычное условное предложение 3 типа, только без <i>if</i>. Так же просто устроен вариант с <i>were</i> (<i>Were I in your place</i>): это условное 2 типа без <i>if</i>. А вот три других оборота стоит разобрать отдельно. <i>If you should…</i> (если вдруг…) говорит о том, что событие возможно, но маловероятно; его часто используют в вежливых предложениях помощи и в официальных письмах. <i>If … were to…</i> описывает воображаемую ситуацию в будущем, обычно маловероятную: «если бы вдруг правительство решило…». <i>If it were not for…</i> и <i>if it had not been for…</i> значат «если бы не…»: первый говорит о настоящем, второй — о прошлом. Во всех случаях инверсия делает фразу более официальной, а смысл не меняется.</p>
<h3>Другие слова для условия</h3>
<p>Условие можно ввести и без <i>if</i>, и без инверсии. <i>But for</i> — это короткая замена <i>if it were not for</i> и <i>if it had not been for</i>, то есть тоже «если бы не», и после него идет существительное. <i>As long as</i> и <i>provided (that)</i> значат «при условии, что», то есть ставят обязательное условие. <i>Supposing</i> значит «предположим, что; а что если» и вводит воображаемую ситуацию.</p>
${E([
  ["<b>But for</b> his help, we would have failed.", "Если бы не его помощь, мы бы провалились."],
  ["You can borrow it <b>as long as</b> / <b>provided</b> you're careful.", "Можешь взять его при условии, что будешь аккуратен."],
  ["<b>Supposing</b> you won, what would you do?", "А что, если бы ты выиграл? Что бы ты сделал?"]
])}
${N("В таких предложениях отрицание не сокращают: правильно <i>Had it <b>not</b> been for…</i>, а не <i>Hadn't it been for…</i>")}`,
  /* перевод слов в упражнениях: по наведению или касанию (gloss.js); ключи — в нижнем регистре, как слово стоит в тексте */
  gloss: {
    'sign': 'подписать', 'tidy': 'убрать',
    'here': 'здесь, сюда', 'keep': 'держать; продолжать', 'room': 'комната', 'seen': 'видел (3-я форма see)', 'stay': 'оставаться', 'stopped': 'остановился; прекратился',
    'i': 'я', 'she': 'она', 'it': 'это; он, она (о предмете)', 'we': 'мы', 'my': 'мой, моя, мое', 'have': 'иметь; вспомогательный глагол',
    'the': 'определенный артикль', 'what': 'что, какой', 'please': 'пожалуйста', 'on': 'на; в (о днях)', 'family': 'семья',
    'buy': 'купить', 'for': 'для; в течение', 'to': 'в, на (куда); частица перед глаголом', 'any': 'какие-нибудь', 'your': 'твой, ваш',
    'me': 'меня, мне', 'you': 'ты, вы', 'doctor': 'врач', 'not': 'не', 'but': 'но', 'car': 'машина', 'time': 'время', 'train': 'поезд',
    'his': 'его', 'month': 'месяц', 'next': 'следующий', 'plane': 'самолет', 'us': 'нас, нам', 'arrived': 'приехал (от arrive)',
    'back': 'назад, обратно', 'lend': 'одолжить', 'been': 'был (3-я форма be)', 'as': 'как; в качестве', 'about': 'о; около',
    'borrow': 'взять взаймы', 'can': 'мочь, уметь', 'carefully': 'внимательно, осторожно', 'caught': 'поймал (от catch)',
    'change': 'менять; перемена', 'contact': 'связаться', "couldn't": 'не мог (= could not)', 'died': 'умер', 'drive': 'водить машину',
    'earlier': 'раньше', 'had': 'имел; вспомогательный глагол', 'harder': 'усерднее', 'helped': 'помог', "i'll": 'я (= I will)',
    'know': 'знать', 'known': 'известный (3-я форма know)', 'landed': 'приземлился', 'let': 'позволять', 'lottery': 'лотерея',
    'mind': 'возражать', 'change your mind': 'передумать', 'money': 'деньги', 'passed': 'сдал; передал', 'pay': 'платить', 'problem': 'проблема', 'questions': 'вопросы',
    'rent': 'снимать (жилье)', 'salary': 'зарплата', 'storm': 'буря', 'traffic': 'движение (на дороге)', 'win': 'выиграть',
    'would': 'бы; вспомогательный глагол'
  },
  ex: [
    { type: 'gap', task: 'Впишите пропущенное слово.', items: [
      ["___ I seen the sign, I would have stopped.", "had"], ["___ you have any questions, please contact us.", "should"],
      ["___ it not been for the doctor, she would have died.", "had"], ["___ it not for his salary, the family couldn't pay the rent.", "were"],
      ["___ you to win the lottery, what would you buy?", "were"], ["But ___ the traffic, we would have arrived on time.", "for"],
      ["Had she ___ (study) harder, she would have passed.", "studied"], ["You can stay here as ___ as you keep the room tidy.", "long"]
    ]},
    { type: 'choice', task: 'Выберите правильный вариант.', items: [
      ["___ you change your mind, let me know.", ["Should", "Would", "Had"]], ["Had I ___ earlier, I would have caught the train.", ["left", "leave", "been left"]],
      ["___ for the storm, the plane would have landed on time.", ["Had it not been", "Were it not", "Should it not"]], ["I'll lend you the money ___ you pay it back next month.", ["provided", "unless", "otherwise"]]
    ]},
    { type: 'listen', at: 2, task: 'Прослушайте предложение и соберите его из слов.', items: [
      ["Had I known about the traffic, I would have left earlier.", "Знай я о пробках, выехал бы раньше."],
      ["Should you see Tom, please say hello from me.", "Если вдруг увидите Тома, передайте ему от меня привет."],
      ["Were I a little younger, I would learn to dance.", "Будь я немного моложе, я бы научился танцевать."]
    ]}
  ]},

{ id: 'x-ellipsis', level: 'C2', title: 'Эллипсис и замещение', sub: 'I hope not · so can I · the red one',
  rule: `
<p>В живой английской речи не любят повторяться. Вместо уже названных слов используют короткие заместители (<i>one, so, do</i>) или просто опускают лишнее: <i>— Is she coming? — I think <b>so</b></i> — думаю, да.</p>
${T(["Заместитель", "Пример", "Значение"], [
  ["<i>so / not</i>", "<i>I think <b>so</b>. I hope <b>not</b>. I'm afraid <b>not</b>.</i> — Думаю, да. Надеюсь, что нет. Боюсь, что нет.", "заменяет целое предложение"],
  ["<i>one / ones</i>", "<i>Can I see the red <b>one</b>? Bigger <b>ones</b>?</i> — Можно посмотреть красный? А побольше есть?", "заменяет исчисляемое существительное"],
  ["вспомогательный глагол", "<i>She said she'd call, but she <b>didn't</b>.</i> — Она сказала, что позвонит, но не позвонила.", "заменяет глагольную группу"],
  ["<i>so / neither + aux + подлежащее</i>", "<i>He can swim, and <b>so can I</b>.</i> — Он умеет плавать, и я тоже.", "«я тоже», как в теме 5.5"],
  ["<i>to</i>", "<i>You don't have to if you don't want <b>to</b>.</i> — Не обязательно, если не хочешь.", "заменяет инфинитив"]
])}
<h3>Как работают заместители</h3>
<p>Слова <i>so</i> и <i>not</i> заменяют целое предложение после глаголов мнения и чувства: <i>think, hope, suppose, expect, be afraid</i>. Например, на вопрос <i>Will it rain?</i> отвечают коротко, не повторяя <i>it will rain</i>: <i>I'm afraid so</i> — боюсь, что да; <i>I hope not</i> — надеюсь, что нет.</p>
<p>Во множественном числе вместо <i>one</i> говорят <i>ones</i>. С неисчисляемыми существительными (<i>water, money</i>) <i>one</i> и <i>ones</i> не используют.</p>
${N("После <i>think</i> отрицательный ответ строят не так, как после <i>hope</i> (<i>I hope not</i>): говорят <i>I <b>don't think so</b></i> — думаю, что нет.")}`,
  /* перевод слов в упражнениях: по наведению или касанию (gloss.js); ключи — в нижнем регистре, как слово стоит в тексте */
  gloss: {
    'difficult': 'трудный', 'exam': 'экзамен', 'said': 'сказал (от say)', 'would': 'бы; вспомогательный глагол',
    'be': 'быть', 'on': 'на', 'open': 'открыт, открытый', 'shop': 'магазин', 'sunday': 'воскресенье',
    'sister': 'сестра', 'pen': 'ручка', 'i': 'я', 'he': 'он', 'she': 'она', 'it': 'это; он, она (о предмете)', 'my': 'мой, моя, мое',
    'are': 'есть (форма to be)', 'have': 'иметь; есть (о еде)', 'the': 'определенный артикль',
    'small': 'маленький', 'door': 'дверь', 'and': 'и', 'to': 'в, на (куда); частица перед глаголом', 'any': 'какие-нибудь',
    'me': 'меня, мне', 'want': 'хотеть', 'you': 'ты, вы', 'hungry': 'голодный', 'not': 'не', 'tomorrow': 'завтра', 'but': 'но',
    'jazz': 'джаз', 'did': 'вспомогательный глагол прошедшего времени', 'his': 'его', 'work': 'работа; работать', "i'm": 'я (= I am)',
    'think': 'думать', 'call': 'звонить', 'rain': 'дождь', 'help': 'помогать', 'lend': 'одолжить', 'love': 'любить', 'play': 'играть',
    'got': 'have got — иметь, есть', 'so': 'поэтому; так', 'too': 'тоже; слишком', 'will': 'вспомогательный глагол будущего времени',
    'afraid': "боюсь (I'm afraid — к сожалению)", 'bigger': 'больше', 'can': 'мочь, уметь', "doesn't": 'не (= does not)',
    'hope': 'надеяться', "i'll": 'я (= I will)', 'if': 'если; ли', 'lock': 'запирать', 'neither': 'ни один; тоже не', 'piano': 'пианино',
    'promised': 'пообещал', 'shoes': 'туфли, обувь', 'sorry': 'извините; жаль', 'these': 'эти'
  },
  ex: [
    { type: 'gap', task: 'Впишите одно слово.', items: [
      ["— Will the exam be difficult? — I hope ___.", "not"], ["— Will the shop be open on Sunday? — I think ___.", "so"],
      ["My pen doesn't work. Can you lend me ___?", "one|yours"], ["He can play the piano, and so ___ his sister.", "can"],
      ["— I'm not hungry. — Neither ___ I.", "am"], ["I'll help you if you want me ___.", "to"],
      ["These shoes are too small. Have you got any bigger ___?", "ones"], ["— Did you lock the door? — I'm afraid ___. Sorry!", "not"],
      ["He said he would help, but he ___ (не помог).", "did not"], ["— I love jazz. — So ___ I.", "do"]
    ]},
    { type: 'translate', task: 'Переведите на английский.', items: [
      ["— Ты опоздаешь? — Боюсь, что да.", "Will you be late? — I'm afraid so.|Are you going to be late? — I'm afraid so."],
      ["— Я не люблю холод. — Я тоже.", "I don't like the cold. — Neither do I.|I don't like the cold. — Nor do I.|I don't like the cold. — Me neither.|I don't like cold weather. — Neither do I.|I don't like cold weather. — Nor do I.|I don't like cold weather. — Me neither."],
      ["Мне не нравится эта сумка. Покажите красную.", "I don't like this bag. Show me the red one.|I don't like this bag. Can I see the red one?|I don't like this bag. Could you show me the red one?|I don't like this bag. Can you show me the red one?"],
      ["Я не хотел идти, но пришлось.", "I didn't want to go, but I had to."]
    ]},
    { type: 'listen', at: 2, task: 'Прослушайте предложение и соберите его из слов.', items: [
      ["Is there any milk left? I'm afraid not.", "Молоко еще осталось? Боюсь, что нет."],
      ["My dad doesn't eat meat, and neither does my mum.", "Папа не ест мясо, и мама тоже."],
      ["I don't like the red dress, but I like the blue one.", "Мне не нравится красное платье, а синее нравится."]
    ]}
  ]}
]});

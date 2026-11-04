BOOK.push({ n: 14, id: 'gerund', title: 'Герундий',
intro: 'Сначала разберите, после каких глаголов и предлогов нужен герундий, затем — чем он отличается от инфинитива.',
topics: [

{ id: 'ger-use', level: 'B1', title: 'Герундий после глаголов и предлогов', sub: 'enjoy reading, good at drawing',
  rule: `
<p>Герундий — это форма глагола на <i>-ing</i>, которая называет действие как предмет. С ним можно обращаться как с существительным: <i><b>Swimming</b> is good for your health</i> — плавание полезно для здоровья. Точного аналога в русском нет, поэтому герундий переводят по-разному: существительным, инфинитивом или деепричастием.</p>
${T(["Где", "Слова", "Пример"], [
  ["после глаголов", "<i>enjoy, finish, mind, avoid, suggest, keep, miss, practise, deny, imagine, consider, give up, put off, can't stand, can't help</i>", "<i>I enjoy <b>walking</b>. Would you mind <b>opening</b> the window?</i> — Я люблю гулять. Не могли бы вы открыть окно?"],
  ["после предлогов", "<i>in, at, of, for, about, without, before, after, instead of, by</i>", "<i>Thank you for <b>coming</b>. He left without <b>saying</b> goodbye.</i> — Спасибо, что пришли. Он ушел, не попрощавшись."],
  ["после сочетания «прилагательное + предлог»", "<i>good at, interested in, afraid of, fond of, tired of, proud of</i>", "<i>She is good at <b>drawing</b>.</i> — Она хорошо рисует."],
  ["после выражений", "<i>it's no use, it's worth, there's no point in, look forward to, be used to</i>", "<i>It's worth <b>seeing</b>. I look forward to <b>hearing</b> from you.</i> — Это стоит посмотреть. Жду вашего ответа."],
  ["как подлежащее", "—", "<i><b>Smoking</b> is bad for you.</i> — Курить вредно."]
])}
<h3>Устойчивые выражения с герундием</h3>
<p>Некоторые выражения из таблицы нельзя перевести слово в слово, поэтому их лучше запомнить целиком вместе со значением. Во всех этих выражениях действие называется как предмет, поэтому нужен именно герундий.</p>
${E([
  ["I <b>can't help laughing</b> when I see him.", "Не могу не смеяться, когда вижу его."],
  ["She <b>can't stand waiting</b> in queues.", "Она терпеть не может стоять в очередях."],
  ["<b>It's no use crying</b> — it won't help.", "Бесполезно плакать: это не поможет."],
  ["<b>There's no point in arguing</b> with him.", "Нет смысла спорить с ним."]
])}
${N("В выражениях <i>look forward to</i> и <i>object to</i> слово <i>to</i> — это предлог, а не частица инфинитива. После предлога глагол ставится в форму на <i>-ing</i>: <i>I look forward to <b>seeing</b> you</i>, а не <i>to see you</i>.")}
<h3>Кто выполняет действие</h3>
<p>Бывает, что действие герундия выполняет не подлежащее, а кто-то другой. Тогда этого человека называют перед герундием — притяжательным местоимением или существительным с <i>'s</i>: <i>I don't mind <b>his</b> smoking</i> — я не против того, что он курит. В разговорной речи говорят проще: <i>I don't mind <b>him</b> smoking</i> — это тоже правильно.</p>
${E([
  ["She was angry about <b>his forgetting</b> her birthday. = She was angry about <b>him forgetting</b> her birthday.", "Она сердилась, что он забыл о ее дне рождения."],
  ["I insist on <b>your going</b> there.", "Я настаиваю, чтобы ты пошел туда."],
  ["Excuse <b>my interrupting</b> you.", "Простите, что перебиваю."],
  ["We heard of <b>Ann's winning</b> the prize.", "Мы слышали о том, что Анна получила приз."]
])}`,
  /* перевод слов в упражнениях: по наведению или касанию (gloss.js); ключи — в нижнем регистре, как слово стоит в тексте */
  gloss: {
    'being': 'быть (форма -ing)', 'forgive': 'простить', 'picnic': 'пикник', 'using': 'использование',
    'an': 'неопределенный артикль', 'computer': 'компьютер', 'parents': 'родители', 'park': 'парк', 'please': 'пожалуйста', 'umbrella': 'зонт', 'your': 'твой, ваш',
    'good': 'хороший', 'film': 'фильм', "it's": 'это (= it is)', 'i': 'я', 'she': 'она', 'we': 'мы', 'my': 'мой, моя, мое',
    'is': 'есть, является (форма to be)', 'have': 'иметь; вспомогательный глагол', 'the': 'определенный артикль',
    'at': 'в (о времени); у, на (о месте)', 'in': 'в', 'a': 'неопределенный артикль', 'very': 'очень', 'window': 'окно',
    'this': 'этот, эта, это', 'on': 'на; в (о днях)', 'of': 'предлог родительного падежа', 'door': 'дверь', 'child': 'ребенок',
    'year': 'год', 'for': 'для; в течение', 'her': 'ее, ей', 'mother': 'мама', 'to': 'в, на (куда); частица перед глаголом',
    'no': 'нет, никакой', 'yesterday': 'вчера', 'after': 'после', 'home': 'дом; домой', 'me': 'меня, мне',
    'do': 'делать; вспомогательный глагол', 'you': 'ты, вы', 'well': 'хорошо', 'tired': 'уставший', 'at home': 'дома', 'last': 'прошлый',
    'late': 'поздно', 'were': 'были (форма to be)', 'when': 'когда', 'dinner': 'ужин', 'up': 'вверх', 'all': 'весь, все',
    'happy': 'счастливый', "don't": 'не (= do not)', "i'm": 'я (= I am)', 'dad': 'папа', 'doing': 'делаешь (от do)',
    'help': 'помогать', 'song': 'песня', 'night': 'ночь', 'out': 'наружу', 'going out': 'уходить из дома', 'went out': 'вышла',
    'saw': 'увидел (от see)', 'was': 'был (форма to be)', 'went': 'пошел, поехал (от go)', 'finished': 'закончил (от finish)',
    'abroad': 'за границей', 'spanish': 'испанский', 'early': 'рано', 'use': 'использовать', 'last year': 'в прошлом году',
    'so': 'поэтому; так', 'going': 'идет (от go)', 'sea': 'море', 'exam': 'экзамен', 'without': 'без', 'as': 'как; в качестве',
    'instead of': 'вместо', 'about': 'о; около', 'afraid': 'боится', 'against': 'против', 'alone': 'один, в одиночестве',
    "can't": 'не могу (= cannot)', "can't help": 'не могу удержаться', 'coming': 'приходит, придет', 'detective': 'детектив', 'enjoyed': 'понравилось', 'essay': 'сочинение',
    'forward': 'вперед', 'looking forward to': 'с нетерпением жду', 'gave': 'дал (от give)', 'gave up': 'бросила', 'hear': 'слышать',
    'imagine': 'представлять', 'insisted': 'настаивал', 'instead': 'вместо этого', 'interested': 'заинтересован',
    "isn't": 'не (= is not)', 'keep': 'держать; продолжать', 'living': 'живет', 'looking': 'смотрит; ищет',
    'mind': 'возражать', 'more': 'больше, более', 'much': 'много', 'opening': 'открывать', 'passing': 'проходя мимо',
    'pleasant': 'приятный', 'pool': 'бассейн', 'should': 'следует, стоит', 'staying': 'остаться (от stay)',
    'stories': 'истории', 'suggested': 'предложил', 'surprised': 'удивленный', 'than': 'чем', 'things': 'вещи', 'walk': 'гулять; прогулка',
    "we're": 'мы (= we are)', 'worth': 'стоит (it is worth)', 'would': 'бы; вспомогательный глагол', "you're": 'ты, вы (= you are)'
  },
  ex: [
    { type: 'gap', task: 'Поставьте глагол в форму герундия.', items: [
      ["When I was a child, I enjoyed ___ (read) detective stories.", "reading"], ["Would you mind ___ (close) the door?", "closing"],
      ["My dad is very good at ___ (fix) things.", "fixing"], ["I'm interested in ___ (learn) Spanish.", "learning"],
      ["She went out without ___ (take) an umbrella.", "taking"], ["I'm looking forward to ___ (meet) your parents.", "meeting"],
      ["Have you finished ___ (write) the essay?", "writing"], ["___ (swim) in the sea is much more pleasant than in a pool.", "swimming"],
      ["She gave up ___ (smoke) last year.", "smoking"], ["It's no use ___ (call) her — she isn't at home.", "calling"],
      ["The film we saw yesterday is worth ___ (watch).", "watching"], ["I'm tired of ___ (wait).", "waiting"]
    ]},
    { type: 'choice', task: 'Выберите правильный вариант.', items: [
      ["She suggested ___ a picnic in the park.", ["having", "to have", "have"]], ["I can't help ___ when I hear this song.", ["smiling", "to smile", "smile"]],
      ["As a child, she was afraid of ___ alone at night.", ["being", "to be", "be"]], ["After ___ dinner, we went for a walk.", ["having", "to have", "have"]],
      ["Keep ___! You're doing well.", ["trying", "to try", "try"]], ["Instead of ___, you should help me!", ["complaining", "to complain", "complain"]]
    ]},
    { type: 'translate', task: 'Переведите на английский.', items: [
      ["Я не против того, чтобы помочь тебе.", "I don't mind helping you."],
      ["Перед сном я всегда читаю.", "Before going to bed, I always read.|I always read before going to bed.|I always read before I go to bed.|Before I go to bed, I always read.|I always read before bed."],
      ["Он перешел дорогу, не посмотрев по сторонам.", "He crossed the road without looking.|He crossed the road without looking around.|He crossed the street without looking.|He crossed the road without looking both ways.|He crossed the road without looking left and right."],
      ["Этот музей точно стоит посетить, если будешь в Лондоне.", "This museum is definitely worth visiting if you are in London.|This museum is really worth visiting if you are in London.|If you are in London, this museum is definitely worth visiting.|This museum is definitely worth visiting if you go to London.|This museum is definitely worth visiting if you visit London.|If you are in London, this museum is really worth visiting.|This museum is definitely worth a visit if you are in London.|This museum is really worth visiting if you go to London.|This museum is definitely worth visiting if you are ever in London."],
      ["Я с нетерпением жду поездки в Лондон.", "I am looking forward to going to London.|I look forward to going to London.|I am looking forward to my trip to London.|I look forward to my trip to London."]
    ]},
    { type: 'gap', task: 'Впишите местоимение (притяжательное или объектное) или существительное перед герундием.', items: [
      ["I don't mind ___ (he) using my computer.", "his|him"],
      ["She insisted on ___ (I) staying for dinner.", "my|me"],
      ["Please forgive ___ (I) being so late.", "my|me"],
      ["Do you mind ___ (we) opening the window?", "our|us"],
      ["We were surprised at ___ (Tom) coming so early.", "Tom's|Tom"],
      ["Mother was against ___ (they) going out so late.", "their|them"],
      ["We're all happy about ___ (you) passing the exam.", "your|you"],
      ["I can't imagine ___ (my sister) living abroad.", "my sister's|my sister"]
    ]},
    { type: 'listen', at: 2, task: 'Прослушайте предложение и соберите его из слов.', items: [
      ["My little sister has always been afraid of swimming in deep water.", "Моя младшая сестра всегда боялась плавать на глубине."],
      ["Would you mind turning the music down? It's too loud.", "Ты не мог бы сделать музыку потише? Слишком громко."],
      ["Thank you for helping me with my homework.", "Спасибо, что помог мне с домашним заданием."]
    ]}
  ]},

{ id: 'ger-vs-inf', level: 'B2', title: 'Герундий или инфинитив', sub: 'stop smoking / stop to smoke',
  rule: `
<p>Одни глаголы требуют после себя герундий (<i>enjoy reading</i>), другие — инфинитив (<i>decide to go</i>), а после третьих возможны оба варианта. Причем у некоторых из них смысл зависит от того, какая форма идет после глагола. Такие глаголы лучше запоминать сразу вместе с нужной формой.</p>
${T(["Только -ing", "Только to V", "Оба, смысл тот же"], [
  ["<i>enjoy, finish, mind…</i> (список — в теме 14.1)", "<i>want, decide, hope…</i> (список — в теме 13.1), а также <i>afford</i>", "<i>begin, start, continue, like, love, hate, prefer</i>"]
])}
<h3>Меняется смысл</h3>
${T(["Глагол", "+ -ing", "+ to V"], [
  ["<i>stop</i>", "<i>stop <b>smoking</b></i> — бросить курить", "<i>stop <b>to smoke</b></i> — остановиться, чтобы покурить"],
  ["<i>remember</i>", "<i>remember <b>locking</b></i> — помнить, что запер", "<i>remember <b>to lock</b></i> — не забыть запереть"],
  ["<i>forget</i>", "<i>forget <b>meeting</b> her</i> — забыть, что встречал", "<i>forget <b>to meet</b> her</i> — забыть встретить"],
  ["<i>try</i>", "<i>try <b>opening</b> the window</i> — попробовать (как способ)", "<i>try <b>to open</b> it</i> — пытаться (с усилием, часто неудачно)"],
  ["<i>regret</i>", "<i>regret <b>saying</b></i> — жалеть, что сказал", "<i>regret <b>to tell</b> you</i> — с сожалением сообщить"]
])}
<p>В парах с <i>stop, remember, forget</i> и <i>regret</i> есть общая логика (у <i>try</i> разница своя, она показана в таблице). Герундий обычно указывает на действие, которое уже было или уже идет: помню то, что сделал; жалею о том, что сказал; бросаю то, чем занимался. А инфинитив с <i>to</i> (в таблице он обозначен как <i>to V</i>) смотрит вперед, на действие, которое только предстоит сделать: не забыть сделать, остановиться, чтобы сделать. Так проще запомнить, какой смысл у какой формы.</p>
${E([
  ["He <b>stopped smoking</b> last year.", "Он бросил курить в прошлом году."],
  ["He <b>stopped to smoke</b> a cigarette.", "Он остановился, чтобы выкурить сигарету."],
  ["I <b>remember locking</b> the door.", "Я помню, что запер дверь. (это уже было)"],
  ["<b>Remember to lock</b> the door!", "Не забудь запереть дверь! (это еще предстоит)"],
  ["It's hot. <b>Try opening</b> the window.", "Жарко. Попробуй открыть окно. (может, станет легче)"],
  ["I <b>tried to open</b> the window, but it was stuck.", "Я пытался открыть окно, но его заклинило."]
])}
${N("После <i>would like</i>, <i>would love</i> и <i>would prefer</i> нужен только инфинитив: <i>I'd like <b>to go</b></i>. А после простого <i>like</i>, без <i>would</i>, можно и так, и так: <i>I like reading</i> и <i>I like to read</i>.")}`,
  /* перевод слов в упражнениях: по наведению или касанию (gloss.js); ключи — в нижнем регистре, как слово стоит в тексте */
  gloss: {
    'away': 'прочь', 'by': 'на (о транспорте)', 'grandad': 'дедушка', "i'm": 'я (= I am)', 'plants': 'растения', 'train': 'поезд', 'was': 'был (форма to be)', 'while': 'пока, в то время как', 'with': 'с', 'zoo': 'зоопарк',
    'sleeps': 'спит',
    'coffee': 'кофе', 'dad': 'папа', 'my': 'мой, моя, мое',
    'old': 'старый', 'has': 'имеет; вспомогательный глагол', 'i': 'я', 'he': 'он', 'she': 'она', 'we': 'мы', 'they': 'они',
    'the': 'определенный артикль', 'at': 'в (о времени); у, на (о месте)', 'in': 'в', 'that': 'тот, та, то; что (союз)',
    'a': 'неопределенный артикль', 'new': 'новый', 'please': 'пожалуйста', 'first': 'первый', 'of': 'предлог родительного падежа',
    'door': 'дверь', 'and': 'и', 'for': 'для; в течение', 'to': 'в, на (куда); частица перед глаголом',
    'some': 'немного, несколько', 'milk': 'молоко', 'your': 'твой, ваш', 'yesterday': 'вчера', 'now': 'сейчас', 'me': 'меня, мне',
    'you': 'ты, вы', 'like': 'нравиться, любить', 'party': 'вечеринка', 'when': 'когда', 'years': 'годы, лет',
    'car': 'машина', 'time': 'время', 'ago': 'назад', 'him': 'его, ему', 'box': 'коробка', "don't": 'не (= do not)', 'forget': 'забывать',
    'decided': 'решили (от decide)', 'rain': 'дождь', 'taxi': 'такси', 'went out': 'вышли', 'out': 'наружу',
    'went': 'пошел, поехал (от go)', 'finished': 'закончил (от finish)', 'soon': 'скоро', 'been': 'был (3-я форма be)',
    'stopped': 'остановился; прекратился', 'italy': 'Италия', 'six': 'шесть', 'afford': 'позволить себе',
    'agreed': 'согласился', 'application': 'заявление', 'avoided': 'избегал', 'better': 'лучше', "can't": 'не могут (= cannot)',
    'enjoy': 'наслаждаться, нравиться', 'hope': 'надеяться', "i'd": 'я бы (= I would / I had)', "i'd like": 'я бы хотел(а)',
    "i'll": 'я (= I will)', 'keeps': 'продолжает', 'lake': 'озеро', 'leave': 'уезжать, уходить; оставлять', 'little': 'маленький; мало',
    'managed': 'удалось', 'mind': 'возражать', 'much': 'много', 'never': 'никогда', 'ocean': 'океан', 'photos': 'фотографии',
    'promised': 'пообещал', 'question': 'вопрос', 'quieter': 'тише', 'refused': 'отказался', 'regret': 'сожалеть', 'rejected': 'отклонили',
    'remember': 'помнить', 'same': 'тот же самый', 'suggest': 'предлагать', 'their': 'их', 'would': 'бы; вспомогательный глагол'
  },
  ex: [
    { type: 'choice', task: 'Выберите правильную форму.', items: [
      ["I enjoy ___ in the rain.", ["walking", "to walk"]], ["They decided ___ their old car.", ["to sell", "selling"]],
      ["Would you mind ___ a little quieter?", ["being", "to be"]], ["He promised ___ me.", ["to help", "helping"]],
      ["My dad stopped ___ coffee, and now he sleeps much better.", ["drinking", "to drink"]], ["Don't forget ___ the plants while I'm away.", ["to water", "watering"]],
      ["I remember ___ to the zoo with my grandad when I was little.", ["going", "to go"]], ["I'd like ___ to Italy.", ["to go", "going"]],
      ["We stopped the car ___ some photos of the lake.", ["to take", "taking"]], ["We regret ___ you that your application has been rejected. (официальное письмо)", ["to inform", "informing"]],
      ["They can't afford ___ a new car.", ["to buy", "buying"]], ["She avoided ___ at me.", ["looking", "to look"]]
    ]},
    { type: 'gap', task: 'Поставьте глагол в форму герундия или инфинитива.', items: [
      ["I hope ___ (see) you soon.", "to see"], ["He keeps ___ (ask) the same question.", "asking"],
      ["She refused ___ (answer).", "to answer"], ["We finished ___ (eat) and went out.", "eating"],
      ["They agreed ___ (meet) at six.", "to meet"], ["I suggest ___ (go) by train.", "going|we go|that we go|we should go|that we should go"],
      ["Please remember ___ (buy) some milk.", "to buy"], ["I'll never forget ___ (see) the ocean for the first time.", "seeing"],
      ["He managed ___ (open) the box.", "to open"], ["I regret ___ (shout) at you yesterday.", "shouting|having shouted"]
    ]},
    { type: 'translate', task: 'Переведите на английский.', items: [
      ["Мой брат перестал играть в компьютерные игры.", "My brother stopped playing computer games.|My brother has stopped playing computer games.|My brother gave up playing computer games.|My brother has given up playing computer games.|My brother quit playing computer games."],
      ["Не забудь позвонить бабушке.", "Don't forget to call Granny.|Remember to call Granny.|Don't forget to phone Granny.|Remember to phone Granny.|Don't forget to call your grandmother.|Remember to call your grandmother."],
      ["Я помню, как встретил ее в Париже.", "I remember meeting her in Paris.|I remember having met her in Paris.|I remember that I met her in Paris."],
      ["Мы остановились, чтобы отдохнуть.", "We stopped to rest.|We stopped to have a rest.|We stopped to take a rest."]
    ]},
    { type: 'listen', at: 2, task: 'Прослушайте предложение и соберите его из слов.', items: [
      ["She stopped eating meat a few years ago.", "Она перестала есть мясо несколько лет назад."],
      ["On the way home I stopped to buy some flowers.", "По дороге домой я остановился, чтобы купить цветов."],
      ["Remember to switch off the light when you leave the room.", "Не забудь выключить свет, когда будешь выходить из комнаты."]
    ]}
  ]}
]});

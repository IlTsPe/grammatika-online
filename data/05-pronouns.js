BOOK.push({ n: 5, id: 'pronouns', title: 'Местоимения',
intro: 'Раздел начинается с двух опорных тем — о личных, притяжательных и возвратных местоимениях и об указательных <i>this, that, these, those</i>: без них упражнения раздела даются тяжелее.',
topics: [

{ id: 'pron-personal', level: 'A1', title: 'Личные, притяжательные и возвратные', sub: 'I – me – my – mine – myself',
  rule: `
<p>У английских местоимений есть несколько форм, и выбор зависит от того, какую роль слово играет в предложении. Например, кто действует — <i>I</i> («я»), на кого направлено действие — <i>me</i> («меня, мне»), чей предмет — <i>my</i> («мой»). Таблица ниже показывает все формы рядом.</p>
${T(["Подлежащее", "Дополнение", "Перед сущ.", "Без сущ.", "Возвратное"], [
  ["<i>I</i>", "<i>me</i>", "<i>my</i>", "<i>mine</i>", "<i>myself</i>"],
  ["<i>you</i>", "<i>you</i>", "<i>your</i>", "<i>yours</i>", "<i>yourself / yourselves</i>"],
  ["<i>he</i>", "<i>him</i>", "<i>his</i>", "<i>his</i>", "<i>himself</i>"],
  ["<i>she</i>", "<i>her</i>", "<i>her</i>", "<i>hers</i>", "<i>herself</i>"],
  ["<i>it</i>", "<i>it</i>", "<i>its</i>", "—", "<i>itself</i>"],
  ["<i>we</i>", "<i>us</i>", "<i>our</i>", "<i>ours</i>", "<i>ourselves</i>"],
  ["<i>they</i>", "<i>them</i>", "<i>their</i>", "<i>theirs</i>", "<i>themselves</i>"]
])}
${E([
  ["<b>She</b> loves <b>him</b>, and <b>he</b> loves <b>her</b>.", "Она любит его, а он любит ее. (подлежащее и дополнение)"],
  ["This is <b>my</b> bag. The bag is <b>mine</b>.", "Это моя сумка. Эта сумка моя. (перед существительным и без него)"]
])}
<h3>Две формы притяжательных: my и mine</h3>
<p>Форму из столбца «Перед сущ.» (<i>my, your, her</i>) ставят только перед существительным: <i>my bag</i>. Форму из столбца «Без сущ.» (<i>mine, yours, hers</i>) используют, когда существительного после нее нет, — например, в конце предложения, чтобы не повторять уже названный предмет: <i>Is this pen yours? — Yes, it's mine</i> — это твоя ручка? — Да, моя. У <i>it</i> такой отдельной формы на практике нет, поэтому в таблице стоит прочерк. И не путайте <i>its</i> («его, ее» — о предмете или животном) с <i>it's</i> (сокращение от <i>it is</i>): <i>The dog wagged <b>its</b> tail</i> — собака виляла хвостом.</p>
<h3>Возвратные местоимения</h3>
<p>Возвратное местоимение (<i>myself, herself, themselves</i>) нужно, когда человек делает что-то сам с собой, то есть подлежащее и дополнение — одно и то же лицо: <i>He cut <b>himself</b></i> — он порезался (порезал себя). Если сказать <i>He cut him</i>, получится, что он порезал кого-то другого. У <i>you</i> две возвратные формы: <i>yourself</i> — когда обращаются к одному человеку, и <i>yourselves</i> — когда к нескольким: <i>Children, help <b>yourselves</b>!</i> — дети, угощайтесь! Выражение <i>Help yourself!</i> — угощайся! — стоит просто запомнить.</p>
<p>Те же слова работают и как усилительные, со значением «сам, лично»: <i>I did it <b>myself</b></i> — я сделал это сам, без помощи. А с предлогом <i>by</i> они значат «один, в одиночку»: <i>She lives <b>by herself</b></i> — она живет одна. Будьте внимательны: не каждый русский глагол на «-ся» или со словом «себя» требует возвратного местоимения. Например, «мыться» — это просто <i>wash</i>, «одеваться» — <i>get dressed</i>, «чувствовать себя» — <i>feel</i>: <i>I feel fine</i> — я чувствую себя хорошо.</p>
${N("Отдельного слова «свой» в английском нет — его переводят тем местоимением, которое подходит по лицу: «Я взял свою книгу» — <i>I took <b>my</b> book</i>, «Она взяла свою книгу» — <i>She took <b>her</b> book</i>. А в коротких ответах в разговоре используют форму <i>me</i>, а не <i>I</i>: <i>— Who's there? — <b>Me</b>.</i> (— Кто там? — Я.)")}`,
  /* перевод слов в упражнениях: по наведению или касанию (gloss.js); ключи — в нижнем регистре, как слово стоит в тексте */
  gloss: {
    'cooked': 'приготовил', 'dinner': 'ужин', 'scarf': 'шарф',
    'brother': 'брат', 'old': 'старый', 'house': 'дом', 'umbrella': 'зонт', 'bag': 'сумка', 'book': 'книга', 'pen': 'ручка',
    'blue': 'синий, голубой', 'this is': 'это', "it's": 'это (= it is)', 'i': 'я', 'he': 'он', 'it': 'это; он, она (о предмете)',
    'we': 'мы', 'my': 'мой, моя, мое', 'is': 'есть, является (форма to be)', 'are': 'есть (форма to be)', 'the': 'определенный артикль',
    'at': 'в (о времени); у, на (о месте)', 'in': 'в', 'that': 'тот, та, то; что (союз)', 'look at': 'посмотри на',
    'a': 'неопределенный артикль', 'dog': 'собака', 'new': 'новый', 'please': 'пожалуйста', 'this': 'этот, эта, это', 'flat': 'квартира',
    'on': 'на; в (о днях)', 'day': 'день', 'and': 'и', 'year': 'год', 'for': 'для; в течение', 'big': 'большой',
    'to': 'в, на (куда); частица перед глаголом', 'room': 'комната', 'some': 'немного, несколько', 'under': 'под', 'our': 'наш',
    'yesterday': 'вчера', 'look': 'смотреть; смотри', 'bird': 'птица', 'school': 'школа', 'bed': 'кровать', 'with': 'с',
    'homework': 'домашнее задание', 'last': 'прошлый', 'not': 'не', 'party': 'вечеринка', 'were': 'были (форма to be)', 'but': 'но',
    'all': 'весь, все', 'letter': 'письмо', 'together': 'вместе', 'cake': 'торт', 'bought': 'купил (от buy)', 'children': 'дети',
    'help': 'помогать', 'met': 'встретил (от meet)', 'was': 'был (форма to be)', 'called': 'позвонил (от call)', 'all day': 'весь день',
    "didn't": 'не (= did not)', 'last year': 'в прошлом году', 'found': 'нашел (от find)', 'cars': 'машины', 'answer': 'ответ; ответить',
    'brothers': 'братья', 'brought': 'принес (от bring)', 'chair': 'стул', 'desk': 'письменный стол', 'enjoyed': 'получили удовольствие (от enjoy)',
    'garden': 'сад', 'gave': 'дал (от give)', 'helped': 'помог', 'hurt': 'ушибить, поранить; причинить боль', "isn't": 'не (= is not)', 'mine': 'мой',
    'painted': 'покрасил; нарисовал', 'postman': 'почтальон', 'slept': 'спал (от sleep)', 'wings': 'крылья'
  },
  ex: [
    { type: 'gap', task: 'Замените слово в скобках нужной формой местоимения.', items: [
      ["Yesterday my brother helped ___ (I) with my homework.", "me"], ["This is Anna. ___ (she) brothers were at our school.", "her"],
      ["We bought ___ (we) new flat last year.", "our"], ["The dog slept in ___ (it) bed all day.", "its"],
      ["This bag isn't mine, it's ___ (she).", "hers"], ["Is this scarf ___ (you)? I found it under the desk.", "yours"],
      ["I met ___ (they) at Tom's party.", "them"], ["He hurt ___ (he) in the garden.", "himself"],
      ["We cooked dinner ___ (we).", "ourselves"], ["I called ___ (he) yesterday, but he didn't answer.", "him"],
      ["The big house was ___ (they), not ___ (we).", ["theirs", "ours"]]
    ]},
    { type: 'choice', task: 'Выберите правильный вариант.', items: [
      ["Mary and ___ were at school together.", ["I", "me", "my"]], ["I gave the book to ___ yesterday.", ["her", "she", "hers"]],
      ["Is this umbrella ___? It was on my chair.", ["yours", "your", "you"]], ["The children enjoyed ___ at the party.", ["themselves", "themself", "them"]],
      ["Look at that bird! ___ wings are blue.", ["Its", "It's", "Their"]], ["The postman brought a letter for ___.", ["me", "my", "mine"]],
      ["Our cars are old, but ___ are new.", ["theirs", "their", "them"]], ["Please help ___ to some cake!", ["yourself", "you", "yours"]]
    ]},
    { type: 'translate', task: 'Переведите на английский.', items: [
      ["Это ее сумка, а не моя.", "This is her bag, not mine.|It is her bag, not mine.|It's her bag, not mine."],
      ["Вчера она позвонила мне.", "She called me yesterday.|She phoned me yesterday.|Yesterday she called me.|Yesterday she phoned me.|She rang me yesterday.|Yesterday she rang me."],
      ["Она сама испекла этот торт.", "She baked this cake herself.|She made this cake herself.|She baked this cake by herself.|She made this cake by herself."],
      ["Мы забыли свои зонты.", "We forgot our umbrellas.|We have forgotten our umbrellas."],
      ["Мы видели их детей в парке.", "We saw their children in the park.|We saw their kids in the park."]
    ]},
    { type: 'listen', at: 2, task: 'Прослушайте предложение и соберите его из слов.', items: [
      ["The red bag is hers, and the blue bag is mine.", "Красная сумка ее, а синяя моя."],
      ["We painted our kitchen ourselves last summer.", "Прошлым летом мы сами покрасили свою кухню."],
      ["Is this your umbrella or is it mine?", "Это твой зонт или мой?"]
    ]}
  ]},

{ id: 'pron-demonstrative', level: 'A1', title: 'This, that, these, those', sub: 'this book, those houses',
  rule: `
<p>Эти слова указывают на предмет, как русские «этот» и «тот». Выбор зависит от двух вещей: близко предмет или далеко и один он или их несколько.</p>
${T(["", "Рядом", "Далеко"], [
  ["Один предмет", "<i><b>this</b> book</i> — эта книга", "<i><b>that</b> house</i> — тот дом"],
  ["Несколько", "<i><b>these</b> books</i> — эти книги", "<i><b>those</b> houses</i> — те дома"]
])}
<p>Эти слова могут стоять перед существительным, а могут заменять его целиком. Например, <i><b>This</b> bag is new</i> — эта сумка новая (перед существительным); <i><b>This</b> is my bag</i> — это моя сумка (вместо существительного).</p>
${E([
  ["<b>This</b> is my phone.", "Это мой телефон."],
  ["<b>These</b> are my friends.", "Это мои друзья."],
  ["What is <b>that</b> on the roof?", "Что это там, на крыше?"],
  ["<b>Those</b> shoes are very expensive.", "Те туфли очень дорогие."]
])}
<h3>Близко и далеко во времени</h3>
<p>«Близко» и «далеко» бывает не только в пространстве, но и во времени. То, что происходит сейчас, — это <i>this</i> и <i>these</i>: <i>this week</i> — на этой неделе, <i>these days</i> — в наши дни. То, что уже прошло, — <i>that</i> и <i>those</i>: <i>that day</i> — в тот день, <i>in those days</i> — в те времена. Поэтому о только что закончившемся фильме говорят <i><b>That</b> was a great film!</i> — это был отличный фильм!</p>
<p>Когда кого-то представляют, говорят <i>this</i>: <i>Mum, <b>this</b> is Anna</i> — мама, это Анна.</p>
${N("Русское «это» не меняется, а по-английски его нужно согласовать с тем, о чем идет речь. Если предметов несколько, вместо <i>this is</i> нужно <i>these are</i>: «Это мои книги» — <i><b>These are</b> my books</i>, а не <i>This is my books</i>. В кратком ответе <i>this</i> и <i>that</i> заменяют на <i>it</i>, а <i>these</i> и <i>those</i> — на <i>they</i>: <i>Is this your bag? — Yes, <b>it</b> is.</i> — это твоя сумка? — Да. <i>Are these your keys? — Yes, <b>they</b> are.</i> — это твои ключи? — Да.")}`,
  /* перевод слов в упражнениях: по наведению или касанию (gloss.js); ключи — в нижнем регистре, как слово стоит в тексте */
  gloss: {
    'gloves': 'перчатки',
    'bike': 'велосипед', 'concert': 'концерт', 'dad': 'папа', 'last': 'прошлый', 'night': 'ночь', 'to': 'чтобы (перед глаголом)', 'went': 'пошел, поехал (от go)', 'wonderful': 'чудесный',
    'old': 'старый', 'film': 'фильм', 'week': 'неделя', 'man': 'мужчина', 'bag': 'сумка', 'i': 'я', 'we': 'мы', 'my': 'мой, моя, мое',
    'is': 'есть, является (форма to be)', 'are': 'есть (форма to be)', 'the': 'определенный артикль',
    'at': 'в (о времени); у, на (о месте)', 'in': 'в', 'what': 'что, какой', 'look at': 'посмотри на', 'a': 'неопределенный артикль',
    'very': 'очень', 'new': 'новый', 'on': 'на; в (о днях)', 'door': 'дверь', 'who': 'кто', 'there': 'там, туда', 'table': 'стол',
    'your': 'твой, ваш', 'people': 'люди, человек', 'yesterday': 'вчера', 'look': 'смотреть; смотри', 'bird': 'птица', 'roof': 'крыша',
    'home': 'дом; домой', 'often': 'часто', 'from': 'из, от', 'like': 'нравиться, любить', 'friend': 'друг', 'mum': 'мама', 'days': 'дни',
    'keys': 'ключи', 'work': 'работа; работать', "don't": 'не (= do not)', 'children': 'дети', 'great': 'отличный', 'jeans': 'джинсы',
    'phone': 'телефон', 'song': 'песня', 'hard': 'усердно; трудный', 'saw': 'увидел (от see)', 'was': 'был (форма to be)',
    'am': 'есть (форма to be с I)', 'life': 'жизнь', 'love': 'любить', 'over there': 'вон там', 'busy': 'занят, занятый', 'hill': 'холм',
    'houses': 'дома', 'nephews': 'племянники', 'nice': 'приятный', 'oranges': 'апельсины', 'shoes': 'туфли, обувь',
    'sweet': 'сладкий; милый'
  },
  ex: [
    { type: 'gap', task: 'Впишите this, that, these или those. В скобках подсказка: рядом или далеко (в пространстве или во времени).', items: [
      ["___ (рядом) is my new bike.", "this"],
      ["___ (далеко) houses on the hill are very old.", "those"],
      ["Look at ___ (далеко) bird on the roof!", "that"],
      ["___ (рядом) oranges are sweet.", "these"],
      ["Are ___ (рядом) your gloves?", "these"],
      ["Who is ___ (далеко) man at the door?", "that"],
      ["I love ___ (сейчас звучит) song.", "this"],
      ["___ (далеко) children over there are my nephews.", "those"],
      ["___ (сейчас) week I am very busy.", "this"],
      ["Life was hard in ___ (давно) days.", "those"]
    ]},
    { type: 'choice', task: 'Выберите правильный вариант.', items: [
      ["___ my new shoes.", ["These are", "This is", "These is"]],
      ["Is ___ your bag over there?", ["that", "those", "these"]],
      ["___ shoes are very nice. (у вас в руках)", ["These", "This", "That"]],
      ["What is ___ on the table over there?", ["that", "those", "these"]],
      ["Dad, ___ is Max, my new friend. (он стоит рядом)", ["this", "these", "those"]],
      ["I don't like ___ jeans. (у вас в руках)", ["these", "this", "that"]],
      ["We went to a concert last night. ___ was wonderful!", ["That", "Those", "These"]],
      ["___ days people often work from home. (в наше время)", ["These", "Those", "This"]]
    ]},
    { type: 'translate', task: 'Переведите на английский.', items: [
      ["Это наш новый учитель.", "This is our new teacher.|That is our new teacher."],
      ["Эти цветы красивые.", "These flowers are beautiful.|These flowers are pretty.|These flowers are lovely.|These flowers are nice."],
      ["Чьи это ботинки?", "Whose shoes are these?|Whose shoes are those?|Whose are these shoes?|Whose are those shoes?|Whose boots are these?|Whose boots are those?"],
      ["Та девочка у окна — моя сестра.", "That girl at the window is my sister.|That girl by the window is my sister."],
      ["Это мои родители.", "These are my parents.|Those are my parents."],
    ]},
    { type: 'listen', at: 2, task: 'Прослушайте предложение и соберите его из слов.', items: [
      ["This bag is mine, and that bag is my sister's.", "Эта сумка моя, а та принадлежит моей сестре."],
      ["These apples are sweet, but those are sour.", "Эти яблоки сладкие, а те кислые."],
      ["Who are those people at the bus stop?", "Кто те люди на остановке?"]
    ]}
  ]},

{ id: 'pron-some-any', level: 'A1', title: 'Some, any, no', sub: 'some milk, any questions, no time',
  rule: `
<p>Слова <i>some</i>, <i>any</i> и <i>no</i> говорят о количестве, когда точное число неважно или неизвестно: «немного», «сколько-нибудь», «нисколько». Их ставят перед неисчисляемыми существительными (<i>some milk</i>) и перед исчисляемыми во множественном числе (<i>some apples</i>). Главное различие — в типе предложения: утверждение, вопрос или отрицание.</p>
${T(["Слово", "Где", "Пример"], [
  ["<i>some</i>", "утвердительные предложения", "<i>There is <b>some</b> milk. I have <b>some</b> friends.</i> — Есть немного молока. У меня есть друзья."],
  ["<i>some</i>", "вопросы-просьбы и вопросы-предложения (угощение)", "<i>Would you like <b>some</b> tea? Can I have <b>some</b> water?</i> — Хотите чаю? Можно мне воды?"],
  ["<i>any</i>", "вопросы", "<i>Have you got <b>any</b> brothers?</i> — У тебя есть братья?"],
  ["<i>any</i>", "отрицания (с not)", "<i>I haven't got <b>any</b> money.</i> — У меня нет денег."],
  ["<i>any</i>", "утверждение: «любой»", "<i>Take <b>any</b> book you like.</i> — Бери любую книгу, какая нравится."],
  ["<i>no</i>", "отрицание без not", "<i>I have <b>no</b> time. = I haven't got any time.</i> — У меня нет времени."]
])}
<h3>Почему some бывает в вопросах</h3>
<p>Обычно в вопросе ставят <i>any</i>, потому что спрашивающий не знает ответа: <i>Have you got any brothers?</i> Но когда мы что-то предлагаем или просим, мы ждем ответа «да», и тогда в вопросе остается <i>some</i>. Так, <i>Would you like some tea?</i> — это не вопрос о том, есть ли чай, а вежливое предложение: «Хотите чаю?». Оборот <i>Would you like…?</i> — не хотите ли…? — вежливее, чем <i>Do you want…?</i>, и его удобно запомнить целиком. При этом <i>Do you want…?</i> тоже правильный вопрос, только проще: так спрашивают друзей и близких.</p>
<h3>Have got — «иметь»</h3>
<p>В примерах таблицы встречается <i>have got</i>. Это разговорный, особенно британский, вариант глагола <i>have</i> в значении «иметь, у меня есть»: <i>I've got a sister = I have a sister</i> — у меня есть сестра. Главное отличие в том, как строятся вопрос и отрицание. С <i>have got</i> вспомогательный глагол <i>do</i> не нужен: в вопросе <i>have</i> выходит вперед (<i>Have you got a car?</i> — у тебя есть машина?), а в отрицании к нему добавляется <i>not</i> (<i>I haven't got a car</i> — у меня нет машины). С обычным <i>have</i> то же самое звучит так: <i>Do you have a car? I don't have a car.</i> Оба варианта правильные. Используют <i>have got</i> только в настоящем времени и только в значении «иметь»: сказать <i>I've got breakfast</i> вместо <i>I have breakfast</i> (я завтракаю) нельзя.</p>
${N("Как и в теме 1.3, двух отрицаний сразу не бывает: <i>I don't have no time</i> — ошибка.")}`,
  /* перевод слов в упражнениях: по наведению или касанию (gloss.js); ключи — в нижнем регистре, как слово стоит в тексте */
  gloss: {
    'stamps': 'марки',
    'lesson': 'урок', 'i': 'я', 'he': 'он', 'she': 'она', 'it': 'это; он, она (о предмете)', 'we': 'мы', 'my': 'мой, моя, мое',
    'the': 'определенный артикль', 'at': 'в (о времени); у, на (о месте)', 'in': 'в', 'very': 'очень', 'new': 'новый', 'shop': 'магазин',
    'on': 'на; в (о днях)', 'day': 'день', 'sugar': 'сахар', 'buy': 'купить', 'for': 'для; в течение', 'her': 'ее, ей', 'see': 'увидеть',
    'mother': 'мама', 'there': 'в обороте there is / there are: есть, имеется', 'room': 'комната', 'some': 'немного, несколько', 'milk': 'молоко', 'bread': 'хлеб',
    'kitchen': 'кухня', 'chairs': 'стулья', 'table': 'стол', 'your': 'твой, ваш', 'town': 'город', 'yesterday': 'вчера', 'with': 'с',
    'me': 'меня, мне', 'do': 'делать; вспомогательный глагол', 'from': 'из, от', 'want': 'хотеть', 'you': 'ты, вы',
    'like': 'нравиться, любить', 'tea': 'чай', 'animals': 'животные', 'flowers': 'цветы', 'were': 'были (форма to be)', 'coffee': 'кофе',
    'time': 'время', 'did': 'вспомогательный глагол прошедшего времени', 'his': 'его', "i'm": 'я (= I am)', 'bought': 'купил (от buy)',
    'call': 'звонить', 'made': 'сделали; приняли (решение)', 'or': 'или', 'help': 'помогать', 'night': 'ночь', 'was': 'был (форма to be)',
    "haven't": 'не (= have not)', "didn't": 'не (= did not)', 'got': 'have got — иметь, есть (у кого-то)', 'so': 'поэтому; так', 'letters': 'письма',
    'apples': 'яблоки', 'ask': 'спросить, попросить', 'bags': 'сумки', 'brought': 'принес (от bring)', 'drink': 'пить', 'forest': 'лес',
    'friends': 'друзья', 'had': 'имел; вспомогательный глагол', 'juice': 'сок', 'lonely': 'одинокий', 'market': 'рынок', 'money': 'деньги',
    'postman': 'почтальон', 'potatoes': 'картофель', 'questions': 'вопросы', 'sandwiches': 'бутерброды', 'seat': 'место (сиденье)',
    'sorry': 'извините; жаль', 'take': 'брать; занимать (о времени)', "wasn't": 'не был (= was not)',
    'would': 'бы; вспомогательный глагол'
  },
  ex: [
    { type: 'gap', task: 'Впишите some, any или no.', items: [
      ["Yesterday there was ___ bread on the table, so I made sandwiches.", "some"], ["Were there ___ apples in the shop?", "any"],
      ["I haven't got ___ stamps.", "any"], ["Do you want ___ coffee?", "some|any"],
      ["There were ___ chairs in the room, so we brought some from the kitchen.", "no"], ["Did you ask ___ questions in the lesson?", "any"],
      ["She bought ___ flowers for her mother.", "some"], ["I'm sorry, there was ___ milk in the shop.", "no"],
      ["Would you like ___ juice?", "some"], ["We didn't see ___ animals in the forest.", "any"],
      ["Take ___ seat you like.", "any"], ["He had ___ friends in his new town, so he was very lonely.", "no"]
    ]},
    { type: 'choice', task: 'Выберите правильный вариант.', items: [
      ["I didn't buy ___ potatoes at the market.", ["any", "some", "no"]], ["The postman brought ___ letters for you.", ["some", "any", "no any"]],
      ["There wasn't ___ sugar in my tea, so I didn't drink it.", ["any", "some", "no"]], ["We had ___ bread, so I bought some at the shop.", ["no", "any", "some"]],
      ["Would you like ___ help with your bags?", ["some", "no", "a"]], ["Call me at ___ time — day or night.", ["any", "some", "no"]]
    ]},
    { type: 'translate', task: 'Переведите на английский.', items: [
      ["Вчера я купил немного сыра.", "I bought some cheese yesterday.|Yesterday I bought some cheese."],
      ["У тебя есть вопросы?", "Have you got any questions?|Do you have any questions?"],
      ["Вчера у меня не было времени.", "I had no time yesterday.|I didn't have any time yesterday.|Yesterday I had no time.|Yesterday I didn't have any time."],
      ["Хотите печенья?", "Would you like some biscuits?|Do you want some biscuits?|Would you like any biscuits?|Do you want any biscuits?"],
      ["Приходи в любой день.", "Come any day.|Come on any day.|Come any day you like."],
    ]},
    { type: 'listen', at: 2, task: 'Прослушайте предложение и соберите его из слов.', items: [
      ["Do you want some milk in your coffee?", "Хочешь молока в кофе?"],
      ["There was no bread, but there were some biscuits in the cupboard.", "Хлеба не было, но в шкафу было печенье."],
      ["Any colour is fine for me.", "Мне подойдет любой цвет."],
    ]}
  ]},

{ id: 'pron-compounds', level: 'A2', title: 'Производные: somebody, anything, nowhere', sub: 'someone, nothing, everywhere',
  rule: `
<p>Если к <i>some, any, no, every</i> добавить <i>-body</i>, <i>-thing</i> или <i>-where</i>, получатся слова «кто-то», «что-то», «где-то» и похожие: <i>somebody, anything, nowhere, everywhere</i>. Выбирать между ними нужно по тем же правилам, что и между <i>some, any, no</i>: в утверждении — <i>some-</i>, в вопросе и в отрицании с <i>not</i> — <i>any-</i>, в отрицании без <i>not</i> — <i>no-</i>.</p>
${T(["", "+ body / one (люди)", "+ thing (вещи)", "+ where (место)"], [
  ["<i>some</i>", "<i>somebody / someone</i> — кто-то", "<i>something</i> — что-то", "<i>somewhere</i> — где-то"],
  ["<i>any</i>", "<i>anybody / anyone</i> — кто-нибудь; любой", "<i>anything</i> — что-нибудь; что угодно", "<i>anywhere</i> — где-нибудь; где угодно"],
  ["<i>no</i>", "<i>nobody / no one</i> — никто", "<i>nothing</i> — ничего", "<i>nowhere</i> — нигде, никуда"],
  ["<i>every</i>", "<i>everybody / everyone</i> — все", "<i>everything</i> — все вещи, все на свете", "<i>everywhere</i> — везде"]
])}
${E([
  ["<b>Somebody</b> is knocking at the door.", "Кто-то стучит."],
  ["Is there <b>anybody</b> at home?", "Дома кто-нибудь есть?"],
  ["I didn't see <b>anything</b>. = I saw <b>nothing</b>.", "Я ничего не видел."],
  ["<b>Everybody</b> <b>is</b> here.", "Все здесь."]
])}
<p>В таблице у слов с <i>any-</i> два перевода. В вопросе и отрицании они значат «кто-нибудь, что-нибудь, где-нибудь», а в утвердительном предложении — «кто угодно, что угодно, где угодно», так же как <i>any</i> значит «любой». Например, <i><b>Anybody</b> can do it</i> — это может сделать кто угодно (любой), а <i>You can sit <b>anywhere</b></i> — садитесь где хотите.</p>
${N("Хотя <i>everyone</i> значит «все», глагол после него стоит в единственном числе, как после «каждый». То же с <i>nobody</i> и другими такими словами: <i>Everyone <b>knows</b></i> — все знают, <i>Nobody <b>was</b> there</i> — никого не было.")}`,
  /* перевод слов в упражнениях: по наведению или касанию (gloss.js); ключи — в нижнем регистре, как слово стоит в тексте */
  gloss: {
    'pen': 'ручка', 'teacher': 'учитель', "it's": 'это (= it is)', 'has': 'имеет; вспомогательный глагол', 'i': 'я', 'he': 'он',
    'she': 'она', 'it': 'это; он, она (о предмете)', 'they': 'они', 'my': 'мой, моя, мое', 'is': 'есть, является (форма to be)',
    'are': 'есть (форма to be)', 'go': 'идти, ехать', 'the': 'определенный артикль', 'in': 'в', 'a': 'неопределенный артикль',
    'very': 'очень', 'today': 'сегодня', 'new': 'новый', 'this': 'этот, эта, это', 'kind': 'добрый', 'and': 'и', 'buy': 'купить',
    'present': 'подарок', 'for': 'для; в течение', 'see': 'увидеть', 'to': 'в, на (куда); частица перед глаголом', 'there': 'в обороте there is / there are: есть, имеется',
    'room': 'комната', 'class': 'класс', 'classroom': 'класс (комната)', 'your': 'твой, ваш', 'street': 'улица', 'our': 'наш',
    'yesterday': 'вчера', "let's": 'давай(те)', 'summer': 'лето', 'tell': 'говорить, рассказывать', 'me': 'меня, мне',
    'ski': 'катаются на лыжах', 'alps': 'Альпы', 'you': 'ты, вы', 'glasses': 'очки', 'hungry': 'голодный', 'last': 'прошлый',
    'party': 'вечеринка', 'trip': 'поездка', 'when': 'когда', 'but': 'но', 'all': 'весь, все',
    'did': 'вспомогательный глагол прошедшего времени', 'keys': 'ключи', 'way': 'путь, дорога', 'weekend': 'выходные', 'box': 'коробка',
    "don't": 'не (= do not)', "i'm": 'я (= I am)', 'thirsty': 'хочется пить', 'left': 'ушел (от leave); оставшийся; левый',
    'was': 'был (форма to be)', "haven't": 'не (= have not)', "didn't": 'не (= did not)', 'came': 'пришел (от come)',
    'found': 'нашел (от find)', 'so': 'поэтому; так', 'going to': 'собираюсь', 'eaten': 'съел (3-я форма eat)', 'them': 'их, им',
    'about': 'о; около', 'answer': 'ответ; ответить', 'ask': 'спросить, попросить', 'cafés': 'кафе (мн. ч.)', 'closed': 'закрыт',
    'difficult': 'трудный', 'drink': 'пить', 'empty': 'пустой', 'everybody': 'все', 'everything': 'все', 'fine': 'хорошо, в порядке',
    "i've": 'я (= I have)', 'know': 'знать', 'knows': 'знает', 'liked': 'нравился', 'looked': 'выглядел; посмотрел',
    'looking': 'смотрит; ищет', 'lost': 'потерял; потерянный', 'perfect': 'идеальный', 'question': 'вопрос', 'said': 'сказал (от say)',
    'say': 'сказать', 'silence': 'тишина', 'taken': 'взят (3-я форма take)', 'warm': 'теплый'
  },
  ex: [
    { type: 'gap', task: 'Впишите somebody, anybody, nobody, everybody, something, anything, nothing, everything, somewhere, anywhere, nowhere или everywhere.', items: [
      ["There was ___ in the box: a present for me!", "something"], ["Was there ___ in the classroom when you came?", "anybody|anyone"],
      ["I'm hungry. I haven't eaten ___ today.", "anything"], ["___ knows the answer. It's a very difficult question.", "nobody|no one"],
      ["I've lost my keys. I've looked ___, but I haven't found them.", "everywhere"], ["Let's go ___ warm this summer.", "somewhere"],
      ["___ in our class liked the new teacher. She was so kind!", "everybody|everyone"], ["He said ___ and left the room in silence.", "nothing"],
      ["I'm looking for my glasses, but I don't see them ___.", "anywhere"], ["___ has taken my pen!", "somebody|someone"],
      ["There is ___ to go — all the cafés are closed.", "nowhere"], ["Tell me ___ about your trip to the Alps. Did you ski?", "everything|something"]
    ]},
    { type: 'choice', task: 'Выберите правильный вариант.', items: [
      ["Everybody ___ to the party.", ["came", "come", "are coming"]], ["I didn't say ___.", ["anything", "nothing", "something"]],
      ["Did you go ___ last weekend?", ["anywhere", "nowhere", "everywhere"]], ["___ is perfect.", ["Nobody", "Anybody", "Somebody"]],
      ["I'm thirsty. I'm going to buy ___ to drink.", ["something", "anything", "nothing"]], ["Everything ___ fine yesterday.", ["was", "were"]],
      ["Ask ___ — they all know the way.", ["anyone", "no one", "someone"]], ["There was ___ in the street. It was empty.", ["nobody", "anybody", "somebody"]]
    ]},
    { type: 'translate', task: 'Переведите на английский.', items: [
      ["Кто-то звонит в дверь.", "Somebody is ringing the doorbell.|Someone is ringing the doorbell.|Somebody is ringing at the door.|Someone is ringing at the door."],
      ["Я ничего не купил.", "I didn't buy anything.|I bought nothing.|I haven't bought anything."],
      ["Все уже слышали об этом.", "Everybody has already heard about it.|Everyone has already heard about it.|Everybody has heard about it.|Everyone has heard about it.|Everybody has already heard about this.|Everyone has already heard about this.|Everybody has already heard of it.|Everyone has already heard of it."],
      ["В саду кто-нибудь есть?", "Is there anybody in the garden?|Is anybody in the garden?|Is there anyone in the garden?|Is anyone in the garden?"],
      ["Я не хочу никуда идти.", "I don't want to go anywhere."],
    ]},
    { type: 'listen', at: 2, task: 'Прослушайте предложение и соберите его из слов.', items: [
      ["Somebody left a message, but nobody knows who.", "Кто-то оставил сообщение, но никто не знает кто."],
      ["There was nothing interesting on TV last night.", "Вчера вечером по телевизору не было ничего интересного."],
      ["Everybody was at the party, but nobody danced.", "На вечеринке были все, но никто не танцевал."],
    ]}
  ]},

{ id: 'pron-every-each', level: 'B2', title: 'Every, each, all, both, either, neither', sub: 'each of them, both of us, neither do I',
  rule: `
<p>Эти слова говорят о целой группе или о каждом ее участнике по отдельности.</p>
${T(["Слово", "Значение", "Пример"], [
  ["<i>every</i>", "каждый (все вместе, 3 и больше), + ед. ч.", "<i><b>Every</b> student has a book.</i> — У каждого студента есть книга."],
  ["<i>each</i>", "каждый в отдельности, в том числе из двух", "<i>She had a bag in <b>each</b> hand. <b>Each</b> student got a mark.</i> — В каждой руке у нее было по сумке. Каждый студент получил оценку."],
  ["<i>all</i>", "все, весь, + мн. ч. или неисчисляемое", "<i><b>All</b> students, <b>all</b> the money, <b>all</b> day</i> — все студенты, все деньги, весь день"],
  ["<i>both</i>", "оба (из двух)", "<i><b>Both</b> my parents are doctors.</i> — Оба моих родителя врачи."],
  ["<i>either</i>", "любой из двух; в отрицании — ни один", "<i>Take <b>either</b> road.</i> — Поезжай по любой из двух дорог."],
  ["<i>neither</i>", "ни тот, ни другой", "<i><b>Neither</b> answer is correct.</i> — Ни один из двух ответов не верен."]
])}
${E([
  ["<b>Both</b> Tom <b>and</b> Ann came.", "И Том, и Анна пришли."],
  ["<b>Either</b> Tom <b>or</b> Ann will help you.", "Тебе поможет или Том, или Анна."],
  ["<b>Neither</b> Tom <b>nor</b> Ann came.", "Ни Том, ни Анна не пришли."],
  ["<b>Each of</b> them has a car. <b>All of</b> us agree.", "У каждого из них есть машина. Мы все согласны."]
])}
<h3>Every и each: в чем разница</h3>
<p>Оба слова переводятся как «каждый» и требуют существительного в единственном числе. Но <i>every</i> смотрит на группу целиком и близко по смыслу к «все»: <i>Every house in our street has a garden</i> — сады есть у всех домов нашей улицы. А <i>each</i> выделяет каждого по отдельности, одного за другим. Поэтому, когда предметов только два, годится только <i>each</i>: <i>in each hand</i> — в каждой руке, а <i>every hand</i> сказать нельзя.</p>
<h3>All, all the и all day</h3>
<p>Если <i>all</i> стоит прямо перед существительным, речь идет обо всех вообще: <i>All students like holidays</i> — все студенты (на свете) любят каникулы. Если же после <i>all</i> есть <i>the</i>, речь о конкретной группе или конкретной вещи: <i>all the money</i> — все те деньги, о которых идет речь, <i>all the students in our group</i> — все студенты нашей группы. Со словами времени <i>all</i> значит «весь, целый»: <i>all day</i> — весь день, <i>all night</i> — всю ночь, <i>all week</i> — всю неделю; артикль здесь обычно не ставят.</p>
<h3>Either в отрицании</h3>
<p>Обычно <i>either</i> значит «любой из двух», то есть неважно какой. Но в отрицательном предложении он приобретает значение «ни тот, ни другой» и становится синонимом <i>neither</i>. Например, <i>I don't like <b>either</b> of them</i> — мне не нравится ни один из них. Разница в том, что <i>either</i> ставят в предложение, где уже есть <i>not</i>, а <i>neither</i> сам несет отрицание и с <i>not</i> не используется: <i>I like <b>neither</b> of them</i> — то же самое, но звучит книжнее.</p>
<h3>Слова с of</h3>
<p>Все эти слова, кроме <i>every</i>, можно соединить с <i>of</i>: <i>each of, all of, both of, either of, neither of</i>. После <i>of</i> обязательно стоит артикль, указательное или притяжательное слово (<i>the, these, my</i>) или местоимение в форме дополнения (<i>us, you, them</i>): <i>each of <b>the</b> students</i> — каждый из студентов, <i>both of <b>us</b></i> — мы оба, <i>all of <b>my</b> friends</i> — все мои друзья. Сказать <i>each of students</i> нельзя. Исчисляемое существительное после <i>of</i> стоит во множественном числе, а после <i>each, every, either, neither</i> без <i>of</i> — в единственном: <i>each student</i>, но <i>each of the students</i>.</p>
<h3>So do I и Neither do I — «я тоже»</h3>
<p>Когда мы соглашаемся с собеседником и хотим сказать «я тоже», по-английски не повторяют всю фразу. Если собеседник сказал что-то утвердительное, отвечают так: <i>so</i> + вспомогательный глагол + подлежащее. Например, <i>— I like coffee. — <b>So do I</b>.</i> (— Я люблю кофе. — Я тоже.) Если же фраза отрицательная, вместо <i>so</i> ставят <i>neither</i>: <i>— I don't like coffee. — <b>Neither do I</b>.</i> (— Я не люблю кофе. — Я тоже.) Частицы <i>not</i> после <i>neither</i> нет — отрицание уже есть в самом слове, так же как в <i>neither of them</i>.</p>
<p>Порядок слов здесь как в вопросе: сначала глагол, потом подлежащее. А сам глагол берется из фразы собеседника — точно так же, как в разделительных вопросах (тема 3.2).</p>
${E([
  ["— I'm tired. — <b>So am I</b>.", "— Я устал. — Я тоже."],
  ["— She lives in Kazan. — <b>So does</b> my sister.", "— Она живет в Казани. — Моя сестра тоже."],
  ["— I went to the concert. — <b>So did</b> we.", "— Я ходил на концерт. — Мы тоже."],
  ["— I haven't seen this film. — <b>Neither have I</b>.", "— Я не видел этот фильм. — Я тоже."],
  ["— Tom won't come. — <b>Neither will</b> Ann.", "— Том не придет. — Анна тоже."]
])}
<p>В разговоре вместо этих оборотов часто отвечают совсем коротко: на утверждение — <i>Me too</i> (я тоже), на отрицание — <i>Me neither</i> (я тоже нет). А вместо <i>neither</i> можно сказать <i>nor</i> с тем же порядком слов: <i>Nor do I</i>.</p>
${N("После <i>neither of</i> глагол обычно стоит в единственном числе: <i>Neither of them <b>knows</b></i>, хотя в разговорной речи встречается и <i>Neither of them know</i>.")}`,
  /* перевод слов в упражнениях: по наведению или касанию (gloss.js); ключи — в нижнем регистре, как слово стоит в тексте */
  gloss: {
    'brother': 'брат', 'sister': 'сестра', 'week': 'неделя', 'i have': 'у меня есть', 'has': 'имеет; вспомогательный глагол', 'i': 'я',
    'he': 'он', 'she': 'она', 'it': 'это; он, она (о предмете)', 'we': 'мы', 'they': 'они', 'my': 'мой, моя, мое',
    'is': 'есть, является (форма to be)', 'are': 'есть (форма to be)', 'have': 'иметь; вспомогательный глагол', 'the': 'определенный артикль',
    'at': 'в (о времени); у, на (о месте)', 'in': 'в', 'a': 'неопределенный артикль', 'today': 'сегодня', 'new': 'новый',
    'plays': 'играет', 'this': 'этот, эта, это', 'moscow': 'Москва', 'on': 'на; в (о днях)', 'monday': 'понедельник', 'day': 'день',
    'of': 'предлог родительного падежа', 'live': 'жить', 'who': 'кто', 'and': 'и', 'two': 'два', 'child': 'ребенок', 'year': 'год',
    'buy': 'купить', 'present': 'подарок', 'for': 'для; в течение', 'her': 'ее, ей', 'to': 'в, на (куда); частица перед глаголом',
    'there': 'там, туда; в обороте there is / there are: есть, имеется', 'room': 'комната', 'class': 'класс', 'shops': 'магазины', 'street': 'улица', 'our': 'наш', 'yesterday': 'вчера',
    "let's": 'давай(те)', 'school': 'школа', 'bed': 'кровать', 'cinema': 'кино', 'summer': 'лето', 'now': 'сейчас',
    'tonight': 'сегодня вечером', 'homework': 'домашнее задание', 'come': 'приходить', 'meet': 'встретимся', 'parents': 'родители',
    'like': 'нравиться, любить', 'books': 'книги', 'last week': 'на прошлой неделе', 'again': 'снова', 'hungry': 'голодный',
    'last': 'прошлый', 'late': 'поздно', 'married': 'женат, замужем', 'paris': 'Париж', 'party': 'вечеринка', 'tomorrow': 'завтра',
    'trip': 'поездка', 'were': 'были (форма to be)', 'when': 'когда', 'years': 'годы, лет', 'car': 'машина', 'english': 'английский',
    'jazz': 'джаз', 'meat': 'мясо', 'sisters': 'сестры', 'his': 'его', 'together': 'вместе', "don't": 'не (= do not)',
    'forget': 'забывать', "i'm": 'я (= I am)', 'understand': 'понимать', 'be': 'быть', 'bought': 'купил (от buy)', 'or': 'или',
    'children': 'дети', 'working': 'работает (от work)', 'four': 'четыре', 'husband': 'муж', 'was': 'был (форма to be)',
    'went': 'пошел, поехал (от go)', 'ever': 'когда-либо', 'finished': 'закончил (от finish)', "haven't": 'не (= have not)',
    'read': 'читать; прочитал', 'worked': 'работал (от work)', 'been': 'был (3-я форма be)', "didn't": 'не (= did not)', 'early': 'рано',
    'last year': 'в прошлом году', 'got married': 'вышли замуж, поженились', 'got': 'получил (от get)', 'so': 'поэтому; так', 'going': 'идет (от go)', 'sea': 'море',
    'will': 'вспомогательный глагол будущего времени', 'neighbours': 'соседи', 'them': 'их, им', 'answers': 'ответы',
    'anything': 'что-нибудь; ничего (в отрицании)', 'both': 'оба', 'brothers': 'братья', 'cigarettes': 'сигареты', 'closed': 'закрыт',
    'correct': 'правильный', 'desk': 'письменный стол', "doesn't": 'не (= does not)', 'eat': 'есть (принимать пищу)', 'films': 'фильмы',
    'fine': 'хорошо, в порядке', 'gone': 'ушел, уехал (3-я форма go)', 'guitar': 'гитара', 'hate': 'ненавидеть',
    'horror': 'ужасы (о фильме)', "i've": 'я (= I have)', 'money': 'деньги', 'moved': 'переехал', 'neither': 'ни один; тоже не',
    'own': 'собственный', 'question': 'вопрос', 'side': 'сторона', 'smoked': 'курил', 'spent': 'потратил; провел',
    'taken': 'взят (3-я форма take)', 'trees': 'деревья', 'tried': 'пытался; попробовал', 'tuesday': 'вторник', 'twin': 'близнец',
    "wasn't": 'не был (= was not)', "won't": 'не (= will not)'
  },
  ex: [
    { type: 'choice', task: 'Выберите правильный вариант.', items: [
      ["___ twin has his own room.", ["Each", "Every", "All"]], ["I've read ___ his books.", ["all", "every", "every of"]],
      ["___ my sisters got married last year.", ["Both", "Either", "Each"]], ["___ of the two answers was correct, so I tried again.", ["Neither", "Either", "Both"]],
      ["When I was a child, we went to the sea ___ summer. (каждый год)", ["every", "all", "both"]], ["Come on Monday or Tuesday — ___ day is fine.", ["either", "neither", "both"]],
      ["___ the money has gone. Who has taken it?", ["All", "Every", "Each"]], ["Neither of them ___ English.", ["speaks", "don't speak", "doesn't speak"]],
      ["Last week she was working late ___ day.", ["every", "each of", "all of"]], ["___ Kate and her husband have worked at this school for years.", ["Both", "Either", "Neither"]]
    ]},
    { type: 'gap', task: 'Впишите every, each, all, both, either или neither.', items: [
      ["I have two brothers. ___ of them moved to Moscow last year, so now they live there together.", "both"], ["___ child in the class got a present.", "every|each"],
      ["___ of the four children has his own desk.", "each"], ["___ the shops were closed, so we didn't buy anything.", "all"],
      ["___ of my parents has ever smoked. They both hate cigarettes.", "neither"], ["There are trees on ___ side of the street.", "either|each"],
      ["He spent ___ his money on books.", "all"], ["Let's meet ___ today or tomorrow.", "either"]
    ]},
    { type: 'translate', task: 'Переведите на английский.', items: [
      ["Обе мои сестры живут в Казани.", "Both my sisters live in Kazan.|Both of my sisters live in Kazan.|My sisters both live in Kazan."],
      ["Каждый гость принес подарок.", "Every guest brought a present.|Each guest brought a present.|Every guest brought a gift.|Each guest brought a gift."],
      ["Ни один из двух моих друзей не пришел.", "Neither of my two friends came.|Neither of my friends came."],
      ["Садись на любой из двух автобусов.", "Take either bus.|Take either of the buses.|Take either of the two buses.|You can take either bus.|You can take either of the buses.|You can take either of the two buses."],
      ["Он работал весь день.", "He worked all day.|He worked all day long.|He was working all day.|He worked the whole day."]
    ]},
    { type: 'listen', at: 2, task: 'Прослушайте предложение и соберите его из слов.', items: [
      ["Both of my brothers live in London.", "Оба моих брата живут в Лондоне."],
      ["Each student got a book, and all of them were happy.", "Каждый ученик получил книгу, и все они были довольны."],
      ["Neither of the shops was open.", "Ни один из магазинов не был открыт."],
    ]},
    { type: 'gap', task: 'Ответьте «я тоже»: впишите so или neither, вспомогательный глагол и I.', items: [
      ["— I like jazz. — ___.", "So do I"], ["— I don't eat meat. — ___.", "Neither do I|Nor do I"],
      ["— I'm hungry. — ___.", "So am I"], ["— I wasn't at the party. — ___.", "Neither was I|Nor was I"],
      ["— I have finished my homework. — ___.", "So have I"], ["— I didn't understand the question. — ___.", "Neither did I|Nor did I"],
      ["— I will be late tonight. — ___.", "So will I"], ["— I haven't been to Paris. — ___.", "Neither have I|Nor have I"],
      ["— I went to bed early yesterday. — ___.", "So did I"]
    ]},
    { type: 'choice', task: 'Выберите правильное начало ответа.', items: [
      ["— My brother plays the guitar. — ___ my sister.", ["So does", "So is", "Neither does"]],
      ["— Kate wasn't at school yesterday. — ___ Tom.", ["Neither was", "So was", "Neither did"]],
      ["— Our parents have bought a new car. — ___ our neighbours.", ["So have", "So did", "So are"]],
      ["— Anna doesn't like horror films. — ___ I.", ["Neither do", "Neither does", "So do"]],
      ["— We are going to the cinema tonight. — ___ Mike and Sue.", ["So are", "So do", "So is"]],
      ["— I won't forget this trip. — ___ I.", ["Neither will", "Neither do", "So will"]]
    ]}
  ]}
]});

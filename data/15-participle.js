BOOK.push({ n: 15, id: 'participle', title: 'Причастие',
intro: 'Причастие настоящего времени (<i>-ing</i>, Participle I) и прошедшего (<i>V3</i>, Participle II): как определение, в причастных оборотах и в паре <i>boring / bored</i>.',
topics: [

{ id: 'part-forms', level: 'B1', title: 'Participle I и Participle II', sub: 'a running boy · a broken cup',
  rule: `
<p>У английского глагола две основные формы причастия. Participle I оканчивается на <i>-ing</i> и описывает того, кто сам совершает действие: <i>a smiling girl</i> — улыбающаяся девочка. Participle II — это третья форма глагола, и она описывает предмет или человека, над которым совершили действие: <i>a lost key</i> — потерянный ключ.</p>
${T(["Форма", "Значение", "Пример", "Перевод"], [
  ["Participle I: <i>V-ing</i>", "активное, процесс", "<i>a <b>sleeping</b> child, the man <b>standing</b> at the door</i>", "спящий ребенок, человек, стоящий у двери"],
  ["Participle II: <i>V3</i>", "пассивное, результат", "<i>a <b>broken</b> cup, a letter <b>written</b> in pencil</i>", "разбитая чашка, письмо, написанное карандашом"],
])}
<h3>-ing или -ed: чувства</h3>
${T(["-ing: что вызывает чувство", "-ed: что чувствует человек"], [
  ["<i>The film was <b>boring</b>.</i> — Фильм был скучный.", "<i>I was <b>bored</b>.</i> — Мне было скучно."],
  ["<i>The news is <b>surprising</b>.</i> — Новость удивительная.", "<i>We were <b>surprised</b>.</i> — Мы были удивлены."],
  ["<i>an <b>interesting</b> book</i> — интересная книга", "<i>I'm <b>interested</b> in books.</i> — Мне интересны книги."],
  ["<i>a <b>tiring</b> day</i> — утомительный день", "<i>a <b>tired</b> man</i> — усталый человек"]
])}
<h3>Где еще встречаются причастия</h3>
<p>Эти формы вам уже знакомы: Participle I есть во временах группы Continuous, а Participle II (<i>V3</i>) — во временах группы Perfect и в пассиве.</p>
${N("Место причастия зависит от того, есть ли при нем другие слова. Причастие без пояснительных слов стоит перед существительным: <i>a <b>crying</b> baby</i>. А если у него есть пояснения, оно идет после: <i>the baby <b>crying</b> in the next room</i>. Подробнее о таких оборотах — в теме 15.2.")}`,
  /* перевод слов в упражнениях: по наведению или касанию (gloss.js); ключи — в нижнем регистре, как слово стоит в тексте */
  gloss: {
    'glove': 'перчатка',
    'match': 'матч', 'park': 'парк', 'results': 'результаты', 'them': 'их, им',
    'house': 'дом', 'film': 'фильм', 'man': 'мужчина', 'book': 'книга', 'teacher': 'учитель', 'i': 'я', 'he': 'он', 'she': 'она',
    'it': 'это; он, она (о предмете)', 'we': 'мы', 'my': 'мой, моя, мое', 'is': 'есть, является (форма to be)',
    'are': 'есть (форма to be)', 'the': 'определенный артикль', 'at': 'в (о времени); у, на (о месте)', 'in': 'в', 'what': 'что, какой',
    'look at': 'посмотри на', 'a': 'неопределенный артикль', 'very': 'очень', 'window': 'окно', 'girl': 'девочка, девушка', 'who': 'кто',
    'two': 'два', 'for': 'для; в течение', 'to': 'в, на (куда); частица перед глаголом', 'eggs': 'яйца', 'kitchen': 'кухня',
    'famous': 'знаменитый', 'look': 'смотреть; смотри', 'by': 'кем, чем (о том, кто делает); у, возле', 'breakfast': 'завтрак', 'sleep': 'спят',
    'during': 'в течение', 'long': 'долго; длинный', 'like': 'нравиться, любить', 'cup': 'чашка', 'need': 'нуждаться', 'trip': 'поездка',
    'were': 'были (форма to be)', 'car': 'машина', 'him': 'его, ему', "i'm": 'я (= I am)', 'bought': 'купил (от buy)', 'children': 'дети',
    'an': 'неопределенный артикль', 'out': 'наружу', 'saw': 'увидел (от see)', 'was': 'был (форма to be)', 'found': 'нашел (от find)',
    'news': 'новости', 'about': 'о; около', 'art': 'искусство', 'became': 'стал (от become)', 'brazil': 'Бразилия', 'covered': 'покрыт',
    'expected': 'ожидали', 'fire': 'пожар; огонь', 'firemen': 'пожарные', 'girls': 'девочки', "i'd": 'я бы (= I would / I had)', "i'd like": 'я бы хотел(а)',
    'instructions': 'инструкции', 'journey': 'путешествие', 'language': 'язык', 'leaves': 'листья', 'lecture': 'лекция',
    'nobody': 'никто', 'path': 'тропинка', 'portuguese': 'португальский', 'put': 'положить', 'put out': 'потушить', 'question': 'вопрос',
    'story': 'история, рассказ', 'trying': 'пытается'
  },
  ex: [
    { type: 'choice', task: 'Выберите -ing или -ed.', items: [
      ["The match was very ___.", ["boring", "bored"]], ["I was ___ during the lecture.", ["bored", "boring"]],
      ["The results were ___. Nobody expected them.", ["surprising", "surprised"]], ["She is ___ in art.", ["interested", "interesting"]],
      ["What an ___ story!", ["exciting", "excited"]], ["The children were ___ about the trip.", ["excited", "exciting"]],
      ["It was a long, ___ journey.", ["tiring", "tired"]], ["I'm ___ — I need to sleep.", ["exhausted", "exhausting"]],
      ["He was ___ by the question.", ["confused", "confusing"]], ["The instructions are very ___.", ["confusing", "confused"]]
    ]},
    { type: 'gap', task: 'Образуйте Participle I или Participle II от глагола в скобках.', items: [
      ["Look at the ___ (dance) girls!", "dancing"], ["I found a ___ (lose) glove in the park.", "lost"],
      ["The man ___ (sit) by the window is my teacher.", "sitting"], ["The book ___ (write) by him became famous.", "written"],
      ["We saw a ___ (burn) house. Firemen were trying to put out the fire.", "burning"], ["She bought a ___ (use) car.", "used"],
      ["The language ___ (speak) in Brazil is Portuguese.", "spoken"], ["Who is the girl ___ (talk) to Tom?", "talking"],
      ["I'd like two ___ (boil) eggs for breakfast.", "boiled"], ["The ___ (fall) leaves covered the path.", "fallen|falling"]
    ]},
    { type: 'translate', task: 'Переведите на английский.', items: [
      ["Экскурсия была утомительной.", "The excursion was tiring.|The trip was tiring.|The tour was tiring."],
      ["Моя сестра интересуется музыкой.", "My sister is interested in music."],
      ["Мальчик, читающий книгу, — мой брат.", "The boy reading a book is my brother.|The boy reading the book is my brother."],
      ["У меня разбитый телефон.", "I have a broken phone.|My phone is broken.|I've got a broken phone."]
    ]},
    { type: 'listen', at: 2, task: 'Прослушайте предложение и соберите его из слов.', items: [
      ["Be careful, there is a broken glass on the floor.", "Осторожно, на полу разбитый стакан."],
      ["Who is the woman sitting next to your mother?", "Кто эта женщина, которая сидит рядом с твоей мамой?"],
      ["The lecture was so boring that half of the students fell asleep.", "Лекция была такой скучной, что половина студентов уснула."]
    ]}
  ]},

{ id: 'part-clauses', level: 'C1', title: 'Причастные обороты', sub: 'Having finished… · Built in 1890…',
  rule: `
<p>Причастный оборот позволяет заменить целое придаточное предложение и сделать текст короче. Например, вместо <i>When she had read the letter, she cried</i> можно сказать <i>Having read the letter, she cried</i> — прочитав письмо, она заплакала. Это похоже на русский деепричастный оборот.</p>
${T(["Форма", "Значение", "Пример"], [
  ["<i>V-ing</i>", "активное, одновременное действие", "<i><b>Walking</b> along the street, I met a friend.</i> — Идя по улице, я встретил друга."],
  ["<i>Having + V3</i>", "активное, предшествующее действие", "<i><b>Having finished</b> the work, they went home.</i> — Закончив работу, они пошли домой."],
  ["<i>V3</i>", "пассивное значение", "<i><b>Built</b> in 1890, the house is now a museum.</i> — Дом, построенный в 1890 году, сейчас музей."],
  ["<i>Not + V-ing</i>", "отрицание", "<i><b>Not knowing</b> what to say, I kept silent.</i> — Не зная, что сказать, я промолчал."],
  ["<i>When / while + V-ing</i>", "уточнение времени", "<i><b>While crossing</b> the street, be careful.</i> — Переходя улицу, будьте осторожны."]
])}
<h3>Как выбрать форму причастия</h3>
<p><i>V-ing</i> — как русское деепричастие «делая», <i>having + V3</i> — как «сделав». А <i>V3</i> берут, когда действие совершили над подлежащим: дом не строил сам себя, его построили.</p>
<p>Слова <i>when</i> и <i>while</i> перед причастием добавляют, чтобы прямо показать время: «когда», «в то время как». Без них оборот тоже понятен, но с ними смысл точнее. Отрицание <i>not</i> всегда ставят перед причастием, а не после него.</p>
<p>Если действие совершили над подлежащим, да еще раньше главного, получается длинная форма <i>having been + V3</i>. Она встречается редко и звучит книжно: <i><b>Having been told</b> the news, she phoned her mother</i> — после того как ей сообщили новость, она позвонила маме.</p>
<h3>Вместо относительного придаточного</h3>
<p>Такие обороты вы уже встречали в теме 15.1: <i>the man standing at the window</i>. Здесь важно другое: оборот заменяет целое придаточное со словами <i>who</i> или <i>which</i>, и предложение становится короче. Подробнее о <i>who / which</i> — в теме 20.1.</p>
${E([
  ["The children <b>playing</b> in the garden are my nephews.", "Дети, играющие в саду, — мои племянники. (= who are playing)"],
  ["Most goods <b>made</b> in this factory are exported.", "Большинство товаров, сделанных на этой фабрике, идет на экспорт. (= which are made)"]
])}
${N("Следите, чтобы у оборота и главного предложения было <b>одно подлежащее</b>. Фраза <i>Walking home, the rain started</i> — ошибка: по-английски получается, что домой шел дождь. Правильно: <i>Walking home, <b>I</b> got caught in the rain</i> — по дороге домой я попал под дождь.")}
<h3>Независимый причастный оборот</h3>
<p>Иногда у причастного оборота есть свое подлежащее — оно стоит прямо перед причастием: <i><b>The weather</b> being fine, we went out</i>. Такой оборот называют независимым. Он встречается в книжной и официальной речи и отделяется запятой. На русский его обычно переводят придаточным с «так как», «когда» или «после того как».</p>
${E([
  ["<b>The weather being</b> fine, we went for a walk.", "Так как погода была хорошая, мы пошли гулять."],
  ["<b>The work having been done</b>, they went home.", "Когда работа была сделана, они пошли домой."],
  ["<b>It being</b> Sunday, the shops were closed.", "Так как было воскресенье, магазины были закрыты."],
  ["She sat by the fire, <b>her eyes closed</b>.", "Она сидела у огня, закрыв глаза."],
  ["<b>Weather permitting</b>, we'll start tomorrow.", "Если погода позволит, мы отправимся завтра."]
])}
<p>Обратите внимание на два последних примера. Полностью оборот <i>her eyes closed</i> звучал бы как <i>her eyes being closed</i>, но <i>being</i> здесь обычно опускают, и остается только третья форма. Такие обороты часто описывают позу или внешний вид человека: <i>She listened, <b>her head bent</b></i> — она слушала, склонив голову. А <i>weather permitting</i> — устойчивое выражение, его запоминают целиком.</p>
${N("Не путайте независимый оборот с ошибкой, о которой сказано выше. Здесь подлежащее оборота названо прямо (<i><b>The weather</b> being fine</i>), поэтому у главного предложения вполне может быть другое подлежащее.")}`,
  /* перевод слов в упражнениях: по наведению или касанию (gloss.js); ключи — в нижнем регистре, как слово стоит в тексте */
  gloss: {
    'museum': 'музей', 'time': 'время', 'too': 'тоже; слишком', 'visit': 'посещают',
    'cap': 'кепка', 'fresh': 'свежий', 'strange': 'странный',
    'always': 'всегда', 'anybody': 'кто-нибудь; никто (в отрицании)', 'bags': 'сумки', 'boy': 'мальчик', 'cakes': 'пирожные', 'called': 'позвонил (от call)', 'city': 'город', 'cousin': 'двоюродный брат (сестра)', 'dishes': 'посуда', 'down': 'вниз', 'felt': 'чувствовал (от feel)', 'film': 'фильм', 'heard': 'слышал (от hear)', 'late': 'поздно', 'lonely': 'одинокий', 'nobody': 'никто', 'noise': 'шум', 'our': 'наш', 'red': 'красный', 'sat': 'сел (от sit)', 'sat down': 'сели', 'shop': 'магазин', 'swimming': 'плавание', 'taxi': 'такси', 'took': 'взял; занял (от take)', 'watch': 'смотреть; часы', 'water': 'вода',
    'man': 'мужчина', 'book': 'книга', 'students': 'студенты', 'uncle': 'дядя', 'i': 'я', 'he': 'он', 'she': 'она',
    'it': 'это; он, она (о предмете)', 'we': 'мы', 'my': 'мой, моя, мое', 'is': 'есть, является (форма to be)',
    'are': 'есть (форма to be)', 'the': 'определенный артикль', 'in': 'в', 'a': 'неопределенный артикль',
    'sun': 'солнце', 'this': 'этот, эта, это', 'door': 'дверь', 'for': 'для; в течение',
    'to': 'в, на (куда); частица перед глаголом', 'there': 'в обороте there is / there are: есть, имеется', 'no': 'нет, никакой', 'cold': 'холодный; холодно',
    'famous': 'знаменитый', 'people': 'люди, человек', 'look': 'смотреть; смотри',
    'by': 'кем, чем (о том, кто делает)', 'bus': 'автобус', 'after': 'после', 'bed': 'кровать', 'sleep': 'спят',
    'from': 'из, от', 'tourists': 'туристы', 'speaks': 'говорит', 'easy': 'легкий', 'not': 'не', 'party': 'вечеринка',
    'tomorrow': 'завтра', 'weather': 'погода', 'were': 'были (форма to be)', 'when': 'когда', 'years': 'годы, лет',
    'english': 'английский', 'up': 'вверх', 'washed up': 'помыли посуду', 'all': 'весь, все', 'him': 'его, ему', 'his': 'его', 'letter': 'письмо',

    'left': 'ушел (от leave); оставшийся; левый', 'was': 'был (форма to be)',
    'went': 'пошел, поехал (от go)', 'while': 'пока, в то время как', 'read': 'читать; прочитал', 'spain': 'Испания',
    'been': 'был (3-я форма be)', 'spanish': 'испанский', 'got': 'стало (got cold — похолодало)',
    'into': 'в (внутрь)', 'get': 'добраться; получить', 'get in': 'войти, попасть внутрь', "we'll": 'мы (= we will)', 'guests': 'гости',
    'as': 'так как', 'news': 'новости', 'theatre': 'театр', 'architect': 'архитектор', 'attracts': 'привлекает',
    'borrow': 'взять взаймы', 'both': 'оба', 'burst': 'расплакаться (burst into tears)',
    "couldn't": 'не мог (= could not)', 'fluently': 'бегло',
    'friends': 'друзья', 'garden': 'сад', 'had': 'имел; вспомогательный глагол', 'had to': 'пришлось', 'if': 'если; ли',
    'locked': 'заперт', 'manager': 'менеджер, руководитель', 'many': 'много', 'money': 'деньги',
    'permits': 'позволяет', 'quietly': 'тихо', 'road': 'дорога',
    'set': 'садиться (о солнце)', 'simple': 'простой', 'start': 'начинать', 'tears': 'слезы',
    'wake': 'будить; просыпаться', 'walked': 'шел пешком, гулял', 'washed': 'вымыл', 'ways': 'способы'
  },
  ex: [
    { type: 'choice', task: 'Выберите правильную форму причастия.', items: [
      ["___ the news, she burst into tears.", ["Having heard", "Heard", "Being heard"]], ["___ by a famous architect, the theatre attracts many tourists.", ["Designed", "Designing", "Having designed"]],
      ["___ anybody in the city, she felt lonely.", ["Not knowing", "Not known", "Knowing not"]], ["___ in the garden, she heard a strange noise.", ["Working", "Worked", "Having been worked"]],
      ["The man ___ to the manager is my uncle.", ["talking", "talked", "having talk"]], ["___ by the news, he couldn't sleep.", ["Shocked", "Shocking", "Having shocking"]],
      ["___ all his money, he had to borrow from friends.", ["Having spent", "Spent", "Being spent"]], ["___ the door, she went to bed.", ["Having locked", "Locked", "Being locked"]]
    ]},
    { type: 'gap', task: 'Поставьте глагол в форму причастия.', items: [
      ["The boy ___ (wear) a red cap is my cousin.", "wearing"], ["The cakes ___ (sell) in this shop are always fresh.", "sold"],
      ["___ (pack) our bags, we called a taxi.", "having packed"], ["Not ___ (want) to wake him, I left quietly.", "wanting"],
      ["___ (write) in simple English, the book is easy to read.", "written"], ["___ (live) in Spain for years, she speaks Spanish fluently.", "having lived"],
      ["While ___ (wait) for the bus, I read the news.", "waiting"], ["The people ___ (invite) to the party were all students.", "invited"]
    ]},
    { type: 'translate', task: 'Переведите на английский, используя причастный оборот.', items: [
      ["Сделав уроки, он пошел гулять.", "Having done his homework, he went for a walk.|Having done his homework, he went out.|Having finished his homework, he went for a walk.|Having finished his homework, he went out."],
      ["Не зная дороги, мы спросили полицейского.", "Not knowing the way, we asked a policeman.|Not knowing the way, we asked a police officer."],
      ["Эти туфли, сделанные в Италии, очень дорогие.", "These shoes, made in Italy, are very expensive.|Made in Italy, these shoes are very expensive."],
      ["Девушка, поющая на сцене, — моя сестра.", "The girl singing on the stage is my sister.|The girl singing on stage is my sister."]
    ]},
    { type: 'gap', task: 'Замените придаточное независимым причастным оборотом (впишите причастие).', items: [
      ["As the water was cold, nobody went swimming. → The water ___ cold, nobody went swimming.", "being"],
      ["When the dishes had been washed, we sat down to watch a film. → The dishes ___ washed, we sat down to watch a film.", "having been"],
      ["As it was late, we took a taxi. → It ___ late, we took a taxi.", "being"],
      ["As there was no bus, we walked. → There ___ no bus, we walked.", "being"],
      ["When the sun had set, it got cold. → The sun ___, it got cold.", "having set"],
      ["If time permits, we'll visit the museum too. → Time ___, we'll visit the museum too.", "permitting"],
      ["As the door was locked, I couldn't get in. → The door ___ locked, I couldn't get in.", "being"],
      ["After the guests had left, we washed up. → The guests ___, we washed up.", "having left"]
    ]},
    { type: 'listen', at: 2, task: 'Прослушайте предложение и соберите его из слов.', items: [
      ["Having missed the last bus, she took a taxi.", "Опоздав на последний автобус, она взяла такси."],
      ["Painted in 1503, the picture is now in the Louvre.", "Написанная в 1503 году, картина сейчас находится в Лувре."],
      ["Sitting on the bench, we watched the boats on the river.", "Сидя на скамейке, мы смотрели на лодки на реке."]
    ]}
  ]}
]});

BOOK.push({ n: 1, id: 'articles', title: 'Артикль',
intro: 'С артикля начинается тренажер: он нужен почти в каждом английском предложении. Сначала разберите, когда нужен <b>a / an</b>, когда <b>the</b>, а когда артикль не ставится; затем — оборот <i>there is</i>, географические названия и устойчивые выражения.',
topics: [

{ id: 'art-a-an', level: 'A1', title: 'Неопределенный артикль a / an', sub: 'a book, an apple',
  rule: `
<p>Неопределенный артикль <i>a / an</i> произошел от числительного <i>one</i> («один»), и это значение у него сохранилось: он указывает на «один, какой-то, любой» предмет. Поэтому он ставится только перед <b>исчисляемым существительным в единственном числе</b>: <i>a book</i>, <i>an apple</i>. Перед словами во множественном числе и неисчисляемыми его не бывает.</p>
${T(["Когда", "Пример"], [
  ["предмет упоминается впервые", "<i>I have <b>a</b> dog.</i> — У меня есть собака."],
  ["один из многих, любой", "<i>Give me <b>a</b> pen, please.</i> — Дай мне ручку, пожалуйста (какую-нибудь)."],
  ["профессия, характеристика (кто это? что это?)", "<i>She is <b>a</b> doctor. It is <b>a</b> cat.</i> — Она врач. Это кошка."],
  ["после <i>what</i> в восклицании", "<i>What <b>a</b> nice day!</i> — Какой хороший день!"],
  ["в выражениях «раз в неделю», «час в день» (a = «один»)", "<i>twice <b>a</b> week, <b>an</b> hour <b>a</b> day</i> — дважды в неделю, час в день"]
])}
<h3>Восклицания с what и выражения «раз в неделю»</h3>
<p>Восклицание «Какой…!» по-английски начинается со слова <i>what</i>. Если за ним идет исчисляемое существительное в единственном числе, артикль <i>a / an</i> обязателен, даже если перед существительным стоит прилагательное: <i>What <b>a</b> big house!</i> — какой большой дом! А вот перед множественным числом и неисчисляемыми словами артикля нет, как и везде: <i>What nice flowers!</i> — какие красивые цветы!, <i>What nice weather!</i> — какая хорошая погода!</p>
<p>В выражениях вроде <i>twice a week</i> артикль сохраняет старое значение «один»: «дважды за одну неделю». По-русски здесь говорят «в» или «за»: <i>three times <b>a</b> day</i> — три раза в день, <i>100 km <b>an</b> hour</i> — 100 км в час.</p>
<h3>a или an</h3>
<p>Какую форму выбрать — <i>a</i> или <i>an</i> — зависит от того, с какого <b>звука</b> начинается следующее слово, а не от того, какая там буква. Перед согласным звуком пишут <i>a</i>, перед гласным — <i>an</i>. Поэтому <i>a university</i> (слово начинается со звука [ju]), но <i>an hour</i> (буква <i>h</i> не читается).</p>
${E([
  ["<b>a</b> book, <b>a</b> university [ju:], <b>a</b> European", "книга, университет, европеец (перед согласным звуком)"],
  ["<b>an</b> apple, <b>an</b> egg, <b>an</b> hour [aʊə], <b>an</b> honest man", "яблоко, яйцо, час, честный человек (перед гласным звуком)"],
  ["<b>a</b> big apple, <b>an</b> old house", "большое яблоко, старый дом (важен звук слова, которое идет сразу за артиклем)"]
])}
${N("Если перед существительным уже есть слово, которое показывает, чей это предмет или какой именно (<i>my, his, this, that</i> или <i>'s</i>), артикль не нужен — его место занято: <i>my book</i>, <i>this cat</i>, <i>Tom's car</i>.")}`,
  ex: [
    { type: 'gap', task: 'Впишите a или an.', items: [
      ["This is ___ apple.", "an"], ["I have ___ brother.", "a"], ["It is ___ old house.", "an"],
      ["She is ___ engineer.", "an"], ["He is ___ good pupil.", "a"], ["The lesson lasts ___ hour.", "an"],
      ["My sister studies at ___ university.", "a"], ["What ___ interesting film!", "an"],
      ["We go swimming twice ___ week.", "a"], ["He is ___ honest man.", "an"], ["I have ___ umbrella in my bag.", "an"],
      ["It's ___ useful book.", "a"]
    ]},
    { type: 'choice', task: 'Нужен ли артикль a / an? Выберите вариант.', items: [
      ["This is ___ pen.", ["a", "an", "—"]], ["This is ___ pen. (моя ручка)", ["my", "a my", "the my"]],
      ["Kate is ___ teacher.", ["a", "an", "—"]], ["Ann has ___ blue eyes.", ["—", "a", "an"]],
      ["They are ___ students.", ["—", "a", "an"]], ["Is that ___ orange?", ["an", "a", "—"]],
      ["Tom has ___ uncle in London.", ["an", "a", "—"]], ["What ___ beautiful dress!", ["a", "an", "—"]]
    ]},
    { type: 'translate', task: 'Переведите на английский.', items: [
      ["Это яблоко.", "This is an apple.|It is an apple.|It's an apple."],
      ["Мой папа — инженер.", "My father is an engineer.|My dad is an engineer."],
      ["У меня есть кошка.", "I have a cat.|I have got a cat."],
      ["Какой интересный фильм!", "What an interesting film!|What an interesting movie!"],
      ["Она студентка.", "She is a student."],
      ["Я пью кофе три раза в день.", "I drink coffee three times a day.|I drink coffee 3 times a day."]
    ]},
    /* на слух: стоит в конце массива, чтобы не сдвигать сохраненный прогресс остальных упражнений; at — место на экране */
    { type: 'listen', at: 2, task: 'Прослушайте предложение и соберите его из слов.', items: [
      ["She is a doctor, and he is an engineer.", "Она врач, а он инженер."],
      ["I eat an apple and a banana every day.", "Каждый день я съедаю яблоко и банан."],
      ["He is an honest man and a good friend.", "Он честный человек и хороший друг."]
    ]}
  ]},

{ id: 'art-the', level: 'A1', title: 'Определенный артикль the', sub: 'the sun, the book on the table',
  rule: `
<p>Определенный артикль <i>the</i> произошел от указательного местоимения <i>that</i> («тот»). Он показывает, что речь идет о конкретном предмете — «том самом», который собеседник уже знает или легко поймет из ситуации. В отличие от <i>a / an</i>, артикль <i>the</i> можно ставить перед любыми существительными: в единственном и во множественном числе, а также перед неисчисляемыми.</p>
<p>Пишется <i>the</i> всегда одинаково, а вот произносится по-разному — в зависимости от первого звука следующего слова. Перед согласным звуком говорят [ðə]: <i><b>the</b> sun, <b>the</b> book</i>. Перед гласным — [ði]: <i><b>the</b> apple, <b>the</b> evening</i>. Как и с <i>a / an</i>, важен звук, а не буква: <i><b>the</b> university</i> [ðə], но <i><b>the</b> hour</i> [ði].</p>
${T(["Когда", "Пример"], [
  ["предмет уже упоминался", "<i>I have a cat. <b>The</b> cat is black.</i> — У меня есть кошка. Кошка черная."],
  ["из ситуации ясно, о чем речь", "<i>Close <b>the</b> door, please. Where is <b>the</b> teacher?</i> — Закрой дверь, пожалуйста. Где учитель?"],
  ["есть уточняющее определение", "<i><b>The</b> girl in the red dress is my sister.</i> — Девочка в красном платье — моя сестра."],
  ["единственный в своем роде", "<i><b>the</b> sun, <b>the</b> moon, <b>the</b> sky, <b>the</b> world</i> — солнце, луна, небо, мир"],
  ["превосходная степень, порядковые числительные", "<i><b>the</b> best, <b>the</b> first, <b>the</b> last</i> — лучший, первый, последний"],
  ["<i>the same, the only, the next, the following</i>", "<i>We live in <b>the</b> same house.</i> — Мы живем в одном и том же доме."],
  ["музыкальные инструменты", "<i>play <b>the</b> piano, <b>the</b> guitar</i> — играть на пианино, на гитаре"],
  ["вся семья по фамилии", "<i><b>the</b> Smiths</i> — Смиты, семья Смит"]
])}
<h3>Уточняющее определение</h3>
<p>Уточняющее определение — это слова после существительного, которые отвечают на вопрос «какой именно?» и выделяют один предмет из всех похожих. Например, в <i><b>the</b> book on the table</i> слова <i>on the table</i> показывают, о какой книге речь: не о любой, а о той, что лежит на столе. Так же работает целое придаточное предложение: <i><b>the</b> man who lives next door</i> — тот мужчина, который живет по соседству. Раз предмет назван точно, нужен <i>the</i>.</p>
<h3>Превосходная степень, порядковые числительные, same и only</h3>
<p>Все эти слова сами указывают на один-единственный предмет, поэтому перед ними ставят <i>the</i>. Превосходная степень прилагательного — это форма со значением «самый»: <i>the best</i> — самый лучший, <i>the tallest</i> — самый высокий. Самый лучший бывает только один, отсюда и <i>the</i>; подробно эти формы разобраны в разделе 8 «Степени сравнения». Порядковые числительные отвечают на вопрос «который по счету?»: <i>the first</i> — первый, <i>the second</i> — второй. Первый в ряду тоже только один. По той же логике <i>the</i> нужен со словами <i>same</i> («тот же самый»), <i>only</i> («единственный»), <i>next</i> («следующий») и <i>following</i> («следующий, нижеприведенный»).</p>
<p>С музыкальными инструментами артикль ставится по традиции, когда говорят об игре на них: <i>She plays <b>the</b> violin</i> — она играет на скрипке. Объяснять тут нечего, это нужно просто запомнить.</p>
${E([
  ["Where are <b>the</b> keys?", "Где ключи? (понятно, о каких ключах речь)"],
  ["Pass me <b>the</b> salt, please.", "Передай соль, пожалуйста."],
  ["It's <b>the</b> best day of my life.", "Это лучший день в моей жизни."]
])}
${N("Сравните два предложения: <i>I want <b>an</b> apple</i> — хочу какое-нибудь яблоко, любое; <i>I want <b>the</b> apple</i> — хочу вот это яблоко, о котором мы говорим. По-русски оба звучат одинаково: «Я хочу яблоко», поэтому то, что по-русски понятно только из контекста, по-английски показывает артикль.")}`,
  ex: [
    { type: 'gap', task: 'Впишите a, an или the.', items: [
      ["I have a dog. ___ dog is very clever.", "the"], ["___ sun is very bright today.", "the"],
      ["She has ___ new dress. ___ dress is red.", ["a", "the"]],
      ["Open ___ window, please. It's hot.", "the"], ["My brother plays ___ violin.", "the"],
      ["___ cakes in this shop are very good.", "the"], ["My aunt has ___ small flat in Moscow.", "a"],
      ["___ book on the shelf is my father's.", "the"], ["Monday is ___ first day of the week.", "the"],
      ["We have ___ new teacher. ___ teacher is very kind.", ["a", "the"]], ["Look at ___ moon!", "the"]
    ]},
    { type: 'choice', task: 'Выберите артикль.', items: [
      ["Pass me ___ sugar, please.", ["the", "a", "—"]], ["Kate has ___ cousin in Moscow.", ["a", "the", "—"]],
      ["___ girl at the door is my cousin.", ["The", "A", "—"]], ["We live on ___ third floor.", ["the", "a", "—"]],
      ["Who is ___ boy at the window?", ["the", "a", "—"]], ["They have ___ son and two daughters.", ["a", "the", "—"]],
      ["___ Petrovs live in this house.", ["The", "A", "—"]], ["He is ___ only child in the family.", ["the", "a", "—"]]
    ]},
    { type: 'text', task: 'Впишите артикли a, an или the в текст.', text: "Every year on my mother's birthday I go to ___ shop to buy ___ present for her. ___ shop is very big. I see ___ beautiful scarf and ___ umbrella. ___ scarf is blue and ___ umbrella is yellow. I buy ___ scarf. My mother loves blue. ___ shop assistant is very kind.",
      answers: ["a|the", "a", "the", "a", "an", "the", "the", "the", "the"] },
    { type: 'translate', task: 'Переведите на английский.', items: [
      ["Земля круглая.", "The Earth is round."],
      ["Закрой дверь, пожалуйста.", "Close the door, please.|Please close the door.|Shut the door, please."],
      ["Моя сестра играет на пианино.", "My sister plays the piano."],
      ["Луна сегодня очень яркая.", "The moon is very bright today.|The moon is very bright tonight.|Today the moon is very bright."],
      ["У меня есть книга. Книга интересная.", "I have a book. The book is interesting.|I have got a book. The book is interesting."]
    ]},
    { type: 'listen', at: 2, task: 'Прослушайте предложение и соберите его из слов.', items: [
      ["I have an apple, and the apple is red.", "У меня есть яблоко, и это яблоко красное."],
      ["The sun is hot, and the sky is blue.", "Солнце печет, и небо голубое."],
      ["My brother plays the guitar in the evening.", "Мой брат играет на гитаре по вечерам."]
    ]}
  ]},

{ id: 'art-there-is', level: 'A1', title: 'Оборот there is / there are', sub: 'There is a book on the table',
  rule: `
<p>Оборот <i>there is / there are</i> нужен, чтобы сообщить, что где-то что-то <b>есть</b> или <b>находится</b>. Русское предложение с таким смыслом удобно переводить с конца: «В саду растет яблоня» → <i>There is an apple tree in the garden</i>. То есть сначала ставим <i>there is</i>, потом — что именно есть, и в конце — где.</p>
${T(["", "Единственное / неисчисляемое", "Множественное"], [
  ["Утверждение", "<i>There <b>is</b> a cat.</i> — Есть кошка.", "<i>There <b>are</b> two cats.</i> — Есть две кошки."],
  ["Отрицание", "<i>There <b>isn't</b> a cat. / There is <b>no</b> milk.</i> — Кошки нет. / Молока нет совсем.", "<i>There <b>aren't any</b> cats. / There are <b>no</b> cats.</i> — Кошек нет. / Никаких кошек нет."],
  ["Вопрос", "<i><b>Is there</b> a bank near here?</i> — Здесь поблизости есть банк?", "<i><b>Are there any</b> eggs?</i> — Есть яйца?"],
  ["Прошедшее", "<i>There <b>was</b> a party.</i> — Была вечеринка.", "<i>There <b>were</b> ten guests.</i> — Было десять гостей."]
])}
<h3>Как строятся отрицание, вопрос и прошедшее время</h3>
<p>В обороте <i>there is</i> работает глагол <i>to be</i>, поэтому все формы строятся так же, как у него (подробно — в разделе 2, тема «Глагол to be»). В отрицании к глаголу добавляется <i>not</i>: <i>is not</i> → <i>isn't</i>, <i>are not</i> → <i>aren't</i>. В вопросе глагол встает перед словом <i>there</i>: <i><b>Is</b> there…?</i>, <i><b>Are</b> there…?</i>. В прошедшем времени <i>is</i> меняется на <i>was</i>, а <i>are</i> — на <i>were</i>.</p>
<p>Отрицание можно построить двумя способами. Первый — с <i>not</i>: <i>There isn't a cat</i>. Второй — со словом <i>no</i> («никакой, ни одного») перед существительным, тогда глагол остается без <i>not</i>: <i>There is <b>no</b> milk</i> — молока нет совсем. Смысл одинаковый, но вариант с <i>no</i> звучит чуть категоричнее. Два отрицания сразу ставить нельзя: <i>There isn't no milk</i> — ошибка.</p>
<p>Слово <i>any</i> («сколько-нибудь, какие-нибудь») ставят в вопросах и отрицаниях перед существительным во множественном числе или неисчисляемым, когда количество неважно: <i>Are there <b>any</b> eggs?</i> — есть (хоть какие-нибудь) яйца? В утверждении вместо него обычно стоит <i>some</i>: <i>There are <b>some</b> eggs</i> — есть несколько яиц. Подробно <i>some</i>, <i>any</i> и <i>no</i> разобраны в разделе 5 «Местоимения».</p>
<h3>there is или it is, where is</h3>
<p>Оборот <i>there is</i> вводит в разговор что-то новое: сообщает, что предмет где-то есть. Если же предмет уже известен и нужно сказать, где он находится, оборот не нужен — предложение начинается с самого предмета или со слова <i>it</i>.</p>
${E([
  ["<b>There is</b> a book on the table.", "На столе (лежит) книга. (сообщаем, что книга есть; после there is обычно a / an)"],
  ["<b>The book is</b> on the table.", "Книга на столе. (книга уже известна, говорим, где она; нужен the)"],
  ["<b>Where is</b> the book? — <b>It is</b> on the table.", "Где книга? — Она на столе. (вопрос о месте известного предмета)"]
])}
${N("Если вы перечисляете несколько предметов, форма глагола зависит от <b>первого</b> из них: <i>There <b>is</b> a sofa and two armchairs</i> (первым идет один диван), но <i>There <b>are</b> two armchairs and a sofa</i>.")}`,
  ex: [
    { type: 'gap', task: 'Впишите is или are.', items: [
      ["There ___ a park near my house.", "is"], ["There ___ two windows in the room.", "are"],
      ["There ___ some milk in the fridge.", "is"], ["___ there any eggs?", "are"],
      ["There ___ a sofa and two armchairs in the living room.", "is"], ["___ there a bank near here?", "is"],
      ["There ___ twenty students in the class.", "are"], ["There ___ no bread in the kitchen.", "is"],
      ["There ___ two chairs and a table in the kitchen.", "are"], ["Why ___ there no chairs in the classroom?", "are"]
    ]},
    { type: 'choice', task: 'There is / there are / there was / there were или it is?', items: [
      ["___ very cold today.", ["It is", "There is", "There are"]], ["___ any shops in your street?", ["Are there", "Is there", "Is it"]],
      ["Where is my bag? — ___ under the table.", ["It is", "There is", "There are"]], ["___ a famous museum in our town.", ["There is", "It is", "There are"]],
      ["___ ten people at the meeting yesterday.", ["There were", "There was", "They were"]], ["___ no lift in this building.", ["There is", "It is", "There are"]],
      ["Look! ___ a bird on the roof.", ["There is", "It is", "There are"]], ["The book? ___ on the shelf.", ["It is", "There is", "There are"]]
    ]},
    { type: 'translate', task: 'Переведите на английский.', items: [
      ["На столе книга.", "There is a book on the table."],
      ["В нашем городе три парка.", "There are three parks in our town.|There are three parks in our city.|Our town has three parks.|Our city has three parks.|There are 3 parks in our town."],
      ["В холодильнике нет молока.", "There is no milk in the fridge.|There isn't any milk in the fridge."],
      ["Здесь есть банкомат?", "Is there a cash machine here?|Is there an ATM here?|Is there a cash machine near here?|Is there an ATM near here?|Is there a cashpoint here?|Is there a cashpoint near here?"],
      ["Вчера в саду были две собаки.", "There were two dogs in the garden yesterday.|Yesterday there were two dogs in the garden.|There were 2 dogs in the garden yesterday."],
      ["Где моя ручка? — Она на столе.", "Where is my pen? — It is on the table.|Where is my pen? — It is on the desk."]
    ]},
    { type: 'listen', at: 2, task: 'Прослушайте предложение и соберите его из слов.', items: [
      ["There is a small park and two cafes near my house.", "Рядом с моим домом есть небольшой парк и два кафе."],
      ["There aren't any eggs, but there is some milk.", "Яиц нет, но есть немного молока."],
      ["There were only five people at the station yesterday.", "Вчера на вокзале было всего пять человек."]
    ]}
  ]},

{ id: 'art-phrases', level: 'A2', title: 'Устойчивые выражения с артиклями', sub: 'at home, go to bed, in the morning',
  rule: `
<p>Во многих частых выражениях артикль ставится не по общим правилам, и их проще запомнить целиком. В одних артикля нет совсем (<i>at home, by bus</i>), в других он обязателен (<i>in the morning, go to the cinema</i>).</p>
${T(["Без артикля", "С артиклем"], [
  ["<i>at home, at work, at school</i>", "<i>in <b>the</b> morning / afternoon / evening</i>"],
  ["<i>go to school, go to work, go to bed</i>", "<i>go to <b>the</b> cinema / theatre / shop</i>"],
  ["<i>at night, at noon, at midnight</i>", "<i>in <b>the</b> country, in <b>the</b> street</i>"],
  ["<i>by bus, by car, by train, on foot</i>", "<i>on <b>the</b> left / right, in <b>the</b> middle</i>"],
  ["<i>have breakfast / lunch / dinner</i>", "<i>at <b>the</b> weekend</i> (брит.; в американском английском — <i>on the weekend</i>)"],
  ["<i>go to hospital / prison / church</i> (по назначению)", "<i>tell <b>the</b> truth</i>"],
  ["<i>from morning till night, day and night</i>", "<i>What's <b>the</b> time?</i> — Который час?"]
])}
${E([
  ["She goes to <b>school</b> by <b>bus</b>.", "Она ездит в школу на автобусе."]
])}
${N("Со словами <i>school, hospital, church</i> артикль зависит от цели. Если человек идет туда по прямому назначению — учиться, лечиться, молиться, — артикля нет: <i>go to school</i>. Если же он просто приходит в здание, например навестить кого-то, нужен <i>the</i>: <i>go to the school to see the teacher</i>.")}`,
  ex: [
    { type: 'text', task: 'Впишите the или «-», если артикль не нужен.', text: "I get up at seven in ___ morning. I have ___ breakfast and go to ___ school by ___ bus. After school I go ___ home on ___ foot. In ___ evening I do my homework, and at ten I go to ___ bed. On Saturdays we often go to ___ cinema, and in summer we go to ___ country.",
      answers: ["the", "-|0", "-|0", "-|0", "-|0", "-|0", "the", "-|0", "the", "the"] },
    { type: 'choice', task: 'Выберите правильный вариант.', items: [
      ["My father is ___ now.", ["at work", "at the work", "at a work"]], ["We usually go there ___.", ["by car", "by the car", "by a car"]],
      ["The bank is ___.", ["on the left", "on left", "in left"]], ["He is in ___ with a broken leg.", ["hospital", "the hospitals", "a hospitals"]],
      ["Let's go to ___ tonight.", ["the theatre", "theatre", "a theatres"]], ["Owls sleep during the day and hunt ___.", ["at night", "at the night", "in night"]],
      ["Always tell ___.", ["the truth", "truth", "a truth"]], ["Excuse me, what's ___?", ["the time", "time", "a time"]]
    ]},
    { type: 'translate', task: 'Переведите на английский.', items: [
      ["Я хожу в школу пешком.", "I go to school on foot.|I walk to school."],
      ["Вечером мы ходим в кино.", "In the evening we go to the cinema.|We go to the cinema in the evening.|In the evening we go to the movies.|We go to the movies in the evening."],
      ["Мой папа сейчас на работе.", "My father is at work now.|My dad is at work now."],
      ["Я ложусь спать в одиннадцать.", "I go to bed at eleven.|I go to bed at 11.|I go to bed at eleven o'clock."],
      ["Она ездит на работу на автобусе.", "She goes to work by bus.|She takes the bus to work.|She goes to work on the bus."]
    ]},
    { type: 'listen', at: 2, task: 'Прослушайте предложение и соберите его из слов.', items: [
      ["In the morning I go to work by bus.", "Утром я езжу на работу на автобусе."],
      ["At the weekend we often go to the cinema.", "По выходным мы часто ходим в кино."],
      ["He usually stays at home and goes to bed at midnight.", "Обычно он сидит дома и ложится спать в полночь."]
    ]}
  ]},

{ id: 'art-geo', level: 'B1', title: 'Артикль с географическими названиями', sub: 'the Volga, Russia, the Alps',
  rule: `
<p>С географическими названиями артикль ставится по традиции, а не по общей логике, поэтому догадаться бывает трудно. Например, у рек и морей артикль есть (<i>the Volga</i>), а у большинства стран и городов — нет (<i>Russia, Moscow</i>). Основные случаи удобнее всего запомнить по таблице.</p>
${T(["С артиклем the", "Без артикля"], [
  ["реки: <i><b>the</b> Volga, <b>the</b> Thames</i>", "континенты: <i>Europe, Asia, Africa</i>"],
  ["моря и океаны: <i><b>the</b> Black Sea, <b>the</b> Pacific</i>", "большинство стран: <i>Russia, France, China</i>"],
  ["горные цепи: <i><b>the</b> Alps, <b>the</b> Urals</i>", "отдельные горы: <i>Elbrus, Everest</i>"],
  ["группы островов: <i><b>the</b> Canaries</i>", "отдельные острова: <i>Sicily, Cuba</i>"],
  ["пустыни: <i><b>the</b> Sahara</i>", "города: <i>Moscow, London</i>"],
  ["страны со словами state, kingdom, republic: <i><b>the</b> USA, <b>the</b> UK</i>", "озера со словом lake: <i>Lake Baikal</i>"],
  ["страны во множественном числе: <i><b>the</b> Netherlands</i>", "улицы, площади, парки: <i>Oxford Street, Red Square, Hyde Park</i>"],
  ["стороны света: <i>in <b>the</b> north</i>", "аэропорты, вокзалы: <i>Heathrow</i>"]
])}
<p>Почему <i>the USA</i> и <i>the UK</i>, если у большинства стран артикля нет? Дело в том, что в полном названии таких стран есть обычное нарицательное слово: <i>the United <b>States</b></i> — Соединенные Штаты, <i>the United <b>Kingdom</b></i> — Соединенное Королевство, <i>the Czech <b>Republic</b></i> — Чешская Республика. Перед таким словом, как и перед любым конкретным предметом, нужен <i>the</i>. То же с названиями во множественном числе: <i>the Netherlands</i> — буквально «Нижние земли».</p>
<h3>Здания и организации</h3>
<p>Названия музеев, театров, отелей, газет и многих организаций обычно употребляются с <i>the</i>, даже если в самом названии нет слов «музей» или «театр».</p>
${E([
  ["<b>the</b> Hermitage, <b>the</b> Bolshoi Theatre, <b>the</b> Ritz", "Эрмитаж, Большой театр, отель «Ритц» (музеи, театры, отели — с the)"],
  ["<b>the</b> Times, <b>the</b> BBC", "газета «Таймс», Би-би-си (газеты и многие организации — с the)"]
])}
${N("Если слова <i>lake</i> в названии озера нет, встречается и <i>the Baikal</i>, и просто <i>Baikal</i>; надежнее всего сказать <i>Lake Baikal</i>.")}`,
  ex: [
    { type: 'gap', task: 'Впишите the или «-».', items: [
      ["___ Volga is a very long river.", "the"], ["She lives in ___ France.", "-|0"],
      ["Ships cross ___ Atlantic Ocean every day.", "the"], ["___ Elbrus is a very high mountain in Russia.", "-|0"],
      ["They ski in ___ Alps every winter.", "the"], ["My uncle works in ___ USA.", "the"],
      ["___ Lake Baikal is very deep.", "-|0"], ["Tourists from all over the world visit ___ Hermitage in St Petersburg.", "the"],
      ["___ Africa is a huge continent.", "-|0"], ["My favourite shop is in ___ Oxford Street.", "-|0"],
      ["___ Sahara is a huge hot desert.", "the"], ["Tulips are very popular in ___ Netherlands.", "the"]
    ]},
    { type: 'choice', task: 'Выберите правильный вариант.', items: [
      ["I want to see ___.", ["the Thames", "Thames", "a Thames"]], ["He comes from ___.", ["Canada", "the Canada", "a Canada"]],
      ["We swim in ___ every summer.", ["the Black Sea", "Black Sea", "a Black Sea"]], ["Climbers from all over the world come to ___.", ["Everest", "the Everest", "an Everest"]],
      ["Do you live in ___?", ["the United Kingdom", "United Kingdom", "an United Kingdom"]], ["Moscow is in ___ of Europe.", ["the east", "east", "an east"]],
      ["Let's meet in ___.", ["Red Square", "the Red Square", "a Red Square"]], ["My parents often go to ___.", ["the Bolshoi Theatre", "Bolshoi Theatre", "a Bolshoi Theatre"]]
    ]},
    { type: 'translate', task: 'Переведите на английский.', items: [
      ["Волга впадает в Каспийское море.", "The Volga flows into the Caspian Sea."],
      ["Байкал — очень глубокое озеро.", "Lake Baikal is a very deep lake.|Baikal is a very deep lake."],
      ["Мой брат живет в США.", "My brother lives in the USA.|My brother lives in the US.|My brother lives in the United States."],
      ["Альпы — красивые горы.", "The Alps are beautiful mountains."],
      ["Эрмитаж находится в Санкт-Петербурге.", "The Hermitage is in St Petersburg.|The Hermitage is in Saint Petersburg.|The Hermitage is situated in St Petersburg.|The Hermitage is located in St Petersburg."]
    ]},
    { type: 'listen', at: 2, task: 'Прослушайте предложение и соберите его из слов.', items: [
      ["Every summer we travel from London to the Netherlands.", "Каждое лето мы ездим из Лондона в Нидерланды."],
      ["The Thames flows through London into the North Sea.", "Темза течет через Лондон в Северное море."],
      ["My parents live in Russia, near Lake Baikal.", "Мои родители живут в России, недалеко от озера Байкал."]
    ]}
  ]},

{ id: 'art-zero', level: 'A2', title: 'Нулевой артикль', sub: 'I like music. Cats are clever.',
  rule: `
<p>Артикль не нужен, когда существительное употреблено в <b>общем смысле</b> — то есть речь не о конкретных предметах, а о предмете или веществе вообще: <i>I like tea</i> (чай вообще), <i>Dogs are clever</i> (собаки в целом).</p>
${T(["Когда артикля нет", "Пример"], [
  ["множественное число в общем смысле", "<i><b>Cats</b> are clever. I like <b>apples</b>.</i> — Кошки умные. Я люблю яблоки."],
  ["неисчисляемые в общем смысле", "<i><b>Water</b> is important. I love <b>music</b>.</i> — Вода важна. Я люблю музыку."],
  ["имена и фамилии", "<i><b>Anna</b>, <b>Mr Smith</b></i>"],
  ["языки, виды спорта, учебные предметы", "<i>speak <b>English</b>, play <b>football</b>, study <b>maths</b></i>"],
  ["дни недели, месяцы", "<i>on <b>Monday</b>, in <b>May</b></i>"],
  ["есть местоимение, <i>'s</i> или числительное", "<i>my book, this pen, Tom's bag, two cats, page 10</i>"]
])}
<h3>Общий смысл и конкретный</h3>
${E([
  ["I like <b>music</b>.", "Я люблю музыку. (музыку вообще)"],
  ["I like <b>the music</b> in this film.", "Мне нравится музыка в этом фильме. (конкретная музыка — нужен the)"],
  ["<b>Dogs</b> are friendly.", "Собаки дружелюбные. (собаки вообще)"],
  ["<b>The dogs</b> next door bark all night.", "Соседские собаки лают всю ночь. (конкретные собаки соседей)"]
])}
${N("Перед неисчисляемым существительным <i>a / an</i> обычно не ставят, но есть исключение — разговорная просьба о порции напитка: <i>Can I have <b>a</b> coffee?</i> Здесь <i>a coffee</i> значит «одну чашку кофе».")}`,
  ex: [
    { type: 'gap', task: 'Впишите артикль a, an, the или «-», если он не нужен.', items: [
      ["I like ___ tea with lemon.", "-|0"], ["___ tea in this cup is cold.", "the"],
      ["We have ___ lunch at one o'clock.", "-|0"], ["She speaks ___ French very well.", "-|0"],
      ["___ elephants are very big animals.", "-|0"], ["___ elephant in this cage is twenty years old.", "the"],
      ["Do you like ___ football?", "-|0"], ["My friend lives in ___ London.", "-|0"],
      ["He drinks ___ milk every morning.", "-|0"], ["Pass me ___ milk, please.", "the"],
      ["We have a test on ___ Friday.", "-|0"], ["Open your books at ___ page 25.", "-|0"]
    ]},
    { type: 'choice', task: 'Выберите правильный вариант.', items: [
      ["___ is good for your health.", ["Sport", "A sport", "The sports"]], ["I want to draw a picture. I need ___ and a pencil.", ["some paper", "a paper", "the papers"]],
      ["___ on the table is yours.", ["The money", "Money", "A money"]], ["___ are my favourite flowers.", ["Roses", "The rose", "A roses"]],
      ["We study ___ at school.", ["history", "the history", "a history"]], ["He has ___ for breakfast.", ["eggs and toast", "an eggs and toast", "the eggs and a toast"]],
      ["In winter ___ covers the fields.", ["snow", "a snow", "snows"]], ["Give me ___ bread, please.", ["some", "a", "an"]]
    ]},
    { type: 'translate', task: 'Переведите на английский.', items: [
      ["Я люблю музыку.", "I love music.|I like music."],
      ["Собаки — умные животные.", "Dogs are clever animals.|Dogs are smart animals.|Dogs are intelligent animals."],
      ["Мы завтракаем в восемь.", "We have breakfast at eight.|We have breakfast at 8.|We have breakfast at eight o'clock."],
      ["Он говорит по-английски.", "He speaks English."],
      ["Вода в стакане холодная.", "The water in the glass is cold."],
      ["Анна живет в Москве.", "Anna lives in Moscow."]
    ]},
    { type: 'listen', at: 2, task: 'Прослушайте предложение и соберите его из слов.', items: [
      ["Cats like milk, but my cat only drinks water.", "Кошки любят молоко, но моя кошка пьет только воду."],
      ["We have lunch at one and play football after school.", "Мы обедаем в час и играем в футбол после уроков."],
      ["I love coffee, but the coffee in this cafe is bad.", "Я люблю кофе, но кофе в этом кафе невкусный."]
    ]}
  ]}
]});

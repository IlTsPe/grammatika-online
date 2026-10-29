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
  ex: [
    { type: 'choice', task: 'Выберите -ing или -ed.', items: [
      ["The film was very ___.", ["boring", "bored"]], ["I was ___ during the lecture.", ["bored", "boring"]],
      ["The news was ___. Nobody expected it.", ["surprising", "surprised"]], ["She is ___ in art.", ["interested", "interesting"]],
      ["What an ___ story!", ["exciting", "excited"]], ["The children were ___ about the trip.", ["excited", "exciting"]],
      ["It was a long, ___ journey.", ["tiring", "tired"]], ["I'm ___ — I need to sleep.", ["exhausted", "exhausting"]],
      ["He was ___ by the question.", ["confused", "confusing"]], ["The instructions are very ___.", ["confusing", "confused"]]
    ]},
    { type: 'gap', task: 'Образуйте Participle I или Participle II от глагола в скобках.', items: [
      ["Look at the ___ (dance) girls!", "dancing"], ["I found a ___ (break) cup in the kitchen.", "broken"],
      ["The man ___ (sit) by the window is my teacher.", "sitting"], ["The book ___ (write) by him became famous.", "written"],
      ["We saw a ___ (burn) house. Firemen were trying to put out the fire.", "burning"], ["She bought a ___ (use) car.", "used"],
      ["The language ___ (speak) in Brazil is Portuguese.", "spoken"], ["Who is the girl ___ (talk) to Tom?", "talking"],
      ["I'd like two ___ (boil) eggs for breakfast.", "boiled"], ["The ___ (fall) leaves covered the path.", "fallen|falling"]
    ]},
    { type: 'translate', task: 'Переведите на английский.', items: [
      ["Экскурсия была утомительной.", "The excursion was tiring.|The trip was tiring.|The tour was tiring."],
      ["Мне интересна история.", "I am interested in history."],
      ["Мальчик, читающий книгу, — мой брат.", "The boy reading a book is my brother.|The boy reading the book is my brother."],
      ["У меня разбитый телефон.", "I have a broken phone.|My phone is broken.|I've got a broken phone."]
    ]},
    { type: 'listen', at: 2, task: 'Прослушайте предложение и соберите его из слов.', items: [
      ["Be careful, there is a broken glass on the floor.", "Осторожно, на полу разбитый стакан."],
      ["Who is the man standing at the window?", "Кто этот мужчина, который стоит у окна?"],
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
<p>Разница между <i>V-ing</i> и <i>having + V3</i> такая же, как между русскими деепричастиями «делая» и «сделав». А <i>V3</i> берут, когда действие совершили над подлежащим: дом не строил сам себя, его построили.</p>
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
  ex: [
    { type: 'choice', task: 'Выберите правильную форму причастия.', items: [
      ["___ the letter, she burst into tears.", ["Having read", "Read", "Being read"]], ["___ in 1890, the building is now a museum.", ["Built", "Building", "Having built"]],
      ["___ what to say, I kept silent.", ["Not knowing", "Not known", "Knowing not"]], ["___ along the street, I met an old friend.", ["Walking", "Walked", "Having been walked"]],
      ["The man ___ to the manager is my uncle.", ["talking", "talked", "having talk"]], ["___ by the news, he couldn't sleep.", ["Shocked", "Shocking", "Having shocking"]],
      ["___ all his money, he had to borrow from friends.", ["Having spent", "Spent", "Being spent"]], ["___ the door, she went to bed.", ["Having locked", "Locked", "Being locked"]]
    ]},
    { type: 'gap', task: 'Поставьте глагол в форму причастия.', items: [
      ["The children ___ (play) in the garden are my nephews.", "playing"], ["Most of the goods ___ (make) in this factory are exported.", "made"],
      ["___ (finish) the work, they went home.", "having finished"], ["Not ___ (want) to wake him, I left quietly.", "wanting"],
      ["___ (write) in simple English, the book is easy to read.", "written"], ["___ (live) in Spain for years, she speaks Spanish fluently.", "having lived"],
      ["While ___ (cross) the road, look both ways.", "crossing"], ["The people ___ (invite) to the party were all students.", "invited"]
    ]},
    { type: 'translate', task: 'Переведите на английский, используя причастный оборот.', items: [
      ["Сделав уроки, он пошел гулять.", "Having done his homework, he went for a walk.|Having done his homework, he went out.|Having finished his homework, he went for a walk.|Having finished his homework, he went out."],
      ["Не зная дороги, мы спросили полицейского.", "Not knowing the way, we asked a policeman.|Not knowing the way, we asked a police officer."],
      ["Сделанные в Италии, эти туфли очень дорогие.", "Made in Italy, these shoes are very expensive."],
      ["Девушка, стоящая у двери, — моя сестра.", "The girl standing at the door is my sister.|The girl standing by the door is my sister."]
    ]},
    { type: 'gap', task: 'Замените придаточное независимым причастным оборотом (впишите причастие).', items: [
      ["As the weather was fine, we went out. → The weather ___ fine, we went out.", "being"],
      ["When the work had been done, they went home. → The work ___ done, they went home.", "having been"],
      ["As it was Sunday, the shops were closed. → It ___ Sunday, the shops were closed.", "being"],
      ["As there was no bus, we walked. → There ___ no bus, we walked.", "being"],
      ["When the sun had set, it got cold. → The sun ___, it got cold.", "having set"],
      ["If the weather permits, we'll start tomorrow. → Weather ___, we'll start tomorrow.", "permitting"],
      ["As the door was locked, I couldn't get in. → The door ___ locked, I couldn't get in.", "being"],
      ["After the guests had left, we washed up. → The guests ___, we washed up.", "having left"]
    ]},
    { type: 'listen', at: 2, task: 'Прослушайте предложение и соберите его из слов.', items: [
      ["Having finished the report, she went home.", "Закончив отчет, она пошла домой."],
      ["Built in 1890, the bridge is still the longest in the city.", "Построенный в 1890 году, мост до сих пор самый длинный в городе."],
      ["Walking along the river, we saw a lot of fishermen.", "Гуляя вдоль реки, мы видели много рыбаков."]
    ]}
  ]}
]});

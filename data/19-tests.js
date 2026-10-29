BOOK.push({ n: 19, id: 'tests', title: 'Контрольные упражнения',
intro: 'Смешанные задания на материал всех разделов. Делайте их после того, как пройдете основные темы: здесь нет подсказки, какое правило нужно.',
topics: [

{ id: 'test-1', level: 'A2', noStudy: true, title: 'Контрольная 1: артикли, местоимения, количество', sub: 'разделы 1, 4–8',
  rule: `
<p>Перед началом пробегитесь по таблице.</p>
${T(["Тема", "Главное правило"], [
  ["Артикли", "<i>a / an</i> — один из многих, впервые; <i>the</i> — известный, единственный; без артикля — имена, приемы пищи, устойчивые выражения (<i>at home, by bus</i>)"],
  ["Множественное число", "<i>-s / -es / -ies / -ves</i> и исключения: <i>men, children, feet, teeth, mice, people</i>"],
  ["some / any / no", "<i>some</i> — утверждение и просьба; <i>any</i> — вопрос и отрицание; <i>no</i> — без not"],
  ["much / many", "<i>many</i> — исчисляемые; <i>much</i> — неисчисляемые; <i>a lot of</i> — с любыми"],
  ["Степени сравнения", "<i>-er / the -est</i> для коротких, <i>more / the most</i> для длинных; <i>good — better — the best</i>"],
  ["Предлоги", "<i>at</i> 5 o'clock, <i>on</i> Monday, <i>in</i> May; <i>in</i> the box, <i>on</i> the table, <i>at</i> the door"]
])}`,
  ex: [
    { type: 'choice', task: 'Выберите правильный вариант.', items: [
      ["My sister is ___ actress.", ["an", "a", "the"]], ["___ Moon goes round the Earth.", ["The", "A", "—"]],
      ["There aren't ___ students in the classroom.", ["any", "some", "no"]], ["How ___ sugar do you take?", ["much", "many", "a lot"]],
      ["This is ___ day of the year.", ["the longest", "the most long", "longest"]], ["We'll meet ___ Friday at 6 pm.", ["on", "in", "at"]],
      ["Two ___ are playing in the yard.", ["children", "childs", "childrens"]], ["Is this umbrella ___?", ["yours", "your", "you"]],
      ["I don't have ___ friends here.", ["many", "much", "some"]], ["Nobody ___ the answer.", ["knows", "know", "don't know"]]
    ]},
    { type: 'text', task: 'Впишите пропущенные слова: артикли (или «-»), предлоги, местоимения, слова количества и степени сравнения.', text: "Last summer my family went ___ the seaside. We stayed ___ a small hotel near ___ beach. Every morning we had ___ breakfast on the terrace. My brother is ___ good swimmer, ___ than me. One day he swam ___ the bay and back! There weren't ___ tourists. The beach was quiet. I bought ___ souvenirs for my friends. It was ___ best holiday of my life.",
      answers: ["to", "in|at", "the", "-|0", "a", "better", "across", "many|any|a lot of", "some|a lot of|lots of|a few", "the"] },
    { type: 'translate', task: 'Переведите на английский.', items: [
      ["В нашем городе есть большой парк.", "There is a big park in our town.|There is a big park in our city.|There's a big park in our town.|Our town has a big park.|Our city has a big park."],
      ["В холодильнике мало молока.", "There isn't much milk in the fridge.|There is little milk in the fridge.|There isn't a lot of milk in the fridge.|There's not much milk in the fridge."],
      ["Это самая интересная книга в библиотеке.", "This is the most interesting book in the library.|It is the most interesting book in the library.|It's the most interesting book in the library."],
      ["Кто-то оставил сумку на скамейке.", "Somebody has left a bag on the bench.|Someone has left a bag on the bench.|Somebody left a bag on the bench.|Someone left a bag on the bench."]
    ]},
    { type: 'listen', at: 2, task: 'Прослушайте предложение и соберите его из слов.', items: [
      ["We need some sugar and three eggs for the cake.", "Для торта нам нужно немного сахара и три яйца."],
      ["My sister's two children go to the same school.", "Двое детей моей сестры ходят в одну школу."],
      ["My brother is taller than me and my father.", "Мой брат выше меня и папы."]
    ]}
  ]},

{ id: 'test-2', level: 'B1', noStudy: true, title: 'Контрольная 2: времена и пассив', sub: 'разделы 2 и 10',
  rule: `
<p>Таблица ниже подскажет, по каким словам в предложении можно узнать нужное время.</p>
${T(["Подсказка в предложении", "Время"], [
  ["<i>every day, usually, often, never</i>", "Present Simple"],
  ["<i>now, at the moment, Look!</i> — сейчас, в данный момент, «Смотри!»", "Present Continuous"],
  ["<i>yesterday, ago, last…, in 2010</i>", "Past Simple"],
  ["<i>at 5 yesterday, when he came, while</i>", "Past Continuous"],
  ["<i>just, already, yet, ever, since, for</i>", "Present Perfect"],
  ["<i>for an hour, since…</i> — действие-процесс длится до сих пор", "Present Perfect Continuous"],
  ["<i>tomorrow, next…, I think, I promise</i>", "will / going to"],
  ["исполнитель неважен, «был сделан»", "пассив: be + V3"]
])}`,
  ex: [
    { type: 'gap', task: 'Поставьте глагол в нужное время и залог.', items: [
      ["My brother is a nurse. He ___ (work) in a hospital.", "works"], ["Look! The children ___ (dance).", "are dancing"],
      ["We ___ (move) to this town in 2018.", "moved"], ["I ___ (just / finish) my homework.", "have just finished"],
      ["While I ___ (cook), the phone rang.", "was cooking"], ["She ___ (learn) English for three years.", "has been learning|has learned|has learnt"],
      ["This bridge ___ (build) in 1950.", "was built"], ["Spanish ___ (speak) in many countries.", "is spoken"],
      ["I ___ (call) you tomorrow.", "will call|am going to call"], ["The road ___ (repair) now.", "is being repaired"],
      ["She ___ (live) here since she was born.", "has lived|has been living"], ["The room ___ (already / clean).", "has already been cleaned"]
    ]},
    { type: 'text', task: 'Поставьте глаголы из скобок в нужное время.', text: "Tom ___ (be) a student. He ___ (study) at Moscow University. Last year he ___ (go) to London for a month. While he ___ (live) there, he ___ (meet) many interesting people. He ___ (like) London very much. Now he ___ (write) a book about his experience. He ___ (already / write) three chapters. Next summer he ___ (go) to New York.",
      answers: ["is", "studies|is studying", "went", "was living|lived", "met", "liked", "is writing", "has already written", "is going|is going to go|will go"] },
    { type: 'translate', task: 'Переведите на английский.', items: [
      ["Я уже прочитал эту книгу.", "I have already read this book.|I have read this book already."],
      ["Когда я вошел, они смотрели телевизор.", "When I came in, they were watching TV.|When I entered, they were watching TV.|They were watching TV when I came in.|When I came in, they were watching television.|When I walked in, they were watching TV."],
      ["Этот дом построили в прошлом году.", "This house was built last year.|The house was built last year."],
      ["Завтра я буду работать дома.", "I will work at home tomorrow.|Tomorrow I will work at home.|I'm going to work at home tomorrow.|I will be working at home tomorrow.|Tomorrow I'm going to work at home.|Tomorrow I will be working at home."]
    ]},
    { type: 'listen', at: 2, task: 'Прослушайте предложение и соберите его из слов.', items: [
      ["The house was being built when we moved to this town.", "Когда мы переехали в этот город, дом еще строился."],
      ["I have been learning French since I was ten.", "Я учу французский с десяти лет."],
      ["We were watching a film when the lights went out.", "Мы смотрели фильм, когда погас свет."]
    ]}
  ]},

{ id: 'test-3', level: 'B2', noStudy: true, title: 'Контрольная 3: модальные, условные, косвенная речь, неличные формы', sub: 'разделы 9, 11–18',
  rule: `
<p>Если в каком-то упражнении получилось больше трех ошибок, стоит вернуться к соответствующему разделу и повторить правило.</p>
${T(["Тема", "Проверьте себя"], [
  ["Косвенная речь", "сдвиг времен, прямой порядок слов в вопросе, <i>told me (not) to</i>"],
  ["Инфинитив / герундий", "<i>enjoy doing, decide to do, stop doing / to do</i>"],
  ["Complex Object", "<i>I want you to come.</i> — Я хочу, чтобы ты пришел. <i>I saw him leave.</i> — Я видел, как он ушел. <i>She made me laugh.</i> — Она меня рассмешила."],
  ["Условные", "0: Present → Present; 1: Present → will; 2: Past → would; 3: Past Perfect → would have V3"],
  ["Модальные", "<i>mustn't</i> — нельзя, <i>don't have to</i> — не обязательно"]
])}`,
  ex: [
    { type: 'choice', task: 'Выберите правильный вариант.', items: [
      ["He asked me when ___.", ["I had arrived", "had I arrived", "did I arrive"]], ["I want ___ me.", ["you to help", "that you help", "you help"]],
      ["If I ___ you, I'd take the job.", ["were", "am", "will be"]], ["I enjoy ___ to music.", ["listening", "to listen", "listen"]],
      ["If you had asked me, I ___ you.", ["would have helped", "would help", "helped"]], ["You ___ use your phone during the exam. It's against the rules.", ["mustn't", "needn't", "don't have to"]],
      ["I wish I ___ more free time.", ["had", "have", "will have"]], ["They made us ___ for an hour.", ["wait", "to wait", "waiting"]],
      ["He seems ___ a lot of money last year.", ["to have earned", "to earn", "earning"]], ["You ___ come if you don't want to.", ["don't have to", "mustn't", "can't"]]
    ]},
    { type: 'gap', task: 'Поставьте глагол в нужную форму.', items: [
      ["He said he ___ (be) busy the next day.", "would be"], ["I heard her ___ (sing) in the next room.", "singing|sing"],
      ["If the weather ___ (be) bad on Sunday, we'll stay at home.", "is"], ["I wish I ___ (not / eat) so much yesterday.", "had not eaten"],
      ["Stop ___ (talk), please!", "talking"], ["She seems ___ (know) the answer.", "to know"],
      ["I'm not used to ___ (get) up so early.", "getting"], ["The film was ___ (bore), so we left.", "boring"]
    ]},
    { type: 'translate', task: 'Переведите на английский.', items: [
      ["Она спросила, откуда я приехал.", "She asked where I had come from.|She asked me where I had come from.|She asked where I came from.|She asked me where I came from."],
      ["Я хочу, чтобы ты был счастлив.", "I want you to be happy."],
      ["Если бы я тогда знал, я бы пришел.", "If I had known, I would have come.|If I'd known, I'd have come."],
      ["Жаль, что я не умею рисовать.", "I wish I could draw.|I wish I could paint."],
      ["Она, кажется, уже ушла.", "She seems to have left already.|She seems to have already left.|She seems to have gone already.|She seems to have already gone."]
    ]},
    { type: 'listen', at: 2, task: 'Прослушайте предложение и соберите его из слов.', items: [
      ["She asked me if I would mind waiting a few minutes.", "Она спросила, не против ли я подождать несколько минут."],
      ["If we had taken the map, we wouldn't have got lost.", "Если бы мы взяли карту, мы бы не заблудились."],
      ["I heard him say that he was too tired to work.", "Я слышал, как он сказал, что слишком устал, чтобы работать."]
    ]}
  ]}
]});

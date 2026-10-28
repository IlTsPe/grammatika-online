BOOK.push({ n: 7, id: 'quantifiers', title: 'Much, many, (a) little, (a) few',
intro: 'Слова количества выбираются по тому, исчисляемое ли существительное.',
topics: [

{ id: 'q-much-many', level: 'A2', title: 'Much, many, a lot of', sub: 'How much money? How many people?',
  rule: `
<p>И <i>many</i>, и <i>much</i> значат «много», а различаются тем, с какими существительными сочетаются. <i>Many</i> ставят перед исчисляемыми во множественном числе — тем, что можно посчитать: <i>many books, many people</i>. <i>Much</i> — перед неисчисляемыми: <i>much time, much money</i>.</p>
${T(["Слово", "С чем", "Где чаще", "Пример"], [
  ["<i>many</i>", "исчисляемые", "вопросы, отрицания", "<i>How <b>many</b> books? I don't have <b>many</b> friends.</i> — Сколько книг? У меня не так много друзей."],
  ["<i>much</i>", "неисчисляемые", "вопросы, отрицания", "<i>How <b>much</b> money? There isn't <b>much</b> time.</i> — Сколько денег? Времени не так много."],
  ["<i>a lot of / lots of</i>", "любые", "утверждения", "<i>She has <b>a lot of</b> friends. We have <b>lots of</b> time.</i> — У нее много друзей. У нас полно времени."],
])}
${E([
  ["<b>How many</b> apples do you need?", "Сколько яблок тебе нужно? (считаем штуки)"],
  ["I don't drink <b>much</b> coffee.", "Я пью не так много кофе. (кофе не считают штуками)"]
])}
<h3>Much как наречие</h3>
<p>Слово <i>much</i> может относиться не к существительному, а к глаголу. Тогда оно значит «очень, сильно» и обычно стоит в выражении <i>very much</i> в конце предложения: <i>I like it very much</i> — мне это очень нравится. Поставить <i>very much</i> между глаголом и дополнением нельзя: <i>I like very much it</i> — ошибка. Кроме того, <i>much</i> усиливает сравнительную степень: <i>much better</i> — гораздо лучше. Это разобрано в разделе 8.</p>
${N("В обычных утвердительных предложениях <i>much</i> звучит слишком книжно. Вместо <i>I have much time</i> лучше сказать <i>I have <b>a lot of</b> time</i> — это подходит к любым существительным. А если существительного после нет, говорят просто <i>a lot</i>: <i>She reads <b>a lot</b></i> (она много читает).")}`,
  ex: [
    { type: 'gap', task: 'Впишите much или many.', items: [
      ["How ___ money did you spend at the market?", "much"], ["How ___ people were there at the station?", "many"],
      ["There wasn't ___ milk in the fridge, so I went to the shop.", "much"], ["When we moved to Kazan, I didn't have ___ friends there.", "many"],
      ["Did you buy ___ apples?", "many"], ["We haven't got ___ time — the train leaves in ten minutes.", "much"],
      ["There aren't ___ cars in the street today because everybody is on holiday.", "many"], ["Is there ___ salt in the soup?", "much"],
      ["How ___ is this dress?", "much"], ["Thank you very ___!", "much"],
      ["How ___ times have you been to London?", "many"], ["She didn't drink ___ coffee at the party.", "much"]
    ]},
    { type: 'choice', task: 'Выберите правильный вариант.', items: [
      ["She has made ___ friends at her new school.", ["a lot of", "much", "a lot"]], ["How ___ homework did you get?", ["much", "many"]],
      ["There weren't ___ people at the party.", ["many", "much"]], ["I'm not going to eat ___ meat this week.", ["much", "many"]],
      ["How ___ languages have you learnt?", ["many", "much"]], ["We had ___ fun yesterday.", ["a lot of", "many", "a lot"]],
      ["How ___ are these shoes?", ["much", "many"]], ["He hasn't got ___ experience, but he wants to learn.", ["much", "many"]]
    ]},
    { type: 'translate', task: 'Переведите на английский.', items: [
      ["Сколько книг ты прочитал в этом году?", "How many books have you read this year?|How many books did you read this year?"],
      ["Сколько стоит этот телефон?", "How much is this phone?|How much does this phone cost?"],
      ["У нас не так много времени.", "We don't have much time.|We haven't got much time."],
      ["В школе у нее было много друзей.", "She had a lot of friends at school.|She had many friends at school.|She had lots of friends at school.|At school she had a lot of friends.|At school she had many friends.|At school she had lots of friends."],
      ["Ты ешь много сахара?", "Do you eat much sugar?|Do you eat a lot of sugar?|Do you eat lots of sugar?"]
    ]},
    { type: 'listen', at: 2, task: 'Прослушайте предложение и соберите его из слов.', items: [
      ["How many people came to the party last night?", "Сколько человек пришло на вечеринку вчера вечером?"],
      ["We haven't got much time. Let's hurry.", "У нас мало времени. Давай поторопимся."],
      ["We met a lot of interesting people on our trip.", "Во время поездки мы познакомились со многими интересными людьми."]
    ]}
  ]},

{ id: 'q-few-little', level: 'B2', title: 'A few, few, a little, little', sub: 'a few friends, little time',
  rule: `
<p>Эти четыре слова переводятся как «немного» или «мало». Выбор между ними зависит от двух вещей: исчисляемое ли существительное и хватает ли количества.</p>
${T(["", "Исчисляемые", "Неисчисляемые"], [
  ["немного, несколько (достаточно)", "<i><b>a few</b> friends</i>", "<i><b>a little</b> money</i>"],
  ["мало (недостаточно)", "<i><b>few</b> friends</i>", "<i><b>little</b> money</i>"]
])}
${E([
  ["I have <b>a few</b> friends here, so I'm not lonely.", "У меня здесь есть несколько друзей, так что мне не одиноко. (есть несколько — хорошо)"],
  ["I have <b>few</b> friends here, and I feel lonely.", "У меня здесь мало друзей, и мне одиноко. (мало — плохо)"],
  ["There's <b>a little</b> time left. Let's have coffee.", "Еще осталось немного времени. Давай выпьем кофе. (немного есть)"],
  ["There's <b>little</b> time left. Hurry up!", "Времени осталось мало. Поторопись! (почти нет)"]
])}
<p>В последних двух примерах встречается оборот <i>there's … left</i> — «осталось»: <i>There's some milk left</i> — молока еще немного осталось. А <i>quite a few</i>, хотя в нем есть <i>a few</i>, значит «довольно много»: <i>quite a few people</i> — довольно много людей.</p>
${M("Удобно запомнить:", ["very few", "very little", "quite a few (довольно много)", "only a few", "only a little"])}
${N("Не путайте два разных <i>little</i>. Перед исчисляемым существительным это прилагательное «маленький»: <i>a little girl</i> — маленькая девочка. А перед неисчисляемым — «немного»: <i>a little sugar</i> — немного сахара.")}`,
  ex: [
    { type: 'gap', task: 'Впишите a few, few, a little или little.', items: [
      ["I've got ___ apples. Do you want one?", "a few"], ["Hurry up! We have very ___ time.", "little"],
      ["I added ___ salt to the soup, and now it tastes good.", "a little"], ["He has moved to a new city, and he has ___ friends there.", "few"],
      ["My brother lent me ___ money last week.", "a little"], ["There were ___ people at the concert; the hall was almost empty.", "few"],
      ["I learnt ___ French at school — enough to order food.", "a little"], ["We waited ___ minutes, and then the bus came.", "a few"],
      ["She drinks very ___ water. It's bad for her.", "little"], ["Only ___ students passed the exam. Most failed.", "a few"],
      ["Let's rest ___. We've been walking for hours.", "a little"], ["I have ___ questions about yesterday's lesson.", "a few"]
    ]},
    { type: 'choice', task: 'Выберите правильный вариант.', items: [
      ["There is ___ milk left, enough for one cup.", ["a little", "a few", "few"]], ["The town has ___ hotels, so book early.", ["few", "little", "a little"]],
      ["I'm going to need ___ eggs for the cake.", ["a few", "a little", "little"]], ["He made very ___ mistakes. Well done!", ["few", "little", "a little"]],
      ["We have ___ hope of winning. It's almost impossible.", ["little", "a little", "few"]], ["Quite ___ people came — almost a hundred!", ["a few", "few", "a little"]]
    ]},
    { type: 'translate', task: 'Переведите на английский.', items: [
      ["У меня осталось немного денег.", "I have a little money left.|I have got a little money left."],
      ["У него мало друзей.", "He has few friends.|He has very few friends.|He has got few friends.|He doesn't have many friends.|He hasn't got many friends.|He has got very few friends."],
      ["Мы подождали несколько минут.", "We waited a few minutes.|We waited for a few minutes."],
      ["У нас мало времени.", "We have little time.|We have very little time.|We don't have much time.|We haven't got much time."],
      ["Я немного говорю по-немецки.", "I speak a little German.|I speak German a little."]
    ]},
    { type: 'listen', at: 2, task: 'Прослушайте предложение и соберите его из слов.', items: [
      ["I have a few good friends in this town.", "У меня в этом городе есть несколько хороших друзей."],
      ["There is very little time left before the train.", "До поезда осталось совсем мало времени."],
      ["Few people know about this little shop.", "Мало кто знает об этом маленьком магазине."]
    ]}
  ]}
]});

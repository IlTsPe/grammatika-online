BOOK.push({ n: 7, id: 'quantifiers', title: 'Much, many, (a) little, (a) few',
intro: 'Выбор слов, обозначающих количество, зависит от того, является ли существительное исчисляемым или неисчисляемым.',
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
${N("В обычных утвердительных предложениях <i>much</i> звучит слишком книжно. Вместо <i>I have much time</i> лучше сказать <i>I have <b>a lot of</b> time</i> — это подходит к любым существительным. А если после <i>a lot of</i> нет существительного, говорят просто <i>a lot</i>: <i>She reads <b>a lot</b></i> — она много читает.")}`,
  /* перевод слов в упражнениях: по наведению или касанию (gloss.js); ключи — в нижнем регистре, как слово стоит в тексте */
  gloss: {
    'cake': 'торт',
    'week': 'неделя', 'dress': 'платье', 'has': 'имеет; вспомогательный глагол', 'i': 'я', 'he': 'он', 'she': 'она', 'we': 'мы',
    'is': 'есть, является (форма to be)', 'are': 'есть (форма to be)', 'have': 'иметь; вспомогательный глагол', 'the': 'определенный артикль',
    'at': 'в (о времени); у, на (о месте)', 'in': 'в', 'london': 'Лондон', 'she has': 'у нее есть', 'very': 'очень', 'today': 'сегодня',
    'new': 'новый', 'this': 'этот, эта, это', 'shop': 'магазин', 'on': 'на; в (о днях)', 'buy': 'купить', 'her': 'ее, ей',
    'to': 'в, на (куда); частица перед глаголом', 'there': 'там, туда; в обороте there is / there are: есть, имеется', 'milk': 'молоко', 'fridge': 'холодильник', 'street': 'улица',
    'ten': 'десять', 'people': 'люди, человек', 'yesterday': 'вчера', 'school': 'школа', 'homework': 'домашнее задание', 'you': 'ты, вы',
    'how': 'как', 'kazan': 'Казань', 'not': 'не', 'party': 'вечеринка', 'were': 'были (форма to be)', 'when': 'когда', 'but': 'но',
    'coffee': 'кофе', 'meat': 'мясо', 'time': 'время', 'train': 'поезд', 'did': 'вспомогательный глагол прошедшего времени',
    'holiday': 'отпуск, каникулы', "i'm": 'я (= I am)', 'made': 'сделал; завел (друзей)', 'went': 'пошел, поехал (от go)',
    "aren't": 'не (= are not)', "hasn't": 'не (= has not)', "haven't": 'не (= have not)', 'times': 'раз', 'because': 'потому что',
    'been': 'был (3-я форма be)', "didn't": 'не (= did not)', 'got': 'have got — иметь, есть (у кого-то)', 'so': 'поэтому; так',
    'station': 'вокзал, станция', 'get': 'добраться; получить', 'going to': 'собираюсь', 'cars': 'машины', 'minutes': 'минуты',
    'thank you': 'спасибо', 'apples': 'яблоки', 'drink': 'пить', 'eat': 'есть (принимать пищу)', 'everybody': 'все', 'experience': 'опыт',
    'friends': 'друзья', 'fun': 'веселье', 'had': 'имел; вспомогательный глагол', 'languages': 'языки', 'learn': 'учить',
    'learnt': 'выучил', 'leaves': 'уходит, уезжает; листья', 'market': 'рынок', 'money': 'деньги', 'moved': 'переехал', 'salt': 'соль',
    'shoes': 'туфли, обувь', 'soup': 'суп', 'spend': 'тратить; проводить', 'thank': 'благодарить', 'these': 'эти', 'wants': 'хочет',
    "wasn't": 'не был (= was not)', "weren't": 'не были (= were not)'
  },
  ex: [
    { type: 'gap', task: 'Впишите much или many.', items: [
      ["How ___ money did you spend at the market?", "much"], ["How ___ people were there at the station?", "many"],
      ["There wasn't ___ milk in the fridge, so I went to the shop.", "much"], ["When we moved to Kazan, I didn't have ___ friends there.", "many"],
      ["Did you buy ___ apples?", "many"], ["We haven't got ___ time — the train leaves in ten minutes.", "much"],
      ["There aren't ___ cars in the street today because everybody is on holiday.", "many"], ["Is there ___ salt in the soup?", "much"],
      ["How ___ is this dress?", "much"], ["Thank you very ___!", "much"],
      ["How ___ times have you been to London?", "many"], ["She didn't eat ___ cake at the party.", "much"]
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
      ["У меня не так много денег.", "I don't have much money.|I haven't got much money."],
      ["В школе у нее было много друзей.", "She had a lot of friends at school.|She had many friends at school.|She had lots of friends at school.|At school she had a lot of friends.|At school she had many friends.|At school she had lots of friends."],
      ["Ты ешь много сахара?", "Do you eat much sugar?|Do you eat a lot of sugar?|Do you eat lots of sugar?"]
    ]},
    { type: 'listen', at: 2, task: 'Прослушайте предложение и соберите его из слов.', items: [
      ["How many people came to the party last night?", "Сколько человек пришло на вечеринку вчера вечером?"],
      ["There isn't much bread. Let's buy some.", "Хлеба не так много. Давай купим еще."],
      ["We met a lot of interesting people on our trip.", "Во время поездки мы познакомились со многими интересными людьми."]
    ]}
  ]},

{ id: 'q-few-little', level: 'A2', title: 'A few, few, a little, little', sub: 'a few friends, little time',
  rule: `
<p>Эти четыре слова переводятся как «немного» или «мало». Выбор между ними зависит от двух вещей: исчисляемое ли существительное и хватает ли количества.</p>
${T(["", "Исчисляемые", "Неисчисляемые"], [
  ["немного, несколько (есть, и это хорошо)", "<i><b>a few</b> friends</i>", "<i><b>a little</b> money</i>"],
  ["мало (недостаточно)", "<i><b>few</b> friends</i>", "<i><b>little</b> money</i>"]
])}
${E([
  ["I have <b>a few</b> friends here, so I'm not lonely.", "У меня здесь есть несколько друзей, так что мне не одиноко. (есть несколько — хорошо)"],
  ["I have <b>few</b> friends here, and I feel lonely.", "У меня здесь мало друзей, и мне одиноко. (мало — плохо)"],
  ["There's <b>a little</b> time left. Let's have coffee.", "Еще осталось немного времени. Давай выпьем кофе. (немного есть)"],
  ["There's <b>little</b> time left. Hurry up!", "Времени осталось мало. Поторопись! (почти нет)"]
])}
<p>В последних двух примерах встречается оборот <i>there's … left</i> — осталось: <i>There's some milk left</i> — молока еще немного осталось. А <i>quite a few</i>, хотя в нем есть <i>a few</i>, значит «довольно много»: <i>quite a few people</i> — довольно много людей.</p>
${M("Удобно запомнить:", ["very few — очень мало (штук)", "very little — очень мало (вещества)", "quite a few — довольно много", "only a few — всего несколько", "only a little — совсем немного"])}
${N("Не путайте два разных <i>little</i>. Перед исчисляемым существительным это прилагательное «маленький», перед неисчисляемым — «немного»: <i>a little girl</i> — маленькая девочка, <i>a little sugar</i> — немного сахара.")}`,
  /* перевод слов в упражнениях: по наведению или касанию (gloss.js); ключи — в нижнем регистре, как слово стоит в тексте */
  gloss: {
    'ask': 'спросить, попросить', 'can': 'мочь, уметь', 'know': 'знать', 'museum': 'музей', 'them': 'их, им', 'tourists': 'туристы',
    'brother': 'брат', 'good': 'хороший', 'lesson': 'урок', 'week': 'неделя', 'book': 'книга', 'students': 'студенты',
    "it's": 'это (= it is)', 'i have': 'у меня есть', 'has': 'имеет; вспомогательный глагол', 'i': 'я', 'he': 'он', 'she': 'она',
    'it': 'это; он, она (о предмете)', 'we': 'мы', 'my': 'мой, моя, мое', 'is': 'есть, является (форма to be)',
    'are': 'есть (форма to be)', 'have': 'иметь; есть (о еде)', 'the': 'определенный артикль', 'at': 'в (о времени); у, на (о месте)',
    'we have': 'у нас есть', 'a': 'неопределенный артикль', 'very': 'очень', 'new': 'новый', 'and': 'и', 'only': 'только',
    'for': 'для; в течение', 'her': 'ее, ей', 'to': 'в, на (куда); частица перед глаголом', 'there': 'там, туда; в обороте there is / there are: есть, имеется', 'milk': 'молоко',
    'eggs': 'яйца', 'town': 'город', 'people': 'люди, человек', "let's": 'давай(те)', 'school': 'школа', 'bus': 'автобус',
    'after': 'после', 'often': 'часто', 'now': 'сейчас', 'me': 'меня, мне', 'do': 'делать; вспомогательный глагол',
    'long': 'долго; длинный', 'want': 'хотеть', 'you': 'ты, вы', 'cup': 'чашка', 'french': 'французский', 'well': 'хорошо', 'well done': 'молодец',
    'drinks': 'пьет', 'need': 'нуждаться', 'last week': 'на прошлой неделе', 'last': 'прошлый', 'were': 'были (форма to be)',
    'time': 'время', 'up': 'вверх (hurry up — поторопись)', 'water': 'вода', 'cake': 'торт', "i'm": 'я (= I am)', 'one': 'один', 'thirsty': 'хочется пить',
    'made': 'сделали; приняли (решение)', 'food': 'еда', 'hurry': 'спешить', 'left': 'ушел (от leave); оставшийся; левый',
    'was': 'был (форма to be)', 'done': 'сделал (3-я форма do)', 'early': 'рано', 'came': 'пришел (от come)', 'got': 'have got — иметь, есть (у кого-то)',
    'so': 'поэтому; так', 'going to': 'собираюсь', 'exam': 'экзамен', 'minutes': 'минуты', 'then': 'потом, тогда', 'about': 'о; около',
    'added': 'добавил', 'almost': 'почти', 'apples': 'яблоки', 'bad': 'плохой', 'city': 'город', 'concert': 'концерт', 'empty': 'пустой',
    'enough': 'достаточно', 'failed': 'провалил', 'feels': 'чувствует', 'friends': 'друзья', 'hall': 'зал; прихожая', 'hope': 'надеяться',
    'hotels': 'гостиницы', 'hundred': 'сто', "i've": 'я (= I have)', 'impossible': 'невозможный', 'learnt': 'выучил',
    'lent': 'одолжил (от lend)', 'lonely': 'одинокий', 'mistakes': 'ошибки', 'money': 'деньги', 'most': 'большинство; самый',
    'moved': 'переехал', 'order': 'заказать', 'passed': 'сдал; передал', 'questions': 'вопросы', 'quite': 'довольно', 'salt': 'соль',
    'soup': 'суп', 'tastes': 'на вкус', 'waited': 'ждал', 'walk': 'гулять; прогулка', "yesterday's": 'вчерашний'
  },
  ex: [
    { type: 'gap', task: 'Впишите a few, few, a little или little.', items: [
      ["I've got ___ apples. Do you want one?", "a few"], ["Hurry up! We have very ___ time.", "little"],
      ["I added ___ salt to the soup, and now it tastes good.", "a little"], ["The museum is new, and ___ tourists know about it, so it is often empty.", "few"],
      ["My brother lent me ___ money last week.", "a little"], ["There were ___ people at the concert; the hall was almost empty.", "few"],
      ["I learnt ___ French at school — enough to order food.", "a little"], ["We waited ___ minutes, and then the bus came.", "a few"],
      ["She drinks very ___ water. It's bad for her.", "little"], ["Only ___ students passed the exam. Most failed.", "a few"],
      ["Let's have ___ water. We are very thirsty after the long walk.", "a little"], ["I have ___ questions about yesterday's lesson. Can I ask them now?", "a few"]
    ]},
    { type: 'choice', task: 'Выберите правильный вариант.', items: [
      ["There is ___ milk left, enough for one cup.", ["a little", "a few", "few"]], ["The town has ___ hotels, so book early.", ["few", "little", "a little"]],
      ["I'm going to need ___ eggs for the cake.", ["a few", "a little", "little"]], ["He made very ___ mistakes. Well done!", ["few", "little", "a little"]],
      ["We have ___ hope now. It's almost impossible.", ["little", "a little", "few"]], ["Quite ___ people came — almost a hundred!", ["a few", "few", "a little"]]
    ]},
    { type: 'translate', task: 'Переведите на английский.', items: [
      ["У меня осталось немного денег.", "I have a little money left.|I have got a little money left.|I have some money left.|I have got some money left."],
      ["У него мало друзей.", "He has few friends.|He has very few friends.|He has got few friends.|He doesn't have many friends.|He hasn't got many friends.|He has got very few friends."],
      ["Я купил несколько открыток.", "I bought a few postcards."],
      ["У нас мало времени.", "We have little time.|We have very little time.|We don't have much time.|We haven't got much time."],
      ["Я немного говорю по-немецки.", "I speak a little German.|I speak German a little."]
    ]},
    { type: 'listen', at: 2, task: 'Прослушайте предложение и соберите его из слов.', items: [
      ["I have a few old photos of my grandparents.", "У меня есть несколько старых фотографий бабушки и дедушки."],
      ["There is very little milk left in the fridge.", "В холодильнике осталось совсем мало молока."],
      ["Few people know about this little shop.", "Мало кто знает об этом маленьком магазине."]
    ]}
  ]}
]});

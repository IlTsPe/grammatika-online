BOOK.push({ n: 4, id: 'pronouns', title: 'Местоимения some, any, no, every и их производные',
intro: 'Главное в разделе — неопределенные местоимения <i>some, any, no, every</i> и их производные. Начинается он с опорной темы о личных, притяжательных и возвратных местоимениях: без нее упражнения раздела даются тяжелее.',
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
  ["<b>She</b> loves <b>him</b>, and <b>he</b> loves <b>her</b>.", "Подлежащее и дополнение."],
  ["This is <b>my</b> bag. The bag is <b>mine</b>.", "Перед существительным и без него."],
  ["He cut <b>himself</b>. Help <b>yourself</b>!", "Возвратное — действие на себя."],
  ["I did it <b>myself</b>.", "Усилительное — «сам»: я сделал это сам."]
])}
${N("Отдельного слова «свой» в английском нет — его переводят тем местоимением, которое подходит по лицу: «Я взял свою книгу» — <i>I took <b>my</b> book</i>, «Она взяла свою книгу» — <i>She took <b>her</b> book</i>. А в коротких ответах в разговоре используют форму <i>me</i>, а не <i>I</i>: <i>— Who's there? — <b>Me</b>.</i>")}`,
  ex: [
    { type: 'gap', task: 'Замените слово в скобках нужной формой местоимения.', items: [
      ["Yesterday my brother helped ___ (I) with my homework.", "me"], ["This is Anna. ___ (she) brothers were at our school.", "her"],
      ["We bought ___ (we) new flat last year.", "our"], ["The dog slept in ___ (it) bed all day.", "its"],
      ["This bag isn't mine, it's ___ (she).", "hers"], ["Is this pen ___ (you)? I found it under the desk.", "yours"],
      ["I met ___ (they) at Tom's party.", "them"], ["He hurt ___ (he) in the garden.", "himself"],
      ["We painted the room ___ (we).", "ourselves"], ["I called ___ (he) yesterday, but he didn't answer.", "him"],
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
      ["Я сделал это сам.", "I did it myself."],
      ["Они взяли свои книги.", "They took their books."],
      ["Мы видели их детей в парке.", "We saw their children in the park.|We saw their kids in the park."]
    ]},
    { type: 'listen', at: 2, task: 'Прослушайте предложение и соберите его из слов.', items: [
      ["The red bag is hers, and the blue bag is mine.", "Красная сумка ее, а синяя моя."],
      ["We painted our kitchen ourselves last summer.", "Прошлым летом мы сами покрасили свою кухню."],
      ["Is this your umbrella or is it mine?", "Это твой зонт или мой?"]
    ]}
  ]},

{ id: 'pron-some-any', level: 'A1', title: 'Some, any, no', sub: 'some milk, any questions, no time',
  rule: `
<p>Слова <i>some</i>, <i>any</i> и <i>no</i> говорят о количестве, когда точное число неважно или неизвестно: «немного», «сколько-нибудь», «нисколько». Их ставят перед неисчисляемыми существительными (<i>some milk</i>) и перед исчисляемыми во множественном числе (<i>some apples</i>). Главное различие — в типе предложения: утверждение, вопрос или отрицание.</p>
${T(["Слово", "Где", "Пример"], [
  ["<i>some</i>", "утвердительные предложения", "<i>There is <b>some</b> milk. I have <b>some</b> friends.</i>"],
  ["<i>some</i>", "вопросы-просьбы и предложения", "<i>Would you like <b>some</b> tea? Can I have <b>some</b> water?</i>"],
  ["<i>any</i>", "вопросы", "<i>Have you got <b>any</b> brothers?</i>"],
  ["<i>any</i>", "отрицания (с not)", "<i>I haven't got <b>any</b> money.</i>"],
  ["<i>any</i>", "утверждение: «любой»", "<i>Take <b>any</b> book you like.</i>"],
  ["<i>no</i>", "отрицание без not", "<i>I have <b>no</b> money. = I haven't got any money.</i>"]
])}
${N("В русском можно сказать «У меня нет никакого времени» — с двумя отрицаниями. В английском отрицание в предложении бывает только одно. Поэтому если уже есть <i>no</i>, частица <i>not</i> не нужна: <i>I have <b>no</b> time</i> или <i>I don't have <b>any</b> time</i>, но не <i>I don't have no time</i>.")}`,
  ex: [
    { type: 'gap', task: 'Впишите some, any или no.', items: [
      ["Yesterday there was ___ bread on the table, so I made sandwiches.", "some"], ["Were there ___ apples in the shop?", "any"],
      ["I haven't got ___ money.", "any"], ["Do you want ___ coffee?", "some|any"],
      ["There were ___ chairs in the room, so we brought some from the kitchen.", "no"], ["Did you ask ___ questions in the lesson?", "any"],
      ["She bought ___ flowers for her mother.", "some"], ["I'm sorry, there was ___ milk in the shop.", "no"],
      ["Can I have ___ water, please?", "some"], ["We didn't see ___ animals in the forest.", "any"],
      ["Take ___ seat you like.", "any"], ["He had ___ friends in his new town, so he was very lonely.", "no"]
    ]},
    { type: 'choice', task: 'Выберите правильный вариант.', items: [
      ["I didn't buy ___ potatoes at the market.", ["any", "some", "no"]], ["The postman brought ___ letters for you.", ["some", "any", "no any"]],
      ["There wasn't ___ sugar in my tea, so I didn't drink it.", ["any", "some", "no"]], ["We had ___ bread, so I bought some at the shop.", ["no", "any", "some"]],
      ["Can you give me ___ help?", ["some", "no", "a"]], ["Call me at ___ time — day or night.", ["any", "some", "no"]]
    ]},
    { type: 'translate', task: 'Переведите на английский.', items: [
      ["Вчера я купил немного сыра.", "I bought some cheese yesterday.|Yesterday I bought some cheese."],
      ["У тебя есть вопросы?", "Have you got any questions?|Do you have any questions?"],
      ["Вчера у меня не было времени.", "I had no time yesterday.|I didn't have any time yesterday.|Yesterday I had no time.|Yesterday I didn't have any time."],
      ["Хотите чаю?", "Do you want some tea?|Would you like some tea?|Do you want tea?|Would you like tea?|Would you like a cup of tea?|Do you want any tea?"],
      ["Возьми любую книгу.", "Take any book.|Take any book you like.|Take any book you want."]
    ]},
    { type: 'listen', at: 2, task: 'Прослушайте предложение и соберите его из слов.', items: [
      ["Do you want some milk in your coffee?", "Хочешь молока в кофе?"],
      ["There was no bread, but there were some biscuits in the cupboard.", "Хлеба не было, но в шкафу было печенье."],
      ["Phone me at any time.", "Звони мне в любое время."]
    ]}
  ]},

{ id: 'pron-compounds', level: 'A2', title: 'Производные: somebody, anything, nowhere', sub: 'someone, nothing, everywhere',
  rule: `
<p>Если к <i>some, any, no, every</i> добавить <i>-body</i>, <i>-thing</i> или <i>-where</i>, получатся слова «кто-то», «что-то», «где-то» и похожие: <i>somebody, anything, nowhere, everywhere</i>. Выбирать между ними нужно по тем же правилам, что и между <i>some, any, no</i>: в утверждении — <i>some-</i>, в вопросе и отрицании — <i>any-</i>.</p>
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
${N("Хотя <i>everyone</i> значит «все», глагол после него стоит в единственном числе, как после «каждый». То же с <i>nobody</i> и другими такими словами: <i>Everyone <b>knows</b></i> (все знают), <i>Nobody <b>was</b> there</i> (никого не было).")}`,
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
      ["Дома кто-нибудь есть?", "Is there anybody at home?|Is anybody at home?|Is anyone at home?|Is there anyone at home?|Is anybody home?|Is anyone home?"],
      ["Я нигде не вижу ключей.", "I don't see my keys anywhere.|I don't see the keys anywhere.|I can't see my keys anywhere.|I can't see the keys anywhere."]
    ]},
    { type: 'listen', at: 2, task: 'Прослушайте предложение и соберите его из слов.', items: [
      ["Somebody left a message, but nobody knows who.", "Кто-то оставил сообщение, но никто не знает кто."],
      ["There was nothing interesting on TV last night.", "Вчера вечером по телевизору не было ничего интересного."],
      ["I looked everywhere, but my keys were nowhere.", "Я искал везде, но ключей нигде не было."]
    ]}
  ]},

{ id: 'pron-every-each', level: 'B2', title: 'Every, each, all, both, either, neither', sub: 'each of them, both of us',
  rule: `
<p>Эти слова помогают сказать о целой группе или о каждом ее участнике по отдельности. Например, <i>all</i> — «все вместе», <i>every</i> и <i>each</i> — «каждый», <i>both</i> — «оба», а <i>either</i> и <i>neither</i> — «любой из двух» и «ни один из двух».</p>
${T(["Слово", "Значение", "Пример"], [
  ["<i>every</i>", "каждый (все вместе, 3 и больше), + ед. ч.", "<i><b>Every</b> student has a book.</i>"],
  ["<i>each</i>", "каждый в отдельности, в том числе из двух", "<i>She had a bag in <b>each</b> hand. <b>Each</b> student got a mark.</i>"],
  ["<i>all</i>", "все, весь, + мн. ч. или неисчисляемое", "<i><b>All</b> students, <b>all</b> the money, <b>all</b> day</i>"],
  ["<i>both</i>", "оба (из двух)", "<i><b>Both</b> my parents are doctors.</i>"],
  ["<i>either</i>", "любой из двух; в отрицании — ни один", "<i>Take <b>either</b> road.</i>"],
  ["<i>neither</i>", "ни тот, ни другой", "<i><b>Neither</b> answer is correct.</i>"]
])}
${E([
  ["<b>Both</b> Tom <b>and</b> Ann came.", "И Том, и Анна пришли."],
  ["<b>Either</b> Tom <b>or</b> Ann will help you.", "Тебе поможет или Том, или Анна."],
  ["<b>Neither</b> Tom <b>nor</b> Ann came.", "Ни Том, ни Анна не пришли."],
  ["<b>Each of</b> them has a car. <b>All of</b> us agree.", "С of нужен артикль или местоимение: each of the / of them."]
])}
${N("После <i>every</i> не может стоять <i>of</i>: правильно <i><b>each</b> of the students</i>, а <i>every of the students</i> — ошибка. И еще: в <i>neither</i> отрицание уже есть, поэтому глагол после него стоит в утвердительной форме: <i>Neither of them <b>knows</b></i>, а не <i>doesn't know</i>. Глагол обычно в единственном числе, хотя в разговорной речи встречается и <i>Neither of them know</i>.")}`,
  ex: [
    { type: 'choice', task: 'Выберите правильный вариант.', items: [
      ["___ of the twins got a red bicycle for their birthday.", ["Each", "Every", "All"]], ["I've read ___ his books.", ["all", "every", "every of"]],
      ["___ my sisters got married last year.", ["Both", "Either", "Each"]], ["___ of the two answers was correct, so I tried again.", ["Neither", "Either", "Both"]],
      ["When I was a child, we went to the sea ___ summer. (каждый год)", ["every", "all", "both"]], ["Come on Monday or Tuesday — ___ day is fine.", ["either", "neither", "both"]],
      ["___ the money has gone. Who has taken it?", ["All", "Every", "Each"]], ["Neither of them ___ English.", ["speaks", "don't speak", "doesn't speak"]],
      ["Last week she was working late ___ day.", ["every", "each of", "all of"]], ["___ Kate and her husband have worked at this school for years.", ["Both", "Either", "Neither"]]
    ]},
    { type: 'gap', task: 'Впишите every, each, all, both, either или neither.', items: [
      ["I have two brothers. ___ of them moved to Moscow last year, so now they live there together.", "both"], ["___ child in the class got a present.", "every|each"],
      ["She gave ___ of the four children an apple.", "each"], ["___ the shops were closed, so we didn't buy anything.", "all"],
      ["___ of my parents has ever smoked. They both hate cigarettes.", "neither"], ["There are trees on ___ side of the street.", "either|each"],
      ["He spent ___ his money on books.", "all"], ["Let's meet ___ today or tomorrow.", "either"]
    ]},
    { type: 'translate', task: 'Переведите на английский.', items: [
      ["Оба моих брата стали врачами.", "Both my brothers became doctors.|Both of my brothers became doctors.|My brothers both became doctors."],
      ["Каждый ученик получил книгу.", "Every student got a book.|Each student got a book.|Every pupil got a book.|Each pupil got a book.|Every student received a book.|Each student received a book."],
      ["Ни один из двух моих друзей не пришел.", "Neither of my two friends came.|Neither of my friends came."],
      ["Садись на любой из двух автобусов.", "Take either bus.|Take either of the buses.|Take either of the two buses.|You can take either bus.|You can take either of the buses.|You can take either of the two buses."],
      ["Он работал весь день.", "He worked all day.|He worked all day long.|He was working all day.|He worked the whole day."]
    ]},
    { type: 'listen', at: 2, task: 'Прослушайте предложение и соберите его из слов.', items: [
      ["Both of my brothers live in London.", "Оба моих брата живут в Лондоне."],
      ["Each student got a book, and all of them were happy.", "Каждый ученик получил книгу, и все они были довольны."],
      ["Neither of the answers was correct.", "Ни один из ответов не был верным."]
    ]}
  ]}
]});

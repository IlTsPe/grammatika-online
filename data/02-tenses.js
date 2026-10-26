BOOK.push({ n: 2, id: 'tenses', title: 'Употребление времен',
intro: 'Самый большой раздел тренажера. Темы идут от глагола <i>to be</i> и Present Simple к перфектным и длительным временам; в конце — смешанное повторение.',
topics: [

{ id: 't-to-be', level: 'A1', title: 'Глагол to be', sub: 'am / is / are, was / were',
  rule: `
<p>Глагол <i>to be</i> переводится как «быть, находиться, являться». В русском языке в настоящем времени эту связку часто не произносят: например, говорим «Я студент» или «Она дома». В английском же без глагола <i>to be</i> предложение будет неполным — так, фраза <i>I <b>am</b> a student</i> буквально передает эту связку и звучит корректно.</p>
${T(["Лицо", "Настоящее", "Прошедшее", "Будущее"], [
  ["<i>I</i>", "<i><b>am</b></i> (I'm)", "<i><b>was</b></i>", "<i><b>will be</b></i>"],
  ["<i>he / she / it</i>", "<i><b>is</b></i> (he's)", "<i><b>was</b></i>", "<i><b>will be</b></i>"],
  ["<i>we / you / they</i>", "<i><b>are</b></i> (we're)", "<i><b>were</b></i>", "<i><b>will be</b></i>"]
])}
<p>В скобках показаны сокращенные формы. В разговоре и в неофициальных текстах местоимение и глагол сливаются в одно слово, а пропущенная буква заменяется апострофом: <i>I am</i> → <i>I'm</i>, <i>he is</i> → <i>he's</i>, <i>we are</i> → <i>we're</i>. Так же сокращается и <i>will</i>: <i>I will be</i> → <i>I'll be</i>. Значение от этого не меняется.</p>
<h3>Отрицание и вопрос</h3>
<p>Чтобы построить отрицание, после глагола <i>to be</i> ставят частицу <i>not</i>. Ее тоже часто сокращают: <i>is not</i> → <i>isn't</i>, <i>are not</i> → <i>aren't</i>, <i>was not</i> → <i>wasn't</i>, <i>were not</i> → <i>weren't</i>; только <i>am not</i> так не сокращают: с местоимением сливается <i>am</i>, а <i>not</i> остается отдельным словом — <i>I'm not</i>. Чтобы задать вопрос, глагол переносят на первое место, перед подлежащим: <i>You are ready</i> → <i><b>Are</b> you ready?</i> (ты готов?)</p>
<p>На такой вопрос обычно отвечают коротко: <i>yes</i> или <i>no</i>, местоимение и тот же глагол — например, <i>Yes, I am</i> или <i>No, I'm not</i>. Это называется кратким ответом; по-русски ему соответствует просто «Да» или «Нет». Если же в начале вопроса стоит вопросительное слово (<i>where, when, why</i>), такой вопрос называют специальным: он спрашивает не «да или нет?», а о подробностях. Порядок слов в нем такой же, только впереди стоит вопросительное слово. Подробно все виды вопросов разобраны в разделе 3 «Вопросы».</p>
${E([
  ["I <b>am not</b> tired. She <b>isn't</b> here. They <b>weren't</b> at home.", "Я не устал. Ее здесь нет. Их не было дома. (not ставится после глагола)"],
  ["<b>Are</b> you ready? — Yes, I <b>am</b>. / No, I'm not.", "Ты готов? — Да. / Нет. (в вопросе глагол перед подлежащим)"],
  ["<b>Was</b> it cold yesterday? — Yes, it <b>was</b>.", "Вчера было холодно? — Да. (в положительном кратком ответе глагол не сокращают)"],
  ["Where <b>were</b> you last night?", "Где ты был вчера вечером? (специальный вопрос — с вопросительным словом)"]
])}
${N("Когда мы говорим о возрасте, погоде, времени или цене, в английском тоже нужен <i>to be</i>, хотя по-русски его не слышно: <i>I <b>am</b> twelve</i> (мне двенадцать), <i>It <b>is</b> cold</i> (холодно), <i>It <b>is</b> five o'clock</i> (пять часов), <i>How much <b>is</b> it?</i> (сколько стоит?). И еще одна деталь: в кратком ответе глагол не сокращают — правильно <i>Yes, he is</i>, а вариант <i>Yes, he's</i> невозможен.")}`,
  ex: [
    { type: 'gap', task: 'Впишите am, is или are.', items: [
      ["My brother ___ a doctor.", "is"], ["I ___ from Kazan.", "am"], ["They ___ at home now.", "are"],
      ["The weather ___ cold today.", "is"], ["You and Tom ___ late again!", "are"], ["___ your sister married?", "is"],
      ["We ___ not hungry.", "are"], ["It ___ ten o'clock.", "is"], ["How old ___ you?", "are"], ["Where ___ my glasses?", "are"]
    ]},
    { type: 'gap', task: 'Впишите was или were.', items: [
      ["I ___ at school yesterday.", "was"], ["They ___ in Paris last summer.", "were"],
      ["___ you at the party on Saturday?", "were"], ["It ___ very hot last week.", "was"],
      ["My parents ___ not at home.", "were"], ["Where ___ she yesterday?", "was"],
      ["The test ___ easy.", "was"], ["We ___ tired after the trip.", "were"]
    ]},
    { type: 'choice', task: 'Выберите правильный вариант.', items: [
      ["___ you ready?", ["Are", "Is", "Am"]], ["She ___ at school today. She is ill.", ["isn't", "aren't", "am not"]],
      ["— Is he your friend? — Yes, he ___.", ["is", "does", "'s"]], ["I ___ twelve years old.", ["am", "have", "is"]],
      ["Tomorrow it ___ sunny.", ["will be", "is be", "will"]], ["There ___ ten people in the shop yesterday.", ["were", "was", "are"]]
    ]},
    { type: 'translate', task: 'Переведите на английский.', items: [
      ["Мой брат — врач.", "My brother is a doctor."], ["Где ты был вчера?", "Where were you yesterday?"],
      ["Мне двенадцать лет.", "I am twelve.|I am twelve years old.|I am 12.|I am 12 years old."],
      ["Сегодня холодно.", "It is cold today.|It's cold today.|Today it is cold."],
      ["Они не были дома.", "They were not at home.|They were not home."],
      ["Завтра я буду в школе.", "I will be at school tomorrow.|Tomorrow I will be at school."]
    ]},
    { type: 'listen', at: 2, task: 'Прослушайте предложение и соберите его из слов.', items: [
      ["My uncle is an engineer, and his wife was a nurse.", "Мой дядя инженер, а его жена была медсестрой."],
      ["The new film isn't very good, but the book is great.", "Новый фильм не очень хороший, а книга отличная."],
      ["Your glasses were on the shelf between the books.", "Твои очки были на полке между книгами."]
    ]}
  ]},

{ id: 't-present-simple', level: 'A1', title: 'Present Simple', sub: 'I work, she works, do you work?',
  rule: `
<p>Present Simple — это время для того, что происходит регулярно или верно всегда. Например, привычки (<i>I get up at seven</i>), общеизвестные факты (<i>Water boils at 100 °C</i>), расписания (<i>The train leaves at six</i>) и постоянные состояния (<i>She lives in Paris</i>). То есть речь не о том, что происходит прямо сейчас, а о том, как обычно бывает.</p>
${F("I / you / we / they + <b>V</b> &nbsp;·&nbsp; he / she / it + <b>V-s</b>")}
${T(["", "I / you / we / they", "he / she / it"], [
  ["Утверждение", "<i>I <b>work</b>.</i> — Я работаю.", "<i>She <b>works</b>.</i> — Она работает."],
  ["Отрицание", "<i>I <b>don't</b> work.</i> — Я не работаю.", "<i>She <b>doesn't</b> work.</i> — Она не работает."],
  ["Вопрос", "<i><b>Do</b> you work?</i> — Ты работаешь?", "<i><b>Does</b> she work?</i> — Она работает?"],
  ["Краткий ответ", "<i>Yes, I <b>do</b>. / No, I <b>don't</b>.</i> — Да, работаю. / Нет, не работаю.", "<i>Yes, she <b>does</b>. / No, she <b>doesn't</b>.</i> — Да, работает. / Нет, не работает."]
])}
<h3>Вспомогательный глагол do / does</h3>
<p>Обычный глагол, в отличие от <i>to be</i>, не умеет сам строить отрицание и вопрос. Ему помогает вспомогательный глагол <i>do</i> (после <i>he / she / it</i> — <i>does</i>). Собственного значения у него здесь нет, он не переводится и нужен только для грамматики. В отрицании после него ставят <i>not</i>: <i>do not</i> → <i>don't</i>, <i>does not</i> → <i>doesn't</i>. В вопросе <i>do / does</i> встает перед подлежащим: <i><b>Do</b> you work?</i></p>
<p>Краткий ответ на такой вопрос тоже строится с этим глаголом, а смысловой глагол не повторяют: на <i>Do you work?</i> отвечают <i>Yes, I <b>do</b></i> или <i>No, I <b>don't</b></i> — «Да, работаю» или «Нет, не работаю».</p>
${M("Часто встречается со словами:", ["always", "usually", "often", "sometimes", "seldom", "never", "every day", "on Mondays", "once a week"])}
<h3>Написание окончания -s</h3>
${E([
  ["go → go<b>es</b>, watch → watch<b>es</b>, wash → wash<b>es</b>", "после o, s, sh, ch, x"],
  ["study → stud<b>ies</b>; но play → play<b>s</b>", "согласная + y"],
  ["have → <b>has</b>", "исключение"]
])}
${N("Слова, которые показывают, как часто что-то происходит (<i>always, often, never</i>), ставятся <b>перед</b> смысловым глаголом: <i>She <b>often</b> reads</i>. Но если в предложении есть <i>to be</i>, они идут <b>после</b> него: <i>She is <b>often</b> late</i>. И помните: окончание <i>-s</i> уже «забрал» вспомогательный <i>does / doesn't</i>, поэтому после него глагол стоит без <i>-s</i>: <i>Does she read?</i> (она читает?), а не <i>Does she reads?</i>")}`,
  ex: [
    { type: 'gap', task: 'Поставьте глагол в Present Simple.', items: [
      ["She ___ (work) in a bank.", "works"], ["My parents ___ (live) in Samara.", "live"],
      ["He ___ (watch) TV every evening.", "watches"], ["The train ___ (leave) at 7:15.", "leaves"],
      ["Water ___ (boil) at 100 °C.", "boils"], ["My son ___ (study) French.", "studies"],
      ["Tom ___ (not / like) fish.", "does not like"], ["Where ___ your brother live?", "does"],
      ["We ___ (not / go) to school on Sundays.", "do not go"], ["My cat ___ (sleep) a lot.", "sleeps"],
      ["She ___ (have) two sisters.", "has"], ["___ you speak English?", "do"]
    ]},
    { type: 'choice', task: 'Выберите правильный вариант.', items: [
      ["We ___ to the gym on Mondays.", ["go", "goes", "are go"]], ["She ___ coffee.", ["doesn't drink", "don't drink", "doesn't drinks"]],
      ["___ he have a car?", ["Does", "Do", "Is"]], ["What time ___ the shop open?", ["does", "do", "is"]],
      ["They ___ meat.", ["don't eat", "doesn't eat", "not eat"]], ["He ___ late.", ["is never", "never is", "never does"]],
      ["— Do you like jazz? — Yes, I ___.", ["do", "like", "am"]], ["My mum ___ dinner every day.", ["cooks", "cook", "is cook"]]
    ]},
    { type: 'text', task: 'Поставьте глаголы из скобок в Present Simple.', text: "My friend Kate ___ (live) in a small town. She ___ (get) up at seven every morning and ___ (go) to school by bike. Her mother ___ (work) at a hospital and her father ___ (teach) history. Kate ___ (not / like) maths, but she ___ (love) English. In the evening she ___ (do) her homework and ___ (watch) TV.",
      answers: ["lives", "gets", "goes", "works", "teaches", "does not like", "loves", "does", "watches"] },
    { type: 'translate', task: 'Переведите на английский.', items: [
      ["Я обычно встаю в семь.", "I usually get up at seven.|I usually get up at 7.|I usually get up at seven o'clock."],
      ["Моя сестра не любит молоко.", "My sister doesn't like milk."],
      ["Ты говоришь по-английски?", "Do you speak English?"],
      ["Где работает твой папа?", "Where does your father work?|Where does your dad work?"],
      ["Он никогда не опаздывает.", "He is never late.|He's never late."],
      ["Солнце встает на востоке.", "The sun rises in the east."]
    ]},
    { type: 'listen', at: 2, task: 'Прослушайте предложение и соберите его из слов.', items: [
      ["My grandmother grows vegetables and flowers in her garden.", "Бабушка выращивает овощи и цветы у себя в саду."],
      ["He gets up at six and goes to work by bus.", "Он встает в шесть и едет на работу на автобусе."],
      ["My best friend has a dog and two cats.", "У моего лучшего друга есть собака и две кошки."]
    ]}
  ]},

{ id: 't-past-simple', level: 'A1', title: 'Past Simple', sub: 'I worked, I went, did you go?',
  rule: `
<p>Past Simple рассказывает о действии, которое случилось и закончилось в прошлом. Обычно при этом понятно или прямо сказано, <b>когда</b> это было: <i>yesterday</i>, <i>last week</i>, <i>in 2019</i>. Это же время используют, когда пересказывают события по порядку: сначала одно, потом другое, — например, <i>I came home, had dinner and went to bed</i>.</p>
${F("правильные глаголы: <b>V-ed</b> &nbsp;·&nbsp; неправильные: <b>2-я форма</b>")}
${T(["", "Пример"], [
  ["Утверждение", "<i>She <b>visited</b> Rome. They <b>went</b> home.</i> — Она съездила в Рим. Они пошли домой."],
  ["Отрицание", "<i>She <b>didn't visit</b> Rome.</i> — Она не ездила в Рим."],
  ["Вопрос", "<i><b>Did</b> she <b>visit</b> Rome? Where <b>did</b> they <b>go</b>?</i> — Она ездила в Рим? Куда они пошли?"]
])}
<p>Английские глаголы делятся на правильные и неправильные. Правильные образуют прошедшее время по общему правилу — с окончанием <i>-ed</i>: <i>visit</i> → <i>visited</i>. У неправильных глаголов прошедшее время — особое слово, которое нужно просто запомнить: <i>go</i> → <i>went</i>, <i>see</i> → <i>saw</i>. В словарях и таблицах у неправильного глагола дают три формы: начальную (<i>go</i>), вторую — для Past Simple (<i>went</i>) и третью — для перфектных времен (<i>gone</i>). Отрицание и вопрос в Past Simple строятся со вспомогательным глаголом <i>did</i> — одинаковым для всех лиц; <i>did not</i> сокращается до <i>didn't</i>.</p>
${M("Часто встречается со словами:", ["yesterday", "last week", "two days ago", "in 2019", "when I was a child", "the other day"])}
<h3>Написание -ed</h3>
${E([
  ["live → live<b>d</b>", "после -e добавляем только -d"],
  ["stop → sto<b>pped</b>, plan → pla<b>nned</b>", "удвоение согласной: слово из одного слога кончается на одну гласную и одну согласную"],
  ["study → stud<b>ied</b>; но play → play<b>ed</b>", "согласная + y → ied"]
])}
<h3>Частые неправильные глаголы</h3>
${T(["Глагол", "Past", "Глагол", "Past", "Глагол", "Past"], [
  ["<i>be</i>", "<i>was / were</i>", "<i>go</i>", "<i>went</i>", "<i>see</i>", "<i>saw</i>"],
  ["<i>buy</i>", "<i>bought</i>", "<i>take</i>", "<i>took</i>", "<i>write</i>", "<i>wrote</i>"],
  ["<i>have</i>", "<i>had</i>", "<i>make</i>", "<i>made</i>", "<i>come</i>", "<i>came</i>"],
  ["<i>eat</i>", "<i>ate</i>", "<i>know</i>", "<i>knew</i>", "<i>lose</i>", "<i>lost</i>"],
  ["<i>get</i>", "<i>got</i>", "<i>give</i>", "<i>gave</i>", "<i>find</i>", "<i>found</i>"],
  ["<i>speak</i>", "<i>spoke</i>", "<i>tell</i>", "<i>told</i>", "<i>think</i>", "<i>thought</i>"],
  ["<i>begin</i>", "<i>began</i>", "<i>leave</i>", "<i>left</i>", "<i>meet</i>", "<i>met</i>"]
])}
${N("В вопросе и отрицании прошедшее время уже показывает вспомогательный глагол <i>did</i>. Поэтому смысловой глагол после него возвращается в начальную форму: <i>Did you <b>see</b> him?</i>, а не <i>Did you saw him?</i>; <i>I didn't <b>go</b></i>, а не <i>I didn't went</i>.")}`,
  ex: [
    { type: 'gap', task: 'Поставьте глагол в Past Simple.', items: [
      ["We ___ (visit) our grandparents last weekend.", "visited"], ["She ___ (buy) a new dress yesterday.", "bought"],
      ["I ___ (see) him two days ago.", "saw"], ["The film ___ (start) at eight.", "started"],
      ["They ___ (stop) at a small café.", "stopped"], ["He ___ (not / go) to work on Monday.", "did not go"],
      ["Where ___ you go on holiday?", "did"], ["It ___ (be) very cold last winter.", "was"],
      ["I ___ (write) a letter to my friend.", "wrote"], ["We ___ (study) for the test all evening.", "studied"],
      ["She ___ (lose) her keys on the way home.", "lost"], ["My parents ___ (meet) in 1998.", "met"]
    ]},
    { type: 'choice', task: 'Выберите правильный вариант.', items: [
      ["I ___ at home yesterday.", ["was", "were", "did"]], ["Did she ___ the letter?", ["write", "wrote", "writes"]],
      ["We ___ the museum.", ["didn't visit", "didn't visited", "not visited"]], ["They ___ in Rome in 2019.", ["were", "was", "are"]],
      ["He ___ his keys this morning.", ["lost", "losed", "lose"]], ["When ___ you arrive?", ["did", "were", "was"]]
    ]},
    { type: 'text', task: 'Поставьте глаголы из скобок в Past Simple.', text: "Last Sunday I ___ (get) up late. I ___ (have) breakfast and ___ (call) my friend Mike. We ___ (walk) to the park together. It ___ (be) a sunny day. We ___ (play) football and ___ (eat) ice cream. In the evening I ___ (come) home tired but happy. I ___ (not / do) my homework!",
      answers: ["got", "had", "called", "walked", "was", "played", "ate", "came", "did not do"] },
    { type: 'translate', task: 'Переведите на английский.', items: [
      ["Вчера я видел Тома.", "I saw Tom yesterday.|Yesterday I saw Tom."],
      ["Где ты купил эту книгу?", "Where did you buy this book?"],
      ["Мы не ходили в кино.", "We didn't go to the cinema.|We didn't go to the movies."],
      ["Она приехала два дня назад.", "She arrived two days ago.|She came two days ago."],
      ["Тебе понравился фильм?", "Did you like the film?|Did you like the movie?|Did you enjoy the film?"]
    ]},
    { type: 'listen', at: 2, task: 'Прослушайте предложение и соберите его из слов.', items: [
      ["Last summer we went to the sea and swam every day.", "Прошлым летом мы ездили на море и каждый день купались."],
      ["I didn't buy any bread. The shop was closed.", "Я не купил хлеба. Магазин был закрыт."],
      ["Yesterday it was very cold, and we stayed at home.", "Вчера было очень холодно, и мы остались дома."]
    ]}
  ]},

{ id: 't-present-continuous', level: 'A2', title: 'Present Continuous', sub: 'I am working now',
  rule: `
<p>Present Continuous описывает действие, которое происходит <b>прямо сейчас</b>, в момент речи: <i>Look, it is raining!</i> Его же используют для того, что длится в текущий период, хотя и не обязательно в эту секунду, — например, <i>I am reading a great book these days</i>. А еще так говорят о договоренностях на ближайшее будущее: <i>We are meeting Sarah tomorrow</i>.</p>
${F("am / is / are + <b>V-ing</b>")}
${T(["", "Пример"], [
  ["Утверждение", "<i>She <b>is reading</b>. They<b>'re playing</b>.</i> — Она читает. Они играют."],
  ["Отрицание", "<i>I<b>'m not</b> sleeping. He <b>isn't</b> working.</i> — Я не сплю. Он не работает."],
  ["Вопрос", "<i><b>Are</b> you listening? What <b>is</b> she doing?</i> — Ты слушаешь? Что она делает?"]
])}
${M("Часто встречается со словами:", ["now", "right now", "at the moment", "today", "these days", "Look!", "Listen!"])}
<h3>Написание -ing</h3>
${E([
  ["make → mak<b>ing</b>, write → writ<b>ing</b>", "немое -e отпадает"],
  ["swim → swim<b>ming</b>, sit → sit<b>ting</b>, run → run<b>ning</b>", "краткий ударный слог: согласная удваивается"],
  ["lie → l<b>ying</b>, die → d<b>ying</b>", "ie → y"]
])}
<h3>Другие значения</h3>
<p>Кроме действия в момент речи, Present Continuous передает еще два значения. Во-первых, договоренность на ближайшее будущее: если встреча уже назначена, о ней говорят в Present Continuous, хотя она еще не наступила (подробнее — в теме «Будущее: will и going to»). Во-вторых, со словом <i>always</i> («всегда, вечно») это время выражает раздражение или упрек: говорящий жалуется, что что-то повторяется слишком часто. Обычное <i>He always loses his keys</i> просто сообщает факт, а <i>He <b>is always losing</b> his keys!</i> звучит как «Он вечно теряет ключи!».</p>
${E([
  ["We <b>are meeting</b> Sarah tomorrow.", "Завтра мы встречаемся с Сарой. (договоренность на будущее)"],
  ["He <b>is always losing</b> his keys!", "Он вечно теряет ключи! (always + Continuous — раздражение)"]
])}`,
  ex: [
    { type: 'gap', task: 'Поставьте глагол в Present Continuous.', items: [
      ["Look! It ___ (rain).", "is raining|'s raining"], ["I ___ (read) a great book these days.", "am reading"],
      ["Be quiet! The baby ___ (sleep).", "is sleeping|'s sleeping"], ["They ___ (not / work) today.", "are not working"],
      ["We ___ (meet) Sarah tomorrow evening.", "are meeting"], ["What ___ you doing?", "are"],
      ["The children ___ (swim) in the river.", "are swimming"], ["She ___ (write) a letter now.", "is writing|'s writing"],
      ["Listen! My sister ___ (sing).", "is singing|'s singing"], ["I ___ (not / watch) TV at the moment.", "am not watching"],
      ["Why ___ you laughing?", "are"], ["He ___ (lie) on the sofa.", "is lying|'s lying"]
    ]},
    { type: 'choice', task: 'Выберите правильный вариант.', items: [
      ["Where's Tom? — He ___ a shower.", ["is having", "has", "have"]], ["Look! The bus ___.", ["is coming", "comes", "come"]],
      ["___ she working today?", ["Is", "Does", "Are"]], ["I ___ to the radio at the moment.", ["am not listening", "don't listen", "not listening"]],
      ["They ___ a new house this year.", ["are building", "build", "builds"]], ["Why ___ you wearing a coat? It's hot!", ["are", "do", "is"]]
    ]},
    { type: 'translate', task: 'Переведите на английский.', items: [
      ["Смотри! Идет снег.", "Look! It is snowing.|Look! It's snowing."],
      ["Что ты сейчас делаешь?", "What are you doing now?|What are you doing right now?|What are you doing at the moment?"],
      ["Дети играют в саду.", "The children are playing in the garden."],
      ["Я сейчас не работаю.", "I am not working now.|I am not working at the moment."],
      ["Завтра мы встречаемся с друзьями.", "We are meeting our friends tomorrow.|We are meeting friends tomorrow.|Tomorrow we are meeting our friends."]
    ]},
    { type: 'listen', at: 2, task: 'Прослушайте предложение и соберите его из слов.', items: [
      ["Look! The boys are climbing the tree in the garden.", "Смотри! Мальчики лезут на дерево в саду."],
      ["The children are running out of the school into the park.", "Дети выбегают из школы в парк."],
      ["Two women are walking with their dogs in the field.", "Две женщины гуляют с собаками в поле."]
    ]}
  ]},

{ id: 't-simple-vs-continuous', level: 'A2', title: 'Present Simple или Continuous', sub: 'I work / I am working',
  rule: `
<p>Чтобы выбрать между этими двумя временами, задайте себе один вопрос: действие происходит <b>обычно</b>, как привычка или факт, или <b>сейчас</b>, временно? Если обычно — нужен Present Simple, если сейчас — Present Continuous.</p>
${T(["Present Simple", "Present Continuous"], [
  ["регулярно, всегда: <i>I <b>walk</b> to work.</i> — Я хожу на работу пешком.", "сейчас или временно: <i>Today I<b>'m taking</b> the bus.</i> — Сегодня я еду на автобусе."],
  ["постоянно: <i>She <b>lives</b> in Paris.</i> — Она живет в Париже.", "временно: <i>She<b>'s living</b> with friends this month.</i> — В этом месяце она живет у друзей."],
  ["факты: <i>Water <b>boils</b> at 100°.</i> — Вода кипит при 100°.", "меняющаяся ситуация: <i>It<b>'s getting</b> colder.</i> — Становится холоднее."],
  ["расписание: <i>The train <b>leaves</b> at 6.</i> — Поезд отправляется в 6.", "личная договоренность: <i>I<b>'m leaving</b> at 6.</i> — Я уезжаю в 6."]
])}
<h3>Глаголы состояния</h3>
<p>Есть глаголы, которые обозначают не действие, а состояние: знание, чувства, желания, принадлежность. Такое состояние не может «идти прямо сейчас» как процесс, поэтому эти глаголы обычно не ставят в Continuous — даже если по-русски речь о текущем моменте. Например, «Я сейчас понимаю» — это <i>I understand</i>, а не <i>I am understanding</i>.</p>
${M("Обычно не бывают в Continuous:", ["know", "understand", "believe", "remember", "like", "love", "hate", "want", "need", "prefer", "belong", "own", "seem", "mean", "cost"])}
<p>У некоторых глаголов два значения: одно — состояние, другое — действие. В значении состояния они в Continuous не ставятся, а в значении действия — ставятся. Например, <i>think</i> в значении «считать, иметь мнение» — это состояние, а в значении «обдумывать, размышлять» — процесс. Так же <i>have</i> в значении «иметь, владеть» — состояние, а в выражениях вроде <i>have lunch</i> («обедать») или <i>have a shower</i> («принимать душ») — действие.</p>
${E([
  ["I <b>think</b> you're right. — I'<b>m thinking</b> about the trip.", "Думаю, ты прав. — Я обдумываю поездку. (мнение — процесс)"],
  ["He <b>has</b> a car. — He <b>is having</b> lunch.", "У него есть машина. — Он обедает. (владеет — обедает)"],
  ["This soup <b>tastes</b> good. — She <b>is tasting</b> the soup.", "Этот суп вкусный. — Она пробует суп. (имеет вкус — пробует)"]
])}`,
  ex: [
    { type: 'choice', task: 'Present Simple или Present Continuous?', items: [
      ["I ___ what you mean.", ["understand", "am understanding"]], ["She usually walks to work, but today she ___ the bus.", ["is taking", "takes", "take"]],
      ["Water ___ at 0 °C.", ["freezes", "is freezing"]], ["Listen! Our neighbour ___ at the door.", ["is knocking", "knocks"]],
      ["He ___ a new car. He bought it last week.", ["has", "is having"]], ["Hurry up! The taxi ___ for you.", ["is waiting", "waits"]],
      ["I ___ this song. It's my favourite.", ["love", "am loving"]], ["My sister ___ in London this month.", ["is staying", "stays"]],
      ["How often ___ you go swimming?", ["do", "are"]], ["The train ___ at 6:40 every morning.", ["leaves", "is leaving"]]
    ]},
    { type: 'gap', task: 'Поставьте глагол в Present Simple или Present Continuous.', items: [
      ["Kate usually ___ (wear) jeans, but today she ___ (wear) a dress.", ["wears", "is wearing|'s wearing"]],
      ["I ___ (not / know) his phone number.", "do not know"],
      ["Look, the children ___ (play) football.", "are playing"],
      ["We ___ (go) to the seaside every summer.", "go"],
      ["What ___ you ___ (do)? — I'm reading.", ["are", "doing"]],
      ["This bag ___ (belong) to my mother.", "belongs"],
      ["It ___ (get) dark. Let's go home.", "is getting|'s getting"],
      ["He ___ (need) help right now.", "needs"],
      ["My father ___ (drive) to work every day.", "drives"],
      ["Don't disturb me. I ___ (think).", "am thinking"]
    ]},
    { type: 'text', task: 'Поставьте глаголы из скобок в Present Simple или Present Continuous.', text: "Hi Mum! I ___ (write) to you from the hotel. We ___ (have) a great time here. Every morning we ___ (go) to the beach, and in the afternoon we ___ (visit) museums. Right now Dad ___ (sleep) and Anna ___ (read) a book. The food here ___ (taste) wonderful. I ___ (want) to stay here forever!",
      answers: ["am writing", "are having", "go", "visit", "is sleeping|'s sleeping", "is reading|'s reading", "tastes", "want"] },
    { type: 'listen', at: 2, task: 'Прослушайте предложение и соберите его из слов.', items: [
      ["Water boils at a hundred degrees, and the kettle is boiling now.", "Вода кипит при ста градусах, и чайник сейчас кипит."],
      ["She usually drinks tea, but today she's having a cup of coffee.", "Обычно она пьет чай, но сегодня пьет кофе."],
      ["We go to the gym on Mondays, but this week we're going on Tuesday.", "Мы ходим в спортзал по понедельникам, но на этой неделе идем во вторник."]
    ]}
  ]},

{ id: 't-future', level: 'A2', title: 'Будущее: will и going to', sub: "I'll help · I'm going to buy",
  rule: `
<p>В русском для будущего обычно хватает одной формы, а в английском их несколько. Выбор зависит от того, когда принято решение и на чем основано предположение. Например, если вы решили что-то сделать прямо сейчас, нужно <i>will</i>, а если решили заранее — <i>be going to</i>. Таблица ниже показывает основные случаи.</p>
${T(["Форма", "Когда", "Пример"], [
  ["<i>will + V</i>", "решение в момент речи", "<i>The phone's ringing. — I'<b>ll</b> answer it.</i> — Звонит телефон. — Я отвечу."],
  ["<i>will + V</i>", "обещание, предложение, просьба", "<i>I <b>will</b> call you tonight, I promise.</i> — Я позвоню тебе вечером, обещаю."],
  ["<i>will + V</i>", "прогноз-мнение (I think, probably)", "<i>I think it <b>will</b> be a good film.</i> — Думаю, это будет хороший фильм."],
  ["<i>will + V</i>", "факт о будущем", "<i>I <b>will</b> be 15 next year.</i> — В следующем году мне будет 15."],
  ["<i>be going to + V</i>", "намерение, решено заранее", "<i>We <b>are going to</b> buy a car.</i> — Мы собираемся купить машину."],
  ["<i>be going to + V</i>", "прогноз по видимым признакам", "<i>Look at the clouds! It <b>is going to</b> rain.</i> — Посмотри на тучи! Сейчас пойдет дождь."],
  ["<i>Present Continuous</i>", "договоренность на определенное время", "<i>I'<b>m meeting</b> Ann at six.</i> — В шесть я встречаюсь с Анной."],
  ["<i>Present Simple</i>", "расписание", "<i>The train <b>leaves</b> at 9.</i> — Поезд отправляется в 9."]
])}
<h3>Как строятся формы</h3>
<p><i>Will</i> одинаков для всех лиц, а после него идет начальная форма глагола без <i>to</i>: <i>I will go, she will go</i>. В речи <i>will</i> обычно сокращается до <i>'ll</i>: <i>I'll, she'll, we'll</i>. Отрицание — <i>will not</i>, сокращенно <i>won't</i>: <i>I <b>won't</b> tell anyone</i> — «Я никому не скажу». В вопросе <i>will</i> встает перед подлежащим: <i><b>Will</b> you help me?</i> — «Ты мне поможешь?».</p>
<p>В обороте <i>be going to</i> («собираться») глагол <i>be</i> меняется по лицам, как обычно: <i>I <b>am</b> going to, he <b>is</b> going to, they <b>are</b> going to</i>. Отрицание и вопрос тоже строятся через <i>be</i>: <i>I'm <b>not</b> going to buy it</i> — «Я не собираюсь это покупать», <i><b>Are</b> you going to buy it?</i> — «Ты собираешься это купить?».</p>
`,
  ex: [
    { type: 'choice', task: 'Выберите will, going to или Present Continuous.', items: [
      ["— The phone is ringing. — OK, I ___ answer it.", ["will", "am going to"]], ["Look at those black clouds! It ___ rain.", ["is going to", "will"]],
      ["We decided last week: we ___ buy a new car next month.", ["are going to", "will"]], ["I promise I ___ call you tonight.", ["will", "am going to"]],
      ["— I'm cold. — Wait, I ___ close the window.", ["will", "am going to"]], ["Look at him! He ___ fall off that ladder.", ["is going to", "will"]],
      ["— Tea or coffee? — I ___ have tea, please.", ["will", "am going to"]], ["We ___ our friends on Saturday — we arranged it yesterday.", ["are meeting", "will meet", "meet"]]
    ]},
    { type: 'gap', task: 'Поставьте глагол в форму с will или be going to.', items: [
      ["She ___ (be) sixteen next month.", "will be"], ["I think you ___ (like) this film.", "will like"],
      ["Look at the sky! It ___ (snow).", "is going to snow|'s going to snow"], ["We made a decision. We ___ (sell) our old car.", "are going to sell"],
      ["— This box is very heavy. — Give it to me, I ___ (help) you.", "will help"], ["Maybe they ___ (not / come) tomorrow.", "will not come"],
      ["He bought some paint yesterday. He ___ (paint) his room.", "is going to paint|'s going to paint"], ["I'm sure you ___ (pass) the exam.", "will pass|are going to pass"]
    ]},
    { type: 'translate', task: 'Переведите на английский.', items: [
      ["Я помогу тебе.", "I will help you."],
      ["Мы собираемся поехать в Сочи летом.", "We are going to go to Sochi in summer.|We are going to Sochi in summer.|We are going to go to Sochi in the summer.|We're going to go to Sochi this summer.|We are going to Sochi this summer.|We are going to Sochi in the summer."],
      ["Смотри, сейчас пойдет дождь.", "Look, it is going to rain.|Look, it's going to rain."],
      ["Я позвоню тебе вечером.", "I will call you in the evening.|I will call you this evening.|I will phone you in the evening.|I'll phone you this evening.|I will call you tonight.|I will phone you tonight."],
      ["Думаю, она не придет.", "I don't think she will come.|I think she won't come."]
    ]},
    { type: 'listen', at: 2, task: 'Прослушайте предложение и соберите его из слов.', items: [
      ["There will be a big crowd at the concert tonight.", "Сегодня вечером на концерте будет толпа народу."],
      ["I'm going to give them my old bike. I don't need it.", "Я собираюсь отдать им свой старый велосипед. Он мне не нужен."],
      ["Don't worry, I'll take care of your cat.", "Не волнуйся, я позабочусь о твоей кошке."]
    ]}
  ]},

{ id: 't-present-perfect', level: 'A2', title: 'Present Perfect', sub: 'I have done, just, already, yet',
  rule: `
<p>Present Perfect связывает прошлое с настоящим. Действие уже произошло, но говорим мы о нем ради того, что есть сейчас. Поэтому важно не <b>когда</b> оно случилось, а его результат (<i>I have lost my keys</i> — ключей нет), жизненный опыт (<i>I have been to Paris</i>) или то, что период еще не закончился (<i>I have drunk three coffees today</i> — день еще идет).</p>
${F("have / has + <b>V3</b> (третья форма)")}
${T(["Значение", "Пример"], [
  ["результат сейчас", "<i>I <b>have lost</b> my keys.</i> — Я потерял ключи. (Сейчас ключей нет.)"],
  ["опыт в жизни", "<i>She <b>has never been</b> to Japan. <b>Have</b> you ever <b>eaten</b> sushi?</i> — Она никогда не была в Японии. Ты когда-нибудь ел суши?"],
  ["незаконченный период", "<i>I <b>have drunk</b> three coffees today.</i> — Сегодня я выпил три чашки кофе."],
  ["длится до сих пор (for, since)", "<i>We <b>have lived</b> here since 2015 / for ten years.</i> — Мы живем здесь с 2015 года / десять лет."],
  ["только что (just)", "<i>He <b>has just come</b>.</i> — Он только что пришел."]
])}
<p>Вспомогательный глагол здесь — <i>have</i>, а после <i>he / she / it</i> — <i>has</i>. В отрицании к нему добавляется <i>not</i>: <i>haven't, hasn't</i>; в вопросе он встает перед подлежащим: <i><b>Have</b> you seen it?</i> В речи его часто сокращают: <i>I've, she's</i> (<i>she's</i> здесь значит <i>she has</i>).</p>
<h3>For или since</h3>
<p>Когда действие началось в прошлом и длится до сих пор, по-русски мы обычно говорим в настоящем времени: «Мы живем здесь десять лет». По-английски в таком случае нужен Present Perfect, а срок указывают двумя словами. <i>For</i> ставят перед длительностью — сколько времени это продолжается: <i>for ten years</i> — «десять лет», <i>for an hour</i> — «(в течение) часа». <i>Since</i> ставят перед моментом, когда все началось: <i>since 2015</i> — «с 2015 года», <i>since Monday</i> — «с понедельника».</p>
${M("Часто встречается со словами:", ["just", "already", "yet", "ever", "never", "for", "since", "today", "this week", "so far", "recently"])}
<h3>Где ставить just, already, yet</h3>
${E([
  ["I have <b>just</b> / <b>already</b> finished.", "Я только что / уже закончил. (just и already — между have и V3)"],
  ["Have you finished <b>yet</b>? I haven't finished <b>yet</b>.", "Ты уже закончил? Я еще не закончил. (yet — в конце вопроса и отрицания; в вопросе значит «уже», в отрицании — «еще»)"]
])}
<h3>Третья форма неправильных глаголов</h3>
${T(["V", "V3", "V", "V3", "V", "V3"], [
  ["<i>be</i>", "<i>been</i>", "<i>go</i>", "<i>gone</i>", "<i>see</i>", "<i>seen</i>"],
  ["<i>do</i>", "<i>done</i>", "<i>eat</i>", "<i>eaten</i>", "<i>write</i>", "<i>written</i>"],
  ["<i>take</i>", "<i>taken</i>", "<i>break</i>", "<i>broken</i>", "<i>know</i>", "<i>known</i>"],
  ["<i>buy</i>", "<i>bought</i>", "<i>lose</i>", "<i>lost</i>", "<i>find</i>", "<i>found</i>"]
])}
${N("Не путайте <i>been</i> и <i>gone</i>. <i>He has <b>been</b> to London</i> значит, что он там побывал и уже вернулся. А <i>He has <b>gone</b> to London</i> — что он уехал туда и сейчас находится там.")}`,
  ex: [
    { type: 'gap', task: 'Поставьте глагол в Present Perfect.', items: [
      ["I ___ (lose) my keys. Now I am locked out.", "have lost"], ["She ___ (never / be) to Japan.", "has never been|'s never been"],
      ["We ___ (live) here since 2015.", "have lived"], ["Have you ever ___ (eat) sushi?", "eaten"],
      ["They ___ (just / arrive).", "have just arrived"], ["She hasn't called me ___. (еще)", "yet"],
      ["He ___ (already / do) his homework.", "has already done|'s already done"], ["I ___ (not / see) this film.", "have not seen"],
      ["___ you finished your work yet?", "have"], ["My brother ___ (break) his arm.", "has broken|'s broken"],
      ["We ___ (know) each other for ten years.", "have known"], ["Which books ___ you read this year?", "have"]
    ]},
    { type: 'choice', task: 'Выберите правильный вариант.', items: [
      ["I ___ him since we were children.", ["have known", "knew", "know"]], ["— Where's Tom? — He ___ to the shop. He'll be back soon.", ["has gone", "has been", "went yesterday"]],
      ["I ___ to Paris three times.", ["have been", "have gone", "was going"]], ["___ you finished your homework yet?", ["Have", "Did", "Are"]],
      ["She has lived here ___ 2010.", ["since", "for", "from"]], ["He has worked here ___ five years.", ["for", "since", "during"]],
      ["I haven't seen him ___.", ["yet", "already", "just"]], ["They have ___ left.", ["just", "yet", "ever"]]
    ]},
    { type: 'translate', task: 'Переведите на английский.', items: [
      ["Я уже сделал уроки.", "I have already done my homework.|I have done my homework already."],
      ["Ты когда-нибудь был в Лондоне?", "Have you ever been to London?"],
      ["Она только что ушла.", "She has just left.|She's just left.|She has just gone.|She's just gone."],
      ["Я знаю его десять лет.", "I have known him for ten years.|I have known him for 10 years."],
      ["Мы еще не обедали.", "We haven't had lunch yet.|We haven't had dinner yet.|We haven't eaten yet."]
    ]},
    { type: 'listen', at: 2, task: 'Прослушайте предложение и соберите его из слов.', items: [
      ["Be quiet! Dad has just gone to bed.", "Тише! Папа только что лег спать."],
      ["She has already read these two books.", "Она уже прочитала эти две книги."],
      ["Which countries have you visited?", "В каких странах ты побывал?"]
    ]}
  ]},

{ id: 't-past-continuous', level: 'B1', title: 'Past Continuous', sub: 'I was reading when…',
  rule: `
<p>Past Continuous описывает действие, которое было <b>в процессе</b> в какой-то момент в прошлом, то есть не закончилось к этому моменту, а длилось. Например, <i>At 8 pm I was having dinner</i>: в восемь вечера я как раз ужинал. Часто это время рисует фон, на котором происходит что-то короткое.</p>
${F("was / were + <b>V-ing</b>")}
${T(["Значение", "Пример"], [
  ["процесс в момент прошлого", "<i>At 8 pm I <b>was having</b> dinner.</i> — В восемь вечера я ужинал."],
  ["длительное действие прервано коротким", "<i>I <b>was cooking</b> when the phone <b>rang</b>.</i> — Я готовил, когда зазвонил телефон."],
  ["два параллельных процесса (while)", "<i>While I <b>was reading</b>, he <b>was watching</b> TV.</i> — Пока я читал, он смотрел телевизор."],
  ["фон в рассказе", "<i>The sun <b>was shining</b> and birds <b>were singing</b>.</i> — Светило солнце, и пели птицы."],
  ["весь период (all day, from 5 to 7)", "<i>She <b>was working</b> all day yesterday.</i> — Вчера она работала весь день."]
])}
<p>Форма <i>was</i> ставится после <i>I, he, she, it</i>, а <i>were</i> — после <i>we, you, they</i>, как у глагола <i>to be</i> в прошедшем времени. Слово <i>while</i> значит «пока, в то время как» и обычно вводит длительное действие: <i><b>While</b> I was reading…</i> — «Пока я читал…». А <i>when</i> («когда») чаще вводит короткое событие: <i>…<b>when</b> the phone rang</i> — «…когда зазвонил телефон».</p>
${N("Запомните простое деление: длительный фон — это Past Continuous, а короткое событие, которое случилось на этом фоне, — Past Simple: <i>I <b>was cooking</b> when the phone <b>rang</b>.</i> Если же действия просто идут одно за другим, все они стоят в Past Simple: <i>He came in, took off his coat and sat down.</i> (он вошел, снял пальто и сел)")}`,
  ex: [
    { type: 'gap', task: 'Поставьте глагол в Past Continuous.', items: [
      ["At 8 pm yesterday I ___ (have) dinner.", "was having"], ["While we ___ (walk) in the park, it started to rain.", "were walking"],
      ["She ___ (cook) when the phone rang.", "was cooking"], ["When I arrived, they ___ (not / watch) TV.", "were not watching"],
      ["The sun ___ (shine) and the birds were singing.", "was shining"], ["What ___ you doing at midnight?", "were"],
      ["He ___ (sleep) from two to four.", "was sleeping"], ["We ___ (wait) for the bus when it began to snow.", "were waiting"],
      ["___ it raining when you left home?", "was"], ["The children ___ (play) all afternoon.", "were playing"]
    ]},
    { type: 'choice', task: 'Past Simple или Past Continuous?', items: [
      ["I ___ a bath when the lights went out.", ["was having", "had", "have had"]], ["When he saw the police, he ___ away.", ["ran", "was running"]],
      ["While she was reading, her husband ___ the dishes.", ["was washing", "has washed"]], ["He ___ in, took off his coat and sat down.", ["came", "was coming"]],
      ["What were you doing when I ___ you?", ["called", "was calling"]], ["It ___ hard all night.", ["was raining", "is raining"]],
      ["I ___ my leg when I was skiing.", ["broke", "was breaking"]], ["While I ___ home, I met an old friend.", ["was walking", "am walking"]]
    ]},
    { type: 'translate', task: 'Переведите на английский.', items: [
      ["Вчера в пять часов я делал уроки.", "I was doing my homework at five o'clock yesterday.|Yesterday at five o'clock I was doing my homework.|I was doing my homework at five yesterday.|At five o'clock yesterday I was doing my homework.|I was doing my homework at 5 o'clock yesterday.|Yesterday at 5 o'clock I was doing my homework."],
      ["Когда я пришел, она спала.", "When I came, she was sleeping.|When I arrived, she was sleeping.|She was sleeping when I came.|She was sleeping when I arrived.|When I came, she was asleep.|When I arrived, she was asleep."],
      ["Что ты делал, когда я позвонил?", "What were you doing when I called?|What were you doing when I phoned?|What were you doing when I rang?"],
      ["Шел дождь, и мы остались дома.", "It was raining and we stayed at home.|It was raining, so we stayed at home.|It was raining and we stayed home.|It was raining, so we stayed home."]
    ]},
    { type: 'listen', at: 2, task: 'Прослушайте предложение и соберите его из слов.', items: [
      ["I was reading a book when my friend knocked at the door.", "Я читал книгу, когда мой друг постучал в дверь."],
      ["While we were walking through the park, it started to rain.", "Пока мы гуляли по парку, начался дождь."],
      ["When I saw them, Tom's parents were sitting in the garden.", "Когда я их увидел, родители Тома сидели в саду."]
    ]}
  ]},

{ id: 't-perfect-vs-past', level: 'B1', title: 'Present Perfect или Past Simple', sub: 'I have seen / I saw',
  rule: `
<p>Оба времени рассказывают о том, что уже случилось, поэтому их легко перепутать. Разница в том, привязано ли действие к конкретному моменту в прошлом. Если время указано или понятно из контекста (<i>yesterday</i>, <i>in 2010</i>), нужен Past Simple. Если важен результат или опыт к настоящему, а момент не назван, — Present Perfect.</p>
${T(["Present Perfect", "Past Simple"], [
  ["время не указано, важен результат: <i>I<b>'ve lost</b> my pen.</i> — Я потерял ручку.", "время указано: <i>I <b>lost</b> my pen <b>yesterday</b>.</i> — Я потерял ручку вчера."],
  ["период не закончен: <i>I<b>'ve been</b> busy <b>today</b>.</i> — Сегодня я был занят.", "период закончен: <i>I <b>was</b> busy <b>yesterday</b>.</i> — Вчера я был занят."],
  ["опыт: <i><b>Have</b> you ever <b>seen</b> a whale?</i> — Ты когда-нибудь видел кита?", "подробности: <i>Where <b>did</b> you <b>see</b> it?</i> — Где ты его видел?"],
  ["человек жив, опыт продолжается: <i>He <b>has written</b> 3 books.</i> — Он написал 3 книги.", "человека нет / период закрыт: <i>Pushkin <b>wrote</b> many poems.</i> — Пушкин написал много стихов."]
])}
${M("С этими словами о прошлом — только Past Simple:", ["yesterday", "ago", "last…", "in 2010", "when…?", "what time…?"])}
${E([
  ["— <b>Have</b> you <b>been</b> to Italy? — Yes, I <b>have</b>. I <b>went</b> there in 2019.", "— Ты бывал в Италии? — Да. Я ездил туда в 2019 году. (сначала новость — Perfect, потом подробности — Past)"]
])}
${N("Вопрос <i>When…?</i> («когда?») о прошлом уже спрашивает о конкретном моменте, поэтому в нем нужен Past Simple: <i>When <b>did</b> you <b>arrive</b>?</i> (когда ты приехал?), а вариант <i>When have you arrived?</i> будет ошибкой.")}`,
  ex: [
    { type: 'gap', task: 'Present Perfect или Past Simple? Поставьте глагол в нужную форму.', items: [
      ["I ___ (break) my phone. Please lend me yours.", "have broken"], ["He ___ (finish) school in 2018.", "finished"],
      ["I ___ (see) this film last week.", "saw"], ["She ___ (be) to London twice.", "has been|'s been"],
      ["When ___ you ___ (buy) this car?", ["did", "buy"]], ["We ___ (not / have) a holiday this year.", "have not had"],
      ["Tolstoy ___ (write) 'Anna Karenina'.", "wrote"], ["I ___ (just / meet) your brother.", "have just met"],
      ["They ___ (move) to Moscow two years ago.", "moved"], ["___ you ever ___ (try) Chinese food?", ["have", "tried"]]
    ]},
    { type: 'choice', task: 'Выберите правильный вариант.', items: [
      ["When ___ the accident happen?", ["did", "has", "have"]], ["Shakespeare ___ Hamlet.", ["wrote", "has written"]],
      ["I ___ my homework. Now I am free.", ["have done", "did"]], ["I ___ my homework yesterday.", ["did", "have done"]],
      ["We ___ three tests this week.", ["have had", "had"]], ["My grandfather ___ in a factory all his life. He retired in 2010.", ["worked", "has worked"]]
    ]},
    { type: 'text', task: 'Поставьте глаголы в Present Perfect или Past Simple.', text: "— ___ (you / ever / be) to Spain? — Yes, I ___ (go) there last summer. — Really? What ___ (you / see)? — I ___ (visit) Madrid and Barcelona. — I ___ (never / be) abroad. — Oh, it's a great country! I ___ (already / book) a trip for next year.",
      answers: ["have you ever been", "went", "did you see", "visited", "have never been", "have already booked"] },
    { type: 'listen', at: 2, task: 'Прослушайте предложение и соберите его из слов.', items: [
      ["I have lost my keys. I think I left them at the office yesterday.", "Я потерял ключи. Кажется, вчера оставил их в офисе."],
      ["We have known each other for ten years. We met at university.", "Мы знаем друг друга десять лет. Познакомились в университете."],
      ["I have never eaten such a good pizza. Where did you buy it?", "Я никогда не ел такой вкусной пиццы. Где ты ее купил?"]
    ]}
  ]},

{ id: 't-present-perfect-continuous', level: 'B1', title: 'Present Perfect Continuous', sub: "I've been waiting for an hour",
  rule: `
<p>Present Perfect Continuous подчеркивает, <b>как долго</b> длится действие. Оно началось в прошлом и продолжается до сих пор: <i>I have been waiting for an hour</i> — жду уже час и все еще жду. Или только что закончилось, но след еще виден: <i>I'm out of breath — I have been running</i> (я запыхался, потому что бегал).</p>
${F("have / has been + <b>V-ing</b>")}
${E([
  ["I <b>have been waiting</b> for you for an hour!", "Я жду тебя уже час (и все еще жду)."],
  ["She <b>has been learning</b> Spanish since September.", "Она учит испанский с сентября. (начала в сентябре и продолжает)"],
  ["I'm out of breath — I<b>'ve been running</b>.", "Я запыхался — я бегал. (только что закончил, виден результат)"]
])}
<p>В речи <i>have been</i> и <i>has been</i> обычно сокращаются: <i>I've been, she's been, it's been</i>. Здесь <i>'s</i> означает <i>has</i>: <i>It's been raining</i> = <i>It has been raining</i>.</p>
<h3>Continuous или Simple</h3>
${T(["Perfect Continuous: процесс", "Perfect Simple: результат"], [
  ["<i>I<b>'ve been painting</b> the kitchen.</i> — Я крашу кухню. (могу еще не закончить)", "<i>I<b>'ve painted</b> the kitchen.</i> — Я покрасил кухню. (готово)"],
  ["<i>How long <b>have</b> you <b>been reading</b>?</i> — Сколько времени ты уже читаешь?", "<i>How many pages <b>have</b> you <b>read</b>?</i> — Сколько страниц ты прочитал?"],
  ["<i>It<b>'s been raining</b> all day.</i> — Весь день идет дождь.", "<i>I<b>'ve written</b> three emails today.</i> — Сегодня я написал три письма. (есть количество)"]
])}
${M("Часто встречается со словами:", ["for", "since", "how long", "all day", "lately", "recently"])}
${N("Глаголы состояния (<i>know, like, want</i> и другие) не ставятся в Continuous и в этом времени. Вместо этого используют обычный Present Perfect: <i>I<b>'ve known</b> her for years</i>, а не <i>I've been knowing her</i>.")}`,
  ex: [
    { type: 'gap', task: 'Present Perfect Continuous или Present Perfect Simple?', items: [
      ["I ___ (wait) for you for an hour!", "have been waiting"], ["She ___ (learn) Spanish since September.", "has been learning|'s been learning"],
      ["How long ___ you been working here?", "have"], ["Your eyes are red. ___ you been crying?", "have"],
      ["They ___ (know) each other for ten years.", "have known"], ["I ___ (write) three emails this morning.", "have written"],
      ["It ___ (rain) all day.", "has been raining|'s been raining"], ["He ___ (play) computer games since breakfast.", "has been playing|'s been playing"],
      ["We ___ (live) in this flat for five years.", "have been living|have lived"], ["She ___ (read) four books this month.", "has read|'s read"]
    ]},
    { type: 'choice', task: 'Выберите правильный вариант.', items: [
      ["I'm out of breath because I ___.", ["have been running", "have run", "run"]], ["She ___ four cups of coffee today.", ["has drunk", "has been drinking"]],
      ["I ___ this book for a week, but I haven't finished it yet.", ["have been reading", "have read"]], ["We ___ the kitchen. Do you like it?", ["have painted", "have been painting"]],
      ["I ___ her since we were at school.", ["have known", "have been knowing"]], ["How long ___ for the bus?", ["have you been waiting", "are you waiting", "do you wait"]]
    ]},
    { type: 'translate', task: 'Переведите на английский.', items: [
      ["Я жду тебя уже полчаса.", "I have been waiting for you for half an hour."],
      ["Как долго ты учишь английский?", "How long have you been learning English?|How long have you been studying English?"],
      ["Весь день идет снег.", "It has been snowing all day.|It's been snowing all day."],
      ["Она работает здесь с 2019 года.", "She has been working here since 2019.|She's been working here since 2019.|She has worked here since 2019.|She's worked here since 2019."]
    ]},
    { type: 'listen', at: 2, task: 'Прослушайте предложение и соберите его из слов.', items: [
      ["I have been waiting for you at the bus stop for an hour.", "Я жду тебя на остановке уже час."],
      ["She has been working hard all day, so she's very tired.", "Она весь день много работала, поэтому очень устала."],
      ["How long have you been learning English?", "Как долго ты учишь английский?"]
    ]}
  ]},

{ id: 't-used-to', level: 'B1', title: 'Used to, be used to, would', sub: 'I used to · I am used to',
  rule: `
<p>Эти конструкции похожи внешне, но значат разное. <i>Used to</i> и <i>would</i> рассказывают о том, что <b>раньше бывало</b>, а теперь нет. А <i>be used to</i> и <i>get used to</i> — о том, что человек <b>привык</b> или привыкает. Главная подсказка — есть ли перед <i>used to</i> глагол <i>be</i> или <i>get</i>.</p>
${T(["Конструкция", "Значение", "Пример"], [
  ["<i>used to + V</i>", "привычка или состояние в прошлом, которых больше нет", "<i>I <b>used to live</b> in Omsk.</i> — Раньше я жил в Омске."],
  ["<i>would + V</i>", "повторяющиеся действия в прошлом (не состояния)", "<i>As kids we <b>would play</b> outside all day.</i> — В детстве мы, бывало, целыми днями играли на улице."],
  ["<i>be used to + -ing / сущ.</i>", "привык, уже привычно", "<i>She <b>is used to getting</b> up early.</i> — Она привыкла рано вставать."],
  ["<i>get used to + -ing / сущ.</i>", "привыкать, процесс", "<i>She <b>is getting used to driving</b> on the left.</i> — Она привыкает ездить по левой стороне."]
])}
<h3>Почему после be used to стоит -ing</h3>
<p>В оборотах <i>used to + V</i> и <i>be used to</i> слово <i>to</i> играет разную роль. В <i>used to live</i> это частица перед глаголом, поэтому дальше идет начальная форма: <i>live</i>. А в <i>be used to</i> и <i>get used to</i> слово <i>to</i> — предлог «к», как в русском «привык <b>к</b> чему-то». После предлога может стоять только существительное или форма глагола на <i>-ing</i>, которая работает как существительное: <i>I'm used to <b>the cold</b></i> — «Я привык к холоду», <i>I'm used to <b>getting up</b> early</i> — «Я привык рано вставать» (буквально «привык к раннему вставанию»). Такая <i>-ing</i>-форма называется герундием, подробно она разобрана в разделе 14 «Герундий». Сказать <i>I'm used to get up</i> нельзя.</p>
<p>Глагол <i>be</i> в обороте <i>be used to</i> меняется по временам, как обычно: <i>I <b>was</b> used to it</i> — «Я к этому привык (тогда)». А <i>get used to</i> подчеркивает процесс привыкания и тоже может стоять в любом времени: <i>You <b>will get</b> used to it</i> — «Ты привыкнешь».</p>
${E([
  ["<b>Did</b> you <b>use to</b> smoke?", "Ты раньше курил?"],
  ["I <b>didn't use to</b> like coffee.", "Раньше я не любил кофе."]
])}
${N("В вопросе и отрицании пишется <i>use to</i> без <i>-d</i>, потому что прошедшее время уже показывает <i>did</i>: <i>Did you <b>use to</b> smoke?</i> (ты раньше курил?) А <i>would</i> подходит только для повторяющихся действий — о состоянии в прошлом так не говорят: <i>He <b>used to</b> have long hair</i>, но не <i>He would have long hair</i>.")}`,
  ex: [
    { type: 'choice', task: 'Выберите правильный вариант.', items: [
      ["I ___ live in Omsk, but now I live in Moscow.", ["used to", "am used to", "get used to"]], ["She ___ getting up early — she has done it for years.", ["is used to", "used to", "uses to"]],
      ["When we were kids, we ___ play in the yard every evening.", ["would", "are used to", "get used to"]], ["It took me a month to ___ driving on the left.", ["get used to", "used to", "be use to"]],
      ["___ you use to smoke?", ["Did", "Do", "Were"]], ["I didn't ___ like coffee, but now I love it.", ["use to", "used to", "using to"]],
      ["He ___ have long hair when he was a student.", ["used to", "would"]], ["I'm not used to ___ at night.", ["working", "work", "worked"]]
    ]},
    { type: 'translate', task: 'Переведите на английский.', items: [
      ["Раньше я жил в деревне.", "I used to live in a village.|I used to live in the country."],
      ["Я привык рано вставать.", "I am used to getting up early."],
      ["Раньше он не любил рыбу.", "He didn't use to like fish.|He used not to like fish."],
      ["Ты скоро привыкнешь к новой школе.", "You will soon get used to the new school.|You will get used to the new school soon.|You'll get used to your new school soon.|You will soon get used to your new school."]
    ]},
    { type: 'listen', at: 2, task: 'Прослушайте предложение и соберите его из слов.', items: [
      ["There used to be a cinema opposite our house.", "Раньше напротив нашего дома был кинотеатр."],
      ["My grandfather would tell us stories every evening.", "Дедушка каждый вечер рассказывал нам истории."],
      ["I'm used to getting up early, but my brother isn't.", "Я привык рано вставать, а мой брат нет."]
    ]}
  ]},

{ id: 't-past-perfect', level: 'B2', title: 'Past Perfect', sub: 'The train had already left',
  rule: `
<p>Past Perfect показывает, что одно действие в прошлом завершилось <b>раньше</b> другого. Его называют «прошлым в прошлом». Например, <i>When we arrived, the train had already left</i>: мы пришли, но поезд ушел еще до этого. Без Past Perfect было бы непонятно, что случилось сначала.</p>
${F("had + <b>V3</b>")}
${E([
  ["When we arrived, the train <b>had</b> already <b>left</b>.", "Когда мы пришли, поезд уже ушел. (поезд ушел до нашего прихода)"],
  ["When we arrived, the train <b>left</b>.", "Когда мы пришли, поезд ушел. (поезд ушел, как только мы пришли)"],
  ["She <b>had never seen</b> the sea before she moved to Sochi.", "До переезда в Сочи она никогда не видела моря. (опыт до момента в прошлом)"],
  ["By 6 o'clock I <b>had finished</b> the work.", "К шести часам я закончил работу. (к определенному моменту в прошлом)"]
])}
<h3>Past Perfect Continuous</h3>
<p>Past Perfect Continuous относится к Past Perfect так же, как Present Perfect Continuous к Present Perfect. Он подчеркивает, что действие <b>длилось</b> какое-то время до определенного момента в прошлом — например, до того, как случилось другое событие. Часто в таком предложении указано, сколько времени это продолжалось (<i>for an hour</i>), или виден след этого действия (человек устал, руки грязные). Строится он одинаково для всех лиц: <i>had been</i> + глагол с <i>-ing</i>.</p>
${F("had been + <b>V-ing</b>")}
${E([
  ["He was tired because he <b>had been working</b> all day.", "Он устал, потому что весь день работал. (длительное действие до момента в прошлом)"],
  ["They <b>had been waiting</b> for an hour when the bus came.", "Они ждали уже час, когда пришел автобус. (ждали час до того, как пришел автобус)"]
])}
${M("Часто встречается со словами:", ["by the time", "before", "after", "already", "just", "never… before", "by 2010"])}
${N("Если порядок событий и так понятен из слов <i>before</i> или <i>after</i>, можно обойтись Past Simple: <i>After he finished, he went home.</i> (закончив, он пошел домой) Past Perfect в таком предложении не ошибка — он просто дополнительно подчеркивает, что одно действие было раньше другого.")}`,
  ex: [
    { type: 'gap', task: 'Поставьте глагол в Past Perfect.', items: [
      ["When we arrived at the station, the train ___ (already / leave).", "had already left|had left already|'d already left"],
      ["She ___ (never / see) the sea before she moved to Sochi.", "had never seen|'d never seen"],
      ["After he ___ (finish) his work, he went home.", "had finished|finished"], ["I didn't recognise him because he ___ (grow) a beard.", "had grown"],
      ["By the time the police came, the thieves ___ (escape).", "had escaped"], ["They ___ (not / eat) all day, so they were starving.", "had not eaten"],
      ["I was sure I ___ (see) her before.", "had seen"], ["By 2010 he ___ (write) five books.", "had written"]
    ]},
    { type: 'choice', task: 'Выберите правильный вариант.', items: [
      ["When I got home, I found that a thief ___ into the house.", ["had broken", "broke", "has broken"]], ["I ___ the book before I saw the film.", ["had read", "have read", "was reading"]],
      ["We recognised him at once: we ___ him the day before.", ["had met", "has met", "meets"]], ["His hands were dirty because he ___ the car.", ["had been repairing", "has repaired", "repairs"]],
      ["We ___ for two hours when the rain stopped.", ["had been walking", "have walked", "walk"]], ["By the time I woke up, my parents ___.", ["had left", "has left", "leaves"]]
    ]},
    { type: 'translate', task: 'Переведите на английский.', items: [
      ["Когда я пришел, урок уже начался.", "When I came, the lesson had already started.|When I arrived, the lesson had already started.|When I came, the lesson had already begun.|When I arrived, the lesson had already begun."],
      ["Когда я пришел домой, сестра уже ушла.", "When I came home, my sister had already left.|When I got home, my sister had already left.|When I came home, my sister had left.|When I got home, my sister had left."],
      ["К семи часам мы закончили работу.", "By seven o'clock we had finished the work.|By 7 o'clock we had finished the work.|We had finished the work by 7.|By seven o'clock we had finished our work.|We had finished our work by seven o'clock.|By seven we had finished our work.|By seven we had finished the work.|We had finished the work by seven o'clock.|We had finished work by seven.|We had finished the work by seven.|By seven o'clock we had finished work.|We had finished work by seven o'clock."],
      ["До той поездки я никогда не видел такого красивого города.", "I had never seen such a beautiful city before that trip.|I'd never seen such a beautiful city before that trip.|Before that trip I had never seen such a beautiful city."]
    ]},
    { type: 'listen', at: 2, task: 'Прослушайте предложение и соберите его из слов.', items: [
      ["When we arrived at the station, the train had already left.", "Когда мы приехали на вокзал, поезд уже ушел."],
      ["She had never seen the Pacific Ocean before that trip.", "До той поездки она никогда не видела Тихий океан."],
      ["There was no cake left because the guests had eaten it.", "Торта не осталось: гости его съели."]
    ]}
  ]},

{ id: 't-future-perfect', level: 'B2', title: 'Future Continuous и Future Perfect', sub: 'will be doing · will have done',
  rule: `
<p>Обе формы привязаны к определенному <b>моменту в будущем</b>, но смотрят на него по-разному. Future Continuous говорит, что будет происходить в этот момент: <i>This time tomorrow I'll be lying on the beach</i>. А Future Perfect — что к этому моменту уже будет сделано: <i>By Friday I will have finished the project</i>.</p>
${T(["Форма", "Значение", "Пример"], [
  ["<i>will be + V-ing</i>", "процесс в момент будущего", "<i>This time tomorrow I<b>'ll be lying</b> on the beach.</i> — Завтра в это время я буду лежать на пляже."],
  ["<i>will be + V-ing</i>", "вежливый вопрос о планах", "<i><b>Will</b> you <b>be using</b> the car tonight?</i> — Ты будешь пользоваться машиной сегодня вечером?"],
  ["<i>will have + V3</i>", "завершится к моменту", "<i>By 2030 they <b>will have built</b> the bridge.</i> — К 2030 году они построят мост."]
])}
<p>Почему вопрос в Future Continuous звучит вежливо? Он спрашивает о планах, которые у человека уже есть, и не давит на него. Например, <i>Will you use the car tonight?</i> (ты возьмешь машину сегодня вечером?) может прозвучать как просьба или даже требование, а <i>Will you <b>be using</b> the car tonight?</i> — просто «Ты будешь пользоваться машиной сегодня вечером?» (вопрос о планах). Так обычно спрашивают перед тем, как о чем-то попросить: если машина не нужна, можно ее одолжить.</p>
<p>Слово <i>by</i> со временем значит «к, не позже»: <i>by Friday</i> — «к пятнице», <i>by then</i> — «к тому времени». С Future Perfect оно встречается особенно часто, потому что это время как раз говорит о том, что будет сделано к какому-то сроку.</p>
${M("Часто встречается со словами:", ["this time tomorrow", "at 8 pm tomorrow", "by Friday", "by the time", "by then"])}
${N("После <i>by the time</i> («к тому времени, как») будущее время не ставят — вместо него используют Present Simple: <i>By the time you <b>arrive</b>, I'll have finished</i>, а не <i>By the time you will arrive</i>.")}`,
  ex: [
    { type: 'gap', task: 'Поставьте глагол в Future Continuous или Future Perfect.', items: [
      ["This time tomorrow I ___ (lie) on the beach.", "will be lying"], ["By 2030 they ___ (build) the new bridge.", "will have built"],
      ["Don't call at eight — we ___ (have) dinner.", "will be having"], ["By the time you arrive, I ___ (finish) the report.", "will have finished"],
      ["By June she ___ (finish) school.", "will have finished"], ["___ you be using the car tonight?", "will"],
      ["At noon tomorrow we ___ (fly) over the Alps.", "will be flying"], ["By the end of the year I ___ (read) twenty books.", "will have read"]
    ]},
    { type: 'choice', task: 'Выберите правильный вариант.', items: [
      ["By next week I ___ the book.", ["will have read", "will be reading", "am reading"]], ["At 10 am tomorrow I ___ an exam, so please don't call me.", ["will be taking", "will have taken", "take"]],
      ["Hurry up! The film ___ by the time we get there.", ["will have started", "will be starting", "starts"]], ["By the time she ___, we'll have eaten the cake.", ["arrives", "will arrive", "will have arrived"]]
    ]},
    { type: 'translate', task: 'Переведите на английский.', items: [
      ["Завтра в это время я буду лететь в Москву.", "This time tomorrow I will be flying to Moscow.|I will be flying to Moscow this time tomorrow.|At this time tomorrow I will be flying to Moscow.|I will be flying to Moscow at this time tomorrow.|Tomorrow at this time I will be flying to Moscow."],
      ["К пятнице я уже закончу проект.", "I will have finished the project by Friday.|By Friday I will have finished the project."],
      ["Не звони в восемь — мы будем ужинать.", "Don't call at eight — we will be having dinner.|Don't phone at eight — we will be having dinner.|Don't call at eight — we will be having supper.|Don't call at 8 — we will be having dinner."],
      ["К лету мы уже переедем в новую квартиру.", "By the summer we will have moved to a new flat.|By summer we will have moved to a new flat.|We will have moved to a new flat by the summer.|By the summer we will have moved into a new flat.|By the summer we will have moved to a new apartment.|We will have moved into a new flat by the summer."]
    ]},
    { type: 'listen', at: 2, task: 'Прослушайте предложение и соберите его из слов.', items: [
      ["This time tomorrow I will be lying on the beach.", "Завтра в это время я буду лежать на пляже."],
      ["By the end of the year we will have built two new schools.", "К концу года мы построим две новые школы."],
      ["Don't call at eight. We will be having dinner.", "Не звони в восемь: мы будем ужинать."]
    ]}
  ]},

{ id: 't-review', level: 'B2', title: 'Повторение: все времена', sub: 'Simple, Continuous, Perfect',
  rule: `
<p>Здесь собраны все времена активного залога в одной таблице. Пользуйтесь ею как шпаргалкой: в упражнениях этой темы времена перемешаны, и для каждого предложения нужно сначала понять, что именно происходит, а потом выбрать форму.</p>
<p>Активный залог — это обычная форма глагола, когда подлежащее само совершает действие: <i>Tom <b>wrote</b> the letter</i> — «Том написал письмо». Есть еще пассивный (страдательный) залог, когда действие совершается над подлежащим: <i>The letter <b>was written</b></i> — «Письмо было написано». Он разобран в разделе 10.</p>
${T(["", "Simple", "Continuous", "Perfect", "Perfect Continuous"], [
  ["Present", "<i>I <b>work</b></i>", "<i>I <b>am working</b></i>", "<i>I <b>have worked</b></i>", "<i>I <b>have been working</b></i>"],
  ["Past", "<i>I <b>worked</b></i>", "<i>I <b>was working</b></i>", "<i>I <b>had worked</b></i>", "<i>I <b>had been working</b></i>"],
  ["Future", "<i>I <b>will work</b></i>", "<i>I <b>will be working</b></i>", "<i>I <b>will have worked</b></i>", "<i>I <b>will have been working</b></i>"]
])}
<p>Одна форма в таблице не разбиралась отдельно — Future Perfect Continuous (<i>will have been + V-ing</i>). Она говорит, что к определенному моменту в будущем действие будет длиться уже какое-то время: <i>By June I <b>will have been working</b> here for ten years</i> — «В июне будет десять лет, как я здесь работаю». Встречается она редко, и достаточно ее узнавать.</p>
<h3>Как выбирать</h3>
${T(["Вопрос к себе", "Время"], [
  ["Бывает регулярно, всегда? Или это просто факт, законченное событие?", "Simple"],
  ["Идет в определенный момент?", "Continuous"],
  ["Завершилось к моменту, важен результат?", "Perfect"],
  ["Длилось какое-то время до момента?", "Perfect Continuous"]
])}`,
  ex: [
    { type: 'gap', task: 'Поставьте глагол в нужное время.', items: [
      ["Water ___ (boil) at 100 °C.", "boils"], ["Be quiet! The baby ___ (sleep).", "is sleeping|'s sleeping"],
      ["I ___ (see) him yesterday.", "saw"], ["She ___ (never / be) to Paris.", "has never been|'s never been"],
      ["When I came in, they ___ (have) dinner.", "were having"], ["By the time we arrived, the film ___ (start).", "had started"],
      ["I ___ (wait) for you for twenty minutes already!", "have been waiting"], ["I ___ (call) you as soon as I get home.", "will call"],
      ["This time next week we ___ (lie) on the beach.", "will be lying"], ["He ___ (work) here since 2015.", "has worked|has been working"],
      ["Look! The bus ___ (come).", "is coming|'s coming"], ["We ___ (go) to the seaside every summer when I was a child.", "went|used to go|would go"]
    ]},
    { type: 'text', task: 'Поставьте глаголы из скобок в нужное время.', text: "Dear Ann, I ___ (write) to you from London. I ___ (arrive) here three days ago. I ___ (already / visit) the British Museum and the Tower. Yesterday, while I ___ (walk) along the Thames, I ___ (meet) an old school friend. He ___ (live) in London since 2020. Tomorrow we ___ (go) to the theatre — he ___ (already / buy) the tickets. I ___ (write) again soon.",
      answers: ["am writing", "arrived", "have already visited", "was walking", "met", "has lived|has been living|'s lived|'s been living", "are going|are going to go|will go", "has already bought|'s already bought", "will write"] },
    { type: 'choice', task: 'Выберите правильный вариант.', items: [
      ["I ___ English for five years.", ["have been learning", "am learning", "learn"]], ["She ___ when I came in.", ["was cooking", "cooked", "has cooked"]],
      ["They ___ married in 2015.", ["got", "have got", "had got"]], ["I ___ my keys. Please help me look for them.", ["have lost", "lost", "had lost"]],
      ["By next summer he ___ school.", ["will have finished", "will finish", "finishes"]], ["I knew the ending because I ___ the film before.", ["had seen", "has seen", "saw"]]
    ]},
    { type: 'listen', at: 2, task: 'Прослушайте предложение и соберите его из слов.', items: [
      ["I have lived in this city for five years, but I still don't know my neighbours.", "Я живу в этом городе пять лет, но до сих пор не знаю своих соседей."],
      ["When I came home, the children were sleeping and my husband had already washed the dishes.", "Когда я пришла домой, дети спали, а муж уже помыл посуду."],
      ["Next year my brother will be studying at the same university as me.", "В следующем году мой брат будет учиться в том же университете, что и я."]
    ]}
  ]}
]});

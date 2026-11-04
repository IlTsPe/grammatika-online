BOOK.push({ n: 2, id: 'tenses', title: 'Употребление времен',
intro: 'Самый большой раздел тренажера. Темы идут от глагола <i>to be</i> и Present Simple к перфектным и длительным временам; в конце — смешанное повторение.',
topics: [

{ id: 't-to-be', level: 'A1', title: 'Глагол to be', sub: 'am / is / are, was / were',
  rule: `
<p>Глагол <i>to be</i> переводится как «быть, находиться, являться». В русском языке в настоящем времени эту связку часто не произносят: например, говорим «Я студент» или «Она дома». В английском же без глагола <i>to be</i> предложение будет неполным, поэтому связку нужно поставить: <i>I <b>am</b> a student</i> — я студент (буквально «я есть студент»).</p>
${T(["Лицо", "Настоящее", "Прошедшее", "Будущее"], [
  ["<i>I</i>", "<i><b>am</b></i> (I'm)", "<i><b>was</b></i>", "<i><b>will be</b></i>"],
  ["<i>he / she / it</i>", "<i><b>is</b></i> (he's)", "<i><b>was</b></i>", "<i><b>will be</b></i>"],
  ["<i>we / you / they</i>", "<i><b>are</b></i> (we're)", "<i><b>were</b></i>", "<i><b>will be</b></i>"]
])}
<p>В скобках показаны сокращенные формы. В разговоре и в неофициальных текстах местоимение и глагол сливаются в одно слово, а пропущенная буква заменяется апострофом: <i>I am</i> → <i>I'm</i>, <i>he is</i> → <i>he's</i>, <i>we are</i> → <i>we're</i>. Так же сокращается и <i>will</i>: <i>I will be</i> → <i>I'll be</i>. Значение от этого не меняется.</p>
<h3>Отрицание и вопрос</h3>
<p>Чтобы построить отрицание, после глагола <i>to be</i> ставят частицу <i>not</i>. Ее тоже часто сокращают: <i>is not</i> → <i>isn't</i>, <i>are not</i> → <i>aren't</i>, <i>was not</i> → <i>wasn't</i>, <i>were not</i> → <i>weren't</i>; только <i>am not</i> так не сокращают: с местоимением сливается <i>am</i>, а <i>not</i> остается отдельным словом — <i>I'm not</i>. Чтобы задать вопрос, глагол переносят на первое место, перед подлежащим: <i>You are ready</i> → <i><b>Are</b> you ready?</i> — ты готов?</p>
<p>На такой вопрос обычно отвечают коротко: <i>yes</i> или <i>no</i>, местоимение и тот же глагол — например, <i>Yes, I am</i> или <i>No, I'm not</i>. Это называется кратким ответом; по-русски ему соответствует просто «Да» или «Нет». Если же в начале вопроса стоит вопросительное слово (<i>where, when, why</i>), такой вопрос называют специальным: он спрашивает не «да или нет?», а о подробностях. Порядок слов в нем такой же, как в вопросе с ответом «да / нет» (глагол перед подлежащим), только впереди стоит вопросительное слово. Подробно вопросы разобраны в разделе 3 «Вопросы».</p>
${E([
  ["I <b>am not</b> tired. She <b>isn't</b> here. They <b>weren't</b> at home.", "Я не устал. Ее здесь нет. Их не было дома. (not ставится после глагола)"],
  ["<b>Are</b> you ready? — Yes, I <b>am</b>. / No, I'm not.", "Ты готов? — Да. / Нет. (в вопросе глагол перед подлежащим)"],
  ["<b>Was</b> it cold yesterday? — Yes, it <b>was</b>.", "Вчера было холодно? — Да. (в положительном кратком ответе глагол не сокращают)"],
  ["Where <b>were</b> you last night?", "Где ты был вчера вечером? (специальный вопрос — с вопросительным словом)"]
])}
${N("Когда мы говорим о возрасте, погоде, времени или цене, в английском тоже нужен <i>to be</i>, хотя по-русски его не слышно: <i>I <b>am</b> twelve</i> — мне двенадцать, <i>It <b>is</b> cold</i> — холодно, <i>It <b>is</b> five o'clock</i> — пять часов, <i>How much <b>is</b> it?</i> — сколько стоит?")}`,
  /* перевод слов в упражнениях: по наведению или касанию (gloss.js); ключи — в нижнем регистре, как слово стоит в тексте */
  gloss: {
    'tired': 'уставший',
    'last week': 'на прошлой неделе', 'at home': 'дома', 'a': 'неопределенный артикль', 'after': 'после', 'again': 'снова', 'and': 'и',
    'at': 'в (о времени); у, на (о месте)', 'brother': 'брат', 'cold': 'холодный; холодно', 'doctor': 'врач', 'easy': 'легкий',
    'friend': 'друг', 'from': 'из, от', 'glasses': 'очки', 'grandparents': 'бабушка и дедушка', 'he': 'он', 'home': 'дом; домой',
    'hot': 'жаркий; жарко', 'how': 'как', 'hungry': 'голодный', 'i': 'я', 'ill': 'больной', 'in': 'в',
    'is': 'есть, является (форма to be)', 'it': 'это; он, она (о предмете)', 'kazan': 'Казань', 'last': 'прошлый', 'late': 'поздно',
    'married': 'женат, замужем', 'my': 'мой, моя, мое', 'not': 'не', 'now': 'сейчас', "o'clock": 'часов (ровно)', 'old': 'старый', 'how old': 'сколько лет',
    'on': 'на; в (о днях)', 'parents': 'родители', 'paris': 'Париж', 'party': 'вечеринка', 'ready': 'готов', 'saturday': 'суббота',
    'school': 'школа', 'she': 'она', 'sister': 'сестра', 'summer': 'лето', 'sunny': 'солнечный', 'teachers': 'учителя', 'ten': 'десять',
    'test': 'контрольная', 'the': 'определенный артикль', 'they': 'они', 'today': 'сегодня', 'tomorrow': 'завтра',
    'trip': 'поездка', 'twelve': 'двенадцать', 'very': 'очень', 'we': 'мы', 'weather': 'погода', 'week': 'неделя',
    'were': 'были (форма to be)', 'when': 'когда', 'where': 'где, куда', 'years': 'годы, лет', 'yes': 'да', 'yesterday': 'вчера',
    'you': 'ты, вы', 'young': 'молодой', 'your': 'твой, ваш'
  },
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
      ["___ you hungry?", ["Are", "Is", "Am"]], ["She ___ at school today. She is ill.", ["isn't", "aren't", "am not"]],
      ["— Is he your friend? — Yes, he ___.", ["is", "does", "'s"]], ["I ___ twelve years old.", ["am", "have", "is"]],
      ["Tomorrow it ___ sunny.", ["will be", "is be", "will"]], ["My grandparents ___ teachers when they were young.", ["were", "was", "are"]]
    ]},
    { type: 'translate', task: 'Переведите на английский.', items: [
      ["Моя сестра — медсестра.", "My sister is a nurse."], ["Где были твои родители вчера?", "Where were your parents yesterday?"],
      ["Моему дедушке семьдесят лет.", "My grandfather is seventy.|My grandfather is seventy years old.|My grandfather is 70.|My grandfather is 70 years old.|My grandad is seventy.|My grandad is seventy years old."],
      ["Сегодня холодно.", "It is cold today.|It's cold today.|Today it is cold."],
      ["Мы не были в Москве.", "We were not in Moscow."],
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
${M("Часто встречается со словами:", ["always", "usually", "often", "sometimes", "seldom", "never", "every day", "on Mondays", "once a week"])}
<h3>Написание окончания -s</h3>
${E([
  ["go → go<b>es</b>, watch → watch<b>es</b>, wash → wash<b>es</b>", "после o, s, sh, ch, x"],
  ["study → stud<b>ies</b>, play → play<b>s</b>", "согласная + y → ies; гласная + y → s"],
  ["have → <b>has</b>", "исключение"]
])}
${N("Слова, которые показывают, как часто что-то происходит (<i>always, often, never</i>), ставятся <b>перед</b> смысловым глаголом: <i>She <b>often</b> reads</i>. Но если в предложении есть <i>to be</i>, они идут <b>после</b> него: <i>She is <b>often</b> late</i>. И помните: окончание <i>-s</i> уже «забрал» вспомогательный <i>does / doesn't</i>, поэтому после него глагол стоит без <i>-s</i>: <i>Does she read?</i> — она читает?, а не <i>Does she reads?</i>")}`,
  /* перевод слов в упражнениях: по наведению или касанию (gloss.js); ключи — в нижнем регистре, как слово стоит в тексте */
  gloss: {
    'bees': 'пчелы', 'honey': 'мед',
    'every day': 'каждый день', 'a': 'неопределенный артикль', 'and': 'и', 'at': 'в (о времени); у, на (о месте)', 'bank': 'банк',
    'bike': 'велосипед', 'brother': 'брат', 'but': 'но', 'by': 'на (о транспорте); к (о сроке)', 'car': 'машина', 'cat': 'кошка',
    'coffee': 'кофе', 'day': 'день', 'dinner': 'ужин', 'do': 'делать; вспомогательный глагол', 'english': 'английский', 'evening': 'вечер',
    'every': 'каждый', 'father': 'отец', 'fish': 'рыба', 'french': 'французский', 'friend': 'друг', 'gym': 'спортзал',
    'have': 'иметь; есть (о еде)', 'he': 'он', 'her': 'ее, ей', 'history': 'история', 'homework': 'домашнее задание',
    'hospital': 'больница', 'i': 'я', 'in': 'в', 'jazz': 'джаз', 'late': 'поздно', 'like': 'нравиться, любить',
    'live': 'жить', 'lot': 'много (a lot)', 'maths': 'математика', 'meat': 'мясо', 'mondays': 'понедельники', 'morning': 'утро',
    'mother': 'мама', 'mum': 'мама', 'my': 'мой, моя, мое', 'on': 'на; в (о днях)', 'open': 'открывать(ся)', 'parents': 'родители',
    'samara': 'Самара', 'school': 'школа', 'seven': 'семь', 'she': 'она', 'shop': 'магазин', 'sisters': 'сестры', 'small': 'маленький',
    'son': 'сын', 'speak': 'говорить', 'sundays': 'воскресенья', 'the': 'определенный артикль', 'they': 'они', 'time': 'время',
    'to': 'в, на (куда); частица перед глаголом', 'town': 'город', 'train': 'поезд', 'tv': 'телевизор', 'two': 'два',
    'up': 'вверх (get up — вставать)', 'water': 'вода', 'we': 'мы', 'what': 'что, какой', 'where': 'где, куда', 'yes': 'да', 'you': 'ты, вы',
    'your': 'твой, ваш'
  },
  ex: [
    { type: 'gap', task: 'Поставьте глагол в Present Simple. Если в скобках несколько слов через косую черту, используйте в ответе их все — в нужной форме и порядке.', items: [
      ["She ___ (work) in a bank.", "works"], ["My parents ___ (live) in Samara.", "live"],
      ["He ___ (watch) TV every evening.", "watches"], ["The train ___ (leave) at 7:15.", "leaves"],
      ["Bees ___ (make) honey.", "make"], ["My son ___ (study) French.", "studies"],
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
    { type: 'text', task: 'Поставьте глаголы из скобок в Present Simple. Если в скобках несколько слов через косую черту, используйте в ответе их все — в нужной форме и порядке.', text: "My friend Kate ___ (live) in a small town. She ___ (get) up at seven every morning and ___ (go) to school by bike. Her mother ___ (work) at a hospital and her father ___ (teach) history. Kate ___ (not / like) maths, but she ___ (love) English. In the evening she ___ (do) her homework and ___ (watch) TV.",
      answers: ["lives", "gets", "goes", "works", "teaches", "does not like", "loves", "does", "watches"] },
    { type: 'translate', task: 'Переведите на английский.', items: [
      ["Я обычно встаю в семь.", "I usually get up at seven.|I usually get up at 7.|I usually get up at seven o'clock."],
      ["Моя сестра не любит молоко.", "My sister doesn't like milk."],
      ["Ты играешь в теннис?", "Do you play tennis?"],
      ["Где работает твой папа?", "Where does your father work?|Where does your dad work?"],
      ["Она всегда занята.", "She is always busy.|She's always busy."],
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
<p>Английские глаголы делятся на правильные и неправильные. Правильные образуют прошедшее время по общему правилу — с окончанием <i>-ed</i>: <i>visit</i> → <i>visited</i>. У неправильных глаголов прошедшее время — особое слово, которое нужно просто запомнить: <i>go</i> → <i>went</i>, <i>see</i> → <i>saw</i>. В словарях и таблицах у неправильного глагола дают три формы: начальную (<i>go</i>), вторую — для Past Simple (<i>went</i>) и третью — для перфектных времен (<i>gone</i>). Все частые неправильные глаголы с тремя формами и переводом собраны на странице <button class="link-btn" type="button" data-go="irregular-verbs">«Неправильные глаголы»</button>. Отрицание и вопрос в Past Simple строятся со вспомогательным глаголом <i>did</i> — одинаковым для всех лиц; <i>did not</i> сокращается до <i>didn't</i>.</p>
${M("Часто встречается со словами:", ["yesterday", "last week", "two days ago", "in 2019", "when I was a child", "the other day"])}
<h3>Написание -ed</h3>
${E([
  ["live → live<b>d</b>", "после -e добавляем только -d"],
  ["stop → sto<b>pped</b>, prefer → prefe<b>rred</b>, travel → trave<b>lled</b>", "удвоение согласной: слово кончается на одну гласную и одну согласную, а последний слог ударный; в британском английском конечная l после одной гласной удваивается и в безударном слоге"],
  ["study → stud<b>ied</b>, play → play<b>ed</b>", "согласная + y → ied; гласная + y → ed"]
])}
${N("После <i>did</i> смысловой глагол возвращается в начальную форму — прошедшее время уже показал вспомогательный глагол: <i>Did you <b>see</b> him?</i>, а не <i>Did you saw him?</i>; <i>I didn't <b>go</b></i>, а не <i>I didn't went</i>.")}`,
  /* перевод слов в упражнениях: по наведению или касанию (gloss.js); ключи — в нижнем регистре, как слово стоит в тексте */
  gloss: {
    'tired': 'уставший',
    'ice cream': 'мороженое', 'at home': 'дома', 'a': 'неопределенный артикль', 'ago': 'назад', 'all': 'весь, все', 'and': 'и',
    'arrive': 'приезжать, прибывать', 'at': 'в (о времени); у, на (о месте)', 'breakfast': 'завтрак', 'but': 'но', 'café': 'кафе',
    'cold': 'холодный; холодно', 'cream': 'сливки', 'day': 'день', 'days': 'дни', 'did': 'вспомогательный глагол прошедшего времени',
    'dress': 'платье', 'eight': 'восемь', 'evening': 'вечер', 'film': 'фильм', 'football': 'футбол', 'for': 'для; в течение',
    'friend': 'друг', 'go': 'идти, ехать', 'grandparents': 'бабушка и дедушка', 'happy': 'счастливый', 'he': 'он', 'her': 'ее, ей',
    'him': 'его, ему', 'his': 'его', 'holiday': 'отпуск, каникулы', 'home': 'дом; домой', 'homework': 'домашнее задание', 'i': 'я',
    'ice': 'лед', 'in': 'в', 'it': 'это; он, она (о предмете)', 'keys': 'ключи', 'last': 'прошлый', 'late': 'поздно', 'letter': 'письмо',
    'monday': 'понедельник', 'morning': 'утро', 'museum': 'музей', 'my': 'мой, моя, мое', 'new': 'новый',
    'on': 'на; в (о днях)', 'our': 'наш', 'parents': 'родители', 'park': 'парк', 'rome': 'Рим', 'she': 'она', 'small': 'маленький',
    'sunday': 'воскресенье', 'sunny': 'солнечный', 'test': 'контрольная', 'the': 'определенный артикль', 'they': 'они',
    'this': 'этот, эта, это', 'to': 'в, на (куда); частица перед глаголом', 'together': 'вместе', 'two': 'два', 'up': 'вверх (get up — вставать)',
    'very': 'очень', 'way': 'путь, дорога', 'we': 'мы', 'weekend': 'выходные', 'when': 'когда', 'where': 'где, куда', 'winter': 'зима',
    'work': 'работа; работать', 'yesterday': 'вчера', 'you': 'ты, вы'
  },
  ex: [
    { type: 'gap', task: 'Поставьте глагол в Past Simple. Если в скобках несколько слов через косую черту, используйте в ответе их все — в нужной форме и порядке.', items: [
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
    { type: 'text', task: 'Поставьте глаголы из скобок в Past Simple. Если в скобках несколько слов через косую черту, используйте в ответе их все — в нужной форме и порядке.', text: "Last Sunday I ___ (get) up late. I ___ (have) breakfast and ___ (call) my friend Mike. We ___ (walk) to the park together. It ___ (be) a sunny day. We ___ (play) football and ___ (eat) ice cream. In the evening I ___ (come) home tired but happy. I ___ (not / do) my homework!",
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

{ id: 't-future', level: 'A1', title: 'Future Simple', sub: "I'll help · Will you…? · I won't",
  rule: `
<p>Будущее время с <i>will</i> подходит, когда решение принимается прямо в момент речи, когда что-то обещают или предлагают, а также когда говорящий предсказывает, что, по его мнению, случится. Основные случаи — в таблице.</p>
${F("will + <b>V</b>")}
${T(["Когда", "Пример"], [
  ["решение в момент речи", "<i>There's a man at the door. — I'<b>ll</b> open it.</i> — У двери стоит мужчина. — Я открою."],
  ["обещание, предложение, просьба", "<i>I <b>will</b> call you tonight, I promise.</i> — Я позвоню тебе вечером, обещаю."],
  ["прогноз по мнению говорящего (<i>I think, probably</i>)", "<i>I think it <b>will</b> be a good film.</i> — Думаю, это будет хороший фильм."],
  ["факт о будущем", "<i>I <b>will</b> be 15 next year.</i> — В следующем году мне будет 15."]
])}
<h3>Как строятся формы</h3>
<p><i>Will</i> одинаков для всех лиц, а после него идет начальная форма глагола без <i>to</i>: <i>I will go, she will go</i>. В речи <i>will</i> обычно сокращается до <i>'ll</i>: <i>I'll, she'll, we'll</i>. Отрицание — <i>will not</i>, сокращенно <i>won't</i>: <i>I <b>won't</b> tell anyone</i> — я никому не скажу. В вопросе <i>will</i> встает перед подлежащим: <i><b>Will</b> you help me?</i> — ты мне поможешь?</p>
<p>Расписание — поезда, уроки, фильмы — описывают в Present Simple, хотя речь о будущем: <i>The train <b>leaves</b> at 9</i> — поезд отправляется в 9.</p>
`,
  /* перевод слов в упражнениях: по наведению или касанию (gloss.js); ключи — в нижнем регистре, как слово стоит в тексте */
  gloss: {
    'cold': 'холодный; холодно',
    'a': 'неопределенный артикль', 'bag': 'сумка', 'book': 'книга', 'box': 'коробка', 'bring': 'принести', 'cake': 'торт',
    'chocolate': 'шоколад', 'come': 'приходить', 'dark': 'темный; темно', 'do': 'делать; вспомогательный глагол', "don't": 'не (= do not)',
    'film': 'фильм', 'forget': 'забывать', 'from': 'из, от', 'give': 'дать', 'good': 'хороший', 'have': 'иметь; есть (о еде)',
    'heavy': 'тяжелый', 'here': 'здесь, сюда', 'i': 'я', "i'm": 'я (= I am)', 'in': 'в', 'is': 'есть, является (форма to be)',
    'it': 'это; он, она (о предмете)', "it's": 'это (= it is)', 'light': 'свет', 'london': 'Лондон', 'maybe': 'может быть',
    'me': 'меня, мне', 'month': 'месяц', 'my': 'мой, моя, мое', 'next': 'следующий', 'on': 'на; в (о днях)', 'one': 'один',
    'party': 'вечеринка', 'postcard': 'открытка', 'promise': 'обещать', 'saturday': 'суббота', 'secret': 'секрет', 'send': 'отправить',
    'she': 'она', 'some': 'немного, несколько', 'ten': 'десять', 'the': 'определенный артикль', 'they': 'они', 'think': 'думать',
    'thirsty': 'хочется пить', 'this': 'этот, эта, это', 'to': 'в, на (куда); частица перед глаголом', 'tomorrow': 'завтра',
    'understand': 'понимать', 'very': 'очень', 'wait': 'ждать', 'want': 'хотеть', 'water': 'вода', 'which': 'какой (из), который', 'with': 'с',
    'word': 'слово', 'worry': 'волноваться', 'you': 'ты, вы', 'your': 'твой, ваш'
  },
  ex: [
    { type: 'gap', task: 'Поставьте глагол в Future Simple. Если в скобках несколько слов через косую черту, используйте в ответе их все — в нужной форме и порядке.', items: [
      ["— I don't understand this word. — Don't worry, I ___ (explain) it to you.", "will explain"], ["— It's dark in here. — I ___ (switch) on the light.", "will switch"],
      ["— This box is very heavy. — Give it to me, I ___ (help) you.", "will help"], ["Maybe they ___ (not / come) tomorrow.", "will not come"],
      ["She ___ (be) ten next month.", "will be"], ["___ you ___ (help) me with this bag?", ["will", "help"]],
      ["I promise I ___ (not / tell) your secret.", "will not tell"], ["I think you ___ (like) this book.", "will like"]
    ]},
    { type: 'choice', task: 'Выберите правильный вариант.', items: [
      ["— Which cake do you want? — I ___ have the chocolate one.", ["will", "am", "do"]], ["I ___ send you a postcard from London, I promise.", ["will", "am", "did"]],
      ["— I'm thirsty. — Wait, I ___ bring you some water.", ["will", "do", "was"]], ["I think it ___ cold tomorrow.", ["will be", "will", "be"]],
      ["___ you come to my party on Saturday?", ["Will", "Do", "Are"]], ["Don't worry, I ___ forget.", ["won't", "don't", "am not"]]
    ]},
    { type: 'translate', task: 'Переведите на английский.', items: [
      ["Я помогу тебе.", "I will help you."],
      ["Я напишу тебе завтра.", "I will write to you tomorrow.|Tomorrow I will write to you.|I will text you tomorrow."],
      ["Обещаю, я не опоздаю.", "I promise I will not be late.|I promise that I will not be late."],
      ["Ты придешь завтра?", "Will you come tomorrow?"],
      ["Думаю, ему понравится подарок.", "I think he will like the present.|I think he will like the gift."]
    ]},
    { type: 'listen', at: 2, task: 'Прослушайте предложение и соберите его из слов.', items: [
      ["There will be a big crowd at the concert tonight.", "Сегодня вечером на концерте будет толпа народу."],
      ["I think our team will win the match on Sunday.", "Думаю, наша команда выиграет матч в воскресенье."],
      ["Don't worry, I'll take care of your cat.", "Не волнуйся, я позабочусь о твоей кошке."]
    ]}
  ]},

{ id: 't-going-to', level: 'A1', title: 'Be going to', sub: "I'm going to buy · It's going to rain",
  rule: `
<p>Оборот <i>be going to</i> — собираться — говорит о будущем, которое уже «видно» сейчас.</p>
${F("am / is / are + going to + <b>V</b>")}
${T(["Когда", "Пример"], [
  ["намерение, решено заранее", "<i>We <b>are going to</b> buy a car.</i> — Мы собираемся купить машину."],
  ["прогноз по видимым признакам", "<i>Look at the clouds! It <b>is going to</b> rain.</i> — Посмотри на тучи! Сейчас пойдет дождь."]
])}
<p>Глагол <i>be</i> в обороте меняется по лицам, как обычно: <i>I <b>am</b> going to, he <b>is</b> going to, they <b>are</b> going to</i>. Отрицание и вопрос тоже строятся через <i>be</i>: <i>I'm <b>not</b> going to buy it</i> — я не собираюсь это покупать, <i><b>Are</b> you going to buy it?</i> — ты собираешься это купить?</p>
<h3>Will или going to</h3>
<p>Выбор зависит от того, когда принято решение и на чем основан прогноз:</p>
${E([
  ["— I'm hungry. — I'<b>ll</b> make a sandwich.", "— Я голоден. — Сейчас сделаю бутерброд. (решил прямо сейчас)"],
  ["I'<b>m going to</b> make a cake for her birthday.", "Я собираюсь испечь торт к ее дню рождения. (решил заранее)"],
  ["I think it <b>will</b> rain tomorrow.", "Думаю, завтра будет дождь. (просто мнение)"],
  ["Hurry up! The bus <b>is going to</b> leave.", "Скорее! Автобус сейчас уйдет. (видно, что двери закрываются)"]
])}
${N("<i>Going to</i> в этом обороте не значит «идти»: <i>I'm going to stay at home</i> — я собираюсь остаться дома.")}`,
  /* перевод слов в упражнениях: по наведению или касанию (gloss.js); ключи — в нижнем регистре, как слово стоит в тексте */
  gloss: {
    'ringing': 'звонит',
    'answer': 'ответ; ответить', 'back': 'назад, обратно', 'book': 'книга', 'bring': 'принести', 'is': 'есть, является (форма to be)', 'phone': 'телефон', 'tomorrow': 'завтра',
    'dark': 'темный; темно', 'storm': 'буря', 'there': 'в обороте there is / there are: есть, имеется',
    'look at': 'посмотри на', 'be careful': 'будь осторожен', 'last week': 'на прошлой неделе', 'a': 'неопределенный артикль',
    'at': 'в (о времени); у, на (о месте)', 'be': 'быть', 'black': 'черный', 'boring': 'скучный', 'bought': 'купил (от buy)',
    'buy': 'купить', 'call': 'звонить', 'car': 'машина', 'careful': 'осторожный', 'close': 'закрыть', 'clouds': 'тучи, облака',
    'coffee': 'кофе', 'cold': 'холодный; холодно', 'decided': 'решили (от decide)', 'decision': 'решение', 'door': 'дверь',
    'fall': 'упасть', 'film': 'фильм', 'fly': 'лететь', 'grandmother': 'бабушка', 'have': 'иметь; есть (о еде)', 'he': 'он',
    'him': 'его, ему', 'his': 'его', 'i': 'я', "i'm": 'я (= I am)', 'in': 'в', 'it': 'это; он, она (о предмете)', 'june': 'июнь',
    'ladder': 'стремянка', 'last': 'прошлый', 'look': 'смотреть; смотри', 'looks': 'выглядит', 'made': 'сделали; приняли (решение)',
    'man': 'мужчина', 'married': 'женат, замужем', 'may': 'май', 'medicine': 'лекарство', 'month': 'месяц', 'new': 'новый',
    'next': 'следующий', 'off': 'с (fall off — упасть с)', 'ok': 'хорошо, ладно', 'old': 'старый', 'open': 'открыть', 'or': 'или',
    'our': 'наш', 'paint': 'краска; красить', 'paris': 'Париж', 'plane': 'самолет', 'please': 'пожалуйста', 'promise': 'обещать',
    'rain': 'дождь', 'room': 'комната', 'she': 'она', 'sky': 'небо', 'some': 'немного, несколько', 'summer': 'лето', 'tea': 'чай',
    'that': 'тот, та, то; что (союз)', 'the': 'определенный артикль', "there's": 'есть, имеется (= there is)', 'they': 'они',
    'this': 'этот, эта, это', 'those': 'те', 'ticket': 'билет', 'to': 'в, на (куда); частица перед глаголом', 'told': 'сказал (от tell)',
    'tonight': 'сегодня вечером', 'us': 'нас, нам', 'wait': 'ждать', 'we': 'мы', 'week': 'неделя', 'weekend': 'выходные', 'window': 'окно',
    'year': 'год', 'yesterday': 'вчера', 'you': 'ты, вы', 'your': 'твой, ваш'
  },
  ex: [
    { type: 'choice', task: 'Выберите will или going to.', items: [
      ["— The phone is ringing. — OK, I ___ answer it.", ["will", "am going to"]], ["Look at that dark sky! There ___ a storm.", ["is going to be", "will be"]],
      ["We decided last week: we ___ buy a new car next month.", ["are going to", "will"]], ["I promise I ___ bring your book back tomorrow.", ["will", "am going to"]],
      ["— I'm cold. — Wait, I ___ close the window.", ["will", "am going to"]], ["Look at him! He ___ fall off that ladder.", ["is going to", "will"]],
      ["— Tea or coffee? — I ___ have tea, please.", ["will", "am going to"]], ["She bought a plane ticket yesterday. She ___ fly to Paris in May.", ["is going to", "will"]]
    ]},
    { type: 'gap', task: 'Поставьте глагол в форму с be going to. Если в скобках несколько слов через косую черту, используйте в ответе их все — в нужной форме и порядке.', items: [
      ["Look at the sky! It ___ (snow).", "is going to snow|'s going to snow"], ["We made a decision. We ___ (sell) our old car.", "are going to sell"],
      ["He bought some paint yesterday. He ___ (paint) his room.", "is going to paint|'s going to paint"], ["I ___ (not / watch) this film. It looks boring.", "am not going to watch"],
      ["___ you ___ (visit) your grandmother this weekend?", ["are", "going to visit"]], ["Be careful! You ___ (fall)!", "are going to fall"],
      ["They ___ (get) married in June. They told us yesterday.", "are going to get"], ["She ___ (study) medicine next year. She decided last summer.", "is going to study|'s going to study"]
    ]},
    { type: 'translate', task: 'Переведите на английский.', items: [
      ["Мы собираемся поехать в Сочи летом.", "We are going to go to Sochi in summer.|We are going to Sochi in summer.|We are going to go to Sochi in the summer.|We're going to go to Sochi this summer.|We are going to Sochi this summer.|We are going to Sochi in the summer."],
      ["Посмотри на часы — мы сейчас опоздаем!", "Look at the clock! We are going to be late.|Look at the time! We are going to be late.|Look at your watch! We are going to be late."],
      ["Она не собирается продавать свою машину.", "She is not going to sell her car.|She is not going to sell the car."],
      ["Что ты собираешься делать вечером?", "What are you going to do in the evening?|What are you going to do this evening?|What are you going to do tonight?"]
    ]},
    { type: 'listen', at: 2, task: 'Прослушайте предложение и соберите его из слов.', items: [
      ["I'm going to give them my old bike. I don't need it.", "Я собираюсь отдать им свой старый велосипед. Он мне не нужен."],
      ["My sister is going to start a new job in May.", "Моя сестра собирается начать работать на новом месте в мае."],
      ["We are going to visit our grandparents next weekend.", "В следующие выходные мы собираемся навестить бабушку и дедушку."]
    ]}
  ]},

{ id: 't-present-continuous', level: 'A2', title: 'Present Continuous', sub: 'I am working now',
  rule: `
<p>Present Continuous описывает действие, которое происходит <b>прямо сейчас</b>, в момент речи: <i>Look, it is raining!</i> Его же используют для того, что длится в текущий период, хотя и не обязательно в эту секунду, — например, <i>I am reading a great book these days</i>.</p>
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
  ["swim → swim<b>ming</b>, sit → sit<b>ting</b>, run → run<b>ning</b>", "одна гласная + одна согласная в конце ударного слога: согласная удваивается, как с -ed (тема 2.3)"],
  ["lie → l<b>ying</b>, die → d<b>ying</b>", "ie → y"]
])}
<h3>Другие значения</h3>
<p>Кроме действия в момент речи, Present Continuous передает еще два значения. Во-первых, договоренность на ближайшее будущее: если встреча уже назначена, о ней говорят в Present Continuous, хотя она еще не наступила. Во-вторых, со словом <i>always</i> («всегда, вечно») это время выражает раздражение или упрек: говорящий жалуется, что что-то повторяется слишком часто. Сравните: <i>She always forgets my birthday</i> — просто факт; <i>She is always forgetting my birthday</i> — жалоба.</p>
${E([
  ["We <b>are meeting</b> Sarah tomorrow.", "Завтра мы встречаемся с Сарой. (договоренность на будущее)"],
  ["She <b>is always complaining</b>!", "Она вечно жалуется! (always + Continuous — раздражение)"]
])}`,
  /* перевод слов в упражнениях: по наведению или касанию (gloss.js); ключи — в нижнем регистре, как слово стоит в тексте */
  gloss: {
    'cat': 'кошка', 'sandwich': 'бутерброд', 'your': 'твой, ваш',
    'at the moment': 'в данный момент', 'a': 'неопределенный артикль', 'at': 'в (о времени); у, на (о месте)', 'baby': 'малыш',
    'be': 'быть', 'bus': 'автобус', 'children': 'дети', 'coat': 'пальто', 'dad': 'папа', 'dentist': 'зубной врач',
    'doing': 'делаешь (от do)', 'friday': 'пятница', 'from': 'из, от', 'he': 'он', 'home': 'дом; домой', 'hot': 'жаркий; жарко',
    'house': 'дом', 'i': 'я', 'in': 'в', 'it': 'это; он, она (о предмете)', "it's": 'это (= it is)', 'laughing': 'смеешься (от laugh)',
    'letter': 'письмо', 'listen': 'слушать', 'look': 'смотреть; смотри', 'moment': 'момент', 'my': 'мой, моя, мое', 'new': 'новый',
    'now': 'сейчас', 'on': 'на; в (о днях)', 'quiet': 'тихий; тише', 'radio': 'радио', 'river': 'река', 'she': 'она', 'shower': 'душ',
    'sister': 'сестра', 'sofa': 'диван', 'the': 'определенный артикль', 'they': 'они', 'this': 'этот, эта, это',
    'to': 'в, на (куда); частица перед глаголом', 'today': 'сегодня', 'tv': 'телевизор', 'wearing': 'одет в (от wear)',
    'week': 'неделя', 'what': 'что, какой', "where's": 'где (= where is)', 'why': 'почему', 'working': 'работает (от work)', 'year': 'год',
    'you': 'ты, вы'
  },
  ex: [
    { type: 'gap', task: 'Поставьте глагол в Present Continuous. Если в скобках несколько слов через косую черту, используйте в ответе их все — в нужной форме и порядке.', items: [
      ["Look! The cat ___ (eat) your sandwich.", "is eating|'s eating"], ["My dad ___ (work) from home this week.", "is working|'s working"],
      ["Be quiet! The baby ___ (sleep).", "is sleeping|'s sleeping"], ["They ___ (not / work) today.", "are not working"],
      ["I ___ (see) the dentist on Friday.", "am seeing"], ["What ___ you doing?", "are"],
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
      ["Куда ты идешь?", "Where are you going?|Where are you going now?"],
      ["Дети играют в саду.", "The children are playing in the garden."],
      ["Я сейчас не работаю.", "I am not working now.|I am not working at the moment.|I am not working right now."],
      ["В субботу мы играем в теннис с Томом.", "We are playing tennis with Tom on Saturday.|On Saturday we are playing tennis with Tom."],
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
<p>У некоторых глаголов два значения: одно — состояние, другое — действие. В значении состояния они в Continuous не ставятся, а в значении действия — ставятся. Например, <i>think</i> в значении «считать, иметь мнение» — это состояние, а в значении «обдумывать, размышлять» — процесс. Так же <i>have</i>: в значении «иметь, владеть» — состояние; в выражениях вроде <i>have lunch</i> (обедать) или <i>have a shower</i> (принимать душ) — действие.</p>
${E([
  ["I <b>think</b> you're right. — I'<b>m thinking</b> about the trip.", "Думаю, ты прав. — Я обдумываю поездку. (мнение — процесс)"],
  ["He <b>has</b> a car. — He <b>is having</b> lunch.", "У него есть машина. — Он обедает. (владеет — обедает)"],
  ["This soup <b>tastes</b> good. — She <b>is tasting</b> the soup.", "Этот суп вкусный. — Она пробует суп. (имеет вкус — пробует)"]
])}`,
  /* перевод слов в упражнениях: по наведению или касанию (gloss.js); ключи — в нижнем регистре, как слово стоит в тексте */
  gloss: {
    'bike': 'велосипед', 'her': 'ее, ей',
    'right now': 'прямо сейчас', 'last week': 'на прошлой неделе', 'every day': 'каждый день', 'a': 'неопределенный артикль',
    'afternoon': 'день (после полудня)', 'and': 'и', 'at': 'в (о времени); у, на (о месте)', 'bag': 'сумка',
    'beach': 'пляж', 'book': 'книга', 'bought': 'купил (от buy)', 'bus': 'автобус', 'but': 'но', 'car': 'машина', 'children': 'дети',
    'dad': 'папа', 'dark': 'темный; темно', 'day': 'день', 'disturb': 'беспокоить', "don't": 'не (= do not)', 'door': 'дверь',
    'dress': 'платье', 'every': 'каждый', 'father': 'отец', 'favourite': 'любимый', 'food': 'еда', 'football': 'футбол',
    'for': 'для; в течение', 'forever': 'навсегда', 'from': 'из, от', 'go': 'идти, ехать', 'great': 'отличный', 'he': 'он',
    'help': 'помогать', 'here': 'здесь, сюда', 'hi': 'привет', 'his': 'его', 'home': 'дом; домой', 'hotel': 'гостиница', 'how': 'как',
    'hurry': 'спешить', 'i': 'я', "i'm": 'я (= I am)', 'in': 'в', 'it': 'это; он, она (о предмете)', "it's": 'это (= it is)',
    'jeans': 'джинсы', 'last': 'прошлый', "let's": 'давай(те)', 'listen': 'слушать', 'london': 'Лондон',
    'look': 'смотреть; смотри', 'me': 'меня, мне', 'mean': 'иметь в виду', 'month': 'месяц', 'morning': 'утро', 'mother': 'мама',
    'mum': 'мама', 'museums': 'музеи', 'my': 'мой, моя, мое', 'neighbour': 'сосед', 'new': 'новый', 'now': 'сейчас', 'number': 'номер',
    'often': 'часто', 'our': 'наш', 'phone': 'телефон', 'reading': 'читаю (от read)', 'right': 'правильный; прямо',
    'seaside': 'морское побережье', 'she': 'она', 'sister': 'сестра', 'song': 'песня', 'stay': 'оставаться', 'summer': 'лето',
    'swimming': 'плавание', 'taxi': 'такси', 'the': 'определенный артикль', 'this': 'этот, эта, это', 'time': 'время',
    'to': 'в, на (куда); частица перед глаголом', 'today': 'сегодня', 'train': 'поезд', 'up': 'вверх (hurry up — поторопись)', 'usually': 'обычно',
    'walks': 'ходит пешком; гуляет', 'water': 'вода', 'we': 'мы', 'week': 'неделя', 'what': 'что, какой', 'wonderful': 'чудесный',
    'work': 'работа; работать', 'you': 'ты, вы'
  },
  ex: [
    { type: 'choice', task: 'Present Simple или Present Continuous?', items: [
      ["I ___ what you mean.", ["understand", "am understanding"]], ["She usually walks to work, but today she ___ her bike.", ["is riding", "rides", "ride"]],
      ["Water ___ at 0 °C.", ["freezes", "is freezing"]], ["Listen! Our neighbour ___ at the door.", ["is knocking", "knocks"]],
      ["He ___ a new car. He bought it last week.", ["has", "is having"]], ["Hurry up! The taxi ___ for you.", ["is waiting", "waits"]],
      ["I ___ this song. It's my favourite.", ["love", "am loving"]], ["My sister ___ in London this month.", ["is staying", "stays"]],
      ["How often ___ you go swimming?", ["do", "are"]], ["The train ___ at 6:40 every morning.", ["leaves", "is leaving"]]
    ]},
    { type: 'gap', task: 'Поставьте глагол в Present Simple или Present Continuous. Если в скобках несколько слов через косую черту, используйте в ответе их все — в нужной форме и порядке.', items: [
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
      ["Ice melts in the sun, and our snowman is melting now.", "Лед тает на солнце, и наш снеговик сейчас тает."],
      ["She usually drinks tea, but today she's having a cup of coffee.", "Обычно она пьет чай, но сегодня пьет кофе."],
      ["We go to the gym on Mondays, but this week we're going on Tuesday.", "Мы ходим в спортзал по понедельникам, но на этой неделе идем во вторник."]
    ]}
  ]},

{ id: 't-past-continuous', level: 'A2', title: 'Past Continuous', sub: 'I was reading when…',
  rule: `
<p>Past Continuous описывает действие, которое было <b>в процессе</b> в какой-то момент в прошлом, то есть не закончилось к этому моменту, а длилось. Например, <i>At noon we were walking in the park</i> — в полдень мы как раз гуляли в парке. Часто это время рисует фон, на котором происходит что-то короткое.</p>
${F("was / were + <b>V-ing</b>")}
${T(["Значение", "Пример"], [
  ["процесс в момент прошлого", "<i>At 8 pm I <b>was having</b> dinner.</i> — В восемь вечера я ужинал."],
  ["длительное действие прервано коротким", "<i>I <b>was cooking</b> when the phone <b>rang</b>.</i> — Я готовил, когда зазвонил телефон."],
  ["два параллельных процесса (while)", "<i>While I <b>was reading</b>, he <b>was watching</b> TV.</i> — Пока я читал, он смотрел телевизор."],
  ["фон в рассказе", "<i>The sun <b>was shining</b> and birds <b>were singing</b>.</i> — Светило солнце, и пели птицы."],
  ["весь период (all day, from 5 to 7)", "<i>She <b>was working</b> all day yesterday.</i> — Вчера она работала весь день."]
])}
<p><i>While</i> («пока, в то время как») обычно вводит длительное действие: <i><b>While</b> I was reading…</i> — пока я читал…; <i>when</i> («когда») — короткое событие: <i>…<b>when</b> the phone rang</i> — …когда зазвонил телефон.</p>
${N("Если действия идут не на фоне друг друга, а просто одно за другим, все они стоят в Past Simple: <i>He came in, took off his coat and sat down</i> — он вошел, снял пальто и сел.")}`,
  /* перевод слов в упражнениях: по наведению или касанию (gloss.js); ключи — в нижнем регистре, как слово стоит в тексте */
  gloss: {
    'doorbell': 'дверной звонок', 'falling': 'падающий', 'wind': 'ветер',
    'am': 'есть (форма to be с I)', 'around': 'по (вокруг)', 'door': 'дверь', 'light': 'свет', 'looked': 'выглядел; посмотрел', 'on': 'на', 'shower': 'душ', 'turned': 'повернул',
    'a': 'неопределенный артикль', 'afternoon': 'день (после полудня)', 'all': 'весь, все', 'and': 'и',
    'at': 'в (о времени); у, на (о месте)', 'bus': 'автобус', 'children': 'дети', 'coat': 'пальто', 'dinner': 'ужин',
    'doing': 'делать (от do)', 'for': 'для; в течение', 'friend': 'друг', 'from': 'из, от', 'he': 'он', 'her': 'ее, ей', 'his': 'его',
    'home': 'дом; домой', 'i': 'я', 'in': 'в', 'it': 'это; он, она (о предмете)', 'my': 'мой, моя, мое',
    'off': 'прочь (switch off — выключить)', 'old': 'старый', 'park': 'парк', 'phone': 'телефон', 'rain': 'дождь',
    'reading': 'читать (от read)', 'she': 'она', 'the': 'определенный артикль', 'they': 'они', 'to': 'в, на (куда); частица перед глаголом',
    'tv': 'телевизор', 'two': 'два', 'we': 'мы', 'were': 'были (форма to be)', 'what': 'что, какой', 'when': 'когда', 'yesterday': 'вчера',
    'you': 'ты, вы', 'went out': 'погас', 'took off': 'снял', 'sat down': 'сел', 'an': 'неопределенный артикль',
    'arrived': 'приехал (от arrive)', 'away': 'прочь', 'bath': 'ванна', 'began': 'начал (от begin)', 'birds': 'птицы', 'dishes': 'посуда',
    'down': 'вниз', 'four': 'четыре', 'hard': 'сильно; усердно; трудный', 'husband': 'муж', 'left': 'ушел (от leave); оставшийся; левый',
    'leg': 'нога', 'lights': 'свет, лампы', 'met': 'встретил (от meet)', 'midnight': 'полночь', 'night': 'ночь', 'out': 'наружу',
    'pm': 'вечера, дня (после полудня)', 'police': 'полиция', 'raining': 'идет дождь (от rain)', 'rang': 'зазвонил (от ring)',
    'sat': 'сел (от sit)', 'saw': 'увидел (от see)', 'singing': 'петь (от sing)', 'skiing': 'катался на лыжах', 'snow': 'снег',
    'started': 'начал (от start)', 'sun': 'солнце', 'took': 'взял; занял (от take)', 'was': 'был (форма to be)',
    'went': 'пошел, поехал (от go)', 'while': 'пока, в то время как'
  },
  ex: [
    { type: 'gap', task: 'Поставьте глагол в Past Continuous. Если в скобках несколько слов через косую черту, используйте в ответе их все — в нужной форме и порядке.', items: [
      ["At 7 am yesterday I ___ (take) a shower.", "was taking"], ["While we ___ (walk) in the park, it started to rain.", "were walking"],
      ["She ___ (read) when the doorbell rang.", "was reading"], ["When I arrived, they ___ (not / watch) TV.", "were not watching"],
      ["The wind ___ (blow) and the rain was falling.", "was blowing"], ["What ___ you doing at midnight?", "were"],
      ["He ___ (sleep) from two to four.", "was sleeping"], ["We ___ (wait) for the bus when it began to snow.", "were waiting"],
      ["___ it raining when you left home?", "was"], ["The children ___ (play) all afternoon.", "were playing"]
    ]},
    { type: 'choice', task: 'Past Simple или Past Continuous?', items: [
      ["I ___ a bath when the lights went out.", ["was having", "had", "have"]], ["When he saw the police, he ___ away.", ["ran", "was running"]],
      ["While she was reading, her husband ___ the dishes.", ["was washing", "washes"]], ["She ___ the door, turned on the light and looked around.", ["opened", "was opening"]],
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
      ["While we were having lunch, my phone rang.", "Пока мы обедали, у меня зазвонил телефон."],
      ["When I saw them, Tom's parents were sitting in the garden.", "Когда я их увидел, родители Тома сидели в саду."]
    ]}
  ]},

{ id: 't-present-perfect', level: 'A2', title: 'Present Perfect', sub: 'I have done, just, already, yet',
  rule: `
<p>Present Perfect связывает прошлое с настоящим. Действие уже произошло, но говорим мы о нем ради того, что есть сейчас. Поэтому важно не <b>когда</b> оно случилось, а его результат, жизненный опыт или то, что период еще не закончился.</p>
${F("have / has + <b>V3</b> (третья форма)")}
<p>У правильных глаголов третья форма совпадает с прошедшим временем: <i>work</i> → <i>worked</i>. У неправильных это особое слово: <i>go</i> → <i>gone</i>, <i>write</i> → <i>written</i>. Все три формы частых неправильных глаголов собраны на странице <button class="link-btn" type="button" data-go="irregular-verbs">«Неправильные глаголы»</button>.</p>
${T(["Значение", "Пример"], [
  ["результат сейчас", "<i>I <b>have lost</b> my keys.</i> — Я потерял ключи. (Сейчас ключей нет.)"],
  ["опыт в жизни", "<i>She <b>has never been</b> to Japan. <b>Have</b> you ever <b>eaten</b> sushi?</i> — Она никогда не была в Японии. Ты когда-нибудь ел суши?"],
  ["незаконченный период", "<i>I <b>have drunk</b> three coffees today.</i> — Сегодня я выпил три чашки кофе."],
  ["длится до сих пор (for, since)", "<i>We <b>have lived</b> here since 2015 / for ten years.</i> — Мы живем здесь с 2015 года / десять лет."],
  ["только что (just)", "<i>He <b>has just come</b> home.</i> — Он только что пришел домой."]
])}
<p>Вспомогательный глагол здесь — <i>have</i>, а после <i>he / she / it</i> — <i>has</i>. В отрицании к нему добавляется <i>not</i>: <i>haven't, hasn't</i>; в вопросе он встает перед подлежащим: <i><b>Have</b> you seen it?</i> В речи его часто сокращают: <i>I've, she's</i> (<i>she's</i> здесь значит <i>she has</i>).</p>
<h3>For или since</h3>
<p>Когда действие началось в прошлом и длится до сих пор, по-русски мы обычно говорим в настоящем времени: «Мы живем здесь десять лет». По-английски в таком случае нужен Present Perfect, а срок указывают с помощью <i>for</i> или <i>since</i>. <i>For</i> ставят перед длительностью — сколько времени это продолжается: <i>for ten years</i> — десять лет, <i>for an hour</i> — (в течение) часа. <i>Since</i> ставят перед моментом, когда все началось: <i>since 2015</i> — с 2015 года, <i>since Monday</i> — с понедельника.</p>
${M("Часто встречается со словами:", ["just", "already", "yet", "ever", "never", "for", "since", "today", "this week", "so far", "recently"])}
<h3>Где ставить just, already, yet</h3>
${E([
  ["I have <b>just</b> / <b>already</b> finished.", "Я только что / уже закончил. (just и already — между have и V3)"],
  ["Have you finished <b>yet</b>? I haven't finished <b>yet</b>.", "Ты уже закончил? Я еще не закончил. (yet — в конце вопроса и отрицания; в вопросе значит «уже», в отрицании — «еще»)"]
])}
${N("Не путайте <i>been</i> и <i>gone</i>. <i>He has <b>been</b> to London</i> — он побывал в Лондоне (и вернулся); <i>He has <b>gone</b> to London</i> — он уехал в Лондон (и сейчас там).")}`,
  /* перевод слов в упражнениях: по наведению или касанию (gloss.js); ключи — в нижнем регистре, как слово стоит в тексте */
  gloss: {
    'a': 'неопределенный артикль', 'africa': 'Африка', 'horse': 'лошадь', "isn't": 'не (= is not)', 'it': 'это; он, она (о предмете)', 'phone': 'телефон', 'together': 'вместе',
    'bag': 'сумка', 'be': 'быть', 'brother': 'брат', 'children': 'дети', 'film': 'фильм', 'for': 'для; в течение',
    'have': 'иметь; вспомогательный глагол', 'he': 'он', 'here': 'здесь, сюда', 'him': 'его, ему', 'his': 'его', 'homework': 'домашнее задание',
    'i': 'я', 'in': 'в', 'keys': 'ключи', 'me': 'меня, мне', 'my': 'мой, моя, мое', 'paris': 'Париж', 'she': 'она', 'shop': 'магазин',
    'ten': 'десять', 'the': 'определенный артикль', 'they': 'они', 'this': 'этот, эта, это', 'to': 'в, на (куда); частица перед глаголом',
    'we': 'мы', 'were': 'были (форма to be)', "where's": 'где (= where is)', 'which': 'какой (из), который', 'work': 'работа; работать',
    'year': 'год', 'years': 'годы, лет', 'you': 'ты, вы', 'your': 'твой, ваш', 'be back': 'вернуться', "aren't": 'не (= are not)',
    'arm': 'рука', 'back': 'назад, обратно', 'books': 'книги', 'called': 'позвонил (от call)', 'each': 'каждый', 'ever': 'когда-либо',
    'finished': 'закончил (от finish)', 'five': 'пять', 'has': 'имеет; вспомогательный глагол', "hasn't": 'не (= has not)',
    "haven't": 'не (= have not)', "he'll": 'он (= he will)', 'japan': 'Япония', 'left': 'ушел (от leave); оставшийся; левый',
    'lived': 'жил (от live)', 'other': 'другой', 'read': 'читать; прочитал', 'seen': 'видел (3-я форма see)',
    'since': 'с (какого-то времени)', 'soon': 'скоро', 'sushi': 'суши', 'three': 'три', 'times': 'раз', 'worked': 'работал (от work)',
    'yet': 'уже (в вопросе); еще (в отрицании)'
  },
  ex: [
    { type: 'gap', task: 'Поставьте глагол в Present Perfect. Если в скобках несколько слов через косую черту, используйте в ответе их все — в нужной форме и порядке.', items: [
      ["I ___ (lose) my phone. It isn't in my bag.", "have lost"], ["She ___ (never / be) to Africa.", "has never been|'s never been"],
      ["We ___ (work) together since 2018.", "have worked"], ["Have you ever ___ (ride) a horse?", "ridden"],
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

{ id: 't-perfect-vs-past', level: 'A2', title: 'Present Perfect или Past Simple', sub: 'I have seen / I saw',
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
${N("Вопрос <i>When…?</i> («когда?») о прошлом сам спрашивает о конкретном моменте, поэтому в нем нужен Past Simple: <i>When <b>did</b> you <b>arrive</b>?</i> — когда ты приехал?, а вариант <i>When have you arrived?</i> будет ошибкой.")}`,
  /* перевод слов в упражнениях: по наведению или касанию (gloss.js); ключи — в нижнем регистре, как слово стоит в тексте */
  gloss: {
    'anna karenina': '«Анна Каренина» (роман Толстого)',
    'last week': 'на прошлой неделе', 'a': 'неопределенный артикль', 'ago': 'назад', 'all': 'весь, все', 'and': 'и', 'brother': 'брат',
    'car': 'машина', 'film': 'фильм', 'food': 'еда', 'for': 'для; в течение', 'great': 'отличный', 'he': 'он', 'his': 'его',
    'holiday': 'отпуск, каникулы', 'homework': 'домашнее задание', 'i': 'я', 'in': 'в', "it's": 'это (= it is)', 'last': 'прошлый',
    'london': 'Лондон', 'me': 'меня, мне', 'my': 'мой, моя, мое', 'next': 'следующий', 'now': 'сейчас', 'phone': 'телефон',
    'please': 'пожалуйста', 'school': 'школа', 'she': 'она', 'summer': 'лето', 'the': 'определенный артикль', 'they': 'они',
    'this': 'этот, эта, это', 'to': 'в, на (куда); частица перед глаголом', 'trip': 'поездка', 'two': 'два', 'we': 'мы', 'week': 'неделя',
    'what': 'что, какой', 'when': 'когда', 'year': 'год', 'years': 'годы, лет', 'yes': 'да', 'yesterday': 'вчера', 'you': 'ты, вы',
    'your': 'твой, ваш', 'all his life': 'всю свою жизнь', 'abroad': 'за границей', 'accident': 'авария, несчастный случай',
    'am': 'есть (форма to be с I)', 'barcelona': 'Барселона', 'chinese': 'китайский', 'country': 'страна; загород', 'ever': 'когда-либо',
    'factory': 'завод', 'free': 'свободный', 'grandfather': 'дедушка', 'hamlet': '«Гамлет»', 'happen': 'случаться', 'lend': 'одолжить',
    'life': 'жизнь', 'madrid': 'Мадрид', 'moscow': 'Москва', 'oh': 'о, ой', 'really': 'действительно', 'retired': 'вышел на пенсию',
    'spain': 'Испания', 'tests': 'контрольные', 'there': 'там, туда', 'three': 'три',
    'twice': 'дважды', 'yours': 'твой, ваш'
  },
  ex: [
    { type: 'gap', task: 'Present Perfect или Past Simple? Поставьте глагол в нужную форму. Если в скобках несколько слов через косую черту, используйте в ответе их все — в нужной форме и порядке.', items: [
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
    { type: 'text', task: 'Поставьте глаголы в Present Perfect или Past Simple. Если в скобках несколько слов через косую черту, используйте в ответе их все — в нужной форме и порядке.', text: "— ___ (you / ever / be) to Spain? — Yes, I ___ (go) there last summer. — Really? What ___ (you / see)? — I ___ (visit) Madrid and Barcelona. — I ___ (never / be) abroad. — Oh, it's a great country! I ___ (already / book) a trip for next year.",
      answers: ["have you ever been", "went", "did you see", "visited", "have never been", "have already booked"] },
    { type: 'listen', at: 2, task: 'Прослушайте предложение и соберите его из слов.', items: [
      ["I have lost my keys. I think I left them at the office yesterday.", "Я потерял ключи. Кажется, вчера оставил их в офисе."],
      ["We have known each other for ten years. We met at university.", "Мы знаем друг друга десять лет. Познакомились в университете."],
      ["I have never eaten such a good pizza. Where did you buy it?", "Я никогда не ел такой вкусной пиццы. Где ты ее купил?"]
    ]}
  ]},

{ id: 't-present-perfect-continuous', level: 'B1', title: 'Present Perfect Continuous', sub: "I've been waiting for an hour",
  rule: `
<p>Present Perfect Continuous подчеркивает, <b>как долго</b> длится действие. Оно началось в прошлом и продолжается до сих пор — или только что закончилось, но его след еще виден.</p>
${F("have / has been + <b>V-ing</b>")}
${E([
  ["I <b>have been waiting</b> for you for an hour!", "Я жду тебя уже час. (и все еще жду)"],
  ["She <b>has been learning</b> Spanish since September.", "Она учит испанский с сентября. (начала в сентябре и продолжает)"],
  ["I'm out of breath — I<b>'ve been running</b>.", "Я запыхался — я бегал. (только что закончил, виден результат)"]
])}
<p>В речи <i>have been</i> и <i>has been</i> обычно сокращаются: <i>I've been, she's been, it's been</i>. Здесь <i>'s</i> означает <i>has</i>: <i>It's been raining</i> = <i>It has been raining</i>.</p>
<h3>Continuous или Simple</h3>
${T(["Perfect Continuous: процесс", "Perfect Simple: результат"], [
  ["<i>I<b>'ve been painting</b> the kitchen.</i> — Я крашу кухню. (работа, возможно, еще не закончена)", "<i>I<b>'ve painted</b> the kitchen.</i> — Я покрасил кухню. (готово)"],
  ["<i>How long <b>have</b> you <b>been reading</b>?</i> — Сколько времени ты уже читаешь?", "<i>How many pages <b>have</b> you <b>read</b>?</i> — Сколько страниц ты прочитал?"],
  ["<i>It<b>'s been raining</b> all day.</i> — Весь день идет дождь.", "<i>I<b>'ve written</b> three emails today.</i> — Сегодня я написал три письма. (есть количество)"]
])}
${M("Часто встречается со словами:", ["for", "since", "how long", "all day", "lately", "recently"])}
${N("Глаголы состояния (<i>know, like, want</i> и другие) не ставятся в Continuous, в том числе и в этом времени. Вместо этого используют обычный Present Perfect: <i>I<b>'ve known</b> her for years</i>, а не <i>I've been knowing her</i>.")}`,
  /* перевод слов в упражнениях: по наведению или касанию (gloss.js); ключи — в нижнем регистре, как слово стоит в тексте */
  gloss: {
    'calls': 'звонит',
    'baby': 'малыш', 'dirty': 'грязный', 'drive': 'водить машину', 'garden': 'сад', 'glasses': 'очки', 'hands': 'руки', 'may': 'май', 'phone': 'телефон', 'ten': 'десять', 'to': 'чтобы (перед глаголом)',
    'how long': 'как долго', 'a': 'неопределенный артикль', 'all': 'весь, все', 'at': 'в (о времени); у, на (о месте)', 'book': 'книга',
    'breakfast': 'завтрак', 'bus': 'автобус', 'but': 'но', 'coffee': 'кофе', 'day': 'день', 'do': 'делать; вспомогательный глагол',
    'for': 'для; в течение', 'friend': 'друг', 'he': 'он', 'her': 'ее, ей', 'here': 'здесь, сюда', 'how': 'как', 'i': 'я',
    "i'm": 'я (= I am)', 'in': 'в', 'it': 'это; он, она (о предмете)', 'like': 'нравиться, любить', 'month': 'месяц', 'morning': 'утро',
    'my': 'мой, моя, мое', 'school': 'школа', 'she': 'она', 'the': 'определенный артикль', 'this': 'этот, эта, это', 'today': 'сегодня',
    'we': 'мы', 'week': 'неделя', 'were': 'были (форма to be)', 'working': 'работает (от work)', 'years': 'годы, лет', 'you': 'ты, вы',
    'your': 'твой, ваш', 'out of breath': 'запыхался', 'all day': 'весь день', 'out of': 'из', 'an': 'неопределенный артикль',
    'are': 'есть (форма to be)', 'because': 'потому что', 'been': 'был (3-я форма be)', 'best': 'лучший', 'books': 'книги',
    'breath': 'дыхание', 'computer': 'компьютер', 'crying': 'плачет (от cry)', 'cups': 'чашки', 'emails': 'письма (электронные)',
    'eyes': 'глаза', 'finished': 'закончил (от finish)', 'five': 'пять', 'flat': 'квартира', 'four': 'четыре', 'games': 'игры',
    "haven't": 'не (= have not)', 'hour': 'час', 'kitchen': 'кухня', 'long': 'долго; длинный', 'of': 'предлог родительного падежа',
    'out': 'наружу', 'red': 'красный', 'september': 'сентябрь', 'since': 'с (какого-то времени)', 'spanish': 'испанский', 'three': 'три',
    'yet': 'уже (в вопросе); еще (в отрицании)'
  },
  ex: [
    { type: 'gap', task: 'Present Perfect Continuous или Present Perfect Simple?', items: [
      ["I ___ (look) for my glasses for an hour!", "have been looking"], ["She ___ (learn) to drive since May.", "has been learning|'s been learning"],
      ["How long ___ you been working here?", "have"], ["Your eyes are red. ___ you been crying?", "have"],
      ["I ___ (know) my best friend since we were five.", "have known"], ["I ___ (make) ten phone calls today.", "have made"],
      ["The baby ___ (cry) all morning.", "has been raining|'s been raining"], ["He ___ (play) computer games since breakfast.", "has been playing|'s been playing"],
      ["We ___ (live) in this flat for five years.", "have been living|have lived"], ["She ___ (read) four books this month.", "has read|'s read"]
    ]},
    { type: 'choice', task: 'Выберите правильный вариант.', items: [
      ["My hands are dirty because I ___ in the garden.", ["have been running", "have run", "run"]], ["She ___ four cups of coffee today.", ["has drunk", "has been drinking"]],
      ["I ___ this book for a week, but I haven't finished it yet.", ["have been reading", "have read"]], ["We ___ the kitchen. Do you like it?", ["have painted", "have been painting"]],
      ["I ___ her since we were at school.", ["have known", "have been knowing"]], ["How long ___ for the bus?", ["have you been waiting", "are you waiting", "do you wait"]]
    ]},
    { type: 'translate', task: 'Переведите на английский.', items: [
      ["Я жду тебя уже полчаса.", "I have been waiting for you for half an hour.|I have been waiting for you for half an hour already."],
      ["Как долго ты учишь английский?", "How long have you been learning English?|How long have you been studying English?"],
      ["Весь день идет снег.", "It has been snowing all day.|It's been snowing all day."],
      ["Она работает здесь с 2019 года.", "She has been working here since 2019.|She's been working here since 2019.|She has worked here since 2019.|She's worked here since 2019."]
    ]},
    { type: 'listen', at: 2, task: 'Прослушайте предложение и соберите его из слов.', items: [
      ["My brother has been playing the guitar since lunch.", "Мой брат играет на гитаре с обеда."],
      ["She has been working hard all day, so she's very tired.", "Она весь день много работала, поэтому очень устала."],
      ["How long have you been living in this flat?", "Сколько ты уже живешь в этой квартире?"]
    ]}
  ]},

{ id: 't-used-to', level: 'B1', title: 'Used to, be used to, would', sub: 'I used to · I am used to',
  rule: `
<p>Эти конструкции похожи внешне, но значат разное. <i>Used to</i> и <i>would</i> рассказывают о том, что <b>раньше бывало</b>, а теперь нет. <i>Be used to</i> — о том, что человек уже <b>привык</b>, <i>get used to</i> — о том, что он <b>привыкает</b>. Главная подсказка — есть ли перед <i>used to</i> глагол <i>be</i> или <i>get</i>.</p>
${T(["Конструкция", "Значение", "Пример"], [
  ["<i>used to + V</i>", "привычка или состояние в прошлом, которых больше нет", "<i>I <b>used to live</b> in Omsk.</i> — Раньше я жил в Омске."],
  ["<i>would + V</i>", "повторяющиеся действия в прошлом (не состояния)", "<i>As kids we <b>would play</b> outside all day.</i> — В детстве мы, бывало, целыми днями играли на улице."],
  ["<i>be used to + -ing / сущ.</i>", "привык, уже привычно", "<i>She <b>is used to getting</b> up early.</i> — Она привыкла рано вставать."],
  ["<i>get used to + -ing / сущ.</i>", "привыкать, процесс", "<i>She <b>is getting used to driving</b> on the left.</i> — Она привыкает ездить по левой стороне."]
])}
<h3>Почему после be used to стоит -ing</h3>
<p>В оборотах <i>used to + V</i> и <i>be used to</i> слово <i>to</i> играет разную роль. В <i>used to live</i> это частица перед глаголом, поэтому дальше идет начальная форма: <i>live</i>. А в <i>be used to</i> и <i>get used to</i> слово <i>to</i> — предлог «к», как в русском «привык <b>к</b> чему-то». После предлога может стоять только существительное или форма глагола на <i>-ing</i>, которая работает как существительное: <i>I'm used to <b>the cold</b></i> — я привык к холоду, <i>I'm used to <b>getting up</b> early</i> — я привык рано вставать (буквально «привык к раннему вставанию»). Такая <i>-ing</i>-форма называется герундием; подробно она разобрана в разделе 14 «Герундий». Сказать <i>I'm used to get up</i> нельзя.</p>
<p>Глагол <i>be</i> в обороте <i>be used to</i> меняется по временам, как обычно: <i>I <b>was</b> used to it</i> — я к этому привык (тогда). А <i>get used to</i> подчеркивает процесс привыкания и тоже может стоять в любом времени: <i>You <b>will get</b> used to it</i> — ты привыкнешь.</p>
${N("В вопросе и отрицании пишется <i>use to</i> без <i>-d</i>, потому что прошедшее время уже показывает <i>did</i>: <i><b>Did</b> you <b>use to</b> smoke?</i> — ты раньше курил?, <i>I <b>didn't use to</b> like coffee</i> — раньше я не любил кофе.")}`,
  /* перевод слов в упражнениях: по наведению или касанию (gloss.js); ключи — в нижнем регистре, как слово стоит в тексте */
  gloss: {
    'golf': 'гольф', 'vegetables': 'овощи',
    'alone': 'один, в одиночестве', 'dad': 'папа', 'football': 'футбол', 'job': 'работа', 'living': 'живет', 'my': 'мой, моя, мое', 'new': 'новый', 'plays': 'играет', 'school': 'школа', 'them': 'их, им', 'walk': 'гулять; прогулка',
    'a': 'неопределенный артикль', 'at': 'в (о времени); у, на (о месте)', 'but': 'но', 'coffee': 'кофе', 'evening': 'вечер',
    'every': 'каждый', 'for': 'для; в течение', 'have': 'иметь; есть (о еде)', 'he': 'он', 'i': 'я', "i'm": 'я (= I am)', 'in': 'в',
    'it': 'это; он, она (о предмете)', 'like': 'нравиться, любить', 'live': 'жить', 'me': 'меня, мне', 'month': 'месяц', 'not': 'не',
    'now': 'сейчас', 'on': 'на; в (о днях)', 'she': 'она', 'the': 'определенный артикль', 'to': 'в, на (куда); частица перед глаголом',
    'up': 'вверх (get up — вставать)', 'we': 'мы', 'were': 'были (форма to be)', 'when': 'когда', 'years': 'годы, лет', 'you': 'ты, вы',
    "didn't": 'не (= did not)', 'done': 'сделал (3-я форма do)', 'driving': 'вождение; ехать за рулем', 'early': 'рано',
    'getting': 'становится; вставать (от get)', 'hair': 'волосы', 'has': 'имеет; вспомогательный глагол', 'kids': 'дети',
    'left': 'ушел (от leave); оставшийся; левый', 'long': 'долго; длинный', 'love': 'любить', 'moscow': 'Москва', 'night': 'ночь',
    'omsk': 'Омск', 'play': 'играть', 'smoke': 'курить', 'student': 'студент', 'took': 'взял; занял (от take)', 'use': 'использовать; did … use to — раньше (в вопросе и отрицании)',
    'used': 'использовал; used to — раньше; be used to — привык', 'was': 'был (форма to be)', 'yard': 'двор'
  },
  ex: [
    { type: 'choice', task: 'Выберите правильный вариант.', items: [
      ["My dad ___ play football, but now he plays golf.", ["used to", "am used to", "get used to"]], ["She ___ living alone — she has done it for years.", ["is used to", "used to", "uses to"]],
      ["When we were kids, we ___ play in the yard every evening.", ["would", "are used to", "get used to"]], ["It took me a month to ___ my new job.", ["get used to", "used to", "be use to"]],
      ["___ you use to walk to school?", ["Did", "Do", "Were"]], ["I didn't ___ like vegetables, but now I love them.", ["use to", "used to", "using to"]],
      ["He ___ have long hair when he was a student.", ["used to", "would"]], ["I'm not used to ___ at night.", ["working", "work", "worked"]]
    ]},
    { type: 'translate', task: 'Переведите на английский.', items: [
      ["Раньше я жил в деревне.", "I used to live in a village.|I used to live in the country."],
      ["Я привык много работать.", "I am used to working a lot.|I am used to working hard."],
      ["Раньше он не любил рыбу.", "He didn't use to like fish.|He used not to like fish."],
      ["Ты скоро привыкнешь к новой школе.", "You will soon get used to the new school.|You will get used to the new school soon.|You'll get used to your new school soon.|You will soon get used to your new school."]
    ]},
    { type: 'listen', at: 2, task: 'Прослушайте предложение и соберите его из слов.', items: [
      ["There used to be a cinema opposite our house.", "Раньше напротив нашего дома был кинотеатр."],
      ["My grandfather would tell us stories every evening.", "Дедушка каждый вечер рассказывал нам истории."],
      ["I'm used to noisy streets, but my brother isn't.", "Я привык к шумным улицам, а мой брат нет."],
    ]}
  ]},

{ id: 't-past-perfect', level: 'B1', title: 'Past Perfect', sub: 'The train had already left',
  rule: `
<p>Past Perfect показывает, что одно действие в прошлом завершилось <b>раньше</b> другого. Его называют «прошлым в прошлом». Например, <i>When I got to the cinema, the film had already started</i>: я пришел, но фильм начался еще до этого. Без Past Perfect было бы непонятно, что случилось сначала.</p>
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
${N("Если порядок событий и так понятен из слов <i>before</i> или <i>after</i>, можно обойтись Past Simple: <i>After he finished, he went home</i> — закончив, он пошел домой. Past Perfect в таком предложении тоже не ошибка: он просто дополнительно подчеркивает, что одно действие было раньше другого.")}`,
  /* перевод слов в упражнениях: по наведению или касанию (gloss.js); ключи — в нижнем регистре, как слово стоит в тексте */
  gloss: {
    'bag': 'сумка', 'in': 'в', 'it': 'это; он, она (о предмете)', 'letter': 'письмо', 'match': 'матч', 'put': 'положить', 'she': 'она', 'stadium': 'стадион',
    'last year': 'в прошлом году', 'a': 'неопределенный артикль', 'after': 'после', 'all': 'весь, все',
    'at': 'в (о времени); у, на (о месте)', 'book': 'книга', 'by': 'на (о транспорте); к (о сроке)', 'car': 'машина', 'day': 'день',
    'film': 'фильм', 'for': 'для; в течение', 'he': 'он', 'her': 'ее, ей', 'him': 'его, ему', 'his': 'его', 'home': 'дом; домой',
    'house': 'дом', 'i': 'я', 'last': 'прошлый', 'my': 'мой, моя, мое', 'parents': 'родители', 'rain': 'дождь',
    'that': 'тот, та, то; что (союз)', 'the': 'определенный артикль', 'they': 'они', 'time': 'время',
    'to': 'в, на (куда); частица перед глаголом', 'train': 'поезд', 'trip': 'поездка', 'two': 'два', 'up': 'вверх (wake up — проснуться)', 'we': 'мы',
    'were': 'были (форма to be)', 'when': 'когда', 'work': 'работа; работать', 'year': 'год', 'all day': 'весь день',
    'arrived': 'приехал (от arrive)', 'beard': 'борода', 'because': 'потому что', 'before': 'до, раньше', 'books': 'книги',
    'came': 'пришел (от come)', "didn't": 'не (= did not)', 'dirty': 'грязный', 'five': 'пять', 'found': 'нашел (от find)',
    'got': 'добрался (от get)', 'hands': 'руки', 'hours': 'часы, часов', 'into': 'в (внутрь)', 'once': 'один раз; at once — сразу', 'police': 'полиция',
    'recognise': 'узнать', 'recognised': 'узнал', 'saw': 'увидел (от see)', 'so': 'поэтому; так', 'spain': 'Испания',
    'starving': 'умирающий с голоду', 'station': 'вокзал, станция', 'stopped': 'остановился; прекратился', 'sure': 'уверен',
    'thief': 'вор', 'thieves': 'воры', 'was': 'был (форма to be)', 'went': 'пошел, поехал (от go)', 'woke': 'проснулся (от wake)'
  },
  ex: [
    { type: 'gap', task: 'Поставьте глагол в Past Perfect. Если в скобках несколько слов через косую черту, используйте в ответе их все — в нужной форме и порядке.', items: [
      ["When we got to the stadium, the match ___ (already / start).", "had already started|had started already|'d already started"],
      ["He ___ (never / fly) before his trip to Spain last year.", "had never flown|'d never flown"],
      ["After she ___ (read) the letter, she put it in her bag.", "had read|read"], ["I didn't recognise him because he ___ (grow) a beard.", "had grown"],
      ["By the time the police came, the thieves ___ (escape).", "had escaped"], ["They ___ (not / eat) all day, so they were starving.", "had not eaten"],
      ["I was sure I ___ (see) her before.", "had seen"], ["By 2010 he ___ (write) five books.", "had written"]
    ]},
    { type: 'choice', task: 'Выберите правильный вариант.', items: [
      ["When I got home, I found that a thief ___ into the house.", ["had broken", "broke", "has broken"]], ["I ___ the book before I saw the film.", ["had read", "have read", "was reading"]],
      ["We recognised him at once: we ___ him the day before.", ["had met", "has met", "meets"]], ["His hands were dirty because he ___ the car.", ["had been repairing", "has repaired", "repairs"]],
      ["We ___ for two hours when the rain stopped.", ["had been walking", "have walked", "walk"]], ["By the time I woke up, my parents ___.", ["had left", "has left", "leaves"]]
    ]},
    { type: 'translate', task: 'Переведите на английский.', items: [
      ["Когда я пришел, урок уже начался.", "When I came, the lesson had already started.|When I arrived, the lesson had already started.|When I came, the lesson had already begun.|When I arrived, the lesson had already begun.|The lesson had already started when I came.|The lesson had already started when I arrived.|The lesson had already begun when I came.|The lesson had already begun when I arrived."],
      ["Когда я пришел домой, сестра уже ушла.", "When I came home, my sister had already left.|When I got home, my sister had already left.|When I came home, my sister had left.|When I got home, my sister had left.|My sister had already left when I came home.|My sister had already left when I got home.|My sister had left when I came home.|My sister had left when I got home."],
      ["К полудню мы убрали весь дом.", "By noon we had cleaned the whole house.|We had cleaned the whole house by noon.|By midday we had cleaned the whole house.|We had cleaned the whole house by midday."],
      ["До той поездки я никогда не видел такого красивого города.", "I had never seen such a beautiful city before that trip.|I'd never seen such a beautiful city before that trip.|Before that trip I had never seen such a beautiful city."]
    ]},
    { type: 'listen', at: 2, task: 'Прослушайте предложение и соберите его из слов.', items: [
      ["When we got to the party, most of the guests had already gone home.", "Когда мы пришли на вечеринку, большинство гостей уже ушли домой."],
      ["We had never eaten Japanese food before we went to Tokyo.", "До поездки в Токио мы ни разу не ели японскую еду."],
      ["There was no cake left because the guests had eaten it.", "Торта не осталось: гости его съели."]
    ]}
  ]},

{ id: 't-future-continuous', level: 'B1', title: 'Future Continuous', sub: 'will be doing',
  rule: `
<p>Future Continuous описывает действие, которое будет идти <b>в определенный момент в будущем</b>: оно начнется раньше этого момента и закончится позже. Например, <i>At eight o'clock tomorrow I'll be working</i> — завтра в восемь я буду работать, то есть к восьми работа уже начнется, но еще не закончится.</p>
${F("will be + <b>V-ing</b>")}
${T(["", "Пример"], [
  ["Утверждение", "<i>She <b>will be waiting</b> for you at the station.</i> — Она будет ждать тебя на вокзале."],
  ["Отрицание", "<i>I <b>won't be working</b> on Saturday.</i> — В субботу я не буду работать."],
  ["Вопрос", "<i>What <b>will</b> you <b>be doing</b> at six?</i> — Что ты будешь делать в шесть?"]
])}
${M("Часто встречается со словами:", ["this time tomorrow", "at 8 pm tomorrow", "all day tomorrow", "this time next week"])}
<p>Это время устроено так же, как Past Continuous из темы 2.8, только момент не в прошлом, а в будущем:</p>
${E([
  ["At eight yesterday I <b>was working</b>.", "Вчера в восемь я работал. (Past Continuous)"],
  ["At eight tomorrow I <b>will be working</b>.", "Завтра в восемь я буду работать. (Future Continuous)"]
])}
<h3>Вежливый вопрос о планах</h3>
<p>Вопрос в Future Continuous звучит мягче обычного: он спрашивает о планах, которые у человека уже есть, и не давит на него. Например, <i>Will you use the car tonight?</i> — ты возьмешь машину сегодня вечером? (может прозвучать как просьба или даже требование); <i>Will you <b>be using</b> the car tonight?</i> — ты будешь брать машину сегодня вечером? (просто вопрос о планах). Так обычно спрашивают перед тем, как о чем-то попросить: если машина собеседнику не нужна, ее можно попросить у него на вечер.</p>
${N("В части с <i>when</i> ставят Present Simple, а не <i>will</i>, хотя речь о будущем: <i>When you <b>arrive</b>, I'll be waiting for you</i>, а не <i>When you will arrive</i>.")}`,
  /* перевод слов в упражнениях: по наведению или касанию (gloss.js); ключи — в нижнем регистре, как слово стоит в тексте */
  gloss: {
    'week': 'неделя', 'where': 'где',
    'at home': 'дома', 'this time': 'в это время', 'a': 'неопределенный артикль', 'after': 'после', 'and': 'и',
    'at': 'в (о времени); у, на (о месте)', 'be': 'быть', 'children': 'дети', 'come': 'приходить', 'do': 'делать; вспомогательный глагол',
    "don't": 'не (= do not)', 'eight': 'восемь', 'evening': 'вечер', 'for': 'для; в течение', 'friday': 'пятница',
    'grandmother': 'бабушка', 'help': 'помогать', 'home': 'дом; домой', 'hospital': 'больница', 'i': 'я', 'in': 'в',
    'is': 'есть, является (форма to be)', 'london': 'Лондон', 'month': 'месяц', 'morning': 'утро', 'my': 'мой, моя, мое',
    'next': 'следующий', "o'clock": 'часов (ровно)', 'off': 'с (get off — выйти из транспорта)', 'on': 'на; в (о днях)', 'phone': 'телефон',
    'seven': 'семь', 'she': 'она', 'shop': 'магазин', 'ten': 'десять', 'the': 'определенный артикль', 'they': 'они',
    'this': 'этот, эта, это', 'time': 'время', 'to': 'в, на (куда); частица перед глаголом', 'tomorrow': 'завтра', 'train': 'поезд',
    'us': 'нас, нам', 'we': 'мы', 'what': 'что, какой', 'when': 'когда', 'yes': 'да', 'yesterday': 'вчера', 'you': 'ты, вы',
    'your': 'твой, ваш', "a year's time": 'через год', 'around': 'по (вокруг)', 'cooking': 'готовить (от cook)', 'free': 'свободный',
    'get': 'добраться; получить', 'going': 'идет (от go)', 'italy': 'Италия', 'laptop': 'ноутбук', 'later': 'позже', 'meeting': 'встреча',
    'midnight': 'полночь', 'need': 'нуждаться', 'nine': 'девять', 'over': 'над', 'sea': 'море', 'six': 'шесть',
    'so': 'поэтому; так', 'three': 'три', 'too': 'тоже; слишком', 'university': 'университет', 'was': 'был (форма to be)',
    'platform': 'платформа'
  },
  ex: [
    { type: 'gap', task: 'Поставьте глагол в Future Continuous. Если в скобках несколько слов через косую черту, используйте в ответе их все — в нужной форме и порядке.', items: [
      ["At nine tomorrow morning I ___ (sit) in a meeting.", "will be sitting"], ["Don't phone after ten — the children ___ (sleep).", "will be sleeping"],
      ["This time next month we ___ (travel) around Italy.", "will be travelling"], ["___ you ___ (use) your laptop this evening?", ["will", "be using"]],
      ["She ___ (not / work) on Friday, so she is free to help us.", "will not be working"], ["When you get off the train, I ___ (wait) for you on the platform.", "will be waiting"],
      ["At midnight they ___ (still / dance).", "will still be dancing"], ["Where ___ you ___ (stay) in London next week?", ["will", "be staying"]],
    ]},
    { type: 'choice', task: 'Выберите правильный вариант.', items: [
      ["Come at seven. I ___ for you at home.", ["will be waiting", "wait", "was waiting"]], ["This time tomorrow we ___ over the sea.", ["will be flying", "were flying", "flew"]],
      ["Yesterday at eight I was cooking, and tomorrow at eight I ___ too.", ["will be cooking", "was cooking", "cook"]], ["— ___ you be going to the shop later? — Yes. What do you need?", ["Will", "Are", "Do"]],
      ["Don't come at three tomorrow — I ___ my grandmother in hospital.", ["will be visiting", "visit", "visited"]], ["In a year's time she ___ at a university in London.", ["will be studying", "studies", "studied"]]
    ]},
    { type: 'translate', task: 'Переведите на английский.', items: [
      ["Весь вечер мы будем смотреть футбол.", "We will be watching football all evening.|All evening we will be watching football.|We will be watching football the whole evening."],
      ["Вы будете ужинать дома сегодня вечером?", "Will you be having dinner at home tonight?|Will you be having dinner at home this evening?|Will you be eating at home tonight?|Will you be eating at home this evening?"],
      ["Когда ты вернешься, мы будем ужинать.", "When you come back, we will be having dinner.|We will be having dinner when you come back.|When you get back, we will be having dinner.|We will be having dinner when you get back.|When you return, we will be having dinner.|We will be having dinner when you return."],
      ["Завтра в десять я буду сдавать экзамен.", "Tomorrow at ten I will be taking an exam.|At ten tomorrow I will be taking an exam.|I will be taking an exam at ten tomorrow.|I will be taking an exam tomorrow at ten.|Tomorrow at ten I will be sitting an exam.|At ten tomorrow I will be sitting an exam.|I will be sitting an exam at ten tomorrow.|I will be sitting an exam tomorrow at ten."]
    ]},
    { type: 'listen', at: 2, task: 'Прослушайте предложение и соберите его из слов.', items: [
      ["At noon tomorrow I will be painting the fence in the garden.", "Завтра в полдень я буду красить забор в саду."],
      ["Will you be using your bike this weekend?", "Ты будешь пользоваться своим велосипедом в эти выходные?"],
      ["This time next week we will be skiing in the mountains.", "На следующей неделе в это время мы будем кататься на лыжах в горах."]
    ]}
  ]},

{ id: 't-future-perfect', level: 'B2', title: 'Future Perfect', sub: 'will have done',
  rule: `
<p>Future Perfect говорит о том, что <b>к определенному моменту в будущем</b> действие уже будет завершено. Например, <i>By Friday I will have finished the project</i> — к пятнице я уже закончу проект. Важен не процесс, как в Future Continuous из темы 2.14, а результат к сроку.</p>
${F("will have + <b>V3</b>")}
${T(["", "Пример"], [
  ["Утверждение", "<i>By 2030 they <b>will have built</b> the bridge.</i> — К 2030 году они построят мост."],
  ["Отрицание", "<i>I <b>won't have finished</b> by six.</i> — К шести я еще не закончу."],
  ["Вопрос", "<i><b>Will</b> you <b>have read</b> the book by Monday?</i> — Ты прочитаешь книгу к понедельнику?"]
])}
<p>Слово <i>by</i> перед указанием времени значит «к, не позже»: <i>by Friday</i> — к пятнице, <i>by then</i> — к тому времени. С Future Perfect оно встречается особенно часто, потому что это время как раз говорит о том, что будет сделано к какому-то сроку.</p>
${M("Часто встречается со словами:", ["by Friday", "by the time", "by then", "by the end of"])}
${N("После <i>by the time</i> (к тому времени, как) будущее время не ставят, вместо него используют Present Simple: <i>By the time you <b>arrive</b>, I'll have finished</i>, а не <i>By the time you will arrive</i>.")}`,
  /* перевод слов в упражнениях: по наведению или касанию (gloss.js); ключи — в нижнем регистре, как слово стоит в тексте */
  gloss: {
    'a': 'неопределенный артикль', 'airport': 'аэропорт', 'back': 'назад, обратно', 'come': 'приезжают', 'flat': 'квартира',
    'next week': 'на следующей неделе', 'this time': 'в это время', 'arrive': 'приезжать, прибывать',
    'at': 'в (о времени); у, на (о месте)', 'beach': 'пляж', 'book': 'книга', 'by': 'на (о транспорте); к (о сроке)', 'cake': 'торт',
    'call': 'звонить', 'dinner': 'ужин', "don't": 'не (= do not)', 'eight': 'восемь', 'film': 'фильм', 'have': 'иметь; вспомогательный глагол',
    'hurry': 'спешить', 'i': 'я', 'june': 'июнь', 'me': 'меня, мне', 'monday': 'понедельник', 'new': 'новый', 'next': 'следующий',
    'on': 'на; в (о днях)', 'please': 'пожалуйста', 'school': 'школа', 'she': 'она', 'the': 'определенный артикль', 'they': 'они',
    'this': 'этот, эта, это', 'time': 'время', 'tomorrow': 'завтра', 'up': 'вверх (hurry up — поторопись)', 'we': 'мы', 'week': 'неделя', 'year': 'год',
    'you': 'ты, вы', 'the end of': 'конец (чего-либо)', 'alps': 'Альпы', 'am': 'есть (форма to be с I)', 'an': 'неопределенный артикль',
    'books': 'книги', 'bridge': 'мост', 'eaten': 'съел (3-я форма eat)', 'end': 'конец', 'exam': 'экзамен',
    'finished': 'закончил (от finish)', 'get': 'добраться; получить', 'noon': 'полдень', 'of': 'предлог родительного падежа',
    'over': 'над', 'report': 'отчет', 'so': 'поэтому; так', 'there': 'там, туда', 'twenty': 'двадцать', "we'll": 'мы (= we will)'
  },
  ex: [
    { type: 'gap', task: 'Поставьте глагол в Future Continuous или Future Perfect.', items: [
      ["This time tomorrow I ___ (lie) on the beach.", "will be lying"], ["By 2030 they ___ (open) a new airport.", "will have opened"],
      ["Don't call at eight — we ___ (have) dinner.", "will be having"], ["By the time you come back, I ___ (clean) the flat.", "will have cleaned"],
      ["By June she ___ (finish) school.", "will have finished"], ["___ you have finished the book by Monday?", "will"],
      ["At noon tomorrow we ___ (fly) over the Alps.", "will be flying"], ["By the end of the year I ___ (read) twenty books.", "will have read"]
    ]},
    { type: 'choice', task: 'Выберите правильный вариант.', items: [
      ["By next week I ___ the book.", ["will have read", "will be reading", "am reading"]], ["At 10 am tomorrow I ___ an exam, so please don't call me.", ["will be taking", "will have taken", "take"]],
      ["Hurry up! The film ___ by the time we get there.", ["will have started", "will be starting", "starts"]], ["By the time she ___, we'll have eaten the cake.", ["arrives", "will arrive", "will have arrived"]]
    ]},
    { type: 'translate', task: 'Переведите на английский.', items: [
      ["Завтра в это время я буду лететь в Москву.", "This time tomorrow I will be flying to Moscow.|I will be flying to Moscow this time tomorrow.|At this time tomorrow I will be flying to Moscow.|I will be flying to Moscow at this time tomorrow.|Tomorrow at this time I will be flying to Moscow."],
      ["К вечеру я уже напишу все письма.", "By the evening I will have written all the letters.|I will have written all the letters by the evening.|By evening I will have written all the letters.|I will have written all the letters by evening."],
      ["Не приходи в шесть — я буду спать.", "Don't come at six — I will be sleeping.|Don't come at 6 — I will be sleeping."],
      ["К лету мы уже переедем в новую квартиру.", "By the summer we will have moved to a new flat.|By summer we will have moved to a new flat.|We will have moved to a new flat by the summer.|By the summer we will have moved into a new flat.|By the summer we will have moved to a new apartment.|We will have moved into a new flat by the summer.|We will have moved to a new flat by summer.|We will have moved into a new flat by summer.|By summer we will have moved into a new flat."]
    ]},
    { type: 'listen', at: 2, task: 'Прослушайте предложение и соберите его из слов.', items: [
      ["This time tomorrow I will be swimming in the sea.", "Завтра в это время я буду плавать в море."],
      ["By the end of the year we will have built two new schools.", "К концу года мы построим две новые школы."],
      ["By the time you wake up, I will have left for work.", "Когда ты проснешься, я уже уйду на работу."]
    ]}
  ]},

{ id: 't-future-perfect-continuous', level: 'C1', title: 'Future Perfect Continuous', sub: 'will have been working',
  rule: `
<p>Future Perfect Continuous показывает, как долго будет длиться действие к определенному моменту в будущем. Мы как бы переносимся в этот будущий момент и оглядываемся назад: действие началось раньше и длится до этого момента (а может, и дальше), и важно, сколько времени оно к нему продлится. Например, <i>By June I <b>will have been working</b> here for ten years</i> — в июне будет десять лет, как я здесь работаю. По-русски такое обычно передают словом «уже»: «к июню я буду работать здесь уже десять лет».</p>
${F("<b>will have been</b> + V-ing")}
${T(["", "Форма", "Пример"], [
  ["Утверждение", "<i>will have been + V-ing</i>", "<i>By six she <b>will have been studying</b> for three hours.</i> — К шести она будет заниматься уже три часа."],
  ["Отрицание", "<i>won't have been + V-ing</i>", "<i>By then he <b>won't have been waiting</b> long.</i> — К тому времени он будет ждать совсем недолго."],
  ["Вопрос", "<i>will … have been + V-ing?</i>", "<i>How long <b>will</b> you <b>have been living</b> here by May?</i> — Сколько времени ты к маю уже будешь жить здесь?"]
])}
<p>Форма для всех лиц одна и та же: <i>will</i> не меняется, а <i>have</i> после него всегда остается <i>have</i>, даже с <i>he</i> и <i>she</i>. Сокращенно говорят <i>I'll have been working</i>, а в отрицании — <i>won't have been</i>.</p>
${M("Часто встречается со словами:", ["by + время", "by the time", "by then", "for + период", "by the end of", "how long"])}
<p>Почти всегда в предложении есть две приметы: момент в будущем, к которому мы «подходим» (<i>by June</i>, <i>by the time you arrive</i>, <i>next month</i>), и длительность (<i>for ten years</i>, <i>all day</i>). Без длительности это время звучит неестественно. Как и в темах 2.14 и 2.15, после <i>by the time</i> и <i>when</i> нужен Present Simple: <i>when he <b>retires</b></i>.</p>
<h3>Чем отличается от Future Perfect</h3>
<p>Future Perfect (тема 2.15) говорит о результате — что и сколько будет сделано к моменту в будущем, а Future Perfect Continuous — о процессе и его длительности. Сравните:</p>
${E([
  ["By evening I <b>will have written</b> three chapters.", "К вечеру я напишу три главы. (результат, сколько сделано)"],
  ["By evening I <b>will have been writing</b> for six hours.", "К вечеру я буду писать уже шесть часов. (процесс, сколько длится)"],
  ["She will be tired because she <b>will have been travelling</b> all day.", "Она будет уставшей, потому что весь день проведет в дороге. (причина будущего состояния)"]
])}
<p>Последний пример показывает еще одно употребление: этим временем объясняют, почему в будущем будет какое-то состояние — усталость, голод, грязные руки. Так же Present Perfect Continuous объясняет то, что видно сейчас (<i>I'm tired because I've been running</i> — я устал, потому что бегал).</p>
${N("Глаголы состояния (<i>know, like, be, have</i> в значении «иметь») не употребляют в длительных временах, в том числе в этом. С ними берут Future Perfect: <i>By May I <b>will have known</b> him for ten years</i>, а не <i>will have been knowing</i>. С глаголами действия вроде <i>work, live, study, teach</i> при <i>for</i> + период можно сказать и в Future Perfect: <i>By May we <b>will have lived</b> here for five years</i> — смысл почти тот же, а Continuous лишь подчеркивает процесс. И еще: это время редкое и звучит довольно книжно. В разговоре его часто заменяют более простой фразой: <i>Next month it will be two years since I started learning English</i> — в следующем месяце будет два года, как я начал учить английский.")}`,
  /* перевод слов в упражнениях: по наведению или касанию (gloss.js); ключи — в нижнем регистре, как слово стоит в тексте */
  gloss: {
    'band': 'группа (музыкальная)', 'lands': 'приземляется', 'pages': 'страницы',
    'eyes': 'глаза', 'her': 'ее, ей', 'may': 'май', 'nine': 'девять', 'plane': 'самолет', 'red': 'красный',
    'how long': 'как долго', 'a': 'неопределенный артикль', 'all': 'весь, все', 'arrive': 'приезжать, прибывать',
    'at': 'в (о времени); у, на (о месте)', 'be': 'быть', 'by': 'на (о транспорте); к (о сроке)', 'children': 'дети', 'day': 'день',
    'eight': 'восемь', 'english': 'английский', 'for': 'для; в течение', 'friday': 'пятница', 'he': 'он', 'here': 'здесь, сюда',
    'him': 'его, ему', 'how': 'как', 'i': 'я', 'in': 'в', 'it': 'это; он, она (о предмете)', 'june': 'июнь', 'london': 'Лондон',
    'month': 'месяц', 'mum': 'мама', 'new': 'новый', 'next': 'следующий', "o'clock": 'часов (ровно)', 'school': 'школа', 'she': 'она',
    'summer': 'лето', 'sunday': 'воскресенье', 'ten': 'десять', 'the': 'определенный артикль', 'they': 'они', 'this': 'этот, эта, это',
    'time': 'время', 'tonight': 'сегодня вечером', 'twelve': 'двенадцать', 'two': 'два', 'we': 'мы', 'week': 'неделя', 'when': 'когда',
    'year': 'год', 'years': 'годы, лет', 'you': 'ты, вы', 'the end of': 'конец (чего-либо)', 'all day': 'весь день',
    'because': 'потому что', 'break': 'перерыв; сломать', 'bridge': 'мост', 'cars': 'машины', 'chapters': 'главы', 'company': 'компания',
    'computer': 'компьютер', 'end': 'конец', 'five': 'пять', 'forty': 'сорок', 'games': 'игры', 'guests': 'гости', 'hours': 'часы, часов',
    'letters': 'письма', 'long': 'долго; длинный', 'midnight': 'полночь', 'million': 'миллион', 'need': 'нуждаться',
    'of': 'предлог родительного падежа', 'over': 'более, свыше', 'rest': 'отдых; остальное', 'retires': 'выходит на пенсию',
    'six': 'шесть', 'so': 'поэтому; так', 'three': 'три', 'tired': 'уставший', 'twenty': 'двадцать', 'whole': 'целый',
    'will': 'вспомогательный глагол будущего времени', 'without': 'без'
  },
  ex: [
    { type: 'gap', task: 'Поставьте глагол в Future Perfect Continuous.', items: [
      ["By May I ___ (play) in this band for six years.", "will have been playing"],
      ["By the time the plane lands, we ___ (fly) for nine hours.", "will have been flying"],
      ["Next month she ___ (study) English for five years.", "will have been studying"],
      ["By midnight the children ___ (play) computer games for six hours.", "will have been playing"],
      ["By the end of the year they ___ (build) the new bridge for three years.", "will have been building"],
      ["When he retires, he ___ (teach) at this school for forty years.", "will have been teaching"],
      ["By ten o'clock tonight I ___ (drive) for twelve hours, so I will need a rest.", "will have been driving"],
      ["How long ___ you ___ (live) in London by next summer?", ["will", "have been living"]],
      ["By Friday it ___ (rain) for a whole week.", "will have been raining"]
    ]},
    { type: 'choice', task: 'Выберите правильный вариант.', items: [
      ["By the end of the day I ___ forty pages.", ["will have written", "will have been writing"]],
      ["By the end of the day she ___ for eight hours without a break.", ["will have been working", "will been working", "will have been work"]],
      ["By next year I ___ him for twenty years.", ["will have known", "will have been knowing", "will know"]],
      ["By the time the guests arrive, Mum ___ for three hours.", ["will have been cooking", "will been cooking", "will have be cooking"]],
      ["By Sunday he ___ all the letters.", ["will have answered", "will have been answering"]],
      ["Her eyes will be red tonight because she ___ at the computer all day.", ["will have been sitting", "will have being sitting", "will has been sitting"]],
      ["How long ___ here by the end of the month?", ["will you have been working", "will you have been work", "you will have been working"]],
      ["By 2030 the company ___ over a million cars.", ["will have produced", "will have been producing"]]
    ]},
    { type: 'translate', task: 'Переведите на английский.', items: [
      ["К осени она будет работать врачом уже три года.", "By the autumn she will have been working as a doctor for three years.|By autumn she will have been working as a doctor for three years.|She will have been working as a doctor for three years by the autumn.|She will have been working as a doctor for three years by autumn.|By the autumn she will have worked as a doctor for three years.|By autumn she will have worked as a doctor for three years."],
      ["К тому времени, как ты приедешь, мы будем ждать уже два часа.", "By the time you arrive, we will have been waiting for two hours.|We will have been waiting for two hours by the time you arrive.|By the time you come, we will have been waiting for two hours.|We will have been waiting for two hours by the time you come.|By the time you get here, we will have been waiting for two hours.|We will have been waiting for two hours by the time you get here."],
      ["В следующем месяце она будет изучать японский уже год.", "Next month she will have been studying Japanese for a year.|She will have been studying Japanese for a year next month.|By next month she will have been studying Japanese for a year.|Next month she will have been learning Japanese for a year.|By next month she will have been learning Japanese for a year.|She will have been learning Japanese for a year next month.|She will have been learning Japanese for a year by next month.|She will have been studying Japanese for a year by next month.|Next month she will have studied Japanese for a year.|By next month she will have studied Japanese for a year."],
      ["Сколько времени ты уже будешь жить в Москве к концу года?", "How long will you have been living in Moscow by the end of the year?|How long will you have lived in Moscow by the end of the year?"],
      ["К вечеру она будет готовиться к экзамену уже десять часов и очень устанет.", "By the evening she will have been preparing for the exam for ten hours and she will be very tired.|By the evening she will have been preparing for the exam for ten hours and will be very tired.|By evening she will have been studying for the exam for ten hours and will be very tired.|By the evening she will have been studying for the exam for ten hours, so she will be very tired."],
    ]},
    { type: 'listen', at: 2, task: 'Прослушайте предложение и соберите его из слов.', items: [
      ["By next summer we will have been living in this house for ten years.", "К следующему лету мы будем жить в этом доме уже десять лет."],
      ["The children will be hungry because they will have been playing outside all day.", "Дети будут голодными, потому что весь день проиграют на улице."],
      ["How long will you have been studying English by the end of the year?", "Сколько времени ты уже будешь изучать английский к концу года?"]
    ]}
  ]},

{ id: 't-review', level: 'C1', noStudy: true, title: 'Повторение: все времена', sub: 'Simple, Continuous, Perfect, Perfect Continuous',
  rule: `
<p>Пользуйтесь таблицей ниже как шпаргалкой: в упражнениях этой темы времена перемешаны, и для каждого предложения нужно сначала понять, что именно происходит, а потом выбрать форму.</p>
<p>Все формы в таблице — активного залога: подлежащее само совершает действие (<i>Tom <b>wrote</b> the letter</i> — Том написал письмо). Есть еще пассивный (страдательный) залог, когда действие совершается над подлежащим (<i>The letter <b>was written</b></i> — письмо было написано). Он разобран в разделе 10.</p>
${T(["", "Simple", "Continuous", "Perfect", "Perfect Continuous"], [
  ["Present", "<i>I <b>work</b></i>", "<i>I <b>am working</b></i>", "<i>I <b>have worked</b></i>", "<i>I <b>have been working</b></i>"],
  ["Past", "<i>I <b>worked</b></i>", "<i>I <b>was working</b></i>", "<i>I <b>had worked</b></i>", "<i>I <b>had been working</b></i>"],
  ["Future", "<i>I <b>will work</b></i>", "<i>I <b>will be working</b></i>", "<i>I <b>will have worked</b></i>", "<i>I <b>will have been working</b></i>"]
])}
<h3>Как выбирать</h3>
${T(["Вопрос к себе", "Время"], [
  ["Бывает регулярно, всегда? Или это просто факт либо событие, у которого назван момент (вчера, в 2015 году)?", "Simple"],
  ["Идет в определенный момент?", "Continuous"],
  ["Завершилось к моменту, важен результат?", "Perfect"],
  ["Длилось какое-то время до момента?", "Perfect Continuous"]
])}`,
  /* перевод слов в упражнениях: по наведению или касанию (gloss.js); ключи — в нижнем регистре, как слово стоит в тексте */
  gloss: {
    'next week': 'на следующей неделе', 'this time': 'в это время', 'a': 'неопределенный артикль', 'again': 'снова', 'ago': 'назад',
    'all': 'весь, все', 'and': 'и', 'at': 'в (о времени); у, на (о месте)', 'be': 'быть', 'beach': 'пляж', 'book': 'книга',
    'by': 'на (о транспорте); к (о сроке)', 'call': 'звонить', 'day': 'день', 'days': 'дни', 'dinner': 'ужин', "don't": 'не (= do not)',
    'eight': 'восемь', 'english': 'английский', 'every': 'каждый', 'film': 'фильм', 'for': 'для; в течение', 'friend': 'друг',
    'from': 'из, от', 'he': 'он', 'help': 'помогать', 'here': 'здесь, сюда', 'him': 'его, ему', 'home': 'дом; домой', 'i': 'я',
    'ice': 'лед', 'in': 'в', 'it': 'это; он, она (о предмете)', 'keys': 'ключи', 'london': 'Лондон', 'look': 'смотреть; смотри', 'look for': 'искать',
    'married': 'женат, замужем (got married — поженились)', 'me': 'меня, мне', 'month': 'месяц', 'museum': 'музей', 'my': 'мой, моя, мое', 'next': 'следующий',
    'old': 'старый', 'on': 'на; в (о днях)', 'our': 'наш', 'paris': 'Париж', 'please': 'пожалуйста', 'quiet': 'тихий; тише', 'rome': 'Рим',
    'school': 'школа', 'seaside': 'морское побережье', 'she': 'она', 'summer': 'лето', 'the': 'определенный артикль', 'they': 'они',
    'think': 'думать', 'this': 'этот, эта, это', 'time': 'время', 'to': 'в, на (куда); частица перед глаголом', 'tomorrow': 'завтра',
    'tonight': 'сегодня вечером', 'we': 'мы', 'week': 'неделя', 'when': 'когда', 'with': 'с', 'worry': 'волноваться', 'years': 'годы, лет',
    'yesterday': 'вчера', 'you': 'ты, вы', 'as soon as': 'как только', 'the end of': 'конец (чего-либо)', 'all day': 'весь день',
    'already': 'уже', 'along': 'вдоль', 'an': 'неопределенный артикль', 'arrived': 'приехал (от arrive)',
    'as': 'как; в качестве', 'because': 'потому что', 'before': 'до, раньше', 'boxes': 'коробки', 'british': 'британский',
    'came': 'пришел (от come)', 'child': 'ребенок', 'dear': 'дорогой', 'end': 'конец', 'ending': 'концовка', 'exhausted': 'измотанный',
    'five': 'пять', 'get': 'добраться; получить', 'grandad': 'дедушка', 'knew': 'знал (от know)', 'minutes': 'минуты',
    'neighbours': 'соседи', 'news': 'новости', 'of': 'предлог родительного падежа', 'since': 'с (какого-то времени)', 'soon': 'скоро',
    'sun': 'солнце', 'thames': 'Темза', 'theatre': 'театр', 'them': 'их, им', 'then': 'потом, тогда', 'three': 'три', 'tickets': 'билеты',
    'tower': 'башня', 'twenty': 'двадцать', 'was': 'был (форма to be)', 'while': 'пока, в то время как', 'whole': 'целый',
    'will': 'вспомогательный глагол будущего времени'
  },
  ex: [
    { type: 'gap', task: 'Поставьте глагол в нужное время. Если в скобках несколько слов через косую черту, используйте в ответе их все — в нужной форме и порядке.', items: [
      ["Ice ___ (melt) in the sun.", "melts"], ["Be quiet! Grandad ___ (watch) the news.", "is watching|'s watching"],
      ["I ___ (see) him yesterday.", "saw"], ["She ___ (never / be) to Paris.", "has never been|'s never been"],
      ["When I came in, they ___ (have) dinner.", "were having"], ["By the time we arrived, the film ___ (start).", "had started"],
      ["I ___ (wait) for you for twenty minutes already!", "have been waiting"], ["I ___ (call) you as soon as I get home.", "will call"],
      ["This time next week we ___ (lie) on the beach.", "will be lying"], ["He ___ (work) here since 2015.", "has worked|has been working"],
      ["Look! Our neighbours ___ (leave).", "are leaving"], ["We ___ (go) to the seaside every summer when I was a child.", "went|used to go|would go"]
    ]},
    { type: 'text', task: 'Поставьте глаголы из скобок в нужное время. Если в скобках несколько слов через косую черту, используйте в ответе их все — в нужной форме и порядке.', text: "Dear Ann, I ___ (write) to you from London. I ___ (arrive) here three days ago. I ___ (already / visit) the British Museum and the Tower. Yesterday, while I ___ (walk) along the Thames, I ___ (meet) an old school friend. He ___ (live) in London since 2020. Tomorrow we ___ (go) to the theatre — he ___ (already / buy) the tickets. I ___ (write) again soon.",
      answers: ["am writing", "arrived", "have already visited", "was walking", "met", "has lived|has been living|'s lived|'s been living", "are going|are going to go|will go", "has already bought|'s already bought", "will write"] },
    { type: 'choice', task: 'Выберите правильный вариант.', items: [
      ["I ___ English for five years.", ["have been learning", "am learning", "learn"]], ["She ___ when I came in.", ["was cooking", "cooked", "has cooked"]],
      ["They ___ married in 2015.", ["got", "have got", "had got"]], ["I ___ my keys. Please help me look for them.", ["have lost", "lost", "had lost"]],
      ["By next summer he ___ school already.", ["will have finished", "will finish", "finishes"]], ["I knew the ending because I ___ the film before.", ["had seen", "has seen", "saw"]]
    ]},
    { type: 'listen', at: 2, task: 'Прослушайте предложение и соберите его из слов.', items: [
      ["I have lived in this city for five years, but I still don't know my neighbours.", "Я живу в этом городе пять лет, но до сих пор не знаю своих соседей."],
      ["When I came home, the children were sleeping and my husband had already washed the dishes.", "Когда я пришла домой, дети спали, а муж уже помыл посуду."],
      ["Next year my brother will be studying at the same university as me.", "В следующем году мой брат будет учиться в том же университете, что и я."]
    ]},
    { type: 'gap', task: 'Будущие времена: поставьте глагол в Future Simple, Future Continuous, Future Perfect или Future Perfect Continuous. Если в скобках несколько слов через косую черту, используйте в ответе их все — в нужной форме и порядке.', items: [
      ["Don't worry, I ___ (help) you with the boxes.", "will help"],
      ["This time tomorrow we ___ (fly) to Rome.", "will be flying"],
      ["By the end of the week I ___ (read) the whole book.", "will have read"],
      ["By the end of the week I ___ (read) this book for a month.", "will have been reading"],
      ["Call me at eight: I ___ (not / sleep) then.", "will not be sleeping"],
      ["By the time you get home, I ___ (cook) dinner.", "will have cooked"],
      ["She will be exhausted tonight because she ___ (run) all day.", "will have been running"],
      ["I think it ___ (rain) tomorrow.", "will rain"]
    ]}
  ]}
]});

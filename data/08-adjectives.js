BOOK.push({ n: 8, id: 'adjectives', title: 'Степени сравнения прилагательных',
intro: 'Как образуются сравнительная и превосходная степени, какие есть исключения и устойчивые конструкции сравнения, а также разница между прилагательным и наречием.',
topics: [

{ id: 'adj-degrees', level: 'A2', title: 'Образование степеней сравнения', sub: 'big – bigger – the biggest',
  rule: `
<p>Сравнительная степень показывает, что один предмет больше, лучше или быстрее другого, и обычно идет вместе с <i>than</i> («чем»): <i>Moscow is bigger than Tver</i>. Превосходная выделяет один предмет из целой группы как самый-самый и ставится с <i>the</i>: <i>the biggest city</i>.</p>
${T(["Тип прилагательного", "Сравнительная", "Превосходная"], [
  ["односложные", "<i>cold → cold<b>er</b></i>", "<i><b>the</b> cold<b>est</b></i>"],
  ["оканчиваются на <i>-e</i>", "<i>nice → nice<b>r</b></i>", "<i><b>the</b> nice<b>st</b></i>"],
  ["односложные: краткий гласный + одна согласная (согласная удваивается)", "<i>big → big<b>ger</b>, hot → hot<b>ter</b></i>", "<i><b>the</b> big<b>gest</b></i>"],
  ["двусложные на <i>-y</i>", "<i>easy → eas<b>ier</b>, happy → happ<b>ier</b></i>", "<i><b>the</b> eas<b>iest</b></i>"],
  ["остальные двусложные и длиннее", "<i><b>more</b> interesting, <b>more</b> famous</i>", "<i><b>the most</b> interesting</i>"],
  ["меньшая степень", "<i><b>less</b> expensive</i>", "<i><b>the least</b> expensive</i>"]
])}
<h3>Исключения</h3>
${T(["", "Сравнительная", "Превосходная"], [
  ["<i>good / well</i>", "<i>better</i>", "<i>the best</i>"],
  ["<i>bad / badly</i>", "<i>worse</i>", "<i>the worst</i>"],
  ["<i>far</i>", "<i>farther / further</i>", "<i>the farthest / furthest</i>"],
  ["<i>much / many</i>", "<i>more</i>", "<i>the most</i>"],
  ["<i>little</i>", "<i>less</i>", "<i>the least</i>"],
  ["<i>old</i>", "<i>older / elder</i>", "<i>the oldest / eldest</i>"]
])}
${N("Некоторые двусложные прилагательные могут образовывать формы и через <i>-er</i>: <i>clever — cleverer, quiet — quieter, simple — simpler, narrow — narrower</i>. Выбирайте один способ: либо окончание <i>-er / -est</i>, либо <i>more / most</i>. Вместе их не используют, поэтому <i>more bigger</i> и <i>the most best</i> — ошибки. А формы <i>elder</i> и <i>eldest</i> употребляют только по отношению к членам семьи. <i>Elder</i> ставят только перед существительным: <i>my <b>elder</b> brother</i> — мой старший брат, но <i>He is <b>older</b> than me</i> — он старше меня (не <i>elder than</i>). А <i>the eldest</i> может стоять и без существительного: <i>I'm the eldest</i> — я старший.")}
<h3>Farther и further</h3>
<p>У <i>far</i> («далеко, далекий») две пары форм. Когда речь идет о расстоянии, подходят обе: <i>farther</i> и <i>further</i> — дальше. Например, <i>My house is <b>farther / further</b> from the school than yours</i> — мой дом дальше от школы, чем твой. Но у <i>further</i> есть еще значение «дальнейший, дополнительный», и тогда <i>farther</i> не годится: <i>for <b>further</b> information</i> — для получения дополнительной информации.</p>
<h3>Good и well, bad и badly</h3>
<p>В таблице исключений рядом стоят прилагательное и наречие: <i>good</i> («хороший») и <i>well</i> («хорошо»), <i>bad</i> («плохой») и <i>badly</i> («плохо»). У каждой пары степени сравнения общие: <i>She sings <b>better</b> than me</i> — она поет лучше меня. Чем прилагательное отличается от наречия, рассказано в следующей теме этого раздела.</p>`,
  /* перевод слов в упражнениях: по наведению или касанию (gloss.js); ключи — в нижнем регистре, как слово стоит в тексте */
  gloss: {
    'horse': 'лошадь',
    'an': 'неопределенный артикль', 'elephant': 'слон',
    'sister': 'сестра', 'film': 'фильм', 'book': 'книга', 'this is': 'это', 'has': 'имеет; вспомогательный глагол', 'he': 'он',
    'she': 'она', 'it': 'это; он, она (о предмете)', 'we': 'мы', 'my': 'мой, моя, мое', 'is': 'есть, является (форма to be)',
    'are': 'есть (форма to be)', 'the': 'определенный артикль', 'at': 'в (о времени); у, на (о месте)', 'in': 'в',
    'that': 'тот, та, то; что (союз)', 'a': 'неопределенный артикль', 'today': 'сегодня', 'this': 'этот, эта, это',
    'day': 'день', 'of': 'предлог родительного падежа', 'who': 'кто', 'family': 'семья', 'year': 'год', 'her': 'ее, ей',
    'to': 'в, на (куда); частица перед глаголом', 'near': 'рядом с, около', 'class': 'класс', 'your': 'твой, ваш', 'our': 'наш',
    'town': 'город', 'yesterday': 'вчера', 'country': 'страна; загород', 'now': 'сейчас', 'from': 'из, от', 'mountain': 'гора',
    'test': 'контрольная', 'kazan': 'Казань', 'last': 'прошлый', 'tomorrow': 'завтра', 'weather': 'погода', 'dinner': 'ужин',
    'english': 'английский', 'samara': 'Самара', 'train': 'поезд', 'ago': 'назад', 'here': 'здесь, сюда', 'month': 'месяц', 'one': 'один',
    'be': 'быть', 'plane': 'самолет', 'beach': 'пляж', 'hotel': 'гостиница', 'was': 'был (форма to be)', 'ever': 'когда-либо',
    'read': 'читать; прочитал', 'seen': 'видел (3-я форма see)', 'since': 'с (какого-то времени)', 'life': 'жизнь',
    'been': 'был (3-я форма be)', 'done': 'сделал (3-я форма do)', 'student': 'студент', 'will': 'вспомогательный глагол будущего времени',
    'bags': 'сумки', 'city': 'город', 'everest': 'Эверест', 'exercise': 'упражнение', 'had': 'имел; вспомогательный глагол',
    "i've": 'я (= I have)', 'july': 'июль', 'mine': 'мой', 'moved': 'переехал', 'person': 'человек', 'restaurant': 'ресторан',
    'than': 'чем', "today's": 'сегодняшний', 'vatican': 'Ватикан', "week's": 'недельный', 'world': 'мир'
  },
  ex: [
    { type: 'gap', task: 'Поставьте прилагательное в сравнительную степень.', items: [
      ["An elephant is ___ (big) than a horse.", "bigger"], ["Yesterday was ___ (hot) than today.", "hotter"],
      ["Today's test was ___ (easy) than last week's.", "easier"], ["My English is ___ (good) now than a year ago.", "better"],
      ["A plane is ___ (fast) than a train.", "faster"], ["The book was ___ (interesting) than the film.", "more interesting"],
      ["The weather will be ___ (bad) tomorrow than today.", "worse"], ["Your bags are ___ (heavy) than mine.", "heavier"],
      ["She is ___ (beautiful) than her sister.", "more beautiful"], ["Is Kazan ___ (far) from here than Samara?", "farther|further"],
      ["Our hotel was ___ (cheap) than the one near the beach.", "cheaper"], ["He has been ___ (happy) since he moved to the country.", "happier"]
    ]},
    { type: 'gap', task: 'Поставьте прилагательное в превосходную степень (с артиклем).', items: [
      ["It was ___ (bad) day of my life.", "the worst"], ["Everest is ___ (high) mountain in the world.", "the highest"],
      ["This is ___ (interesting) book I've ever read.", "the most interesting"], ["She was ___ (good) student in our class.", "the best"],
      ["July is ___ (hot) month of the year.", "the hottest"], ["Who is ___ (old) person in your family?", "the oldest|the eldest"],
      ["That was ___ (funny) film I've ever seen.", "the funniest"], ["We had dinner at ___ (expensive) restaurant in town.", "the most expensive"],
      ["Vatican City is ___ (small) country in the world.", "the smallest"], ["This is ___ (easy) exercise I've done today.", "the easiest"]
    ]},
    { type: 'translate', task: 'Переведите на английский.', items: [
      ["Мой брат старше меня.", "My brother is older than me.|My brother is older than I am.|My brother is older than I."],
      ["Это был лучший день в моей жизни.", "This was the best day of my life.|It was the best day of my life.|That was the best day of my life.|This was the best day in my life.|It was the best day in my life.|That was the best day in my life."],
      ["Сегодня холоднее, чем вчера.", "It is colder today than yesterday.|Today is colder than yesterday.|It's colder today than yesterday.|It's colder today than it was yesterday.|It is colder today than it was yesterday.|Today it is colder than yesterday."],
      ["Вчерашняя задача была труднее.", "Yesterday's task was more difficult.|Yesterday's task was harder.|Yesterday's problem was more difficult.|Yesterday's problem was harder."],
      ["Это самое дешевое кафе в городе.", "This is the cheapest cafe in town.|This is the cheapest café in town.|This is the cheapest cafe in the city.|It's the cheapest cafe in town.|This is the cheapest café in the city.|It's the cheapest café in town.|It's the cheapest cafe in the city."]
    ]},
    { type: 'listen', at: 2, task: 'Прослушайте предложение и соберите его из слов.', items: [
      ["This is the best film I have ever seen.", "Это лучший фильм, который я когда-либо видел."],
      ["My brother is taller and stronger than me.", "Мой брат выше и сильнее меня."],
      ["Today is hotter than yesterday, but tomorrow will be worse.", "Сегодня жарче, чем вчера, но завтра будет хуже."]
    ]}
  ]},

{ id: 'adj-adverbs', level: 'A2', title: 'Прилагательное или наречие', sub: 'quick – quickly, hard – hard',
  rule: `
<p>Прилагательное описывает предмет и отвечает на вопрос <i>какой?</i>: <i>a careful driver</i> — осторожный водитель. Наречие описывает действие и отвечает на вопрос <i>как?</i>: <i>he drives carefully</i> — он водит осторожно. Большинство наречий получается из прилагательного, если добавить окончание <i>-ly</i>.</p>
${T(["Прилагательное", "Наречие", "Пример"], [
  ["<i>quick</i>", "<i>quick<b>ly</b></i>", "<i>He is a quick runner. He runs <b>quickly</b>.</i> — Он быстрый бегун. Он быстро бегает."],
  ["<i>careful</i>", "<i>careful<b>ly</b></i>", "<i>Drive <b>carefully</b>!</i> — Веди машину осторожно!"],
  ["<i>happy</i>", "<i>happ<b>ily</b></i>", "<i>They lived <b>happily</b>.</i> — Они жили счастливо."],
  ["<i>good</i>", "<i><b>well</b></i>", "<i>She is a good singer. She sings <b>well</b>.</i> — Она хорошая певица. Она хорошо поет."],
  ["<i>fast, hard, late, early</i>", "те же: <i>fast, hard, late, early</i>", "<i>He works <b>hard</b>. Don't come <b>late</b>.</i> — Он много и усердно работает. Не приходи поздно."]
])}
<p>Обратите внимание на написание: если прилагательное оканчивается на согласную + <i>y</i>, то <i>y</i> меняется на <i>i</i>: <i>happy → happily</i>, <i>easy → easily</i>. А у слов <i>fast, hard, late, early</i> наречие совпадает с прилагательным: <i>a <b>fast</b> car</i> — быстрая машина, <i>drive <b>fast</b></i> — быстро ехать. Формы <i>fastly</i> не существует, а <i>hardly</i> и <i>lately</i> — это отдельные слова с другим значением, о них ниже.</p>
<h3>Ловушки</h3>
${E([
  ["He works <b>hard</b>. — He <b>hardly</b> works.", "Работает усердно. — Почти не работает."],
  ["I came <b>late</b>. — I haven't seen him <b>lately</b>.", "Пришел поздно. — Не видел его в последнее время."]
])}
<h3>Прилагательное после look, feel, smell</h3>
<p>Глаголы <i>look</i> («выглядеть»), <i>feel</i> («чувствовать себя»), <i>smell</i> («пахнуть»), <i>taste</i> («быть на вкус»), <i>sound</i> («звучать»), <i>seem</i> («казаться») и <i>be</i> («быть») здесь не описывают действие, а связывают подлежащее с его признаком. Иначе говоря, они отвечают на вопрос «какой?», а не «как?», поэтому после них ставят прилагательное, а не наречие. Так, <i>She looks happy</i> значит, что она счастливая на вид, а <i>I feel bad</i> — мне плохо (а не «я плохо умею чувствовать»). Сравните: <i>She looked <b>carefully</b> at the map</i> — она внимательно посмотрела на карту. Здесь <i>look</i> значит «смотреть», то есть это обычное действие, и после него нужно наречие.</p>
${N("Не каждое слово на <i>-ly</i> — наречие. <i>Friendly, lovely, lonely, silly</i> — это прилагательные. Если нужно сказать «как?», используют оборот: <i>in a friendly way</i> — по-дружески.")}`,
  /* перевод слов в упражнениях: по наведению или касанию (gloss.js); ключи — в нижнем регистре, как слово стоит в тексте */
  gloss: {
    'house': 'дом', 'week': 'неделя', 'has': 'имеет; вспомогательный глагол', 'i': 'я', 'he': 'он', 'she': 'она',
    'it': 'это; он, она (о предмете)', 'we': 'мы', 'they': 'они', 'my': 'мой, моя, мое', 'is': 'есть, является (форма to be)',
    'have': 'иметь; есть (о еде)', 'the': 'определенный артикль', 'at': 'в (о времени); у, на (о месте)', 'what': 'что, какой',
    'we have': 'у нас есть', 'a': 'неопределенный артикль', 'very': 'очень', 'today': 'сегодня', 'please': 'пожалуйста',
    'this': 'этот, эта, это', 'only': 'только', 'look': 'выглядеть', 'morning': 'утро', 'father': 'отец', 'always': 'всегда',
    'you': 'ты, вы', 'english': 'английский', 'speak': 'говорить', 'train': 'поезд', 'up': 'вверх', 'all': 'весь, все',
    'did': 'вспомогательный глагол прошедшего времени', 'him': 'его, ему', 'box': 'коробка', 'children': 'дети',
    'arrived': 'приехал (от arrive)', 'met': 'встретил (от meet)', 'worked': 'работал (от work)', 'been': 'был (3-я форма be)',
    'found': 'нашел (от find)', 'got': 'добрался (от get)', 'got up': 'встали', 'once': 'один раз', 'answered': 'ответил', 'concert': 'концерт',
    'drive': 'водить машину', 'driver': 'водитель', 'happened': 'случилось', 'interview': 'собеседование, интервью', 'know': 'знать',
    'opened': 'открыл', 'played': 'играл', 'question': 'вопрос', 'ran': 'бежал (от run)', 'road': 'дорога', 'sang': 'пел (от sing)',
    'smiled': 'улыбнулся', 'soup': 'суп', 'spoke': 'говорил (от speak)', 'tastes': 'на вкус', 'wet': 'мокрый'
  },
  ex: [
    { type: 'choice', task: 'Выберите прилагательное или наречие.', items: [
      ["Please drive ___. The road is wet.", ["carefully", "careful"]], ["She spoke English very ___ at the interview.", ["well", "good"]],
      ["This soup tastes ___.", ["good", "well"]], ["My father has always been a ___ driver.", ["careful", "carefully"]],
      ["I ___ know him: we have met only once.", ["hardly", "hard"]], ["They worked very ___ all week.", ["hard", "hardly"]],
      ["You look ___ today. What happened?", ["sad", "sadly"]], ["She smiled ___.", ["happily", "happy"]],
      ["The train arrived ___.", ["late", "lately"]], ["He answered the question ___.", ["correctly", "correct"]]
    ]},
    { type: 'gap', task: 'Образуйте наречие от прилагательного в скобках.', items: [
      ["She sang ___ (beautiful) at the concert.", "beautifully"], ["He ran very ___ (fast).", "fast"],
      ["Please speak ___ (slow).", "slowly"], ["The children played ___ (quiet).", "quietly"],
      ["You did it very ___ (good)!", "well"], ["He opened the box ___ (careful).", "carefully"],
      ["I ___ (easy) found the house.", "easily"], ["We got up ___ (early) this morning.", "early"]
    ]},
    { type: 'translate', task: 'Переведите на английский.', items: [
      ["В детстве она хорошо пела.", "She sang well as a child.|She sang well when she was a child.|When she was a child, she sang well.|As a child she sang well.|She used to sing well as a child.|She used to sing well when she was a child."],
      ["Он плохо водит машину.", "He drives badly.|He is a bad driver.|He doesn't drive well.|He isn't a good driver."],
      ["Суп пахнет вкусно.", "The soup smells good.|The soup smells delicious.|The soup smells nice."],
      ["Вчера он много работал.", "Yesterday he worked hard.|He worked hard yesterday.|Yesterday he worked a lot.|He worked a lot yesterday."],
      ["Он почти не говорит по-английски.", "He hardly speaks English.|He barely speaks English.|He can hardly speak English.|He can barely speak English.|He speaks hardly any English.|He speaks almost no English."]
    ]},
    { type: 'listen', at: 2, task: 'Прослушайте предложение и соберите его из слов.', items: [
      ["She speaks English very well and quite fast.", "Она говорит по-английски очень хорошо и довольно быстро."],
      ["He works hard, but he hardly ever gets tired.", "Он много работает, но почти никогда не устает."],
      ["The soup smells good, and it tastes delicious.", "Суп хорошо пахнет и очень вкусный."]
    ]}
  ]},

{ id: 'adj-constructions', level: 'B1', title: 'Сравнительные конструкции', sub: 'as … as, the more … the better',
  rule: `
<p>Кроме сравнения с <i>than</i>, есть устойчивые схемы — их удобно выучить целиком.</p>
${T(["Конструкция", "Значение", "Пример"], [
  ["<i>as + прил. + as</i>", "такой же, как", "<i>She is <b>as tall as</b> her mother.</i> — Она такого же роста, как ее мама."],
  ["<i>not as / not so + прил. + as</i>", "не такой, как", "<i>It is<b>n't as cold</b> today <b>as</b> yesterday.</i> — Сегодня не так холодно, как вчера."],
  ["<i>the + сравн., the + сравн.</i>", "чем…, тем…", "<i><b>The more</b> you read, <b>the more</b> you know.</i> — Чем больше читаешь, тем больше знаешь."],
  ["<i>сравн. + and + сравн.</i>", "все более и более", "<i>It's getting <b>colder and colder</b>.</i> — Становится все холоднее и холоднее."],
  ["<i>much / far / a lot + сравн.</i>", "гораздо, намного", "<i>This car is <b>much faster</b>.</i> — Эта машина гораздо быстрее."],
  ["<i>a bit / a little / slightly + сравн.</i>", "чуть-чуть", "<i>I feel <b>a bit better</b>.</i> — Мне чуть-чуть лучше."],
  ["<i>twice / three times as … as</i>", "в два / три раза", "<i>It's <b>twice as big as</b> mine.</i> — Он в два раза больше моего."],
  ["<i>the same as / different from</i> (брит. также <i>different to</i>)", "такой же / другой", "<i>My bag is <b>the same as</b> yours.</i> — У меня такая же сумка, как у тебя."]
])}
<h3>Как устроены эти конструкции</h3>
<p>В конструкции <i>as … as</i> прилагательное стоит в обычной форме, без <i>-er</i> и <i>more</i>, потому что предметы равны: <i>as big as</i>, а не <i>as bigger as</i>. В отрицании она значит, что первый предмет «уступает» второму: <i>This flat isn't as big as our old one</i> — эта квартира не такая большая, как наша старая, то есть старая была больше. Чтобы сказать «в два, в три раза больше», перед <i>as … as</i> ставят <i>twice</i> («вдвое») или <i>three times</i> («втрое»).</p>
<p>В конструкции «чем…, тем…» перед каждой сравнительной степенью стоит <i>the</i>, хотя в русском такого слова нет: <i>The sooner, the better</i> — чем раньше, тем лучше. А повтор сравнительной степени через <i>and</i> показывает, что признак постепенно нарастает; обычно его используют с глаголами <i>get</i> и <i>become</i> («становиться»). У длинных прилагательных повторяют только <i>more</i>: <i>more and more interesting</i> — все интереснее и интереснее.</p>
<p>Наконец, после <i>different</i> ставят <i>from</i>, а не <i>than</i>, потому что это не сравнительная степень: <i>Your bag is <b>different from</b> mine</i> — твоя сумка не такая, как моя.</p>
${N("<i>Very</i> перед сравнительной степенью не ставят: <i>very better</i> — ошибка.")}`,
  /* перевод слов в упражнениях: по наведению или касанию (gloss.js); ключи — в нижнем регистре, как слово стоит в тексте */
  gloss: {
    'old': 'старый', 'house': 'дом', 'good': 'хороший', 'sister': 'сестра', 'film': 'фильм', 'week': 'неделя', 'book': 'книга',
    'this is': 'это', 'it is': 'это', "it's": 'это (= it is)', 'i have': 'у меня есть', 'i': 'я', 'he': 'он',
    'it': 'это; он, она (о предмете)', 'we': 'мы', 'my': 'мой, моя, мое', 'is': 'есть, является (форма to be)',
    'are': 'есть (форма to be)', 'have': 'иметь; есть (о еде)', 'the': 'определенный артикль', 'in': 'в', 'very': 'очень',
    'today': 'сегодня', 'new': 'новый', 'this': 'этот, эта, это', 'flat': 'квартира', 'and': 'и',
    'to': 'в, на (куда); частица перед глаголом', 'room': 'комната', 'our': 'наш', 'yesterday': 'вчера', 'me': 'меня, мне',
    'volga': 'Волга', 'river': 'река', 'you': 'ты, вы', 'test': 'контрольная', 'yours': 'твой, ваш', 'last week': 'на прошлой неделе',
    'ill': 'больной', 'last': 'прошлый', 'not': 'не', 'but': 'но', 'car': 'машина', 'up': 'вверх', 'his': 'его', 'one': 'один',
    'which': 'который', 'bought': 'купил (от buy)', 'or': 'или', 'phone': 'телефон', 'was': 'был (форма to be)', 'ever': 'когда-либо',
    'three': 'три', 'times': 'раз', 'am': 'есть (форма to be с I)', 'life': 'жизнь', 'been': 'был (3-я форма be)',
    'getting': 'становится; вставать (от get)', 'going': 'идет (от go)', 'going up': 'растут', "we'll": 'мы (= we will)', 'as': 'так же (as … as — такой же …, как)',
    'thames': 'Темза', 'becomes': 'становится', 'bigger': 'больше', 'different': 'разный, другой', 'drive': 'водить машину',
    'easier': 'легче', 'expensive': 'дорогой', 'faster': 'быстрее', 'feel': 'чувствовать', 'finish': 'закончить',
    'gets': 'получает; становится', 'mine': 'мой', 'model': 'модель', 'more': 'больше, более', 'older': 'старше', 'prices': 'цены',
    'race': 'гонка, забег', 'ran': 'бежал (от run)', 'restaurant': 'ресторан', 'same': 'тот же самый', 'sooner': 'раньше',
    'start': 'начинать', 'than': 'чем', 'their': 'их'
  },
  ex: [
    { type: 'choice', task: 'Выберите правильный вариант.', items: [
      ["This is ___ restaurant I have ever been to.", ["the best", "the better", "the most good"]], ["He ran ___ than me in the race yesterday.", ["faster", "more fast", "fastest"]],
      ["The older he gets, ___ he becomes.", ["the wiser", "wiser", "the wisest"]], ["My room in the old flat was not as ___ as yours.", ["big", "bigger", "biggest"]],
      ["Which river is ___, the Volga or the Thames?", ["longer", "longest", "more long"]], ["This flat is ___ bigger than our old one.", ["much", "very", "more"]],
      ["It's getting ___.", ["darker and darker", "dark and darker", "more and more dark"]], ["His new car is ___ mine. He bought the same model.", ["the same as", "the same like", "same as"]],
      ["Their new house is three times ___ our old one.", ["as big as", "bigger as", "as bigger than"]], ["I was ill last week, but I feel ___ today.", ["a bit better", "very better", "a bit more good"]]
    ]},
    { type: 'gap', task: 'Закончите предложения.', items: [
      ["Tom is 180 cm, Mike is 180 cm. → Tom is as ___ as Mike.", "tall"],
      ["My sister is 20, I am 18. → I am not as ___ as my sister.", "old"],
      ["The faster you drive, the ___ (dangerous) it is.", "more dangerous"],
      ["Prices are going up. Life is getting more and ___ expensive.", "more"],
      ["This test was ___ easier than the last one. (намного)", "much|far|a lot"],
      ["My new phone is very different ___ my old one.", "from|to"],
      ["The sooner we start, the ___ (soon) we'll finish.", "sooner"],
      ["The film was not as good ___ the book.", "as"]
    ]},
    { type: 'translate', task: 'Переведите на английский.', items: [
      ["В двенадцать лет она была такой же высокой, как ее мама.", "At twelve she was as tall as her mother.|At twelve she was as tall as her mum.|At the age of twelve she was as tall as her mother.|When she was twelve, she was as tall as her mother.|When she was twelve, she was as tall as her mum.|At the age of twelve she was as tall as her mum."],
      ["Эта сумка не такая тяжелая, как моя.", "This bag isn't as heavy as mine.|This bag isn't so heavy as mine."],
      ["Чем дольше я его знаю, тем больше он мне нравится.", "The longer I know him, the more I like him.|The longer I have known him, the more I like him."],
      ["Задания становятся все труднее и труднее.", "The tasks are getting harder and harder.|The tasks are getting more and more difficult.|The exercises are getting harder and harder.|The exercises are getting more and more difficult."],
      ["Моя новая машина намного быстрее старой.", "My new car is much faster than my old one.|My new car is far faster than my old one.|My new car is a lot faster than my old one.|My new car is much faster than the old one.|My new car is a lot faster than the old one.|My new car is far faster than the old one."]
    ]},
    { type: 'listen', at: 2, task: 'Прослушайте предложение и соберите его из слов.', items: [
      ["The more you practise, the better you speak.", "Чем больше практикуешься, тем лучше говоришь."],
      ["Our new car isn't as fast as the one we had before.", "Наша новая машина не такая быстрая, как та, что была у нас раньше."],
      ["The days are getting shorter and shorter.", "Дни становятся все короче и короче."]
    ]}
  ]}
]});

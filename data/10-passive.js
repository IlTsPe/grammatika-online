BOOK.push({ n: 10, id: 'passive', title: 'Страдательный залог (Passive Voice)',
intro: 'Сначала — пассив в простых временах, затем во всех остальных и с модальными глаголами, в конце — каузатив.',
topics: [

{ id: 'pas-simple', level: 'B1', title: 'Пассив в Simple', sub: 'is made, was built, will be done',
  rule: `
<p>Пассив (страдательный залог) используют, когда важно само действие или то, над чем оно совершается, а не тот, кто его выполняет. Обычно так бывает, если исполнитель неизвестен, очевиден или просто неважен: <i>My bike was stolen</i> — мой велосипед украли (кто украл, неизвестно). Если исполнителя все же нужно назвать, его вводят через <i>by</i>, а инструмент — через <i>with</i>, как в теме 6.4.</p>
${F("<b>be</b> в нужном времени + <b>V3</b>")}
<p><i>V3</i> — третья форма глагола, как в Present Perfect (тема 2.9).</p>
${T(["Время", "Актив", "Пассив"], [
  ["Present Simple", "<i>They <b>clean</b> the room every day.</i> — Они убирают комнату каждый день.", "<i>The room <b>is cleaned</b> every day.</i> — Комнату убирают каждый день."],
  ["Past Simple", "<i>They <b>built</b> the house in 1905.</i> — Они построили дом в 1905 году.", "<i>The house <b>was built</b> in 1905.</i> — Дом был построен в 1905 году."],
  ["Future Simple", "<i>They <b>will announce</b> the results.</i> — Они объявят результаты.", "<i>The results <b>will be announced</b>.</i> — Результаты будут объявлены."]
])}
<p>Вопрос и отрицание в пассиве строятся с помощью того же глагола <i>be</i>, что и в утверждении, — вспомогательные <i>do / does / did</i> здесь не нужны. В вопросе <i>be</i> выносят перед подлежащим, а в отрицании после него ставят <i>not</i>.</p>
${E([
  ["'Hamlet' <b>was written</b> by Shakespeare.", "«Гамлет» был написан Шекспиром."],
  ["Paper <b>is made</b> from wood.", "Бумагу делают из дерева."],
  ["The letter <b>was written</b> with a pencil.", "Письмо было написано карандашом."],
  ["<b>Was</b> the window <b>broken</b> by the children? — It <b>wasn't broken</b>.", "Окно разбили дети? — Его не разбивали."]
])}
${N("Русские предложения без указания, кто действует, часто удобно переводить пассивом. Например, «Здесь говорят по-английски» — <i>English <b>is spoken</b> here</i>.")}
<h3>Пассив с глаголами give, tell, show</h3>
<p>У некоторых глаголов два дополнения: кому и что. Например, <i>They gave <b>me</b> <b>a book</b></i> — они дали мне книгу. Такие предложения можно поставить в пассив двумя способами: подлежащим делают либо человека, либо предмет. <i>I was given a book</i> — мне дали книгу (подлежащее — человек); <i>A book was given to me</i> — книгу дали мне (подлежащее — предмет). Обычно выбирают первый способ. Дословно <i>I was given a book</i> по-русски звучит как «я был дан книгу» — так не говорят, зато по-английски такая фраза звучит очень естественно. Так ведут себя глаголы <i>give, tell, show, send, offer, promise, ask</i>.</p>
${E([
  ["I <b>was given</b> a book for my birthday.", "Мне подарили книгу на день рождения."],
  ["We <b>were told</b> to wait.", "Нам велели подождать."],
  ["She <b>was offered</b> a new job.", "Ей предложили новую работу."]
])}
<h3>Глагол с предлогом</h3>
<p>Некоторые глаголы всегда употребляются с предлогом: <i>look after, laugh at, send for, listen to</i>. Когда такое предложение ставят в пассив, предлог никуда не исчезает — он остается сразу после глагола, даже если оказывается в самом конце: <i>The doctor was sent for</i> — за врачом послали.</p>
${E([
  ["They <b>sent for</b> the doctor. → The doctor <b>was sent for</b>.", "За врачом послали."],
  ["Everybody <b>laughed at</b> him. → He <b>was laughed at</b>.", "Над ним смеялись."],
  ["The children <b>are</b> well <b>looked after</b>.", "За детьми хорошо присматривают."],
  ["This film <b>is</b> much <b>spoken about</b>.", "Об этом фильме много говорят."]
])}`,
  /* перевод слов в упражнениях: по наведению или касанию (gloss.js); ключи — в нижнем регистре, как слово стоит в тексте */
  gloss: {
    'vase': 'ваза',
    'cat': 'кошка', 'our': 'наш',
    'plumber': 'сантехник',
    'peace': 'мир, покой', 'war': 'война',
    'war and peace': '«Война и мир» (роман Толстого)',
    'old': 'старый', 'film': 'фильм', 'i': 'я', 'he': 'он', 'we': 'мы', 'they': 'они', 'the': 'определенный артикль',
    'at': 'в (о времени); у, на (о месте)', 'in': 'в', 'a': 'неопределенный артикль', 'dog': 'собака', 'new': 'новый', 'window': 'окно',
    'this': 'этот, эта, это', 'monday': 'понедельник', 'day': 'день', 'of': 'предлог родительного падежа', 'door': 'дверь',
    'boy': 'мальчик', 'and': 'и', 'every': 'каждый', 'year': 'год', 'for': 'для; в течение', 'to': 'в, на (куда); частица перед глаголом',
    'milk': 'молоко', 'bread': 'хлеб', 'where': 'где, куда', 'famous': 'знаменитый', 'museum': 'музей', 'people': 'люди, человек',
    'meeting': 'встреча', 'yesterday': 'вчера', 'by': 'кем, чем (о том, кто делает)', 'morning': 'утро', 'after': 'после',
    'often': 'часто', 'from': 'из, от', 'all over the world': 'со всего мира', 'tourists': 'туристы', 'picture': 'картина, рисунок',
    'last': 'прошлый', 'party': 'вечеринка', 'tomorrow': 'завтра', 'when': 'когда', 'every day': 'каждый день',
    'english': 'английский', 'lot': 'много (a lot)', 'speak': 'говорить', 'all': 'весь, все', 'days': 'дни', 'him': 'его, ему',
    'here': 'здесь, сюда', 'light': 'свет', 'next': 'следующий', 'looks': 'выглядит', 'made': 'сделали; приняли (решение)',
    'off': 'прочь (switch off — выключить)', 'children': 'дети', 'night': 'ночь', 'took': 'взял; занял (от take)', 'took care of': 'заботились о',
    'was': 'был (форма to be)', 'japan': 'Япония', 'thief': 'вор', 'over': 'более, свыше', 'bridge': 'мост', 'cars': 'машины',
    'letters': 'письма', 'will': 'вспомогательный глагол будущего времени', 'switched off': 'выключил', 'about': 'о; около',
    'america': 'Америка', 'artist': 'художник', 'care': 'забота', 'castle': 'замок', 'century': 'век', 'cheese': 'сыр', 'everybody': 'все',
    'granny': 'бабуля', 'key': 'ключ', 'laughed': 'засмеялся', 'listened': 'слушал', 'many': 'много', 'nobody': 'никто',
    'nowadays': 'в наши дни', 'opened': 'открыл', 'painted': 'покрасил; нарисовал', 'problem': 'проблема', 'results': 'результаты',
    'sent': 'отправил (от send)', 'shoes': 'туфли, обувь', 'somebody': 'кто-то', 'switched': 'переключил', 'talk': 'разговаривать',
    'these': 'эти', 'world': 'мир'
  },
  ex: [
    { type: 'gap', task: 'Поставьте глагол в Present, Past или Future Simple Passive. Если в скобках несколько слов через косую черту, используйте в ответе их все — в нужной форме и порядке.', items: [
      ["English ___ (speak) all over the world.", "is spoken"], ["This castle ___ (build) in the 15th century.", "was built"],
      ["The letters ___ (deliver) every morning.", "are delivered"], ["The results ___ (announce) tomorrow.", "will be announced"],
      ["'War and Peace' ___ (write) by Tolstoy.", "was written"], ["Bread ___ (bake) here every day.", "is baked"],
      ["The thief ___ (catch) last night.", "was caught"], ["The new bridge ___ (open) next year.", "will be opened"],
      ["I ___ (invite) to the party yesterday.", "was invited"], ["These cars ___ (make) in Japan nowadays.", "are made"],
      ["The museum ___ (not / visit) by many tourists these days.", "is not visited"], ["When ___ America ___ (discover)?", ["was", "discovered"]]
    ]},
    { type: 'choice', task: 'Выберите правильный вариант.', items: [
      ["The vase ___ by our cat yesterday.", ["was broken", "broke", "has broken"]], ["Cheese ___ from milk.", ["is made", "makes", "is making"]],
      ["The meeting ___ next Monday.", ["will be held", "will hold", "holds"]], ["The door was opened ___ a key.", ["with", "by", "from"]],
      ["The picture was painted ___ a famous artist.", ["by", "with", "of"]], ["Where ___ these shoes made?", ["were", "did", "was"]]
    ]},
    { type: 'translate', task: 'Переведите на английский, используя пассив.', items: [
      ["Этот мост был построен сто лет назад.", "This bridge was built a hundred years ago.|This bridge was built one hundred years ago.|The bridge was built a hundred years ago.|The bridge was built one hundred years ago."],
      ["Во Франции делают много сыра.", "A lot of cheese is made in France.|A lot of cheese is produced in France.|Lots of cheese is made in France."],
      ["Письмо будет отправлено завтра.", "The letter will be sent tomorrow."],
      ["Мне показали новый офис.", "I was shown the new office.|The new office was shown to me."],
      ["Этот торт испекла моя бабушка.", "This cake was baked by my grandmother.|This cake was baked by my granny.|This cake was made by my grandmother.|This cake was made by my granny."]
    ]},
    { type: 'gap', task: 'Перепишите предложение в пассиве (впишите сказуемое вместе с предлогом).', items: [
      ["They sent for a plumber. → A plumber ___.", "was sent for"],
      ["Everybody laughed at the new boy. → The new boy ___.", "was laughed at"],
      ["Granny looks after the children. → The children ___ by Granny.", "are looked after"],
      ["We will speak about this problem tomorrow. → This problem ___ tomorrow.", "will be spoken about|will be talked about"],
      ["Nobody listened to him. → He ___.", "was not listened to"],
      ["They took care of the old dog. → The old dog ___.", "was taken care of"],
      ["People often talk about this film. → This film ___ a lot.", "is talked about|is spoken about"],
      ["Somebody switched off the light. → The light ___.", "was switched off"]
    ]},
    { type: 'listen', at: 2, task: 'Прослушайте предложение и соберите его из слов.', items: [
      ["The bridge across the river will be finished next year.", "Мост через реку достроят в следующем году."],
      ["Two letters were sent to my parents' old address.", "Два письма были отправлены на старый адрес моих родителей."],
      ["A lot of tea is grown in India and China.", "Много чая выращивают в Индии и Китае."]
    ]}
  ]},

{ id: 'pas-all', level: 'B1', title: 'Пассив во всех временах и с модальными', sub: 'is being repaired, has been done, must be done',
  rule: `
<p>Пассив можно построить почти в любом времени, и делается это просто: меняется только форма глагола <i>be</i>, а смысловой глагол всегда стоит в третьей форме.</p>
${T(["Время", "Пассив", "Пример"], [
  ["Present Simple", "<i>am / is / are + V3</i>", "<i>The room <b>is cleaned</b>.</i> — Комнату убирают (регулярно)."],
  ["Present Continuous", "<i>am / is / are being + V3</i>", "<i>The room <b>is being cleaned</b>.</i> — Комнату сейчас убирают."],
  ["Past Simple", "<i>was / were + V3</i>", "<i>The room <b>was cleaned</b>.</i> — Комнату убрали."],
  ["Past Continuous", "<i>was / were being + V3</i>", "<i>The room <b>was being cleaned</b>.</i> — Комнату в тот момент убирали."],
  ["Present Perfect", "<i>have / has been + V3</i>", "<i>The room <b>has been cleaned</b>.</i> — Комнату (уже) убрали."],
  ["Past Perfect", "<i>had been + V3</i>", "<i>The room <b>had been cleaned</b> before we came.</i> — Комнату убрали до нашего прихода."],
  ["Future Simple", "<i>will be + V3</i>", "<i>The room <b>will be cleaned</b>.</i> — Комнату уберут."],
  ["Модальные", "<i>can / must / should be + V3</i>", "<i>The room <b>must be cleaned</b>.</i> — Комнату нужно убрать."]
])}
<p>В строке «Модальные» после модального глагола стоит <i>be</i> без <i>to</i> и третья форма — это пассивный инфинитив. Так строится пассив с любым модальным глаголом: <i>can be done</i> — можно сделать, <i>should be done</i> — следует сделать, <i>must be done</i> — нужно сделать. Формы инфинитива подробно разобраны в разделе 13 «Инфинитив».</p>
${N("Не все времена удобны в пассиве. Future Continuous и времена Perfect Continuous в пассиве почти не встречаются — звучат слишком громоздко. Вместо них говорят в активном залоге или берут простое время: например, вместо <i>The bridge has been being built for two years</i> скажут <i>They have been building the bridge for two years</i> — мост строят уже два года.")}`,
  /* перевод слов в упражнениях: по наведению или касанию (gloss.js); ключи — в нижнем регистре, как слово стоит в тексте */
  gloss: {
    'seats': 'места',
    'bridge': 'мост', 'drive': 'водить машину', 'floor': 'этаж', 'round': 'вокруг',
    'house': 'дом', 'has': 'имеет; вспомогательный глагол', 'i': 'я', 'we': 'мы', 'they': 'они', 'my': 'мой, моя, мое',
    'are': 'есть (форма to be)', 'have': 'иметь; есть (о еде)', 'the': 'определенный артикль', 'at': 'в (о времени); у, на (о месте)',
    'in': 'в', 'they have': 'у них есть', 'a': 'неопределенный артикль', 'today': 'сегодня', 'new': 'новый', 'this': 'этот, эта, это',
    'flat': 'квартира', 'two': 'два', 'to': 'в, на (куда); частица перед глаголом', 'room': 'комната', 'street': 'улица', 'our': 'наш',
    'town': 'город', 'people': 'люди, человек', 'look': 'смотреть; смотри; выглядеть', 'by': 'на (о транспорте); к (о сроке)', 'school': 'школа',
    'now': 'сейчас', 'with': 'с', 'parents': 'родители', 'friday': 'пятница', 'tomorrow': 'завтра', 'when': 'когда', 'bike': 'велосипед',
    'car': 'машина', 'all': 'весь, все', 'letter': 'письмо', 'work': 'работа; работать', 'word': 'слово',
    'at the moment': 'в данный момент', 'children': 'дети', 'moment': 'момент', 'yet': 'уже (в вопросе); еще (в отрицании)',
    'came': 'пришел (от come)', 'so': 'поэтому; так', 'so far': 'пока что, к настоящему времени', 'thief': 'вор', 'will': 'вспомогательный глагол будущего времени',
    'tickets': 'билеты', 'can': 'мочь, уметь', 'china': 'Китай', 'documents': 'документы', 'easily': 'легко', 'far': 'далеко',
    'fence': 'забор', 'finish': 'закончить', 'grow': 'выращивать', 'hundred': 'сто', 'living': 'живем (от live)', 'living room': 'гостиная', 'must': 'должен', 'painting': 'картина',
    'parcel': 'посылка', 'problem': 'проблема', 'rice': 'рис', 'should': 'следует, стоит', 'sold': 'продали (от sell)',
    'somebody': 'кто-то', 'stolen': 'украл (3-я форма steal)', 'truth': 'правда', 'walls': 'стены', 'wash': 'мыть', 'ways': 'способы',
    "we're": 'мы (= we are)', 'wedding': 'свадьба'
  },
  ex: [
    { type: 'gap', task: 'Поставьте глагол в нужную форму пассива. Если в скобках несколько слов через косую черту, используйте в ответе их все — в нужной форме и порядке.', items: [
      ["The thief ___ (just / arrest).", "has just been arrested"], ["My car ___ (repair) at the moment.", "is being repaired"],
      ["This work must ___ (do) by Friday.", "be done"], ["When I came, the floor ___ (wash). (как раз в тот момент)", "was being washed"],
      ["The letter ___ (already / send).", "has already been sent"], ["All the seats ___ (already / take).", "have already been taken"],
      ["This problem can ___ (solve) easily.", "be solved"], ["A new school ___ (build) in our street now.", "is being built"],
      ["The children should ___ (tell) the truth.", "be told"], ["Two hundred people ___ (invite) to the wedding so far.", "have been invited"]
    ]},
    { type: 'choice', task: 'Выберите правильный вариант.', items: [
      ["The bridge ___ at the moment, so we have to drive round.", ["is being repaired", "is repairing", "has repaired"]], ["The parcel ___ yet.", ["hasn't been delivered", "didn't deliver", "wasn't delivering"]],
      ["The documents must ___ today.", ["be signed", "sign", "been signed"]], ["Look! The walls ___. They look new.", ["have been painted", "have painted", "were painting"]],
      ["Our flat ___ now, so we're living with my parents.", ["is being decorated", "is decorated", "has decorated"]], ["Can this word ___ in two ways?", ["be translated", "translated", "be translate"]]
    ]},
    { type: 'gap', task: 'Перепишите предложение в пассиве (впишите сказуемое).', items: [
      ["They are painting the fence. → The fence ___.", "is being painted"],
      ["Somebody has stolen my bike. → My bike ___.", "has been stolen"],
      ["They will finish the work tomorrow. → The work ___ tomorrow.", "will be finished"],
      ["We must wash the car. → The car ___.", "must be washed"],
      ["They have sold the house. → The house ___.", "has been sold"],
      ["People grow rice in China. → Rice ___ in China.", "is grown"]
    ]},
    { type: 'translate', task: 'Переведите на английский, используя пассив.', items: [
      ["Нашу улицу сейчас ремонтируют.", "Our street is being repaired now.|Our street is being repaired at the moment."],
      ["Окна уже вымыты.", "The windows have already been washed.|The windows have been washed already.|The windows have already been cleaned.|The windows have been cleaned already."],
      ["Собаку нужно кормить два раза в день.", "The dog must be fed twice a day.|The dog has to be fed twice a day.|The dog needs to be fed twice a day."],
      ["Когда мы пришли, все билеты уже были проданы.", "When we arrived, all the tickets had already been sold.|When we came, all the tickets had already been sold.|When we got there, all the tickets had already been sold.|When we arrived, all the tickets had been sold.|When we came, all the tickets had been sold.|When we got there, all the tickets had been sold."]
    ]},
    { type: 'listen', at: 2, task: 'Прослушайте предложение и соберите его из слов.', items: [
      ["Our kitchen is being painted, so we're eating in the living room.", "Нашу кухню красят, поэтому мы едим в гостиной."],
      ["Nothing has been decided yet, so don't worry.", "Пока ничего не решено, так что не волнуйся."],
      ["This medicine must be kept in a cool, dark place.", "Это лекарство нужно хранить в прохладном темном месте."]
    ]}
  ]},

{ id: 'pas-causative', level: 'C1', title: 'Каузатив: have something done', sub: 'I had my hair cut',
  rule: `
<p>Действие в этой конструкции выполняем не мы, а <b>кто-то другой</b> — обычно специалист и за плату: <i>I had my car washed</i> — мне помыли машину (на мойке). Еще эта конструкция говорит о неприятности, которая с нами случилась: <i>He had his wallet stolen</i> — у него украли кошелек.</p>
${F("have / get + <b>что-то</b> + <b>V3</b>")}
<p>Глагол <i>have</i> в этой конструкции меняется по временам, как обычный глагол: <i>I had my eyes tested</i> (прошлое), <i>We're having our windows replaced</i> (сейчас), <i>I'll have my car washed</i> (будущее). В простых временах вопрос и отрицание строят с <i>do / does / did</i>, как у обычного глагола: <i>Did you have your bike repaired?</i> — тебе починили велосипед? Вместо <i>have</i> можно сказать <i>get</i> — смысл тот же, но звучит разговорнее.</p>
${E([
  ["I <b>had my nails done</b> yesterday.", "Вчера мне сделали маникюр. (в салоне)"],
  ["We're <b>having our flat painted</b>.", "Нам красят квартиру."],
  ["She <b>got her car repaired</b>.", "Ей починили машину."],
  ["They <b>had their house broken into</b>.", "Их дом ограбили. (неприятное событие)"]
])}
<h3>Поручить, уговорить, заставить</h3>
<p>Рядом с каузативом стоят похожие конструкции, в которых мы называем не предмет, а <b>человека</b>, который выполняет действие по нашей воле. После этого человека идет не третья форма, а начальная форма глагола, потому что действие совершает он сам. Обратите внимание на частицу <i>to</i>: после <i>have</i> и <i>make</i> ее нет, а после <i>get</i> она нужна. Подробнее об инфинитиве без <i>to</i> рассказано в разделе 13 «Инфинитив», а о конструкции «глагол + кто-то + действие» — в разделе 17 «Complex Object».</p>
${T(["Конструкция", "Значение", "Пример"], [
  ["<i>have + кто-то + V</i>", "поручить", "<i>I'll <b>have</b> the porter <b>bring</b> your bags.</i> — Я попрошу носильщика принести ваши сумки."],
  ["<i>get + кто-то + to V</i>", "уговорить", "<i>I'll <b>get</b> my brother <b>to help</b> me.</i> — Я уговорю брата мне помочь."],
  ["<i>make + кто-то + V</i>", "заставить", "<i>The teacher <b>made</b> us <b>rewrite</b> it.</i> — Учитель заставил нас это переписать."]
])}
${N("Сравните: <i>I cut my hair</i> — я подстригся сам; <i>I <b>had</b> my hair <b>cut</b></i> — меня подстриг парикмахер.")}`,
  /* перевод слов в упражнениях: по наведению или касанию (gloss.js); ключи — в нижнем регистре, как слово стоит в тексте */
  gloss: {
    'sister': 'сестра', 'week': 'неделя', 'i': 'я', 'she': 'она', 'we': 'мы', 'my': 'мой, моя, мое', 'are': 'есть (форма to be)',
    'have': 'поручить, попросить (кого-то)', 'the': 'определенный артикль', 'at': 'в (о времени); у, на (о месте)', 'your': 'твой, ваш',
    'ten': 'десять', 'yesterday': 'вчера', 'me': 'меня, мне', 'you': 'ты, вы', 'last': 'прошлый', 'month': 'месяц', 'next': 'следующий',
    'made': 'заставил (от make)', 'us': 'нас, нам', 'back': 'назад, обратно', 'station': 'вокзал, станция',
    'get': 'уговорить, попросить (кого-то)', 'next week': 'на следующей неделе', 'can': 'мочь, уметь', 'coach': 'тренер', 'documents': 'документы',
    "i'll": 'я (= I will)', 'laps': 'круги', 'secretary': 'секретарь', 'should': 'следует, стоит'
  },
  ex: [
    { type: 'gap', task: 'Составьте каузатив из слов в скобках или поставьте глагол в нужную форму (с to или без to). Если в скобках несколько слов через косую черту, используйте в ответе их все — в нужной форме и порядке.', items: [
      ["I ___ (have / my coat / clean) yesterday.", "had my coat cleaned"], ["We are ___ (have / our roof / repair) next week.", "having our roof repaired"],
      ["We ___ (get / our washing machine / fix) last month.", "got our washing machine fixed"], ["She ___ (have / her bag / steal) at the station.", "had her bag stolen"],
      ["You should ___ (have / your teeth / check).", "have your teeth checked"], ["Can you get your sister ___ (call) me back?", "to call"],
      ["The coach made us ___ (run) ten laps.", "run"], ["I'll have my secretary ___ (send) you the documents.", "send"]
    ]},
    { type: 'translate', task: 'Переведите на английский.', items: [
      ["Вчера мне починили часы.", "I had my watch repaired yesterday.|I got my watch repaired yesterday.|Yesterday I had my watch repaired.|Yesterday I got my watch repaired."],
      ["Нам покрасили забор.", "We had our fence painted.|We got our fence painted.|We had the fence painted.|We got the fence painted."],
      ["Тебе нужно проверить зрение.", "You need to have your eyes tested.|You should have your eyes tested.|You need to have your eyes checked.|You should have your eyes checked.|You need to get your eyes tested.|You should get your eyes tested.|You need to get your eyes checked.|You should get your eyes checked.|You need to have your eyesight tested.|You should have your eyesight tested.|You need to have your eyesight checked.|You should have your eyesight checked."],
      ["У него украли телефон.", "He had his phone stolen.|His phone was stolen.|His phone has been stolen.|He has had his phone stolen.|He got his phone stolen."]
    ]},
    { type: 'listen', at: 2, task: 'Прослушайте предложение и соберите его из слов.', items: [
      ["I had my hair dyed yesterday, and now it's much darker.", "Вчера мне покрасили волосы, и теперь они намного темнее."],
      ["We are going to have our windows cleaned next week.", "На следующей неделе нам помоют окна."],
      ["My brother had his bike stolen while he was shopping.", "У брата украли велосипед, пока он ходил по магазинам."]
    ]}
  ]}
]});

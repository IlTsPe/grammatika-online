BOOK.push({ n: 18, id: 'complex-subject', title: 'Сложное подлежащее (Complex Subject)',
intro: 'Конструкция «подлежащее + глагол + инфинитив»: <i>He <b>seems to know</b></i>, <i>She <b>is said to be</b> rich</i>. На русский ее обычно переводят с вводным словом.',
topics: [

{ id: 'cs-seem', level: 'B2', title: 'Seem, appear, happen, be likely to', sub: 'He seems to know · She is likely to come',
  rule: `
<p>В русском мы часто вставляем в предложение слова «кажется», «оказывается», «случайно», «вероятно». В английском их роль играет глагол-сказуемое, после которого идет инфинитив.</p>
${T(["Конструкция", "Значение", "Пример"], [
  ["<i>seem to V</i>", "кажется", "<i>He <b>seems to know</b> everything.</i> — Он, кажется, все знает."],
  ["<i>appear to V</i>", "по-видимому, оказывается", "<i>She <b>appears to be</b> ill.</i> — Она, по-видимому, больна."],
  ["<i>happen to V</i>", "случайно", "<i>I <b>happened to meet</b> him.</i> — Я случайно встретил его."],
  ["<i>turn out to V</i>", "оказаться", "<i>The film <b>turned out to be</b> boring.</i> — Фильм оказался скучным."],
  ["<i>be likely to V</i>", "вероятно", "<i>It <b>is likely to rain</b>.</i> — Вероятно, пойдет дождь."],
  ["<i>be sure / certain to V</i>", "обязательно, наверняка", "<i>He <b>is sure to come</b>.</i> — Он обязательно придет."],
  ["<i>be unlikely to V</i>", "вряд ли", "<i>She <b>is unlikely to win</b>.</i> — Она вряд ли победит."]
])}
<h3>Be likely, be sure, be unlikely</h3>
<p>В последних трех строках таблицы роль «вводного слова» играет не глагол, а сочетание <i>be</i> с прилагательным: <i>likely</i> — вероятный, <i>unlikely</i> — маловероятный, <i>sure</i> и <i>certain</i> — верный, несомненный. Поэтому глагол <i>be</i> здесь меняется по временам и согласуется с подлежащим, как обычно: <i>I am, she is, they were</i>. Чаще всего эти обороты говорят о будущем: насколько вероятно, что что-то случится. Обратите внимание: <i>He is sure to come</i> значит «он обязательно придет» — уверен говорящий, а не сам он. А «он уверен, что придет» будет <i>He is sure (that) he will come</i>.</p>
${E([
  ["Prices <b>are likely to go</b> up next year.", "Цены, вероятно, вырастут в следующем году."],
  ["The new bridge <b>is certain to be</b> ready by May.", "Новый мост наверняка будет готов к маю."],
  ["They <b>are unlikely to agree</b>.", "Они вряд ли согласятся."]
])}
<p>Форма инфинитива показывает время так же, как в теме 13.3.</p>`,
  /* перевод слов в упражнениях: по наведению или касанию (gloss.js); ключи — в нижнем регистре, как слово стоит в тексте */
  gloss: {
    'dreaming': 'мечтать',
    'baby': 'малыш',
    'lose': 'проиграть; потерять',
    'are': 'есть, являются (форма to be)', 'at': 'в (о месте)', 'in': 'в', 'like': 'люблю, нравится', 'on': 'на', 'our': 'наш', 'present': 'подарок', 'rome': 'Рим', 'same': 'тот же самый', 'team': 'команда', 'time': 'время', 'we': 'мы', 'were': 'были (форма to be)',
    'it is': 'это', 'he': 'он', 'she': 'она', 'it': 'это; он, она (о предмете)', 'they': 'они',
    'is': 'есть, является (форма to be)', 'have': 'иметь; есть (о еде)', 'the': 'определенный артикль', 'that': 'тот, та, то; что (союз)',
    'they have': 'у них есть', 'by': 'на (о транспорте); к (о сроке)', 'by chance': 'случайно', 'come': 'приходить', 'test': 'контрольная', 'easy': 'легкий',
    'out': 'наружу', 'was': 'был (форма to be)', 'sure': 'уверен',
    'will': 'вспомогательный глагол будущего времени', 'answer': 'ответ; ответить', 'certainly': 'конечно, несомненно', 'chance': 'шанс',
    'forgotten': 'забыл (3-я форма forget)', 'happened': 'случилось', 'knows': 'знает', 'likely': 'вероятно', 'probably': 'вероятно',
    'seem': 'казаться', 'seems': 'кажется', 'sleeping': 'спит', 'turned out': 'оказался', 'unlikely': 'маловероятно'
  },
  ex: [
    { type: 'gap', task: 'Перепишите предложение с Complex Subject (впишите недостающую часть).', items: [
      ["It seems that he knows the answer. → He seems ___ the answer.", "to know"],
      ["It seems that the baby is dreaming. → The baby seems ___.", "to be dreaming"],
      ["It seems that they have forgotten. → They seem ___.", "to have forgotten"],
      ["Our team will probably lose. → Our team is likely ___.", "to lose"],
      ["By chance we were in Rome at the same time. → We happened ___ in Rome at the same time.", "to be"],
      ["She will certainly like the present. → She is sure ___ the present.", "to like"],
      ["It turned out that the test was easy. → The test turned out ___ easy.", "to be"],
      ["It is unlikely that they will come on time. → They are unlikely ___ on time.", "to come"]
    ]},
    { type: 'translate', task: 'Переведите на английский, используя конструкцию из темы.', items: [
      ["Он, кажется, болен.", "He seems to be ill.|He seems to be sick.|He seems ill.|He seems sick.|He appears to be ill.|He seems to be unwell."],
      ["Он, кажется, опоздал на поезд.", "He seems to have missed the train.|He appears to have missed the train."],
      ["Я случайно увидел его вчера.", "I happened to see him yesterday.|Yesterday I happened to see him."],
      ["Она обязательно позвонит.", "She is sure to call.|She is certain to call.|She is sure to phone.|She is certain to phone."],
      ["Вероятно, автобус опоздает.", "The bus is likely to be late."]
    ]},
    { type: 'listen', at: 2, task: 'Прослушайте предложение и соберите его из слов.', items: [
      ["Your brother seems to know a lot about cars.", "Твой брат, кажется, много знает о машинах."],
      ["The match is likely to be cancelled because of the rain.", "Матч, скорее всего, отменят из-за дождя."],
      ["I happened to find my old diary in the attic.", "Я случайно нашел свой старый дневник на чердаке."]
    ]}
  ]},

{ id: 'cs-said', level: 'C1', title: 'Безличный пассив: is said to', sub: 'It is said that… · He is said to be…',
  rule: `
<p>В новостях и официальных текстах часто передают чье-то мнение, не называя источник: «говорят», «считается», «сообщается». В английском для этого используют безличный пассив.</p>
${T(["Конструкция", "Пример"], [
  ["<i>It is said / believed / reported / thought that + предложение</i>", "<i><b>It is thought that</b> the painting is a fake.</i> — Считается, что картина — подделка."],
  ["<i>Подлежащее + is said + to V</i> (одновременно)", "<i>He <b>is said to be</b> a genius.</i> — Говорят, что он гений."],
  ["<i>… + to be V-ing</i> (происходит сейчас)", "<i>He <b>is said to be working</b> on a new novel.</i> — Говорят, что он сейчас работает над новым романом."],
  ["<i>… + to have V3</i> (было раньше)", "<i>The thief <b>is believed to have left</b> the city.</i> — Считается, что вор уже уехал из города."]
])}
<h3>Как построить такое предложение</h3>
<p>Одну и ту же мысль можно выразить двумя способами. Первый проще: начать с <i>It is said that…</i> (говорят, что…) и поставить дальше обычное предложение без изменений. Второй короче и чаще встречается в новостях: того, о ком идет речь, ставят на место подлежащего, затем идет <i>is said</i> (или <i>is believed, is reported</i>), а действие передают инфинитивом. Так, из <i>It is said that she is very rich</i> получается <i>She is said to be very rich</i>. По форме <i>is said, is believed</i> — это пассив.</p>
<p>Если говорили или думали раньше, в прошлом, <i>be</i> ставят в прошедшее время: <i>He <b>was said to be</b> rich</i> — говорили, что он богат. Форма инфинитива при этом выбирается так же, как в теме 13.3.</p>
${E([
  ["People believe the ship sank in 1912. → The ship <b>is believed to have sunk</b> in 1912.", "Считается, что корабль затонул в 1912 году."],
  ["<b>It is expected that</b> prices will rise.", "Ожидается, что цены вырастут."]
])}
${M("Глаголы:", ["say", "believe", "think", "know", "report", "expect", "consider", "suppose"])}`,
  /* перевод слов в упражнениях: по наведению или касанию (gloss.js); ключи — в нижнем регистре, как слово стоит в тексте */
  gloss: {
    'old': 'старый', 'she': 'она', 'it': 'это; он, она (о предмете)', 'they': 'они', 'is': 'есть, является (форма to be)',
    'are': 'есть (форма to be)', 'the': 'определенный артикль', 'at': 'в (о времени); у, на (о месте)', 'in': 'в',
    'that': 'тот, та, то; что (союз)', 'a': 'неопределенный артикль', 'very': 'очень', 'new': 'новый', 'open': 'открыть', 'her': 'ее, ей',
    'people': 'люди, человек', 'may': 'май', 'plane': 'самолет', 'at the moment': 'в данный момент', 'moment': 'момент',
    'abroad': 'за границей', 'into': 'в (внутрь)', 'station': 'вокзал, станция', 'sea': 'море', 'bridge': 'мост', 'report': 'отчет',
    'will': 'вспомогательный глагол будущего времени', 'believe': 'верить', 'believed': 'считалось, верили', 'china': 'Китай',
    'escaped': 'сбежал', 'generous': 'щедрый', 'known': 'известный (3-я форма know)', 'memoirs': 'мемуары', 'metro': 'метро',
    'president': 'президент', 'reported': 'сообщили', 'robbers': 'грабители', 'said': 'сказал (от say)', 'say': 'сказать',
    'singer': 'певец', 'talented': 'талантливый', 'unsafe': 'опасный', 'visiting': 'посещает (от visit)'
  },
  ex: [
    { type: 'gap', task: 'Закончите предложение, используя безличный пассив.', items: [
      ["People say she is a talented singer. → She is said ___ a talented singer.", "to be"],
      ["People believe the robbers escaped abroad. → The robbers are believed ___ abroad.", "to have escaped"],
      ["They report that the president is visiting China. → The president is reported ___ China.", "to be visiting"],
      ["It ___ (think) that the old bridge is unsafe.", "is thought"],
      ["The plane is believed ___ (crash) into the sea.", "to have crashed"],
      ["She is known ___ (be) very generous.", "to be"],
      ["It ___ (expect) that the new metro station will open in May.", "is expected"],
      ["She is said ___ (write) her memoirs at the moment.", "to be writing"]
    ]},
    { type: 'translate', task: 'Переведите на английский, используя конструкцию из темы.', items: [
      ["Говорят, она прекрасно готовит.", "She is said to cook very well.|It is said that she cooks very well.|She is said to be a very good cook.|It is said that she is a very good cook.|She is said to be a great cook.|It is said that she is a great cook."],
      ["Считается, что этот дом построили в XVIII веке.", "This house is believed to have been built in the 18th century.|This house is thought to have been built in the 18th century.|It is believed that this house was built in the 18th century.|This house is believed to have been built in the eighteenth century.|It is thought that this house was built in the 18th century.|This house is thought to have been built in the eighteenth century.|It is believed that this house was built in the eighteenth century.|It is thought that this house was built in the eighteenth century."],
      ["Сообщают, что поезд опаздывает.", "The train is reported to be late.|It is reported that the train is late.|The train is reported to be running late.|It is reported that the train is running late.|The train is reported to be delayed.|It is reported that the train is delayed."]
    ]},
    { type: 'listen', at: 2, task: 'Прослушайте предложение и соберите его из слов.', items: [
      ["This restaurant is said to be the best in the city.", "Говорят, этот ресторан лучший в городе."],
      ["The singer is reported to have cancelled all her concerts.", "Сообщается, что певица отменила все свои концерты."],
      ["It is reported that several people were injured in the accident.", "Сообщается, что в аварии пострадали несколько человек."]
    ]}
  ]}
]});

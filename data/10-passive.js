BOOK.push({ n: 10, id: 'passive', title: 'Passive Voice',
intro: 'Сначала — пассив в простых временах, затем во всех остальных и с модальными глаголами, в конце — каузатив.',
topics: [

{ id: 'pas-simple', level: 'B1', title: 'Пассив в Simple', sub: 'is made, was built, will be done',
  rule: `
<p>Пассив (страдательный залог) используют, когда важно само действие или то, над чем оно совершается, а не тот, кто его выполняет. Обычно так бывает, если исполнитель неизвестен, очевиден или просто неважен: <i>This house was built in 1905</i> — неважно, кто строил. Если исполнителя все же нужно назвать, его вводят через <i>by</i>, а инструмент — через <i>with</i>, как в теме 6.4.</p>
${F("<b>be</b> в нужном времени + <b>V3</b>")}
<p><i>V3</i> — третья форма глагола, как в Present Perfect (тема 2.7).</p>
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
  ["<b>Was</b> the window <b>broken</b> by the children? — It <b>wasn't broken</b>.", "Окно разбили дети? — Его не разбивали. (вопрос и отрицание — с помощью be)"]
])}
${N("Русские предложения без указания, кто действует, часто удобно переводить пассивом. Например, «Здесь говорят по-английски» — <i>English <b>is spoken</b> here</i>.")}
<h3>Пассив с глаголами give, tell, show</h3>
<p>У некоторых глаголов два дополнения: кому и что. Например, <i>They gave <b>me</b> <b>a book</b></i> — мне дали книгу. Такие предложения можно поставить в пассив двумя способами, но обычно подлежащим делают человека, а не предмет: <i>I was given a book</i> — мне дали книгу. Дословно перевести такую фразу на русский не получится, она звучит странно, зато по-английски очень естественно. Так ведут себя глаголы <i>give, tell, show, send, offer, promise, ask</i>.</p>
${E([
  ["I <b>was given</b> a book for my birthday.", "Мне подарили книгу на день рождения."],
  ["We <b>were told</b> to wait.", "Нам велели подождать."],
  ["She <b>was offered</b> a new job.", "Ей предложили новую работу."]
])}
<h3>Глагол с предлогом</h3>
<p>Некоторые глаголы всегда употребляются с предлогом: <i>look after, laugh at, send for, listen to</i>. Когда такое предложение переводят в пассив, предлог никуда не исчезает — он остается сразу после глагола, даже если оказывается в самом конце: <i>The doctor was sent for</i> — за врачом послали.</p>
${E([
  ["They <b>sent for</b> the doctor. → The doctor <b>was sent for</b>.", "За врачом послали."],
  ["Everybody <b>laughed at</b> him. → He <b>was laughed at</b>.", "Над ним смеялись."],
  ["The children <b>are</b> well <b>looked after</b>.", "За детьми хорошо присматривают."],
  ["This film <b>is</b> much <b>spoken about</b>.", "Об этом фильме много говорят."]
])}`,
  ex: [
    { type: 'gap', task: 'Поставьте глагол в Present, Past или Future Simple Passive.', items: [
      ["English ___ (speak) all over the world.", "is spoken"], ["This house ___ (build) in 1905.", "was built"],
      ["The letters ___ (deliver) every morning.", "are delivered"], ["The results ___ (announce) tomorrow.", "will be announced"],
      ["'Hamlet' ___ (write) by Shakespeare.", "was written"], ["Bread ___ (bake) here every day.", "is baked"],
      ["The thief ___ (catch) last night.", "was caught"], ["The new bridge ___ (open) next year.", "will be opened"],
      ["I ___ (invite) to the party yesterday.", "was invited"], ["These cars ___ (make) in Japan.", "are made"],
      ["The museum ___ (not / visit) by many tourists.", "is not visited"], ["When ___ America discovered?", "was"]
    ]},
    { type: 'choice', task: 'Выберите правильный вариант.', items: [
      ["The window ___ by the children yesterday.", ["was broken", "broke", "has broken"]], ["Paper ___ from wood.", ["is made", "makes", "is making"]],
      ["The meeting ___ next Monday.", ["will be held", "will hold", "holds"]], ["The cake was cut ___ a knife.", ["with", "by", "from"]],
      ["The picture was painted ___ a famous artist.", ["by", "with", "of"]], ["Where ___ these shoes made?", ["were", "did", "was"]]
    ]},
    { type: 'translate', task: 'Переведите на английский, используя пассив.', items: [
      ["Этот дом был построен в 1990 году.", "This house was built in 1990."],
      ["Здесь говорят по-английски.", "English is spoken here."],
      ["Письмо будет отправлено завтра.", "The letter will be sent tomorrow."],
      ["Меня пригласили на день рождения.", "I was invited to a birthday party.|I was invited to the birthday party."],
      ["Эту книгу написал Пушкин.", "This book was written by Pushkin."]
    ]},
    { type: 'gap', task: 'Перепишите предложение в пассиве (впишите сказуемое вместе с предлогом).', items: [
      ["They sent for the doctor. → The doctor ___.", "was sent for"],
      ["Everybody laughed at his joke. → His joke ___.", "was laughed at"],
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
<p>Пассив можно построить почти в любом времени, и делается это просто: меняется только форма глагола <i>be</i>, а смысловой глагол всегда стоит в третьей форме. Например, <i>is built</i>, <i>was built</i>, <i>has been built</i>, <i>is being built</i> — меняется <i>be</i>, а <i>built</i> остается.</p>
${T(["Время", "Пассив", "Пример"], [
  ["Present Simple", "<i>am / is / are + V3</i>", "<i>The room <b>is cleaned</b>.</i> — Комнату убирают (регулярно)."],
  ["Present Continuous", "<i>am / is / are being + V3</i>", "<i>The room <b>is being cleaned</b>.</i> — Комнату сейчас убирают."],
  ["Past Simple", "<i>was / were + V3</i>", "<i>The room <b>was cleaned</b>.</i> — Комнату убрали."],
  ["Past Continuous", "<i>was / were being + V3</i>", "<i>The room <b>was being cleaned</b>.</i> — Комнату в тот момент убирали."],
  ["Present Perfect", "<i>have / has been + V3</i>", "<i>The room <b>has been cleaned</b>.</i> — Комнату (уже) убрали."],
  ["Future Simple", "<i>will be + V3</i>", "<i>The room <b>will be cleaned</b>.</i> — Комнату уберут."],
  ["Модальные", "<i>can / must / should be + V3</i>", "<i>The room <b>must be cleaned</b>.</i> — Комнату нужно убрать."]
])}
<p>В строке «Модальные» после модального глагола стоит <i>be</i> без <i>to</i> и третья форма — это пассивный инфинитив. Так строится пассив с любым модальным глаголом: <i>can be done</i> — можно сделать, <i>should be done</i> — следует сделать, <i>must be done</i> — нужно сделать. Формы инфинитива подробно разобраны в разделе 13 «Инфинитив».</p>
${N("Не все времена удобны в пассиве. Future Continuous и времена Perfect Continuous в пассиве почти не встречаются — звучат слишком громоздко. Вместо них говорят в активном залоге или берут простое время: например, вместо громоздкого <i>The bridge has been being built for two years</i> скажут <i>They have been building the bridge for two years</i> — мост строят уже два года.")}`,
  ex: [
    { type: 'gap', task: 'Поставьте глагол в нужную форму пассива.', items: [
      ["The thief ___ (just / arrest).", "has just been arrested"], ["My car ___ (repair) at the moment.", "is being repaired"],
      ["This work must ___ (do) by Friday.", "be done"], ["When I came, the room ___ (clean). (как раз в тот момент)", "was being cleaned"],
      ["The letter ___ (already / send).", "has already been sent"], ["All the tickets ___ (already / sell).", "have already been sold"],
      ["This problem can ___ (solve) easily.", "be solved"], ["A new school ___ (build) in our street now.", "is being built"],
      ["The children should ___ (tell) the truth.", "be told"], ["Two hundred people ___ (invite) to the wedding so far.", "have been invited"]
    ]},
    { type: 'choice', task: 'Выберите правильный вариант.', items: [
      ["A new school ___ in our town at the moment.", ["is being built", "is building", "has built"]], ["The parcel ___ yet.", ["hasn't been delivered", "didn't deliver", "wasn't delivering"]],
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
      ["Мою машину сейчас ремонтируют.", "My car is being repaired now.|My car is being repaired at the moment.|My car is being fixed now.|My car is being fixed at the moment."],
      ["Письмо уже отправлено.", "The letter has already been sent.|The letter has been sent already."],
      ["Эту работу нужно сделать к пятнице.", "This work must be done by Friday.|This work has to be done by Friday.|This work needs to be done by Friday.|The work must be done by Friday."],
      ["Все билеты уже проданы.", "All the tickets have already been sold.|All the tickets have been sold already.|All tickets have already been sold."]
    ]},
    { type: 'listen', at: 2, task: 'Прослушайте предложение и соберите его из слов.', items: [
      ["Our kitchen is being painted, so we're eating in the living room.", "Нашу кухню красят, поэтому мы едим в гостиной."],
      ["Nothing has been decided yet, so don't worry.", "Пока ничего не решено, так что не волнуйся."],
      ["This medicine must be kept in a cool, dark place.", "Это лекарство нужно хранить в прохладном темном месте."]
    ]}
  ]},

{ id: 'pas-causative', level: 'C1', title: 'Каузатив: have something done', sub: 'I had my hair cut',
  rule: `
<p>Каузатив (<i>have something done</i>) показывает, что действие для нас выполнил <b>кто-то другой</b> — обычно специалист и за плату: <i>I had my hair cut</i> — меня подстригли в парикмахерской. Эта же конструкция говорит о неприятности, которая с нами случилась: <i>He had his wallet stolen</i> — у него украли кошелек.</p>
${F("have / get + <b>объект</b> + <b>V3</b>")}
<p>Глагол <i>have</i> в этой конструкции меняется по временам, как обычный глагол: <i>I had my hair cut</i> (прошлое), <i>We're having our flat painted</i> (сейчас), <i>I'll have my car washed</i> (будущее). Вопрос и отрицание строят с <i>do / does / did</i>: <i>Did you have your hair cut?</i> — ты подстригся? — Вместо <i>have</i> можно сказать <i>get</i> — смысл тот же, но звучит разговорнее.</p>
${E([
  ["I <b>had my hair cut</b> yesterday.", "Вчера я подстриглась. (меня подстригли в салоне)"],
  ["We're <b>having our flat painted</b>.", "Нам красят квартиру."],
  ["She <b>got her car repaired</b>.", "Ей починили машину. (get — разговорнее)"],
  ["He <b>had his wallet stolen</b>.", "У него украли кошелек. (неприятное событие)"]
])}
<h3>Поручить, уговорить, заставить</h3>
<p>Рядом с каузативом стоят похожие конструкции, в которых мы называем не предмет, а <b>человека</b>, который выполняет действие по нашей воле. Тогда после него идет не третья форма, а начальная форма глагола, потому что действие совершает он сам. С <i>have</i> это значит «поручить кому-то», с <i>get</i> — уговорить, добиться, чтобы кто-то сделал, а с <i>make</i> — заставить. Обратите внимание на частицу <i>to</i>: после <i>have</i> и <i>make</i> ее нет, а после <i>get</i> она нужна. Подробнее об инфинитиве без <i>to</i> рассказано в разделе 13 «Инфинитив», а о конструкции «глагол + кто-то + действие» — в разделе 17 «Complex Object».</p>
${T(["Конструкция", "Значение", "Пример"], [
  ["<i>have + кто-то + V</i>", "поручить", "<i>I'll <b>have</b> the porter <b>bring</b> your bags.</i> — Я попрошу носильщика принести ваши сумки."],
  ["<i>get + кто-то + to V</i>", "уговорить", "<i>I'll <b>get</b> my brother <b>to help</b> me.</i> — Я уговорю брата мне помочь."],
  ["<i>make + кто-то + V</i>", "заставить", "<i>The teacher <b>made</b> us <b>rewrite</b> it.</i> — Учитель заставил нас это переписать."]
])}
${N("Сравните: <i>I cut my hair</i> значит «я подстриг себя сам». А если стриг парикмахер, нужно сказать <i>I <b>had</b> my hair <b>cut</b></i>.")}`,
  ex: [
    { type: 'gap', task: 'Составьте каузатив из слов в скобках.', items: [
      ["I ___ (have / my hair / cut) yesterday.", "had my hair cut"], ["We are ___ (have / our flat / paint) next week.", "having our flat painted"],
      ["She ___ (get / her car / repair) last month.", "got her car repaired"], ["He ___ (have / his wallet / steal) on the train.", "had his wallet stolen"],
      ["You should ___ (have / your eyes / test).", "have your eyes tested"], ["I'll get my brother ___ (help) me.", "to help"],
      ["The teacher made us ___ (rewrite) the essay.", "rewrite"], ["I'll have the porter ___ (bring) your bags.", "bring"]
    ]},
    { type: 'translate', task: 'Переведите на английский.', items: [
      ["Я постриглась вчера (в парикмахерской).", "I had my hair cut yesterday.|I got my hair cut yesterday."],
      ["Нам починили телевизор.", "We had our TV repaired.|We had our TV set repaired.|We got our TV repaired.|We had the TV repaired.|Our TV was repaired.|Our TV has been repaired."],
      ["Тебе нужно проверить зрение.", "You need to have your eyes tested.|You should have your eyes tested.|You need to have your eyes checked.|You should have your eyes checked.|You need to get your eyes tested.|You should get your eyes tested.|You need to get your eyes checked.|You should get your eyes checked.|You need to have your eyesight tested.|You should have your eyesight tested.|You need to have your eyesight checked.|You should have your eyesight checked."],
      ["У него украли телефон.", "He had his phone stolen.|His phone was stolen.|His phone has been stolen.|He has had his phone stolen.|He got his phone stolen."]
    ]},
    { type: 'listen', at: 2, task: 'Прослушайте предложение и соберите его из слов.', items: [
      ["I had my hair cut yesterday, and now it's much shorter.", "Вчера я подстригся, и теперь волосы намного короче."],
      ["We are going to have our windows cleaned next week.", "На следующей неделе нам помоют окна."],
      ["My brother had his bike stolen while he was shopping.", "У брата украли велосипед, пока он ходил по магазинам."]
    ]}
  ]}
]});

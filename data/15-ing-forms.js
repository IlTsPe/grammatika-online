BOOK.push({ n: 15, id: 'ing-forms', title: 'Причастие, герундий и отглагольное существительное',
intro: 'Три формы на <i>-ing</i> выглядят одинаково, но играют в предложении разные роли. Этот раздел учит их различать.',
topics: [

{ id: 'ing-distinguish', level: 'B2', title: 'Как различать формы на -ing', sub: 'a sleeping child · sleeping is important · the sleeping of…',
  rule: `
<p>Слово на <i>-ing</i> выглядит всегда одинаково, но может быть причастием, герундием или отглагольным существительным. Различить их по виду нельзя — только по тому, какую роль слово играет в предложении: описывает предмет, называет действие или ведет себя как обычное существительное.</p>
${T(["Форма", "Роль", "Признаки", "Пример"], [
  ["Причастие (Participle I)", "определение или обстоятельство", "отвечает на «какой?», «делая что?»", "<i>a <b>smiling</b> girl; the man <b>reading</b> a newspaper</i>"],
  ["Герундий", "существительное-действие", "может иметь прямое дополнение, определяется наречием, без артикля", "<i><b>Reading</b> books is useful. I like <b>reading</b> quickly.</i>"],
  ["Отглагольное существительное", "обычное существительное", "есть артикль, предлог <i>of</i>, прилагательное, множественное число", "<i><b>The reading of</b> the letter took a long time. <b>Readings</b> of the poem.</i>"]
])}
${E([
  ["The man <b>crossing</b> the street is my uncle.", "Причастие: какой человек? переходящий улицу."],
  ["<b>Crossing</b> the street here is dangerous.", "Герундий: что опасно? переходить."],
  ["<b>The crossing of</b> the river took two days.", "Существительное: артикль + of."]
])}
${N("Вот быстрая проверка. Если перед словом на <i>-ing</i> стоит артикль, а после него — <i>of</i>, это отглагольное существительное: <i>the opening of the school</i>. Если слово можно заменить на «это», то есть оно подлежащее или дополнение, — это герундий. А если оно описывает существительное, отвечая на вопрос «какой?», — причастие.")}`,
  ex: [
    { type: 'choice', task: 'Определите, чем является слово на -ing в скобках (оно стоит вместо пропуска).', items: [
      ["___ is my hobby. (Swimming)", ["герундий", "причастие", "отглагольное существительное"]],
      ["Look at the ___ children. (swimming)", ["причастие", "герундий", "отглагольное существительное"]],
      ["___ of the new bridge took three years. (The building)", ["отглагольное существительное", "герундий", "причастие"]],
      ["She left without ___ goodbye. (saying)", ["герундий", "причастие", "отглагольное существительное"]],
      ["The ___ man looked at me. (smiling)", ["причастие", "герундий", "отглагольное существительное"]],
      ["I like ___ books in the evening. (reading)", ["герундий", "причастие", "отглагольное существительное"]],
      ["The man ___ to Ann is her father. (talking)", ["причастие", "герундий", "отглагольное существительное"]],
      ["He has three ___ a week. (meetings)", ["отглагольное существительное", "герундий", "причастие"]]
    ]},
    { type: 'gap', task: 'Впишите the или of, если они нужны (иначе «-»), чтобы получилось правильное предложение.', items: [
      ["___ reading of this poem was beautiful.", "the"], ["The singing ___ birds woke me up.", "of|of the"],
      ["___ smoking is bad for your health.", "-|0"], ["I enjoy ___ cooking.", "-|0"],
      ["The opening ___ the new school was on Monday.", "of"], ["___ swimming in cold water is healthy.", "-|0"]
    ]},
    { type: 'listen', at: 2, task: 'Прослушайте предложение и соберите его из слов.', items: [
      ["Swimming in the sea is good for your health.", "Плавать в море полезно для здоровья."],
      ["Don't wake the sleeping baby in the next room.", "Не разбуди спящего малыша в соседней комнате."],
      ["The opening of the new museum took place in May.", "Открытие нового музея состоялось в мае."]
    ]}
  ]}
]});

/* Посещаемость: счетчик Яндекс Метрики. Работает только на опубликованном сайте (METRIKA_HOST): локально, с диска
   и в тестах ничего не загружается и не отправляется. Сайт открывает страницы без перезагрузки (go в app.js),
   поэтому каждый переход отправляется отдельно — countVisit; первое открытие Метрика считает сама.
   Без интернета запросы просто не уходят, на работу тренажера это не влияет */
const METRIKA_ID = 113790915; /* номер счетчика из metrika.yandex.ru; 0 — счетчик выключен */
const METRIKA_HOST = 'iltspe.github.io';
const METRIKA_ON = METRIKA_ID > 0 && location.hostname === METRIKA_HOST;

if (METRIKA_ON) {
  /* код из инструкции Метрики: очередь вызовов ym до загрузки tag.js */
  window.ym = window.ym || function () { (window.ym.a = window.ym.a || []).push(arguments); };
  window.ym.l = Date.now();
  const s = document.createElement('script');
  s.async = true; s.src = 'https://mc.yandex.ru/metrika/tag.js?id=' + METRIKA_ID;
  document.head.append(s);
  ym(METRIKA_ID, 'init', { webvisor: true, clickmap: true, trackLinks: true, accurateTrackBounce: true });
}

/* переход внутри сайта: адрес и заголовок новой страницы, откуда пришли */
function countVisit(from) {
  if (METRIKA_ON) ym(METRIKA_ID, 'hit', location.href, { title: document.title, referer: from });
}

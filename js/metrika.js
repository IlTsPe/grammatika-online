/* Посещаемость: счетчик Яндекс Метрики и согласие на его файлы cookie. Счетчик работает только на опубликованном сайте
   (METRIKA_HOST) и только после «Принять»: до выбора, после «Отклонить» и локально (с диска, в тестах) ничего не загружается
   и не отправляется. Выбор хранится в gk2-cookies { ok, at, v } и спрашивается снова через CONSENT_DAYS или при новой
   версии страницы «Файлы cookie» (COOKIE_POLICY). Сайт открывает страницы без перезагрузки (go в app.js), поэтому каждый
   переход отправляется отдельно — countVisit; первое открытие Метрика считает сама */
const METRIKA_ID = 113790915; /* номер счетчика из metrika.yandex.ru; 0 — счетчик выключен */
const METRIKA_HOST = 'iltspe.github.io';
const METRIKA_SITE = METRIKA_ID > 0 && location.hostname === METRIKA_HOST;
const COOKIE_POLICY = 1; /* версия страницы «Файлы cookie»: изменился состав cookie или их цели — увеличить, согласие спросится заново */
const CONSENT_DAYS = 365;
let metrikaOn = false;

/* выбор посетителя: true — принял, false — отклонил, null — еще не выбирал или выбор устарел */
function cookieConsent() {
  const c = store.get('gk2-cookies', null);
  if (!c || typeof c !== 'object' || c.v !== COOKIE_POLICY || Date.now() - c.at > CONSENT_DAYS * 864e5) return null;
  return !!c.ok;
}

function startMetrika() {
  if (metrikaOn || !METRIKA_SITE) return;
  metrikaOn = true;
  /* код из инструкции Метрики: очередь вызовов ym до загрузки tag.js */
  window.ym = window.ym || function () { (window.ym.a = window.ym.a || []).push(arguments); };
  window.ym.l = Date.now();
  const s = document.createElement('script');
  s.async = true; s.src = 'https://mc.yandex.ru/metrika/tag.js?id=' + METRIKA_ID;
  document.head.append(s);
  ym(METRIKA_ID, 'init', { webvisor: true, clickmap: true, trackLinks: true, accurateTrackBounce: true });
}

/* cookie Метрики на домене сайта (_ym_…): удаляются при отказе — и с этого адреса, и с родительского домена */
function dropMetrikaCookies() {
  const parts = location.hostname.split('.');
  const domains = ['', ...parts.slice(0, -1).map((p, i) => '; domain=.' + parts.slice(i).join('.'))];
  document.cookie.split(';').map(c => c.split('=')[0].trim()).filter(n => n.startsWith('_ym')).forEach(n =>
    domains.forEach(d => { document.cookie = `${n}=; max-age=0; path=/${d}`; }));
}

/* выбор из плашки или со страницы «Файлы cookie». Отказ после согласия: счетчик уже загружен и сам не остановится,
   поэтому страница перезагружается без него */
function setConsent(ok) {
  store.set('gk2-cookies', { ok, at: Date.now(), v: COOKIE_POLICY });
  document.querySelector('.cookie-note')?.remove();
  if (ok) startMetrika();
  else { dropMetrikaCookies(); if (metrikaOn) { location.reload(); return; } }
  document.querySelectorAll('.cookie-consent').forEach(mountCookieConsent);
}

/* плашка внизу экрана на любой странице, пока нет выбора; «Принять» и «Отклонить» одинаковые — ни одна не навязывается */
function showCookieNote() {
  const box = el('div', 'cookie-note'); box.setAttribute('role', 'region'); box.setAttribute('aria-label', 'Файлы cookie');
  const label = el('span', 'cookie-note__label', 'Файлы cookie');
  const text = el('p', 'cookie-note__text');
  text.innerHTML = 'Сайт использует файлы cookie Яндекс Метрики для анализа посещаемости. Сбор статистики осуществляется только при вашем согласии. '
    + 'Подробнее — на странице <button class="link-btn" type="button" data-go="about-cookies">«Файлы cookie»</button>.';
  const btns = el('div', 'cookie-note__btns');
  [['Принять', true], ['Отклонить', false]].forEach(([label, ok]) => {
    const b = el('button', 'btn cookie-note__btn', label); b.type = 'button';
    b.addEventListener('click', () => setConsent(ok));
    btns.append(b);
  });
  box.append(label, text, btns); document.body.append(box);
}

/* живой блок на странице «Файлы cookie»: текущий выбор и кнопки, чтобы его изменить или отозвать согласие */
function mountCookieConsent(box) {
  const c = cookieConsent();
  const state = c === null ? 'выбор не сделан' : c ? 'cookie статистики приняты' : 'cookie статистики отклонены';
  box.innerHTML = `<p class="cookie-consent__state">Сейчас: <b>${state}</b>.</p>`
    + (METRIKA_SITE ? '' : '<p class="cookie-consent__state">На этом адресе статистика не собирается при любом выборе.</p>');
  const btns = el('div', 'cookie-consent__btns');
  [['Принять', true], ['Отклонить', false]].forEach(([label, ok]) => {
    const b = el('button', 'btn', label); b.type = 'button';
    b.setAttribute('aria-pressed', String(c === ok));
    b.addEventListener('click', () => setConsent(ok));
    btns.append(b);
  });
  box.append(btns);
}

if (METRIKA_SITE) {
  const c = cookieConsent();
  if (c) startMetrika();
  else if (c === null) showCookieNote();
}

/* переход внутри сайта: адрес и заголовок новой страницы, откуда пришли */
function countVisit(from) {
  if (metrikaOn) ym(METRIKA_ID, 'hit', location.href, { title: document.title, referer: from });
}

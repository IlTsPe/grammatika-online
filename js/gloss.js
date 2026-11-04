/* Перевод слов в упражнениях: слова темы со словарем (t.gloss) выделены как .gloss (см. glossHtml в core.js).
   Мышь — подсказка появляется, если курсор задержался на слове 1 секунду (HOVER_DELAY), и прячется, когда курсор уходит; касание — по нажатию на слово,
   повторное нажатие, нажатие мимо, прокрутка или Escape ее закрывают. Подсказка одна на страницу, стоит над словом,
   а если сверху не хватает места — под ним */
(function () {
  const pop = el('div', 'gloss-pop'); pop.setAttribute('role', 'tooltip'); pop.id = 'glossPop'; pop.hidden = true;
  document.body.append(pop);
  const HOVER_DELAY = 1000; /* мс: мгновенная подсказка при проведении мышью по тексту сбивает */
  let cur = null, timer = 0;
  const hide = () => {
    if (!cur) return;
    cur.classList.remove('gloss--on'); cur.removeAttribute('aria-describedby');
    cur = null; pop.hidden = true;
  };
  const show = w => {
    if (cur === w) return;
    hide();
    cur = w; w.classList.add('gloss--on'); w.setAttribute('aria-describedby', pop.id);
    pop.textContent = w.dataset.tr; pop.hidden = false;
    const r = w.getBoundingClientRect(), p = pop.getBoundingClientRect(), gap = 6, edge = 8;
    const left = Math.min(Math.max(edge, r.left + r.width / 2 - p.width / 2), innerWidth - p.width - edge);
    const top = r.top - p.height - gap >= edge ? r.top - p.height - gap : r.bottom + gap;
    pop.style.left = left + 'px'; pop.style.top = top + 'px';
  };
  document.addEventListener('pointerover', e => {
    if (e.pointerType !== 'mouse') return;
    const w = e.target.closest('.gloss'); if (!w || w === cur) return;
    clearTimeout(timer); timer = setTimeout(() => show(w), HOVER_DELAY);
  });
  document.addEventListener('pointerout', e => {
    if (e.pointerType !== 'mouse') return;
    const w = e.target.closest('.gloss');
    if (!w || w.contains(e.relatedTarget)) return;
    clearTimeout(timer); /* ушли раньше секунды — подсказка не появится */
    if (w === cur) hide();
  });
  /* касание и перо: нажатие на слово включает и выключает подсказку, нажатие в другом месте — закрывает */
  document.addEventListener('pointerup', e => {
    if (e.pointerType === 'mouse') return; /* мышью подсказка уже показана наведением */
    const w = e.target.closest('.gloss');
    if (!w) { hide(); return; }
    if (cur === w) hide(); else show(w);
  });
  addEventListener('scroll', () => { clearTimeout(timer); hide(); }, { passive: true, capture: true }); /* при прокрутке и отложенная подсказка не появится */
  addEventListener('resize', hide);
  addEventListener('keydown', e => { if (e.key === 'Escape') hide(); });
})();

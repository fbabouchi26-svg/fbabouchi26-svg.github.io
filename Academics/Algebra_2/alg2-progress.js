// ══════════ ALGEBRA 2 — SHARED PROGRESS MODULE ══════════
// Records unit-test results (score, best, attempts, dates) and reads the
// existing per-unit "mastered" flags. Powers PROGRESS.html (the on-track view).
// Pure localStorage — no backend. Progress lives in the browser Ibrahim studies in.

(function () {
  const KEY = 'alg2_progress_v1';

  // The 10 units, in Mr. Rice's order, with each unit-test target date from the
  // Aug-14 study plan (see ALGEBRA_HQ "Plan → Aug 14").
  const UNITS = [
    { n: 1,  title: 'Parent Functions & Transformations',      target: '2026-07-23' },
    { n: 2,  title: 'Quadratic Functions',                     target: '2026-07-27' },
    { n: 3,  title: 'Quadratic Equations & Complex Numbers',   target: '2026-07-29' },
    { n: 4,  title: 'Polynomial Functions',                    target: '2026-07-31' },
    { n: 5,  title: 'Rational Functions',                      target: '2026-08-03' },
    { n: 6,  title: 'Rational Exponents & Radical Functions',  target: '2026-08-05' },
    { n: 7,  title: 'Exponential & Logarithmic Functions',     target: '2026-08-06' },
    { n: 8,  title: 'Compositions & Inverses',                 target: '2026-08-07' },
    { n: 9,  title: 'Trigonometry',                            target: '2026-08-10' },
    { n: 10, title: 'Probability',                             target: '2026-08-11' }
  ];
  const TEST_DATE = '2026-08-14';   // Mr. Rice's official test
  const PASS = 13;                  // 13 / 15 to master a unit

  function load() {
    try { return JSON.parse(localStorage.getItem(KEY)) || {}; }
    catch (e) { return {}; }
  }
  function save(d) { try { localStorage.setItem(KEY, JSON.stringify(d)); } catch (e) {} }

  function masteredFlag(n) {
    return localStorage.getItem('alg2_unit' + n + '_mastered') === '1';
  }

  // Called by each unit page's gradeTest() on every submit (pass OR fail).
  function recordTest(n, score, total) {
    const d = load(); d.units = d.units || {};
    const u = d.units[n] || {};
    u.attempts = (u.attempts || 0) + 1;
    u.last = score; u.total = total;
    u.best = Math.max(u.best || 0, score);
    const nowISO = new Date().toISOString();
    u.lastISO = nowISO;
    if (!u.firstISO) u.firstISO = nowISO;
    if (score >= PASS) { u.passed = true; if (!u.passedISO) u.passedISO = nowISO; }
    d.units[n] = u; save(d);
    return u;
  }

  // Called on page load so "last worked on" is accurate even without a submit.
  function touch(n) {
    const d = load(); d.units = d.units || {};
    const u = d.units[n] || {};
    const nowISO = new Date().toISOString();
    u.lastISO = nowISO;
    if (!u.firstISO) u.firstISO = nowISO;
    d.units[n] = u; save(d);
  }

  // Everything PROGRESS.html needs, computed against "today".
  function summary(todayInput) {
    const d = load();
    const store = d.units || {};
    const today = todayInput ? new Date(todayInput) : new Date();
    let masteredCount = 0, expected = 0;

    const rows = UNITS.map(U => {
      const rec = store[U.n] || {};
      const passed = masteredFlag(U.n) || rec.passed === true || (rec.best || 0) >= PASS;
      if (passed) masteredCount++;
      const targetDate = new Date(U.target + 'T23:59:59');
      const due = targetDate < today;           // test day has passed
      if (due) expected++;
      return {
        n: U.n, title: U.title, target: U.target, targetDate, due, passed,
        best: rec.best || 0, total: rec.total || 15, attempts: rec.attempts || 0,
        lastISO: rec.lastISO || null, passedISO: rec.passedISO || null,
        started: !!rec.firstISO || passed
      };
    });

    const current = (rows.find(r => !r.passed) || { n: 10 }).n;
    const behind = Math.max(0, expected - masteredCount);
    const onTrack = masteredCount >= expected;
    const daysToTest = Math.ceil((new Date(TEST_DATE + 'T23:59:59') - today) / 86400000);
    const xp = parseInt(localStorage.getItem('alg2xp') || '0', 10);

    return {
      rows, masteredCount, expected, behind, onTrack, current,
      daysToTest, xp, total: UNITS.length, testDate: TEST_DATE
    };
  }

  window.Alg2Progress = { UNITS, TEST_DATE, PASS, recordTest, touch, load, summary, masteredFlag };
})();

/* Shared layout for the integrated card and its calibrator. */
window.LMNLayout = (() => {
  const key = 'lmn.integrated-layout.v1';
  const baseline = {
    phrase: {left:13.12799043,top:22.56004251,width:52,height:15},
    phraseBand: {left:11.66,top:25.5,width:54.55,height:10.63},
    trans: {left:33.81666667,top:39,width:17.2,height:11},
    globe: {left:25.98333333,top:38.281084,width:7},
    phone: {left:70.7,top:19,width:19,height:68},
    practice: {left:13.5,top:54,width:50,height:27},
    prev: {left:1,top:43,width:8,height:14},
    next: {left:91,top:43,width:8,height:14}
  };
  const selectors = {phrase:'#phraseBox',phraseBand:'#phraseBand',trans:'#transPanel',globe:'#xlateBtn',phone:'#phoneMedia',practice:'#practicePlayer',prev:'[data-n="PREV"]',next:'[data-n="NEXT"]'};
  const clone = value => JSON.parse(JSON.stringify(value));
  function validate(value) {
    if (!value || value.version !== 1 || !value.elements) throw Error('Choose a layout exported by this calibrator.');
    const elements = clone(baseline);
    for (const [name, fields] of Object.entries(baseline)) {
      for (const field of Object.keys(fields)) {
        const n = value.elements[name]?.[field];
        if (typeof n !== 'number' || !Number.isFinite(n) || n < 0 || n > 100 || (['width','height'].includes(field) && n < 1)) throw Error('Invalid position or size for ' + name + '.');
        elements[name][field] = n;
      }
    }
    return {version:1,elements};
  }
  const defaults = () => ({version:1,elements:clone(baseline)});
  function load() { try { const saved = localStorage.getItem(key); return saved ? validate(JSON.parse(saved)) : defaults(); } catch { return defaults(); } }
  function save(value) { const clean = validate(value); localStorage.setItem(key,JSON.stringify(clean)); return clean; }
  function apply(value,selected) {
    const clean = validate(value);
    for (const [name,selector] of Object.entries(selectors)) {
      const element = document.querySelector(selector);
      if (!element) continue;
      for (const [field,n] of Object.entries(clean.elements[name])) element.style[field] = n + '%';
      element.style.outline = name === selected ? '3px dashed #ffb800' : '';
      element.style.outlineOffset = '2px';
    }
  }
  return {defaults,validate,load,save,apply};
})();

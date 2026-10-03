/* ===== EDIT THIS SECTION ===== */
const CONFIG = {
  name: "Loveeee",
 birthdayLine: "Today is all about you. Keep going — there's more.",
birthdayFrom: "From: Raiven ❤️",
  music: "assets/music/song.mp3", // leave "" to disable music
  voiceLabel: "🎙️ Tap to hear something", // text on the voice note button
  voice: "assets/voice/voice.mp3", // short voice note on the last screen; leave "" to hide it
  unlockAt: "2026-10-07T00:00:00+08:00", // when the Open button unlocks (+08:00 = Philippines time)
  lockText: "Opens on October 7 🎂",
  previewKey: "raiven-test",          // for testing: add ?preview=raiven-test to the link to skip the lock
  typeSpeed: 40,     // letter typing: milliseconds per character (higher = slower)
  musicVolume: 0.6,  // normal song volume (0 to 1)
  duckVolume: 0.12,  // song volume while the voice note plays
  voiceVolume: 0.6,  // voice note volume (0 to 1)
  videoVolume: 0.05, // 0 to 1: how loud videos are (the song keeps playing)
  timeline: [
    {title: "Your first favorite picture", img: "assets/images/photo1.jpg", caption: "This picture reminds me of the first year you genuinely said yes to me."},
    {title: "Tambay era hahaha", img: "assets/images/photo2.jpg", caption: "That was the era when I used to hang out at your place a lot, just so I could see you all the time."},
    {title: "Birthday Surprise??", video: "assets/videos/clip1.mp4", sound: true, caption: "You really wouldn't let my birthday be anything less than special it’s so obvious how much you care."},
    {title: "Just an simple date", img: "assets/images/photo4.jpg", caption: "I cherish moments like these where even the little things become special because I'm with you."},
    {title: "Sponsored by you", img: "assets/images/photo5.jpg", caption: "This picture reminds me of how you’re always treating me to meals or taking me to eat at places I’ve never heard of. Hahaha."},
    {title: "My first class S gift haha", img: "assets/images/photo6.jpg", caption: "I'm grateful because you're the kind of person who finds happiness even in the small things I give."},
    {title: "My Petsa de peligro", video: "assets/videos/clip2.mp4", sound: true, caption: "You're really something, you know? Hahaha even if I don't have money, you're still covering the special day."},
    {title: "Clutch Gala", img: "assets/images/photo8.jpg", caption: "These are the kinds of things we both like spontaneous trips because the events become more unexpected."},
    {title: "Same day but hits different", img: "assets/images/photo9.jpg", caption: "I cherish this picture because I'm in it with you, making memories that we'll carry with us."},
    {title: "New Year 🎉", img: "assets/images/photo10.jpg", caption: "I may not always dwell on the fact that we’ve spent several New Years together, but I am always grateful that you were there for me"},
    {title: "711's", img: "assets/images/photo11.jpg", caption: "711 is our favorite spot at night just having coffee and chatting with friends, I always cherish those moments with you."},
    {title: "My Petsa de peligro part 2 haha", img: "assets/images/photo12.jpg", caption: "This is a day I’ll never forget because I only had 200 pesos with me hahaha but you still managed to make it work."},
    {title: "Very Special Day", video: "assets/videos/clip3.mp4", sound: false, caption: "This was also the day I only had 200 pesos, yet you can clearly see how many places we visited and things we did that’s just how amazing you are."},
    {title: "Another year with you", img: "assets/images/photo14.jpg", caption: "This photo brings everything back because it was the last New Year we spent with Mama it makes me so happy to see it, knowing that we were all together that year."},
    {title: "Gala Date", video: "assets/videos/clip4.mp4", sound: true, caption: "We’ve been to so many places, but I’ll never get tired of taking you to the beautiful spots you love."},
    {title: "As usual", img: "assets/images/photo16.jpg", caption: "As usual, I got treated again hahaha! So, thank you so much, I’ve had so many experiences since you came into my life."},
    {title: "Finally", img: "assets/images/photo17.jpg", caption: "This is the first movie we watched together on cine, but we were with other people hahaha."},
    {title: "Unexpected SM", video: "assets/videos/clip5.mp4", sound: true, caption: "Like I said earlier, spontaneous outings are better plus, this was the first time we rode in that car which had plenty of issues so it created a lot of memories."},
    {title: "Graduate yarn", img: "assets/images/photo19.jpg", caption: "You'll still be there when I graduate rest assured, I'll be there for your graduation, too."},
    {title: "Another gala", img: "assets/images/photo20.jpg", caption: "This is the first time you've joined the friends who are always inviting you out, and I'm happy that I'm the one you're with."},
    {title: "First Ride with our friends", img: "assets/images/photo21.jpg", caption: "This is one of my most memorable birthdays because we were all together especially you hanging out. Even without a budget, I was incredibly happy on this day."},
    {title: "Today", img: "assets/images/photo22.jpg", caption: "I hope you appreciate me agreeing to these rides, because this is one of the few gifts I can give you before your birthday."}
    // To use a video instead of a photo (plays when it's on screen):
    // {title: "Us", video: "assets/videos/clip1.mp4", caption: "Press the speaker to hear it."}
  ],
  storyEnd: {title: "Why 22?", count: 22, text: "22 moments, because you're turning 22."},
  reasonsEnd: {title: "Why 7?", count: 7, text: "7 reasons, because your birthday is on the 7th."},
  reasons: [
    "You make ordinary days feel special.",
    "The way you get excited about food.",
    "How safe I feel with you.",
    "Your laugh, obviously.",
    "Your full of surprises.",
    "Your kindness and how gently you treat the world around you.",
    "Most importantly the way you are."
  ],
  letter: "Happy birthday sa pinakamagandang regalong dumating sa buhay ko ayieee hahaha, love. Hindi ko explain kung gaano ako kaswerte na ikaw ang kasama ko ngayon. Ikaw ang nagpapasaya sa bawat araw ko sa simpleng mga paraan lang tulad ng lagging pagiintindi ng sitwasyon ko. Sobrang natutuwa ako kapag nakikita ko kung paano ka ma excite tungkol sa pagkain wag lang lagi sa matamis. Ang sarap sa pakiramdam na nandayn ka parati sa tabi ko Kahit ano mang mangyari. At syempre, hinding-hindi ko pagsasawaan ang tawa mo na walang katulad na may backfire AHAHA. Punong-puno ka talaga ng mga surprise na laging nagpapasaya hindi lang sakin pati mga nakapaligid sayo. Sana ngayong special na araw mo, maramdaman mo kung gaano ka kahalaga sa akin, love.\n\nMaraming salamat sa lahat ng pag-aalala at pagmamahal na binibigay mo sa araw araw. Pinapangako ko na nandito lang ako para sumuporta sa lahat ng pangarap mo sa buhay. Susuportahan kita sa bawat hakbang, tulad ng pagsuporta mo sa akin noon pa, love. Kahit anong pagsubok ang dumating, alam kong kakayanin natin basta magkasama tayo. Pinapahalagahan ko ang bawat segundo, oras, at araw na magkasama tayong dalawa. Ikaw ang paborito kong tao sa mundong ito na punong-puno ng ibat ibang ugali. Sana ay matupad ang lahat ng mga wish mo ngayong araw, love.\n\nDeserve mo lahat ng magagandang bagay na nangyayari at darating sa buhay mo. Hinding-hindi ako magsasawang kainin ang masasarap mo na luto pati ikaw jk AHAHA. Salamat dahil ikaw ang naging tahanan ko at sandigan sa panahong kailangan ko ng karamay. Sana ay masaya ka ngayong araw dahil ginawa ko ang lahat para mapangiti ka, love. Sana ma appreciate ang munti kong regalo pasensya na talaga babawi ako sa susunod. Again, Salamat love sa lahat ng pagmamahal, pagiintindi, pag-aalala at pagsama Kahit may mabigat na pagsubok na dumaan. Happy, happy birthday ulit sa iyo, loveee, mahal na mahal kita nang buong-buo.",
  letterReveal: [
    {n: 22, label: "sentences", why: "because you're turning 22"},
    {n: 7, label: "love words", why: "because your birthday is on October 7"},
    {n: 3, label: "paragraphs", why: "because we've been together for 3 years"}
  ],
  finalLines: "If you're still reading this…\nI hope you know how special you are to me.",
  afterLine: "Now can you go back?"
};
/* ============================= */

const $ = s => document.querySelector(s), screens = [...document.querySelectorAll(".screen")];
const titles = ["Welcome","Birthday","Our story","Reasons","Letter","Finale"];
let cur = 0, history = [], typing = null;

const THEMES = [
  ["plum", "#2a1424", "#e8607a", "Plum and rose"],
  ["midnight", "#0f1b33", "#5b8def", "Midnight blue"],
  ["forest", "#12261d", "#d9825b", "Forest and clay"],
  ["sunset", "#3a1410", "#ff7a45", "Sunset"],
  ["lavender", "#2a2144", "#b57bee", "Lavender"],
  ["light", "#fff3ee", "#d94f70", "Light blush"]
];
function setTheme(t) {
  document.documentElement.dataset.theme = t;
  document.querySelectorAll(".sw").forEach(b => b.setAttribute("aria-pressed", b.dataset.t === t));
  try { localStorage.setItem("theme", t); } catch (e) {}
}
THEMES.forEach(([t, a, b, label]) => {
  const s = document.createElement("button");
  s.className = "sw"; s.dataset.t = t; s.title = s.ariaLabel = label;
  s.style.setProperty("--a", a); s.style.setProperty("--b", b);
  s.onclick = () => setTheme(t);
  $("#swatches").append(s);
});
let saved = "plum"; try { saved = localStorage.getItem("theme") || "plum"; } catch (e) {}
setTheme(THEMES.some(t => t[0] === saved) ? saved : "plum");

$("#name").textContent = CONFIG.name;
$("#bdayLine").textContent = CONFIG.birthdayLine;
$("#bdayFrom").textContent = CONFIG.birthdayFrom;
document.title = `For ${CONFIG.name} 💌`;
$("#finalLines").innerHTML = CONFIG.finalLines.replace(/\n/g, "<br>");
$("#afterLine").textContent = CONFIG.afterLine;

// photo can be .jpg, .jpeg, .png, .webp or .gif: whichever file exists gets used
const EXTS = ["jpg", "jpeg", "png", "webp", "gif"];
function nextExt(img) {
  let n = +img.dataset.n;
  if (EXTS[n] === img.dataset.orig) n++;
  if (n >= EXTS.length) return img.remove();
  img.dataset.n = n + 1;
  img.src = img.dataset.base + "." + EXTS[n];
}
const media = m => m.video
  ? `<div class="photo">
      <video src="${m.video}" data-sound="${m.sound === true}" loop playsinline preload="metadata"></video>
      <button class="vol" aria-label="Sound on or off">🔇</button>
     </div>`
  : `<div class="photo"><img src="${m.img}" data-base="${m.img.replace(/\.\w+$/, "")}" data-orig="${m.img.split(".").pop().toLowerCase()}" data-n="0" alt="" loading="lazy" onerror="nextExt(this)">📸</div>`;
$("#timeline").innerHTML = CONFIG.timeline.map((m, i) => `
  <div class="moment"><h3><span class="num">${i + 1} / ${CONFIG.timeline.length}</span> ${m.title}</h3>${media(m)}<p>${m.caption}</p></div>`).join("") +
  `<div class="moment end locked" id="storyNote" data-to="${CONFIG.storyEnd.count}" data-ms="170"><h3>${CONFIG.storyEnd.title}</h3><div class="count">0</div><p>${CONFIG.storyEnd.text}</p></div>`;
// hide the camera emoji when a real image loads
document.querySelectorAll(".photo img").forEach(i => i.onload = () => i.parentNode.style.fontSize = 0);

// videos: play (quietly, with sound) only while focused on screen; the song keeps playing
const setIcon = v => v.nextElementSibling.textContent = v.muted ? "🔇" : "🔊";
function playVideo(v) {
  const hasSound = v.dataset.sound === "true";

  v.volume = CONFIG.videoVolume;
  v.muted = !hasSound;

  v.play().then(() => {
    setIcon(v);
  }).catch(() => {
    // If browser blocks autoplay with sound,
    // play the video muted instead.
    v.muted = true;
    setIcon(v);
    v.play().catch(() => {});
  });
}
const io = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) playVideo(e.target); else e.target.pause();
}), {threshold: .6});
document.querySelectorAll(".photo video").forEach(v => {
  io.observe(v);
  v.nextElementSibling.onclick = () => { v.muted = !v.muted; v.volume = CONFIG.videoVolume; setIcon(v); };
});

CONFIG.reasons.forEach((r, i) => {
  const b = document.createElement("button");
  b.className = "reason"; b.textContent = `Reason #${i + 1} ❤️`;
  b.onclick = () => { b.textContent = r; b.classList.add("open"); };
  $("#reasons").append(b);
});

function show(n, push = true) {
  if (n > 0 && isLocked()) n = 0;
  if (push && n !== cur) history.push(cur);
  screens.forEach((s, i) => s.classList.toggle("on", i === n));
  cur = n;
  $("#bar").hidden = n === 0;
  $("#progress").textContent = `Part ${n + 1} of ${screens.length} — ${titles[n]}`;
  screens[n].scrollTop = 0;
  if (n === 1) { burst(); hearts(24); }
  if (n === 4 && round === 2) startLoveGame();
  if (n === 5) { burst(); $("#afterLine").hidden = round === 2; $("#voiceBtn").hidden = !(voiceOK && gameWon); }
}
document.querySelectorAll("[data-go]").forEach(b => b.onclick = () => {
  const n = +b.dataset.go;
  if (n === 1 && isLocked()) return;
  if (n === 1) { startMusic(); goFullscreen(); }
  show(n);
});
$("#back").onclick = () => { if (history.length) show(history.pop(), false); };

// music: only starts from a tap
const audio = $("#audio");
function startMusic() {
  if (!CONFIG.music || !audio.paused) return;
  audio.src = CONFIG.music; audio.volume = CONFIG.musicVolume;
  audio.play().then(() => $("#music").textContent = "🔊").catch(() => {});
}
$("#music").onclick = () => {
  if (!CONFIG.music) return;
  if (audio.paused) { audio.src || (audio.src = CONFIG.music); audio.play().then(() => $("#music").textContent = "🔊").catch(() => {}); }
  else { audio.pause(); $("#music").textContent = "🔇"; }
};

// letter + love-word minigame: find every "love" in the letter to unlock the reveal
let loveTotal = 0, loveFound = 0, hintT = null, typingOn = false, skipTyping = null;
let round = 1, loveStarted = false, gameWon = false;   // round 1: normal pages. round 2 (after "go back"): twists + minigame
const esc = t => t.replace(/&/g, "&amp;").replace(/</g, "&lt;");
$("#letterReveal").innerHTML = CONFIG.letterReveal.map(r => `<div class="rv"><b>${r.n}</b><span>${r.label}</span><small>${r.why}</small></div>`).join("");
function loveHint() {
  clearTimeout(hintT);
  document.querySelectorAll(".lw.hint").forEach(w => w.classList.remove("hint"));
  hintT = setTimeout(() => document.querySelectorAll(".lw:not(.found)").forEach(w => w.classList.add("hint")), 20000);
}
function finishTyping() {            // round 1: plain letter, no minigame
  clearTimeout(typing); typingOn = false;
  $("#letterText").textContent = CONFIG.letter;
  $("#toEnd").hidden = false;
}
function startLoveGame() {           // round 2: find every "love" to unlock the reveal
  if (loveStarted) return; loveStarted = true;
  const el = $("#letterText");
  el.innerHTML = esc(CONFIG.letter).replace(/\blove+\b/gi, m => `<span class="lw">${m}</span>`);
  loveTotal = el.querySelectorAll(".lw").length; loveFound = 0;
  $("#toEnd").hidden = true; $("#letterReveal").hidden = true;
  const pill = $("#loveCount"); pill.textContent = `💗 0 / ${loveTotal} — find the love words`; pill.hidden = false;
  $("#letter").scrollTop = 0;
  loveHint();
}
function loveWin() {
  gameWon = true; if (voiceOK) $("#voiceBtn").hidden = false;
  clearTimeout(hintT); $("#loveCount").hidden = true; burst(); hearts(24);
  const r = $("#letterReveal"); r.hidden = false;
  setTimeout(() => r.scrollIntoView({behavior: "smooth", block: "center"}), 300);
  setTimeout(() => $("#toEnd").hidden = false, 3200);
}
$("#letterText").onclick = e => {
  if (typingOn) { skipTyping && skipTyping(); return; }
  const w = e.target.closest(".lw");
  if (!w || w.classList.contains("found")) return;
  w.classList.add("found"); loveFound++; hearts(2);
  $("#loveCount").textContent = `💗 ${loveFound} / ${loveTotal}`;
  if (loveFound >= loveTotal) loveWin(); else loveHint();
};
$("#envelope").onclick = () => {
  $("#envWrap").hidden = true; $("#letter").hidden = false;
  const el = $("#letterText"); let i = 0; typingOn = true; clearTimeout(typing);
  skipTyping = () => { el.textContent = CONFIG.letter; finishTyping(); };
  const step = () => {                       // types one character at a time, pausing at commas, sentences and paragraphs
    i++; el.textContent = CONFIG.letter.slice(0, i);
    if (i % 6 === 0) el.scrollIntoView({block: "end"});
    if (i >= CONFIG.letter.length) return finishTyping();
    const ch = CONFIG.letter[i - 1];
    const pause = ch === "\n" ? 500 : ".!?".includes(ch) ? 320 : ch === "," ? 120 : 0;
    typing = setTimeout(step, CONFIG.typeSpeed + pause);
  };
  typing = setTimeout(step, 400);
};

$("#secret").onclick = () => { $("#secretWrap").hidden = true; $("#final").hidden = false; burst(); hearts(30); };

// hearts + confetti (kept light for older phones)
function hearts(n) {
  for (let i = 0; i < n; i++) setTimeout(() => {
    const h = document.createElement("span");
    h.className = "h"; h.textContent = ["❤️", "💖", "✨"][i % 3];
    h.style.left = Math.random() * 100 + "%"; h.style.fontSize = 16 + Math.random() * 22 + "px";
    h.style.animationDuration = 4 + Math.random() * 3 + "s";
    $("#hearts").append(h); setTimeout(() => h.remove(), 7500);
  }, i * 120);
}
function burst() {
  if (matchMedia("(prefers-reduced-motion:reduce)").matches) return;
  const c = $("#confetti"), x = c.getContext("2d");
  c.width = innerWidth; c.height = innerHeight;
  const cols = ["#e8607a", "#f2c46d", "#fbeee8", "#b86bd6"];
  const p = Array.from({length: 70}, () => ({x: c.width / 2, y: c.height / 3, vx: (Math.random() - .5) * 12, vy: Math.random() * -10 - 2, s: 5 + Math.random() * 5, c: cols[Math.random() * 4 | 0]}));
  let f = 0;
  (function tick() {
    x.clearRect(0, 0, c.width, c.height);
    p.forEach(q => { q.vy += .25; q.x += q.vx; q.y += q.vy; x.fillStyle = q.c; x.fillRect(q.x, q.y, q.s, q.s * .6); });
    if (++f < 110) requestAnimationFrame(tick); else x.clearRect(0, 0, c.width, c.height);
  })();
}
// voice note (final screen): the song keeps playing but fades down, then back up
const voice = $("#voice"), vBtn = $("#voiceBtn");
const canSetVolume = (() => { const a = new Audio(); a.volume = .5; return a.volume === .5; })(); // false on iPhone
let musicWasOn = false;
const vLabel = CONFIG.voiceLabel; vBtn.textContent = vLabel;
function fade(el, to, ms) {
  clearInterval(el._f); const from = el.volume; let i = 0;
  el._f = setInterval(() => {
    i++; el.volume = Math.max(0, Math.min(1, from + (to - from) * i / 10));
    if (i >= 10) clearInterval(el._f);
  }, ms / 10);
}
let voiceOK = !!CONFIG.voice;           // the button stays hidden until the love minigame is won
if (voiceOK) voice.src = CONFIG.voice;
vBtn.onclick = () => {
  if (!voice.paused) { voice.pause(); return; }
  musicWasOn = !audio.paused;
  voice.volume = 0;                                   // starts silent, fades in gently
  voice.play().then(() => {
    fade(voice, CONFIG.voiceVolume, 700);
    if (musicWasOn) { canSetVolume ? fade(audio, CONFIG.duckVolume, 700) : audio.pause(); }
    vBtn.textContent = "⏸";
  }).catch(() => { voiceOK = false; vBtn.hidden = true; });
};
const voiceDone = () => {
  vBtn.textContent = vLabel;
  if (musicWasOn) { canSetVolume ? fade(audio, CONFIG.musicVolume, 900) : audio.play().catch(() => {}); musicWasOn = false; }
};
voice.onpause = voiceDone; voice.onended = voiceDone;
voice.onerror = () => { voiceOK = false; vBtn.hidden = true; };
// date lock + countdown on the first page
const UNLOCK = new Date(CONFIG.unlockAt).getTime();
const preview = !!CONFIG.previewKey && new URLSearchParams(location.search).get("preview") === CONFIG.previewKey;
function isLocked() { return !preview && UNLOCK > Date.now(); }
function tickCountdown() {
  const box = $("#countdown"), btn = $("#openBtn"), ms = UNLOCK - Date.now();
  if (!isLocked()) { box.hidden = true; btn.disabled = false; btn.textContent = "Open 💌"; clearInterval(cdT); return; }
  const s = Math.floor(ms / 1000);
  $("#cdLabel").textContent = CONFIG.lockText;
  $("#cdTimer").innerHTML = [[Math.floor(s / 86400), "days"], [Math.floor(s % 86400 / 3600), "hours"], [Math.floor(s % 3600 / 60), "min"], [s % 60, "sec"]]
    .map(([v, l]) => `<div class="cd"><b>${String(v).padStart(2, "0")}</b><span>${l}</span></div>`).join("");
  box.hidden = false; btn.disabled = true; btn.textContent = "🔒 Not yet…";
}
const cdT = setInterval(tickCountdown, 1000); tickCountdown();

// fullscreen (starts from the first tap; iPhone Safari does not allow it)
function goFullscreen() {
  const d = document.documentElement, f = d.requestFullscreen || d.webkitRequestFullscreen;
  if (!f || document.fullscreenElement || document.webkitFullscreenElement) return;
  try { const r = f.call(d); if (r && r.catch) r.catch(() => {}); } catch (e) {}
}

// Our story: moments fade in with a little heart, and the one in the middle grows slightly
const sc = $("#s2");
const mo = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) e.target.classList.add("seen"); }), {threshold: .15});
const fo = new IntersectionObserver(es => es.forEach(e => e.target.classList.toggle("focus", e.isIntersecting)), {rootMargin: "-30% 0px -30% 0px"});
document.querySelectorAll("#timeline .moment").forEach(m => { mo.observe(m); fo.observe(m); });
let lastH = 0;
sc.addEventListener("scroll", () => { const t = Date.now(); if (t - lastH > 2500) { lastH = t; hearts(2); } }, {passive: true});

// counting animation for the "Why 22?" and "Why 7?" notes (starts when they are on screen)
function countUp(box) {
  if (box.dataset.started) return; box.dataset.started = 1;
  const n = box.querySelector(".count"), to = +box.dataset.to;
  if (matchMedia("(prefers-reduced-motion:reduce)").matches) { n.textContent = to; box.classList.add("done"); return; }
  let i = 0;
  const t = setInterval(() => {
    n.textContent = ++i; n.classList.remove("tick"); void n.offsetWidth; n.classList.add("tick");
    if (i >= to) { clearInterval(t); setTimeout(() => box.classList.add("done"), 500); }
  }, +box.dataset.ms);
}
const co = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) countUp(e.target); }), {threshold: .6});
$("#reasonsNote").dataset.to = CONFIG.reasonsEnd.count; $("#reasonsNote").dataset.ms = 420;
co.observe($("#storyNote")); co.observe($("#reasonsNote"));

// last page button: go back and reveal why 22 and why 7
$("#reasonsNote h3").textContent = CONFIG.reasonsEnd.title;
$("#reasonsNote p").textContent = CONFIG.reasonsEnd.text;
$("#afterLine").onclick = () => {
  round = 2;                                   // second time through, now with the twists
  document.querySelectorAll("#timeline .moment").forEach(m => m.classList.remove("seen"));
  $("#storyNote").classList.remove("locked");
  $("#reasonsNote").hidden = false;
  show(2);
  setTimeout(() => sc.scrollTo({top: sc.scrollHeight, behavior: "smooth"}), 600);   // auto-scroll down to "Why 22?"
};
show(0, false);

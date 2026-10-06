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
  unlockText: "It's October 7! 🎂",        // big message when the countdown reaches zero
  readyText: "Your surprise is ready 💌",
  previewKey: "raiven-test",          // for testing: add ?preview=raiven-test to the link to skip the lock
  souvenirPhotos: [   // the bouquet: up to 6 pictures, one per flower. The first one goes in the biggest, middle flower.
    "assets/images/photo1.jpg", "assets/images/photo5.jpg", "assets/images/photo9.jpg",
    "assets/images/photo14.jpg", "assets/images/photo19.jpg", "assets/images/photo22.jpg"
  ],
  souvenirTitle: "Happy 22nd Birthday",
  backTitle: "A letter for you",         // title on the back of the souvenir (the letter side)
  souvenirDate: "October 7, 2026",
  souvenirFrom: "From Raiven",
  giftPhotos: null,   // pictures that fly out of the gift: a list like ["assets/images/photo1.jpg", ...] (null = 10 from the timeline)
  storyMove: 250,    // how long the auto-scroll takes to move from one moment to the next (ms)
  storyHold: 250,    // how long it rests on each moment (ms); videos rest 600 ms longer
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
  storyEnd: {title: "Why?", count: 22, text: "22 moments, because you're turning 22."},
  reasonsEnd: {title: "Why?", count: 7, text: "7 reasons, because your birthday is on the 7th."},
  reasons: [
    "You make ordinary days feel special.",
    "The way you get excited about food.",
    "How safe I feel with you.",
    "Your laugh, obviously.",
    "Your full of surprises.",
    "Your kindness and how gently you treat the world around you.",
    "Most importantly the way you are."
  ],
  letter: "Happy birthday sa pinakamagandang regalong dumating sa buhay ko ayieee AHAHAHA, love. Hindi ko explain kung gaano ako kaswerte na ikaw ang kasama ko ngayon. Ikaw ang nagpapasaya sa bawat araw ko sa simpleng mga paraan lang tulad ng laging pagiintindi ng sitwasyon ko. Sobrang natutuwa ako kapag nakikita ko kung paano ka ma excite tungkol sa pagkain wag lang lagi sa matamis. Ang sarap sa pakiramdam na nandayn ka parati sa tabi ko Kahit ano mang mangyari. At syempre, hinding-hindi ko pagsasawaan ang tawa mo na walang katulad na may backfire AHAHA. Punong-puno ka talaga ng mga surprise na laging nagpapasaya hindi lang sakin pati mga nakapaligid sayo. Sana ngayong special na araw mo, maramdaman mo kung gaano ka kahalaga sa akin, love.\n\nMaraming salamat sa lahat ng pag-aalala at pagmamahal na binibigay mo sa araw araw. Pinapangako ko na nandito lang ako para sumuporta sa lahat ng pangarap mo sa buhay. Susuportahan kita sa bawat hakbang, tulad ng pagsuporta mo sa akin noon pa, love. Kahit anong pagsubok ang dumating, alam kong kakayanin natin basta magkasama tayo. Pinapahalagahan ko ang bawat segundo, oras, at araw na magkasama tayong dalawa. Ikaw ang paborito kong tao sa mundong ito na punong-puno ng ibat ibang ugali. Sana ay matupad ang lahat ng mga wish mo ngayong araw, love.\n\nDeserve mo lahat ng magagandang bagay na nangyayari at darating sa buhay mo. Hinding-hindi ako magsasawang kainin ang masasarap mo na luto pati ikaw jk AHAHA. Salamat dahil ikaw ang naging tahanan ko at sandigan sa panahong kailangan ko ng karamay. Sana ay masaya ka ngayong araw dahil ginawa ko ang lahat para mapangiti ka, love. Sana ma appreciate ang munti kong regalo pasensya na talaga babawi ako sa susunod. Again, Salamat love sa lahat ng pagmamahal, pagiintindi, pag-aalala at pagsama Kahit may mabigat na pagsubok na dumaan. Happy, happy birthday ulit sa iyo, loveee, mahal na mahal kita nang buong-buo.",
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
  <div class="moment"><h3>${m.title}</h3>${media(m)}<p>${m.caption}</p></div>`).join("") +
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
  if (n === 3 && round === 2 && !reasonsGuided) { reasonsGuided = true; guidedReasons(); }
  if (n === 4 && round === 2) startLoveGame();
  if (n === 5) {
    burst(); hearts(30); $("#afterLine").hidden = round === 2; $("#voiceBtn").hidden = !(voiceOK && gameWon);
    $("#souvenirBtn").hidden = !gameWon;
    if (round === 2 && gameWon && !svShown) { svShown = true; setTimeout(openSouvenir, 1200); }   // pops up once after the minigame
  }
}
document.querySelectorAll("[data-go]").forEach(b => b.onclick = () => {
  const n = +b.dataset.go;
  if (n === 1 && isLocked()) return;
  if (n === 1) { startMusic(); goFullscreen(); playGift(() => show(1)); return; }   // the gift opens first, then the birthday page
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

// ---- animations that cannot be skipped: navigation and scrolling are locked while they play
const wait = ms => new Promise(r => setTimeout(r, ms));
let navLocks = 0;
function lockNav(on) { navLocks += on ? 1 : -1; $("#back").disabled = navLocks > 0; }
function tweenScroll(el, to, ms) {
  return new Promise(res => {
    const from = el.scrollTop, d = to - from, t0 = performance.now();
    const step = now => { const k = Math.min(1, (now - t0) / ms), e = k < .5 ? 2 * k * k : 1 - Math.pow(-2 * k + 2, 2) / 2; el.scrollTop = from + d * e; k < 1 ? requestAnimationFrame(step) : res(); };
    requestAnimationFrame(step);
  });
}
async function waitFor(fn, max = 20000) { const t0 = Date.now(); while (!fn() && Date.now() - t0 < max) await wait(200); }
function countPop(n) {                    // "Count it!" 1, 2, 3 ... pops on screen
  const el = $("#countPop"); el.hidden = false; el.querySelector("b").textContent = n;
  el.classList.remove("pop"); void el.offsetWidth; el.classList.add("pop");
}
async function guidedStory() {            // round 2: the page scrolls by itself, moment by moment, down to "Why 22?"
  const sc = $("#s2"), btn = sc.querySelector(".btn"); lockNav(true); btn.disabled = true; sc.classList.add("auto");
  await wait(600);
  let count = 0;
  for (const m of sc.querySelectorAll("#timeline .moment")) {
    const r = m.getBoundingClientRect(), s = sc.getBoundingClientRect();
    await tweenScroll(sc, Math.max(0, sc.scrollTop + (r.top - s.top) - (sc.clientHeight - m.offsetHeight) / 2), CONFIG.storyMove);
    if (m.id === "storyNote") $("#countPop").hidden = true; else countPop(++count);
    await wait(CONFIG.storyHold + (m.querySelector("video") ? 600 : 0));
  }
  await waitFor(() => $("#storyNote").classList.contains("done")); await wait(900);
  await tweenScroll(sc, sc.scrollHeight, 600);
  $("#countPop").hidden = true; sc.classList.remove("auto"); btn.disabled = false; lockNav(false);
}
async function guidedReasons() {          // round 2: scrolls down by itself to "Why 7?" and waits for the count
  const sc = $("#s3"), btn = sc.querySelector(".btn"); lockNav(true); btn.disabled = true; sc.classList.add("auto");
  await wait(900); await tweenScroll(sc, sc.scrollHeight, 1500);
  await waitFor(() => $("#reasonsNote").classList.contains("done")); await wait(1200);
  sc.classList.remove("auto"); btn.disabled = false; lockNav(false);
}
async function countTo(el, to, ms) { for (let i = 1; i <= to; i++) { el.textContent = i; el.classList.remove("tick"); void el.offsetWidth; el.classList.add("tick"); await wait(ms); } }
async function revealRows() {             // 22 sentences, 7 love words, 3 paragraphs: each number counts up, one after the other
  lockNav(true);
  const rows = [...$("#letterReveal").querySelectorAll(".rv")], speeds = [110, 300, 500], reduce = matchMedia("(prefers-reduced-motion:reduce)").matches;
  for (let i = 0; i < rows.length; i++) {
    rows[i].classList.add("show"); const b = rows[i].querySelector("b"), n = +rows[i].dataset.n;
    if (reduce) b.textContent = n; else { await wait(500); await countTo(b, n, speeds[i] || 300); await wait(700); }
  }
  $("#toEnd").hidden = false; lockNav(false);
}
let reasonsGuided = false;

// letter + love-word minigame: find every "love" in the letter to unlock the reveal
let loveTotal = 0, loveFound = 0, hintT = null, typingOn = false;
let round = 1, loveStarted = false, gameWon = false;   // round 1: normal pages. round 2 (after "go back"): twists + minigame
const esc = t => t.replace(/&/g, "&amp;").replace(/</g, "&lt;");
$("#letterReveal").innerHTML = CONFIG.letterReveal.map(r => `<div class="rv" data-n="${r.n}"><b>0</b><span>${r.label}</span><small>${r.why}</small></div>`).join("");
function loveHint() {
  clearTimeout(hintT);
  document.querySelectorAll(".lw.hint").forEach(w => w.classList.remove("hint"));
  hintT = setTimeout(() => document.querySelectorAll(".lw:not(.found)").forEach(w => w.classList.add("hint")), 20000);
}
function finishTyping() {            // round 1: plain letter, no minigame
  clearTimeout(typing); typingOn = false; lockNav(false);
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
  makeSouvenir().catch(() => {});             // prepare the souvenir picture in the background
  clearTimeout(hintT); $("#loveCount").hidden = true; burst(); hearts(24);
  const r = $("#letterReveal"); r.hidden = false;
  setTimeout(() => r.scrollIntoView({behavior: "smooth", block: "center"}), 300);
  revealRows();
}
$("#letterText").onclick = e => {
  if (typingOn) return;                                // typing cannot be skipped
  const w = e.target.closest(".lw");
  if (!w || w.classList.contains("found")) return;
  w.classList.add("found"); loveFound++; hearts(2);
  $("#loveCount").textContent = `💗 ${loveFound} / ${loveTotal}`;
  if (loveFound >= loveTotal) loveWin(); else loveHint();
};
$("#envelope").onclick = () => {
  $("#envWrap").hidden = true; $("#letter").hidden = false;
  const el = $("#letterText"), lt = $("#letter"); let i = 0, away = false; typingOn = true; clearTimeout(typing); lockNav(true);
  lt.addEventListener("scroll", () => { away = lt.scrollHeight - lt.scrollTop - lt.clientHeight > 120; }, {passive: true});   // she scrolled up: stop following
  const step = () => {                       // types one character at a time, pausing at commas, sentences and paragraphs
    i++; el.textContent = CONFIG.letter.slice(0, i);
    if (i % 6 === 0 && !away) { lt.scrollTop = lt.scrollHeight; }          // follows the text only while she is near the bottom
    if (i >= CONFIG.letter.length) return finishTyping();
    const ch = CONFIG.letter[i - 1];
    const pause = ch === "\n" ? 500 : ".!?".includes(ch) ? 320 : ch === "," ? 120 : 0;
    typing = setTimeout(step, CONFIG.typeSpeed + pause);
  };
  typing = setTimeout(step, 400);
};


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
// souvenir: a flower with her photo in the middle, drawn on a canvas so it can be saved as a picture
let svShown = false, svBlob = null, svP = null;
const loadImg = src => new Promise(res => { const i = new Image(); i.onload = () => res(i); i.onerror = () => res(null); i.src = src; });
function drawSouvenir(g, W, H, photos, layer = "all") {   // layer: "bg", "bouquet" or "all"
  const ROSE = "#a31d43", ROSE2 = "#e8607a", TAU = Math.PI * 2;
  const grad = (x0, y0, x1, y1, st) => { const q = g.createLinearGradient(x0, y0, x1, y1); st.forEach(([o, c]) => q.addColorStop(o, c)); return q; };
  const shadow = (c, b, y = 0, x = 0) => { g.shadowColor = c; g.shadowBlur = b; g.shadowOffsetY = y; g.shadowOffsetX = x; };
  const noShadow = () => { g.shadowColor = "transparent"; g.shadowBlur = 0; g.shadowOffsetX = g.shadowOffsetY = 0; };
  const rr = (x, y, w, h, r) => { g.beginPath(); g.moveTo(x + r, y); g.arcTo(x + w, y, x + w, y + h, r); g.arcTo(x + w, y + h, x, y + h, r); g.arcTo(x, y + h, x, y, r); g.arcTo(x, y, x + w, y, r); g.closePath(); };
  const heart = (x, y, s, col) => {
    g.save(); g.translate(x, y); g.scale(s / 34, s / 34); g.beginPath();
    for (let i = 0; i <= 120; i++) { const t = i / 120 * TAU, px = 16 * Math.sin(t) ** 3, py = -(13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t)); i ? g.lineTo(px, py) : g.moveTo(px, py); }
    g.closePath(); g.fillStyle = col; g.fill(); g.restore();
  };
  if (layer !== "bouquet") {
  g.fillStyle = grad(0, 0, 0, H, [[0, "#ffe2e8"], [1, "#fff6f0"]]); g.fillRect(0, 0, W, H);
  const sp = g.createRadialGradient(540, 650, 40, 540, 650, 560); sp.addColorStop(0, "rgba(255,255,255,.75)"); sp.addColorStop(1, "rgba(255,255,255,0)");
  g.fillStyle = sp; g.fillRect(0, 0, W, H);                       // soft light behind the bouquet
  g.lineWidth = 6; g.strokeStyle = ROSE2; rr(40, 40, W - 80, H - 80, 56); g.stroke();
  g.lineWidth = 2; g.strokeStyle = "#f4aab9"; rr(58, 58, W - 116, H - 116, 44); g.stroke();
  [[130, 140, 34, "#f4aab9"], [950, 150, 26, "#f4aab9"], [100, 330, 22, "#fac8d2"], [985, 345, 30, "#fabece"], [105, 1000, 28, "#f4aab9"], [975, 1010, 24, "#fac8d2"]].forEach(a => heart(...a));
  g.textAlign = "center"; g.textBaseline = "middle";
  g.fillStyle = ROSE; g.font = "italic 400 70px Fraunces, Georgia, serif"; g.fillText(CONFIG.souvenirTitle, W / 2, 128);
  g.fillStyle = ROSE2; g.font = "500 76px Caveat, cursive"; g.fillText(CONFIG.name, W / 2, 198);
  g.fillStyle = "#783c52"; g.font = "italic 400 44px Fraunces, Georgia, serif"; g.fillText(CONFIG.souvenirDate, W / 2, 1200);
  g.fillStyle = ROSE; g.font = "500 56px Caveat, cursive"; g.fillText(CONFIG.souvenirFrom, W / 2, 1252);
  }
  if (layer === "bg") return;

  const BX = 540, BY = 960;
  const PAL = {
    rose: ["#f9a0b3", "#d94868", "#ffd3dc", "#f48aa0"], lav: ["#d6baf7", "#9366d6", "#f0e5ff", "#c9a9f0"],
    peach: ["#ffc4a0", "#e57a48", "#ffe6d8", "#ffb48f"], pink: ["#ffb8cb", "#f0608a", "#ffe8ee", "#ffa9c0"],
    sun: ["#ffe29b", "#e8a52f", "#fff3cf", "#ffd477"], red: ["#f98098", "#c42a4c", "#ffc0cc", "#f06c86"]
  };
  const F = [[540, 430, 88, PAL.lav, 1], [330, 555, 88, PAL.peach, 2], [750, 555, 88, PAL.pink, 3], [400, 770, 82, PAL.sun, 4], [680, 770, 82, PAL.red, 5], [540, 640, 100, PAL.rose, 0]];
  [[255, 400, 13], [830, 400, 13], [225, 650, 11], [855, 650, 11], [300, 900, 12], [780, 900, 12], [470, 300, 10], [610, 300, 10], [215, 760, 9], [865, 760, 9]].forEach(([x, y, r]) => {
    const d = g.createRadialGradient(x - r * .3, y - r * .3, 1, x, y, r); d.addColorStop(0, "#fff"); d.addColorStop(1, "#f6d3dc");
    shadow("rgba(120,30,60,.25)", 8, 4); g.fillStyle = d; g.beginPath(); g.arc(x, y, r, 0, TAU); g.fill(); noShadow();
  });
  // ground shadow
  shadow("rgba(120,30,60,.35)", 30, 0); g.fillStyle = "rgba(120,30,60,.22)"; g.beginPath(); g.ellipse(BX, 1160, 120, 15, 0, 0, TAU); g.fill(); noShadow();
  // stems (dark base + light highlight)
  g.lineCap = "round";
  F.forEach(([x, y]) => {
    const path = o => { g.beginPath(); g.moveTo(x + o, y); g.bezierCurveTo(x + o, y + (BY - y) * .55, BX + (x - BX) * .15 + o, BY - 120, BX + o, BY + 15); };
    shadow("rgba(30,70,40,.3)", 8, 4); g.strokeStyle = "#467f55"; g.lineWidth = 16; path(0); g.stroke(); noShadow();
    g.strokeStyle = "#7dbb86"; g.lineWidth = 6; path(-3); g.stroke();
  });
  const leaf = (a, len) => {
    g.save(); g.translate(BX, BY); g.rotate(a);
    shadow("rgba(30,70,40,.35)", 14, 6);
    g.beginPath(); g.moveTo(0, 0); g.quadraticCurveTo(-48, -len * .5, 0, -len); g.quadraticCurveTo(48, -len * .5, 0, 0);
    g.fillStyle = grad(-45, 0, 45, 0, [[0, "#4f9061"], [.5, "#8ccf97"], [1, "#5da16e"]]); g.fill(); noShadow();
    g.strokeStyle = "rgba(255,255,255,.4)"; g.lineWidth = 3; g.beginPath(); g.moveTo(0, -8); g.lineTo(0, -len * .85); g.stroke(); g.restore();
  };
  [[-1.15, 250], [-.75, 290], [.75, 290], [1.15, 250]].forEach(a => leaf(...a));
  // petals: each layer casts a shadow on the one below it
  F.forEach(([x, y, R, c]) => {
    const k = R / 165;
    const petal = (a, dist, rx, ry, c0, c1) => {
      g.save(); g.translate(x, y); g.rotate(a);
      shadow("rgba(110,20,50,.30)", 14 * k + 4, 7 * k + 2);
      g.fillStyle = grad(0, -(dist + ry) * k, 0, -(dist - ry) * k, [[0, c0], [1, c1]]);
      g.beginPath(); g.ellipse(0, -dist * k, rx * k, ry * k, 0, 0, TAU); g.fill(); noShadow();
      g.strokeStyle = "rgba(120,20,60,.16)"; g.lineWidth = 2; g.stroke();
      g.fillStyle = "rgba(255,255,255,.30)"; g.beginPath(); g.ellipse(-rx * k * .18, -dist * k - ry * k * .12, rx * k * .3, ry * k * .62, 0, 0, TAU); g.fill();
      g.restore();
    };
    for (let i = 0; i < 12; i++) petal(i * Math.PI / 6, 215, 74, 125, c[1], c[0]);
    for (let i = 0; i < 12; i++) petal(i * Math.PI / 6 + Math.PI / 12, 195, 62, 105, c[3], c[2]);
  });
  // pictures: glass domes with a bevelled ring
  F.forEach(([x, y, R, , pi]) => {
    const photo = photos && photos[pi];
    shadow("rgba(90,10,40,.5)", 30, 14); g.fillStyle = "#fff"; g.beginPath(); g.arc(x, y, R + 6, 0, TAU); g.fill(); noShadow();
    g.save(); g.beginPath(); g.arc(x, y, R, 0, TAU); g.clip();
    if (photo) { const s = Math.max(2 * R / photo.width, 2 * R / photo.height), w = photo.width * s, h = photo.height * s; g.drawImage(photo, x - w / 2, y - h / 2, w, h); }
    else { g.fillStyle = "#ffd9e1"; g.fillRect(x - R, y - R, 2 * R, 2 * R); heart(x, y + 4, R * .75, ROSE2); }
    const v = g.createRadialGradient(x - R * .2, y - R * .25, R * .35, x, y, R); v.addColorStop(0, "rgba(255,255,255,0)"); v.addColorStop(1, "rgba(60,0,30,.32)");
    g.fillStyle = v; g.fillRect(x - R, y - R, 2 * R, 2 * R);
    g.fillStyle = grad(x - R, y - R, x + R * .2, y + R * .2, [[0, "rgba(255,255,255,.5)"], [1, "rgba(255,255,255,0)"]]);
    g.beginPath(); g.ellipse(x - R * .28, y - R * .5, R * .55, R * .28, -.6, 0, TAU); g.fill();
    g.restore();
    g.lineWidth = 12; g.strokeStyle = grad(x - R, y - R, x + R, y + R, [[0, "#ffffff"], [.5, "#ffe9ef"], [1, "#efa9ba"]]); g.beginPath(); g.arc(x, y, R, 0, TAU); g.stroke();
    g.lineWidth = 3; g.strokeStyle = "rgba(90,10,40,.18)"; g.beginPath(); g.arc(x, y, R - 7, 0, TAU); g.stroke();
  });
  // wrapping paper: shaded cone with fold strips and a lit rim
  const wrap = () => { g.beginPath(); g.moveTo(385, 915); g.quadraticCurveTo(540, 975, 695, 915); g.lineTo(590, 1145); g.quadraticCurveTo(540, 1168, 490, 1145); g.closePath(); };
  shadow("rgba(120,30,60,.4)", 24, 10); wrap(); g.fillStyle = grad(385, 0, 695, 0, [[0, "#f3a9bc"], [.3, "#fff0e8"], [.65, "#ffdfe4"], [1, "#e99bb0"]]); g.fill(); noShadow();
  g.save(); wrap(); g.clip();
  g.fillStyle = grad(0, 915, 0, 1165, [[0, "rgba(255,255,255,.35)"], [1, "rgba(200,60,100,.22)"]]); g.fillRect(380, 900, 320, 280);
  g.fillStyle = "rgba(200,80,110,.14)"; g.beginPath(); g.moveTo(470, 940); g.lineTo(520, 1160); g.lineTo(440, 1160); g.closePath(); g.fill();
  g.beginPath(); g.moveTo(610, 940); g.lineTo(560, 1160); g.lineTo(650, 1160); g.closePath(); g.fill();
  g.restore();
  wrap(); g.lineWidth = 4; g.strokeStyle = ROSE2; g.lineJoin = "round"; g.stroke();
  g.strokeStyle = "rgba(255,255,255,.75)"; g.lineWidth = 5; g.beginPath(); g.moveTo(392, 922); g.quadraticCurveTo(540, 980, 688, 922); g.stroke();
  // bow
  [-1, 1].forEach(d => {
    g.save(); g.translate(BX, 965); g.rotate(d * .45); shadow("rgba(90,10,40,.4)", 12, 6);
    g.fillStyle = grad(0, -32, 0, 32, [[0, "#f98098"], [1, "#c93a5c"]]); g.beginPath(); g.ellipse(d * 56, 0, 60, 32, 0, 0, TAU); g.fill(); noShadow();
    g.fillStyle = "rgba(120,10,50,.28)"; g.beginPath(); g.ellipse(d * 56, 3, 34, 15, 0, 0, TAU); g.fill();
    g.strokeStyle = "rgba(255,255,255,.4)"; g.lineWidth = 3; g.beginPath(); g.ellipse(d * 56, -2, 50, 24, 0, Math.PI * 1.1, Math.PI * 1.8); g.stroke(); g.restore();
  });
  shadow("rgba(90,10,40,.35)", 8, 5); g.strokeStyle = "#e8607a"; g.lineWidth = 12;
  g.beginPath(); g.moveTo(BX - 6, 980); g.quadraticCurveTo(BX - 40, 1040, BX - 72, 1088); g.moveTo(BX + 6, 980); g.quadraticCurveTo(BX + 40, 1040, BX + 72, 1088); g.stroke(); noShadow();
  const kn = g.createRadialGradient(BX - 7, 958, 2, BX, 965, 22); kn.addColorStop(0, "#f98098"); kn.addColorStop(1, "#b02f50");
  shadow("rgba(90,10,40,.4)", 8, 4); g.fillStyle = kn; g.beginPath(); g.arc(BX, 965, 21, 0, TAU); g.fill(); noShadow();
}
async function loadAny(path) {   // .jpg, .jpeg, .png, .webp or .gif: whichever exists
  const base = path.replace(/\.\w+$/, "");
  for (const ext of [path.split(".").pop().toLowerCase(), "jpg", "jpeg", "png", "webp", "gif"]) {
    const i = await loadImg(`${base}.${ext}`); if (i) return i;
  }
  return null;
}
// ---- animated souvenir: the bouquet sways, hearts float up, sparkles twinkle (also used for the GIF)
let svLayers = null, svRAF = 0;
function miniHeart(g, x, y, w, a) {
  g.save(); g.globalAlpha = a; g.fillStyle = "#f48aa0"; g.translate(x, y); g.scale(w / 34, w / 34); g.beginPath();
  for (let i = 0; i <= 60; i++) { const t = i / 60 * Math.PI * 2, px = 16 * Math.sin(t) ** 3, py = -(13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t)); i ? g.lineTo(px, py) : g.moveTo(px, py); }
  g.fill(); g.restore();
}
function sparkle(g, x, y, r, a) {
  if (a < .03) return;
  g.save(); g.globalAlpha = a; g.fillStyle = "#fff"; g.shadowColor = "#ff8fae"; g.shadowBlur = r; g.beginPath();
  g.moveTo(x, y - r); g.quadraticCurveTo(x, y, x + r, y); g.quadraticCurveTo(x, y, x, y + r); g.quadraticCurveTo(x, y, x - r, y); g.quadraticCurveTo(x, y, x, y - r); g.fill(); g.restore();
}
function composeFrame(g, W, H, t, fx = true) {
  const s = W / 1080, ph = t * Math.PI * 2;
  g.clearRect(0, 0, W, H); g.drawImage(svLayers.bg, 0, 0, W, H);
  if (fx) for (let i = 0; i < 7; i++) { const d = (t + i / 7) % 1; miniHeart(g, (150 + i * 130 + Math.sin(ph + i) * 18) * s, (1120 - d * 900) * s, (20 + (i % 3) * 8) * s, .6 * Math.sin(Math.PI * d)); }
  g.save(); g.translate(540 * s, 1150 * s); if (fx) { g.rotate(Math.sin(ph) * .022); const b = 1 + .01 * Math.sin(ph * 2); g.scale(b, b); } g.translate(-540 * s, -1150 * s);
  g.drawImage(svLayers.bouquet, 0, 0, W, H); g.restore();
  if (fx) [[250, 330], [830, 300], [180, 560], [900, 590], [300, 880], [790, 900], [540, 255], [640, 330]].forEach(([x, y], i) => sparkle(g, x * s, y * s, (10 + 14 * Math.max(0, Math.sin(ph * 2 + i * 1.3))) * s, Math.max(0, Math.sin(ph * 2 + i * 1.3))));
}
let svSide = 0, svFlipP = 0, svBack = null, svBackBlob = null, svTmpC = null, svGifs = null;
// the back of the souvenir: the letter, fitted to the card
function layoutLetter(g, text, maxW, maxH, fMax, fMin) {
  let out;
  for (let fs = fMax; fs >= fMin; fs--) {
    g.font = `500 ${fs}px Caveat, cursive`; const lh = fs * 1.22, sp = g.measureText(" ").width, lines = [];
    text.split("\n").forEach(par => {
      if (!par.trim()) { lines.push(null); return; }
      let cur = [], w = 0;
      par.split(/\s+/).forEach(word => { const ww = g.measureText(word).width; if (cur.length && w + sp + ww > maxW) { lines.push(cur); cur = []; w = 0; } w += (cur.length ? sp : 0) + ww; cur.push(word); });
      lines.push(cur);
    });
    out = {fs, lh, sp, lines};
    if (lines.reduce((a, l) => a + (l ? lh : lh * .55), 0) <= maxH) break;
  }
  return out;
}
function drawBack(g, W, H) {
  const ROSE = "#a31d43", ROSE2 = "#e8607a";
  const rr = (x, y, w, h, r) => { g.beginPath(); g.moveTo(x + r, y); g.arcTo(x + w, y, x + w, y + h, r); g.arcTo(x + w, y + h, x, y + h, r); g.arcTo(x, y + h, x, y, r); g.arcTo(x, y, x + w, y, r); g.closePath(); };
  const bg = g.createLinearGradient(0, 0, 0, H); bg.addColorStop(0, "#ffe2e8"); bg.addColorStop(1, "#fff6f0"); g.fillStyle = bg; g.fillRect(0, 0, W, H);
  g.lineWidth = 6; g.strokeStyle = ROSE2; rr(40, 40, W - 80, H - 80, 56); g.stroke();
  g.lineWidth = 2; g.strokeStyle = "#f4aab9"; rr(58, 58, W - 116, H - 116, 44); g.stroke();
  [[130, 130, 34], [950, 140, 26], [110, H - 330, 26], [965, H - 320, 30]].forEach(([x, y, w]) => miniHeart(g, x, y, w, .6));
  g.textAlign = "center"; g.textBaseline = "middle";
  g.fillStyle = ROSE; g.font = "italic 400 60px Fraunces, Georgia, serif"; g.fillText(CONFIG.backTitle, W / 2, 125);
  const px = 85, py = 190, pw = W - 170, ph = H - py - 180, padX = 54, padY = 46;
  g.save(); g.shadowColor = "rgba(120,30,60,.3)"; g.shadowBlur = 26; g.shadowOffsetY = 10; g.fillStyle = "#fffdf9"; rr(px, py, pw, ph, 28); g.fill(); g.restore();
  g.lineWidth = 3; g.strokeStyle = "#f4aab9"; rr(px, py, pw, ph, 28); g.stroke();
  const L = layoutLetter(g, CONFIG.letter, pw - 2 * padX, ph - 2 * padY, 40, 16);
  g.textAlign = "left"; g.textBaseline = "top"; g.font = `500 ${L.fs}px Caveat, cursive`;
  let y = py + padY;
  L.lines.forEach(l => {
    if (!l) { y += L.lh * .55; return; }
    let x = px + padX;
    l.forEach(w => { g.fillStyle = /^love+[.,!?]*$/i.test(w) ? ROSE2 : "#4a2236"; g.fillText(w, x, y); x += g.measureText(w).width + L.sp; });
    y += L.lh;
  });
  g.textAlign = "center"; g.textBaseline = "middle";
  g.fillStyle = "#783c52"; g.font = "italic 400 38px Fraunces, Georgia, serif"; g.fillText(CONFIG.souvenirDate, W / 2, H - 140);
  g.fillStyle = ROSE; g.font = "500 50px Caveat, cursive"; g.fillText(CONFIG.souvenirFrom, W / 2, H - 92);
}
// p: 0 = front (swaying bouquet), 1 = back (the letter); in between the card turns around
function flipFrame(g, W, H, t, p, bg) {
  if (p >= 1) { g.clearRect(0, 0, W, H); if (bg) { g.fillStyle = bg; g.fillRect(0, 0, W, H); } g.drawImage(svBack, 0, 0, W, H); return; }
  if (p <= 0) { composeFrame(g, W, H, t); return; }
  if (!svTmpC) svTmpC = document.createElement("canvas");
  svTmpC.width = W; svTmpC.height = H;
  if (p < .5) composeFrame(svTmpC.getContext("2d"), W, H, t);
  const sx = Math.abs(Math.cos(p * Math.PI)), sy = 1 - .05 * Math.sin(p * Math.PI);
  g.clearRect(0, 0, W, H); if (bg) { g.fillStyle = bg; g.fillRect(0, 0, W, H); }
  g.save(); g.translate(W / 2, H / 2); g.scale(Math.max(sx, .01), sy); g.translate(-W / 2, -H / 2);
  g.drawImage(p < .5 ? svTmpC : svBack, 0, 0, W, H);
  g.fillStyle = `rgba(0,0,0,${(1 - sx) * .28})`; g.fillRect(0, 0, W, H); g.restore();
}
function startSvAnim() {
  cancelAnimationFrame(svRAF);
  const cv = $("#svCanvas"), g = cv.getContext("2d"), t0 = performance.now(); let last = t0;
  const still = matchMedia("(prefers-reduced-motion:reduce)").matches;
  const loop = now => {
    if ($("#souvenir").hidden) return;
    const dt = now - last; last = now;
    svFlipP += Math.sign(svSide - svFlipP) * Math.min(Math.abs(svSide - svFlipP), dt / (still ? 1 : 650));
    flipFrame(g, cv.width, cv.height, still ? 0 : ((now - t0) / 3000) % 1, svFlipP);
    svRAF = requestAnimationFrame(loop);
  };
  svRAF = requestAnimationFrame(loop);
}
// ---- tiny GIF encoder (no libraries)
function gifLZW(idx) {
  const clear = 256, eoi = 257; let size = 9, next = 258, dict = new Map(), cur = 0, bits = 0; const out = [];
  const emit = c => { cur |= c << bits; bits += size; while (bits >= 8) { out.push(cur & 255); cur >>= 8; bits -= 8; } };
  emit(clear); let p = idx[0];
  for (let i = 1; i < idx.length; i++) {
    const k = idx[i], key = p * 256 + k, v = dict.get(key);
    if (v !== undefined) { p = v; continue; }
    emit(p);
    if (next < 4096) { dict.set(key, next++); if (next - 1 === (1 << size) && size < 12) size++; }
    else { emit(clear); dict.clear(); size = 9; next = 258; }
    p = k;
  }
  emit(p); emit(eoi); if (bits > 0) out.push(cur & 255);
  const res = [8];
  for (let i = 0; i < out.length; i += 255) { const n = Math.min(255, out.length - i); res.push(n); for (let j = 0; j < n; j++) res.push(out[i + j]); }
  res.push(0); return Uint8Array.from(res);
}
async function encodeGif(frames, W, H, delay, onProgress, samples) {
  const cnt = new Uint32Array(4096), sr = new Uint32Array(4096), sg = new Uint32Array(4096), sb = new Uint32Array(4096);
  (samples || [0, frames.length / 3 | 0, 2 * frames.length / 3 | 0]).forEach(fi => {
    const d = frames[fi];
    for (let i = 0; i < d.length; i += 12) { const r = d[i], g = d[i + 1], b = d[i + 2], k = (r >> 4 << 8) | (g >> 4 << 4) | (b >> 4); cnt[k]++; sr[k] += r; sg[k] += g; sb[k] += b; }
  });
  const keys = [...cnt.keys()].filter(k => cnt[k]).sort((a, b) => cnt[b] - cnt[a]).slice(0, 256);
  const pal = keys.map(k => [sr[k] / cnt[k] | 0, sg[k] / cnt[k] | 0, sb[k] / cnt[k] | 0]);
  while (pal.length < 256) pal.push([0, 0, 0]);
  const map = new Int16Array(4096).fill(-1);
  const nearest = (r, g, b) => { let best = 0, bd = 1e9; for (let i = 0; i < keys.length; i++) { const q = pal[i], d = (q[0] - r) ** 2 + (q[1] - g) ** 2 + (q[2] - b) ** 2; if (d < bd) { bd = d; best = i; } } return best; };
  const head = [], w16 = n => head.push(n & 255, n >> 8);
  head.push(...[..."GIF89a"].map(c => c.charCodeAt(0))); w16(W); w16(H); head.push(0xF7, 0, 0);
  pal.forEach(q => head.push(q[0], q[1], q[2]));
  head.push(0x21, 0xFF, 0x0B, ...[..."NETSCAPE2.0"].map(c => c.charCodeAt(0)), 3, 1, 0, 0, 0);
  const parts = [Uint8Array.from(head)];
  for (let f = 0; f < frames.length; f++) {
    const d = frames[f], idx = new Uint8Array(W * H);
    for (let i = 0, p = 0; i < idx.length; i++, p += 4) {
      const r = d[p], g = d[p + 1], b = d[p + 2], k = (r >> 4 << 8) | (g >> 4 << 4) | (b >> 4);
      let m = map[k]; if (m < 0) m = map[k] = nearest(r, g, b); idx[i] = m;
    }
    const fh = []; const w = n => fh.push(n & 255, n >> 8);
    fh.push(0x21, 0xF9, 4, 0); w(Array.isArray(delay) ? delay[f] : delay); fh.push(0, 0, 0x2C); w(0); w(0); w(W); w(H); fh.push(0);
    parts.push(Uint8Array.from(fh), gifLZW(idx));
    if (onProgress) { onProgress((f + 1) / frames.length); await new Promise(r => setTimeout(r)); }
  }
  parts.push(Uint8Array.from([0x3B]));
  return new Blob(parts, {type: "image/gif"});
}

async function shareOrDownload(blob, name, type) {
  const file = new File([blob], name, {type});
  if (navigator.canShare && navigator.canShare({files: [file]})) {
    try { await navigator.share({files: [file], title: "Birthday souvenir"}); return; } catch (e) { if (e.name === "AbortError") return; }
  }
  const a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = name; document.body.append(a); a.click(); a.remove();
}
async function buildSouvenir() {
  try { await Promise.all([document.fonts.load("italic 400 76px Fraunces"), document.fonts.load("500 80px Caveat")]); } catch (e) {}
  const photos = await Promise.all(CONFIG.souvenirPhotos.slice(0, 6).map(loadAny));
  const make = async p => {
    const mk = layer => { const c = document.createElement("canvas"); c.width = 1080; c.height = 1350; drawSouvenir(c.getContext("2d"), 1080, 1350, p, layer); return c; };
    svLayers = {bg: mk("bg"), bouquet: mk("bouquet")};
    const bc = document.createElement("canvas"); bc.width = 1080; bc.height = 1350; drawBack(bc.getContext("2d"), 1080, 1350); svBack = bc;
    const tc = document.createElement("canvas"); tc.width = 1080; tc.height = 1800; drawBack(tc.getContext("2d"), 1080, 1800);   // taller copy so the saved letter is easier to read
    svBackBlob = await new Promise((res, rej) => tc.toBlob(b => b ? res(b) : rej(new Error("no blob")), "image/png"));
    const c = document.createElement("canvas"); c.width = 1080; c.height = 1350; composeFrame(c.getContext("2d"), 1080, 1350, 0, false);
    return new Promise((res, rej) => c.toBlob(b => b ? res(b) : rej(new Error("no blob")), "image/png"));
  };
  try { svBlob = await make(photos); } catch (e) { svBlob = await make([]); }   // without the photos if the browser blocks them (e.g. opened as a local file)
}
const makeSouvenir = () => svP || (svP = buildSouvenir());
async function openSouvenir() {
  $("#souvenir").hidden = false; burst(); hearts(18);
  try {
    await makeSouvenir();
    $("#svCanvas").hidden = false; $("#svSave").disabled = false; $("#svGif").disabled = false;
    $("#svHint").textContent = "Tap the card to turn it over. Save the pictures (front + letter) or two GIFs (the moving bouquet, and one that turns to the letter).";
    svSide = 0; svFlipP = 0; $("#svFlip").textContent = "💌 Read the letter"; $("#svFlip").disabled = false;
    startSvAnim();
  } catch (e) { $("#svHint").textContent = "Sorry, the picture couldn't be made on this device."; }
}
// gentle 3D tilt while she moves a finger or the mouse over the picture
(() => {
  const im = $("#svCanvas"), reset = () => { im.style.transform = ""; };
  im.addEventListener("pointermove", e => {
    const r = im.getBoundingClientRect(), px = (e.clientX - r.left) / r.width - .5, py = (e.clientY - r.top) / r.height - .5;
    im.style.transform = `rotateY(${px * 22}deg) rotateX(${-py * 22}deg) scale(1.02)`;
  });
  ["pointerleave", "pointerup", "pointercancel"].forEach(t => im.addEventListener(t, reset));
})();
$("#souvenirBtn").onclick = openSouvenir;
document.addEventListener("keydown", e => { if (e.key === "Escape") $("#souvenir").hidden = true; });
$("#svClose").onclick = () => { $("#souvenir").hidden = true; };
$("#souvenir").onclick = e => { if (e.target.id === "souvenir") $("#souvenir").hidden = true; };
const flipSouvenir = () => { svSide = 1 - svSide; $("#svFlip").textContent = svSide ? "🌸 See the front" : "💌 Read the letter"; };
$("#svFlip").onclick = flipSouvenir;
$("#svCanvas").onclick = () => { if (!$("#svFlip").disabled) flipSouvenir(); };
const UA = navigator.userAgent;
const isIOS = /iPhone|iPad|iPod/i.test(UA) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
const isMobile = isIOS || /Android/i.test(UA);
const inApp = /FBAN|FBAV|Instagram|Line\/|MicroMessenger|Messenger|TikTok|; wv\)/i.test(UA);   // browsers inside other apps often block downloads
function showPics(items) {          // plain <img> pictures: press and hold to save works almost everywhere
  $("#svPicList").innerHTML = "";
  items.forEach(([b, n]) => {
    const f = document.createElement("figure"), im = document.createElement("img"), cap = document.createElement("figcaption");
    im.src = URL.createObjectURL(b); im.alt = n; cap.textContent = n.includes("flip") ? "GIF: the bouquet that turns to the letter" : n.includes("bouquet.gif") ? "GIF: the moving bouquet" : n.includes("letter") ? "The letter" : "The bouquet";
    f.append(im, cap); $("#svPicList").append(f);
  });
  $("#svPics").hidden = false;
}
async function shareFiles(items) {
  const files = items.map(([b, n, t]) => new File([b], n, {type: t}));
  // the phone's share sheet only on phones; on a computer the share dialog just offers "copy", so we download instead
  if (isMobile && !inApp && navigator.canShare && navigator.canShare({files})) {
    try { await navigator.share({files}); return; } catch (e) { if (e.name === "AbortError") return; }
  }
  if (inApp || isIOS) { showPics(items); return; }
  for (const [b, n] of items) { const a = document.createElement("a"); a.href = URL.createObjectURL(b); a.download = n; document.body.append(a); a.click(); a.remove(); await new Promise(r => setTimeout(r, 600)); }
}
$("#svTrouble").onclick = () => {
  const it = [[svBlob, "birthday-souvenir-front.png", "image/png"], [svBackBlob, "birthday-souvenir-letter.png", "image/png"]];
  if (svGifs) it.push(...svGifs);
  if (svBlob && svBackBlob) showPics(it);
};
$("#svPicsClose").onclick = () => { $("#svPics").hidden = true; };
$("#svGif").onclick = async () => {
  const btn = $("#svGif"), label = btn.textContent; btn.disabled = true;
  const say = p => { btn.textContent = `Making GIFs… ${Math.round(p * 100)}%`; };
  try {
    const W = 540, H = 675, c = document.createElement("canvas"); c.width = W; c.height = H;
    const g = c.getContext("2d", {willReadFrequently: true}), BG = "#2a1424";
    // GIF 1: only the front, the bouquet swaying
    let frames = [];
    for (let i = 0; i < 36; i++) { composeFrame(g, W, H, i / 36); frames.push(g.getImageData(0, 0, W, H).data); if (i % 4 === 0) { say(i / 36 * .25); await new Promise(r => setTimeout(r)); } }
    const gif1 = await encodeGif(frames, W, H, 7, p => say(.25 + p * .25), [0, 12, 24]);
    // GIF 2: the front, then it turns to the letter and back
    frames = []; const delays = [], add = (draw, d) => { draw(); frames.push(g.getImageData(0, 0, W, H).data); delays.push(d); };
    for (let i = 0; i < 24; i++) { add(() => composeFrame(g, W, H, i / 24), 7); if (i % 4 === 0) { say(.5 + i / 24 * .1); await new Promise(r => setTimeout(r)); } }
    for (let k = 1; k <= 8; k++) add(() => flipFrame(g, W, H, 0, k / 9, BG), 6);
    add(() => flipFrame(g, W, H, 0, 1, BG), 300);                                       // the letter stays for 3 seconds
    for (let k = 1; k <= 8; k++) add(() => flipFrame(g, W, H, 0, 1 - k / 9, BG), 6);
    const gif2 = await encodeGif(frames, W, H, delays, p => say(.6 + p * .4), [0, 12, 28, 32]);
    svGifs = [[gif1, "birthday-souvenir-bouquet.gif", "image/gif"], [gif2, "birthday-souvenir-flip-to-letter.gif", "image/gif"]];
    await shareFiles(svGifs);
  } catch (e) { $("#svHint").textContent = "Sorry, the GIFs couldn't be made on this device."; }
  btn.textContent = label; btn.disabled = false;
};
$("#svSave").onclick = async () => {
  if (!svBlob || !svBackBlob) return;
  await shareFiles([[svBlob, "birthday-souvenir-front.png", "image/png"], [svBackBlob, "birthday-souvenir-letter.png", "image/png"]]);
};

// date lock + countdown on the first page, with a celebration when the date arrives
const params = new URLSearchParams(location.search);
const preview = !!CONFIG.previewKey && params.get("preview") === CONFIG.previewKey;
const demo = preview ? +params.get("demo") || 0 : 0;     // ?preview=KEY&demo=12 pretends it unlocks in 12 seconds (to test the animation)
const UNLOCK = demo ? Date.now() + demo * 1000 : new Date(CONFIG.unlockAt).getTime();
function isLocked() { return (demo || !preview) && UNLOCK > Date.now(); }
const startedLocked = isLocked();
let lastSec = -1;
function overlay(text, isMsg) {
  const o = $("#cdOverlay"); o.hidden = false; o.className = isMsg ? "msg" : ""; o.textContent = text;
  void o.offsetWidth; o.classList.add("pop");
}
function celebrate() {
  const btn = $("#openBtn");
  $("#countdown").classList.remove("final"); $("#cdTimer").hidden = true; $("#cdLabel").textContent = CONFIG.readyText;
  btn.disabled = false; btn.textContent = "🔓 Unlocked!"; btn.classList.add("unlocked");
  setTimeout(() => { btn.textContent = "Open 💌"; }, 1400);
  overlay(CONFIG.unlockText, true); burst(); hearts(30);
  preloadGift();
  setTimeout(burst, 700); setTimeout(() => { burst(); hearts(20); }, 1500);
  setTimeout(() => { $("#cdOverlay").hidden = true; }, 4500);
}
function tickCountdown() {
  const box = $("#countdown"), btn = $("#openBtn"), s = Math.ceil((UNLOCK - Date.now()) / 1000);
  if (!isLocked()) {
    clearInterval(cdT);
    if (startedLocked) celebrate();                                   // the date arrived while she was on the page
    else if (!preview) { box.hidden = false; $("#cdTimer").hidden = true; $("#cdLabel").textContent = CONFIG.readyText; btn.disabled = false; btn.classList.add("unlocked"); setTimeout(burst, 600); }
    else { box.hidden = true; btn.disabled = false; }
    return;
  }
  if (s === lastSec) return; lastSec = s;
  $("#cdLabel").textContent = CONFIG.lockText; $("#cdTimer").hidden = false;
  $("#cdTimer").innerHTML = [[Math.floor(s / 86400), "days"], [Math.floor(s % 86400 / 3600), "hours"], [Math.floor(s % 3600 / 60), "min"], [s % 60, "sec"]]
    .map(([v, l]) => `<div class="cd"><b>${String(v).padStart(2, "0")}</b><span>${l}</span></div>`).join("");
  box.hidden = false; box.classList.toggle("final", s <= 10);
  btn.disabled = true; btn.textContent = "🔒 Not yet…";
  if (s <= 10) overlay(String(s), false);                              // big 10... 9... 8... in the last seconds
}
const cdT = setInterval(tickCountdown, 250); tickCountdown();

// pictures that fly out of the gift box and make a heart
let giftImgs = null;
function preloadGift() {
  if (giftImgs) return giftImgs;
  const all = CONFIG.timeline.filter(m => m.img).map(m => m.img);
  const list = CONFIG.giftPhotos || Array.from({length: Math.min(10, all.length)}, (_, i) => all[Math.floor(i * all.length / Math.min(10, all.length))]);
  return giftImgs = Promise.all(list.map(loadAny)).then(a => a.filter(Boolean));
}
function launchPics(list) {
  if (!giftBusy || !list.length) return;
  const wrap = $("#gpics"), vw = innerWidth, vh = innerHeight, n = Math.min(list.length, 12); wrap.innerHTML = "";
  const bx = $("#gift .gbox").getBoundingClientRect(), ox = bx.left + bx.width / 2, oy = bx.top + bx.height * .35;
  const cw = Math.max(54, Math.min(vw * .17, vh * .13, 112)), ch = cw * 1.22;
  const s = Math.min(vw * .8, vh * .6) / 34, hx = vw / 2, hy = vh * .42;
  // points spaced evenly along the heart outline (by length), so the pictures never pile up
  const pts = [], M = 600, H = k => { const t = Math.PI * 2 * k / M; return [16 * Math.sin(t) ** 3, -(13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t))]; };
  let total = 0; const cum = [0]; for (let k = 1; k <= M; k++) { const a = H(k - 1), b = H(k); total += Math.hypot(b[0] - a[0], b[1] - a[1]); cum.push(total); }
  const at = f => { let k = 0; while (k < M && cum[k] < f * total) k++; return H(k); };
  const cap = $("#gift .gcap"); cap.innerHTML = `Happy Birthday<br>${CONFIG.name}`; cap.style.top = hy + "px";   // the heart is centred on this point
  for (let i = 0; i < n; i++) {
    const [hxu, hyu] = at((i + .5) / n);
    const dx = hx + hxu * s - ox, dy = hy + (hyu - 2.5) * s - oy, r = ((i * 37) % 29) - 14, peak = vh * (.22 + (i % 3) * .05);
    const el = document.createElement("div"), im = document.createElement("img");
    el.className = "gp"; el.style.cssText = `width:${cw}px;height:${ch}px;left:${ox}px;top:${oy}px`; im.src = list[i].src; el.append(im); wrap.append(el);
    const base = "translate(-50%,-50%) ";
    el.animate([
      {transform: base + "translate(0,0) scale(.2) rotate(0deg)", opacity: 0},
      {transform: base + `translate(${dx * .35}px,${-peak}px) scale(1.15) rotate(${r * 1.6}deg)`, opacity: 1, offset: .45},
      {transform: base + `translate(${dx}px,${dy}px) scale(1) rotate(${r}deg)`, opacity: 1}
    ], {duration: 1000, delay: i * 90, easing: "cubic-bezier(.2,.8,.3,1)", fill: "forwards"});
  }
}

// gift opening animation when she presses Open on the first page
let giftBusy = false;
function playGift(done) {
  if (giftBusy) return;
  if (matchMedia("(prefers-reduced-motion:reduce)").matches) { done(); return; }
  giftBusy = true;
  const g = $("#gift"), box = g.querySelector(".gbox"), T = []; let ended = false;
  g.className = ""; box.className = "gbox"; $("#gpics").innerHTML = ""; g.hidden = false; void g.offsetWidth; g.classList.add("on");
  preloadGift();
  const at = (ms, fn) => T.push(setTimeout(fn, ms));
  const finish = () => {
    if (ended) return; ended = true; T.forEach(clearTimeout);
    g.classList.add("out"); done();
    setTimeout(() => { $("#gpics").innerHTML = ""; }, 800);
    setTimeout(() => { g.hidden = true; g.className = ""; giftBusy = false; }, 800);
  };
  at(900, () => box.classList.add("shake"));
  at(1900, () => { box.classList.remove("shake"); g.classList.add("open"); burst(); hearts(26); preloadGift().then(launchPics); });
  at(3600, () => g.classList.add("formed"));       // the pictures have made a heart: "Happy Birthday" appears
  at(5000, () => g.classList.add("flash"));
  at(5600, finish);
  g.onclick = null;                                     // not skippable: the whole animation plays
}

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
  guidedStory();                                                     // slow auto-scroll through every moment, down to "Why 22?"
};
if (!isLocked()) preloadGift();              // get the gift pictures ready in the background once the page is unlocked
show(0, false);

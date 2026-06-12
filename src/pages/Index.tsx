import { useState } from "react";
import Icon from "@/components/ui/icon";

const IMAGES = {
  dog: "https://cdn.poehali.dev/projects/ecf6af65-b161-4037-abda-c2a2eb32f3ea/files/db47fcc2-b76f-46b6-9eff-39233945a7ac.jpg",
  frog: "https://cdn.poehali.dev/projects/ecf6af65-b161-4037-abda-c2a2eb32f3ea/files/fb79fc70-8bc9-44b6-a43e-f5d0e009670f.jpg",
  cat: "https://cdn.poehali.dev/projects/ecf6af65-b161-4037-abda-c2a2eb32f3ea/files/cf2d6396-e3e3-4c22-a387-6d753247f7e5.jpg",
  blob: "https://cdn.poehali.dev/projects/ecf6af65-b161-4037-abda-c2a2eb32f3ea/files/66e56afb-7b16-4967-8c2d-e77ec48b22b5.jpg",
  avatar: "https://cdn.poehali.dev/projects/ecf6af65-b161-4037-abda-c2a2eb32f3ea/files/2001fe40-c41e-4011-8b27-41cb9fab9df5.jpg",
};

const VIDEOS = [
  { id: 1, title: "КАК ПРИГОТОВИТЬ 1000 БУТЕРБРОДОВ ЗА 1 СЕКУНДУ (нет)", channel: "БутерБро TV", views: "13 млн", time: "2 мин назад", duration: "9:99", likes: "999K", img: IMAGES.dog, color: "#FF6B00", tag: "🔥 ЖАРКО" },
  { id: 2, title: "ЛЯГУШКА ПЫТАЕТСЯ СЪЕСТЬ ПИЦЦУ — МЫ В ШОКЕ", channel: "Квакнутый Влог", views: "8.4 млн", time: "5 мин назад", duration: "12:34", likes: "777K", img: IMAGES.frog, color: "#1DDC8B", tag: "😱 ШОК" },
  { id: 3, title: "КОТ НАУЧИЛСЯ ИГРАТЬ НА ГИТАРЕ — КОНЕЦ СВЕТА", channel: "МурМузыка", views: "22 млн", time: "1 час назад", duration: "4:20", likes: "1.2M", img: IMAGES.cat, color: "#B84FFF", tag: "🎸 ТОПЧИК" },
  { id: 4, title: "БЛОБ ТАНЦУЕТ С БАНАНОМ 10 ЧАСОВ ПОДРЯД", channel: "Желтяк Стримс", views: "45 млн", time: "3 часа назад", duration: "10:00:00", likes: "2.3M", img: IMAGES.blob, color: "#FFE033", tag: "💛 ТОП 1" },
  { id: 5, title: "ПРОБУЮ ЕДУ КОТОРОЙ НЕТ — ВКУСНО ИЛИ НЕТ?", channel: "БутерБро TV", views: "3 млн", time: "вчера", duration: "7:42", likes: "321K", img: IMAGES.frog, color: "#FF4FA3", tag: "🍕 ЕДА" },
  { id: 6, title: "СОБАКА СМОТРИТ ТВ 24/7 — ЧТО ОНА ДУМАЕТ?", channel: "Пёс Нарратив", views: "1.1 млн", time: "2 дня назад", duration: "3:33", likes: "88K", img: IMAGES.dog, color: "#33C6FF", tag: "🐶 АВ-АВ" },
];

const SHORTS = [
  { id: 1, title: "ТЫ НЕ ГОТОВ К ЭТОМУ", img: IMAGES.blob, views: "99M", color: "#FF6B00" },
  { id: 2, title: "КОГДА ПОНЕДЕЛЬНИК", img: IMAGES.frog, views: "55M", color: "#1DDC8B" },
  { id: 3, title: "КОШАЧИЙ БУГИ", img: IMAGES.cat, views: "120M", color: "#B84FFF" },
  { id: 4, title: "БАНАНОВЫЙ КРИЗИС", img: IMAGES.blob, views: "77M", color: "#FF4FA3" },
  { id: 5, title: "ПРЫЖОК ВЕРЫ", img: IMAGES.dog, views: "33M", color: "#FFE033" },
  { id: 6, title: "УТРО ВОИНА", img: IMAGES.frog, views: "18M", color: "#33C6FF" },
  { id: 7, title: "ПОЧЕМУ Я ТАК ДЕЛАЮ", img: IMAGES.cat, views: "41M", color: "#FF4FA3" },
  { id: 8, title: "ЛЯГУХ ПРЫГНУЛ", img: IMAGES.frog, views: "88M", color: "#1DDC8B" },
  { id: 9, title: "ЭТО НОРМАЛЬНО", img: IMAGES.blob, views: "66M", color: "#FF6B00" },
  { id: 10, title: "ГИТАРА И КОТ", img: IMAGES.cat, views: "200M", color: "#B84FFF" },
];

const CHANNELS = [
  { name: "БутерБро TV", subs: "13.4M", emoji: "🥪", color: "#FF6B00", verified: true, desc: "Видео про еду которой не существует" },
  { name: "Квакнутый Влог", subs: "8.1M", emoji: "🐸", color: "#1DDC8B", verified: true, desc: "Лягушка живёт свою лучшую жизнь" },
  { name: "МурМузыка", subs: "22M", emoji: "🎸", color: "#B84FFF", verified: false, desc: "Кот-рокер. Не обсуждается." },
  { name: "Желтяк Стримс", subs: "45M", emoji: "💛", color: "#FFE033", verified: true, desc: "24/7 танцы с бананами онлайн" },
  { name: "Пёс Нарратив", subs: "3.3M", emoji: "🐕", color: "#33C6FF", verified: false, desc: "Документальные фильмы про собак" },
  { name: "БлобТВ", subs: "18M", emoji: "🟡", color: "#FF4FA3", verified: true, desc: "Официальный канал жёлтого блоба" },
];

const CATEGORIES = ["🔥 Всё", "😂 Приколы", "🎮 Игры", "🍕 Еда", "🎵 Музыка", "🐾 Животные", "💪 Спорт", "🚀 Наука", "👻 Ужасы", "💃 Танцы"];

const COMMENTS = [
  { user: "ПупсикМаксимальный", text: "ПЕРВЫЙ!!! УРА МНЕ!!!!! 🎉🎉🎉", likes: 4201, avatar: "🐱" },
  { user: "ФидоФанат2007", text: "я смотрю это уже 47 раз и мне не стыдно вообще", likes: 3892, avatar: "🐸" },
  { user: "ГениальныйЧеловек", text: "это изменило мою жизнь. теперь у меня есть смысл.", likes: 7771, avatar: "🤯" },
  { user: "МамаТриКота", text: "показала своему коту — он уставился в монитор и не уходит уже 3 часа", likes: 12004, avatar: "😸" },
  { user: "БобёрВоевода", text: "это то искусство которое мир не заслуживает но которое ему нужно", likes: 2233, avatar: "🦫" },
];

const TRENDING = [
  { pos: 1, title: "СОБАКА РЕШИЛА МАТЕМАТИКУ ЗА 9 КЛАСС", channel: "Умные Псы", views: "234M", color: "#FF3333" },
  { pos: 2, title: "ГОТОВЛЮ ЗАВТРАК ИЗ НИЧЕГО (БУКВАЛЬНО)", channel: "НулевойШеф", views: "89M", color: "#FF6B00" },
  { pos: 3, title: "КОШКА VS ОГУРЕЦ: ФИНАЛЬНАЯ БИТВА", channel: "МурМузыка", views: "67M", color: "#B84FFF" },
  { pos: 4, title: "24 ЧАСА В ХОЛОДИЛЬНИКЕ — ВЫЖИВУ ЛИ?", channel: "Морозный Блогер", views: "45M", color: "#33C6FF" },
  { pos: 5, title: "ЧТО ЕСЛИ СЪЕСТЬ 100 КОНФЕТ ПОДРЯД", channel: "СладкийЧеловек", views: "38M", color: "#1DDC8B" },
];

// ======= WEB AUDIO SOUNDS =======
const getAudioCtx = (() => {
  let ctx: AudioContext | null = null;
  return () => {
    if (!ctx) ctx = new (window.AudioContext || (window as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext!)();
    return ctx;
  };
})();

function playSound(type: "boing" | "pop" | "subscribe" | "like" | "tab" | "search" | "error") {
  const ctx = getAudioCtx();
  const now = ctx.currentTime;

  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.connect(gain);
  gain.connect(ctx.destination);

  if (type === "boing") {
    osc.type = "sine";
    osc.frequency.setValueAtTime(180, now);
    osc.frequency.exponentialRampToValueAtTime(520, now + 0.15);
    osc.frequency.exponentialRampToValueAtTime(180, now + 0.35);
    gain.gain.setValueAtTime(0.4, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);
    osc.start(now); osc.stop(now + 0.4);
  } else if (type === "pop") {
    osc.type = "sine";
    osc.frequency.setValueAtTime(600, now);
    osc.frequency.exponentialRampToValueAtTime(200, now + 0.12);
    gain.gain.setValueAtTime(0.5, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);
    osc.start(now); osc.stop(now + 0.15);
  } else if (type === "subscribe") {
    // Восходящая мелодия до-ми-соль
    [261, 329, 392].forEach((freq, i) => {
      const o = ctx.createOscillator();
      const g = ctx.createGain();
      o.connect(g); g.connect(ctx.destination);
      o.type = "triangle";
      o.frequency.value = freq;
      const t = now + i * 0.1;
      g.gain.setValueAtTime(0, t);
      g.gain.linearRampToValueAtTime(0.4, t + 0.04);
      g.gain.exponentialRampToValueAtTime(0.001, t + 0.2);
      o.start(t); o.stop(t + 0.25);
    });
    return;
  } else if (type === "like") {
    osc.type = "sine";
    osc.frequency.setValueAtTime(440, now);
    osc.frequency.exponentialRampToValueAtTime(880, now + 0.08);
    gain.gain.setValueAtTime(0.3, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.18);
    osc.start(now); osc.stop(now + 0.2);
  } else if (type === "tab") {
    osc.type = "square";
    osc.frequency.setValueAtTime(300, now);
    osc.frequency.linearRampToValueAtTime(400, now + 0.06);
    gain.gain.setValueAtTime(0.15, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.1);
    osc.start(now); osc.stop(now + 0.1);
  } else if (type === "search") {
    // Нарастающий свист
    osc.type = "sine";
    osc.frequency.setValueAtTime(400, now);
    osc.frequency.exponentialRampToValueAtTime(1200, now + 0.2);
    gain.gain.setValueAtTime(0.3, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
    osc.start(now); osc.stop(now + 0.25);
  } else if (type === "error") {
    // Смешной провальный звук
    osc.type = "sawtooth";
    osc.frequency.setValueAtTime(400, now);
    osc.frequency.exponentialRampToValueAtTime(80, now + 0.35);
    gain.gain.setValueAtTime(0.25, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);
    osc.start(now); osc.stop(now + 0.4);
  }
}

export default function Index() {
  const [activeTab, setActiveTab] = useState("Главная");
  const [likedVideos, setLikedVideos] = useState<number[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchFocused, setSearchFocused] = useState(false);
  const [subscribedChannels, setSubscribedChannels] = useState<string[]>([]);
  const [activeCategory, setActiveCategory] = useState("🔥 Всё");
  const [selectedVideo, setSelectedVideo] = useState<typeof VIDEOS[0] | null>(null);
  const [commentText, setCommentText] = useState("");
  const [submittedComment, setSubmittedComment] = useState<string | null>(null);
  const [notifShown, setNotifShown] = useState(false);
  const [notifText, setNotifText] = useState("");

  const TABS = ["Главная", "Шортсы", "Тренды", "Подписки", "Каналы", "ВИГИ"];

  const toggleLike = (id: number) => {
    playSound(likedVideos.includes(id) ? "pop" : "like");
    setLikedVideos(prev =>
      prev.includes(id) ? prev.filter(v => v !== id) : [...prev, id]
    );
  };

  const showNotif = (text: string, sound: "boing" | "pop" | "error" | "search" = "boing") => {
    playSound(sound);
    setNotifText(text);
    setNotifShown(true);
    setTimeout(() => setNotifShown(false), 2200);
  };

  const toggleSub = (name: string) => {
    const isSubbed = subscribedChannels.includes(name);
    setSubscribedChannels(prev =>
      isSubbed ? prev.filter(c => c !== name) : [...prev, name]
    );
    showNotif(isSubbed ? `🔕 Отписка от ${name}. Зря.` : `🔔 ПОДПИСКА НА ${name} ОФОРМЛЕНА!`, isSubbed ? "error" : "subscribe");
  };

  return (
    <div className="min-h-screen" style={{ background: "var(--fido-bg)", fontFamily: "'Nunito', sans-serif" }}>

      {/* NOTIFICATION TOAST */}
      {notifShown && (
        <div
          className="fixed top-20 right-6 z-50 animate-pop-in cartoon-border-thick rounded-2xl px-5 py-3 font-black text-sm"
          style={{ background: "var(--fido-green)", color: "var(--fido-dark)" }}
        >
          {notifText}
        </div>
      )}

      {/* ===== HEADER ===== */}
      <header className="sticky top-0 z-40" style={{ background: "white", borderBottom: "4px solid var(--fido-dark)" }}>
        <div className="flex items-center gap-3 px-4 py-3 max-w-screen-2xl mx-auto">

          {/* LOGO */}
          <div className="flex items-center select-none cursor-pointer flex-shrink-0" onClick={() => setActiveTab("Главная")}>
            <img
              src="https://cdn.poehali.dev/projects/ecf6af65-b161-4037-abda-c2a2eb32f3ea/bucket/dafd1d89-eca8-4c2e-a810-f7545e8d6f8c.png"
              alt="FidoTube"
              className="h-20 w-auto object-contain hover:scale-105 transition-all"
            />
          </div>

          {/* SEARCH */}
          <div className="flex-1 max-w-lg mx-auto">
            <div
              className={`flex items-center rounded-2xl cartoon-border overflow-hidden transition-all duration-200 ${searchFocused ? "scale-105" : ""}`}
              style={{ background: "white" }}
            >
              <input
                type="text"
                placeholder="🔍 Ищи что угодно... серьёзно, ЧТО УГОДНО"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setSearchFocused(false)}
                className="flex-1 px-4 py-2.5 text-sm font-bold bg-transparent outline-none"
                style={{ color: "var(--fido-dark)" }}
              />
              <button
                className="px-4 py-2.5 font-black text-sm transition-all hover:scale-110"
                style={{ background: "var(--fido-yellow)", borderLeft: "3px solid var(--fido-dark)", color: "var(--fido-dark)" }}
                onClick={() => showNotif(`🔍 Ищем «${searchQuery || "ничего"}»... ничего не нашли. Попробуй ещё.`, "search")}
              >
                ИДИ!
              </button>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-2">
            <button
              className="hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-xl cartoon-border font-black text-sm transition-all hover:scale-105"
              style={{ background: "var(--fido-yellow)", color: "var(--fido-dark)" }}
              onClick={() => showNotif("📹 Функция загрузки временно занята. Пёс кушает.")}
            >
              <Icon name="Video" size={16} />
              <span className="hidden md:inline">Загрузить</span>
            </button>
            <button
              className="hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-xl cartoon-border font-black text-sm transition-all hover:scale-105"
              style={{ background: "var(--fido-purple)", color: "white" }}
              onClick={() => showNotif("🔔 У тебя 9,999 уведомлений. Извини.")}
            >
              <Icon name="Bell" size={16} />
            </button>
            <div
              className="w-10 h-10 rounded-full cartoon-border overflow-hidden flex items-center justify-center font-black text-lg cursor-pointer hover:scale-110 transition-all"
              style={{ background: "var(--fido-pink)", color: "white" }}
              onClick={() => showNotif("😎 Это твой профиль. Выглядит хорошо!")}
            >
              😎
            </div>
          </div>
        </div>

        {/* NAV TABS */}
        <div className="flex gap-1 px-4 pb-3 max-w-screen-2xl mx-auto overflow-x-auto">
          {TABS.map(tab => (
            <button
              key={tab}
              onClick={() => { playSound("tab"); setActiveTab(tab); }}
              className="px-4 py-2 rounded-xl font-black text-sm whitespace-nowrap transition-all"
              style={{
                background: activeTab === tab ? "var(--fido-orange)" : "rgba(0,0,0,0.07)",
                color: activeTab === tab ? "white" : "var(--fido-dark)",
                border: activeTab === tab ? "3px solid var(--fido-dark)" : "3px solid transparent",
                boxShadow: activeTab === tab ? "3px 3px 0 var(--fido-dark)" : "none",
                transform: activeTab === tab ? "scale(1.05)" : "scale(1)",
              }}
            >
              {tab}
            </button>
          ))}
        </div>
      </header>

      {/* TICKER */}
      <div className="overflow-hidden py-2.5" style={{ background: "var(--fido-yellow)", borderBottom: "4px solid var(--fido-dark)" }}>
        <div className="flex animate-marquee whitespace-nowrap gap-10 font-black text-sm" style={{ color: "var(--fido-dark)" }}>
          {[...Array(2)].map((_, i) => (
            <span key={i} className="flex items-center gap-10">
              <span>🐕 FIDOTUBE — НЕ ЮТУБ, НО ЛУЧШЕ!</span>
              <span>🔥 234 МЛН ПРОСМОТРОВ СЕГОДНЯ — ДО ОБЕДА</span>
              <span>🎉 КОТ СМОТРЕЛ ВИДЕО 47 ЧАСОВ ПОДРЯД — РЕКОРД</span>
              <span>🚀 ПОДПИСЧИК №1000000 ПОЛУЧИЛ ВИРТУАЛЬНЫЙ БУБЛИК</span>
              <span>💛 БУД ДОБРЕЕ К СОБАКАМ</span>
              <span>😱 ОСТОРОЖНО: МОЖЕТ ВЫЗВАТЬ ЗАВИСИМОСТЬ ОТ СМЕХА</span>
            </span>
          ))}
        </div>
      </div>

      {/* ===== MAIN ===== */}
      <main className="max-w-screen-2xl mx-auto px-4 py-6">

        {/* ======== ГЛАВНАЯ ======== */}
        {activeTab === "Главная" && (
          <div>
            {/* HERO */}
            <div
              className="relative rounded-3xl overflow-hidden mb-8 cartoon-border-thick"
              style={{ background: "linear-gradient(135deg, var(--fido-purple) 0%, var(--fido-pink) 50%, var(--fido-orange) 100%)" }}
            >
              <div className="flex flex-col md:flex-row items-center gap-6 p-8">
                <div className="flex-1 text-white">
                  <div
                    className="inline-block px-3 py-1 rounded-full text-xs font-black mb-3 cartoon-border-sm"
                    style={{ background: "var(--fido-yellow)", color: "var(--fido-dark)" }}
                  >
                    🔴 ПРЯМО СЕЙЧАС В ТРЕНДЕ
                  </div>
                  <h1
                    className="text-4xl md:text-6xl font-black mb-3 leading-tight animate-slide-up stagger-1"
                    style={{ fontFamily: "'Oswald', sans-serif", textShadow: "3px 3px 0 rgba(0,0,0,0.3)" }}
                  >
                    ДОБРО ПОЖАЛОВАТЬ<br />
                    <span style={{ color: "var(--fido-yellow)" }}>НА FIDOTUBE!</span>
                  </h1>
                  <p className="text-lg font-bold opacity-90 mb-4 animate-slide-up stagger-2">
                    Здесь живут самые важные видео в истории человечества 🐕
                  </p>
                  <div className="flex flex-wrap gap-3 animate-slide-up stagger-3">
                    <button
                      onClick={() => setActiveTab("Шортсы")}
                      className="px-6 py-3 rounded-2xl cartoon-border font-black text-base transition-all hover:scale-105"
                      style={{ background: "var(--fido-yellow)", color: "var(--fido-dark)" }}
                    >
                      ▶ СМОТРЕТЬ ШОРТСЫ
                    </button>
                    <button
                      className="px-6 py-3 rounded-2xl cartoon-border font-black text-base transition-all hover:scale-105"
                      style={{ background: "rgba(255,255,255,0.2)", color: "white" }}
                      onClick={() => showNotif("🔔 Подписка на ВСЁ оформлена! Удачи.")}
                    >
                      🔔 ПОДПИСАТЬСЯ НА ВСЁ
                    </button>
                  </div>
                </div>
                <div className="animate-float flex-shrink-0">
                  <div className="relative">
                    <div className="w-44 h-56 rounded-3xl overflow-hidden cartoon-border-thick rotate-2"
                      style={{ background: "white" }}>
                      <img
                        src="https://cdn.poehali.dev/projects/ecf6af65-b161-4037-abda-c2a2eb32f3ea/bucket/bee4a406-483d-4813-a124-60421c2eeb6e.jpg"
                        alt="Илья Виги"
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <div className="absolute -bottom-3 -left-3 px-3 py-1.5 rounded-xl cartoon-border font-black text-xs -rotate-2 whitespace-nowrap"
                      style={{ background: "var(--fido-yellow)", color: "var(--fido-dark)" }}>
                      👑 ОСНОВАТЕЛЬ
                    </div>
                    <div className="absolute -top-3 -right-3 text-2xl animate-wiggle">💼</div>
                  </div>
                </div>
              </div>
              <div className="absolute top-4 right-20 text-4xl animate-spin-slow opacity-30">⭐</div>
              <div className="absolute bottom-4 left-20 text-3xl animate-float opacity-30" style={{ animationDelay: "1s" }}>✨</div>
            </div>

            {/* STATS */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
              {[
                { label: "Видео сегодня", value: "13,337", emoji: "🎬", bg: "#FF6B00" },
                { label: "Просмотров", value: "999B", emoji: "👁️", bg: "#1DDC8B" },
                { label: "Смеялись", value: "все", emoji: "😂", bg: "#B84FFF" },
                { label: "Котиков", value: "∞", emoji: "🐱", bg: "#FF4FA3" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className={`cartoon-border rounded-2xl p-4 text-center animate-pop-in stagger-${i + 1}`}
                  style={{ background: stat.bg, color: "white" }}
                >
                  <div className="text-3xl mb-1">{stat.emoji}</div>
                  <div className="text-2xl font-black" style={{ fontFamily: "'Oswald', sans-serif" }}>{stat.value}</div>
                  <div className="text-xs font-bold opacity-80">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* OWNER CARD */}
            <div className="cartoon-border-thick rounded-3xl overflow-hidden mb-8 flex flex-col sm:flex-row"
              style={{ background: "var(--fido-dark)" }}>
              <div className="w-full sm:w-48 h-56 sm:h-auto flex-shrink-0 relative overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/projects/ecf6af65-b161-4037-abda-c2a2eb32f3ea/bucket/bee4a406-483d-4813-a124-60421c2eeb6e.jpg"
                  alt="Илья Виги"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to right, transparent 60%, var(--fido-dark))" }} />
              </div>
              <div className="flex-1 p-6 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-black mb-3 self-start cartoon-border-sm"
                  style={{ background: "var(--fido-yellow)", color: "var(--fido-dark)" }}>
                  👑 ВЛАДЕЛЕЦ И ГЕНЕРАЛЬНЫЙ ПЁС
                </div>
                <h3 className="text-3xl font-black mb-2 text-white" style={{ fontFamily: "'Oswald', sans-serif" }}>
                  ИЛЬЯ ВИГИ
                </h3>
                <p className="font-bold mb-4" style={{ color: "rgba(255,255,255,0.7)" }}>
                  Создал FidoTube после того, как лично сломал настоящий YouTube. Держит осколки как трофей. Говорит «так и задумано». Мы верим.
                </p>
                <div className="flex gap-3 flex-wrap">
                  {[
                    { label: "Видео снял", val: "0" },
                    { label: "Денег потратил", val: "∞" },
                    { label: "Сожалений", val: "нет" },
                  ].map((s, i) => (
                    <div key={i} className="px-4 py-2 rounded-xl cartoon-border-sm text-center"
                      style={{ background: ["var(--fido-orange)", "var(--fido-purple)", "var(--fido-green)"][i] }}>
                      <div className="font-black text-white text-lg" style={{ fontFamily: "'Oswald', sans-serif" }}>{s.val}</div>
                      <div className="text-xs font-bold text-white opacity-80">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CATEGORIES */}
            <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
              {CATEGORIES.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className="px-4 py-2 rounded-xl font-black text-sm whitespace-nowrap transition-all cartoon-border-sm"
                  style={{
                    background: activeCategory === cat ? "var(--fido-dark)" : "white",
                    color: activeCategory === cat ? "var(--fido-yellow)" : "var(--fido-dark)",
                    transform: activeCategory === cat ? "scale(1.08)" : "scale(1)",
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* VIDEO GRID */}
            <h2 className="text-2xl font-black mb-4" style={{ fontFamily: "'Oswald', sans-serif", color: "var(--fido-dark)" }}>
              📺 РЕКОМЕНДУЕМ (СЕРЬЁЗНО)
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {VIDEOS.map((video, i) => (
                <div
                  key={video.id}
                  className={`cartoon-border rounded-2xl overflow-hidden cursor-pointer transition-all hover:scale-[1.02] hover:-rotate-1 animate-slide-up stagger-${Math.min(i + 1, 6)} bg-white`}
                  onClick={() => { playSound("boing"); setSelectedVideo(video); }}
                >
                  <div className="relative">
                    <img src={video.img} alt={video.title} className="w-full h-44 object-cover" />
                    <div
                      className="absolute bottom-2 right-2 px-2 py-0.5 rounded-lg text-xs font-black cartoon-border-sm"
                      style={{ background: "rgba(0,0,0,0.85)", color: "white" }}
                    >
                      {video.duration}
                    </div>
                    <div
                      className="absolute top-2 left-2 px-2 py-0.5 rounded-lg text-xs font-black cartoon-border-sm"
                      style={{ background: video.color, color: "var(--fido-dark)" }}
                    >
                      {video.tag}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-black text-sm leading-tight mb-2 line-clamp-2" style={{ color: "var(--fido-dark)" }}>{video.title}</h3>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-bold text-xs" style={{ color: video.color }}>{video.channel}</div>
                        <div className="text-xs text-gray-500 font-bold">{video.views} просмотров · {video.time}</div>
                      </div>
                      <button
                        onClick={e => { e.stopPropagation(); toggleLike(video.id); }}
                        className="flex items-center gap-1 px-3 py-1.5 rounded-xl font-black text-xs cartoon-border-sm transition-all hover:scale-110"
                        style={{
                          background: likedVideos.includes(video.id) ? "var(--fido-red)" : "var(--fido-yellow)",
                          color: "var(--fido-dark)"
                        }}
                      >
                        {likedVideos.includes(video.id) ? "❤️" : "🤍"} {video.likes}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ======== ШОРТСЫ ======== */}
        {activeTab === "Шортсы" && (
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl cartoon-border flex items-center justify-center text-2xl" style={{ background: "var(--fido-red)" }}>
                ⚡
              </div>
              <div>
                <h2 className="text-3xl font-black" style={{ fontFamily: "'Oswald', sans-serif", color: "var(--fido-dark)" }}>ШОРТСЫ ФИДОТУБ</h2>
                <p className="text-sm font-bold text-gray-500">Короткие видео, длинный смех 📱</p>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {SHORTS.map((short, i) => (
                <div
                  key={`${short.id}-${i}`}
                  className="cartoon-border rounded-2xl overflow-hidden cursor-pointer transition-all hover:scale-105 hover:rotate-1 animate-pop-in bg-white"
                  style={{ animationDelay: `${i * 0.07}s`, opacity: 0 }}
                  onClick={() => showNotif(`▶ Запускаем «${short.title}»... загрузка 99%... стоп.`)}
                >
                  <div className="relative">
                    <img src={short.img} alt={short.title} className="w-full h-52 object-cover" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity"
                      style={{ background: "rgba(0,0,0,0.4)" }}>
                      <div className="w-14 h-14 rounded-full flex items-center justify-center text-2xl cartoon-border" style={{ background: "white" }}>▶</div>
                    </div>
                    <div
                      className="absolute top-2 right-2 px-2 py-0.5 rounded-lg text-xs font-black cartoon-border-sm"
                      style={{ background: short.color, color: "var(--fido-dark)" }}
                    >
                      {short.views} 👁️
                    </div>
                  </div>
                  <div className="p-3">
                    <p className="font-black text-xs leading-tight" style={{ color: "var(--fido-dark)" }}>{short.title}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-3xl p-6 cartoon-border-thick text-center" style={{ background: "var(--fido-purple)", color: "white" }}>
              <div className="text-5xl mb-3 animate-float">📱</div>
              <h3 className="text-2xl font-black mb-2" style={{ fontFamily: "'Oswald', sans-serif" }}>СНЯЛ ШОРТС?</h3>
              <p className="font-bold opacity-90 mb-4">Выкладывай! Нам всё равно что. Главное весело.</p>
              <button
                className="px-6 py-3 rounded-2xl cartoon-border font-black text-sm hover:scale-105 transition-all"
                style={{ background: "var(--fido-yellow)", color: "var(--fido-dark)" }}
                onClick={() => showNotif("📱 Открываем камеру... извини, нет камеры.")}
              >
                + ЗАГРУЗИТЬ ШОРТС
              </button>
            </div>
          </div>
        )}

        {/* ======== ТРЕНДЫ ======== */}
        {activeTab === "Тренды" && (
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl cartoon-border flex items-center justify-center text-2xl animate-wiggle" style={{ background: "var(--fido-red)" }}>
                🔥
              </div>
              <div>
                <h2 className="text-3xl font-black" style={{ fontFamily: "'Oswald', sans-serif", color: "var(--fido-dark)" }}>ТРЕНДЫ ПРЯМО СЕЙЧАС</h2>
                <p className="text-sm font-bold text-gray-500">Это смотрят все. Вообще все. Даже твоя бабушка.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-3">
                {TRENDING.map((item, i) => (
                  <div
                    key={i}
                    className={`flex items-center gap-4 p-4 rounded-2xl cartoon-border bg-white cursor-pointer hover:scale-[1.01] transition-all animate-slide-up stagger-${i + 1}`}
                    onClick={() => showNotif(`📺 Открываем «${item.title}»... ${item.views} просмотров — неспроста!`)}
                  >
                    <div
                      className="w-12 h-12 rounded-2xl cartoon-border flex items-center justify-center text-xl font-black flex-shrink-0"
                      style={{ background: item.color, color: "white", fontFamily: "'Oswald', sans-serif" }}
                    >
                      #{item.pos}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-black text-sm leading-tight" style={{ color: "var(--fido-dark)" }}>{item.title}</h3>
                      <p className="text-xs font-bold" style={{ color: item.color }}>{item.channel}</p>
                    </div>
                    <div className="text-right">
                      <div className="font-black text-sm" style={{ color: "var(--fido-dark)" }}>{item.views}</div>
                      <div className="text-xs text-gray-400 font-bold">просмотров</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                <div className="rounded-2xl p-5 cartoon-border" style={{ background: "var(--fido-yellow)" }}>
                  <h3 className="font-black text-lg mb-3" style={{ fontFamily: "'Oswald', sans-serif" }}>📊 СТАТИСТИКА ДНЯ</h3>
                  {[
                    { label: "Видео загружено", val: "34,221" },
                    { label: "Лайков нажато", val: "500M+" },
                    { label: "Комментов «ПЕРВЫЙ»", val: "4,200" },
                    { label: "Котов засняли", val: "12,003" },
                  ].map((s, i) => (
                    <div key={i} className="flex justify-between py-2 border-b-2 border-dashed last:border-0" style={{ borderColor: "var(--fido-dark)" }}>
                      <span className="font-bold text-sm">{s.label}</span>
                      <span className="font-black text-sm">{s.val}</span>
                    </div>
                  ))}
                </div>

                <div className="rounded-2xl p-5 cartoon-border" style={{ background: "var(--fido-green)", color: "white" }}>
                  <h3 className="font-black text-lg mb-2" style={{ fontFamily: "'Oswald', sans-serif" }}>🏆 ВИДЕО ДНЯ</h3>
                  <div className="rounded-xl overflow-hidden cartoon-border-sm mb-3">
                    <img src={IMAGES.cat} alt="top" className="w-full h-32 object-cover" />
                  </div>
                  <p className="font-black text-sm leading-tight">КОТ НАУЧИЛСЯ ИГРАТЬ НА ГИТАРЕ — КОНЕЦ СВЕТА</p>
                  <p className="text-xs opacity-80 font-bold mt-1">МурМузыка · 22 млн просмотров</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ======== ПОДПИСКИ ======== */}
        {activeTab === "Подписки" && (
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl cartoon-border flex items-center justify-center text-2xl" style={{ background: "var(--fido-blue)" }}>
                🔔
              </div>
              <div>
                <h2 className="text-3xl font-black" style={{ fontFamily: "'Oswald', sans-serif", color: "var(--fido-dark)" }}>ТВОИ ПОДПИСКИ</h2>
                <p className="text-sm font-bold text-gray-500">
                  {subscribedChannels.length === 0
                    ? "Ты пока ни на кого не подписан. Стыд."
                    : `Подписан на ${subscribedChannels.length} канал(ов). Красавчик!`}
                </p>
              </div>
            </div>

            {subscribedChannels.length === 0 && (
              <div className="rounded-3xl p-10 text-center cartoon-border mb-8" style={{ background: "var(--fido-purple)", color: "white" }}>
                <div className="text-6xl mb-4 animate-float">😔</div>
                <h3 className="text-2xl font-black mb-2" style={{ fontFamily: "'Oswald', sans-serif" }}>ЗДЕСЬ ПУСТО КАК В ГОЛОВЕ</h3>
                <p className="font-bold opacity-80 mb-4">Подпишись на каналы и они появятся тут!</p>
                <button
                  className="px-6 py-3 rounded-2xl cartoon-border font-black text-sm hover:scale-105 transition-all"
                  style={{ background: "var(--fido-yellow)", color: "var(--fido-dark)" }}
                  onClick={() => setActiveTab("Каналы")}
                >
                  📡 ПЕРЕЙТИ К КАНАЛАМ
                </button>
              </div>
            )}

            {subscribedChannels.length > 0 && (
              <div className="flex gap-3 mb-6 overflow-x-auto pb-2">
                {subscribedChannels.map(name => {
                  const ch = CHANNELS.find(c => c.name === name);
                  return ch ? (
                    <div key={name} className="flex flex-col items-center gap-1 cursor-pointer hover:scale-105 transition-all flex-shrink-0">
                      <div className="w-14 h-14 rounded-2xl cartoon-border flex items-center justify-center text-2xl" style={{ background: ch.color }}>
                        {ch.emoji}
                      </div>
                      <span className="text-xs font-black text-center w-16 truncate" style={{ color: "var(--fido-dark)" }}>{ch.name}</span>
                    </div>
                  ) : null;
                })}
              </div>
            )}

            <h3 className="text-xl font-black mb-4" style={{ fontFamily: "'Oswald', sans-serif", color: "var(--fido-dark)" }}>
              {subscribedChannels.length > 0 ? "📺 НОВЫЕ ВИДЕО ОТ ТВОИХ:" : "📺 РЕКОМЕНДУЕМ ПОДПИСАТЬСЯ:"}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {VIDEOS
                .filter(v => subscribedChannels.length === 0 || subscribedChannels.includes(v.channel))
                .slice(0, 6)
                .map(video => (
                  <div
                    key={video.id}
                    className="cartoon-border rounded-2xl overflow-hidden cursor-pointer hover:scale-[1.02] transition-all bg-white"
                    onClick={() => setSelectedVideo(video)}
                  >
                    <div className="relative">
                      <img src={video.img} alt={video.title} className="w-full h-40 object-cover" />
                      <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded-lg text-xs font-black" style={{ background: "rgba(0,0,0,0.8)", color: "white" }}>{video.duration}</div>
                    </div>
                    <div className="p-3">
                      <h3 className="font-black text-sm line-clamp-2 mb-1" style={{ color: "var(--fido-dark)" }}>{video.title}</h3>
                      <div className="font-bold text-xs" style={{ color: video.color }}>{video.channel} · {video.views}</div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}

        {/* ======== КАНАЛЫ ======== */}
        {activeTab === "Каналы" && (
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl cartoon-border flex items-center justify-center text-2xl" style={{ background: "var(--fido-pink)" }}>
                📡
              </div>
              <div>
                <h2 className="text-3xl font-black" style={{ fontFamily: "'Oswald', sans-serif", color: "var(--fido-dark)" }}>ТОПОВЫЕ КАНАЛЫ</h2>
                <p className="text-sm font-bold text-gray-500">Самые лучшие (они сами так сказали)</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
              {CHANNELS.map((ch, i) => (
                <div
                  key={i}
                  className="cartoon-border rounded-3xl overflow-hidden bg-white animate-pop-in"
                  style={{ animationDelay: `${i * 0.1}s`, opacity: 0 }}
                >
                  <div className="h-24 relative" style={{ background: `linear-gradient(135deg, ${ch.color}, #1A1208)` }}>
                    <div className="absolute inset-0 flex items-center justify-center text-6xl opacity-20">{ch.emoji}</div>
                  </div>
                  <div className="px-5 pb-5">
                    <div
                      className="w-16 h-16 rounded-2xl cartoon-border flex items-center justify-center text-3xl -mt-8 mb-3"
                      style={{ background: ch.color }}
                    >
                      {ch.emoji}
                    </div>
                    <div className="flex items-start gap-2 mb-1">
                      <h3 className="font-black text-base" style={{ color: "var(--fido-dark)" }}>{ch.name}</h3>
                      {ch.verified && <span className="text-sm mt-0.5">✅</span>}
                    </div>
                    <p className="font-black text-sm mb-1" style={{ color: ch.color }}>{ch.subs} подписчиков</p>
                    <p className="text-xs text-gray-400 font-bold mb-4">{ch.desc}</p>
                    <button
                      onClick={() => toggleSub(ch.name)}
                      className="w-full py-2.5 rounded-xl cartoon-border font-black text-sm transition-all hover:scale-105"
                      style={{
                        background: subscribedChannels.includes(ch.name) ? "var(--fido-dark)" : ch.color,
                        color: subscribedChannels.includes(ch.name) ? "var(--fido-yellow)" : "white",
                      }}
                    >
                      {subscribedChannels.includes(ch.name) ? "✅ ПОДПИСАН!" : "🔔 ПОДПИСАТЬСЯ"}
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-3xl p-8 cartoon-border-thick text-center" style={{ background: "var(--fido-orange)", color: "white" }}>
              <div className="text-5xl mb-3 animate-float">🎬</div>
              <h3 className="text-2xl font-black mb-2" style={{ fontFamily: "'Oswald', sans-serif" }}>СОЗДАЙ СВОЙ КАНАЛ!</h3>
              <p className="font-bold opacity-90 mb-4">Ты тоже можешь стать звездой FidoTube. Или не стать. Но попробовать можно.</p>
              <button
                className="px-8 py-3 rounded-2xl cartoon-border font-black hover:scale-105 transition-all"
                style={{ background: "var(--fido-yellow)", color: "var(--fido-dark)" }}
                onClick={() => showNotif("🚀 Канал создаётся... имя придумай сам.")}
              >
                🚀 СОЗДАТЬ КАНАЛ
              </button>
            </div>
          </div>
        )}

        {/* ======== ВИГИ ======== */}
        {activeTab === "ВИГИ" && (
          <div>
            {/* CHANNEL BANNER */}
            <div className="rounded-3xl overflow-hidden mb-6 cartoon-border-thick">
              <div className="h-36 relative flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)" }}>
                <p className="font-bold text-center px-8 italic" style={{ color: "#a78bfa" }}>
                  я не придумал какая будет шапка поэтому вот хех
                </p>
              </div>

              {/* CHANNEL INFO */}
              <div className="p-5 flex flex-col sm:flex-row gap-5 items-start" style={{ background: "#0f0f0f" }}>
                <div className="w-24 h-24 rounded-full overflow-hidden cartoon-border-thick flex-shrink-0 -mt-12">
                  <img
                    src="https://cdn.poehali.dev/projects/ecf6af65-b161-4037-abda-c2a2eb32f3ea/bucket/e18677b3-ea84-4abd-ac67-3c555674f419.jpg"
                    alt="ВИГИ"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-black text-white mb-1" style={{ fontFamily: "'Oswald', sans-serif" }}>ВИГИ</h2>
                  <p className="text-sm font-bold mb-2" style={{ color: "#aaa" }}>
                    @onweeqee · 312 подписчиков · 24 видео
                  </p>
                  <p className="text-sm font-bold mb-3" style={{ color: "#ccc" }}>
                    я виги а ты нет(
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <a href="https://t.me/neweeqee" target="_blank" rel="noreferrer"
                      className="px-4 py-2 rounded-xl cartoon-border-sm font-black text-sm hover:scale-105 transition-all"
                      style={{ background: "#2563eb", color: "white" }}>
                      ✈️ t.me/neweeqee
                    </a>
                    <a href="https://youtube.com/@onweeqee" target="_blank" rel="noreferrer"
                      className="px-4 py-2 rounded-xl cartoon-border-sm font-black text-sm hover:scale-105 transition-all"
                      style={{ background: "#FF0000", color: "white" }}>
                      ▶ YouTube
                    </a>
                    <button
                      onClick={() => toggleSub("ВИГИ")}
                      className="px-5 py-2 rounded-xl cartoon-border font-black text-sm hover:scale-105 transition-all"
                      style={{
                        background: subscribedChannels.includes("ВИГИ") ? "#333" : "white",
                        color: subscribedChannels.includes("ВИГИ") ? "#aaa" : "#0f0f0f",
                      }}>
                      {subscribedChannels.includes("ВИГИ") ? "✅ Подписан" : "🔔 Подписаться"}
                    </button>
                  </div>
                </div>
              </div>

              {/* CHANNEL TABS */}
              <div className="flex gap-1 px-5 pb-4 overflow-x-auto" style={{ background: "#0f0f0f", borderTop: "1px solid #333" }}>
                {["Видео", "Shorts", "Плейлисты", "Записи"].map((t, i) => (
                  <button key={t}
                    className="px-5 py-2.5 font-black text-sm whitespace-nowrap transition-all"
                    style={{
                      color: i === 0 ? "white" : "#aaa",
                      borderBottom: i === 0 ? "3px solid white" : "3px solid transparent",
                    }}>
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* SORT TABS */}
            <div className="flex gap-2 mb-5">
              {["Новые", "Популярные", "Старые"].map((s, i) => (
                <button key={s}
                  className="px-4 py-2 rounded-full font-black text-sm cartoon-border-sm transition-all hover:scale-105"
                  style={{
                    background: i === 0 ? "white" : "transparent",
                    color: i === 0 ? "var(--fido-dark)" : "var(--fido-dark)",
                    border: "2px solid var(--fido-dark)",
                  }}>
                  {s}
                </button>
              ))}
            </div>

            {/* REAL VIDEOS FROM SCREENSHOT */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                {
                  title: "Я Показал Свой Выдуманный Банк Илье Nowkie",
                  views: "80 просмотров",
                  time: "7 дней назад",
                  duration: "5:35",
                  img: "https://cdn.poehali.dev/projects/ecf6af65-b161-4037-abda-c2a2eb32f3ea/bucket/9dc6ae08-fb49-47bd-b1ec-626ce483149f.jpg",
                  imgPos: "center",
                },
                {
                  title: "я Прорекламировал Выдуманный Банк",
                  views: "1,9 тыс. просмотров",
                  time: "1 месяц назад",
                  duration: "5:19",
                  img: "https://cdn.poehali.dev/projects/ecf6af65-b161-4037-abda-c2a2eb32f3ea/bucket/4c5cb82c-e028-479a-a247-a3f0238b7dec.jpg",
                  imgPos: "center",
                },
                {
                  title: "Я Внедрился В Видео Ильи Новки!",
                  views: "2,6 тыс. просмотров",
                  time: "1 месяц назад",
                  duration: "6:37",
                  img: "https://cdn.poehali.dev/projects/ecf6af65-b161-4037-abda-c2a2eb32f3ea/bucket/e7379599-99eb-4df7-89be-7141639b407d.jpg",
                  imgPos: "center",
                },
              ].map((v, i) => (
                <div key={i}
                  className="rounded-2xl overflow-hidden cursor-pointer hover:scale-[1.02] transition-all animate-pop-in"
                  style={{ background: "#1a1a1a", animationDelay: `${i * 0.08}s`, opacity: 0 }}
                  onClick={() => showNotif(`▶ «${v.title}» — смотри на YouTube @onweeqee!`)}
                >
                  <div className="relative">
                    <div className="w-full h-44 overflow-hidden" style={{ background: "#333" }}>
                      <img src={v.img} alt={v.title}
                        className="w-full h-full object-cover"
                        style={{ objectPosition: v.imgPos }}
                      />
                    </div>
                    <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded text-xs font-black"
                      style={{ background: "rgba(0,0,0,0.85)", color: "white" }}>
                      {v.duration}
                    </div>
                  </div>
                  <div className="p-3">
                    <h3 className="font-black text-sm leading-tight mb-2 line-clamp-2" style={{ color: "white" }}>{v.title}</h3>
                    <p className="text-xs font-bold" style={{ color: "#aaa" }}>ВИГИ · {v.views} · {v.time}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-8 rounded-3xl p-6 cartoon-border-thick text-center" style={{ background: "var(--fido-purple)", color: "white" }}>
              <div className="text-4xl mb-3">👾</div>
              <h3 className="text-xl font-black mb-2" style={{ fontFamily: "'Oswald', sans-serif" }}>ЭТО НАСТОЯЩИЙ КАНАЛ!</h3>
              <p className="font-bold opacity-90 mb-4 text-sm">Подпишись на YouTube — там реальные видео про выдуманные банки и прочий хаос</p>
              <a href="https://youtube.com/@onweeqee" target="_blank" rel="noreferrer"
                className="inline-block px-8 py-3 rounded-2xl cartoon-border font-black hover:scale-105 transition-all"
                style={{ background: "#FF0000", color: "white" }}>
                ▶ ПЕРЕЙТИ НА YOUTUBE
              </a>
            </div>
          </div>
        )}

      </main>

      {/* ===== VIDEO MODAL ===== */}
      {selectedVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: "rgba(0,0,0,0.75)" }}
          onClick={e => { if (e.target === e.currentTarget) setSelectedVideo(null); }}
        >
          <div className="w-full max-w-2xl rounded-3xl cartoon-border-thick overflow-hidden bg-white animate-pop-in max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <img src={selectedVideo.img} alt={selectedVideo.title} className="w-full h-72 object-cover" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className="w-20 h-20 rounded-full cartoon-border-thick flex items-center justify-center text-3xl cursor-pointer hover:scale-110 transition-all"
                  style={{ background: "rgba(255,255,255,0.9)" }}
                  onClick={() => showNotif("▶ Видео запущено! Ну почти.")}
                >
                  ▶
                </div>
              </div>
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute top-3 right-3 w-10 h-10 rounded-full cartoon-border flex items-center justify-center font-black"
                style={{ background: "var(--fido-red)", color: "white" }}
              >
                ✕
              </button>
              <div className="absolute top-3 left-3 px-3 py-1 rounded-xl text-xs font-black cartoon-border-sm"
                style={{ background: selectedVideo.color, color: "var(--fido-dark)" }}>
                {selectedVideo.tag}
              </div>
            </div>

            <div className="p-5">
              <h2
                className="text-xl font-black mb-2"
                style={{ color: "var(--fido-dark)", fontFamily: "'Oswald', sans-serif" }}
              >
                {selectedVideo.title}
              </h2>
              <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                <div>
                  <span className="font-black text-sm" style={{ color: selectedVideo.color }}>{selectedVideo.channel}</span>
                  <span className="text-xs text-gray-400 font-bold ml-2">{selectedVideo.views} просмотров</span>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => toggleLike(selectedVideo.id)}
                    className="px-4 py-2 rounded-xl cartoon-border font-black text-sm transition-all hover:scale-105"
                    style={{
                      background: likedVideos.includes(selectedVideo.id) ? "var(--fido-red)" : "var(--fido-yellow)",
                      color: "var(--fido-dark)"
                    }}
                  >
                    {likedVideos.includes(selectedVideo.id) ? "❤️" : "🤍"} {selectedVideo.likes}
                  </button>
                  <button
                    className="px-4 py-2 rounded-xl cartoon-border font-black text-sm transition-all hover:scale-105"
                    style={{ background: "var(--fido-blue)", color: "white" }}
                    onClick={() => showNotif("↗ Ссылка скопирована! (не скопирована)")}
                  >
                    ↗ Поделиться
                  </button>
                  <button
                    className="px-4 py-2 rounded-xl cartoon-border font-black text-sm transition-all hover:scale-105"
                    style={{ background: "var(--fido-green)", color: "white" }}
                    onClick={() => toggleSub(selectedVideo.channel)}
                  >
                    {subscribedChannels.includes(selectedVideo.channel) ? "✅" : "🔔"}
                  </button>
                </div>
              </div>

              {/* COMMENTS */}
              <div style={{ borderTop: "3px solid var(--fido-dark)" }} className="pt-4">
                <h3 className="font-black text-base mb-3" style={{ fontFamily: "'Oswald', sans-serif" }}>💬 КОММЕНТАРИИ (все умные)</h3>

                <div className="flex gap-2 mb-4">
                  <div
                    className="w-9 h-9 rounded-full cartoon-border flex items-center justify-center text-lg flex-shrink-0"
                    style={{ background: "var(--fido-pink)" }}
                  >
                    😎
                  </div>
                  <div className="flex-1 flex gap-2">
                    <input
                      value={commentText}
                      onChange={e => setCommentText(e.target.value)}
                      onKeyDown={e => {
                        if (e.key === "Enter" && commentText.trim()) {
                          playSound("pop");
                          setSubmittedComment(commentText);
                          setCommentText("");
                        }
                      }}
                      placeholder="Напиши что-нибудь мудрое..."
                      className="flex-1 px-3 py-2 rounded-xl cartoon-border-sm text-sm font-bold outline-none"
                      style={{ background: "#fff8e8" }}
                    />
                    <button
                      onClick={() => { if (commentText.trim()) { playSound("pop"); setSubmittedComment(commentText); setCommentText(""); } }}
                      className="px-3 py-2 rounded-xl cartoon-border-sm font-black text-sm hover:scale-105 transition-all"
                      style={{ background: "var(--fido-green)", color: "white" }}
                    >
                      ОК!
                    </button>
                  </div>
                </div>

                {submittedComment && (
                  <div className="flex gap-2 mb-3 animate-pop-in">
                    <div className="w-9 h-9 rounded-full cartoon-border flex items-center justify-center text-lg flex-shrink-0"
                      style={{ background: "var(--fido-pink)" }}>😎</div>
                    <div className="flex-1 p-3 rounded-xl cartoon-border-sm" style={{ background: "#e8fff4" }}>
                      <div className="font-black text-xs mb-1" style={{ color: "var(--fido-green)" }}>Ты · только что</div>
                      <p className="font-bold text-sm">{submittedComment}</p>
                    </div>
                  </div>
                )}

                <div className="space-y-3">
                  {COMMENTS.map((c, i) => (
                    <div key={i} className="flex gap-3">
                      <div
                        className="w-9 h-9 rounded-full cartoon-border flex items-center justify-center text-lg flex-shrink-0"
                        style={{ background: "var(--fido-yellow)" }}
                      >
                        {c.avatar}
                      </div>
                      <div className="flex-1">
                        <div className="font-black text-xs mb-0.5" style={{ color: "var(--fido-orange)" }}>{c.user}</div>
                        <p className="font-bold text-sm text-gray-700">{c.text}</p>
                        <button className="text-xs font-bold text-gray-400 mt-1 hover:text-red-400 transition-colors">
                          ❤️ {c.likes.toLocaleString()}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ===== FOOTER ===== */}
      <footer className="mt-12" style={{ borderTop: "4px solid var(--fido-dark)", background: "var(--fido-dark)", color: "white" }}>
        <div className="max-w-screen-2xl mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
            <div>
              <img
                src="https://cdn.poehali.dev/projects/ecf6af65-b161-4037-abda-c2a2eb32f3ea/bucket/dafd1d89-eca8-4c2e-a810-f7545e8d6f8c.png"
                alt="FidoTube"
                className="h-14 w-auto object-contain mb-2"
                style={{ filter: "brightness(0) invert(1) drop-shadow(1px 1px 0 rgba(255,220,50,0.5))" }}
              />
              <p className="text-sm opacity-70 font-bold">Лучший видеохостинг для собак и всех остальных тоже.</p>
            </div>
            {[
              { title: "СМОТРЕТЬ", items: ["Главная", "Шортсы", "Тренды", "Подписки"] },
              { title: "О НАС", items: ["Кто мы", "Карьера", "Реклама", "Для разработчиков"] },
              { title: "ПРОЧЕЕ", items: ["Правила", "Конфиденциальность", "Жалоба на кота", "FAQ"] },
            ].map((col, i) => (
              <div key={i}>
                <div className="font-black text-sm mb-3" style={{ color: "var(--fido-orange)" }}>{col.title}</div>
                <ul className="space-y-1.5">
                  {col.items.map((item, j) => (
                    <li key={j}>
                      <span className="text-sm opacity-60 font-bold hover:opacity-100 cursor-pointer transition-opacity">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4" style={{ borderTop: "2px dashed #333" }}>
            <p className="text-xs opacity-50 font-bold">© 2024 FidoTube. Все права принадлежат Псу.</p>
            <div className="flex gap-2">
              {["🐦", "📸", "💬", "🎵"].map((emoji, i) => (
                <button
                  key={i}
                  className="w-8 h-8 rounded-lg cartoon-border flex items-center justify-center text-sm hover:scale-110 transition-all"
                  style={{ background: "rgba(255,255,255,0.1)" }}
                  onClick={() => showNotif(`${emoji} Социальная сеть временно занята.`)}
                >
                  {emoji}
                </button>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import {
  brand,
  contact,
  gallery,
  highlights,
  products,
  processSteps,
  stats,
} from "@/data/site";

const navItems = [
  { href: "#urunler", label: "Ürünler" },
  { href: "#hikaye", label: "Hikaye" },
  { href: "#galeri", label: "Galeri" },
  { href: "#iletisim", label: "İletişim" },
];

function SectionTitle({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: string;
  body: string;
}) {
  return (
    <div className="max-w-2xl">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-[color:var(--accent)]">
        {eyebrow}
      </p>
      <h2 className="display text-3xl leading-tight text-[color:var(--ink)] sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 max-w-xl text-sm leading-7 text-[color:var(--muted)] sm:text-base">
        {body}
      </p>
    </div>
  );
}

export default function Home() {
  const desktopHeroVideoRef = useRef<HTMLVideoElement | null>(null);
  const mobileHeroVideoRef = useRef<HTMLVideoElement | null>(null);
  const [heroSoundOn, setHeroSoundOn] = useState(false);

  const enableHeroSound = async () => {
    const video = desktopHeroVideoRef.current ?? mobileHeroVideoRef.current;
    if (!video) return;
    video.muted = false;
    video.volume = 1;
    try {
      await video.play();
      setHeroSoundOn(true);
    } catch {
      setHeroSoundOn(false);
    }
  };

  return (
    <main className="grain overflow-hidden">
      <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-4 pb-10 pt-4 sm:px-6 lg:px-8">
        <header className="sticky top-3 z-50 mb-6">
          <div className="section-frame rounded-full px-4 py-3 sm:px-5">
            <div className="flex items-center justify-between gap-4">
              <Link href="/" className="group flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[linear-gradient(135deg,rgba(31,111,122,1),rgba(49,95,138,0.95))] text-sm font-semibold text-white shadow-[0_16px_40px_rgba(31,111,122,0.18)]">
                  SD
                </span>
                <div className="leading-tight">
                  <p className="display text-lg text-[color:var(--ink)]">
                    {brand.name}
                  </p>
                  <p className="hidden text-xs text-[color:var(--muted)] sm:block">
                    Doğal süt ve köy ürünleri
                  </p>
                </div>
              </Link>

              <nav className="hidden items-center gap-6 text-sm font-medium text-[color:var(--muted)] md:flex">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="transition hover:text-[color:var(--ink)]"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>

              <a
                href={`https://wa.me/90${contact.whatsapp
                  .replace(/\D/g, "")
                  .replace(/^0/, "")}?text=${encodeURIComponent(
                  "Merhaba, Sarısuat Doğal Ürünler hakkında bilgi almak istiyorum."
                )}`}
                className="inline-flex items-center gap-2 rounded-full bg-[color:var(--ink)] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#1f1811]"
              >
                WhatsApp
                <span className="hidden sm:inline">sipariş</span>
              </a>
            </div>
          </div>
        </header>

        <section className="grid gap-6 lg:grid-cols-[1.02fr_0.98fr] lg:items-stretch">
          <div className="section-frame relative overflow-hidden rounded-[2.5rem] p-5 sm:p-7 lg:p-10">
            <div className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,rgba(31,111,122,0.96),rgba(49,95,138,0.78),rgba(87,164,181,0.88))]" />

            <div className="absolute inset-x-0 bottom-0 top-16 pointer-events-none">
              <div className="absolute right-0 bottom-0 hidden h-full w-[44%] p-5 lg:block">
                <div className="relative ml-auto h-full w-full max-w-[360px] overflow-hidden rounded-[2.4rem] border border-white/55 bg-white/35 shadow-[0_30px_80px_rgba(18,34,42,0.14)]">
                  <video
                    ref={desktopHeroVideoRef}
                    className="absolute inset-0 h-full w-full object-cover"
                    autoPlay
                    loop
                    playsInline
                    preload="auto"
                    poster="/videos/koyumuzden-poster.jpg"
                  >
                    <source src="/videos/koyumuzden.mp4" type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(18,34,42,0.02),rgba(18,34,42,0.38))]" />
                  <div className="absolute left-4 top-4 rounded-full border border-white/25 bg-white/14 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.3em] text-white/90 backdrop-blur-md">
                    Köyümüzden
                  </div>
                  <button
                    type="button"
                    onClick={enableHeroSound}
                    className="absolute bottom-4 left-4 rounded-full border border-white/25 bg-white/16 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-white backdrop-blur-md transition hover:bg-white/24"
                  >
                    {heroSoundOn ? "Ses açık" : "Sesi aç"}
                  </button>
                </div>
              </div>
            </div>

            <div className="relative z-10 flex flex-wrap gap-2 pr-0 lg:pr-[42%]">
              {highlights.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/60 bg-white/80 px-3 py-1 text-xs font-medium tracking-[0.06em] text-[color:var(--muted)] shadow-[0_10px_24px_rgba(25,21,18,0.04)]"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="relative z-10 mt-8 max-w-2xl pr-0 lg:pr-[42%]">
              <p className="text-xs font-semibold uppercase tracking-[0.45em] text-[color:var(--accent)]">
                Sivas köy yaşamından ilham alan marka
              </p>
              <h1 className="display mt-4 text-4xl leading-[0.98] text-[color:var(--ink)] sm:text-5xl lg:text-[4.9rem]">
                Sarısuat Doğal Ürünler, köy emeğini sakin bir zarafetle
                sofraya taşıyor.
              </h1>
              <p className="mt-6 max-w-xl text-base leading-8 text-[color:var(--muted)] sm:text-lg">
                {brand.description}
              </p>
            </div>

            <div className="relative z-10 mt-8 flex flex-wrap items-center gap-3 pr-0 lg:pr-[42%]">
              <a
                href="#urunler"
                className="inline-flex items-center justify-center rounded-full bg-[linear-gradient(135deg,rgba(31,111,122,1),rgba(49,95,138,0.95))] px-5 py-3 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(31,111,122,0.16)] transition hover:-translate-y-0.5"
              >
                Ürünleri keşfet
              </a>
              <a
                href="#iletisim"
                className="inline-flex items-center justify-center rounded-full border border-[color:var(--line)] bg-white/70 px-5 py-3 text-sm font-semibold text-[color:var(--ink)] transition hover:bg-white"
              >
                Bize ulaş
              </a>
              <span className="text-xs font-medium uppercase tracking-[0.28em] text-[color:var(--muted)]">
                Günlük üretim / Doğrudan satış
              </span>
            </div>

            <div className="relative z-10 mt-8 lg:hidden">
              <div className="mx-auto w-full max-w-[270px] overflow-hidden rounded-[2rem] border border-white/55 bg-white/35 shadow-[0_24px_60px_rgba(18,34,42,0.14)]">
                <div className="relative aspect-[9/16] w-full">
                  <video
                    ref={mobileHeroVideoRef}
                    className="absolute inset-0 h-full w-full object-cover"
                    autoPlay
                    loop
                    playsInline
                    preload="auto"
                    poster="/videos/koyumuzden-poster.jpg"
                  >
                    <source src="/videos/koyumuzden.mp4" type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(18,34,42,0.02),rgba(18,34,42,0.38))]" />
                  <div className="absolute left-4 top-4 rounded-full border border-white/25 bg-white/14 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.3em] text-white/90 backdrop-blur-md">
                    Köyümüzden
                  </div>
                  <button
                    type="button"
                    onClick={enableHeroSound}
                    className="absolute bottom-4 left-4 rounded-full border border-white/25 bg-white/16 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-white backdrop-blur-md transition hover:bg-white/24"
                  >
                    {heroSoundOn ? "Ses açık" : "Sesi aç"}
                  </button>
                </div>
              </div>
            </div>

            <div className="relative z-10 mt-10 grid gap-3 sm:grid-cols-3 lg:pr-[42%]">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-[1.8rem] border border-white/60 bg-white/82 p-4 shadow-[0_18px_45px_rgba(18,34,42,0.05)]"
                >
                  <p className="display text-2xl text-[color:var(--ink)]">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[color:var(--muted)]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="relative z-10 mt-8 grid gap-3 border-t border-[color:var(--line)] pt-6 sm:grid-cols-[1.2fr_0.8fr] lg:pr-[42%]">
              <div className="rounded-[1.6rem] bg-[linear-gradient(135deg,rgba(255,255,255,0.88),rgba(255,250,242,0.7))] p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--accent)]">
                  Kısa marka notu
                </p>
                <p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">
                  Doğal, sıcak ve güven veren bir satış deneyimi. İlk izlenim
                  tıpkı iyi bir ürün gibi sade ama unutulmaz olmalı.
                </p>
              </div>
              <div className="rounded-[1.6rem] border border-[color:var(--line)] bg-[color:var(--ink)] p-5 text-white shadow-[0_22px_50px_rgba(18,34,42,0.18)]">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
                  Bugünün vitrini
                </p>
                <p className="display mt-3 text-2xl leading-tight">
                  Sakin, doğal ve premium hissiyat.
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="section-frame relative min-h-[660px] overflow-hidden rounded-[2.5rem]">
              <Image
                src="/images/village-cow.jpg"
                alt="Köy merasında otlayan inek"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 52vw"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(9,20,24,0.06)_0%,rgba(9,20,24,0.15)_36%,rgba(9,20,24,0.62)_100%)]" />
              <div className="absolute left-5 top-5 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-white/90 backdrop-blur-md">
                Köyden çıkan tazelik
              </div>
              <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                <p className="text-xs uppercase tracking-[0.35em] text-white/75">
                  Doğal üretim
                </p>
                <h2 className="display mt-3 max-w-md text-3xl leading-tight sm:text-4xl">
                  Doğanın ritmiyle büyüyen üretim, daha ilk karede güven veriyor.
                </h2>
              </div>
            </div>

            <div className="grid gap-4">
              <div className="section-frame relative min-h-[300px] overflow-hidden rounded-[2rem]">
                <Image
                  src="/images/owner-road.jpg"
                  alt="Yolda çekilmiş samimi bir çiftlik karesi"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 25vw"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.02),rgba(0,0,0,0.45))]" />
                <div className="absolute left-4 top-4 rounded-full border border-white/20 bg-white/15 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md">
                  Saha görüntüsü
                </div>
                <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                  <p className="display text-2xl">Hareketli ama sakin bir kırsal tempo</p>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                <div className="section-frame relative min-h-[170px] overflow-hidden rounded-[2rem]">
                  <Image
                    src="/images/barn-selfie.jpg"
                    alt="Ahır içinde çekilmiş samimi kare"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 16vw"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.02),rgba(0,0,0,0.42))]" />
                  <div className="absolute inset-x-4 bottom-4 rounded-[1.25rem] border border-white/20 bg-white/88 p-4 backdrop-blur-md">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[color:var(--accent)]">
                      Çiftlik içi
                    </p>
                    <p className="mt-1 text-sm text-[color:var(--muted)]">
                      Marka hikayesini destekleyen gerçek bir görüntü
                    </p>
                  </div>
                </div>

                <div className="section-frame relative min-h-[170px] overflow-hidden rounded-[2rem]">
                  <Image
                    src="/images/owner-rock.jpg"
                    alt="Köy doğasında çekilmiş bir portre"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 16vw"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.02),rgba(0,0,0,0.35))]" />
                  <div className="absolute right-4 top-4 rounded-full border border-white/20 bg-[color:var(--accent-2)] px-3 py-1 text-xs font-semibold text-white shadow-[0_12px_30px_rgba(49,95,138,0.22)]">
                    Portre
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="urunler" className="mt-6 rounded-[2.25rem] bg-[color:var(--paper-soft)] px-5 py-10 shadow-[0_18px_60px_rgba(55,35,18,0.06)] sm:px-7 lg:px-10">
          <SectionTitle
            eyebrow="Ürünler"
            title="Küçük ama güçlü bir vitrin kuruyoruz."
            body="Bu ilk sürümde ürünleri görsel odaklı, sade ve iştah açıcı bir düzenle gösteriyoruz. Daha sonra gerçek stok, gramaj ve fiyat bilgileri kolayca eklenebilir."
          />

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {products.map((product, index) => (
              <article
                key={product.title}
                className="section-frame group overflow-hidden rounded-[1.75rem]"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/56 via-black/15 to-transparent" />
                  <div className="absolute left-4 right-4 top-4 flex items-center justify-between">
                    <span className="rounded-full bg-white/82 px-3 py-1 text-xs font-semibold text-[color:var(--ink)] backdrop-blur">
                      0{index + 1}
                    </span>
                    <span className="rounded-full bg-[color:var(--ink)]/70 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                      Yeni vitrin
                    </span>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                    <h3 className="display text-2xl">{product.title}</h3>
                  </div>
                </div>
                <div className="space-y-3 p-5">
                  <p className="text-sm leading-7 text-[color:var(--muted)]">
                    {product.body}
                  </p>
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[color:var(--accent)]">
                    {product.note}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="hikaye" className="mt-6 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="section-frame relative min-h-[560px] overflow-hidden rounded-[2.25rem]">
            <Image
              src="/images/cheese-cellar.jpg"
              alt="Olgunlaşan peynirler"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/54 via-black/12 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 text-white">
              <p className="text-xs uppercase tracking-[0.35em] text-white/80">
                Üretim hikayesi
              </p>
              <h2 className="display mt-2 text-3xl sm:text-4xl">
                Köyde başlayan emek, şehirde güven veren marka diline dönüşüyor.
              </h2>
            </div>
          </div>

          <div className="section-frame rounded-[2.25rem] p-6 sm:p-8 lg:p-10">
            <SectionTitle
              eyebrow="Nasıl çalışıyoruz?"
              title="Sütü bekletmeden, ürünü yormadan, lezzeti sade tutarak."
              body="Bu bölüm hem marka güveni hem de satın alma kararı için kritik. Burada üretim sürecini samimi ama profesyonel bir dille anlatıyoruz."
            />

            <div className="mt-8 grid gap-4">
              {processSteps.map((step) => (
                <div
                  key={step.title}
                  className="rounded-3xl border border-[color:var(--line)] bg-white/70 p-5"
                >
                  <p className="display text-2xl text-[color:var(--accent)]">
                    {step.title}
                  </p>
                  <p className="mt-2 text-sm leading-7 text-[color:var(--muted)] sm:text-base">
                    {step.body}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-[1.75rem] bg-[linear-gradient(135deg,rgba(31,111,122,0.14),rgba(49,95,138,0.12))] p-5 sm:p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[color:var(--accent)]">
                Kısa not
              </p>
              <p className="mt-3 text-base leading-8 text-[color:var(--ink)]">
                Sarısuat Doğal Ürünler için hedefimiz, &ldquo;köy ürünü&rdquo;
                algısını nostaljiye sıkıştırmadan modern, düzenli ve satın
                alınabilir bir marka haline getirmek.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-6 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="section-frame rounded-[2.25rem] p-6 sm:p-8 lg:p-10">
            <SectionTitle
              eyebrow="Neden Sarısuat?"
              title="Güven, sadelik ve iştah açan görsel dil aynı yerde buluşuyor."
              body="Bu alan markanın satış argümanlarını kısa ve net anlatır. Mobilde hızlı okunur, görsel olarak da yorucu olmaz."
            />

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                {
                  title: "Doğrudan üretim",
                  body: "Aracı kalabalığını azaltan, üreticiyle daha yakın bir satış ilişkisi.",
                },
                {
                  title: "Sıcak sunum",
                  body: "Köy samimiyetini koruyup tasarımı modern tutan bir vitrin.",
                },
                {
                  title: "Kısa tedarik",
                  body: "Tazeliği öne çıkaran, hızlı dönüşe uygun sade operasyon kurgusu.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-[1.6rem] border border-[color:var(--line)] bg-white/75 p-5"
                >
                  <p className="display text-2xl text-[color:var(--ink)]">
                    {item.title}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <aside className="section-frame overflow-hidden rounded-[2.25rem]">
            <div className="relative min-h-[420px]">
              <Image
                src="/images/milk-bottle.jpg"
                alt="Sarısuat Doğal Ürünler için süt sunumu"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 30vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/12 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                <p className="text-xs uppercase tracking-[0.35em] text-white/80">
                  Marka hissi
                </p>
                <p className="display mt-2 text-3xl leading-tight">
                  Sade, güvenli ve iştah açan bir ilk izlenim.
                </p>
              </div>
            </div>
          </aside>
        </section>

        <section id="galeri" className="mt-6 rounded-[2.25rem] bg-[color:var(--paper-soft)] px-5 py-10 sm:px-7 lg:px-10">
          <SectionTitle
            eyebrow="Galeri"
            title="Gerçek kareler, markayı daha hızlı anlatır."
            body="Bu bölümde WhatsApp’tan gelen fotoğrafları ve video karelerini öne çıkarıyoruz. Sonradan yeni çekimler geldikçe burayı kolayca güncelleriz."
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {gallery.map((item, index) => (
              <article
                key={item.title}
                className={`section-frame group overflow-hidden rounded-[1.75rem] ${
                  index === 0 || index === 3 ? "xl:col-span-2" : ""
                }`}
              >
                <div className={`relative overflow-hidden ${index === 0 || index === 3 ? "aspect-[16/10]" : "aspect-[4/5]"}`}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-[1.04]"
                    sizes="(max-width: 1280px) 100vw, 35vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/54 via-black/8 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                    <h3 className="display text-2xl">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-white/85">
                      {item.body}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          id="iletisim"
          className="mt-6 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]"
        >
          <div className="section-frame rounded-[2.25rem] p-6 sm:p-8 lg:p-10">
            <SectionTitle
              eyebrow="İletişim"
              title="Sipariş, konum ve hızlı dönüş için tek bir blok."
              body="İlk sürümde bile ziyaretçi burada ne yapacağını hemen anlar. Sonraki aşamada gerçek telefon, WhatsApp ve harita bilgilerini ekleriz."
            />

            <div className="mt-8 grid gap-3">
              <a
                href={`tel:${contact.phone.replace(/\s/g, "")}`}
                className="rounded-3xl border border-[color:var(--line)] bg-white/75 p-5 transition hover:bg-white"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--accent)]">
                  Telefon
                </p>
                <p className="mt-2 text-lg font-semibold text-[color:var(--ink)]">
                  {contact.phone}
                </p>
              </a>

              <a
                href={`mailto:${contact.email}`}
                className="rounded-3xl border border-[color:var(--line)] bg-white/75 p-5 transition hover:bg-white"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--accent)]">
                  E-posta
                </p>
                <p className="mt-2 text-lg font-semibold text-[color:var(--ink)]">
                  {contact.email}
                </p>
              </a>

              <div className="rounded-3xl border border-[color:var(--line)] bg-white/75 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--accent)]">
                  Konum
                </p>
                <p className="mt-2 text-lg font-semibold text-[color:var(--ink)]">
                  {contact.location}
                </p>
                <p className="mt-2 text-sm leading-7 text-[color:var(--muted)]">
                  Köy üretimi, doğrudan satış ve ziyaretçi dostu bir düzen için
                  temel adres alanı.
                </p>
              </div>
            </div>
          </div>

          <div className="section-frame overflow-hidden rounded-[2.25rem]">
            <div className="grid min-h-full lg:grid-rows-[1fr_auto]">
              <div className="relative min-h-[320px]">
                <Image
                  src="/images/cows-field.jpg"
                  alt="Sivas'ta doğanın içinde üretim"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 55vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                <div className="absolute left-0 top-0 p-6">
                  <span className="rounded-full bg-white/82 px-3 py-1 text-xs font-semibold text-[color:var(--ink)] backdrop-blur">
                    Hızlı iletişim
                  </span>
                </div>
                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <h3 className="display text-3xl sm:text-4xl">
                    Bir sonraki adım, gerçek bilgilerle bu vitrini markaya
                    çevirmek.
                  </h3>
                </div>
              </div>

              <div className="grid gap-3 border-t border-[color:var(--line)] bg-white/60 p-5 sm:grid-cols-3">
                <a
                  href={`https://wa.me/90${contact.whatsapp
                    .replace(/\D/g, "")
                    .replace(/^0/, "")}`}
                  className="rounded-2xl bg-[linear-gradient(135deg,rgba(31,111,122,1),rgba(49,95,138,0.95))] px-4 py-4 text-center text-sm font-semibold text-white transition hover:brightness-105"
                >
                  WhatsApp
                </a>
                <a
                  href={`mailto:${contact.email}`}
                  className="rounded-2xl border border-[color:var(--line)] bg-white px-4 py-4 text-center text-sm font-semibold text-[color:var(--ink)] transition hover:bg-[color:var(--paper-soft)]"
                >
                  E-posta
                </a>
                <a
                  href="#urunler"
                  className="rounded-2xl border border-[color:var(--line)] bg-white px-4 py-4 text-center text-sm font-semibold text-[color:var(--ink)] transition hover:bg-[color:var(--paper-soft)]"
                >
                  Ürünlere dön
                </a>
              </div>
            </div>
          </div>
        </section>

        <footer className="mt-6 flex flex-col gap-4 border-t border-[color:var(--line)] px-2 py-6 text-sm text-[color:var(--muted)] sm:flex-row sm:items-center sm:justify-between">
          <p>{brand.name}</p>
          <p>{brand.tagline}</p>
        </footer>
      </div>
    </main>
  );
}

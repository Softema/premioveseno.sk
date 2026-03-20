# premioveseno.sk – HP sekcie pre Shoptet editor

Tento repozitár obsahuje HTML bloky pre homepage slovenského e-shopu. Každý súbor zodpovedá jednej sekcii, ktorú vložíš do Shoptet editora.

---

## Štruktúra súborov

```
homepage/
  banner-hory.html          → Banner "Oslňujúca chuť z horských lúk!"
  posledne-komentare.html   → Sekcia "Posledné komentáre"
  posledne-hodnotenia.html  → Sekcia "Posledné hodnotenia"
  welcome-sekcia.html       → Sekcia so zajačikom + texty o kvalite
footer/
  footer.html               → Kompletná päta vrátane odkazu na Softema
```

---

## Ako vložiť do Shoptet editora

### 1. Banner – „Oslňujúca chuť z horských lúk!"

**Kde:** Administrácia → Vzhľad → Editor stránky → Homepage → sekcia **Bannery v tele stránky (stred)**

- Vlož obsah súboru `homepage/banner-hory.html`
- Prípadne uprav odkaz `/seno` ak bude kategória sena mať iný slug

---

### 2. Posledné komentáre

**Kde:** Administrácia → Vzhľad → Editor stránky → Homepage → sekcia **HTML blok** (za produktami)

> ⚠️ Poznámka: Komentáre sa v Shoptete zobrazujú automaticky cez systém diskusií.
> Tento HTML blok slúži ako **statická náhrada** kým zákazníci slovenského e-shopu nezačnú pridávať vlastné komentáre.
> Proklik smeruje zatiaľ na české produkty (`premioveseno.cz`) – po nasadení SK produktov zmeň URL na slovenské.

- Vlož obsah súboru `homepage/posledne-komentare.html`

---

### 3. Posledné hodnotenia

**Kde:** Rovnaká sekcia ako komentáre, hneď za nimi.

> ⚠️ Rovnaká situácia ako pri komentároch – statická náhrada, URL treba aktualizovať po pridaní SK produktov.

- Vlož obsah súboru `homepage/posledne-hodnotenia.html`

---

### 4. Welcome sekcia (zajačik + texty)

**Kde:** Administrácia → Vzhľad → Editor stránky → Homepage → sekcia **Uvítací text**

- Vlož obsah súboru `homepage/welcome-sekcia.html`
- Obrázok zajačika sa berie z CDN českého eshopu – pokiaľ budeš nahrávať vlastné, zmeň URL obrázku

---

### 5. Footer

**Kde:** Administrácia → Nastavenia → Päta → **Vlastný HTML kód päty**

- Vlož obsah súboru `footer/footer.html`
- Skontroluj kontaktné údaje (email, telefón) – ak budú pre SK iné, uprav ich
- Odkaz na Softema je na konci footer-bottom sekcie

---

## URL, ktoré treba skontrolovať/zmeniť

| Pôvodná URL (CZ) | Nová URL (SK) |
|---|---|
| `/seno/` | `/seno/` (skontroluj slug kategórie) |
| `/zelenina-a-pelety/` | `/zelenina-a-pelety/` |
| `/bylinky-a-semena/` | `/bylinky-a-semena/` |
| `/za-odmenu/` | `/za-odmenu/` |
| `/doprava-a-platba/` | `/doprava-a-platba/` |
| `/hodnoceni-obchodu/` | `/hodnoceni-obchodu/` |
| `/kontakty/` | `/kontakty/` |
| `/obchodni-podminky/` | `/obchodni-podminky/` |
| `/podminky-ochrany-osobnich-udaju/` | `/podminky-ochrany-osobnich-udaju/` |

Proklik komentárov a hodnotení → aktualizovať na SK produkty po ich nasadení.

---

## Poznámky

- Texty sú v slovenčine, komentáre a hodnotenia zákazníkov zostávajú v češtine (ako bolo dohodnuté)
- Obrázky sú zatiaľ z CDN českého e-shopu (`premioveseno.cz`) – Shoptet ich automaticky uloží ak ich nahráš cez správcu médií
- Footer obsahuje: Shoptet logo + odkaz, Softema odkaz (`https://softema.cz/`)

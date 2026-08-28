# Growth Modeling — האתר שלך

אתר תוכן דו-לשוני (אנגלית + עברית) בנוי ב-Astro. מהיר, חינמי לאחסון, ועם SEO מובנה.

---

## מה יש כאן

```
growth-modeling/
├── src/
│   ├── content/blog/
│   │   ├── en/   ← פוסטים באנגלית (קבצי .md)
│   │   └── he/   ← פוסטים בעברית (קבצי .md)
│   ├── pages/    ← הדפים (בית, אודות, בלוג) לכל שפה
│   ├── components/  ← Header, Footer, SEO, GrowthLoop
│   ├── layouts/  ← המסגרת המשותפת לכל הדפים
│   ├── i18n/ui.ts  ← כל הטקסטים של הממשק, בשתי השפות
│   └── styles/global.css  ← כל העיצוב
├── astro.config.mjs  ← הגדרות (כאן משנים את כתובת הדומיין)
└── package.json
```

---

## איך מוסיפים פוסט חדש (הדבר שתעשה הכי הרבה)

1. היכנס לתיקייה `src/content/blog/en/` (או `he/` לעברית).
2. צור קובץ חדש, למשל `why-funnels-lie.md`.
3. הדבק בראש הקובץ את הבלוק הזה (זה ה"פרונט-מאטר" — המידע שהאתר קורא):

```markdown
---
title: "הכותרת של הפוסט"
description: "משפט אחד שמסביר על מה הפוסט — משמש גם לכרטיס וגם ל-SEO בגוגל."
pubDate: 2026-03-01
kind: "מאמר"
readMins: 6
draft: false
---

וכאן מתחיל גוף הפוסט, בכתיבה רגילה.

## כותרת משנה

טקסט רגיל. **מודגש** עם כוכביות, *נטוי*, ורשימות עם מקף.
```

4. שמור. זהו — הפוסט מופיע אוטומטית בעמוד הבלוג ובעמוד הבית.

> טיפ: `draft: true` מסתיר פוסט מהאתר עד שתהיה מוכן לפרסם אותו.

---

## שלב א׳ — להריץ את האתר על המחשב (אופציונלי, אבל מומלץ פעם אחת)

זה מאפשר לך לראות את האתר לפני שהוא עולה לאוויר.

1. התקן **Node.js** מ-<https://nodejs.org> (הגרסה עם "LTS"). התקנה רגילה, הבא-הבא-סיום.
2. פתח טרמינל בתיקיית הפרויקט והרץ:
   ```bash
   npm install
   npm run dev
   ```
3. פתח בדפדפן את הכתובת שמופיעה (בדרך כלל `http://localhost:4321`).

אם אתה לא רוצה להתקין כלום — דלג לשלב ב׳, הכל יקרה בענן.

---

## שלב ב׳ — להעלות לאוויר בחינם (GitHub + Cloudflare Pages)

### 1. העלאה ל-GitHub
- פתח חשבון חינם ב-<https://github.com>.
- צור מאגר (repository) חדש בשם `growth-modeling`.
- העלה את כל הקבצים (אפשר לגרור אותם ישירות בממשק של GitHub, או דרך הכפתור "uploading an existing file").

### 2. חיבור ל-Cloudflare Pages
- פתח חשבון חינם ב-<https://dash.cloudflare.com> → בחר **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
- בחר את המאגר `growth-modeling`.
- בהגדרות הבנייה הזן:
  - **Framework preset:** `Astro`
  - **Build command:** `npm run build`
  - **Build output directory:** `dist`
- לחץ **Save and Deploy**.

תוך דקה-שתיים האתר יהיה חי בכתובת כמו `https://growth-modeling.pages.dev`.

מעכשיו, **כל שינוי שתעלה ל-GitHub יתעדכן באתר אוטומטית** — לא צריך לעשות כלום ידנית.

---

## שלב ג׳ — לחבר דומיין משלך (כשתקנה אחד)

1. קנה דומיין (למשל ב-<https://www.cloudflare.com/products/registrar/> או Porkbun) — בערך 10–15$ לשנה.
2. ב-Cloudflare Pages → הפרויקט שלך → **Custom domains** → **Set up a domain** → הזן את הדומיין ועקוב אחרי ההוראות.
3. **חשוב:** פתח את הקובץ `astro.config.mjs` ושנה את השורה `site:` לכתובת הדומיין החדשה שלך. זה נחוץ כדי שה-SEO וה-sitemap יצביעו על הכתובת הנכונה.

---

## דברים שכבר מטופלים בשבילך

- ✅ **SEO** — כל דף מייצר אוטומטית title, description, תגי Open Graph (לשיתוף), קישור canonical, ותגי hreflang (שאומרים לגוגל שיש גרסה עברית ואנגלית).
- ✅ **Sitemap** — נוצר אוטומטית בכל בנייה, בכתובת `/sitemap-index.xml`. אחרי שהאתר באוויר, כדאי להגיש אותו ב-Google Search Console.
- ✅ **עברית ו-RTL** — עמודי העברית נטענים עם `dir="rtl"` והגופן Rubik, אוטומטית.
- ✅ **מהירות** — אתר סטטי, נטען כמעט מיידית. גוגל אוהב את זה.

---

## שלב הבא: המוצר (ה-Growth Model הכלי)

האתר הזה הוא שכבת התוכן. כשתהיה מוכן להוסיף את הכלי האינטראקטיבי, הוא ייבנה כאפליקציה נפרדת
(למשל ב-`app.yourdomain.com`) ויתחבר לאתר הזה. המבנה הנוכחי לא נועל אותך — הוא משאיר את הדרך פתוחה.

---

## Contact form setup (2 minutes)

The Contact page form needs a free service to deliver submissions to your inbox
(a static site can't send email on its own). Easiest option — **Web3Forms**:

1. Go to <https://web3forms.com>, enter your email, and copy the **access key** it gives you.
2. Open `src/pages/contact.astro` **and** `src/pages/he/contact.astro`.
3. Replace `YOUR-ACCESS-KEY-HERE` with your key, and set `CONTACT_EMAIL` to your address.

Submissions (name, email, phone, message) will now arrive in your inbox. No backend needed.

---

## Note on the content

The site is written as a **service** for startup founders — the core message is
"know what has to be true for your startup to grow." All copy lives in `src/i18n/ui.ts`
(English + Hebrew side by side), so you can adjust any wording in one place.
The Hebrew copy is a translation of the English source — worth a quick review before launch.

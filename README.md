<div align="center">

# React i18next Learning Demo

**A bilingual, practical guide to internationalization in React**  
**مشروع عملي ثنائي اللغة لتعلّم الترجمة في React**

[![React](https://img.shields.io/badge/React-18-149ECA?logo=react&logoColor=white)](https://react.dev/)
[![i18next](https://img.shields.io/badge/i18next-23-26A69A?logo=i18next&logoColor=white)](https://www.i18next.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white)](https://vite.dev/)

[English](#english) · [العربية](#العربية) · [Documentation](#documentation--ملفات-الشرح) · [Commands](#translation-tooling--أدوات-الترجمة)

</div>

---

## English

This educational project demonstrates a complete internationalization workflow in React using `i18next`, `react-i18next`, and the official `i18next-cli`. It includes a responsive interface built entirely with Tailwind CSS 4 and supports both English LTR and Arabic RTL layouts.

### What you will learn

- Load JSON translations through an HTTP backend.
- Detect the browser language and remember the user's choice.
- Switch languages without reloading the page.
- Interpolate dynamic values safely.
- Handle English and Arabic plural rules.
- Synchronize `lang` and `dir` for accessible LTR/RTL layouts.
- Extract and validate translation keys with the official CLI.
- Build responsive bilingual interfaces with Tailwind CSS.

## العربية

<p dir="rtl" align="right">
هذا مشروع تعليمي يشرح دورة عمل الترجمة الكاملة في React باستخدام
<code>i18next</code> و<code>react-i18next</code> والأداة الرسمية
<code>i18next-cli</code>. يحتوي المشروع على واجهة متجاوبة مبنية بالكامل باستخدام
Tailwind CSS 4، مع دعم الاتجاهين الإنجليزي LTR والعربي RTL.
</p>

<p dir="rtl" align="right"><strong>ستتعلّم من خلاله:</strong></p>

<ul dir="rtl" align="right">
  <li>تحميل ملفات الترجمة بصيغة JSON عبر HTTP.</li>
  <li>اكتشاف لغة المتصفح وحفظ اختيار المستخدم.</li>
  <li>تبديل اللغة دون إعادة تحميل الصفحة.</li>
  <li>تمرير القيم المتغيرة واستخدام صيغ الجمع العربية والإنجليزية.</li>
  <li>تحديث خصائص <code>lang</code> و<code>dir</code> لدعم RTL وLTR.</li>
  <li>جمع مفاتيح الترجمة وفحصها باستخدام الأداة الرسمية.</li>
  <li>إنشاء واجهة ثنائية اللغة باستخدام Tailwind CSS.</li>
</ul>

## Preview features

| Feature | Included |
|---|:---:|
| English and Arabic | ✅ |
| Automatic language detection | ✅ |
| Saved language preference | ✅ |
| RTL/LTR switching | ✅ |
| Interpolation examples | ✅ |
| Arabic plural forms | ✅ |
| Automatic key extraction | ✅ |
| Responsive Tailwind UI | ✅ |

## Tech stack

- React 18
- Vite 5
- i18next and react-i18next
- i18next HTTP Backend
- Browser Language Detector
- Official i18next CLI
- Tailwind CSS 4

## Getting started

```bash
git clone <your-repository-url>
cd react-i18next-learning-demo
npm install
npm run dev
```

Open the local URL shown by Vite, then switch between `EN` and `AR` from the language selector.

## Translation tooling / أدوات الترجمة

```bash
# Extract every static t() key into the locale files
npm run i18n:extract

# Re-extract keys automatically while editing source files
npm run i18n:watch

# Display missing keys and translation completion
npm run i18n:status
```

<p dir="rtl" align="right">
استخدم أمر الاستخراج بعد إضافة مفاتيح جديدة، ثم اكتب قيمها الصحيحة داخل ملفات اللغات. استخدم أمر الحالة قبل رفع التغييرات للتأكد من عدم وجود ترجمات ناقصة.
</p>

## Project structure

```text
.
├── .github/workflows/ci.yml
├── docs/
│   ├── I18NEXT_COMPLETE_GUIDE_AR.md
│   ├── I18NEXT_COMPLETE_GUIDE_EN.md
│   ├── USING_CSS_ONLY_AR.md
│   └── USING_CSS_ONLY_EN.md
├── public/locales/
│   ├── ar/translation.json
│   └── en/translation.json
├── src/
│   ├── App.jsx
│   ├── i18n.js
│   ├── index.css
│   └── main.jsx
├── i18next.config.js
└── vite.config.js
```

## Documentation / ملفات الشرح

| Language | Complete i18next guide | CSS-only alternative |
|---|---|---|
| English | [Complete i18next and CLI guide](./docs/I18NEXT_COMPLETE_GUIDE_EN.md) | [Using plain CSS instead of Tailwind](./docs/USING_CSS_ONLY_EN.md) |
| العربية | [الدليل الشامل للمكتبة والأداة](./docs/I18NEXT_COMPLETE_GUIDE_AR.md) | [استخدام CSS التقليدي بدل Tailwind](./docs/USING_CSS_ONLY_AR.md) |

## Quality checks

```bash
npm run lint
npm run i18n:status
npm run build
```

GitHub Actions runs the same checks automatically for pushes and pull requests targeting `main`.

## Important extraction note

The CLI reliably discovers static keys such as `t('menu.home')`. Runtime-generated keys such as ``t(`menu.${name}`)`` cannot always be inferred. Prefer explicit key maps or extraction comments for dynamic cases; both approaches are explained in the complete guides.

---

<div align="center">

Built as a focused learning reference for React internationalization.  
صُمّم كمرجع عملي ومختصر لتعلّم الترجمة في React.

</div>

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

## Quick installation and usage / التثبيت والاستخدام المبسّط

### 1. Install the packages / تثبيت الحزم

```bash
npm install i18next react-i18next i18next-http-backend i18next-browser-languagedetector
```

<p dir="rtl" align="right">
توفّر <code>i18next</code> نظام الترجمة الأساسي، وتربطها <code>react-i18next</code> بمكوّنات React، بينما تحمّل إضافة HTTP ملفات JSON وتكتشف الإضافة الأخيرة لغة المستخدم وتحفظ اختياره.
</p>

### 2. Create translation files / إنشاء ملفات الترجمة

Create one JSON file for each language:

```text
public/locales/
├── en/translation.json
└── ar/translation.json
```

`public/locales/en/translation.json`:

```json
{
  "welcome": "Welcome",
  "changeLanguage": "العربية"
}
```

`public/locales/ar/translation.json`:

```json
{
  "welcome": "أهلًا بك",
  "changeLanguage": "English"
}
```

<p dir="rtl" align="right">
يجب أن تكون أسماء المفاتيح مثل <code>welcome</code> متطابقة في كل اللغات، بينما تتغيّر قيمتها فقط.
</p>

### 3. Configure i18next / إعداد المكتبة

Create `src/i18n.js`:

```js
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: ['en', 'ar'],
    fallbackLng: 'en',
    backend: {
      loadPath: '/locales/{{lng}}/translation.json',
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
```

Import the configuration once in `src/main.jsx`, before rendering the application:

```js
import './i18n.js'
```

<p dir="rtl" align="right">
يحمّل هذا الإعداد ملف اللغة المناسبة، ويستخدم الإنجليزية عند عدم توفر لغة المستخدم، ويحفظ اللغة المختارة داخل <code>localStorage</code>.
</p>

### 4. Translate a component / استخدام الترجمة

```jsx
import { useTranslation } from 'react-i18next'

function Welcome() {
  const { t, i18n } = useTranslation()

  const switchLanguage = () => {
    const nextLanguage = i18n.resolvedLanguage === 'ar' ? 'en' : 'ar'
    i18n.changeLanguage(nextLanguage)
  }

  return (
    <section>
      <h1>{t('welcome')}</h1>
      <button type="button" onClick={switchLanguage}>
        {t('changeLanguage')}
      </button>
    </section>
  )
}
```

<p dir="rtl" align="right">
تبحث الدالة <code>t()</code> عن المفتاح في ملف اللغة الحالية، بينما تغيّر <code>changeLanguage()</code> اللغة فورًا دون إعادة تحميل الصفحة.
</p>

### 5. Support Arabic direction / دعم اتجاه العربية

```jsx
import { useEffect } from 'react'

useEffect(() => {
  const language = i18n.resolvedLanguage || 'en'

  document.documentElement.lang = language
  document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr'
}, [i18n.resolvedLanguage])
```

<p dir="rtl" align="right">
بهذا تتغير لغة المستند واتجاه الصفحة بالكامل بين <code>RTL</code> و<code>LTR</code>. راجع ملفات الشرح الكاملة أدناه للتعرف على المتغيرات وصيغ الجمع وأداة جمع المفاتيح وإضافة لغات جديدة.
</p>

## Translation tooling / شرح أداة جمع الترجمات

This project uses the official `i18next-cli` to scan JavaScript and JSX files, discover translation keys used with `t()`, and keep locale files synchronized.

<p dir="rtl" align="right">
يستخدم المشروع أداة <code>i18next-cli</code> الرسمية. تقرأ الأداة ملفات JavaScript وJSX، وتبحث عن المفاتيح المستخدمة داخل <code>t()</code>، ثم تضيف المفاتيح الناقصة إلى ملفات اللغات وتعرض حالة اكتمال الترجمة.
</p>

> The tool collects and checks keys; it does not write the final human translation for you.

<p dir="rtl" align="right">
<strong>مهم:</strong> تجمع الأداة المفاتيح وتفحصها، لكنها لا تكتب الترجمة البشرية النهائية. بعد الاستخراج يجب مراجعة القيم الجديدة وترجمتها داخل ملفات JSON.
</p>

### 1. Install the tool / تثبيت الأداة

Install it as a development dependency because it is only needed while developing the project:

```bash
npm install --save-dev i18next-cli
```

### 2. Configure extraction / إعداد جمع المفاتيح

Create `i18next.config.js` in the project root:

```js
import { defineConfig } from 'i18next-cli'

export default defineConfig({
  locales: ['en', 'ar'],
  extract: {
    input: ['src/**/*.{js,jsx}'],
    output: 'public/locales/{{language}}/{{namespace}}.json',
  },
})
```

<ul dir="rtl" align="right">
  <li><code>locales</code>: اللغات التي تريد إدارتها.</li>
  <li><code>input</code>: الملفات التي ستبحث الأداة داخلها عن مفاتيح الترجمة.</li>
  <li><code>output</code>: مكان حفظ ملفات كل لغة وnamespace.</li>
</ul>

### 3. Add npm scripts / إضافة الأوامر

Add these scripts to `package.json`:

```json
{
  "scripts": {
    "i18n:extract": "i18next-cli extract",
    "i18n:watch": "i18next-cli extract --watch",
    "i18n:status": "i18next-cli status"
  }
}
```

| Command | What it does | الوظيفة |
|---|---|---|
| `npm run i18n:extract` | Extracts keys once and updates locale files. | يجمع المفاتيح مرة واحدة ويحدّث ملفات اللغات. |
| `npm run i18n:watch` | Watches source files and extracts after changes. | يراقب الملفات ويعيد الجمع بعد التعديلات. |
| `npm run i18n:status` | Reports missing keys and completion percentages. | يعرض المفاتيح الناقصة ونسبة اكتمال كل لغة. |

### 4. How extraction works / كيف تعمل الأداة؟

When you add translation calls to a component:

```jsx
<h1>{t('home.title')}</h1>
<p>{t('home.greeting', { name: 'Lina' })}</p>
<span>{t('cart.items', { count: itemCount })}</span>
```

Run:

```bash
npm run i18n:extract
```

The tool discovers `home.title`, `home.greeting`, and the plural forms for `cart.items`, then updates the configured locale files. Open those files afterward and add the correct translations.

<p dir="rtl" align="right">
في المثال السابق تكتشف الأداة مفاتيح العنوان والترحيب والعناصر، ثم تحدّث ملفات العربية والإنجليزية. افتح ملفات JSON بعد تنفيذ الأمر واكتب الترجمة الصحيحة لكل قيمة جديدة.
</p>

### 5. Recommended workflow / دورة العمل المقترحة

```text
Add t('new.key') in React
          ↓
Run npm run i18n:extract
          ↓
Translate the new value in every locale file
          ↓
Run npm run i18n:status
          ↓
Run npm run build
```

<ol dir="rtl" align="right">
  <li>أضف المفتاح الجديد باستخدام <code>t()</code>.</li>
  <li>شغّل أمر استخراج المفاتيح.</li>
  <li>اكتب ترجمة المفتاح في جميع ملفات اللغات.</li>
  <li>افحص حالة الترجمات.</li>
  <li>شغّل بناء المشروع للتأكد من سلامته.</li>
</ol>

### 6. Static and dynamic keys / المفاتيح الثابتة والديناميكية

The CLI reliably discovers static keys:

```js
t('menu.home')
```

It cannot always determine the possible values of a key created at runtime:

```js
t(`menu.${item.name}`)
```

Prefer an explicit map when values are dynamic:

```js
const menuKeys = {
  home: 'menu.home',
  settings: 'menu.settings',
}

t(menuKeys[item.name])
```

<p dir="rtl" align="right">
تتعرف الأداة بسهولة على المفتاح المكتوب كنص ثابت، لكنها لا تستطيع دائمًا توقّع قيم المفتاح المركّب وقت التشغيل. استخدم خريطة تحتوي المفاتيح الصريحة، أو راجع <a href="./docs/I18NEXT_COMPLETE_GUIDE_AR.md#11-أداة-جمع-المفاتيح-i18next-cli">شرح الأداة الكامل بالعربية</a> للحالات المتقدمة.
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

---

<div align="center">

Built as a focused learning reference for React internationalization.  
صُمّم كمرجع عملي ومختصر لتعلّم الترجمة في React.

</div>

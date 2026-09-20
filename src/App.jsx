import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'

const languages = [
  { code: 'en', labelKey: 'languages.english', shortLabel: 'EN' },
  { code: 'ar', labelKey: 'languages.arabic', shortLabel: 'AR' },
]

function App() {
  // `t` translates a key, while `i18n` exposes the active language and helpers.
  const { t, i18n } = useTranslation()
  const [itemCount, setItemCount] = useState(2)
  const currentLanguage = i18n.resolvedLanguage || 'en'
  const isArabic = currentLanguage === 'ar'

  useEffect(() => {
    // Keep the document metadata in sync for accessibility and correct RTL layout.
    document.documentElement.lang = currentLanguage
    document.documentElement.dir = isArabic ? 'rtl' : 'ltr'
  }, [currentLanguage, isArabic])

  const changeLanguage = (languageCode) => {
    // The detector remembers this choice in localStorage for the next visit.
    i18n.changeLanguage(languageCode)
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f4f7f2] font-['Manrope','Noto_Sans_Arabic',sans-serif] text-[#17221c] antialiased">
      <div
        className="pointer-events-none absolute -end-40 -top-60 size-[620px] rounded-full border border-[#154c361f] shadow-[0_0_0_80px_rgba(21,76,54,0.025),0_0_0_160px_rgba(21,76,54,0.018)]"
        aria-hidden="true"
      />

      <nav
        className="relative z-10 mx-auto flex w-[min(1180px,calc(100%-48px))] items-center justify-between border-b border-[#dce4dd] py-7 max-[620px]:w-[calc(100%-32px)]"
        aria-label={t('languageSwitcher.label')}
      >
        <span className="text-xs font-extrabold uppercase tracking-[0.15em]">
          {t('languageSwitcher.title')}
        </span>
        <div className="flex gap-1 rounded-full border border-[#dce4dd] bg-white/70 p-1 backdrop-blur-md">
          {languages.map((language) => {
            const isActive = currentLanguage === language.code

            return (
              <button
                className={`min-w-12 cursor-pointer rounded-full border-0 px-3 py-2 text-xs font-extrabold transition duration-200 focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-[#f1663d73] ${
                  isActive
                    ? 'bg-[#154c36] text-white shadow-[0_4px_12px_rgba(21,76,54,0.18)]'
                    : 'bg-transparent text-[#66736b] hover:text-[#17221c]'
                }`}
                type="button"
                key={language.code}
                onClick={() => changeLanguage(language.code)}
                aria-pressed={isActive}
                aria-label={t(language.labelKey)}
              >
                {language.shortLabel}
              </button>
            )
          })}
        </div>
      </nav>

      <section className="relative z-10 mx-auto grid min-h-[620px] w-[min(1180px,calc(100%-48px))] grid-cols-[minmax(0,1.05fr)_minmax(400px,0.95fr)] items-center gap-[clamp(48px,8vw,112px)] py-[86px] pb-[104px] max-[880px]:grid-cols-1 max-[880px]:py-[70px] max-[620px]:min-h-0 max-[620px]:w-[calc(100%-32px)] max-[620px]:gap-15">
        <div className="max-[880px]:max-w-[690px]">
          <span className="mb-4.5 block text-xs font-extrabold uppercase tracking-[0.18em] text-[#f1663d]">
            {t('hero.eyebrow')}
          </span>
          <h1 className="m-0 max-w-[700px] text-[clamp(3.4rem,7vw,6.7rem)] leading-[0.94] font-extrabold tracking-[-0.065em] rtl:leading-[1.15] rtl:tracking-[-0.035em] max-[620px]:text-[clamp(3rem,16vw,4.5rem)]">
            {t('hero.title')}
          </h1>
          <p className="my-7 max-w-[620px] text-[clamp(1rem,1.6vw,1.14rem)] leading-[1.85] text-[#66736b]">
            {t('hero.description')}
          </p>
          <a
            className="inline-flex items-center gap-4 rounded-[10px] bg-[#f1663d] px-5 py-4 text-sm font-extrabold text-white no-underline shadow-[0_12px_30px_rgba(241,102,61,0.24)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_16px_35px_rgba(241,102,61,0.3)] focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-[#f1663d73]"
            href="#examples"
          >
            {t('hero.action')}
            <span className="text-xl" aria-hidden="true">
              {isArabic ? '\u2190' : '\u2192'}
            </span>
          </a>
        </div>

        <div
          className="overflow-hidden rounded-[18px] border border-white/10 bg-[#11281e] text-[#e9f2ec] shadow-[0_35px_75px_rgba(24,48,37,0.22)] transition duration-300 rotate-[1.5deg] hover:-translate-y-1 hover:rotate-0 max-[880px]:max-w-[620px]"
          aria-label={t('codeCard.label')}
        >
          <div className="flex items-center justify-between border-b border-white/10 bg-black/10 px-4.5 py-4 font-['DM_Mono',monospace] text-xs text-[#a9b9b0]">
            <div className="flex gap-1.5" aria-hidden="true">
              <span className="size-2 rounded-full bg-[#f1663d]" />
              <span className="size-2 rounded-full bg-[#e8b94a]" />
              <span className="size-2 rounded-full bg-[#67b986]" />
            </div>
            <span>App.jsx</span>
          </div>
          <pre
            className="m-0 min-h-[310px] overflow-x-auto px-8.5 py-11.5 text-left font-['DM_Mono',monospace] text-[clamp(0.76rem,1.4vw,0.91rem)] leading-8 max-[620px]:px-5.5 max-[620px]:py-8.5"
            dir="ltr"
          >
            <code>
              <span className="text-[#f59c74]">const</span> {'{ '}t, i18n{' }'} ={' '}
              <span className="text-[#f59c74]">useTranslation</span>()
              {'\n\n'}
              <span className="text-[#6f9180]">
                {'// Translate a key from translation.json'}
              </span>
              {'\n'}
              {'<'}h1{'>'}{'{'}t(<span className="text-[#b6df9b]">&apos;hero.title&apos;</span>){'}'}
              {'<'}/h1{'>'}
              {'\n\n'}
              <span className="text-[#6f9180]">{'// Switch language at runtime'}</span>
              {'\n'}
              i18n.<span className="text-[#f59c74]">changeLanguage</span>(
              <span className="text-[#b6df9b]">&apos;ar&apos;</span>)
            </code>
          </pre>
        </div>
      </section>

      <section
        className="mx-auto w-[min(1180px,calc(100%-48px))] border-t border-[#dce4dd] py-[100px] max-[620px]:w-[calc(100%-32px)]"
        id="examples"
      >
        <div className="mb-12.5 grid grid-cols-[1.15fr_0.85fr] items-end gap-x-20 max-[620px]:grid-cols-1 max-[620px]:gap-5">
          <span className="col-span-full mb-4.5 block text-xs font-extrabold uppercase tracking-[0.18em] text-[#f1663d] max-[620px]:col-auto max-[620px]:mb-0">
            {t('examples.eyebrow')}
          </span>
          <h2 className="m-0 max-w-[700px] text-[clamp(2.15rem,4vw,3.6rem)] leading-[1.08] font-extrabold tracking-[-0.045em]">
            {t('examples.title')}
          </h2>
          <p className="m-0 leading-[1.8] text-[#66736b]">{t('examples.description')}</p>
        </div>

        <div className="grid grid-cols-3 gap-4.5 max-[880px]:grid-cols-1">
          <ExampleCard number="01" title={t('examples.basic.title')} description={t('examples.basic.description')}>
            <div className="mt-auto flex min-h-18 items-center rounded-lg border border-[#e4e9e5] bg-[#f7f9f6] p-4.5 font-bold">
              {t('examples.basic.result')}
            </div>
            <CodeHint>t(&apos;examples.basic.result&apos;)</CodeHint>
          </ExampleCard>

          <ExampleCard number="02" title={t('examples.interpolation.title')} description={t('examples.interpolation.description')}>
            <div className="mt-auto flex min-h-18 items-center rounded-lg border border-[#e4e9e5] bg-[#f7f9f6] p-4.5 font-bold">
              {t('examples.interpolation.result', { name: 'Lina' })}
            </div>
            <CodeHint>t(&apos;key&apos;, {'{ name: \'Lina\' }'})</CodeHint>
          </ExampleCard>

          <ExampleCard number="03" title={t('examples.plural.title')} description={t('examples.plural.description')}>
            <div className="mt-auto flex min-h-18 items-center justify-between gap-3 rounded-lg border border-[#e4e9e5] bg-[#f7f9f6] p-4.5 text-center font-bold">
              <CounterButton
                label={t('counter.decrease')}
                onClick={() => setItemCount((count) => Math.max(0, count - 1))}
              >
                &minus;
              </CounterButton>
              <strong>{t('examples.plural.result', { count: itemCount })}</strong>
              <CounterButton
                label={t('counter.increase')}
                onClick={() => setItemCount((count) => count + 1)}
              >
                +
              </CounterButton>
            </div>
            <CodeHint>t(&apos;key&apos;, {'{ count }'})</CodeHint>
          </ExampleCard>
        </div>
      </section>

      <footer className="mx-auto flex w-[min(1180px,calc(100%-48px))] justify-between border-t border-[#dce4dd] py-7.5 text-xs text-[#66736b] max-[620px]:w-[calc(100%-32px)] max-[620px]:flex-col max-[620px]:gap-2">
        <span className="font-extrabold text-[#17221c]">i18next + React</span>
        <span>{t('footer.note')}</span>
      </footer>
    </main>
  )
}

function ExampleCard({ number, title, description, children }) {
  return (
    <article className="flex min-h-[390px] flex-col rounded-[14px] border border-[#dce4dd] bg-white p-7 shadow-[0_8px_30px_rgba(31,55,43,0.04)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(31,55,43,0.08)] max-[880px]:min-h-0">
      <span className="mb-11 font-['DM_Mono',monospace] text-xs font-medium text-[#f1663d] max-[880px]:mb-7">
        {number}
      </span>
      <h3 className="mb-3 text-xl font-bold">{title}</h3>
      <p className="mb-6 min-h-13.5 text-sm leading-[1.65] text-[#66736b]">{description}</p>
      {children}
    </article>
  )
}

function CodeHint({ children }) {
  return (
    <code className="mt-3.5 block text-left font-['DM_Mono',monospace] text-[0.68rem] text-[#7a877f]" dir="ltr">
      {children}
    </code>
  )
}

function CounterButton({ label, onClick, children }) {
  return (
    <button
      className="size-7.5 shrink-0 cursor-pointer rounded-md border border-[#dce4dd] bg-white p-0 text-base transition hover:border-[#f1663d] hover:text-[#f1663d] focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-[#f1663d73]"
      type="button"
      onClick={onClick}
      aria-label={label}
    >
      {children}
    </button>
  )
}

// PropTypes keep these small teaching components self-documenting in JavaScript.
ExampleCard.propTypes = {
  number: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

CodeHint.propTypes = {
  children: PropTypes.node.isRequired,
}

CounterButton.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
}

export default App

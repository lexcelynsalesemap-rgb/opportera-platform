
import { useState, useEffect } from 'react'
import './App.css'
import Register from './Register'
import Login from './Login'
import CandidateDashboard from './CandidateDashboard'
import EmployerDashboard from './EmployerDashboard'

function App() {
  const [currentPage, setCurrentPage] = useState(
    window.location.pathname
  )
  const [language, setLanguage] = useState('English')

  const isArabic = language === 'Arabic'

  const t = (english, arabic) => isArabic ? arabic : english

  const changeLanguage = () => {
    setLanguage(isArabic ? 'English' : 'Arabic')
  }

  useEffect(() => {
    const handleBack = () => {
      setCurrentPage(window.location.pathname)
    }

    window.addEventListener('popstate', handleBack)

    return () => {
      window.removeEventListener('popstate', handleBack)
    }
  }, [])

  const goToPage = (page) => {
    window.history.pushState({}, '', page)
    setCurrentPage(page)
    window.scrollTo(0, 0)
  }

  if (currentPage === '/register') {
    return (
      <Register
        language={language}
        setLanguage={setLanguage}
      />
    )
  }

  if (currentPage === '/login') {
    return (
      <Login
        language={language}
        setLanguage={setLanguage}
      />
    )
  }

  if (currentPage === '/candidate-dashboard') {
    return (
      <CandidateDashboard
        language={language}
        setLanguage={setLanguage}
      />
    )
  }
if (currentPage === '/employer-dashboard') {
  return (
    <EmployerDashboard
      language={language}
      setLanguage={setLanguage}
    />
  )
}
  const categories = [
    { name: 'Administration', ar: 'الإدارة' },
    { name: 'Customer Service', ar: 'خدمة العملاء' },
    { name: 'Finance & Accounting', ar: 'المالية والمحاسبة' },
    { name: 'Information Technology', ar: 'تقنية المعلومات' },
    { name: 'Sales & Marketing', ar: 'المبيعات والتسويق' },
    { name: 'Engineering', ar: 'الهندسة' },
    { name: 'Hospitality', ar: 'الضيافة' },
    { name: 'Other Industries', ar: 'قطاعات أخرى' }
  ]

  return (
    <div
      className="app"
      dir={isArabic ? 'rtl' : 'ltr'}
      lang={isArabic ? 'ar' : 'en'}
    >
      <header className="navbar">
        <a href="/" className="logo">
          OPPORTERA<span>.</span>
        </a>

        <nav>
          <a href="#jobs">{t('Find Jobs', 'ابحث عن وظائف')}</a>
          <a href="#how-it-works">
            {t('How It Works', 'كيف نعمل')}
          </a>
          <a href="#employers">
            {t('For Employers', 'لأصحاب العمل')}
          </a>
        </nav>

        <div className="nav-actions">
          <button
            type="button"
            onClick={changeLanguage}
            style={{
              padding: '9px 14px',
              border: '1px solid #d5a441',
              borderRadius: '20px',
              background: 'white',
              color: '#102440',
              cursor: 'pointer',
              fontWeight: '600'
            }}
          >
            {isArabic ? 'English' : 'العربية'}
          </button>

          <button
            className="login-btn"
            onClick={() => goToPage('/login')}
          >
            {t('Log In', 'تسجيل الدخول')}
          </button>

          <button
            className="signup-btn"
            onClick={() => goToPage('/register')}
          >
            {t('Sign Up', 'إنشاء حساب')}
          </button>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <span className="eyebrow">
              {t(
                'YOUR FUTURE STARTS HERE',
                'مستقبلك يبدأ من هنا'
              )}
            </span>

            <h1>
              {t('Find Your Next', 'اعثر على فرصتك')}
              <span>
                {t(' Opportunity.', ' القادمة.')}
              </span>
            </h1>

            <p>
              {t(
                'Connecting People. Creating Opportunities. Discover jobs, connect with employers and take the next step in your career.',
                'نربط الأشخاص ونصنع الفرص. اكتشف الوظائف، وتواصل مع أصحاب العمل، واتخذ خطوتك التالية في مسيرتك المهنية.'
              )}
            </p>

            <form
              className="search-box"
              onSubmit={(e) => {
                e.preventDefault()
                document.getElementById('jobs')?.scrollIntoView({
                  behavior: 'smooth'
                })
              }}
            >
              <input
                type="text"
                placeholder={t(
                  'Job title, skills or keywords',
                  'المسمى الوظيفي أو المهارات أو الكلمات المفتاحية'
                )}
                aria-label={t('Search jobs', 'ابحث عن وظائف')}
              />

              <button type="submit">
                {t('Find Jobs', 'ابحث عن وظائف')}
              </button>
            </form>

            <div className="hero-links">
              <a href="#jobs">
                {t(
                  "I'm looking for a job",
                  'أبحث عن وظيفة'
                )}
              </a>

              <a href="#employers">
                {t("I'm hiring talent", 'أبحث عن موظفين')}
              </a>
            </div>
          </div>

          <div className="hero-decoration">
            <div className="decoration-circle">
              <div className="inner-circle">
                <span>OPPORTERA</span>
                <strong>
                  {t(
                    'Opportunities Without Borders',
                    'فرص بلا حدود'
                  )}
                </strong>
              </div>
            </div>
          </div>
        </section>

        <section className="categories" id="jobs">
          <div className="section-heading">
            <span className="eyebrow">
              {t('EXPLORE CAREERS', 'اكتشف المسارات المهنية')}
            </span>

            <h2>
              {t(
                'Find Opportunities That Match Your Skills',
                'اعثر على فرص تتناسب مع مهاراتك'
              )}
            </h2>

            <p>
              {t(
                'Explore different career fields and discover your next opportunity.',
                'استكشف مختلف المجالات المهنية واكتشف فرصتك القادمة.'
              )}
            </p>
          </div>

          <div className="category-grid">
            {categories.map((category) => (
              <div className="category-card" key={category.name}>
                <span className="category-icon">✦</span>

                <h3>
                  {isArabic ? category.ar : category.name}
                </h3>

                <span className="category-arrow">→</span>
              </div>
            ))}
          </div>
        </section>

        <section className="how-section" id="how-it-works">
          <div className="section-heading">
            <span className="eyebrow">
              {t('SIMPLE AND ACCESSIBLE', 'بسيط وسهل الاستخدام')}
            </span>

            <h2>
              {t('How Opportera Works', 'كيف يعمل أوبورتيرا')}
            </h2>

            <p>
              {t(
                'A simple way to connect people with employment opportunities.',
                'طريقة بسيطة لربط الأشخاص بفرص العمل.'
              )}
            </p>
          </div>

          <div className="steps-grid">
            <div className="step-card">
              <span>01</span>
              <h3>
                {t('Create Your Profile', 'أنشئ ملفك الشخصي')}
              </h3>
              <p>
                {t(
                  'Introduce yourself, add your skills and upload your CV.',
                  'عرّف بنفسك، وأضف مهاراتك، وقم بتحميل سيرتك الذاتية.'
                )}
              </p>
            </div>

            <div className="step-card">
              <span>02</span>
              <h3>
                {t('Discover Opportunities', 'اكتشف الفرص')}
              </h3>
              <p>
                {t(
                  'Explore vacancies that match your experience and interests.',
                  'استكشف الوظائف التي تناسب خبراتك واهتماماتك.'
                )}
              </p>
            </div>

            <div className="step-card">
              <span>03</span>
              <h3>
                {t('Connect With Employers', 'تواصل مع أصحاب العمل')}
              </h3>
              <p>
                {t(
                  'Apply for jobs and communicate with potential employers.',
                  'تقدم للوظائف وتواصل مع أصحاب العمل المحتملين.'
                )}
              </p>
            </div>
          </div>
        </section>

        <section className="employer-section" id="employers">
          <div>
            <span className="eyebrow">
              {t('FOR EMPLOYERS', 'لأصحاب العمل')}
            </span>

            <h2>
              {t(
                'Find the Right People for Your Business.',
                'اعثر على الأشخاص المناسبين لعملك.'
              )}
            </h2>

            <p>
              {t(
                'Connect with candidates, discover new talent and find people who can help your business grow.',
                'تواصل مع الباحثين عن عمل، واكتشف المواهب الجديدة، واعثر على الأشخاص الذين يمكنهم المساعدة في نمو أعمالك.'
              )}
            </p>
          </div>

          <button
            className="employer-btn"
            onClick={() => goToPage('/register')}
          >
            {t(
              'Explore Employer Services',
              'اكتشف خدمات أصحاب العمل'
            )}
          </button>
        </section>
      </main>

      <footer>
        <a href="/" className="logo">
          OPPORTERA<span>.</span>
        </a>

        <p>
          {t(
            'Connecting People. Creating Opportunities.',
            'نربط الأشخاص ونصنع الفرص.'
          )}
        </p>

        <small>
          {t(
            '© 2026 Opportera. All rights reserved.',
            '© 2026 أوبورتيرا. جميع الحقوق محفوظة.'
          )}
        </small>
      </footer>
    </div>
  )
}

export default App

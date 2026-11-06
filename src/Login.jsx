
import { useState } from 'react'
import './Login.css'

function Login({ language = 'English', setLanguage }) {
  const [localLanguage, setLocalLanguage] = useState(language)
  const activeLanguage = typeof setLanguage === 'function'
    ? language
    : localLanguage

  const isArabic = activeLanguage === 'Arabic'
  const [accountType, setAccountType] = useState('candidate')

  const t = (english, arabic) => isArabic ? arabic : english

  const changeLanguage = () => {
    const nextLanguage = isArabic ? 'English' : 'Arabic'
    setLocalLanguage(nextLanguage)

    if (setLanguage) {
      setLanguage(nextLanguage)
    }
  }

  return (
    <div
      className="login-page"
      dir={isArabic ? 'rtl' : 'ltr'}
      lang={isArabic ? 'ar' : 'en'}
    >
      <a href="/" className="login-logo">
        OPPORTERA<span>.</span>
      </a>

      <div className="login-container">

        <button
          type="button"
          onClick={changeLanguage}
          style={{
            display: 'block',
            margin: '0 auto 20px',
            padding: '9px 18px',
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

        <span className="login-eyebrow">
          {t('WELCOME BACK', 'مرحباً بعودتك')}
        </span>

        <h1>
          {t('Log In to Opportera', 'تسجيل الدخول إلى أوبورتيرا')}
        </h1>

        <p>
          {t(
            'Continue connecting with opportunities.',
            'واصل التواصل مع الفرص المتاحة.'
          )}
        </p>

        <div className="login-options">
          <button
            type="button"
            className={accountType === 'candidate' ? 'selected' : ''}
            onClick={() => setAccountType('candidate')}
          >
            {t('Candidate', 'باحث عن عمل')}
          </button>

          <button
            type="button"
            className={accountType === 'employer' ? 'selected' : ''}
            onClick={() => setAccountType('employer')}
          >
            {t('Employer', 'صاحب عمل')}
          </button>
        </div>

        <form onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="loginEmail">
            {t('Email Address', 'البريد الإلكتروني')}
          </label>

          <input
            id="loginEmail"
            type="email"
            placeholder={t(
              'Enter your email',
              'أدخل بريدك الإلكتروني'
            )}
            required
          />

          <label htmlFor="loginPassword">
            {t('Password', 'كلمة المرور')}
          </label>

          <input
            id="loginPassword"
            type="password"
            placeholder={t(
              'Enter your password',
              'أدخل كلمة المرور'
            )}
            required
          />

          <button type="submit" className="login-submit">
            {t('Log In', 'تسجيل الدخول')}
          </button>
        </form>

        <p className="login-register">
          {t("Don't have an account?", 'ليس لديك حساب؟')}{' '}
          <a href="/register">
            {t('Sign Up', 'إنشاء حساب')}
          </a>
        </p>

        <a href="/" className="login-home">
          {t('← Back to Home', 'العودة إلى الصفحة الرئيسية →')}
        </a>
      </div>
    </div>
  )
}

export default Login

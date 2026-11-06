
import { useState } from 'react'
import './Register.css'

const countries = [
  'Qatar',
  'United Arab Emirates',
  'Saudi Arabia',
  'Kuwait',
  'Bahrain',
  'Oman',
  'Philippines',
  'India',
  'Pakistan',
  'Bangladesh',
  'Nepal',
  'Sri Lanka',
  'United Kingdom',
  'United States',
  'Canada',
  'Australia',
  'Other'
]

const arabicCountries = {
  'Qatar': 'قطر',
  'United Arab Emirates': 'الإمارات العربية المتحدة',
  'Saudi Arabia': 'المملكة العربية السعودية',
  'Kuwait': 'الكويت',
  'Bahrain': 'البحرين',
  'Oman': 'عُمان',
  'Philippines': 'الفلبين',
  'India': 'الهند',
  'Pakistan': 'باكستان',
  'Bangladesh': 'بنغلاديش',
  'Nepal': 'نيبال',
  'Sri Lanka': 'سريلانكا',
  'United Kingdom': 'المملكة المتحدة',
  'United States': 'الولايات المتحدة',
  'Canada': 'كندا',
  'Australia': 'أستراليا',
  'Other': 'أخرى'
}

function Register({ language = 'English', setLanguage }) {
  const [localLanguage, setLocalLanguage] = useState(language)
  const activeLanguage = typeof setLanguage === 'function'
    ? language
    : localLanguage

  const isArabic = activeLanguage === 'Arabic'

  const [accountType, setAccountType] = useState('candidate')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')

  const t = (english, arabic) => isArabic ? arabic : english

  const changeLanguage = () => {
    const nextLanguage = isArabic ? 'English' : 'Arabic'
    setLocalLanguage(nextLanguage)

    if (setLanguage) {
      setLanguage(nextLanguage)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')

    if (password !== confirmPassword) {
      setError(
        t(
          'Your passwords do not match.',
          'كلمتا المرور غير متطابقتين.'
        )
      )
      return
    }

    alert(
      t(
        'Registration form completed! Account creation will be available when we connect Supabase.',
        'تم إكمال نموذج التسجيل! ستتوفر إمكانية إنشاء الحساب بعد ربط Supabase.'
      )
    )
  }

  const changeAccountType = (type) => {
    setAccountType(type)
    setPassword('')
    setConfirmPassword('')
    setError('')
  }

  return (
    <div
      className="register-page"
      dir={isArabic ? 'rtl' : 'ltr'}
      lang={isArabic ? 'ar' : 'en'}
    >
      <a href="/" className="register-logo">
        OPPORTERA<span>.</span>
      </a>

      <div className="register-container">

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

        <span className="register-eyebrow">
          {t('JOIN OPPORTERA', 'انضم إلى أوبورتيرا')}
        </span>

        <h1>
          {t('Create Your Account', 'أنشئ حسابك')}
        </h1>

        <p>
          {t(
            'Connecting People. Creating Opportunities.',
            'نربط الأشخاص ونصنع الفرص.'
          )}
        </p>

        <div className="account-options">
          <button
            type="button"
            className={accountType === 'candidate' ? 'selected' : ''}
            onClick={() => changeAccountType('candidate')}
          >
            {t("I'm looking for a job", 'أبحث عن وظيفة')}
          </button>

          <button
            type="button"
            className={accountType === 'employer' ? 'selected' : ''}
            onClick={() => changeAccountType('employer')}
          >
            {t("I'm hiring", 'أبحث عن موظفين')}
          </button>
        </div>

        <form className="register-form" onSubmit={handleSubmit}>
          {accountType === 'candidate' ? (
            <>
              <h2>
                {t('Candidate Registration', 'تسجيل الباحث عن عمل')}
              </h2>

              <label htmlFor="fullName">
                {t('Full Name', 'الاسم الكامل')}
              </label>
              <input
                id="fullName"
                type="text"
                placeholder={t('Enter your full name', 'أدخل اسمك الكامل')}
                required
              />

              <label htmlFor="candidateEmail">
                {t('Email Address', 'البريد الإلكتروني')}
              </label>
              <input
                id="candidateEmail"
                type="email"
                placeholder={t('Enter your email', 'أدخل بريدك الإلكتروني')}
                required
              />

              <label htmlFor="currentCountry">
                {t('Current Country', 'بلد الإقامة الحالي')}
              </label>
              <select id="currentCountry" required defaultValue="">
                <option value="" disabled>
                  {t('Select your country', 'اختر بلدك')}
                </option>
                {countries.map((country) => (
                  <option key={country} value={country}>
                    {isArabic ? arabicCountries[country] : country}
                  </option>
                ))}
              </select>

              <label htmlFor="destination">
                {t('Preferred Work Destination', 'وجهة العمل المفضلة')}
              </label>
              <select id="destination" required defaultValue="">
                <option value="" disabled>
                  {t(
                    'Select your preferred destination',
                    'اختر وجهة العمل المفضلة'
                  )}
                </option>
                {countries.map((country) => (
                  <option key={country} value={country}>
                    {isArabic ? arabicCountries[country] : country}
                  </option>
                ))}
                <option value="Anywhere">
                  {t(
                    'Open to opportunities worldwide',
                    'متاح لفرص العمل في جميع أنحاء العالم'
                  )}
                </option>
              </select>

              <p className="form-note">
                {t(
                  'You can add more preferred destinations to your profile later.',
                  'يمكنك إضافة وجهات عمل مفضلة أخرى إلى ملفك الشخصي لاحقاً.'
                )}
              </p>
            </>
          ) : (
            <>
              <h2>
                {t('Employer Registration', 'تسجيل صاحب العمل')}
              </h2>

              <label htmlFor="companyName">
                {t('Company Name', 'اسم الشركة')}
              </label>
              <input
                id="companyName"
                type="text"
                placeholder={t('Enter company name', 'أدخل اسم الشركة')}
                required
              />

              <label htmlFor="contactPerson">
                {t('Contact Person', 'اسم الشخص المسؤول')}
              </label>
              <input
                id="contactPerson"
                type="text"
                placeholder={t(
                  "Enter contact person's name",
                  'أدخل اسم الشخص المسؤول'
                )}
                required
              />

              <label htmlFor="employerEmail">
                {t('Work Email', 'البريد الإلكتروني للعمل')}
              </label>
              <input
                id="employerEmail"
                type="email"
                placeholder={t('Enter company email', 'أدخل بريد الشركة')}
                required
              />

              <label htmlFor="companyCountry">
                {t('Company Country', 'بلد الشركة')}
              </label>
              <select id="companyCountry" required defaultValue="">
                <option value="" disabled>
                  {t('Select company country', 'اختر بلد الشركة')}
                </option>
                {countries.map((country) => (
                  <option key={country} value={country}>
                    {isArabic ? arabicCountries[country] : country}
                  </option>
                ))}
              </select>

              <div className="approval-notice">
                <strong>
                  {t('Employer verification', 'التحقق من صاحب العمل')}
                </strong>
                <p>
                  {t(
                    'Company information will be reviewed by Opportera. Employers must be approved before publishing job vacancies.',
                    'ستتم مراجعة معلومات الشركة من قبل أوبورتيرا. يجب الموافقة على أصحاب العمل قبل نشر الوظائف الشاغرة.'
                  )}
                </p>
              </div>
            </>
          )}

          <label htmlFor="password">
            {t('Password', 'كلمة المرور')}
          </label>
          <input
            id="password"
            type="password"
            placeholder={t(
              'Create a password (minimum 8 characters)',
              'أنشئ كلمة مرور (8 أحرف على الأقل)'
            )}
            minLength={8}
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <label htmlFor="confirmPassword">
            {t('Confirm Password', 'تأكيد كلمة المرور')}
          </label>
          <input
            id="confirmPassword"
            type="password"
            placeholder={t(
              'Enter your password again',
              'أعد إدخال كلمة المرور'
            )}
            minLength={8}
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <label className="terms-label">
            <input type="checkbox" required />
            <span>
              {t(
                'I agree to the Terms of Service and Privacy Policy.',
                'أوافق على شروط الخدمة وسياسة الخصوصية.'
              )}
            </span>
          </label>

          {error && <p className="form-error">{error}</p>}

          <button type="submit" className="register-submit">
            {t('Create Account', 'إنشاء حساب')}
          </button>
        </form>

        <p className="register-login">
          {t('Already have an account?', 'لديك حساب بالفعل؟')}{' '}
          <a href="/login">{t('Log In', 'تسجيل الدخول')}</a>
        </p>

        <a href="/" className="back-home">
          {t('← Back to Home', 'العودة إلى الصفحة الرئيسية →')}
        </a>
      </div>
    </div>
  )
}

export default Register

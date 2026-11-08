
import { useState } from 'react'
import './EmployerDashboard.css'

function EmployerDashboard({ language = 'English', setLanguage }) {
  const isArabic = language === 'Arabic'
  const [activePage, setActivePage] = useState('overview')

  const t = (english, arabic) => isArabic ? arabic : english

  const jobs = [
    {
      id: 1,
      title: 'Customer Service Representative',
      location: 'Doha, Qatar',
      applicants: 24,
      status: 'Active'
    },
    {
      id: 2,
      title: 'Accountant',
      location: 'Doha, Qatar',
      applicants: 16,
      status: 'Active'
    },
    {
      id: 3,
      title: 'Administrative Assistant',
      location: 'Doha, Qatar',
      applicants: 8,
      status: 'Pending'
    }
  ]

  const applicants = [
    {
      id: 1,
      name: 'Sarah Ahmed',
      position: 'Customer Service Representative',
      experience: '3 years',
      status: 'New'
    },
    {
      id: 2,
      name: 'John Michael',
      position: 'Accountant',
      experience: '5 years',
      status: 'Shortlisted'
    },
    {
      id: 3,
      name: 'Maria Santos',
      position: 'Administrative Assistant',
      experience: '2 years',
      status: 'Under Review'
    }
  ]

  const menuItems = [
    { id: 'overview', en: 'Overview', ar: 'نظرة عامة', icon: '▦' },
    { id: 'jobs', en: 'Manage Jobs', ar: 'إدارة الوظائف', icon: '▤' },
    { id: 'applicants', en: 'Applicants', ar: 'المتقدمون', icon: '♙' },
    { id: 'company', en: 'Company Profile', ar: 'ملف الشركة', icon: '▣' },
    { id: 'settings', en: 'Settings', ar: 'الإعدادات', icon: '⚙' }
  ]

  const changePage = (page) => {
    setActivePage(page)
  }

  const handlePostJob = () => {
    alert(
      t(
        'Job posting will be available after the platform database is connected.',
        'سيكون نشر الوظائف متاحًا بعد ربط قاعدة بيانات المنصة.'
      )
    )
  }

  const handleAction = () => {
    alert(
      t(
        'This feature will be available after the platform database is connected.',
        'ستتوفر هذه الميزة بعد ربط قاعدة بيانات المنصة.'
      )
    )
  }

  const renderOverview = () => (
    <>
      <div className="employer-welcome">
        <div>
          <span className="employer-eyebrow">
            {t('EMPLOYER WORKSPACE', 'مساحة عمل صاحب الشركة')}
          </span>
          <h1>{t('Welcome back!', 'مرحبًا بعودتك!')}</h1>
          <p>
            {t(
              'Manage your job opportunities and discover talented candidates.',
              'أدر فرص العمل واكتشف المرشحين الموهوبين.'
            )}
          </p>
        </div>

        <button className="employer-primary-btn" onClick={handlePostJob}>
          + {t('Post a Job', 'أضف وظيفة')}
        </button>
      </div>

      <div className="employer-stats">
        <div className="employer-stat-card">
          <span>{t('Active Jobs', 'الوظائف النشطة')}</span>
          <strong>2</strong>
          <small>{t('Currently published', 'منشورة حاليًا')}</small>
        </div>

        <div className="employer-stat-card">
          <span>{t('Total Applicants', 'إجمالي المتقدمين')}</span>
          <strong>48</strong>
          <small>{t('Across all job listings', 'لجميع الوظائف')}</small>
        </div>

        <div className="employer-stat-card">
          <span>{t('Shortlisted', 'القائمة المختصرة')}</span>
          <strong>12</strong>
          <small>{t('Potential candidates', 'مرشحون محتملون')}</small>
        </div>

        <div className="employer-stat-card">
          <span>{t('Interviews', 'المقابلات')}</span>
          <strong>5</strong>
          <small>{t('Scheduled interviews', 'مقابلات مجدولة')}</small>
        </div>
      </div>

      <section className="employer-content-card">
        <div className="employer-section-title">
          <div>
            <h2>{t('Recent Job Listings', 'أحدث الوظائف')}</h2>
            <p>{t('An overview of your job postings.', 'نظرة عامة على الوظائف المنشورة.')}</p>
          </div>

          <button className="employer-text-btn" onClick={() => changePage('jobs')}>
            {t('View All', 'عرض الكل')} →
          </button>
        </div>

        <div className="employer-table-wrapper">
          <table className="employer-table">
            <thead>
              <tr>
                <th>{t('Job Title', 'المسمى الوظيفي')}</th>
                <th>{t('Location', 'الموقع')}</th>
                <th>{t('Applicants', 'المتقدمون')}</th>
                <th>{t('Status', 'الحالة')}</th>
              </tr>
            </thead>

            <tbody>
              {jobs.map((job) => (
                <tr key={job.id}>
                  <td>{job.title}</td>
                  <td>{job.location}</td>
                  <td>{job.applicants}</td>
                  <td>
                    <span className={`employer-status ${job.status.toLowerCase()}`}>
                      {job.status === 'Active'
                        ? t('Active', 'نشطة')
                        : t('Pending', 'قيد الانتظار')}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="employer-content-card">
        <div className="employer-section-title">
          <div>
            <h2>{t('Recent Applicants', 'أحدث المتقدمين')}</h2>
            <p>{t('Candidates who recently applied.', 'المرشحون الذين تقدموا مؤخرًا.')}</p>
          </div>

          <button className="employer-text-btn" onClick={() => changePage('applicants')}>
            {t('View All', 'عرض الكل')} →
          </button>
        </div>

        {applicants.slice(0, 3).map((applicant) => (
          <div className="employer-applicant-row" key={applicant.id}>
            <div className="employer-avatar">
              {applicant.name.charAt(0)}
            </div>

            <div className="employer-applicant-info">
              <strong>{applicant.name}</strong>
              <span>{applicant.position}</span>
            </div>

            <span className="employer-status new">
              {applicant.status === 'New'
                ? t('New', 'جديد')
                : applicant.status === 'Shortlisted'
                  ? t('Shortlisted', 'القائمة المختصرة')
                  : t('Under Review', 'قيد المراجعة')}
            </span>
          </div>
        ))}
      </section>
    </>
  )

  const renderJobs = () => (
    <section className="employer-content-card">
      <div className="employer-section-title">
        <div>
          <h2>{t('Manage Job Listings', 'إدارة الوظائف')}</h2>
          <p>{t('Review and manage your published opportunities.', 'راجع وأدر فرص العمل المنشورة.')}</p>
        </div>

        <button className="employer-primary-btn" onClick={handlePostJob}>
          + {t('Post a Job', 'أضف وظيفة')}
        </button>
      </div>

      {jobs.map((job) => (
        <div className="employer-job-row" key={job.id}>
          <div>
            <h3>{job.title}</h3>
            <p>{job.location} · {job.applicants} {t('applicants', 'متقدمين')}</p>
          </div>

          <span className={`employer-status ${job.status.toLowerCase()}`}>
            {job.status === 'Active' ? t('Active', 'نشطة') : t('Pending', 'قيد الانتظار')}
          </span>

          <button className="employer-outline-btn" onClick={handleAction}>
            {t('Manage', 'إدارة')}
          </button>
        </div>
      ))}
    </section>
  )

  const renderApplicants = () => (
    <section className="employer-content-card">
      <div className="employer-section-title">
        <div>
          <h2>{t('Applicants', 'المتقدمون')}</h2>
          <p>{t('Review candidates who applied to your jobs.', 'راجع المرشحين الذين تقدموا لوظائفك.')}</p>
        </div>
      </div>

      {applicants.map((applicant) => (
        <div className="employer-applicant-row" key={applicant.id}>
          <div className="employer-avatar">
            {applicant.name.charAt(0)}
          </div>

          <div className="employer-applicant-info">
            <strong>{applicant.name}</strong>
            <span>{applicant.position} · {applicant.experience}</span>
          </div>

          <span className="employer-status new">
            {applicant.status === 'New'
              ? t('New', 'جديد')
              : applicant.status === 'Shortlisted'
                ? t('Shortlisted', 'القائمة المختصرة')
                : t('Under Review', 'قيد المراجعة')}
          </span>

          <button className="employer-outline-btn" onClick={handleAction}>
            {t('View Profile', 'عرض الملف')}
          </button>
        </div>
      ))}
    </section>
  )

  const renderCompany = () => (
    <section className="employer-content-card">
      <h2>{t('Company Profile', 'ملف الشركة')}</h2>
      <p>{t('Manage your company information.', 'أدر معلومات شركتك.')}</p>

      <div className="employer-company-profile">
        <div className="employer-company-logo">C</div>
        <div>
          <h3>{t('Demo Company', 'شركة تجريبية')}</h3>
          <span>{t('Employer account preview', 'معاينة حساب صاحب العمل')}</span>
        </div>
      </div>

      <div className="employer-company-fields">
        <label>
          {t('Company Name', 'اسم الشركة')}
          <input defaultValue="Demo Company" />
        </label>

        <label>
          {t('Business Location', 'موقع الشركة')}
          <input defaultValue="Doha, Qatar" />
        </label>

        <label>
          {t('Company Email', 'البريد الإلكتروني للشركة')}
          <input defaultValue="company@example.com" />
        </label>

        <label>
          {t('Industry', 'القطاع')}
          <input defaultValue="Business Services" />
        </label>
      </div>

      <button className="employer-primary-btn" onClick={handleAction}>
        {t('Save Changes', 'حفظ التغييرات')}
      </button>
    </section>
  )

  const renderSettings = () => (
    <section className="employer-content-card">
      <h2>{t('Settings', 'الإعدادات')}</h2>
      <p>{t('Manage your employer account preferences.', 'أدر تفضيلات حساب صاحب العمل.')}</p>

      <div className="employer-setting-row">
        <div>
          <strong>{t('Language', 'اللغة')}</strong>
          <p>{t('Choose your preferred language.', 'اختر لغتك المفضلة.')}</p>
        </div>

        <button
          className="employer-outline-btn"
          onClick={() => setLanguage?.(isArabic ? 'English' : 'Arabic')}
        >
          {isArabic ? 'English' : 'العربية'}
        </button>
      </div>

      <div className="employer-setting-row">
        <div>
          <strong>{t('Account Security', 'أمان الحساب')}</strong>
          <p>{t('Security settings will be available after authentication is connected.', 'ستتوفر إعدادات الأمان بعد ربط المصادقة.')}</p>
        </div>
      </div>
    </section>
  )

  const pageTitles = {
    overview: t('Overview', 'نظرة عامة'),
    jobs: t('Manage Jobs', 'إدارة الوظائف'),
    applicants: t('Applicants', 'المتقدمون'),
    company: t('Company Profile', 'ملف الشركة'),
    settings: t('Settings', 'الإعدادات')
  }

  return (
    <div className="employer-dashboard" dir={isArabic ? 'rtl' : 'ltr'} lang={isArabic ? 'ar' : 'en'}>
      <aside className="employer-sidebar">
        <a href="/" className="employer-logo">OPPORTERA<span>.</span></a>

        <div className="employer-sidebar-label">
          {t('EMPLOYER MENU', 'قائمة صاحب العمل')}
        </div>

        <nav className="employer-menu">
          {menuItems.map((item) => (
            <button
              key={item.id}
              className={activePage === item.id ? 'active' : ''}
              onClick={() => changePage(item.id)}
            >
              <span>{item.icon}</span>
              {isArabic ? item.ar : item.en}
            </button>
          ))}
        </nav>

        <button className="employer-logout" onClick={() => window.location.href = '/'}>
          ↩ {t('Back to Website', 'العودة إلى الموقع')}
        </button>
      </aside>

      <main className="employer-main">
        <header className="employer-topbar">
          <div>
            <span>{t('EMPLOYER PORTAL', 'بوابة أصحاب العمل')}</span>
            <strong>{pageTitles[activePage]}</strong>
          </div>

          <div className="employer-topbar-actions">
            <button
              className="employer-language-btn"
              onClick={() => setLanguage?.(isArabic ? 'English' : 'Arabic')}
            >
              {isArabic ? 'English' : 'العربية'}
            </button>

            <div className="employer-user">
              <div className="employer-avatar">C</div>
              <div>
                <strong>{t('Demo Company', 'شركة تجريبية')}</strong>
                <span>{t('Employer', 'صاحب العمل')}</span>
              </div>
            </div>
          </div>
        </header>

        <div className="employer-page-content">
          {activePage === 'overview' && renderOverview()}
          {activePage === 'jobs' && renderJobs()}
          {activePage === 'applicants' && renderApplicants()}
          {activePage === 'company' && renderCompany()}
          {activePage === 'settings' && renderSettings()}

          <p className="employer-demo-note">
            {t(
              'Demo preview: Sample company, jobs and applicants are fictional. Changes are not saved to a database.',
              'معاينة تجريبية: الشركة والوظائف والمتقدمون بيانات افتراضية. لا يتم حفظ التغييرات في قاعدة بيانات.'
            )}
          </p>
        </div>
      </main>
    </div>
  )
}

export default EmployerDashboard

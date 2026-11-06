
import { useState } from 'react'
import './CandidateDashboard.css'
import MyProfile from './MyProfile'
import MyCV from './MyCV'
import FindJobs from './FindJobs'
import MyApplications from './MyApplications'
import SavedJobs from './SavedJobs'
import Messages from './Messages'
import Settings from './Settings'

function CandidateDashboard({ language, setLanguage }) {
  const [activeTab, setActiveTab] = useState('Overview')
  const isArabic = language === 'Arabic'

  const menuItems = [
    { name: 'Overview', icon: '⌂', ar: 'نظرة عامة' },
    { name: 'My Profile', icon: '◉', ar: 'ملفي الشخصي' },
    { name: 'My CV', icon: '▤', ar: 'سيرتي الذاتية' },
    { name: 'Find Jobs', icon: '⌕', ar: 'البحث عن وظائف' },
    { name: 'My Applications', icon: '▣', ar: 'طلباتي' },
    { name: 'Saved Jobs', icon: '♡', ar: 'الوظائف المحفوظة' },
    { name: 'Messages', icon: '✉', ar: 'الرسائل' },
    { name: 'Settings', icon: '⚙', ar: 'الإعدادات' }
  ]

  return (
    <div
      className="candidate-dashboard"
      dir={isArabic ? 'rtl' : 'ltr'}
    >
      <aside className="candidate-sidebar">
        <a href="/" className="dashboard-logo">
          OPPORTERA<span>.</span>
        </a>

        <div className="sidebar-label">
          {isArabic ? 'قائمة المرشح' : 'CANDIDATE MENU'}
        </div>

        <nav className="dashboard-menu">
          {menuItems.map(item => (
            <button
              key={item.name}
              className={activeTab === item.name ? 'active' : ''}
              onClick={() => setActiveTab(item.name)}
            >
              <span>{item.icon}</span>
              {isArabic ? item.ar : item.name}
            </button>
          ))}
        </nav>

        <div className="sidebar-bottom">
          <div className="sidebar-avatar">JS</div>
          <div>
            <strong>{isArabic ? 'باحث عن عمل' : 'Job Seeker'}</strong>
            <small>{isArabic ? 'حساب مرشح' : 'Candidate Account'}</small>
          </div>
        </div>
      </aside>

      <main className="candidate-main">
        <header className="dashboard-header">
          <div>
            <span className="dashboard-eyebrow">
              {isArabic ? 'بوابة المرشحين' : 'CANDIDATE PORTAL'}
            </span>
            <h1>
              {isArabic
                ? 'مرحباً بك في أوبورتيرا!'
                : 'Welcome to Opportera!'}
            </h1>
            <p>
              {isArabic
                ? 'فرصتك القادمة تبدأ من هنا.'
                : 'Your next opportunity starts here.'}
            </p>
          </div>

          <a href="/" className="dashboard-home">
            {isArabic ? 'زيارة الموقع ↗' : 'Visit Website ↗'}
          </a>
        </header>

        {activeTab === 'Overview' ? (
          <>
            <section className="welcome-card">
              <div>
                <span>
                  {isArabic ? 'رحلتك المهنية' : 'YOUR CAREER JOURNEY'}
                </span>

                <h2>
                  {isArabic
                    ? 'ابنِ مستقبلك مع أوبورتيرا.'
                    : 'Build your future with Opportera.'}
                </h2>

                <p>
                  {isArabic
                    ? 'أكمل ملفك المهني لمساعدة أصحاب العمل على اكتشاف مهاراتك وخبراتك.'
                    : 'Complete your professional profile to help employers discover your skills and experience.'}
                </p>

                <button onClick={() => setActiveTab('My Profile')}>
                  {isArabic ? 'أكمل ملفي الشخصي ←' : 'Complete My Profile →'}
                </button>
              </div>

              <div className="welcome-symbol">O.</div>
            </section>

            <section className="dashboard-stats">
              <div className="stat-card">
                <span>{isArabic ? 'الطلبات' : 'Applications'}</span>
                <strong>0</strong>
                <small>
                  {isArabic
                    ? 'الوظائف التي تقدمت إليها'
                    : "Jobs you've applied for"}
                </small>
              </div>

              <div className="stat-card">
                <span>{isArabic ? 'الوظائف المحفوظة' : 'Saved Jobs'}</span>
                <strong>0</strong>
                <small>
                  {isArabic
                    ? 'الفرص التي أضفتها إلى المفضلة'
                    : 'Your bookmarked opportunities'}
                </small>
              </div>

              <div className="stat-card">
                <span>{isArabic ? 'مشاهدات الملف الشخصي' : 'Profile Views'}</span>
                <strong>0</strong>
                <small>
                  {isArabic
                    ? 'زيارات أصحاب العمل لملفك'
                    : 'Employer profile visits'}
                </small>
              </div>
            </section>

            <section className="dashboard-content-grid">
              <div className="dashboard-panel">
                <h3>
                  {isArabic ? 'اكتمال الملف الشخصي' : 'Profile Completion'}
                </h3>

                <p>
                  {isArabic
                    ? 'أكمل ملفك الشخصي لتحسين ظهورك أمام أصحاب العمل.'
                    : 'Complete your profile to improve your visibility.'}
                </p>

                <div className="progress-track">
                  <div className="progress-value"></div>
                </div>

                <small>
                  {isArabic
                    ? 'لم يكتمل الملف الشخصي بعد'
                    : 'Profile not yet completed'}
                </small>

                <button
                  className="panel-link"
                  onClick={() => setActiveTab('My Profile')}
                >
                  {isArabic ? 'تحديث الملف الشخصي ←' : 'Update Profile →'}
                </button>
              </div>

              <div className="dashboard-panel">
                <h3>{isArabic ? 'إجراءات سريعة' : 'Quick Actions'}</h3>

                <button
                  className="quick-action"
                  onClick={() => setActiveTab('My CV')}
                >
                  + {isArabic ? 'تحميل سيرتك الذاتية' : 'Upload Your CV'}
                </button>

                <button
                  className="quick-action"
                  onClick={() => setActiveTab('Find Jobs')}
                >
                  + {isArabic
                    ? 'استكشف فرص العمل'
                    : 'Explore Job Opportunities'}
                </button>

                <button
                  className="quick-action"
                  onClick={() => setActiveTab('My Applications')}
                >
                  + {isArabic ? 'عرض طلبات التوظيف' : 'View Applications'}
                </button>
              </div>
            </section>
          </>
        ) : activeTab === 'My Profile' ? (
          <MyProfile language={language} />
        ) : activeTab === 'My CV' ? (
          <MyCV language={language} />
        ) : activeTab === 'Find Jobs' ? (
          <FindJobs language={language} />
        ) : activeTab === 'My Applications' ? (
          <MyApplications language={language} />
        ) : activeTab === 'Saved Jobs' ? (
          <SavedJobs language={language} />
        ) : activeTab === 'Messages' ? (
          <Messages language={language} />
        ) : activeTab === 'Settings' ? (
          <Settings
            language={language}
            setLanguage={setLanguage}
          />
        ) : (
          <section className="dashboard-placeholder">
            <span className="placeholder-icon">✦</span>
            <h2>{activeTab}</h2>
            <p>
              Your {activeTab.toLowerCase()} section will be available
              as we build the Opportera platform.
            </p>
            <button onClick={() => setActiveTab('Overview')}>
              ← Back to Overview
            </button>
          </section>
        )}

        <footer className="dashboard-footer">
          {isArabic
            ? 'نربط الأشخاص ونصنع الفرص.'
            : 'Connecting People. Creating Opportunities.'}
        </footer>
      </main>
    </div>
  )
}

export default CandidateDashboard

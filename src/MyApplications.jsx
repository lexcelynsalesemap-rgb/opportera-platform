
import { useState } from 'react'
import './MyApplications.css'

const sampleApplications = [
  {
    id: 1,
    title: 'Customer Service Representative',
    arTitle: 'ممثل خدمة العملاء',
    company: 'Opportera Demo Company',
    location: 'Doha, Qatar',
    date: '06 Nov 2026',
    status: 'Under Review'
  },
  {
    id: 2,
    title: 'Administrative Assistant',
    arTitle: 'مساعد إداري',
    company: 'International Services Group',
    location: 'Dubai, UAE',
    date: '03 Nov 2026',
    status: 'Shortlisted'
  },
  {
    id: 3,
    title: 'Accountant',
    arTitle: 'محاسب',
    company: 'Global Business Solutions',
    location: 'Doha, Qatar',
    date: '29 Oct 2026',
    status: 'Interview'
  },
  {
    id: 4,
    title: 'Sales Executive',
    arTitle: 'تنفيذي مبيعات',
    company: 'Future Marketing Company',
    location: 'Riyadh, Saudi Arabia',
    date: '25 Oct 2026',
    status: 'Rejected'
  }
]

function MyApplications({ language }) {
  const isArabic = language === 'Arabic'

  const [filter, setFilter] = useState('All')
  const [applications, setApplications] = useState(sampleApplications)

  const filters = [
    'All',
    'Under Review',
    'Shortlisted',
    'Interview',
    'Rejected',
    'Withdrawn'
  ]

  const statusTranslations = {
    'All': 'الكل',
    'Under Review': 'قيد المراجعة',
    'Shortlisted': 'ضمن القائمة المختصرة',
    'Interview': 'مقابلة',
    'Rejected': 'مرفوض',
    'Withdrawn': 'تم سحب الطلب'
  }

  const filteredApplications = filter === 'All'
    ? applications
    : applications.filter(app => app.status === filter)

  const getStatusClass = (status) => {
    return status.toLowerCase().replaceAll(' ', '-')
  }

  const withdrawApplication = (id) => {
    const confirmed = window.confirm(
      isArabic
        ? 'هل أنت متأكد أنك تريد سحب هذا الطلب؟'
        : 'Are you sure you want to withdraw this application?'
    )

    if (confirmed) {
      setApplications(prev =>
        prev.map(app =>
          app.id === id
            ? { ...app, status: 'Withdrawn' }
            : app
        )
      )
    }
  }

  return (
    <div className="my-applications" dir={isArabic ? 'rtl' : 'ltr'}>

      <div className="applications-heading">
        <span>
          {isArabic ? 'نشاط البحث عن الوظائف' : 'YOUR JOB SEARCH ACTIVITY'}
        </span>

        <h2>
          {isArabic ? 'طلباتي الوظيفية' : 'My Applications'}
        </h2>

        <p>
          {isArabic
            ? 'تابع طلبات التوظيف الخاصة بك وابقَ على اطلاع بمسيرتك المهنية.'
            : 'Track your job applications and stay updated on your career journey.'}
        </p>
      </div>

      <div className="application-stats">

        <div className="application-stat">
          <span>
            {isArabic ? 'إجمالي الطلبات' : 'Total Applications'}
          </span>
          <strong>{applications.length}</strong>
        </div>

        <div className="application-stat">
          <span>
            {isArabic ? 'قيد المراجعة' : 'Under Review'}
          </span>
          <strong>
            {applications.filter(a => a.status === 'Under Review').length}
          </strong>
        </div>

        <div className="application-stat">
          <span>
            {isArabic ? 'ضمن القائمة المختصرة' : 'Shortlisted'}
          </span>
          <strong>
            {applications.filter(a => a.status === 'Shortlisted').length}
          </strong>
        </div>

        <div className="application-stat">
          <span>
            {isArabic ? 'المقابلات' : 'Interviews'}
          </span>
          <strong>
            {applications.filter(a => a.status === 'Interview').length}
          </strong>
        </div>

      </div>

      <section className="applications-panel">

        <div className="applications-panel-heading">
          <h3>
            {isArabic ? 'سجل طلبات التوظيف' : 'Application History'}
          </h3>

          <span>
            {filteredApplications.length}{' '}
            {isArabic ? 'طلبات' : 'applications'}
          </span>
        </div>

        <div className="application-filters">
          {filters.map(item => (
            <button
              key={item}
              className={filter === item ? 'selected' : ''}
              onClick={() => setFilter(item)}
            >
              {isArabic ? statusTranslations[item] : item}
            </button>
          ))}
        </div>

        <div className="application-list">

          {filteredApplications.length > 0 ? (
            filteredApplications.map(app => (
              <article className="application-card" key={app.id}>

                <div className="application-company-icon">
                  {app.company.charAt(0)}
                </div>

                <div className="application-information">
                  <h3>
                    {isArabic ? app.arTitle : app.title}
                  </h3>

                  <p>{app.company}</p>

                  <div className="application-meta">
                    <span>📍 {app.location}</span>

                    <span>
                      {isArabic ? 'تاريخ التقديم:' : 'Applied:'} {app.date}
                    </span>
                  </div>
                </div>

                <div className="application-actions">

                  <span className={`application-status ${getStatusClass(app.status)}`}>
                    {isArabic
                      ? statusTranslations[app.status]
                      : app.status}
                  </span>

                  {app.status !== 'Withdrawn' && app.status !== 'Rejected' && (
                    <button
                      className="withdraw-btn"
                      onClick={() => withdrawApplication(app.id)}
                    >
                      {isArabic ? 'سحب الطلب' : 'Withdraw'}
                    </button>
                  )}

                </div>

              </article>
            ))
          ) : (
            <div className="applications-empty">
              <span>📋</span>

              <h3>
                {isArabic ? 'لم يتم العثور على طلبات' : 'No applications found'}
              </h3>

              <p>
                {isArabic
                  ? 'لا توجد طلبات ضمن هذه الفئة.'
                  : 'There are no applications in this category.'}
              </p>
            </div>
          )}

        </div>
      </section>

      <div className="applications-note">
        <span>🔔</span>

        <p>
          {isArabic
            ? 'سيتم تفعيل تحديثات الطلبات وإشعارات أصحاب العمل عند ربط أوبورتيرا بقاعدة البيانات ونظام المراسلة.'
            : 'Application updates and employer notifications will be enabled when Opportera is connected to its database and messaging system.'}
        </p>
      </div>

      <p style={{ fontSize: '12px', opacity: 0.7, marginTop: '16px' }}>
        {isArabic
          ? 'ملاحظة: هذه بيانات تجريبية للعرض فقط وليست طلبات توظيف حقيقية.'
          : 'Note: These are fictional demo records for preview purposes, not real job applications.'}
      </p>

    </div>
  )
}

export default MyApplications

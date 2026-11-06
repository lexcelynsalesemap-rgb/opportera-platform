
import { useState } from 'react'
import './FindJobs.css'

const sampleJobs = [
  {
    id: 1,
    title: 'Customer Service Representative',
    arTitle: 'ممثل خدمة العملاء',
    company: 'Opportera Demo Company',
    location: 'Doha, Qatar',
    category: 'Customer Service',
    type: 'Full Time',
    salary: 'QAR 3,000–4,000',
    experience: '1–3 years',
    description: 'Assist customers, answer inquiries and provide professional customer support.',
    arDescription: 'مساعدة العملاء والإجابة عن استفساراتهم وتقديم دعم احترافي للعملاء.'
  },
  {
    id: 2,
    title: 'Accountant',
    arTitle: 'محاسب',
    company: 'Global Business Solutions',
    location: 'Doha, Qatar',
    category: 'Finance & Accounting',
    type: 'Full Time',
    salary: 'QAR 4,000–5,500',
    experience: '2–4 years',
    description: 'Manage financial records, prepare reports and support daily accounting operations.',
    arDescription: 'إدارة السجلات المالية وإعداد التقارير ودعم العمليات المحاسبية اليومية.'
  },
  {
    id: 3,
    title: 'Administrative Assistant',
    arTitle: 'مساعد إداري',
    company: 'International Services Group',
    location: 'Dubai, UAE',
    category: 'Administration',
    type: 'Full Time',
    salary: 'AED 3,500–4,500',
    experience: '1–3 years',
    description: 'Provide administrative support, coordinate schedules and maintain office records.',
    arDescription: 'تقديم الدعم الإداري وتنسيق المواعيد والمحافظة على سجلات المكتب.'
  },
  {
    id: 4,
    title: 'Sales Executive',
    arTitle: 'تنفيذي مبيعات',
    company: 'Future Marketing Company',
    location: 'Riyadh, Saudi Arabia',
    category: 'Sales & Marketing',
    type: 'Full Time',
    salary: 'SAR 4,000–6,000',
    experience: '2–5 years',
    description: 'Develop customer relationships, identify opportunities and achieve sales targets.',
    arDescription: 'بناء علاقات مع العملاء وتحديد فرص البيع وتحقيق أهداف المبيعات.'
  },
  {
    id: 5,
    title: 'IT Support Technician',
    arTitle: 'فني دعم تقنية المعلومات',
    company: 'Digital Technology Solutions',
    location: 'Doha, Qatar',
    category: 'IT',
    type: 'Full Time',
    salary: 'QAR 4,000–6,000',
    experience: '1–3 years',
    description: 'Provide technical assistance, troubleshoot computer issues and support users.',
    arDescription: 'تقديم المساعدة التقنية وحل مشكلات الحاسوب ودعم المستخدمين.'
  },
  {
    id: 6,
    title: 'Hotel Receptionist',
    arTitle: 'موظف استقبال فندقي',
    company: 'Hospitality International',
    location: 'Manila, Philippines',
    category: 'Hospitality',
    type: 'Full Time',
    salary: 'PHP 20,000–28,000',
    experience: '1–2 years',
    description: 'Welcome guests, manage reservations and provide excellent front-desk service.',
    arDescription: 'استقبال الضيوف وإدارة الحجوزات وتقديم خدمة متميزة في مكتب الاستقبال.'
  }
]

function FindJobs({ language }) {
  const isArabic = language === 'Arabic'

  const [search, setSearch] = useState('')
  const [location, setLocation] = useState('')
  const [category, setCategory] = useState('All Categories')
  const [selectedJob, setSelectedJob] = useState(null)

  const categoryTranslations = {
    'All Categories': 'جميع الفئات',
    'Administration': 'الإدارة',
    'Customer Service': 'خدمة العملاء',
    'Finance & Accounting': 'المالية والمحاسبة',
    'IT': 'تقنية المعلومات',
    'Sales & Marketing': 'المبيعات والتسويق',
    'Hospitality': 'الضيافة',
    'Engineering': 'الهندسة'
  }

  const filteredJobs = sampleJobs.filter(job => {
    const searchText = search.toLowerCase()

    const matchesSearch =
      job.title.toLowerCase().includes(searchText) ||
      job.company.toLowerCase().includes(searchText) ||
      job.description.toLowerCase().includes(searchText) ||
      (job.arTitle && job.arTitle.includes(search)) ||
      (job.arDescription && job.arDescription.includes(search))

    const matchesLocation =
      job.location.toLowerCase().includes(location.toLowerCase())

    const matchesCategory =
      category === 'All Categories' || job.category === category

    return matchesSearch && matchesLocation && matchesCategory
  })

  return (
    <div className="find-jobs" dir={isArabic ? 'rtl' : 'ltr'}>

      <div className="jobs-heading">
        <span>
          {isArabic ? 'فرصتك المهنية القادمة' : 'YOUR NEXT CAREER OPPORTUNITY'}
        </span>

        <h2>
          {isArabic ? 'ابحث عن وظيفتك القادمة' : 'Find Your Next Job'}
        </h2>

        <p>
          {isArabic
            ? 'استكشف فرص العمل في قطر ومختلف أنحاء العالم.'
            : 'Explore opportunities in Qatar and around the world.'}
        </p>
      </div>

      <section className="job-search-panel">

        <label>
          {isArabic ? 'المسمى الوظيفي أو كلمة البحث' : 'Job Title or Keyword'}

          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder={
              isArabic
                ? 'مثال: محاسب، موظف استقبال...'
                : 'e.g. Accountant, Receptionist...'
            }
          />
        </label>

        <label>
          {isArabic ? 'البلد أو المدينة' : 'Country or City'}

          <input
            value={location}
            onChange={e => setLocation(e.target.value)}
            placeholder={
              isArabic
                ? 'مثال: الدوحة، قطر...'
                : 'e.g. Doha, Qatar...'
            }
          />
        </label>

        <label>
          {isArabic ? 'مجال العمل' : 'Industry'}

          <select
            value={category}
            onChange={e => setCategory(e.target.value)}
          >
            {Object.entries(categoryTranslations).map(([value, arabic]) => (
              <option key={value} value={value}>
                {isArabic ? arabic : value}
              </option>
            ))}
          </select>
        </label>

      </section>

      <div className="jobs-results-heading">
        <div>
          <h3>
            {isArabic ? 'الفرص الوظيفية المتاحة' : 'Available Opportunities'}
          </h3>

          <p>
            {filteredJobs.length}{' '}
            {isArabic ? 'وظائف تجريبية متاحة' : 'sample jobs found'}
          </p>
        </div>
      </div>

      {selectedJob ? (
        <section className="job-detail-card">

          <button
            className="back-jobs-btn"
            onClick={() => setSelectedJob(null)}
          >
            {isArabic ? '→ العودة إلى الوظائف' : '← Back to Jobs'}
          </button>

          <span className="job-category">
            {isArabic
              ? categoryTranslations[selectedJob.category] || selectedJob.category
              : selectedJob.category}
          </span>

          <h2>
            {isArabic ? selectedJob.arTitle : selectedJob.title}
          </h2>

          <h3>{selectedJob.company}</h3>

          <div className="job-detail-meta">
            <span>📍 {selectedJob.location}</span>
            <span>💼 {isArabic ? 'دوام كامل' : selectedJob.type}</span>
            <span>💰 {selectedJob.salary}</span>
            <span>
              ⭐ {isArabic ? 'الخبرة' : 'Experience'}: {selectedJob.experience}
            </span>
          </div>

          <h3>{isArabic ? 'الوصف الوظيفي' : 'Job Description'}</h3>

          <p>
            {isArabic
              ? selectedJob.arDescription
              : selectedJob.description}
          </p>

          <button
            className="apply-job-btn"
            onClick={() =>
              alert(
                isArabic
                  ? 'سيتم تفعيل التقديم على الوظائف عند ربط أوبورتيرا بقاعدة البيانات.'
                  : 'Job applications will be enabled when Opportera is connected to its database.'
              )
            }
          >
            {isArabic ? 'تقدم لهذه الوظيفة ←' : 'Apply for This Job →'}
          </button>

        </section>
      ) : (
        <div className="jobs-list">

          {filteredJobs.length > 0 ? (
            filteredJobs.map(job => (
              <article className="job-card" key={job.id}>

                <div className="job-card-top">
                  <div className="company-avatar">
                    {job.company.charAt(0)}
                  </div>

                  <div className="job-card-title">
                    <h3>
                      {isArabic ? job.arTitle : job.title}
                    </h3>

                    <p>{job.company}</p>
                  </div>
                </div>

                <div className="job-tags">
                  <span>📍 {job.location}</span>
                  <span>💼 {isArabic ? 'دوام كامل' : job.type}</span>
                  <span>
                    {isArabic
                      ? categoryTranslations[job.category] || job.category
                      : job.category}
                  </span>
                </div>

                <div className="job-card-bottom">
                  <div>
                    <strong>{job.salary}</strong>

                    <small>
                      {job.experience}{' '}
                      {isArabic ? 'من الخبرة' : 'experience'}
                    </small>
                  </div>

                  <button onClick={() => setSelectedJob(job)}>
                    {isArabic ? 'عرض التفاصيل ←' : 'View Details →'}
                  </button>
                </div>

              </article>
            ))
          ) : (
            <div className="no-jobs">
              <span>⌕</span>

              <h3>
                {isArabic ? 'لم يتم العثور على وظائف' : 'No jobs found'}
              </h3>

              <p>
                {isArabic
                  ? 'جرّب كلمة بحث أو موقعاً أو مجال عمل آخر.'
                  : 'Try another keyword, location or industry.'}
              </p>
            </div>
          )}

        </div>
      )}

      <p style={{ fontSize: '12px', opacity: 0.7, marginTop: '20px' }}>
        {isArabic
          ? 'ملاحظة: هذه إعلانات تجريبية لأغراض العرض فقط وليست وظائف شاغرة مؤكدة.'
          : 'Note: These are fictional demo listings for preview purposes, not verified vacancies.'}
      </p>

    </div>
  )
}

export default FindJobs

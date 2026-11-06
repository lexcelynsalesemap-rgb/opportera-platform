
import { useState } from 'react'
import './SavedJobs.css'

function SavedJobs({ language }) {
  const isArabic = language === 'Arabic'

  const [savedJobs, setSavedJobs] = useState([
    {
      id: 1,
      title: 'Customer Service Representative',
      arTitle: 'ممثل خدمة العملاء',
      company: 'Opportera Demo Company',
      location: 'Doha, Qatar',
      salary: 'QAR 3,000 - 4,000',
      type: 'Full-time',
      category: 'Customer Service'
    },
    {
      id: 2,
      title: 'Accountant',
      arTitle: 'محاسب',
      company: 'Global Business Solutions',
      location: 'Doha, Qatar',
      salary: 'QAR 4,000 - 5,500',
      type: 'Full-time',
      category: 'Finance & Accounting'
    },
    {
      id: 3,
      title: 'Administrative Assistant',
      arTitle: 'مساعد إداري',
      company: 'International Services Group',
      location: 'Dubai, UAE',
      salary: 'AED 3,500 - 4,500',
      type: 'Full-time',
      category: 'Administration'
    }
  ])

  const categoryTranslations = {
    'Customer Service': 'خدمة العملاء',
    'Finance & Accounting': 'المالية والمحاسبة',
    'Administration': 'الإدارة'
  }

  const removeJob = (id) => {
    setSavedJobs(prev => prev.filter(job => job.id !== id))
  }

  return (
    <div className="saved-jobs-page" dir={isArabic ? 'rtl' : 'ltr'}>

      <div className="saved-jobs-header">
        <div>
          <h1>
            {isArabic ? 'الوظائف المحفوظة' : 'Saved Jobs'}
          </h1>

          <p>
            {isArabic
              ? 'احتفظ بفرص العمل التي تهمك وتابعها بسهولة.'
              : "Keep track of the opportunities you're interested in."}
          </p>
        </div>

        <div className="saved-count">
          <strong>{savedJobs.length}</strong>
          <span>
            {isArabic ? 'وظائف محفوظة' : 'Saved Jobs'}
          </span>
        </div>
      </div>

      {savedJobs.length === 0 ? (
        <div className="saved-empty">
          <h2>
            {isArabic ? 'لا توجد وظائف محفوظة بعد' : 'No saved jobs yet'}
          </h2>

          <p>
            {isArabic
              ? 'عندما تجد فرصة عمل مناسبة، يمكنك حفظها هنا.'
              : 'When you find an interesting opportunity, save it here.'}
          </p>
        </div>
      ) : (
        <div className="saved-jobs-list">

          {savedJobs.map(job => (
            <div className="saved-job-card" key={job.id}>

              <div className="saved-job-top">
                <div className="saved-job-icon">💼</div>

                <span className="saved-job-type">
                  {isArabic ? 'دوام كامل' : job.type}
                </span>
              </div>

              <h2>
                {isArabic ? job.arTitle : job.title}
              </h2>

              <p className="saved-company">{job.company}</p>

              <div className="saved-job-details">
                <span>📍 {job.location}</span>
                <span>💰 {job.salary}</span>
                <span>
                  🏷️ {isArabic
                    ? categoryTranslations[job.category] || job.category
                    : job.category}
                </span>
              </div>

              <div className="saved-job-actions">
                <button
                  className="view-saved-job"
                  onClick={() =>
                    alert(
                      isArabic
                        ? 'سيتم تفعيل تفاصيل الوظيفة عند ربط أوبورتيرا بقاعدة البيانات.'
                        : 'Job details will be available when Opportera is connected to its database.'
                    )
                  }
                >
                  {isArabic ? 'عرض التفاصيل' : 'View Details'}
                </button>

                <button
                  className="remove-saved-job"
                  onClick={() => removeJob(job.id)}
                >
                  {isArabic ? 'إزالة' : 'Remove'}
                </button>
              </div>

            </div>
          ))}

        </div>
      )}

      <p style={{ fontSize: '12px', opacity: 0.7, marginTop: '16px' }}>
        {isArabic
          ? 'ملاحظة: هذه وظائف تجريبية محفوظة للعرض فقط. سيتم ربط الوظائف المحفوظة بحسابك عند تفعيل قاعدة البيانات.'
          : 'Note: These are fictional demo saved jobs. Saved jobs will be linked to your account when the database is connected.'}
      </p>

    </div>
  )
}

export default SavedJobs

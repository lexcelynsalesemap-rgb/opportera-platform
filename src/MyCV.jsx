
import { useState } from 'react'
import './MyCV.css'

function MyCV({ language }) {
  const isArabic = language === 'Arabic'

  const [cvFile, setCvFile] = useState(null)
  const [error, setError] = useState('')

  const handleFileChange = (e) => {
    const file = e.target.files[0]

    if (!file) return

    const validTypes = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    ]

    if (!validTypes.includes(file.type)) {
      setError(
        isArabic
          ? 'يرجى تحميل ملف بصيغة PDF أو Word.'
          : 'Please upload a PDF or Word document.'
      )
      e.target.value = ''
      return
    }

    if (file.size > 5 * 1024 * 1024) {
      setError(
        isArabic
          ? 'يجب ألا يتجاوز حجم سيرتك الذاتية 5 ميجابايت.'
          : 'Your CV must be smaller than 5 MB.'
      )
      e.target.value = ''
      return
    }

    setError('')
    setCvFile(file)
  }

  const removeCV = () => {
    setCvFile(null)
    setError('')
  }

  return (
    <div className="my-cv" dir={isArabic ? 'rtl' : 'ltr'}>

      <div className="cv-heading">
        <span>
          {isArabic ? 'مستنداتك المهنية' : 'YOUR CAREER DOCUMENTS'}
        </span>

        <h2>
          {isArabic ? 'سيرتي الذاتية' : 'My CV / Resume'}
        </h2>

        <p>
          {isArabic
            ? 'حمّل سيرتك الذاتية لمساعدة أصحاب العمل على فهم خبراتك ومؤهلاتك.'
            : 'Upload your CV to help employers understand your experience and qualifications.'}
        </p>
      </div>

      <section className="cv-upload-card">
        <div className="cv-icon">📄</div>

        <h3>
          {isArabic ? 'تحميل سيرتك الذاتية' : 'Upload Your CV'}
        </h3>

        <p>
          {isArabic
            ? 'اختر ملف PDF أو Word من جهازك.'
            : 'Choose a PDF or Word document from your device.'}
        </p>

        <small>
          {isArabic
            ? 'الصيغ المقبولة: PDF وDOC وDOCX · الحد الأقصى للحجم: 5 ميجابايت'
            : 'Accepted formats: PDF, DOC, DOCX · Maximum size: 5 MB'}
        </small>

        <label className="cv-upload-btn">
          {isArabic ? 'اختيار ملف السيرة الذاتية' : 'Choose CV File'}

          <input
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={handleFileChange}
            hidden
          />
        </label>

        {error && <p className="cv-error">{error}</p>}
      </section>

      {cvFile && (
        <section className="cv-file-card">
          <div className="cv-file-icon">📎</div>

          <div className="cv-file-details">
            <strong>{cvFile.name}</strong>

            <small>
              {(cvFile.size / 1024 / 1024).toFixed(2)} MB
            </small>

            <span>
              {isArabic
                ? 'تم اختيار الملف من هذا الجهاز'
                : 'Selected on this device'}
            </span>
          </div>

          <button className="cv-remove-btn" onClick={removeCV}>
            {isArabic ? 'إزالة' : 'Remove'}
          </button>
        </section>
      )}

      <section className="cv-privacy-card">
        <span>🔒</span>

        <div>
          <h3>
            {isArabic ? 'سيرتك الذاتية، وتحكمك الكامل' : 'Your CV, Your Control'}
          </h3>

          <p>
            {isArabic
              ? 'يجب مشاركة سيرتك الذاتية مع أصحاب العمل وفقاً لخيارات الخصوصية الخاصة بك. ستتم إضافة التخزين الآمن وأدوات التحكم في المشاركة عند إنشاء قاعدة البيانات.'
              : 'Your CV should only be shared with employers according to your privacy choices. Secure storage and sharing controls will be connected when we build the database.'}
          </p>
        </div>
      </section>

    </div>
  )
}

export default MyCV

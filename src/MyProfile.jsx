
import { useState } from 'react'
import './MyProfile.css'

function MyProfile({ language }) {
  const isArabic = language === 'Arabic'

  const [profile, setProfile] = useState({
    fullName: '',
    email: '',
    phone: '',
    currentCountry: 'Qatar',
    preferredCountry: 'Qatar',
    jobTitle: '',
    experience: '',
    education: '',
    skills: '',
    languages: '',
    summary: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target

    setProfile({
      ...profile,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(
      isArabic
        ? 'تم حفظ ملفك الشخصي في هذه النسخة التجريبية. ستتم إضافة حفظ البيانات في قاعدة البيانات لاحقاً.'
        : 'Your profile has been saved in this preview. Database storage will be added later.'
    )
  }

  return (
    <div className="my-profile" dir={isArabic ? 'rtl' : 'ltr'}>

      <div className="profile-heading">
        <span>
          {isArabic ? 'ملفك المهني' : 'YOUR PROFESSIONAL PROFILE'}
        </span>

        <h2>
          {isArabic ? 'أنشئ ملفك الشخصي' : 'Build Your Profile'}
        </h2>

        <p>
          {isArabic
            ? 'أخبر أصحاب العمل عن خبراتك ومهاراتك وأهدافك المهنية.'
            : 'Tell employers about your experience, skills and career goals.'}
        </p>
      </div>

      <form className="profile-form" onSubmit={handleSubmit}>

        <section className="profile-section">
          <h3>{isArabic ? 'المعلومات الشخصية' : 'Personal Information'}</h3>

          <div className="profile-grid">
            <label>
              {isArabic ? 'الاسم الكامل' : 'Full Name'}
              <input
                name="fullName"
                value={profile.fullName}
                onChange={handleChange}
                required
                placeholder={isArabic ? 'أدخل اسمك الكامل' : 'Enter your full name'}
              />
            </label>

            <label>
              {isArabic ? 'البريد الإلكتروني' : 'Email Address'}
              <input
                name="email"
                type="email"
                value={profile.email}
                onChange={handleChange}
                required
                placeholder={isArabic ? 'أدخل بريدك الإلكتروني' : 'Enter your email'}
              />
            </label>

            <label>
              {isArabic ? 'رقم الهاتف' : 'Phone Number'}
              <input
                name="phone"
                value={profile.phone}
                onChange={handleChange}
                placeholder="+974..."
              />
            </label>

            <label>
              {isArabic ? 'بلد الإقامة الحالي' : 'Current Country'}
              <input
                name="currentCountry"
                value={profile.currentCountry}
                onChange={handleChange}
              />
            </label>
          </div>
        </section>

        <section className="profile-section">
          <h3>{isArabic ? 'التفضيلات المهنية' : 'Career Preferences'}</h3>

          <div className="profile-grid">
            <label>
              {isArabic ? 'وجهة العمل المفضلة' : 'Preferred Work Destination'}
              <input
                name="preferredCountry"
                value={profile.preferredCountry}
                onChange={handleChange}
                placeholder={isArabic ? 'مثال: قطر، الإمارات، كندا' : 'e.g. Qatar, UAE, Canada'}
              />
            </label>

            <label>
              {isArabic ? 'المسمى الوظيفي' : 'Professional Job Title'}
              <input
                name="jobTitle"
                value={profile.jobTitle}
                onChange={handleChange}
                placeholder={isArabic ? 'مثال: محاسب، فني' : 'e.g. Accountant, Technician'}
              />
            </label>

            <label>
              {isArabic ? 'سنوات الخبرة' : 'Years of Experience'}
              <select
                name="experience"
                value={profile.experience}
                onChange={handleChange}
              >
                <option value="">
                  {isArabic ? 'اختر سنوات الخبرة' : 'Select experience'}
                </option>
                <option value="Fresh Graduate">
                  {isArabic ? 'حديث التخرج' : 'Fresh Graduate'}
                </option>
                <option value="Less than 1 year">
                  {isArabic ? 'أقل من سنة' : 'Less than 1 year'}
                </option>
                <option value="1–3 years">1–3 {isArabic ? 'سنوات' : 'years'}</option>
                <option value="4–6 years">4–6 {isArabic ? 'سنوات' : 'years'}</option>
                <option value="7–10 years">7–10 {isArabic ? 'سنوات' : 'years'}</option>
                <option value="More than 10 years">
                  {isArabic ? 'أكثر من 10 سنوات' : 'More than 10 years'}
                </option>
              </select>
            </label>

            <label>
              {isArabic ? 'المؤهل العلمي' : 'Education'}
              <input
                name="education"
                value={profile.education}
                onChange={handleChange}
                placeholder={isArabic ? 'أعلى مؤهل دراسي' : 'Highest qualification'}
              />
            </label>
          </div>
        </section>

        <section className="profile-section">
          <h3>{isArabic ? 'المهارات واللغات' : 'Skills & Languages'}</h3>

          <div className="profile-grid">
            <label>
              {isArabic ? 'المهارات المهنية' : 'Professional Skills'}
              <textarea
                name="skills"
                value={profile.skills}
                onChange={handleChange}
                placeholder={
                  isArabic
                    ? 'مثال: خدمة العملاء، إكسل، المبيعات'
                    : 'e.g. Customer service, Excel, Sales'
                }
              />
            </label>

            <label>
              {isArabic ? 'اللغات' : 'Languages'}
              <textarea
                name="languages"
                value={profile.languages}
                onChange={handleChange}
                placeholder={
                  isArabic
                    ? 'مثال: الإنجليزية، العربية، الفلبينية'
                    : 'e.g. English, Arabic, Filipino'
                }
              />
            </label>
          </div>
        </section>

        <section className="profile-section">
          <h3>{isArabic ? 'الملخص المهني' : 'Professional Summary'}</h3>

          <label>
            {isArabic ? 'نبذة عني' : 'About Me'}
            <textarea
              className="summary-input"
              name="summary"
              value={profile.summary}
              onChange={handleChange}
              placeholder={
                isArabic
                  ? 'عرّف بنفسك، واشرح خبراتك والفرص المهنية التي تبحث عنها...'
                  : 'Introduce yourself, describe your experience and explain what opportunities you are looking for...'
              }
            />
          </label>
        </section>

        <button className="save-profile-btn" type="submit">
          {isArabic ? 'حفظ ملفي الشخصي ←' : 'Save My Profile →'}
        </button>

      </form>
    </div>
  )
}

export default MyProfile

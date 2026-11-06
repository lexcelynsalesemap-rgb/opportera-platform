
import { useState } from 'react'
import './Settings.css'

function Settings({ language, setLanguage }) {
  const isArabic = language === 'Arabic'

  const [settings, setSettings] = useState({
    emailNotifications: true,
    jobAlerts: true,
    applicationUpdates: true,
    interviewReminders: true,
    profileVisibility: 'Employers',
  })

  const updateSetting = (name, value) => {
    setSettings(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSave = () => {
    alert(
      isArabic
        ? 'تم حفظ إعداداتك في هذه النسخة التجريبية!'
        : 'Your settings have been saved in this preview!'
    )
  }

  return (
    <div className="settings-page" dir={isArabic ? 'rtl' : 'ltr'}>

      <div className="settings-heading">
        <h1>
          {isArabic ? 'إعدادات الحساب' : 'Account Settings'}
        </h1>
        <p>
          {isArabic
            ? 'إدارة تفضيلاتك وإشعاراتك وخصوصيتك.'
            : 'Manage your preferences, notifications and privacy.'}
        </p>
      </div>

      <div className="settings-card">
        <h2>{isArabic ? 'الإشعارات' : 'Notifications'}</h2>

        <p className="settings-description">
          {isArabic
            ? 'اختر التحديثات التي ترغب في تلقيها.'
            : 'Choose which updates you would like to receive.'}
        </p>

        <label className="setting-row">
          <span>
            <strong>
              {isArabic ? 'إشعارات البريد الإلكتروني' : 'Email Notifications'}
            </strong>
            <small>
              {isArabic
                ? 'تلقي التحديثات المهمة عبر البريد الإلكتروني.'
                : 'Receive important updates by email.'}
            </small>
          </span>
          <input
            type="checkbox"
            checked={settings.emailNotifications}
            onChange={e => updateSetting('emailNotifications', e.target.checked)}
          />
        </label>

        <label className="setting-row">
          <span>
            <strong>{isArabic ? 'تنبيهات الوظائف' : 'Job Alerts'}</strong>
            <small>
              {isArabic
                ? 'احصل على إشعارات بالفرص الوظيفية المناسبة لك.'
                : 'Get notified about new matching opportunities.'}
            </small>
          </span>
          <input
            type="checkbox"
            checked={settings.jobAlerts}
            onChange={e => updateSetting('jobAlerts', e.target.checked)}
          />
        </label>

        <label className="setting-row">
          <span>
            <strong>
              {isArabic ? 'تحديثات طلبات التوظيف' : 'Application Updates'}
            </strong>
            <small>
              {isArabic
                ? 'تلقي تحديثات حول طلبات التوظيف الخاصة بك.'
                : 'Receive updates about your job applications.'}
            </small>
          </span>
          <input
            type="checkbox"
            checked={settings.applicationUpdates}
            onChange={e => updateSetting('applicationUpdates', e.target.checked)}
          />
        </label>

        <label className="setting-row">
          <span>
            <strong>
              {isArabic ? 'تذكيرات المقابلات' : 'Interview Reminders'}
            </strong>
            <small>
              {isArabic
                ? 'احصل على تذكيرات بمواعيد المقابلات المحددة.'
                : 'Get reminders about scheduled interviews.'}
            </small>
          </span>
          <input
            type="checkbox"
            checked={settings.interviewReminders}
            onChange={e => updateSetting('interviewReminders', e.target.checked)}
          />
        </label>
      </div>

      <div className="settings-card">
        <h2>
          {isArabic ? 'تفضيلات اللغة' : 'Language Preferences'}
        </h2>

        <p className="settings-description">
          {isArabic
            ? 'اختر اللغة المفضلة لاستخدام المنصة.'
            : 'Select your preferred platform language.'}
        </p>

        <select
          value={language}
          onChange={e => setLanguage(e.target.value)}
        >
          <option value="English">English</option>
          <option value="Arabic">العربية (Arabic)</option>
        </select>
      </div>

      <div className="settings-card">
        <h2>
          {isArabic ? 'إعدادات الخصوصية' : 'Privacy Settings'}
        </h2>

        <p className="settings-description">
          {isArabic
            ? 'اختر من يمكنه مشاهدة ملفك المهني.'
            : 'Choose who can view your professional profile.'}
        </p>

        <select
          value={settings.profileVisibility}
          onChange={e => updateSetting('profileVisibility', e.target.value)}
        >
          <option value="Employers">
            {isArabic ? 'أصحاب العمل المعتمدون' : 'Approved Employers'}
          </option>
          <option value="Private">
            {isArabic ? 'خاص - أنا فقط' : 'Private - Only Me'}
          </option>
        </select>
      </div>

      <button className="save-settings-button" onClick={handleSave}>
        {isArabic ? 'حفظ الإعدادات' : 'Save Settings'}
      </button>

    </div>
  )
}

export default Settings

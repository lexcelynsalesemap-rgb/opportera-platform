
import { useState } from 'react'
import './Messages.css'

function Messages({ language }) {
  const isArabic = language === 'Arabic'

  const [activeChat, setActiveChat] = useState(1)

  const conversations = [
    {
      id: 1,
      company: 'Global Business Solutions',
      contact: 'HR Recruitment Team',
      arContact: 'فريق التوظيف والموارد البشرية',
      role: 'Accountant Application',
      arRole: 'طلب وظيفة محاسب',
      date: 'Today',
      arDate: 'اليوم',
      unread: 2,
      messages: [
        {
          id: 1,
          sender: 'them',
          text: 'Hello! Thank you for applying for our Accountant position.',
          arText: 'مرحباً! شكراً لتقديمك على وظيفة المحاسب لدينا.',
          time: '10:15 AM'
        },
        {
          id: 2,
          sender: 'me',
          text: 'Thank you for considering my application. I look forward to hearing from you.',
          arText: 'شكراً لاهتمامكم بطلبي. أتطلع إلى تلقي ردكم.',
          time: '10:20 AM'
        },
        {
          id: 3,
          sender: 'them',
          text: 'We would like to arrange an interview with you. Are you available this week?',
          arText: 'نود تحديد موعد مقابلة معك. هل أنت متاح خلال هذا الأسبوع؟',
          time: '11:30 AM'
        }
      ]
    },
    {
      id: 2,
      company: 'International Services Group',
      contact: 'Recruitment Department',
      arContact: 'قسم التوظيف',
      role: 'Administrative Assistant',
      arRole: 'مساعد إداري',
      date: 'Yesterday',
      arDate: 'أمس',
      unread: 0,
      messages: [
        {
          id: 1,
          sender: 'them',
          text: 'Thank you for your interest in our Administrative Assistant position. Your profile is currently under review.',
          arText: 'شكراً لاهتمامك بوظيفة المساعد الإداري لدينا. ملفك الشخصي قيد المراجعة حالياً.',
          time: 'Yesterday',
          arTime: 'أمس'
        }
      ]
    },
    {
      id: 3,
      company: 'Opportera Demo Company',
      contact: 'Hiring Manager',
      arContact: 'مدير التوظيف',
      role: 'Customer Service Representative',
      arRole: 'ممثل خدمة العملاء',
      date: 'Nov 4',
      arDate: '4 نوفمبر',
      unread: 0,
      messages: [
        {
          id: 1,
          sender: 'them',
          text: 'Hello! We have received your application. We will contact you with updates.',
          arText: 'مرحباً! لقد استلمنا طلبك وسنتواصل معك لإطلاعك على المستجدات.',
          time: 'Nov 4',
          arTime: '4 نوفمبر'
        }
      ]
    }
  ]

  const selectedChat = conversations.find(
    chat => chat.id === activeChat
  )

  return (
    <div className="messages-page" dir={isArabic ? 'rtl' : 'ltr'}>

      <div className="messages-heading">
        <h1>
          {isArabic ? 'الرسائل' : 'Messages'}
        </h1>

        <p>
          {isArabic
            ? 'تواصل مع أصحاب العمل وتابع محادثات التوظيف الخاصة بك.'
            : 'Communicate with employers and follow your recruitment conversations.'}
        </p>
      </div>

      <div className="messages-container">

        <div className="conversations-panel">

          <h2>
            {isArabic ? 'المحادثات' : 'Conversations'}
          </h2>

          {conversations.map(chat => (
            <button
              key={chat.id}
              className={`conversation-item ${activeChat === chat.id ? 'active' : ''}`}
              onClick={() => setActiveChat(chat.id)}
            >

              <div className="conversation-avatar">
                {chat.company.charAt(0)}
              </div>

              <div className="conversation-info">
                <strong>{chat.company}</strong>

                <span>
                  {isArabic ? chat.arRole : chat.role}
                </span>

                <small>
                  {isArabic ? chat.arDate : chat.date}
                </small>
              </div>

              {chat.unread > 0 && (
                <span className="unread-count">
                  {chat.unread}
                </span>
              )}

            </button>
          ))}

        </div>

        <div className="chat-panel">

          {selectedChat && (
            <>

              <div className="chat-header">

                <div className="conversation-avatar">
                  {selectedChat.company.charAt(0)}
                </div>

                <div>
                  <strong>{selectedChat.company}</strong>

                  <span>
                    {isArabic
                      ? selectedChat.arContact
                      : selectedChat.contact}
                  </span>
                </div>

              </div>

              <div className="chat-job-info">
                <span>
                  {isArabic ? 'الوظيفة المرتبطة:' : 'Related position:'}
                </span>

                <strong>
                  {isArabic
                    ? selectedChat.arRole
                    : selectedChat.role}
                </strong>
              </div>

              <div className="chat-messages">

                {selectedChat.messages.map(message => (
                  <div
                    key={message.id}
                    className={`message-bubble ${message.sender === 'me' ? 'my-message' : 'their-message'}`}
                  >

                    <p>
                      {isArabic ? message.arText : message.text}
                    </p>

                    <small>
                      {isArabic
                        ? message.arTime || message.time
                        : message.time}
                    </small>

                  </div>
                ))}

              </div>

              <div className="chat-input-area">

                <input
                  type="text"
                  placeholder={
                    isArabic
                      ? 'ستتوفر خدمة المراسلة قريباً...'
                      : 'Messaging will be enabled soon...'
                  }
                  disabled
                />

                <button disabled>
                  {isArabic ? 'إرسال' : 'Send'}
                </button>

              </div>

            </>
          )}

        </div>

      </div>

      <p style={{ fontSize: '12px', opacity: 0.7, marginTop: '16px' }}>
        {isArabic
          ? 'ملاحظة: هذه محادثات تجريبية للعرض فقط. ستتوفر المراسلة الحقيقية بعد ربط قاعدة البيانات ونظام الرسائل.'
          : 'Note: These are fictional demo conversations. Real messaging will be available after connecting the database and messaging system.'}
      </p>

    </div>
  )
}

export default Messages

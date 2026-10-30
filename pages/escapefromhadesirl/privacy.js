import Link from 'next/link'
import HomeButton from '../../components/HomeButton'

export default function EscapeFromHadesIRLPrivacy() {
  return (
    <div className="container">
      <HomeButton />
      <h1>Privacy Policy</h1>
      <p className="subtitle">Escape from Hades IRL</p>
      <p className="updated">Last updated: October 30, 2026</p>

      <div className="content">
        <p>Escape from Hades IRL is a habit, fitness, and notes tracking app built by The Waldgrave. This policy explains what we collect, how we use it, and your choices.</p>

        <h2>Information We Collect</h2>
        <p>Account information (email address, display name, and which sign-in method you used, such as Sign in with Apple or Google); the habits you create and the daily records, streaks, quests, and stats that come from them; chores you track, the dates you completed them, and the reminders you set; notes, checklists, and tags you write; your 60-day quests and badges; your birthday as a month and day only, if you add it in Settings (no year); the name you choose to show chore friends, and which people you are chore friends with; optional icon images you choose from your photo library for a habit tile (only the image you pick is stored, nothing else from your library); and step data from Apple Health or Health Connect if you enable it (see Health Data below). a notification token for your device and its time zone, if you allow notifications (see Notifications below). We do not collect diagnostics, crash logs, or analytics, and we do not collect precise location, contacts, or advertising identifiers.</p>

        <h2>Health Data (Apple Health and Health Connect)</h2>
        <p>If you create a Steps Counter habit, the app asks permission to read your daily step count from Apple Health on iOS or Health Connect on Android. We read step counts only. No other health data is requested or read.</p>
        <p>Step counts are used for one purpose: to record whether you reached the daily step goal you set for that habit. Each day's step count and the goal tier you reached are stored on your own habit record, locally on your device and on our servers (Google Firebase Firestore), so they sync across your devices and appear in your habit history and stats. This data is visible only to you.</p>
        <p>We never share health data with third parties. We never use it for advertising, marketing, analytics, or any purpose other than tracking the step goal you set. We never write data back to Apple Health or Health Connect. Health data is not used to make decisions about you and is never sold.</p>
        <p>You can revoke access at any time in the iOS Settings app under Health, or in the Health Connect app on Android. If you revoke access, the app stops reading steps and you can record the habit by hand instead. Deleting a Steps Counter habit deletes its stored step data, and deleting your account deletes all of it.</p>

        <h2>How We Use Your Information</h2>
        <p>To create and maintain your account; to store and sync your habits, records, quests, chores, and notes across your devices; to show stats, streaks, and progress within the app; to share chores with the friends you choose; to schedule reminders you set and send the shared-chore notifications described below; to secure and troubleshoot the service; and to comply with legal obligations.</p>

        <h2>Chore Friends and Shared Chores</h2>
        <p>You can connect with someone as chore friends by sending them an invite link or code. Chore friends see the name you choose to show them. When you share a chore with a friend, they can see that chore and its completion history, mark it done, and see who last did it. Nothing else in your account is visible to them: not your habits, records, notes, or other chores. You can stop sharing a chore, leave a chore someone shared with you, or remove a friend at any time.</p>

        <h2>Notifications</h2>
        <p>Reminders for your own chores and tasks, and timers, are scheduled locally on your device. For shared chores, our servers send the notifications, so a reminder can be skipped if a friend already did the chore, and so you can hear when a friend does a shared chore or shares one with you. To do that, if you allow notifications, we store a notification token for your device and your time zone. These notifications are delivered through Expo's push notification service and Apple or Google's notification services, which receive the token and the notification text (such as a chore's name) only to deliver it. You can turn notifications off in the device settings at any time.</p>

        <h2>What We Do Not Do</h2>
        <p>We never share your habit data, health data, notes, or any personal content with third parties, other than the chores you choose to share with your chore friends and the notification delivery described above. We do not sell your personal information. We do not use your data for targeted advertising. We do not use analytics or tracking SDKs. We will never use your data for any purpose beyond providing the app's functionality, unless you explicitly grant permission for us to use anonymized data for aggregate statistics.</p>

        <h2>Data Storage</h2>
        <p>Your data is stored locally on your device and on our servers (Google Firebase Authentication and Firestore) to enable syncing. We use reasonable administrative, technical, and physical safeguards to protect your information; however, no method of transmission or storage is 100% secure. Data may be processed and stored on servers operated by our processors in the United States and other regions.</p>

        <h2>Data Retention and Deletion</h2>
        <p>Your data is retained while your account is active. You can delete your account from within the app's settings, which permanently removes your account and all associated data, including habits, records, step data, quests, badges, chores, notes, chore friends, and notification tokens. Chores you shared are deleted for everyone; chores friends shared with you stay theirs. You can also request deletion without the app; see <Link href="/escapefromhadesirl/delete-account">how to delete your account</Link>.</p>

        <h2>Your Choices and Rights</h2>
        <p>You can edit or delete any habit, record, chore, or note at any time within the app. You can turn off health access in your device settings, and turn off reminders in the app or in device notification settings. You can change or remove your birthday, the name chore friends see, and who you share chores with at any time. You can export your own stats from the app at any time.</p>

        <h2>Children</h2>
        <p>The app is not directed to children under 13, and we do not knowingly collect personal data from children under 13. If you believe a child has provided personal data, contact us and we will remove it.</p>

        <h2>Changes to This Policy</h2>
        <p>We may update this policy as the app evolves. We will post updates at this URL and change the "Last updated" date above.</p>

        <h2>Contact</h2>
        <p>bricarlis@gmail.com</p>
      </div>

      <footer className="footer">
        <Link href="/escapefromhadesirl">Escape from Hades IRL</Link>
        <span className="divider">|</span>
        <Link href="/escapefromhadesirl/terms">Terms of Service</Link>
      </footer>

      <style jsx>{`
        .container {
          font-family: 'Avenir', Helvetica, Arial, sans-serif;
          max-width: 700px;
          margin: 0 auto;
          padding: 2em;
          color: #2c3e50;
        }
        h1 {
          text-align: center;
          font-weight: normal;
          margin-bottom: 0.1em;
        }
        .subtitle {
          text-align: center;
          color: #42b983;
          font-size: 1.1em;
          margin-bottom: 0.25em;
        }
        .updated {
          text-align: center;
          color: #999;
          font-size: 0.85em;
          margin-bottom: 2em;
        }
        .content h2 {
          font-size: 1.15em;
          margin-top: 1.5em;
          color: #2c3e50;
        }
        .content p {
          line-height: 1.6;
          text-align: left;
        }
        .content a {
          color: #42b983;
        }
        .footer {
          margin-top: 3em;
          padding-top: 1.5em;
          border-top: 1px solid #eee;
          text-align: center;
          font-size: 0.85em;
        }
        .footer a {
          color: #42b983;
        }
        .divider {
          margin: 0 0.5em;
          color: #ccc;
        }
      `}</style>
    </div>
  )
}

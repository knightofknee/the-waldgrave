import HomeButton from '../components/HomeButton'

export default function DeleteAccount() {
  return (
    <div style={{ textAlign: 'center', padding: '4rem 1rem' }}>
      <HomeButton />
      <h1>410 - Gone</h1>
      <p>This page has been permanently removed.</p>
      <p>The Waldgrave social media is now available as an <a href="https://apps.apple.com/us/app/bekin-by-the-waldgrave/id6746952014">iOS app</a> and an <a href="https://play.google.com/store/apps/details?id=com.waldgrave.bekin">Android app</a>.</p>
      <p><a href="/">Back to home</a></p>
    </div>
  );
}

DeleteAccount.getInitialProps = ({ res }) => {
  if (res) res.statusCode = 410;
  return {};
};

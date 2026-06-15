import Navbar from '../components/presentational/Navbar';

function Profile() {
  const username = sessionStorage.getItem('username');

  return (
    <>
      <Navbar />

      <div className="center-page">
        <div className="profile-card-big">
          <h1>User Profile</h1>

          <div className="user-info">
            <p>
              <strong>Name:</strong> {username}
            </p>
            <p>
              <strong>Status:</strong> Logged In
            </p>
            <p>
              <strong>App:</strong> Mood Tracker
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
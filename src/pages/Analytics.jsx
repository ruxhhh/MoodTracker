import Navbar from '../components/presentational/Navbar';
import AnalyticsContainer from '../components/containers/AnalyticsContainer';

function Analytics() {
  return (
    <>
      <Navbar />

      <div className="center-page">
        <div className="analytics-card">
          <AnalyticsContainer />
        </div>
      </div>
    </>
  );
}

export default Analytics;
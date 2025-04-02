import { useGitHub } from "../context/GitHubContext";

export default function DevInfo() {
  const { userData, loading, error } = useGitHub();

  if (loading) return <div>Loading...</div>;
  if (!userData) return null;

  return (
    <div className="dev-info">
      <div className="avatar-container">
        <img src={null} alt="" />
      </div>
      <div className="info-container">
        <div className="info-container-header">{JSON.stringify(userData)}</div>
        <div className="info-container-bio"></div>
        <div className="info-container-stats"></div>
        <div className="info-container-links"></div>
      </div>
    </div>
  );
}

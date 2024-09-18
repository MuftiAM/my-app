import { useSelector } from "react-redux";
import { RootState } from "../app/store";

const Dashboard: React.FC = () => {
  const token = useSelector((state: RootState) => state.auth.token);

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Token: {token}</p>
    </div>
  );
};

export default Dashboard;

import SupplyPieChart from "./SupplyPieChart";
import GoodPieChart from "./GoodPieChart";
const DashboardHome = () => {
  return (
    <div className="flex lg:flex-row flex-col items-center space-y-12">
      <div>
        <SupplyPieChart></SupplyPieChart>
      </div>
      <div>
        <GoodPieChart></GoodPieChart>
      </div>
    </div>
  );
};

export default DashboardHome;

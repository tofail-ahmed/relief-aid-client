/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSupplyQuery } from "../../redux/supply/supplyApi";
import { PieChart, Pie, Tooltip } from "recharts";
import SectionHeader from "../../utils/SectionHeader";
import { useGoodsQuery } from "../../redux/auth/goods/goodsApi";
import SupplyPieChart from "./SupplyPieChart";
import GoodPieChart from "./GoodPieChart";
const DashboardHome = () => {
  const { data: goods } = useGoodsQuery("");

  const { data, isLoading } = useSupplyQuery("");
  if (isLoading) {
    return <div>Loading...</div>;
  }
  const supplies = data?.data;

  const allGood = goods?.data;
  console.log(goods?.data);
  console.log(allGood);
  //categorize function---------------------
  const categorizedData = supplies?.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});

  const categoryTotals: CategoryTotals = Object.entries(categorizedData).map(
    ([category, items]) => ({
      category,
      amount: items.reduce(
        (total, currentItem) => total + currentItem.amount,
        0
      ),
    })
  );
  //custom tooltip-------------------
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const categoryTotals = payload[0].payload;
      return (
        <div style={{ backgroundColor: "white", padding: "5px" }}>
          <p>{`Category: ${categoryTotals.category}`}</p>
          <p>{`Amount: ${categoryTotals.amount}`}</p>
        </div>
      );
    }
    return null;
  };

  console.log(categoryTotals);
  return (
   <div className="flex lg:flex-row flex-col items-center space-y-12">
    <div><SupplyPieChart></SupplyPieChart></div>
    <div><GoodPieChart></GoodPieChart></div>
   </div>
  );
};

export default DashboardHome;

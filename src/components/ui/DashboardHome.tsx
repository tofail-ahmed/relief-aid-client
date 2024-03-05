import { useSupplyQuery } from "../../redux/supply/supplyApi";
import React, { PureComponent } from "react";
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from "recharts";
import SectionHeader from "../../utils/SectionHeader";

const DashboardHome = () => {
  const { data, isLoading } = useSupplyQuery("");
  if (isLoading) {
    return <div>Loading...</div>;
  }
  const supplies = data?.data;
  console.log(data?.data);
  console.log(supplies);
  const categorizedData = supplies?.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});

  const categoryTotals = Object.entries(categorizedData).map(
    ([category, items]) => ({
      category,
      amount: items.reduce(
        (total, currentItem) => total + currentItem.amount,
        0
      ),
    })
  );
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const categoryTotals = payload[0].payload;
      return (
        <div style={{ backgroundColor: 'white', padding: '5px' }}>
          <p>{`Category: ${categoryTotals.category}`}</p>
          <p>{`Amount: ${categoryTotals.amount}`}</p>
        </div>
      );
    }
    return null;
  };
  
  console.log(categoryTotals);
  return (
    <div className="text-black ">
  <SectionHeader text="Supply Data"></SectionHeader>
     
      <div className="flex lg:flex-row flex-col items-center">
        <div>
          <PieChart width={300} height={300}>
            <Pie
              className="text-black"
              dataKey="amount"
              isAnimationActive={false}
              data={categoryTotals}
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              label
            />

<Tooltip content={<CustomTooltip />} />
          </PieChart>
        </div>
        <div className="">
          {categoryTotals.map((category) => (
            <div className="flex items-center">
              <span className="text-balck text-xl font-bold">
                {category.category}
              </span>
              :
              <span className="text-balck text-xl font-bold">
                ${category.amount}
              </span>
            </div>
          ))}
        </div>
      </div>
     
    </div>
  );
};

export default DashboardHome;


import SectionHeader from "../../utils/SectionHeader";
import { Pie, PieChart, Tooltip } from "recharts";
import { useSupplyQuery } from "../../redux/supply/supplyApi";
interface ISupplyItem {
      category: string;
      amount: number;
    }
    
    interface ICustomTooltipProps {
      active?: boolean;
      payload?: Array<{ payload: ISupplyItem }>;
    }
    
const SupplyPieChart = () => {
  const { data, isLoading } = useSupplyQuery("");
  if (isLoading) {
    return <div>Loading...</div>;
  }
  const supplies: ISupplyItem[] | undefined = data?.data;
  //categorize function---------------------
  const categorizedData: Record<string, ISupplyItem[]> = supplies?.reduce(
      (acc: Record<string, ISupplyItem[]>, item: ISupplyItem) => {
        if (!acc[item.category]) {
          acc[item.category] = [];
        }
        acc[item.category].push(item);
        return acc;
      },
      {}
    ) || {};

  const categoryTotals = Object.entries(categorizedData).map(
    ([category, items]) => ({
      category,
      amount: items.reduce(
        (total, currentItem) => total + currentItem.amount,
        0
      ),
    })
  );
  //custom tooltip-------------------
  const CustomTooltip = ({ active, payload }: ICustomTooltipProps) => {
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
  return (
    <div>
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
    </div>
  );
};

export default SupplyPieChart;

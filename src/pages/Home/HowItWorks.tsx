
import { FaDonate, FaStethoscope } from "react-icons/fa";
import { SiTinyletter } from "react-icons/si";
import SectionHeader from "../../utils/SectionHeader";

const HowItWorks = () => {
  return (
    <div>
      <SectionHeader className="text-center py-5" text="How It Works" />
      <div className="flex lg:flex-row flex-col justify-around space-y-4">
        <div className="flex flex-col items-center justify-center">
          <div className="text-6xl text-orange-500">
            <FaDonate />
          </div>
          <div className="text-2xl text-orange-500 font-semibold">
            Fund a Campaign
          </div>
          <div className="text-slate-500 max-w-[300px] text-center">
            Meet individuals seeking healthcare and classroom supplies and
            donate as low as $5 to make it possible for them.
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="text-6xl text-orange-500">
            <FaStethoscope />
          </div>
          <div className="text-2xl text-orange-500 font-semibold">
            We Do Our Part
          </div>
          <div className="text-slate-500 max-w-[300px] text-center">
            Funds of fully funded campaigns are transferred to healthcare
            partners upon treatment confirmation and handle health insurance
            registration. Likewise, for classroom requests, we purchase
            requested materials and deliver them directly to the school once
            fully funded.
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="text-6xl text-orange-500">
            <SiTinyletter />
          </div>
          <div className="text-2xl text-orange-500 font-semibold">
            Get Solid Updates
          </div>
          <div className="text-slate-500 max-w-[300px] text-center">
            We send you solid updates like photos, videos, cost receipts and
            thank you letters. You will know the impact you have made.
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;

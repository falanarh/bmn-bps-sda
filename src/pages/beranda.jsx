import { BiBuildings } from "react-icons/bi";
import StatCard from "../components/StatCard";
import { TbBuildingWarehouse } from "react-icons/tb";
import CustomTable from "../components/CustomTable";
import { IoIosMore, IoMdMore } from "react-icons/io";
import CustomRow from "../components/CustomRow";
import { bmnLastTransactions } from "./data";

const Beranda = () => {
  const columns = ["Name", "Age", "Location"];
  const data = [
    ["Alice", 30, "New York"],
    ["Bob", 25, "San Francisco"],
    ["Charlie", 35, "Chicago"],
  ];

  return (
    <div className="flex flex-col w-full px-[10%] py-5">
      <div className="flex gap-4">
        <StatCard
          title="Total BMN"
          number={59}
          link="#"
          icon={
            <TbBuildingWarehouse className="text-[28px] text-pblue dark:text-white" />
          }
        />
        <StatCard
          title="Total Ruang"
          number={12}
          link="#"
          icon={
            <BiBuildings className="text-[28px] text-pblue dark:text-white" />
          }
        />
        <div className="w-full p-6 bg-white rounded-2xl dark:bg-gray-800">
          <div className="flex justify-between">
            <h1 className="mb-4 text-xl font-bold text-gray-800 font-dmsans dark:text-white">
              Transaksi BMN Terakhir
            </h1>
            <div className="p-2 bg-blue-100 w-fit h-fit dark:bg-gray-700 rounded-xl">
              <IoIosMore className="text-[24px] text-pblue dark:text-white" />
            </div>
          </div>
          <div className="w-full h-[450px] my-3 overflow-y-auto">
          {bmnLastTransactions.map((transaction, index) => (
            <CustomRow key={index} icon={transaction.icon} message={transaction.message} time={transaction.time} />
          ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Beranda;

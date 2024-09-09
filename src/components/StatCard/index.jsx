const StatCard = ({ title, number, link, icon }) => {
  return (
    <div className="w-[350px] h-fit p-4 text-gray-800 bg-white rounded-2xl dark:bg-gray-800 dark:text-white font-dmsans">
      <div className="flex items-center justify-between">
        <p className="text-lg font-bold">{title}</p>
        <a
          className="px-2 py-1 text-sm underline underline-offset-1 font-[500]"
          href={link}
        >
          Detail
        </a>
      </div>
      <div className="flex items-center justify-between mt-4">
        <p className="text-3xl font-bold">{number}</p>
        <div className="p-3 bg-blue-100 dark:bg-gray-700 rounded-xl">
          {icon}
        </div>
      </div>
    </div>
  );
};

export default StatCard;

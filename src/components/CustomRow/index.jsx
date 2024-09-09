import { TbUserCog } from "react-icons/tb";

const CustomRow = ({ icon, message, time }) => {
    const highlightFirstTwoWords = ({ text = '' }) => {
        console.log("text", text);
        // Menghindari kesalahan jika text adalah undefined atau null
        if (typeof text !== 'string') {
          return <>{text}</>;
        }
      
        const words = text.split(" ");
      
        if (words.length < 2) {
          return <>{text}</>;
        }
      
        const firstTwoWords = words.slice(0, 2).join(" ");
        const remainingWords = words.slice(2).join(" ");
      
        return (
          <>
            <span className="font-bold">{firstTwoWords}</span>
            {remainingWords && ` ${remainingWords}`}
          </>
        );
      };

  function formatRelativeDate(timestamp) {
    const now = new Date();
    const date = new Date(timestamp);

    // Calculate the difference in days between the two dates
    const diffTime = now - date;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays < 0) {
      // If the date is in the future, return a default message or handle as needed
      return "In the future";
    }

    if (diffDays === 0) {
      return "today";
    }

    if (diffDays === 1) {
      return "yesterday";
    }

    return `${diffDays} days ago`;
  }

  return (
    <div className="flex w-full gap-4 py-2 border-b border-gray-300 dark:border-gray-600 font-dmsans">
      <div className="p-2 bg-blue-100 w-fit h-fit dark:bg-gray-700 rounded-xl">
        {/* <TbUserCog className="text-[28px] text-pblue dark:text-white" /> */}
        {icon}
      </div>
      <div className="flex flex-col">
        <p className="text-gray-700 dark:text-white">{highlightFirstTwoWords({ text: message })}</p>
        <p className="font-semibold text-gray-400">
          {formatRelativeDate(time)}
        </p>
      </div>
    </div>
  );
};

export default CustomRow;

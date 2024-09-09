/* eslint-disable react/prop-types */
const CustomTable = ({ columns, data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white rounded-lg shadow-md dark:bg-gray-800 font-dmsans">
        <thead
        // className="text-gray-600 bg-gray-200 dark:bg-gray-700 dark:text-gray-200"
        className="border-b-2 border-gray-300 dark:border-gray-600"
        >
          <tr>
            {columns.map((column, index) => (
              <th
                key={index}
                className="px-6 py-3 text-sm font-semibold tracking-wider text-left uppercase"
              >
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="text-gray-700 dark:text-gray-300">
          {data.length > 0 ? (
            data.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                // className={`hover:bg-gray-100 dark:hover:bg-gray-600 ${
                //   rowIndex % 2 === 0 ? 'bg-gray-50 dark:bg-gray-800' : 'bg-white dark:bg-gray-700'
                // }`}
              >
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex} className="px-6 py-3 text-sm">
                    {cell}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={columns.length}
                className="px-6 py-3 text-center text-gray-500 dark:text-gray-400"
              >
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CustomTable;

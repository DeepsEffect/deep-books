/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Cell,
  Tooltip,
} from "recharts";
import { getBooks } from "../utils";

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;
  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
    Z`;
  };
  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const PagesToRead = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const books = await getBooks('readBooks');
        setData(books);
      } catch (error) {
        console.error("Error fetching read-listed books:", error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div className="flex justify-center items-center lg:p-10 bg-gray-100 rounded-2xl">
      <BarChart
        width={1170}
        height={756}
        data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="bookName" />
        <YAxis />
        <Tooltip />
        <Bar
          dataKey="totalPages"
          fill="#8884d8"
          shape={<TriangleBar />}
          label={{ position: "top" }}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Bar>
      </BarChart>
    </div>
  );
};

export default PagesToRead;

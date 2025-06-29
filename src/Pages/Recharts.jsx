import React from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${
    y + height / 3
  }
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
    x + width
  }, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

// Receiving the "myRecipes" from Dashboard/Overview Component

const Recharts = ({ myRecipes }) => {
  return (
    <div className="w-full p-1 md:p-2 lg:p-3 h-full rounded-xl bg-white ">
      {/* Adding ResponsiveContainer from Recharts to make it responsive */}

      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={myRecipes} // Using the whole "myRecipes" array
          margin={{
            top: 20,
            right: 10,
            left: -35,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis tick={{ fontSize: 14, fill: "#7b3f00" }} dataKey="title" />
          <YAxis />
          <Bar
            dataKey="likeCount"
            fill="#8884d8"
            shape={<TriangleBar />}
            label={{ position: "top" }}
          >
            {myRecipes.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % 20]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Recharts;

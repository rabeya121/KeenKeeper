
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer, } from "recharts";

const data = [
  { name: "Text", value: 40 },
  { name: "Call", value: 30 },
  { name: "Video", value: 30 },
];

const COLORS = ["#8B5CF6", "#244D3F", "#22C55E"];

const Stats = () => {
  return (
    <div className="bg-white py-12 px-4">

      <div className="max-w-4xl mx-auto">

        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          Friendship Analytics
        </h1>

        <div className="bg-[#F8FAFC] border border-gray-100 rounded-lg p-8 shadow-sm">

          <p className="text-base font-medium text-[#244D3F] mb-8">
            By Interaction Type
          </p>

          <div className="flex justify-center items-center h-[260px]">
            <ResponsiveContainer width="50%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  dataKey="value"
                  innerRadius={55}
                  outerRadius={85}
                  paddingAngle={5}
                >
                  {data.map((entry, index) => (
                    <Cell key={index} fill={COLORS[index]} />
                  ))}
                </Pie>

                <Tooltip />

                <Legend
                  verticalAlign="bottom"
                  align="center"
                  iconType="circle"
                  iconSize={10}
                  wrapperStyle={{
                    fontSize: "14px",
                    marginTop: "12px",
                    display: "flex",
                    justifyContent: "center",
                    gap: "20px",
                  }}
                  formatter={(value) => (
                    <span style={{ fontWeight: 600, color: "#475569" }}>
                      {value}
                    </span>
                  )}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Stats;
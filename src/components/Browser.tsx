// frontend/src/components/Browser.tsx
import React, { useEffect, useState } from "react";
import axios from "axios";

interface DataItem {
  title: string;
  content: string;
}

const Browser: React.FC = () => {
  const [data, setData] = useState<DataItem[]>([]);

  // useEffect(() => {
  //   axios.get('/api/data').then((response) => {
  //     setData(response.data);
  //   });
  // }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {data.map((item, index) => (
        <div key={index} className="bg-black shadow-md rounded-lg p-6">
          <h3 className="text-2xl font-semibold text-[#F1DEDE] mb-2">
            {item.title}
          </h3>
          <p className="text-gray-700">{item.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Browser;

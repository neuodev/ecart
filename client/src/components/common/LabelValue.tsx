import React from "react";

const LabelValue: React.FC<{ label: string; value: string }> = ({
  label,
  value,
}) => {
  return (
    <div className="flex items-center justify-between mb-2">
      <h1 className="font-light">{label}</h1>
      <p className="text-lg">{value}</p>
    </div>
  );
};

export default LabelValue;

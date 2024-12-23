import React from "react";

interface HeadingProps {
  text: string;
  className?: string;
}

const Heading: React.FC<HeadingProps> = ({ text }) => {
  return (
    <h1 className="text-3xl md:text-4xl text-gray-700 font-bold text-center py-12">
      {text}
    </h1>
  );
};

export default Heading;

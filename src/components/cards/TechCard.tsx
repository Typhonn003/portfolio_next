import { techData } from "../../data";

interface TechCardProps {
  techName: string;
}

export const TechCard = ({ techName }: TechCardProps) => {
  const { color, logo, name } = techData[techName];

  return (
    <div
      className="w-full m-auto flex flex-col gap-4 p-8 rounded-md"
      style={{ backgroundColor: color }}
    >
      <div className="w-full flex justify-center items-center text-white text-9xl drop-shadow-lg">
        {logo}
      </div>
      <div className="h-20 flex justify-center items-center text-sha">
        <h2 className="text-white text-2xl font-bold text-center drop-shadow-lg">
          {name}
        </h2>
      </div>
    </div>
  );
};

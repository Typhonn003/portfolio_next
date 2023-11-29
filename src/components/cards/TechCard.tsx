import { techData } from "../../data";

interface TechCardProps {
  techName: string;
}

export const TechCard = ({ techName }: TechCardProps) => {
  const { color, logo, name } = techData[techName];

  return (
    <div
      className="m-auto flex w-full flex-col gap-4 rounded-md p-8"
      style={{ backgroundColor: color }}
    >
      <div className="flex w-full items-center justify-center text-9xl text-white drop-shadow-lg">
        {logo}
      </div>
      <div className="text-sha flex h-20 items-center justify-center">
        <h2 className="text-center text-2xl font-bold text-white drop-shadow-lg">
          {name}
        </h2>
      </div>
    </div>
  );
};

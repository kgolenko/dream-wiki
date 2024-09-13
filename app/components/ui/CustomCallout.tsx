import { FC } from "react";

interface IProps {
  icon: JSX.Element | string;
  title: string;
  description: string;
  description_two: string;
  type: "error" | "warn" | "info";
}

const CustomCallout: FC<IProps> = ({
  icon,
  title,
  description,
  description_two,
  type,
}) => {
  const cardType =
    type === "error"
      ? "bg-red-800"
      : type === "warn"
      ? "bg-[#9B5C27]"
      : "bg-green-800";

  const titleType =
    type === "error"
      ? "text-red-400"
      : type === "warn"
      ? "text-yellow-400"
      : "text-green-400";

  return (
    <div
      className={`${cardType} not-prose block mb-6 rounded-lg border p-4 text-sm text-fd-card-foreground shadow-md`}
    >
      <div className="flex flex-col gap-2">
        <div className="flex gap-2">
          <div className="text-2xl">{icon}</div>
          <h3 className={`text-xl font-semibold ${titleType}`}>{title}</h3>
        </div>
        <div className="flex gap-4">
          <div className="flex flex-col w-[55%]">
            {description.split(";").map((item, index) => (
              <span className="text-lg" key={index}>
                {item}
              </span>
            ))}
          </div>
          <div className="flex-1">
            <p className="text-lg">{description_two}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomCallout;

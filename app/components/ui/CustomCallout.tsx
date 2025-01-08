import { FC } from "react";
import {
  Cpu,
  Monitor,
  HardDrive,
  MemoryStick,
  AppWindowMac,
  Info,
} from "lucide-react";

interface Requirement {
  icon: JSX.Element;
  label: string;
  value: string;
}

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
  const styles = {
    error: {
      background: "bg-gradient-to-r from-red-950 to-red-900",
      border: "border-red-700",
      title: "text-red-400",
      icon: "text-red-400",
    },
    warn: {
      background: "bg-gradient-to-r from-amber-950 to-amber-900",
      border: "border-amber-700",
      title: "text-amber-400",
      icon: "text-amber-400",
    },
    info: {
      background: "bg-gradient-to-r from-emerald-950 to-emerald-900",
      border: "border-emerald-700",
      title: "text-emerald-400",
      icon: "text-emerald-400",
    },
  };

  const currentStyle = styles[type];

  const parseRequirements = (desc: string): Requirement[] => {
    const parts = desc.split(";").map((part) => part.trim());
    return parts.map((part) => {
      if (part.includes("CPU")) {
        return {
          icon: <Cpu className="w-5 h-5" />,
          label: "Процессор",
          value: part.replace("CPU –", "").trim(),
        };
      }
      if (part.includes("Video card")) {
        return {
          icon: <Monitor className="w-5 h-5" />,
          label: "Видеокарта",
          value: part.replace("Video card –", "").trim(),
        };
      }
      if (part.includes("Operating system")) {
        return {
          icon: <AppWindowMac className="w-5 h-5" />,
          label: "Система",
          value: part.replace("Operating system –", "").trim(),
        };
      }
      if (part.includes("RAM")) {
        return {
          icon: <MemoryStick className="w-5 h-5" />,
          label: "Память",
          value: part.replace("RAM –", "").trim(),
        };
      }
      if (part.includes("Free space")) {
        return {
          icon: <HardDrive className="w-5 h-5" />,
          label: "Диск",
          value: part.replace("Free space –", "").trim(),
        };
      }
      return {
        icon: <Info className="w-5 h-5" />,
        label: "Другое",
        value: part,
      };
    });
  };

  const requirements = parseRequirements(description);

  return (
    <div
      className={`${currentStyle.background} not-prose relative overflow-hidden rounded-xl border ${currentStyle.border} p-6 text-sm shadow-lg transition-all hover:shadow-xl`}
    >
      <div className="relative z-10 flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className={`text-2xl ${currentStyle.icon}`}>{icon}</div>
          <h3 className={`text-xl font-bold ${currentStyle.title}`}>{title}</h3>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {requirements.map((req, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 bg-black/20 rounded-lg p-3"
                >
                  <div className={`mt-1 ${currentStyle.icon}`}>{req.icon}</div>
                  <div>
                    <div
                      className={`text-sm font-medium ${currentStyle.title}`}
                    >
                      {req.label}
                    </div>
                    <div className="text-gray-200 text-sm">{req.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1">
            <div className="bg-black/20 rounded-lg p-4">
              <div className={`text-sm font-medium ${currentStyle.title} mb-2`}>
                Примечание
              </div>
              <p className="text-sm text-gray-200">{description_two}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute right-0 top-0 h-full w-1/3 opacity-10 blur-2xl">
        <div className={`h-full w-full ${currentStyle.background}`}></div>
      </div>
    </div>
  );
};

export default CustomCallout;

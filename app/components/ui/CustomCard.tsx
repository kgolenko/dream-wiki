import { FC } from "react";

interface IProps {
  icon: JSX.Element | string;
  href: string;
  title: string;
  description: string;
}

const Card: FC<IProps> = ({ icon, href, title, description }) => {
  return (
    <a
      href={href}
      className="not-prose block rounded-lg border bg-fd-card p-4 text-sm text-fd-card-foreground shadow-md transition-colors hover:bg-fd-accent/80"
    >
      <div className="flex flex-col gap-2">
        <div className="flex gap-2">
          <div className="text-2xl">{icon}</div>
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>
        <p
          className="text-lg"
          style={{
            color: "gray",
          }}
        >
          {description}
        </p>
      </div>
    </a>
  );
};

export default Card;

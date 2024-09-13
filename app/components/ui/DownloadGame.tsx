"use client";

import React, { FC } from "react";
import { Select, SelectItem } from "@nextui-org/select";
import { Link } from "@nextui-org/link";
import {
  DownloadIconGoogle,
  DownloadIconYandex,
  DownloadIconMailRu,
  DownloadIconMega,
  DownloadIconTorrent,
  DownloadIcon,
} from "../icons";

export const downloadLink = [
  {
    id: 1,
    label: "Google Disk",
    link: "https://drive.google.com/file/d/1jel_zrUFHhkbYRAcQ6MgOfpiYcG7JcOY/view?usp=sharing",
    logo: <DownloadIconGoogle height={16} width={16} />,
  },
  {
    id: 2,
    label: "Google Disk v2",
    link: "https://drive.google.com/file/d/1tdqxhzU_VLqSNDNuUSUMcB3ygHPRZ367/view?usp=sharing",
    logo: <DownloadIconGoogle height={16} width={16} />,
  },
  {
    id: 3,
    label: "Yandex Disk",
    link: "https://disk.yandex.ru/d/98MSaeUgKkDJng",
    logo: <DownloadIconYandex height={16} width={16} />,
  },
  {
    id: 4,
    label: "Mail RU",
    link: "https://cloud.mail.ru/public/3Lmr/hQajdsMd7",
    logo: <DownloadIconMailRu height={16} width={16} />,
  },
  {
    id: 5,
    label: "Mega",
    link: "https://mega.nz/file/mABhGI4J#xFVvYcrRvOez3_9x5wpiKyYgXvLf37-HZSL8F4Cy300",
    logo: <DownloadIconMega height={16} width={16} />,
  },
  {
    id: 6,
    label: "Torrent",
    link: "https://cloud.mail.ru/public/mGy8/npLnznppt",
    logo: <DownloadIconTorrent height={16} width={16} />,
  },
];

interface Props {
  download: string;
  label: string;
}

const DownloadGame: FC<Props> = ({ download, label }) => {
  const [selectedLink, setSelectedLink] = React.useState<number>();

  const handleSelectionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedLink(Number(e.target.value));
  };

  return (
    <div className="flex flex-col gap-4 mb-6">
      <Select
        className="w-full"
        items={downloadLink}
        labelPlacement="outside"
        placeholder={label}
        renderValue={(items) => {
          return items.map((item) => (
            <div key={item.key} className="flex items-center gap-2">
              {item.data?.logo}
              <div className="flex flex-col">
                <span>{item.data?.label}</span>
              </div>
            </div>
          ));
        }}
        onChange={handleSelectionChange}
      >
        {(link) => (
          <SelectItem key={link.id} textValue={link.label}>
            <div className="flex gap-2 items-center">
              {link.logo}
              <div className="flex flex-col">
                <span className="text-small">{link.label}</span>
              </div>
            </div>
          </SelectItem>
        )}
      </Select>

      <Link
        className="download-button w-full flex items-center justify-center gap-4 text-milk text-xl px-4 py-3 hover:opacity-85 transition-all rounded-md"
        href={selectedLink ? downloadLink[selectedLink - 1].link : "#"}
        isDisabled={!selectedLink || selectedLink === 0}
        isExternal={true}
      >
        {download}
        <DownloadIcon />
      </Link>
    </div>
  );
};

export default DownloadGame;

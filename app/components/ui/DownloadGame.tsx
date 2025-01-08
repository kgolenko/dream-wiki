"use client";

import React, { FC } from "react";
import { Select, SelectItem } from "@nextui-org/select";
import { Link } from "@nextui-org/link";
import {
  DownloadIconGoogle,
  DownloadIconYandex,
  DownloadIconMailRu,
  DownloadIconTorrent,
  DownloadIcon,
} from "../icons";

export const downloadLink = [
  {
    id: 1,
    label: "Google Disk",
    link: "https://drive.google.com/file/d/17XH6ME22_ZT6ey-tI_qLRudzRRo1eLTf/view",
    logo: <DownloadIconGoogle height={16} width={16} />,
  },
  {
    id: 2,
    label: "Google Disk v2",
    link: "https://drive.google.com/file/d/1HuIYX_0hsMe8n0RQ0UsmajHD9qPwEhYu/view",
    logo: <DownloadIconGoogle height={16} width={16} />,
  },
  {
    id: 3,
    label: "Yandex Disk",
    link: "https://disk.yandex.ru/d/xJAZBE7JqfHl_g",
    logo: <DownloadIconYandex height={16} width={16} />,
  },
  {
    id: 4,
    label: "Yandex Disk v2",
    link: "https://disk.yandex.ru/d/DJCB4PvOGc_XMA",
    logo: <DownloadIconYandex height={16} width={16} />,
  },
  {
    id: 5,
    label: "Mail RU",
    link: "https://cloud.mail.ru/public/VcYL/B8gt1enRv",
    logo: <DownloadIconMailRu height={16} width={16} />,
  },
  {
    id: 6,
    label: "Mail RU v2",
    link: "https://cloud.mail.ru/public/bKrH/UWRyKz91R",
    logo: <DownloadIconMailRu height={16} width={16} />,
  },
  {
    id: 7,
    label: "Torrent",
    link: "https://storage.dreamrusttop.ru/dream/files/DreamRust263.zip.torrent",
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

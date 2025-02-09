"use-client";
import React from "react";
import { absoluteCenter, flex } from "@/styles/global.style";
import { MusicNoteBlack } from "@/assets/svg";
import Icon from "@/components/icon";


export const BlackNoteSpinner = () => {
  return (
    <div className={`${absoluteCenter} ${flex.center_center}  relative`}>
      <div
        className={`rotate-infinte ${flex.center_center} w-[80px] h-[80px] rounded-full black-color-shadow  `}
      >
        <Icon icon={MusicNoteBlack} customStyle="w-[60px] h-[60px] " />
      </div>
    </div>
  );
};

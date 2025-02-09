"use-client";
import React from "react";
import { absoluteCenter, flex } from "@/styles/global.style";
import { MusicNote } from "@/assets/svg";
import Icon from "@/components/icon";

export const PrimaryNoteSpinner = ( ) => {
  return (
    <div className={`${absoluteCenter} ${flex.center_center}  relative`}>
      <div
        className={`rotate-infinte ${flex.center_center} w-[80px] h-[80px] rounded-full primary-color-shadow `}
      >
        <Icon icon={MusicNote} customStyle="w-[60px] h-[60px] " />
      </div>
    </div>
  );
};

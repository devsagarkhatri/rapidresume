import React, { useState } from "react";
import settingsIcon from "../assets/settingsIcon.svg";
import shareSettings from "../assets/shareSettings.svg";
import importJSON from "../assets/importJSON.svg";
import save from "../assets/save.svg";
import { motion } from "framer-motion";

const Settings = () => {
    let [settingsToggle, setSettingsToggle] = useState(false);
    function togglerSettings() {
        setSettingsToggle((prev) => !prev);
    }
    return (
        <div className="fixed bottom-5 left-5 md:bottom-10 md:right-10   flex md:flex-col justify-start items-center gap-3 z-100 ">
            <button
                className={
                    settingsToggle
                        ? " bg-gradient-to-tr from-[#1A4CB8] to-[#C67BFE] md:bg-gradient-to-tr md:from-bgPurple md:to-bgPink h-7 w-7 p-1 md:h-12 md:w-12 md:p-3 rounded-full "
                        : "hidden"
                }
            >
                <img src={shareSettings} alt="share Settings" />
            </button>
            <button
                className={
                    settingsToggle
                        ? " bg-gradient-to-tr from-[#1A4CB8] to-[#C67BFE] md:bg-gradient-to-tr md:from-bgPurple md:to-bgPink h-7 w-7 p-1 md:h-12 md:w-12 md:p-3 rounded-full "
                        : "hidden"
                }
            >
                <img src={importJSON} alt="importJSON" />
            </button>
            <button
                className={
                    settingsToggle
                        ? " bg-gradient-to-tr from-[#1A4CB8] to-[#C67BFE] md:bg-gradient-to-tr md:from-bgPurple md:to-bgPink h-7 w-7 p-1 md:h-12 md:w-12 md:p-3 rounded-full "
                        : "hidden"
                }
            >
                <img src={save} alt="save" />
            </button>
            <motion.button
                onClick={togglerSettings}
                className=" bg-gradient-to-tr from-[#1A4CB8] to-[#C67BFE] md:bg-gradient-to-tr md:from-bgPurple md:to-bgPink h-9 w-9 p-1 md:h-14 md:w-14 md:p-2 rounded-full "
            >
                <img
                    src={settingsIcon}
                    className="w-[100%] h-[100%]"
                    alt="settingsIcon"
                />
            </motion.button>
        </div>
    );
};

export default Settings;

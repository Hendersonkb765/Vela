import React, { useEffect, useState } from 'react';
import { GoBell } from "react-icons/go";

const Notification = () => {


    return (
        <button
            className="block px-2 py-2 rounded-full bg-neutralcolors-100 text-gray-700 dark:text-white hover:bg-gray-100 dark:bg-slate-700 focus:outline-none transition-all  "
        >
            < GoBell />
        </button>
    );
};

export default Notification;

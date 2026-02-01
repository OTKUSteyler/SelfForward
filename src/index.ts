/*
 * Kettu Mod for Discord
 * Copyright (c) 2025 Vendicated and contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import definePlugin from "@lib/plugin";

export default definePlugin({
    name: "SelfForward",
    description: "Adds the current channel and self DM to the forward list popup",
    authors: ["VillainsRule"],
    patches: [
        {
            find: ".getChannelHistory(),",
            replacement: [
                {
                    // Remove any filter checking channel id
                    match: /\.filter\(\i=>\i\.id!==\i\.id\)/g,
                    replace: ""
                },
                {
                    // Remove filter checking recipient id (self DM)
                    match: /\.filter\(\i=>\i\.getRecipientId\(\)!==\i\.id\)/g,
                    replace: ""
                },
                {
                    // Alternative pattern for current channel filter
                    match: /&&\i\.id!==\i\.id/g,
                    replace: ""
                },
                {
                    // Alternative pattern for self user filter
                    match: /&&\i\.getRecipientId\(\)!==\i\.id/g,
                    replace: ""
                }
            ]
        }
    ],
    onLoad: () => {
        console.log("[SelfForward] Plugin loaded");
    },
    onUnload: () => {
        console.log("[SelfForward] Plugin unloaded");
    }
});

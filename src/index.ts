/*
 * Kettu Mod for Discord
 * Copyright (c) 2025 Vendicated and contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { findByProps } from "@vendetta/metro";
import { after } from "@vendetta/patcher";

let unpatch: (() => void) | undefined;

export default {
    onLoad: () => {
        try {
            console.log("[SelfForward] Searching for modules...");
            
            // Search for various possible module names
            const possibleModules = [
                "getForwardableChannels",
                "getChannelHistory",
                "getForwardHistory",
                "canForwardTo"
            ];
            
            for (const prop of possibleModules) {
                const module = findByProps(prop);
                if (module) {
                    console.log(`[SelfForward] Found module with ${prop}:`, Object.keys(module));
                }
            }
            
            console.log("[SelfForward] Plugin loaded successfully!");
        } catch (e) {
            console.error("[SelfForward] Error:", e);
        }
    },
    
    onUnload: () => {
        if (unpatch) {
            unpatch();
        }
        console.log("[SelfForward] Unloaded");
    }
};

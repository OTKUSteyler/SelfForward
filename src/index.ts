import { Developers } from "@lib/constants";
import definePlugin from "@lib/plugin";

export default definePlugin({
    name: "SelfForward",
    description: "Adds the current channel and self DM to the forward list popup",
    authors: [Developers.VillainsRule],
    patches: [
        {
            find: ".getChannelHistory(),",
            replacement: [
                {
                    // Remove filter that excludes current channel
                    match: /(\i)\.filter\(\i=>\i\.id!==(\i)\.id\)/,
                    replace: "$1"
                },
                {
                    // Remove filter that excludes self DM
                    match: /\.filter\(\i=>\i\.getRecipientId\(\)!==(\i)\.id\)/,
                    replace: ""
                }
            ]
        }
    ],
    onLoad: () => {
        // Plugin loaded
    },
    onUnload: () => {
        // Plugin unloaded
    }
});

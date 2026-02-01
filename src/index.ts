export default {
    name: "SelfForward",
    description: "Adds the current channel and self DM to the forward list popup",
    authors: ["VillainsRule"],
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
};

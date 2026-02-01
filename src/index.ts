export default {
    name: "SelfForward",
    description: "Adds the current channel to the forward list popup",
    authors: ["VillainsRule"],
    patches: [
        {
            find: ".getChannelHistory(),",
            replacement: [{
                match: /\i.id\]/,
                replace: "]"
            }]
        }
    ],
    onLoad: () => {
        // Plugin loaded
    },
    onUnload: () => {
        // Plugin unloaded
    }
};

module.exports = {
    typescript: {
        check: false
    },
    stories: [
        "../src/**/*.stories.mdx",
        "../src/**/*.stories.@(js|jsx|ts|tsx)"
    ],
    "addons": [
        "storybook-addon-designs/register"
    ]
}

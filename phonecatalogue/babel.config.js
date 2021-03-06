module.exports = {
    env: {
        test: {
            presets: [
                [
                    '@babel/preset-env',
                    {
                        modules: 'commonjs',
                        debug: false
                    }
                ],
                '@babel/preset-react'
            ],
            plugins: [
                '@babel/plugin-syntax-dynamic-import',
            ]
        },
        production: {
            presets: [
                ['@babel/preset-env', { modules: false }],
                '@babel/preset-react'
            ],
            plugins: [
                '@babel/plugin-syntax-dynamic-import',
            ]
        },
        development: {
            presets: [
                ['@babel/preset-env', { modules: false }],
                '@babel/preset-react'
            ],
            plugins: [
                '@babel/plugin-syntax-dynamic-import',
                '@babel/plugin-proposal-class-properties'
            ]
        }
    }
};

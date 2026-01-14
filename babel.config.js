module.exports = function (api) {
    api.cache(true);

    return {
        presets: [['babel-preset-expo'], 'nativewind/babel'],

        plugins: [
            [
                'module-resolver',
                {
                    root: ['./'],

                    alias: {
                        '@app': './src/app',
                        '@components': './src/components',
                        '@config': './src/config',
                        '@fonts': './src/fonts/index.font.ts',
                        '@i18n': './src/i18n',
                        '@lib': './src/lib',
                        '@security': './src/security',
                        '@services': './src/services',
                        '@store': './src/store',
                        '@styles': './src/styles',
                        '@test': './src/test',
                        '@public': './public',
                        '@': './src',
                        'tailwind.config': './tailwind.config.js',
                    },
                },
            ],
            'react-native-worklets/plugin',
        ],
    };
};

module.exports = {
    /*
     *
     * More information: https://tailwindcss.com/blog/tailwindcss-v3
     */
    theme: {
        screens: {
            sm: '39.9375em',
            // => @media (min-width: 640px) { ... }

            md: '63.9375em',
            // => @media (min-width: 768px) { ... }

            lg: '64em',
            // => @media (min-width: 1024px) { ... }

            xl: '74.9375em',
            // => @media (min-width: 1280px) { ... }
        },
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            /* HEY FUTURE JOSH HERE'S HOW TO USE THIS
             *
             * Default is the normal base color.
             * Plug in the wedding colors, and adjust slightly for the gradient color.
             *
             * Classes are named text-CLASSNAME
             *
             * https://tailwindcss.com/docs/customizing-colors#custom-colors
             * */

            // The light text color used on the site. It will be white or close to it.
            white: {
                DEFAULT: '#DFE0EC',
            },

            // The dark text color used on the site. It will be black or close to it.
            black: {
                DEFAULT: '#131C0A',
            },

            // The client's primary wedding color + a close variation of the color. Ideally a dark color.
            primary: {
                DEFAULT: '#B28D77',
                alt: '#7a6051',
                special: '#917360',
            },

            // The client's secondary wedding color + a close variation. Ideally a light color.
            secondary: {
                DEFAULT: '#F9EAD6',
                alt: '#fff7f4',
            },

            // This is for buttons, it should be complementary but different than primary and secondary
            accent: {
                DEFAULT: '#B17C7E',
                alt: '#ad6c6e',
            },
        },
    },
    plugins: [],
}

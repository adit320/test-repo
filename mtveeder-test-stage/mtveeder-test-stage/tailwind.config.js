module.exports = {
  purge: process.env.NODE_ENV === 'production' ? [
     './src/**/*.html',
     './src/**/*.js',
     './layout/**/*.liquid',
     './templates/**/*.liquid',
     './sections/**/*.liquid',
     './snippets/**/*.liquid',
   ] : [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    boxShadow: {
      xl: "6px 6px 18px 0 rgba(0,0,0,0.15)"
    },
    extend: { // extending for now to make development easier, could not extend later on
      header: {
        DEFAULT: '--heading-font-color'
      },
      textColor: {
        'body-color': 'var(--body-font-color)', //What is causing the text color to be how it is???
        'heading-color': 'var(--heading-font-color)',
        'light': 'var(--text-light-color)',
        'link': 'var(--link-color)'
      },
      colors: {
        general: {
          page_background: 'var(--page-background)',
          light_background: 'var(--light-background)',
          sold_out_bg: 'var(--sold-out-bg)',
          card_bg: 'var(--card-bg)',
          success: 'var(--success-color)',
          success_bg: 'var(--success-background-color)',
          danger: 'var(--danger-color)',
          danger_bg: 'var(--danger-background-color)'
        },
        button: {
          primary: {
            DEFAULT: 'var(--button-primary)',
            hover: 'var(--button-primary--hover)',
            bg: 'var(--button-primary--bg)',
            bghover: 'var(--button-primary--bg-hover)',
          },
          secondary: {
            DEFAULT: 'var( --button-secondary)',
            hover: 'var(--button-secondary--hover)',
            bg: 'var(--button-secondary--bg)',
            bghover: 'var(--button-secondary--bg-hover)',
          },
          add_to_cart: {
            DEFAULT: 'var(--atc)',
            bg: 'var(--atc-bg)',
            bghover: 'var(--atc-bg-hover)',
            hover: 'var(--atc-text-hover)'
          },
          sold_out: {
            DEFAULT: 'var(--button-sold-out)',
            bg: 'var(--button-sold-out--bg)',
            bghover: 'var(--sold-out-bg-hover)',
            hover: 'var(--sold-out-text-hover)'
          },
          disabled: {
            DEFAULT: 'var(--button-disabled)',
            bg: 'var(--button-disabled--bg)',
            border: 'var(--button-disabled--border)',
            hover: 'var(--button-disabled-text-hover)'
          }
        },
        rule: {
          horizontal: 'var(--color-horizontal-rule)',
          vertical: 'var(--color-vertical-rule)',
        },
        secondary: {
          bg: 'var(--secondary-elements-bg)',
          tasting_bar: 'var(--tasting-bar-color)',
          tasting_bar_bg: 'var(--tasting-bar-bg)'
        },
      },
      disabled: 'var(--color-disabled)',
      fontSize: {
        'body': ['var(--body-font-size)', 'var(--body-line-height)'],
        'mobile-body': ['var(--mobile-body-font-size)', 'var(--mobile-body-line-height)'],
        'md-lg': '1.166rem' /* h4 equivalent */,
      },
      width: {
        '600p': '600px',
        '5/6': '83%',
      },
      height: {
        '600p': '600px',
        '90percent': '90%'
      },
      maxWidth: {
        '1/2': '50%',
        '3xs': '12rem',
        '2xs': '16rem',
        '360p': '360px',
        'half': '50%',
        '1/5': '20%',
        '2/5': '40%',
        '3/5': '60%',
        '4/5': '80%',
      },
      minHeight: {
        '16': '4rem',
        '400p': '400px',
      },
      maxHeight: {
        '800p': '800px',
        '92percent': '92%'
      }
    },
    minWidth: {
      '0': '0',
      '16': '4rem',
      '40': '10rem',
      '1/4': '25%',
      '1/3': '33%',
      '1/2': '50%',
      '3/4': '75%',
      '1/6': '16%',
      '2/6': '32%',
      '3/6': '50%',
      '4/6': '66%',
      '5/6': '83%',
      '6/6': '100%',
      'full': '100%',
      '1/3-1r': 'calc(33% - 1rem)'
    },
    fontFamily: {
      'sans': ['var(--font-primary)', 'system-ui', 'sans-serif'],
      'heading': ['var(--font-heading)', 'system-ui', 'serif'],
      'button-default': ['var(--button-font)', 'system-ui', 'sans-serif'],
      'button-secondary': ['var(--button_font_secondary)', 'system-ui', 'sans-serif'],
      'button-sold_out': ['var(--button_font_sold-out)', 'system-ui', 'sans-serif'],
      'button-disabled': ['var(--button_disabled_font)', 'system-ui', 'sans-serif'],
      'button-add-to-cart': ['var(--atc-font-family)', 'system-ui', 'sans-serif']
    },
    fontSize: {
      'xs': '.8rem',
      'sm': '.875rem',
      'tiny': ['calc(((var(--heading-font-size))/ (var(--body-font-multiplier))) * .8rem)', '.94rem'],
      'base': '1rem',
      'lg': ['calc(((var(--heading-font-size))/ (var(--body-font-multiplier))) * 1.125rem)', 'calc( var(--heading-line-height) / var(--heading-font-size) )'],/* h3 mobile */
      'xl': ['calc(((var(--heading-font-size))/ (var(--body-font-multiplier))) * 1.33rem)', 'calc( var(--heading-line-height) / var(--heading-font-size) )'], /* h3 tag in style guide */
      '2xl': ['calc(((var(--heading-font-size))/ (var(--body-font-multiplier))) * 1.56rem)', 'calc( var(--heading-line-height) / var(--heading-font-size) )'], /* h2 tag in style guide */
      '3xl': 'calc(((var(--heading-font-size))/ (var(--body-font-multiplier))) * 1.875rem)', /* h1 mobile? */
      '4xl': ['calc(((var(--heading-font-size))/ (var(--body-font-multiplier))) * 2.33rem)', 'calc( var(--heading-line-height) / var(--heading-font-size) )'], /* h1 tag in style guide */
      '5xl': 'calc(((var(--heading-font-size))/ (var(--body-font-multiplier))) * 3rem)',
      '6xl': '4rem',
      '7xl': '5rem',
    },
    backgroundColor: theme => ({
      ...theme('colors'),
      'page': 'var(--page-background)',
    }),
  },
  variants: {
    extend: {
      padding: ['first', 'last']
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

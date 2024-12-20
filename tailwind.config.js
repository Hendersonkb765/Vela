import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */

export default {
    darkMode: 'class',

    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],

            screens: {
                'fullhd': '1920px', // Breakpoint para telas de 1920px ou maiores
            },
            colors: {
                neutralcolors: {
                  DEFAULT: '#F0EFED',
                  100: '#F0EFED', // Soft Gray
                  200: '#D8D8D8', // Light Gray
                  300: '#737373', // Medium Gray
                  400: '#3C3C3C', // Dark Gray
                  500: '#374046', // Slate Gray
                  600: '#1E1E1E', // Base Black
                  700: '#161616', // Darker Black
                },
                primary: {
                    DEFAULT: '#057EE8', // Standard Primary
                    100: '#B6DCFF', // Light Primary
                    200: '#0A53AB', // Medium Primary
                    300: '#012340', // Dark Primary
                    wave: '#1A76CC',
                },
                danger: '#DC3545',
                warning: '#FFC107',
                success: '#28A745',
                info: '#17A2B8',
            },
            fontFamily: {
                headers: ['Poppins'],
                body: ['Open Sans'],
            },
            
            keyframes: {
                fade: {
                  '0%, 100%': { opacity: '0.2' }, // Opacidade mínima
                  '50%': { opacity: '1' }, // Opacidade máxima
                },
              },
              // Associando a keyframe com a animação
              animation: {
                fade: 'fade 2s ease-in-out infinite', // 2s de duração, ease-in-out, repetição infinita
            },



            backgroundImage: {
                'custom-gradient': 'linear-gradient(to right top, #057ee8, #3786e8, #4f8de8, #6295e7, #729de7, #6da9ee, #69b4f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1)',
              },
              animation: {
                'gradient-move': 'gradient-move 3s ease infinite',
              },
              keyframes: {
                'gradient-move': {
                  '0%': {
                    'background-position': '0% 50%',
                  },
                  '50%': {
                    'background-position': '100% 50%',
                  },
                  '100%': {
                    'background-position': '0% 50%',
                  },
                },
              },
              backgroundSize: {
                '200%': '200%',
            },
            
            keyframes: {
              fly: {
                '0%': { transform: 'translate(0, 0) rotate(0deg)' },
                '50%': { transform: 'translate(50px, -30px) rotate(10deg)' },
                '100%': { transform: 'translate(100px, 0) rotate(20deg)' },
              },
            },
            animation: {
              fly: 'fly 3s ease-in-out infinite',
            },


            keyframes: {
              enter: {
                '0%': { transform: 'scale(0)' }, // Opacidade mínima
                '50%': { transform: 'scale(1.1)' }, // Opacidade máxima
                '100%': { transform: 'scale(1)' },
              },
            },
            // Associando a keyframe com a animação
            animation: {
              enter: 'enter 0.4s ease-in-out forwards', // 2s de duração, ease-in-out, repetição infinita
            },

        },
    },

    plugins: [forms],
};

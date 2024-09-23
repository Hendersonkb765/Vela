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
        },
    },

    plugins: [forms],
};

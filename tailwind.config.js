import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            colors: {
                neutral: {
                  DEFAULT: '#1E1E1E', // Base Black
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
                    400: '#057EE8', // Standard Primary
                },
                danger: ['#DC3545'],
                warning: ['#FFC107'],
                success: ['#28A745'],
                info: ['#17A2B8'],
            },
            fontFamily: {
                body: ['Poppins'],
                headers: ['Open Sans'],
            },
        },
    },

    plugins: [forms],
};

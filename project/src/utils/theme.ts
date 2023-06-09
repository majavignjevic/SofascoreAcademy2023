import { DefaultTheme } from "styled-components"

export const light = {
    primary: {
        default: '#374df5',
        variant: '#1327ba',
        highlight: '#e1edfe',
    },

    secondary: {
        default: '#f0eedf',
        secondary: '#dddbc9',
        highlight: '#f7f6ef',
    },

    onColour: {
        primary: '#ffffff',
        secondary: 'rgba(0, 0, 0, 0.12)'
    },

    surface: {
        lvl0: '#eff3f8',
        lvl1: '#ffffff',
        lvl2: 'rgba(192, 207, 228, 0.2)'
    },

    onSurface: {
        lvl0: '#121212',
        lvl1: 'rgba(18, 18, 18, 0.4)',
        lvl2: 'rgba(18, 18, 18, 0.2)',
        lvl3: 'rgba(18, 18, 18, 0.1)'
    },

    status: {
        error: '#ea4545',
        alert: '#d8b127',
        success: '#1da86d'
    },

    specific: {
        live: '#e93030'
    },

    elevation: {
        elevation1: '#ffffff',
        elevation2: '#ffffff'
    }
};

export const dark = {
    primary: {
        default: '#849afd',
        variant: '#afbeff',
        highlight: '#2d385c'
    },

    secondary: {
        default: '#3a3a39',
        secondary: '#404039',
        highlight: '#171616'
    },

    onColour: {
        primary: '#ffffff',
        secondary: 'rgba(255, 255, 255, 0.6)'
    },

    surface: {
        lvl0: '#101114',
        lvl1: '#21242d',
        lvl2: 'rgba(0, 0, 0, 0.4)'
    },

    onSurface: {
        lvl0: '#ffffff',
        lvl1: 'rgba(255, 255, 255, 0.4)',
        lvl2: 'rgba(255, 255, 255, 0.2)',
        lvl3: 'rgba(255, 255, 255, 0.1)'
    },

    status: {
        error: '#f26666',
        alert: '#ecca51',
        success: '#30b87f'
    },

    specific: {
        live: '#f14b4b'
    },

    elevation: {
        elevation1: '#2b2e38',
        elevation2: '#2b2e38'
    }
};

export enum  ThemeName {
    Light = 'light',
    Dark = 'dark',
};

export const themes = {
    [ThemeName.Light]: light,
    [ThemeName.Dark]: dark,
};
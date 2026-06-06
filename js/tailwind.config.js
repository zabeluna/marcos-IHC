// Tailwind CSS Design Token Configuration
tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            "colors": {
                "on-error": "#690005",
                "secondary": "#ffb4a8",
                "surface-dim": "#121317",
                "inverse-surface": "#e3e2e7",
                "on-secondary": "#690000",
                "surface-container-high": "#292a2e",
                "surface-container-highest": "#343539",
                "on-tertiary-fixed-variant": "#474746",
                "surface-container": "#1e1f23",
                "tertiary-fixed": "#e5e2e1",
                "on-secondary-fixed-variant": "#930100",
                "surface-bright": "#38393d",
                "outline": "#988e90",
                "surface-variant": "#343539",
                "tertiary-container": "#000000",
                "surface-container-low": "#1a1b1f",
                "on-primary-container": "#757575",
                "primary-fixed": "#e2e2e2",
                "error": "#ffb4ab",
                "on-surface-variant": "#cfc4c5",
                "secondary-fixed-dim": "#ffb4a8",
                "on-primary-fixed-variant": "#474747",
                "surface-tint": "#c6c6c6",
                "on-primary-fixed": "#1b1b1b",
                "tertiary-fixed-dim": "#c8c6c5",
                "on-secondary-fixed": "#410000",
                "primary-container": "#000000",
                "background": "#121317",
                "primary": "#c6c6c6",
                "surface": "#121317",
                "on-surface": "#e3e2e7",
                "inverse-on-surface": "#2f3034",
                "primary-fixed-dim": "#c6c6c6",
                "outline-variant": "#4c4546",
                "on-secondary-container": "#fff6f5",
                "on-tertiary": "#313030",
                "on-tertiary-fixed": "#1c1b1b",
                "on-tertiary-container": "#767575",
                "surface-container-lowest": "#0d0e12",
                "secondary-fixed": "#ffdad4",
                "inverse-primary": "#5e5e5e",
                "on-primary": "#303030",
                "secondary-container": "#e60000",
                "on-error-container": "#ffdad6",
                "error-container": "#93000a",
                "on-background": "#e3e2e7",
                "tertiary": "#c8c6c5"
            },
            "borderRadius": {
                "DEFAULT": "0.25rem",
                "lg": "0.5rem",
                "xl": "0.75rem",
                "full": "9999px"
            },
            "spacing": {
                "gutter": "24px",
                "margin-mobile": "20px",
                "unit": "8px",
                "margin-desktop": "64px",
                "container-max": "1440px"
            },
            "fontFamily": {
                "label-lg": ["Inter"],
                "headline-lg": ["Montserrat"],
                "body-md": ["Inter"],
                "label-sm": ["Inter"],
                "headline-md": ["Montserrat"],
                "display-lg": ["Montserrat"],
                "display-lg-mobile": ["Montserrat"],
                "body-lg": ["Inter"]
            },
            "fontSize": {
                "label-lg":           ["0.875rem",  { "lineHeight": "1.25rem",  "letterSpacing": "0.1em",   "fontWeight": "600" }],
                "headline-lg":        ["2rem",       { "lineHeight": "2.5rem",   "letterSpacing": "-0.01em", "fontWeight": "700" }],
                "body-md":            ["1rem",       { "lineHeight": "1.5rem",   "fontWeight": "400" }],
                "label-sm":           ["0.75rem",    { "lineHeight": "1rem",     "letterSpacing": "0.05em",  "fontWeight": "500" }],
                "headline-md":        ["1.5rem",     { "lineHeight": "2rem",     "fontWeight": "700" }],
                "display-lg":        ["4.5rem",     { "lineHeight": "5rem",     "letterSpacing": "-0.02em", "fontWeight": "900" }],
                "display-lg-mobile": ["2.5rem",     { "lineHeight": "3rem",     "letterSpacing": "-0.02em", "fontWeight": "900" }],
                "body-lg":           ["1.125rem",   { "lineHeight": "1.75rem",  "fontWeight": "400" }]
            }
        }
    }
};

declare module 'react-chrono' {
    import * as React from 'react';

    export interface ChronoItem {
        date: string;
        title: string;
        subtitle?: string;
        icon?: string;
    }

    export interface ChronoProps {
        items: ChronoItem[];
        mode?: 'VERTICAL' | 'HORIZONTAL' | 'VERTICAL_ALTERNATING';
        slideShow?: boolean;
        slideItemDuration?: number;
        enableOutline?: boolean;
        cardHeight?: number;
        theme?: {
            primary?: string;
            secondary?: string;
            cardBgColor?: string;
            cardForeColor?: string;
            titleColor?: string;
        };
        useReadMore?: boolean;
        hideControls?: boolean;
        children?: React.ReactNode;
    }

    export const Chrono: React.FC<ChronoProps>;
}
export interface Feature {
    icon: string;
    title: string;
    description: string;
}

export interface DownloadOption {
    title: string;
    subtitle: string;
    apkUrl: string;
    playStoreUrl: string;
    icon: string;
    comingSoon: boolean;
}

export interface Portal {
    title: string;
    description: string;
    icon: string;
    href: string;
    features: string[];
}

export interface ContactInfo {
    email: string;
    phone: string;
    hours: string;
}

export interface NavLink {
    label: string;
    href: string;
}

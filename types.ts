export interface Alumni {
    id: string;
    name: string;
    university: string;
    major: string;
    category: 'Saintek' | 'Soshum';
    quote: string;
    image: string;
    tags: string[];
}

export interface EventSchedule {
    id: string;
    time: string;
    title: string;
    speaker: string;
    location: string;
}

export interface RegistrationFormData {
    fullName: string;
    email: string;
    phone: string;
    school: string;
    interest: string;
}

export interface University {
    id: string;
    name: string;
    description: string;
    majors: string[];
    link: string;
    x: number; // percentage 0-100
    y: number; // percentage 0-100
    color: string; // tailwind bg color class
    shadowColor: string; // tailwind shadow color class
    size: string; // tailwind width/height class
    images: string[];
    category: 'Tech' | 'General' | 'Science' | 'Arts';
    orbit?: {
        radius: number; // percentage relative to container shortest side usually, or just pixel/rem scaling
        duration: number; // seconds
        initialAngle: number; // degrees
    };
}

export interface InspirationalQuote {
    id: string;
    text: string;
    author: string;
    role: string;
}
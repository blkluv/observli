export type PageContext = {
    choices?: string[];
    required?: boolean;
    placeholder?: string;
};

export type PageDesign = {
    backgroundColor: string;
    backgroundImage?: string;
    fontColor: string;
    fontFamily: string;
};

export enum PageType {
    short_answer = "short_answer",
    long_answer = "long_answer",
    single_choice = "single_choice",
    multiple_choice = "multiple_choice",
    email = "email",
    date = "date",
    hero = "hero",
    image = "image",
    cal_com = "cal_com",
    lemon_squeezy = "lemon_squeezy",
}

export type Page = {
    id: number;
    type: PageType;
    title: string;
    description?: string;
    context: PageContext;
    design: PageDesign;
};

export enum FormTheme {
    classic = "classic",
    modern = "modern",
}

import Date from "@/Components/CreateForm/FormSlide/Date";
import Email from "@/Components/CreateForm/FormSlide/Email";
import Hero from "@/Components/CreateForm/FormSlide/Hero";
import LongAnswer from "@/Components/CreateForm/FormSlide/LongAnswer";
import MultipleChoice from "@/Components/CreateForm/FormSlide/MultipleChoice";
import ShortAnswer from "@/Components/CreateForm/FormSlide/ShortAnswer";
import SingleChoice from "@/Components/CreateForm/FormSlide/SingleChoice";
import { PageType } from "@/Types/Form";

export function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export const componentForPageType = (pageType: PageType) => {
    switch (pageType) {
        case "date":
            return Date;
        case "email":
            return Email;
        case "hero":
            return Hero;
        case "long_answer":
            return LongAnswer;
        case "multiple_choice":
            return MultipleChoice;
        case "short_answer":
            return ShortAnswer;
        case "single_choice":
            return SingleChoice;
        default:
            return null;
    }
};

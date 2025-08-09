export const languages = [
  {
    id: "ar",
    name: "العربية",
  },
  {
    id: "en",
    name: "English",
  },
  {
    id: "fr",
    name: "Français",
  },
] as const;

export type LanguageId = (typeof languages)[number]["id"];

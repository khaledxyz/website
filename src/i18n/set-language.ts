"use server";

import { LanguageId } from "@/config/languages.config";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export async function setLanguage(lang: LanguageId) {
  const jar = await cookies();
  jar.set("language", lang, {
    expires: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000),
  });
  revalidatePath("/");
}

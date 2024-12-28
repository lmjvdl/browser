import { z } from "zod";

const user = z
    .object({
        id: z.number(),
        username: z.string(),
        email: z.string()
    })

const authResponseSchema = z
  .object({
    user
  })

export type AuthResponse = z.infer<typeof authResponseSchema>;

export default function AuthResponseSanitizer(pollutedData: unknown) {
  try {
    const refined = authResponseSchema.parse(pollutedData);
    return refined;
  } catch (err) {
    throw new Error("متاسفانه داده دریافتی ناقص است لطفا دوباره تلاش نمایید.", {
      cause: "خطای سرور",
    });
  }
}

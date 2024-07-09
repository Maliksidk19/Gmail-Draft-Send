import { sendDraftMail } from "@/lib/Email";
import { redirect } from "next/navigation";

export async function GET(req: Response) {
  const params = new URL(req.url).searchParams;

  const code = Object.fromEntries(params.entries()).code;

  await sendDraftMail(code);

  redirect(`/dashboard`);
}

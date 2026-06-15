import { isAdmin } from "@/lib/auth";
import { getSignups, type Signup } from "@/lib/signups";

function csvCell(value: string): string {
  return `"${value.replace(/"/g, '""')}"`;
}

export async function GET() {
  if (!(await isAdmin())) {
    return new Response("Unauthorized", { status: 401 });
  }

  const signups = await getSignups();
  const columns: (keyof Signup)[] = [
    "name",
    "email",
    "school",
    "grade",
    "track",
    "experience",
    "dietary",
    "createdAt",
  ];

  const rows = [
    columns.join(","),
    ...signups.map((s) => columns.map((c) => csvCell(String(s[c] ?? ""))).join(",")),
  ];

  return new Response(rows.join("\r\n"), {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": 'attachment; filename="clover-hacks-signups.csv"',
    },
  });
}

import { Card } from "@/components/Card";
import Link from "next/link";

export default function Notification() {
  return (
    <Card>
      <h1>Notification</h1>

      <Link href="/complex-dashboard/archived">Archived</Link>
    </Card>
  )
}
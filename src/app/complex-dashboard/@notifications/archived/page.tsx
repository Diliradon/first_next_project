import { Card } from "@/components/Card";
import Link from "next/link";

export default function ArchivedNotification () {
  return (
    <Card>
      <div>Notification Archived</div>

      <Link href="/complex-dashboard">Go Default</Link>
    </Card>
  )
}
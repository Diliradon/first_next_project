"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLink = [
  { name: "Register", href: '/register' },
  { name: "Login", href: '/login' },
  { name: "Forgot Password", href: '/forgot-password' },
]

export default function AuthLayout({
  children
}: {
  children: React.ReactNode
}) {
  const pathName = usePathname();

  return (
    <>
      <h2>Auth Layout</h2>

      {navLink.map(link => {
        const isActive = pathName.startsWith(link.href);
        return (
          <Link 
            href={link.href} 
            key={link.name} 
            className={isActive ? "text-red-800 mr-4" : "text-amber-400 mr-2"}
          >
            {link.name}
          </Link>
        )
      })}

      {children}
    </>

  )
}
import Link from "next/link";

interface LinkButtonProps {
  label: string;
  href: string; 
}

export default function LinkButton({ label, href }: LinkButtonProps) {
  return (
    <div className="mt-4">
      <Link href={href} className="text-blue-600 hover:underline">
        {label}
      </Link>
    </div>
  );
}

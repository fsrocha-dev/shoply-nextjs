import Link from 'next/link';

export default function Nav() {
  return (
    <ul className="flex gap-3">
      <li>
        <Link href={'/contact'} className="hover:underline">
          Categories
        </Link>
      </li>
      <li>
        <Link href={'/contact'} className="hover:underline">
          Contact
        </Link>
      </li>
    </ul>
  );
}

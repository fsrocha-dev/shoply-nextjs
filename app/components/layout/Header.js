'use client';
import Link from 'next/link';
import { Basket } from '@phosphor-icons/react';
import Nav from './Nav';

export default function Header() {
  return (
    <nav
      data-testid="header"
      className="flex justify-center border-b-2 border-gray-100"
    >
			<div className="flex flex-wrap w-4/5 py-2 justify-between">
				<Link href={'/'} className="p-2 mr-4 inline-flex items-center">
					<Basket size={32} className="fill-current mr-2 h-8 w-8 text-blue-900" />
					<span className="text-lg text-blue-900 font-bold tracking-wide">
						Shoply
					</span>
				</Link>
				<div className="flex gap-4 items-center">
					<div>
						<input
							className="border border-gray-300 focus:ring-blue-900 text-gray-900 text-sm rounded-lg block w-full p-2.5"
							type="search"
							placeholder="Search products..."
						/>
					</div>
					<Nav />
				</div>
			</div>
    </nav>
  );
}

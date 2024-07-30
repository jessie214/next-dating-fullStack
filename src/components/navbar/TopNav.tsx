import React from 'react';
import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from '@nextui-org/react';
import Link from 'next/link';
import NavLink from './NavLink';

export default function TopNav() {
  return (
    <>
      <Navbar
        maxWidth="xl"
        className="bg-gradient-to-r from-purple-400 to-purple-700"
        classNames={{
          item: [
            'text-xl',
            'text-white',
            'uppercase',
            'data-[active=true]:text-yellow-200',
          ],
        }}
      >
        <NavbarBrand>
          <div className="font-bold text-3xl flex">
            <span className="text-gray-900">Next</span>
            <span className="text-gray-200">Dating</span>
          </div>
        </NavbarBrand>
        <NavbarContent justify="center">
          <NavLink href="/members" label="Matches" />
          <NavLink href="/lists" label="List" />
          <NavLink href="/messages" label="Messages" />
        </NavbarContent>
        <NavbarContent justify="end">
          <Button
            as={Link}
            href="/auth/login"
            variant="bordered"
            className="text-white"
          >
            Login
          </Button>
          <Button
            as={Link}
            href="/auth/register"
            variant="bordered"
            className="text-white"
          >
            Register
          </Button>
        </NavbarContent>
      </Navbar>
    </>
  );
}

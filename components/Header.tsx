/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import Link from 'next/link';

const headerStyles = css`
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid blue;
  background-color: black;
`;

export default function Header(props: any) {
  return (
    <header css={headerStyles}>
      <Link href="/">Home</Link>
      <Link href="/films">Films</Link>
      <Link href="/parties">Parties</Link>
      <Link href="/users">Users</Link>
      {/* login or registration */}
      <Link href="/login">Login/Register</Link>
    </header>
  );
}

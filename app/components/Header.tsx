import React from 'react';
import Image from 'next/image';

const Header = () => (
  <header className="flex items-center justify-between w-full mb-8">
    <Image
      src="/material-symbols.svg"
      alt="material-symbols"
      width={20}
      height={20}
      className="justify-self-center cursor-pointer"
    />
    <div className="flex-1 text-center">
      <Image
        src="/logo.svg"
        alt="Goal weight star"
        width={86}
        height={24}
        className="justify-self-center"
      />
    </div>
  </header>
);

export default Header;
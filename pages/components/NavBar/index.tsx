import React from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import styles from '../../../styles/Home.module.css';

export default function NavBar() {
  return (
    <>
      <div className="relative h-32">
        <div className={`md:col-span-1 absolute top-0 right-0 ${styles.verticalPadding}`}>
          <ConnectButton />
        </div>
      </div>
    </>
  )
}

import React from 'react';
import { STRINGS } from '../../../strings';

export default function Banner() {
  return (
    <div className="grid grid-col-1 pb-5">
      <h1 className="text-5xl font-extrabold pb-5">{STRINGS.createDAO}</h1>
      <p>The objective of this tutorial is to get you familiar with the Aragon SDK by launching your own DAO.</p>
      <p>In order to do so, we only need to get the DAOs name, logo, description, and the governance mechanism you want to use.</p>
      <p>For this exercise, we will use Majority Voting as default, but feel free to play with adding a dropdown for the user to choose their governance mechanism of choice!</p>
    </div>
  )
}

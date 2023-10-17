import React from 'react';
import logo from './logo.svg';
import { CHANNEL_TYPES } from './packages/Linkees/src/constants'
import Linkees from './packages/Linkees/src/index';
import './App.css';
import fetch from 'node-fetch'
const favicon_lookup = 'https://s2.googleusercontent.com/s2/favicons?domain_url='
async function getFavicon(url: string): Promise<string> {
  let res = await fetch(favicon_lookup + url);
  let data = await res.json();
  return JSON.stringify(data)
}


const cards = [
  {
    title: 'GitHub',
    subtitle: 'github.com/hunterverhelst',
    type: CHANNEL_TYPES.GITHUB,
    link: 'https://github.com/hunterverhelst',
  }
]

function App() {
  return (
      <Linkees name="A" cardItems={cards}/>
  );
}

export default App;

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// PLAN FOR STEAM ANALYTICS APP
// SHOW FEATURED GAMES IN HOME PAGE
// WHEN GAME IS CLICKED ON, GET APP DETAILS AND DISPLAY
// FOR SEARCH, HAVE AN ONCHANGE TO FIND GAMES USING SEARCH QUERY AND SEARCHAPPS API
// GET ID AND FIND A WAY TO GET INDIVIDUAL DETAILS TO DISPLAY GENRE
// CAN USE https://steamspy.com TO GET USER TAGS AND MORE DATA

// 1. HOME PAGE: GET https://store.steampowered.com/api/featured to show featured apps
// 2. SEARCH: GET https://steamcommunity.com/actions/SearchApps/:query to find IDs that include search query
// 3. LOOK INTO STEAMSPY TO DISPLAY TAGS, GENRE, ETC.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

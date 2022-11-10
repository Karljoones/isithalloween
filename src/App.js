import React from 'react';

function App() {

  const yes = [
    "Yes",
    "YES!",
    "¡SI!",
    "No.. I mean, YES!",
    "Halloween mode activated",
    "🎃",
    "Ya",
    "Ja",
    "Oui",
    "はい"
  ];
  const yesSub = [
    "Time to get spooky!",
    "It's the most wonderful time of the year!",
    "Which witch is which?",
    "I'm a mouse.. Duh!",
    "Light the sparklers!",
  ];

  const no = [
    "No",
    "Nah",
    "Not yet",
    "Nope",
    "Nej",
    "Non",
    "Nein",
    "No... But in Spanish",
    "Nie",
    "Não",
    "Yes! Happy Not Opposite Day."
  ];
  const noSub = [
    "Go back to work.",
    "Put that costume back in your wardrobe.",
    "It's too early for the spooky makeup you're wearing.",
    "But you should definitely check back tomorrow, it might be then!",
    "\"No capes!\" - Edna Mode, 2004",

  ];

  const [shareText, setShareText] = React.useState("It's not Halloween yet... Check back soon!");

  const isItHalloween = () => {
    const today = new Date();
    const halloween = new Date(today.getFullYear, 10, 31);
    return (today.getDate() === halloween.getDate()) && (today.getMonth() === halloween.getMonth());
  }

  return (
    <div className="App">
      <h1 className="title">{isItHalloween() ? yes[Math.floor(Math.random() * yes.length)] : no[Math.floor(Math.random() * no.length)]}</h1>
      <h3 className="subtitle">{isItHalloween() ? yesSub[Math.floor(Math.random() * yesSub.length)] : noSub[Math.floor(Math.random() * noSub.length)]}</h3>

      {isItHalloween() && setShareText("It's Halloween! Time to get spooky!")}

      {navigator.share &&
        <button className="sharebtn" aria-label="share" onClick={() => { navigator.share({ title: document.title, text: shareText, url: window.location.href }) }}>
          Share
        </button>
      }
    </div>
  );
}

export default App;

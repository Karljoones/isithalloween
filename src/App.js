function App() {

  const yes = ["Yes.", "YES!", "¡SI!", "No.. I mean, YES!", "Halloween mode activated", "🎃"];
  const yesSub = ["Time to get spooky!", "It's the most wonderful time of the year!", "Which witch is which?", "I'm a mouse.. Duh!"]
  const no = ["No.", "Nah.", "Not yet.", "Nope."];
  const noSub = ["Go back to work.", "Put that costume back in your wardrobe.", "It's too early for the spooky makeup you're wearing.", "But you should definitely check back tomorrow, it might be then!"]

  const isItHalloween = () => {
    const today = new Date();
    const halloween = new Date(today.getFullYear, 10, 31);
    return today === halloween;
  }

  return (
    <div className="App">
      <h1 className="title">{isItHalloween() ? yes[Math.floor(Math.random() * yes.length)] : no[Math.floor(Math.random() * no.length)]}</h1>
      <h3 className="subtitle">{isItHalloween() ? yesSub[Math.floor(Math.random() * yesSub.length)] : noSub[Math.floor(Math.random() * noSub.length)]}</h3>
    </div>
  );
}

export default App;

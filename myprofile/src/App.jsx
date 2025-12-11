import { useState,useEffect } from 'react'
import ProfileCard from './components/ProfileCard'


function App() {
    const [theme, setTheme] = useState("light"); 
  const [form, setForm] = useState({ name: "", age: "", city: "" });
 useEffect(() => {
  
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  return (
  <>
<div className="app">
      <header className="header">
        <h1>Personal Profile Card</h1>
        <button
          className="theme-toggle"
          onClick={() => setTheme(prev => (prev === "light" ? "dark" : "light"))}
          aria-label="Toggle theme"
        >
          {theme === "light" ? "🌙 Dark" : "☀️ Light"}
        </button>
      </header>

      <main className="container">
        <section className="form-section">
          <label>
            Name
            <input name="name" value={form.name} onChange={handleChange} />
          </label>

          <label>
            Age
            <input name="age" value={form.age} onChange={handleChange} />
          </label>

          <label>
            City
            <input name="city" value={form.city} onChange={handleChange} />
          </label>
        </section>

        <section className="preview-section">
          <h2>Live Preview</h2>
          <ProfileCard {...form} />
        </section>
      </main>
    </div>
  
  </>
  )
}

export default App

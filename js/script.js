const homeBtn = document.getElementById("homebtn");
const projBtn = document.getElementById("projectsbtn");
const contactBtn = document.getElementById("contactBtn");
const main = document.querySelector("main");

homeBtn.addEventListener("click", () => {
    displayHome();
});

projBtn.addEventListener("click", () => {
    displayProjects();
});

contactBtn.addEventListener("click", () => {
    displayContact();
});


//Functions for dynamically showing the content
function displayHome(){
    main.innerHTML = `
    <div class="card">
        <h3>Bio</h3>
        <p>
          Hello, I am Trisston Icenhower, a software developer who is interested
          in working with large scale projects. I have been into technology
          since I was young, but only started programming after a class in high
          school. That's when I fell in love with it and decided to make it my
          career!
        </p>
        <p>
          My primary focus has been in developing applications for web and I
          have also began to work with Kotlin to learn Android development.
        </p>
      </div>
      <div class="card">
        <h3>Hobbies</h3>
        <ul class="display-list">
          <li>Learning Spoken Languages</li>
          <li>Gaming</li>
          <li>Programming</li>
          <li>Crypto & Finance</li>
        </ul>
      </div>
      <div class="card">
        <h3>Languages and Tools</h3>
        <ul class="display-list">
          <li>Javascript</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>Python</li>
          <li>C#</li>
          <li>Kotlin</li>
          <li>Git</li>
        </ul>
      </div>
    `
}

function displayProjects(){
    main.innerHTML = `
    <div class="card">
        <h3>DRIP Investing</h3>
        <a href="https://github.com/Tice28/dripvsnodripinvesting" target="_blank">Project Link</a>
        <p>This project serves to create a graphical representation of what would happen if you made monthly contributions to an investment and reinvested the dividends. This is then compared to the value of the investment without reinvested dividends summed up neatly in a matplotlib chart pdf.</p>
      </div>
      <div class="card">
        <h3>Weather App</h3>
        <a href="https://tice28.github.io/weatherapp/" target="_blank">Project Link</a>
        <p>This project serves to display a 3 day weather forecast based on data gathered by an API.</p>
      </div>`
}

function displayContact(){
    main.innerHTML = `<div class="card" id="contact-form">
    <h1>Let's Talk!</h1>
    <h2>Contact me:</h2>
    <form action="https://formspree.io/f/xpzvdbgw" method="POST">
      <label>
        Your email:
        <input type="email" name="email" autocomplete="email" />
      </label>
      <label>
        Your message:
        <textarea name="message"></textarea>
      </label>
      <button type="submit">Send</button>
    </form>
  </div>`
}

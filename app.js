const MDCSelect = mdc.select.MDCSelect;
const MDCTabBar = mdc.tabBar.MDCTabBar;
const select = new MDCSelect(document.querySelector('.mdc-select'));
let values = [];

select.listen('MDCSelect:change', () => {
  alert(`Selected option ${select.selectedIndex}, "${select.value}"`);
});

const tabBar = new MDCTabBar(document.querySelector('.mdc-tab-bar'));

const tabs = Array.from(document.getElementsByClassName("mdc-tab"));
tabs.map((tab, index) => tab.addEventListener('click', e => switch_screen(e, index)));

console.log(tabs);
function switch_screen(e, index) {
  values = [];

  const main = document.querySelector("#main-content");

  if (index == 0) {
    main.innerHTML=`
      <h2 class="subheading">Overview</h2>
      <p style="line-height: 1.71429;font-size: 14px;letter-spacing:.25px;font-family:Roboto">Coronavirus disease (COVID-19) is an infectious disease caused by a new virus.
        The disease causes respiratory illness (like the flu) with symptoms such as a cough, fever, and in more severe cases, difficulty breathing. You can protect yourself by washing your hands frequently, avoiding touching your face, and avoiding close contact (1 meter or 3 feet) with people who are unwell.</p>
      <p style="line-height: 1.71429;font-size: 14px;letter-spacing:.25px;font-family:Roboto">
        🌎 Learn more at: <a href="https://www.who.int/">https://www.who.int/</a></p>
      <h2 class="subheading">Resources</h2>
      <div class="cards">
        <div class="mdc-card demo-card">
          <div class="mdc-card__primary-action demo-card__primary-action" tabindex="0">
            <div class="mdc-card__media mdc-card__media--16-9 demo-card__media" style="background-image: url(&quot;https://www.google.com/covid19/static/yt-tn-learn-at-home.jpg&quot;);"></div>
            <div class="demo-card__primary">
              <h2 class="demo-card__title mdc-typography mdc-typography--headline6">Learn @ home</h2>
            </div>
            <div class="demo-card__secondary mdc-typography mdc-typography--body2">Resources & activities for parents & families to make the coming days as educational and fun as possible.</div>
          </div>
        </div>
        <div class="mdc-card demo-card">
          <div class="mdc-card__primary-action demo-card__primary-action" tabindex="0">
            <div class="mdc-card__media mdc-card__media--16-9 demo-card__media" style="background-image: url(&quot;https://www.google.com/covid19/static/yt-tn-work-from-home-essentials.jpg&quot;);"></div>
            <div class="demo-card__primary">
              <h2 class="demo-card__title mdc-typography mdc-typography--headline6">Work from home essentials</h2>
            </div>
            <div class="demo-card__secondary mdc-typography mdc-typography--body2">
              Tips and tricks to effectively work from home, from
              troubleshooting poor Wi-Fi to collaborating with
              coworkers.
            </div>
          </div>
        </div>
        <div class="mdc-card demo-card">
          <div class="mdc-card__primary-action demo-card__primary-action" tabindex="0">
            <div class="mdc-card__media mdc-card__media--16-9 demo-card__media" style="background-image: url(&quot;https://www.google.com/covid19/static/yt-tn-coping-techniques.jpg&quot;);"></div>
            <div class="demo-card__primary">
              <h2 class="demo-card__title mdc-typography mdc-typography--headline6">Coping techniques for stressful days</h2>
            </div>
            <div class="demo-card__secondary mdc-typography mdc-typography--body2">
              Videos to learn new coping techniques, from a 5-minute meditation to stress-relieving yoga.</div>
          </div>
        </div>
        <div class="mdc-card demo-card">
          <div class="mdc-card__primary-action demo-card__primary-action" tabindex="0">
            <div class="mdc-card__media mdc-card__media--16-9 demo-card__media" style="background-image: url(&quot;https://www.google.com/covid19/static/yt-tn-workout-with-me.jpg&quot;);"></div>
            <div class="demo-card__primary">
              <h2 class="demo-card__title mdc-typography mdc-typography--headline6">Workout with Me</h2>
            </div>
            <div class="demo-card__secondary mdc-typography mdc-typography--body2">
              Turn your home into your personal gym with these exercises
              that require just a pair of dumbbells or no equipment at
              all.
            </div>
          </div>
        </div>
      </div>
    `;
  } else if (index == 1) {
    main.innerHTML=`
      <h2 class="subheading">Symptoms</h2>
      <div style="width:100%;display:flex;justify-content:center;margin:10px 0;margin-top: 15px;">
        <button class="mdc-button mdc-button--raised" id="2" onclick="render_question(1)">
          <span class="mdc-button__label">Try Diagnostic Questionnaire</span>
        </button>
      </div>
      <p style="line-height: 1.71429;font-size: 14px;letter-spacing:.25px;font-family:Roboto">People may be sick with the virus for 1 to 14 days before developing symptoms. The most common symptoms of coronavirus disease (COVID-19) are fever, tiredness, and dry cough. Most people (about 80%) recover from the disease without needing special treatment.
        More rarely, the disease can be serious and even fatal. Older people, and people with other medical conditions (such as asthma, diabetes, or heart disease), may be more vulnerable to becoming severely ill.
        People may experience:</p>
      <ul style="margin:0;line-height: 1.71429;font-size: 14px;letter-spacing:.25px;font-family:Roboto">
        <li>cough</li>
        <li>fever</li>
        <li>lethargy (example: tired from waking up)</li>
        <li>difficulty breathing (severe cases)</li>
      </ul>
      <p style="line-height: 1.71429;font-size: 14px;letter-spacing:.25px;font-family:Roboto">
        🌎 Learn more at: <a href="https://www.canada.ca/en/public-health/services/diseases/2019-novel-coronavirus-infection/symptoms.html#s">Public Health Canada COVID-19 Symptoms</a></p>
    `;
  } else if (index == 2) {
    main.innerHTML=`
      <h2 class="subheading">Prevention Methods</h2>
      <p style="line-height: 1.71429;font-size: 14px;letter-spacing:.25px;font-family:Roboto">There’s currently no vaccine to prevent coronavirus disease (COVID-19).
        You can protect yourself and help prevent spreading the virus to others if you:</p>
      Do
      <ul>
        <li>Wash your hands regularly for 20 seconds, with soap and water or alcohol-based hand rub</li>
        <li>Cover your nose and mouth with a disposable tissue or flexed elbow when you cough or sneeze</li>
        <li>Stay home and self-isolate from others in the household if you feel unwell</li>
      </ul>
      Don't
      <ul>
        <li>Touch your eyes, nose, or mouth if your hands are not clean</li>
      </ul>
      <p style= "line-height: 1.71429;font-size: 14px;letter-spacing:.25px;font-family:Roboto">
        🌎 Learn more at: <a href="https://www.canada.ca/en/public-health/services/diseases/2019-novel-coronavirus-infection/prevention-risks.html#p">Public Health Canada COVID-19 Prevention Methods</a></p>
    `;
  } else if (index == 3) {
    main.innerHTML=`
      <h2 class="subheading">Treatments</h2>
      <p>So far there is no specific medicine to prevent or treat coronavirus disease (COVID-19). People may need supportive care to help them breathe.</p>
      <p>🌎 Learn more at: <a href="https://www.canada.ca/en/public-health/services/diseases/2019-novel-coronavirus-infection/symptoms.html?topic=tilelink#t">Public Health Canada COVID-19 Treatment</a></p>
    `;
  }
}

function render_question(number) {
  const main = document.querySelector("#main-content");
  function yes_no_buttons(number) {
    return `
      <div style="display:flex;justify-content:space-around">
        <button class="mdc-button mdc-button--raised" style="background-color:#00C853;" onclick="add_value(true);render_question(` + number + `)">YES</button>
        <button class="mdc-button mdc-button--raised" style="background-color:#D50000;" onclick="add_value(false);render_question(` + number + `)">NO</button>
      </div>
    `;
  };

  if (number == 1) {
    main.innerHTML=`
      <h2 class="subheading">Self-Diagnostic</h2>
      <h3>Let's help provide critical care to those who need it most.</h3>
      <p style="margin-top:0">Overcrowded hospitals pose serious risks to you and others. We'll ask you a couple questions to figure out if going to the hospital is the next best step based on your symptoms for COVID-19.</p>
      <div style="margin-top:auto">
      <h3 style="margin-top:auto;display:flex;justify-content:center;">Ready to begin?</h3>
      <div style="width:100%;display:flex;justify-content:center;margin:10px 0;">
        <button class="mdc-button mdc-button--raised" id="2" onclick="render_question(2)">
          <span class="mdc-button__label">BEGIN DIAGNOSTIC QUESTIONNAIRE</span>
        </button>
      </div>
      </div>
    `;
  } else if (number == 2) {
    main.innerHTML=`
      <h2 class="subheading">Question 1/5</h2>
      <h3 style="font-style:18px;margin-bottom:auto">Are you ill, or caring for someone who is ill?</h3>
    ` + yes_no_buttons(3);
  } else if (number == 3) {
    main.innerHTML=`
      <h2 class="subheading">Question 2/5</h2>
      <p>Based on data from China, 80% of Coronavirus carriers have mild to no symptoms, and will recover safely at home.</h3>
      <h3 style="font-style:18px;margin-bottom:auto">Do you have all of the following:<br /> a fever and a cough?</h3>
    ` + yes_no_buttons(4);
  } else if (number == 4) {
    main.innerHTML=`
      <h2 class="subheading">Question 3/5</h2>
      <h3 style="font-style:18px;margin-bottom:auto">Have you been experiencing shortness of breath, weakness, feeling unable to move at a normal speed?</h3>
    ` + yes_no_buttons(5);
  } else if (number == 5) {
    main.innerHTML=`
      <h2 class="subheading">Question 4/5</h2>
      <h3 style="font-style:18px;margin-bottom:auto">Older folks, or those with underlying medical conditions like diabetes/heart disease are more at risk of harm from Coronavirus. Do you fit into this category?</h3>
    ` + yes_no_buttons(6);
  } else if (number == 6) {
    main.innerHTML=`
      <h2 class="subheading">Question 5/5</h2>
      <h3 style="font-style:18px;margin-bottom:auto">Have you recently travelled to a Coronavirus-infected area? e.g. China, Iran, Italy. Answer NO if you don't know.</h3>
    ` + yes_no_buttons(7);
  } else if (number == 7) {
    const yes_count = values.filter(x => x).length
    if (yes_count >= 3) {
      main.innerHTML=`
        <h3 style="display:flex;justify-content:center;text-align: center;font-size:18px">Based on your answers, your status is</h3>
        <div style="border: 1px solid red;width: 220px;height:220px;position: relative;border-radius:50%;display:flex;justify-content:center;align-items:center;margin:auto;"><h3 style="font-size:45px;color:red;">Urgent<h3></div>
        <h3 style="display:flex;justify-content:center;text-align: center;font-size:18px">Please visit the hospital for assistance immediately. Maintain social distancing!</h3>
      `;
    } else {
      main.innerHTML=`
        <h3 style="display:flex;justify-content:center;text-align: center;font-size:18px">Based on your answers, your status is</h3>
        <div style="border: 1px solid green;width: 220px;height:220px;position: relative;border-radius:50%;display:flex;justify-content:center;align-items:center;margin:auto;"><h3 style="font-size:45px;color:green;">Mild<h3></div>
        <h3 style="display:flex;justify-content:center;text-align: center;font-size:18px">Your symptoms are best treated at home than taking a risk at the hopsital. Maintain social distancing!</h3>
      `;
    }
  }
}

function add_value(val) {
  values.push(val);
}

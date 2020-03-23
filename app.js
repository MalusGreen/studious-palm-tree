const MDCSelect = mdc.select.MDCSelect;
const MDCTabBar = mdc.tabBar.MDCTabBar;
const select = new MDCSelect(document.querySelector('.mdc-select'));

select.listen('MDCSelect:change', () => {
  alert(`Selected option ${select.selectedIndex}, "${select.value}"`);
});

const tabBar = new MDCTabBar(document.querySelector('.mdc-tab-bar'));

tabBar.listen('MDCTabBar:activated', e => {
  const index = e.detail.index;
  
  const main = document.querySelector("#main-content");
  // Home Page
  if (index == 0) {
    main.innerHTML=`
      <h2 class="subheading">Overview</h2>
      <p style="line-height: 1.71429;font-size: 14px;letter-spacing:.25px;font-family:Roboto">Coronavirus disease (COVID-19) is an infectious disease caused by a new virus.
        The disease causes respiratory illness (like the flu) with symptoms such as a cough, fever, and in more severe cases, difficulty breathing. You can protect yourself by washing your hands frequently, avoiding touching your face, and avoiding close contact (1 meter or 3 feet) with people who are unwell.</p>
      <p style="line-height: 1.71429;font-size: 14px;letter-spacing:.25px;font-family:Roboto">
        🌎 Learn more at: <a href="https://www.who.int/">https://www.who.int/</a></p>
      <h2 class="subheading">Resources</h2>
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
    `;
  } else if (index == 1) {
    main.innerHTML=`
      <h2 class="subheading">Symptoms</h2>
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
        🌎 Learn more at: <a href="https://www.canada.ca/en/public-health/services/diseases/2019-novel-coronavirus-infection/symptoms.html#s">Public Health Canada COVID19 Symptoms</a></p>
      <div style="width:100%;display:flex;justify-content:center;margin:20px 0;">
        <button class="mdc-button mdc-button--raised" id="2">
          <span class="mdc-button__label">Begin Diagnostic Questionnaire</span>
        </button>
      </div>
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
        🌎 Learn more at: <a href="https://www.canada.ca/en/public-health/services/diseases/2019-novel-coronavirus-infection/prevention-risks.html#p">Public Health Canada COVID19 Prevention Methods</a></p>
    `;
  } else if (index == 3) {
    main.innerHTML=`
      <h2 class="subheading">Treatments</h2>
      <p>So far there is no specific medicine to prevent or treat coronavirus disease (COVID-19). People may need supportive care to help them breathe.</p>
      <p>🌎 Learn more at: <a href="https://www.canada.ca/en/public-health/services/diseases/2019-novel-coronavirus-infection/symptoms.html?topic=tilelink#t">Public Health Candada COVID19 Treatment</a></p>
    `;
  }
});

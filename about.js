// Creating the parent element with class 'about-page'
const aboutPage = document.createElement('div');
aboutPage.className = 'about-page';

// Creating the first div with class 'frame-401'
const frame401 = document.createElement('div');
frame401.className = 'frame-401';

// Creating the div inside 'frame-401' with class 'frame-397'
const frame397 = document.createElement('div');
frame397.className = 'frame-397';

// Creating the 'Mission' div
const missionDiv = document.createElement('div');
missionDiv.className = 'mission';
missionDiv.textContent = 'Mission';

// Creating the paragraph for mission description
const missionDescription = document.createElement('div');
missionDescription.className = 'our-mission-at-charit-ease-is-to-provide-a-seamless-and-trustworthy-crowdfunding-platform-that-empowers-individuals-to-make-a-direct-impact-on-the-lives-of-others-we-envision-a-world-where-every-act-of-giving-no-matter-how-small-contributes-to-a-collective-force-for-positive-change-by-fostering-connections-promoting-transparency-and-embracing-innovation-we-aim-to-redefine-the-way-people-experience-and-engage-with-philanthropy';
missionDescription.textContent = 'Our mission at CharitEase is to provide a seamless and trustworthy crowdfunding platform that empowers individuals to make a direct impact on the lives of others. We envision a world where every act of giving, no matter how small, contributes to a collective force for positive change. By fostering connections, promoting transparency, and embracing innovation, we aim to redefine the way people experience and engage with philanthropy.';

// Appending the mission elements to 'frame-397'
frame397.appendChild(missionDiv);
frame397.appendChild(missionDescription);

// Appending 'frame-397' to 'frame-401'
frame401.appendChild(frame397);

// Creating the div inside 'frame-401' with class 'frame-400'
const frame400 = document.createElement('div');
frame400.className = 'frame-400';

// Creating the 'Vision' div
const visionDiv = document.createElement('div');
visionDiv.className = 'mission';
visionDiv.textContent = 'Vision';

// Creating the paragraph for vision description
const visionDescription = document.createElement('div');
visionDescription.className = 'our-mission-at-charit-ease-is-to-provide-a-seamless-and-trustworthy-crowdfunding-platform-that-empowers-individuals-to-make-a-direct-impact-on-the-lives-of-others-we-envision-a-world-where-every-act-of-giving-no-matter-how-small-contributes-to-a-collective-force-for-positive-change-by-fostering-connections-promoting-transparency-and-embracing-innovation-we-aim-to-redefine-the-way-people-experience-and-engage-with-philanthropy2';
visionDescription.textContent = 'Our vision is to be the leading force in transforming traditional crowdfunding into a dynamic ecosystem of empathy and meaningful action. We see CharitEase as a platform that not only connects donors and fundraisers but also cultivates a culture of compassion and mutual support. Through our commitment to user-centric design, technological innovation, and unwavering transparency, we aspire to inspire a new wave of philanthropy that transcends borders and boundaries, creating lasting impact and change.';

// Appending the vision elements to 'frame-400'
frame400.appendChild(visionDiv);
frame400.appendChild(visionDescription);

// Appending 'frame-400' to 'frame-401'
frame401.appendChild(frame400);

// Appending 'frame-401' to 'about-page'
aboutPage.appendChild(frame401);

// Similar code structure can be used to create other elements as well.

// Finally, appending 'about-page' to the document body
document.body.appendChild(aboutPage);


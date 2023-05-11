const progLangs = [
  "HTML",
  "CSS",
  "Javascript",
];

const subarray = progLangs.splice(0, 1);
const subarray2 = progLangs.splice(1, 1);
const subarray3 = progLangs.splice(0, 1);

function generateListItems(fullList) {
  let items = "";
  for (let i = 0; i < fullList.length; i++) {
    items += `<li>${fullList[i]}</li>`;
  }
  return `This website has been created with: ${subarray}, ${subarray3} and ${subarray2}.`;
}

document.querySelector("main").innerHTML = `
<ol>
${generateListItems(progLangs)}
  <ul>
    <li>
    <a href="../index.html">Home</a>
    <a href="../pages/about.html">About</a>
    <a href="../pages/contact.html">Contact</a>
    </li>
  </ul>
</ol>
`;
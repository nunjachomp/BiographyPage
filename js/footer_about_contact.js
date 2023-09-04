const progLangs = [
  "HTML",
  "CSS",
  "Javascript",
  "Python",
  "Java",
  "C++",
];

function generateListItems(fullList) {
  let items = "This website has been created with: ";

  let i = 0;
  while (i < progLangs.length - 1) {
  items += progLangs[i] + ", "; i++;
}
  let items3 = progLangs[i];
  let items2 = `and `;
  return items + items2 + items3;
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
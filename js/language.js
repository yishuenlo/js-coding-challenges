const lang =
  "Chinese English Spanish English, Korean, Spanish English, Spanish English, Spanish english/spanish English/Spanish English/Spanish French French French French Spanish Hebrew spanish spanish Italian Portuguese spanish Spanish Spanish Spanish Spanish Spanish spanish Spanish Spanish Spanish Spanish Spanish Spanish spanish Spanish Spanish Spanish Spanish Spanish Spanish Spanish Spanish Spanish Spanish Spanish Spanish Spanish Spanish Spanish English Spanish, Russian Spanish, Russian, English Swedish";

const arr = lang
  .toLowerCase() //change all to lower case
  .replace(/english/gi, "") //remove english
  .split(/\W+/gi); //convert to array

//count languages
const langCount = arr.reduce((obj, lang) => {
  obj[lang] = ++obj[lang] || 1;
  return obj;
}, {});

for(let lang in langCount){
    langCount[lang] = (langCount[lang] / arr.length).toFixed(2) * 100 + "%";
}

console.log("arr", arr);
console.log("langCount", langCount);

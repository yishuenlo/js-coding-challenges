const cannedFood = {
  //definitely safe
  earthborn_chicken:
    "Chicken, Chicken Broth, Potato Starch, Sunflower Oil, Guar Gum, Tricalcium Phosphate, Carrageenan, Taurine, Choline Chloride, Potassium Chloride, Ferrous Sulfate, Niacin, Vitamin E Supplement, Zinc Oxide, Thiamine Mononitrate, Vitamin B12 Supplement, Manganese Sulfate, Vitamin A Supplement, Calcium Pantothenate, Riboflavin Supplement, Pyridoxine Hydrochloride, Copper Proteinate, Sodium Selenite, Biotin, Vitamin D3 Supplement, Folic Acid, Potassium Iodide",

  //def allergic
  tikiCat_tuna:
    "Tuna, tuna broth, crab surimi (ocean whitefish, crab broth), sunflower seed oil, calcium lactate, tricalcium phosphate, choline chloride, taurine, vitamin E supplement, zinc sulfate, iron sulfate, thiamine mononitrate (vitamin B1), niacin (vitamin B3), calcium pantothenate, manganese sulfate, vitamin A supplement, potassium iodide, copper sulfate, riboflavin supplement (vitamin B2), pyridoxine hydrochloride (vitamin B6), folic acid, vitamin D3 supplement, vitamin B12 supplement",

  //allergic?
  wellnessPate_turkey:
    "Turkey, Chicken Liver, Chicken, Chicken Broth, Carrots, Natural Flavor, Guar Gum, Cranberries, Ground Flaxseed, Cassia Gum, Xanthan Gum, Potassium Chloride, Taurine, Salt, Choline Chloride, Calcium Carbonate, Iron Proteinate, Zinc Proteinate, Beta Carotene, Thiamine Mononitrate, Vitamin E Supplement, Copper Proteinate, Manganese Proteinate, Sodium Selenite, Niacin Supplement, d-Calcium Pantothenate, Pyridoxine Hydrochloride, Riboflavin Supplement, Vitamin A Supplement, Biotin, Potassium Iodide, Vitamin D3 Supplement, Vitamin B12 Supplement, Folic Acid",

  //swollen lips
  wellness_beefChicken:
    "Beef, Chicken Liver, Chicken, Chicken Broth, Carrots, Natural Flavor, Guar Gum, Cranberries, Potassium Chloride, Ground Flaxseed, Taurine, Salt, Calcium Carbonate, Cassia Gum, Xanthan Gum, Choline Chloride, Iron Proteinate, Zinc Proteinate, Beta-Carotene, Thiamine Mononitrate, Vitamin E Supplement, Copper Proteinate, Manganese Proteinate, Sodium Selenite, Niacin, d-Calcium Pantothenate, Pyridoxine Hydrochloride, Riboflavin Supplement, Vitamin A Supplement, Biotin, Potassium Iodide, Vitamin D3 Supplement, Vitamin B12 Supplement, Folic Acid",

  fussieCat_TunaClams:
    "Tuna, Water Sufficient For Processing, Clam, Sunflower Seed Oil, Tricalcium Phosphate, Locust Bean Gum, Carrageenan, Guar Gum, Potassium Chloride, Choline Chloride, Fructooligosaccharide, Taurine, Zinc Sulfate, Vitamin E Supplement, Ferrous Sulfate, Thiamine Mononitrate (Source of Vitamin B1), Nicotinic Acid (Source of Vitamin B3), Calcium Pantothenate, Vitamin A Supplement, Potassium Iodide, Manganese Sulfate, Copper Sulfate, Vitamin D3 Supplement, Riboflavin Supplement (Source of Vitamin B2), Pyridoxine Hydrochloride (Source of Vitamin B6), Folic Acid, Menadione Sodium Bisulfite Complex, Vitamin B12 Supplement",

  fussieCat_chickenVeggies:
    "Boneless Chicken, Water Sufficient For Processing, Carrot, Potato, Tapioca Starch, Green Pea, Sunflower Seed Oil, Tuna oil, Tricalcium Phosphate, Locust Bean Gum, Calcium Lactate, Chicken Broth, Salt, Fructooligosaccharide, Choline Chloride, Taurine, Zinc Sulfate, Vitamin E Supplement , Ferrous Sulfate, Thiamine Mononitrate (Source of Vitamin B1), Nicotinic Acid (Source of Vitamin B3), Calcium Pantothenate, Vitamin A Supplement, Potassium Iodide, Manganese Sulfate, Copper Sulfate, Vitamin D3 Supplement, Riboflavin Supplement (Source of Vitamin B2), Pyridoxine Hydrochloride (Source of Vitamin B6), Folic Acid, Vitamin B12 Supplement",

  fussieCat_chickenEgg:
    "Boneless Chicken, Water Sufficient For Processing, Tapioca Starch, Sunflower Seed Oil, Tuna oil, Dried Eggs,Tricalcium Phosphate, Locust Bean Gum, Calcium Lactate, Chicken Broth, Salt, Fructooligosaccharide, Choline Chloride, Taurine, Zinc Sulfate, Vitamin E Supplement, Ferrous Sulfate, Thiamine Mononitrate (Source of Vitamin B1), Nicotinic Acid (Source of Vitamin B3), Calcium Pantothenate, Vitamin A Supplement, Potassium Iodide, Manganese Sulfate, Copper Sulfate, Vitamin D3 Supplement, Riboflavin Supplement (Source of Vitamin B2), Pyridoxine Hydrochloride (Source of Vitamin B6), Folic Acid, Vitamin B12 Supplement",

  tiki_wildSamlon:
    "Salmon, salmon broth, sunflower seed oil, tricalcium phosphate, taurine, choline chloride, potassium chloride, sodium chloride, magnesium sulfate, zinc amino acid chelate, iron amino acid chelate, vitamin E supplement, ascorbic acid, thiamine mononitrate (vitamin B1), niacin (vitamin B3), manganese amino acid chelate, vitamin A supplement, copper amino acid chelate, calcium iodate, calcium pantothenate, sodium selenite, riboflavin supplement (vitamin B2), vitamin B12 supplement, pyridoxine hydrochloride (vitamin B6), folic acid, vitamin D3 supplement, biotin, vitamin K3 supplement",
};

function convertToArr(str) {
  //clean up ingrients list to array
  let regex = /\s*[,\(\)]+\s*/gi;
  return [...str.toLowerCase().split(regex)];
}

//canned food Lexi is definitely not allergic to
let defSafe = convertToArr(cannedFood.earthborn_chicken);

function unSafeIngredients(flavor) {
  let ingredients = convertToArr(flavor);

  let safe = /sunflower|chicken|water/gi;

  //remove ingredients the same as defSafe ingredients
  //remove safe ingredients including chicken, sunflower, water
  let unsafe = ingredients
    .filter((ingredient) => !defSafe.includes(ingredient))
    .filter((ingredient) => (!ingredient.match(safe) ? true : false));

  return unsafe;
}

let tuna = unSafeIngredients(cannedFood.tikiCat_tuna);
let pateTurkey = unSafeIngredients(cannedFood.wellnessPate_turkey);
let tunaClams = unSafeIngredients(cannedFood.fussieCat_TunaClams);
let beefChicken = unSafeIngredients(cannedFood.wellness_beefChicken);
let chickenVeggies = unSafeIngredients(cannedFood.fussieCat_chickenVeggies);
let wildSalmon = unSafeIngredients(cannedFood.tiki_wildSamlon);
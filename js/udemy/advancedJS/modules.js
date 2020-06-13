const fightModule = (function () {
  let harry = "Potter";
  let voldemort = "He who must not be names";

  function fight(char1, char2) {
    let attack1 = Math.floor(Math.random() * char1.length);
    let attack2 = Math.floor(Math.random() * char2.length);
    return attack1 > attack2 ? `${char1} wins` : `${char2} wins`;
  }

  //public api, interface
  //revealing module pattern
  return {
    fight: fight,
  };
})();

export function fight(char1, char2) {
  const attack1 = Math.floor(Math.random() * char1.length);
  const attack2 = Math.floor(Math.random() * char2.length);
  return attack1 > attack2 ? `${char1} wins` : `${char2} wins`;
}

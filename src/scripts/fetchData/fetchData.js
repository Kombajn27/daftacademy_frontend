const fetchData = async function (count, deck = 'new') {
  try {
    let response = await fetch (`https://deckofcardsapi.com/api/deck/${deck}/draw/?count=${count}`);
    let data = await response.json();
    
    return data;
  } catch (error) {
    return { error }
  }
};

export { fetchData };

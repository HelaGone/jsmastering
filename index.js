//El doble de un número en un array
const doubleNumbers = (arr)=>{
	if(!arr || arr.length === 0) return [];
	const doubles = arr.map(num=>{
		return parseInt(num) * 2
	});
	return doubles;
}

//Enteros a Strings
const intToString = (arr)=>{
  const strings = arr.map(num=>{
    return String(num);
  });
  return strings;
}

export {
  doubleNumbers, 
  intToString
}
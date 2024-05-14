document.getElementById('copy-btn').addEventListener('click', function() {
	const cpf = document.getElementById('cpf').textContent;
	navigator.clipboard.writeText(cpf);

	const notification = document.getElementById('notification');
	notification.classList.add('show');

	setTimeout(() => {
		notification.classList.remove('show');
	}, 1000);
});

document.getElementById('refresh-btn').addEventListener('click', function() {
	init();
});
  
function generateCPF() {
  const rand = (n) => Math.floor(Math.random() * n);
  const mod = (dividendo, divisor) => Math.round(dividendo - Math.floor(dividendo / divisor) * divisor);

  const n1 = rand(9);
  const n2 = rand(9);
  const n3 = rand(9);
  const n4 = rand(9);
  const n5 = rand(9);
  const n6 = rand(9);
  const n7 = rand(9);
  const n8 = rand(9);
  const n9 = rand(9);

  const d1 = n9 * 2 + n8 * 3 + n7 * 4 + n6 * 5 + n5 * 6 + n4 * 7 + n3 * 8 + n2 * 9 + n1 * 10;
  let d1mod = mod(d1, 11);
  d1mod = d1mod < 2 ? 0 : 11 - d1mod;

  const d2 = d1mod * 2 + n9 * 3 + n8 * 4 + n7 * 5 + n6 * 6 + n5 * 7 + n4 * 8 + n3 * 9 + n2 * 10 + n1 * 11;
  let d2mod = mod(d2, 11);
  d2mod = d2mod < 2 ? 0 : 11 - d2mod;

  return `${n1}${n2}${n3}.${n4}${n5}${n6}.${n7}${n8}${n9}-${d1mod}${d2mod}`;
}

function init () {
  const cpf = generateCPF();
  document.getElementById('cpf').textContent = cpf;
}

init();
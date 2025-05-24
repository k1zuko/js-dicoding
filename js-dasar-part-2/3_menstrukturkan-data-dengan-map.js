// simpan nilai di map
const map = new Map();
map.set('name', 'aras');
console.log(map); // Map(1) { 'name' => 'aras' }

// akses nilai di map
const map1 = new Map();
map1.set('name', 'aras');
console.log(map1.get('name')); // Output: aras

// hapus nilai di map
const map2 = new Map();
map2.set('name', 'aras');
map2.set('last name', 'opraza');
map2.delete('last name');
console.log(map2); // Map(1) { 'name' => 'aras' }
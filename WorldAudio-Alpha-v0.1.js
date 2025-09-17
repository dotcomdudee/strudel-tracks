// COMPLETE WORLD MUSIC AUTOMATION SYSTEM
// EXTREMELY EXPREIMENTAL 

// Paste this entire file into the browser console (F12 -> Console tab)

//  Commands after setup:
//  - startWorldMusic() - Start automation
//  - stopWorldMusic() - Stop it
//  - updateOnce() - Single manual update

console.log('🌍 Setting up complete world music automation system...');

// === DOM SETUP ===
// Find the Strudel editor and update button
var editor = document.querySelector('.cm-editor');
var updateBtn = Array.from(document.querySelectorAll('button')).find(btn => btn.textContent === 'update');

console.log('Editor found:', !!editor);
console.log('Update button found:', !!updateBtn);

// Function to programmatically update Strudel code
window.automateStrudel = function(code) {
  console.log('Updating Strudel with new code...');
  var contentEl = editor.querySelector('.cm-content');
  if (contentEl) {
    contentEl.textContent = code;
  }
  var event = new Event('input', { bubbles: true });
  editor.dispatchEvent(event);
  setTimeout(() => {
    updateBtn.click();
    console.log('Update button clicked automatically');
  }, 100);
};

// === WORLD DATA SIMULATION ===
// Simulates rapidly changing world conditions
function getWorldData() {
  // Fast oscillating pressure - cycles every 8 seconds with large range
  var pressure = 1013 + Math.sin(Date.now() / 8000) * 500;  // Range: 513-1513

  // Moon phase - cycles every 12 seconds
  var moon = (Math.sin(Date.now() / 12000) + 1) / 2;        // Range: 0-1

  // Temperature - cycles every 15 seconds
  var temp = 15 + Math.sin(Date.now() / 15000) * 25;       // Range: -10 to 40°C

  return { pressure, moon, temp };
}

// === MUSIC GENERATION ===
// Converts world data to your original techno track with world-controlled parameters
function generateStrudelCode(worldData) {
  // World-influenced values
  var moonGain = (worldData.moon * 0.3 + 0.2).toFixed(2);
  var pressureLpf = Math.floor(280 + (worldData.pressure - 500) * 1.5); // 280-1800 range like original
  var tempGain = (0.28 + (worldData.temp / 100)).toFixed(2); // Temperature affects supersaw gain
  var tidalHpf = Math.floor(2000 + worldData.moon * 6000); // Moon affects hi-hat filter

  // Your original techno track with world data replacements
  var code = 'setcps(0.54);' + '\n\n';

  // p2: Original hi-hat with world-controlled gain instead of perlin
  code += 'p2: s("hh*8").bank("RolandTR909")' + '\n';
  code += '  .clip(sine.slow(16).range(0.18, 0.35))' + '\n';
  code += '  .gain(' + moonGain + ')' + '\n'; // Moon replaces perlin
  code += '  .gain(0.12)' + '\n';
  code += '  .sometimesBy(0.18, x => x.s("hh:1"));' + '\n\n';

  // p10: Hi-hat 16ths with world-controlled HPF
  code += 'p10: s("hh*16")' + '\n';
  code += '  .hpf(' + tidalHpf + ')' + '\n'; // Moon/tidal replaces perlin
  code += '  .clip(0.15)' + '\n';
  code += '  .gain(sine.slow(8).range(0.05, 0.15));' + '\n\n';

  // p3: Clap (unchanged)
  code += 'p3: s("~ ~ ~ clap")' + '\n';
  code += '  .gain(0.40)' + '\n';
  code += '  .clip(0.35)' + '\n';
  code += '  .every(32, x => x.stut(3, 1/16, 0.9));' + '\n\n';

  // p1: Kick (unchanged)
  code += 'p1: s("bd*4").bank("polaris")' + '\n';
  code += '  .gain(0.6).distort(0.22)._scope();' + '\n\n';

  // p9: Bass sine (unchanged)
  code += 'p9: n("g2 g2 g2 g2")' + '\n';
  code += '  .s("sine")' + '\n';
  code += '  .lpf(180)' + '\n';
  code += '  .shape(0.25)' + '\n';
  code += '  .gain(0.1);' + '\n\n';

  // p11: Rim (unchanged)
  code += 'p11: s("[rim ~] ~ ~ ~")' + '\n';
  code += '  .hpf(5000)' + '\n';
  code += '  .gain(0.14)' + '\n';
  code += '  .every(16, x => x.stut(2, 1/32, 0.85));' + '\n\n';

  // p6: Rim pattern (unchanged)
  code += 'p6: s("[rim ~] ~ [rim ~] ~")' + '\n';
  code += '  .hpf(3000)' + '\n';
  code += '  .gain(0.2)' + '\n';
  code += '  .every(32, x => x.stut(4, 1/32, 0.8));' + '\n\n';

  // p8: Hi-hat 4s (unchanged)
  code += 'p8: s("hh*4")' + '\n';
  code += '  .clip(0.15)' + '\n';
  code += '  .gain(0.22)' + '\n';
  code += '  .every(16, x => x.stut(2, 1/32, 0.9));' + '\n\n';

  // p5: SUPERSAW - World-controlled LPF and gain instead of perlin/sine
  code += 'p5: n("<g3 a#3 g3 a#3>/8")' + '\n';
  code += '  .s("supersaw")' + '\n';
  code += '  .detune("<0.18 0.28 0.38 0.48>")' + '\n';
  code += '  .hpf(180)' + '\n';
  code += '  .lpf(' + pressureLpf + ')' + '\n'; // Pressure replaces perlin.slow(12)
  code += '  .distort(0.34)' + '\n';
  code += '  .gain(' + tempGain + ')' + '\n'; // Temperature replaces sine.slow(2)
  code += '  .room(1)' + '\n';
  code += '  .roomsize(6)._scope();' + '\n\n';

  // p7: Sine melody with world-controlled gain
  code += 'p7: "<g3 a#3 g4 a#3>/2"' + '\n';
  code += '  .clip(0.68)' + '\n';
  code += '  .struct("x*8")' + '\n';
  code += '  .s("sine")' + '\n';
  code += '  .note()' + '\n';
  code += '  .gain(' + (0.65 + worldData.moon * 0.05).toFixed(2) + ')' + '\n'; // Moon affects melody gain
  code += '  .room(1).roomsize(1)._scope()._pianoroll();';

  return code;
}

// === AUTOMATION CONTROL ===
// Main automation function
window.startWorldMusic = function() {
  // Stop any existing automation
  if (window.worldMusicInterval) {
    clearInterval(window.worldMusicInterval);
    console.log('🛑 Stopped existing automation');
  }

  console.log('🎵 Starting automated world-driven techno music...');
  console.log('🌍 Music will respond to simulated atmospheric pressure, moon phases, and temperature');
  console.log('🎹 Listen for piano jumping between octaves based on pressure changes');

  // Update function that runs repeatedly
  function updateMusic() {
    var worldData = getWorldData();
    var code = generateStrudelCode(worldData);

    // Log current world state
    console.log('🌍 World State:');
    console.log('  Pressure: ' + worldData.pressure.toFixed(0) + ' hPa');
    console.log('  Moon: ' + (worldData.moon * 100).toFixed(0) + '%');
    console.log('  Temp: ' + worldData.temp.toFixed(1) + '°C');
    console.log('  Filter: ~' + Math.floor(400 + (worldData.pressure - 500) * 2) + 'Hz');
    console.log('  ─────────────────────');

    // Apply the generated code to Strudel
    automateStrudel(code);
  }

  // Start immediately
  updateMusic();

  // Then update every 2 seconds for rapid changes
  window.worldMusicInterval = setInterval(updateMusic, 2000);

  console.log('✅ World music automation started!');
  console.log('🔄 Updates every 2 seconds');
  console.log('🛑 To stop: stopWorldMusic()');
};

// Stop automation function
window.stopWorldMusic = function() {
  if (window.worldMusicInterval) {
    clearInterval(window.worldMusicInterval);
    window.worldMusicInterval = null;
    console.log('🛑 World music automation stopped');
  } else {
    console.log('❌ No automation running');
  }
};

// Manual single update function
window.updateOnce = function() {
  var worldData = getWorldData();
  var code = generateStrudelCode(worldData);
  console.log('🌍 Single update with current world data');
  automateStrudel(code);
};

// === INITIALIZATION ===
if (editor && updateBtn) {
  console.log('✅ Setup complete! Available commands:');
  console.log('  🎵 startWorldMusic() - Begin automation');
  console.log('  🛑 stopWorldMusic()  - Stop automation');
  console.log('  🔄 updateOnce()      - Single manual update');
  console.log('');
  console.log('🚀 Ready to start! Type: startWorldMusic()');
} else {
  console.log('❌ Could not find Strudel interface elements');
  console.log('   Make sure you are on the Strudel REPL page');
}

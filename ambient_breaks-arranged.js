// Ambient Breaks - Ethereal Atmospheric DnB

setCps(172/60/4)

let bd = s("bd:0").beat("0,6?,10,13?",16).bank("RolandTR909").gain(.5)

let sd = s("sd:2").beat("4,12,14?",16).gain(.55)

let white = s("white!8").decay(tri.range(0.04, 0.12)).gain(slider(0.5,0.5,1)).almostNever(ply("4"))

let rim = s("rim:2")

let hh16 = s("hh*16")
  .hpf(perlin.slow(12).range(2000, 6000))
  .clip(0.1)
  .gain(sine.slow(12).range(0.4, 0.6));

let hh8 = s("hh*8").bank("RolandTR909")
  .clip(sine.slow(20).range(0.12, 0.25))
  .gain(perlin.slow(20).range(0.1, 0.2))
  .gain(0.4);

let clap = s("~ ~ ~ clap")
  .gain(0.20)
  .clip(0.2)
  .room(2)
  .every(36, x => x.stut(1, 1/12, 0.2));

let bass = n("0 3 <5 7> 3 <2 5?> 7 5 3")
  .scale("<d1:major>/2")
  .s("sine")
  .lpf(perlin.slow(8).range(200, 600))
  .gain(1.2)

let chord = n("<[d3,f#3,a3] [g3,b3,d4] [a3,c#4,e4]>/2")
  .s("sine")
  .lpf(200)
  .gain(1)

let arp = "<d3 b#2 d3 b#2>/8".clip(0.68).struct("x*8").s("sine").note().lpf(perlin.slow(8).range(250, 450)).gain(1).color("white");

let arp2 = "<d3 b#2 d3 b#2>/8".clip(0.68).struct("x*8").s("sawtooth").note().lpf(perlin.slow(8).range(150, 600)).gain(0.15).color("white");

let supersaw = n("<d3 b#2 d3 b#2>/8")
  .s("supersaw")
  .detune("<0.18 0.28 0.38 0.48>")
  .hpf(180)
  .lpf(perlin.slow(12).range(280, 1800))
  .distort(0.34)
  .gain(sine.slow(2).range(0.15, 0.18))
  .room(1)
  .roomsize(6);

let sec1 = bd;
let sec2 = stack(bd, sd);
let sec3 = stack(bd, sd, white);
let sec4 = stack(bd, sd, white, rim);
let sec5 = stack(bd, sd, white, rim, hh16);
let sec6 = stack(bd, sd, white, rim, hh16, hh8);
let sec7 = stack(bd, sd, white, rim, hh16, hh8, clap);
let sec8 = stack(bd, sd, white, rim, hh16, hh8, clap, bass);
let sec9 = stack(bd, sd, white, rim, hh16, hh8, clap, chord, supersaw);
let sec10 = stack(bd, sd, white, rim, hh16, hh8, clap, chord, arp, supersaw);
let sec11 = stack(bd, sd, white, rim, hh16, hh8, clap, chord, arp, arp2, supersaw);

let totalCycles = 296;

arrange(
  [4,  sec1],   // 0:00–0:06  bd only
  [4,  sec2],   // 0:06–0:11  + sd
  [8,  sec3],   // 0:11–0:22  + white
  [8,  sec4],   // 0:22–0:33  + rim
  [8,  sec5],   // 0:33–0:45  + hh16
  [8,  sec6],   // 0:45–0:56  + hh8 (both hats now)
  [8,  sec7],   // 0:56–1:07  + clap
  [8,  sec8],   // 1:07–1:18  + temporary bass
  [16, sec9],   // 1:18–1:40  + chord (core up to chord)
  [96, sec10],  // 1:40–3:54  + arp (full stack)
  [16, sec8],   // 3:54–4:16  peel arp → back to core (to chord)
  [64, sec11],  // 4:16–5:16  re-add arp (full stack)
  [16, sec9],   // 5:16–5:27  peel arp → core (to chord)
  [8,  sec8],   // 5:27–5:38  peel chord
  [8,  sec7],   // 5:38–5:49  → clap on top of hats
  [8,  sec6],   // 5:49–6:00  peel clap → hats + rim/white/sd/bd
  [8,  sec5],   // 6:00–6:11  peel hh8 → hh16 + core
).take(296);


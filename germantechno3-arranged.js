// MOVEMENT by dotcomdudee
// VANILLA STRUDEL - NO EXTERNAL SAMPLES

let cpm = 130/4;

let hats8 = s("hh*8").bank("RolandTR909")
  .clip( sine.slow(16).range(0.18, 0.35) )
  .gain( perlin.slow(16).range(0.18, 0.28) )
  .gain(0.12)
  .sometimesBy(0.18, x => x.s("ohh"));

let hats16 = s("hh*16")
  .hpf(perlin.slow(8).range(2000, 8000))
  .clip(0.15)
  .gain(sine.slow(8).range(0.05, 0.15));

let clap = s("~ ~ ~ clap")
  .gain(0.40)
  .clip(0.30)
  .every(32, x => x.stut(3, 1/16, 0.9));

let kick = s("bd*4").bank("polaris")
  .gain(0.6).distort(0.2);

let lowpulse = n("g2 g2 g2 g2")
  .s("sine")
  .lpf(180)
  .shape(0.25)
  .gain(0.1);

let rim1 = s("[rim ~] ~ ~ ~")
  .hpf(5000)
  .gain(0.14)
  .every(16, x => x.stut(2, 1/32, 0.85));

let rim2 = s("[rim ~] ~ [rim ~] ~")
  .hpf(3000)
  .gain(0.2)
  .every(32, x => x.stut(4, 1/32, 0.8));

let hats4 = s("hh*4")
  .clip(0.15)
  .gain(0.22)
  .every(16, x => x.stut(2, 1/32, 0.9));

// let bass = n("<c2 c2 g1 c2>/2")
//  .s("saw")
//  .lpf(perlin.slow(6).range(140, 220))
//  .shape(0.28)
//  .gain(0.58);

let stab = n("<g3 a#3 g3 a#3>/8")
  .s("supersaw")
  .detune("<0.28 0.37 0.41 0.48>")
  .hpf(180)
  .lpf(perlin.slow(12).range(280, 1800))
  .distort(0.34)
  .gain(sine.slow(2).range(0.28, 0.35))
  .room(1)
  .roomsize(6);

let arp = "<g3 a#3 g3 a#3>/8"
  .clip(0.68)
  .struct("x*8")
  .s("sine")
  .note()
  .room(1).roomsize(1);

let sec1 = hats8;
let sec2 = stack(hats8, hats16);
let sec3 = stack(hats8, hats16, clap);
let sec5 = stack(hats8, hats16, clap, kick, lowpulse);
let sec7 = stack(hats8, hats16, clap, kick, lowpulse, rim1, rim2, hats4);
let sec8 = stack(hats8, hats16, clap, kick, lowpulse, rim1, rim2, hats4, stab);
let peak = stack(hats8, hats16, clap, kick, lowpulse, rim1, rim2, hats4, stab, arp);

let totalCycles = 224;

arrange(
  [8,  sec2],  // 0:00–0:15  hats8 + hats16
  [8,  sec3],  // 0:15–0:30  + clap
  [16, sec5],  // 0:30–0:59  + kick + lowpulse
  [32, sec8],  // 0:59–1:58  + stab
  [96, peak],  // 1:58–4:55  + arp
  [16, sec8],  // 4:55–5:25  peel arp, keep stab
  [32, peak],  // 5:25–6:24  m8 - reintro arp
  [8,  sec8],  // 6:24–6:39  peel arp again
  [8,  sec5]   // 6:39–6:54  back to core and stop
).cpm(cpm).take(224);

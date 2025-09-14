setcps(0.54);

p3: s("~ ~ ~ clap")
  .gain(0.40)
  .clip(0.35)
  .every(32, x => x.stut(3, 1/16, 0.9))
  .late(8);

p2: s("hh*8").bank("RolandTR909")
  .clip( sine.slow(16).range(0.18, 0.35) )
  .gain( perlin.slow(16).range(0.18, 0.28) )
  .late(4)
  .gain(0.12)
  .sometimesBy(0.18, x => x.s("ohh"));

p9: n("g2 g2 g2 g2")
  .s("sine")
  .lpf(180)
  .shape(0.25)
  .gain(0.55);

p10: s("hh*16")
  .hpf(perlin.slow(8).range(2000, 8000))
  .clip(0.15)
  .gain(sine.slow(8).range(0.05, 0.15))
  .late(56);

p11: s("[rim ~] ~ ~ ~")
  .hpf(5000)
  .gain(0.14)
  .every(16, x => x.stut(2, 1/32, 0.85))
  .late(64);

p1: s("bd*4").bank("polaris")
  .gain(0.8).distort(0.22);

p4: n("<c2 c2 g1 c2>/2")
  .s("saw")
  .lpf(perlin.slow(6).range(140, 220))
  .shape(0.28)
  .gain(0.58)
  .late(8);

p7: "<g3 a#3 g3 a#3>/8"
  .clip(0.8)
  .struct("x*8")
  .s("sine")
  .note()
  .gain(sine.slow(2).range(0.68, 0.78))
  .late(24).room(1).roomsize(2);

p6: s("[rim ~] ~ [rim ~] ~")
  .hpf(3000)
  .gain(0.2)
  .every(32, x => x.stut(4, 1/32, 0.8))
  .late(24);

p5: n("<g3 a#3 g3 a#3>/8")
  .s("supersaw")
  .detune("<0.18 0.28 0.38 0.48>")
  .hpf(180)
  .lpf(perlin.slow(12).range(280, 1800))
  .distort(0.34)
  .gain(sine.slow(2).range(0.25, 0.32))
  .room(1)
  .roomsize(6)
  .late(16);

p8: s("hh*4")
  .clip(0.15)
  .gain(0.22)
  .every(16, x => x.stut(2, 1/32, 0.9))
  .late(48);

setcps(0.54);

p1: s("bd*4").bank("polaris")
  .gain(1)
  .distort(0.2);

p2: s("hh*8").bank("RolandTR909")
  .clip(sine.slow(32).range(0.18, 0.28))
  .gain(0.25)
  .late(8)
  .every(16, x => x.stut(2, 1/32, 0.85));

p3: s("~ ~ ~ clap")
  .gain(0.68)
  .clip(0.32)
  .late(16)
  .sometimesBy(0.2, x => x.struct("~ ~ [~ clap] clap"))
  .every(32, x => x.stut(3, 1/16, 0.9));

p4: n("<c2 g1 c2 g1>/2")
  .s("saw")
  .lpf(perlin.slow(8).range(100, 220))
  .gain(0.85)
  .late(8);

p5: n("<d#2 g2 c3>/2")
  .s("supersaw")
  .detune("<0.15 0.25 0.35>")
  .lpf(perlin.slow(16).range(200, 2400))
  .hpf(120)
  .distort(0.25)
  .gain(sine.slow(4).range(0.25, 0.35))
  .late(24);

p6: s("[rim ~] [~ rim] ~ [rim ~]")
  .hpf(2800)
  .gain(0.2)
  .every(32, x => x.stut(3, 1/32, 0.9))
  .late(32);

p7: "<f3 a#3 g3 a#3>/8"
  .clip(0.9)
  .struct("x*8")
  .s("supersaw")
  .clip(0.45)
  .note()
  .gain(sine.slow(2).range(0.55, 0.70))
  .late(40);

p8: s("hh*4")
  .clip(0.15)
  .gain(0.2)
  .late(64);

p9: s("hh*16")
  .clip(0.12)
  .gain(sine.slow(16).range(0.0, 0.22))
  .hpf(perlin.slow(12).range(3000, 9000))
  .late(80); 
setcps(0.60); // ≈120 BPM — deeper roll

p1: s("bd*4").bank("polaris")
  .gain(1.0)
  .distort(0.2);

p2: s("hh*8").bank("polaris")
  .clip(sine.slow(24).range(0.16, 0.26))
  .gain(0.24)
  .late(8)
  .every(16, x => x.stut(2, 1/32, 0.88))

p3: s("~ ~ ~ clap")
  .gain(0.45)
  .clip(0.3)
  .late(16)
  .sometimesBy(0.2, x => x.struct("~ ~ [~ clap] clap"))
  .every(32, x => x.stut(3, 1/16, 0.9));

p4: n("<c2 g1 c2 g1>/4")
  .s("saw")
  .lpf(perlin.slow(10).range(110, 220))
  .shape(0.22)ac
  .gain(0.62)
  .late(8);

p5: n("<d#2 g2 c3>/2")
  .s("supersaw")
  .detune("<0.16 0.26 0.36>")
  .hpf(140)
  .lpf(perlin.slow(20).range(220, 2200))
  .distort(0.28)
  .gain(sine.slow(4).range(0.22, 0.32))
  .late(24);

p6: s("[rim ~] ~ [~ rim] ~")
  .hpf(3000)
  .gain(0.18)
  .every(32, x => x.stut(3, 1/32, 0.88))
  .late(32);

p7: "<f3 a#3 g3 a#3>/8"
  .clip(0.85)
  .struct("x*8")
  .s("sine")
  .note()
  .gain(sine.slow(2).range(0.55, 0.7))
  .late(56);

p8: "<f3 a#3 g3 a#3>/8"
  .clip(0.85)
  .struct("x*8")
  .s("supersaw")
  .note()
  .gain(sine.slow(2).range(0.55, 0.7))
  .late(56);

p9: s("hh*4")
  .clip(0.14)
  .gain(0.18)
  .every(16, x => x.stut(2, 1/32, 0.9))
  .late(72);
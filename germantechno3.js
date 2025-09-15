setcps(0.54);

p2: s("hh*8").bank("RolandTR909")
  .clip( sine.slow(16).range(0.18, 0.35) )
  .gain( perlin.slow(16).range(0.18, 0.28) )
  .gain(0.12)
  .sometimesBy(0.18, x => x.s("ohh"));

p10: s("hh*16")
  .hpf(perlin.slow(8).range(2000, 8000))
  .clip(0.15)
  .gain(sine.slow(8).range(0.05, 0.15));

p3: s("~ ~ ~ clap")
  .gain(0.40)
  .clip(0.35)
  .every(32, x => x.stut(3, 1/16, 0.9))._scope( );

p1: s("bd*4").bank("polaris")
  .gain(0.6).distort(0.22)._scope( );

p9: n("g2 g2 g2 g2")
  .s("sine")
  .lpf(180)
  .shape(0.25)
  .gain(0.1);

p11: s("[rim ~] ~ ~ ~")
  .hpf(5000)
  .gain(0.14)
  .every(16, x => x.stut(2, 1/32, 0.85));

p6: s("[rim ~] ~ [rim ~] ~")
  .hpf(3000)
  .gain(0.2)
  .every(32, x => x.stut(4, 1/32, 0.8));

p8: s("hh*4")
  .clip(0.15)
  .gain(0.22)
  .every(16, x => x.stut(2, 1/32, 0.9));

p5: n("<g3 a#3 g3 a#3>/8")
  .s("supersaw")
  .detune("<0.18 0.28 0.38 0.48>")
  .hpf(180)
  .lpf(perlin.slow(12).range(280, 1800))
  .distort(0.34)
  .gain(sine.slow(2).range(0.28, 0.35))
  .room(1)
  .roomsize(6)._scope( );

p7: "<g3 a#3 g3 a#3>/8"
  .clip(0.68)
  .struct("x*8")
  .s("sine")
  .note()
  .gain(sine.slow(2).range(0.65, 0.70))
  .room(1).roomsize(1)._scope( )._pianoroll();

// Birchlight - C418 style ambient

setcps(0.62);

$: s("bd*4").bank("polaris")
  .gain(0.07)
  .room(0.4);

p1: note("<~ b3 ~ d4 ~ f#4 ~ a4>")
  .slow(2) 
  .s("sine")
  .lpf(1400)
  .gain(0.12);

p2: note("e3 ~ b2 ~ c#3 ~ a2 ~")
  .slow(2)
  .s("sine")
  .lpf(700)
  .gain(0.28)
  .room(2)
  .roomsize(6);

p4: note("e2 ~ b1 ~ c#2 ~ a1 ~")
  .slow(2)
  .s("sine")
  .lpf(450)
  .gain(0.18)
  .room(0.6);

p3: note("<e5 f#5 a5 b5 c#6>")
  .almostNever(ply("2"))
  .s("sine")
  .lpf(2400)
  .gain(0.05)
  .room(2);

$: s("hh*16")
  .clip(0.05)
  .gain(perlin.slow(16).range(0.008, 0.02))
  .hpf(6000);

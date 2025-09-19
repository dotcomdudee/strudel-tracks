// Meadow Echoes - C418 style ambient

setcps(0.48);

$: s("bd*4").bank("polaris")
  .gain(0.08)
  .room(0.5);

p1: note("<~ c4 ~ e4 ~ g4 ~ a4>")
  .slow(2) 
  .s("sine")
  .lpf(1200)
  .gain(0.1)

p2: note("c3 ~ g3 ~ e3 ~ a2 ~") 
  .s("sine")
  .lpf(600)
  .gain(0.3)
  .room(2)
  .roomsize(6)
  .late(8)

p3: note("<c5 e5 g5 b5> [~ c6] ~ ~")
  .struct("x*2 ~ [~ x] ~")
  .s("sine")
  .lpf(2500)
  .gain(0.18)
  .room(2)

$: s("hh*8")
  .clip(0.05)
  .gain(perlin.slow(12).range(0.01, 0.04))
  .hpf(5000);

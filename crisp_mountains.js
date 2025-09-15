// Crisp Mountains - Clear Mountain Ambient
setcps(0.54);

p1: n("c2 ~ ~ ~ ~ ~ ~ ~")
  .s("sine")
  .lpf(800)
  .gain(0.8)
  .room(1)
  .roomsize(3);

p2: n("~ ~ ~ ~ e3 ~ g3 ~")
  .s("sine")
  .lpf(1200)
  .gain(0.6)
  .late(8)
  .room(1)
  .roomsize(3);

p4: n("c1 ~ ~ ~ ~ ~ ~ c4")
  .s("sine")
  .lpf(2000)
  .gain(0.4)
  .late(24);

p6: n("c1 ~ c1 ~ c1 ~ c1 ~")
  .s("sine")
  .lpf(400)
  .gain(0.9)
  .late(32);

$: s("hh*8").bank("RolandTR909")
  .clip(sine.slow(20).range(0.12, 0.25))
  .gain(perlin.slow(20).range(0.01, 0.05))
   .lpf(1000);

$: s("sd:2").beat("4,12,14?",16).gain(.3).lpf(400)

$: s("hh*16")
  .lpf(perlin.slow(12).range(100, 1000))
  .clip(0.08)
  .gain(sine.slow(12).range(0.2, 0.4));

p7: "<d3 b#2 d3 b#2>/8"
  .clip(0.68)
  .struct("x*8")
  .s("sine")
  .note()
  .gain(sine.slow(12).range(0.25, 0.30));

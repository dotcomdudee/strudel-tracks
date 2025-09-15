// Deep Meditation - Meditative Ambient DnB
setCps(168/60/4)

$: s("bd:1").beat("0,7?,11,14?",16)

$: s("sd:2").beat("4,12,15?",16).gain(.5)

$: s("white!12").decay(tri.range(0.06, 0.15)).gain(0.4).almostNever(ply("2"))

$: s("hh*12")
  .hpf(perlin.slow(16).range(1800, 5000))
  .clip(0.08)
  .gain(sine.slow(16).range(0.3, 0.5));

$: s("hh*6").bank("RolandTR909")
  .clip(sine.slow(24).range(0.1, 0.2))
  .gain(perlin.slow(24).range(0.08, 0.15))
  .gain(0.3);

$: s("~ ~ ~ clap")
  .gain(0.25)
  .clip(0.15)
  .room(3)
  .every(40, x => x.stut(1, 1/8, 0.4));

$: s("rim:2").struct(rand.mul(.3).round().seg(16).rib(6,1)).gain(.25)

$: n("0 2 <4 5> 2 <7 9?> 5 4 2")
  .scale("<a1:minor>/2")
  .s("sine")
  .lpf(perlin.slow(12).range(180, 500))
  .gain(.5)

$: n("<[a2,c3,e3] [f2,a2,c3] [c3,e3,g3] [g2,b2,d3]>/2")
  .s("sine")
  .lpf(400)
  .gain(1.2)
  .room(1)
  .roomsize(2)
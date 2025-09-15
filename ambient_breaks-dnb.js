// Ambient Breaks - Ethereal Atmospheric DnB
setCps(172/60/4)

$: s("bd:0").beat("0,6?,10,13?",16).bank("RolandTR909").gain(.5)

$: s("sd:2").beat("4,12,14?",16).gain(.55)

$: s("white!8").decay(tri.range(0.04, 0.12)).gain(0.5).almostNever(ply("4"))

$: s("hh*14")
  .hpf(perlin.slow(12).range(2000, 6000))
  .clip(0.1)
  .gain(sine.slow(12).range(0.4, 0.6));

$: s("hh*8").bank("RolandTR909")
  .clip(sine.slow(20).range(0.12, 0.25))
  .gain(perlin.slow(20).range(0.1, 0.2))
  .gain(0.4);

$: s("rim:2")

$: s("~ ~ ~ clap")
  .gain(0.3)
  .clip(0.2)
  .room(3)
  .every(36, x => x.stut(2, 1/12, 0.5));

$: n("0 3 <5 7> 3 <2 5?> 7 5 3")
  .scale("<d1:major>/2")
  .s("sine")
  .lpf(perlin.slow(10).range(200, 600))
  .gain(.55)

$: n("<[d3,f#3,a3] [g3,b3,d4] [a3,c#4,e4]>/2")
  .s("sine")
  .lpf(200)
  .gain(1.1)

//p1: "<d3 b#2 d3 b#2>/8".clip(0.68).struct("x*8").s("sine").note().lpf(200).gain(1);

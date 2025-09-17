//1 of 2 
setcps(0.725);

p1: n("0 2 4 6 7 6 4 2")
  .scale("<c3:major>/2")
  .s("supersaw")
  .distort(0.7)
  .superimpose((x) => x.detune("<0.5>"))
  .lpenv(perlin.slow(3).range(1, 4))
  .lpf(perlin.slow(12).range(100, 2000))
  .gain(perlin.slow(12).range(0.25, 0.3))

p2: note("<a2 e3 b2 a2>/8").clip(0.8).struct("x*8").s("supersaw").hpf(perlin.slow(12).range(0, 200))

$: s("bd:4").beat("0,7?,10",16)

$: s("sd:2").beat("4,12",16).gain(.4)

$: s("white!8").decay(tri.range(0.03, 0.1),fast(2)).gain(0.4).almostNever(ply("2"))

$: n("<1 1 1? 1>/1")
  .s("sine")
  .lpf(200)
  .gain(1).room(1)._punchcard()

$: s("rim:2").struct(rand.mul(.65)
    .round().seg(16).rib(3,2)).gain(.2)._punchcard( )
$: s("sine").scrub("0 0 0 0 0 0 0 0")._scope()






//2 of 2 
setGainCurve(x => Math.pow(x, 2))
setCps(170/60/4)

$: s("bd:4").beat("0,7?,10",16)

$: s("sd:2").beat("4,12",16).gain(.6)

$: s("white!8").decay(tri.range(0.03, 0.1),fast(2)).gain(0.7).almostNever(ply("2"))

$: s("hh*16")
  .hpf(perlin.slow(8).range(2000, 8000))
  .clip(0.15)
  .gain(sine.slow(8).range(0.6, 0.8));

$:  s("hh*8").bank("RolandTR909")
  .clip(sine.slow(16).range(0.18, 0.35))
  .gain(perlin.slow(16).range(0.18, 0.28))
  .gain(0.6);

$: s("~ ~ ~ clap")
  .gain(0.5)
  .clip(0.30)
  .every(32, x => x.stut(3, 1/16, 0.5));

$: s("rim:1").struct(rand.mul(.65)
    .round().seg(16).rib(3,2)).gain(.4)._punchcard( )
$: s("sine").scrub("0 0 0 0 0 0 0 0").gain(1.5)

$: n("0 2 4 6 <7 7?> 6 4 2")
  .scale("<c1:major>/2")
  .s("supersaw")
  .distort(1)
  .clip(1)
  .superimpose((x) => x.detune("<0.5>"))
  .lpenv(perlin.slow(3).range(1, 4))
  .lpf(perlin.slow(2).range(100, 400))
  .gain(.7)._scope( )

setGainCurve(x => Math.pow(x, 2))
setCps(170/60/4)

$: s("bd:4").beat("0,7?,10",16)

$: s("sd:2").beat("4,12",16).gain(.6)

$: s("white!8").decay(tri.range(0.03, 0.1),fast(2)).gain(0.6).almostNever(ply("2"))

$: s("rim:1").struct(rand.mul(.65)
    .round().seg(16).rib(3,2)).gain(.4)._punchcard( )
$: s("sine").scrub("0 0 0 0 0 0 0 0").gain(1.5)

$: n("0 2 4 6 <7 7?> 6 4 2")
  .scale("<c1:major>/2")
  .s("supersaw")
  .distort(1)
  .superimpose((x) => x.detune("<0.5>"))
  .lpenv(perlin.slow(3).range(1, 4))
  .lpf(perlin.slow(2).range(100, 600))
  .gain(1)._scope( )

setcps(120/60/4)


// --------------------------------//

let carrierHz = 200;  // 160–300 Hz is comfy; lower can get boomy on some headphones
let beatHz    = 7;  // target brainwave band: delta(1–4), theta(4–8), alpha(8–12), beta(13–30)

let L = carrierHz - beatHz/2;
let R = carrierHz + beatHz/2;

// Delta (deep sleep): 2 Hz
// Theta (meditative/creative): 6.5–7 Hz
// Alpha (relaxed focus): 10 Hz
// Low Beta (alert): 14–16 Hz

// --------------------------------//


let hz2midi = hz => 69 + 12 * Math.log2(hz/440);
let wob = perlin.slow(64).range(0.9, 1.1);

p1: n(hz2midi(L))
  .s("sine")
  .pan(-1)
  .slow(64)
  .gain(0.12 * wob);

p2: n(hz2midi(R))
  .s("sine")
  .pan(1)
  .slow(64)
  .gain(0.12 * wob);

p3: s("pink")
  .slow(64)
  .hpf(80)
  .lpf(4000)
  .gain(0.02)
  .late(16);


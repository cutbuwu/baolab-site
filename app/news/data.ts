export interface Article {
  slug: string;
  title: string;
  image?: string;
  date: string;
  category: string;
  excerpt: string;
  related?: { slug: string; title: string }[];
  content: string; // HTML
}

export const articles: Article[] = [
  {
    slug: "z9gt-melbourne-debut",
    image: "/z9gt-hero.jpg",
    title:
      "Denza Z9 GT Debuts at the 2026 Melbourne Motor Show — 850kW, 0–100 in 2.7s",
    date: "2026-04-05",
    category: "Launch",
    excerpt:
      "BYD's luxury division confirms the all-electric Z9 GT grand tourer for Australia, with deliveries expected Q3 2026. The first Denza to feature Blade Battery 2.0 and Flash Ultra Charging.",
    related: [
      { slug: "flash-charge-blade-battery", title: "Flash Ultra Charging & Blade Battery 2.0" },
      { slug: "denza-b5-b8-launch", title: "Denza B5 & B8: The Brand Arrives in Australia" },
    ],
    content: `
<p>The Denza Z9 GT made its Australian debut at the 2026 Melbourne International Motor Show, and it's nothing short of a statement. BYD's premium sub-brand is aiming squarely at the Porsche Taycan with an all-electric grand tourer that produces a staggering <strong>850kW</strong> from three electric motors and sprints from 0–100 km/h in just <strong>2.7 seconds</strong>.</p>

<h2>What is the Z9 GT?</h2>
<p>The Z9 GT is a luxury electric shooting brake — think of it as a sleek wagon meets supercar. It's built on BYD's 800-volt high-voltage <strong>e³ platform</strong> and is the first Denza model to use the company's next-generation <strong>Blade Battery 2.0</strong> with Flash Ultra Charging capability.</p>

<p>Denza Australia Chief Operating Officer Mark Harland said at the reveal: <em>"Australia is a market that demands performance without compromise, and the Z9 GT has been engineered to meet or exceed expectations. It proves that electrification can deliver not just efficiency, but exhilarating performance, extraordinary safety and genuine long-distance usability."</em></p>

<h2>Powertrain & Performance</h2>
<p>The Z9 GT uses a tri-motor setup — one motor on the front axle and two on the rear — producing a combined 850kW. This gives it a claimed 0–100 km/h time of 2.7 seconds, which puts it in serious supercar territory. For context, the Porsche Taycan Turbo S does 0–100 in 2.8 seconds.</p>

<table>
<tr><th>Spec</th><th>Denza Z9 GT</th></tr>
<tr><td>Motor layout</td><td>Tri-motor (1 front, 2 rear)</td></tr>
<tr><td>System output</td><td>850kW</td></tr>
<tr><td>0–100 km/h</td><td>2.7 seconds</td></tr>
<tr><td>Battery</td><td>122.5kWh Blade Battery 2.0</td></tr>
<tr><td>Range (CLTC)</td><td>1,036 km</td></tr>
<tr><td>Range (real world)</td><td>1,009 km demonstrated (Hainan test)</td></tr>
<tr><td>DC fast charge</td><td>10–97% in 9 minutes (1500kW)</td></tr>
<tr><td>Suspension</td><td>Air suspension</td></tr>
<tr><td>Price (expected)</td><td>~$180,000–$220,000 (TBC, undercuts Taycan)</td></tr>
</table>

<h2>Range & Charging</h2>
<p>The Z9 GT will ship with the large 122.5kWh battery, giving it a CLTC-rated range of <strong>1,036 km</strong>. Real-world range has been demonstrated at over <strong>1,000 km</strong> in a Chinese media test — a Z9 GT drove around Hainan Island with two passengers, AC set to 23°C on auto, at speed limits across various road types, and covered 1,009 km with 9% battery remaining (estimated 93 km range left). Even conservative driving estimates put it at 800+ km in real-world conditions.</p>

<p>But the headline feature is <strong>Flash Ultra Charging</strong>. Using Blade Battery 2.0 technology, the Z9 GT supports up to 1500kW DC charging — nearly four times Australia's current fastest public charger (400kW). Denza claims a 10–97% charge in just <strong>nine minutes</strong> under optimal conditions. That's shorter than a typical petrol fill-up.</p>

<p><em>Note: Flash Ultra Charging requires specific dual-gun charging infrastructure — it can't hit 1500kW on a standard single CCS2 plug. At existing Australian fast chargers (350–400kW), you'll still get a very fast top-up, just not the headline 9-minute number.</em></p>

<p><em>Read more: <a href="/news/flash-charge-blade-battery">Flash Ultra Charging & Blade Battery 2.0 — What It Means for Australia</a></em></p>

<h2>Interior & Technology</h2>
<p>Inside, the Z9 GT is packed with luxury features:</p>
<ul>
<li>Nappa leather upholstery with massaging and ventilated seats</li>
<li>50-inch augmented reality head-up display</li>
<li>14-speaker Dynaudio sound system</li>
<li>Built-in fridge</li>
<li>128-colour ambient lighting</li>
<li>Air suspension for a plush, wafting ride</li>
</ul>

<h2>When Can You Get One?</h2>
<p>Denza has confirmed Australian deliveries will commence in <strong>Q3 2026</strong> (July–September). Pricing hasn't been announced yet, but it's expected to significantly undercut the Porsche Taycan's $181,000 starting price while offering more power, more range, and faster charging.</p>

<p>The Z9 GT will be the fourth Denza model in Australia, following the B5, B8, and D9. It's also the brand's first fully electric vehicle for the local market.</p>

<p><em>Read more: <a href="/news/denza-b5-b8-launch">Denza B5 & B8: How the Brand Arrived in Australia</a></em></p>
`,
  },
  {
    slug: "flash-charge-blade-battery",
    image: "/flash-charger-hero.jpg",
    title:
      "Flash Ultra Charging & Blade Battery 2.0 — What It Means for Australia",
    date: "2026-04-06",
    category: "Technology",
    excerpt:
      "BYD's next-gen Blade Battery 2.0 supports 1500kW DC charging — nearly four times Australia's fastest public chargers. The Z9 GT will be the first model to feature it locally.",
    related: [
      { slug: "z9gt-melbourne-debut", title: "Denza Z9 GT Debuts at Melbourne Motor Show" },
      { slug: "denza-b5-b8-launch", title: "Denza B5 & B8: The Brand Arrives in Australia" },
    ],
    content: `
<p>When Denza revealed the Z9 GT at the 2026 Melbourne Motor Show, the car's 850kW output and 2.7-second 0–100 time grabbed the headlines. But underneath all that performance is an even bigger story: <strong>Blade Battery 2.0</strong> and <strong>Flash Ultra Charging</strong>.</p>

<h2>What is Blade Battery 2.0?</h2>
<p>BYD's original Blade Battery, introduced in 2020, was already a game-changer. It used lithium iron phosphate (LFP) chemistry arranged in long, thin cells — like blades — that could pass a nail penetration test without catching fire. This made it one of the safest EV battery designs on the market.</p>

<p>Blade Battery 2.0 builds on that foundation with significant improvements:</p>
<ul>
<li><strong>Higher energy density</strong> — more range per kilogram of battery</li>
<li><strong>Faster charging speeds</strong> — up to 1500kW DC, compared to ~150kW for the original</li>
<li><strong>Improved thermal management</strong> — better heat dissipation during fast charging</li>
<li><strong>Longer cycle life</strong> — designed to last beyond 4,000 charge cycles</li>
</ul>

<h2>Flash Ultra Charging: 10–97% in 9 Minutes</h2>
<p>The headline number is almost unbelievable: <strong>10% to 97% in nine minutes</strong>. To put that in perspective:</p>

<table>
<tr><th>Charger type</th><th>Max speed</th><th>Time for ~87% charge</th></tr>
<tr><td>Standard home AC</td><td>7–11kW</td><td>8–12 hours</td></tr>
<tr><td>Current fast DC (Australia)</td><td>50–350kW</td><td>30–60 minutes</td></tr>
<tr><td>Flash Ultra Charging</td><td>1500kW</td><td>~9 minutes</td></tr>
</table>

<p>Nine minutes. That's less time than it takes to order and collect a flat white at your local café.</p>

<h2>But Can Australia Even Support This?</h2>
<p>Here's the catch — Australia's current fastest public chargers top out at around <strong>350–400kW</strong>. So you won't be getting 1500kW charging at your local servo any time soon. However, the Z9 GT's battery is backward compatible with all existing CCS2 chargers. You'll just charge at whatever speed the charger supports.</p>

<p>The good news: charging infrastructure in Australia is rapidly expanding. The federal government's National Electric Vehicle Strategy includes funding for ultra-fast charging corridors along major highways. And companies like Chargefox, Evie Networks, and Tesla are all rolling out faster chargers.</p>

<p>Even at 350kW, the Z9 GT's 122.5kWh battery would charge from 10–80% in roughly 20–25 minutes — still faster than most EVs on sale today.</p>

<h2>Why This Matters</h2>
<p>Range anxiety and charging time are the two biggest barriers to EV adoption in Australia. Blade Battery 2.0 and Flash Ultra Charging address both head-on. With 1000+ km of range and the ability to top up in under 10 minutes (when infrastructure catches up), the Z9 GT removes almost every excuse for not going electric.</p>

<p>The Z9 GT will be the first Denza in Australia to feature this technology. Expect it to trickle down to future BYD and Denza models over the next 12–24 months.</p>

<p><em>Read more: <a href="/news/z9gt-melbourne-debut">Denza Z9 GT Debuts at Melbourne Motor Show</a></em></p>
`,
  },
  {
    slug: "denza-b5-b8-launch",
    image: "/b5-b8-hero.jpg",
    title:
      "Denza B5 & B8: How BYD's Luxury Brand Arrived in Australia",
    date: "2025-12-15",
    category: "Launch",
    excerpt:
      "Denza launched in Australia with two rugged plug-in hybrid SUVs — the B5 and B8. Featuring DiSus-P adjustable suspension, DMO 4×4 architecture, and serious off-road credentials, they're unlike anything else in the market.",
    related: [
      { slug: "z9gt-melbourne-debut", title: "Denza Z9 GT Confirmed for Australia" },
      { slug: "denza-d9-electric-mpv", title: "Denza D9: The Electric People Mover" },
    ],
    content: `
<p>In December 2025, BYD officially launched its premium sub-brand <strong>Denza</strong> in Australia with two models that nobody expected: not sleek city EVs, but rugged, body-on-frame plug-in hybrid 4×4 SUVs. The <strong>Denza B5</strong> and <strong>B8</strong> arrived as direct challengers to the Toyota LandCruiser, Nissan Patrol, and Jeep Wrangler — but with a high-tech electrified twist.</p>

<h2>What is Denza?</h2>
<p>Denza (腾势) is BYD's premium brand, positioned above BYD's mainstream models. Think of it like Lexus is to Toyota, or Genesis is to Hyundai. While BYD focuses on accessible electric vehicles, Denza targets the luxury and performance segments.</p>

<p>The brand launched in China in 2010 as a joint venture with Mercedes-Benz (then Daimler). BYD took full control in 2024 and has since turned it into one of China's fastest-growing premium brands, selling over 126,000 vehicles in China in 2025.</p>

<h2>The Denza B8: Flagship Off-Roader</h2>
<p>The B8 is the bigger, more capable of the two. It's a full-size body-on-frame SUV with serious off-road hardware:</p>

<table>
<tr><th>Spec</th><th>Denza B8</th></tr>
<tr><td>Engine</td><td>2.0L turbo-petrol 4-cylinder</td></tr>
<tr><td>Engine output</td><td>145kW / 350Nm</td></tr>
<tr><td>Front motor</td><td>200kW / 360Nm</td></tr>
<tr><td>Rear motor</td><td>300kW / 400Nm</td></tr>
<tr><td>System output</td><td>425kW / 760Nm</td></tr>
<tr><td>Battery</td><td>LFP (Blade Battery)</td></tr>
<tr><td>Combined range</td><td>1,040km (NEDC)</td></tr>
<tr><td>Electric range</td><td>100–115km (WLTC)</td></tr>
<tr><td>0–100 km/h</td><td>4.8 seconds</td></tr>
<tr><td>Fuel economy</td><td>2.0L/100km (charged)</td></tr>
<tr><td>Towing</td><td>3,500kg braked</td></tr>
<tr><td>Wading depth</td><td>890mm (DiSus-P raised)</td></tr>
<tr><td>Ground clearance</td><td>310mm (DiSus-P raised)</td></tr>
<tr><td>DiSus-P travel</td><td>140mm</td></tr>
<tr><td>Seats</td><td>6 or 7</td></tr>
<tr><td>Price</td><td>$91,000 – $97,990 +ORC</td></tr>
</table>

<h3>DiSus-P: The Secret Weapon</h3>
<p>One of the B8's standout features is <strong>DiSus-P</strong> — BYD's Intelligent Hydraulic Body Control System. It's the most advanced version of BYD's DiSus suspension technology (which comes in four tiers: DiSus-C, DiSus-A, DiSus-P, and DiSus-X). The same technology first debuted on the YangWang U8 — which was spotted testing on Australian roads in late 2024 — it's what allows the U8 to do tank turns.</p>
<ul>
<li><strong>200mm ride height adjustment</strong> — raise for off-road clearance (up to 310mm), lower for highway efficiency</li>
<li><strong>Hydraulic spring assembly at each wheel</strong> — individually adjusts to road surface conditions</li>
<li><strong>Active body control</strong> — reduces body roll in corners and nose dive under braking</li>
<li><strong>Water wading mode</strong> — raises the body to its maximum height for deep water crossings (890mm wading depth)</li>
</ul>
<p>DiSus-P uses hydraulic actuators at each corner of the vehicle, controlled by onboard sensors that read the road surface in real time. It can individually adjust each wheel independently, giving the B8 a ride quality and off-road capability that belies its body-on-frame construction.</p>

<h3>DMO: Dual Mode Off-road</h3>
<p>The B8 uses BYD's <strong>DMO (Dual Mode Off-road)</strong> platform — a super hybrid-based architecture purpose-built for rugged off-road vehicles. DMO is designed to deliver both efficient urban running and robust off-road performance. It pairs a turbocharged petrol engine with electric motors and a Blade Battery, combined with double-wishbone suspension and high-strength underbody protection.</p>
<ul>
<li>2.0L turbo-petrol engine (145kW / 350Nm) works with electric motors for combined 425kW</li>
<li>200kW front electric motor drives the front axle</li>
<li>300kW rear electric motor drives the rear axle</li>
<li>Rear mechanical differential lock (electrically actuated) is standard</li>
<li>Front locking differential is available on the 6-seat variant</li>
<li>Intelligent mode management maintains outstanding efficiency with up to 800km+ combined range</li>
</ul>

<h3>Terrain Modes</h3>
<p>The B8 offers an extensive suite of drive and terrain modes:</p>
<ul>
<li><strong>On-road:</strong> Comfort, Eco, Sport</li>
<li><strong>Off-road:</strong> Rock, Snow, Sand, Mountain, Mud, Wading</li>
<li><strong>Special:</strong> Racing, Creep, Leopard Turn (tight turning), Towing, Anti-Skid</li>
</ul>

<h3>Interior & Practicality</h3>
<p>The B8 is available as a 6-seater ($97,990) or 7-seater ($91,000). Both feature:</p>
<ul>
<li>Nappa leather seats with heating, ventilation, and massage</li>
<li>15.6-inch rotating touchscreen (portrait/landscape)</li>
<li>Head-up display</li>
<li>Vehicle-to-Load (V2L) — power appliances from the car</li>
<li>Soft-close doors</li>
<li>Full-size spare tyre</li>
<li>3,500kg braked towing capacity</li>
<li>5-star ANCAP safety rating</li>
</ul>

<h2>The Denza B5: Compact Adventure SUV</h2>
<p>The B5 LEOPARD is the smaller, more affordable sibling. It also uses the DMO platform and DiSus-P hydraulic suspension (140mm travel), though its DiSus-P implementation is a simpler two-tier damping system compared to the B8's three-tier setup, and it lacks the B8's preaim (云辇预瞄) feature — the LiDAR/camera-based system that scans the road ahead and pre-adjusts the suspension. It also uses a 1.5-litre turbo engine instead of the B8's 2.0-litre, producing 400kW combined versus the B8's 425kW.</p>

<p>While the B8 competes with LandCruiser and Patrol, the B5 targets vehicles like the Toyota Fortuner, Isuzu MU-X, and Jeep Wrangler — but with plug-in hybrid efficiency and significantly more power.</p>

<h2>What This Means for Australia</h2>
<p>The B5 and B8 represent something genuinely new in the Australian market: body-on-frame 4×4 SUVs that can also be daily commuters on pure electric power. With 100–115km of electric range, most Australian daily commutes can be done without using a drop of petrol. But when you want to go off-road or tow a caravan, the petrol engine and electric motors provide serious combined grunt.</p>

<p>The 5-star ANCAP rating for the B8 was also a significant milestone, addressing one of the common concerns about Chinese-brand vehicles in Australia.</p>

<p><em>Read more: <a href="/news/z9gt-melbourne-debut">Denza Z9 GT Confirmed for Australia</a></em></p>
`,
  },
  {
    slug: "denza-n7-premium-suv",
    image: "/images/vehicles/n7.png",
    title:
      "The Denza N7 — Australia's Missing Premium Electric SUV",
    date: "2026-04-17",
    category: "Analysis",
    excerpt:
      "Denza has confirmed five vehicles for Australia in 2026. Four are locked in. We think the fifth is the N7 — a mid-size electric SUV with air suspension, rear-wheel steering, and a five-screen interior that undercuts the Europeans by tens of thousands.",
    related: [
      { slug: "denza-b5-b8-launch", title: "Denza B5 & B8: The Brand Arrives in Australia" },
      { slug: "z9gt-melbourne-debut", title: "Denza Z9 GT Confirmed for Australia" },
    ],
    content: `
<p>Denza Australia has confirmed five vehicles for 2026. Four are already locked in: the B5, B8, D9, and Z9 GT. The fifth remains unannounced — no teasers, no confirmations, no hints from the brand.</p>

<p>We think it's the N7. And if we're right, it's the most important car Denza will bring to Australia this year.</p>

<img src="/images/articles/n7/n7 exterior.jpeg" alt="Denza N7 exterior" class="article-img" />

<h2>What is the N7?</h2>
<p>The Denza N7 is a full-electric "shooting brake" SUV — think of it as the premium, more athletic sibling to the BYD Sealion 7. Where the Sealion 7 offers excellent value in the mid-size EV SUV segment, the N7 takes the same fundamental platform and elevates everything: the chassis, the interior, the technology, the driving experience.</p>

<p>In China, the N7 sits in the 239,800–289,800 RMB range (roughly AUD $50,000–$60,000), positioning it squarely against the Tesla Model Y Performance, Hyundai Ioniq 5, and Kia EV6 GT.</p>

<h2>The Specs</h2>
<p>Built on BYD's e-Platform 3.0, the N7 packs serious numbers:</p>

<table>
<tr><th>Spec</th><th>Rear-Drive</th><th>AWD Performance</th></tr>
<tr><td>Power</td><td>230kW / 360Nm</td><td>390kW / 670Nm</td></tr>
<tr><td>0–100 km/h</td><td>6.8 seconds</td><td>3.9 seconds</td></tr>
<tr><td>Range (CLTC)</td><td>702 km</td><td>630 km</td></tr>
<tr><td>Battery</td><td>91.3 kWh Blade Battery</td><td>91.3 kWh Blade Battery</td></tr>
<tr><td>Ultra-Fast Charging</td><td>230kW dual-gun, 15 min = ~350 km</td><td>Same</td></tr>
<tr><td>Dimensions</td><td colspan="2">4860 × 1935 × 1625mm, wheelbase 2940mm</td></tr>
<tr><td>Boot</td><td colspan="2">480L (1200L seats down)</td></tr>
<tr><td>Drag coefficient</td><td colspan="2">0.24 Cd</td></tr>
</table>

<p>The AWD version hits 100 km/h in 3.9 seconds. That's not "good for an EV" — that's genuinely fast by any standard.</p>

<img src="/images/articles/n7/n7 exterior 2.jpeg" alt="Denza N7 profile view" class="article-img" />

<h2>Chassis — Where It Beats the Sealion 7</h2>
<p>This is where the N7 separates itself. The Sealion 7 runs a capable double-wishbone front and multi-link rear setup. The N7 takes it further:</p>
<ul>
<li><strong>Double-wishbone front, five-link rear</strong> — standard</li>
<li><strong>DiSus-A air suspension with CDC damping</strong> — adjustable height and stiffness</li>
<li><strong>Rear-wheel steering</strong> — 5.7-metre turning circle for a car this size</li>
<li><strong>e-Platform 3.0 with 800V architecture</strong> — faster charging, better thermal management</li>
</ul>

<p>The Sealion 7 doesn't get air suspension. The N7 does. That's the difference between "comfortable" and "luxury ride quality."</p>

<img src="/images/articles/n7/后排空间.jpeg" alt="Denza N7 rear space" class="article-img" />

<img src="/images/articles/n7/n7 e platform 3.0.jpeg" alt="Denza N7 e-Platform 3.0" class="article-img" />

<h2>Interior — Five Screens</h2>
<p>The N7's cabin is where the premium positioning really shows:</p>

<img src="/images/articles/n7/三幅式真皮方向盘.jpeg" alt="Denza N7 steering wheel and screens" class="article-img" />
<ul>
<li><strong>10.25-inch instrument cluster</strong></li>
<li><strong>17.3-inch 2K central display</strong></li>
<li><strong>10.25-inch passenger screen</strong></li>
<li><strong>50-inch AR head-up display</strong></li>
<li><strong>7-inch armrest control screen</strong></li>
</ul>

<img src="/images/articles/n7/17.3中控.jpeg" alt="Denza N7 17.3-inch center console" class="article-img" />

<p>Five screens. At this price point, that's remarkable.</p>

<p>The seats are wrapped in Nappa leather with ventilation, heating, and massage. The front passenger gets a "Queen's Seat" with a leg rest and eight-point massage.</p>

<img src="/images/articles/n7/女王座椅 副驾电动腿托 + 按摩.jpeg" alt="Denza N7 Queen's Seat" class="article-img" />

<p>The roof is Alcantara. The sound system is a 16-speaker Devialet setup with Dolby Atmos. Even the gear selector is crystal.</p>

<img src="/images/articles/n7/n7 devialet.jpeg" alt="Denza N7 Devialet 16-speaker sound system" class="article-img" />

<h2>N7 vs Sealion 7 — Quick Comparison</h2>
<table>
<tr><th>Feature</th><th>Denza N7</th><th>BYD Sealion 7</th></tr>
<tr><td>Positioning</td><td>Premium / luxury</td><td>Mainstream / value</td></tr>
<tr><td>Suspension</td><td>Air + CDC</td><td>FSD / DiSus-C</td></tr>
<tr><td>Rear-wheel steering</td><td>Yes (5.7m turning circle)</td><td>No</td></tr>
<tr><td>Max range (CLTC)</td><td>702 km</td><td>610 km</td></tr>
<tr><td>0–100 km/h (AWD)</td><td>3.9s</td><td>5.9s</td></tr>
<tr><td>Interior screens</td><td>5</td><td>2</td></tr>
<tr><td>Audio</td><td>Devialet 16-speaker</td><td>Dynaudio 12-speaker</td></tr>
<tr><td>Price (China)</td><td>239,800–289,800 RMB</td><td>189,800–239,800 RMB</td></tr>
</table>

<img src="/images/articles/n7/sealion 7 hero.png" alt="BYD Sealion 7" class="article-img" />

<h2>Why Australia Needs This Car</h2>
<p>The mid-size premium EV SUV segment in Australia is competitive but thin on genuine value. The Tesla Model Y dominates on brand recognition. The Hyundai Ioniq 5 wins on design. The Kia EV6 impresses on driving dynamics.</p>

<p>The N7 doesn't try to beat any of them at their own game. It plays a different game entirely — offering air suspension, rear-wheel steering, a five-screen interior, and 702 km of range at a price point that undercuts the Europeans by tens of thousands of dollars.</p>

<p>If Denza brings the N7 to Australia, it won't just fill a gap in their lineup. It'll challenge the entire segment to raise its game.</p>

<p>We're ready for it. When the N7 arrives, Baolab will have accessories designed to match its premium character.</p>

<p>Watch this space.</p>
`,
  },
  {
    slug: "denza-d9-electric-mpv",
    image: "/denza-d9-hero.jpg",
    title:
      "Denza D9: The Luxury Electric People Mover Coming to Australia",
    date: "2026-03-12",
    category: "Launch",
    excerpt:
      "The Denza D9 is a premium electric people mover that competes with the Kia Carnival and Volkswagen Multivan — but with electric power, six captain's chairs, and luxury car refinement.",
    related: [
      { slug: "denza-b5-b8-launch", title: "Denza B5 & B8: The Brand Arrives in Australia" },
      { slug: "z9gt-melbourne-debut", title: "Denza Z9 GT Confirmed for Australia" },
    ],
    content: `
<p>While the B5 and B8 grabbed attention as rugged off-roaders, Denza's third Australian model targets a very different buyer: the <strong>Denza D9</strong> is a luxury electric people mover designed to replace the traditional family van with something far more refined.</p>

<h2>What is the D9?</h2>
<p>The D9 is a large, all-electric MPV (multi-purpose vehicle) that seats up to seven passengers. In China, it's been a massive hit — rivalling the Toyota Alphard in sales and becoming one of the best-selling premium MPVs in the country. Now it's heading to Australia.</p>

<p>Think of it as a Kia Carnival or Volkswagen Multivan, but with the refinement of a Mercedes S-Class and the powertrain of an electric car.</p>

<h2>Design & Comfort</h2>
<p>The D9 is built for passengers, not drivers (though the driver's seat is plenty comfortable too). The key selling point is the second row:</p>
<ul>
<li>Two individual captain's chairs with electric adjustment</li>
<li>Heating, ventilation, and full massage function</li>
<li>Extendable leg rests (airline-style)</li>
<li>Individual entertainment screens</li>
<li>Retractable tables</li>
<li>Privacy curtains</li>
</ul>

<p>The third row isn't an afterthought either — it offers genuine adult-sized legroom, unlike most SUVs where the third row is only suitable for children.</p>

<h2>Powertrain</h2>
<p>The D9 for Australia is expected to feature:</p>
<table>
<tr><th>Spec</th><th>Denza D9</th></tr>
<tr><td>Platform</td><td>e-Platform 3.0</td></tr>
<tr><td>Battery</td><td>103kWh LFP (Blade Battery)</td></tr>
<tr><td>Range</td><td>600+ km (CLTC)</td></tr>
<tr><td>Drive</td><td>FWD / AWD</td></tr>
<tr><td>Battery</td><td>103.3kWh Blade Battery</td></tr>
<tr><td>Range</td><td>600km (NEDC) / 520km (WLTP)</td></tr>
<tr><td>Max DC charge rate</td><td>200kW</td></tr>
<tr><td>Max AC charge rate</td><td>11kW</td></tr>
<tr><td>0–100 km/h</td><td>6.9 seconds (AWD)</td></tr>
</table>

<h2>Who is it For?</h2>
<p>The D9 targets families who want space and luxury without the fuel bills of a V6 people mover. It's also ideal for:</p>
<ul>
<li><strong>Executive transport</strong> — airport transfers, corporate shuttles</li>
<li><strong>Rideshare/luxury hire</strong> — premium passenger experience</li>
<li><strong>Large families</strong> — genuine 7-seat comfort with electric efficiency</li>
<li><strong>Accessibility</strong> — flat floor, wide sliding doors, low step-in height</li>
</ul>

<h2>The Australian MPV Market</h2>
<p>Australia's people mover market has been dominated by the Kia Carnival for years, with the Volkswagen Multivan and Hyundai Staria offering alternatives. The D9 brings something none of them offer: full electric power combined with luxury-car levels of refinement.</p>

<p>Pricing hasn't been confirmed yet, but given the B8 tops out at $97,990, expect the D9 to sit in a similar bracket. That would make it competitive with a loaded Kia Carnival Hybrid or entry-level Volkswagen Multivan — but with significantly more technology and a fully electric driving experience.</p>

<p>The D9 is Denza's third model in Australia and demonstrates the brand's intent to cover multiple segments, from rugged off-roaders to luxury family transport.</p>

<p><em>Read more: <a href="/news/denza-b5-b8-launch">Denza B5 & B8: How the Brand Arrived in Australia</a></em></p>
`,
  },
  {
    slug: "byd-disus-suspension",
    image: "/disus-banner.jpg",
    title:
      "BYD DiSus Suspension Explained — The Four Tiers of Intelligent Body Control",
    date: "2026-01-15",
    category: "Technology",
    excerpt:
      "DiSus is BYD's self-developed intelligent body control system, exclusive to new energy vehicles. From the accessible DiSus-C to the extreme DiSus-X that lets a car drive on three wheels, here's every tier explained.",
    related: [
      { slug: "denza-b5-b8-launch", title: "Denza B5 & B8: How the Brand Arrived in Australia" },
      { slug: "byd-e3-platform", title: "The e³ Platform: Denza's Premium Architecture" },
      { slug: "z9gt-melbourne-debut", title: "Denza Z9 GT Confirmed for Australia" },
    ],
    content: `
<p>When BYD unveiled its DiSus Intelligent Body Control System in April 2023, it became the first Chinese automaker to own the full-stack intelligent vehicle body control technology — from the sensors to the actuators to the software that ties it all together. The system was developed exclusively for new energy vehicles (NEVs) and is now rolling out across BYD, Denza, and YangWang models.</p>

<h2>What Does "DiSus" Mean?</h2>
<p>The English name combines <strong>Di</strong> (the "D" from BYD — it appears across many BYD names, like the Xiao Di voice assistant and DiPilot self-driving system) with <strong>Sus</strong> (from suspension). The Chinese name is <strong>云辇 (Yǔnnián)</strong>, which loosely translates to something like "cloud carriage" — a poetic reference to the emperor's cloud-like chariot and the floating ride quality the system aims to deliver.</p>

<h2>Why It Matters</h2>
<p>Suspension technology has traditionally been the domain of European luxury brands. Mercedes-Benz has AIRMATIC and MAGIC BODY CONTROL, BMW has Adaptive M Suspension, and Porsche has PASM. DiSus represents BYD's answer — and in some ways, it exceeds what the Europeans offer, particularly in the hydraulic and extreme-performance tiers.</p>

<p>The key innovation is that DiSus is purpose-built for electric and hybrid vehicles, where heavy battery packs change the dynamics of how a car rides and handles. Traditional suspension tuning assumes a petrol engine and fuel tank — DiSus accounts for the weight and placement of batteries from the ground up.</p>

<h2>The Four Tiers</h2>

<h3>DiSus-C: Intelligent Damping Body Control</h3>
<p><strong>What it is:</strong> The entry-level tier, similar to CDC (Continuously Damping Control) variable damping systems found in many premium cars.</p>
<p><strong>How it works:</strong> Electronic control valves inside each shock absorber adjust the damping force in real time. The system reads the road and adjusts each wheel independently to balance comfort and handling.</p>
<p><strong>Where you'll find it:</strong> BYD Han, Tang, and some Denza models. Several models gained DiSus-C via a simple OTA software update because they already had the necessary hardware installed from the factory.</p>

<h3>DiSus-A: Intelligent Air Body Control</h3>
<p><strong>What it is:</strong> The mid-tier system, using air suspension instead of traditional coil springs.</p>
<p><strong>How it works:</strong> Air springs at each corner can raise or lower the vehicle by up to <strong>150mm</strong>. The system automatically adjusts ride height based on speed, road conditions, and driving mode. At highway speeds, it lowers the car for better aerodynamics and stability. Off-road, it raises it for extra clearance.</p>
<p><strong>Where you'll find it:</strong> The Denza N7 was the first model to feature DiSus-A, and it's now available across several BYD and Denza models with air suspension hardware.</p>

<h3>DiSus-P: Intelligent Hydraulic Body Control</h3>
<p><strong>What it is:</strong> The flagship tier. This is the system behind the YangWang U8's famous tank turns and water wading demonstrations. It uses hydraulic actuators rather than air springs or passive dampers.</p>
<p><strong>How it works:</strong> Each wheel has its own hydraulic spring assembly that can be individually controlled. On the Denza B8, this provides 140mm of travel. The system can individually adjust each wheel's position in real time. On-board sensors — including LiDAR on some models — scan the road ahead and pre-adjust the suspension before the car reaches a bump or pothole.</p>
<p><strong>Key capabilities:</strong></p>
<ul>
<li>140mm ride height adjustment on B5/B8 (200mm on YangWang U8) — from slammed for highway to maximum clearance for off-road</li>
<li>Individual wheel control — each corner adjusts independently for flat cornering</li>
<li>Tank turn capability — the U8 can spin on the spot with hydraulic suspension keeping the body stable</li>
<li>Water wading mode — raises the body to maximum height for deep water crossings</li>
<li>Active body control — virtually eliminates body roll in corners and nose dive under braking</li>
</ul>
<p><strong>Where you'll find it:</strong> YangWang U8 (G-Wagen competitor) and <strong>Denza B8</strong> (flagship off-road SUV available in Australia). The B8's DiSus-P is what gives a $97,990 SUV ride quality that rivals vehicles costing two or three times the price.</p>

<h3>DiSus-X: Extreme Performance</h3>
<p><strong>What it is:</strong> The most extreme tier — found on the YangWang U9 electric supercar. Enables the U9 to drive on three wheels and "dance" by bouncing its body on command. A technology showcase proving the system has headroom far beyond what any road car currently needs.</p>

<h2>How the Tiers Compare</h2>
<table>
<tr><th>Feature</th><th>DiSus-C</th><th>DiSus-A</th><th>DiSus-P</th><th>DiSus-X</th></tr>
<tr><td>Type</td><td>Variable damping</td><td>Air suspension</td><td>Hydraulic</td><td>Extreme hydraulic</td></tr>
<tr><td>Ride height</td><td>No</td><td>Up to 150mm</td><td>Up to 200mm</td><td>200mm+</td></tr>
<tr><td>Tank turn</td><td>No</td><td>No</td><td>Yes (U8)</td><td>Yes</td></tr>
<tr><td>3-wheel driving</td><td>No</td><td>No</td><td>No</td><td>Yes (U9)</td></tr>
<tr><td>In Australia</td><td>TBC</td><td>TBC</td><td>Yes (B8)</td><td>No</td></tr>
</table>


<p><strong>📸 Engineering Sample — Fangchengbao B8, China, ~10 April 2026</strong></p>
<p>DiSus-P in action: this engineering sample B8 was spotted driving on three wheels, with the fourth wheel fully retracted by the hydraulic suspension system. Each corner adjusts independently, allowing the vehicle to maintain stability even with a wheel completely off the ground.</p>
<div class="article-inline-images">
  <img src="/disus-3wheel-1.jpg" alt="Fangchengbao B8 engineering sample driving on 3 wheels — DiSus-P hydraulic suspension retracting front-left wheel" loading="lazy" />
  <img src="/disus-3wheel-2.jpg" alt="Fangchengbao B8 with fourth wheel retracted by DiSus-P system" loading="lazy" />
  <img src="/disus-3wheel-3.jpg" alt="Close-up of DiSus-P hydraulic suspension holding wheel in retracted position" loading="lazy" />
</div>

<p>As BYD and Denza expand in Australia, expect more models with DiSus technology — from accessible DiSus-C on mainstream models to flagship DiSus-P on premium vehicles.</p>

<p><em>Read more: <a href="/news/denza-b5-b8-launch">Denza B5 & B8: How the Brand Arrived in Australia</a> · <a href="/news/byd-e3-platform">The e³ Platform Explained</a></em></p>
`,
  },

  {
    slug: "byd-e3-platform",
    image: "/e3-banner.jpg",
    title:
      "The e³ Platform — Denza's Premium Architecture Explained",
    date: "2026-04-06",
    category: "Technology",
    excerpt:
      "Pronounced 'e cube', the e³ platform is BYD's industry-leading architecture developed exclusively for Denza. Named after its three core components — powertrain, control systems, and intelligent architecture.",
    related: [
      { slug: "z9gt-melbourne-debut", title: "Denza Z9 GT Confirmed for Australia" },
      { slug: "byd-disus-suspension", title: "BYD DiSus Suspension — All Four Tiers Explained" },
      { slug: "flash-charge-blade-battery", title: "Flash Ultra Charging & Blade Battery 2.0" },
    ],
    content: `
<p>Every car brand has its defining platform — the underlying architecture that determines what a vehicle can do. Volkswagen has MEB, Hyundai has E-GMP, and Tesla has its skateboard chassis. For Denza, BYD's premium sub-brand, that platform is <strong>e³</strong> — pronounced "e cube".</p>

<h2>What is e³?</h2>
<p>The e³ platform is an industry-leading architecture developed specifically for Denza by BYD. According to BYD's own media materials, the name comes from its combination of <strong>three major components</strong>:</p>
<ol>
<li><strong>Powertrain architecture</strong> — compatible with both plug-in hybrid (PHEV) and pure electric (BEV) configurations, including the first use of Cell-to-Body construction in a super hybrid vehicle</li>
<li><strong>Control architecture</strong> — featuring three-motor independent drive and rear-wheel dual motor steering technology</li>
<li><strong>Intelligent architecture</strong> — focused on the deep integration of artificial intelligence and electrification</li>
</ol>

<p>Unlike a simple chassis that you bolt different bodies onto, e³ is a ground-up design where the battery, motors, suspension, and electronics are all engineered as a single integrated system.</p>

<h2>800-Volt High-Voltage Architecture</h2>
<p>One of the headline specs of the e³ platform is its <strong>800-volt high-voltage electrical system</strong>. Most EVs on sale today use 400V architecture. The move to 800V unlocks several major advantages:</p>
<ul>
<li><strong>Faster charging</strong> — higher voltage means more power can flow through the same cables with less heat. The Z9 GT on e³ supports up to 1500kW DC charging.</li>
<li><strong>Lighter wiring</strong> — 800V systems can use thinner cables (same power at higher voltage = lower current = thinner wires), saving weight.</li>
<li><strong>Better efficiency</strong> — less energy lost as heat in the electrical system, meaning more range per kWh.</li>
<li><strong>Higher motor performance</strong> — enables more powerful motors with better sustained output.</li>
</ul>

<p>Porsche was the first to bring 800V to production cars with the Taycan in 2019. BYD's e³ platform brings the same voltage level to Denza at a significantly lower price point.</p>

<h2>Tri-Motor Independent Drive</h2>
<p>The e³ platform supports a <strong>tri-motor layout</strong> — one motor on the front axle and two independent motors on the rear. This is the configuration used in the Z9 GT, producing a combined 850kW.</p>
<p>The dual rear motors enable features that a single rear motor can't achieve:</p>
<ul>
<li><strong>Torque vectoring</strong> — sending different amounts of power to each rear wheel, improving cornering grip and stability</li>
<li><strong>Compass Turn</strong> — BYD's name for a tank turn, where the car can spin on the spot by driving one rear motor forward and the other backward</li>
<li><strong>Better traction control</strong> — if one wheel loses grip, the other can compensate independently</li>
</ul>

<h2>Rear-Wheel Dual Motor Steering</h2>
<p>Beyond just driving the wheels, the e³ platform's control architecture includes <strong>rear-wheel steering</strong> powered by the dual rear motors. At low speeds, the rear wheels turn in the opposite direction to the fronts, reducing the turning circle — handy for a 5-metre-long grand tourer in car parks. At high speeds, they turn in the same direction as the fronts for improved stability.</p>

<h2>Cell-to-Body (CTB) Construction</h2>
<p>The e³ platform uses BYD's <strong>Cell-to-Body</strong> technology, where the battery cells are integrated directly into the vehicle's structure rather than sitting in a separate battery pack. This:</p>
<ul>
<li>Increases structural rigidity (the battery becomes part of the chassis)</li>
<li>Lowers the centre of gravity</li>
<li>Maximises interior space by eliminating wasted volume around the battery pack</li>
<li>Improves crash safety — the battery structure adds strength to the floor</li>
</ul>
<p>BYD claims CTB gives the e³ platform a torsional rigidity comparable to luxury vehicles costing significantly more.</p>

<h2>Which Cars Use e³?</h2>
<p>The e³ platform is exclusive to Denza vehicles. Current and upcoming models built on e³ include:</p>
<ul>
<li><strong>Denza Z9 GT</strong> — the all-electric grand tourer debuting in Australia in Q3 2026. Tri-motor, 850kW, 0-100 in 2.7s.</li>
<li><strong>Denza Z9</strong> — the sedan variant of the Z9 GT</li>
<li>Future Denza models as the brand expands globally</li>
</ul>

<h2>e³ vs e-Platform 3.0</h2>
<p>BYD's mainstream models (Atto 3, Seal, Dolphin, etc.) use <strong>e-Platform 3.0</strong> and its evolution <strong>e-Platform 3.0 Evo</strong>. The e³ platform is Denza's premium-exclusive upgrade:</p>
<table>
<tr><th>Feature</th><th>e-Platform 3.0</th><th>e³ (Denza)</th></tr>
<tr><td>Voltage</td><td>400V</td><td>800V</td></tr>
<tr><td>Motor layout</td><td>Single or dual</td><td>Up to tri-motor</td></tr>
<tr><td>Rear-wheel steering</td><td>No</td><td>Yes (dual motor)</td></tr>
<tr><td>Max DC charging</td><td>~150kW</td><td>Up to 1500kW (Flash)</td></tr>
<tr><td>CTB construction</td><td>Some models</td><td>Standard</td></tr>
<tr><td>Brand</td><td>BYD</td><td>Denza</td></tr>
</table>

<p>The e³ platform is what allows Denza to compete with Porsche, BMW, and Mercedes on technology and performance while maintaining a significant price advantage. It's the foundation that makes the Z9 GT's 850kW output and 1500kW charging possible.</p>

<p><em>Read more: <a href="/news/z9gt-melbourne-debut">Denza Z9 GT Debuts at Melbourne Motor Show</a> · <a href="/news/byd-disus-suspension">DiSus Suspension Explained</a> · <a href="/news/flash-charge-blade-battery">Flash Ultra Charging & Blade Battery 2.0</a></em></p>
`,
  },

  {
    slug: "denza-b8-sentry-mode",
    image: "/sentry_demo.jpg",
    title: "Sentry Mode & Sideloaded Apps on the Denza B5/B8 — What's Possible",
    date: "2026-05-09",
    category: "Technology",
    excerpt: "The Denza B5 and B8 run on Android, which means you can sideload apps. We enabled ADB access and installed sentry mode, quad-view dashcam, and more. Here's what's possible.",
    related: [
      { slug: "denza-b5-b8-launch", title: "Denza B5 & B8: The Brand Arrives in Australia" },
    ],
    content: `
<p>The Denza B5 and B8's infotainment system runs on Android. That's no secret — the 17.3-inch screen, the app drawer, the settings menu, it's all Android under the hood. What most people don't know is that you can <strong>sideload apps</strong> onto it, opening up a whole world of functionality that BYD didn't include from the factory.</p>

<h2>What is Sideloading?</h2>
<p>Sideloading means installing apps from outside the official app store — basically loading APK files directly onto the system. On a phone, this is common. On a car's infotainment system, it's a bit more involved, but the Denza's Android base makes it possible.</p>

<h2>What We Installed</h2>
<p>After enabling ADB (Android Debug Bridge) access on our B8, we sideloaded several apps:</p>

<h3>Sentry Mode</h3>
<p>The Denza B5 and B8 don't come with a built-in sentry mode like Tesla. But with the right app, you can use the car's existing cameras as a surveillance system. When parked, the cameras detect motion around the vehicle and start recording. If someone gets too close or the car detects strong vibrations, it can <strong>flash the hazard lights or even honk the horn</strong> to scare them off — and you get a notification on your phone.</p>
<p>This is probably the most useful sideloaded app — in a busy carpark, it's peace of mind that your Denza is watching.</p>

<div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:12px;margin:24px 0">
<iframe src="https://www.youtube.com/embed/FeLjqGn7qvY" style="position:absolute;top:0;left:0;width:100%;height:100%" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
<p style="font-size:12px;color:rgba(255,255,255,0.5);margin-top:-16px">▲ Sentry mode demo — how it works</p>

<div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:12px;margin:24px 0">
<iframe src="https://www.youtube.com/embed/0NnAfIczeRs" style="position:absolute;top:0;left:0;width:100%;height:100%" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
<p style="font-size:12px;color:rgba(255,255,255,0.5);margin-top:-16px">▲ Sentry mode in action — motion detection + hazard light alerts</p>

<h3>Quad-View Dashcam</h3>
<p>Neither the B5 nor the B8 comes with a built-in dashcam from the factory. Most owners end up spending hundreds on an aftermarket unit with ugly cables dangling across the windshield. But the Denza already has cameras everywhere — front, left, right, and rear.</p>
<p>Our quad-view dashcam app uses the car's 360° camera system to record while driving, with a clean overlay showing <strong>timestamp, speed, and brake/accelerator pedal position</strong> as watermarks. You get four simultaneous camera angles — front, left, right, and rear — all viewable on the 17.3-inch screen. No aftermarket hardware, no cables, no fuss.</p>

<div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:12px;margin:24px 0">
<iframe src="https://www.youtube.com/embed/WWS6Dddk2kY" style="position:absolute;top:0;left:0;width:100%;height:100%" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
<p style="font-size:12px;color:rgba(255,255,255,0.5);margin-top:-16px">▲ Quad-view dashcam — 360° recording while driving</p>

<h3>Entertainment & Connectivity</h3>
<p>We also installed a few entertainment and connectivity apps. Video streaming apps like TikTok work while the car is in motion (for passengers, of course), and the large screen makes them surprisingly usable — especially with the B8's 6-seat layout where rear passengers can comfortably watch while parked or charging.</p>
<p>One of the best additions is <strong>Baidu CarLink</strong> — the "CarPlay equivalent" for Chinese phones. If you're using an Oppo, Vivo, Xiaomi, OnePlus, or any other Chinese-brand phone, Baidu CarLink connects wirelessly the moment you start the car, just like wireless Apple CarPlay. No cables, no pairing menus, it just works.</p>

<h2>How It Works</h2>
<p>The process requires <strong>factory-level access</strong> to the Denza's system — this isn't something you can do through the normal settings menu. Once ADB is enabled, you can install apps in two ways:</p>
<ul>
<li><strong>Wired:</strong> Connect an Android phone or laptop via USB and use standard Android ADB tools to install APKs</li>
<li><strong>Wireless:</strong> Enable wireless debugging and install apps remotely from a PC, laptop, or even an Android phone using a wireless ADB assistant app — no cables needed</li>
</ul>

<p><em>Note: Factory access should only be performed by qualified technicians.</em></p>

<h2>Does It Affect Warranty?</h2>
<p>That depends on your dealer. The sideloaded apps run on the infotainment system, which is separate from the vehicle's core driving systems. In most cases, a dealer reset would restore the system to factory state. But if you're concerned, check with your dealer before making any changes.</p>

<h2>Want This on Your Denza?</h2>
<p>We offer a professional installation service for ADB access and app sideloading on the Denza B5 and B8. <a href="https://shop.baolab.au/products/denza-b5-b8-adb-unlocking-app-sideloading-service">Check out the product page</a> for pricing and availability.</p>

<p><em>Watch our demos: <a href="https://youtu.be/0NnAfIczeRs" target="_blank">Sentry Mode</a> | <a href="https://youtu.be/WWS6Dddk2kY" target="_blank">Quad-View Dashcam</a></em></p>
`,
  },

  {
    slug: "denza-triple-threat",
    image: "/images/news/denza-triple-threat.jpg",
    title:
      "Denza\'s Triple Threat: A Cargo Ship, an OTA Update, and a Suspension That Changes Its Own Tyres",
    date: "2026-06-07",
    category: "Technology",
    excerpt:
      "Three major developments in three weeks: BYD\'s own cargo ship delivers 4,810 vehicles to Melbourne, the B5 and B8 get a free OTA update, and the new DiSus-P Ultra suspension can lift a wheel off the ground for tyre changes.",
    related: [
      { slug: "denza-b5-b8-launch", title: "Denza B5 & B8: The Brand Arrives in Australia" },
      { slug: "denza-n7-premium-suv", title: "Denza N7: The Premium Electric SUV" },
    ],
    content: `
<p>Denza has been on an absolute tear in Australia this month. Three developments landed in the span of two weeks, and each one matters if you own — or are considering — a Denza.</p>

<h2>1. The BYD Zhengzhou: 4,810 Vehicles on BYD\'s Own Ship</h2>
<p>On June 1, a 199.9-metre cargo carrier called the <strong>BYD Zhengzhou</strong> pulled into Webb Dock West in Melbourne. It\'s the first international run of BYD\'s purpose-built car carrier fleet — one of eight RORO (roll-on roll-off) vessels the company owns. The ship was named after Zhengzhou, the capital of Henan Province, and its maiden voyage was deliberately routed to Australia.</p>

<p><strong>4,810 new BYD and Denza vehicles</strong> were unloaded, bound for Australian customers. The shipment includes B5, B8, and D9 models — exactly the models that have had waitlists stretching for months.</p>

<p><strong>Why it matters:</strong> BYD isn\'t just shipping cars — it\'s shipping cars on its own ships. This is vertical integration on a level we haven\'t seen from a Chinese automaker in Australia. BYD controls the factory, the battery supply, and now the logistics. Shorter wait times, fewer supply chain bottlenecks, and a clear signal that Australia is a priority market.</p>

<h2>2. Free OTA Update for B5 and B8</h2>
<p>Denza pushed a free over-the-air software update to all B5 and B8 owners in Australia on May 28, improving towing and off-road capability. No dealer visit required — your car got better while you slept.</p>

<p>The update refines the traction control logic for towing scenarios and improves the off-road drive modes. If you\'ve been towing a trailer or hitting gravel roads, the B5 and B8 now handle it better than at launch.</p>

<p><strong>Why it matters:</strong> OTA updates are still rare in the PHEV/4WD space. Tesla does it. Rivian does it. But a Chinese PHEV SUV getting meaningful capability improvements over the air? That\'s new. Denza is treating these cars like software products — buy once, keep getting better.</p>

<h2>3. DiSus-P Ultra: The Suspension That Changes Its Own Tyres</h2>
<p><img src="/images/news/disus-ultra.jpg" alt="Fangchengbao Bao 8 DiSus-P Ultra three-wheel driving" style="width:100%;border-radius:12px;margin:16px 0" /></p>

<p>This is the big one. In China, the 2026 <strong>Fangchengbao Bao 8</strong> (Denza B8 equivalent) launched with BYD\'s new <strong>DiSus-P Ultra</strong> hydraulic suspension system. The headline feature? It can lift any individual wheel completely off the ground.</p>

<p>Three modes:</p>
<ul>
<li><strong>Tyre Change Mode</strong> — the suspension raises one wheel into the air, no jack needed. Just crouch down and swap the tyre. On the side of a highway. In the rain. Without crawling under the car.</li>
<li><strong>Three-Wheel Driving</strong> — with one wheel lifted, the three-motor AWD system redistributes power to the remaining three wheels. The car literally drives itself out of trouble on three wheels.</li>
<li><strong>Wheel-Lift Recovery</strong> — stuck in a rut? The suspension can cyclically lift and drop individual wheels to rock the car free, like a mechanical version of what you\'d do manually with a Hi-Lift jack.</li>
</ul>

<p>The Bao 8 Flash Charging Edition also gets <strong>1000-volt flash charging</strong> and a 3-motor AWD setup. It starts at 305,800 yuan (~$60,000 AUD) in China.</p>

<p><strong>Why it matters:</strong> This tech will almost certainly make its way to the Australian B8. BYD has been clear that the Denza B5 and B8 are global products — what launches in China today arrives here within months. The DiSus-P Ultra turns the B8 from \'a nice 4WD\' into \'the 4WD that doesn\'t need a jack.\'</p>

<h2>The Bigger Picture</h2>
<p>Three weeks. Three announcements. A cargo ship that means shorter wait times. An OTA update that makes existing cars better. And suspension technology that sounds like science fiction.</p>

<p>Denza isn\'t just competing with Toyota and Ford anymore. It\'s competing with Tesla on software, with Land Rover on off-road tech, and with Porsche on logistics speed. And it\'s doing all of it at half the price.</p>

<p>If you\'ve been on the fence about a Denza, June 2026 might be the month that tips it.</p>
`,
  },

  {
    slug: "how-to-install-apps-on-byd-dilink-5",
    image: "/images/news/byd-app-install.jpg",
    title: "How to Install Third-Party Apps on BYD DiLink 5.0+",
    date: "2026-06-15",
    category: "Guide",
    excerpt: "A step-by-step guide to unlocking ADB and sideloading apps on your BYD or Denza vehicle. Works on all DiLink 5.0+ models worldwide.",
    related: [
      { slug: "denza-b8-sentry-mode", title: "Denza B8 Sentry Mode + Sideloaded Apps" },
      { slug: "denza-triple-threat", title: "Denza Triple Threat" },
    ],
    content: `<h1>How to Install Third-Party Apps on BYD DiLink 5.0+</h1>
<p><strong>A step-by-step guide to unlocking ADB and sideloading apps on your BYD or Denza vehicle.</strong></p>

<h2>What is ADB Unlocking?</h2>
<p>ADB (Android Debug Bridge) unlocking gives you full control over your BYD's infotainment system. Once unlocked, you can install any Android app — sentry mode, dashcam recording, wireless CarPlay for Chinese phones, and more.</p>
<p><strong>Why doesn't BYD allow this by default?</strong> BYD restricts third-party apps for safety and warranty reasons. But for many owners, the factory apps don't cover everything they need — especially for features like parking surveillance and entertainment.</p>

<h2>Step 1: Check Compatibility</h2>
<p>Region or spec of car doesn't matter — follow step 2, if a QR code appears, then it's 100% compatible! If it says IMEI and ENTER PASSWORD, not compatible as the car is running a lower version of DiLink.</p>
<p><strong>Known incompatible (AU/NZ):</strong> Atto 1, Atto 2, Atto 3, Seal, Sealion 6</p>

<h2>Step 2: Access the QR Code Page</h2>
<p>This is where most people get stuck. Here's how to access the hidden QR code page:</p>
<ol>
<li><strong>Open the Bluetooth phone dialer</strong> on your infotainment screen (NOT the regular phone app — use the one in the Bluetooth settings)</li>
<li><strong>Enter the secret code:</strong> *#91532547#*</li>
<li>Should automatically redirect — if not, check the code was entered correctly</li>
<li>A hidden menu will appear</li>
<li>You'll see a <strong>QR code</strong> on screen</li>
</ol>
<p><strong>Important:</strong> The QR code is only valid for 300 seconds (5 minutes). Once it expires, you'll need to regenerate it.</p>

<h2>Step 3: Get the QR Code Scanned</h2>
<p>This is the part that requires professional tools. The QR code needs to be scanned by BYD's diagnostic software.</p>
<p><strong>Options:</strong></p>
<ul>
<li><strong>Use our service</strong> (recommended) — we scan the QR code remotely for $99 AUD. Takes 10 minutes. <a href="https://shop.baolab.au/products/adb-unlocking-service">Get it unlocked →</a></li>
<li><strong>Visit a BYD dealer</strong> — some dealers will do this for free if you ask nicely</li>
<li><strong>Find a local technician</strong> — search for BYD service technicians in your area</li>
</ul>
<p><strong>What happens after scanning:</strong></p>
<ul>
<li>The QR code gets authorized</li>
<li>You gain access to "Factory Mode"</li>
<li>Enable: "wireless adb switch" and "enable debugging mode after USB connection"</li>
<li>ADB is now enabled on your vehicle</li>
</ul>

<h2>Step 4: Install Apps via USB</h2>
<p>Once ADB is enabled, you can install apps via USB:</p>
<ol>
<li><strong>Download the APK files</strong> you want to install (see our <a href="https://baolab.au/lab">App Library</a>)</li>
<li><strong>Copy them to a USB drive</strong> (FAT32 format)</li>
<li><strong>Plug the USB into your car's USB port</strong></li>
<li><strong>Open the file manager</strong> on your infotainment screen</li>
<li><strong>Navigate to the USB drive</strong> and tap the APK file</li>
<li><strong>Allow installation from unknown sources</strong> if prompted</li>
<li><strong>Install and enjoy!</strong></li>
</ol>

<h2>Step 5: Install Apps Wirelessly (Advanced)</h2>
<p>For wireless installation, you'll need to enable wireless ADB:</p>
<ol>
<li><strong>Connect your car to WiFi</strong> (home WiFi or mobile hotspot)</li>
<li><strong>Enable wireless ADB</strong> in the factory mode settings</li>
<li><strong>Open terminal/command prompt</strong> on your computer (no admin privileges needed)</li>
<li><strong>Use ADB commands:</strong></li>
</ol>
<pre><code>adb connect [car-ip-address]:5555
adb install app.apk</code></pre>
<p><strong>How it works:</strong> adb connect links your computer to the car over WiFi. adb install sends the APK file from your computer to the car and installs it directly. The APK needs to be on your computer — no need to copy it to the car first.</p>

<h2>Frequently Asked Questions</h2>
<p><strong>Q: Will this void my warranty?</strong><br>A: It depends on your dealer. Some don't mind, others might flag it. We recommend asking your dealer first.</p>
<p><strong>Q: Can I reverse the unlock?</strong><br>A: Yes, you can disable ADB in the factory mode settings anytime.</p>
<p><strong>Q: How long will the ADB authentication last?</strong><br>A: Forever, until a factory reset is performed.</p>
<p><strong>Q: Will it affect OTA updates?</strong><br>A: OTA updates will not be affected. You will still receive the latest OTA updates. OTA updates generally will not affect ADB either.</p>
<p><strong>Q: Is it safe?</strong><br>A: The apps we recommend are safe and widely used in the BYD community. However, installing unknown APKs always carries some risk.</p>
<p><strong>Q: What if I brick my car?</strong><br>A: We are not responsible if you install a virus. Always run a security check on files downloaded from the internet.</p>

<h2>Need Help?</h2>
<p>If you get stuck at any step, we're here to help:</p>
<p><strong>Email:</strong> hello@baolab.au</p>
<p><strong>Ready to unlock?</strong> <a href="https://shop.baolab.au/products/adb-unlocking-service">Get the ADB Unlock Service →</a></p>`,
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getArticlesSorted(): Article[] {
  return [...articles].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

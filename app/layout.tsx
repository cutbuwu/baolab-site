import "./globals.css";
import type { Metadata } from "next";
import Header from "./Header";
import Cursor from "./components/Cursor";


export const metadata: Metadata = {
  title: "BAOLAB — Denza Accessories & ADB Unlock Service Australia",
  description:
    "Australia's first dedicated Denza accessory store. Premium B5, B8, D9 upgrades. ADB unlocking & app sideloading service for BYD/Denza vehicles.",
  metadataBase: new URL("https://baolab.au"),
  openGraph: {
    title: "BAOLAB — Denza Accessories & ADB Unlock Service Australia",
    description:
      "Australia's first dedicated Denza accessory store. Premium B5, B8, D9 upgrades. ADB unlocking & app sideloading service.",
    url: "https://baolab.au",
    siteName: "BaoLab",
    locale: "en_AU",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "BaoLab",
  url: "https://baolab.au",
  logo: "https://baolab.au/logo.png",
  description:
    "Australia's first dedicated Denza accessory store. Premium B5, B8, D9, Z9 GT, N7 upgrades. ADB unlocking & app sideloading service for BYD/Denza vehicles.",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    email: "hello@baolab.au",
    availableLanguage: "English",
  },
  address: {
    "@type": "PostalAddress",
    addressCountry: "AU",
    addressRegion: "VIC",
  },
  sameAs: [],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={ __html: JSON.stringify(jsonLd) }
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
  "@context": "https://schema.org",
  "@type": "ItemList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "item": {
        "@type": "Product",
        "name": "12\" Streaming Rearview Mirror \u2014 Dashcam + GPS",
        "description": "<p>Replace your factory mirror with a 12-inch streaming display that shows a live rear camera feed, records front and rear video, and includes GPS tracking. Better visibility, better safety.</p><ul>\n<",
        "image": "https://cdn.shopify.com/s/files/1/0804/7974/8314/files/9221757206746.png?v=1775888491",
        "sku": "9221757206746",
        "brand": {
          "@type": "Brand",
          "name": "BaoLab"
        },
        "offers": {
          "@type": "Offer",
          "price": "249.00",
          "priceCurrency": "AUD",
          "availability": "https://schema.org/InStock",
          "url": "https://shop.baolab.au/products/denza-12-streaming-rearview-mirror-dashcam-gps"
        }
      }
    },
    {
      "@type": "ListItem",
      "position": 2,
      "item": {
        "@type": "Product",
        "name": "65W Dual USB-C Car Charger \u2014 PD Fast Charge",
        "description": "<p>Charge your phone, laptop, and accessories at full speed. This 65W PD car charger plugs into your 12V socket and delivers fast charging through dual USB-C ports.</p><ul>\n<li>65W total output \u2014 dual",
        "image": "https://cdn.shopify.com/s/files/1/0804/7974/8314/files/9221756322010.png?v=1775888406",
        "sku": "9221756322010",
        "brand": {
          "@type": "Brand",
          "name": "BaoLab"
        },
        "offers": {
          "@type": "Offer",
          "price": "29.99",
          "priceCurrency": "AUD",
          "availability": "https://schema.org/InStock",
          "url": "https://shop.baolab.au/products/denza-65w-dual-usb-c-car-charger-pd-fast-charge"
        }
      }
    },
    {
      "@type": "ListItem",
      "position": 3,
      "item": {
        "@type": "Product",
        "name": "Activated Bamboo Charcoal Odour Absorber \u2014 500g",
        "description": "<p>New car smell gone wrong? This natural bamboo charcoal bag absorbs odours, moisture, and VOCs without any chemicals or fragrances. Recharge in sunlight monthly for continued effectiveness.</p><ul>\n",
        "image": "https://cdn.shopify.com/s/files/1/0804/7974/8314/files/9221757763802.png?v=1775888407",
        "sku": "9221757763802",
        "brand": {
          "@type": "Brand",
          "name": "BaoLab"
        },
        "offers": {
          "@type": "Offer",
          "price": "19.99",
          "priceCurrency": "AUD",
          "availability": "https://schema.org/InStock",
          "url": "https://shop.baolab.au/products/denza-activated-bamboo-charcoal-odour-absorber-500g"
        }
      }
    },
    {
      "@type": "ListItem",
      "position": 4,
      "item": {
        "@type": "Product",
        "name": "ADB Unlocking Service",
        "description": "<p><em>Unlock the full potential of your Denza B5 or B8's Android infotainment system!</em></p>\n<p>\u00a0</p>\n<p><strong>What's included:</strong></p>\n<ul>\n<li>Factory-level ADB access activation</li>\n<li>",
        "image": "https://cdn.shopify.com/s/files/1/0804/7974/8314/files/byd_denza_b8_2026-23.jpg?v=1779537465",
        "sku": "9267391430874",
        "brand": {
          "@type": "Brand",
          "name": "BaoLab"
        },
        "offers": {
          "@type": "Offer",
          "price": "99.00",
          "priceCurrency": "AUD",
          "availability": "https://schema.org/InStock",
          "url": "https://shop.baolab.au/products/adb-unlocking-service"
        }
      }
    },
    {
      "@type": "ListItem",
      "position": 5,
      "item": {
        "@type": "Product",
        "name": "Alloy Remote Key Case \u2014 Gunmetal",
        "description": "<p>Your Denza key fob is a premium piece of hardware \u2014 protect it like one. This zinc alloy key case wraps your remote in a sleek gunmetal shell with soft-touch silicone lining, guarding against drops",
        "image": "https://cdn.shopify.com/s/files/1/0804/7974/8314/files/9221746786522.png?v=1775888409",
        "sku": "9221746786522",
        "brand": {
          "@type": "Brand",
          "name": "BaoLab"
        },
        "offers": {
          "@type": "Offer",
          "price": "39.99",
          "priceCurrency": "AUD",
          "availability": "https://schema.org/InStock",
          "url": "https://shop.baolab.au/products/denza-alloy-remote-key-case-gunmetal"
        }
      }
    },
    {
      "@type": "ListItem",
      "position": 6,
      "item": {
        "@type": "Product",
        "name": "Alloy Tyre Valve Caps \u2014 Matte Black",
        "description": "<p>The smallest details set your Denza apart. These precision-machined aluminium valve caps replace the plain rubber originals with a knurled matte black finish and subtle Denza logo etched into each ",
        "image": "https://cdn.shopify.com/s/files/1/0804/7974/8314/files/9221746884826.png?v=1775888411",
        "sku": "9221746884826",
        "brand": {
          "@type": "Brand",
          "name": "BaoLab"
        },
        "offers": {
          "@type": "Offer",
          "price": "14.99",
          "priceCurrency": "AUD",
          "availability": "https://schema.org/InStock",
          "url": "https://shop.baolab.au/products/denza-alloy-tyre-valve-caps-matte-black"
        }
      }
    },
    {
      "@type": "ListItem",
      "position": 7,
      "item": {
        "@type": "Product",
        "name": "Aluminium Boot Load Plate",
        "description": "<p>Protect your B8's rear bumper from scratches and scuffs during loading and unloading. This brushed aluminium load plate sits flush at the cargo threshold, creating a durable barrier between your bu",
        "image": "https://cdn.shopify.com/s/files/1/0804/7974/8314/files/boot_plate_2.png?v=1778322436",
        "sku": "9218317353178",
        "brand": {
          "@type": "Brand",
          "name": "BaoLab"
        },
        "offers": {
          "@type": "Offer",
          "price": "79.00",
          "priceCurrency": "AUD",
          "availability": "https://schema.org/InStock",
          "url": "https://shop.baolab.au/products/aluminium-boot-load-plate-matte-black-1"
        }
      }
    },
    {
      "@type": "ListItem",
      "position": 8,
      "item": {
        "@type": "Product",
        "name": "B8 Centre Air Vent Clock",
        "description": "<p><em><span>Clip-On Digital Timepiece</span></em><span> </span></p>\n<p>\u00a0</p>\n<p><span>A clean, minimal clock that clips directly onto your B8's centre air vents \u2014 no adhesive, no tools, no permanent ",
        "image": "https://cdn.shopify.com/s/files/1/0804/7974/8314/files/ChatGPTImageMay9_2026_08_59_01PM.png?v=1778324385",
        "sku": "9250260484314",
        "brand": {
          "@type": "Brand",
          "name": "BaoLab"
        },
        "offers": {
          "@type": "Offer",
          "price": "24.99",
          "priceCurrency": "AUD",
          "availability": "https://schema.org/InStock",
          "url": "https://shop.baolab.au/products/b8-centre-air-vent-clock"
        }
      }
    },
    {
      "@type": "ListItem",
      "position": 9,
      "item": {
        "@type": "Product",
        "name": "B8 Silicone Cup Holder Insert",
        "description": "<p><em><span>Centre Console Cup Holder Liner</span></em><span> </span></p>\n<p>\u00a0</p>\n<p><span>Exact-fit silicone insert for your B8's cup holders \u2014 no rattle, no wobble, no drama. Designed to work with",
        "image": "https://cdn.shopify.com/s/files/1/0804/7974/8314/files/ChatGPTImageMay9_2026_08_41_47PM.png?v=1778323394",
        "sku": "9250255012058",
        "brand": {
          "@type": "Brand",
          "name": "BaoLab"
        },
        "offers": {
          "@type": "Offer",
          "price": "14.99",
          "priceCurrency": "AUD",
          "availability": "https://schema.org/InStock",
          "url": "https://shop.baolab.au/products/b8-silicone-cup-holder-insert"
        }
      }
    },
    {
      "@type": "ListItem",
      "position": 10,
      "item": {
        "@type": "Product",
        "name": "B8 Wireless Charger Silicone Pad",
        "description": "<p><em><span>Centre Console Charging Surface</span></em><span>\u00a0</span><em><span></span></em></p>\n<p><span>Your B8's wireless charger works hard \u2014 protect the surface it sits on. This silicone pad sits",
        "image": "https://cdn.shopify.com/s/files/1/0804/7974/8314/files/ChatGPT_Image_May_9_2026_08_48_02_PM.png?v=1778323695",
        "sku": "9248690405594",
        "brand": {
          "@type": "Brand",
          "name": "BaoLab"
        },
        "offers": {
          "@type": "Offer",
          "price": "39.99",
          "priceCurrency": "AUD",
          "availability": "https://schema.org/InStock",
          "url": "https://shop.baolab.au/products/silicone-pad-for-wireless-charger"
        }
      }
    },
    {
      "@type": "ListItem",
      "position": 11,
      "item": {
        "@type": "Product",
        "name": "Boot Cargo Organiser \u2014 Folding Storage Box",
        "description": "<p>Keep your boot organised without permanent fixtures. This folding cargo organiser collapses flat when not in use and pops up into a sturdy 3-compartment storage box for groceries, tools, and gear.<",
        "image": "https://cdn.shopify.com/s/files/1/0804/7974/8314/files/9221746950362.png?v=1775888412",
        "sku": "9221746950362",
        "brand": {
          "@type": "Brand",
          "name": "BaoLab"
        },
        "offers": {
          "@type": "Offer",
          "price": "34.99",
          "priceCurrency": "AUD",
          "availability": "https://schema.org/InStock",
          "url": "https://shop.baolab.au/products/denza-boot-cargo-organiser-folding-storage-box"
        }
      }
    },
    {
      "@type": "ListItem",
      "position": 12,
      "item": {
        "@type": "Product",
        "name": "Boot Folding Table Panel \u2014 Camping Kitchen",
        "description": "<p>Transform your tailgate into a functional workspace or outdoor dining surface. This fold-out desk mounts to the inside of the boot door and deploys into a sturdy flat platform \u2014 perfect for camping",
        "image": "https://cdn.shopify.com/s/files/1/0804/7974/8314/files/boot-door-fold-out-desk.png?v=1778412627",
        "sku": "9221756977370",
        "brand": {
          "@type": "Brand",
          "name": "BaoLab"
        },
        "offers": {
          "@type": "Offer",
          "price": "79.00",
          "priceCurrency": "AUD",
          "availability": "https://schema.org/InStock",
          "url": "https://shop.baolab.au/products/denza-boot-folding-table-panel-camping-kitchen"
        }
      }
    },
    {
      "@type": "ListItem",
      "position": 13,
      "item": {
        "@type": "Product",
        "name": "Boot Mat \u2014 Premium Fit",
        "description": "<p>Full-coverage cargo protection engineered for the Denza B8 6-seat configuration. This custom-moulded boot mat spans the entire boot floor and wraps up the rear seat backs, preserving the centre wal",
        "image": "https://cdn.shopify.com/s/files/1/0804/7974/8314/files/6s_boot_mat.png?v=1778384175",
        "sku": "9218317320410",
        "brand": {
          "@type": "Brand",
          "name": "BaoLab"
        },
        "offers": {
          "@type": "Offer",
          "price": "69.00",
          "priceCurrency": "AUD",
          "availability": "https://schema.org/InStock",
          "url": "https://shop.baolab.au/products/boot-mat-premium-fit-1"
        }
      }
    },
    {
      "@type": "ListItem",
      "position": 14,
      "item": {
        "@type": "Product",
        "name": "Cabin Sunshade Set",
        "description": "<p>Block the sun, protect your cabin. This 5-piece sunshade set covers every window on your Denza, using magnetic mounts for tool-free install and removal. Keeps your interior cooler and protects leat",
        "image": "https://cdn.shopify.com/s/files/1/0804/7974/8314/files/blue-2-e1726303089129-scaled_6d6e18c0-ab2d-4099-bb73-dea422efc778.png?v=1775543041",
        "sku": "9218317615322",
        "brand": {
          "@type": "Brand",
          "name": "BaoLab"
        },
        "offers": {
          "@type": "Offer",
          "price": "35.00",
          "priceCurrency": "AUD",
          "availability": "https://schema.org/InStock",
          "url": "https://shop.baolab.au/products/cabin-sunshade-set-1"
        }
      }
    },
    {
      "@type": "ListItem",
      "position": 15,
      "item": {
        "@type": "Product",
        "name": "Car Fridge Divider Organiser \u2014 Custom Fit",
        "description": "<p>Make the most of your Denza's built-in fridge with this custom-fit divider tray. Separates drinks, snacks, and small items so nothing rolls around or gets crushed on the road.</p><ul>\n<li>Custom-fi",
        "image": "https://cdn.shopify.com/s/files/1/0804/7974/8314/files/9221755994330.png?v=1775888415",
        "sku": "9221755994330",
        "brand": {
          "@type": "Brand",
          "name": "BaoLab"
        },
        "offers": {
          "@type": "Offer",
          "price": "24.99",
          "priceCurrency": "AUD",
          "availability": "https://schema.org/InStock",
          "url": "https://shop.baolab.au/products/denza-car-fridge-divider-organiser-custom-fit"
        }
      }
    },
    {
      "@type": "ListItem",
      "position": 16,
      "item": {
        "@type": "Product",
        "name": "Centre Screen Tempered Glass Protector \u2014 9H",
        "description": "<p>Your infotainment screen takes a beating from fingerprints, scratches, and UV. This 9H tempered glass protector shields it without affecting touch sensitivity or clarity.</p><ul>\n<li>9H hardness te",
        "image": "https://cdn.shopify.com/s/files/1/0804/7974/8314/files/9221756125402.png?v=1775888417",
        "sku": "9221756125402",
        "brand": {
          "@type": "Brand",
          "name": "BaoLab"
        },
        "offers": {
          "@type": "Offer",
          "price": "19.99",
          "priceCurrency": "AUD",
          "availability": "https://schema.org/InStock",
          "url": "https://shop.baolab.au/products/denza-centre-screen-tempered-glass-protector-9h"
        }
      }
    },
    {
      "@type": "ListItem",
      "position": 17,
      "item": {
        "@type": "Product",
        "name": "Centre Screen Tempered Glass Protector \u2014 9H",
        "description": "<p><em><span><strong>FREE REPLACEMENT GUARANTEE - BAOLAB will send you a FREE replacement pack if anything goes wrong during your application!\u00a0</strong></span></em></p>\n<p>\u00a0</p>\n<p><span>Keep your B8'",
        "image": "https://cdn.shopify.com/s/files/1/0804/7974/8314/files/ChatGPTImageMay9_2026_08_53_04PM.png?v=1778324009",
        "sku": "9226693607642",
        "brand": {
          "@type": "Brand",
          "name": "BaoLab"
        },
        "offers": {
          "@type": "Offer",
          "price": "14.99",
          "priceCurrency": "AUD",
          "availability": "https://schema.org/InStock",
          "url": "https://shop.baolab.au/products/centre-screen-tempered-glass-protector-9h"
        }
      }
    },
    {
      "@type": "ListItem",
      "position": 18,
      "item": {
        "@type": "Product",
        "name": "Denza B8 RGB Crystal Gear Shifter",
        "description": "<p>Replace your factory shifter with something that actually turns heads. The RGB Crystal Gear Shifter features a transparent housing with a tech-inspired circuit-board light pattern that cycles throu",
        "image": "https://cdn.shopify.com/s/files/1/0804/7974/8314/files/crystal_gear_shifter.png?v=1778384226",
        "sku": "9250513682650",
        "brand": {
          "@type": "Brand",
          "name": "BaoLab"
        },
        "offers": {
          "@type": "Offer",
          "price": "89.00",
          "priceCurrency": "AUD",
          "availability": "https://schema.org/InStock",
          "url": "https://shop.baolab.au/products/denza-b8-rgb-crystal-gear-shifter"
        }
      }
    },
    {
      "@type": "ListItem",
      "position": 19,
      "item": {
        "@type": "Product",
        "name": "Door Sill Protector \u2014 Stainless Steel",
        "description": "<p>Every entry and exit leaves a mark on your door sills. These brushed stainless steel protectors guard against scuffs and scratches, with a laser-etched Denza logo that catches the light.</p>\n<p><st",
        "image": "https://cdn.shopify.com/s/files/1/0804/7974/8314/files/9221746983130.png?v=1775888419",
        "sku": "9221746983130",
        "brand": {
          "@type": "Brand",
          "name": "BaoLab"
        },
        "offers": {
          "@type": "Offer",
          "price": "49.99",
          "priceCurrency": "AUD",
          "availability": "https://schema.org/InStock",
          "url": "https://shop.baolab.au/products/denza-door-sill-protector-stainless-steel"
        }
      }
    },
    {
      "@type": "ListItem",
      "position": 20,
      "item": {
        "@type": "Product",
        "name": "Heavy-Duty Tow Hook + Recovery Strap Kit",
        "description": "<p>Be prepared for anything. This front tow hook and recovery strap kit gives you hard recovery points and a rated strap for getting unstuck \u2014 essential for any off-road adventure.</p><ul>\n<li>Forged ",
        "image": "https://cdn.shopify.com/s/files/1/0804/7974/8314/files/9221756780762.png?v=1775888420",
        "sku": "9221756780762",
        "brand": {
          "@type": "Brand",
          "name": "BaoLab"
        },
        "offers": {
          "@type": "Offer",
          "price": "89.00",
          "priceCurrency": "AUD",
          "availability": "https://schema.org/InStock",
          "url": "https://shop.baolab.au/products/denza-heavy-duty-tow-hook-recovery-strap-kit"
        }
      }
    },
    {
      "@type": "ListItem",
      "position": 21,
      "item": {
        "@type": "Product",
        "name": "In-Cabin 220V AC Socket",
        "description": "<p>Turn your Denza's cabin into a mobile office. This 220V AC socket installs flush into the centre console and gives you real wall-socket power for laptops, appliances, and gear \u2014 no more hunting for",
        "image": "https://cdn.shopify.com/s/files/1/0804/7974/8314/files/blue-2-e1726303089129-scaled_2858b6f9-2338-4efa-a8d3-bbc2c06b31b2.png?v=1775543033",
        "sku": "9218317549786",
        "brand": {
          "@type": "Brand",
          "name": "BaoLab"
        },
        "offers": {
          "@type": "Offer",
          "price": "589.00",
          "priceCurrency": "AUD",
          "availability": "https://schema.org/InStock",
          "url": "https://shop.baolab.au/products/in-cabin-220v-ac-socket-1"
        }
      }
    },
    {
      "@type": "ListItem",
      "position": 22,
      "item": {
        "@type": "Product",
        "name": "Magnetic Phone Mount \u2014 Vent Clip",
        "description": "<p>One-hand phone mounting that actually works. Strong N52 magnets snap your phone into place instantly, and the vent clip keeps it at eye level without blocking your screen.</p><ul>\n<li>N52 neodymium",
        "image": "https://cdn.shopify.com/s/files/1/0804/7974/8314/files/9221756223706.png?v=1775888422",
        "sku": "9221756223706",
        "brand": {
          "@type": "Brand",
          "name": "BaoLab"
        },
        "offers": {
          "@type": "Offer",
          "price": "24.99",
          "priceCurrency": "AUD",
          "availability": "https://schema.org/InStock",
          "url": "https://shop.baolab.au/products/denza-magnetic-phone-mount-vent-clip"
        }
      }
    },
    {
      "@type": "ListItem",
      "position": 23,
      "item": {
        "@type": "Product",
        "name": "Memory Foam Lumbar Support Pillow",
        "description": "<p>Long drives shouldn't wreck your back. This ergonomic memory foam lumbar pillow straps to your seat and provides firm lower back support \u2014 stays in place even on rough roads.</p><ul>\n<li>High-densi",
        "image": "https://cdn.shopify.com/s/files/1/0804/7974/8314/files/9221757468890.png?v=1775888424",
        "sku": "9221757468890",
        "brand": {
          "@type": "Brand",
          "name": "BaoLab"
        },
        "offers": {
          "@type": "Offer",
          "price": "29.99",
          "priceCurrency": "AUD",
          "availability": "https://schema.org/InStock",
          "url": "https://shop.baolab.au/products/denza-memory-foam-lumbar-support-pillow"
        }
      }
    },
    {
      "@type": "ListItem",
      "position": 24,
      "item": {
        "@type": "Product",
        "name": "Mud Flaps \u2014 Heavy Duty Splash Guards",
        "description": "<p>Keep mud, rocks, and road spray off your body panels and paint. These heavy-duty mud flaps are custom-moulded to your Denza's wheel arches and install in minutes.</p><ul>\n<li>Custom-moulded TPE mat",
        "image": "https://cdn.shopify.com/s/files/1/0804/7974/8314/files/9221756485850.png?v=1775888425",
        "sku": "9221756485850",
        "brand": {
          "@type": "Brand",
          "name": "BaoLab"
        },
        "offers": {
          "@type": "Offer",
          "price": "39.99",
          "priceCurrency": "AUD",
          "availability": "https://schema.org/InStock",
          "url": "https://shop.baolab.au/products/denza-mud-flaps-heavy-duty-splash-guards"
        }
      }
    },
    {
      "@type": "ListItem",
      "position": 25,
      "item": {
        "@type": "Product",
        "name": "OEM Dashcam",
        "description": "<p>Factory-quality dashcam integration for your Denza. OEM-spec fit with no dangling wires \u2014 mounts behind the rear-view mirror and connects directly to the vehicle's power supply for seamless, always",
        "image": "https://cdn.shopify.com/s/files/1/0804/7974/8314/files/baolab_logo_v3_glowing_bigger.png?v=1776426191",
        "sku": "9147280949466",
        "brand": {
          "@type": "Brand",
          "name": "BaoLab"
        },
        "offers": {
          "@type": "Offer",
          "price": "169.00",
          "priceCurrency": "AUD",
          "availability": "https://schema.org/InStock",
          "url": "https://shop.baolab.au/products/denza-oem-dashcam"
        }
      }
    },
    {
      "@type": "ListItem",
      "position": 26,
      "item": {
        "@type": "Product",
        "name": "Pillar-Mounted Side Storage Bag",
        "description": "<p>Utilise the dead space on your Denza's C/D-pillars. These side storage bags mount to the pillar glass and give you quick-access storage for sunglasses, phones, toll tags, and other essentials that ",
        "image": "https://cdn.shopify.com/s/files/1/0804/7974/8314/files/blue-2-e1726303089129-scaled_6dc44423-aa12-4022-b59a-7a4fac911952.png?v=1775543028",
        "sku": "9218317517018",
        "brand": {
          "@type": "Brand",
          "name": "BaoLab"
        },
        "offers": {
          "@type": "Offer",
          "price": "39.00",
          "priceCurrency": "AUD",
          "availability": "https://schema.org/InStock",
          "url": "https://shop.baolab.au/products/pillar-mounted-side-storage-bag-1"
        }
      }
    },
    {
      "@type": "ListItem",
      "position": 27,
      "item": {
        "@type": "Product",
        "name": "Portable Digital Tyre Inflator \u2014 150PSI",
        "description": "<p>Never be stuck with a flat. This compact digital inflator plugs into your 12V socket and fills a tyre from 0 to 35 PSI in under 5 minutes. Preset pressure, auto shut-off, LED light included.</p><ul",
        "image": "https://cdn.shopify.com/s/files/1/0804/7974/8314/files/9221757567194.png?v=1775888427",
        "sku": "9221757567194",
        "brand": {
          "@type": "Brand",
          "name": "BaoLab"
        },
        "offers": {
          "@type": "Offer",
          "price": "44.99",
          "priceCurrency": "AUD",
          "availability": "https://schema.org/InStock",
          "url": "https://shop.baolab.au/products/denza-portable-digital-tyre-inflator-150psi"
        }
      }
    },
    {
      "@type": "ListItem",
      "position": 28,
      "item": {
        "@type": "Product",
        "name": "Premium Floor Mats",
        "description": "<p>The first thing your passengers notice. Premium custom-fit floor mats with dual-layer construction \u2014 a soft textured upper surface paired with a durable, wipe-clean underlayer. High-edge sidewalls ",
        "image": "https://cdn.shopify.com/s/files/1/0804/7974/8314/files/floormat.png?v=1778384183",
        "sku": "9218317287642",
        "brand": {
          "@type": "Brand",
          "name": "BaoLab"
        },
        "offers": {
          "@type": "Offer",
          "price": "79.00",
          "priceCurrency": "AUD",
          "availability": "https://schema.org/InStock",
          "url": "https://shop.baolab.au/products/premium-floor-mats-1"
        }
      }
    },
    {
      "@type": "ListItem",
      "position": 29,
      "item": {
        "@type": "Product",
        "name": "Premium Leather Steering Wheel Cover",
        "description": "<p>Upgrade the grip and feel of your steering wheel. This hand-stitched leather cover adds thickness, texture, and a premium look \u2014 takes about 20 minutes to install with the included needle and threa",
        "image": "https://cdn.shopify.com/s/files/1/0804/7974/8314/files/9221757305050.png?v=1775888429",
        "sku": "9221757305050",
        "brand": {
          "@type": "Brand",
          "name": "BaoLab"
        },
        "offers": {
          "@type": "Offer",
          "price": "34.99",
          "priceCurrency": "AUD",
          "availability": "https://schema.org/InStock",
          "url": "https://shop.baolab.au/products/denza-premium-leather-steering-wheel-cover"
        }
      }
    },
    {
      "@type": "ListItem",
      "position": 30,
      "item": {
        "@type": "Product",
        "name": "Rear Seat Bed Conversion Kit \u2014 Flat Sleeping Platform",
        "description": "<p>Turn your Denza into a flat sleeping surface in minutes. This inflatable mattress fills the gap between the folded rear seats and the boot, creating a perfectly flat bed for road trips and camping.",
        "image": "https://cdn.shopify.com/s/files/1/0804/7974/8314/files/9221757075674.png?v=1775888434",
        "sku": "9221757075674",
        "brand": {
          "@type": "Brand",
          "name": "BaoLab"
        },
        "offers": {
          "@type": "Offer",
          "price": "99.00",
          "priceCurrency": "AUD",
          "availability": "https://schema.org/InStock",
          "url": "https://shop.baolab.au/products/denza-rear-seat-bed-conversion-kit-flat-sleeping-platform"
        }
      }
    },
    {
      "@type": "ListItem",
      "position": 31,
      "item": {
        "@type": "Product",
        "name": "Retractable Side Shade \u2013 UV Protection",
        "description": "<p>Instant shade for your passengers. This retractable side shade pulls down over the rear windows and blocks harsh sun and UV rays \u2014 no suction cups, no clips, just smooth retractable action.</p>\n<p>",
        "image": "https://cdn.shopify.com/s/files/1/0804/7974/8314/files/blue-2-e1726303089129-scaled_765bb518-cabf-4cd1-9c6a-59ece5dd954e.png?v=1775543022",
        "sku": "9218317451482",
        "brand": {
          "@type": "Brand",
          "name": "BaoLab"
        },
        "offers": {
          "@type": "Offer",
          "price": "49.00",
          "priceCurrency": "AUD",
          "availability": "https://schema.org/InStock",
          "url": "https://shop.baolab.au/products/retractable-side-shade-uv-protection-1"
        }
      }
    },
    {
      "@type": "ListItem",
      "position": 32,
      "item": {
        "@type": "Product",
        "name": "Rotational Roof Ladder",
        "description": "<p>Access your roof platform and storage without the struggle. This rotational roof ladder mounts to the rear of your Denza and swings out for easy loading and unloading of roof-mounted gear. Folds fl",
        "image": "https://cdn.shopify.com/s/files/1/0804/7974/8314/files/blue-2-e1726303089129-scaled_66ce7e61-72aa-44a5-b1b6-fe470e95812d.png?v=1775543025",
        "sku": "9218317484250",
        "brand": {
          "@type": "Brand",
          "name": "BaoLab"
        },
        "offers": {
          "@type": "Offer",
          "price": "129.00",
          "priceCurrency": "AUD",
          "availability": "https://schema.org/InStock",
          "url": "https://shop.baolab.au/products/rotational-roof-ladder-1"
        }
      }
    },
    {
      "@type": "ListItem",
      "position": 33,
      "item": {
        "@type": "Product",
        "name": "Side Awning \u2014 2.5m Retractable Shade",
        "description": "<p>Instant shade wherever you park. This 2.5-metre retractable awning mounts to your roof platform and unfolds in seconds to create a sheltered area for camping, tailgating, or roadside stops.</p><ul>",
        "image": "https://cdn.shopify.com/s/files/1/0804/7974/8314/files/9221756682458.png?v=1775888436",
        "sku": "9221756682458",
        "brand": {
          "@type": "Brand",
          "name": "BaoLab"
        },
        "offers": {
          "@type": "Offer",
          "price": "299.00",
          "priceCurrency": "AUD",
          "availability": "https://schema.org/InStock",
          "url": "https://shop.baolab.au/products/denza-side-awning-2-5m-retractable-shade"
        }
      }
    },
    {
      "@type": "ListItem",
      "position": 34,
      "item": {
        "@type": "Product",
        "name": "Underbody Protection Plate \u2014 8mm Aluminium",
        "description": "<p>Protect your undercarriage from rocks, stumps, and rough terrain. This 8mm aluminium-magnesium alloy skid plate bolts to the chassis and guards your vital components.</p><ul>\n<li>8mm aluminium-magn",
        "image": "https://cdn.shopify.com/s/files/1/0804/7974/8314/files/9221756551386.png?v=1775888437",
        "sku": "9221756551386",
        "brand": {
          "@type": "Brand",
          "name": "BaoLab"
        },
        "offers": {
          "@type": "Offer",
          "price": "189.00",
          "priceCurrency": "AUD",
          "availability": "https://schema.org/InStock",
          "url": "https://shop.baolab.au/products/denza-underbody-protection-plate-8mm-aluminium"
        }
      }
    }
  ]
),
          }}
        />

        {/* ── Liquid glass SVG filter definitions ── */}
        <svg
          style={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden' }}
          aria-hidden="true"
          focusable="false"
        >
          <defs>
            <filter
              id="liquid-refract"
              x="-15%" y="-15%"
              width="130%" height="130%"
              colorInterpolationFilters="sRGB"
            >
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.012 0.022"
                numOctaves="3"
                seed="7"
                result="noise"
              />
              <feColorMatrix
                type="matrix"
                values="3 0 0 0 -1
                        0 3 0 0 -1
                        0 0 3 0 -1
                        0 0 0 1 0"
                in="noise"
                result="sharpNoise"
              />
              <feDisplacementMap
                in="SourceGraphic"
                in2="sharpNoise"
                scale="9"
                xChannelSelector="R"
                yChannelSelector="G"
                result="displaced"
              />
              <feGaussianBlur in="displaced" stdDeviation="0.5" result="soft" />
              <feComposite in="soft" in2="SourceGraphic" operator="in" />
            </filter>

            <filter
              id="glass-specular"
              x="-10%" y="-10%"
              width="120%" height="120%"
              colorInterpolationFilters="sRGB"
            >
              <feGaussianBlur stdDeviation="1.2" result="glow" />
              <feComposite in="glow" in2="SourceGraphic" operator="over" />
            </filter>

            {/*
              nav-glass: DRAMATIC backdrop refraction for the navbar only.
              Applied via backdrop-filter (Chromium-only) so it warps the actual
              page content scrolling BEHIND the fixed navbar. The filter region is
              deliberately oversized (y/height) so displaced pixels near the short
              bar's edges still have backdrop to sample — otherwise the warp goes
              transparent at the edges. `scale` is the drama knob.
            */}
            <filter
              id="nav-glass"
              x="-40%" y="-150%"
              width="180%" height="400%"
              colorInterpolationFilters="sRGB"
            >
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.009 0.016"
                numOctaves="2"
                seed="11"
                result="noise"
              />
              <feGaussianBlur in="noise" stdDeviation="1.1" result="smooth" />
              {/*
                EDGE-CRACK FIX: backdrop-filter only captures the element's own
                box as backdrop. On a 56px-tall bar, large VERTICAL displacement
                samples below the bar where no backdrop exists -> transparent
                cracks at the bottom edge. So we flatten the green (vertical)
                channel toward neutral 0.5 — G_out = 0.12*G_in + 0.44 — leaving
                max ~2.7px of vertical shift. The red (horizontal) channel stays
                at full scale 45: the bar is ~1000px wide, so 22px of horizontal
                sampling stays safely inside the captured backdrop. Result: full
                dramatic horizontal refraction, no edge cracks.
                Knob: to eliminate vertical entirely, set row 2 to "0 0 0 0 0.5".
              */}
              <feColorMatrix
                in="smooth"
                type="matrix"
                values="1 0    0 0 0
                        0 0.12 0 0 0.44
                        0 0    1 0 0
                        0 0    0 1 0"
                result="dispMap"
              />
              <feDisplacementMap
                in="SourceGraphic"
                in2="dispMap"
                scale="45"
                xChannelSelector="R"
                yChannelSelector="G"
              />
            </filter>
          </defs>
        </svg>

        {/*
          CRITICAL: filter references MUST live in an inline <style> in the
          document — NOT in globals.css. From an external stylesheet, `url(#id)`
          resolves against the stylesheet's URL and the filter is never found, so
          it silently does nothing. Inline here, it resolves against this
          document where the <svg> filters live. Do not move into globals.css.
        */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
              /* DRAMATIC backdrop refraction — navbar only, Chromium only.
                 Warps the real page content scrolling behind the fixed nav.
                 .lg-displace is added to <html> by Cursor.tsx when the browser
                 supports it; Safari/Firefox keep the plain blur fallback in
                 globals.css so nothing breaks. */
              html.lg-displace .header {
                backdrop-filter: url(#nav-glass) blur(5px) saturate(1.7);
                -webkit-backdrop-filter: url(#nav-glass) blur(5px) saturate(1.7);
              }
              html.lg-displace .header-scrolled {
                backdrop-filter: url(#nav-glass) blur(2px) saturate(1.4);
                -webkit-backdrop-filter: url(#nav-glass) blur(2px) saturate(1.4);
              }

              /* navbar cursor spotlight stays a CLEAN radial glow (no
                 displacement) — displacing the bright overlay made the edge
                 cracking more visible. The 40% white radial gradient lives in
                 globals.css and is unaffected. */

              /* button specular rim */
              .btn-primary::after,
              .btn-ghost::after { filter: url(#glass-specular); }
            `,
          }}
        />

        <Cursor />
        <Header />

        <main>{children}</main>

        <footer className="footer">
          <div className="container footer-inner">
            <div className="footer-brand">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/baolab-logo.png" alt="BAOLAB" className="footer-logo-img" />
              <p className="footer-desc">
                Premium accessories designed for Denza owners across Australia.
              </p>
            </div>

            <div className="footer-disclaimer">
              <p>
                Baolab is an independent aftermarket accessories retailer and is
                not affiliated with, endorsed by, or associated with Denza, BYD,
                or any of their subsidiaries. All trademarks and vehicle names
                are the property of their respective owners and are used for
                compatibility reference only.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

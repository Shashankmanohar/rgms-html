// Product Catalog Data (INR Pricing)
const PRODUCTS = [
  {
    id: "bullet-cctv-pro",
    name: "CP Plus Guard+ 4K Bullet",
    category: "Bullet CCTV",
    price: 24999.00,
    rating: 4.9,
    reviews: 2487,
    image: "assets/images/bullet_cctv_camera.png",
    tag: "Best Seller",
    description: "The ultimate outdoor deterrent by CP Plus. Powered by advanced AI human recognition, full-color night vision up to 40m, and active strobe siren alarm capabilities. Constructed with aerospace-grade aluminum casing to withstand extreme weather conditions.",
    features: [
      "True 4K Ultra HD Resolution @ 30fps",
      "Next-Gen AI Face & Vehicle Detection",
      "Starlight™ Full-Color Night Vision",
      "Active Deterrence Strobe & 110dB Siren",
      "IP67 Weatherproof & IK10 Vandal-Proof"
    ],
    aiFeatures: [
      "Face Recognition (Match against database of 10,000)",
      "Intrusion Zones (Draw virtual lines for strobe/siren trigger)",
      "Vehicle Plate Reading (Recognizes transport trucks up to 25mph)",
      "Loitering Alert (Sends ping if subject remains in target zone > 60s)"
    ],
    specs: {
      "Warranty": "3 Years Manufacturer Warranty",
      "Sensor": "1/1.8\" Progressive Scan CMOS",
      "Resolution": "8MP 4K Ultra HD (3840 x 2160)",
      "Field of View": "108° Horizontal, 56° Vertical",
      "Connectivity": "PoE (Power over Ethernet) / RJ45",
      "Storage": "MicroSD Slot up to 512GB & NVR Support",
      "Audio": "Two-Way Audio with Noise Cancellation"
    },
    downloads: [
      { name: "Technical Datasheet v3.2 (PDF)", size: "2.8 MB" },
      { name: "Field Installation Diagram (PDF)", size: "1.4 MB" },
      { name: "API Integration Manual (PDF)", size: "4.2 MB" }
    ],
    accessories: [
      { id: "acc-poe", name: "RGMS Gigabit 8-Port PoE Switch", price: 4999.00, image: "assets/images/gps_tracker.png" },
      { id: "acc-mount", name: "Premium Pole Mount Bracket", price: 1899.00, image: "assets/images/bullet_cctv_camera.png" },
      { id: "acc-sd", name: "Sandisk Industrial 256GB MicroSD", price: 2999.00, image: "assets/images/smart_door_lock.png" }
    ],
    has360: true
  },
  {
    id: "dome-cctv-sentinel",
    name: "CP Plus Astra HD Dome",
    category: "Dome CCTV",
    price: 19999.00,
    rating: 4.8,
    reviews: 1845,
    image: "assets/images/dome_cctv_camera.png",
    tag: "Top Rated",
    description: "Sleek and discreet electronic dome camera by CP Plus featuring high-efficiency H.265+ video coding. Offers 180-degree panoramic coverage with absolute clarity. Ideal for high-end corporate entryways, luxury residential spaces, and premium retail environments.",
    features: [
      "Dual-Lens 180° Panoramic Stitching",
      "AI Crowd Density & Heatmapping",
      "Advanced Audio Analytics (Glass Break/Screams)",
      "Vandal-Resistant IK10 Bubble Casing",
      "Invisible IR LEDs up to 30m"
    ],
    aiFeatures: [
      "People Counting (Live queue and traffic counters)",
      "Heatmapping (Visually check crowded hot-zones)",
      "Audio Analytics (Detect glass breaking, high decibel screams)",
      "Tamper Detection (Alerts when lens cover is spray-painted or blocked)"
    ],
    specs: {
      "Warranty": "3 Years Manufacturer Warranty",
      "Sensor": "Dual 1/2.5\" CMOS Sensors",
      "Resolution": "8MP Panoramic (5120 x 1440)",
      "Field of View": "180° Horizontal, 80° Vertical",
      "Connectivity": "PoE & Power Adapter (12V DC)",
      "Storage": "MicroSD Slot up to 256GB & NVR Support",
      "Dimensions": "122mm x 122mm x 89mm"
    },
    downloads: [
      { name: "Technical Datasheet v2.1 (PDF)", size: "2.1 MB" },
      { name: "Discreet Ceiling Cutout Guide (PDF)", size: "1.1 MB" }
    ],
    accessories: [
      { id: "acc-poe", name: "RGMS Gigabit 8-Port PoE Switch", price: 4999.00, image: "assets/images/gps_tracker.png" },
      { id: "acc-dome-wall", name: "L-Shaped Dome Wall Mount Bracket", price: 1499.00, image: "assets/images/dome_cctv_camera.png" }
    ],
    has360: true
  },
  {
    id: "ptz-horizon-360",
    name: "Trueview Multi-Lens 360° PTZ",
    category: "PTZ",
    price: 39999.00,
    rating: 4.9,
    reviews: 942,
    image: "assets/images/dome_cctv_camera.png",
    tag: "Pro Security",
    description: "Engineered by Trueview for comprehensive wide-area surveillance. Features dual lenses, 360° endless pan, and automated tracking to follow targets moving through yards. Includes powerful 25x optical zoom for absolute zoom-in clarity.",
    features: [
      "360° Endless Pan / 90° Tilt range",
      "Powerful 25x Optical Zoom, 16x Digital Zoom",
      "Auto-Tracking 2.0 (Target Classification)",
      "Laser IR Illumination up to 150m",
      "Smart Cruise & Presets Scheduler"
    ],
    aiFeatures: [
      "Auto-Tracking 2.0 (Follows target, zooms automatically)",
      "Smart Patrol (Runs 24/7 cruise tours across 16 custom points)",
      "Speed Dome Control (High precision gears rotate at 240°/sec)",
      "Active Fog Correction (Enhances clarity in heavy mist/smoke)"
    ],
    specs: {
      "Warranty": "2 Years Manufacturer Warranty",
      "Sensor": "1/2.8\" STARVIS™ CMOS",
      "Resolution": "4MP Super HD (2560 x 1440)",
      "Field of View": "62.8° (Wide) to 2.8° (Tele)",
      "Connectivity": "PoE+ (802.3at) / 24V AC",
      "Storage": "MicroSD Slot up to 512GB & NVR Support",
      "Mounting": "Wall Mount Bracket Included"
    },
    downloads: [
      { name: "Horizon PTZ Catalog (PDF)", size: "4.5 MB" },
      { name: "Pole & Wall Mounting Template (PDF)", size: "1.9 MB" }
    ],
    accessories: [
      { id: "acc-poe-plus", name: "High-Power PoE+ Injector 60W", price: 3999.00, image: "assets/images/gps_tracker.png" },
      { id: "acc-corner", name: "Brutal corner-mount Adapter Plate", price: 2499.00, image: "assets/images/bullet_cctv_camera.png" }
    ],
    has360: false
  },
  {
    id: "wifi-orbit-smart",
    name: "Maizic Orbit Smart Wi-Fi",
    category: "Bullet CCTV",
    price: 9999.00,
    rating: 4.7,
    reviews: 732,
    image: "assets/images/bullet_cctv_camera.png",
    tag: "Smart Home",
    description: "Plug-and-play security by Maizic. Connects to 2.4/5GHz Wi-Fi, offering human detection, smart tracking, and virtual activity zones with easy DIY setup. Control everything remotely from the dedicated mobile app.",
    features: [
      "Crisp 2K (4MP) Quad HD Resolution",
      "Dual-Band WiFi (2.4GHz & 5GHz) Connection",
      "Smart Human & Pet Detection",
      "Magnetic base with 360° pivot mount",
      "Google Assistant & Alexa Voice Control"
    ],
    aiFeatures: [
      "Pet Detection (Filter dog/cat movements from alerts)",
      "Human Detection (Ignores leaves/wind flags)",
      "Activity Zones (Selectively monitor high priority doors)"
    ],
    specs: {
      "Warranty": "1 Year Manufacturer Warranty",
      "Sensor": "1/3\" Progressive Scan CMOS",
      "Resolution": "4MP (2560 x 1440)",
      "Field of View": "98° Horizontal, 50° Vertical",
      "Connectivity": "Wi-Fi Dual Band & USB Type-C",
      "Storage": "Supports up to 256GB MicroSD",
      "Power Source": "USB Type-C (5V, 2A)"
    },
    downloads: [
      { name: "User Instruction manual (PDF)", size: "1.8 MB" },
      { name: "Smart Connection Troubleshooting Guide (PDF)", size: "0.9 MB" }
    ],
    accessories: [
      { id: "acc-sd-128", name: "Sandisk Ultra 128GB MicroSD", price: 1499.00, image: "assets/images/smart_door_lock.png" },
      { id: "acc-cable", name: "Premium Flat 5m USB-C Power Cord", price: 599.00, image: "assets/images/gps_tracker.png" }
    ],
    has360: false
  },
  {
    id: "ip-sentinel-core",
    name: "CP Plus Intelli-Sense Dome",
    category: "Dome CCTV",
    price: 14999.00,
    rating: 4.6,
    reviews: 642,
    image: "assets/images/dome_cctv_camera.png",
    tag: "Core Value",
    description: "The workhorse of commercial security systems by CP Plus. This solid IP camera integrates seamlessly into standard network recording setups, offering 5MP video quality, low-bandwidth H.265+ compression, and night vision.",
    features: [
      "5MP High Definition Resolution @ 20fps",
      "H.265+ High Efficiency Video Coding",
      "True WDR (120dB) for high-contrast scenes",
      "Built-in microphone for synchronized audio",
      "Compact ceiling/wall mountable layout"
    ],
    aiFeatures: [
      "Line Crossing (Alarms when entry thresholds are crossed)",
      "Intrusion Area (Guards critical lobby counters)",
      "Object Abandonment (Detects left-behind baggage)"
    ],
    specs: {
      "Warranty": "3 Years Manufacturer Warranty",
      "Sensor": "1/2.7\" Progressive Scan CMOS",
      "Resolution": "5MP (2592 x 1944)",
      "Field of View": "95° Horizontal, 48° Vertical",
      "Connectivity": "PoE (802.3af, Class 3)",
      "Storage": "NVR System storage & MicroSD slot (256GB)",
      "IR Distance": "Up to 30m Smart IR"
    },
    downloads: [
      { name: "Datasheet IP Sentinel Core (PDF)", size: "1.6 MB" },
      { name: "Lobby Bracket Mounting Template (PDF)", size: "0.8 MB" }
    ],
    accessories: [
      { id: "acc-poe", name: "RGMS Gigabit 8-Port PoE Switch", price: 4999.00, image: "assets/images/gps_tracker.png" }
    ],
    has360: false
  },
  {
    id: "gps-tracker-pathfinder",
    name: "CP Plus Fleet Track GPS",
    category: "GPS",
    price: 6999.00,
    rating: 4.8,
    reviews: 1432,
    image: "assets/images/gps_tracker.png",
    tag: "Best Value",
    description: "Locate anything instantly with CP Plus tracking nodes. This highly compact, dust-proof GPS tracker can be placed in bags, vehicle compartments, or cargo containers. Provides real-time satellite updates and geofencing smart alerts directly on your mobile device.",
    features: [
      "Real-time GPS Tracking with 5-Second Updates",
      "Up to 30 Days Rechargeable Battery Life",
      "Precision Geofencing & Departure Alerts",
      "Ultra-compact Magnetic Mount Design",
      "SOS Panic Button & Audio Monitoring"
    ],
    aiFeatures: [
      "Real-Time Telemetry (Ping tracking location every 5 seconds)",
      "Geo-fence Alerts (Draw boundary limits for exit/entry alarms)",
      "Low Battery Alert (Predictive telemetry warns at 15%)"
    ],
    specs: {
      "Warranty": "1 Year Manufacturer Warranty",
      "Battery": "5000mAh Lithium-Polymer",
      "Accuracy": "Within 5 meters globally",
      "Network": "4G LTE SIM Pre-installed",
      "Weight": "120g",
      "App Control": "iOS, Android, and Web Browser Dashboard"
    },
    downloads: [
      { name: "Pathfinder User Guide (PDF)", size: "2.3 MB" },
      { name: "Mobile App Connection Setup (PDF)", size: "1.1 MB" }
    ],
    accessories: [
      { id: "acc-case", name: "Waterproof Magnetic Rugged Hard Case", price: 1499.00, image: "assets/images/gps_tracker.png" },
      { id: "acc-charger", name: "Premium Fast Charging USB Adapter", price: 899.00, image: "assets/images/smart_door_lock.png" }
    ],
    has360: true
  },
  {
    id: "gps-vehicle-fleet",
    name: "Trueview OBD Fleet GPS",
    category: "GPS",
    price: 8999.00,
    rating: 4.9,
    reviews: 1251,
    image: "assets/images/gps_tracker.png",
    tag: "Fleet Pro",
    description: "Plug-and-play fleet monitoring by Trueview. Connects directly to any vehicle OBD-II diagnostic port. Monitors location, fuel economy, driver behavior, speeds, and active engine diagnostics for commercial logistics operators.",
    features: [
      "Instant OBD-II Port Plugin (No wiring needed)",
      "Real-time Engine Diagnostics & Fault Codes",
      "Driver Behavior Analysis (Harsh Braking/Accels)",
      "Automated Mileage & Tax Reporting logs",
      "Anti-tamper Alerts & Power Disconnect warnings"
    ],
    aiFeatures: [
      "Driver Behavior AI (Identifies sudden accelerations and harsh braking)",
      "Crash Detection System (Instantly alerts dispatch on impact)",
      "Anti-Tamper Protocol (Sends satellite warning if unplugged from port)"
    ],
    specs: {
      "Warranty": "2 Years Manufacturer Warranty",
      "Interface": "Standard OBD-II 16-pin connector",
      "Power": "Vehicle Battery Powered (12V/24V input)",
      "Backup Battery": "110mAh Internal battery for alerts",
      "Data Rate": "HSPA/LTE high-speed transmission",
      "Compatibility": "All vehicles built after 1996"
    },
    downloads: [
      { name: "OBD Fleet Specification Guide (PDF)", size: "3.1 MB" },
      { name: "Fleet Dashboard Integration Manual (PDF)", size: "5.4 MB" }
    ],
    accessories: [
      { id: "acc-extension", name: "OBD-II Extension Cable 1.5m", price: 799.00, image: "assets/images/gps_tracker.png" }
    ],
    has360: false
  },
  {
    id: "biometric-access-guard",
    name: "Trueview Face-Id Biometric",
    category: "Biometric",
    price: 27999.00,
    rating: 4.8,
    reviews: 842,
    image: "assets/images/smart_door_lock.png",
    tag: "Enterprise",
    description: "Professional employee clock-in and door verification terminal by Trueview. Fingerprint, face recognition, and RFID card scanner integrated into a clean, wall-mounted terminal with a 4.3-inch touchscreen.",
    features: [
      "Dual Biometrics: High-speed Fingerprint & Face Scan",
      "Touchless Facial Scan with Live Body Detection",
      "Built-in RFID card & PIN keypad reader",
      "Direct network sync with payroll systems",
      "Control relay outputs for electronic doors"
    ],
    aiFeatures: [
      "Live Face Anti-Spoofing (Prevents photo or video presentation attacks)",
      "High-Speed Scan Match (Matches in < 0.3s against 3,000 faces)",
      "Thermal Telemetry Link (Can coordinate with heat sensor triggers)"
    ],
    specs: {
      "Warranty": "2 Years Manufacturer Warranty",
      "Capacity": "3,000 Faces, 5,000 Fingerprints, 100k Logs",
      "Verification Speed": "< 0.3 seconds per scan",
      "Display": "4.3\" IPS HD Capacitive Touchscreen",
      "Communications": "TCP/IP, Wi-Fi, USB Host, Wiegand Input/Output",
      "Operating System": "Linux Secured Kernel"
    },
    downloads: [
      { name: "Access Guard Technical Specsheet (PDF)", size: "3.8 MB" },
      { name: "Payroll API SDK Documentation (PDF)", size: "6.2 MB" }
    ],
    accessories: [
      { id: "acc-rfid", name: "RGMS Mifare Premium RFID Cards (Pack of 50)", price: 2499.00, image: "assets/images/smart_door_lock.png" },
      { id: "acc-lock-bracket", name: "Premium U-Bracket for Glass Doors", price: 1899.00, image: "assets/images/dome_cctv_camera.png" }
    ],
    has360: false
  },
  {
    id: "door-lock-biometric",
    name: "Maizic Smart Biometric Lock",
    category: "Door Lock",
    price: 32999.00,
    rating: 4.9,
    reviews: 1421,
    image: "assets/images/smart_door_lock.png",
    tag: "Luxury Tech",
    description: "Re-envision your entryway with Maizic smart lock series. Features a high-speed fingerprint sensor hidden inside a copper-accented handle, numeric touch keypad, secure Bluetooth key sharing, and temporary PIN access codes.",
    features: [
      "3D Fingerprint Reader integrated into handle",
      "Virtual Anti-Peep Passcode touch screen",
      "Emergency physical key & USB-C backup power port",
      "Auto-lock & double authentication mode",
      "Aerospace-grade zinc-alloy construction"
    ],
    aiFeatures: [
      "Self-Learning Fingerprint AI (Saves scanner accuracy adjustments dynamically)",
      "Intelligent Anti-Peep (Scrambles numeric inputs for absolute safety)",
      "Battery Warning Alerts (Warning triggered at 15% charge capacity)"
    ],
    specs: {
      "Warranty": "3 Years Manufacturer Warranty",
      "Battery Life": "Up to 12 months (4x AA batteries)",
      "Door Thickness": "Suitable for 35mm - 55mm thickness",
      "Key Override": "Hidden C-Class cylinder lock",
      "Security Alarm": "Triggered on 5 incorrect entries",
      "Wireless Protocol": "BLE 5.0 (Gateway required for WiFi)"
    },
    downloads: [
      { name: "Avant-Garde Lock Dimensions & Installation Guide (PDF)", size: "4.1 MB" },
      { name: "WiFi Gateway Configuration Manual (PDF)", size: "1.5 MB" }
    ],
    accessories: [
      { id: "acc-gateway", name: "RGMS Smart WiFi BLE Gateway", price: 3999.00, image: "assets/images/smart_door_lock.png" },
      { id: "acc-cards", name: "RGMS Mifare RFID Smart Tags (Pack of 5)", price: 899.00, image: "assets/images/smart_door_lock.png" }
    ],
    has360: true
  },
  {
    id: "access-gatekeeper",
    name: "Trueview Smart Gatekeeper",
    category: "Door Lock",
    price: 35999.00,
    rating: 4.7,
    reviews: 432,
    image: "assets/images/smart_door_lock.png",
    tag: "Commercial",
    description: "Designed by Trueview for high-traffic office entries and secure facilities. A rugged, weatherproof access control terminal with card and keypad scanning, plus high-definition facial scanning.",
    features: [
      "Weatherproof IP65 outdoor casing design",
      "AI Deep Learning Facial Recognition module",
      "Supports Mifare, DESFire, and RFID standards",
      "Dual camera anti-spoofing logic",
      "Integrates with existing fire alarm systems"
    ],
    aiFeatures: [
      "Deep Learning Facial Recognition (Analyzes face depth maps)",
      "Twin-Camera Anti-Spoofing (Rejects prints and tablet displays)",
      "Fire alarm override integration (Unlocks doors automatically)"
    ],
    specs: {
      "Warranty": "2 Years Manufacturer Warranty",
      "Facial Capacity": "10,000 Face templates",
      "Screen": "7-inch LCD curved glass console",
      "Mount Options": "Wall Mount, Turnstile Mount, Pedestal Mount",
      "Inputs/Outputs": "Door Bell, Exit Button, Door Sensor, Lock Output",
      "Working Temp": "-30°C to +60°C (-22°F to +140°F)"
    },
    downloads: [
      { name: "Gatekeeper Terminal Layout Sheet (PDF)", size: "2.9 MB" },
      { name: "Firmware v4.8 Update Guide (PDF)", size: "1.7 MB" }
    ],
    accessories: [
      { id: "acc-stand", name: "Premium Metal Desktop Stand Plate", price: 2999.00, image: "assets/images/smart_door_lock.png" }
    ],
    has360: false
  },
  {
    id: "fire-pyroshield-ext",
    name: "CP Plus PyroShield Smoke Alarm",
    category: "Fire Safety",
    price: 11999.00,
    rating: 4.8,
    reviews: 642,
    image: "assets/images/fire_detector.png",
    tag: "Essential",
    description: "Intelligent smoke and fire detection by CP Plus. Featuring advanced photoelectric sensing, auto alarm dispatch, and smart home hub notifications to secure your workspaces, server rooms, and residential units.",
    features: [
      "Photoelectric sensor technology for early smoke detection",
      "Built-in 85dB siren with high-intensity strobe light",
      "Wi-Fi IoT connectivity for immediate mobile notifications",
      "Tamper-proof alarm switch and status indicator LEDs",
      "Low battery auto-pings and sensor self-testing console"
    ],
    aiFeatures: [
      "Heat Signature Tracking (Detects rapid temperature rises > 57°C)",
      "Continuous Monitoring (Performs hourly self-diagnostics)"
    ],
    specs: {
      "Warranty": "5 Years Manufacturer Warranty",
      "Sensor": "Split-Spectrum Photoelectric Chamber",
      "Power Source": "10-Year Sealed Lithium Battery",
      "Siren Level": "85 Decibels at 3 meters",
      "Wireless Protocol": "Wi-Fi 802.11 b/g/n"
    },
    downloads: [
      { name: "PyroShield Smoke Alarm Datasheet (PDF)", size: "2.1 MB" }
    ],
    accessories: [
      { id: "acc-bracket", name: "Premium Magnetic Ceiling Mount Plate", price: 999.00, image: "assets/images/fire_detector.png" }
    ],
    has360: false
  },
  {
    id: "cp-plus-ezykam-ptz",
    name: "CP Plus EzyKam Wi-Fi PTZ",
    category: "PTZ",
    price: 5999.00,
    rating: 4.7,
    reviews: 2184,
    image: "assets/images/dome_cctv_camera.png",
    tag: "Best Seller",
    description: "Plug-and-play Wi-Fi pan-tilt-zoom camera by CP Plus. Provides 360-degree high-definition coverage, intelligent motion tracking, clear two-way communication, and full-color night vision.",
    features: [
      "360° Panoramic Pan-and-Tilt Control",
      "AI Smart Motion Tracking & Instant Alerts",
      "Two-Way Audio with Noise Cancellation",
      "Full Color Night Vision in Low Light",
      "Supports MicroSD Card up to 256GB"
    ],
    aiFeatures: [
      "Smart Tracking (Automatically follows moving subjects)",
      "Human Detection (Reduces false alerts from wind or pets)"
    ],
    specs: {
      "Warranty": "2 Years Manufacturer Warranty",
      "Resolution": "3MP Full HD",
      "Connectivity": "Wi-Fi 2.4GHz",
      "Storage": "MicroSD slot up to 256GB",
      "Audio": "Built-in Speaker & Mic"
    },
    downloads: [
      { name: "EzyKam Quick Setup Guide (PDF)", size: "1.5 MB" }
    ],
    accessories: [
      { id: "acc-sd-128", name: "Sandisk Ultra 128GB MicroSD", price: 1499.00, image: "assets/images/smart_door_lock.png" }
    ],
    has360: false
  },
  {
    id: "trueview-solar-4g-ptz",
    name: "Trueview 4G Solar PTZ Camera",
    category: "PTZ",
    price: 21999.00,
    rating: 4.9,
    reviews: 489,
    image: "assets/images/bullet_cctv_camera.png",
    tag: "Solar Tech",
    description: "100% wire-free outdoor security solution powered by a high-efficiency solar panel and reliable 4G LTE cellular connectivity. Perfect for agricultural land, construction sites, and remote properties.",
    features: [
      "Continuous Solar Charging with Backup Battery",
      "4G LTE Cellular Network Connectivity",
      "Pan-Tilt-Zoom with 10x Hybrid Zoom",
      "PIR Human Motion Detection & Real-time Alerts",
      "IP66 Weatherproof Robust Casing"
    ],
    aiFeatures: [
      "PIR Body Detection (Saves battery by waking on human presence)",
      "Instant Alarm Push (Pings your phone within 1 second of event)"
    ],
    specs: {
      "Warranty": "2 Years Manufacturer Warranty",
      "Battery": "15,000mAh Rechargeable Battery Pack",
      "Solar Panel": "8W Monocrystalline Panel",
      "Resolution": "4MP Super HD",
      "Network": "4G SIM Card Slot"
    },
    downloads: [
      { name: "Trueview Solar PTZ Datasheet (PDF)", size: "3.5 MB" }
    ],
    accessories: [
      { id: "acc-case", name: "Waterproof Magnetic Rugged Hard Case", price: 1499.00, image: "assets/images/gps_tracker.png" }
    ],
    has360: false
  },
  {
    id: "trueview-video-doorbell",
    name: "Trueview Smart Wi-Fi Doorbell",
    category: "Door Lock",
    price: 12999.00,
    rating: 4.8,
    reviews: 732,
    image: "assets/images/smart_door_lock.png",
    tag: "Smart Home",
    description: "Never miss a visitor at your door. Trueview's smart video doorbell features crystal clear HD video, a wide-angle lens, immediate mobile alerts, and an indoor wireless chime.",
    features: [
      "1080p HD Video with 166° Wide Angle Lens",
      "PIR Motion Detection with Custom Zones",
      "Two-Way Talk & Quick Voice Replies",
      "Rechargeable Battery or Hardwired Power",
      "Wireless Chime Receiver Included"
    ],
    aiFeatures: [
      "Facial Recognition (Recognizes regular guests and family)",
      "PIR Activity Filtering (Ignores street traffic and animals)"
    ],
    specs: {
      "Warranty": "2 Years Manufacturer Warranty",
      "Resolution": "1080p Full HD",
      "Battery": "6700mAh Rechargeable Battery",
      "Wi-Fi": "2.4GHz Connection"
    },
    downloads: [
      { name: "Smart Doorbell Installation Manual (PDF)", size: "1.9 MB" }
    ],
    accessories: [
      { id: "acc-chime", name: "Additional Wireless Indoor Chime", price: 1999.00, image: "assets/images/smart_door_lock.png" }
    ],
    has360: false
  },
  {
    id: "cp-plus-nvr-kit",
    name: "CP Plus 4-Channel IP NVR Kit",
    category: "Bullet CCTV",
    price: 18999.00,
    rating: 4.8,
    reviews: 1542,
    image: "assets/images/bullet_cctv_camera.png",
    tag: "Value Pack",
    description: "Complete security system with 4 Full HD outdoor bullet IP cameras and a dedicated 4-channel Network Video Recorder. Quick plug-and-play setup with Power over Ethernet (PoE).",
    features: [
      "Includes 4x 1085p PoE IP Bullet Cameras",
      "4-Channel NVR with 1TB Surveillance Hard Drive",
      "Power over Ethernet (PoE) Setup for Easy Wiring",
      "Smart Infrared Night Vision up to 30m",
      "Mobile Remote Monitoring App"
    ],
    aiFeatures: [
      "Intelligent Playback (Fast-forwards through static periods)",
      "Region Protection (Draws bounding alerts around driveways)"
    ],
    specs: {
      "Warranty": "3 Years Manufacturer Warranty",
      "Cameras": "4x 2MP IP Bullet Cameras",
      "Storage": "1TB Seagate Skyhawk Drive Pre-installed",
      "Cabling": "4x 20m Ethernet Cables Included"
    },
    downloads: [
      { name: "NVR Kit System Design Guide (PDF)", size: "4.8 MB" }
    ],
    accessories: [
      { id: "acc-poe", name: "RGMS Gigabit 8-Port PoE Switch", price: 4999.00, image: "assets/images/gps_tracker.png" }
    ],
    has360: false
  },
  {
    id: "maizic-4g-sim-bullet",
    name: "Maizic 4G Sim Card Camera",
    category: "Bullet CCTV",
    price: 8499.00,
    rating: 4.6,
    reviews: 312,
    image: "assets/images/bullet_cctv_camera.png",
    tag: "Easy Setup",
    description: "No internet or Wi-Fi router needed. Insert any active 4G SIM card into the camera to view live video feed from anywhere on your phone. Comes with solar compatibility and full color night vision.",
    features: [
      "Direct 4G LTE SIM Card Compatibility",
      "Full Color Night Vision in Total Darkness",
      "Sound & Light Active Intruder Alarm",
      "Two-Way Communication Mic & Speaker",
      "IP66 Solid Waterproof Housing"
    ],
    aiFeatures: [
      "Human Silhouette Profiling (Alarms only for human intrusion)",
      "Voice Customization (Record a custom warning playback sound)"
    ],
    specs: {
      "Warranty": "1 Year Manufacturer Warranty",
      "Resolution": "3MP Super HD",
      "Network": "4G LTE (Jio, Airtel, Vi Support)",
      "Storage": "MicroSD up to 128GB"
    },
    downloads: [
      { name: "4G Camera SIM Configuration Sheet (PDF)", size: "1.2 MB" }
    ],
    accessories: [
      { id: "acc-sd-128", name: "Sandisk Ultra 128GB MicroSD", price: 1499.00, image: "assets/images/smart_door_lock.png" }
    ],
    has360: false
  },
  {
    id: "maizic-spy-magnetic",
    name: "Maizic Mini Spy Magnetic Cam",
    category: "Dome CCTV",
    price: 4499.00,
    rating: 4.5,
    reviews: 618,
    image: "assets/images/dome_cctv_camera.png",
    tag: "Discreet",
    description: "Super-compact magnetic hidden camera designed for covert surveillance. Features night vision, motion triggers, and direct Wi-Fi hotspot linking to monitor operations locally or remotely.",
    features: [
      "Ultra Small 3.5cm Magnetic Design",
      "1080p Clear Video Recording with Audio",
      "Rechargeable Battery for Cordless Use",
      "No-Glow Infrared LED Night Vision",
      "Instant Motion Detection Push Alerts"
    ],
    aiFeatures: [
      "Activity Sensor (Starts recording only when motion is detected)",
      "Low Battery Telemetry (Notifies user when charge falls under 10%)"
    ],
    specs: {
      "Warranty": "1 Year Manufacturer Warranty",
      "Resolution": "1080p HD",
      "Battery": "Built-in 500mAh Lithium Ion",
      "Run Time": "Up to 120 minutes on battery"
    },
    downloads: [
      { name: "Covert Placement Ideas & Guide (PDF)", size: "2.4 MB" }
    ],
    accessories: [
      { id: "acc-sd-128", name: "Sandisk Ultra 128GB MicroSD", price: 1499.00, image: "assets/images/smart_door_lock.png" }
    ],
    has360: false
  },
  {
    id: "letstrack-solo-gps",
    name: "Letstrack Solo Personal GPS",
    category: "GPS",
    price: 7499.00,
    rating: 4.8,
    reviews: 914,
    image: "assets/images/gps_tracker.png",
    tag: "Personal Safety",
    description: "Premium personal and asset GPS tracker by Letstrack. Features multi-satellite tracking, real-time location history, SOS button, and 10-day battery life with smart sleep mode.",
    features: [
      "Real-time tracking with high-precision GPS + GLONASS",
      "One-click SOS panic button with instant location alerts",
      "Geofence alarms with entry/exit push notifications",
      "10-day rechargeable battery with smart energy saving",
      "Robust magnetic attachment and compact form factor"
    ],
    aiFeatures: [
      "Activity Profiling (Learns routine routes and alerts for deviations)",
      "Battery Analytics (Optimizes power usage based on movement telemetry)"
    ],
    specs: {
      "Warranty": "1 Year Manufacturer Warranty",
      "Battery": "3000mAh Lithium Polymer",
      "Connectivity": "4G SIM Card Pre-installed",
      "Water Resistance": "IP65 Splashproof"
    },
    downloads: [
      { name: "Letstrack App User Manual (PDF)", size: "1.8 MB" }
    ],
    accessories: [
      { id: "acc-case", name: "Waterproof Magnetic Rugged Hard Case", price: 1499.00, image: "assets/images/gps_tracker.png" }
    ],
    has360: false
  }
];

// App State Management
const state = {
  cart: [],
  wishlist: [],
  currentView: "home",
  selectedProductId: null,
  activeCategory: "All",
  activeBrand: "All",
  searchQuery: "",
  installationServicesSelected: {},
  activeVariant: {},
  currentSlideIndex: 0,
  isTransitioning: false,
  recentlyViewed: []
};

let autoplayTimer = null;

// LocalStorage helpers
function saveToStorage() {
  localStorage.setItem("rgms_cart", JSON.stringify(state.cart));
  localStorage.setItem("rgms_wishlist", JSON.stringify(state.wishlist));
  localStorage.setItem("rgms_installation", JSON.stringify(state.installationServicesSelected));
  localStorage.setItem("rgms_recently_viewed", JSON.stringify(state.recentlyViewed));
}

function loadFromStorage() {
  const cart = localStorage.getItem("rgms_cart");
  const wishlist = localStorage.getItem("rgms_wishlist");
  const installation = localStorage.getItem("rgms_installation");
  const recently = localStorage.getItem("rgms_recently_viewed");
  
  if (cart) state.cart = JSON.parse(cart);
  if (wishlist) state.wishlist = JSON.parse(wishlist);
  if (installation) state.installationServicesSelected = JSON.parse(installation);
  if (recently) state.recentlyViewed = JSON.parse(recently);
}

// ================= HERO CAROUSEL CONTROLLER =================
function renderHeroCarousel() {
  const slidesContainer = document.getElementById("carousel-slides-container");
  const dotsContainer = document.getElementById("carousel-dots");
  if (!slidesContainer || !dotsContainer) return;
  
  slidesContainer.innerHTML = "";
  dotsContainer.innerHTML = "";
  
  // Showcase exactly 5 items in the carousel to keep it ultra premium and fast
  const carouselProducts = PRODUCTS.slice(0, 5);
  state.currentSlideIndex = 0;
  state.isTransitioning = false;
  
  carouselProducts.forEach((product, index) => {
    let ctaPrimaryOnClick = `showView('detail', '${product.id}')`;
    
    // Render slide element
    const slide = document.createElement("div");
    slide.className = "carousel-slide hero-carousel-card flex flex-col md:flex-row items-center justify-between gap-5 p-6 pb-14 md:p-8 md:pb-12 cursor-pointer w-full text-center md:text-left";
    slide.style.display = index === 0 ? "flex" : "none";
    slide.style.opacity = index === 0 ? "1" : "0";
    slide.setAttribute("onclick", ctaPrimaryOnClick);
    
    let heading = product.name;
    let description = product.description;
    let ctaPrimaryText = "Explore Tech →";
    let ctaSecondaryText = "Quick Add +";
    let ctaSecondaryOnClick = `event.stopPropagation(); addToCartDirect('${product.id}', event)`;
    
    let statsHTML = "";
    let trustBadgesHTML = "";
    let infoBarHTML = `
      <div class="flex items-center justify-center md:justify-start gap-1.5 md:gap-3 font-mono mb-2 md:mb-4">
        <span class="text-slate-900 font-bold bg-slate-100 border border-slate-200 px-1.5 py-0.5 rounded text-[10px] sm:text-xs md:text-sm">₹${product.price.toLocaleString('en-IN')}</span>
        <span class="flex items-center gap-1 shrink-0 text-slate-650 font-semibold text-[10px] sm:text-xs md:text-sm">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5 text-yellow-500 fill-current" viewBox="0 0 24 24">
            <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.21l8.2-1.192L12 .587z"/>
          </svg>
          <span>${product.rating}</span>
          <span class="text-slate-400 font-normal">(${product.reviews})</span>
        </span>
      </div>
    `;
    
    slide.innerHTML = `
      <!-- Graphic Grid Overlay -->
      <div class="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.005)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.005)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
      
      <!-- Hero Copy Left (Centered on mobile, left-aligned on desktop) -->
      <div class="w-full md:w-[55%] md:flex-initial z-10 flex flex-col items-center md:items-start text-center md:text-left overflow-hidden">
        <!-- Badges -->
        <div class="flex flex-wrap justify-center md:justify-start gap-1.5 mb-2 md:mb-3">
          <span class="text-[8px] sm:text-[9px] md:text-xs font-semibold uppercase tracking-widest text-[#2563EB] bg-blue-50 border border-blue-100 px-1.5 py-0.5 rounded-md">
            ${product.category}
          </span>
          ${product.tag ? `
            <span class="text-[8px] sm:text-[9px] md:text-xs font-semibold uppercase text-slate-600 bg-slate-50 border border-slate-200 px-1.5 py-0.5 rounded-md">
              ${product.tag}
            </span>
          ` : ""}
        </div>
        
        ${trustBadgesHTML}
        
        <h2 class="text-slate-900 font-extrabold tracking-tight font-display max-w-lg leading-[1.2] text-lg sm:text-2xl md:text-3xl lg:text-4xl mb-2 md:mb-3 line-clamp-2 text-center md:text-left">${heading}</h2>
        
        ${infoBarHTML}
        
        <!-- Actions -->
        <div class="flex flex-row gap-2.5 sm:gap-3 w-full max-w-[280px] sm:max-w-sm justify-center md:justify-start mt-1 md:mt-2">
          <button onclick="${ctaPrimaryOnClick}" class="flex-1 min-w-0 brutal-btn-primary h-10 sm:h-12 rounded-xl text-[10px] sm:text-xs font-semibold px-3 sm:px-6 flex items-center justify-center text-center leading-tight">
            ${ctaPrimaryText}
          </button>
          <button onclick="${ctaSecondaryOnClick}" class="flex-1 min-w-0 brutal-btn-secondary h-10 sm:h-12 rounded-xl text-[10px] sm:text-xs font-semibold px-3 sm:px-6 flex items-center justify-center text-center leading-tight">
            ${ctaSecondaryText}
          </button>
        </div>
        
        ${statsHTML}
      </div>
 
      <!-- Hero Product Image Container (Centered below copy on mobile) -->
      <div class="w-[55%] sm:w-[45%] md:w-[40%] md:flex-initial flex items-center justify-center relative select-none z-10 mt-4 md:mt-0">
        <div class="w-full aspect-square relative flex items-center justify-center p-1 sm:p-4 bg-transparent">
          <img 
            src="${product.image}" 
            alt="${product.name}" 
            class="max-w-full max-h-full object-contain filter drop-shadow-[2px_6px_12px_rgba(0,0,0,0.04)] transition-transform duration-500 hover:scale-[1.03]"
            loading="lazy"
          />
        </div>
      </div>
    `;
    
    slidesContainer.appendChild(slide);
    
    // Render Dot Indicator
    const dot = document.createElement("button");
    dot.className = `carousel-dot h-1.5 rounded-full transition-all duration-300 cursor-pointer ${index === 0 ? "w-4 bg-white" : "w-1.5 bg-white/50 hover:bg-white/80"}`;
    dot.setAttribute("aria-label", `Go to slide ${index + 1}`);
    dot.addEventListener("click", () => {
      goToSlide(index, index > state.currentSlideIndex ? 'next' : 'prev');
      resetAutoplay();
    });
    
    dotsContainer.appendChild(dot);
  });
  
  // Start Autoplay
  startAutoplay();
  
  // Attach hover pause/resume events
  const carouselSection = document.getElementById("home-hero-carousel-section");
  if (carouselSection) {
    carouselSection.addEventListener("mouseenter", stopAutoplay);
    carouselSection.addEventListener("mouseleave", startAutoplay);
  }
}

function startAutoplay() {
  if (autoplayTimer) clearInterval(autoplayTimer);
  autoplayTimer = setInterval(() => {
    nextSlide();
  }, 6000);
}

function stopAutoplay() {
  if (autoplayTimer) {
    clearInterval(autoplayTimer);
    autoplayTimer = null;
  }
}

function resetAutoplay() {
  stopAutoplay();
  startAutoplay();
}

function nextSlide() {
  const slides = document.querySelectorAll(".carousel-slide");
  if (slides.length === 0) return;
  const nextIndex = (state.currentSlideIndex + 1) % slides.length;
  goToSlide(nextIndex, 'next');
}

function prevSlide() {
  const slides = document.querySelectorAll(".carousel-slide");
  if (slides.length === 0) return;
  const prevIndex = (state.currentSlideIndex - 1 + slides.length) % slides.length;
  goToSlide(prevIndex, 'prev');
}

function goToSlide(index, direction = 'next') {
  if (state.currentSlideIndex === index || state.isTransitioning) return;
  state.isTransitioning = true;
  
  const slides = document.querySelectorAll(".carousel-slide");
  const dots = document.querySelectorAll(".carousel-dot");
  if (slides.length === 0) return;
  
  const oldSlide = slides[state.currentSlideIndex];
  const newSlide = slides[index];
  const isMobile = window.innerWidth < 768;
  
  // Force all non-active and non-target slides to be completely hidden to prevent overlaps
  slides.forEach((s, idx) => {
    if (idx !== index && idx !== state.currentSlideIndex) {
      s.style.display = "none";
      s.style.opacity = "0";
    }
  });
  
  // Update dots active/inactive classes
  dots.forEach((dot, idx) => {
    if (idx === index) {
      dot.className = "carousel-dot h-1.5 rounded-full transition-all duration-300 w-4 bg-white";
    } else {
      dot.className = "carousel-dot h-1.5 rounded-full transition-all duration-300 w-1.5 bg-white/50 hover:bg-white/80";
    }
  });
  
  if (isMobile) {
    // Mobile: crossfade with smooth height animation.
    // Both slides are position:absolute during the fade so neither affects
    // container height. Container height is animated explicitly via GSAP.
    const container = oldSlide.parentElement;
    const oldHeight = container.getBoundingClientRect().height;
    
    // Lock container to current height so nothing jumps
    gsap.set(container, { height: oldHeight, overflow: "hidden" });
    
    // Move old slide to absolute (freeze in place)
    gsap.set(oldSlide, {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      zIndex: 5
    });
    
    // Place new slide absolute + invisible to measure its natural height
    gsap.set(newSlide, {
      display: "flex",
      opacity: 0,
      xPercent: 0,
      position: "relative",
      zIndex: 1,
      visibility: "hidden"
    });
    
    // Measure what the new slide's height would be
    const newHeight = newSlide.getBoundingClientRect().height;
    
    // Now make it absolute for the crossfade
    gsap.set(newSlide, {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      visibility: "visible"
    });
    
    // Animate container height smoothly
    gsap.to(container, {
      height: newHeight,
      duration: 0.4,
      ease: "power2.inOut"
    });
    
    // Fade out old
    gsap.to(oldSlide, {
      opacity: 0,
      duration: 0.35,
      ease: "power2.out",
      onComplete: () => {
        oldSlide.style.display = "none";
        gsap.set(oldSlide, { position: "relative", xPercent: 0, zIndex: "", width: "", top: "", left: "" });
      }
    });
    
    // Fade in new
    gsap.to(newSlide, {
      opacity: 1,
      duration: 0.35,
      ease: "power2.out",
      onComplete: () => {
        // Restore new slide to relative (in flow) and unlock container
        gsap.set(newSlide, { position: "relative", zIndex: "", width: "", top: "", left: "" });
        gsap.set(container, { height: "auto", overflow: "visible" });
        state.currentSlideIndex = index;
        state.isTransitioning = false;
      }
    });
  } else {
    // Desktop: smooth xPercent slide animation (slides are position:absolute)
    const oldSlideOffset = direction === 'next' ? -50 : 50;
    const newSlideOffset = direction === 'next' ? 50 : -50;
    
    gsap.set(newSlide, {
      display: "flex",
      xPercent: newSlideOffset,
      opacity: 0,
      zIndex: 10
    });
    
    gsap.set(oldSlide, { zIndex: 1 });
    
    gsap.to(oldSlide, {
      xPercent: oldSlideOffset,
      opacity: 0,
      duration: 0.5,
      ease: "power2.out",
      onComplete: () => {
        oldSlide.style.display = "none";
      }
    });
    
    gsap.to(newSlide, {
      xPercent: 0,
      opacity: 1,
      duration: 0.5,
      ease: "power2.out",
      onComplete: () => {
        // Clear inline transform so CSS :hover translateY works
        gsap.set(newSlide, { clearProps: "transform" });
        state.currentSlideIndex = index;
        state.isTransitioning = false;
      }
    });
  }
}

// Global UI state indicators
function updateBadgeCounts() {
  const cartCount = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  const cartBadgeMobile = document.getElementById("cart-badge-mobile");
  const cartBadgeDesktop = document.getElementById("cart-badge-desktop");
  const cartNavbarBadge = document.getElementById("cart-navbar-badge");
  
  const badges = [cartBadgeMobile, cartBadgeDesktop].filter(el => el !== null);
  
  if (cartCount > 0) {
    badges.forEach(badge => {
      badge.textContent = cartCount;
      badge.classList.remove("scale-0");
      badge.classList.add("scale-100");
    });
    if (cartNavbarBadge) {
      cartNavbarBadge.textContent = cartCount;
      cartNavbarBadge.classList.remove("hidden");
    }
  } else {
    badges.forEach(badge => {
      badge.classList.remove("scale-100");
      badge.classList.add("scale-0");
    });
    if (cartNavbarBadge) {
      cartNavbarBadge.classList.add("hidden");
    }
  }
}

// SPA Routing controller
function showView(viewName, productId = null) {
  state.currentView = viewName;
  stopAutoplay(); // Stop autoplay when changing views
  
  const homeView = document.getElementById("home-view");
  const detailView = document.getElementById("detail-view");
  const searchView = document.getElementById("search-view");
  
  homeView.classList.add("hidden");
  detailView.classList.add("hidden");
  searchView.classList.add("hidden");
  
  // Clear any existing sticky bar
  const oldSticky = document.getElementById("detail-sticky-bar");
  if (oldSticky) oldSticky.remove();
  const oldMobileSticky = document.querySelector(".sticky-mobile-cta");
  if (oldMobileSticky) oldMobileSticky.remove();
  
  if (viewName === "home") {
    homeView.classList.remove("hidden");
    window.location.hash = "#home";
    if (window.lenisInstance) window.lenisInstance.scrollTo(0, { immediate: true });
    
    gsap.fromTo("#home-hero-carousel-section", { opacity: 0, y: 25 }, { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" });
    gsap.fromTo("#category-list-container", { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.5, delay: 0.06, ease: "power3.out" });
    gsap.fromTo("#product-grid-container", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5, delay: 0.12, ease: "power3.out" });
    
    renderProductGrid();
    renderRecentlyViewedGrid();
    updateNavbarState("nav-home");
    startAutoplay(); // Restart autoplay when back on home
    
  } else if (viewName === "detail") {
    state.selectedProductId = productId;
    
    // Register product to recently viewed
    if (productId) {
      const idx = state.recentlyViewed.indexOf(productId);
      if (idx > -1) {
        state.recentlyViewed.splice(idx, 1);
      }
      state.recentlyViewed.unshift(productId);
      if (state.recentlyViewed.length > 6) {
        state.recentlyViewed.pop();
      }
      saveToStorage();
    }
    
    renderDetailView(productId);
    detailView.classList.remove("hidden");
    window.location.hash = `#detail-${productId}`;
    if (window.lenisInstance) window.lenisInstance.scrollTo(0, { immediate: true });
    
    gsap.fromTo("#detail-hero", { opacity: 0, scale: 0.97 }, { opacity: 1, scale: 1, duration: 0.5, ease: "power3.out" });
    gsap.fromTo("#detail-content-panel", { opacity: 0, y: 25 }, { opacity: 1, y: 0, duration: 0.5, delay: 0.06, ease: "power3.out" });
    
    updateNavbarState("nav-categories");
    
  } else if (viewName === "search") {
    searchView.classList.remove("hidden");
    window.location.hash = "#search";
    if (window.lenisInstance) window.lenisInstance.scrollTo(0, { immediate: true });
    
    const input = document.getElementById("search-input-field");
    if (input) input.focus();
    
    updateNavbarState("nav-search");
    renderSearchResults();
  }
}

function updateNavbarState(activeId) {
  const tabs = ["nav-home", "nav-search", "nav-categories", "nav-cart", "nav-profile"];
  tabs.forEach(tabId => {
    const el = document.getElementById(tabId);
    if (!el) return;
    
    const icon = el.querySelector("svg");
    
    if (tabId === activeId) {
      el.classList.add("text-[#0057FF]");
      el.classList.remove("text-slate-400");
      if (icon) {
        gsap.to(icon, { scale: 1.15, duration: 0.25, ease: "back.out(2)" });
      }
    } else {
      el.classList.remove("text-[#0057FF]");
      el.classList.add("text-slate-400");
      if (icon) {
        gsap.to(icon, { scale: 1, duration: 0.25 });
      }
    }
  });
}

// Render Products Grid on Home View (INR ₹ formatting)
function renderProductGrid() {
  const container = document.getElementById("product-grid");
  if (!container) return;
  
  container.innerHTML = "";
  
  let filtered = PRODUCTS;
  if (state.activeCategory !== "All") {
    filtered = filtered.filter(p => p.category === state.activeCategory);
  }
  if (state.activeBrand && state.activeBrand !== "All") {
    filtered = filtered.filter(p => p.name.toLowerCase().includes(state.activeBrand.toLowerCase()));
  }
  
  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-16 text-center brutal-card-static bg-white">
        <p class="text-slate-500 font-semibold tracking-tight font-sans">No products found matching these filters.</p>
      </div>
    `;
    return;
  }
  
  filtered.forEach(p => {
    const isWishlisted = state.wishlist.includes(p.id);
    const card = document.createElement("div");
    card.className = "group relative brutal-card p-5 flex flex-col justify-between cursor-pointer bg-white transition-all duration-300";
    card.setAttribute("onclick", `showView('detail', '${p.id}')`);
    
    card.innerHTML = `
      <!-- Tag / Category Badges -->
      <div class="absolute top-4 left-4 z-10 flex flex-col gap-1 items-start">
        <span class="text-[8px] uppercase font-semibold tracking-wider text-brandBlue bg-blue-50 border border-blue-100/50 px-2 py-0.5 rounded-md">${p.category}</span>
        ${p.tag ? `<span class="text-[8px] font-semibold uppercase text-slate-600 bg-slate-50 border border-slate-200 px-2 py-0.5 rounded-md">${p.tag}</span>` : ""}
      </div>
      
      <!-- Wishlist Action -->
      <button 
        onclick="event.stopPropagation(); toggleWishlist('${p.id}', this);" 
        class="absolute top-4 right-4 z-10 p-2 rounded-xl bg-white border border-slate-100 hover:border-slate-300 text-slate-400 hover:text-brandRed transition-colors duration-200"
        aria-label="Add to wishlist"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5 ${isWishlisted ? 'fill-current text-brandRed' : 'fill-none'}" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      </button>
      
      <!-- Image Layer -->
      <div class="w-full aspect-square rounded-xl overflow-hidden flex items-center justify-center p-5 mb-4 relative bg-slate-50/50 select-none border border-slate-100/50">
        <img 
          src="${p.image}" 
          alt="${p.name}" 
          class="max-w-[85%] max-h-[85%] object-contain transform group-hover:scale-103 transition-transform duration-300 ease-out filter drop-shadow-[2px_8px_16px_rgba(0,0,0,0.03)]"
          loading="lazy"
        />
      </div>
      
      <!-- Product Details -->
      <div class="flex-grow flex flex-col justify-between">
        <div>
          <!-- Star Ratings -->
          <div class="flex items-center gap-1.5 mb-1.5 font-mono text-[9px] font-semibold text-slate-400">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 text-yellow-500 fill-current" viewBox="0 0 24 24">
              <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.21l8.2-1.192L12 .587z"/>
            </svg>
            <span class="text-slate-700 font-bold">${p.rating}</span>
            <span>(${p.reviews} reviews)</span>
          </div>
          
          <h3 class="text-slate-800 font-bold text-sm uppercase tracking-wide mb-2 line-clamp-2 h-10 leading-relaxed font-display">${p.name}</h3>
        </div>
        
        <div class="flex items-center justify-between gap-2 mt-4 pt-3 border-t border-slate-100">
          <div class="flex flex-col">
            <span class="text-slate-450 text-[9px] font-semibold uppercase tracking-wider font-mono">Device Cost</span>
            <span class="text-slate-900 font-bold text-sm font-mono">₹${p.price.toLocaleString('en-IN')}</span>
          </div>
          
          <button 
            onclick="event.stopPropagation(); addToCartDirect('${p.id}', event);" 
            class="w-8 h-8 flex items-center justify-center rounded-xl bg-brandBlue text-white hover:bg-blue-700 transition-all duration-200 active:scale-95 shadow-sm shadow-blue-500/10"
            aria-label="Add to cart"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
          </button>
        </div>
      </div>
    `;
    
    container.appendChild(card);
  });
}

// Render Recently Viewed products list
function renderRecentlyViewedGrid() {
  const container = document.getElementById("recently-viewed-grid");
  const section = document.getElementById("recently-viewed-section");
  if (!container || !section) return;
  
  const viewedIds = state.recentlyViewed.filter(id => id !== state.selectedProductId);
  
  if (viewedIds.length === 0) {
    section.classList.add("hidden");
    return;
  }
  
  section.classList.remove("hidden");
  container.innerHTML = "";
  
  viewedIds.slice(0, 4).forEach(id => {
    const p = PRODUCTS.find(prod => prod.id === id);
    if (!p) return;
    
    const card = document.createElement("div");
    card.className = "group relative brutal-card p-4 flex flex-col justify-between cursor-pointer bg-white transition-all duration-300";
    card.setAttribute("onclick", `showView('detail', '${p.id}')`);
    
    card.innerHTML = `
      <div class="w-full aspect-square rounded-xl bg-slate-50/50 flex items-center justify-center p-4 mb-3 border border-slate-100/50">
        <img src="${p.image}" alt="${p.name}" class="max-w-[85%] max-h-[85%] object-contain group-hover:scale-103 transition-transform duration-300 filter drop-shadow-[2px_6px_12px_rgba(0,0,0,0.02)]" />
      </div>
      <div>
        <h4 class="text-slate-800 font-bold text-[10px] uppercase tracking-wider truncate font-display">${p.name}</h4>
        <span class="text-brandBlue font-mono font-bold text-xs mt-1 block">₹${p.price.toLocaleString('en-IN')}</span>
      </div>
    `;
    
    container.appendChild(card);
  });
}

// Helper to scroll to product grid
function scrollToGrid() {
  const container = document.getElementById("product-grid-container");
  if (container) {
    container.scrollIntoView({ behavior: "smooth" });
  }
}

// Category filter click and dropdown sync event
function setCategory(categoryName, element) {
  state.activeCategory = categoryName;
  
  // Revert all pills to inactive class style
  const buttons = document.querySelectorAll(".category-pill");
  buttons.forEach(btn => {
    btn.className = "category-pill flex items-center justify-center lg:justify-start gap-2 bg-white text-slate-600 border border-slate-200 rounded-xl px-4 py-2.5 text-xs font-semibold hover:border-slate-400 hover:text-slate-900 transition-all w-full lg:w-auto";
  });
  
  // Set matching pill to active style
  let targetBtn = element;
  if (!targetBtn) {
    targetBtn = Array.from(buttons).find(btn => btn.getAttribute("onclick")?.includes(`'${categoryName}'`));
  }
  if (targetBtn) {
    targetBtn.className = "category-pill flex items-center justify-center lg:justify-start gap-2 bg-brandBlue text-white border border-brandBlue rounded-xl px-4 py-2.5 text-xs font-semibold transition-all shadow-sm shadow-blue-500/10 w-full lg:w-auto";
  }
  
  // Sync the Select Dropdown value
  const selectDropdown = document.getElementById("category-select-dropdown");
  if (selectDropdown) {
    selectDropdown.value = categoryName;
  }
  
  renderProductGrid();
  gsap.fromTo("#product-grid > div", 
    { opacity: 0, scale: 0.96, y: 15 }, 
    { opacity: 1, scale: 1, y: 0, duration: 0.35, stagger: 0.04, ease: "power2.out" }
  );
}

// Brand filter selection event
function setBrand(brandName) {
  state.activeBrand = brandName;
  
  // Sync the Select Dropdown value if exists
  const selectDropdown = document.getElementById("brand-select-dropdown");
  if (selectDropdown) {
    selectDropdown.value = brandName;
  }
  
  renderProductGrid();
  gsap.fromTo("#product-grid > div", 
    { opacity: 0, scale: 0.96, y: 15 }, 
    { opacity: 1, scale: 1, y: 0, duration: 0.35, stagger: 0.04, ease: "power2.out" }
  );
}

// Render dynamic comparison table based on category
function getComparisonTableHTML(product) {
  const categoryProducts = PRODUCTS.filter(p => p.category === product.category);
  
  // Fallback: If only 1 product in this category, compare with similar products
  const productsToCompare = categoryProducts.length > 1 
    ? categoryProducts.slice(0, 3) 
    : PRODUCTS.slice(0, 3);
    
  return `
    <div class="overflow-x-auto brutal-card-static">
      <table class="comparison-table bg-white">
        <thead>
          <tr>
            <th>Spec Specification</th>
            ${productsToCompare.map(p => `
              <th class="${p.id === product.id ? 'text-[#0057FF] font-black' : ''}">
                ${p.name} ${p.id === product.id ? '(This Device)' : ''}
              </th>
            `).join("")}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="font-mono text-[9px] uppercase tracking-wider text-slate-400 font-bold">Base Price</td>
            ${productsToCompare.map(p => `
              <td class="font-mono font-extrabold ${p.id === product.id ? 'text-[#0057FF]' : 'text-slate-900'}">
                ₹${p.price.toLocaleString('en-IN')}
              </td>
            `).join("")}
          </tr>
          <tr>
            <td class="font-mono text-[9px] uppercase tracking-wider text-slate-400 font-bold">Standard Warranty</td>
            ${productsToCompare.map(p => `
              <td>${p.specs.Warranty || '2 Years'}</td>
            `).join("")}
          </tr>
          <tr>
            <td class="font-mono text-[9px] uppercase tracking-wider text-slate-400 font-bold">Resolution / Output</td>
            ${productsToCompare.map(p => `
              <td>${p.specs.Resolution || p.specs.Accuracy || 'Premium Grade'}</td>
            `).join("")}
          </tr>
          <tr>
            <td class="font-mono text-[9px] uppercase tracking-wider text-slate-400 font-bold">Connection Port</td>
            ${productsToCompare.map(p => `
              <td>${p.specs.Connectivity || p.specs.Network || 'IoT Integration'}</td>
            `).join("")}
          </tr>
          <tr>
            <td class="font-mono text-[9px] uppercase tracking-wider text-slate-400 font-bold">AI Core Processor</td>
            ${productsToCompare.map(p => `
              <td>${p.aiFeatures ? 'Active Neural Network' : 'Standard Telemetry'}</td>
            `).join("")}
          </tr>
        </tbody>
      </table>
    </div>
  `;
}

// Product detail view renderer (INR ₹ formatting + GST markers)
function renderDetailView(productId) {
  const p = PRODUCTS.find(prod => prod.id === productId);
  if (!p) return;
  
  const detailView = document.getElementById("detail-view");
  if (!detailView) return;
  
  const isInstallationSelected = !!state.installationServicesSelected[p.id];
  
  // Build dynamic content
  detailView.innerHTML = `
    <!-- Top Nav Action Bar -->
    <header class="fixed top-0 left-0 w-full z-40 bg-white/95 backdrop-blur-md border-b border-slate-100 px-6 py-4 flex items-center justify-between shadow-sm shadow-slate-100/50">
      <button onclick="showView('home')" class="h-10 px-4 rounded-xl flex items-center justify-center bg-white border border-slate-200 hover:border-slate-400 text-slate-700 hover:text-slate-900 font-semibold text-xs uppercase tracking-wide transition-all active:scale-95">
        ← Back to Catalog
      </button>
      <div class="flex items-center gap-2">
        <span class="verified-badge">
          🛡️ RGMS Authorized Security Node
        </span>
      </div>
      <button onclick="shareProduct('${p.id}')" class="w-10 h-10 rounded-xl flex items-center justify-center bg-white border border-slate-200 hover:border-slate-400 text-slate-700 hover:text-slate-900 active:scale-95 transition-all">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M8.684 10.742l4.622-2.312m0 7.14l-4.622-2.312M19 12a3 3 0 11-6 0 3 3 0 016 0zm-6-8a3 3 0 11-6 0 3 3 0 016 0zm-6 16a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      </button>
    </header>
    
    <div class="max-w-7xl mx-auto px-4 md:px-8 pt-28 pb-36 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
      
      <!-- Left Column: Media & Visuals -->
      <div id="detail-hero" class="flex flex-col gap-6">
        
        <!-- Main Product Card & 360 viewer -->
        <div class="viewer-360-container brutal-card-static bg-white aspect-square flex items-center justify-center p-12 select-none relative">
          <!-- Background Grid Matrix -->
          <div class="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.005)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.005)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none"></div>
          
          <!-- 360 Degree Indicator Badge -->
          ${p.has360 ? `
            <div class="absolute top-6 left-6 z-10 flex items-center gap-2 bg-[#0F172A] border border-[#0F172A] px-3 py-1.5 rounded-lg text-white shadow-sm shadow-slate-900/10">
              <span class="w-1.5 h-1.5 rounded-full bg-brandBlue animate-ping"></span>
              <span class="text-[9px] font-semibold uppercase tracking-wider font-sans">360° Click-Drag Rotate</span>
            </div>
            <div class="drag-indicator absolute inset-0 bg-[#0F172A]/5 z-20 flex flex-col items-center justify-center pointer-events-none transition-all duration-300">
              <div class="bg-[#0F172A] border border-[#0F172A] px-4 py-2.5 rounded-xl text-center text-white flex flex-col items-center shadow-lg shadow-slate-900/20 font-sans">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 animate-pulse mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
                <span class="text-[9px] font-semibold uppercase tracking-widest">Hold & Drag to Rotate</span>
              </div>
            </div>
          ` : ""}
          
          <div class="viewer-360-glare" id="glare-effect"></div>
          
          <img 
            id="detail-main-img" 
            src="${p.image}" 
            alt="${p.name}" 
            class="max-w-[80%] max-h-[80%] object-contain filter drop-shadow-[4px_12px_24px_rgba(0,0,0,0.06)] scale-95 transition-transform duration-200"
          />
        </div>
        
        <!-- Multi-angle Gallery Thumbnails -->
        <div class="flex items-center gap-3">
          <div onclick="setDetailMainImage('${p.image}', this)" class="w-16 h-16 bg-white border border-slate-300 p-2.5 rounded-xl flex items-center justify-center cursor-pointer transition-all shadow-sm">
            <img src="${p.image}" alt="Primary Front Angle" class="w-full h-full object-contain" />
          </div>
          <div onclick="setDetailMainImage('${p.image}', this, 'hue-rotate-15')" class="w-16 h-16 bg-white border border-slate-200 hover:border-slate-300 p-2.5 rounded-xl flex items-center justify-center cursor-pointer transition-all">
            <img src="${p.image}" alt="Side Angled View" class="w-full h-full object-contain filter grayscale opacity-70 hover:opacity-100" />
          </div>
          <div onclick="setDetailMainImage('${p.image}', this, 'hue-rotate-90')" class="w-16 h-16 bg-white border border-slate-200 hover:border-slate-300 p-2.5 rounded-xl flex items-center justify-center cursor-pointer transition-all">
            <img src="${p.image}" alt="Back Cable Port Interface" class="w-full h-full object-contain filter sepia opacity-70 hover:opacity-100" />
          </div>
        </div>
 
        <!-- Video Demonstration Mockup Panel -->
        <div class="brutal-card-static bg-slate-950 p-6 text-white relative overflow-hidden">
          <div class="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:12px_12px] pointer-events-none"></div>
          
          <div class="flex items-center justify-between mb-4 relative z-10 font-sans">
            <span class="flex items-center gap-2 font-mono text-[9px] font-bold uppercase text-[#EF4444]">
              <span class="w-2.5 h-2.5 rounded-full bg-[#EF4444] animate-ping"></span>
              ● SIMULATED FEED [CAM_ACTIVE]
            </span>
            <span class="font-mono text-[9px] text-slate-400">1080P @ 60FPS</span>
          </div>
 
          <!-- Video Display Placeholder -->
          <div class="h-44 bg-slate-900 border border-slate-800 rounded-xl relative flex items-center justify-center group cursor-pointer overflow-hidden shadow-inner">
            <div class="absolute inset-0 bg-cover bg-center opacity-30 blur-sm" style="background-image: url('${p.image}');"></div>
            <div class="absolute top-3 left-3 bg-black/60 font-mono text-[8px] px-2 py-1 rounded border border-white/10 text-slate-300">
              UTC: 2026-07-17 20:25:00
            </div>
            
            <button onclick="showToastNotification('Video streaming feed initialized successfully.')" class="w-12 h-12 bg-white/10 hover:bg-white text-slate-200 hover:text-slate-900 border border-white/20 hover:border-white rounded-full flex items-center justify-center backdrop-blur-md transition-all active:scale-90 relative z-10 shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 fill-current ml-0.5" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          </div>
          <p class="text-[9px] text-slate-400 font-mono mt-3 leading-relaxed">
            * This dynamic simulation runs direct diagnostic analytics on the camera sensor, checking color accuracy and strobe response triggers.
          </p>
        </div>
 
        <!-- Downloads Center -->
        <div class="brutal-card-static p-6 bg-white">
          <h4 class="font-display font-bold text-xs uppercase tracking-wider mb-4 text-slate-900">Documentation & Resource Downloads</h4>
          <div class="flex flex-col gap-2.5">
            ${p.downloads.map(doc => `
              <div class="flex items-center justify-between p-3 border border-slate-100 hover:border-slate-200 rounded-xl transition-colors bg-slate-50/20 font-sans">
                <div class="flex items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <div>
                    <span class="text-xs font-semibold text-slate-800 block">${doc.name}</span>
                    <span class="text-[9px] font-mono text-slate-400">${doc.size}</span>
                  </div>
                </div>
                <button onclick="showToastNotification('Download initiated: ${doc.name}')" class="h-8 px-4 border border-slate-200 hover:border-slate-900 text-slate-600 hover:text-slate-900 text-[10px] font-bold rounded-lg transition-colors bg-white font-sans">
                  Get
                </button>
              </div>
            `).join("")}
          </div>
        </div>
 
      </div>
      
      <!-- Right Column: Specs & Copy -->
      <div id="detail-content-panel" class="flex flex-col gap-6">
        
        <!-- Title & Category info -->
        <div>
          <div class="flex items-center justify-between mb-3">
            <span class="text-[9px] font-semibold uppercase tracking-widest text-brandBlue bg-blue-50 border border-blue-100/50 px-3 py-1 rounded-md">
              ${p.category}
            </span>
            <span class="flex items-center gap-1.5 text-[9px] font-bold text-[#16A34A] bg-green-50 border border-green-100/50 px-2.5 py-1 rounded-md">
              <span class="w-1.5 h-1.5 rounded-full bg-[#16A34A] animate-pulse"></span>
              In Stock: Shipping to India Within 24 Hours
            </span>
          </div>
          <h2 class="text-slate-900 font-bold text-2xl md:text-3xl tracking-tight mb-3 font-display uppercase leading-tight">${p.name}</h2>
          
          <div class="flex items-center gap-4 py-3 border-b border-slate-100">
            <div class="flex items-center gap-1.5 font-mono text-[10px] font-semibold text-slate-500">
              <span class="text-yellow-500 text-xs">★★★★★</span>
              <span class="font-bold text-slate-800">${p.rating}</span>
              <span>(${p.reviews} Verified Corporate Sales)</span>
            </div>
          </div>
        </div>
        
        <!-- Price display and GST breakdown -->
        <div class="p-5 bg-slate-50/50 border border-slate-100 rounded-2xl flex flex-col gap-2">
          <div class="flex items-baseline gap-2 font-mono">
            <span id="detail-price-text" class="text-slate-900 font-bold text-3xl">₹${(p.price + (isInstallationSelected ? 5999.00 : 0.00)).toLocaleString('en-IN')}</span>
            ${isInstallationSelected ? `<span class="text-xs text-slate-400 line-through">Base: ₹${p.price.toLocaleString('en-IN')}</span>` : ""}
          </div>
          <div class="text-[9px] font-semibold text-slate-400 flex flex-col gap-0.5 font-sans">
            <span>• Price includes 18% GST Invoice credit eligibility.</span>
            <span>• No-Cost EMI plans available starting from ₹${Math.round((p.price + (isInstallationSelected ? 5999.00 : 0)) / 12).toLocaleString('en-IN')}/month.</span>
          </div>
        </div>
        
        <!-- Short description -->
        <p class="text-slate-500 text-xs md:text-sm font-normal leading-relaxed font-sans">${p.description}</p>
        
        <!-- Professional Field Installation Add-on Toggle -->
        <div class="bg-white border border-slate-200 rounded-2xl p-5 flex items-center justify-between gap-4 shadow-sm hover:border-slate-300 transition-all font-sans">
          <div class="flex gap-3.5 items-start">
            <div class="w-9 h-9 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-brandBlue flex-shrink-0 mt-0.5">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <div>
              <h4 class="text-slate-900 font-bold text-xs uppercase tracking-wider">Professional Commercial Installation</h4>
              <p class="text-slate-400 text-[10px] font-semibold mt-0.5 leading-relaxed font-sans">Complimentary physical mapping layout and site integration mapping done by certified RGM engineers. (+ ₹5,999)</p>
            </div>
          </div>
          
          <label class="relative inline-flex items-center cursor-pointer">
            <input 
              type="checkbox" 
              class="sr-only peer" 
              id="install-addon-toggle" 
              ${isInstallationSelected ? "checked" : ""}
              onchange="toggleInstallationService('${p.id}', this)"
            />
            <div class="ios-toggle"></div>
          </label>
        </div>
 
        <!-- Key Features Accordion -->
        <div class="brutal-card-static p-6 bg-white">
          <h4 class="font-display font-bold text-xs uppercase tracking-wider text-slate-900 mb-3 font-sans">Core Performance Integrations</h4>
          <ul class="list-disc pl-5 text-slate-500 text-xs font-semibold space-y-2 font-sans">
            ${p.features.map(f => `<li>${f}</li>`).join("")}
          </ul>
        </div>
 
        <!-- Technical Specifications Table -->
        <div class="brutal-card-static p-6 bg-white">
          <h4 class="font-display font-bold text-xs uppercase tracking-wider text-slate-900 mb-4 font-sans">Manufacturer Technical Specifications</h4>
          <div class="grid grid-cols-2 gap-4">
            ${Object.entries(p.specs).map(([key, val]) => `
              <div class="flex flex-col pb-2 border-b border-slate-100">
                <span class="text-slate-400 font-mono text-[8px] uppercase tracking-wider font-bold">${key}</span>
                <span class="text-slate-800 font-semibold text-xs mt-0.5 font-sans">${val}</span>
              </div>
            `).join("")}
          </div>
        </div>
 
        <!-- AI Engine Features Matrix -->
        ${p.aiFeatures ? `
          <div class="brutal-card-static p-6 bg-slate-50/50">
            <h4 class="font-display font-bold text-xs uppercase tracking-wider text-brandBlue mb-4 font-sans">Integrated Neural AI Alert Engine</h4>
            <div class="flex flex-col gap-3 font-sans">
              ${p.aiFeatures.map(feat => `
                <div class="flex gap-3 items-start">
                  <span class="w-1.5 h-1.5 rounded-full bg-brandBlue mt-1.5 flex-shrink-0"></span>
                  <span class="text-xs font-semibold text-slate-600 leading-relaxed">${feat}</span>
                </div>
              `).join("")}
            </div>
          </div>
        ` : ""}
 
      </div>
    </div>
 
    <!-- Comparison Table Section -->
    <div class="max-w-7xl mx-auto px-4 md:px-8 py-10 border-t border-slate-100">
      <h3 class="font-display font-bold text-base tracking-tight mb-2 text-slate-900 uppercase">Spec Comparison Matrix</h3>
      <p class="text-slate-400 text-xs font-semibold mb-6 font-sans">Compare device technical specs with other models in the category range.</p>
      ${getComparisonTableHTML(p)}
    </div>
 
    <!-- Customer Reviews Section -->
    <div class="max-w-7xl mx-auto px-4 md:px-8 py-12 border-t border-slate-100">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        <!-- Big Rating Summary Card -->
        <div class="brutal-card-static p-6 bg-white flex flex-col items-center justify-center text-center">
          <span class="text-[9px] font-bold uppercase tracking-widest text-slate-400 font-mono">Customer Score</span>
          <span class="font-display font-bold text-5xl text-slate-900 mt-2 font-sans">4.9</span>
          <span class="text-yellow-500 text-lg mt-1">★★★★★</span>
          <span class="text-[10px] font-semibold text-slate-500 mt-2 font-sans">Based on ${p.reviews} Verified Invoices</span>
        </div>
        
        <!-- User Review Comments -->
        <div class="lg:col-span-2 flex flex-col gap-4 font-sans">
          <div class="p-5 border border-slate-200 rounded-2xl bg-white flex flex-col gap-2 hover:border-slate-300 transition-colors">
            <div class="flex items-center justify-between text-[10px] font-bold">
              <span class="text-slate-800">APEX LOGISTICS INC (Verified Client)</span>
              <span class="font-mono text-slate-400">12 Days Ago</span>
            </div>
            <p class="text-slate-500 text-xs font-semibold italic leading-relaxed">
              "Outstanding build quality. Integration with our server racks was quick, and the GST invoice deduction went through. Professional setup makes a difference."
            </p>
          </div>
          
          <div class="p-5 border border-slate-200 rounded-2xl bg-white flex flex-col gap-2 hover:border-slate-300 transition-colors">
            <div class="flex items-center justify-between text-[10px] font-bold">
              <span class="text-slate-800">SIDDHARTH K. (Home Security Setup)</span>
              <span class="font-mono text-slate-400">1 Month Ago</span>
            </div>
            <p class="text-slate-500 text-xs font-semibold italic leading-relaxed">
              "The fingerprint scan trigger works in less than a second. Clean minimalist design fits our front doorway perfectly."
            </p>
          </div>
        </div>
 
      </div>
    </div>
 
    <!-- Related Products -->
    <div class="max-w-7xl mx-auto px-4 md:px-8 py-10 border-t border-slate-100">
      <h3 class="font-display font-bold text-base tracking-tight mb-6 text-slate-900 uppercase">Related Hardware Nodes</h3>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6 font-sans">
        ${PRODUCTS.filter(item => item.category === p.category && item.id !== p.id).slice(0, 4).map(item => `
          <div onclick="showView('detail', '${item.id}')" class="group brutal-card p-4 flex flex-col justify-between cursor-pointer bg-white transition-all duration-300">
            <div class="w-full aspect-square bg-slate-50/50 flex items-center justify-center p-4 rounded-xl border border-slate-100/50 mb-3">
              <img src="${item.image}" alt="${item.name}" class="max-w-[85%] max-h-[85%] object-contain group-hover:scale-103 transition-transform duration-300 filter drop-shadow-[2px_6px_12px_rgba(0,0,0,0.02)]" />
            </div>
            <div>
              <h4 class="text-slate-800 font-bold text-[10px] uppercase truncate font-display tracking-wider">${item.name}</h4>
              <span class="text-brandBlue font-mono font-bold text-xs mt-1 block">₹${item.price.toLocaleString('en-IN')}</span>
            </div>
          </div>
        `).join("")}
      </div>
    </div>
 
    <!-- Sticky Bottom Buy & Call Bar -->
    <footer id="detail-sticky-bar" class="fixed bottom-0 left-0 w-full z-40 px-6 py-4 flex items-center justify-between bg-white border-t border-slate-100 lg:left-1/2 lg:-translate-x-1/2 lg:bottom-4 lg:max-w-3xl lg:rounded-2xl lg:border lg:shadow-xl shadow-slate-200/50">
      <div class="flex items-center gap-2">
        <a href="tel:+9118001234567" class="w-11 h-11 rounded-xl flex items-center justify-center bg-white border border-slate-200 text-slate-600 hover:border-slate-400 hover:text-slate-900 transition-colors" aria-label="Call support Hotline">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        </a>
        <a 
          href="https://wa.me/919876543210?text=I'd%20like%20to%20consult%20about%20the%20${encodeURIComponent(p.name)}" 
          target="_blank" 
          class="w-11 h-11 rounded-xl flex items-center justify-center bg-white border border-slate-200 text-slate-600 hover:bg-green-50 hover:border-green-300 hover:text-green-600 transition-colors" 
          aria-label="Contact on WhatsApp"
        >
          <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </a>
      </div>
      
      <div class="flex items-center gap-3 w-2/3 lg:w-1/2 font-sans">
        <button 
          onclick="addToCart('${p.id}')"
          class="flex-1 brutal-btn-secondary h-11 text-[10px] rounded-xl"
        >
          Add to Cart
        </button>
        <button 
          onclick="buyNow('${p.id}')"
          class="flex-1 brutal-btn-primary h-11 text-[10px] rounded-xl"
        >
          Buy Now
        </button>
      </div>
    </footer>
  `;
  
  if (p.has360) {
    setup360Viewer();
  }
}

// Set active thumbnail angle
function setDetailMainImage(imgSrc, element, filterClass = "") {
  const mainImg = document.getElementById("detail-main-img");
  if (!mainImg) return;
  
  mainImg.src = imgSrc;
  mainImg.className = `max-w-[85%] max-h-[85%] object-contain filter drop-shadow-[4px_12px_24px_rgba(0,0,0,0.08)] scale-95 transition-transform duration-200 ${filterClass}`;
  
  // Highlight active border
  const siblings = element.parentElement.children;
  for (let sib of siblings) {
    sib.className = "w-20 h-20 bg-white border border-slate-200 p-2.5 rounded-[16px] flex items-center justify-center cursor-pointer";
  }
  element.className = "w-20 h-20 bg-white border-2 border-slate-900 p-2.5 rounded-[16px] flex items-center justify-center cursor-pointer brutal-shadow-sm";
}

// 360-degree rotation view controller
function setup360Viewer() {
  const container = document.querySelector(".viewer-360-container");
  const img = document.getElementById("detail-main-img");
  const glare = document.getElementById("glare-effect");
  if (!container || !img) return;
  
  let isDragging = false;
  let startX = 0;
  let currentRotation = 0;
  let currentSkew = 0;
  
  const indicator = container.querySelector(".drag-indicator");
  
  container.addEventListener("mousedown", (e) => {
    isDragging = true;
    startX = e.pageX;
    container.classList.add("dragging");
    if (indicator) indicator.style.opacity = "0";
    gsap.to(glare, { opacity: 0.15, duration: 0.3 });
  });
  
  window.addEventListener("mouseup", () => {
    if (!isDragging) return;
    isDragging = false;
    container.classList.remove("dragging");
    gsap.to(img, { transform: "rotateY(0deg) skewY(0deg)", duration: 0.8, ease: "elastic.out(1, 0.5)" });
    gsap.to(glare, { opacity: 0, duration: 0.5 });
  });
  
  window.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    const deltaX = e.pageX - startX;
    startX = e.pageX;
    
    currentRotation += deltaX * 0.4;
    currentSkew += deltaX * 0.05;
    
    currentRotation = Math.max(-45, Math.min(45, currentRotation));
    currentSkew = Math.max(-5, Math.min(5, currentSkew));
    
    gsap.to(img, {
      transform: `rotateY(${currentRotation}deg) skewY(${currentSkew}deg)`,
      overwrite: "auto",
      duration: 0.1
    });
    
    const glareX = 50 + (currentRotation * 0.8);
    glare.style.background = `radial-gradient(circle at ${glareX}% 30%, rgba(255,255,255,0.4) 0%, transparent 60%)`;
  });
  
  // Touch support for mobile
  container.addEventListener("touchstart", (e) => {
    isDragging = true;
    startX = e.touches[0].pageX;
    container.classList.add("dragging");
    if (indicator) indicator.style.opacity = "0";
    gsap.to(glare, { opacity: 0.15, duration: 0.3 });
  });
  
  window.addEventListener("touchend", () => {
    if (!isDragging) return;
    isDragging = false;
    container.classList.remove("dragging");
    gsap.to(img, { transform: "rotateY(0deg) skewY(0deg)", duration: 0.8, ease: "elastic.out(1, 0.5)" });
    gsap.to(glare, { opacity: 0, duration: 0.5 });
  });
  
  window.addEventListener("touchmove", (e) => {
    if (!isDragging) return;
    const deltaX = e.touches[0].pageX - startX;
    startX = e.touches[0].pageX;
    
    currentRotation += deltaX * 0.4;
    currentSkew += deltaX * 0.05;
    currentRotation = Math.max(-45, Math.min(45, currentRotation));
    currentSkew = Math.max(-5, Math.min(5, currentSkew));
    
    gsap.to(img, {
      transform: `rotateY(${currentRotation}deg) skewY(${currentSkew}deg)`,
      overwrite: "auto",
      duration: 0.1
    });
    
    const glareX = 50 + (currentRotation * 0.8);
    glare.style.background = `radial-gradient(circle at ${glareX}% 30%, rgba(255,255,255,0.4) 0%, transparent 60%)`;
  });
}

// Toggle Installation service checkbox
function toggleInstallationService(productId, checkbox) {
  state.installationServicesSelected[productId] = checkbox.checked;
  saveToStorage();
  
  const p = PRODUCTS.find(prod => prod.id === productId);
  if (p) {
    const detailPriceText = document.getElementById("detail-price-text");
    if (detailPriceText) {
      const finalPrice = p.price + (checkbox.checked ? 5999.00 : 0.00);
      detailPriceText.textContent = `₹${finalPrice.toLocaleString('en-IN')}`;
      gsap.fromTo(detailPriceText, { scale: 0.95 }, { scale: 1, duration: 0.3, ease: "back.out(2)" });
    }
  }
}

// Wishlist interaction trigger
function toggleWishlist(productId, element) {
  const index = state.wishlist.indexOf(productId);
  let active = false;
  
  if (index > -1) {
    state.wishlist.splice(index, 1);
    element.classList.remove("text-[#E63946]");
  } else {
    state.wishlist.push(productId);
    element.classList.add("text-[#E63946]");
    active = true;
  }
  
  saveToStorage();
  
  element.classList.add("animate-pulse-subtle");
  setTimeout(() => {
    element.classList.remove("animate-pulse-subtle");
  }, 450);
  
  const message = active ? "Added to Wishlist" : "Removed from Wishlist";
  showToastNotification(message);
}

// Add directly from catalog grid
function addToCartDirect(productId, event) {
  addToCart(productId);
  const target = event.currentTarget;
  gsap.fromTo(target, { scale: 0.8 }, { scale: 1, duration: 0.3, ease: "back.out(2)" });
}

// State Add to Cart
function addToCart(productId) {
  const p = PRODUCTS.find(prod => prod.id === productId);
  if (!p) return;
  
  const installationSelected = !!state.installationServicesSelected[productId];
  
  const cartItemIndex = state.cart.findIndex(item => item.productId === productId && item.installation === installationSelected);
  
  if (cartItemIndex > -1) {
    state.cart[cartItemIndex].quantity += 1;
  } else {
    state.cart.push({
      productId: productId,
      quantity: 1,
      installation: installationSelected
    });
  }
  
  saveToStorage();
  updateBadgeCounts();
  renderCartDrawer();
  
  const navCart = document.getElementById("nav-cart");
  if (navCart) {
    gsap.fromTo(navCart, { scale: 0.8 }, { scale: 1, duration: 0.4, ease: "back.out(2)" });
  }
  
  showToastNotification(`${p.name} added to cart!`);
}

// Direct Checkout CTA from detail screen
function buyNow(productId) {
  addToCart(productId);
  toggleCartDrawer(true);
}

// Toast Notifications popup (Cobalt Blue Background)
function showToastNotification(message) {
  const container = document.getElementById("toast-container");
  if (!container) return;
  
  const toast = document.createElement("div");
  toast.className = "bg-[#0057FF] border-2 border-slate-950 text-white px-5 py-3.5 rounded-xl flex items-center gap-3 text-xs font-black uppercase tracking-tight pointer-events-auto mb-3";
  toast.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
      <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
    <span>${message}</span>
  `;
  
  container.appendChild(toast);
  
  gsap.fromTo(toast, { opacity: 0, y: 50, scale: 0.9 }, { opacity: 1, y: 0, scale: 1, duration: 0.35, ease: "back.out(1.5)" });
  
  setTimeout(() => {
    gsap.to(toast, { opacity: 0, scale: 0.9, y: -20, duration: 0.25, onComplete: () => toast.remove() });
  }, 2500);
}

// Render slide-out Cart Drawer contents (INR formatted)
function renderCartDrawer() {
  const listContainer = document.getElementById("cart-items-list");
  if (!listContainer) return;
  
  listContainer.innerHTML = "";
  
  if (state.cart.length === 0) {
    listContainer.innerHTML = `
      <div class="flex flex-col items-center justify-center py-20 px-6 text-center">
        <div class="w-16 h-16 rounded-xl border-2 border-slate-950 bg-slate-100 flex items-center justify-center text-slate-400 mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
        </div>
        <h4 class="text-slate-950 font-black text-sm uppercase tracking-tight">Your Cart is Empty</h4>
        <p class="text-slate-500 text-[10px] font-bold mt-1 max-w-[200px]">RGM hardware packages require scheduling. Add a security kit to begin.</p>
      </div>
    `;
    
    document.getElementById("cart-subtotal").textContent = "₹0.00";
    document.getElementById("cart-installations").textContent = "₹0.00";
    document.getElementById("cart-total").textContent = "₹0.00";
    document.getElementById("cart-checkout-btn").setAttribute("disabled", "true");
    return;
  }
  
  document.getElementById("cart-checkout-btn").removeAttribute("disabled");
  
  let subtotal = 0;
  let installationTotal = 0;
  
  state.cart.forEach((item, index) => {
    const p = PRODUCTS.find(prod => prod.id === item.productId);
    if (!p) return;
    
    const itemSubtotal = p.price * item.quantity;
    const itemInstallation = item.installation ? (5999.00 * item.quantity) : 0;
    
    subtotal += itemSubtotal;
    installationTotal += itemInstallation;
    
    const row = document.createElement("div");
    row.className = "flex gap-4 p-4 bg-white border-2 border-slate-950 rounded-2xl relative mb-3";
    
    row.innerHTML = `
      <div class="w-16 h-16 rounded-xl bg-brandSurface border border-brandDark/10 flex-shrink-0 flex items-center justify-center p-2">
        <img src="${p.image}" alt="${p.name}" class="w-full h-full object-contain" />
      </div>
      
      <div class="flex-grow flex flex-col justify-between">
        <div>
          <h5 class="text-slate-950 font-black text-xs uppercase tracking-tight line-clamp-1">${p.name}</h5>
          <p class="text-slate-500 text-[9px] font-bold mt-0.5">${p.category} ${item.installation ? '<span class="text-[#0057FF] font-extrabold">• Install Included</span>' : ''}</p>
        </div>
        
        <div class="flex items-center justify-between mt-2">
          <span class="text-slate-950 font-mono font-extrabold text-sm">₹${(p.price + (item.installation ? 5999.00 : 0)).toLocaleString('en-IN')}</span>
          
          <!-- Quantity Stepper -->
          <div class="flex items-center border-2 border-slate-950 rounded-lg overflow-hidden bg-slate-50">
            <button onclick="changeQuantity(${index}, -1)" class="w-6 h-6 flex items-center justify-center text-slate-800 hover:bg-slate-200 transition-colors text-xs font-black">-</button>
            <span class="px-2 font-mono text-xs font-black text-slate-950">${item.quantity}</span>
            <button onclick="changeQuantity(${index}, 1)" class="w-6 h-6 flex items-center justify-center text-slate-800 hover:bg-slate-200 transition-colors text-xs font-black">+</button>
          </div>
        </div>
      </div>
      
      <!-- Remove row button -->
      <button onclick="removeItem(${index})" class="absolute top-2 right-2 text-slate-400 hover:text-slate-900 border border-transparent hover:border-slate-350 rounded-md p-0.5 transition-all" aria-label="Remove item">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    `;
    
    listContainer.appendChild(row);
  });
  
  const grandTotal = subtotal + installationTotal;
  
  document.getElementById("cart-subtotal").textContent = `₹${subtotal.toLocaleString('en-IN')}`;
  document.getElementById("cart-installations").textContent = `₹${installationTotal.toLocaleString('en-IN')}`;
  document.getElementById("cart-total").textContent = `₹${grandTotal.toLocaleString('en-IN')}`;
}

// Modify cart quantities
function changeQuantity(index, delta) {
  if (state.cart[index]) {
    state.cart[index].quantity += delta;
    if (state.cart[index].quantity <= 0) {
      state.cart.splice(index, 1);
    }
    saveToStorage();
    updateBadgeCounts();
    renderCartDrawer();
  }
}

function removeItem(index) {
  state.cart.splice(index, 1);
  saveToStorage();
  updateBadgeCounts();
  renderCartDrawer();
  showToastNotification("Item removed from cart");
}

// Toggle drawer visible
function toggleCartDrawer(open) {
  const drawer = document.getElementById("cart-drawer");
  const overlay = document.getElementById("cart-drawer-overlay");
  
  if (!drawer || !overlay) return;
  
  if (open) {
    drawer.classList.remove("translate-x-full");
    overlay.classList.remove("hidden");
    renderCartDrawer();
  } else {
    drawer.classList.add("translate-x-full");
    overlay.classList.add("hidden");
  }
}

// Instant search capabilities
function renderSearchResults() {
  const query = state.searchQuery.toLowerCase().trim();
  const list = document.getElementById("search-results-list");
  if (!list) return;
  
  list.innerHTML = "";
  
  if (query.length === 0) {
    list.innerHTML = `
      <div class="py-8">
        <h4 class="text-slate-500 font-black text-[10px] uppercase tracking-wider mb-3">Trending Searches</h4>
        <div class="flex flex-wrap gap-2.5">
          <button onclick="triggerQuickSearch('4K Bullet Camera')" class="bg-white border-2 border-slate-950 brutal-shadow-sm rounded-xl px-3.5 py-1.5 text-xs font-black text-slate-800 hover:-translate-y-0.5 transition-transform active:translate-y-0.5">4K Bullet Camera</button>
          <button onclick="triggerQuickSearch('GPS Vehicle')" class="bg-white border-2 border-slate-950 brutal-shadow-sm rounded-xl px-3.5 py-1.5 text-xs font-black text-slate-800 hover:-translate-y-0.5 transition-transform active:translate-y-0.5">GPS Vehicle</button>
          <button onclick="triggerQuickSearch('Door Lock')" class="bg-white border-2 border-slate-950 brutal-shadow-sm rounded-xl px-3.5 py-1.5 text-xs font-black text-slate-800 hover:-translate-y-0.5 transition-transform active:translate-y-0.5">Door Lock</button>
          <button onclick="triggerQuickSearch('Dome CCTV')" class="bg-white border-2 border-slate-950 brutal-shadow-sm rounded-xl px-3.5 py-1.5 text-xs font-black text-slate-800 hover:-translate-y-0.5 transition-transform active:translate-y-0.5">Dome CCTV</button>
        </div>
      </div>
    `;
    return;
  }
  
  const matches = PRODUCTS.filter(p => 
    p.name.toLowerCase().includes(query) || 
    p.category.toLowerCase().includes(query) ||
    p.description.toLowerCase().includes(query)
  );
  
  if (matches.length === 0) {
    list.innerHTML = `
      <div class="py-16 text-center border-2 border-slate-950 bg-white rounded-3xl">
        <p class="text-slate-950 font-black text-sm uppercase tracking-tight">No matches found for "${state.searchQuery}"</p>
        <p class="text-slate-500 text-xs mt-1 font-bold">Try searching words like CCTV, GPS, Lock, or Dome.</p>
      </div>
    `;
    return;
  }
  
  matches.forEach(p => {
    const item = document.createElement("div");
    item.className = "flex gap-4 p-3 bg-white border border-slate-200 rounded-2xl cursor-pointer hover:border-slate-900 transition-all";
    item.setAttribute("onclick", `showView('detail', '${p.id}')`);
    
    item.innerHTML = `
      <div class="w-12 h-12 bg-brandSurface border border-brandDark/10 rounded-xl flex items-center justify-center p-2 flex-shrink-0">
        <img src="${p.image}" alt="${p.name}" class="w-full h-full object-contain" />
      </div>
      <div>
        <h5 class="text-slate-950 font-black text-xs uppercase tracking-tight">${p.name}</h5>
        <span class="text-[9px] uppercase tracking-wide font-black text-[#0057FF] block mt-0.5">${p.category}</span>
        <span class="text-slate-950 font-mono font-extrabold text-xs block mt-1">₹${p.price.toLocaleString('en-IN')}</span>
      </div>
    `;
    list.appendChild(item);
  });
}

function handleSearchInput(inputVal) {
  state.searchQuery = inputVal;
  renderSearchResults();
}

function triggerQuickSearch(term) {
  const input = document.getElementById("search-input-field");
  if (input) {
    input.value = term;
    handleSearchInput(term);
  }
}

// Checkout simulation modal controller
function openCheckoutModal() {
  toggleCartDrawer(false);
  const modal = document.getElementById("checkout-modal");
  if (modal) {
    modal.classList.remove("hidden");
    gsap.fromTo("#checkout-modal-backdrop", { opacity: 0 }, { opacity: 0.5, duration: 0.3 });
    gsap.fromTo("#checkout-modal-sheet", { y: "100%" }, { y: "0%", duration: 0.4, ease: "power3.out" });
  }
}

// Simulated Order ID Generator
function generateOrderID() {
  return "RGMS-" + Math.floor(100000 + Math.random() * 900000);
}

function closeCheckoutModal() {
  const modal = document.getElementById("checkout-modal");
  if (modal) {
    gsap.to("#checkout-modal-sheet", { y: "100%", duration: 0.3, ease: "power3.in", onComplete: () => {
      modal.classList.add("hidden");
    }});
    gsap.to("#checkout-modal-backdrop", { opacity: 0, duration: 0.3 });
  }
}

// Confetti Order success flow
function submitCheckout(e) {
  e.preventDefault();
  closeCheckoutModal();
  
  const successScreen = document.getElementById("success-screen");
  if (successScreen) {
    // Inject dynamic invoice details
    const orderNumEl = document.getElementById("success-order-number");
    if (orderNumEl) {
      orderNumEl.textContent = generateOrderID();
    }
    successScreen.classList.remove("hidden");
    gsap.fromTo("#success-dialog", { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.5)" });
    triggerConfetti();
  }
  
  state.cart = [];
  saveToStorage();
  updateBadgeCounts();
}

function closeSuccessScreen() {
  const successScreen = document.getElementById("success-screen");
  if (successScreen) {
    gsap.to("#success-dialog", { scale: 0.8, opacity: 0, duration: 0.4, onComplete: () => {
      successScreen.classList.add("hidden");
      showView("home");
    }});
  }
}

// Trigger Confetti using Canvas Confetti library
function triggerConfetti() {
  const duration = 3 * 1000;
  const end = Date.now() + duration;

  (function frame() {
    confetti({
      particleCount: 3,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors: ["#0057FF", "#111827", "#FFFFFF"]
    });
    confetti({
      particleCount: 3,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors: ["#0057FF", "#111827", "#FFFFFF"]
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  }());
}

// Sharing logic
function shareProduct(productId) {
  const p = PRODUCTS.find(prod => prod.id === productId);
  if (!p) return;
  
  const text = `Check out this premium RGM security solution: ${p.name}. Price is ₹${p.price.toLocaleString('en-IN')}`;
  
  if (navigator.share) {
    navigator.share({
      title: p.name,
      text: text,
      url: window.location.href
    }).catch(console.error);
  } else {
    navigator.clipboard.writeText(`${text} - ${window.location.href}`).then(() => {
      showToastNotification("Copied link to clipboard!");
    });
  }
}

// Initialize Application
document.addEventListener("DOMContentLoaded", () => {
  loadFromStorage();
  updateBadgeCounts();
  renderProductGrid();
  renderHeroCarousel();
  renderRecentlyViewedGrid();
  startReviewsAutoplay();
  
  const hash = window.location.hash;
  if (hash.startsWith("#detail-")) {
    const id = hash.replace("#detail-", "");
    showView("detail", id);
  } else if (hash === "#search") {
    showView("search");
  } else {
    showView("home");
  }
  
  if (typeof Lenis !== "undefined") {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });
    
    window.lenisInstance = lenis;
    
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    
    requestAnimationFrame(raf);
  }
  
  // Initialize scroll reveals
  initScrollReveal();
});

// ============================================
// FAQ ACCORDION TOGGLE
// ============================================
function toggleFaq(button) {
  const faqItem = button.closest('.faq-item');
  const answer = faqItem.querySelector('.faq-answer');
  const chevron = button.querySelector('.faq-chevron');
  const isOpen = !answer.classList.contains('hidden');

  // Close all other open FAQ items in the same accordion
  const accordion = faqItem.parentElement;
  accordion.querySelectorAll('.faq-item').forEach(item => {
    if (item !== faqItem) {
      item.querySelector('.faq-answer')?.classList.add('hidden');
      item.querySelector('.faq-chevron')?.style && (item.querySelector('.faq-chevron').style.transform = 'rotate(0deg)');
    }
  });

  // Toggle current
  if (isOpen) {
    answer.classList.add('hidden');
    chevron.style.transform = 'rotate(0deg)';
  } else {
    answer.classList.remove('hidden');
    chevron.style.transform = 'rotate(180deg)';
  }
}

// ============================================
// PREMIUM SCROLL REVEAL (IntersectionObserver)
// ============================================
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal-section');
  if (revealElements.length === 0) return;
  
  const observerOptions = {
    threshold: 0.05,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        // Unobserve to trigger animation exactly once for maximum performance
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  revealElements.forEach(el => {
    revealObserver.observe(el);
  });
}

// Toggle mobile menu drawer
function toggleMobileMenu(open) {
  const drawer = document.getElementById("mobile-menu-drawer");
  const overlay = document.getElementById("mobile-menu-overlay");
  
  if (!drawer || !overlay) return;
  
  if (open) {
    drawer.classList.remove("translate-x-full");
    overlay.classList.remove("hidden");
  } else {
    drawer.classList.add("translate-x-full");
    overlay.classList.add("hidden");
  }
}

// Toggle mobile categories accordion
function toggleMobileCategoriesAccordion() {
  const list = document.getElementById("mobile-categories-list");
  const chevron = document.getElementById("mobile-categories-chevron");
  if (!list || !chevron) return;
  
  if (list.classList.contains("hidden")) {
    list.classList.remove("hidden");
    chevron.classList.add("rotate-180");
  } else {
    list.classList.add("hidden");
    chevron.classList.remove("rotate-180");
  }
}

// Mobile Testimonials Carousel scroll action
function scrollReviews(direction) {
  const container = document.getElementById("reviews-carousel-container");
  if (!container) return;
  
  // Calculate first card width plus gap (24px)
  const firstCard = container.firstElementChild;
  if (!firstCard) return;
  
  const scrollOffset = firstCard.getBoundingClientRect().width + 24;
  if (direction === "left") {
    container.scrollBy({ left: -scrollOffset, behavior: "smooth" });
  } else {
    container.scrollBy({ left: scrollOffset, behavior: "smooth" });
  }
}

// Start automatic reviews slide transitions on all devices
let reviewsAutoplayTimer = null;
function startReviewsAutoplay() {
  if (reviewsAutoplayTimer) clearInterval(reviewsAutoplayTimer);
  
  reviewsAutoplayTimer = setInterval(() => {
    const container = document.getElementById("reviews-carousel-container");
    if (!container) return;
    
    const firstCard = container.firstElementChild;
    if (!firstCard) return;
    
    const cardWidth = firstCard.getBoundingClientRect().width + 24;
    const maxScroll = container.scrollWidth - container.clientWidth;
    
    // Reset to start if we reach the end, otherwise slide right by one card
    if (Math.ceil(container.scrollLeft) >= maxScroll - 5) {
      container.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      container.scrollBy({ left: cardWidth, behavior: "smooth" });
    }
  }, 4000);
}

// Scroll categories helper function
function scrollCategories(direction) {
  const container = document.getElementById("category-cards-slider");
  if (!container) return;
  
  const firstCard = container.firstElementChild;
  if (!firstCard) return;
  
  // Scroll by 1 card width + 16px gap
  const scrollOffset = (firstCard.getBoundingClientRect().width + 16) * direction;
  container.scrollBy({ left: scrollOffset, behavior: "smooth" });
}

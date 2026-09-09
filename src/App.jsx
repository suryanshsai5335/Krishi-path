import React, { useEffect, useMemo, useState } from "react";
import {
  LayoutDashboard,
  Leaf,
  ShoppingBag,
  Building2,
  Truck,
  Package,
  Users,
  BarChart3,
  Zap,
  MapPin,
  IndianRupee,
  Search,
  Plus,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  Clock3,
  Wifi,
  WifiOff,
  RefreshCw,
  Menu,
  X,
  Bell,
  ChevronRight,
  TrendingUp,
  TrendingDown,
  ShieldCheck,
  Database,
  Route,
  Target,
  Activity,
  CalendarDays,
  CircleUserRound,
  Factory,
  ShoppingCart,
  Sparkles,
  Info,
  SlidersHorizontal,
  Box,
  Trash2,
  Check,
  Languages,
  BarChart3 as AnalyticsIcon,
} from "lucide-react";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  BarChart,
  Bar,
} from "recharts";

/* =========================================================
   KRISHIPATH — SIH 2026 PROTOTYPE
   Frontend-only demonstration
   No backend required for this demo.
========================================================= */

const INITIAL_PRODUCE = [
  {
    id: "KP-TOM-101",
    name: "Premium Tomatoes",
    crop: "Tomato",
    farmer: "Rajesh Kumar",
    fpo: "Nashik FPO",
    location: "Nashik",
    quantity: 500,
    unit: "kg",
    price: 28,
    quality: "Grade A",
    harvestDate: "2026-09-07",
    perishability: "High",
    emoji: "🍅",
  },
  {
    id: "KP-ONI-102",
    name: "Organic Onions",
    crop: "Onion",
    farmer: "Sunita Devi",
    fpo: "Pune Collective",
    location: "Pune",
    quantity: 1200,
    unit: "kg",
    price: 18,
    quality: "Grade A",
    harvestDate: "2026-09-05",
    perishability: "Low",
    emoji: "🧅",
  },
  {
    id: "KP-CHI-103",
    name: "Green Chillies",
    crop: "Green Chilli",
    farmer: "Amit Singh",
    fpo: "Nagpur Agri Hub",
    location: "Nagpur",
    quantity: 200,
    unit: "kg",
    price: 45,
    quality: "Grade B",
    harvestDate: "2026-09-06",
    perishability: "Medium",
    emoji: "🌶️",
  },
  {
    id: "KP-POT-104",
    name: "Fresh Potatoes",
    crop: "Potato",
    farmer: "Rajesh Kumar",
    fpo: "Nashik FPO",
    location: "Nashik",
    quantity: 1000,
    unit: "kg",
    price: 22,
    quality: "Grade A",
    harvestDate: "2026-09-08",
    perishability: "Low",
    emoji: "🥔",
  },
];

const INITIAL_REQUESTS = [
  {
    id: "REQ-001",
    buyer: "Hotel Grand Mumbai",
    product: "Tomato",
    quantity: 2000,
    quality: "Grade A",
    targetPrice: 35,
    destination: "Mumbai",
    deadline: "2026-09-10",
  },
  {
    id: "REQ-002",
    buyer: "FreshMart Retail",
    product: "Onion",
    quantity: 1500,
    quality: "Grade A",
    targetPrice: 25,
    destination: "Pune",
    deadline: "2026-09-11",
  },
];

const INITIAL_ORDERS = [
  {
    id: "ORD-24091",
    batchId: "KP-TOM-101",
    product: "Premium Tomatoes",
    quantity: 300,
    price: 28,
    buyer: "Hotel Grand Mumbai",
    farmer: "Rajesh Kumar",
    destination: "Mumbai",
    status: "Pickup Scheduled",
    created: "08 Sep 2026",
  },
];

const PRICE_HISTORY = [
  { day: "Mon", price: 25 },
  { day: "Tue", price: 26 },
  { day: "Wed", price: 27 },
  { day: "Thu", price: 26 },
  { day: "Fri", price: 29 },
  { day: "Sat", price: 30 },
  { day: "Sun", price: 31 },
];

const ROUTES = {
  Nashik: { x: 120, y: 190 },
  Pune: { x: 240, y: 320 },
  Mumbai: { x: 75, y: 330 },
  Nagpur: { x: 540, y: 180 },
  Bhubaneswar: { x: 760, y: 300 },
};

const LANGUAGE = {
  en: {
    dashboard:"Dashboard", marketplace:"Marketplace", farmer:"Farmer Portal", fpo:"FPO Hub", bulk:"Bulk Buyer", logistics:"Logistics", orders:"Orders", ai:"AI Insights", impact:"Impact",
    search:"Search", notifications:"Notifications", online:"Online", offline:"Offline", save:"Save", cancel:"Cancel", submit:"Submit", continue:"Continue", back:"Back", viewAll:"View All", learnMore:"Learn More", close:"Close", refresh:"Refresh", loading:"Loading", kg:"kg",
    farmerName:"Rajesh", goodMorning:"Good morning", listHarvest:"List New Harvest", sellProduce:"Sell Produce", findBuyer:"Find Buyer", trackOrder:"Track Order", smartAdvice:"Smart Advice", marketPrice:"Market Price", todaysPrice:"Today's Price", recommendedPrice:"Recommended Price", quantity:"Quantity", quality:"Quality", harvestDate:"Harvest Date", perishability:"Perishability",
    availableProduce:"Available Produce", acrossActiveListings:"Across active listings", activeOrders:"Active Orders", ordersInSupplyChain:"Orders in supply chain", orderValue:"Order Value", currentDemoValue:"Current demo value", priorityBatches:"Priority Batches", requireFasterDispatch:"Require faster dispatch",
    procurementControlCenter:"Procurement Control Center", logisticsOperationsCenter:"Logistics Operations Center", fpoOperationsDashboard:"FPO Operations Dashboard", krishiPathCommandCenter:"KrishiPath Command Center", dashboardDescription:"Connect farmers, buyers and logistics through one transparent farm-to-market network.", exploreMarketplace:"Explore Marketplace", demoJourney:"Demo Journey",
    supplyDemandSignal:"Supply & Demand Signal", prototypeMarketSignal:"Prototype market signal for demonstration", liveSimulation:"Live Simulation", todaysSmartActions:"Today's Smart Actions", recommendedNextSteps:"Recommended next steps", reviewTomatoPrice:"Review Tomato Price", demandUpward:"Demand signal indicates upward movement", priorityBatchesAction:"priority batches", checkPerishability:"Check perishability and dispatch", buyerMatchAvailable:"Buyer Match Available", potentialTomatoMatch:"Potential Grade-A tomato match", routeOptimization:"Route Optimization", multiStopReady:"Multi-stop logistics simulation ready", supplyChain:"KrishiPath Supply Chain", oneTraceableJourney:"One traceable journey from harvest to buyer", price:"Price", fairRecommendation:"Fair Recommendation", match:"Match", order:"Order", createTransaction:"Create Transaction", receiveProduce:"Receive Produce",
    farmerPortal:"Farmer Portal", farmerPortalSubtitle:"Turn your harvest into a transparent digital listing.", onlineSync:"Online Sync", offlineReady:"Offline Ready", enterCropDetails:"Enter your crop details", askingPrice:"Asking Price / kg",
    directMarketplace:"Direct Farm Marketplace", marketplaceSubtitle:"Discover produce directly from farmers and FPOs.", cart:"Cart", searchCrop:"Search crop, farmer or location...", noProduce:"No produce found", tryAnother:"Try another crop, farmer or filter.", available:"AVAILABLE", farmerLabel:"FARMER", addToCart:"Add to Cart", itemsInCart:"item(s) in cart", selectedForPurchase:"kg selected for purchase", checkout:"Checkout",
    orderManagement:"Order Management", orderManagementSubtitle:"Track transactions across the KrishiPath supply chain.", noOrders:"No orders yet", createOrder:"Create an order from the marketplace or buyer portal.", totalOrders:"TOTAL ORDERS", active:"ACTIVE", product:"Product", buyer:"Buyer", value:"Value", status:"Status", batch:"Batch",
    fpoHub:"FPO Hub", fpoHubSubtitle:"Aggregate farmer supply and coordinate procurement.", fposConnected:"FPOs Connected", activeDemoNetwork:"Active demonstration network", farmersReached:"Farmers Reached", visibleListings:"Across visible listings", aggregatedSupply:"Aggregated Supply", currentInventory:"Current available inventory", activeBatches:"Active Batches", traceableBatches:"Traceable produce batches", fpoSupplyNetwork:"FPO Supply Network", participatingGroups:"Aggregated view of participating producer groups", farmers:"Farmers", batches:"Batches", supply:"Supply", viewSupply:"View Supply",
    english:"English", hindi:"हिंदी", odia:"ଓଡ଼ିଆ"
  },
  hi: {
    dashboard:"डैशबोर्ड", marketplace:"बाज़ार", farmer:"किसान पोर्टल", fpo:"FPO केंद्र", bulk:"थोक खरीदार", logistics:"लॉजिस्टिक्स", orders:"आदेश", ai:"AI अंतर्दृष्टि", impact:"प्रभाव",
    search:"खोजें", notifications:"सूचनाएँ", online:"ऑनलाइन", offline:"ऑफ़लाइन", save:"सहेजें", cancel:"रद्द करें", submit:"जमा करें", continue:"जारी रखें", back:"वापस", viewAll:"सभी देखें", learnMore:"और जानें", close:"बंद करें", refresh:"रिफ्रेश", loading:"लोड हो रहा है", kg:"किग्रा",
    farmerName:"राजेश", goodMorning:"सुप्रभात", listHarvest:"नई फसल सूचीबद्ध करें", sellProduce:"उपज बेचें", findBuyer:"खरीदार खोजें", trackOrder:"ऑर्डर ट्रैक करें", smartAdvice:"स्मार्ट सलाह", marketPrice:"बाज़ार भाव", todaysPrice:"आज का भाव", recommendedPrice:"अनुशंसित भाव", quantity:"मात्रा", quality:"गुणवत्ता", harvestDate:"फसल की तारीख", perishability:"खराब होने की दर",
    availableProduce:"उपलब्ध उपज", acrossActiveListings:"सक्रिय लिस्टिंग में", activeOrders:"सक्रिय ऑर्डर", ordersInSupplyChain:"सप्लाई चेन के ऑर्डर", orderValue:"ऑर्डर मूल्य", currentDemoValue:"वर्तमान डेमो मूल्य", priorityBatches:"प्राथमिकता बैच", requireFasterDispatch:"तेज़ डिस्पैच आवश्यक",
    procurementControlCenter:"खरीद नियंत्रण केंद्र", logisticsOperationsCenter:"लॉजिस्टिक्स संचालन केंद्र", fpoOperationsDashboard:"FPO संचालन डैशबोर्ड", krishiPathCommandCenter:"KrishiPath कमांड सेंटर", dashboardDescription:"किसानों, खरीदारों और लॉजिस्टिक्स को एक पारदर्शी खेत-से-बाज़ार नेटवर्क से जोड़ें।", exploreMarketplace:"मार्केटप्लेस देखें", demoJourney:"डेमो यात्रा",
    supplyDemandSignal:"आपूर्ति और मांग संकेत", prototypeMarketSignal:"डेमो के लिए बाज़ार संकेत", liveSimulation:"लाइव सिमुलेशन", todaysSmartActions:"आज की स्मार्ट कार्रवाइयाँ", recommendedNextSteps:"अनुशंसित अगले कदम", reviewTomatoPrice:"टमाटर का भाव देखें", demandUpward:"मांग बढ़ने का संकेत", priorityBatchesAction:"प्राथमिकता बैच", checkPerishability:"खराब होने और डिस्पैच की जाँच करें", buyerMatchAvailable:"खरीदार मैच उपलब्ध", potentialTomatoMatch:"संभावित Grade-A टमाटर मैच", routeOptimization:"रूट ऑप्टिमाइज़ेशन", multiStopReady:"मल्टी-स्टॉप लॉजिस्टिक्स सिमुलेशन तैयार", supplyChain:"KrishiPath सप्लाई चेन", oneTraceableJourney:"फसल से खरीदार तक एक ट्रेस करने योग्य यात्रा", price:"भाव", fairRecommendation:"उचित अनुशंसा", match:"मैच", order:"ऑर्डर", createTransaction:"लेन-देन बनाएँ", receiveProduce:"उपज प्राप्त करें",
    farmerPortal:"किसान पोर्टल", farmerPortalSubtitle:"अपनी फसल को पारदर्शी डिजिटल लिस्टिंग में बदलें।", onlineSync:"ऑनलाइन सिंक", offlineReady:"ऑफ़लाइन तैयार", enterCropDetails:"अपनी फसल का विवरण दर्ज करें", askingPrice:"मांग मूल्य / किग्रा",
    directMarketplace:"सीधा किसान बाज़ार", marketplaceSubtitle:"किसानों और FPO से सीधे उपज खोजें।", cart:"कार्ट", searchCrop:"फसल, किसान या स्थान खोजें...", noProduce:"कोई उपज नहीं मिली", tryAnother:"दूसरी फसल, किसान या फ़िल्टर आज़माएँ।", available:"उपलब्ध", farmerLabel:"किसान", addToCart:"कार्ट में जोड़ें", itemsInCart:"कार्ट में आइटम", selectedForPurchase:"किग्रा खरीद के लिए चयनित", checkout:"चेकआउट",
    orderManagement:"ऑर्डर प्रबंधन", orderManagementSubtitle:"KrishiPath सप्लाई चेन में लेन-देन ट्रैक करें।", noOrders:"अभी कोई ऑर्डर नहीं", createOrder:"मार्केटप्लेस या खरीदार पोर्टल से ऑर्डर बनाएँ।", totalOrders:"कुल ऑर्डर", active:"सक्रिय", product:"उत्पाद", buyer:"खरीदार", value:"मूल्य", status:"स्थिति", batch:"बैच",
    fpoHub:"FPO केंद्र", fpoHubSubtitle:"किसानों की आपूर्ति एकत्र करें और खरीद का समन्वय करें।", fposConnected:"जुड़े FPO", activeDemoNetwork:"सक्रिय डेमो नेटवर्क", farmersReached:"पहुंचे किसान", visibleListings:"दिख रही लिस्टिंग में", aggregatedSupply:"एकत्रित आपूर्ति", currentInventory:"वर्तमान उपलब्ध इन्वेंटरी", activeBatches:"सक्रिय बैच", traceableBatches:"ट्रेस करने योग्य उपज बैच", fpoSupplyNetwork:"FPO आपूर्ति नेटवर्क", participatingGroups:"भाग लेने वाले उत्पादक समूहों का एकत्रित दृश्य", farmers:"किसान", batches:"बैच", supply:"आपूर्ति", viewSupply:"आपूर्ति देखें",
    english:"English", hindi:"हिंदी", odia:"ଓଡ଼ିଆ"
  },
  or: {
    dashboard:"ଡ୍ୟାସବୋର୍ଡ", marketplace:"ବଜାର", farmer:"କୃଷକ ପୋର୍ଟାଲ", fpo:"FPO କେନ୍ଦ୍ର", bulk:"ବଲ୍କ କ୍ରେତା", logistics:"ଲଜିଷ୍ଟିକ୍ସ", orders:"ଅର୍ଡର", ai:"AI ଅନ୍ତର୍ଦୃଷ୍ଟି", impact:"ପ୍ରଭାବ",
    search:"ଖୋଜନ୍ତୁ", notifications:"ବିଜ୍ଞପ୍ତି", online:"ଅନଲାଇନ", offline:"ଅଫଲାଇନ", save:"ସଞ୍ଚୟ", cancel:"ବାତିଲ", submit:"ଦାଖଲ", continue:"ଜାରି ରଖନ୍ତୁ", back:"ପଛକୁ", viewAll:"ସବୁ ଦେଖନ୍ତୁ", learnMore:"ଅଧିକ ଜାଣନ୍ତୁ", close:"ବନ୍ଦ", refresh:"ରିଫ୍ରେଶ", loading:"ଲୋଡ୍ ହେଉଛି", kg:"କିଗ୍ରା",
    farmerName:"ରାଜେଶ", goodMorning:"ଶୁଭ ସକାଳ", listHarvest:"ନୂଆ ଫସଲ ତାଲିକାଭୁକ୍ତ କରନ୍ତୁ", sellProduce:"ଉତ୍ପାଦ ବିକ୍ରି କରନ୍ତୁ", findBuyer:"କ୍ରେତା ଖୋଜନ୍ତୁ", trackOrder:"ଅର୍ଡର ଟ୍ରାକ୍ କରନ୍ତୁ", smartAdvice:"ସ୍ମାର୍ଟ ପରାମର୍ଶ", marketPrice:"ବଜାର ଦର", todaysPrice:"ଆଜିର ଦର", recommendedPrice:"ସୁପାରିଶ ଦର", quantity:"ପରିମାଣ", quality:"ଗୁଣବତ୍ତା", harvestDate:"ଅମଳ ତାରିଖ", perishability:"ନଷ୍ଟ ହେବା ଝୁମ୍ପ",
    availableProduce:"ଉପଲବ୍ଧ ଉତ୍ପାଦ", acrossActiveListings:"ସକ୍ରିୟ ତାଲିକାରେ", activeOrders:"ସକ୍ରିୟ ଅର୍ଡର", ordersInSupplyChain:"ସପ୍ଲାଇ ଚେନ୍ ଅର୍ଡର", orderValue:"ଅର୍ଡର ମୂଲ୍ୟ", currentDemoValue:"ବର୍ତ୍ତମାନ ଡେମୋ ମୂଲ୍ୟ", priorityBatches:"ପ୍ରାଥମିକତା ବ୍ୟାଚ୍", requireFasterDispatch:"ତୁରନ୍ତ ପଠାଇବା ଆବଶ୍ୟକ",
    procurementControlCenter:"କ୍ରୟ ନିୟନ୍ତ୍ରଣ କେନ୍ଦ୍ର", logisticsOperationsCenter:"ଲଜିଷ୍ଟିକ୍ସ ପରିଚାଳନା କେନ୍ଦ୍ର", fpoOperationsDashboard:"FPO ପରିଚାଳନା ଡ୍ୟାସବୋର୍ଡ", krishiPathCommandCenter:"KrishiPath କମାଣ୍ଡ ସେଣ୍ଟର", dashboardDescription:"କୃଷକ, କ୍ରେତା ଏବଂ ଲଜିଷ୍ଟିକ୍ସକୁ ଗୋଟିଏ ସ୍ୱଚ୍ଛ ଖେତରୁ ବଜାର ନେଟୱର୍କରେ ଯୋଡନ୍ତୁ।", exploreMarketplace:"ମାର୍କେଟପ୍ଲେସ୍ ଦେଖନ୍ତୁ", demoJourney:"ଡେମୋ ଯାତ୍ରା",
    supplyDemandSignal:"ଯୋଗାଣ ଏବଂ ଚାହିଦା ସଙ୍କେତ", prototypeMarketSignal:"ଡେମୋ ପାଇଁ ବଜାର ସଙ୍କେତ", liveSimulation:"ଲାଇଭ୍ ସିମୁଲେସନ୍", todaysSmartActions:"ଆଜିର ସ୍ମାର୍ଟ କାର୍ଯ୍ୟ", recommendedNextSteps:"ପରବର୍ତ୍ତୀ ସୁପାରିଶିତ ପଦକ୍ଷେପ", reviewTomatoPrice:"ଟମାଟୋ ଦର ଯାଞ୍ଚ କରନ୍ତୁ", demandUpward:"ଚାହିଦା ବଢ଼ିବାର ସଙ୍କେତ", priorityBatchesAction:"ପ୍ରାଥମିକତା ବ୍ୟାଚ୍", checkPerishability:"ନଷ୍ଟ ହେବା ଏବଂ ପଠାଣ ଯାଞ୍ଚ କରନ୍ତୁ", buyerMatchAvailable:"କ୍ରେତା ମ୍ୟାଚ୍ ଉପଲବ୍ଧ", potentialTomatoMatch:"ସମ୍ଭାବ୍ୟ Grade-A ଟମାଟୋ ମ୍ୟାଚ୍", routeOptimization:"ରୁଟ୍ ଅପ୍ଟିମାଇଜେସନ୍", multiStopReady:"ମଲ୍ଟି-ଷ୍ଟପ୍ ଲଜିଷ୍ଟିକ୍ସ ସିମୁଲେସନ୍ ପ୍ରସ୍ତୁତ", supplyChain:"KrishiPath ସପ୍ଲାଇ ଚେନ୍", oneTraceableJourney:"ଅମଳରୁ କ୍ରେତା ପର୍ଯ୍ୟନ୍ତ ଟ୍ରେସ୍ କରିପାରିବା ଯାତ୍ରା", price:"ଦର", fairRecommendation:"ନ୍ୟାୟସଙ୍ଗତ ସୁପାରିଶ", match:"ମ୍ୟାଚ୍", order:"ଅର୍ଡର", createTransaction:"ଲେନଦେନ ସୃଷ୍ଟି", receiveProduce:"ଉତ୍ପାଦ ଗ୍ରହଣ",
    farmerPortal:"କୃଷକ ପୋର୍ଟାଲ", farmerPortalSubtitle:"ଆପଣଙ୍କ ଅମଳକୁ ସ୍ୱଚ୍ଛ ଡିଜିଟାଲ ତାଲିକାରେ ପରିଣତ କରନ୍ତୁ।", onlineSync:"ଅନଲାଇନ ସିଙ୍କ", offlineReady:"ଅଫଲାଇନ ପ୍ରସ୍ତୁତ", enterCropDetails:"ଫସଲ ବିବରଣୀ ଦିଅନ୍ତୁ", askingPrice:"ଚାହିତ ଦର / କିଗ୍ରା",
    directMarketplace:"ସିଧା କୃଷକ ବଜାର", marketplaceSubtitle:"କୃଷକ ଏବଂ FPO ଠାରୁ ସିଧାସଳଖ ଉତ୍ପାଦ ଖୋଜନ୍ତୁ।", cart:"କାର୍ଟ", searchCrop:"ଫସଲ, କୃଷକ କିମ୍ବା ସ୍ଥାନ ଖୋଜନ୍ତୁ...", noProduce:"କୌଣସି ଉତ୍ପାଦ ମିଳିଲା ନାହିଁ", tryAnother:"ଅନ୍ୟ ଫସଲ, କୃଷକ କିମ୍ବା ଫିଲ୍ଟର ଚେଷ୍ଟା କରନ୍ତୁ।", available:"ଉପଲବ୍ଧ", farmerLabel:"କୃଷକ", addToCart:"କାର୍ଟରେ ଯୋଡନ୍ତୁ", itemsInCart:"କାର୍ଟରେ ଆଇଟମ୍", selectedForPurchase:"କିଗ୍ରା କ୍ରୟ ପାଇଁ ଚୟନ", checkout:"ଚେକଆଉଟ୍",
    orderManagement:"ଅର୍ଡର ପରିଚାଳନା", orderManagementSubtitle:"KrishiPath ସପ୍ଲାଇ ଚେନରେ ଲେନଦେନ ଟ୍ରାକ୍ କରନ୍ତୁ।", noOrders:"ଏପର୍ଯ୍ୟନ୍ତ ଅର୍ଡର ନାହିଁ", createOrder:"ମାର୍କେଟପ୍ଲେସ୍ କିମ୍ବା କ୍ରେତା ପୋର୍ଟାଲରୁ ଅର୍ଡର ସୃଷ୍ଟି କରନ୍ତୁ।", totalOrders:"ମୋଟ ଅର୍ଡର", active:"ସକ୍ରିୟ", product:"ଉତ୍ପାଦ", buyer:"କ୍ରେତା", value:"ମୂଲ୍ୟ", status:"ସ୍ଥିତି", batch:"ବ୍ୟାଚ୍",
    fpoHub:"FPO କେନ୍ଦ୍ର", fpoHubSubtitle:"କୃଷକ ଯୋଗାଣ ଏକତ୍ର କରି କ୍ରୟ ସମନ୍ୱୟ କରନ୍ତୁ।", fposConnected:"ସଂଯୁକ୍ତ FPO", activeDemoNetwork:"ସକ୍ରିୟ ଡେମୋ ନେଟୱର୍କ", farmersReached:"ପହଞ୍ଚିଥିବା କୃଷକ", visibleListings:"ଦୃଶ୍ୟମାନ ତାଲିକାରେ", aggregatedSupply:"ଏକତ୍ରିତ ଯୋଗାଣ", currentInventory:"ବର୍ତ୍ତମାନ ଉପଲବ୍ଧ ଇନଭେଣ୍ଟରୀ", activeBatches:"ସକ୍ରିୟ ବ୍ୟାଚ୍", traceableBatches:"ଟ୍ରେସ୍ କରିପାରିବା ଉତ୍ପାଦ ବ୍ୟାଚ୍", fpoSupplyNetwork:"FPO ଯୋଗାଣ ନେଟୱର୍କ", participatingGroups:"ଅଂଶଗ୍ରହଣକାରୀ ଉତ୍ପାଦକ ଗୋଷ୍ଠୀର ଏକତ୍ରିତ ଦୃଶ୍ୟ", farmers:"କୃଷକ", batches:"ବ୍ୟାଚ୍", supply:"ଯୋଗାଣ", viewSupply:"ଯୋଗାଣ ଦେଖନ୍ତୁ",
    english:"English", hindi:"हिंदी", odia:"ଓଡ଼ିଆ"
  }
};

/* =========================================================
   HELPERS
========================================================= */

function makeId(prefix) {
  return `${prefix}-${Date.now()}-${Math.floor(Math.random() * 999)}`;
}

function formatMoney(value) {
  return `₹${Number(value || 0).toLocaleString("en-IN")}`;
}

function daysSince(dateString) {
  const harvest = new Date(`${dateString}T12:00:00`);
  const now = new Date();
  const diff = Math.max(0, now - harvest);
  return diff / (1000 * 60 * 60 * 24);
}

function perishabilityInfo(item) {
  const age = daysSince(item.harvestDate);

  const shelfLife =
    item.perishability === "High"
      ? 3
      : item.perishability === "Medium"
        ? 6
        : 20;

  const remaining = Math.max(0, shelfLife - age);

  let priority = "NORMAL";

  if (remaining <= 1) priority = "CRITICAL";
  else if (remaining <= 2) priority = "HIGH";
  else if (item.perishability === "High") priority = "HIGH";

  return {
    age: age.toFixed(1),
    remaining: remaining.toFixed(1),
    priority,
  };
}

function calculatePrice(product) {
  const demandFactor =
    product.crop === "Tomato"
      ? 1.12
      : product.crop === "Green Chilli"
        ? 1.08
        : 1.05;

  const supplyFactor = product.quantity > 800 ? 0.96 : 1;

  const recommended = Math.round(
    product.price * demandFactor * (1 / supplyFactor)
  );

  return {
    recommended,
    confidence: product.quality === "Grade A" ? 91 : 84,
    demand: Math.round((demandFactor - 1) * 100),
    supply: supplyFactor < 1 ? 4 : 0,
  };
}

function matchScore(listing, request) {
  let score = 0;

  if (
    listing.crop.toLowerCase() === request.product.toLowerCase() ||
    listing.name.toLowerCase().includes(request.product.toLowerCase())
  ) {
    score += 40;
  }

  if (listing.price <= request.targetPrice) score += 20;

  if (listing.quality === request.quality) score += 20;

  if (listing.quantity >= request.quantity * 0.25) score += 10;

  if (listing.location === request.destination) score += 10;

  return Math.min(score, 100);
}

/* =========================================================
   APP
========================================================= */

export default function KrishiPath() {
  const [role, setRole] = useState("farmer");
  const [page, setPage] = useState("dashboard");
  const [language, setLanguage] = useState("en");

  const [produce, setProduce] = useState(INITIAL_PRODUCE);
  const [requests] = useState(INITIAL_REQUESTS);
  const [orders, setOrders] = useState(INITIAL_ORDERS);

  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const [online, setOnline] = useState(true);
  const [syncQueue, setSyncQueue] = useState([]);

  const [notifications, setNotifications] = useState([]);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showDemo, setShowDemo] = useState(false);

  const [farmerForm, setFarmerForm] = useState({
    crop: "Tomato",
    quantity: 500,
    price: 28,
    quality: "Grade A",
    perishability: "High",
    harvestDate: new Date().toISOString().split("T")[0],
  });

  const t = LANGUAGE[language];

  /* -------------------------------------------------------
     Notifications
  ------------------------------------------------------- */

  const notify = (message, type = "success") => {
    const id = Date.now();

    setNotifications((prev) => [
      ...prev,
      {
        id,
        message,
        type,
      },
    ]);

    setTimeout(() => {
      setNotifications((prev) => prev.filter((n) => n.id !== id));
    }, 3500);
  };

  /* -------------------------------------------------------
     Role navigation
  ------------------------------------------------------- */

  const navigation = [
    {
      id: "dashboard",
      label: t.dashboard,
      icon: LayoutDashboard,
      roles: ["farmer", "fpo", "bulk", "logistics", "admin", "consumer"],
    },
    {
      id: "marketplace",
      label: t.marketplace,
      icon: ShoppingBag,
      roles: ["farmer", "bulk", "consumer"],
    },
    {
      id: "farmer",
      label: t.farmer,
      icon: Leaf,
      roles: ["farmer"],
    },
    {
      id: "fpo",
      label: t.fpo,
      icon: Building2,
      roles: ["fpo", "admin"],
    },
    {
      id: "bulk",
      label: t.bulk,
      icon: IndianRupee,
      roles: ["bulk"],
    },
    {
      id: "logistics",
      label: t.logistics,
      icon: Truck,
      roles: ["logistics", "admin"],
    },
    {
      id: "orders",
      label: t.orders,
      icon: Package,
      roles: ["farmer", "fpo", "bulk", "consumer", "logistics"],
    },
    {
      id: "ai",
      label: t.ai,
      icon: Sparkles,
      roles: ["farmer", "fpo", "admin"],
    },
    {
      id: "impact",
      label: t.impact,
      icon: BarChart3,
      roles: ["admin", "farmer", "fpo", "bulk", "consumer", "logistics"],
    },
    { id: "intelligence", label: "Demand-to-Farm", icon: Target, roles: ["farmer", "fpo", "admin", "bulk"] },
    { id: "copilot", label: "KrishiPath Copilot", icon: Sparkles, roles: ["farmer", "fpo", "admin", "bulk", "consumer"] },
    { id: "tracking", label: "QR & Batch Tracking", icon: Box, roles: ["farmer", "fpo", "admin", "logistics", "bulk"] },
  ];

  const allowedNavigation = navigation.filter(
    (item) => item.roles.includes(role) || role === "admin"
  );

  const changeRole = (newRole) => {
    setRole(newRole);
    setPage("dashboard");
    setMobileMenu(false);
  };

  /* -------------------------------------------------------
     Derived data
  ------------------------------------------------------- */

  const totalStock = useMemo(
    () => produce.reduce((sum, item) => sum + item.quantity, 0),
    [produce]
  );

  const totalOrdersValue = useMemo(
    () =>
      orders.reduce(
        (sum, order) => sum + order.quantity * order.price,
        0
      ),
    [orders]
  );

  const criticalItems = useMemo(
    () =>
      produce.filter(
        (item) => perishabilityInfo(item).priority === "CRITICAL"
      ),
    [produce]
  );

  const filteredProduce = useMemo(() => {
    return produce.filter((item) => {
      const searchMatch =
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.crop.toLowerCase().includes(search.toLowerCase()) ||
        item.farmer.toLowerCase().includes(search.toLowerCase());

      const filterMatch =
        filter === "All" ||
        item.quality === filter ||
        item.perishability === filter;

      return searchMatch && filterMatch;
    });
  }, [produce, search, filter]);

  const selectedCartQuantity = useMemo(
    () => cart.reduce((sum, item) => sum + item.quantity, 0),
    [cart]
  );

  /* -------------------------------------------------------
     Farmer listing
  ------------------------------------------------------- */

  const publishHarvest = () => {
    if (!farmerForm.quantity || farmerForm.quantity <= 0) {
      notify("Enter a valid quantity", "error");
      return;
    }

    const emojiMap = {
      Tomato: "🍅",
      Onion: "🧅",
      Potato: "🥔",
      "Green Chilli": "🌶️",
      Cabbage: "🥬",
    };

    const newItem = {
      id: makeId("KP"),
      name: `Fresh ${farmerForm.crop}`,
      crop: farmerForm.crop,
      farmer: "Rajesh Kumar",
      fpo: "Nashik FPO",
      location: "Nashik",
      quantity: Number(farmerForm.quantity),
      unit: "kg",
      price: Number(farmerForm.price),
      quality: farmerForm.quality,
      harvestDate: farmerForm.harvestDate,
      perishability: farmerForm.perishability,
      emoji: emojiMap[farmerForm.crop] || "🌱",
    };

    if (!online) {
      setSyncQueue((prev) => [...prev, newItem]);
      notify("Offline: harvest saved for synchronization", "warning");
      return;
    }

    setProduce((prev) => [newItem, ...prev]);

    notify(
      `${newItem.quantity} kg ${newItem.crop} listed successfully`
    );

    setFarmerForm((prev) => ({
      ...prev,
      quantity: 500,
    }));
  };

  const syncOfflineData = () => {
    if (!online) {
      notify("Connect to internet before synchronization", "warning");
      return;
    }

    if (!syncQueue.length) {
      notify("No offline records to synchronize", "info");
      return;
    }

    setProduce((prev) => [...syncQueue, ...prev]);
    setSyncQueue([]);

    notify("Offline records synchronized successfully");
  };

  /* -------------------------------------------------------
     Cart
  ------------------------------------------------------- */

  const addToCart = (item) => {
    setCart((prev) => {
      const existing = prev.find((cartItem) => cartItem.id === item.id);

      if (existing) {
        return prev.map((cartItem) =>
          cartItem.id === item.id
            ? {
                ...cartItem,
                quantity: Math.min(
                  cartItem.quantity + 50,
                  item.quantity
                ),
              }
            : cartItem
        );
      }

      return [
        ...prev,
        {
          ...item,
          quantity: Math.min(50, item.quantity),
        },
      ];
    });

    notify(`${item.crop} added to cart`);
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const checkout = () => {
    if (!cart.length) {
      notify("Cart is empty", "warning");
      return;
    }

    const newOrders = cart.map((item) => ({
      id: makeId("ORD"),
      batchId: item.id,
      product: item.name,
      quantity: item.quantity,
      price: item.price,
      buyer: "Consumer Hub",
      farmer: item.farmer,
      destination: "Mumbai",
      status: "Pickup Scheduled",
      created: new Date().toLocaleDateString("en-IN"),
    }));

    setOrders((prev) => [...newOrders, ...prev]);

    setProduce((prev) =>
      prev
        .map((product) => {
          const ordered = cart.find((item) => item.id === product.id);

          if (!ordered) return product;

          return {
            ...product,
            quantity: Math.max(
              0,
              product.quantity - ordered.quantity
            ),
          };
        })
        .filter((product) => product.quantity > 0)
    );

    setCart([]);
    notify("Order created and sent to logistics");
    setPage("orders");
  };

  /* -------------------------------------------------------
     Demo journey
  ------------------------------------------------------- */

  const demoStep = (step) => {
    if (step === 1) {
      setRole("farmer");
      setPage("farmer");
      notify("Step 1: Farmer harvest listing opened");
    }

    if (step === 2) {
      setRole("bulk");
      setPage("bulk");
      notify("Step 2: Smart buyer matching opened");
    }

    if (step === 3) {
      setRole("logistics");
      setPage("logistics");
      notify("Step 3: Logistics optimization opened");
    }

    if (step === 4) {
      setRole("admin");
      setPage("impact");
      notify("Step 4: Impact analytics opened");
    }
  };

  const resetDemo = () => {
    setProduce(INITIAL_PRODUCE);
    setOrders(INITIAL_ORDERS);
    setCart([]);
    setSyncQueue([]);
    setRole("farmer");
    setPage("dashboard");
    notify("Demo environment reset");
  };

  /* =======================================================
     REUSABLE UI
  ======================================================= */

  const Badge = ({ children, type = "green" }) => (
    <span className={`kp-badge ${type}`}>{children}</span>
  );

  const StatCard = ({
    title,
    value,
    subtitle,
    icon: Icon,
    trend,
    danger = false,
  }) => (
    <div className="kp-stat">
      <div className="kp-stat-top">
        <div className={`kp-stat-icon ${danger ? "danger" : ""}`}>
          <Icon size={20} />
        </div>

        {trend !== undefined && (
          <span className={trend >= 0 ? "trend-up" : "trend-down"}>
            {trend >= 0 ? <TrendingUp size={13} /> : <TrendingDown size={13} />}
            {Math.abs(trend)}%
          </span>
        )}
      </div>

      <div className="kp-stat-title">{title}</div>
      <div className="kp-stat-value">{value}</div>
      <div className="kp-stat-subtitle">{subtitle}</div>
    </div>
  );

  const SectionTitle = ({ title, subtitle, action }) => (
    <div className="kp-section-title">
      <div>
        <h2>{title}</h2>
        {subtitle && <p>{subtitle}</p>}
      </div>

      {action}
    </div>
  );

  /* =======================================================
     SIDEBAR
  ======================================================= */

  const Sidebar = () => (
    <>
      {mobileMenu && (
        <div
          className="kp-mobile-overlay"
          onClick={() => setMobileMenu(false)}
        />
      )}

      <aside className={`kp-sidebar ${mobileMenu ? "mobile-open" : ""}`}>
        <div className="kp-brand">
          <div className="kp-brand-icon">
            <Leaf size={23} />
          </div>

          <div>
            <div className="kp-brand-name">KrishiPath</div>
            <div className="kp-brand-tag">Farm • Market • Future</div>
          </div>

          <button
            className="kp-mobile-close"
            onClick={() => setMobileMenu(false)}
          >
            <X size={20} />
          </button>
        </div>

        <div className="kp-role-card">
          <div className="kp-avatar">
            {role === "farmer"
              ? "👨‍🌾"
              : role === "bulk"
                ? "🏨"
                : role === "logistics"
                  ? "🚚"
                  : role === "fpo"
                    ? "🏢"
                    : "⚙️"}
          </div>

          <div>
            <div className="kp-role-label">ACTIVE ROLE</div>
            <strong>
              {role === "admin"
                ? "Government Admin"
                : role === "bulk"
                  ? "Bulk Buyer"
                  : role === "logistics"
                    ? "Logistics Partner"
                    : role === "fpo"
                      ? "FPO Admin"
                      : "Farmer"}
            </strong>
          </div>
        </div>

        <div className="kp-nav-label">WORKSPACE</div>

        <nav className="kp-nav">
          {allowedNavigation.map((item) => {
            const Icon = item.icon;

            return (
              <button
                key={item.id}
                className={`kp-nav-item ${
                  page === item.id ? "active" : ""
                }`}
                onClick={() => {
                  setPage(item.id);
                  setMobileMenu(false);
                }}
              >
                <Icon size={18} />
                <span>{item.label}</span>
                {page === item.id && <ChevronRight size={15} />}
              </button>
            );
          })}
        </nav>

        <div className="kp-sidebar-bottom">
          <div className={`kp-connectivity ${online ? "online" : "offline"}`}>
            <div className="kp-connection-icon">
              {online ? <Wifi size={16} /> : <WifiOff size={16} />}
            </div>

            <div>
              <strong>{online ? "Connected" : "Offline Mode"}</strong>
              <small>
                {online
                  ? "Data synchronization active"
                  : `${syncQueue.length} record(s) waiting`}
              </small>
            </div>

            <button
              className="kp-refresh"
              onClick={() => {
                setOnline((prev) => !prev);
              }}
            >
              <RefreshCw size={15} />
            </button>
          </div>

          {syncQueue.length > 0 && (
            <button
              className="kp-sync-button"
              onClick={syncOfflineData}
            >
              <RefreshCw size={15} />
              Sync {syncQueue.length} record(s)
            </button>
          )}

          <div className="kp-sih-mini">
            <Sparkles size={15} />
            <span>SIH 2026 Prototype</span>
          </div>
        </div>
      </aside>
    </>
  );

  /* =======================================================
     TOPBAR
  ======================================================= */

  const TopBar = () => (
    <header className="kp-topbar">
      <div className="kp-top-left">
        <button
          className="kp-menu-button"
          onClick={() => setMobileMenu(true)}
        >
          <Menu size={21} />
        </button>

        <div>
          <div className="kp-breadcrumb">KRISHIPATH / {page}</div>
          <h1>
            {navigation.find((item) => item.id === page)?.label ||
              "Dashboard"}
          </h1>
        </div>
      </div>

      <div className="kp-top-actions">
        {!online && (
          <Badge type="orange">
            <WifiOff size={12} /> Offline
          </Badge>
        )}

        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="kp-language"
        >
          <option value="en">EN</option>
          <option value="hi">हिन्दी</option>
          <option value="or">ଓଡ଼ିଆ</option>
        </select>

        <div className="kp-notification-button">
          <Bell size={18} />
          {notifications.length > 0 && (
            <span>{notifications.length}</span>
          )}
        </div>

        <select
          value={role}
          onChange={(e) => changeRole(e.target.value)}
          className="kp-role-select"
        >
          <option value="farmer">👨‍🌾 Farmer</option>
          <option value="fpo">🏢 FPO Admin</option>
          <option value="bulk">🏨 Bulk Buyer</option>
          <option value="logistics">🚚 Logistics</option>
          <option value="admin">⚙️ Govt Admin</option>
          <option value="consumer">🛒 Consumer</option>
        </select>
      </div>
    </header>
  );

  /* =======================================================
     DASHBOARD
  ======================================================= */

  const Dashboard = () => {
    const roleTitle =
      role === "farmer"
        ? `${t.goodMorning}, ${t.farmerName} 👋`
        : role === "bulk"
          ? t.procurementControlCenter
          : role === "logistics"
            ? t.logisticsOperationsCenter
            : role === "fpo"
              ? t.fpoOperationsDashboard
              : t.krishiPathCommandCenter;

    return (
      <div className="kp-page">
        <div className="kp-hero">
          <div className="kp-hero-content">
            <Badge type="dark">
              <Sparkles size={12} /> SIH 2026 • LIVE PROTOTYPE
            </Badge>

            <h2>{roleTitle}</h2>

            <p>
              {t.dashboardDescription}
            </p>

            <div className="kp-hero-buttons">
              <button
                className="kp-primary-button"
                onClick={() =>
                  setPage(role === "farmer" ? "farmer" : "marketplace")
                }
              >
                {role === "farmer"
                  ? t.listHarvest
                  : t.exploreMarketplace}
                <ArrowRight size={17} />
              </button>

              <button
                className="kp-secondary-dark"
                onClick={() => setShowDemo(true)}
              >
                <Zap size={17} />
                Demo Journey
              </button>
            </div>
          </div>

          <div className="kp-hero-visual">
            <div className="kp-network-circle">
              <div className="kp-network-center">
                <Leaf size={30} />
              </div>

              <div className="network-node farmer-node">👨‍🌾</div>
              <div className="network-node buyer-node">🏪</div>
              <div className="network-node truck-node">🚚</div>
              <div className="network-node data-node">📊</div>

              <div className="network-line line1" />
              <div className="network-line line2" />
              <div className="network-line line3" />
              <div className="network-line line4" />
            </div>
          </div>
        </div>

        <div className="kp-stat-grid">
          <StatCard
            title={t.availableProduce}
            value={`${totalStock.toLocaleString("en-IN")} kg`}
            subtitle={t.acrossActiveListings}
            icon={Package}
            trend={12}
          />

          <StatCard
            title={t.activeOrders}
            value={orders.length}
            subtitle={t.ordersInSupplyChain}
            icon={ShoppingCart}
            trend={8}
          />

          <StatCard
            title={t.orderValue}
            value={formatMoney(totalOrdersValue)}
            subtitle={t.currentDemoValue}
            icon={IndianRupee}
            trend={15}
          />

          <StatCard
            title={t.priorityBatches}
            value={criticalItems.length}
            subtitle={t.requireFasterDispatch}
            icon={AlertTriangle}
            danger={criticalItems.length > 0}
          />
        </div>

        <div className="kp-grid-2">
          <div className="kp-card">
            <SectionTitle
              title={t.supplyDemandSignal}
              subtitle={t.prototypeMarketSignal}
              action={
                <Badge type="green">
                  <Activity size={12} /> Live Simulation
                </Badge>
              }
            />

            <div className="kp-chart">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={PRICE_HISTORY}>
                  <defs>
                    <linearGradient
                      id="priceFill"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="0%" stopOpacity={0.25} />
                      <stop offset="100%" stopOpacity={0} />
                    </linearGradient>
                  </defs>

                  <CartesianGrid
                    strokeDasharray="3 3"
                    vertical={false}
                  />

                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />

                  <Area
                    type="monotone"
                    dataKey="price"
                    strokeWidth={3}
                    fill="url(#priceFill)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="kp-card">
            <SectionTitle
              title={t.todaysSmartActions}
              subtitle={t.recommendedNextSteps}
            />

            <div className="kp-action-list">
              <ActionItem
                icon={IndianRupee}
                title={t.reviewTomatoPrice}
                description={t.demandUpward}
                color="green"
                onClick={() => setPage("ai")}
              />

              <ActionItem
                icon={AlertTriangle}
                title={`${criticalItems.length} priority batches`}
                description={t.checkPerishability}
                color="orange"
                onClick={() => setPage("logistics")}
              />

              <ActionItem
                icon={Target}
                title={t.buyerMatchAvailable}
                description={t.potentialTomatoMatch}
                color="blue"
                onClick={() => setPage("bulk")}
              />

              <ActionItem
                icon={Route}
                title={t.routeOptimization}
                description={t.multiStopReady}
                color="purple"
                onClick={() => setPage("logistics")}
              />
            </div>
          </div>
        </div>

        <div className="kp-flow-card">
          <SectionTitle
            title={t.supplyChain}
            subtitle={t.oneTraceableJourney}
          />

          <div className="kp-flow">
            <FlowStep icon="👨‍🌾" title="Farmer" text="List Harvest" />
            <FlowArrow />
            <FlowStep icon="💰" title={t.price} text={t.fairRecommendation} />
            <FlowArrow />
            <FlowStep icon="🎯" title={t.match} text="Find Buyer" />
            <FlowArrow />
            <FlowStep icon="📦" title={t.order} text={t.createTransaction} />
            <FlowArrow />
            <FlowStep icon="🚚" title="Logistics" text="Optimize Route" />
            <FlowArrow />
            <FlowStep icon="🏪" title={t.buyer} text={t.receiveProduce} />
          </div>
        </div>
      </div>
    );
  };

  /* =======================================================
     FARMER PORTAL
  ======================================================= */

  const FarmerPortal = () => {
    const preview = {
      ...farmerForm,
      crop: farmerForm.crop,
      price: Number(farmerForm.price) || 0,
      quantity: Number(farmerForm.quantity) || 0,
    };

    const priceRec = calculatePrice({
      crop: preview.crop,
      quantity: preview.quantity,
      price: preview.price,
      quality: preview.quality,
    });

    return (
      <div className="kp-page">
        <SectionTitle
          title="Farmer Portal"
          subtitle="Turn your harvest into a transparent digital listing."
          action={
            <Badge type={online ? "green" : "orange"}>
              {online ? <Wifi size={12} /> : <WifiOff size={12} />}
              {online ? "Online Sync" : "Offline Ready"}
            </Badge>
          }
        />

        <div className="kp-grid-2 farmer-grid">
          <div className="kp-card">
            <div className="kp-card-heading">
              <div className="kp-heading-icon green">
                <Plus size={19} />
              </div>

              <div>
                <h3>List New Harvest</h3>
                <p>Enter your crop details</p>
              </div>
            </div>

            <div className="kp-form-grid">
              <FormField label="Crop">
                <select
                  value={farmerForm.crop}
                  onChange={(e) =>
                    setFarmerForm((prev) => ({
                      ...prev,
                      crop: e.target.value,
                    }))
                  }
                >
                  <option>Tomato</option>
                  <option>Onion</option>
                  <option>Potato</option>
                  <option>Green Chilli</option>
                  <option>Cabbage</option>
                </select>
              </FormField>

              <FormField label="Quantity (kg)">
                <input
                  type="number"
                  value={farmerForm.quantity}
                  onChange={(e) =>
                    setFarmerForm((prev) => ({
                      ...prev,
                      quantity: e.target.value,
                    }))
                  }
                />
              </FormField>

              <FormField label="Asking Price / kg">
                <input
                  type="number"
                  value={farmerForm.price}
                  onChange={(e) =>
                    setFarmerForm((prev) => ({
                      ...prev,
                      price: e.target.value,
                    }))
                  }
                />
              </FormField>

              <FormField label="Quality">
                <select
                  value={farmerForm.quality}
                  onChange={(e) =>
                    setFarmerForm((prev) => ({
                      ...prev,
                      quality: e.target.value,
                    }))
                  }
                >
                  <option>Grade A</option>
                  <option>Grade B</option>
                  <option>Export</option>
                </select>
              </FormField>

              <FormField label="Perishability">
                <select
                  value={farmerForm.perishability}
                  onChange={(e) =>
                    setFarmerForm((prev) => ({
                      ...prev,
                      perishability: e.target.value,
                    }))
                  }
                >
                  <option>High</option>
                  <option>Medium</option>
                  <option>Low</option>
                </select>
              </FormField>

              <FormField label="Harvest Date">
                <input
                  type="date"
                  value={farmerForm.harvestDate}
                  onChange={(e) =>
                    setFarmerForm((prev) => ({
                      ...prev,
                      harvestDate: e.target.value,
                    }))
                  }
                />
              </FormField>
            </div>

            <button
              className="kp-primary-button full"
              onClick={publishHarvest}
            >
              Publish Harvest
              <ArrowRight size={17} />
            </button>
          </div>

          <div className="kp-ai-card">
            <div className="kp-ai-label">
              <Sparkles size={13} />
              PROTOTYPE RECOMMENDATION ENGINE
            </div>

            <h3>Fair Price Insight</h3>

            <p>
              Based on demo demand, supply and product-quality
              signals, the recommended price is:
            </p>

            <div className="kp-price-display">
              <div>
                <span>Recommended</span>
                <strong>
                  ₹{priceRec.recommended}
                  <small>/kg</small>
                </strong>
              </div>

              <div className="kp-confidence">
                <span>Confidence</span>
                <strong>{priceRec.confidence}%</strong>
              </div>
            </div>

            <div className="kp-breakdown">
              <div>
                <span>Base asking price</span>
                <strong>₹{preview.price}</strong>
              </div>

              <div>
                <span>Demand signal</span>
                <strong className="green-text">
                  +{priceRec.demand}%
                </strong>
              </div>

              <div>
                <span>Supply signal</span>
                <strong>
                  {priceRec.supply ? `+${priceRec.supply}%` : "Stable"}
                </strong>
              </div>
            </div>

            <div className="kp-demo-note">
              <Info size={15} />
              This is a prototype recommendation engine. A
              production system would integrate verified market
              and demand datasets.
            </div>
          </div>
        </div>

        <div className="kp-card">
          <SectionTitle
            title="Your Active Listings"
            subtitle={`${produce.length} produce batches currently visible`}
          />

          <ProduceTable items={produce.slice(0, 6)} />
        </div>
      </div>
    );
  };

  /* =======================================================
     MARKETPLACE
  ======================================================= */

  const Marketplace = () => (
    <div className="kp-page">
      <SectionTitle
        title="Direct Farm Marketplace"
        subtitle="Discover produce directly from farmers and FPOs."
        action={
          <button className="kp-cart-button" onClick={checkout}>
            <ShoppingCart size={17} />
            Cart ({selectedCartQuantity} kg)
          </button>
        }
      />

      <div className="kp-search-bar">
        <div className="kp-search">
          <Search size={18} />
          <input
            placeholder="Search crop, farmer or location..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="kp-filter">
          <SlidersHorizontal size={16} />
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option>All</option>
            <option>Grade A</option>
            <option>Grade B</option>
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>
        </div>
      </div>

      {filteredProduce.length === 0 ? (
        <EmptyState
          icon={Search}
          title="No produce found"
          text="Try another crop, farmer or filter."
        />
      ) : (
        <div className="kp-product-grid">
          {filteredProduce.map((item) => {
            const perish = perishabilityInfo(item);

            return (
              <div className="kp-product-card" key={item.id}>
                <div className="kp-product-image">
                  <span>{item.emoji}</span>

                  <Badge
                    type={
                      perish.priority === "CRITICAL"
                        ? "red"
                        : perish.priority === "HIGH"
                          ? "orange"
                          : "green"
                    }
                  >
                    {perish.priority}
                  </Badge>
                </div>

                <div className="kp-product-body">
                  <div className="kp-product-title-row">
                    <div>
                      <h3>{item.name}</h3>
                      <p>
                        <MapPin size={12} />
                        {item.location} • {item.fpo}
                      </p>
                    </div>

                    <Badge type="blue">{item.quality}</Badge>
                  </div>

                  <div className="kp-product-info">
                    <div>
                      <span>AVAILABLE</span>
                      <strong>{item.quantity} kg</strong>
                    </div>

                    <div>
                      <span>FARMER</span>
                      <strong>{item.farmer}</strong>
                    </div>
                  </div>

                  <div className="kp-product-bottom">
                    <div>
                      <strong className="kp-product-price">
                        ₹{item.price}
                      </strong>
                      <span>/kg</span>
                    </div>

                    <button
                      className="kp-dark-button"
                      onClick={() => addToCart(item)}
                      disabled={item.quantity <= 0}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {cart.length > 0 && (
        <div className="kp-cart-panel">
          <div>
            <strong>{cart.length} item(s) in cart</strong>
            <span>
              {selectedCartQuantity} kg selected for purchase
            </span>
          </div>

          <div className="kp-cart-items">
            {cart.map((item) => (
              <div key={item.id} className="kp-cart-item">
                <span>{item.emoji}</span>
                <div>
                  <strong>{item.crop}</strong>
                  <small>{item.quantity} kg</small>
                </div>

                <button onClick={() => removeFromCart(item.id)}>
                  <Trash2 size={15} />
                </button>
              </div>
            ))}
          </div>

          <button className="kp-primary-button" onClick={checkout}>
            Checkout
            <ArrowRight size={17} />
          </button>
        </div>
      )}
    </div>
  );

  /* =======================================================
     BULK BUYER
  ======================================================= */

  const BulkBuyer = () => {
    const request = requests[0];

    const matches = produce
      .map((item) => ({
        ...item,
        score: matchScore(item, request),
      }))
      .sort((a, b) => b.score - a.score);

    return (
      <div className="kp-page">
        <SectionTitle
          title="Bulk Buyer Procurement"
          subtitle="Match procurement requirements with available farm supply."
          action={
            <Badge type="blue">
              <Target size={12} /> Smart Matching
            </Badge>
          }
        />

        <div className="kp-procurement-layout">
          <div className="kp-card procurement-request">
            <div className="kp-card-heading">
              <div className="kp-heading-icon blue">
                <Factory size={19} />
              </div>

              <div>
                <h3>Active Procurement Request</h3>
                <p>{request.buyer}</p>
              </div>
            </div>

            <div className="kp-request-main">
              <div className="kp-big-emoji">🍅</div>

              <div>
                <span>REQUIRED PRODUCT</span>
                <strong>{request.product}</strong>
              </div>
            </div>

            <div className="kp-request-grid">
              <RequestMetric
                label="Quantity"
                value={`${request.quantity} kg`}
              />

              <RequestMetric
                label="Max Price"
                value={`₹${request.targetPrice}/kg`}
              />

              <RequestMetric
                label="Quality"
                value={request.quality}
              />

              <RequestMetric
                label="Destination"
                value={request.destination}
              />
            </div>

            <div className="kp-deadline">
              <CalendarDays size={15} />
              Delivery deadline: <strong>{request.deadline}</strong>
            </div>
          </div>

          <div className="kp-card">
            <SectionTitle
              title="Supplier Matches"
              subtitle="Calculated using product, price, quality, quantity and location."
            />

            <div className="kp-match-list">
              {matches.map((match, index) => (
                <div className="kp-match" key={match.id}>
                  <div className="kp-match-rank">
                    #{index + 1}
                  </div>

                  <div className="kp-match-icon">
                    {match.emoji}
                  </div>

                  <div className="kp-match-info">
                    <strong>{match.farmer}</strong>
                    <span>
                      {match.fpo} • {match.location}
                    </span>

                    <small>
                      {match.quantity} kg available • ₹
                      {match.price}/kg
                    </small>
                  </div>

                  <div className="kp-score">
                    <strong>{match.score}%</strong>
                    <span>Match</span>
                  </div>

                  <button
                    className="kp-dark-icon-button"
                    onClick={() => {
                      setOrders((prev) => [
                        {
                          id: makeId("ORD"),
                          batchId: match.id,
                          product: match.name,
                          quantity: Math.min(
                            match.quantity,
                            request.quantity
                          ),
                          price: match.price,
                          buyer: request.buyer,
                          farmer: match.farmer,
                          destination: request.destination,
                          status: "Pickup Scheduled",
                          created: new Date().toLocaleDateString(
                            "en-IN"
                          ),
                        },
                        ...prev,
                      ]);

                      setProduce((prev) =>
                        prev
                          .map((p) =>
                            p.id === match.id
                              ? {
                                  ...p,
                                  quantity: Math.max(
                                    0,
                                    p.quantity -
                                      Math.min(
                                        p.quantity,
                                        request.quantity
                                      )
                                  ),
                                }
                              : p
                          )
                          .filter((p) => p.quantity > 0)
                      );

                      notify(
                        `Order created with ${match.farmer}`
                      );

                      setPage("orders");
                    }}
                  >
                    <ArrowRight size={17} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  /* =======================================================
     LOGISTICS
  ======================================================= */

  const Logistics = () => {
    const traditionalDistance = Math.max(140, orders.length * 140);
    const optimizedDistance = Math.round(
      traditionalDistance * 0.65
    );

    const traditionalCost = traditionalDistance * 25;
    const optimizedCost = optimizedDistance * 25;

    const routeOrders = orders.slice(0, 5);

    return (
      <div className="kp-page">
        <SectionTitle
          title="Logistics Command Center"
          subtitle="Perishability-aware dispatch and route optimization."
          action={
            <Badge type="purple">
              <Route size={12} /> Optimization Simulation
            </Badge>
          }
        />

        <div className="kp-logistics-stats">
          <StatCard
            title="Traditional Distance"
            value={`${traditionalDistance} km`}
            subtitle={`Estimated cost ${formatMoney(
              traditionalCost
            )}`}
            icon={Truck}
          />

          <StatCard
            title="Optimized Distance"
            value={`${optimizedDistance} km`}
            subtitle={`Estimated cost ${formatMoney(optimizedCost)}`}
            icon={Route}
            trend={35}
          />

          <StatCard
            title="Distance Saved"
            value={`${traditionalDistance - optimizedDistance} km`}
            subtitle="Prototype route simulation"
            icon={TrendingDown}
          />

          <StatCard
            title="Priority Batches"
            value={criticalItems.length}
            subtitle="Perishability-based priority"
            icon={AlertTriangle}
            danger
          />
        </div>

        <div className="kp-grid-2">
          <div className="kp-card">
            <SectionTitle
              title="Route Network"
              subtitle="Illustrative multi-location optimization"
            />

            <div className="kp-map">
              <svg
                viewBox="0 0 850 430"
                width="100%"
                height="100%"
              >
                <path
                  d="M120 190 L240 320 L75 330"
                  className="map-route traditional"
                />

                <path
                  d="M120 190 L240 320 L75 330 M240 320 L540 180 L760 300"
                  className="map-route optimized"
                />

                {Object.entries(ROUTES).map(([name, point]) => (
                  <g key={name}>
                    <circle
                      cx={point.x}
                      cy={point.y}
                      r="10"
                      className="map-point"
                    />

                    <text
                      x={point.x + 15}
                      y={point.y + 5}
                      className="map-label"
                    >
                      {name}
                    </text>
                  </g>
                ))}
              </svg>

              <div className="kp-map-legend">
                <span>
                  <i className="legend-dot green" />
                  Optimized Route
                </span>

                <span>
                  <i className="legend-dot gray" />
                  Traditional Route
                </span>
              </div>
            </div>
          </div>

          <div className="kp-card">
            <SectionTitle
              title="Dispatch Priority Queue"
              subtitle="Highest perishability is prioritized first."
            />

            <div className="kp-dispatch-list">
              {routeOrders.map((order, index) => {
                const product = produce.find(
                  (p) => p.id === order.batchId
                );

                const perish = product
                  ? perishabilityInfo(product)
                  : {
                      priority: "HIGH",
                      remaining: "1.5",
                    };

                return (
                  <div className="kp-dispatch" key={order.id}>
                    <div className="kp-dispatch-number">
                      {index + 1}
                    </div>

                    <div className="kp-dispatch-main">
                      <strong>
                        {order.product} • {order.quantity} kg
                      </strong>

                      <span>
                        Destination: {order.destination}
                      </span>
                    </div>

                    <Badge
                      type={
                        perish.priority === "CRITICAL"
                          ? "red"
                          : perish.priority === "HIGH"
                            ? "orange"
                            : "green"
                      }
                    >
                      {perish.priority}
                    </Badge>
                  </div>
                );
              })}

              {!routeOrders.length && (
                <EmptyState
                  icon={Truck}
                  title="No dispatches"
                  text="Orders will appear here automatically."
                />
              )}
            </div>
          </div>
        </div>

        <div className="kp-card kp-efficiency-card">
          <div>
            <Badge type="dark">
              <Zap size={12} /> SIMULATION
            </Badge>

            <h3>KrishiPath Route Efficiency</h3>

            <p>
              Grouping compatible shipments can reduce unnecessary
              point-to-point travel in the prototype scenario.
            </p>
          </div>

          <div className="kp-efficiency-number">
            <strong>35%</strong>
            <span>Estimated efficiency gain</span>
          </div>
        </div>
      </div>
    );
  };

  /* =======================================================
     ORDERS
  ======================================================= */

  const Orders = () => (
    <div className="kp-page">
      <SectionTitle
        title="Order Management"
        subtitle="Track transactions across the KrishiPath supply chain."
      />

      <div className="kp-card">
        {orders.length === 0 ? (
          <EmptyState
            icon={Package}
            title="No orders yet"
            text="Create an order from the marketplace or buyer portal."
          />
        ) : (
          <>
            <div className="kp-order-summary">
              <div>
                <span>TOTAL ORDERS</span>
                <strong>{orders.length}</strong>
              </div>

              <div>
                <span>ORDER VALUE</span>
                <strong>{formatMoney(totalOrdersValue)}</strong>
              </div>

              <div>
                <span>ACTIVE</span>
                <strong>{orders.length}</strong>
              </div>
            </div>

            <div className="kp-table-wrap">
              <table className="kp-table">
                <thead>
                  <tr>
                    <th>Order</th>
                    <th>Product</th>
                    <th>Buyer</th>
                    <th>Quantity</th>
                    <th>Value</th>
                    <th>Status</th>
                    <th>Batch</th>
                  </tr>
                </thead>

                <tbody>
                  {orders.map((order) => (
                    <tr key={order.id}>
                      <td>
                        <strong>{order.id}</strong>
                        <small>{order.created}</small>
                      </td>

                      <td>{order.product}</td>

                      <td>{order.buyer}</td>

                      <td>{order.quantity} kg</td>

                      <td>
                        {formatMoney(
                          order.quantity * order.price
                        )}
                      </td>

                      <td>
                        <Badge type="green">
                          <CheckCircle2 size={12} />
                          {order.status}
                        </Badge>
                      </td>

                      <td>
                        <code>{order.batchId}</code>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
    </div>
  );

  /* =======================================================
     AI INSIGHTS
  ======================================================= */

  const AIInsights = () => {
    const tomato = produce.find((p) => p.crop === "Tomato");

    const rec = calculatePrice(
      tomato || {
        crop: "Tomato",
        price: 28,
        quantity: 500,
        quality: "Grade A",
      }
    );

    return (
      <div className="kp-page">
        <SectionTitle
          title="AI & Smart Insights"
          subtitle="Decision-support engines powering the KrishiPath prototype."
          action={
            <Badge type="green">
              <Sparkles size={12} /> Prototype Intelligence
            </Badge>
          }
        />

        <div className="kp-ai-grid">
          <InsightCard
            icon={IndianRupee}
            title="Price Recommendation"
            value={`₹${rec.recommended}/kg`}
            text={`Recommended for Tomato based on ${rec.demand}% demand signal.`}
            color="green"
          />

          <InsightCard
            icon={Target}
            title="Buyer Matching"
            value="90%"
            text="Top supplier match based on product, price, quality and location."
            color="blue"
          />

          <InsightCard
            icon={AlertTriangle}
            title="Perishability"
            value={`${criticalItems.length} Critical`}
            text="Highly perishable batches should be dispatched first."
            color="orange"
          />

          <InsightCard
            icon={Route}
            title="Route Optimization"
            value="35%"
            text="Prototype simulation of route-efficiency improvement."
            color="purple"
          />
        </div>

        <div className="kp-grid-2">
          <div className="kp-card">
            <SectionTitle
              title="Price Trend"
              subtitle="Illustrative tomato market signal"
            />

            <div className="kp-chart large">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={PRICE_HISTORY}>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    vertical={false}
                  />

                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />

                  <Area
                    type="monotone"
                    dataKey="price"
                    strokeWidth={3}
                    fillOpacity={0.15}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="kp-card">
            <SectionTitle
              title="How the Engine Thinks"
              subtitle="Transparent prototype logic"
            />

            <div className="kp-logic-stack">
              <LogicRow
                number="01"
                title="Base Market Price"
                text="Starts from the farmer's asking price."
              />

              <LogicRow
                number="02"
                title="Demand Signal"
                text="Identifies simulated demand movement."
              />

              <LogicRow
                number="03"
                title="Supply Signal"
                text="Considers available quantity."
              />

              <LogicRow
                number="04"
                title="Recommendation"
                text="Generates a suggested price and confidence."
              />
            </div>

            <div className="kp-demo-note">
              <Info size={15} />
              For SIH demonstration, these engines are prototype
              decision-support logic, not claims of production AI.
            </div>
          </div>
        </div>
      </div>
    );
  };

  /* =======================================================
     FPO HUB
  ======================================================= */

  const FPOHub = () => {
    const fpoData = {};

    produce.forEach((item) => {
      if (!fpoData[item.fpo]) {
        fpoData[item.fpo] = {
          fpo: item.fpo,
          farmers: new Set(),
          stock: 0,
          batches: 0,
        };
      }

      fpoData[item.fpo].farmers.add(item.farmer);
      fpoData[item.fpo].stock += item.quantity;
      fpoData[item.fpo].batches += 1;
    });

    const rows = Object.values(fpoData).map((item) => ({
      ...item,
      farmers: item.farmers.size,
    }));

    return (
      <div className="kp-page">
        <SectionTitle
          title="FPO Hub"
          subtitle="Aggregate farmer supply and coordinate procurement."
        />

        <div className="kp-stat-grid">
          <StatCard
            title="FPOs Connected"
            value={rows.length}
            subtitle="Active demonstration network"
            icon={Building2}
          />

          <StatCard
            title="Farmers Reached"
            value={rows.reduce((a, b) => a + b.farmers, 0)}
            subtitle="Across visible listings"
            icon={Users}
          />

          <StatCard
            title="Aggregated Supply"
            value={`${totalStock} kg`}
            subtitle="Current available inventory"
            icon={Package}
          />

          <StatCard
            title="Active Batches"
            value={produce.length}
            subtitle="Traceable produce batches"
            icon={Database}
          />
        </div>

        <div className="kp-card">
          <SectionTitle
            title="FPO Supply Network"
            subtitle="Aggregated view of participating producer groups"
          />

          <div className="kp-fpo-grid">
            {rows.map((item) => (
              <div className="kp-fpo-card" key={item.fpo}>
                <div className="kp-fpo-icon">
                  <Building2 size={21} />
                </div>

                <h3>{item.fpo}</h3>

                <div className="kp-fpo-stats">
                  <div>
                    <span>Farmers</span>
                    <strong>{item.farmers}</strong>
                  </div>

                  <div>
                    <span>Batches</span>
                    <strong>{item.batches}</strong>
                  </div>

                  <div>
                    <span>Supply</span>
                    <strong>{item.stock} kg</strong>
                  </div>
                </div>

                <button
                  className="kp-outline-button"
                  onClick={() => setPage("marketplace")}
                >
                  View Supply <ArrowRight size={15} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  /* =======================================================
     IMPACT
  ======================================================= */

  const Impact = () => {
    const farmerValue = orders.reduce(
      (sum, order) => sum + order.quantity * order.price * 0.2,
      0
    );

    const routeSaving =
      orders.length * 140 - orders.length * 140 * 0.65;

    return (
      <div className="kp-page">
        <SectionTitle
          title="Impact Analytics"
          subtitle="Prototype indicators showing how KrishiPath can create value."
          action={
            <Badge type="orange">
              <Info size={12} /> Demo Estimates
            </Badge>
          }
        />

        <div className="kp-impact-grid">
          <ImpactCard
            icon={IndianRupee}
            title="Farmer Value"
            value={formatMoney(Math.round(farmerValue))}
            text="Illustrative value retained through direct transactions."
          />

          <ImpactCard
            icon={TrendingDown}
            title="Route Distance"
            value={`${Math.round(routeSaving)} km`}
            text="Illustrative distance difference in the simulation."
          />

          <ImpactCard
            icon={AlertTriangle}
            title="Wastage Risk"
            value="Prioritized"
            text="Perishable batches are surfaced for faster dispatch."
          />

          <ImpactCard
            icon={ShieldCheck}
            title="Traceability"
            value="Batch-Level"
            text="Orders connect produce batches with farmers and buyers."
          />
        </div>

        <div className="kp-card">
          <SectionTitle
            title="Value Redistribution"
            subtitle="Illustrative comparison for the prototype"
          />

          <div className="kp-chart impact-chart">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={[
                  {
                    name: "Direct Model",
                    farmer: 100,
                    intermediary: 0,
                  },
                  {
                    name: "Traditional",
                    farmer: 55,
                    intermediary: 45,
                  },
                ]}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                />

                <XAxis dataKey="name" />

                <YAxis />

                <Tooltip />

                <Bar
                  dataKey="farmer"
                  stackId="a"
                  name="Farmer Value"
                />

                <Bar
                  dataKey="intermediary"
                  stackId="a"
                  name="Intermediary Share"
                />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="kp-demo-note">
            <Info size={15} />
            All numerical impact values on this screen are
            illustrative prototype assumptions and must be replaced
            with validated pilot data before real-world deployment.
          </div>
        </div>
      </div>
    );
  };

  /* =======================================================
     HELPERS / SMALL COMPONENTS
  ======================================================= */

  function FormField({ label, children }) {
    return (
      <label className="kp-form-field">
        <span>{label}</span>
        {children}
      </label>
    );
  }

  function ActionItem({
    icon: Icon,
    title,
    description,
    color,
    onClick,
  }) {
    return (
      <button className="kp-action-item" onClick={onClick}>
        <div className={`kp-action-icon ${color}`}>
          <Icon size={17} />
        </div>

        <div>
          <strong>{title}</strong>
          <span>{description}</span>
        </div>

        <ChevronRight size={16} />
      </button>
    );
  }

  function FlowStep({ icon, title, text }) {
    return (
      <div className="kp-flow-step">
        <div className="kp-flow-icon">{icon}</div>
        <strong>{title}</strong>
        <span>{text}</span>
      </div>
    );
  }

  function FlowArrow() {
    return (
      <div className="kp-flow-arrow">
        <ArrowRight size={18} />
      </div>
    );
  }

  function RequestMetric({ label, value }) {
    return (
      <div className="kp-request-metric">
        <span>{label}</span>
        <strong>{value}</strong>
      </div>
    );
  }

  function InsightCard({
    icon: Icon,
    title,
    value,
    text,
    color,
  }) {
    return (
      <div className="kp-insight-card">
        <div className={`kp-insight-icon ${color}`}>
          <Icon size={21} />
        </div>

        <span>{title}</span>
        <strong>{value}</strong>
        <p>{text}</p>
      </div>
    );
  }

  function LogicRow({ number, title, text }) {
    return (
      <div className="kp-logic-row">
        <div className="kp-logic-number">{number}</div>

        <div>
          <strong>{title}</strong>
          <span>{text}</span>
        </div>
      </div>
    );
  }

  function ImpactCard({ icon: Icon, title, value, text }) {
    return (
      <div className="kp-impact-card">
        <div className="kp-impact-icon">
          <Icon size={21} />
        </div>

        <span>{title}</span>
        <strong>{value}</strong>
        <p>{text}</p>
      </div>
    );
  }

  function EmptyState({ icon: Icon, title, text }) {
    return (
      <div className="kp-empty">
        <div>
          <Icon size={25} />
        </div>

        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    );
  }

  function ProduceTable({ items }) {
    return (
      <div className="kp-table-wrap">
        <table className="kp-table">
          <thead>
            <tr>
              <th>Produce</th>
              <th>Farmer</th>
              <th>Location</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Quality</th>
              <th>Priority</th>
            </tr>
          </thead>

          <tbody>
            {items.map((item) => {
              const info = perishabilityInfo(item);

              return (
                <tr key={item.id}>
                  <td>
                    <div className="kp-table-product">
                      <span>{item.emoji}</span>
                      <strong>{item.name}</strong>
                    </div>
                  </td>

                  <td>{item.farmer}</td>

                  <td>
                    <MapPin size={12} />
                    {item.location}
                  </td>

                  <td>{item.quantity} kg</td>

                  <td>
                    <strong>₹{item.price}/kg</strong>
                  </td>

                  <td>
                    <Badge type="blue">{item.quality}</Badge>
                  </td>

                  <td>
                    <Badge
                      type={
                        info.priority === "CRITICAL"
                          ? "red"
                          : info.priority === "HIGH"
                            ? "orange"
                            : "green"
                      }
                    >
                      {info.priority}
                    </Badge>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }

  /* =======================================================
     NEXT-GEN SIH COMMAND FEATURES
  ======================================================= */
  const demandData = [
    { crop: "Tomato", demand: 4800, supply: 2900, growth: 31, price: "₹34–₹39", zone: "Patia" },
    { crop: "Potato", demand: 3600, supply: 3100, growth: 14, price: "₹24–₹28", zone: "Saheed Nagar" },
    { crop: "Green Chilli", demand: 2100, supply: 1500, growth: 22, price: "₹48–₹55", zone: "Chandrasekharpur" },
    { crop: "Cabbage", demand: 1800, supply: 2050, growth: -8, price: "₹20–₹24", zone: "Unit-1" },
  ];
  const demandZones = [
    ["Patia", "Tomato", "HIGH", "92%"], ["Saheed Nagar", "Tomato", "HIGH", "87%"],
    ["KIIT", "Green Chilli", "HIGH", "84%"], ["Chandrasekharpur", "Potato", "MEDIUM", "71%"],
    ["Aiginia", "Onion", "MEDIUM", "68%"], ["Unit-1", "Cabbage", "LOW", "42%"],
  ];

  const NextGen = () => {
    const [tab, setTab] = useState("demand");
    const [copilotInput, setCopilotInput] = useState("");
    const [copilotReply, setCopilotReply] = useState("Ask me about demand, prices, buyers, routes or your next crop.");
    const [snapDone, setSnapDone] = useState(false);
    const [voiceOn, setVoiceOn] = useState(false);
    const [batch, setBatch] = useState("KP-OD-TOM-24091");
    const tabs = [
      ["demand", "🌱 Demand-to-Farm"], ["heatmap", "🗺️ Demand Heatmap"], ["buyers", "🤝 Smart Matching"],
      ["logistics", "🚛 AI Logistics"], ["tools", "📸 Snap • 🎙️ Voice • 💬 WhatsApp"], ["analytics", "📊 Government Analytics"],
    ];
    const askCopilot = () => {
      const q = copilotInput.toLowerCase();
      if (q.includes("tomato") || q.includes("grow")) setCopilotReply("🍅 Tomato is the strongest opportunity: 4.8 MT demand vs 2.9 MT committed supply. Grow/aggregate up to 1.9 MT. Expected direct price ₹34–₹39/kg. Highest demand: Patia + Saheed Nagar.");
      else if (q.includes("route") || q.includes("logistic")) setCopilotReply("🚛 Prioritize 620 kg Grade-A tomato batch from Balianta → Patia. EV route saves ~28% distance and moves the most perishable batch first.");
      else if (q.includes("buyer")) setCopilotReply("🤝 Best match: KIIT Catering (96%), followed by Mayfair (91%). Matching considers crop, quantity, quality, price, distance and urgency.");
      else setCopilotReply("🤖 I found a 31% tomato demand rise this week. Your safest action is to secure a buyer first, then aggregate through the nearest FPO.");
      setCopilotInput("");
    };
    const best = demandData[0];
    return <div className="ng-wrap">
      <div className="ng-hero">
        <div><div className="ng-kicker">⚡ LIVE BHUBANESWAR AGRI GRID • SIH DEMO MODE</div><h1>KrishiPath Intelligence Hub</h1><p>Don't grow first and search for a buyer later. <b>Predict demand → plan production → match buyers → move with the lowest-loss route.</b></p></div>
        <div className="ng-live"><span className="pulse"></span> LIVE<br/><b>6 FPO Clusters</b></div>
      </div>
      <div className="ng-stats">
        <div><span>📦 Fresh demand</span><b>18.4 MT</b><small>next 7 days</small></div><div><span>🔥 Supply gap</span><b>3.7 MT</b><small>AI detected</small></div><div><span>💰 Farmer value</span><b>+42%</b><small>direct settlement</small></div><div><span>🌱 Spoilage risk</span><b>-63%</b><small>perishability routing</small></div>
      </div>
      <div className="ng-tabs">{tabs.map(([id,label])=><button className={tab===id?"active":""} onClick={()=>setTab(id)} key={id}>{label}</button>)}</div>
      {tab === "demand" && <section className="ng-card"><div className="ng-title"><div><span className="ng-kicker">MAIN USP</span><h2>🌱 Grow what will actually sell</h2><p>AI combines household, HoReCa, retailer and institutional demand signals.</p></div><Badge type="green">92% forecast confidence</Badge></div>
        <div className="ng-grid2"><div className="forecast-list">{demandData.map((d,i)=><div className="forecast" key={d.crop}><div className="crop-icon">{["🍅","🥔","🌶️","🥬"][i]}</div><div className="grow-main"><b>{d.crop}</b><span>{d.zone} • {d.price}/kg</span><div className="bar"><i style={{width:`${Math.min(100,d.demand/50)}%`}}></i></div><small>{d.demand.toLocaleString()} kg demand • {d.supply.toLocaleString()} kg supply</small></div><strong className={d.growth>0?"up":"down"}>{d.growth>0?"↑":"↓"}{Math.abs(d.growth)}%</strong></div>)}</div>
        <div className="recommend"><span>🎯 AI FARM PLAN</span><h3>Plant / aggregate Tomato</h3><p>Supply gap detected</p><div className="big-number">1.9 MT</div><small>unserved Bhubaneswar demand</small><div className="rec-row"><b>₹34–₹39/kg</b><span>expected direct price</span></div><div className="rec-row"><b>Patia + Saheed Nagar</b><span>highest demand zones</span></div><button className="ng-primary" onClick={()=>notify("Crop plan created: 1.9 MT Tomato opportunity")}>＋ Create Crop Plan</button></div></div></section>}
      {tab === "heatmap" && <section className="ng-card"><div className="ng-title"><div><span className="ng-kicker">LOCAL DEMAND HEATMAP</span><h2>🗺️ Where is Bhubaneswar asking for produce?</h2></div><Badge type="orange">Updated 2 min ago</Badge></div><div className="fake-map">{demandZones.map(([zone,crop,level,score],i)=><div className={`map-zone z${i}`} key={zone}><span className="map-dot"></span><b>{zone}</b><small>{crop} • {level}</small><strong>{score}</strong></div>)}</div><div className="legend"><span>🔴 HIGH demand</span><span>🟠 MEDIUM</span><span>🟢 LOW</span></div></section>}
      {tab === "buyers" && <section className="ng-card"><div className="ng-title"><div><span className="ng-kicker">AI BUYER MATCHING</span><h2>🤝 One harvest, multiple guaranteed buyers</h2></div></div><div className="match-grid">{[["KIIT Catering","Tomato","800 kg","₹37/kg","96%","Patia"],["Mayfair Hotel","Tomato","600 kg","₹39/kg","91%","Saheed Nagar"],["Bhubaneswar Retail Hub","Tomato","450 kg","₹36/kg","88%","Aiginia"]].map(x=><div className="match-card"><div className="match-score">{x[4]}</div><h3>{x[0]}</h3><p>{x[1]} • {x[2]}</p><b>{x[3]}</b><small>📍 {x[5]} • Quality: Grade A</small><button onClick={()=>notify(`Buyer connection sent to ${x[0]}`)}>Connect buyer →</button></div>)}</div></section>}
      {tab === "logistics" && <section className="ng-card"><div className="ng-title"><div><span className="ng-kicker">GREEN EV CORRIDOR</span><h2>🚛 AI Route + Perishability Engine</h2><p>The route changes based on shelf life, demand urgency, load and destination.</p></div><Badge type="green">EV fleet online</Badge></div><div className="route-board"><div className="route-line"><span>🌾 Balianta FPO</span><i></i><span>⚡ EV Reefer</span><i></i><span>📍 Patia</span><i></i><span>🏢 Buyer</span></div><div className="route-metrics"><div><b>42 km</b><small>optimized route</small></div><div><b>58 min</b><small>ETA</small></div><div><b>620 kg</b><small>load</small></div><div><b>0.7%</b><small>spoilage risk</small></div><div><b>₹1,120</b><small>logistics cost</small></div></div><button className="ng-primary" onClick={()=>notify("AI route dispatched: Balianta → Patia")}>⚡ Dispatch optimized route</button></div></section>}
      {tab === "tools" && <section className="ng-card"><div className="ng-title"><div><span className="ng-kicker">FARMER SIMPLE MODE</span><h2>📱 Sell without typing</h2><p>Designed for farmers who prefer photo, voice or WhatsApp.</p></div></div><div className="tool-grid"><div className="tool-card"><div className="tool-emoji">📸</div><h3>Snap-to-Sell</h3><p>Upload harvest → quality scan → price → listing.</p><button onClick={()=>{setSnapDone(true);notify("AI scan complete: Grade A • ₹37/kg")}}>{snapDone?"✓ AI Scan Complete":"Upload Harvest Photo"}</button>{snapDone&&<div className="scan-result">Grade A • Freshness 94% • ₹37/kg suggested</div>}</div><div className="tool-card"><div className="tool-emoji">🎙️</div><h3>Voice Listing</h3><p>“500 kg tomato Balianta mein bechna hai.”</p><button onClick={()=>{setVoiceOn(!voiceOn);notify(voiceOn?"Voice mode stopped":"Listening: Hindi / Odia / English")}}>{voiceOn?"🔴 Listening...":"🎤 Speak Now"}</button></div><div className="tool-card"><div className="tool-emoji">💬</div><h3>WhatsApp Farmer Bot</h3><p>Mandi rates, buyer matches and pickup booking.</p><button onClick={()=>notify("WhatsApp demo opened: Mandi rate ₹34/kg")}>Open KrishiBot</button></div></div></section>}
      {tab === "analytics" && <section className="ng-card"><div className="ng-title"><div><span className="ng-kicker">GOVERNMENT / ADMIN ANALYTICS</span><h2>📊 District Supply Intelligence</h2></div></div><div className="analytics-grid"><div><b>31%</b><span>forecast demand growth</span></div><div><b>82%</b><span>direct farmer share</span></div><div><b>₹6.4L</b><span>value retained today</span></div><div><b>2.8 MT</b><span>wastage avoided</span></div></div><div className="insight-table">{[["Tomato","4.8 MT","2.9 MT","1.9 MT","HIGH"],["Potato","3.6 MT","3.1 MT","0.5 MT","MEDIUM"],["Green Chilli","2.1 MT","1.5 MT","0.6 MT","HIGH"]].map(r=><div>{r.map((v,j)=><span className={j===4?"pill":j===3?"gap":""}>{v}</span>)}</div>)}</div></section>}
      <section className="ng-copilot"><div><span>🤖 KRISHIPATH COPILOT</span><h2>Ask the network</h2><p>{copilotReply}</p></div><div className="copilot-input"><input value={copilotInput} onChange={e=>setCopilotInput(e.target.value)} onKeyDown={e=>e.key==='Enter'&&askCopilot()} placeholder="e.g. What should I grow?"/><button onClick={askCopilot}>Ask</button></div></section>
      <section className="ng-batch"><div><span>🔳 SMART TRACEABILITY</span><h2>QR Batch Tracking</h2><p>Scan-ready digital passport for every harvest.</p></div><div className="batch-id">{batch}<small>🌱 Balianta FPO • Tomato • Grade A • 620 kg</small><small>🚛 Picked up • EV Reefer • ETA 58 min</small></div><button onClick={()=>setBatch(`KP-OD-TOM-${Math.floor(10000+Math.random()*89999)}`)}>Generate QR Batch</button></section>
    </div>;
  };

  /* =======================================================
     DEMO CONTROL
  ======================================================= */

  const DemoCenter = () => {
    if (!showDemo) {
      return (
        <button
          className="kp-demo-fab"
          onClick={() => setShowDemo(true)}
          title="SIH Demo Control"
        >
          <Zap size={21} />
        </button>
      );
    }

    return (
      <div className="kp-demo-panel">
        <div className="kp-demo-panel-head">
          <div>
            <Badge type="dark">
              <Sparkles size={11} /> SIH 2026
            </Badge>

            <h3>Demo Control Center</h3>
          </div>

          <button onClick={() => setShowDemo(false)}>
            <X size={18} />
          </button>
        </div>

        <p>
          Use this to demonstrate the complete KrishiPath journey
          during your SIH presentation.
        </p>

        <div className="kp-demo-steps">
          <button onClick={() => demoStep(1)}>
            <span>01</span>
            <div>
              <strong>Farmer</strong>
              <small>List harvest</small>
            </div>
            <ArrowRight size={15} />
          </button>

          <button onClick={() => demoStep(2)}>
            <span>02</span>
            <div>
              <strong>Buyer</strong>
              <small>Smart match</small>
            </div>
            <ArrowRight size={15} />
          </button>

          <button onClick={() => demoStep(3)}>
            <span>03</span>
            <div>
              <strong>Logistics</strong>
              <small>Optimize route</small>
            </div>
            <ArrowRight size={15} />
          </button>

          <button onClick={() => demoStep(4)}>
            <span>04</span>
            <div>
              <strong>Impact</strong>
              <small>Show results</small>
            </div>
            <ArrowRight size={15} />
          </button>
        </div>

        <button className="kp-reset-button" onClick={resetDemo}>
          <RefreshCw size={14} />
          Reset Demo
        </button>
      </div>
    );
  };

  /* =======================================================
     PAGE ROUTER
  ======================================================= */

  const renderPage = () => {
    switch (page) {
      case "marketplace":
        return <Marketplace />;

      case "farmer":
        return <FarmerPortal />;

      case "bulk":
        return <BulkBuyer />;

      case "logistics":
        return <Logistics />;

      case "orders":
        return <Orders />;

      case "ai":
        return <AIInsights />;

      case "fpo":
        return <FPOHub />;

      case "impact":
        return <Impact />;
      case "intelligence":
      case "copilot":
      case "tracking":
        return <NextGen />;

      case "dashboard":
      default:
        return <Dashboard />;
    }
  };

  /* =======================================================
     GLOBAL STYLES
  ======================================================= */

  const styles = `
    * {
      box-sizing: border-box;
    }

    :root {
      font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      color: #17201b;
      background: #f5f7f4;
      font-synthesis: none;
      text-rendering: optimizeLegibility;
    }

    body {
      margin: 0;
      min-width: 320px;
      background: #f5f7f4;
    }

    .ng-wrap{padding:24px 28px 60px;max-width:1500px;margin:auto}.ng-hero{background:linear-gradient(135deg,#123d2b,#1f6b45);color:white;border-radius:22px;padding:28px;display:flex;justify-content:space-between;gap:20px;box-shadow:0 15px 40px rgba(20,70,45,.18)}.ng-kicker{font-size:11px;font-weight:800;letter-spacing:1.4px;opacity:.78}.ng-hero h1{font-size:32px;margin:8px 0}.ng-hero p{max-width:850px;margin:0;line-height:1.6;color:#dceee5}.ng-live{background:rgba(255,255,255,.12);padding:15px 20px;border-radius:16px;min-width:145px;text-align:center}.pulse{display:inline-block;width:9px;height:9px;border-radius:50%;background:#73e6a1;margin-right:6px}.ng-stats{display:grid;grid-template-columns:repeat(4,1fr);gap:14px;margin:18px 0}.ng-stats>div,.analytics-grid>div{background:white;border:1px solid #e3e9e4;border-radius:16px;padding:18px;display:flex;flex-direction:column;gap:5px}.ng-stats span{font-size:12px;color:#68746d}.ng-stats b{font-size:25px}.ng-stats small{color:#87918b}.ng-tabs{display:flex;gap:8px;overflow:auto;margin:8px 0 16px}.ng-tabs button{border:1px solid #dce4de;background:white;border-radius:12px;padding:11px 14px;white-space:nowrap;cursor:pointer}.ng-tabs button.active{background:#1d5b3c;color:#fff;border-color:#1d5b3c}.ng-card{background:white;border:1px solid #e1e8e3;border-radius:20px;padding:24px;box-shadow:0 7px 25px rgba(20,40,30,.05)}.ng-title{display:flex;justify-content:space-between;gap:15px;margin-bottom:22px}.ng-title h2{margin:6px 0}.ng-title p{margin:0;color:#718078}.ng-grid2{display:grid;grid-template-columns:1.5fr .8fr;gap:20px}.forecast-list{display:flex;flex-direction:column;gap:10px}.forecast{display:flex;align-items:center;gap:12px;border:1px solid #e8ede9;padding:13px;border-radius:14px}.crop-icon{font-size:27px}.grow-main{flex:1;display:flex;flex-direction:column;gap:4px}.grow-main span,.grow-main small{font-size:12px;color:#77827c}.bar{height:6px;background:#edf1ed;border-radius:10px;overflow:hidden}.bar i{display:block;height:100%;background:#46a56d;border-radius:10px}.up{color:#18854c}.down{color:#d06a45}.recommend{background:#f0f8f2;border:1px solid #cfe5d5;border-radius:18px;padding:22px}.recommend h3{font-size:21px;margin:8px 0 2px}.big-number{font-size:38px;font-weight:800;margin:7px 0}.rec-row{border-top:1px solid #d7e7db;margin-top:14px;padding-top:10px;display:flex;flex-direction:column}.rec-row span{font-size:12px;color:#718078}.ng-primary,.tool-card button,.match-card button,.ng-batch button{border:0;background:#1d6745;color:white;border-radius:11px;padding:11px 15px;cursor:pointer;font-weight:700}.ng-primary{margin-top:16px;width:100%}.fake-map{height:420px;border-radius:18px;background:radial-gradient(circle at 25% 35%,#cde8d4 0 5%,transparent 6%),radial-gradient(circle at 68% 25%,#b9dfc5 0 5%,transparent 6%),radial-gradient(circle at 48% 70%,#dcebdd 0 5%,transparent 6%),#eef4ef;position:relative;overflow:hidden;border:1px solid #dce5de}.fake-map:before{content:'BHUBANESWAR DEMAND GRID';position:absolute;left:22px;top:18px;font-weight:800;color:#597063;font-size:12px;letter-spacing:1px}.map-zone{position:absolute;background:white;padding:10px 13px;border-radius:12px;box-shadow:0 6px 18px rgba(30,70,45,.12);min-width:135px}.map-zone small,.map-zone strong{display:block;font-size:11px;margin-top:3px}.map-zone strong{color:#1c7a4d}.z0{left:18%;top:30%}.z1{left:57%;top:18%}.z2{left:69%;top:52%}.z3{left:43%;top:42%}.z4{left:25%;top:68%}.z5{left:72%;top:75%}.map-dot{width:10px;height:10px;border-radius:50%;background:#e45b45;display:inline-block;margin-right:6px}.legend{display:flex;gap:20px;margin-top:13px;font-size:12px}.match-grid,.tool-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:15px}.match-card,.tool-card{border:1px solid #e1e8e3;border-radius:16px;padding:18px;position:relative}.match-score{position:absolute;right:14px;top:14px;background:#e7f6ec;color:#167344;padding:6px 9px;border-radius:20px;font-weight:800}.match-card h3{margin:0 0 7px}.match-card p,.match-card small,.tool-card p{color:#6d7972;font-size:13px}.match-card b{display:block;font-size:20px;margin:12px 0}.match-card small{display:block;margin-bottom:14px}.match-card button{width:100%}.route-board{background:#f5f8f5;border-radius:17px;padding:22px}.route-line{display:flex;align-items:center;gap:10px;justify-content:space-between;font-weight:700}.route-line i{height:3px;background:#54a975;flex:1}.route-metrics{display:grid;grid-template-columns:repeat(5,1fr);gap:10px;margin:22px 0}.route-metrics div{background:white;padding:13px;border-radius:12px}.route-metrics b,.route-metrics small{display:block}.route-metrics small{font-size:11px;color:#77827c;margin-top:4px}.tool-emoji{font-size:32px}.tool-card h3{margin:8px 0}.tool-card button{width:100%;margin-top:8px}.scan-result{margin-top:10px;background:#edf8f0;padding:10px;border-radius:10px;font-size:12px;color:#19633e}.analytics-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}.analytics-grid b{font-size:27px}.analytics-grid span{font-size:12px;color:#718078}.insight-table{margin-top:16px;border:1px solid #e2e8e3;border-radius:12px;overflow:hidden}.insight-table>div{display:grid;grid-template-columns:1.5fr repeat(4,1fr);padding:13px;border-bottom:1px solid #edf0ed}.insight-table>div:last-child{border-bottom:0}.gap{font-weight:800}.pill{color:#a25d00;font-weight:800}.ng-copilot{margin-top:16px;background:#172b21;color:white;border-radius:18px;padding:20px;display:flex;justify-content:space-between;gap:20px;align-items:center}.ng-copilot h2{margin:5px 0}.ng-copilot p{max-width:780px;color:#d5e3da;line-height:1.5}.copilot-input{display:flex;min-width:330px}.copilot-input input{flex:1;border:0;padding:12px;border-radius:10px 0 0 10px}.copilot-input button{border:0;background:#73d59b;padding:0 16px;border-radius:0 10px 10px 0;font-weight:800}.ng-batch{margin-top:16px;background:white;border:1px solid #dfe7e1;border-radius:18px;padding:20px;display:flex;align-items:center;gap:20px}.ng-batch h2{margin:5px 0}.ng-batch>div:first-child{flex:1}.batch-id{background:#f4f7f4;border:1px dashed #a8b8ae;border-radius:12px;padding:13px;min-width:330px;font-weight:800}.batch-id small{display:block;font-weight:400;color:#69766f;margin-top:5px}
    @media(max-width:900px){.ng-grid2,.match-grid,.tool-grid{grid-template-columns:1fr}.ng-stats,.analytics-grid{grid-template-columns:repeat(2,1fr)}.ng-hero,.ng-copilot,.ng-batch{flex-direction:column}.route-metrics{grid-template-columns:repeat(2,1fr)}.copilot-input{min-width:0;width:100%}}


    button,
    input,
    select {
      font: inherit;
    }

    button {
      cursor: pointer;
    }

    .kp-app {
      min-height: 100vh;
      background:
        radial-gradient(circle at 85% 0%, rgba(16,185,129,.06), transparent 30%),
        #f5f7f4;
    }

    .kp-main {
      margin-left: 270px;
      min-height: 100vh;
    }

    /* SIDEBAR */

    .kp-sidebar {
      position: fixed;
      z-index: 50;
      left: 0;
      top: 0;
      bottom: 0;
      width: 270px;
      padding: 22px 16px;
      color: #aab6ae;
      background: #111916;
      border-right: 1px solid rgba(255,255,255,.05);
      display: flex;
      flex-direction: column;
    }

    .kp-brand {
      display: flex;
      align-items: center;
      gap: 11px;
      padding: 5px 8px 24px;
    }

    .kp-brand-icon {
      width: 42px;
      height: 42px;
      border-radius: 13px;
      display: grid;
      place-items: center;
      color: white;
      background: linear-gradient(135deg,#10b981,#059669);
      box-shadow: 0 10px 25px rgba(16,185,129,.18);
    }

    .kp-brand-name {
      color: white;
      font-weight: 900;
      font-size: 19px;
      letter-spacing: -.5px;
    }

    .kp-brand-tag {
      margin-top: 2px;
      color: #6e7c73;
      font-size: 9px;
      font-weight: 800;
      letter-spacing: 1.3px;
      text-transform: uppercase;
    }

    .kp-mobile-close {
      display: none;
      margin-left: auto;
      background: transparent;
      border: 0;
      color: #89958e;
    }

    .kp-role-card {
      display: flex;
      gap: 10px;
      align-items: center;
      padding: 12px;
      margin: 0 2px 22px;
      border: 1px solid rgba(255,255,255,.07);
      border-radius: 15px;
      background: rgba(255,255,255,.035);
    }

    .kp-avatar {
      width: 38px;
      height: 38px;
      border-radius: 12px;
      display: grid;
      place-items: center;
      background: #1d2924;
      font-size: 19px;
    }

    .kp-role-label,
    .kp-nav-label {
      font-size: 8px;
      font-weight: 900;
      letter-spacing: 1.3px;
      color: #647169;
    }

    .kp-role-card strong {
      display: block;
      margin-top: 3px;
      color: #e9efeb;
      font-size: 12px;
    }

    .kp-nav-label {
      padding: 0 12px 8px;
    }

    .kp-nav {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    .kp-nav-item {
      width: 100%;
      display: flex;
      align-items: center;
      gap: 11px;
      border: 0;
      border-radius: 11px;
      padding: 11px 12px;
      color: #89968e;
      background: transparent;
      text-align: left;
      transition: .2s;
    }

    .kp-nav-item:hover {
      color: white;
      background: rgba(255,255,255,.055);
    }

    .kp-nav-item.active {
      color: white;
      background: #059669;
      box-shadow: 0 8px 22px rgba(5,150,105,.18);
    }

    .kp-nav-item span {
      flex: 1;
      font-size: 12px;
      font-weight: 750;
    }

    .kp-sidebar-bottom {
      margin-top: auto;
    }

    .kp-connectivity {
      display: flex;
      align-items: center;
      gap: 9px;
      padding: 11px;
      border: 1px solid rgba(255,255,255,.07);
      border-radius: 14px;
      background: rgba(255,255,255,.025);
    }

    .kp-connection-icon {
      width: 32px;
      height: 32px;
      border-radius: 10px;
      display: grid;
      place-items: center;
    }

    .kp-connectivity.online .kp-connection-icon {
      color: #34d399;
      background: rgba(16,185,129,.1);
    }

    .kp-connectivity.offline .kp-connection-icon {
      color: #fb923c;
      background: rgba(249,115,22,.1);
    }

    .kp-connectivity strong {
      display: block;
      color: #e7eee9;
      font-size: 10px;
    }

    .kp-connectivity small {
      display: block;
      margin-top: 2px;
      color: #66736b;
      font-size: 8px;
    }

    .kp-refresh {
      margin-left: auto;
      border: 0;
      background: transparent;
      color: #657169;
      padding: 5px;
    }

    .kp-sync-button {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 6px;
      margin-top: 7px;
      border: 1px solid rgba(16,185,129,.18);
      border-radius: 10px;
      padding: 8px;
      background: rgba(16,185,129,.08);
      color: #34d399;
      font-size: 10px;
      font-weight: 800;
    }

    .kp-sih-mini {
      display: flex;
      align-items: center;
      gap: 6px;
      justify-content: center;
      color: #536058;
      font-size: 8px;
      font-weight: 800;
      letter-spacing: .6px;
      margin-top: 13px;
      text-transform: uppercase;
    }

    /* TOPBAR */

    .kp-topbar {
      height: 76px;
      position: sticky;
      top: 0;
      z-index: 30;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 28px;
      background: rgba(255,255,255,.9);
      backdrop-filter: blur(15px);
      border-bottom: 1px solid #e6ebe7;
    }

    .kp-top-left,
    .kp-top-actions {
      display: flex;
      align-items: center;
    }

    .kp-top-left {
      gap: 14px;
    }

    .kp-breadcrumb {
      color: #93a097;
      font-size: 8px;
      font-weight: 900;
      letter-spacing: 1.2px;
      text-transform: uppercase;
    }

    .kp-topbar h1 {
      margin: 3px 0 0;
      font-size: 19px;
      letter-spacing: -.4px;
    }

    .kp-menu-button {
      display: none;
      border: 0;
      background: #f0f3f1;
      border-radius: 10px;
      padding: 8px;
    }

    .kp-top-actions {
      gap: 10px;
    }

    .kp-language,
    .kp-role-select {
      border: 1px solid #e3e9e5;
      border-radius: 10px;
      background: white;
      color: #445049;
      padding: 8px 10px;
      font-size: 10px;
      font-weight: 800;
      outline: none;
    }

    .kp-role-select {
      border-color: #ccefe2;
      background: #effbf6;
      color: #047857;
    }

    .kp-notification-button {
      position: relative;
      width: 34px;
      height: 34px;
      display: grid;
      place-items: center;
      border: 1px solid #e5eae7;
      border-radius: 10px;
      background: white;
      color: #607067;
    }

    .kp-notification-button span {
      position: absolute;
      top: -5px;
      right: -5px;
      min-width: 15px;
      height: 15px;
      display: grid;
      place-items: center;
      border-radius: 50%;
      background: #ef4444;
      color: white;
      font-size: 8px;
      font-weight: 900;
    }

    /* PAGE */

    .kp-page {
      max-width: 1500px;
      margin: 0 auto;
      padding: 30px;
    }

    .kp-section-title {
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      gap: 20px;
      margin-bottom: 20px;
    }

    .kp-section-title h2 {
      margin: 0;
      font-size: 22px;
      letter-spacing: -.6px;
    }

    .kp-section-title p {
      margin: 5px 0 0;
      color: #7d8a82;
      font-size: 11px;
    }

    /* BADGES */

    .kp-badge {
      display: inline-flex;
      align-items: center;
      gap: 5px;
      width: fit-content;
      border-radius: 999px;
      padding: 5px 8px;
      font-size: 8px;
      font-weight: 900;
      letter-spacing: .5px;
      text-transform: uppercase;
      white-space: nowrap;
    }

    .kp-badge.green {
      color: #047857;
      background: #eaf9f2;
    }

    .kp-badge.blue {
      color: #2563eb;
      background: #eff6ff;
    }

    .kp-badge.orange {
      color: #c2410c;
      background: #fff4e8;
    }

    .kp-badge.red {
      color: #dc2626;
      background: #fff0f0;
    }

    .kp-badge.purple {
      color: #7c3aed;
      background: #f4efff;
    }

    .kp-badge.dark {
      color: #a7f3d0;
      background: rgba(255,255,255,.08);
      border: 1px solid rgba(255,255,255,.08);
    }

    /* HERO */

    .kp-hero {
      position: relative;
      overflow: hidden;
      min-height: 290px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 35px 45px;
      border-radius: 26px;
      background:
        radial-gradient(circle at 80% 40%, rgba(16,185,129,.25), transparent 25%),
        linear-gradient(135deg,#0f1e18,#14261f);
      color: white;
      margin-bottom: 20px;
    }

    .kp-hero-content {
      position: relative;
      z-index: 2;
      max-width: 620px;
    }

    .kp-hero h2 {
      margin: 16px 0 10px;
      font-size: 34px;
      line-height: 1.05;
      letter-spacing: -1.3px;
    }

    .kp-hero p {
      max-width: 570px;
      margin: 0;
      color: #aab9b0;
      font-size: 13px;
      line-height: 1.7;
    }

    .kp-hero-buttons {
      display: flex;
      gap: 10px;
      margin-top: 24px;
    }

    .kp-primary-button,
    .kp-secondary-dark,
    .kp-dark-button,
    .kp-cart-button,
    .kp-outline-button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 7px;
      border-radius: 11px;
      padding: 10px 15px;
      border: 0;
      font-size: 10px;
      font-weight: 850;
      transition: .2s;
    }

    .kp-primary-button {
      color: white;
      background: #059669;
      box-shadow: 0 9px 22px rgba(5,150,105,.18);
    }

    .kp-primary-button:hover {
      background: #047857;
      transform: translateY(-1px);
    }

    .kp-primary-button.full {
      width: 100%;
      margin-top: 18px;
      padding: 13px;
    }

    .kp-secondary-dark {
      color: white;
      background: rgba(255,255,255,.08);
      border: 1px solid rgba(255,255,255,.09);
    }

    .kp-secondary-dark:hover {
      background: rgba(255,255,255,.13);
    }

    .kp-hero-visual {
      width: 330px;
      display: grid;
      place-items: center;
    }

    .kp-network-circle {
      position: relative;
      width: 250px;
      height: 250px;
      border: 1px solid rgba(255,255,255,.08);
      border-radius: 50%;
      background: radial-gradient(circle,rgba(16,185,129,.12),transparent 62%);
    }

    .kp-network-circle::before,
    .kp-network-circle::after {
      content: "";
      position: absolute;
      inset: 24px;
      border: 1px dashed rgba(255,255,255,.1);
      border-radius: 50%;
    }

    .kp-network-circle::after {
      inset: 65px;
    }

    .kp-network-center {
      position: absolute;
      width: 65px;
      height: 65px;
      left: calc(50% - 32.5px);
      top: calc(50% - 32.5px);
      display: grid;
      place-items: center;
      color: #6ee7b7;
      background: #15372b;
      border: 1px solid rgba(110,231,183,.25);
      border-radius: 20px;
      z-index: 3;
      box-shadow: 0 0 40px rgba(16,185,129,.2);
    }

    .network-node {
      position: absolute;
      width: 45px;
      height: 45px;
      display: grid;
      place-items: center;
      border: 1px solid rgba(255,255,255,.1);
      border-radius: 14px;
      background: rgba(255,255,255,.07);
      z-index: 3;
      font-size: 20px;
    }

    .farmer-node { left: 0; top: 92px; }
    .buyer-node { right: 0; top: 92px; }
    .truck-node { left: 47px; bottom: 4px; }
    .data-node { right: 47px; bottom: 4px; }

    .network-line {
      position: absolute;
      height: 1px;
      background: rgba(110,231,183,.22);
      transform-origin: left;
      z-index: 1;
    }

    .line1 {
      width: 90px;
      left: 39px;
      top: 115px;
    }

    .line2 {
      width: 90px;
      right: 39px;
      top: 115px;
    }

    .line3 {
      width: 105px;
      left: 75px;
      top: 166px;
      transform: rotate(58deg);
    }

    .line4 {
      width: 105px;
      right: 75px;
      top: 166px;
      transform: rotate(122deg);
    }

    /* STATS */

    .kp-stat-grid {
      display: grid;
      grid-template-columns: repeat(4,1fr);
      gap: 14px;
      margin-bottom: 20px;
    }

    .kp-stat {
      padding: 18px;
      border: 1px solid #e5ebe7;
      border-radius: 17px;
      background: white;
      box-shadow: 0 4px 15px rgba(15,23,42,.025);
    }

    .kp-stat-top {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .kp-stat-icon {
      width: 38px;
      height: 38px;
      display: grid;
      place-items: center;
      border-radius: 11px;
      color: #059669;
      background: #eaf9f2;
    }

    .kp-stat-icon.danger {
      color: #ea580c;
      background: #fff3e9;
    }

    .trend-up,
    .trend-down {
      display: flex;
      align-items: center;
      gap: 3px;
      font-size: 9px;
      font-weight: 900;
    }

    .trend-up { color: #059669; }
    .trend-down { color: #dc2626; }

    .kp-stat-title {
      margin-top: 15px;
      color: #89968e;
      font-size: 9px;
      font-weight: 850;
      letter-spacing: .7px;
      text-transform: uppercase;
    }

    .kp-stat-value {
      margin-top: 3px;
      font-size: 24px;
      font-weight: 900;
      letter-spacing: -.8px;
    }

    .kp-stat-subtitle {
      margin-top: 3px;
      color: #a0aaa4;
      font-size: 9px;
    }

    /* CARDS */

    .kp-grid-2 {
      display: grid;
      grid-template-columns: 1.3fr .7fr;
      gap: 18px;
      margin-bottom: 18px;
    }

    .kp-card {
      padding: 22px;
      border: 1px solid #e5ebe7;
      border-radius: 19px;
      background: white;
      box-shadow: 0 4px 18px rgba(15,23,42,.025);
    }

    .kp-card-heading {
      display: flex;
      gap: 11px;
      align-items: center;
      margin-bottom: 22px;
    }

    .kp-heading-icon {
      width: 39px;
      height: 39px;
      display: grid;
      place-items: center;
      border-radius: 11px;
    }

    .kp-heading-icon.green {
      color: #059669;
      background: #eaf9f2;
    }

    .kp-heading-icon.blue {
      color: #2563eb;
      background: #eff6ff;
    }

    .kp-card-heading h3 {
      margin: 0;
      font-size: 15px;
    }

    .kp-card-heading p {
      margin: 3px 0 0;
      color: #9aa49e;
      font-size: 9px;
    }

    .kp-chart {
      width: 100%;
      height: 235px;
    }

    .kp-chart.large {
      height: 300px;
    }

    .kp-action-list {
      display: flex;
      flex-direction: column;
      gap: 7px;
    }

    .kp-action-item {
      display: flex;
      align-items: center;
      gap: 10px;
      width: 100%;
      padding: 10px;
      border: 1px solid #edf0ee;
      border-radius: 12px;
      background: #fbfcfb;
      text-align: left;
    }

    .kp-action-item:hover {
      border-color: #cdeee0;
      background: #f7fcfa;
    }

    .kp-action-icon {
      width: 34px;
      height: 34px;
      display: grid;
      place-items: center;
      border-radius: 10px;
      flex-shrink: 0;
    }

    .kp-action-icon.green {
      color: #059669;
      background: #eaf9f2;
    }

    .kp-action-icon.blue {
      color: #2563eb;
      background: #eff6ff;
    }

    .kp-action-icon.orange {
      color: #ea580c;
      background: #fff3e9;
    }

    .kp-action-icon.purple {
      color: #7c3aed;
      background: #f4efff;
    }

    .kp-action-item > div:nth-child(2) {
      flex: 1;
    }

    .kp-action-item strong {
      display: block;
      color: #26332c;
      font-size: 10px;
    }

    .kp-action-item span {
      display: block;
      margin-top: 3px;
      color: #9aa49e;
      font-size: 8px;
    }

    .kp-action-item > svg {
      color: #a7b0ab;
    }

    /* FLOW */

    .kp-flow-card {
      padding: 22px;
      border: 1px solid #e5ebe7;
      border-radius: 19px;
      background: white;
    }

    .kp-flow {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 8px;
      overflow-x: auto;
      padding: 5px 0;
    }

    .kp-flow-step {
      min-width: 115px;
      text-align: center;
    }

    .kp-flow-icon {
      width: 48px;
      height: 48px;
      display: grid;
      place-items: center;
      margin: 0 auto 8px;
      border-radius: 14px;
      background: #f2f6f3;
      font-size: 21px;
    }

    .kp-flow-step strong {
      display: block;
      font-size: 10px;
    }

    .kp-flow-step span {
      display: block;
      margin-top: 3px;
      color: #99a39d;
      font-size: 8px;
    }

    .kp-flow-arrow {
      color: #b0bbb4;
      flex-shrink: 0;
    }

    /* FORM */

    .kp-form-grid {
      display: grid;
      grid-template-columns: repeat(2,1fr);
      gap: 12px;
    }

    .kp-form-field {
      display: flex;
      flex-direction: column;
      gap: 6px;
    }

    .kp-form-field > span {
      color: #68766e;
      font-size: 9px;
      font-weight: 850;
    }

    .kp-form-field input,
    .kp-form-field select {
      width: 100%;
      padding: 11px 12px;
      border: 1px solid #e2e8e4;
      border-radius: 10px;
      outline: none;
      color: #26332c;
      background: #fafcfb;
      font-size: 11px;
    }

    .kp-form-field input:focus,
    .kp-form-field select:focus {
      border-color: #6ee7b7;
      box-shadow: 0 0 0 3px rgba(16,185,129,.08);
    }

    /* AI CARD */

    .kp-ai-card {
      position: relative;
      overflow: hidden;
      padding: 27px;
      border-radius: 19px;
      color: white;
      background: linear-gradient(135deg,#101b17,#172b22);
    }

    .kp-ai-card::after {
      content: "";
      position: absolute;
      width: 210px;
      height: 210px;
      right: -80px;
      bottom: -90px;
      border-radius: 50%;
      background: rgba(16,185,129,.1);
    }

    .kp-ai-label {
      display: flex;
      align-items: center;
      gap: 5px;
      width: fit-content;
      padding: 5px 8px;
      border: 1px solid rgba(110,231,183,.15);
      border-radius: 999px;
      color: #6ee7b7;
      background: rgba(16,185,129,.08);
      font-size: 7px;
      font-weight: 900;
      letter-spacing: .8px;
    }

    .kp-ai-card h3 {
      margin: 20px 0 7px;
      font-size: 25px;
      letter-spacing: -.8px;
    }

    .kp-ai-card > p {
      max-width: 450px;
      color: #93a69c;
      font-size: 10px;
      line-height: 1.6;
    }

    .kp-price-display {
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      gap: 20px;
      margin: 28px 0 18px;
    }

    .kp-price-display span,
    .kp-confidence span {
      display: block;
      color: #6f8278;
      font-size: 8px;
      font-weight: 800;
      text-transform: uppercase;
    }

    .kp-price-display strong {
      display: block;
      margin-top: 5px;
      font-size: 38px;
      letter-spacing: -1.5px;
    }

    .kp-price-display small {
      color: #8ca095;
      font-size: 12px;
      font-weight: 500;
    }

    .kp-confidence {
      text-align: right;
    }

    .kp-confidence strong {
      display: block;
      margin-top: 5px;
      color: #6ee7b7;
      font-size: 26px;
    }

    .kp-breakdown {
      display: grid;
      grid-template-columns: repeat(3,1fr);
      border-top: 1px solid rgba(255,255,255,.07);
      padding-top: 15px;
      gap: 10px;
    }

    .kp-breakdown span {
      display: block;
      color: #697b71;
      font-size: 8px;
    }

    .kp-breakdown strong {
      display: block;
      margin-top: 4px;
      font-size: 11px;
    }

    .green-text {
      color: #6ee7b7;
    }

    .kp-demo-note {
      display: flex;
      gap: 8px;
      align-items: flex-start;
      margin-top: 17px;
      padding: 10px;
      border: 1px solid rgba(16,185,129,.12);
      border-radius: 10px;
      color: #80938a;
      background: rgba(255,255,255,.025);
      font-size: 8px;
      line-height: 1.5;
    }

    /* TABLE */

    .kp-table-wrap {
      overflow-x: auto;
    }

    .kp-table {
      width: 100%;
      border-collapse: collapse;
      min-width: 750px;
    }

    .kp-table th {
      padding: 11px 9px;
      border-bottom: 1px solid #edf0ee;
      color: #9aa59e;
      font-size: 8px;
      font-weight: 900;
      text-align: left;
      letter-spacing: .6px;
      text-transform: uppercase;
    }

    .kp-table td {
      padding: 13px 9px;
      border-bottom: 1px solid #f0f3f1;
      color: #56645c;
      font-size: 9px;
    }

    .kp-table td strong {
      color: #253129;
      font-size: 10px;
    }

    .kp-table td small {
      display: block;
      margin-top: 3px;
      color: #a1aaa5;
      font-size: 7px;
    }

    .kp-table td svg {
      vertical-align: middle;
      margin-right: 3px;
    }

    .kp-table code {
      color: #66756c;
      font-size: 8px;
    }

    .kp-table-product {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .kp-table-product span {
      font-size: 18px;
    }

    /* MARKETPLACE */

    .kp-search-bar {
      display: flex;
      gap: 9px;
      margin-bottom: 18px;
    }

    .kp-search {
      flex: 1;
      display: flex;
      align-items: center;
      gap: 9px;
      padding: 0 13px;
      border: 1px solid #e2e8e4;
      border-radius: 12px;
      background: white;
    }

    .kp-search svg {
      color: #9ca7a1;
    }

    .kp-search input {
      width: 100%;
      border: 0;
      outline: 0;
      padding: 12px 0;
      font-size: 10px;
    }

    .kp-filter {
      display: flex;
      align-items: center;
      gap: 6px;
      padding: 0 10px;
      border: 1px solid #e2e8e4;
      border-radius: 12px;
      background: white;
    }

    .kp-filter select {
      border: 0;
      outline: 0;
      background: transparent;
      padding: 10px;
      font-size: 9px;
      font-weight: 800;
    }

    .kp-cart-button {
      color: #047857;
      background: #eaf9f2;
    }

    .kp-product-grid {
      display: grid;
      grid-template-columns: repeat(3,1fr);
      gap: 15px;
    }

    .kp-product-card {
      overflow: hidden;
      border: 1px solid #e5ebe7;
      border-radius: 18px;
      background: white;
      transition: .2s;
    }

    .kp-product-card:hover {
      transform: translateY(-2px);
      box-shadow: 0 13px 30px rgba(15,23,42,.07);
    }

    .kp-product-image {
      position: relative;
      height: 150px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #f4f7f5;
    }

    .kp-product-image > span {
      font-size: 65px;
    }

    .kp-product-image .kp-badge {
      position: absolute;
      top: 11px;
      right: 11px;
    }

    .kp-product-body {
      padding: 17px;
    }

    .kp-product-title-row {
      display: flex;
      justify-content: space-between;
      gap: 10px;
    }

    .kp-product-title-row h3 {
      margin: 0;
      font-size: 14px;
    }

    .kp-product-title-row p {
      display: flex;
      align-items: center;
      gap: 3px;
      margin: 4px 0 0;
      color: #9ba59f;
      font-size: 8px;
    }

    .kp-product-info {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 8px;
      margin: 16px 0;
      padding: 11px 0;
      border-top: 1px solid #f0f3f1;
      border-bottom: 1px solid #f0f3f1;
    }

    .kp-product-info span,
    .kp-product-info strong {
      display: block;
    }

    .kp-product-info span {
      color: #a0aaa4;
      font-size: 7px;
      font-weight: 900;
    }

    .kp-product-info strong {
      margin-top: 4px;
      font-size: 9px;
    }

    .kp-product-bottom {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 8px;
    }

    .kp-product-price {
      font-size: 21px;
    }

    .kp-product-bottom > div > span {
      color: #9aa49e;
      font-size: 8px;
    }

    .kp-dark-button {
      color: white;
      background: #18211d;
    }

    .kp-dark-button:hover {
      background: #059669;
    }

    .kp-dark-button:disabled {
      opacity: .5;
      cursor: not-allowed;
    }

    .kp-cart-panel {
      position: sticky;
      bottom: 15px;
      z-index: 20;
      display: flex;
      align-items: center;
      gap: 15px;
      margin-top: 20px;
      padding: 13px 15px;
      border: 1px solid #cfece0;
      border-radius: 16px;
      background: rgba(249,255,252,.96);
      backdrop-filter: blur(12px);
      box-shadow: 0 15px 35px rgba(15,23,42,.08);
    }

    .kp-cart-panel > div:first-child {
      min-width: 145px;
    }

    .kp-cart-panel > div:first-child strong,
    .kp-cart-panel > div:first-child span {
      display: block;
    }

    .kp-cart-panel > div:first-child strong {
      font-size: 10px;
    }

    .kp-cart-panel > div:first-child span {
      margin-top: 3px;
      color: #89958e;
      font-size: 8px;
    }

    .kp-cart-items {
      flex: 1;
      display: flex;
      gap: 7px;
      overflow-x: auto;
    }

    .kp-cart-item {
      min-width: 120px;
      display: flex;
      align-items: center;
      gap: 6px;
      padding: 7px;
      border: 1px solid #e6eee9;
      border-radius: 9px;
      background: white;
    }

    .kp-cart-item > span {
      font-size: 16px;
    }

    .kp-cart-item strong,
    .kp-cart-item small {
      display: block;
    }

    .kp-cart-item strong {
      font-size: 8px;
    }

    .kp-cart-item small {
      color: #9aa49e;
      font-size: 7px;
    }

    .kp-cart-item button {
      margin-left: auto;
      border: 0;
      background: transparent;
      color: #9ca7a0;
    }

    /* BULK */

    .kp-procurement-layout {
      display: grid;
      grid-template-columns: .7fr 1.3fr;
      gap: 18px;
    }

    .kp-request-main {
      display: flex;
      align-items: center;
      gap: 13px;
      padding: 15px;
      margin: 15px 0;
      border-radius: 14px;
      background: #f7f9f8;
    }

    .kp-big-emoji {
      width: 50px;
      height: 50px;
      display: grid;
      place-items: center;
      border-radius: 13px;
      background: white;
      font-size: 27px;
    }

    .kp-request-main span,
    .kp-request-main strong {
      display: block;
    }

    .kp-request-main span {
      color: #9ba59f;
      font-size: 7px;
      font-weight: 900;
    }

    .kp-request-main strong {
      margin-top: 4px;
      font-size: 19px;
    }

    .kp-request-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 8px;
    }

    .kp-request-metric {
      padding: 10px;
      border: 1px solid #edf0ee;
      border-radius: 10px;
    }

    .kp-request-metric span,
    .kp-request-metric strong {
      display: block;
    }

    .kp-request-metric span {
      color: #9aa49e;
      font-size: 7px;
    }

    .kp-request-metric strong {
      margin-top: 3px;
      font-size: 10px;
    }

    .kp-deadline {
      display: flex;
      align-items: center;
      gap: 5px;
      margin-top: 13px;
      padding: 9px;
      border-radius: 9px;
      color: #9a6a1c;
      background: #fff8e9;
      font-size: 8px;
    }

    .kp-match-list {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .kp-match {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 11px;
      border: 1px solid #edf0ee;
      border-radius: 13px;
    }

    .kp-match:hover {
      border-color: #cdeee0;
      background: #fbfefc;
    }

    .kp-match-rank {
      width: 25px;
      text-align: center;
      color: #a2aca6;
      font-size: 8px;
      font-weight: 900;
    }

    .kp-match-icon {
      width: 39px;
      height: 39px;
      display: grid;
      place-items: center;
      border-radius: 11px;
      background: #f4f7f5;
      font-size: 20px;
    }

    .kp-match-info {
      flex: 1;
    }

    .kp-match-info strong,
    .kp-match-info span,
    .kp-match-info small {
      display: block;
    }

    .kp-match-info strong {
      font-size: 10px;
    }

    .kp-match-info span {
      margin-top: 2px;
      color: #89958e;
      font-size: 8px;
    }

    .kp-match-info small {
      margin-top: 4px;
      color: #a4aca7;
      font-size: 7px;
    }

    .kp-score {
      text-align: right;
      margin-right: 5px;
    }

    .kp-score strong,
    .kp-score span {
      display: block;
    }

    .kp-score strong {
      color: #059669;
      font-size: 19px;
    }

    .kp-score span {
      color: #9ca6a0;
      font-size: 7px;
      text-transform: uppercase;
    }

    .kp-dark-icon-button {
      width: 34px;
      height: 34px;
      display: grid;
      place-items: center;
      border: 0;
      border-radius: 10px;
      color: white;
      background: #18211d;
    }

    .kp-dark-icon-button:hover {
      background: #059669;
    }

    /* LOGISTICS */

    .kp-logistics-stats {
      display: grid;
      grid-template-columns: repeat(4,1fr);
      gap: 14px;
      margin-bottom: 18px;
    }

    .kp-map {
      position: relative;
      height: 380px;
      overflow: hidden;
      border-radius: 14px;
      background:
        radial-gradient(circle at 30% 30%,rgba(16,185,129,.05),transparent 20%),
        #f6f8f6;
    }

    .kp-map svg {
      width: 100%;
      height: 100%;
    }

    .map-route {
      fill: none;
      stroke-width: 4;
      stroke-linecap: round;
      stroke-linejoin: round;
    }

    .map-route.traditional {
      stroke: #c5ccc8;
      stroke-dasharray: 8 8;
    }

    .map-route.optimized {
      stroke: #10b981;
    }

    .map-point {
      fill: #ffffff;
      stroke: #059669;
      stroke-width: 4;
    }

    .map-label {
      fill: #58665e;
      font-size: 16px;
      font-weight: 800;
    }

    .kp-map-legend {
      position: absolute;
      left: 12px;
      bottom: 12px;
      display: flex;
      gap: 10px;
      padding: 8px 10px;
      border: 1px solid #e3e8e5;
      border-radius: 10px;
      background: rgba(255,255,255,.9);
      font-size: 8px;
      font-weight: 800;
    }

    .kp-map-legend span {
      display: flex;
      align-items: center;
      gap: 5px;
    }

    .legend-dot {
      width: 7px;
      height: 7px;
      border-radius: 50%;
    }

    .legend-dot.green {
      background: #10b981;
    }

    .legend-dot.gray {
      background: #b9c1bd;
    }

    .kp-dispatch-list {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .kp-dispatch {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 11px;
      border: 1px solid #edf0ee;
      border-radius: 12px;
    }

    .kp-dispatch-number {
      width: 28px;
      height: 28px;
      display: grid;
      place-items: center;
      border-radius: 9px;
      color: #68766e;
      background: #f1f4f2;
      font-size: 9px;
      font-weight: 900;
    }

    .kp-dispatch-main {
      flex: 1;
    }

    .kp-dispatch-main strong,
    .kp-dispatch-main span {
      display: block;
    }

    .kp-dispatch-main strong {
      font-size: 10px;
    }

    .kp-dispatch-main span {
      margin-top: 3px;
      color: #99a39d;
      font-size: 8px;
    }

    .kp-efficiency-card {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 20px;
      color: white;
      background: linear-gradient(135deg,#101b17,#172b22);
    }

    .kp-efficiency-card h3 {
      margin: 12px 0 5px;
      font-size: 21px;
    }

    .kp-efficiency-card p {
      max-width: 600px;
      margin: 0;
      color: #8fa198;
      font-size: 9px;
      line-height: 1.5;
    }

    .kp-efficiency-number {
      min-width: 180px;
      text-align: right;
    }

    .kp-efficiency-number strong,
    .kp-efficiency-number span {
      display: block;
    }

    .kp-efficiency-number strong {
      color: #6ee7b7;
      font-size: 39px;
    }

    .kp-efficiency-number span {
      color: #75877e;
      font-size: 8px;
    }

    /* ORDERS */

    .kp-order-summary {
      display: grid;
      grid-template-columns: repeat(3,1fr);
      gap: 10px;
      margin-bottom: 18px;
    }

    .kp-order-summary > div {
      padding: 13px;
      border-radius: 12px;
      background: #f7f9f8;
    }

    .kp-order-summary span,
    .kp-order-summary strong {
      display: block;
    }

    .kp-order-summary span {
      color: #9ca6a0;
      font-size: 7px;
      font-weight: 900;
    }

    .kp-order-summary strong {
      margin-top: 4px;
      font-size: 17px;
    }

    /* AI */

    .kp-ai-grid {
      display: grid;
      grid-template-columns: repeat(4,1fr);
      gap: 14px;
      margin-bottom: 18px;
    }

    .kp-insight-card {
      padding: 19px;
      border: 1px solid #e5ebe7;
      border-radius: 17px;
      background: white;
    }

    .kp-insight-icon {
      width: 39px;
      height: 39px;
      display: grid;
      place-items: center;
      margin-bottom: 15px;
      border-radius: 11px;
    }

    .kp-insight-icon.green {
      color: #059669;
      background: #eaf9f2;
    }

    .kp-insight-icon.blue {
      color: #2563eb;
      background: #eff6ff;
    }

    .kp-insight-icon.orange {
      color: #ea580c;
      background: #fff3e9;
    }

    .kp-insight-icon.purple {
      color: #7c3aed;
      background: #f4efff;
    }

    .kp-insight-card > span {
      color: #87938c;
      font-size: 8px;
      font-weight: 900;
      text-transform: uppercase;
    }

    .kp-insight-card > strong {
      display: block;
      margin-top: 4px;
      font-size: 25px;
    }

    .kp-insight-card p {
      margin: 5px 0 0;
      color: #9ba59f;
      font-size: 8px;
      line-height: 1.5;
    }

    .kp-logic-stack {
      display: flex;
      flex-direction: column;
      gap: 9px;
    }

    .kp-logic-row {
      display: flex;
      gap: 10px;
      align-items: center;
      padding: 10px;
      border: 1px solid #edf0ee;
      border-radius: 11px;
    }

    .kp-logic-number {
      width: 30px;
      height: 30px;
      display: grid;
      place-items: center;
      border-radius: 9px;
      color: #059669;
      background: #eaf9f2;
      font-size: 8px;
      font-weight: 900;
    }

    .kp-logic-row strong,
    .kp-logic-row span {
      display: block;
    }

    .kp-logic-row strong {
      font-size: 9px;
    }

    .kp-logic-row span {
      margin-top: 3px;
      color: #9aa49e;
      font-size: 8px;
    }

    /* FPO */

    .kp-fpo-grid {
      display: grid;
      grid-template-columns: repeat(3,1fr);
      gap: 12px;
    }

    .kp-fpo-card {
      padding: 17px;
      border: 1px solid #edf0ee;
      border-radius: 15px;
    }

    .kp-fpo-icon {
      width: 39px;
      height: 39px;
      display: grid;
      place-items: center;
      color: #2563eb;
      background: #eff6ff;
      border-radius: 11px;
    }

    .kp-fpo-card h3 {
      margin: 12px 0 15px;
      font-size: 13px;
    }

    .kp-fpo-stats {
      display: grid;
      grid-template-columns: repeat(3,1fr);
      gap: 5px;
      margin-bottom: 14px;
    }

    .kp-fpo-stats div {
      padding: 7px;
      border-radius: 8px;
      background: #f7f9f8;
    }

    .kp-fpo-stats span,
    .kp-fpo-stats strong {
      display: block;
    }

    .kp-fpo-stats span {
      color: #9ca6a0;
      font-size: 6px;
    }

    .kp-fpo-stats strong {
      margin-top: 3px;
      font-size: 9px;
    }

    .kp-outline-button {
      width: 100%;
      color: #3f5148;
      background: white;
      border: 1px solid #dfe6e1;
    }

    /* IMPACT */

    .kp-impact-grid {
      display: grid;
      grid-template-columns: repeat(4,1fr);
      gap: 14px;
      margin-bottom: 18px;
    }

    .kp-impact-card {
      padding: 20px;
      border: 1px solid #e5ebe7;
      border-radius: 17px;
      background: white;
    }

    .kp-impact-icon {
      width: 40px;
      height: 40px;
      display: grid;
      place-items: center;
      color: #059669;
      background: #eaf9f2;
      border-radius: 11px;
      margin-bottom: 14px;
    }

    .kp-impact-card > span {
      display: block;
      color: #89958e;
      font-size: 8px;
      font-weight: 900;
      text-transform: uppercase;
    }

    .kp-impact-card > strong {
      display: block;
      margin-top: 4px;
      font-size: 24px;
    }

    .kp-impact-card p {
      margin: 5px 0 0;
      color: #9ca6a0;
      font-size: 8px;
      line-height: 1.5;
    }

    .impact-chart {
      height: 350px;
    }

    /* EMPTY */

    .kp-empty {
      padding: 45px 20px;
      text-align: center;
    }

    .kp-empty > div {
      width: 48px;
      height: 48px;
      display: grid;
      place-items: center;
      margin: auto;
      border-radius: 14px;
      color: #89958e;
      background: #f0f3f1;
    }

    .kp-empty h3 {
      margin: 12px 0 4px;
      font-size: 13px;
    }

    .kp-empty p {
      margin: 0;
      color: #9ba59f;
      font-size: 9px;
    }

    /* DEMO */

    .kp-demo-fab {
      position: fixed;
      right: 22px;
      bottom: 22px;
      z-index: 80;
      width: 50px;
      height: 50px;
      display: grid;
      place-items: center;
      border: 0;
      border-radius: 16px;
      color: white;
      background: #111916;
      box-shadow: 0 15px 35px rgba(15,23,42,.2);
    }

    .kp-demo-panel {
      position: fixed;
      right: 22px;
      bottom: 22px;
      z-index: 80;
      width: 330px;
      padding: 18px;
      border: 1px solid #dfe7e2;
      border-radius: 19px;
      background: white;
      box-shadow: 0 25px 60px rgba(15,23,42,.18);
    }

    .kp-demo-panel-head {
      display: flex;
      justify-content: space-between;
      gap: 10px;
    }

    .kp-demo-panel-head button {
      width: 29px;
      height: 29px;
      display: grid;
      place-items: center;
      border: 0;
      border-radius: 9px;
      background: #f1f4f2;
    }

    .kp-demo-panel h3 {
      margin: 8px 0 0;
      font-size: 16px;
    }

    .kp-demo-panel > p {
      color: #89958e;
      font-size: 9px;
      line-height: 1.5;
    }

    .kp-demo-steps {
      display: flex;
      flex-direction: column;
      gap: 6px;
    }

    .kp-demo-steps button {
      display: flex;
      align-items: center;
      gap: 9px;
      padding: 9px;
      border: 1px solid #edf0ee;
      border-radius: 10px;
      background: #fafcfb;
      text-align: left;
    }

    .kp-demo-steps button:hover {
      border-color: #bce9d7;
      background: #f6fcf9;
    }

    .kp-demo-steps button > span {
      width: 27px;
      height: 27px;
      display: grid;
      place-items: center;
      border-radius: 8px;
      color: #059669;
      background: #eaf9f2;
      font-size: 8px;
      font-weight: 900;
    }

    .kp-demo-steps button > div {
      flex: 1;
    }

    .kp-demo-steps strong,
    .kp-demo-steps small {
      display: block;
    }

    .kp-demo-steps strong {
      font-size: 9px;
    }

    .kp-demo-steps small {
      margin-top: 2px;
      color: #9ca6a0;
      font-size: 7px;
    }

    .kp-reset-button {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 6px;
      margin-top: 9px;
      padding: 8px;
      border: 0;
      border-radius: 9px;
      color: #78847d;
      background: #f2f4f3;
      font-size: 8px;
      font-weight: 800;
    }

    /* RESPONSIVE */

    @media (max-width: 1200px) {
      .kp-product-grid,
      .kp-ai-grid,
      .kp-impact-grid {
        grid-template-columns: repeat(2,1fr);
      }

      .kp-stat-grid,
      .kp-logistics-stats {
        grid-template-columns: repeat(2,1fr);
      }

      .kp-grid-2,
      .kp-procurement-layout {
        grid-template-columns: 1fr;
      }

      .kp-fpo-grid {
        grid-template-columns: repeat(2,1fr);
      }
    }

    @media (max-width: 800px) {
      .kp-sidebar {
        transform: translateX(-100%);
        transition: transform .25s;
      }

      .kp-sidebar.mobile-open {
        transform: translateX(0);
      }

      .kp-mobile-close {
        display: block;
      }

      .kp-mobile-overlay {
        position: fixed;
        inset: 0;
        z-index: 45;
        background: rgba(15,23,42,.4);
      }

      .kp-main {
        margin-left: 0;
      }

      .kp-menu-button {
        display: grid;
        place-items: center;
      }

      .kp-topbar {
        padding: 0 16px;
      }

      .kp-top-actions {
        gap: 5px;
      }

      .kp-role-select {
        max-width: 110px;
      }

      .kp-page {
        padding: 20px 15px;
      }

      .kp-hero {
        padding: 25px;
      }

      .kp-hero-visual {
        display: none;
      }

      .kp-hero h2 {
        font-size: 28px;
      }

      .kp-flow {
        justify-content: flex-start;
      }

      .kp-cart-panel {
        flex-direction: column;
        align-items: stretch;
      }
    }

    @media (max-width: 560px) {
      .kp-stat-grid,
      .kp-logistics-stats,
      .kp-product-grid,
      .kp-ai-grid,
      .kp-impact-grid,
      .kp-fpo-grid {
        grid-template-columns: 1fr;
      }

      .kp-section-title {
        align-items: flex-start;
        flex-direction: column;
      }

      .kp-topbar {
        height: auto;
        min-height: 70px;
      }

      .kp-language {
        display: none;
      }

      .kp-topbar h1 {
        font-size: 15px;
      }

      .kp-form-grid {
        grid-template-columns: 1fr;
      }

      .kp-price-display {
        align-items: flex-start;
      }

      .kp-breakdown {
        grid-template-columns: 1fr;
      }

      .kp-hero-buttons {
        flex-direction: column;
        align-items: stretch;
      }

      .kp-search-bar {
        flex-direction: column;
      }

      .kp-filter {
        justify-content: center;
        padding: 0;
      }

      .kp-efficiency-card {
        flex-direction: column;
        align-items: flex-start;
      }

      .kp-efficiency-number {
        text-align: left;
      }

      .kp-demo-panel {
        right: 10px;
        left: 10px;
        bottom: 10px;
        width: auto;
      }
    }
  `;

  return (
    <div className="kp-app">
      <style>{styles}</style>

      <Sidebar />

      <div className="kp-main">
        <TopBar />
        {renderPage()}
      </div>

      {/* Notifications */}
      <div className="kp-notifications">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={`kp-notification ${notification.type}`}
          >
            {notification.type === "success" ? (
              <CheckCircle2 size={17} />
            ) : notification.type === "warning" ? (
              <AlertTriangle size={17} />
            ) : (
              <Info size={17} />
            )}

            <span>{notification.message}</span>
          </div>
        ))}
      </div>

      <DemoCenter />
    </div>
  );
}
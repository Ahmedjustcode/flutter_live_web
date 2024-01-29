'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "0a7c1abcb775e70116d02f9d2190b846",
"index.html": "fbe52498acd3180aef9d3ea2e5db3c1a",
"/": "fbe52498acd3180aef9d3ea2e5db3c1a",
"main.dart.js": "34c20a66d85f08b2372063e91ceb3a16",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "78673e7f192e16dfa873e8cab0f2496f",
".git/config": "fbcb3ff60b90ff5b245ac9943e52de0a",
".git/objects/0d/0f69ea0399fa45ad6e5791dc402fedf3a1a151": "4fa484b228fdcd91a44c00a131376556",
".git/objects/59/9738898948301c9cbe1d866293b5b7699797c3": "588dedb10279ea7599ecbf0c9d59de17",
".git/objects/68/404d902e9b224256b105be848addba62839a50": "92fbde91f32e63a583b196c0f3cbf4b5",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/6a/b5bc69fa8ec68eecf1d1bd7603f0dd469aee2a": "05a12c14e64110ab952e5725b6cafef6",
".git/objects/69/f2f40311c37c54aa9209678dc5c92858729266": "7339418738825de5898cba3a5b8a902f",
".git/objects/3c/da5137103d49d2d79262cde5ad128300cacf99": "26ceaf01f35bdc9b48a4184e992fedbe",
".git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
".git/objects/0e/e3590f4d74c3a4e4621a8d048d01f13436ec7a": "25939fd9f3cb53628d90cf3f4f9a026a",
".git/objects/60/aa709b04d055dfacecf5e93eeba6c2b21d7241": "9bcaf68e3ff8e1fb5336d3d88d277400",
".git/objects/34/aee59e51ddcc4502cb54b7e742d182db868f91": "fd38088fffe7ad40c4d57d243a0f5647",
".git/objects/5f/01ba749588d366aa55889eeb9d340bce60ee56": "1ed9c8d0cac57c87b46aa79d506ce963",
".git/objects/33/358e2f2fccfb80cc40e7a7ae1c83ec649bdf84": "96af250b3f2738ba9699d286ba8d602b",
".git/objects/ac/1594f0fa50907a0ac5a62c2982bed73e26c215": "4561799cf9454ff0fa405bde3be4dd6f",
".git/objects/ad/405232a64cfefad426679cfc60da5f3548fe51": "708b6807a7dc12b2411bd4b75056163b",
".git/objects/bb/2e8875a993f9c7d9e45d0eeffa839550cc6287": "3ad141b01f3a79c62e799ae0a1b6dd7d",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d7/00fedb734ea5ac4fdce61d9c65de5e8f363e94": "129b4fe63a21cab9ebed64e21b26103e",
".git/objects/df/4895c94cf14e8b28e6acecdb392b47ee44b4fd": "075b728da61397c1bdab5ea06d0ff768",
".git/objects/df/a72ce808fbb783042da88ce1bae5d9adb54fb6": "a8b2273e3e67083e15260d16437b2050",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/034da84da5c36077af71c6cd082beba66434d1": "4db6a646b80f8a2278e3b49ae8a61bde",
".git/objects/f3/39a80268f358e16231b98a75af3a627f6994a3": "6800be2fa5cecf442d1b9512c9883535",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c1/eb73088c3465da84331714b709ed6b3d2d0c6c": "8b1ddf16f9feca963b50e7e36f61d1fe",
".git/objects/c6/9177e0f43c11c964a43f796efabe32027af41e": "067d6a36117c9792c40b5c9e81161a0c",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/4b/08c92a6448f807045994c6de22d8ee9093aaab": "73d0aae290bed3c22142aa1a7a3ba56f",
".git/objects/pack/pack-463f66584ec07ea6618ce56db77a71bf3700dea5.pack": "cf0d5a587e6347326f7b42c5eb04eb0a",
".git/objects/pack/pack-463f66584ec07ea6618ce56db77a71bf3700dea5.idx": "df7e34193b19cde708baeb40c7c1f85e",
".git/objects/16/7685a249af36dccfebe308b7fc661dd8807cfe": "ef14eb6281cc7cd19a9aa0428bec7aa1",
".git/objects/89/15d96075d5acbf90b5dd7fe4e12b2968c863fa": "cf316b5d69b36ab0df915492699012f8",
".git/objects/74/4f800b7d8f80d26432e6e16f18f4db396d6af4": "70f931c8b505a21ebc9c15ac337c8be4",
".git/objects/1a/072330a807ba9f247b6b51e234d8ac7c7c9ef8": "8936d95ee2ff16f68a5b241773feb651",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/10/01454125081f8f32cda0997b6e6e89152dbe15": "d06638a7bfc095491fba2aa096b180ef",
".git/objects/26/f3ee54df78fa7382ff58379cd138fc2f416c86": "19e2166c9953bd37e0c6539fba05355d",
".git/objects/21/fbc44b4bd22a05a34a3c37fe168ef952dc73f8": "3294a710bde6416e658dfb2be47c73ad",
".git/objects/4d/37c94bb79ede54109d7252ab3fa99093dce270": "014d235d9b25ca33c52b3046a78827d4",
".git/objects/72/2ad824a2b2a3232688344b7f8aff2dde5f76ce": "43b4c3468a6b9ca1197b3f6763a2acb5",
".git/objects/2f/1fff70ba615d64fc95c005c8af21ea2792b1de": "50e219b47ce1cb80cc3eba34a840c0ca",
".git/objects/2f/96db87f0bf2fdf569f4a9d39b5da5753889f6d": "09a7a84ad73b4e90a6b9bda583bfc8a2",
".git/objects/43/40502d93c09da91560c862cabf3f6055704149": "4febd773f54af74582dda2576bb38c97",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/07/d5db4f46d96a11910d89783032efaf79ddfc46": "f3f1fc2dcdf5396bf0a1877ce62436f4",
".git/objects/36/9d71902024c84076ceaf09c955f39014b3ae44": "f7cf8e59108bba0c2fd6bd78b2aaeb31",
".git/objects/5c/c6b490a6d2abcb3104cd22d8091b93110b3719": "d4c8ffaa5603b7e1787b74cceb0cd761",
".git/objects/98/c1c3d5b6f7b5452964b591fc4a0411ac2b5722": "28a456272ca9936adfc436942634b0ea",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/53/888a44d695785fc99e63fd56b4c33fc4e5b8ef": "0d8c3df771a0f57bcef7afd3f5f8ad54",
".git/objects/5e/da9ec96e91ba8e4a418e53af4483766e245d6d": "339f0cfcef1c87a0ca364f5c6a9052ca",
".git/objects/01/6068b486e1bd1d73743185c2752b7b1b843701": "a0a9d817d83e2d0bd7150ec8e31ae55e",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/ba/58da1a13d2259ee2d585d4d3cbd7657c03dabd": "a970b3f55e31256cf06ad4ab9209a12e",
".git/objects/b6/e9c209002016a67600b6772e386525c60417f5": "b08800b4b28dbd8e486e78cad82f158f",
".git/objects/af/ee90fdc1eb181008a06dd85b2cfe350d7a51ae": "b713eed308e349eb9904e1831ced367f",
".git/objects/b7/5d58df26c723a042516f40337cbbcd9c7771b6": "026e5df0399c9f0006867e900bcdf952",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/39d2a163b47497028f7d4cfaf345255d5cbedb": "93102200a1286619965b07db390ed9aa",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/8e56d8ee32acf6c04fd9e65fe4ec0e8814799a": "5514d762d69ed58a061fbe94e5d93ec6",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/f7/542536af1299bd64f37fede634d6048ee0f2fc": "251c42816549b9498e64eebb7f7bff2b",
".git/objects/fa/f02b7c00873394abc0989e94e8455c4fb5c07e": "0b1eb7b114724fcf4d64cb37acaf4df8",
".git/objects/ff/0dd28e8c5e40410944af2126b3151ff62dbb36": "acaa287dfd601ce07656ad14b2082979",
".git/objects/41/465b1ae2aa078ed047209009da4c6b06eb98ab": "0eac3068e93fbe519b82d710d43b2f72",
".git/objects/1b/0f16a8b4c6f238001f431f3b4478bf1e9e6629": "2da4fbb83d54190df60575c83593ed4c",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/70/e7bef265ddcb5084ab8480463eafaec9e936dc": "37ab4e33c2918fb4a6211ddb23e11835",
".git/objects/70/18114099c7fdca38f318dc723e6aa34b55862c": "9e7e83b6e040f313926e6e38cd662d2f",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/15/2567db2cab724bba4cb20b11d3036d466db08d": "5f16314b41f388b99efb1d7d03085af3",
".git/objects/71/e63feea8c423c8f8422f6b4f13a51c18c3ad33": "ce2ba7ac99d0f8a6cde19c995c7e3b88",
".git/objects/49/4292489391cfc86082318f8517b12701450875": "2003590b25cc0b5d0aa62bc586de82dc",
".git/objects/2e/e6be1c0964f8eeb352de03776fa35679ca4d78": "d7ac392937a69b9796048a2b36bc1869",
".git/objects/2b/e39c7fd3da441ddac9bea54fd12621dd39960a": "24031b20667d22ca8dba4debe8b9eab5",
".git/objects/47/92e910f8957554c4863ac335889f45b09c2fef": "52cbe98ed00be0f8470429a51261ae12",
".git/objects/47/6aba9356a2a155440fe9b6c3d47c6adcf9dadf": "c4332286e2d771e46536ddd40561f854",
".git/objects/47/5b7baa390c60b3835b8d6ef912da3994da063a": "04670fc12790a7bc522b441a1f61e3bd",
".git/objects/8b/80f441ff706dc3e511e97555ccba32d8712bcd": "de4b6320b969eec11a13fa212540d699",
".git/HEAD": "51ea1ecfc5b3c0e88e0a0efa372118e5",
".git/info/exclude": "0aebccfd5866bfc3e7c8f625230c22f7",
".git/logs/HEAD": "db6558834a55c6080591e050f31827ec",
".git/logs/refs/heads/master2": "652fa4d4f2493dc646295e68e246be13",
".git/logs/refs/remotes/liveWeb/master2": "91c879c5ca014ce711412daaf4bfcc01",
".git/logs/refs/remotes/liveWeb/HEAD": "401ded3435f823bcb837e7791e546b49",
".git/logs/refs/remotes/liveWeb/master": "e13a6a9ad45f2169fdfa3e7dc33c270a",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master2": "7d6dceb2931a098cc843b40fee132fa5",
".git/refs/remotes/liveWeb/master2": "7d6dceb2931a098cc843b40fee132fa5",
".git/refs/remotes/liveWeb/HEAD": "117a76702420470f9a6e34ee3affa70c",
".git/refs/remotes/liveWeb/master": "f6abb29cbceb1e4709e8f1f7e3a93f28",
".git/index": "a3a51a3c11c39570c84fa2d704c44d89",
".git/COMMIT_EDITMSG": "d8e8fca2dc0f896fd7cb4cb0031ba249",
".git/FETCH_HEAD": "ab2c2276868ff19b84e5576a6f28f1b7",
"assets/AssetManifest.json": "4bbffea287bc402b74b3b806d6c7742a",
"assets/NOTICES": "c7536ba3cf2d8885a69be5012212eaa1",
"assets/FontManifest.json": "5789e421f873f99ac880ad1187139900",
"assets/AssetManifest.bin.json": "e483182da2d76203b46c76aa2acc779b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "4bd454ac027b65e77fd7a6c9fbba32de",
"assets/fonts/MaterialIcons-Regular.otf": "9d42bd27b87258275bdfa1f3c8768d45",
"assets/assets/AssetManifest.json": "147436217e1df89e6400132de5daeedf",
"assets/assets/NOTICES": "7dd6c7a9e40636268760b5e6bb3af467",
"assets/assets/FontManifest.json": "5789e421f873f99ac880ad1187139900",
"assets/assets/AssetManifest.bin.json": "54933b488a012f283dd01aafe9ab66d0",
"assets/assets/icons/payment.svg": "2b9c0cac9c302df3063d74607f9b171f",
"assets/assets/icons/logout.svg": "4d628f58678749e56bdd6ad34d6af864",
"assets/assets/icons/drawer.svg": "0e26408bbfba33c7d221340a7ffcc2a0",
"assets/assets/icons/app_icon.svg": "2eec546fb55eeac172e113495387a9c2",
"assets/assets/icons/product.svg": "8b70dc7960ff8863d8404d7df590eeb1",
"assets/assets/icons/settings.svg": "265096a978835658d2624454c1bdc563",
"assets/assets/icons/Arrow_up.svg": "0c31b43d8001f6e4e97327de9f1d8f48",
"assets/assets/icons/dashboard.svg": "7482ddcd3c5d2c2ee766eb2bd36b7d4f",
"assets/assets/icons/transactions.svg": "160990fdd2a1ae6a114a70763ee94238",
"assets/assets/icons/messages.svg": "550a4caba25697d370f58f901d79c3e2",
"assets/assets/icons/customers.svg": "1a16aa96a70b0f4453f134f36b26da54",
"assets/assets/icons/statistics.svg": "904e4ee44c00e669000e09350f4c1ba0",
"assets/assets/AssetManifest.bin": "5e2a324aab91c59198e421bcda5a6d5d",
"assets/assets/fonts/lato/Lato-Italic.ttf": "5d22f337a040ae2857e36e7c5800369b",
"assets/assets/fonts/lato/Lato-Thin.ttf": "7ab0bc06eecc1b75f8708aba3d3b044a",
"assets/assets/fonts/lato/Lato-Bold.ttf": "24b516c266d7341c954cb2918f1c8f38",
"assets/assets/fonts/lato/Lato-Black.ttf": "d83ab24f5cf2be8b7a9873dd64f6060a",
"assets/assets/fonts/lato/Lato-Regular.ttf": "122dd68d69fe9587e062d20d9ff5de2a",
"assets/assets/fonts/lato/Lato-Light.ttf": "2bcc211c05fc425a57b2767a4cdcf174",
"assets/assets/fonts/manrope/Manrope-Medium.ttf": "aa9897f9fa37c84d7b9d3d05a8a6bc07",
"assets/assets/fonts/manrope/Manrope-SemiBold.ttf": "4410f0d144bea752f9bfb5f33909e0c5",
"assets/assets/fonts/manrope/Manrope-ExtraBold.ttf": "8541582abce817ab8857c51ae0a35ca9",
"assets/assets/fonts/manrope/Manrope-Regular.ttf": "f8105661cf5923464f0db8290746d2f9",
"assets/assets/fonts/manrope/Manrope-ExtraLight.ttf": "100308b8ce2da4b67f4850e9b9252b26",
"assets/assets/fonts/manrope/Manrope-Light.ttf": "9e353f65739cc41a37bed272850cf92e",
"assets/assets/fonts/manrope/Manrope-Bold.ttf": "69258532ce99ef9abf8220e0276fff04",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "0a7c1abcb775e70116d02f9d2190b846",
<<<<<<< HEAD
"index.html": "2fab3b7737715ec04b0fb195fd05fa32",
"/": "2fab3b7737715ec04b0fb195fd05fa32",
"main.dart.js": "5a0a2d6d9ac4cc310c8b799b295e3fb8",
=======
"index.html": "7702a1bd952cbca12d50c382f71ac9be",
"/": "7702a1bd952cbca12d50c382f71ac9be",
"main.dart.js": "9916dc7adf3070a12a26402fc10b88ff",
>>>>>>> cdbd97ca8ff30864b156fcd3cb776a7248425c16
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "78673e7f192e16dfa873e8cab0f2496f",
<<<<<<< HEAD
".git/REBASE_HEAD": "79317858ca33a512d41c1e741c952aaa",
".git/ORIG_HEAD": "85e9d453bf0e612d88fd402f93b34eb7",
".git/config": "583072c5e70faf59d7901ebaa091d541",
".git/objects/61/82da537fd889fb9669d88a093293a651eda8f4": "73e63dd5d2565796b8bbca0cfcdd15ed",
".git/objects/0d/0f69ea0399fa45ad6e5791dc402fedf3a1a151": "4fa484b228fdcd91a44c00a131376556",
".git/objects/0d/884caa1377d743047fcbb3dafd111e7b87f5db": "5b578b764dd5d0f6962b06ff65d1eaa3",
".git/objects/3e/2a987b06ea0c0aabf7915b1fa1036d0076d5f3": "a7dc60d4ea4b8c243bde34a888330bd6",
".git/objects/50/5ce4857847241b15a59e43097bbb4baff79e3f": "8b318ad036824764744f015339fed968",
".git/objects/68/404d902e9b224256b105be848addba62839a50": "92fbde91f32e63a583b196c0f3cbf4b5",
".git/objects/9e/570641b39fcbadb36656ef0bcc19e908086639": "8d277b8c574ba55a6e3533a395e184af",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/6a/b5bc69fa8ec68eecf1d1bd7603f0dd469aee2a": "05a12c14e64110ab952e5725b6cafef6",
".git/objects/32/91761d5d4531f40d829d8931d821a61193b687": "b391c10807be82dd4ffbfb290002dec9",
".git/objects/69/f2f40311c37c54aa9209678dc5c92858729266": "7339418738825de5898cba3a5b8a902f",
".git/objects/3c/da5137103d49d2d79262cde5ad128300cacf99": "26ceaf01f35bdc9b48a4184e992fedbe",
".git/objects/51/626464655d39b34dd09da4c6cd1958f81bbc73": "0dbeae8a2f640b4b376d4f6cb96abf4c",
".git/objects/51/b4072f8577742a3054c0cec28890e27b5d1633": "7b21bd861b0c6b6b3eebe1f90c0303d4",
".git/objects/3d/33e385c98b78748b43011e7c35a3fda2f46ca2": "010af4293340dcb660d49856b2cec5b6",
".git/objects/0b/9a091958b071199bcdbe04eaae708a44c5655f": "8cc7f1ca603f536aeb9e75e3ab9a36fe",
".git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
".git/objects/0e/e3590f4d74c3a4e4621a8d048d01f13436ec7a": "25939fd9f3cb53628d90cf3f4f9a026a",
".git/objects/60/aa709b04d055dfacecf5e93eeba6c2b21d7241": "9bcaf68e3ff8e1fb5336d3d88d277400",
".git/objects/5f/01ba749588d366aa55889eeb9d340bce60ee56": "1ed9c8d0cac57c87b46aa79d506ce963",
".git/objects/9c/fb2e640c19c4f361f3b3505ba52ed9cace7967": "6004e5b8cda1c45c104ede0a349b5e40",
".git/objects/b5/517d1a36d00082f05cd576ffe0a4822ee16203": "901e6bfbc9b59d4edc65340515a53d97",
".git/objects/ac/c80950697829c0fc73da2e7b21bc724bd70d21": "efba0bd79dae106bddbe5dc57bde815b",
".git/objects/ad/405232a64cfefad426679cfc60da5f3548fe51": "708b6807a7dc12b2411bd4b75056163b",
".git/objects/bb/2e8875a993f9c7d9e45d0eeffa839550cc6287": "3ad141b01f3a79c62e799ae0a1b6dd7d",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/d7/1fef0d13c2e6eaf3f27f30e0189387c9b69736": "932aaa49fbeb7ec1d7114eb7e1a432a7",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/be/abe10455d8010b59196f215f7be6517431de12": "f7260e30327ab6fd0429697f4f8a4fb3",
".git/objects/df/4895c94cf14e8b28e6acecdb392b47ee44b4fd": "075b728da61397c1bdab5ea06d0ff768",
".git/objects/df/a72ce808fbb783042da88ce1bae5d9adb54fb6": "a8b2273e3e67083e15260d16437b2050",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/a2/66557362d3bc2f2d460348834efcf1f8644266": "22814aed34e8b507df3998edaebf52b3",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/adcf4963f5cc91e5eb9b9c42490c638397eb91": "8a379f8232bb26d0d39d6b1cdbd76a7d",
".git/objects/f3/39a80268f358e16231b98a75af3a627f6994a3": "6800be2fa5cecf442d1b9512c9883535",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/e3/af56a87df639a4d5597c39a17cc028e86d2fbd": "43c5359635f383bc42cd8a3706459d90",
".git/objects/fb/28ebd531dcd7ea0099a0cdfdcd162626d25e2f": "0e0b6ed9912774f8b88c69f813539bcd",
".git/objects/ed/e36fabe77258d002ddfff15d7ccf78433f01f4": "ef8cb26ff4576febba39af2c66a7d19f",
".git/objects/c1/5d7854e3ba6b0607d2d6f7ff6bb7a6d1168c5b": "af67bf79abca59b4132bcc31609f8a81",
".git/objects/c1/eb73088c3465da84331714b709ed6b3d2d0c6c": "8b1ddf16f9feca963b50e7e36f61d1fe",
".git/objects/c6/f0117c8cdb7749af837d6a244d6828778351fa": "9a4929338ef71edf9e8f3d60daeb8143",
".git/objects/c6/9177e0f43c11c964a43f796efabe32027af41e": "067d6a36117c9792c40b5c9e81161a0c",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/4b/08c92a6448f807045994c6de22d8ee9093aaab": "73d0aae290bed3c22142aa1a7a3ba56f",
".git/objects/4b/38da86022be94b73bacdb1cbef069559e7ab88": "16058a39b73759f755685b47f7b2e6c7",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/16/7685a249af36dccfebe308b7fc661dd8807cfe": "ef14eb6281cc7cd19a9aa0428bec7aa1",
".git/objects/42/73d5dda9043bd2b690b7b08752e7ed9faa403e": "cce1163663f1a190e760b711004cf47d",
".git/objects/89/15d96075d5acbf90b5dd7fe4e12b2968c863fa": "cf316b5d69b36ab0df915492699012f8",
".git/objects/1a/436f3c6acff6af48cd4e45052794af66752589": "fc63354b48e77c610a162d40da2aa8a9",
".git/objects/1a/072330a807ba9f247b6b51e234d8ac7c7c9ef8": "8936d95ee2ff16f68a5b241773feb651",
".git/objects/17/233fc5b212e50916df135eb4b9a350c5f5f88a": "e4548a9151fc57faf588aa4193a5e7f5",
".git/objects/8f/5d070aaa0a5ef2073fd6b77007ce64a6f1e830": "daed4fd2d5cd6f04a089ba011b5bfeb2",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/4818a53642d4e39557adcaadf360b8e0e7c375": "ca23af057f6d3bc157547159f9180210",
".git/objects/7e/00f50e0ce6d8da57627bd522186d8bcccb593a": "644906239c1b7489a73920395c7f07d2",
".git/objects/10/0429e074abb021c32caf64416815610eaa7d0b": "d0e843657f13d3a8d9281dcfdf98bbba",
".git/objects/10/f7fd57e5ae7dc0099f235b521d86f9a256c825": "9ea8a774db1a3216349c0280d6f33b03",
".git/objects/10/01454125081f8f32cda0997b6e6e89152dbe15": "d06638a7bfc095491fba2aa096b180ef",
".git/objects/21/fbc44b4bd22a05a34a3c37fe168ef952dc73f8": "3294a710bde6416e658dfb2be47c73ad",
".git/objects/75/0b0be40ba116164154cdf56873dc8519f5449c": "9d7bc5dc46f31fd4bdbeadba8b2d3ad7",
".git/objects/81/518ecd0b488b42eea6bb742f1c2a2661a3a479": "51fb6a881739267c314d4a3a7b756c4c",
".git/objects/86/9f681f1cd4ff3b848377a4a79ee51ab33e84ae": "2a3aeccd773d4822b35f5797c3f34614",
".git/objects/86/502a966bfc2712293a3679201bb54219c43bfe": "65465ef52b107962501c920caed76a6d",
".git/objects/72/2ad824a2b2a3232688344b7f8aff2dde5f76ce": "43b4c3468a6b9ca1197b3f6763a2acb5",
".git/objects/2f/1fff70ba615d64fc95c005c8af21ea2792b1de": "50e219b47ce1cb80cc3eba34a840c0ca",
".git/objects/43/40502d93c09da91560c862cabf3f6055704149": "4febd773f54af74582dda2576bb38c97",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/07/1ab482b37c1181b840fdb58efa922386f560d1": "1238c5f9a5dbb461a240b44153d03d3e",
".git/objects/6e/8e69f1878822288e9bb9d173a3b043ecf1b288": "7ac4ac6374e4a7bad17e8a467e3e419d",
".git/objects/36/9d71902024c84076ceaf09c955f39014b3ae44": "f7cf8e59108bba0c2fd6bd78b2aaeb31",
".git/objects/36/6598beea5f3b5ad4edb0b80f37e9f6c3441138": "c4cb9cbc7884a3c6eb99277b572c5703",
".git/objects/5c/c6b490a6d2abcb3104cd22d8091b93110b3719": "d4c8ffaa5603b7e1787b74cceb0cd761",
".git/objects/65/bf08c36634c6029ca657517e03d58abab0f74b": "224e594bb3a5aa7c45b1b19efe35049b",
".git/objects/3a/b80b1fb1f7deec167a513b2761fb5d0e7334ac": "18ae32ff3e49e676671718eca95d8569",
".git/objects/98/c1c3d5b6f7b5452964b591fc4a0411ac2b5722": "28a456272ca9936adfc436942634b0ea",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/5e/da9ec96e91ba8e4a418e53af4483766e245d6d": "339f0cfcef1c87a0ca364f5c6a9052ca",
".git/objects/5b/4864abae0f0fca92a1c840b9aa75d823bf48c4": "11223e94d3c96fa4604bfda957b36678",
".git/objects/5b/fd533c0b1c473defe389ee09fcb31fbed3811d": "00a737c87de4cac0f141c3470f681eec",
".git/objects/01/6068b486e1bd1d73743185c2752b7b1b843701": "a0a9d817d83e2d0bd7150ec8e31ae55e",
".git/objects/90/a1a9972afa32ad4274723b250f04e19b38ee12": "6f3f82900b2bc8e38097327dd30565cb",
".git/objects/bf/0a6223becb052fcd8d5da515848f7354f5ccf9": "155328c8244a090c9483f3def5cfd452",
".git/objects/d3/dc5de4c0e04d9542236cc787f8069c5642333d": "4a825b9c4d42c1ccb55afd1b7c5f4836",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/ba/58da1a13d2259ee2d585d4d3cbd7657c03dabd": "a970b3f55e31256cf06ad4ab9209a12e",
".git/objects/a0/2b6e1ff2b222c9ab54eca6c50a96be18d37396": "c654a689875215e17eec6cb06c97f8ba",
".git/objects/a7/90544ceb7d177bcc40754b95fcac76fb451f4e": "441f26ac1dcf22fe8ee90778fb4445b8",
".git/objects/dd/1ba59df23c329ccbc853705581ac0c006f0b45": "73857c38a5544912e7448a33e19dd224",
".git/objects/dd/b3d74ae58a8e356fea05f7a43c904d3cb10810": "2361cceaeda1786d1fd4c24aaea54385",
".git/objects/b6/e9c209002016a67600b6772e386525c60417f5": "b08800b4b28dbd8e486e78cad82f158f",
".git/objects/a9/8c3e058c80a035efb8142787c1042658176d18": "ce5906dda4a2d03b115c46c3532471cb",
".git/objects/d5/daccd151c22b72176c9f8c4d9838c26155702d": "183ca03f88ee7ed39ffb6c90c0a0622c",
".git/objects/af/8a498fd793df781abbd50f9332511736e57fa9": "27de8f7f242edf7848a53d9f7c5dd911",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/39d2a163b47497028f7d4cfaf345255d5cbedb": "93102200a1286619965b07db390ed9aa",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/d0931e990a1c3b52a6c29e19ca0aece933165b": "434ce168591efe81ab4f8ba5e80b9015",
".git/objects/b9/aadc46de07354258ee199469747ca8e8622181": "1152aa97630f6e88e30431a7088d180d",
".git/objects/a1/8e56d8ee32acf6c04fd9e65fe4ec0e8814799a": "5514d762d69ed58a061fbe94e5d93ec6",
".git/objects/e6/59408f679e4038f5675583035f8195ad0255a1": "9f9c7ad61e4e1afa7a146bc5bab04557",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/f7/542536af1299bd64f37fede634d6048ee0f2fc": "251c42816549b9498e64eebb7f7bff2b",
".git/objects/f7/6ac83eb61bdfecc0535951529d110482da976a": "12f13f99ea0305a1bca4b2e170383697",
".git/objects/fa/f02b7c00873394abc0989e94e8455c4fb5c07e": "0b1eb7b114724fcf4d64cb37acaf4df8",
".git/objects/ff/0dd28e8c5e40410944af2126b3151ff62dbb36": "acaa287dfd601ce07656ad14b2082979",
".git/objects/e9/ae1504c120ea15719c817477d6fe75d53aed13": "3a9bf5fb76c4ac0d66283dc0fb66e5a3",
".git/objects/e9/ab2053739f4a7a27fc8b3a852635f5fd494ee7": "3f375b4b3011379bf6d549e3b87e32fc",
".git/objects/2c/00ca50900d0ecc8311a6232e5ea0b8f04dce12": "dc1e0643441d024867b55fa1a24fe47f",
".git/objects/41/465b1ae2aa078ed047209009da4c6b06eb98ab": "0eac3068e93fbe519b82d710d43b2f72",
".git/objects/1b/0f16a8b4c6f238001f431f3b4478bf1e9e6629": "2da4fbb83d54190df60575c83593ed4c",
".git/objects/77/71f74ea9caea63059379649e000b1a737dd0b6": "9eb64a31559680e335998c62c28e67d0",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/70/e7bef265ddcb5084ab8480463eafaec9e936dc": "37ab4e33c2918fb4a6211ddb23e11835",
".git/objects/23/b62b524fd91b9735f39011187b81446f46376e": "fa2563e27f97e4ae610df7f389719c05",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/12/0cb49e15aa6b4918b1800cf55056aaac0c4648": "c712b2404392e8298f355a34d91340ec",
".git/objects/71/e63feea8c423c8f8422f6b4f13a51c18c3ad33": "ce2ba7ac99d0f8a6cde19c995c7e3b88",
".git/objects/49/4292489391cfc86082318f8517b12701450875": "2003590b25cc0b5d0aa62bc586de82dc",
".git/objects/40/e3ff3ee518002611ded886d24735d8d353cd6b": "bb40f722418845da13990b75e06b13f9",
".git/objects/2e/72012c3d13296b8070672e0e78266f4fde6b90": "8bec82615baa9f84c07e112643e89ac5",
".git/objects/2e/e73d8858f580ab11a0938e375c5c715cc95ccb": "33060b1eae18b9864ba992eb45c3e502",
".git/objects/2b/e39c7fd3da441ddac9bea54fd12621dd39960a": "24031b20667d22ca8dba4debe8b9eab5",
".git/objects/2b/0a084cb5bd915b92cde842048d6d6a6011789a": "ca915c21658b2fd9c2e283f59c253716",
".git/objects/47/6aba9356a2a155440fe9b6c3d47c6adcf9dadf": "c4332286e2d771e46536ddd40561f854",
".git/objects/8b/80f441ff706dc3e511e97555ccba32d8712bcd": "de4b6320b969eec11a13fa212540d699",
".git/HEAD": "c4e1eb22f4d5ed89abb49370be68af8e",
".git/info/exclude": "0aebccfd5866bfc3e7c8f625230c22f7",
".git/logs/HEAD": "241239ffae72aae906b1e06c692727fd",
".git/logs/refs/heads/master": "34d5434e2adaf2e04fc4410628ccd77f",
".git/logs/refs/remotes/newLive/master": "e50f959868e3edc8c7c49be91ef15fc7",
".git/logs/refs/remotes/webapp/test_ci_cd": "f57bf6deb1cdbdf8a6f638d4f3b61ce1",
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
".git/refs/heads/master": "79317858ca33a512d41c1e741c952aaa",
".git/refs/remotes/newLive/master": "79317858ca33a512d41c1e741c952aaa",
".git/refs/remotes/webapp/test_ci_cd": "5d8c0f01ae612ca6d4608617d54f68be",
".git/index": "e6d7d336f860c7858b314e363feb9945",
".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/FETCH_HEAD": "d41d8cd98f00b204e9800998ecf8427e",
".git/rebase-merge/git-rebase-todo.backup": "57c7839c57e572a65d77c174da132f41",
".git/rebase-merge/head-name": "7af7f62c1ff93562f49dd5a2f00c248f",
".git/rebase-merge/orig-head": "79317858ca33a512d41c1e741c952aaa",
".git/rebase-merge/git-rebase-todo": "d41d8cd98f00b204e9800998ecf8427e",
".git/rebase-merge/message": "a39c2fb540595c73ada8723f7bc8f6b9",
".git/rebase-merge/onto": "21069cf8051c76b9f671afdf7be4e5c3",
".git/rebase-merge/drop_redundant_commits": "d41d8cd98f00b204e9800998ecf8427e",
".git/rebase-merge/end": "b026324c6904b2a9cb4b88d6d61c81d1",
".git/rebase-merge/patch": "d41d8cd98f00b204e9800998ecf8427e",
".git/rebase-merge/done": "763d2f1293db29803afa920e6210d735",
".git/rebase-merge/no-reschedule-failed-exec": "d41d8cd98f00b204e9800998ecf8427e",
".git/rebase-merge/stopped-sha": "79317858ca33a512d41c1e741c952aaa",
".git/rebase-merge/interactive": "d41d8cd98f00b204e9800998ecf8427e",
".git/rebase-merge/msgnum": "b026324c6904b2a9cb4b88d6d61c81d1",
".git/rebase-merge/author-script": "610ddc0503426de2e185e57e637ea8ad",
=======
>>>>>>> cdbd97ca8ff30864b156fcd3cb776a7248425c16
"assets/AssetManifest.json": "4bbffea287bc402b74b3b806d6c7742a",
"assets/NOTICES": "fd9c56381c4a1f306075ea8fcf7c20a6",
"assets/FontManifest.json": "5789e421f873f99ac880ad1187139900",
"assets/AssetManifest.bin.json": "e483182da2d76203b46c76aa2acc779b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "4bd454ac027b65e77fd7a6c9fbba32de",
"assets/fonts/MaterialIcons-Regular.otf": "1f33787bde4fbcd8908e00ac21df673f",
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

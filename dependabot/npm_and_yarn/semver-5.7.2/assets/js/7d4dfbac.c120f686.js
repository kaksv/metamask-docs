"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[9940],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),c=d(n),m=i,k=c["".concat(s,".").concat(m)]||c[m]||u[m]||o;return n?a.createElement(k,l(l({ref:t},p),{},{components:n})):a.createElement(k,l({ref:t},p))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=m;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[c]="string"==typeof e?e:i,l[1]=r;for(var d=2;d<o;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},61339:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var a=n(87462),i=(n(67294),n(3905));const o={sidebar_label:"Unity",sidebar_position:1},l="Use MetaMask SDK with Unity",r={unversionedId:"how-to/use-sdk/gaming/unity",id:"how-to/use-sdk/gaming/unity",title:"Use MetaMask SDK with Unity",description:"You can import MetaMask SDK into your",source:"@site/wallet/how-to/use-sdk/gaming/unity.md",sourceDirName:"how-to/use-sdk/gaming",slug:"/how-to/use-sdk/gaming/unity",permalink:"/dependabot/npm_and_yarn/semver-5.7.2/wallet/how-to/use-sdk/gaming/unity",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/how-to/use-sdk/gaming/unity.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Unity",sidebar_position:1},sidebar:"walletSidebar",previous:{title:"Gaming",permalink:"/dependabot/npm_and_yarn/semver-5.7.2/wallet/how-to/use-sdk/gaming/"},next:{title:"Unreal Engine (coming soon)",permalink:"/dependabot/npm_and_yarn/semver-5.7.2/wallet/how-to/use-sdk/gaming/unreal-engine"}},s={},d=[{value:"How it works",id:"how-it-works",level:2},{value:"Video demo",id:"video-demo",level:2},{value:"Steps",id:"steps",level:2},{value:"1. Configure build settings",id:"1-configure-build-settings",level:3},{value:"2. Install the SDK for Unity",id:"2-install-the-sdk-for-unity",level:3},{value:"3. Initialize MetaMask",id:"3-initialize-metamask",level:3},{value:"4. Connect to MetaMask",id:"4-connect-to-metamask",level:3},{value:"5. Use MetaMask",id:"5-use-metamask",level:3},{value:"6. Configure MetaMask",id:"6-configure-metamask",level:3},{value:"API",id:"api",level:2},{value:"MetaMaskUnity",id:"metamaskunity",level:3},{value:"<code>Instance</code>",id:"instance",level:4},{value:"<code>Initialize</code>",id:"initialize",level:4},{value:"<code>SaveSession</code>",id:"savesession",level:4},{value:"<code>LoadSession</code>",id:"loadsession",level:4},{value:"MetaMaskWallet",id:"metamaskwallet",level:3},{value:"<code>Connect</code>",id:"connect",level:4},{value:"<code>Disconnect</code>",id:"disconnect",level:4},{value:"<code>Request</code>",id:"request",level:4},{value:"Package structure",id:"package-structure",level:2},{value:"FAQS",id:"faqs",level:2}],p={toc:d},c="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"use-metamask-sdk-with-unity"},"Use MetaMask SDK with Unity"),(0,i.kt)("p",null,"You can import MetaMask SDK into your\n",(0,i.kt)("a",{parentName:"p",href:"https://assetstore.unity.com/packages/decentralization/infrastructure/metamask-246786"},"Unity")," game\nto enable users to easily connect to their MetaMask Mobile wallet.\nThe MetaMask Unity SDK supports macOS, Windows, Linux, iOS, Android, and WebGL."),(0,i.kt)("h2",{id:"how-it-works"},"How it works"),(0,i.kt)("p",null,"The SDK renders a QR code in the Unity game UI using a dedicated prefab which players can scan with\ntheir MetaMask Mobile app.\nIt also supports deeplinking on mobile platforms.\nYou can use all the ",(0,i.kt)("a",{parentName:"p",href:"/dependabot/npm_and_yarn/semver-5.7.2/wallet/reference/provider-api"},"provider API methods")," right from your game."),(0,i.kt)("h2",{id:"video-demo"},"Video demo"),(0,i.kt)("p",null,"The following video demonstrates how to install and use the MetaMask Unity SDK."),(0,i.kt)("p",{align:"center"},(0,i.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/0D1cIH-PZtI",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),(0,i.kt)("h2",{id:"steps"},"Steps"),(0,i.kt)("h3",{id:"1-configure-build-settings"},"1. Configure build settings"),(0,i.kt)("p",null,"To build the SDK, configure the following settings in your Unity editor according to your\ndevelopment platform:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"iOS:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Go to ",(0,i.kt)("strong",{parentName:"li"},"Build Settings > Build Options")," and set ",(0,i.kt)("strong",{parentName:"li"},"Enable Bitcode")," to ",(0,i.kt)("strong",{parentName:"li"},"NO"),"."))),(0,i.kt)("li",{parentName:"ul"},"Android:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Go to the ",(0,i.kt)("strong",{parentName:"li"},"Assets")," dropdown menu and select ",(0,i.kt)("strong",{parentName:"li"},"External Dependency Manager > Android\nResolver > Resolve"),"."),(0,i.kt)("li",{parentName:"ul"},"Go to ",(0,i.kt)("strong",{parentName:"li"},"Build Settings > Player Settings")," and set ",(0,i.kt)("strong",{parentName:"li"},"Minimum API level")," to ",(0,i.kt)("strong",{parentName:"li"},"Android 7.0\n'Nougat'")," (API level 24)."))),(0,i.kt)("li",{parentName:"ul"},"WebGL:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Go to ",(0,i.kt)("strong",{parentName:"li"},"Build Settings > Player Settings"),", switch to the ",(0,i.kt)("strong",{parentName:"li"},"Resolution & Presentation Tab"),", and\nselect ",(0,i.kt)("strong",{parentName:"li"},"MetaMask"),".")))),(0,i.kt)("p",null,"For all platforms, also set the ",(0,i.kt)("strong",{parentName:"p"},"Scripting Backend")," in ",(0,i.kt)("strong",{parentName:"p"},"Player Settings")," to ",(0,i.kt)("strong",{parentName:"p"},"IL2CPP"),", and set\n",(0,i.kt)("strong",{parentName:"p"},"IL2CPP Code Generation")," in ",(0,i.kt)("strong",{parentName:"p"},"Build Settings")," to ",(0,i.kt)("strong",{parentName:"p"},"Faster (smaller) builds"),"."),(0,i.kt)("h3",{id:"2-install-the-sdk-for-unity"},"2. Install the SDK for Unity"),(0,i.kt)("p",null,"Download the\n",(0,i.kt)("a",{parentName:"p",href:"https://assetstore.unity.com/packages/decentralization/infrastructure/metamask-246786"},"MetaMask SDK for Unity"),"\nfrom the Unity Asset Store."),(0,i.kt)("p",null,"In your Unity editor, go to the menu > ",(0,i.kt)("strong",{parentName:"p"},"Package Manager"),".\nSelect ",(0,i.kt)("strong",{parentName:"p"},"My Assets"),", ",(0,i.kt)("strong",{parentName:"p"},"MetaMask Unity SDK"),", and ",(0,i.kt)("strong",{parentName:"p"},"Install"),".\nYou should see the MetaMask SDK package listed in the project packages and be able to interface\nwith it and its examples in the scene."),(0,i.kt)("p",null,"You also need to install ",(0,i.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/Manual/com.unity.textmeshpro.html"},"TextMeshPro"),".\nIf you don't have TextMeshPro installed, the Unity editor automatically prompts you to install it."),(0,i.kt)("h3",{id:"3-initialize-metamask"},"3. Initialize MetaMask"),(0,i.kt)("p",null,"The main class you interface with is called ",(0,i.kt)("inlineCode",{parentName:"p"},"MetaMaskWallet"),".\nIt handles the connection to the user's wallet, as well as processing the requests to it using a\nsocket.io implementation."),(0,i.kt)("p",null,"To use it inside Unity, you must attach the component called ",(0,i.kt)("inlineCode",{parentName:"p"},"MetaMaskUnity")," to a game object within\nthe editor.\nThis component is a singleton and you can use its ",(0,i.kt)("inlineCode",{parentName:"p"},"Instance")," property to access the wallet instance.\nYou first must initialize by doing one of the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Manually call ",(0,i.kt)("inlineCode",{parentName:"p"},"Initialize()"),":"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"MetaMaskUnity.Instance.Initialize();\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Check ",(0,i.kt)("strong",{parentName:"p"},"Initialize On Start")," on the component within the editor."))),(0,i.kt)("p",null,"This initializes the wallet instance, making it accessible from ",(0,i.kt)("inlineCode",{parentName:"p"},"MetaMaskUnity.Instance.Wallet"),".\nYou can now make calls to the user's wallet using ",(0,i.kt)("a",{parentName:"p",href:"/dependabot/npm_and_yarn/semver-5.7.2/wallet/reference/provider-api"},"provider API methods"),"."),(0,i.kt)("h3",{id:"4-connect-to-metamask"},"4. Connect to MetaMask"),(0,i.kt)("p",null,"Once the wallet is prepared and initialized, you can connect to MetaMask.\nCall the ",(0,i.kt)("inlineCode",{parentName:"p"},"Connect()")," method on the wallet instance as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"var wallet = MetaMaskUnity.Instance.Wallet;\nwallet.Connect();\n")),(0,i.kt)("p",null,"You can also subscribe to the ",(0,i.kt)("inlineCode",{parentName:"p"},"OnWalletConnected")," callback on the wallet instance to be notified\nonce the wallet is connected:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'wallet.WalletConnected += OnWalletConnected;\n\nvoid OnWalletConnected(object sender, EventArgs e) {\n    Debug.Log("Wallet is connected");\n}\n')),(0,i.kt)("p",null,"You can also use the ",(0,i.kt)("inlineCode",{parentName:"p"},"Connect()")," method from ",(0,i.kt)("inlineCode",{parentName:"p"},"MetaMaskUnity")," that delegates the call to the wallet\ninstance:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"MetaMaskUnity.Instance.Connect();\n")),(0,i.kt)("p",null,"There are a variety of sample buttons included inside the package that call this method when clicked.\nThese are provided as a convenience to get started quickly with your project.\nOnce the connection request is made, a QR code is generated, and based on the transport you're using\n(",(0,i.kt)("inlineCode",{parentName:"p"},"Unity UI")," by default), either a new Canvas that contains the QR code is spawned or the\n",(0,i.kt)("inlineCode",{parentName:"p"},"MetaMaskUnityUIQRImage")," generates the QR code when the connection is requested."),(0,i.kt)("p",null,"If you want to use the latter, add an instance of the ",(0,i.kt)("inlineCode",{parentName:"p"},"MetaMaskUnityUIQRImage")," component to the\nscene with its fields provided.\nThe transport field is also required if you want to use it isolated from the canvas that is spawned\nby the transport, then it generates the QR code for you."),(0,i.kt)("h3",{id:"5-use-metamask"},"5. Use MetaMask"),(0,i.kt)("p",null,"Once the wallet is authorized, you can make requests to it.\nThe wallet is authorized when the buttons become interactable or the ",(0,i.kt)("inlineCode",{parentName:"p"},"WalletAuthorized")," event is fired:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'var wallet = MetaMaskUnity.Instance.Wallet;\nwallet.WalletAuthorized += OnWalletAuthorized;\n\nvoid OnWalletAuthorized(object sender, EventArgs e) {\n    Debug.Log("Wallet is authorized");\n}\n')),(0,i.kt)("p",null,"You can call any Ethereum request on the wallet using ",(0,i.kt)("inlineCode",{parentName:"p"},"wallet.Request(myRequest)"),".\nThe following is a sample transaction request:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'var wallet = MetaMaskUnity.Instance.Wallet;\nvar transactionParams = new MetaMaskTransaction\n{\n    To = "0xd0059fB234f15dFA9371a7B45c09d451a2dd2B5a",\n    From = MetaMaskUnity.Instance.Wallet.SelectedAddress,\n    Value = "0x0"\n};\n\nvar request = new MetaMaskEthereumRequest\n{\n    Method = "eth_sendTransaction",\n    Parameters = new MetaMaskTransaction[] { transactionParams }\n};\nawait wallet.Request(request);\n')),(0,i.kt)("h3",{id:"6-configure-metamask"},"6. Configure MetaMask"),(0,i.kt)("p",null,"You can customize the default configuration or create your own configuration."),(0,i.kt)("p",null,"Edit the default configuration by doing one of the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Navigate to the ",(0,i.kt)("strong",{parentName:"li"},"Window > MetaMask > Setup")," menu item."),(0,i.kt)("li",{parentName:"ul"},"Open the ",(0,i.kt)("inlineCode",{parentName:"li"},"MetaMaskConfig")," asset in the project window.")),(0,i.kt)("p",null,"Edit the fields and save the changes."),(0,i.kt)("p",null,"Create a new configuration by right-clicking on the project window and navigating to\n",(0,i.kt)("strong",{parentName:"p"},"MetaMask > Config"),".\nName the new configuration and use it when initializing the ",(0,i.kt)("inlineCode",{parentName:"p"},"MetaMaskUnity")," instance."),(0,i.kt)("h2",{id:"api"},"API"),(0,i.kt)("p",null,"The following is an overview of the APIs from the most important classes."),(0,i.kt)("h3",{id:"metamaskunity"},"MetaMaskUnity"),(0,i.kt)("p",null,"This is a singleton class that you can use to access the ",(0,i.kt)("inlineCode",{parentName:"p"},"MetaMaskWallet")," instance, which is\nspecific to Unity."),(0,i.kt)("h4",{id:"instance"},(0,i.kt)("inlineCode",{parentName:"h4"},"Instance")),(0,i.kt)("p",null,"This is the singleton instance of the ",(0,i.kt)("inlineCode",{parentName:"p"},"MetaMaskUnity")," class that is lazy-loaded when you access it\nfor the first time."),(0,i.kt)("h4",{id:"initialize"},(0,i.kt)("inlineCode",{parentName:"h4"},"Initialize")),(0,i.kt)("p",null,"This method initializes the ",(0,i.kt)("inlineCode",{parentName:"p"},"MetaMaskWallet")," instance and makes it accessible via the ",(0,i.kt)("inlineCode",{parentName:"p"},"Wallet")," property.\nYou can also pass extra options and parameters to it to customize the wallet instance:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"// Initialize using default settings\nMetaMaskUnity.Instance.Initialize();\n\n// Initialize using custom transport and socket provider\nvar transport = new MyCustomTransport();\nvar socketProvider = new MyCustomSocketProvider();\nMetaMaskUnity.Instance.Initialize(transport, socketProvider);\n\n// Initialize using custom config, transport and socket provider\nvar config = myMetaMaskConfig;\nvar transport = new MyCustomTransport();\nvar socketProvider = new MyCustomSocketProvider();\nMetaMaskUnity.Instance.Initialize(config, transport, socketProvider);\n")),(0,i.kt)("h4",{id:"savesession"},(0,i.kt)("inlineCode",{parentName:"h4"},"SaveSession")),(0,i.kt)("p",null,"This method saves the current session to the persistent storage.\nThis is useful when you want to save the session and restore it later.\nThis is automatically called when the application quits, but you can also manually call it."),(0,i.kt)("h4",{id:"loadsession"},(0,i.kt)("inlineCode",{parentName:"h4"},"LoadSession")),(0,i.kt)("p",null,"This method loads the session from the persistent storage.\nThis is useful when you want to restore the session after the application quits.\nThis is automatically called when the application starts, but you can also manually call it."),(0,i.kt)("h3",{id:"metamaskwallet"},"MetaMaskWallet"),(0,i.kt)("h4",{id:"connect"},(0,i.kt)("inlineCode",{parentName:"h4"},"Connect")),(0,i.kt)("p",null,"This method connects to the MetaMask app.\nIt renders a generated QR code in the user interface for your users to scan with MetaMask Mobile.\nAfter the user scans this QR code, a connect screen appears in MetaMask Mobile where the user can\napprove the connection with your game application."),(0,i.kt)("h4",{id:"disconnect"},(0,i.kt)("inlineCode",{parentName:"h4"},"Disconnect")),(0,i.kt)("p",null,"This method disconnects the user that is connected from the MetaMask app session."),(0,i.kt)("h4",{id:"request"},(0,i.kt)("inlineCode",{parentName:"h4"},"Request")),(0,i.kt)("p",null,"This method sends a request to MetaMask.\nYou can use it to call any ",(0,i.kt)("a",{parentName:"p",href:"/dependabot/npm_and_yarn/semver-5.7.2/wallet/reference/provider-api"},"provider API method"),"."),(0,i.kt)("h2",{id:"package-structure"},"Package structure"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"File or directory"),(0,i.kt)("th",{parentName:"tr",align:null},"Contents"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Documentation")),(0,i.kt)("td",{parentName:"tr",align:null},"Documentation and link to online documentation")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Editor")),(0,i.kt)("td",{parentName:"tr",align:null},"Editor-only code such as Setup GUI windows, data persistence for SDK settings")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Plugins")),(0,i.kt)("td",{parentName:"tr",align:null},"Plugins needed by the package (the ECIES Platform runtime libraries and core SDK Codebase)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Runtime")),(0,i.kt)("td",{parentName:"tr",align:null},"Main scripts for the SDK that are environment-agnostic, including the C# scripts that provide the base implementation of the SDK")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Samples")),(0,i.kt)("td",{parentName:"tr",align:null},"Test application scene that can be used as a referral for your project, including modal popups and dynamic UI scaling")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"LICENSE.md")),(0,i.kt)("td",{parentName:"tr",align:null},"Package license")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Third Party Notices.md")),(0,i.kt)("td",{parentName:"tr",align:null},"Third party notices")))),(0,i.kt)("h2",{id:"faqs"},"FAQS"),(0,i.kt)("details",null,(0,i.kt)("summary",null,"I can't find the SDK installation option."),(0,i.kt)("p",null,"If you don't see the option to ",(0,i.kt)("a",{parentName:"p",href:"#2-install-the-sdk-for-unity"},"install the SDK")," in your Unity menu,\nensure you're on the latest Unity version and that you have no red errors printed in your console.\nThis option not appearing is typically due to incorrect editor initialization, which you can\nusually resolve by restarting the editor or updating your Unity version.")),(0,i.kt)("details",null,(0,i.kt)("summary",null,"On iOS, why does a popup appear when using a deeplink?"),(0,i.kt)("p",null,"When deeplinking, a background service is created to facilitate the communication layer between the\nUnity game and MetaMask.\nOn iOS, background services expire after a certain amount of time.\nA notification pops up to let you know the socket connection has expired.")),(0,i.kt)("details",null,(0,i.kt)("summary",null,"What does the external dependency manager do?"),(0,i.kt)("p",null,"The Unity Jar Resolver is an external dependency manager specifically for Unity projects that use\nexternal libraries.\nIt helps manage the dependencies between Unity and external libraries, which can sometimes be\ncomplicated due to differences between the two environments.\nThis tool is particularly useful for MetaMask SDK, since Android and iOS need a variety of native\nlibraries to facilitate deeplinking and the persistent socket connection.")),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Does the SDK increase my compilation time?"),(0,i.kt)("p",null,"No.\nIf you notice an increased compilation time, it might be related to the ILL2CP pipeline, which can\ntake longer to build at compile time.\nThe SDK is filled with precompiled libraries to save on runtime compilation.")))}u.isMDXComponent=!0}}]);
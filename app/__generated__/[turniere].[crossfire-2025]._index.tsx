/* eslint-disable */
      /* This is a auto generated file for building the project */ 


      import { Fragment, useState } from "react";
      import { useResource, useVariableState } from "@webstudio-is/react-sdk/runtime";
      import { Fragment as Fragment_1, Box as Box, HtmlEmbed as HtmlEmbed, Image as Image, Slot as Slot, Heading as Heading, Text as Text, Separator as Separator, Bold as Bold } from "@webstudio-is/sdk-components-react";
import { Link as Link, Body as Body } from "@webstudio-is/sdk-components-react-router";


      export const siteName = "Wanna-Play";

      export const favIconAsset: string | undefined =
        undefined;

      // Font assets on current page (can be preloaded)
      export const pageFontAssets: string[] =
        ["DMSans-VariableFont_opsz_wght__6AYEf42h6baL3cdAc77f.ttf"]

      export const pageBackgroundImageAssets: string[] =
        []

      

      const Page = (_props: { system: any; }) => {
let baserowData = useResource("baserowData_1")
return <Body
className={`w-body cuj80l1`}>
<Slot>
<Fragment_1>
<HtmlEmbed
code={"<style>\n  /* So we don't need to add a token to every paragraph to remove margin. */\n  p {\n    margin: 0;\n  }\n\n  li::marker {\n    color: var(--foreground-accent);\n  }\n</style>"}
className={`w-html-embed`} />
<HtmlEmbed
code={"<style>\n:root {\n  --ani-duration: var(--duration-default, .2s);\n  --ani-delay: 0s;\n  --ani-slide-offset: 20%;\n  --ani-zoom-in-scale: 1;\n  --ani-zoom-out-scale: .85;\n  --ani-flip-rotate: 30deg;\n  --ani-easing: var(--easing-default, ease);\n  --ani-fill-mode: forwards;\n}\n[data-ani]:not([data-ani-children]),[data-ani-children]:not([data-ani-progress])>*{animation-duration:var(--ani-duration);animation-delay:var(--ani-delay);animation-timing-function:var(--ani-easing);animation-fill-mode:var(--ani-fill-mode);opacity:0}[data-ani-progress]:not([data-ani-children]),[data-ani-children]:not([data-ani])>*{transition-property:opacity,transform;transition-duration:var(--ani-duration);transition-timing-function:var(--ani-easing);opacity:0}\n@keyframes fadeIn{from{opacity:0}\nto{opacity:1}}\n@keyframes fadeOut{from{opacity:1}\nto{opacity:0}}[data-ani-children][data-ani='fade']>.in,[data-ani='fade']:where(.in:not([data-state]),[data-state$='open'],[data-state='active']){animation-name:fadeIn}[data-ani-children][data-ani='fade']>.out,[data-ani='fade']:where(.out:not([data-state]),[data-state='closed'],[data-state='inactive']){animation-name:fadeOut}\n@keyframes slideIn{from{opacity:0;translate:var(--ani-slide-transform)}\nto{opacity:1;translate:none}}\n@keyframes slideOut{from{opacity:1;translate:none}\nto{opacity:0;translate:var(--ani-slide-transform)}}[data-ani-children][data-ani|='slide']>.in,[data-ani|='slide']:where(.in:not([data-state]),[data-state$='open'],[data-state='active']){animation-name:slideIn}[data-ani-children][data-ani|='slide']>.out,[data-ani|='slide']:where(.out:not([data-state]),[data-state='closed'],[data-state='inactive']){animation-name:slideOut}[data-ani='slide-up']{--ani-slide-transform:0 var(--ani-slide-offset)}[data-ani='slide-down']{--ani-slide-transform:0 calc(-1*var(--ani-slide-offset))}[data-ani='slide-left']{--ani-slide-transform:var(--ani-slide-offset)}[data-ani='slide-right']{--ani-slide-transform:calc(-1*var(--ani-slide-offset))}\n@keyframes zoomIn{from{opacity:0;scale:var(--ani-zoom-out-scale)}\nto{opacity:1;scale:1}}\n@keyframes zoomOut{from{opacity:1;scale:1}\nto{opacity:0;scale:var(--ani-zoom-in-scale)}}[data-ani-children][data-ani='zoom']>.in,[data-ani|='zoom']:where(.in:not([data-state]),[data-state$='open'],[data-state='active']){animation-name:zoomIn}[data-ani-children][data-ani='zoom']>.out,[data-ani|='zoom']:where(.out:not([data-state]),[data-state='closed'],[data-state='inactive']){animation-name:zoomOut}[data-ani-children][data-ani-progress='zoom']>*,[data-ani-progress='zoom']:not([data-ani-children]){transform:scale(var(--ani-zoom-out-scale))}\n@keyframes flipInY{from{rotate:y var(--ani-flip-rotate);perspective:2000px;opacity:0}\nto{rotate:y 0;opacity:1}}\n@keyframes flipOutY{from{rotate:y 0;opacity:1}\nto{perspective:2000px;rotate:y var(--ani-flip-rotate);opacity:0}}\n@keyframes flipInX{from{perspective:2000px;rotate:x var(--ani-flip-rotate);opacity:0}\nto{rotate:x 0;opacity:1}}\n@keyframes flipOutX{from{rotate:x 0;opacity:1}\nto{perspective:2000px;rotate:x var(--ani-flip-rotate);opacity:0}}[data-ani-children][data-ani='flip-y']>.in,[data-ani='flip-y']:where(.in:not([data-state]),[data-state$='open'],[data-state='active']){animation-name:flipInY}[data-ani-children][data-ani='flip-x']>.in,[data-ani='flip-x']:where(.in:not([data-state]),[data-state$='open'],[data-state='active']){animation-name:flipInX}[data-ani-children][data-ani='flip-y']>.out,[data-ani='flip-y']:where(.out:not([data-state]),[data-state='closed'],[data-state='inactive']){animation-name:flipOutY}[data-ani-children][data-ani='flip-x']>.out,[data-ani='flip-x']:where(.out:not([data-state]),[data-state='closed'],[data-state='inactive']){animation-name:flipOutX}\n@keyframes expandDown{from{height:0}\nto{height:var(--newHeight)}}\n@keyframes expandUp{from{height:var(--newHeight)}\nto{height:0}}[data-ani='expand'],[data-ani='expand'][data-state='open'],[data-ani='expand'].in{--newHeight:var(--custom-height,var(--radix-accordion-content-height,var(--radix-collapsible-content-height,100%)));overflow:hidden;opacity:1}[data-ani-children][data-ani='expand']>.in,[data-ani='expand']:where(.in:not([data-state]),[data-state$='open'],[data-state='active']){animation:expandDown var(--ani-duration)var(--ani-easing)}[data-ani-children][data-ani='expand']>.out,[data-ani='expand']:where(.out:not([data-state]),[data-state='closed'],[data-state='inactive']){animation:expandUp var(--ani-duration)var(--ani-easing)}\n@media(prefers-reduced-motion:reduce){[data-ani]:not([data-ani-children]),[data-ani-progress]:not([data-ani-children]),[data-ani-children]>*{opacity:1;transform:none;animation:none;rotate:none;scale:none;translate:none}}\n</style>"}
className={`w-html-embed`} />
<Box
tag={"header"}
className={`w-box c1357293 c9jnjeu czr2pxy c155uc7w cry9bxc c1lxiyww c1qyy4dh ct02u4h c1z0l37u c1ml0hr7 c15hexcm`}>
<Slot>
<Fragment_1>
<Link
aria-label={"Home"}
href={"/"}
className={`w-link c5m8ase clv8gve`}>
<Image
loading={"eager"}
alt={"Logo"}
src={"/assets/WP_Logo_White_Icgqf9h08j2l5HrTl9LcA.png"}
width={150}
height={150}
className={`w-image`} />
</Link>
</Fragment_1>
</Slot>
</Box>
</Fragment_1>
</Slot>
<Box
className={`w-box ctt4q0t cs20fa1 c1qom380`}>
<Image
src={"/assets/Logo00086400_GMyV4KQQ0B91ntLX-nCPo.png"}
width={1920}
height={1080}
className={`w-image cir85gx ca57zs0`} />
<Box
className={`w-box c16k2ml7 c1g8bzfy c1pzicie c1dfajq9`}>
<HtmlEmbed
code={"<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/VSVeLve7G0Q?si=KTs4NZlYoDsogojE\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" referrerpolicy=\"strict-origin-when-cross-origin\" allowfullscreen></iframe>"}
className={`w-html-embed`} />
</Box>
<Separator
className={`w-separator`} />
</Box>
<Box
className={`w-box ctt4q0t cs20fa1 c1qom380`}>
<Text
className={`w-text cuj80l1`}>
{"Am "}
<Bold
className={`w-bold-text`}>
{"03.05.25"}
</Bold>
{" werden wir das beste Shooter Duo von Wanna-Play finden. In drei Spielen müsst ihr beweisen, dass ihr die besten Shooter Atzen bei uns auf dem Discord seid. Meldet euch und euren Team Partner bis zum "}
<Bold
className={`w-bold-text`}>
{"28.04."}
</Bold>
{" an."}
{""}
<br />
{""}
{""}
<br />
{""}
<Bold
className={`w-bold-text`}>
{"Anmeldung"}
</Bold>
{" bis 28.04.25 im anmelde Channel im Discord mit eurem Teamnamen euren Teammitgliedern und eurem Teamlogo + 5€ pro Team über Paypal für finanzierung eines Preises."}
{""}
<br />
{""}
{""}
<br />
{""}
<Bold
className={`w-bold-text`}>
{"Wann:"}
</Bold>
{" 03.05.25 auf dem WP Discord"}
{""}
<br />
{""}
<Bold
className={`w-bold-text`}>
{"Was:"}
</Bold>
{" PUBG R6 CS2"}
{""}
<br />
{""}
{""}
<br />
{""}
{""}
<br />
{""}
{"Weitere Infos kommen nach und nach hier und auf dem Discord"}
</Text>
<Separator
className={`w-separator`} />
</Box>
<Box
className={`w-box ctt4q0t cs20fa1 c1qom380`}>
<Text
className={`w-text`}>
<Heading
className={`w-heading`}>
<Text
tag={"span"}
className={`w-text`}>
{"Angemeldete Teams"}
</Text>
</Heading>
<Text
tag={"span"}
className={`w-text`}>
{"Hier findet ihr die bisher Angemeldeten Teams und ihren Anmelde Status. Wenn ihr alles nötige erledigt habt sollte unten \"Vollständig\" stehen."}
</Text>
</Text>
</Box>
<Box
className={`w-box czr2pxy cpiseut c9jnjeu c1357293 cry9bxc c1lfjoq7 c1c6o51 cwkpbe9 col88bb cvf6exy c1lcvbhc`}>
<Box
className={`w-box copqmak c1warb6e c1yl0tcf c1qs9knv c18vrsaw c1whe41a c1lcvbhc`}>
{baserowData?.data?.results?.map?.((BaserowItem: any, index: number) =>
<Fragment key={index}>
<Link
aria-label={"View " + BaserowItem?.["field_2624766"]?.value}
href={`/directory/${BaserowItem?.["field_3720886"]}`}
className={`w-link cry9bxc c1lfjoq7 c1qyy4dh ct02u4h c1qom380 c3r847z c8h7j7l co99jca c1xoe4it c1nzq1jt c1yl0tcf c1qs9knv cd2tf3b c135vpv5 cu3qems c1hskipr c18nx7en c1ovbu2i c13zjl4p cguzf06 ctpvygk col88bb c1doc88r c1sqa3dv c1hlhahe cn3vvdh`}>
<Image
src={BaserowItem?.["field_3720889"]?.[0]?.url}
width={+(BaserowItem?.["field_2624768"]?.[0]?.["image_width"]) || 200}
height={+(BaserowItem?.["field_2624768"]?.[0]?.["image_height"]) || 200}
alt={BaserowItem?.["field_2624766"]?.value + " logo"}
className={`w-image c10mt0ot c1h6fij5 czr2pxy c1w14gb3 c7ylbzb c5u7r4m c1h5pqsu`} />
<Heading
tag={"h2"}
className={`w-heading co8gpyk c1tme1mb`}>
{BaserowItem?.["field_3720886"]}
</Heading>
<Box
className={`w-box cry9bxc c1lfjoq7 c16xs6ny ct02u4h cizjjwu c1h82vm9 czr2pxy`}>
<Box
className={`w-box cry9bxc c1qyy4dh c18v2pa2 czr2pxy cpb5sl7 c12nur8y`}>
<Text
className={`w-text`}>
{BaserowItem?.["field_3720887"]}
</Text>
<Text
className={`w-text`}>
{BaserowItem?.["field_3720888"]}
</Text>
</Box>
<Box
className={`w-box cry9bxc c1qyy4dh ct02u4h czr2pxy cpb5sl7 c12nur8y c1kz4bsi cy8j7mm c1hwbdwo c10mz0pn c8h7j7l co99jca c1xoe4it c1nzq1jt c1qt4ce3 c1oez9rj c1egyw6c c4cht1f c3tc9n9 c19tuik9 c1i02232`}>
<Text
className={`w-text c6k8nt0`}>
{BaserowItem?.["field_3739130"]?.value}
</Text>
</Box>
</Box>
</Link>
</Fragment>
)}
</Box>
</Box>
<Box
className={`w-box`} />
<Slot>
<Fragment_1>
<Box
tag={"footer"}
className={`w-box cna0hdz c1mzb2kd c2ndtu8`}>
<Box
className={`w-box c1357293 c9jnjeu c11gzs80 c1fd0kk1 czr2pxy c155uc7w cry9bxc c1lfjoq7 c1778y6x c1wt8a7g c1s46o9r cdczzub`}>
<Box
className={`w-box cry9bxc c1lfjoq7 cxjshtx c6fi6ij cmaksb1 c1i9o1yp`}>
<Box
className={`w-box cry9bxc ct02u4h c1qyy4dh c1e2b3ev c14yifpe c113k288 c1eghq1p c6hjwpc`}>
<Link
href={"/"}
aria-label={"home"}
className={`w-link`}>
<Image
src={"/assets/WP_Logo_White_Icgqf9h08j2l5HrTl9LcA.png"}
width={100}
height={100}
alt={"Logo"}
className={`w-image`} />
</Link>
</Box>
</Box>
<Separator
className={`w-separator cthxa68 czr2pxy c32myit cwrra4i`} />
<Box
className={`w-box cry9bxc c1qyy4dh c18v2pa2`}>
<Text
className={`w-text`}>
{"© 2025 Wanna-Play"}
</Text>
<HtmlEmbed
code={"<!-- Social Media Icons Block -->\n<div class=\"wp-block-group wanna-play-socials-footer-block\">\n    <div class=\"wanna-play-socials-footer-icons\">\n        <a href=\"https://x.com/WannaPlay_eu\" class=\"wanna-play-socials-footer-icon x-icon\" title=\"X (Twitter)\" target=\"_blank\" rel=\"noopener noreferrer\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\">\n                <path fill=\"currentColor\" d=\"M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z\"></path>\n            </svg>\n        </a>\n        <a href=\"https://www.youtube.com/@Wanna-Play_eu\" class=\"wanna-play-socials-footer-icon youtube-icon\" title=\"YouTube\" target=\"_blank\" rel=\"noopener noreferrer\">\n            <i class=\"fab fa-youtube\"></i>\n        </a>\n        <a href=\"https://www.twitch.tv/wanna_play_eu\" class=\"wanna-play-socials-footer-icon twitch-icon\" title=\"Twitch\" target=\"_blank\" rel=\"noopener noreferrer\">\n            <i class=\"fab fa-twitch\"></i>\n        </a>\n        <a href=\"https://steamcommunity.com/groups/Wanna-PlayEU\" class=\"wanna-play-socials-footer-icon steam-icon\" title=\"Steam\" target=\"_blank\" rel=\"noopener noreferrer\">\n            <i class=\"fab fa-steam\"></i>\n        </a>\n        <a href=\"#discord-link\" class=\"wanna-play-socials-footer-icon discord-icon\" title=\"Discord\" target=\"_blank\" rel=\"noopener noreferrer\">\n            <i class=\"fab fa-discord\"></i>\n        </a>\n    </div>\n</div>\n<style>\n.wanna-play-socials-footer-block {\n    padding: 20px;\n    background-color: transparent; /* Geändert zu transparent */\n    margin: 20px 0;\n}\n.wanna-play-socials-footer-icons {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-wrap: wrap;\n}\n.wanna-play-socials-footer-icon {\n    color: white;\n    font-size: 24px;\n    margin: 10px;\n    transition: all 0.3s ease;\n    width: 50px;\n    height: 50px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-radius: 50%;\n    background-color: #3a3a3a;\n}\n.wanna-play-socials-footer-icon:hover {\n    transform: translateY(-5px);\n    box-shadow: 0 5px 15px rgba(0,0,0,0.3);\n}\n/* Individuelle Farben und Hover-Effekte für jedes Icon */\n.x-icon:hover { background-color: #000000; }\n.youtube-icon:hover { background-color: #FF0000; }\n.twitch-icon:hover { background-color: #6441A4; }\n.steam-icon:hover { background-color: #00ADEE; }\n.discord-icon:hover { background-color: #7289DA; }\n.x-icon svg {\n    width: 24px;\n    height: 24px;\n}\n@media (max-width: 768px) {\n    .wanna-play-socials-footer-icon {\n        font-size: 20px;\n        width: 40px;\n        height: 40px;\n        margin: 8px;\n    }\n    .x-icon svg {\n        width: 20px;\n        height: 20px;\n    }\n}\n</style>\n<!-- Font Awesome Einbindung für die Icons -->\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css\">"}
className={`w-html-embed`} />
</Box>
</Box>
</Box>
</Fragment_1>
</Slot>
</Body>
}


      export { Page }
    
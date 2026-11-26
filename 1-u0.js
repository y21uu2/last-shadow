(()=>{var fg=Object.create;var uc=Object.defineProperty;var mg=Object.getOwnPropertyDescriptor;var gg=Object.getOwnPropertyNames;var Pg=Object.getPrototypeOf,Tg=Object.prototype.hasOwnProperty;var dc=(a=>typeof require!="undefined"?require:typeof Proxy!="undefined"?new Proxy(a,{get:(e,A)=>(typeof require!="undefined"?require:e)[A]}):a)(function(a){if(typeof require!="undefined")return require.apply(this,arguments);throw Error('Dynamic require of "'+a+'" is not supported')});var Dg=(a,e)=>{for(var A in e)uc(a,A,{get:e[A],enumerable:!0})},Mg=(a,e,A,t)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of gg(e))!Tg.call(a,i)&&i!==A&&uc(a,i,{get:()=>e[i],enumerable:!(t=mg(e,i))||t.enumerable});return a};var hc=(a,e,A)=>(A=a!=null?fg(Pg(a)):{},Mg(e||!a||!a.__esModule?uc(A,"default",{value:a,enumerable:!0}):A,a));var ah=`
:root{--bg:#0c0f0d;--panel:#141a16;--panel2:#1b231d;--line:#3a4a3e;--txt:#e8ead9;--dim:#a9b3a0;--acc:#c9a227;--acc2:#7fa05a;--danger:#c0392b;--btn-op:.85;--btn-sz:64px}
*{box-sizing:border-box;-webkit-tap-highlight-color:transparent}
#olsroot{margin:0;padding:0;height:100%;overflow:hidden;background:#060807;color:var(--txt);font-family:"Segoe UI",Tahoma,Arial,sans-serif}
button{font-family:inherit;cursor:pointer;min-height:44px}
.screen{position:fixed;inset:0;display:none;flex-direction:column;align-items:center;justify-content:flex-start;overflow-y:auto;padding:18px 14px 30px;background:radial-gradient(1200px 600px at 50% -10%,#26332a 0%,#0c0f0d 60%);z-index:20}
.screen.on{display:flex}
h1.title{font-size:clamp(26px,6vw,46px);margin:14px 0 2px;text-align:center;letter-spacing:.5px}
.sub{color:var(--acc);text-align:center;font-size:clamp(13px,3vw,17px);margin:0 0 6px;letter-spacing:2px}
.tagline{color:var(--dim);text-align:center;max-width:640px;line-height:1.8;font-size:15px;margin:6px 0 16px}
.menu{width:min(430px,94vw);display:flex;flex-direction:column;gap:10px}
.mbtn{background:linear-gradient(180deg,#232e26,#182019);border:1px solid var(--line);color:var(--txt);font-size:18px;padding:13px 16px;border-radius:8px;text-align:right;display:flex;justify-content:space-between;align-items:center;min-height:54px}
.mbtn:hover,.mbtn:active{border-color:var(--acc);background:#2a352c}
.mbtn small{color:var(--dim);font-size:12px}
.mbtn.primary{background:linear-gradient(180deg,#4a5a2e,#33401f);border-color:#8a9a4a;font-weight:700;font-size:20px}
.card{background:var(--panel);border:1px solid var(--line);border-radius:10px;padding:16px;width:min(680px,96vw);line-height:1.9}
.card h2{margin:0 0 8px;color:var(--acc);font-size:22px}
.mrow{display:flex;justify-content:space-between;align-items:center;gap:10px;padding:12px;border:1px solid var(--line);border-radius:8px;background:var(--panel2);margin-bottom:9px;width:min(680px,96vw)}
.mrow .t{font-size:17px;font-weight:700}.mrow .d{color:var(--dim);font-size:13px;line-height:1.6}
.badge{font-size:12px;padding:4px 10px;border-radius:20px;border:1px solid var(--line);white-space:nowrap}
.badge.ok{color:#b7e08a;border-color:#5a7a3a}.badge.lock{color:#d98a7a}
.setrow{display:flex;justify-content:space-between;align-items:center;gap:12px;padding:10px 4px;border-bottom:1px dashed #2c3a30}
.setrow label{font-size:16px}
.setrow input[type=range]{width:170px;accent-color:var(--acc);min-height:36px}
.setrow select{background:#0f1410;color:var(--txt);border:1px solid var(--line);border-radius:6px;padding:8px;min-height:40px;font-size:15px}
.tog{width:58px;height:32px;border-radius:20px;background:#333;border:1px solid var(--line);position:relative;flex:none}
.tog::after{content:"";position:absolute;top:3px;right:4px;width:24px;height:24px;border-radius:50%;background:#999;transition:.15s}
.tog.on{background:#4a5a2e}.tog.on::after{right:28px;background:#d7e6a8}
.back{align-self:flex-start;background:none;border:1px solid var(--line);color:var(--txt);border-radius:8px;padding:8px 16px;font-size:15px}
#bootErr{color:#ff9a8a;white-space:pre-wrap;max-width:90vw;text-align:center;font-size:14px;line-height:1.8}
.stats{display:grid;grid-template-columns:1fr 1fr;gap:10px;width:min(480px,94vw)}
.stat{background:var(--panel2);border:1px solid var(--line);border-radius:8px;padding:12px;text-align:center}
.stat b{display:block;font-size:24px;color:var(--acc)}
/* ===== GAME ===== */
#gameWrap{position:fixed;inset:0;display:none;background:#000;z-index:10}
#gameWrap.on{display:block}
canvas{display:block}
#hud{position:absolute;inset:0;pointer-events:none;font-family:inherit}
#compass{position:absolute;top:8px;left:50%;transform:translateX(-50%);background:rgba(0,0,0,.45);border:1px solid rgba(255,255,255,.25);border-radius:6px;padding:3px 14px;font-size:14px;letter-spacing:3px;color:#fff;direction:ltr}
#objBox{position:absolute;top:44px;right:10px;max-width:min(430px,72vw);background:rgba(8,12,9,.62);border-right:3px solid var(--acc);padding:8px 12px;border-radius:4px}
#objText{font-size:15px;line-height:1.6}#objDist{color:var(--acc);font-size:13px}
#hpWrap{position:absolute;bottom:14px;right:12px;width:min(240px,38vw)}
#hpBarBg{background:rgba(0,0,0,.55);height:16px;border:1px solid rgba(255,255,255,.35);border-radius:3px;overflow:hidden}
#hpBar{height:100%;width:100%;background:linear-gradient(90deg,#7fa05a,#a9c46a);transition:width .15s}
#hpNum{font-size:14px;margin-top:3px;text-shadow:0 1px 3px #000}
#ammoBox{position:absolute;bottom:12px;left:12px;text-align:left;background:rgba(0,0,0,.45);padding:6px 12px;border-radius:6px;direction:ltr}
#ammoBig{font-size:30px;font-weight:800}#ammoRes{color:var(--dim);font-size:15px}
#wpnName{font-size:12px;color:var(--acc);direction:rtl;text-align:right}
#cross{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);font-size:22px;color:rgba(255,255,255,.9);text-shadow:0 0 4px #000}
#hitmark{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%) rotate(45deg);font-size:26px;color:#ffd75e;opacity:0;font-weight:900}
#subtitle{position:absolute;bottom:96px;left:50%;transform:translateX(-50%);width:min(760px,92vw);text-align:center;background:rgba(0,0,0,.55);padding:8px 14px;border-radius:6px;font-size:16px;line-height:1.7;display:none}
#subtitle b{color:var(--acc)}
#killfeed{position:absolute;top:110px;left:10px;font-size:13px;color:#ffd9a0;text-align:left;line-height:1.7;text-shadow:0 1px 2px #000}
#timerBox{position:absolute;top:44px;left:10px;background:rgba(60,10,5,.6);border:1px solid #a33;padding:6px 14px;border-radius:6px;font-size:17px;display:none}
#vignette{position:absolute;inset:0;box-shadow:inset 0 0 120px 40px rgba(180,0,0,0);pointer-events:none;transition:box-shadow .1s}
#interactHint{position:absolute;left:50%;top:62%;transform:translateX(-50%);background:rgba(0,0,0,.6);padding:8px 16px;border-radius:6px;font-size:15px;display:none}
#progWrap{position:absolute;left:50%;top:56%;transform:translateX(-50%);width:220px;display:none}
#progBg{background:rgba(0,0,0,.6);height:10px;border:1px solid #fff3;border-radius:5px}#progBar{height:100%;width:0%;background:var(--acc)}
#scope{position:absolute;inset:0;display:none;background:linear-gradient(rgba(255,80,60,.85),rgba(255,80,60,.85)) center/2px 54vmin no-repeat,linear-gradient(rgba(255,80,60,.85),rgba(255,80,60,.85)) center/54vmin 2px no-repeat,radial-gradient(circle 30vmin at center,transparent 99%,#000 100%);pointer-events:none}
#nvTint{position:absolute;inset:0;display:none;background:rgba(40,255,90,.13);mix-blend-mode:screen;pointer-events:none}
#convoyBox{position:absolute;top:150px;left:10px;font-size:13px;line-height:1.8;background:rgba(0,0,0,.45);padding:6px 10px;border-radius:6px;display:none}
.tbtn{position:absolute;pointer-events:auto;background:rgba(20,26,22,.55);border:1.5px solid rgba(255,255,255,.5);color:#fff;border-radius:50%;display:none;align-items:center;justify-content:center;font-size:13px;font-weight:700;text-align:center;user-select:none;touch-action:none;width:var(--btn-sz);height:var(--btn-sz);opacity:var(--btn-op)}
#olsroot.touch .tbtn{display:flex}
#btnFire{right:18px;bottom:110px;width:calc(var(--btn-sz)*1.35);height:calc(var(--btn-sz)*1.35);background:rgba(120,30,20,.55);font-size:16px}
#btnAds{right:calc(30px + var(--btn-sz)*1.35);bottom:96px}
#btnReload{right:24px;bottom:calc(130px + var(--btn-sz)*1.35)}
#btnJump{left:110px;bottom:24px}#btnCrouch{left:110px;bottom:84px}#btnNade{left:200px;bottom:84px}
#btnInteract{left:50%;bottom:170px;transform:translateX(-50%);border-radius:12px;width:auto;padding:0 20px;height:48px}
#btnNV{left:12px;top:190px;border-radius:10px;width:auto;padding:0 12px;height:44px}
#btnPause{top:8px;left:8px;width:44px;height:44px;border-radius:8px;font-size:18px}
#joyBase{position:absolute;left:22px;bottom:86px;width:120px;height:120px;border-radius:50%;border:1.5px solid rgba(255,255,255,.4);background:rgba(255,255,255,.07);display:none;pointer-events:auto;touch-action:none}
#olsroot.touch #joyBase{display:block}
#joyKnob{position:absolute;left:35px;top:35px;width:50px;height:50px;border-radius:50%;background:rgba(255,255,255,.35)}
#rotateHint{position:fixed;inset:auto 0 0 0;background:#000c;color:#ffd75e;text-align:center;padding:8px;font-size:14px;z-index:40;display:none}
@media (orientation:portrait) and (max-width:820px){#rotateHint{display:flex!important;inset:0!important;align-items:center;justify-content:center;font-size:22px;line-height:1.8;padding:24px;background:#000;z-index:99999}}
.foot{color:#6d7867;font-size:12px;margin-top:18px;text-align:center;line-height:1.8}
.fld{width:100%;background:#0f1410;color:var(--txt);border:1px solid var(--line);border-radius:8px;padding:12px;font-size:17px;min-height:48px;margin-bottom:10px;font-family:inherit}
.mini{background:#232e26;border:1px solid var(--line);color:var(--txt);border-radius:7px;padding:8px 13px;font-size:14px;min-height:40px}
.mini:active{border-color:var(--acc)}
.mini.danger{border-color:#a33;color:#ff9a8a}
.mini.active{border-color:var(--acc);background:#3a4526;color:#ffe9a8}
.err{color:#ff9a8a;min-height:24px;font-size:14px;line-height:1.6}
.okmsg{color:#b7e08a;min-height:24px;font-size:14px}
.ednote{color:var(--dim);font-size:13px;line-height:1.8;background:var(--panel);border:1px dashed var(--line);border-radius:8px;padding:10px 14px;width:min(680px,96vw)}
.propbtns{display:flex;flex-wrap:wrap;gap:8px;margin:8px 0}


@media (max-height:420px){
#objBox{top:8px;right:10px;max-width:38vw;padding:5px 10px;font-size:13px}
#compass{top:6px}
#timerBox{top:8px;left:60px;padding:4px 10px;font-size:15px}
#killfeed{top:58px}
#convoyBox{top:100px}
#hpWrap{bottom:8px}
#ammoBox{bottom:6px;padding:4px 10px}
#joyBase{bottom:62px;left:14px;width:104px;height:104px}
#joyKnob{left:27px;top:27px}
#btnFire{bottom:52px;right:16px}
#btnReload{bottom:calc(60px + var(--btn-sz)*1.35);right:22px;width:calc(var(--btn-sz)*.9);height:calc(var(--btn-sz)*.9)}
#btnAds{bottom:50px;right:calc(28px + var(--btn-sz)*1.35)}
#btnJump{left:132px;bottom:14px}#btnCrouch{left:132px;bottom:72px}#btnNade{left:222px;bottom:72px}
#btnInteract{bottom:118px}
#btnNV{top:140px}
#subtitle{bottom:56px;font-size:14px;padding:5px 12px;line-height:1.5}
}
`,sh=`<div id="rotateHint">\u{1F4F1} \u0644\u0641\u0651 \u0627\u0644\u0645\u0648\u0628\u0627\u064A\u0644 \u0623\u0641\u0642\u064A\u0627\u064B \u0639\u0634\u0627\u0646 \u062A\u0644\u0639\u0628 \u0628\u0627\u0644\u0639\u0631\u0636</div>

<!-- BOOT / MAIN MENU -->
<div class="screen on" id="scrMenu">
  <div style="font-size:44px">\u{1F396}\uFE0F</div>
  <h1 class="title">\u0627\u0644\u0639\u0645\u0644\u064A\u0629: \u0627\u0644\u0638\u0644 \u0627\u0644\u0623\u062E\u064A\u0631</h1>
  <p class="sub">OPERATION : LAST SHADOW</p>
  <p class="tagline">\u0645\u0635\u0631 \u0662\u0660\u0663\u0665\u2026 \u0627\u0644\u0634\u0628\u0643\u0629 \u0648\u0642\u0639\u062A\u060C \u0648\u0627\u0644\u0628\u0644\u062F \u0641\u064A \u0627\u0644\u0636\u0644\u0645\u0629. \u0627\u0644\u0643\u0627\u0628\u062A\u0646 \xAB\u0622\u062F\u0645 \u0627\u0644\u0645\u0635\u0631\u064A\xBB \u0648\u0641\u0631\u0642\u062A\u0647 \u0622\u062E\u0631 \u0625\u0634\u0627\u0631\u0629 \u0623\u0645\u0644. \u0633\u062A \u0645\u0647\u0645\u0627\u062A\u060C \u0645\u0646 \u0642\u0631\u0649 \u0627\u0644\u062F\u0644\u062A\u0627 \u0644\u0642\u0644\u0628 \u0627\u0644\u0645\u0646\u0634\u0623\u0629 \u2014 \u0648\u0627\u0646\u062A \u0627\u0644\u0644\u064A \u0647\u062A\u0643\u0645\u0651\u0644\u0647\u0645.</p>
  <div id="bootErr"></div>
  <div class="menu">
    <button class="mbtn primary" id="btnStart">\u25B6 \u0627\u0628\u062F\u0623 \u0627\u0644\u0645\u0647\u0645\u0629 <small id="startHint"></small></button>
    <button class="mbtn" id="btnResume">\u23F5 \u0627\u0633\u062A\u0626\u0646\u0627\u0641 \u0645\u0646 \u0646\u0642\u0637\u0629 \u062A\u0641\u062A\u064A\u0634 <small id="resumeHint"></small></button>
    <button class="mbtn" id="btnMissions">\u{1F5FA}\uFE0F \u0627\u0644\u0645\u0647\u0627\u0645</button>
    <button class="mbtn" id="btnSettings">\u2699\uFE0F \u0627\u0644\u0625\u0639\u062F\u0627\u062F\u0627\u062A</button>
    <button class="mbtn" id="btnEditor">\u{1F6E0}\uFE0F \u0627\u0644\u062A\u062D\u0631\u064A\u0631 \u0648\u0627\u0644\u062A\u062D\u062F\u064A\u062B <small>\u{1F512} \u0645\u062D\u0645\u064A \u0628\u0643\u0644\u0645\u0629 \u0633\u0631</small></button>
    <button class="mbtn" id="btnHow">\u2753 \u0643\u064A\u0641 \u062A\u0644\u0639\u0628</button>
    <button class="mbtn" id="btnCredits">\u{1F3C5} \u0627\u0644\u0634\u0643\u0631</button>
  </div>
  <p class="foot">\u0646\u0633\u062E\u0629 HTML5 \u2014 Three.js \u2022 \u0627\u0644\u062A\u0642\u062F\u0645 \u0648\u0627\u0644\u0625\u0639\u062F\u0627\u062F\u0627\u062A \u0628\u064A\u062A\u062D\u0641\u0638\u0648\u0627 \u0639\u0644\u0649 \u062C\u0647\u0627\u0632\u0643<br>ZALLOUTA STUDIO</p>
</div>

<!-- MISSIONS -->
<div class="screen" id="scrMissions">
  <button class="back" data-go="scrMenu">\u2192 \u0631\u062C\u0648\u0639</button>
  <h1 class="title" style="font-size:30px">\u0627\u0644\u0645\u0647\u0627\u0645</h1>
  <div id="missionList"></div>
</div>

<!-- SETTINGS -->
<div class="screen" id="scrSettings">
  <button class="back" id="setBack">\u2192 \u0631\u062C\u0648\u0639</button>
  <h1 class="title" style="font-size:30px">\u0627\u0644\u0625\u0639\u062F\u0627\u062F\u0627\u062A</h1>
  <div class="card" id="settingsCard"></div>
</div>

<!-- HOW TO -->
<div class="screen" id="scrHow">
  <button class="back" data-go="scrMenu">\u2192 \u0631\u062C\u0648\u0639</button>
  <h1 class="title" style="font-size:30px">\u0643\u064A\u0641 \u062A\u0644\u0639\u0628</h1>
  <div class="card">
    <h2>\u{1F5A5}\uFE0F \u0639\u0644\u0649 \u0627\u0644\u0643\u0645\u0628\u064A\u0648\u062A\u0631</h2>
    <p>\u2022 \u0627\u0644\u062D\u0631\u0643\u0629: W A S D \u2014 \u0627\u0644\u062C\u0631\u064A: Shift \u2014 \u0627\u0644\u0642\u0641\u0632: \u0645\u0633\u0627\u0641\u0629<br>\u2022 \u0627\u0644\u062A\u0635\u0648\u064A\u0628: \u0627\u0644\u0645\u0627\u0648\u0633 (\u0627\u0636\u063A\u0637 \u0639\u0644\u0649 \u0627\u0644\u0634\u0627\u0634\u0629 \u0644\u0642\u0641\u0644 \u0627\u0644\u0645\u0624\u0634\u0631) \u2014 \u0627\u0644\u0636\u0631\u0628: \u0643\u0644\u064A\u0643 \u0634\u0645\u0627\u0644 \u2014 \u0627\u0644\u062A\u0635\u0648\u064A\u0628 \u0627\u0644\u062F\u0642\u064A\u0642: \u0643\u0644\u064A\u0643 \u064A\u0645\u064A\u0646<br>\u2022 \u0627\u0644\u062A\u0644\u0642\u064A\u0645: R \u2014 \u0627\u0644\u062A\u0641\u0627\u0639\u0644 (\u062A\u0641\u0639\u064A\u0644 / \u0631\u0643\u0648\u0628 / \u0627\u0633\u062A\u062E\u062F\u0627\u0645): E \u0645\u0639 \u0627\u0644\u0627\u0633\u062A\u0645\u0631\u0627\u0631<br>\u2022 \u0627\u0644\u0631\u0624\u064A\u0629 \u0627\u0644\u0644\u064A\u0644\u064A\u0629 (\u0627\u0644\u0645\u0647\u0645\u0629 \u0662): N \u2014 \u0625\u064A\u0642\u0627\u0641 \u0645\u0624\u0642\u062A: Esc \u0623\u0648 P</p>
    <h2>\u{1F4F1} \u0639\u0644\u0649 \u0627\u0644\u0645\u0648\u0628\u0627\u064A\u0644 (\u0644\u0645\u0633)</h2>
    <p>\u2022 \u0627\u0644\u0639\u0635\u0627\u064A\u0629 \u0627\u0644\u0634\u0645\u0627\u0644 \u0644\u0644\u062D\u0631\u0643\u0629\u060C \u0648\u0627\u0633\u062D\u0628 \u064A\u0645\u064A\u0646 \u0627\u0644\u0634\u0627\u0634\u0629 \u0644\u0644\u0646\u0638\u0631 \u062D\u0648\u0627\u0644\u064A\u0646\u0643<br>\u2022 \u0632\u0631\u0627\u0631 \xAB\u0646\u0627\u0631\xBB \u0644\u0644\u0636\u0631\u0628\u060C \xAB\u062A\u0635\u0648\u064A\u0628\xBB \u0644\u0644\u062A\u0635\u0648\u064A\u0628 \u0627\u0644\u062F\u0642\u064A\u0642\u060C \xAB\u062A\u0644\u0642\u064A\u0645\xBB\u060C \xAB\u0627\u0642\u0641\u0632\xBB\u060C \u0648\xAB\u0627\u0633\u062A\u062E\u062F\u0645\xBB \u0628\u064A\u0638\u0647\u0631 \u0644\u0645\u0627 \u062A\u0642\u0631\u0651\u0628 \u0645\u0646 \u0647\u062F\u0641 \u062A\u0641\u0627\u0639\u0644\u064A<br>\u2022 \u0634\u0641\u0627\u0641\u064A\u0629 \u0648\u062D\u062C\u0645 \u0623\u0632\u0631\u0627\u0631 \u0627\u0644\u0644\u0645\u0633 \u0628\u062A\u062A\u0638\u0628\u0637 \u0645\u0646 \u0627\u0644\u0625\u0639\u062F\u0627\u062F\u0627\u062A</p>
    <h2>\u{1F3AF} \u0646\u0635\u0627\u064A\u062D</h2>
    <p>\u2022 \u0627\u0633\u062A\u0631 \u0648\u0631\u0627 \u0627\u0644\u0633\u0648\u0627\u062A\u0631 \u0648\u0627\u0644\u0635\u0646\u0627\u062F\u064A\u0642\u060C \u0648\u0627\u0636\u0631\u0628 \u062F\u0641\u0639\u0627\u062A \u0642\u0635\u064A\u0631\u0629 \u0639\u0634\u0627\u0646 \u0627\u0644\u062F\u0642\u0629.<br>\u2022 \u0627\u0644\u0639\u062F\u0648 \u0644\u0627\u0628\u0633 \u063A\u0627\u0645\u0642 \u0648\u0639\u0644\u0649 \u0648\u0634\u0647 \u0634\u0631\u064A\u0637 \u0623\u062D\u0645\u0631 \u2014 \u062F\u0647 \u0627\u0644\u0644\u064A \u062A\u0636\u0631\u0628\u0647. \u0632\u0645\u0627\u064A\u0644\u0643 \u0644\u0627\u0628\u0633\u064A\u0646 \u0645\u0645\u0648\u0647 \u0641\u0627\u062A\u062D\u060C \u0645\u0627 \u062A\u0636\u0631\u0628\u0647\u0645\u0634.<br>\u2022 \u0646\u0642\u0627\u0637 \u0627\u0644\u062A\u0641\u062A\u064A\u0634 \u0628\u062A\u062D\u0641\u0638\u0643 \u062A\u0644\u0642\u0627\u0626\u064A\u0627\u064B \u0628\u0639\u062F \u0643\u0644 \u0647\u062F\u0641 \u0643\u0628\u064A\u0631.</p>
  </div>
</div>

<!-- CREDITS -->
<div class="screen" id="scrCredits">
  <button class="back" data-go="scrMenu">\u2192 \u0631\u062C\u0648\u0639</button>
  <h1 class="title" style="font-size:30px">\u0627\u0644\u0634\u0643\u0631</h1>
  <div class="card" style="text-align:center">
    <p style="font-size:20px">\u{1F396}\uFE0F \u0627\u0644\u0639\u0645\u0644\u064A\u0629: \u0627\u0644\u0638\u0644 \u0627\u0644\u0623\u062E\u064A\u0631</p>
    <p>\u0642\u0635\u0629 \u0648\u0634\u062E\u0635\u064A\u0627\u062A \u0648\u0623\u0645\u0627\u0643\u0646 \u0645\u0635\u0631\u064A\u0629 \u0623\u0635\u0644\u064A\u0629 \u2014 \u062F\u0644\u062A\u0627 \u0662\u0660\u0663\u0665<br>\u062A\u0637\u0648\u064A\u0631: ZALLOUTA STUDIO<br>\u0645\u062D\u0631\u0643 \u0627\u0644\u0639\u0631\u0636: Three.js (WebGL)<br>\u0627\u0644\u0623\u0635\u0648\u0627\u062A: \u0645\u0624\u062B\u0631\u0627\u062A \u0645\u0648\u0644\u0651\u062F\u0629 \u0628\u0631\u0645\u062C\u064A\u0627\u064B (WebAudio) + \u0645\u0624\u062B\u0631\u0627\u062A \u0645\u0641\u062A\u0648\u062D\u0629 \u0627\u0644\u062A\u0631\u062E\u064A\u0635 (CC0 \u0645\u0646 OpenGameArt \u0648 Freesound \u0648 BigSoundBank).<br>\u0637\u0644\u0642\u0629 AK47: "AK47 1 Shot" \u0628\u0648\u0627\u0633\u0637\u0629 TB0Y298 \u0639\u0644\u0649 Freesound (freesound.org/people/TB0Y298/sounds/203315) \u2014 \u062A\u0631\u062E\u064A\u0635 CC BY 4.0 (creativecommons.org/licenses/by/4.0) \u2014 \u062A\u0645 \u062A\u0639\u062F\u064A\u0644\u0647 (\u0642\u0635\u0651 \u0648\u0645\u0639\u0627\u064A\u0631\u0629 \u0627\u0644\u0635\u0648\u062A).<br>\u0627\u0644\u0646\u062F\u0627\u0621\u0627\u062A \u0627\u0644\u0642\u0635\u064A\u0631\u0629 \u0628\u0627\u0644\u0644\u0647\u062C\u0629 \u0627\u0644\u0645\u0635\u0631\u064A\u0629: \u0623\u0635\u0648\u0627\u062A \u0645\u0648\u0644\u0651\u062F\u0629 \u0628\u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064A (\u0644\u064A\u0633\u062A \u062A\u0633\u062C\u064A\u0644\u0627\u062A \u0644\u0628\u0634\u0631).<br>\u0627\u0644\u062E\u0627\u0645\u0627\u062A (\u0637\u0648\u0628\u060C \u062E\u0631\u0633\u0627\u0646\u0629\u060C \u0631\u0645\u0644\u060C \u0645\u0645\u0648\u0647) \u0645\u0648\u0644\u0651\u062F\u0629 \u0628\u0631\u0645\u062C\u064A\u0627\u064B \u0648\u0642\u062A \u0627\u0644\u062A\u0634\u063A\u064A\u0644</p>
    <p style="color:var(--dim)">\u0634\u0643\u0631 \u062E\u0627\u0635 \u0644\u0643\u0644 \u0627\u0644\u0644\u064A \u0644\u0633\u0647 \u0628\u064A\u062D\u0627\u0648\u0644\u0648\u0627 \u064A\u0648\u0635\u0651\u0644\u0648\u0627 \u0627\u0644\u0625\u0634\u0627\u0631\u0629\u2026 \u{1F4E1}</p>
  </div>
</div>

<!-- BRIEFING -->
<div class="screen" id="scrBrief">
  <h1 class="title" id="briefTitle" style="font-size:30px"></h1>
  <p class="sub" id="briefCode"></p>
  <div class="card"><p id="briefText" style="font-size:16px"></p><p id="briefObj" style="color:var(--acc)"></p></div>
  <div class="menu" style="margin-top:14px">
    <button class="mbtn primary" id="btnLaunch">\u{1F680} \u0627\u0646\u0637\u0644\u0627\u0642</button>
    <button class="mbtn" data-go="scrMenu">\u2192 \u0627\u0644\u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629</button>
  </div>
</div>

<!-- PAUSE -->
<div class="screen" id="scrPause" style="background:rgba(5,8,6,.88);justify-content:center">
  <h1 class="title" style="font-size:30px">\u23F8\uFE0F \u0625\u064A\u0642\u0627\u0641 \u0645\u0624\u0642\u062A</h1>
  <div class="menu">
    <button class="mbtn primary" id="btnUnpause">\u25B6 \u0627\u0633\u062A\u0626\u0646\u0627\u0641</button>
    <button class="mbtn" id="btnRestartCp">\u21A9\uFE0F \u0625\u0639\u0627\u062F\u0629 \u0645\u0646 \u0646\u0642\u0637\u0629 \u0627\u0644\u062A\u0641\u062A\u064A\u0634</button>
    <button class="mbtn" id="btnPauseSettings">\u2699\uFE0F \u0627\u0644\u0625\u0639\u062F\u0627\u062F\u0627\u062A</button>
    <button class="mbtn" id="btnEditorPause">\u{1F6E0}\uFE0F \u0627\u0644\u062A\u062D\u0631\u064A\u0631 \u0648\u0627\u0644\u062A\u062D\u062F\u064A\u062B <small>\u{1F512}</small></button>
    <button class="mbtn" id="btnQuitMenu">\u{1F3E0} \u0627\u0644\u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629</button>
  </div>
</div>

<!-- DEATH -->
<div class="screen" id="scrDeath" style="background:rgba(40,4,2,.9);justify-content:center">
  <div style="font-size:52px">\u{1FA78}</div>
  <h1 class="title" style="color:#ff8a7a">\u0633\u0642\u0637\u062A \u0641\u064A \u0627\u0644\u0645\u0639\u0631\u0643\u0629</h1>
  <p class="tagline">\u062C\u0627\u0631\u064D \u0627\u0644\u0631\u062C\u0648\u0639 \u0644\u0622\u062E\u0631 \u0646\u0642\u0637\u0629 \u062A\u0641\u062A\u064A\u0634\u2026</p>
</div>

<!-- STATS -->
<div class="screen" id="scrStats" style="justify-content:center">
  <div style="font-size:48px">\u{1F3C6}</div>
  <h1 class="title" id="statsTitle" style="font-size:30px">\u0627\u0643\u062A\u0645\u0644\u062A \u0627\u0644\u0645\u0647\u0645\u0629</h1>
  <div class="stats" id="statsGrid"></div>
  <div class="menu" style="margin-top:16px">
    <button class="mbtn primary" id="btnNextMission">\u23ED\uFE0F \u0627\u0644\u0645\u0647\u0645\u0629 \u0627\u0644\u062C\u0627\u064A\u0629</button>
    <button class="mbtn" data-go="scrMenu">\u{1F3E0} \u0627\u0644\u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629</button>
  </div>
</div>

<!-- CAMPAIGN COMPLETE -->
<div class="screen" id="scrCampaign" style="justify-content:center">
  <div style="font-size:56px">\u{1F396}\uFE0F</div>
  <h1 class="title">\u0627\u0643\u062A\u0645\u0644\u062A \u0627\u0644\u062D\u0645\u0644\u0629</h1>
  <p class="tagline">\u0627\u0644\u0625\u0634\u0627\u0631\u0629 \u0648\u0635\u0644\u062A\u2026 \u0648\u0645\u0635\u0631 \u0644\u0633\u0647 \u0648\u0627\u0642\u0641\u0629 \u0639\u0644\u0649 \u0631\u062C\u0644\u064A\u0647\u0627. \u0634\u0643\u0631\u0627\u064B \u064A\u0627 \u0643\u0627\u0628\u062A\u0646 \u0622\u062F\u0645.</p>
  <div class="stats" id="campGrid"></div>
  <div class="menu" style="margin-top:16px"><button class="mbtn primary" data-go="scrMenu">\u{1F3E0} \u0627\u0644\u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629</button></div>
</div>

<!-- PASSWORD GATE -->
<div class="screen" id="scrPass" style="justify-content:center">
  <div style="font-size:46px">\u{1F512}</div>
  <h1 class="title" style="font-size:28px">\u0627\u0644\u062A\u062D\u0631\u064A\u0631 \u0648\u0627\u0644\u062A\u062D\u062F\u064A\u062B</h1>
  <div class="card" style="width:min(430px,94vw)">
    <div id="passSetBox" style="display:none">
      <h2>\u062A\u0639\u064A\u064A\u0646 \u0643\u0644\u0645\u0629 \u0633\u0631</h2>
      <p style="color:var(--dim);font-size:14px">\u062F\u064A \u0623\u0648\u0644 \u0645\u0631\u0629 \u062A\u0641\u062A\u062D \u0627\u0644\u0644\u0648\u062D\u0629 \u0639\u0644\u0649 \u0627\u0644\u062C\u0647\u0627\u0632 \u062F\u0647. \u0627\u062E\u062A\u0627\u0631 \u0643\u0644\u0645\u0629 \u0633\u0631 \u0645\u0646 \u0639\u0646\u062F\u0643 \u2014 \u0647\u062A\u062A\u062D\u0641\u0638 \u0645\u0634\u0641\u0651\u0631\u0629 (\u0647\u0627\u0634) \u0639\u0644\u0649 \u0627\u0644\u062C\u0647\u0627\u0632 \u0628\u0633\u060C \u0648\u0645\u062D\u062F\u0634 \u0647\u064A\u0642\u062F\u0631 \u064A\u0641\u062A\u062D \u0627\u0644\u0644\u0648\u062D\u0629 \u0645\u0646 \u063A\u064A\u0631\u0647\u0627.</p>
      <input class="fld" type="password" id="passNew" placeholder="\u0643\u0644\u0645\u0629 \u0627\u0644\u0633\u0631 \u0627\u0644\u062C\u062F\u064A\u062F\u0629" autocomplete="new-password">
      <input class="fld" type="password" id="passNew2" placeholder="\u0623\u0643\u0651\u062F \u0643\u0644\u0645\u0629 \u0627\u0644\u0633\u0631" autocomplete="new-password">
      <div class="err" id="passSetErr"></div>
      <button class="mbtn primary" id="btnPassSet" style="width:100%">\u2714 \u062A\u0639\u064A\u064A\u0646 \u0643\u0644\u0645\u0629 \u0627\u0644\u0633\u0631 \u0648\u0641\u062A\u062D \u0627\u0644\u0644\u0648\u062D\u0629</button>
    </div>
    <div id="passUnlockBox" style="display:none">
      <h2>\u0627\u0644\u0644\u0648\u062D\u0629 \u0645\u0642\u0641\u0648\u0644\u0629</h2>
      <p style="color:var(--dim);font-size:14px">\u062F\u062E\u0651\u0644 \u0643\u0644\u0645\u0629 \u0633\u0631 \u0627\u0644\u0644\u0648\u062D\u0629 \u0639\u0634\u0627\u0646 \u062A\u0643\u0645\u0644.</p>
      <input class="fld" type="password" id="passIn" placeholder="\u0643\u0644\u0645\u0629 \u0627\u0644\u0633\u0631" autocomplete="current-password">
      <div class="err" id="passErr"></div>
      <button class="mbtn primary" id="btnPassGo" style="width:100%">\u{1F513} \u0641\u062A\u062D \u0627\u0644\u0644\u0648\u062D\u0629</button>
    </div>
    <button class="mbtn" id="btnPassBack" style="width:100%;margin-top:10px">\u2192 \u0631\u062C\u0648\u0639</button>
  </div>
</div>

<!-- EDITOR -->
<div class="screen" id="scrEditor">
  <h1 class="title" style="font-size:28px">\u{1F6E0}\uFE0F \u0627\u0644\u062A\u062D\u0631\u064A\u0631 \u0648\u0627\u0644\u062A\u062D\u062F\u064A\u062B</h1>
  <p class="ednote">\u0627\u0644\u0644\u0648\u062D\u0629 \u062F\u064A \u0644\u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u0625\u0639\u062F\u0627\u062F\u0627\u062A \u0648\u0627\u0644\u0623\u0639\u062F\u0627\u0621 \u0648\u0627\u0644\u0644\u0627\u0639\u0628 \u0648\u0641\u062A\u062D \u0627\u0644\u0645\u0647\u0645\u0627\u062A \u0648\u0625\u0636\u0627\u0641\u0629 \u0639\u0646\u0627\u0635\u0631 \u0633\u0627\u062A\u0631 \u062C\u0648\u0647 \u0627\u0644\u0645\u0647\u0645\u0627\u062A \u2014 <b>\u0645\u0634 \u0645\u062D\u0631\u0631 \u0645\u0631\u0627\u062D\u0644 \u0643\u0627\u0645\u0644</b>. \u0643\u0644 \u062A\u0639\u062F\u064A\u0644 \u0628\u064A\u0637\u0628\u0642 \u0641\u0648\u0631\u0627\u064B \u0648\u0628\u064A\u062A\u062D\u0641\u0638 \u0639\u0644\u0649 \u0627\u0644\u062C\u0647\u0627\u0632 \u062F\u0647 \u0628\u0633 (localStorage). \u0648\u0627\u0644\u0642\u0641\u0644 \u062D\u0645\u0627\u064A\u0629 \u0639\u0645\u0644\u064A\u0629 \u0636\u062F \u0623\u064A \u062D\u062F \u064A\u0641\u062A\u062D \u0627\u0644\u0644\u064A\u0646\u0643 \u0639\u0644\u0649 \u0627\u0644\u062C\u0647\u0627\u0632 \u062F\u0647 \u2014 \u0645\u0634 \u062D\u0645\u0627\u064A\u0629 \u0628\u0645\u0633\u062A\u0648\u0649 \u0627\u0644\u062E\u0648\u0627\u062F\u0645.</p>
  <div id="editorBody" style="width:min(680px,96vw);margin-top:12px"></div>
  <div class="card" style="margin-top:12px">
    <h2>\u{1F511} \u062A\u063A\u064A\u064A\u0631 \u0643\u0644\u0645\u0629 \u0627\u0644\u0633\u0631</h2>
    <input class="fld" type="password" id="cpCur" placeholder="\u0643\u0644\u0645\u0629 \u0627\u0644\u0633\u0631 \u0627\u0644\u062D\u0627\u0644\u064A\u0629" autocomplete="current-password">
    <input class="fld" type="password" id="cpNew" placeholder="\u0643\u0644\u0645\u0629 \u0627\u0644\u0633\u0631 \u0627\u0644\u062C\u062F\u064A\u062F\u0629" autocomplete="new-password">
    <input class="fld" type="password" id="cpNew2" placeholder="\u0623\u0643\u0651\u062F \u0643\u0644\u0645\u0629 \u0627\u0644\u0633\u0631 \u0627\u0644\u062C\u062F\u064A\u062F\u0629" autocomplete="new-password">
    <div class="err" id="cpErr"></div><div class="okmsg" id="cpOk"></div>
    <button class="mbtn" id="btnChangePass" style="width:100%">\u062A\u063A\u064A\u064A\u0631 \u0643\u0644\u0645\u0629 \u0627\u0644\u0633\u0631</button>
  </div>
  <div class="menu" style="margin-top:12px">
    <button class="mbtn" id="btnEdWipeAll" style="border-color:#a33;color:#ff9a8a">\u267B\uFE0F \u0625\u0639\u0627\u062F\u0629 \u0643\u0644 \u0634\u064A\u0621 \u0644\u0644\u0627\u0641\u062A\u0631\u0627\u0636\u064A</button>
    <button class="mbtn" id="btnEdLock">\u{1F512} \u0642\u0641\u0644 \u0627\u0644\u0644\u0648\u062D\u0629</button>
    <button class="mbtn primary" id="btnEdBack">\u2714 \u062A\u0645 \u2014 \u0631\u062C\u0648\u0639</button>
  </div>
</div>

<!-- GAME -->
<div id="gameWrap">
  <div id="hud">
    <div id="compass">\u0634\u0645\u0627\u0644 \u2022 \u2022 \u2022 \u0634\u0631\u0642 \u2022 \u2022 \u2022 \u062C\u0646\u0648\u0628 \u2022 \u2022 \u2022 \u063A\u0631\u0628</div>
    <div id="objBox"><div id="objText"></div><div id="objDist"></div></div>
    <div id="timerBox">\u23F1\uFE0F <span id="timerNum">0</span></div>
    <div id="convoyBox"></div>
    <div id="killfeed"></div>
    <div id="hpWrap"><div id="hpBarBg"><div id="hpBar"></div></div><div id="hpNum">\u0627\u0644\u0635\u062D\u0629 100</div></div>
    <div id="ammoBox"><div><span id="ammoBig">30</span> <span id="ammoRes">/ 120</span></div><div id="wpnName">\u0628\u0646\u062F\u0642\u064A\u0629 \u0647\u062C\u0648\u0645\u064A\u0629</div></div>
    <div id="cross">\uFF0B</div><div id="hitmark">\u2715</div>
    <div id="subtitle"></div>
    <div id="interactHint"></div>
    <div id="progWrap"><div id="progBg"><div id="progBar"></div></div></div>
    <div id="vignette"></div><div id="scope"></div><div id="nvTint"></div>
    <div id="joyBase"><div id="joyKnob"></div></div>
    <button class="tbtn" id="btnPause">II</button>
    <button class="tbtn" id="btnFire">\u0646\u0627\u0631</button>
    <button class="tbtn" id="btnAds">\u062A\u0635\u0648\u064A\u0628</button>
    <button class="tbtn" id="btnReload">\u062A\u0644\u0642\u064A\u0645</button>
    <button class="tbtn" id="btnJump">\u0627\u0642\u0641\u0632</button>
    <button class="tbtn" id="btnCrouch">\u0627\u0646\u062D\u0646\u064A</button>
    <button class="tbtn" id="btnNade">\u0642\u0646\u0628\u0644\u0629 3</button>
    <button class="tbtn" id="btnInteract">\u0627\u0633\u062A\u062E\u062F\u0645</button>
    <button class="tbtn" id="btnNV">\u0631\u0624\u064A\u0629 \u0644\u064A\u0644\u064A\u0629</button>
  </div>
</div>`;var A0={};Dg(A0,{ACESFilmicToneMapping:()=>Gp,AddEquation:()=>xn,AddOperation:()=>Np,AdditiveAnimationBlendMode:()=>Yd,AdditiveBlending:()=>Lg,AgXToneMapping:()=>zp,AlphaFormat:()=>pP,AlwaysCompare:()=>WP,AlwaysDepth:()=>tP,AlwaysStencilFunc:()=>XP,AmbientLight:()=>Pl,AnimationAction:()=>wl,AnimationClip:()=>zi,AnimationLoader:()=>Ad,AnimationMixer:()=>Cl,AnimationObjectGroup:()=>hd,AnimationUtils:()=>pM,ArcCurve:()=>kU,ArrayCamera:()=>SU,ArrowHelper:()=>Qd,AttachedBindMode:()=>_c,Audio:()=>vl,AudioAnalyser:()=>dd,AudioContext:()=>qs,AudioListener:()=>cd,AudioLoader:()=>Ud,AxesHelper:()=>Hd,BackSide:()=>Ht,BasicDepthPacking:()=>BP,BasicShadowMap:()=>Cg,BatchedMesh:()=>NU,Bone:()=>vr,BooleanKeyframeTrack:()=>ln,Box2:()=>Id,Box3:()=>Ut,Box3Helper:()=>xd,BoxGeometry:()=>Br,BoxHelper:()=>Sd,BufferAttribute:()=>pA,BufferGeometry:()=>AA,BufferGeometryLoader:()=>El,ByteType:()=>dP,Cache:()=>pn,Camera:()=>ba,CameraHelper:()=>Rd,CanvasTexture:()=>Wu,CapsuleGeometry:()=>YU,CatmullRomCurve3:()=>XU,CineonToneMapping:()=>Op,CircleGeometry:()=>ZU,ClampToEdgeWrapping:()=>wt,Clock:()=>bl,Color:()=>Re,ColorKeyframeTrack:()=>zs,ColorManagement:()=>DA,CompressedArrayTexture:()=>Zu,CompressedCubeTexture:()=>Ku,CompressedTexture:()=>Sa,CompressedTextureLoader:()=>td,ConeGeometry:()=>KU,ConstantAlphaFactor:()=>$g,ConstantColorFactor:()=>qg,CubeCamera:()=>CU,CubeReflectionMapping:()=>Pn,CubeRefractionMapping:()=>Jn,CubeTexture:()=>Er,CubeTextureLoader:()=>id,CubeUVReflectionMapping:()=>Ja,CubicBezierCurve:()=>Ls,CubicBezierCurve3:()=>OU,CubicInterpolant:()=>pl,CullFaceBack:()=>vg,CullFaceFront:()=>yg,CullFaceFrontBack:()=>wg,CullFaceNone:()=>bg,Curve:()=>Ai,CurvePath:()=>zU,CustomBlending:()=>jg,CustomToneMapping:()=>Vp,CylinderGeometry:()=>La,Cylindrical:()=>Md,Data3DTexture:()=>Bs,DataArrayTexture:()=>Ia,DataTexture:()=>mn,DataTextureLoader:()=>nd,DataUtils:()=>TT,DecrementStencilOp:()=>RP,DecrementWrapStencilOp:()=>xP,DefaultLoadingManager:()=>df,DepthFormat:()=>Hn,DepthStencilFormat:()=>Mr,DepthTexture:()=>Cs,DetachedBindMode:()=>Yp,DirectionalLight:()=>ja,DirectionalLightHelper:()=>Cd,DiscreteInterpolant:()=>fl,DisplayP3ColorSpace:()=>Ll,DodecahedronGeometry:()=>WU,DoubleSide:()=>Fd,DstAlphaFactor:()=>zg,DstColorFactor:()=>Zg,DynamicCopyUsage:()=>iT,DynamicDrawUsage:()=>qP,DynamicReadUsage:()=>eT,EdgesGeometry:()=>qU,EllipseCurve:()=>xa,EqualCompare:()=>VP,EqualDepth:()=>rP,EqualStencilFunc:()=>jP,EquirectangularReflectionMapping:()=>ps,EquirectangularRefractionMapping:()=>fs,Euler:()=>Es,EventDispatcher:()=>Ri,ExtrudeGeometry:()=>_U,FileLoader:()=>Ot,Float16BufferAttribute:()=>Qu,Float32BufferAttribute:()=>Oe,Float64BufferAttribute:()=>Hu,FloatType:()=>wi,Fog:()=>HU,FogExp2:()=>QU,FramebufferTexture:()=>Yu,FrontSide:()=>Ci,Frustum:()=>br,GLBufferAttribute:()=>gd,GLSL1:()=>rT,GLSL3:()=>Bu,GreaterCompare:()=>YP,GreaterDepth:()=>sP,GreaterEqualCompare:()=>KP,GreaterEqualDepth:()=>aP,GreaterEqualStencilFunc:()=>kP,GreaterStencilFunc:()=>FP,GridHelper:()=>yd,Group:()=>di,HalfFloatType:()=>Ta,HemisphereLight:()=>gl,HemisphereLightHelper:()=>vd,IcosahedronGeometry:()=>$U,ImageBitmapLoader:()=>Ws,ImageLoader:()=>Rr,ImageUtils:()=>Is,IncrementStencilOp:()=>CP,IncrementWrapStencilOp:()=>SP,InstancedBufferAttribute:()=>Si,InstancedBufferGeometry:()=>Bl,InstancedInterleavedBuffer:()=>md,InstancedMesh:()=>wa,Int16BufferAttribute:()=>xu,Int32BufferAttribute:()=>Lu,Int8BufferAttribute:()=>Cu,IntType:()=>Nd,InterleavedBuffer:()=>Dn,InterleavedBufferAttribute:()=>Gi,Interpolant:()=>Mn,InterpolateDiscrete:()=>Ir,InterpolateLinear:()=>Fn,InterpolateSmooth:()=>BU,InvertStencilOp:()=>LP,KeepStencilOp:()=>hr,KeyframeTrack:()=>$t,LOD:()=>FU,LatheGeometry:()=>Fs,Layers:()=>Ba,LessCompare:()=>GP,LessDepth:()=>iP,LessEqualCompare:()=>zP,LessEqualDepth:()=>nP,LessEqualStencilFunc:()=>JP,LessStencilFunc:()=>HP,Light:()=>Yi,LightProbe:()=>Ml,Line:()=>fi,Line3:()=>Bd,LineBasicMaterial:()=>ut,LineCurve:()=>Qs,LineCurve3:()=>GU,LineDashedMaterial:()=>hl,LineLoop:()=>Ca,LineSegments:()=>kt,LinearDisplayP3ColorSpace:()=>Ao,LinearEncoding:()=>Kd,LinearFilter:()=>kA,LinearInterpolant:()=>Vs,LinearMipMapLinearFilter:()=>uP,LinearMipMapNearestFilter:()=>cP,LinearMipmapLinearFilter:()=>Oi,LinearMipmapNearestFilter:()=>$s,LinearSRGBColorSpace:()=>at,LinearToneMapping:()=>kp,LinearTransfer:()=>gs,Loader:()=>pt,LoaderUtils:()=>Li,LoadingManager:()=>Ys,LoopOnce:()=>DP,LoopPingPong:()=>IP,LoopRepeat:()=>MP,LuminanceAlphaFormat:()=>mP,LuminanceFormat:()=>fP,MOUSE:()=>Bg,Material:()=>WA,MaterialLoader:()=>Il,MathUtils:()=>Wd,Matrix3:()=>oA,Matrix4:()=>Ze,MaxEquation:()=>kg,Mesh:()=>OA,MeshBasicMaterial:()=>Ct,MeshDepthMaterial:()=>Rs,MeshDistanceMaterial:()=>Ss,MeshLambertMaterial:()=>ul,MeshMatcapMaterial:()=>dl,MeshNormalMaterial:()=>cl,MeshPhongMaterial:()=>Ul,MeshPhysicalMaterial:()=>Xt,MeshStandardMaterial:()=>Gn,MeshToonMaterial:()=>ll,MinEquation:()=>Ng,MirroredRepeatWrapping:()=>Dr,MixOperation:()=>Fp,MultiplyBlending:()=>Hg,MultiplyOperation:()=>_s,NearestFilter:()=>At,NearestMipMapLinearFilter:()=>lP,NearestMipMapNearestFilter:()=>UP,NearestMipmapLinearFilter:()=>Pr,NearestMipmapNearestFilter:()=>Pa,NeverCompare:()=>OP,NeverDepth:()=>AP,NeverStencilFunc:()=>QP,NoBlending:()=>Sg,NoColorSpace:()=>yi,NoToneMapping:()=>fn,NormalAnimationBlendMode:()=>Zp,NormalBlending:()=>xg,NotEqualCompare:()=>ZP,NotEqualDepth:()=>oP,NotEqualStencilFunc:()=>NP,NumberKeyframeTrack:()=>Vi,Object3D:()=>PA,ObjectLoader:()=>od,ObjectSpaceNormalMap:()=>vP,OctahedronGeometry:()=>Os,OneFactor:()=>Og,OneMinusConstantAlphaFactor:()=>eP,OneMinusConstantColorFactor:()=>_g,OneMinusDstAlphaFactor:()=>Yg,OneMinusDstColorFactor:()=>Kg,OneMinusSrcAlphaFactor:()=>bU,OneMinusSrcColorFactor:()=>Vg,OrthographicCamera:()=>Xn,P3Primaries:()=>Ts,PCFShadowMap:()=>Jd,PCFSoftShadowMap:()=>Jp,PMREMGenerator:()=>ws,Path:()=>wr,PerspectiveCamera:()=>tt,Plane:()=>ki,PlaneGeometry:()=>ys,PlaneHelper:()=>Ld,PointLight:()=>Ha,PointLightHelper:()=>bd,Points:()=>Ra,PointsMaterial:()=>yr,PolarGridHelper:()=>wd,PolyhedronGeometry:()=>On,PositionalAudio:()=>ud,PropertyBinding:()=>MA,PropertyMixer:()=>yl,QuadraticBezierCurve:()=>Hs,QuadraticBezierCurve3:()=>js,Quaternion:()=>nt,QuaternionKeyframeTrack:()=>hi,QuaternionLinearInterpolant:()=>ml,RED_GREEN_RGTC2_Format:()=>Mu,RED_RGTC1_Format:()=>TP,REVISION:()=>Ig,RGBADepthPacking:()=>EP,RGBAFormat:()=>qt,RGBAIntegerFormat:()=>Vd,RGBA_ASTC_10x10_Format:()=>fu,RGBA_ASTC_10x5_Format:()=>du,RGBA_ASTC_10x6_Format:()=>hu,RGBA_ASTC_10x8_Format:()=>pu,RGBA_ASTC_12x10_Format:()=>mu,RGBA_ASTC_12x12_Format:()=>gu,RGBA_ASTC_4x4_Format:()=>ru,RGBA_ASTC_5x4_Format:()=>au,RGBA_ASTC_5x5_Format:()=>su,RGBA_ASTC_6x5_Format:()=>ou,RGBA_ASTC_6x6_Format:()=>Uu,RGBA_ASTC_8x5_Format:()=>lu,RGBA_ASTC_8x6_Format:()=>cu,RGBA_ASTC_8x8_Format:()=>uu,RGBA_BPTC_Format:()=>IU,RGBA_ETC2_EAC_Format:()=>nu,RGBA_PVRTC_2BPPV1_Format:()=>tu,RGBA_PVRTC_4BPPV1_Format:()=>Au,RGBA_S3TC_DXT1_Format:()=>TU,RGBA_S3TC_DXT3_Format:()=>DU,RGBA_S3TC_DXT5_Format:()=>MU,RGB_BPTC_SIGNED_Format:()=>Pu,RGB_BPTC_UNSIGNED_Format:()=>Tu,RGB_ETC1_Format:()=>zd,RGB_ETC2_Format:()=>iu,RGB_PVRTC_2BPPV1_Format:()=>eu,RGB_PVRTC_4BPPV1_Format:()=>$c,RGB_S3TC_DXT1_Format:()=>PU,RGFormat:()=>PP,RGIntegerFormat:()=>Gd,RawShaderMaterial:()=>ol,Ray:()=>kn,Raycaster:()=>Pd,Rec709Primaries:()=>Ps,RectAreaLight:()=>Tl,RedFormat:()=>gP,RedIntegerFormat:()=>Od,ReinhardToneMapping:()=>Xp,RenderTarget:()=>wU,RepeatWrapping:()=>Tn,ReplaceStencilOp:()=>wP,ReverseSubtractEquation:()=>Fg,RingGeometry:()=>el,SIGNED_RED_GREEN_RGTC2_Format:()=>Iu,SIGNED_RED_RGTC1_Format:()=>Du,SRGBColorSpace:()=>QA,SRGBTransfer:()=>SA,Scene:()=>jU,ShaderChunk:()=>nA,ShaderLib:()=>vi,ShaderMaterial:()=>pi,ShadowMaterial:()=>sl,Shape:()=>gn,ShapeGeometry:()=>Al,ShapePath:()=>jd,ShapeUtils:()=>Xi,ShortType:()=>hP,Skeleton:()=>ya,SkeletonHelper:()=>Rl,SkinnedMesh:()=>va,Source:()=>dn,Sphere:()=>rt,SphereGeometry:()=>Gs,Spherical:()=>Dd,SphericalHarmonics3:()=>Dl,SplineCurve:()=>Js,SpotLight:()=>Qa,SpotLightHelper:()=>Ed,Sprite:()=>JU,SpriteMaterial:()=>xs,SrcAlphaFactor:()=>EU,SrcAlphaSaturateFactor:()=>Wg,SrcColorFactor:()=>Gg,StaticCopyUsage:()=>tT,StaticDrawUsage:()=>Ds,StaticReadUsage:()=>$P,StereoCamera:()=>ld,StreamCopyUsage:()=>nT,StreamDrawUsage:()=>_P,StreamReadUsage:()=>AT,StringKeyframeTrack:()=>cn,SubtractEquation:()=>Jg,SubtractiveBlending:()=>Qg,TOUCH:()=>Eg,TangentSpaceNormalMap:()=>bP,TetrahedronGeometry:()=>tl,Texture:()=>KA,TextureLoader:()=>Zs,TorusGeometry:()=>il,TorusKnotGeometry:()=>nl,Triangle:()=>hn,TriangleFanDrawMode:()=>Fa,TriangleStripDrawMode:()=>eo,TrianglesDrawMode:()=>Zd,TubeGeometry:()=>rl,TwoPassDoubleSide:()=>Rg,UVMapping:()=>Sl,Uint16BufferAttribute:()=>bs,Uint32BufferAttribute:()=>vs,Uint8BufferAttribute:()=>Ru,Uint8ClampedBufferAttribute:()=>Su,Uniform:()=>pd,UniformsGroup:()=>fd,UniformsLib:()=>we,UniformsUtils:()=>$p,UnsignedByteType:()=>Ln,UnsignedInt248Type:()=>Qn,UnsignedIntType:()=>un,UnsignedShort4444Type:()=>kd,UnsignedShort5551Type:()=>Xd,UnsignedShortType:()=>xl,VSMShadowMap:()=>Ni,Vector2:()=>Te,Vector3:()=>S,Vector4:()=>bA,VectorKeyframeTrack:()=>xi,VideoTexture:()=>zu,WebGL1Renderer:()=>LU,WebGL3DRenderTarget:()=>yu,WebGLArrayRenderTarget:()=>vu,WebGLCoordinateSystem:()=>Nn,WebGLCubeRenderTarget:()=>RU,WebGLMultipleRenderTargets:()=>wu,WebGLRenderTarget:()=>ei,WebGLRenderer:()=>xU,WebGLUtils:()=>sf,WebGPUCoordinateSystem:()=>Da,WireframeGeometry:()=>al,WrapAroundEnding:()=>ms,ZeroCurvatureEnding:()=>fr,ZeroFactor:()=>Xg,ZeroSlopeEnding:()=>mr,ZeroStencilOp:()=>yP,_SRGBAFormat:()=>vU,createCanvasElement:()=>Wp,sRGBEncoding:()=>jn});var Ig="160",Bg={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Eg={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},bg=0,vg=1,yg=2,wg=3,Cg=0,Jd=1,Jp=2,Ni=3,Ci=0,Ht=1,Fd=2,Rg=2,Sg=0,xg=1,Lg=2,Qg=3,Hg=4,jg=5,xn=100,Jg=101,Fg=102,Ng=103,kg=104,Xg=200,Og=201,Gg=202,Vg=203,EU=204,bU=205,zg=206,Yg=207,Zg=208,Kg=209,Wg=210,qg=211,_g=212,$g=213,eP=214,AP=0,tP=1,iP=2,nP=3,rP=4,aP=5,sP=6,oP=7,_s=0,Fp=1,Np=2,fn=0,kp=1,Xp=2,Op=3,Gp=4,Vp=5,zp=6,_c="attached",Yp="detached",Sl=300,Pn=301,Jn=302,ps=303,fs=304,Ja=306,Tn=1e3,wt=1001,Dr=1002,At=1003,Pa=1004,UP=1004,Pr=1005,lP=1005,kA=1006,$s=1007,cP=1007,Oi=1008,uP=1008,Ln=1009,dP=1010,hP=1011,xl=1012,Nd=1013,un=1014,wi=1015,Ta=1016,kd=1017,Xd=1018,Qn=1020,pP=1021,qt=1023,fP=1024,mP=1025,Hn=1026,Mr=1027,gP=1028,Od=1029,PP=1030,Gd=1031,Vd=1033,PU=33776,TU=33777,DU=33778,MU=33779,$c=35840,eu=35841,Au=35842,tu=35843,zd=36196,iu=37492,nu=37496,ru=37808,au=37809,su=37810,ou=37811,Uu=37812,lu=37813,cu=37814,uu=37815,du=37816,hu=37817,pu=37818,fu=37819,mu=37820,gu=37821,IU=36492,Pu=36494,Tu=36495,TP=36283,Du=36284,Mu=36285,Iu=36286,DP=2200,MP=2201,IP=2202,Ir=2300,Fn=2301,BU=2302,fr=2400,mr=2401,ms=2402,Zp=2500,Yd=2501,Zd=0,eo=1,Fa=2,Kd=3e3,jn=3001,BP=3200,EP=3201,bP=0,vP=1,yi="",QA="srgb",at="srgb-linear",Ll="display-p3",Ao="display-p3-linear",gs="linear",SA="srgb",Ps="rec709",Ts="p3",yP=0,hr=7680,wP=7681,CP=7682,RP=7683,SP=34055,xP=34056,LP=5386,QP=512,HP=513,jP=514,JP=515,FP=516,NP=517,kP=518,XP=519,OP=512,GP=513,VP=514,zP=515,YP=516,ZP=517,KP=518,WP=519,Ds=35044,qP=35048,_P=35040,$P=35045,eT=35049,AT=35041,tT=35046,iT=35050,nT=35042,rT="100",Bu="300 es",vU=1035,Nn=2e3,Da=2001,Ri=class{addEventListener(e,A){this._listeners===void 0&&(this._listeners={});let t=this._listeners;t[e]===void 0&&(t[e]=[]),t[e].indexOf(A)===-1&&t[e].push(A)}hasEventListener(e,A){if(this._listeners===void 0)return!1;let t=this._listeners;return t[e]!==void 0&&t[e].indexOf(A)!==-1}removeEventListener(e,A){if(this._listeners===void 0)return;let t=this._listeners[e];if(t!==void 0){let i=t.indexOf(A);i!==-1&&t.splice(i,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let A=this._listeners[e.type];if(A!==void 0){e.target=this;let t=A.slice(0);for(let i=0,n=t.length;i<n;i++)t[i].call(this,e);e.target=null}}},bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],oh=1234567,Tr=Math.PI/180,Ma=180/Math.PI;function _t(){let a=4294967295*Math.random()|0,e=4294967295*Math.random()|0,A=4294967295*Math.random()|0,t=4294967295*Math.random()|0;return(bt[255&a]+bt[a>>8&255]+bt[a>>16&255]+bt[a>>24&255]+"-"+bt[255&e]+bt[e>>8&255]+"-"+bt[e>>16&15|64]+bt[e>>24&255]+"-"+bt[63&A|128]+bt[A>>8&255]+"-"+bt[A>>16&255]+bt[A>>24&255]+bt[255&t]+bt[t>>8&255]+bt[t>>16&255]+bt[t>>24&255]).toLowerCase()}function ZA(a,e,A){return Math.max(e,Math.min(A,a))}function Eu(a,e){return(a%e+e)%e}function ls(a,e,A){return(1-A)*a+A*e}function bu(a){return(a&a-1)==0&&a!==0}function yU(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}function Nt(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function rA(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return Math.round(4294967295*a);case Uint16Array:return Math.round(65535*a);case Uint8Array:return Math.round(255*a);case Int32Array:return Math.round(2147483647*a);case Int16Array:return Math.round(32767*a);case Int8Array:return Math.round(127*a);default:throw new Error("Invalid component type.")}}var Wd={DEG2RAD:Tr,RAD2DEG:Ma,generateUUID:_t,clamp:ZA,euclideanModulo:Eu,mapLinear:function(a,e,A,t,i){return t+(a-e)*(i-t)/(A-e)},inverseLerp:function(a,e,A){return a!==e?(A-a)/(e-a):0},lerp:ls,damp:function(a,e,A,t){return ls(a,e,1-Math.exp(-A*t))},pingpong:function(a,e=1){return e-Math.abs(Eu(a,2*e)-e)},smoothstep:function(a,e,A){return a<=e?0:a>=A?1:(a=(a-e)/(A-e))*a*(3-2*a)},smootherstep:function(a,e,A){return a<=e?0:a>=A?1:(a=(a-e)/(A-e))*a*a*(a*(6*a-15)+10)},randInt:function(a,e){return a+Math.floor(Math.random()*(e-a+1))},randFloat:function(a,e){return a+Math.random()*(e-a)},randFloatSpread:function(a){return a*(.5-Math.random())},seededRandom:function(a){a!==void 0&&(oh=a);let e=oh+=1831565813;return e=Math.imul(e^e>>>15,1|e),e^=e+Math.imul(e^e>>>7,61|e),((e^e>>>14)>>>0)/4294967296},degToRad:function(a){return a*Tr},radToDeg:function(a){return a*Ma},isPowerOfTwo:bu,ceilPowerOfTwo:function(a){return Math.pow(2,Math.ceil(Math.log(a)/Math.LN2))},floorPowerOfTwo:yU,setQuaternionFromProperEuler:function(a,e,A,t,i){let n=Math.cos,r=Math.sin,s=n(A/2),U=r(A/2),o=n((e+t)/2),l=r((e+t)/2),c=n((e-t)/2),u=r((e-t)/2),h=n((t-e)/2),p=r((t-e)/2);switch(i){case"XYX":a.set(s*l,U*c,U*u,s*o);break;case"YZY":a.set(U*u,s*l,U*c,s*o);break;case"ZXZ":a.set(U*c,U*u,s*l,s*o);break;case"XZX":a.set(s*l,U*p,U*h,s*o);break;case"YXY":a.set(U*h,s*l,U*p,s*o);break;case"ZYZ":a.set(U*p,U*h,s*l,s*o);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}},normalize:rA,denormalize:Nt},Te=class a{constructor(e=0,A=0){a.prototype.isVector2=!0,this.x=e,this.y=A}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,A){return this.x=e,this.y=A,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,A){switch(e){case 0:this.x=A;break;case 1:this.y=A;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,A){return this.x=e.x+A.x,this.y=e.y+A.y,this}addScaledVector(e,A){return this.x+=e.x*A,this.y+=e.y*A,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,A){return this.x=e.x-A.x,this.y=e.y-A.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let A=this.x,t=this.y,i=e.elements;return this.x=i[0]*A+i[3]*t+i[6],this.y=i[1]*A+i[4]*t+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,A){return this.x=Math.max(e.x,Math.min(A.x,this.x)),this.y=Math.max(e.y,Math.min(A.y,this.y)),this}clampScalar(e,A){return this.x=Math.max(e,Math.min(A,this.x)),this.y=Math.max(e,Math.min(A,this.y)),this}clampLength(e,A){let t=this.length();return this.divideScalar(t||1).multiplyScalar(Math.max(e,Math.min(A,t)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let A=Math.sqrt(this.lengthSq()*e.lengthSq());if(A===0)return Math.PI/2;let t=this.dot(e)/A;return Math.acos(ZA(t,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let A=this.x-e.x,t=this.y-e.y;return A*A+t*t}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,A){return this.x+=(e.x-this.x)*A,this.y+=(e.y-this.y)*A,this}lerpVectors(e,A,t){return this.x=e.x+(A.x-e.x)*t,this.y=e.y+(A.y-e.y)*t,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,A=0){return this.x=e[A],this.y=e[A+1],this}toArray(e=[],A=0){return e[A]=this.x,e[A+1]=this.y,e}fromBufferAttribute(e,A){return this.x=e.getX(A),this.y=e.getY(A),this}rotateAround(e,A){let t=Math.cos(A),i=Math.sin(A),n=this.x-e.x,r=this.y-e.y;return this.x=n*t-r*i+e.x,this.y=n*i+r*t+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},oA=class a{constructor(e,A,t,i,n,r,s,U,o){a.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,A,t,i,n,r,s,U,o)}set(e,A,t,i,n,r,s,U,o){let l=this.elements;return l[0]=e,l[1]=i,l[2]=s,l[3]=A,l[4]=n,l[5]=U,l[6]=t,l[7]=r,l[8]=o,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let A=this.elements,t=e.elements;return A[0]=t[0],A[1]=t[1],A[2]=t[2],A[3]=t[3],A[4]=t[4],A[5]=t[5],A[6]=t[6],A[7]=t[7],A[8]=t[8],this}extractBasis(e,A,t){return e.setFromMatrix3Column(this,0),A.setFromMatrix3Column(this,1),t.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let A=e.elements;return this.set(A[0],A[4],A[8],A[1],A[5],A[9],A[2],A[6],A[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,A){let t=e.elements,i=A.elements,n=this.elements,r=t[0],s=t[3],U=t[6],o=t[1],l=t[4],c=t[7],u=t[2],h=t[5],p=t[8],f=i[0],m=i[3],M=i[6],T=i[1],D=i[4],b=i[7],L=i[2],y=i[5],x=i[8];return n[0]=r*f+s*T+U*L,n[3]=r*m+s*D+U*y,n[6]=r*M+s*b+U*x,n[1]=o*f+l*T+c*L,n[4]=o*m+l*D+c*y,n[7]=o*M+l*b+c*x,n[2]=u*f+h*T+p*L,n[5]=u*m+h*D+p*y,n[8]=u*M+h*b+p*x,this}multiplyScalar(e){let A=this.elements;return A[0]*=e,A[3]*=e,A[6]*=e,A[1]*=e,A[4]*=e,A[7]*=e,A[2]*=e,A[5]*=e,A[8]*=e,this}determinant(){let e=this.elements,A=e[0],t=e[1],i=e[2],n=e[3],r=e[4],s=e[5],U=e[6],o=e[7],l=e[8];return A*r*l-A*s*o-t*n*l+t*s*U+i*n*o-i*r*U}invert(){let e=this.elements,A=e[0],t=e[1],i=e[2],n=e[3],r=e[4],s=e[5],U=e[6],o=e[7],l=e[8],c=l*r-s*o,u=s*U-l*n,h=o*n-r*U,p=A*c+t*u+i*h;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let f=1/p;return e[0]=c*f,e[1]=(i*o-l*t)*f,e[2]=(s*t-i*r)*f,e[3]=u*f,e[4]=(l*A-i*U)*f,e[5]=(i*n-s*A)*f,e[6]=h*f,e[7]=(t*U-o*A)*f,e[8]=(r*A-t*n)*f,this}transpose(){let e,A=this.elements;return e=A[1],A[1]=A[3],A[3]=e,e=A[2],A[2]=A[6],A[6]=e,e=A[5],A[5]=A[7],A[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let A=this.elements;return e[0]=A[0],e[1]=A[3],e[2]=A[6],e[3]=A[1],e[4]=A[4],e[5]=A[7],e[6]=A[2],e[7]=A[5],e[8]=A[8],this}setUvTransform(e,A,t,i,n,r,s){let U=Math.cos(n),o=Math.sin(n);return this.set(t*U,t*o,-t*(U*r+o*s)+r+e,-i*o,i*U,-i*(-o*r+U*s)+s+A,0,0,1),this}scale(e,A){return this.premultiply(pc.makeScale(e,A)),this}rotate(e){return this.premultiply(pc.makeRotation(-e)),this}translate(e,A){return this.premultiply(pc.makeTranslation(e,A)),this}makeTranslation(e,A){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,A,0,0,1),this}makeRotation(e){let A=Math.cos(e),t=Math.sin(e);return this.set(A,-t,0,t,A,0,0,0,1),this}makeScale(e,A){return this.set(e,0,0,0,A,0,0,0,1),this}equals(e){let A=this.elements,t=e.elements;for(let i=0;i<9;i++)if(A[i]!==t[i])return!1;return!0}fromArray(e,A=0){for(let t=0;t<9;t++)this.elements[t]=e[t+A];return this}toArray(e=[],A=0){let t=this.elements;return e[A]=t[0],e[A+1]=t[1],e[A+2]=t[2],e[A+3]=t[3],e[A+4]=t[4],e[A+5]=t[5],e[A+6]=t[6],e[A+7]=t[7],e[A+8]=t[8],e}clone(){return new this.constructor().fromArray(this.elements)}},pc=new oA;function Kp(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}var aT={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function pa(a,e){return new aT[a](e)}function Ms(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function Wp(){let a=Ms("canvas");return a.style.display="block",a}var Uh={};function cs(a){a in Uh||(Uh[a]=!0,console.warn(a))}var lh=new oA().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ch=new oA().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),vo={[at]:{transfer:gs,primaries:Ps,toReference:a=>a,fromReference:a=>a},[QA]:{transfer:SA,primaries:Ps,toReference:a=>a.convertSRGBToLinear(),fromReference:a=>a.convertLinearToSRGB()},[Ao]:{transfer:gs,primaries:Ts,toReference:a=>a.applyMatrix3(ch),fromReference:a=>a.applyMatrix3(lh)},[Ll]:{transfer:SA,primaries:Ts,toReference:a=>a.convertSRGBToLinear().applyMatrix3(ch),fromReference:a=>a.applyMatrix3(lh).convertLinearToSRGB()}},sT=new Set([at,Ao]),DA={enabled:!0,_workingColorSpace:at,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(a){if(!sT.has(a))throw new Error(`Unsupported working color space, "${a}".`);this._workingColorSpace=a},convert:function(a,e,A){if(this.enabled===!1||e===A||!e||!A)return a;let t=vo[e].toReference;return(0,vo[A].fromReference)(t(a))},fromWorkingColorSpace:function(a,e){return this.convert(a,this._workingColorSpace,e)},toWorkingColorSpace:function(a,e){return this.convert(a,e,this._workingColorSpace)},getPrimaries:function(a){return vo[a].primaries},getTransfer:function(a){return a===yi?gs:vo[a].transfer}};function ma(a){return a<.04045?.0773993808*a:Math.pow(.9478672986*a+.0521327014,2.4)}function fc(a){return a<.0031308?12.92*a:1.055*Math.pow(a,.41666)-.055}var Zr,Is=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let A;if(e instanceof HTMLCanvasElement)A=e;else{Zr===void 0&&(Zr=Ms("canvas")),Zr.width=e.width,Zr.height=e.height;let t=Zr.getContext("2d");e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),A=Zr}return A.width>2048||A.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),A.toDataURL("image/jpeg",.6)):A.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){let A=Ms("canvas");A.width=e.width,A.height=e.height;let t=A.getContext("2d");t.drawImage(e,0,0,e.width,e.height);let i=t.getImageData(0,0,e.width,e.height),n=i.data;for(let r=0;r<n.length;r++)n[r]=255*ma(n[r]/255);return t.putImageData(i,0,0),A}if(e.data){let A=e.data.slice(0);for(let t=0;t<A.length;t++)A instanceof Uint8Array||A instanceof Uint8ClampedArray?A[t]=Math.floor(255*ma(A[t]/255)):A[t]=ma(A[t]);return{data:A,width:e.width,height:e.height}}return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},oT=0,dn=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:oT++}),this.uuid=_t(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let A=e===void 0||typeof e=="string";if(!A&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let t={uuid:this.uuid,url:""},i=this.data;if(i!==null){let n;if(Array.isArray(i)){n=[];for(let r=0,s=i.length;r<s;r++)i[r].isDataTexture?n.push(mc(i[r].image)):n.push(mc(i[r]))}else n=mc(i);t.url=n}return A||(e.images[this.uuid]=t),t}};function mc(a){return typeof HTMLImageElement!="undefined"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&a instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&a instanceof ImageBitmap?Is.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var UT=0,KA=class a extends Ri{constructor(e=a.DEFAULT_IMAGE,A=a.DEFAULT_MAPPING,t=1001,i=1001,n=1006,r=1008,s=1023,U=1009,o=a.DEFAULT_ANISOTROPY,l=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:UT++}),this.uuid=_t(),this.name="",this.source=new dn(e),this.mipmaps=[],this.mapping=A,this.channel=0,this.wrapS=t,this.wrapT=i,this.magFilter=n,this.minFilter=r,this.anisotropy=o,this.format=s,this.internalFormat=null,this.type=U,this.offset=new Te(0,0),this.repeat=new Te(1,1),this.center=new Te(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new oA,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof l=="string"?this.colorSpace=l:(cs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=l===jn?QA:yi),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let A=e===void 0||typeof e=="string";if(!A&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let t={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(t.userData=this.userData),A||(e.textures[this.uuid]=t),t}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Sl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Tn:e.x=e.x-Math.floor(e.x);break;case wt:e.x=e.x<0?0:1;break;case Dr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case Tn:e.y=e.y-Math.floor(e.y);break;case wt:e.y=e.y<0?0:1;break;case Dr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return cs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===QA?jn:Kd}set encoding(e){cs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===jn?QA:yi}};KA.DEFAULT_IMAGE=null,KA.DEFAULT_MAPPING=Sl,KA.DEFAULT_ANISOTROPY=1;var bA=class a{constructor(e=0,A=0,t=0,i=1){a.prototype.isVector4=!0,this.x=e,this.y=A,this.z=t,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,A,t,i){return this.x=e,this.y=A,this.z=t,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,A){switch(e){case 0:this.x=A;break;case 1:this.y=A;break;case 2:this.z=A;break;case 3:this.w=A;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,A){return this.x=e.x+A.x,this.y=e.y+A.y,this.z=e.z+A.z,this.w=e.w+A.w,this}addScaledVector(e,A){return this.x+=e.x*A,this.y+=e.y*A,this.z+=e.z*A,this.w+=e.w*A,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,A){return this.x=e.x-A.x,this.y=e.y-A.y,this.z=e.z-A.z,this.w=e.w-A.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let A=this.x,t=this.y,i=this.z,n=this.w,r=e.elements;return this.x=r[0]*A+r[4]*t+r[8]*i+r[12]*n,this.y=r[1]*A+r[5]*t+r[9]*i+r[13]*n,this.z=r[2]*A+r[6]*t+r[10]*i+r[14]*n,this.w=r[3]*A+r[7]*t+r[11]*i+r[15]*n,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let A=Math.sqrt(1-e.w*e.w);return A<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/A,this.y=e.y/A,this.z=e.z/A),this}setAxisAngleFromRotationMatrix(e){let A,t,i,n,U=e.elements,o=U[0],l=U[4],c=U[8],u=U[1],h=U[5],p=U[9],f=U[2],m=U[6],M=U[10];if(Math.abs(l-u)<.01&&Math.abs(c-f)<.01&&Math.abs(p-m)<.01){if(Math.abs(l+u)<.1&&Math.abs(c+f)<.1&&Math.abs(p+m)<.1&&Math.abs(o+h+M-3)<.1)return this.set(1,0,0,0),this;A=Math.PI;let D=(o+1)/2,b=(h+1)/2,L=(M+1)/2,y=(l+u)/4,x=(c+f)/4,X=(p+m)/4;return D>b&&D>L?D<.01?(t=0,i=.707106781,n=.707106781):(t=Math.sqrt(D),i=y/t,n=x/t):b>L?b<.01?(t=.707106781,i=0,n=.707106781):(i=Math.sqrt(b),t=y/i,n=X/i):L<.01?(t=.707106781,i=.707106781,n=0):(n=Math.sqrt(L),t=x/n,i=X/n),this.set(t,i,n,A),this}let T=Math.sqrt((m-p)*(m-p)+(c-f)*(c-f)+(u-l)*(u-l));return Math.abs(T)<.001&&(T=1),this.x=(m-p)/T,this.y=(c-f)/T,this.z=(u-l)/T,this.w=Math.acos((o+h+M-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,A){return this.x=Math.max(e.x,Math.min(A.x,this.x)),this.y=Math.max(e.y,Math.min(A.y,this.y)),this.z=Math.max(e.z,Math.min(A.z,this.z)),this.w=Math.max(e.w,Math.min(A.w,this.w)),this}clampScalar(e,A){return this.x=Math.max(e,Math.min(A,this.x)),this.y=Math.max(e,Math.min(A,this.y)),this.z=Math.max(e,Math.min(A,this.z)),this.w=Math.max(e,Math.min(A,this.w)),this}clampLength(e,A){let t=this.length();return this.divideScalar(t||1).multiplyScalar(Math.max(e,Math.min(A,t)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,A){return this.x+=(e.x-this.x)*A,this.y+=(e.y-this.y)*A,this.z+=(e.z-this.z)*A,this.w+=(e.w-this.w)*A,this}lerpVectors(e,A,t){return this.x=e.x+(A.x-e.x)*t,this.y=e.y+(A.y-e.y)*t,this.z=e.z+(A.z-e.z)*t,this.w=e.w+(A.w-e.w)*t,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,A=0){return this.x=e[A],this.y=e[A+1],this.z=e[A+2],this.w=e[A+3],this}toArray(e=[],A=0){return e[A]=this.x,e[A+1]=this.y,e[A+2]=this.z,e[A+3]=this.w,e}fromBufferAttribute(e,A){return this.x=e.getX(A),this.y=e.getY(A),this.z=e.getZ(A),this.w=e.getW(A),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},wU=class extends Ri{constructor(e=1,A=1,t={}){super(),this.isRenderTarget=!0,this.width=e,this.height=A,this.depth=1,this.scissor=new bA(0,0,e,A),this.scissorTest=!1,this.viewport=new bA(0,0,e,A);let i={width:e,height:A,depth:1};t.encoding!==void 0&&(cs("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===jn?QA:yi),t=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:kA,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},t),this.texture=new KA(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=t.generateMipmaps,this.texture.internalFormat=t.internalFormat,this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.depthTexture=t.depthTexture,this.samples=t.samples}setSize(e,A,t=1){this.width===e&&this.height===A&&this.depth===t||(this.width=e,this.height=A,this.depth=t,this.texture.image.width=e,this.texture.image.height=A,this.texture.image.depth=t,this.dispose()),this.viewport.set(0,0,e,A),this.scissor.set(0,0,e,A)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let A=Object.assign({},e.texture.image);return this.texture.source=new dn(A),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ei=class extends wU{constructor(e=1,A=1,t={}){super(e,A,t),this.isWebGLRenderTarget=!0}},Ia=class extends KA{constructor(e=null,A=1,t=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:A,height:t,depth:i},this.magFilter=At,this.minFilter=At,this.wrapR=wt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},vu=class extends ei{constructor(e=1,A=1,t=1,i={}){super(e,A,i),this.isWebGLArrayRenderTarget=!0,this.depth=t,this.texture=new Ia(null,e,A,t),this.texture.isRenderTargetTexture=!0}},Bs=class extends KA{constructor(e=null,A=1,t=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:A,height:t,depth:i},this.magFilter=At,this.minFilter=At,this.wrapR=wt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},yu=class extends ei{constructor(e=1,A=1,t=1,i={}){super(e,A,i),this.isWebGL3DRenderTarget=!0,this.depth=t,this.texture=new Bs(null,e,A,t),this.texture.isRenderTargetTexture=!0}},wu=class extends ei{constructor(e=1,A=1,t=1,i={}){super(e,A,i),this.isWebGLMultipleRenderTargets=!0;let n=this.texture;this.texture=[];for(let r=0;r<t;r++)this.texture[r]=n.clone(),this.texture[r].isRenderTargetTexture=!0}setSize(e,A,t=1){if(this.width!==e||this.height!==A||this.depth!==t){this.width=e,this.height=A,this.depth=t;for(let i=0,n=this.texture.length;i<n;i++)this.texture[i].image.width=e,this.texture[i].image.height=A,this.texture[i].image.depth=t;this.dispose()}this.viewport.set(0,0,e,A),this.scissor.set(0,0,e,A)}copy(e){this.dispose(),this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.texture.length=0;for(let A=0,t=e.texture.length;A<t;A++)this.texture[A]=e.texture[A].clone(),this.texture[A].isRenderTargetTexture=!0;return this}},nt=class{constructor(e=0,A=0,t=0,i=1){this.isQuaternion=!0,this._x=e,this._y=A,this._z=t,this._w=i}static slerpFlat(e,A,t,i,n,r,s){let U=t[i+0],o=t[i+1],l=t[i+2],c=t[i+3],u=n[r+0],h=n[r+1],p=n[r+2],f=n[r+3];if(s===0)return e[A+0]=U,e[A+1]=o,e[A+2]=l,void(e[A+3]=c);if(s===1)return e[A+0]=u,e[A+1]=h,e[A+2]=p,void(e[A+3]=f);if(c!==f||U!==u||o!==h||l!==p){let m=1-s,M=U*u+o*h+l*p+c*f,T=M>=0?1:-1,D=1-M*M;if(D>Number.EPSILON){let L=Math.sqrt(D),y=Math.atan2(L,M*T);m=Math.sin(m*y)/L,s=Math.sin(s*y)/L}let b=s*T;if(U=U*m+u*b,o=o*m+h*b,l=l*m+p*b,c=c*m+f*b,m===1-s){let L=1/Math.sqrt(U*U+o*o+l*l+c*c);U*=L,o*=L,l*=L,c*=L}}e[A]=U,e[A+1]=o,e[A+2]=l,e[A+3]=c}static multiplyQuaternionsFlat(e,A,t,i,n,r){let s=t[i],U=t[i+1],o=t[i+2],l=t[i+3],c=n[r],u=n[r+1],h=n[r+2],p=n[r+3];return e[A]=s*p+l*c+U*h-o*u,e[A+1]=U*p+l*u+o*c-s*h,e[A+2]=o*p+l*h+s*u-U*c,e[A+3]=l*p-s*c-U*u-o*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,A,t,i){return this._x=e,this._y=A,this._z=t,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,A=!0){let t=e._x,i=e._y,n=e._z,r=e._order,s=Math.cos,U=Math.sin,o=s(t/2),l=s(i/2),c=s(n/2),u=U(t/2),h=U(i/2),p=U(n/2);switch(r){case"XYZ":this._x=u*l*c+o*h*p,this._y=o*h*c-u*l*p,this._z=o*l*p+u*h*c,this._w=o*l*c-u*h*p;break;case"YXZ":this._x=u*l*c+o*h*p,this._y=o*h*c-u*l*p,this._z=o*l*p-u*h*c,this._w=o*l*c+u*h*p;break;case"ZXY":this._x=u*l*c-o*h*p,this._y=o*h*c+u*l*p,this._z=o*l*p+u*h*c,this._w=o*l*c-u*h*p;break;case"ZYX":this._x=u*l*c-o*h*p,this._y=o*h*c+u*l*p,this._z=o*l*p-u*h*c,this._w=o*l*c+u*h*p;break;case"YZX":this._x=u*l*c+o*h*p,this._y=o*h*c+u*l*p,this._z=o*l*p-u*h*c,this._w=o*l*c-u*h*p;break;case"XZY":this._x=u*l*c-o*h*p,this._y=o*h*c-u*l*p,this._z=o*l*p+u*h*c,this._w=o*l*c+u*h*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return A===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,A){let t=A/2,i=Math.sin(t);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(t),this._onChangeCallback(),this}setFromRotationMatrix(e){let A=e.elements,t=A[0],i=A[4],n=A[8],r=A[1],s=A[5],U=A[9],o=A[2],l=A[6],c=A[10],u=t+s+c;if(u>0){let h=.5/Math.sqrt(u+1);this._w=.25/h,this._x=(l-U)*h,this._y=(n-o)*h,this._z=(r-i)*h}else if(t>s&&t>c){let h=2*Math.sqrt(1+t-s-c);this._w=(l-U)/h,this._x=.25*h,this._y=(i+r)/h,this._z=(n+o)/h}else if(s>c){let h=2*Math.sqrt(1+s-t-c);this._w=(n-o)/h,this._x=(i+r)/h,this._y=.25*h,this._z=(U+l)/h}else{let h=2*Math.sqrt(1+c-t-s);this._w=(r-i)/h,this._x=(n+o)/h,this._y=(U+l)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,A){let t=e.dot(A)+1;return t<Number.EPSILON?(t=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=t):(this._x=0,this._y=-e.z,this._z=e.y,this._w=t)):(this._x=e.y*A.z-e.z*A.y,this._y=e.z*A.x-e.x*A.z,this._z=e.x*A.y-e.y*A.x,this._w=t),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ZA(this.dot(e),-1,1)))}rotateTowards(e,A){let t=this.angleTo(e);if(t===0)return this;let i=Math.min(1,A/t);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,A){let t=e._x,i=e._y,n=e._z,r=e._w,s=A._x,U=A._y,o=A._z,l=A._w;return this._x=t*l+r*s+i*o-n*U,this._y=i*l+r*U+n*s-t*o,this._z=n*l+r*o+t*U-i*s,this._w=r*l-t*s-i*U-n*o,this._onChangeCallback(),this}slerp(e,A){if(A===0)return this;if(A===1)return this.copy(e);let t=this._x,i=this._y,n=this._z,r=this._w,s=r*e._w+t*e._x+i*e._y+n*e._z;if(s<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,s=-s):this.copy(e),s>=1)return this._w=r,this._x=t,this._y=i,this._z=n,this;let U=1-s*s;if(U<=Number.EPSILON){let h=1-A;return this._w=h*r+A*this._w,this._x=h*t+A*this._x,this._y=h*i+A*this._y,this._z=h*n+A*this._z,this.normalize(),this}let o=Math.sqrt(U),l=Math.atan2(o,s),c=Math.sin((1-A)*l)/o,u=Math.sin(A*l)/o;return this._w=r*c+this._w*u,this._x=t*c+this._x*u,this._y=i*c+this._y*u,this._z=n*c+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,A,t){return this.copy(e).slerp(A,t)}random(){let e=Math.random(),A=Math.sqrt(1-e),t=Math.sqrt(e),i=2*Math.PI*Math.random(),n=2*Math.PI*Math.random();return this.set(A*Math.cos(i),t*Math.sin(n),t*Math.cos(n),A*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,A=0){return this._x=e[A],this._y=e[A+1],this._z=e[A+2],this._w=e[A+3],this._onChangeCallback(),this}toArray(e=[],A=0){return e[A]=this._x,e[A+1]=this._y,e[A+2]=this._z,e[A+3]=this._w,e}fromBufferAttribute(e,A){return this._x=e.getX(A),this._y=e.getY(A),this._z=e.getZ(A),this._w=e.getW(A),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},S=class a{constructor(e=0,A=0,t=0){a.prototype.isVector3=!0,this.x=e,this.y=A,this.z=t}set(e,A,t){return t===void 0&&(t=this.z),this.x=e,this.y=A,this.z=t,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,A){switch(e){case 0:this.x=A;break;case 1:this.y=A;break;case 2:this.z=A;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,A){return this.x=e.x+A.x,this.y=e.y+A.y,this.z=e.z+A.z,this}addScaledVector(e,A){return this.x+=e.x*A,this.y+=e.y*A,this.z+=e.z*A,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,A){return this.x=e.x-A.x,this.y=e.y-A.y,this.z=e.z-A.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,A){return this.x=e.x*A.x,this.y=e.y*A.y,this.z=e.z*A.z,this}applyEuler(e){return this.applyQuaternion(uh.setFromEuler(e))}applyAxisAngle(e,A){return this.applyQuaternion(uh.setFromAxisAngle(e,A))}applyMatrix3(e){let A=this.x,t=this.y,i=this.z,n=e.elements;return this.x=n[0]*A+n[3]*t+n[6]*i,this.y=n[1]*A+n[4]*t+n[7]*i,this.z=n[2]*A+n[5]*t+n[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let A=this.x,t=this.y,i=this.z,n=e.elements,r=1/(n[3]*A+n[7]*t+n[11]*i+n[15]);return this.x=(n[0]*A+n[4]*t+n[8]*i+n[12])*r,this.y=(n[1]*A+n[5]*t+n[9]*i+n[13])*r,this.z=(n[2]*A+n[6]*t+n[10]*i+n[14])*r,this}applyQuaternion(e){let A=this.x,t=this.y,i=this.z,n=e.x,r=e.y,s=e.z,U=e.w,o=2*(r*i-s*t),l=2*(s*A-n*i),c=2*(n*t-r*A);return this.x=A+U*o+r*c-s*l,this.y=t+U*l+s*o-n*c,this.z=i+U*c+n*l-r*o,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let A=this.x,t=this.y,i=this.z,n=e.elements;return this.x=n[0]*A+n[4]*t+n[8]*i,this.y=n[1]*A+n[5]*t+n[9]*i,this.z=n[2]*A+n[6]*t+n[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,A){return this.x=Math.max(e.x,Math.min(A.x,this.x)),this.y=Math.max(e.y,Math.min(A.y,this.y)),this.z=Math.max(e.z,Math.min(A.z,this.z)),this}clampScalar(e,A){return this.x=Math.max(e,Math.min(A,this.x)),this.y=Math.max(e,Math.min(A,this.y)),this.z=Math.max(e,Math.min(A,this.z)),this}clampLength(e,A){let t=this.length();return this.divideScalar(t||1).multiplyScalar(Math.max(e,Math.min(A,t)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,A){return this.x+=(e.x-this.x)*A,this.y+=(e.y-this.y)*A,this.z+=(e.z-this.z)*A,this}lerpVectors(e,A,t){return this.x=e.x+(A.x-e.x)*t,this.y=e.y+(A.y-e.y)*t,this.z=e.z+(A.z-e.z)*t,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,A){let t=e.x,i=e.y,n=e.z,r=A.x,s=A.y,U=A.z;return this.x=i*U-n*s,this.y=n*r-t*U,this.z=t*s-i*r,this}projectOnVector(e){let A=e.lengthSq();if(A===0)return this.set(0,0,0);let t=e.dot(this)/A;return this.copy(e).multiplyScalar(t)}projectOnPlane(e){return gc.copy(this).projectOnVector(e),this.sub(gc)}reflect(e){return this.sub(gc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let A=Math.sqrt(this.lengthSq()*e.lengthSq());if(A===0)return Math.PI/2;let t=this.dot(e)/A;return Math.acos(ZA(t,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let A=this.x-e.x,t=this.y-e.y,i=this.z-e.z;return A*A+t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,A,t){let i=Math.sin(A)*e;return this.x=i*Math.sin(t),this.y=Math.cos(A)*e,this.z=i*Math.cos(t),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,A,t){return this.x=e*Math.sin(A),this.y=t,this.z=e*Math.cos(A),this}setFromMatrixPosition(e){let A=e.elements;return this.x=A[12],this.y=A[13],this.z=A[14],this}setFromMatrixScale(e){let A=this.setFromMatrixColumn(e,0).length(),t=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=A,this.y=t,this.z=i,this}setFromMatrixColumn(e,A){return this.fromArray(e.elements,4*A)}setFromMatrix3Column(e,A){return this.fromArray(e.elements,3*A)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,A=0){return this.x=e[A],this.y=e[A+1],this.z=e[A+2],this}toArray(e=[],A=0){return e[A]=this.x,e[A+1]=this.y,e[A+2]=this.z,e}fromBufferAttribute(e,A){return this.x=e.getX(A),this.y=e.getY(A),this.z=e.getZ(A),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=2*(Math.random()-.5),A=Math.random()*Math.PI*2,t=Math.sqrt(1-e**2);return this.x=t*Math.cos(A),this.y=t*Math.sin(A),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},gc=new S,uh=new nt,Ut=class{constructor(e=new S(1/0,1/0,1/0),A=new S(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=A}set(e,A){return this.min.copy(e),this.max.copy(A),this}setFromArray(e){this.makeEmpty();for(let A=0,t=e.length;A<t;A+=3)this.expandByPoint(Bi.fromArray(e,A));return this}setFromBufferAttribute(e){this.makeEmpty();for(let A=0,t=e.count;A<t;A++)this.expandByPoint(Bi.fromBufferAttribute(e,A));return this}setFromPoints(e){this.makeEmpty();for(let A=0,t=e.length;A<t;A++)this.expandByPoint(e[A]);return this}setFromCenterAndSize(e,A){let t=Bi.copy(A).multiplyScalar(.5);return this.min.copy(e).sub(t),this.max.copy(e).add(t),this}setFromObject(e,A=!1){return this.makeEmpty(),this.expandByObject(e,A)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,A=!1){e.updateWorldMatrix(!1,!1);let t=e.geometry;if(t!==void 0){let n=t.getAttribute("position");if(A===!0&&n!==void 0&&e.isInstancedMesh!==!0)for(let r=0,s=n.count;r<s;r++)e.isMesh===!0?e.getVertexPosition(r,Bi):Bi.fromBufferAttribute(n,r),Bi.applyMatrix4(e.matrixWorld),this.expandByPoint(Bi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),yo.copy(e.boundingBox)):(t.boundingBox===null&&t.computeBoundingBox(),yo.copy(t.boundingBox)),yo.applyMatrix4(e.matrixWorld),this.union(yo)}let i=e.children;for(let n=0,r=i.length;n<r;n++)this.expandByObject(i[n],A);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,A){return A.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Bi),Bi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let A,t;return e.normal.x>0?(A=e.normal.x*this.min.x,t=e.normal.x*this.max.x):(A=e.normal.x*this.max.x,t=e.normal.x*this.min.x),e.normal.y>0?(A+=e.normal.y*this.min.y,t+=e.normal.y*this.max.y):(A+=e.normal.y*this.max.y,t+=e.normal.y*this.min.y),e.normal.z>0?(A+=e.normal.z*this.min.z,t+=e.normal.z*this.max.z):(A+=e.normal.z*this.max.z,t+=e.normal.z*this.min.z),A<=-e.constant&&t>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(qa),wo.subVectors(this.max,qa),Kr.subVectors(e.a,qa),Wr.subVectors(e.b,qa),qr.subVectors(e.c,qa),bn.subVectors(Wr,Kr),vn.subVectors(qr,Wr),nr.subVectors(Kr,qr);let A=[0,-bn.z,bn.y,0,-vn.z,vn.y,0,-nr.z,nr.y,bn.z,0,-bn.x,vn.z,0,-vn.x,nr.z,0,-nr.x,-bn.y,bn.x,0,-vn.y,vn.x,0,-nr.y,nr.x,0];return!!Pc(A,Kr,Wr,qr,wo)&&(A=[1,0,0,0,1,0,0,0,1],!!Pc(A,Kr,Wr,qr,wo)&&(Co.crossVectors(bn,vn),A=[Co.x,Co.y,Co.z],Pc(A,Kr,Wr,qr,wo)))}clampPoint(e,A){return A.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Bi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=.5*this.getSize(Bi).length()),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(tn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),tn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),tn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),tn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),tn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),tn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),tn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),tn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(tn)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},tn=[new S,new S,new S,new S,new S,new S,new S,new S],Bi=new S,yo=new Ut,Kr=new S,Wr=new S,qr=new S,bn=new S,vn=new S,nr=new S,qa=new S,wo=new S,Co=new S,rr=new S;function Pc(a,e,A,t,i){for(let n=0,r=a.length-3;n<=r;n+=3){rr.fromArray(a,n);let s=i.x*Math.abs(rr.x)+i.y*Math.abs(rr.y)+i.z*Math.abs(rr.z),U=e.dot(rr),o=A.dot(rr),l=t.dot(rr);if(Math.max(-Math.max(U,o,l),Math.min(U,o,l))>s)return!1}return!0}var lT=new Ut,_a=new S,Tc=new S,rt=class{constructor(e=new S,A=-1){this.isSphere=!0,this.center=e,this.radius=A}set(e,A){return this.center.copy(e),this.radius=A,this}setFromPoints(e,A){let t=this.center;A!==void 0?t.copy(A):lT.setFromPoints(e).getCenter(t);let i=0;for(let n=0,r=e.length;n<r;n++)i=Math.max(i,t.distanceToSquared(e[n]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let A=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=A*A}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,A){let t=this.center.distanceToSquared(e);return A.copy(e),t>this.radius*this.radius&&(A.sub(this.center).normalize(),A.multiplyScalar(this.radius).add(this.center)),A}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;_a.subVectors(e,this.center);let A=_a.lengthSq();if(A>this.radius*this.radius){let t=Math.sqrt(A),i=.5*(t-this.radius);this.center.addScaledVector(_a,i/t),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Tc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(_a.copy(e.center).add(Tc)),this.expandByPoint(_a.copy(e.center).sub(Tc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},nn=new S,Dc=new S,Ro=new S,yn=new S,Mc=new S,So=new S,Ic=new S,kn=class{constructor(e=new S,A=new S(0,0,-1)){this.origin=e,this.direction=A}set(e,A){return this.origin.copy(e),this.direction.copy(A),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,A){return A.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,nn)),this}closestPointToPoint(e,A){A.subVectors(e,this.origin);let t=A.dot(this.direction);return t<0?A.copy(this.origin):A.copy(this.origin).addScaledVector(this.direction,t)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let A=nn.subVectors(e,this.origin).dot(this.direction);return A<0?this.origin.distanceToSquared(e):(nn.copy(this.origin).addScaledVector(this.direction,A),nn.distanceToSquared(e))}distanceSqToSegment(e,A,t,i){Dc.copy(e).add(A).multiplyScalar(.5),Ro.copy(A).sub(e).normalize(),yn.copy(this.origin).sub(Dc);let n=.5*e.distanceTo(A),r=-this.direction.dot(Ro),s=yn.dot(this.direction),U=-yn.dot(Ro),o=yn.lengthSq(),l=Math.abs(1-r*r),c,u,h,p;if(l>0)if(c=r*U-s,u=r*s-U,p=n*l,c>=0)if(u>=-p)if(u<=p){let f=1/l;c*=f,u*=f,h=c*(c+r*u+2*s)+u*(r*c+u+2*U)+o}else u=n,c=Math.max(0,-(r*u+s)),h=-c*c+u*(u+2*U)+o;else u=-n,c=Math.max(0,-(r*u+s)),h=-c*c+u*(u+2*U)+o;else u<=-p?(c=Math.max(0,-(-r*n+s)),u=c>0?-n:Math.min(Math.max(-n,-U),n),h=-c*c+u*(u+2*U)+o):u<=p?(c=0,u=Math.min(Math.max(-n,-U),n),h=u*(u+2*U)+o):(c=Math.max(0,-(r*n+s)),u=c>0?n:Math.min(Math.max(-n,-U),n),h=-c*c+u*(u+2*U)+o);else u=r>0?-n:n,c=Math.max(0,-(r*u+s)),h=-c*c+u*(u+2*U)+o;return t&&t.copy(this.origin).addScaledVector(this.direction,c),i&&i.copy(Dc).addScaledVector(Ro,u),h}intersectSphere(e,A){nn.subVectors(e.center,this.origin);let t=nn.dot(this.direction),i=nn.dot(nn)-t*t,n=e.radius*e.radius;if(i>n)return null;let r=Math.sqrt(n-i),s=t-r,U=t+r;return U<0?null:s<0?this.at(U,A):this.at(s,A)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let A=e.normal.dot(this.direction);if(A===0)return e.distanceToPoint(this.origin)===0?0:null;let t=-(this.origin.dot(e.normal)+e.constant)/A;return t>=0?t:null}intersectPlane(e,A){let t=this.distanceToPlane(e);return t===null?null:this.at(t,A)}intersectsPlane(e){let A=e.distanceToPoint(this.origin);return A===0?!0:e.normal.dot(this.direction)*A<0}intersectBox(e,A){let t,i,n,r,s,U,o=1/this.direction.x,l=1/this.direction.y,c=1/this.direction.z,u=this.origin;return o>=0?(t=(e.min.x-u.x)*o,i=(e.max.x-u.x)*o):(t=(e.max.x-u.x)*o,i=(e.min.x-u.x)*o),l>=0?(n=(e.min.y-u.y)*l,r=(e.max.y-u.y)*l):(n=(e.max.y-u.y)*l,r=(e.min.y-u.y)*l),t>r||n>i?null:((n>t||isNaN(t))&&(t=n),(r<i||isNaN(i))&&(i=r),c>=0?(s=(e.min.z-u.z)*c,U=(e.max.z-u.z)*c):(s=(e.max.z-u.z)*c,U=(e.min.z-u.z)*c),t>U||s>i?null:((s>t||t!=t)&&(t=s),(U<i||i!=i)&&(i=U),i<0?null:this.at(t>=0?t:i,A)))}intersectsBox(e){return this.intersectBox(e,nn)!==null}intersectTriangle(e,A,t,i,n){Mc.subVectors(A,e),So.subVectors(t,e),Ic.crossVectors(Mc,So);let r,s=this.direction.dot(Ic);if(s>0){if(i)return null;r=1}else{if(!(s<0))return null;r=-1,s=-s}yn.subVectors(this.origin,e);let U=r*this.direction.dot(So.crossVectors(yn,So));if(U<0)return null;let o=r*this.direction.dot(Mc.cross(yn));if(o<0||U+o>s)return null;let l=-r*yn.dot(Ic);return l<0?null:this.at(l/s,n)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ze=class a{constructor(e,A,t,i,n,r,s,U,o,l,c,u,h,p,f,m){a.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,A,t,i,n,r,s,U,o,l,c,u,h,p,f,m)}set(e,A,t,i,n,r,s,U,o,l,c,u,h,p,f,m){let M=this.elements;return M[0]=e,M[4]=A,M[8]=t,M[12]=i,M[1]=n,M[5]=r,M[9]=s,M[13]=U,M[2]=o,M[6]=l,M[10]=c,M[14]=u,M[3]=h,M[7]=p,M[11]=f,M[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new a().fromArray(this.elements)}copy(e){let A=this.elements,t=e.elements;return A[0]=t[0],A[1]=t[1],A[2]=t[2],A[3]=t[3],A[4]=t[4],A[5]=t[5],A[6]=t[6],A[7]=t[7],A[8]=t[8],A[9]=t[9],A[10]=t[10],A[11]=t[11],A[12]=t[12],A[13]=t[13],A[14]=t[14],A[15]=t[15],this}copyPosition(e){let A=this.elements,t=e.elements;return A[12]=t[12],A[13]=t[13],A[14]=t[14],this}setFromMatrix3(e){let A=e.elements;return this.set(A[0],A[3],A[6],0,A[1],A[4],A[7],0,A[2],A[5],A[8],0,0,0,0,1),this}extractBasis(e,A,t){return e.setFromMatrixColumn(this,0),A.setFromMatrixColumn(this,1),t.setFromMatrixColumn(this,2),this}makeBasis(e,A,t){return this.set(e.x,A.x,t.x,0,e.y,A.y,t.y,0,e.z,A.z,t.z,0,0,0,0,1),this}extractRotation(e){let A=this.elements,t=e.elements,i=1/_r.setFromMatrixColumn(e,0).length(),n=1/_r.setFromMatrixColumn(e,1).length(),r=1/_r.setFromMatrixColumn(e,2).length();return A[0]=t[0]*i,A[1]=t[1]*i,A[2]=t[2]*i,A[3]=0,A[4]=t[4]*n,A[5]=t[5]*n,A[6]=t[6]*n,A[7]=0,A[8]=t[8]*r,A[9]=t[9]*r,A[10]=t[10]*r,A[11]=0,A[12]=0,A[13]=0,A[14]=0,A[15]=1,this}makeRotationFromEuler(e){let A=this.elements,t=e.x,i=e.y,n=e.z,r=Math.cos(t),s=Math.sin(t),U=Math.cos(i),o=Math.sin(i),l=Math.cos(n),c=Math.sin(n);if(e.order==="XYZ"){let u=r*l,h=r*c,p=s*l,f=s*c;A[0]=U*l,A[4]=-U*c,A[8]=o,A[1]=h+p*o,A[5]=u-f*o,A[9]=-s*U,A[2]=f-u*o,A[6]=p+h*o,A[10]=r*U}else if(e.order==="YXZ"){let u=U*l,h=U*c,p=o*l,f=o*c;A[0]=u+f*s,A[4]=p*s-h,A[8]=r*o,A[1]=r*c,A[5]=r*l,A[9]=-s,A[2]=h*s-p,A[6]=f+u*s,A[10]=r*U}else if(e.order==="ZXY"){let u=U*l,h=U*c,p=o*l,f=o*c;A[0]=u-f*s,A[4]=-r*c,A[8]=p+h*s,A[1]=h+p*s,A[5]=r*l,A[9]=f-u*s,A[2]=-r*o,A[6]=s,A[10]=r*U}else if(e.order==="ZYX"){let u=r*l,h=r*c,p=s*l,f=s*c;A[0]=U*l,A[4]=p*o-h,A[8]=u*o+f,A[1]=U*c,A[5]=f*o+u,A[9]=h*o-p,A[2]=-o,A[6]=s*U,A[10]=r*U}else if(e.order==="YZX"){let u=r*U,h=r*o,p=s*U,f=s*o;A[0]=U*l,A[4]=f-u*c,A[8]=p*c+h,A[1]=c,A[5]=r*l,A[9]=-s*l,A[2]=-o*l,A[6]=h*c+p,A[10]=u-f*c}else if(e.order==="XZY"){let u=r*U,h=r*o,p=s*U,f=s*o;A[0]=U*l,A[4]=-c,A[8]=o*l,A[1]=u*c+f,A[5]=r*l,A[9]=h*c-p,A[2]=p*c-h,A[6]=s*l,A[10]=f*c+u}return A[3]=0,A[7]=0,A[11]=0,A[12]=0,A[13]=0,A[14]=0,A[15]=1,this}makeRotationFromQuaternion(e){return this.compose(cT,e,uT)}lookAt(e,A,t){let i=this.elements;return Kt.subVectors(e,A),Kt.lengthSq()===0&&(Kt.z=1),Kt.normalize(),wn.crossVectors(t,Kt),wn.lengthSq()===0&&(Math.abs(t.z)===1?Kt.x+=1e-4:Kt.z+=1e-4,Kt.normalize(),wn.crossVectors(t,Kt)),wn.normalize(),xo.crossVectors(Kt,wn),i[0]=wn.x,i[4]=xo.x,i[8]=Kt.x,i[1]=wn.y,i[5]=xo.y,i[9]=Kt.y,i[2]=wn.z,i[6]=xo.z,i[10]=Kt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,A){let t=e.elements,i=A.elements,n=this.elements,r=t[0],s=t[4],U=t[8],o=t[12],l=t[1],c=t[5],u=t[9],h=t[13],p=t[2],f=t[6],m=t[10],M=t[14],T=t[3],D=t[7],b=t[11],L=t[15],y=i[0],x=i[4],X=i[8],N=i[12],Y=i[1],re=i[5],J=i[9],te=i[13],Ae=i[2],Me=i[6],Fe=i[10],me=i[14],Ue=i[3],se=i[7],$=i[11],ce=i[15];return n[0]=r*y+s*Y+U*Ae+o*Ue,n[4]=r*x+s*re+U*Me+o*se,n[8]=r*X+s*J+U*Fe+o*$,n[12]=r*N+s*te+U*me+o*ce,n[1]=l*y+c*Y+u*Ae+h*Ue,n[5]=l*x+c*re+u*Me+h*se,n[9]=l*X+c*J+u*Fe+h*$,n[13]=l*N+c*te+u*me+h*ce,n[2]=p*y+f*Y+m*Ae+M*Ue,n[6]=p*x+f*re+m*Me+M*se,n[10]=p*X+f*J+m*Fe+M*$,n[14]=p*N+f*te+m*me+M*ce,n[3]=T*y+D*Y+b*Ae+L*Ue,n[7]=T*x+D*re+b*Me+L*se,n[11]=T*X+D*J+b*Fe+L*$,n[15]=T*N+D*te+b*me+L*ce,this}multiplyScalar(e){let A=this.elements;return A[0]*=e,A[4]*=e,A[8]*=e,A[12]*=e,A[1]*=e,A[5]*=e,A[9]*=e,A[13]*=e,A[2]*=e,A[6]*=e,A[10]*=e,A[14]*=e,A[3]*=e,A[7]*=e,A[11]*=e,A[15]*=e,this}determinant(){let e=this.elements,A=e[0],t=e[4],i=e[8],n=e[12],r=e[1],s=e[5],U=e[9],o=e[13],l=e[2],c=e[6],u=e[10],h=e[14];return e[3]*(+n*U*c-i*o*c-n*s*u+t*o*u+i*s*h-t*U*h)+e[7]*(+A*U*h-A*o*u+n*r*u-i*r*h+i*o*l-n*U*l)+e[11]*(+A*o*c-A*s*h-n*r*c+t*r*h+n*s*l-t*o*l)+e[15]*(-i*s*l-A*U*c+A*s*u+i*r*c-t*r*u+t*U*l)}transpose(){let e=this.elements,A;return A=e[1],e[1]=e[4],e[4]=A,A=e[2],e[2]=e[8],e[8]=A,A=e[6],e[6]=e[9],e[9]=A,A=e[3],e[3]=e[12],e[12]=A,A=e[7],e[7]=e[13],e[13]=A,A=e[11],e[11]=e[14],e[14]=A,this}setPosition(e,A,t){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=A,i[14]=t),this}invert(){let e=this.elements,A=e[0],t=e[1],i=e[2],n=e[3],r=e[4],s=e[5],U=e[6],o=e[7],l=e[8],c=e[9],u=e[10],h=e[11],p=e[12],f=e[13],m=e[14],M=e[15],T=c*m*o-f*u*o+f*U*h-s*m*h-c*U*M+s*u*M,D=p*u*o-l*m*o-p*U*h+r*m*h+l*U*M-r*u*M,b=l*f*o-p*c*o+p*s*h-r*f*h-l*s*M+r*c*M,L=p*c*U-l*f*U-p*s*u+r*f*u+l*s*m-r*c*m,y=A*T+t*D+i*b+n*L;if(y===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let x=1/y;return e[0]=T*x,e[1]=(f*u*n-c*m*n-f*i*h+t*m*h+c*i*M-t*u*M)*x,e[2]=(s*m*n-f*U*n+f*i*o-t*m*o-s*i*M+t*U*M)*x,e[3]=(c*U*n-s*u*n-c*i*o+t*u*o+s*i*h-t*U*h)*x,e[4]=D*x,e[5]=(l*m*n-p*u*n+p*i*h-A*m*h-l*i*M+A*u*M)*x,e[6]=(p*U*n-r*m*n-p*i*o+A*m*o+r*i*M-A*U*M)*x,e[7]=(r*u*n-l*U*n+l*i*o-A*u*o-r*i*h+A*U*h)*x,e[8]=b*x,e[9]=(p*c*n-l*f*n-p*t*h+A*f*h+l*t*M-A*c*M)*x,e[10]=(r*f*n-p*s*n+p*t*o-A*f*o-r*t*M+A*s*M)*x,e[11]=(l*s*n-r*c*n-l*t*o+A*c*o+r*t*h-A*s*h)*x,e[12]=L*x,e[13]=(l*f*i-p*c*i+p*t*u-A*f*u-l*t*m+A*c*m)*x,e[14]=(p*s*i-r*f*i-p*t*U+A*f*U+r*t*m-A*s*m)*x,e[15]=(r*c*i-l*s*i+l*t*U-A*c*U-r*t*u+A*s*u)*x,this}scale(e){let A=this.elements,t=e.x,i=e.y,n=e.z;return A[0]*=t,A[4]*=i,A[8]*=n,A[1]*=t,A[5]*=i,A[9]*=n,A[2]*=t,A[6]*=i,A[10]*=n,A[3]*=t,A[7]*=i,A[11]*=n,this}getMaxScaleOnAxis(){let e=this.elements,A=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],t=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(A,t,i))}makeTranslation(e,A,t){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,A,0,0,1,t,0,0,0,1),this}makeRotationX(e){let A=Math.cos(e),t=Math.sin(e);return this.set(1,0,0,0,0,A,-t,0,0,t,A,0,0,0,0,1),this}makeRotationY(e){let A=Math.cos(e),t=Math.sin(e);return this.set(A,0,t,0,0,1,0,0,-t,0,A,0,0,0,0,1),this}makeRotationZ(e){let A=Math.cos(e),t=Math.sin(e);return this.set(A,-t,0,0,t,A,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,A){let t=Math.cos(A),i=Math.sin(A),n=1-t,r=e.x,s=e.y,U=e.z,o=n*r,l=n*s;return this.set(o*r+t,o*s-i*U,o*U+i*s,0,o*s+i*U,l*s+t,l*U-i*r,0,o*U-i*s,l*U+i*r,n*U*U+t,0,0,0,0,1),this}makeScale(e,A,t){return this.set(e,0,0,0,0,A,0,0,0,0,t,0,0,0,0,1),this}makeShear(e,A,t,i,n,r){return this.set(1,t,n,0,e,1,r,0,A,i,1,0,0,0,0,1),this}compose(e,A,t){let i=this.elements,n=A._x,r=A._y,s=A._z,U=A._w,o=n+n,l=r+r,c=s+s,u=n*o,h=n*l,p=n*c,f=r*l,m=r*c,M=s*c,T=U*o,D=U*l,b=U*c,L=t.x,y=t.y,x=t.z;return i[0]=(1-(f+M))*L,i[1]=(h+b)*L,i[2]=(p-D)*L,i[3]=0,i[4]=(h-b)*y,i[5]=(1-(u+M))*y,i[6]=(m+T)*y,i[7]=0,i[8]=(p+D)*x,i[9]=(m-T)*x,i[10]=(1-(u+f))*x,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,A,t){let i=this.elements,n=_r.set(i[0],i[1],i[2]).length(),r=_r.set(i[4],i[5],i[6]).length(),s=_r.set(i[8],i[9],i[10]).length();this.determinant()<0&&(n=-n),e.x=i[12],e.y=i[13],e.z=i[14],Ei.copy(this);let U=1/n,o=1/r,l=1/s;return Ei.elements[0]*=U,Ei.elements[1]*=U,Ei.elements[2]*=U,Ei.elements[4]*=o,Ei.elements[5]*=o,Ei.elements[6]*=o,Ei.elements[8]*=l,Ei.elements[9]*=l,Ei.elements[10]*=l,A.setFromRotationMatrix(Ei),t.x=n,t.y=r,t.z=s,this}makePerspective(e,A,t,i,n,r,s=2e3){let U=this.elements,o=2*n/(A-e),l=2*n/(t-i),c=(A+e)/(A-e),u=(t+i)/(t-i),h,p;if(s===Nn)h=-(r+n)/(r-n),p=-2*r*n/(r-n);else{if(s!==Da)throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+s);h=-r/(r-n),p=-r*n/(r-n)}return U[0]=o,U[4]=0,U[8]=c,U[12]=0,U[1]=0,U[5]=l,U[9]=u,U[13]=0,U[2]=0,U[6]=0,U[10]=h,U[14]=p,U[3]=0,U[7]=0,U[11]=-1,U[15]=0,this}makeOrthographic(e,A,t,i,n,r,s=2e3){let U=this.elements,o=1/(A-e),l=1/(t-i),c=1/(r-n),u=(A+e)*o,h=(t+i)*l,p,f;if(s===Nn)p=(r+n)*c,f=-2*c;else{if(s!==Da)throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+s);p=n*c,f=-1*c}return U[0]=2*o,U[4]=0,U[8]=0,U[12]=-u,U[1]=0,U[5]=2*l,U[9]=0,U[13]=-h,U[2]=0,U[6]=0,U[10]=f,U[14]=-p,U[3]=0,U[7]=0,U[11]=0,U[15]=1,this}equals(e){let A=this.elements,t=e.elements;for(let i=0;i<16;i++)if(A[i]!==t[i])return!1;return!0}fromArray(e,A=0){for(let t=0;t<16;t++)this.elements[t]=e[t+A];return this}toArray(e=[],A=0){let t=this.elements;return e[A]=t[0],e[A+1]=t[1],e[A+2]=t[2],e[A+3]=t[3],e[A+4]=t[4],e[A+5]=t[5],e[A+6]=t[6],e[A+7]=t[7],e[A+8]=t[8],e[A+9]=t[9],e[A+10]=t[10],e[A+11]=t[11],e[A+12]=t[12],e[A+13]=t[13],e[A+14]=t[14],e[A+15]=t[15],e}},_r=new S,Ei=new Ze,cT=new S(0,0,0),uT=new S(1,1,1),wn=new S,xo=new S,Kt=new S,dh=new Ze,hh=new nt,Es=class a{constructor(e=0,A=0,t=0,i=a.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=A,this._z=t,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,A,t,i=this._order){return this._x=e,this._y=A,this._z=t,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,A=this._order,t=!0){let i=e.elements,n=i[0],r=i[4],s=i[8],U=i[1],o=i[5],l=i[9],c=i[2],u=i[6],h=i[10];switch(A){case"XYZ":this._y=Math.asin(ZA(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,h),this._z=Math.atan2(-r,n)):(this._x=Math.atan2(u,o),this._z=0);break;case"YXZ":this._x=Math.asin(-ZA(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(s,h),this._z=Math.atan2(U,o)):(this._y=Math.atan2(-c,n),this._z=0);break;case"ZXY":this._x=Math.asin(ZA(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-c,h),this._z=Math.atan2(-r,o)):(this._y=0,this._z=Math.atan2(U,n));break;case"ZYX":this._y=Math.asin(-ZA(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(u,h),this._z=Math.atan2(U,n)):(this._x=0,this._z=Math.atan2(-r,o));break;case"YZX":this._z=Math.asin(ZA(U,-1,1)),Math.abs(U)<.9999999?(this._x=Math.atan2(-l,o),this._y=Math.atan2(-c,n)):(this._x=0,this._y=Math.atan2(s,h));break;case"XZY":this._z=Math.asin(-ZA(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(u,o),this._y=Math.atan2(s,n)):(this._x=Math.atan2(-l,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+A)}return this._order=A,t===!0&&this._onChangeCallback(),this}setFromQuaternion(e,A,t){return dh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(dh,A,t)}setFromVector3(e,A=this._order){return this.set(e.x,e.y,e.z,A)}reorder(e){return hh.setFromEuler(this),this.setFromQuaternion(hh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],A=0){return e[A]=this._x,e[A+1]=this._y,e[A+2]=this._z,e[A+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Es.DEFAULT_ORDER="XYZ";var Ba=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!=0}isEnabled(e){return(this.mask&(1<<e|0))!=0}},dT=0,ph=new S,$r=new nt,rn=new Ze,Lo=new S,$a=new S,hT=new S,pT=new nt,fh=new S(1,0,0),mh=new S(0,1,0),gh=new S(0,0,1),fT={type:"added"},mT={type:"removed"},PA=class a extends Ri{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:dT++}),this.uuid=_t(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=a.DEFAULT_UP.clone();let e=new S,A=new Es,t=new nt,i=new S(1,1,1);A._onChange((function(){t.setFromEuler(A,!1)})),t._onChange((function(){A.setFromQuaternion(t,void 0,!1)})),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:A},quaternion:{configurable:!0,enumerable:!0,value:t},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ze},normalMatrix:{value:new oA}}),this.matrix=new Ze,this.matrixWorld=new Ze,this.matrixAutoUpdate=a.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=a.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ba,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,A){this.quaternion.setFromAxisAngle(e,A)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,A){return $r.setFromAxisAngle(e,A),this.quaternion.multiply($r),this}rotateOnWorldAxis(e,A){return $r.setFromAxisAngle(e,A),this.quaternion.premultiply($r),this}rotateX(e){return this.rotateOnAxis(fh,e)}rotateY(e){return this.rotateOnAxis(mh,e)}rotateZ(e){return this.rotateOnAxis(gh,e)}translateOnAxis(e,A){return ph.copy(e).applyQuaternion(this.quaternion),this.position.add(ph.multiplyScalar(A)),this}translateX(e){return this.translateOnAxis(fh,e)}translateY(e){return this.translateOnAxis(mh,e)}translateZ(e){return this.translateOnAxis(gh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(rn.copy(this.matrixWorld).invert())}lookAt(e,A,t){e.isVector3?Lo.copy(e):Lo.set(e,A,t);let i=this.parent;this.updateWorldMatrix(!0,!1),$a.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?rn.lookAt($a,Lo,this.up):rn.lookAt(Lo,$a,this.up),this.quaternion.setFromRotationMatrix(rn),i&&(rn.extractRotation(i.matrixWorld),$r.setFromRotationMatrix(rn),this.quaternion.premultiply($r.invert()))}add(e){if(arguments.length>1){for(let A=0;A<arguments.length;A++)this.add(arguments[A]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(fT)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.remove(arguments[t]);return this}let A=this.children.indexOf(e);return A!==-1&&(e.parent=null,this.children.splice(A,1),e.dispatchEvent(mT)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),rn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),rn.multiply(e.parent.matrixWorld)),e.applyMatrix4(rn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,A){if(this[e]===A)return this;for(let t=0,i=this.children.length;t<i;t++){let n=this.children[t].getObjectByProperty(e,A);if(n!==void 0)return n}}getObjectsByProperty(e,A,t=[]){this[e]===A&&t.push(this);let i=this.children;for(let n=0,r=i.length;n<r;n++)i[n].getObjectsByProperty(e,A,t);return t}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($a,e,hT),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($a,pT,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let A=this.matrixWorld.elements;return e.set(A[8],A[9],A[10]).normalize()}raycast(){}traverse(e){e(this);let A=this.children;for(let t=0,i=A.length;t<i;t++)A[t].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let A=this.children;for(let t=0,i=A.length;t<i;t++)A[t].traverseVisible(e)}traverseAncestors(e){let A=this.parent;A!==null&&(e(A),A.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let A=this.children;for(let t=0,i=A.length;t<i;t++){let n=A[t];n.matrixWorldAutoUpdate!==!0&&e!==!0||n.updateMatrixWorld(e)}}updateWorldMatrix(e,A){let t=this.parent;if(e===!0&&t!==null&&t.matrixWorldAutoUpdate===!0&&t.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),A===!0){let i=this.children;for(let n=0,r=i.length;n<r;n++){let s=i[n];s.matrixWorldAutoUpdate===!0&&s.updateWorldMatrix(!1,!0)}}}toJSON(e){let A=e===void 0||typeof e=="string",t={};A&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},t.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};function n(s,U){return s[U.uuid]===void 0&&(s[U.uuid]=U.toJSON(e)),U.uuid}if(i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map((s=>({boxInitialized:s.boxInitialized,boxMin:s.box.min.toArray(),boxMax:s.box.max.toArray(),sphereInitialized:s.sphereInitialized,sphereRadius:s.sphere.radius,sphereCenter:s.sphere.center.toArray()}))),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()})),this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=n(e.geometries,this.geometry);let s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){let U=s.shapes;if(Array.isArray(U))for(let o=0,l=U.length;o<l;o++){let c=U[o];n(e.shapes,c)}else n(e.shapes,U)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(n(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let s=[];for(let U=0,o=this.material.length;U<o;U++)s.push(n(e.materials,this.material[U]));i.material=s}else i.material=n(e.materials,this.material);if(this.children.length>0){i.children=[];for(let s=0;s<this.children.length;s++)i.children.push(this.children[s].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let s=0;s<this.animations.length;s++){let U=this.animations[s];i.animations.push(n(e.animations,U))}}if(A){let s=r(e.geometries),U=r(e.materials),o=r(e.textures),l=r(e.images),c=r(e.shapes),u=r(e.skeletons),h=r(e.animations),p=r(e.nodes);s.length>0&&(t.geometries=s),U.length>0&&(t.materials=U),o.length>0&&(t.textures=o),l.length>0&&(t.images=l),c.length>0&&(t.shapes=c),u.length>0&&(t.skeletons=u),h.length>0&&(t.animations=h),p.length>0&&(t.nodes=p)}return t.object=i,t;function r(s){let U=[];for(let o in s){let l=s[o];delete l.metadata,U.push(l)}return U}}clone(e){return new this.constructor().copy(this,e)}copy(e,A=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),A===!0)for(let t=0;t<e.children.length;t++){let i=e.children[t];this.add(i.clone())}return this}};PA.DEFAULT_UP=new S(0,1,0),PA.DEFAULT_MATRIX_AUTO_UPDATE=!0,PA.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var bi=new S,an=new S,Bc=new S,sn=new S,ea=new S,Aa=new S,Ph=new S,Ec=new S,bc=new S,vc=new S,Qo=!1,hn=class a{constructor(e=new S,A=new S,t=new S){this.a=e,this.b=A,this.c=t}static getNormal(e,A,t,i){i.subVectors(t,A),bi.subVectors(e,A),i.cross(bi);let n=i.lengthSq();return n>0?i.multiplyScalar(1/Math.sqrt(n)):i.set(0,0,0)}static getBarycoord(e,A,t,i,n){bi.subVectors(i,A),an.subVectors(t,A),Bc.subVectors(e,A);let r=bi.dot(bi),s=bi.dot(an),U=bi.dot(Bc),o=an.dot(an),l=an.dot(Bc),c=r*o-s*s;if(c===0)return n.set(0,0,0),null;let u=1/c,h=(o*U-s*l)*u,p=(r*l-s*U)*u;return n.set(1-h-p,p,h)}static containsPoint(e,A,t,i){return this.getBarycoord(e,A,t,i,sn)!==null&&sn.x>=0&&sn.y>=0&&sn.x+sn.y<=1}static getUV(e,A,t,i,n,r,s,U){return Qo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Qo=!0),this.getInterpolation(e,A,t,i,n,r,s,U)}static getInterpolation(e,A,t,i,n,r,s,U){return this.getBarycoord(e,A,t,i,sn)===null?(U.x=0,U.y=0,"z"in U&&(U.z=0),"w"in U&&(U.w=0),null):(U.setScalar(0),U.addScaledVector(n,sn.x),U.addScaledVector(r,sn.y),U.addScaledVector(s,sn.z),U)}static isFrontFacing(e,A,t,i){return bi.subVectors(t,A),an.subVectors(e,A),bi.cross(an).dot(i)<0}set(e,A,t){return this.a.copy(e),this.b.copy(A),this.c.copy(t),this}setFromPointsAndIndices(e,A,t,i){return this.a.copy(e[A]),this.b.copy(e[t]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,A,t,i){return this.a.fromBufferAttribute(e,A),this.b.fromBufferAttribute(e,t),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return bi.subVectors(this.c,this.b),an.subVectors(this.a,this.b),.5*bi.cross(an).length()}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return a.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,A){return a.getBarycoord(e,this.a,this.b,this.c,A)}getUV(e,A,t,i,n){return Qo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Qo=!0),a.getInterpolation(e,this.a,this.b,this.c,A,t,i,n)}getInterpolation(e,A,t,i,n){return a.getInterpolation(e,this.a,this.b,this.c,A,t,i,n)}containsPoint(e){return a.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return a.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,A){let t=this.a,i=this.b,n=this.c,r,s;ea.subVectors(i,t),Aa.subVectors(n,t),Ec.subVectors(e,t);let U=ea.dot(Ec),o=Aa.dot(Ec);if(U<=0&&o<=0)return A.copy(t);bc.subVectors(e,i);let l=ea.dot(bc),c=Aa.dot(bc);if(l>=0&&c<=l)return A.copy(i);let u=U*c-l*o;if(u<=0&&U>=0&&l<=0)return r=U/(U-l),A.copy(t).addScaledVector(ea,r);vc.subVectors(e,n);let h=ea.dot(vc),p=Aa.dot(vc);if(p>=0&&h<=p)return A.copy(n);let f=h*o-U*p;if(f<=0&&o>=0&&p<=0)return s=o/(o-p),A.copy(t).addScaledVector(Aa,s);let m=l*p-h*c;if(m<=0&&c-l>=0&&h-p>=0)return Ph.subVectors(n,i),s=(c-l)/(c-l+(h-p)),A.copy(i).addScaledVector(Ph,s);let M=1/(m+f+u);return r=f*M,s=u*M,A.copy(t).addScaledVector(ea,r).addScaledVector(Aa,s)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},qp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Cn={h:0,s:0,l:0},Ho={h:0,s:0,l:0};function yc(a,e,A){return A<0&&(A+=1),A>1&&(A-=1),A<1/6?a+6*(e-a)*A:A<.5?e:A<2/3?a+6*(e-a)*(2/3-A):a}var Re=class{constructor(e,A,t){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,A,t)}set(e,A,t){if(A===void 0&&t===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,A,t);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,A=QA){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(255&e)/255,DA.toWorkingColorSpace(this,A),this}setRGB(e,A,t,i=DA.workingColorSpace){return this.r=e,this.g=A,this.b=t,DA.toWorkingColorSpace(this,i),this}setHSL(e,A,t,i=DA.workingColorSpace){if(e=Eu(e,1),A=ZA(A,0,1),t=ZA(t,0,1),A===0)this.r=this.g=this.b=t;else{let n=t<=.5?t*(1+A):t+A-t*A,r=2*t-n;this.r=yc(r,n,e+1/3),this.g=yc(r,n,e),this.b=yc(r,n,e-1/3)}return DA.toWorkingColorSpace(this,i),this}setStyle(e,A=QA){function t(n){n!==void 0&&parseFloat(n)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let n,r=i[1],s=i[2];switch(r){case"rgb":case"rgba":if(n=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return t(n[4]),this.setRGB(Math.min(255,parseInt(n[1],10))/255,Math.min(255,parseInt(n[2],10))/255,Math.min(255,parseInt(n[3],10))/255,A);if(n=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return t(n[4]),this.setRGB(Math.min(100,parseInt(n[1],10))/100,Math.min(100,parseInt(n[2],10))/100,Math.min(100,parseInt(n[3],10))/100,A);break;case"hsl":case"hsla":if(n=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return t(n[4]),this.setHSL(parseFloat(n[1])/360,parseFloat(n[2])/100,parseFloat(n[3])/100,A);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=i[1],r=n.length;if(r===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,A);if(r===6)return this.setHex(parseInt(n,16),A);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,A);return this}setColorName(e,A=QA){let t=qp[e.toLowerCase()];return t!==void 0?this.setHex(t,A):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ma(e.r),this.g=ma(e.g),this.b=ma(e.b),this}copyLinearToSRGB(e){return this.r=fc(e.r),this.g=fc(e.g),this.b=fc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=QA){return DA.fromWorkingColorSpace(vt.copy(this),e),65536*Math.round(ZA(255*vt.r,0,255))+256*Math.round(ZA(255*vt.g,0,255))+Math.round(ZA(255*vt.b,0,255))}getHexString(e=QA){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,A=DA.workingColorSpace){DA.fromWorkingColorSpace(vt.copy(this),A);let t=vt.r,i=vt.g,n=vt.b,r=Math.max(t,i,n),s=Math.min(t,i,n),U,o,l=(s+r)/2;if(s===r)U=0,o=0;else{let c=r-s;switch(o=l<=.5?c/(r+s):c/(2-r-s),r){case t:U=(i-n)/c+(i<n?6:0);break;case i:U=(n-t)/c+2;break;case n:U=(t-i)/c+4}U/=6}return e.h=U,e.s=o,e.l=l,e}getRGB(e,A=DA.workingColorSpace){return DA.fromWorkingColorSpace(vt.copy(this),A),e.r=vt.r,e.g=vt.g,e.b=vt.b,e}getStyle(e=QA){DA.fromWorkingColorSpace(vt.copy(this),e);let A=vt.r,t=vt.g,i=vt.b;return e!==QA?`color(${e} ${A.toFixed(3)} ${t.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(255*A)},${Math.round(255*t)},${Math.round(255*i)})`}offsetHSL(e,A,t){return this.getHSL(Cn),this.setHSL(Cn.h+e,Cn.s+A,Cn.l+t)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,A){return this.r=e.r+A.r,this.g=e.g+A.g,this.b=e.b+A.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,A){return this.r+=(e.r-this.r)*A,this.g+=(e.g-this.g)*A,this.b+=(e.b-this.b)*A,this}lerpColors(e,A,t){return this.r=e.r+(A.r-e.r)*t,this.g=e.g+(A.g-e.g)*t,this.b=e.b+(A.b-e.b)*t,this}lerpHSL(e,A){this.getHSL(Cn),e.getHSL(Ho);let t=ls(Cn.h,Ho.h,A),i=ls(Cn.s,Ho.s,A),n=ls(Cn.l,Ho.l,A);return this.setHSL(t,i,n),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let A=this.r,t=this.g,i=this.b,n=e.elements;return this.r=n[0]*A+n[3]*t+n[6]*i,this.g=n[1]*A+n[4]*t+n[7]*i,this.b=n[2]*A+n[5]*t+n[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,A=0){return this.r=e[A],this.g=e[A+1],this.b=e[A+2],this}toArray(e=[],A=0){return e[A]=this.r,e[A+1]=this.g,e[A+2]=this.b,e}fromBufferAttribute(e,A){return this.r=e.getX(A),this.g=e.getY(A),this.b=e.getZ(A),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},vt=new Re;Re.NAMES=qp;var gT=0,WA=class extends Ri{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:gT++}),this.uuid=_t(),this.name="",this.type="Material",this.blending=1,this.side=Ci,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=EU,this.blendDst=bU,this.blendEquation=xn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Re(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=hr,this.stencilZFail=hr,this.stencilZPass=hr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let A in e){let t=e[A];if(t===void 0){console.warn(`THREE.Material: parameter '${A}' has value of undefined.`);continue}let i=this[A];i!==void 0?i&&i.isColor?i.set(t):i&&i.isVector3&&t&&t.isVector3?i.copy(t):this[A]=t:console.warn(`THREE.Material: '${A}' is not a property of THREE.${this.type}.`)}}toJSON(e){let A=e===void 0||typeof e=="string";A&&(e={textures:{},images:{}});let t={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};function i(n){let r=[];for(let s in n){let U=n[s];delete U.metadata,r.push(U)}return r}if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),this.color&&this.color.isColor&&(t.color=this.color.getHex()),this.roughness!==void 0&&(t.roughness=this.roughness),this.metalness!==void 0&&(t.metalness=this.metalness),this.sheen!==void 0&&(t.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(t.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(t.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(t.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(t.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(t.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(t.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(t.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(t.shininess=this.shininess),this.clearcoat!==void 0&&(t.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(t.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(t.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(t.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(t.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,t.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(t.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(t.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(t.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(t.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(t.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(t.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(t.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(t.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(t.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(t.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(t.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(t.lightMap=this.lightMap.toJSON(e).uuid,t.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(t.aoMap=this.aoMap.toJSON(e).uuid,t.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(t.bumpMap=this.bumpMap.toJSON(e).uuid,t.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(t.normalMap=this.normalMap.toJSON(e).uuid,t.normalMapType=this.normalMapType,t.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(t.displacementMap=this.displacementMap.toJSON(e).uuid,t.displacementScale=this.displacementScale,t.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(t.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(t.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(t.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(t.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(t.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(t.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(t.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(t.combine=this.combine)),this.envMapIntensity!==void 0&&(t.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(t.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(t.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(t.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(t.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(t.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(t.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(t.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(t.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(t.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(t.size=this.size),this.shadowSide!==null&&(t.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(t.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(t.blending=this.blending),this.side!==Ci&&(t.side=this.side),this.vertexColors===!0&&(t.vertexColors=!0),this.opacity<1&&(t.opacity=this.opacity),this.transparent===!0&&(t.transparent=!0),this.blendSrc!==EU&&(t.blendSrc=this.blendSrc),this.blendDst!==bU&&(t.blendDst=this.blendDst),this.blendEquation!==xn&&(t.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(t.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(t.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(t.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(t.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(t.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(t.depthFunc=this.depthFunc),this.depthTest===!1&&(t.depthTest=this.depthTest),this.depthWrite===!1&&(t.depthWrite=this.depthWrite),this.colorWrite===!1&&(t.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(t.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(t.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(t.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(t.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==hr&&(t.stencilFail=this.stencilFail),this.stencilZFail!==hr&&(t.stencilZFail=this.stencilZFail),this.stencilZPass!==hr&&(t.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(t.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(t.rotation=this.rotation),this.polygonOffset===!0&&(t.polygonOffset=!0),this.polygonOffsetFactor!==0&&(t.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(t.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(t.linewidth=this.linewidth),this.dashSize!==void 0&&(t.dashSize=this.dashSize),this.gapSize!==void 0&&(t.gapSize=this.gapSize),this.scale!==void 0&&(t.scale=this.scale),this.dithering===!0&&(t.dithering=!0),this.alphaTest>0&&(t.alphaTest=this.alphaTest),this.alphaHash===!0&&(t.alphaHash=!0),this.alphaToCoverage===!0&&(t.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(t.premultipliedAlpha=!0),this.forceSinglePass===!0&&(t.forceSinglePass=!0),this.wireframe===!0&&(t.wireframe=!0),this.wireframeLinewidth>1&&(t.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(t.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(t.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(t.flatShading=!0),this.visible===!1&&(t.visible=!1),this.toneMapped===!1&&(t.toneMapped=!1),this.fog===!1&&(t.fog=!1),Object.keys(this.userData).length>0&&(t.userData=this.userData),A){let n=i(e.textures),r=i(e.images);n.length>0&&(t.textures=n),r.length>0&&(t.images=r)}return t}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let A=e.clippingPlanes,t=null;if(A!==null){let i=A.length;t=new Array(i);for(let n=0;n!==i;++n)t[n]=A[n].clone()}return this.clippingPlanes=t,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Ct=class extends WA{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=_s,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Un=PT();function PT(){let a=new ArrayBuffer(4),e=new Float32Array(a),A=new Uint32Array(a),t=new Uint32Array(512),i=new Uint32Array(512);for(let U=0;U<256;++U){let o=U-127;o<-27?(t[U]=0,t[256|U]=32768,i[U]=24,i[256|U]=24):o<-14?(t[U]=1024>>-o-14,t[256|U]=1024>>-o-14|32768,i[U]=-o-1,i[256|U]=-o-1):o<=15?(t[U]=o+15<<10,t[256|U]=o+15<<10|32768,i[U]=13,i[256|U]=13):o<128?(t[U]=31744,t[256|U]=64512,i[U]=24,i[256|U]=24):(t[U]=31744,t[256|U]=64512,i[U]=13,i[256|U]=13)}let n=new Uint32Array(2048),r=new Uint32Array(64),s=new Uint32Array(64);for(let U=1;U<1024;++U){let o=U<<13,l=0;for(;(8388608&o)==0;)o<<=1,l-=8388608;o&=-8388609,l+=947912704,n[U]=o|l}for(let U=1024;U<2048;++U)n[U]=939524096+(U-1024<<13);for(let U=1;U<31;++U)r[U]=U<<23;r[31]=1199570944,r[32]=2147483648;for(let U=33;U<63;++U)r[U]=2147483648+(U-32<<23);r[63]=3347054592;for(let U=1;U<64;++U)U!==32&&(s[U]=1024);return{floatView:e,uint32View:A,baseTable:t,shiftTable:i,mantissaTable:n,exponentTable:r,offsetTable:s}}function Ft(a){Math.abs(a)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),a=ZA(a,-65504,65504),Un.floatView[0]=a;let e=Un.uint32View[0],A=e>>23&511;return Un.baseTable[A]+((8388607&e)>>Un.shiftTable[A])}function Us(a){let e=a>>10;return Un.uint32View[0]=Un.mantissaTable[Un.offsetTable[e]+(1023&a)]+Un.exponentTable[e],Un.floatView[0]}var TT={toHalfFloat:Ft,fromHalfFloat:Us},it=new S,jo=new Te,pA=class{constructor(e,A,t=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=A,this.count=e!==void 0?e.length/A:0,this.normalized=t,this.usage=Ds,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=wi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,A){this.updateRanges.push({start:e,count:A})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,A,t){e*=this.itemSize,t*=A.itemSize;for(let i=0,n=this.itemSize;i<n;i++)this.array[e+i]=A.array[t+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let A=0,t=this.count;A<t;A++)jo.fromBufferAttribute(this,A),jo.applyMatrix3(e),this.setXY(A,jo.x,jo.y);else if(this.itemSize===3)for(let A=0,t=this.count;A<t;A++)it.fromBufferAttribute(this,A),it.applyMatrix3(e),this.setXYZ(A,it.x,it.y,it.z);return this}applyMatrix4(e){for(let A=0,t=this.count;A<t;A++)it.fromBufferAttribute(this,A),it.applyMatrix4(e),this.setXYZ(A,it.x,it.y,it.z);return this}applyNormalMatrix(e){for(let A=0,t=this.count;A<t;A++)it.fromBufferAttribute(this,A),it.applyNormalMatrix(e),this.setXYZ(A,it.x,it.y,it.z);return this}transformDirection(e){for(let A=0,t=this.count;A<t;A++)it.fromBufferAttribute(this,A),it.transformDirection(e),this.setXYZ(A,it.x,it.y,it.z);return this}set(e,A=0){return this.array.set(e,A),this}getComponent(e,A){let t=this.array[e*this.itemSize+A];return this.normalized&&(t=Nt(t,this.array)),t}setComponent(e,A,t){return this.normalized&&(t=rA(t,this.array)),this.array[e*this.itemSize+A]=t,this}getX(e){let A=this.array[e*this.itemSize];return this.normalized&&(A=Nt(A,this.array)),A}setX(e,A){return this.normalized&&(A=rA(A,this.array)),this.array[e*this.itemSize]=A,this}getY(e){let A=this.array[e*this.itemSize+1];return this.normalized&&(A=Nt(A,this.array)),A}setY(e,A){return this.normalized&&(A=rA(A,this.array)),this.array[e*this.itemSize+1]=A,this}getZ(e){let A=this.array[e*this.itemSize+2];return this.normalized&&(A=Nt(A,this.array)),A}setZ(e,A){return this.normalized&&(A=rA(A,this.array)),this.array[e*this.itemSize+2]=A,this}getW(e){let A=this.array[e*this.itemSize+3];return this.normalized&&(A=Nt(A,this.array)),A}setW(e,A){return this.normalized&&(A=rA(A,this.array)),this.array[e*this.itemSize+3]=A,this}setXY(e,A,t){return e*=this.itemSize,this.normalized&&(A=rA(A,this.array),t=rA(t,this.array)),this.array[e+0]=A,this.array[e+1]=t,this}setXYZ(e,A,t,i){return e*=this.itemSize,this.normalized&&(A=rA(A,this.array),t=rA(t,this.array),i=rA(i,this.array)),this.array[e+0]=A,this.array[e+1]=t,this.array[e+2]=i,this}setXYZW(e,A,t,i,n){return e*=this.itemSize,this.normalized&&(A=rA(A,this.array),t=rA(t,this.array),i=rA(i,this.array),n=rA(n,this.array)),this.array[e+0]=A,this.array[e+1]=t,this.array[e+2]=i,this.array[e+3]=n,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ds&&(e.usage=this.usage),e}},Cu=class extends pA{constructor(e,A,t){super(new Int8Array(e),A,t)}},Ru=class extends pA{constructor(e,A,t){super(new Uint8Array(e),A,t)}},Su=class extends pA{constructor(e,A,t){super(new Uint8ClampedArray(e),A,t)}},xu=class extends pA{constructor(e,A,t){super(new Int16Array(e),A,t)}},bs=class extends pA{constructor(e,A,t){super(new Uint16Array(e),A,t)}},Lu=class extends pA{constructor(e,A,t){super(new Int32Array(e),A,t)}},vs=class extends pA{constructor(e,A,t){super(new Uint32Array(e),A,t)}},Qu=class extends pA{constructor(e,A,t){super(new Uint16Array(e),A,t),this.isFloat16BufferAttribute=!0}getX(e){let A=Us(this.array[e*this.itemSize]);return this.normalized&&(A=Nt(A,this.array)),A}setX(e,A){return this.normalized&&(A=rA(A,this.array)),this.array[e*this.itemSize]=Ft(A),this}getY(e){let A=Us(this.array[e*this.itemSize+1]);return this.normalized&&(A=Nt(A,this.array)),A}setY(e,A){return this.normalized&&(A=rA(A,this.array)),this.array[e*this.itemSize+1]=Ft(A),this}getZ(e){let A=Us(this.array[e*this.itemSize+2]);return this.normalized&&(A=Nt(A,this.array)),A}setZ(e,A){return this.normalized&&(A=rA(A,this.array)),this.array[e*this.itemSize+2]=Ft(A),this}getW(e){let A=Us(this.array[e*this.itemSize+3]);return this.normalized&&(A=Nt(A,this.array)),A}setW(e,A){return this.normalized&&(A=rA(A,this.array)),this.array[e*this.itemSize+3]=Ft(A),this}setXY(e,A,t){return e*=this.itemSize,this.normalized&&(A=rA(A,this.array),t=rA(t,this.array)),this.array[e+0]=Ft(A),this.array[e+1]=Ft(t),this}setXYZ(e,A,t,i){return e*=this.itemSize,this.normalized&&(A=rA(A,this.array),t=rA(t,this.array),i=rA(i,this.array)),this.array[e+0]=Ft(A),this.array[e+1]=Ft(t),this.array[e+2]=Ft(i),this}setXYZW(e,A,t,i,n){return e*=this.itemSize,this.normalized&&(A=rA(A,this.array),t=rA(t,this.array),i=rA(i,this.array),n=rA(n,this.array)),this.array[e+0]=Ft(A),this.array[e+1]=Ft(t),this.array[e+2]=Ft(i),this.array[e+3]=Ft(n),this}},Oe=class extends pA{constructor(e,A,t){super(new Float32Array(e),A,t)}},Hu=class extends pA{constructor(e,A,t){super(new Float64Array(e),A,t)}},DT=0,ui=new Ze,wc=new PA,ta=new S,Wt=new Ut,es=new Ut,ht=new S,AA=class a extends Ri{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:DT++}),this.uuid=_t(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Kp(e)?vs:bs)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,A){return this.attributes[e]=A,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,A,t=0){this.groups.push({start:e,count:A,materialIndex:t})}clearGroups(){this.groups=[]}setDrawRange(e,A){this.drawRange.start=e,this.drawRange.count=A}applyMatrix4(e){let A=this.attributes.position;A!==void 0&&(A.applyMatrix4(e),A.needsUpdate=!0);let t=this.attributes.normal;if(t!==void 0){let n=new oA().getNormalMatrix(e);t.applyNormalMatrix(n),t.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ui.makeRotationFromQuaternion(e),this.applyMatrix4(ui),this}rotateX(e){return ui.makeRotationX(e),this.applyMatrix4(ui),this}rotateY(e){return ui.makeRotationY(e),this.applyMatrix4(ui),this}rotateZ(e){return ui.makeRotationZ(e),this.applyMatrix4(ui),this}translate(e,A,t){return ui.makeTranslation(e,A,t),this.applyMatrix4(ui),this}scale(e,A,t){return ui.makeScale(e,A,t),this.applyMatrix4(ui),this}lookAt(e){return wc.lookAt(e),wc.updateMatrix(),this.applyMatrix4(wc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ta).negate(),this.translate(ta.x,ta.y,ta.z),this}setFromPoints(e){let A=[];for(let t=0,i=e.length;t<i;t++){let n=e[t];A.push(n.x,n.y,n.z||0)}return this.setAttribute("position",new Oe(A,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ut);let e=this.attributes.position,A=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),void this.boundingBox.set(new S(-1/0,-1/0,-1/0),new S(1/0,1/0,1/0));if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),A)for(let t=0,i=A.length;t<i;t++){let n=A[t];Wt.setFromBufferAttribute(n),this.morphTargetsRelative?(ht.addVectors(this.boundingBox.min,Wt.min),this.boundingBox.expandByPoint(ht),ht.addVectors(this.boundingBox.max,Wt.max),this.boundingBox.expandByPoint(ht)):(this.boundingBox.expandByPoint(Wt.min),this.boundingBox.expandByPoint(Wt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new rt);let e=this.attributes.position,A=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),void this.boundingSphere.set(new S,1/0);if(e){let t=this.boundingSphere.center;if(Wt.setFromBufferAttribute(e),A)for(let n=0,r=A.length;n<r;n++){let s=A[n];es.setFromBufferAttribute(s),this.morphTargetsRelative?(ht.addVectors(Wt.min,es.min),Wt.expandByPoint(ht),ht.addVectors(Wt.max,es.max),Wt.expandByPoint(ht)):(Wt.expandByPoint(es.min),Wt.expandByPoint(es.max))}Wt.getCenter(t);let i=0;for(let n=0,r=e.count;n<r;n++)ht.fromBufferAttribute(e,n),i=Math.max(i,t.distanceToSquared(ht));if(A)for(let n=0,r=A.length;n<r;n++){let s=A[n],U=this.morphTargetsRelative;for(let o=0,l=s.count;o<l;o++)ht.fromBufferAttribute(s,o),U&&(ta.fromBufferAttribute(e,o),ht.add(ta)),i=Math.max(i,t.distanceToSquared(ht))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,A=this.attributes;if(e===null||A.position===void 0||A.normal===void 0||A.uv===void 0)return void console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");let t=e.array,i=A.position.array,n=A.normal.array,r=A.uv.array,s=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new pA(new Float32Array(4*s),4));let U=this.getAttribute("tangent").array,o=[],l=[];for(let Y=0;Y<s;Y++)o[Y]=new S,l[Y]=new S;let c=new S,u=new S,h=new S,p=new Te,f=new Te,m=new Te,M=new S,T=new S;function D(Y,re,J){c.fromArray(i,3*Y),u.fromArray(i,3*re),h.fromArray(i,3*J),p.fromArray(r,2*Y),f.fromArray(r,2*re),m.fromArray(r,2*J),u.sub(c),h.sub(c),f.sub(p),m.sub(p);let te=1/(f.x*m.y-m.x*f.y);isFinite(te)&&(M.copy(u).multiplyScalar(m.y).addScaledVector(h,-f.y).multiplyScalar(te),T.copy(h).multiplyScalar(f.x).addScaledVector(u,-m.x).multiplyScalar(te),o[Y].add(M),o[re].add(M),o[J].add(M),l[Y].add(T),l[re].add(T),l[J].add(T))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.length}]);for(let Y=0,re=b.length;Y<re;++Y){let J=b[Y],te=J.start;for(let Ae=te,Me=te+J.count;Ae<Me;Ae+=3)D(t[Ae+0],t[Ae+1],t[Ae+2])}let L=new S,y=new S,x=new S,X=new S;function N(Y){x.fromArray(n,3*Y),X.copy(x);let re=o[Y];L.copy(re),L.sub(x.multiplyScalar(x.dot(re))).normalize(),y.crossVectors(X,re);let J=y.dot(l[Y])<0?-1:1;U[4*Y]=L.x,U[4*Y+1]=L.y,U[4*Y+2]=L.z,U[4*Y+3]=J}for(let Y=0,re=b.length;Y<re;++Y){let J=b[Y],te=J.start;for(let Ae=te,Me=te+J.count;Ae<Me;Ae+=3)N(t[Ae+0]),N(t[Ae+1]),N(t[Ae+2])}}computeVertexNormals(){let e=this.index,A=this.getAttribute("position");if(A!==void 0){let t=this.getAttribute("normal");if(t===void 0)t=new pA(new Float32Array(3*A.count),3),this.setAttribute("normal",t);else for(let u=0,h=t.count;u<h;u++)t.setXYZ(u,0,0,0);let i=new S,n=new S,r=new S,s=new S,U=new S,o=new S,l=new S,c=new S;if(e)for(let u=0,h=e.count;u<h;u+=3){let p=e.getX(u+0),f=e.getX(u+1),m=e.getX(u+2);i.fromBufferAttribute(A,p),n.fromBufferAttribute(A,f),r.fromBufferAttribute(A,m),l.subVectors(r,n),c.subVectors(i,n),l.cross(c),s.fromBufferAttribute(t,p),U.fromBufferAttribute(t,f),o.fromBufferAttribute(t,m),s.add(l),U.add(l),o.add(l),t.setXYZ(p,s.x,s.y,s.z),t.setXYZ(f,U.x,U.y,U.z),t.setXYZ(m,o.x,o.y,o.z)}else for(let u=0,h=A.count;u<h;u+=3)i.fromBufferAttribute(A,u+0),n.fromBufferAttribute(A,u+1),r.fromBufferAttribute(A,u+2),l.subVectors(r,n),c.subVectors(i,n),l.cross(c),t.setXYZ(u+0,l.x,l.y,l.z),t.setXYZ(u+1,l.x,l.y,l.z),t.setXYZ(u+2,l.x,l.y,l.z);this.normalizeNormals(),t.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let A=0,t=e.count;A<t;A++)ht.fromBufferAttribute(e,A),ht.normalize(),e.setXYZ(A,ht.x,ht.y,ht.z)}toNonIndexed(){function e(s,U){let o=s.array,l=s.itemSize,c=s.normalized,u=new o.constructor(U.length*l),h=0,p=0;for(let f=0,m=U.length;f<m;f++){h=s.isInterleavedBufferAttribute?U[f]*s.data.stride+s.offset:U[f]*l;for(let M=0;M<l;M++)u[p++]=o[h++]}return new pA(u,l,c)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let A=new a,t=this.index.array,i=this.attributes;for(let s in i){let U=e(i[s],t);A.setAttribute(s,U)}let n=this.morphAttributes;for(let s in n){let U=[],o=n[s];for(let l=0,c=o.length;l<c;l++){let u=e(o[l],t);U.push(u)}A.morphAttributes[s]=U}A.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;for(let s=0,U=r.length;s<U;s++){let o=r[s];A.addGroup(o.start,o.count,o.materialIndex)}return A}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let U=this.parameters;for(let o in U)U[o]!==void 0&&(e[o]=U[o]);return e}e.data={attributes:{}};let A=this.index;A!==null&&(e.data.index={type:A.array.constructor.name,array:Array.prototype.slice.call(A.array)});let t=this.attributes;for(let U in t){let o=t[U];e.data.attributes[U]=o.toJSON(e.data)}let i={},n=!1;for(let U in this.morphAttributes){let o=this.morphAttributes[U],l=[];for(let c=0,u=o.length;c<u;c++){let h=o[c];l.push(h.toJSON(e.data))}l.length>0&&(i[U]=l,n=!0)}n&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));let s=this.boundingSphere;return s!==null&&(e.data.boundingSphere={center:s.center.toArray(),radius:s.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let A={};this.name=e.name;let t=e.index;t!==null&&this.setIndex(t.clone(A));let i=e.attributes;for(let o in i){let l=i[o];this.setAttribute(o,l.clone(A))}let n=e.morphAttributes;for(let o in n){let l=[],c=n[o];for(let u=0,h=c.length;u<h;u++)l.push(c[u].clone(A));this.morphAttributes[o]=l}this.morphTargetsRelative=e.morphTargetsRelative;let r=e.groups;for(let o=0,l=r.length;o<l;o++){let c=r[o];this.addGroup(c.start,c.count,c.materialIndex)}let s=e.boundingBox;s!==null&&(this.boundingBox=s.clone());let U=e.boundingSphere;return U!==null&&(this.boundingSphere=U.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Th=new Ze,ar=new kn,Jo=new rt,Dh=new S,ia=new S,na=new S,ra=new S,Cc=new S,Fo=new S,No=new Te,ko=new Te,Xo=new Te,Mh=new S,Ih=new S,Bh=new S,Oo=new S,Go=new S,OA=class extends PA{constructor(e=new AA,A=new Ct){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=A,this.updateMorphTargets()}copy(e,A){return super.copy(e,A),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,A=Object.keys(e);if(A.length>0){let t=e[A[0]];if(t!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,n=t.length;i<n;i++){let r=t[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=i}}}}getVertexPosition(e,A){let t=this.geometry,i=t.attributes.position,n=t.morphAttributes.position,r=t.morphTargetsRelative;A.fromBufferAttribute(i,e);let s=this.morphTargetInfluences;if(n&&s){Fo.set(0,0,0);for(let U=0,o=n.length;U<o;U++){let l=s[U],c=n[U];l!==0&&(Cc.fromBufferAttribute(c,e),r?Fo.addScaledVector(Cc,l):Fo.addScaledVector(Cc.sub(A),l))}A.add(Fo)}return A}raycast(e,A){let t=this.geometry,i=this.material,n=this.matrixWorld;if(i!==void 0){if(t.boundingSphere===null&&t.computeBoundingSphere(),Jo.copy(t.boundingSphere),Jo.applyMatrix4(n),ar.copy(e.ray).recast(e.near),Jo.containsPoint(ar.origin)===!1&&(ar.intersectSphere(Jo,Dh)===null||ar.origin.distanceToSquared(Dh)>(e.far-e.near)**2))return;Th.copy(n).invert(),ar.copy(e.ray).applyMatrix4(Th),t.boundingBox!==null&&ar.intersectsBox(t.boundingBox)===!1||this._computeIntersections(e,A,ar)}}_computeIntersections(e,A,t){let i,n=this.geometry,r=this.material,s=n.index,U=n.attributes.position,o=n.attributes.uv,l=n.attributes.uv1,c=n.attributes.normal,u=n.groups,h=n.drawRange;if(s!==null)if(Array.isArray(r))for(let p=0,f=u.length;p<f;p++){let m=u[p],M=r[m.materialIndex];for(let T=Math.max(m.start,h.start),D=Math.min(s.count,Math.min(m.start+m.count,h.start+h.count));T<D;T+=3)i=Vo(this,M,e,t,o,l,c,s.getX(T),s.getX(T+1),s.getX(T+2)),i&&(i.faceIndex=Math.floor(T/3),i.face.materialIndex=m.materialIndex,A.push(i))}else for(let p=Math.max(0,h.start),f=Math.min(s.count,h.start+h.count);p<f;p+=3)i=Vo(this,r,e,t,o,l,c,s.getX(p),s.getX(p+1),s.getX(p+2)),i&&(i.faceIndex=Math.floor(p/3),A.push(i));else if(U!==void 0)if(Array.isArray(r))for(let p=0,f=u.length;p<f;p++){let m=u[p],M=r[m.materialIndex];for(let T=Math.max(m.start,h.start),D=Math.min(U.count,Math.min(m.start+m.count,h.start+h.count));T<D;T+=3)i=Vo(this,M,e,t,o,l,c,T,T+1,T+2),i&&(i.faceIndex=Math.floor(T/3),i.face.materialIndex=m.materialIndex,A.push(i))}else for(let p=Math.max(0,h.start),f=Math.min(U.count,h.start+h.count);p<f;p+=3)i=Vo(this,r,e,t,o,l,c,p,p+1,p+2),i&&(i.faceIndex=Math.floor(p/3),A.push(i))}};function Vo(a,e,A,t,i,n,r,s,U,o){a.getVertexPosition(s,ia),a.getVertexPosition(U,na),a.getVertexPosition(o,ra);let l=(function(c,u,h,p,f,m,M,T){let D;if(D=u.side===Ht?p.intersectTriangle(M,m,f,!0,T):p.intersectTriangle(f,m,M,u.side===Ci,T),D===null)return null;Go.copy(T),Go.applyMatrix4(c.matrixWorld);let b=h.ray.origin.distanceTo(Go);return b<h.near||b>h.far?null:{distance:b,point:Go.clone(),object:c}})(a,e,A,t,ia,na,ra,Oo);if(l){i&&(No.fromBufferAttribute(i,s),ko.fromBufferAttribute(i,U),Xo.fromBufferAttribute(i,o),l.uv=hn.getInterpolation(Oo,ia,na,ra,No,ko,Xo,new Te)),n&&(No.fromBufferAttribute(n,s),ko.fromBufferAttribute(n,U),Xo.fromBufferAttribute(n,o),l.uv1=hn.getInterpolation(Oo,ia,na,ra,No,ko,Xo,new Te),l.uv2=l.uv1),r&&(Mh.fromBufferAttribute(r,s),Ih.fromBufferAttribute(r,U),Bh.fromBufferAttribute(r,o),l.normal=hn.getInterpolation(Oo,ia,na,ra,Mh,Ih,Bh,new S),l.normal.dot(t.direction)>0&&l.normal.multiplyScalar(-1));let c={a:s,b:U,c:o,normal:new S,materialIndex:0};hn.getNormal(ia,na,ra,c.normal),l.face=c}return l}var Br=class a extends AA{constructor(e=1,A=1,t=1,i=1,n=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:A,depth:t,widthSegments:i,heightSegments:n,depthSegments:r};let s=this;i=Math.floor(i),n=Math.floor(n),r=Math.floor(r);let U=[],o=[],l=[],c=[],u=0,h=0;function p(f,m,M,T,D,b,L,y,x,X,N){let Y=b/x,re=L/X,J=b/2,te=L/2,Ae=y/2,Me=x+1,Fe=X+1,me=0,Ue=0,se=new S;for(let $=0;$<Fe;$++){let ce=$*re-te;for(let ye=0;ye<Me;ye++){let C=ye*Y-J;se[f]=C*T,se[m]=ce*D,se[M]=Ae,o.push(se.x,se.y,se.z),se[f]=0,se[m]=0,se[M]=y>0?1:-1,l.push(se.x,se.y,se.z),c.push(ye/x),c.push(1-$/X),me+=1}}for(let $=0;$<X;$++)for(let ce=0;ce<x;ce++){let ye=u+ce+Me*$,C=u+ce+Me*($+1),R=u+(ce+1)+Me*($+1),K=u+(ce+1)+Me*$;U.push(ye,C,K),U.push(C,R,K),Ue+=6}s.addGroup(h,Ue,N),h+=Ue,u+=me}p("z","y","x",-1,-1,t,A,e,r,n,0),p("z","y","x",1,-1,t,A,-e,r,n,1),p("x","z","y",1,1,e,t,A,i,r,2),p("x","z","y",1,-1,e,t,-A,i,r,3),p("x","y","z",1,-1,e,A,t,i,n,4),p("x","y","z",-1,-1,e,A,-t,i,n,5),this.setIndex(U),this.setAttribute("position",new Oe(o,3)),this.setAttribute("normal",new Oe(l,3)),this.setAttribute("uv",new Oe(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new a(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Ea(a){let e={};for(let A in a){e[A]={};for(let t in a[A]){let i=a[A][t];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[A][t]=null):e[A][t]=i.clone():Array.isArray(i)?e[A][t]=i.slice():e[A][t]=i}}return e}function Qt(a){let e={};for(let A=0;A<a.length;A++){let t=Ea(a[A]);for(let i in t)e[i]=t[i]}return e}function _p(a){return a.getRenderTarget()===null?a.outputColorSpace:DA.workingColorSpace}var $p={clone:Ea,merge:Qt},pi=class extends WA{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,this.fragmentShader=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ea(e.uniforms),this.uniformsGroups=(function(A){let t=[];for(let i=0;i<A.length;i++)t.push(A[i].clone());return t})(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let A=super.toJSON(e);A.glslVersion=this.glslVersion,A.uniforms={};for(let i in this.uniforms){let n=this.uniforms[i].value;n&&n.isTexture?A.uniforms[i]={type:"t",value:n.toJSON(e).uuid}:n&&n.isColor?A.uniforms[i]={type:"c",value:n.getHex()}:n&&n.isVector2?A.uniforms[i]={type:"v2",value:n.toArray()}:n&&n.isVector3?A.uniforms[i]={type:"v3",value:n.toArray()}:n&&n.isVector4?A.uniforms[i]={type:"v4",value:n.toArray()}:n&&n.isMatrix3?A.uniforms[i]={type:"m3",value:n.toArray()}:n&&n.isMatrix4?A.uniforms[i]={type:"m4",value:n.toArray()}:A.uniforms[i]={value:n}}Object.keys(this.defines).length>0&&(A.defines=this.defines),A.vertexShader=this.vertexShader,A.fragmentShader=this.fragmentShader,A.lights=this.lights,A.clipping=this.clipping;let t={};for(let i in this.extensions)this.extensions[i]===!0&&(t[i]=!0);return Object.keys(t).length>0&&(A.extensions=t),A}},ba=class extends PA{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ze,this.projectionMatrix=new Ze,this.projectionMatrixInverse=new Ze,this.coordinateSystem=Nn}copy(e,A){return super.copy(e,A),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,A){super.updateWorldMatrix(e,A),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},tt=class extends ba{constructor(e=50,A=1,t=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=t,this.far=i,this.focus=10,this.aspect=A,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,A){return super.copy(e,A),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let A=.5*this.getFilmHeight()/e;this.fov=2*Ma*Math.atan(A),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(.5*Tr*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return 2*Ma*Math.atan(Math.tan(.5*Tr*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,A,t,i,n,r){this.aspect=e/A,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=A,this.view.offsetX=t,this.view.offsetY=i,this.view.width=n,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,A=e*Math.tan(.5*Tr*this.fov)/this.zoom,t=2*A,i=this.aspect*t,n=-.5*i,r=this.view;if(this.view!==null&&this.view.enabled){let U=r.fullWidth,o=r.fullHeight;n+=r.offsetX*i/U,A-=r.offsetY*t/o,i*=r.width/U,t*=r.height/o}let s=this.filmOffset;s!==0&&(n+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(n,n+i,A,A-t,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let A=super.toJSON(e);return A.object.fov=this.fov,A.object.zoom=this.zoom,A.object.near=this.near,A.object.far=this.far,A.object.focus=this.focus,A.object.aspect=this.aspect,this.view!==null&&(A.object.view=Object.assign({},this.view)),A.object.filmGauge=this.filmGauge,A.object.filmOffset=this.filmOffset,A}},aa=-90,CU=class extends PA{constructor(e,A,t){super(),this.type="CubeCamera",this.renderTarget=t,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new tt(aa,1,e,A);i.layers=this.layers,this.add(i);let n=new tt(aa,1,e,A);n.layers=this.layers,this.add(n);let r=new tt(aa,1,e,A);r.layers=this.layers,this.add(r);let s=new tt(aa,1,e,A);s.layers=this.layers,this.add(s);let U=new tt(aa,1,e,A);U.layers=this.layers,this.add(U);let o=new tt(aa,1,e,A);o.layers=this.layers,this.add(o)}updateCoordinateSystem(){let e=this.coordinateSystem,A=this.children.concat(),[t,i,n,r,s,U]=A;for(let o of A)this.remove(o);if(e===Nn)t.up.set(0,1,0),t.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),n.up.set(0,0,-1),n.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),s.up.set(0,1,0),s.lookAt(0,0,1),U.up.set(0,1,0),U.lookAt(0,0,-1);else{if(e!==Da)throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);t.up.set(0,-1,0),t.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),n.up.set(0,0,1),n.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),s.up.set(0,-1,0),s.lookAt(0,0,1),U.up.set(0,-1,0),U.lookAt(0,0,-1)}for(let o of A)this.add(o),o.updateMatrixWorld()}update(e,A){this.parent===null&&this.updateMatrixWorld();let{renderTarget:t,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[n,r,s,U,o,l]=this.children,c=e.getRenderTarget(),u=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let f=t.texture.generateMipmaps;t.texture.generateMipmaps=!1,e.setRenderTarget(t,0,i),e.render(A,n),e.setRenderTarget(t,1,i),e.render(A,r),e.setRenderTarget(t,2,i),e.render(A,s),e.setRenderTarget(t,3,i),e.render(A,U),e.setRenderTarget(t,4,i),e.render(A,o),t.texture.generateMipmaps=f,e.setRenderTarget(t,5,i),e.render(A,l),e.setRenderTarget(c,u,h),e.xr.enabled=p,t.texture.needsPMREMUpdate=!0}},Er=class extends KA{constructor(e,A,t,i,n,r,s,U,o,l){super(e=e!==void 0?e:[],A=A!==void 0?A:Pn,t,i,n,r,s,U,o,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},RU=class extends ei{constructor(e=1,A={}){super(e,e,A),this.isWebGLCubeRenderTarget=!0;let t={width:e,height:e,depth:1},i=[t,t,t,t,t,t];A.encoding!==void 0&&(cs("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),A.colorSpace=A.encoding===jn?QA:yi),this.texture=new Er(i,A.mapping,A.wrapS,A.wrapT,A.magFilter,A.minFilter,A.format,A.type,A.anisotropy,A.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=A.generateMipmaps!==void 0&&A.generateMipmaps,this.texture.minFilter=A.minFilter!==void 0?A.minFilter:kA}fromEquirectangularTexture(e,A){this.texture.type=A.type,this.texture.colorSpace=A.colorSpace,this.texture.generateMipmaps=A.generateMipmaps,this.texture.minFilter=A.minFilter,this.texture.magFilter=A.magFilter;let t={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Br(5,5,5),n=new pi({name:"CubemapFromEquirect",uniforms:Ea(t.uniforms),vertexShader:t.vertexShader,fragmentShader:t.fragmentShader,side:Ht,blending:0});n.uniforms.tEquirect.value=A;let r=new OA(i,n),s=A.minFilter;return A.minFilter===Oi&&(A.minFilter=kA),new CU(1,10,this).update(e,r),A.minFilter=s,r.geometry.dispose(),r.material.dispose(),this}clear(e,A,t,i){let n=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(A,t,i);e.setRenderTarget(n)}},Rc=new S,MT=new S,IT=new oA,ki=class{constructor(e=new S(1,0,0),A=0){this.isPlane=!0,this.normal=e,this.constant=A}set(e,A){return this.normal.copy(e),this.constant=A,this}setComponents(e,A,t,i){return this.normal.set(e,A,t),this.constant=i,this}setFromNormalAndCoplanarPoint(e,A){return this.normal.copy(e),this.constant=-A.dot(this.normal),this}setFromCoplanarPoints(e,A,t){let i=Rc.subVectors(t,A).cross(MT.subVectors(e,A)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,A){return A.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,A){let t=e.delta(Rc),i=this.normal.dot(t);if(i===0)return this.distanceToPoint(e.start)===0?A.copy(e.start):null;let n=-(e.start.dot(this.normal)+this.constant)/i;return n<0||n>1?null:A.copy(e.start).addScaledVector(t,n)}intersectsLine(e){let A=this.distanceToPoint(e.start),t=this.distanceToPoint(e.end);return A<0&&t>0||t<0&&A>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,A){let t=A||IT.getNormalMatrix(e),i=this.coplanarPoint(Rc).applyMatrix4(e),n=this.normal.applyMatrix3(t).normalize();return this.constant=-i.dot(n),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},sr=new rt,zo=new S,br=class{constructor(e=new ki,A=new ki,t=new ki,i=new ki,n=new ki,r=new ki){this.planes=[e,A,t,i,n,r]}set(e,A,t,i,n,r){let s=this.planes;return s[0].copy(e),s[1].copy(A),s[2].copy(t),s[3].copy(i),s[4].copy(n),s[5].copy(r),this}copy(e){let A=this.planes;for(let t=0;t<6;t++)A[t].copy(e.planes[t]);return this}setFromProjectionMatrix(e,A=2e3){let t=this.planes,i=e.elements,n=i[0],r=i[1],s=i[2],U=i[3],o=i[4],l=i[5],c=i[6],u=i[7],h=i[8],p=i[9],f=i[10],m=i[11],M=i[12],T=i[13],D=i[14],b=i[15];if(t[0].setComponents(U-n,u-o,m-h,b-M).normalize(),t[1].setComponents(U+n,u+o,m+h,b+M).normalize(),t[2].setComponents(U+r,u+l,m+p,b+T).normalize(),t[3].setComponents(U-r,u-l,m-p,b-T).normalize(),t[4].setComponents(U-s,u-c,m-f,b-D).normalize(),A===Nn)t[5].setComponents(U+s,u+c,m+f,b+D).normalize();else{if(A!==Da)throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+A);t[5].setComponents(s,c,f,D).normalize()}return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),sr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let A=e.geometry;A.boundingSphere===null&&A.computeBoundingSphere(),sr.copy(A.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(sr)}intersectsSprite(e){return sr.center.set(0,0,0),sr.radius=.7071067811865476,sr.applyMatrix4(e.matrixWorld),this.intersectsSphere(sr)}intersectsSphere(e){let A=this.planes,t=e.center,i=-e.radius;for(let n=0;n<6;n++)if(A[n].distanceToPoint(t)<i)return!1;return!0}intersectsBox(e){let A=this.planes;for(let t=0;t<6;t++){let i=A[t];if(zo.x=i.normal.x>0?e.max.x:e.min.x,zo.y=i.normal.y>0?e.max.y:e.min.y,zo.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(zo)<0)return!1}return!0}containsPoint(e){let A=this.planes;for(let t=0;t<6;t++)if(A[t].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function ef(){let a=null,e=!1,A=null,t=null;function i(n,r){A(n,r),t=a.requestAnimationFrame(i)}return{start:function(){e!==!0&&A!==null&&(t=a.requestAnimationFrame(i),e=!0)},stop:function(){a.cancelAnimationFrame(t),e=!1},setAnimationLoop:function(n){A=n},setContext:function(n){a=n}}}function BT(a,e){let A=e.isWebGL2,t=new WeakMap;return{get:function(i){return i.isInterleavedBufferAttribute&&(i=i.data),t.get(i)},remove:function(i){i.isInterleavedBufferAttribute&&(i=i.data);let n=t.get(i);n&&(a.deleteBuffer(n.buffer),t.delete(i))},update:function(i,n){if(i.isGLBufferAttribute){let s=t.get(i);return void((!s||s.version<i.version)&&t.set(i,{buffer:i.buffer,type:i.type,bytesPerElement:i.elementSize,version:i.version}))}i.isInterleavedBufferAttribute&&(i=i.data);let r=t.get(i);if(r===void 0)t.set(i,(function(s,U){let o=s.array,l=s.usage,c=o.byteLength,u=a.createBuffer(),h;if(a.bindBuffer(U,u),a.bufferData(U,o,l),s.onUploadCallback(),o instanceof Float32Array)h=a.FLOAT;else if(o instanceof Uint16Array)if(s.isFloat16BufferAttribute){if(!A)throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");h=a.HALF_FLOAT}else h=a.UNSIGNED_SHORT;else if(o instanceof Int16Array)h=a.SHORT;else if(o instanceof Uint32Array)h=a.UNSIGNED_INT;else if(o instanceof Int32Array)h=a.INT;else if(o instanceof Int8Array)h=a.BYTE;else if(o instanceof Uint8Array)h=a.UNSIGNED_BYTE;else{if(!(o instanceof Uint8ClampedArray))throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+o);h=a.UNSIGNED_BYTE}return{buffer:u,type:h,bytesPerElement:o.BYTES_PER_ELEMENT,version:s.version,size:c}})(i,n));else if(r.version<i.version){if(r.size!==i.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");(function(s,U,o){let l=U.array,c=U._updateRange,u=U.updateRanges;if(a.bindBuffer(o,s),c.count===-1&&u.length===0&&a.bufferSubData(o,0,l),u.length!==0){for(let h=0,p=u.length;h<p;h++){let f=u[h];A?a.bufferSubData(o,f.start*l.BYTES_PER_ELEMENT,l,f.start,f.count):a.bufferSubData(o,f.start*l.BYTES_PER_ELEMENT,l.subarray(f.start,f.start+f.count))}U.clearUpdateRanges()}c.count!==-1&&(A?a.bufferSubData(o,c.offset*l.BYTES_PER_ELEMENT,l,c.offset,c.count):a.bufferSubData(o,c.offset*l.BYTES_PER_ELEMENT,l.subarray(c.offset,c.offset+c.count)),c.count=-1),U.onUploadCallback()})(r.buffer,i,n),r.version=i.version}}}}var ys=class a extends AA{constructor(e=1,A=1,t=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:A,widthSegments:t,heightSegments:i};let n=e/2,r=A/2,s=Math.floor(t),U=Math.floor(i),o=s+1,l=U+1,c=e/s,u=A/U,h=[],p=[],f=[],m=[];for(let M=0;M<l;M++){let T=M*u-r;for(let D=0;D<o;D++){let b=D*c-n;p.push(b,-T,0),f.push(0,0,1),m.push(D/s),m.push(1-M/U)}}for(let M=0;M<U;M++)for(let T=0;T<s;T++){let D=T+o*M,b=T+o*(M+1),L=T+1+o*(M+1),y=T+1+o*M;h.push(D,b,y),h.push(b,L,y)}this.setIndex(h),this.setAttribute("position",new Oe(p,3)),this.setAttribute("normal",new Oe(f,3)),this.setAttribute("uv",new Oe(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new a(e.width,e.height,e.widthSegments,e.heightSegments)}},nA={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:"gl_FragColor = linearToOutputTexel( gl_FragColor );",colorspace_pars_fragment:`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_fragment:`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,distanceRGBA_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distanceRGBA_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},we={common:{diffuse:{value:new Re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new oA},alphaMap:{value:null},alphaMapTransform:{value:new oA},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new oA}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new oA}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new oA}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new oA},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new oA},normalScale:{value:new Te(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new oA},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new oA}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new oA}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new oA}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new oA},alphaTest:{value:0},uvTransform:{value:new oA}},sprite:{diffuse:{value:new Re(16777215)},opacity:{value:1},center:{value:new Te(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new oA},alphaMap:{value:null},alphaMapTransform:{value:new oA},alphaTest:{value:0}}},vi={basic:{uniforms:Qt([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.fog]),vertexShader:nA.meshbasic_vert,fragmentShader:nA.meshbasic_frag},lambert:{uniforms:Qt([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new Re(0)}}]),vertexShader:nA.meshlambert_vert,fragmentShader:nA.meshlambert_frag},phong:{uniforms:Qt([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new Re(0)},specular:{value:new Re(1118481)},shininess:{value:30}}]),vertexShader:nA.meshphong_vert,fragmentShader:nA.meshphong_frag},standard:{uniforms:Qt([we.common,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.roughnessmap,we.metalnessmap,we.fog,we.lights,{emissive:{value:new Re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:nA.meshphysical_vert,fragmentShader:nA.meshphysical_frag},toon:{uniforms:Qt([we.common,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.gradientmap,we.fog,we.lights,{emissive:{value:new Re(0)}}]),vertexShader:nA.meshtoon_vert,fragmentShader:nA.meshtoon_frag},matcap:{uniforms:Qt([we.common,we.bumpmap,we.normalmap,we.displacementmap,we.fog,{matcap:{value:null}}]),vertexShader:nA.meshmatcap_vert,fragmentShader:nA.meshmatcap_frag},points:{uniforms:Qt([we.points,we.fog]),vertexShader:nA.points_vert,fragmentShader:nA.points_frag},dashed:{uniforms:Qt([we.common,we.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:nA.linedashed_vert,fragmentShader:nA.linedashed_frag},depth:{uniforms:Qt([we.common,we.displacementmap]),vertexShader:nA.depth_vert,fragmentShader:nA.depth_frag},normal:{uniforms:Qt([we.common,we.bumpmap,we.normalmap,we.displacementmap,{opacity:{value:1}}]),vertexShader:nA.meshnormal_vert,fragmentShader:nA.meshnormal_frag},sprite:{uniforms:Qt([we.sprite,we.fog]),vertexShader:nA.sprite_vert,fragmentShader:nA.sprite_frag},background:{uniforms:{uvTransform:{value:new oA},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:nA.background_vert,fragmentShader:nA.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:nA.backgroundCube_vert,fragmentShader:nA.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:nA.cube_vert,fragmentShader:nA.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:nA.equirect_vert,fragmentShader:nA.equirect_frag},distanceRGBA:{uniforms:Qt([we.common,we.displacementmap,{referencePosition:{value:new S},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:nA.distanceRGBA_vert,fragmentShader:nA.distanceRGBA_frag},shadow:{uniforms:Qt([we.lights,we.fog,{color:{value:new Re(0)},opacity:{value:1}}]),vertexShader:nA.shadow_vert,fragmentShader:nA.shadow_frag}};vi.physical={uniforms:Qt([vi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new oA},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new oA},clearcoatNormalScale:{value:new Te(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new oA},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new oA},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new oA},sheen:{value:0},sheenColor:{value:new Re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new oA},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new oA},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new oA},transmissionSamplerSize:{value:new Te},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new oA},attenuationDistance:{value:0},attenuationColor:{value:new Re(0)},specularColor:{value:new Re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new oA},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new oA},anisotropyVector:{value:new Te},anisotropyMap:{value:null},anisotropyMapTransform:{value:new oA}}]),vertexShader:nA.meshphysical_vert,fragmentShader:nA.meshphysical_frag};var Yo={r:0,b:0,g:0};function ET(a,e,A,t,i,n,r){let s=new Re(0),U,o,l=n===!0?0:1,c=null,u=0,h=null;function p(f,m){f.getRGB(Yo,_p(a)),t.buffers.color.setClear(Yo.r,Yo.g,Yo.b,m,r)}return{getClearColor:function(){return s},setClearColor:function(f,m=1){s.set(f),l=m,p(s,l)},getClearAlpha:function(){return l},setClearAlpha:function(f){l=f,p(s,l)},render:function(f,m){let M=!1,T=m.isScene===!0?m.background:null;T&&T.isTexture&&(T=(m.backgroundBlurriness>0?A:e).get(T)),T===null?p(s,l):T&&T.isColor&&(p(T,1),M=!0);let D=a.xr.getEnvironmentBlendMode();D==="additive"?t.buffers.color.setClear(0,0,0,1,r):D==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(a.autoClear||M)&&a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil),T&&(T.isCubeTexture||T.mapping===Ja)?(o===void 0&&(o=new OA(new Br(1,1,1),new pi({name:"BackgroundCubeMaterial",uniforms:Ea(vi.backgroundCube.uniforms),vertexShader:vi.backgroundCube.vertexShader,fragmentShader:vi.backgroundCube.fragmentShader,side:Ht,depthTest:!1,depthWrite:!1,fog:!1})),o.geometry.deleteAttribute("normal"),o.geometry.deleteAttribute("uv"),o.onBeforeRender=function(b,L,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(o.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(o)),o.material.uniforms.envMap.value=T,o.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,o.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,o.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,o.material.toneMapped=DA.getTransfer(T.colorSpace)!==SA,c===T&&u===T.version&&h===a.toneMapping||(o.material.needsUpdate=!0,c=T,u=T.version,h=a.toneMapping),o.layers.enableAll(),f.unshift(o,o.geometry,o.material,0,0,null)):T&&T.isTexture&&(U===void 0&&(U=new OA(new ys(2,2),new pi({name:"BackgroundMaterial",uniforms:Ea(vi.background.uniforms),vertexShader:vi.background.vertexShader,fragmentShader:vi.background.fragmentShader,side:Ci,depthTest:!1,depthWrite:!1,fog:!1})),U.geometry.deleteAttribute("normal"),Object.defineProperty(U.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(U)),U.material.uniforms.t2D.value=T,U.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,U.material.toneMapped=DA.getTransfer(T.colorSpace)!==SA,T.matrixAutoUpdate===!0&&T.updateMatrix(),U.material.uniforms.uvTransform.value.copy(T.matrix),c===T&&u===T.version&&h===a.toneMapping||(U.material.needsUpdate=!0,c=T,u=T.version,h=a.toneMapping),U.layers.enableAll(),f.unshift(U,U.geometry,U.material,0,0,null))}}}function bT(a,e,A,t){let i=a.getParameter(a.MAX_VERTEX_ATTRIBS),n=t.isWebGL2?null:e.get("OES_vertex_array_object"),r=t.isWebGL2||n!==null,s={},U=h(null),o=U,l=!1;function c(L){return t.isWebGL2?a.bindVertexArray(L):n.bindVertexArrayOES(L)}function u(L){return t.isWebGL2?a.deleteVertexArray(L):n.deleteVertexArrayOES(L)}function h(L){let y=[],x=[],X=[];for(let N=0;N<i;N++)y[N]=0,x[N]=0,X[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:y,enabledAttributes:x,attributeDivisors:X,object:L,attributes:{},index:null}}function p(){let L=o.newAttributes;for(let y=0,x=L.length;y<x;y++)L[y]=0}function f(L){m(L,0)}function m(L,y){let x=o.newAttributes,X=o.enabledAttributes,N=o.attributeDivisors;x[L]=1,X[L]===0&&(a.enableVertexAttribArray(L),X[L]=1),N[L]!==y&&((t.isWebGL2?a:e.get("ANGLE_instanced_arrays"))[t.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,y),N[L]=y)}function M(){let L=o.newAttributes,y=o.enabledAttributes;for(let x=0,X=y.length;x<X;x++)y[x]!==L[x]&&(a.disableVertexAttribArray(x),y[x]=0)}function T(L,y,x,X,N,Y,re){re===!0?a.vertexAttribIPointer(L,y,x,N,Y):a.vertexAttribPointer(L,y,x,X,N,Y)}function D(){b(),l=!0,o!==U&&(o=U,c(o.object))}function b(){U.geometry=null,U.program=null,U.wireframe=!1}return{setup:function(L,y,x,X,N){let Y=!1;if(r){let re=(function(J,te,Ae){let Me=Ae.wireframe===!0,Fe=s[J.id];Fe===void 0&&(Fe={},s[J.id]=Fe);let me=Fe[te.id];me===void 0&&(me={},Fe[te.id]=me);let Ue=me[Me];return Ue===void 0&&(Ue=h(t.isWebGL2?a.createVertexArray():n.createVertexArrayOES()),me[Me]=Ue),Ue})(X,x,y);o!==re&&(o=re,c(o.object)),Y=(function(J,te,Ae,Me){let Fe=o.attributes,me=te.attributes,Ue=0,se=Ae.getAttributes();for(let $ in se)if(se[$].location>=0){let ce=Fe[$],ye=me[$];if(ye===void 0&&($==="instanceMatrix"&&J.instanceMatrix&&(ye=J.instanceMatrix),$==="instanceColor"&&J.instanceColor&&(ye=J.instanceColor)),ce===void 0||ce.attribute!==ye||ye&&ce.data!==ye.data)return!0;Ue++}return o.attributesNum!==Ue||o.index!==Me})(L,X,x,N),Y&&(function(J,te,Ae,Me){let Fe={},me=te.attributes,Ue=0,se=Ae.getAttributes();for(let $ in se)if(se[$].location>=0){let ce=me[$];ce===void 0&&($==="instanceMatrix"&&J.instanceMatrix&&(ce=J.instanceMatrix),$==="instanceColor"&&J.instanceColor&&(ce=J.instanceColor));let ye={};ye.attribute=ce,ce&&ce.data&&(ye.data=ce.data),Fe[$]=ye,Ue++}o.attributes=Fe,o.attributesNum=Ue,o.index=Me})(L,X,x,N)}else{let re=y.wireframe===!0;o.geometry===X.id&&o.program===x.id&&o.wireframe===re||(o.geometry=X.id,o.program=x.id,o.wireframe=re,Y=!0)}N!==null&&A.update(N,a.ELEMENT_ARRAY_BUFFER),(Y||l)&&(l=!1,(function(re,J,te,Ae){if(t.isWebGL2===!1&&(re.isInstancedMesh||Ae.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;p();let Me=Ae.attributes,Fe=te.getAttributes(),me=J.defaultAttributeValues;for(let Ue in Fe){let se=Fe[Ue];if(se.location>=0){let $=Me[Ue];if($===void 0&&(Ue==="instanceMatrix"&&re.instanceMatrix&&($=re.instanceMatrix),Ue==="instanceColor"&&re.instanceColor&&($=re.instanceColor)),$!==void 0){let ce=$.normalized,ye=$.itemSize,C=A.get($);if(C===void 0)continue;let R=C.buffer,K=C.type,le=C.bytesPerElement,F=t.isWebGL2===!0&&(K===a.INT||K===a.UNSIGNED_INT||$.gpuType===Nd);if($.isInterleavedBufferAttribute){let ie=$.data,O=ie.stride,z=$.offset;if(ie.isInstancedInterleavedBuffer){for(let q=0;q<se.locationSize;q++)m(se.location+q,ie.meshPerAttribute);re.isInstancedMesh!==!0&&Ae._maxInstanceCount===void 0&&(Ae._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let q=0;q<se.locationSize;q++)f(se.location+q);a.bindBuffer(a.ARRAY_BUFFER,R);for(let q=0;q<se.locationSize;q++)T(se.location+q,ye/se.locationSize,K,ce,O*le,(z+ye/se.locationSize*q)*le,F)}else{if($.isInstancedBufferAttribute){for(let ie=0;ie<se.locationSize;ie++)m(se.location+ie,$.meshPerAttribute);re.isInstancedMesh!==!0&&Ae._maxInstanceCount===void 0&&(Ae._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let ie=0;ie<se.locationSize;ie++)f(se.location+ie);a.bindBuffer(a.ARRAY_BUFFER,R);for(let ie=0;ie<se.locationSize;ie++)T(se.location+ie,ye/se.locationSize,K,ce,ye*le,ye/se.locationSize*ie*le,F)}}else if(me!==void 0){let ce=me[Ue];if(ce!==void 0)switch(ce.length){case 2:a.vertexAttrib2fv(se.location,ce);break;case 3:a.vertexAttrib3fv(se.location,ce);break;case 4:a.vertexAttrib4fv(se.location,ce);break;default:a.vertexAttrib1fv(se.location,ce)}}}}M()})(L,y,x,X),N!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,A.get(N).buffer))},reset:D,resetDefaultState:b,dispose:function(){D();for(let L in s){let y=s[L];for(let x in y){let X=y[x];for(let N in X)u(X[N].object),delete X[N];delete y[x]}delete s[L]}},releaseStatesOfGeometry:function(L){if(s[L.id]===void 0)return;let y=s[L.id];for(let x in y){let X=y[x];for(let N in X)u(X[N].object),delete X[N];delete y[x]}delete s[L.id]},releaseStatesOfProgram:function(L){for(let y in s){let x=s[y];if(x[L.id]===void 0)continue;let X=x[L.id];for(let N in X)u(X[N].object),delete X[N];delete x[L.id]}},initAttributes:p,enableAttribute:f,disableUnusedAttributes:M}}function vT(a,e,A,t){let i=t.isWebGL2,n;this.setMode=function(r){n=r},this.render=function(r,s){a.drawArrays(n,r,s),A.update(s,n,1)},this.renderInstances=function(r,s,U){if(U===0)return;let o,l;if(i)o=a,l="drawArraysInstanced";else if(o=e.get("ANGLE_instanced_arrays"),l="drawArraysInstancedANGLE",o===null)return void console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");o[l](n,r,s,U),A.update(s,n,U)},this.renderMultiDraw=function(r,s,U){if(U===0)return;let o=e.get("WEBGL_multi_draw");if(o===null)for(let l=0;l<U;l++)this.render(r[l],s[l]);else{o.multiDrawArraysWEBGL(n,r,0,s,0,U);let l=0;for(let c=0;c<U;c++)l+=s[c];A.update(l,n,1)}}}function yT(a,e,A){let t;function i(b){if(b==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let n=typeof WebGL2RenderingContext!="undefined"&&a.constructor.name==="WebGL2RenderingContext",r=A.precision!==void 0?A.precision:"highp",s=i(r);s!==r&&(console.warn("THREE.WebGLRenderer:",r,"not supported, using",s,"instead."),r=s);let U=n||e.has("WEBGL_draw_buffers"),o=A.logarithmicDepthBuffer===!0,l=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),c=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),u=a.getParameter(a.MAX_TEXTURE_SIZE),h=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),p=a.getParameter(a.MAX_VERTEX_ATTRIBS),f=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),m=a.getParameter(a.MAX_VARYING_VECTORS),M=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),T=c>0,D=n||e.has("OES_texture_float");return{isWebGL2:n,drawBuffers:U,getMaxAnisotropy:function(){if(t!==void 0)return t;if(e.has("EXT_texture_filter_anisotropic")===!0){let b=e.get("EXT_texture_filter_anisotropic");t=a.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else t=0;return t},getMaxPrecision:i,precision:r,logarithmicDepthBuffer:o,maxTextures:l,maxVertexTextures:c,maxTextureSize:u,maxCubemapSize:h,maxAttributes:p,maxVertexUniforms:f,maxVaryings:m,maxFragmentUniforms:M,vertexTextures:T,floatFragmentTextures:D,floatVertexTextures:T&&D,maxSamples:n?a.getParameter(a.MAX_SAMPLES):0}}function wT(a){let e=this,A=null,t=0,i=!1,n=!1,r=new ki,s=new oA,U={value:null,needsUpdate:!1};function o(l,c,u,h){let p=l!==null?l.length:0,f=null;if(p!==0){if(f=U.value,h!==!0||f===null){let m=u+4*p,M=c.matrixWorldInverse;s.getNormalMatrix(M),(f===null||f.length<m)&&(f=new Float32Array(m));for(let T=0,D=u;T!==p;++T,D+=4)r.copy(l[T]).applyMatrix4(M,s),r.normal.toArray(f,D),f[D+3]=r.constant}U.value=f,U.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,f}this.uniform=U,this.numPlanes=0,this.numIntersection=0,this.init=function(l,c){let u=l.length!==0||c||t!==0||i;return i=c,t=l.length,u},this.beginShadows=function(){n=!0,o(null)},this.endShadows=function(){n=!1},this.setGlobalState=function(l,c){A=o(l,c,0)},this.setState=function(l,c,u){let h=l.clippingPlanes,p=l.clipIntersection,f=l.clipShadows,m=a.get(l);if(!i||h===null||h.length===0||n&&!f)n?o(null):(function(){U.value!==A&&(U.value=A,U.needsUpdate=t>0),e.numPlanes=t,e.numIntersection=0})();else{let M=n?0:t,T=4*M,D=m.clippingState||null;U.value=D,D=o(h,c,T,u);for(let b=0;b!==T;++b)D[b]=A[b];m.clippingState=D,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=M}}}function CT(a){let e=new WeakMap;function A(i,n){return n===ps?i.mapping=Pn:n===fs&&(i.mapping=Jn),i}function t(i){let n=i.target;n.removeEventListener("dispose",t);let r=e.get(n);r!==void 0&&(e.delete(n),r.dispose())}return{get:function(i){if(i&&i.isTexture){let n=i.mapping;if(n===ps||n===fs){if(e.has(i))return A(e.get(i).texture,i.mapping);{let r=i.image;if(r&&r.height>0){let s=new RU(r.height/2);return s.fromEquirectangularTexture(a,i),e.set(i,s),i.addEventListener("dispose",t),A(s.texture,i.mapping)}return null}}}return i},dispose:function(){e=new WeakMap}}}var Xn=class extends ba{constructor(e=-1,A=1,t=1,i=-1,n=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=A,this.top=t,this.bottom=i,this.near=n,this.far=r,this.updateProjectionMatrix()}copy(e,A){return super.copy(e,A),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,A,t,i,n,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=A,this.view.offsetX=t,this.view.offsetY=i,this.view.width=n,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),A=(this.top-this.bottom)/(2*this.zoom),t=(this.right+this.left)/2,i=(this.top+this.bottom)/2,n=t-e,r=t+e,s=i+A,U=i-A;if(this.view!==null&&this.view.enabled){let o=(this.right-this.left)/this.view.fullWidth/this.zoom,l=(this.top-this.bottom)/this.view.fullHeight/this.zoom;n+=o*this.view.offsetX,r=n+o*this.view.width,s-=l*this.view.offsetY,U=s-l*this.view.height}this.projectionMatrix.makeOrthographic(n,r,s,U,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let A=super.toJSON(e);return A.object.zoom=this.zoom,A.object.left=this.left,A.object.right=this.right,A.object.top=this.top,A.object.bottom=this.bottom,A.object.near=this.near,A.object.far=this.far,this.view!==null&&(A.object.view=Object.assign({},this.view)),A}},Eh=[.125,.215,.35,.446,.526,.582],As=20,Sc=new Xn,bh=new Re,xc=null,Lc=0,Qc=0,pr=(1+Math.sqrt(5))/2,sa=1/pr,vh=[new S(1,1,1),new S(-1,1,1),new S(1,1,-1),new S(-1,1,-1),new S(0,pr,sa),new S(0,pr,-sa),new S(sa,0,pr),new S(-sa,0,pr),new S(pr,sa,0),new S(-pr,sa,0)],ws=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,A=0,t=.1,i=100){xc=this._renderer.getRenderTarget(),Lc=this._renderer.getActiveCubeFace(),Qc=this._renderer.getActiveMipmapLevel(),this._setSize(256);let n=this._allocateTargets();return n.depthBuffer=!0,this._sceneToCubeUV(e,t,i,n),A>0&&this._blur(n,0,0,A),this._applyPMREM(n),this._cleanup(n),n}fromEquirectangular(e,A=null){return this._fromTexture(e,A)}fromCubemap(e,A=null){return this._fromTexture(e,A)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ch(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=wh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(xc,Lc,Qc),e.scissorTest=!1,Zo(e,0,0,e.width,e.height)}_fromTexture(e,A){e.mapping===Pn||e.mapping===Jn?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),xc=this._renderer.getRenderTarget(),Lc=this._renderer.getActiveCubeFace(),Qc=this._renderer.getActiveMipmapLevel();let t=A||this._allocateTargets();return this._textureToCubeUV(e,t),this._applyPMREM(t),this._cleanup(t),t}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),A=4*this._cubeSize,t={magFilter:kA,minFilter:kA,generateMipmaps:!1,type:Ta,format:qt,colorSpace:at,depthBuffer:!1},i=yh(e,A,t);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==A){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=yh(e,A,t);let{_lodMax:n}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=(function(r){let s=[],U=[],o=[],l=r,c=r-4+1+Eh.length;for(let u=0;u<c;u++){let h=Math.pow(2,l);U.push(h);let p=1/h;u>r-4?p=Eh[u-r+4-1]:u===0&&(p=0),o.push(p);let f=1/(h-2),m=-f,M=1+f,T=[m,m,M,m,M,M,m,m,M,M,m,M],D=6,b=6,L=3,y=2,x=1,X=new Float32Array(L*b*D),N=new Float32Array(y*b*D),Y=new Float32Array(x*b*D);for(let J=0;J<D;J++){let te=J%3*2/3-1,Ae=J>2?0:-1,Me=[te,Ae,0,te+2/3,Ae,0,te+2/3,Ae+1,0,te,Ae,0,te+2/3,Ae+1,0,te,Ae+1,0];X.set(Me,L*b*J),N.set(T,y*b*J);let Fe=[J,J,J,J,J,J];Y.set(Fe,x*b*J)}let re=new AA;re.setAttribute("position",new pA(X,L)),re.setAttribute("uv",new pA(N,y)),re.setAttribute("faceIndex",new pA(Y,x)),s.push(re),l>4&&l--}return{lodPlanes:s,sizeLods:U,sigmas:o}})(n)),this._blurMaterial=(function(r,s,U){let o=new Float32Array(As),l=new S(0,1,0);return new pi({name:"SphericalGaussianBlur",defines:{n:As,CUBEUV_TEXEL_WIDTH:1/s,CUBEUV_TEXEL_HEIGHT:1/U,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:o},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:qd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:0,depthTest:!1,depthWrite:!1})})(n,e,A)}return i}_compileMaterial(e){let A=new OA(this._lodPlanes[0],e);this._renderer.compile(A,Sc)}_sceneToCubeUV(e,A,t,i){let n=new tt(90,1,A,t),r=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],U=this._renderer,o=U.autoClear,l=U.toneMapping;U.getClearColor(bh),U.toneMapping=fn,U.autoClear=!1;let c=new Ct({name:"PMREM.Background",side:Ht,depthWrite:!1,depthTest:!1}),u=new OA(new Br,c),h=!1,p=e.background;p?p.isColor&&(c.color.copy(p),e.background=null,h=!0):(c.color.copy(bh),h=!0);for(let f=0;f<6;f++){let m=f%3;m===0?(n.up.set(0,r[f],0),n.lookAt(s[f],0,0)):m===1?(n.up.set(0,0,r[f]),n.lookAt(0,s[f],0)):(n.up.set(0,r[f],0),n.lookAt(0,0,s[f]));let M=this._cubeSize;Zo(i,m*M,f>2?M:0,M,M),U.setRenderTarget(i),h&&U.render(u,n),U.render(e,n)}u.geometry.dispose(),u.material.dispose(),U.toneMapping=l,U.autoClear=o,e.background=p}_textureToCubeUV(e,A){let t=this._renderer,i=e.mapping===Pn||e.mapping===Jn;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ch()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=wh());let n=i?this._cubemapMaterial:this._equirectMaterial,r=new OA(this._lodPlanes[0],n);n.uniforms.envMap.value=e;let s=this._cubeSize;Zo(A,0,0,3*s,2*s),t.setRenderTarget(A),t.render(r,Sc)}_applyPMREM(e){let A=this._renderer,t=A.autoClear;A.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){let n=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),r=vh[(i-1)%vh.length];this._blur(e,i-1,i,n,r)}A.autoClear=t}_blur(e,A,t,i,n){let r=this._pingPongRenderTarget;this._halfBlur(e,r,A,t,i,"latitudinal",n),this._halfBlur(r,e,t,t,i,"longitudinal",n)}_halfBlur(e,A,t,i,n,r,s){let U=this._renderer,o=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let l=new OA(this._lodPlanes[i],o),c=o.uniforms,u=this._sizeLods[t]-1,h=isFinite(n)?Math.PI/(2*u):2*Math.PI/39,p=n/h,f=isFinite(n)?1+Math.floor(3*p):As;f>As&&console.warn(`sigmaRadians, ${n}, is too large and will clip, as it requested ${f} samples when the maximum is set to 20`);let m=[],M=0;for(let b=0;b<As;++b){let L=b/p,y=Math.exp(-L*L/2);m.push(y),b===0?M+=y:b<f&&(M+=2*y)}for(let b=0;b<m.length;b++)m[b]=m[b]/M;c.envMap.value=e.texture,c.samples.value=f,c.weights.value=m,c.latitudinal.value=r==="latitudinal",s&&(c.poleAxis.value=s);let{_lodMax:T}=this;c.dTheta.value=h,c.mipInt.value=T-t;let D=this._sizeLods[i];Zo(A,3*D*(i>T-4?i-T+4:0),4*(this._cubeSize-D),3*D,2*D),U.setRenderTarget(A),U.render(l,Sc)}};function yh(a,e,A){let t=new ei(a,e,A);return t.texture.mapping=Ja,t.texture.name="PMREM.cubeUv",t.scissorTest=!0,t}function Zo(a,e,A,t,i){a.viewport.set(e,A,t,i),a.scissor.set(e,A,t,i)}function wh(){return new pi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:qd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Ch(){return new pi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:qd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function qd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function RT(a){let e=new WeakMap,A=null;function t(i){let n=i.target;n.removeEventListener("dispose",t);let r=e.get(n);r!==void 0&&(e.delete(n),r.dispose())}return{get:function(i){if(i&&i.isTexture){let n=i.mapping,r=n===ps||n===fs,s=n===Pn||n===Jn;if(r||s){if(i.isRenderTargetTexture&&i.needsPMREMUpdate===!0){i.needsPMREMUpdate=!1;let U=e.get(i);return A===null&&(A=new ws(a)),U=r?A.fromEquirectangular(i,U):A.fromCubemap(i,U),e.set(i,U),U.texture}if(e.has(i))return e.get(i).texture;{let U=i.image;if(r&&U&&U.height>0||s&&U&&(function(o){let l=0,c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c})(U)){A===null&&(A=new ws(a));let o=r?A.fromEquirectangular(i):A.fromCubemap(i);return e.set(i,o),i.addEventListener("dispose",t),o.texture}return null}}}return i},dispose:function(){e=new WeakMap,A!==null&&(A.dispose(),A=null)}}}function ST(a){let e={};function A(t){if(e[t]!==void 0)return e[t];let i;switch(t){case"WEBGL_depth_texture":i=a.getExtension("WEBGL_depth_texture")||a.getExtension("MOZ_WEBGL_depth_texture")||a.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=a.getExtension(t)}return e[t]=i,i}return{has:function(t){return A(t)!==null},init:function(t){t.isWebGL2?(A("EXT_color_buffer_float"),A("WEBGL_clip_cull_distance")):(A("WEBGL_depth_texture"),A("OES_texture_float"),A("OES_texture_half_float"),A("OES_texture_half_float_linear"),A("OES_standard_derivatives"),A("OES_element_index_uint"),A("OES_vertex_array_object"),A("ANGLE_instanced_arrays")),A("OES_texture_float_linear"),A("EXT_color_buffer_half_float"),A("WEBGL_multisampled_render_to_texture")},get:function(t){let i=A(t);return i===null&&console.warn("THREE.WebGLRenderer: "+t+" extension not supported."),i}}}function xT(a,e,A,t){let i={},n=new WeakMap;function r(U){let o=U.target;o.index!==null&&e.remove(o.index);for(let c in o.attributes)e.remove(o.attributes[c]);for(let c in o.morphAttributes){let u=o.morphAttributes[c];for(let h=0,p=u.length;h<p;h++)e.remove(u[h])}o.removeEventListener("dispose",r),delete i[o.id];let l=n.get(o);l&&(e.remove(l),n.delete(o)),t.releaseStatesOfGeometry(o),o.isInstancedBufferGeometry===!0&&delete o._maxInstanceCount,A.memory.geometries--}function s(U){let o=[],l=U.index,c=U.attributes.position,u=0;if(l!==null){let f=l.array;u=l.version;for(let m=0,M=f.length;m<M;m+=3){let T=f[m+0],D=f[m+1],b=f[m+2];o.push(T,D,D,b,b,T)}}else{if(c===void 0)return;{let f=c.array;u=c.version;for(let m=0,M=f.length/3-1;m<M;m+=3){let T=m+0,D=m+1,b=m+2;o.push(T,D,D,b,b,T)}}}let h=new(Kp(o)?vs:bs)(o,1);h.version=u;let p=n.get(U);p&&e.remove(p),n.set(U,h)}return{get:function(U,o){return i[o.id]===!0||(o.addEventListener("dispose",r),i[o.id]=!0,A.memory.geometries++),o},update:function(U){let o=U.attributes;for(let c in o)e.update(o[c],a.ARRAY_BUFFER);let l=U.morphAttributes;for(let c in l){let u=l[c];for(let h=0,p=u.length;h<p;h++)e.update(u[h],a.ARRAY_BUFFER)}},getWireframeAttribute:function(U){let o=n.get(U);if(o){let l=U.index;l!==null&&o.version<l.version&&s(U)}else s(U);return n.get(U)}}}function LT(a,e,A,t){let i=t.isWebGL2,n,r,s;this.setMode=function(U){n=U},this.setIndex=function(U){r=U.type,s=U.bytesPerElement},this.render=function(U,o){a.drawElements(n,o,r,U*s),A.update(o,n,1)},this.renderInstances=function(U,o,l){if(l===0)return;let c,u;if(i)c=a,u="drawElementsInstanced";else if(c=e.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",c===null)return void console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");c[u](n,o,r,U*s,l),A.update(o,n,l)},this.renderMultiDraw=function(U,o,l){if(l===0)return;let c=e.get("WEBGL_multi_draw");if(c===null)for(let u=0;u<l;u++)this.render(U[u]/s,o[u]);else{c.multiDrawElementsWEBGL(n,o,0,r,U,0,l);let u=0;for(let h=0;h<l;h++)u+=o[h];A.update(u,n,1)}}}function QT(a){let e={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:e,programs:null,autoReset:!0,reset:function(){e.calls=0,e.triangles=0,e.points=0,e.lines=0},update:function(A,t,i){switch(e.calls++,t){case a.TRIANGLES:e.triangles+=i*(A/3);break;case a.LINES:e.lines+=i*(A/2);break;case a.LINE_STRIP:e.lines+=i*(A-1);break;case a.LINE_LOOP:e.lines+=i*A;break;case a.POINTS:e.points+=i*A;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",t)}}}}function HT(a,e){return a[0]-e[0]}function jT(a,e){return Math.abs(e[1])-Math.abs(a[1])}function JT(a,e,A){let t={},i=new Float32Array(8),n=new WeakMap,r=new bA,s=[];for(let U=0;U<8;U++)s[U]=[U,0];return{update:function(U,o,l){let c=U.morphTargetInfluences;if(e.isWebGL2===!0){let u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0,p=n.get(o);if(p===void 0||p.count!==h){let te=function(){re.dispose(),n.delete(o),o.removeEventListener("dispose",te)};p!==void 0&&p.texture.dispose();let M=o.morphAttributes.position!==void 0,T=o.morphAttributes.normal!==void 0,D=o.morphAttributes.color!==void 0,b=o.morphAttributes.position||[],L=o.morphAttributes.normal||[],y=o.morphAttributes.color||[],x=0;M===!0&&(x=1),T===!0&&(x=2),D===!0&&(x=3);let X=o.attributes.position.count*x,N=1;X>e.maxTextureSize&&(N=Math.ceil(X/e.maxTextureSize),X=e.maxTextureSize);let Y=new Float32Array(X*N*4*h),re=new Ia(Y,X,N,h);re.type=wi,re.needsUpdate=!0;let J=4*x;for(let Ae=0;Ae<h;Ae++){let Me=b[Ae],Fe=L[Ae],me=y[Ae],Ue=X*N*4*Ae;for(let se=0;se<Me.count;se++){let $=se*J;M===!0&&(r.fromBufferAttribute(Me,se),Y[Ue+$+0]=r.x,Y[Ue+$+1]=r.y,Y[Ue+$+2]=r.z,Y[Ue+$+3]=0),T===!0&&(r.fromBufferAttribute(Fe,se),Y[Ue+$+4]=r.x,Y[Ue+$+5]=r.y,Y[Ue+$+6]=r.z,Y[Ue+$+7]=0),D===!0&&(r.fromBufferAttribute(me,se),Y[Ue+$+8]=r.x,Y[Ue+$+9]=r.y,Y[Ue+$+10]=r.z,Y[Ue+$+11]=me.itemSize===4?r.w:1)}}p={count:h,texture:re,size:new Te(X,N)},n.set(o,p),o.addEventListener("dispose",te)}let f=0;for(let M=0;M<c.length;M++)f+=c[M];let m=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(a,"morphTargetBaseInfluence",m),l.getUniforms().setValue(a,"morphTargetInfluences",c),l.getUniforms().setValue(a,"morphTargetsTexture",p.texture,A),l.getUniforms().setValue(a,"morphTargetsTextureSize",p.size)}else{let u=c===void 0?0:c.length,h=t[o.id];if(h===void 0||h.length!==u){h=[];for(let T=0;T<u;T++)h[T]=[T,0];t[o.id]=h}for(let T=0;T<u;T++){let D=h[T];D[0]=T,D[1]=c[T]}h.sort(jT);for(let T=0;T<8;T++)T<u&&h[T][1]?(s[T][0]=h[T][0],s[T][1]=h[T][1]):(s[T][0]=Number.MAX_SAFE_INTEGER,s[T][1]=0);s.sort(HT);let p=o.morphAttributes.position,f=o.morphAttributes.normal,m=0;for(let T=0;T<8;T++){let D=s[T],b=D[0],L=D[1];b!==Number.MAX_SAFE_INTEGER&&L?(p&&o.getAttribute("morphTarget"+T)!==p[b]&&o.setAttribute("morphTarget"+T,p[b]),f&&o.getAttribute("morphNormal"+T)!==f[b]&&o.setAttribute("morphNormal"+T,f[b]),i[T]=L,m+=L):(p&&o.hasAttribute("morphTarget"+T)===!0&&o.deleteAttribute("morphTarget"+T),f&&o.hasAttribute("morphNormal"+T)===!0&&o.deleteAttribute("morphNormal"+T),i[T]=0)}let M=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(a,"morphTargetBaseInfluence",M),l.getUniforms().setValue(a,"morphTargetInfluences",i)}}}}function FT(a,e,A,t){let i=new WeakMap;function n(r){let s=r.target;s.removeEventListener("dispose",n),A.remove(s.instanceMatrix),s.instanceColor!==null&&A.remove(s.instanceColor)}return{update:function(r){let s=t.render.frame,U=r.geometry,o=e.get(r,U);if(i.get(o)!==s&&(e.update(o),i.set(o,s)),r.isInstancedMesh&&(r.hasEventListener("dispose",n)===!1&&r.addEventListener("dispose",n),i.get(r)!==s&&(A.update(r.instanceMatrix,a.ARRAY_BUFFER),r.instanceColor!==null&&A.update(r.instanceColor,a.ARRAY_BUFFER),i.set(r,s))),r.isSkinnedMesh){let l=r.skeleton;i.get(l)!==s&&(l.update(),i.set(l,s))}return o},dispose:function(){i=new WeakMap}}}var Cs=class extends KA{constructor(e,A,t,i,n,r,s,U,o,l){if((l=l!==void 0?l:Hn)!==Hn&&l!==Mr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");t===void 0&&l===Hn&&(t=un),t===void 0&&l===Mr&&(t=Qn),super(null,i,n,r,s,U,l,t,o),this.isDepthTexture=!0,this.image={width:e,height:A},this.magFilter=s!==void 0?s:At,this.minFilter=U!==void 0?U:At,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let A=super.toJSON(e);return this.compareFunction!==null&&(A.compareFunction=this.compareFunction),A}},Af=new KA,tf=new Cs(1,1);tf.compareFunction=515;var nf=new Ia,rf=new Bs,af=new Er,Rh=[],Sh=[],xh=new Float32Array(16),Lh=new Float32Array(9),Qh=new Float32Array(4);function Na(a,e,A){let t=a[0];if(t<=0||t>0)return a;let i=e*A,n=Rh[i];if(n===void 0&&(n=new Float32Array(i),Rh[i]=n),e!==0){t.toArray(n,0);for(let r=1,s=0;r!==e;++r)s+=A,a[r].toArray(n,s)}return n}function lt(a,e){if(a.length!==e.length)return!1;for(let A=0,t=a.length;A<t;A++)if(a[A]!==e[A])return!1;return!0}function ct(a,e){for(let A=0,t=e.length;A<t;A++)a[A]=e[A]}function Ql(a,e){let A=Sh[e];A===void 0&&(A=new Int32Array(e),Sh[e]=A);for(let t=0;t!==e;++t)A[t]=a.allocateTextureUnit();return A}function NT(a,e){let A=this.cache;A[0]!==e&&(a.uniform1f(this.addr,e),A[0]=e)}function kT(a,e){let A=this.cache;if(e.x!==void 0)A[0]===e.x&&A[1]===e.y||(a.uniform2f(this.addr,e.x,e.y),A[0]=e.x,A[1]=e.y);else{if(lt(A,e))return;a.uniform2fv(this.addr,e),ct(A,e)}}function XT(a,e){let A=this.cache;if(e.x!==void 0)A[0]===e.x&&A[1]===e.y&&A[2]===e.z||(a.uniform3f(this.addr,e.x,e.y,e.z),A[0]=e.x,A[1]=e.y,A[2]=e.z);else if(e.r!==void 0)A[0]===e.r&&A[1]===e.g&&A[2]===e.b||(a.uniform3f(this.addr,e.r,e.g,e.b),A[0]=e.r,A[1]=e.g,A[2]=e.b);else{if(lt(A,e))return;a.uniform3fv(this.addr,e),ct(A,e)}}function OT(a,e){let A=this.cache;if(e.x!==void 0)A[0]===e.x&&A[1]===e.y&&A[2]===e.z&&A[3]===e.w||(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),A[0]=e.x,A[1]=e.y,A[2]=e.z,A[3]=e.w);else{if(lt(A,e))return;a.uniform4fv(this.addr,e),ct(A,e)}}function GT(a,e){let A=this.cache,t=e.elements;if(t===void 0){if(lt(A,e))return;a.uniformMatrix2fv(this.addr,!1,e),ct(A,e)}else{if(lt(A,t))return;Qh.set(t),a.uniformMatrix2fv(this.addr,!1,Qh),ct(A,t)}}function VT(a,e){let A=this.cache,t=e.elements;if(t===void 0){if(lt(A,e))return;a.uniformMatrix3fv(this.addr,!1,e),ct(A,e)}else{if(lt(A,t))return;Lh.set(t),a.uniformMatrix3fv(this.addr,!1,Lh),ct(A,t)}}function zT(a,e){let A=this.cache,t=e.elements;if(t===void 0){if(lt(A,e))return;a.uniformMatrix4fv(this.addr,!1,e),ct(A,e)}else{if(lt(A,t))return;xh.set(t),a.uniformMatrix4fv(this.addr,!1,xh),ct(A,t)}}function YT(a,e){let A=this.cache;A[0]!==e&&(a.uniform1i(this.addr,e),A[0]=e)}function ZT(a,e){let A=this.cache;if(e.x!==void 0)A[0]===e.x&&A[1]===e.y||(a.uniform2i(this.addr,e.x,e.y),A[0]=e.x,A[1]=e.y);else{if(lt(A,e))return;a.uniform2iv(this.addr,e),ct(A,e)}}function KT(a,e){let A=this.cache;if(e.x!==void 0)A[0]===e.x&&A[1]===e.y&&A[2]===e.z||(a.uniform3i(this.addr,e.x,e.y,e.z),A[0]=e.x,A[1]=e.y,A[2]=e.z);else{if(lt(A,e))return;a.uniform3iv(this.addr,e),ct(A,e)}}function WT(a,e){let A=this.cache;if(e.x!==void 0)A[0]===e.x&&A[1]===e.y&&A[2]===e.z&&A[3]===e.w||(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),A[0]=e.x,A[1]=e.y,A[2]=e.z,A[3]=e.w);else{if(lt(A,e))return;a.uniform4iv(this.addr,e),ct(A,e)}}function qT(a,e){let A=this.cache;A[0]!==e&&(a.uniform1ui(this.addr,e),A[0]=e)}function _T(a,e){let A=this.cache;if(e.x!==void 0)A[0]===e.x&&A[1]===e.y||(a.uniform2ui(this.addr,e.x,e.y),A[0]=e.x,A[1]=e.y);else{if(lt(A,e))return;a.uniform2uiv(this.addr,e),ct(A,e)}}function $T(a,e){let A=this.cache;if(e.x!==void 0)A[0]===e.x&&A[1]===e.y&&A[2]===e.z||(a.uniform3ui(this.addr,e.x,e.y,e.z),A[0]=e.x,A[1]=e.y,A[2]=e.z);else{if(lt(A,e))return;a.uniform3uiv(this.addr,e),ct(A,e)}}function eD(a,e){let A=this.cache;if(e.x!==void 0)A[0]===e.x&&A[1]===e.y&&A[2]===e.z&&A[3]===e.w||(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),A[0]=e.x,A[1]=e.y,A[2]=e.z,A[3]=e.w);else{if(lt(A,e))return;a.uniform4uiv(this.addr,e),ct(A,e)}}function AD(a,e,A){let t=this.cache,i=A.allocateTextureUnit();t[0]!==i&&(a.uniform1i(this.addr,i),t[0]=i);let n=this.type===a.SAMPLER_2D_SHADOW?tf:Af;A.setTexture2D(e||n,i)}function tD(a,e,A){let t=this.cache,i=A.allocateTextureUnit();t[0]!==i&&(a.uniform1i(this.addr,i),t[0]=i),A.setTexture3D(e||rf,i)}function iD(a,e,A){let t=this.cache,i=A.allocateTextureUnit();t[0]!==i&&(a.uniform1i(this.addr,i),t[0]=i),A.setTextureCube(e||af,i)}function nD(a,e,A){let t=this.cache,i=A.allocateTextureUnit();t[0]!==i&&(a.uniform1i(this.addr,i),t[0]=i),A.setTexture2DArray(e||nf,i)}function rD(a,e){a.uniform1fv(this.addr,e)}function aD(a,e){let A=Na(e,this.size,2);a.uniform2fv(this.addr,A)}function sD(a,e){let A=Na(e,this.size,3);a.uniform3fv(this.addr,A)}function oD(a,e){let A=Na(e,this.size,4);a.uniform4fv(this.addr,A)}function UD(a,e){let A=Na(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,A)}function lD(a,e){let A=Na(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,A)}function cD(a,e){let A=Na(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,A)}function uD(a,e){a.uniform1iv(this.addr,e)}function dD(a,e){a.uniform2iv(this.addr,e)}function hD(a,e){a.uniform3iv(this.addr,e)}function pD(a,e){a.uniform4iv(this.addr,e)}function fD(a,e){a.uniform1uiv(this.addr,e)}function mD(a,e){a.uniform2uiv(this.addr,e)}function gD(a,e){a.uniform3uiv(this.addr,e)}function PD(a,e){a.uniform4uiv(this.addr,e)}function TD(a,e,A){let t=this.cache,i=e.length,n=Ql(A,i);lt(t,n)||(a.uniform1iv(this.addr,n),ct(t,n));for(let r=0;r!==i;++r)A.setTexture2D(e[r]||Af,n[r])}function DD(a,e,A){let t=this.cache,i=e.length,n=Ql(A,i);lt(t,n)||(a.uniform1iv(this.addr,n),ct(t,n));for(let r=0;r!==i;++r)A.setTexture3D(e[r]||rf,n[r])}function MD(a,e,A){let t=this.cache,i=e.length,n=Ql(A,i);lt(t,n)||(a.uniform1iv(this.addr,n),ct(t,n));for(let r=0;r!==i;++r)A.setTextureCube(e[r]||af,n[r])}function ID(a,e,A){let t=this.cache,i=e.length,n=Ql(A,i);lt(t,n)||(a.uniform1iv(this.addr,n),ct(t,n));for(let r=0;r!==i;++r)A.setTexture2DArray(e[r]||nf,n[r])}var ju=class{constructor(e,A,t){this.id=e,this.addr=t,this.cache=[],this.type=A.type,this.setValue=(function(i){switch(i){case 5126:return NT;case 35664:return kT;case 35665:return XT;case 35666:return OT;case 35674:return GT;case 35675:return VT;case 35676:return zT;case 5124:case 35670:return YT;case 35667:case 35671:return ZT;case 35668:case 35672:return KT;case 35669:case 35673:return WT;case 5125:return qT;case 36294:return _T;case 36295:return $T;case 36296:return eD;case 35678:case 36198:case 36298:case 36306:case 35682:return AD;case 35679:case 36299:case 36307:return tD;case 35680:case 36300:case 36308:case 36293:return iD;case 36289:case 36303:case 36311:case 36292:return nD}})(A.type)}},Ju=class{constructor(e,A,t){this.id=e,this.addr=t,this.cache=[],this.type=A.type,this.size=A.size,this.setValue=(function(i){switch(i){case 5126:return rD;case 35664:return aD;case 35665:return sD;case 35666:return oD;case 35674:return UD;case 35675:return lD;case 35676:return cD;case 5124:case 35670:return uD;case 35667:case 35671:return dD;case 35668:case 35672:return hD;case 35669:case 35673:return pD;case 5125:return fD;case 36294:return mD;case 36295:return gD;case 36296:return PD;case 35678:case 36198:case 36298:case 36306:case 35682:return TD;case 35679:case 36299:case 36307:return DD;case 35680:case 36300:case 36308:case 36293:return MD;case 36289:case 36303:case 36311:case 36292:return ID}})(A.type)}},Fu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,A,t){let i=this.seq;for(let n=0,r=i.length;n!==r;++n){let s=i[n];s.setValue(e,A[s.id],t)}}},Hc=/(\w+)(\])?(\[|\.)?/g;function Hh(a,e){a.seq.push(e),a.map[e.id]=e}function BD(a,e,A){let t=a.name,i=t.length;for(Hc.lastIndex=0;;){let n=Hc.exec(t),r=Hc.lastIndex,s=n[1],U=n[2]==="]",o=n[3];if(U&&(s|=0),o===void 0||o==="["&&r+2===i){Hh(A,o===void 0?new ju(s,a,e):new Ju(s,a,e));break}{let l=A.map[s];l===void 0&&(l=new Fu(s),Hh(A,l)),A=l}}}var ga=class{constructor(e,A){this.seq=[],this.map={};let t=e.getProgramParameter(A,e.ACTIVE_UNIFORMS);for(let i=0;i<t;++i){let n=e.getActiveUniform(A,i);BD(n,e.getUniformLocation(A,n.name),this)}}setValue(e,A,t,i){let n=this.map[A];n!==void 0&&n.setValue(e,t,i)}setOptional(e,A,t){let i=A[t];i!==void 0&&this.setValue(e,t,i)}static upload(e,A,t,i){for(let n=0,r=A.length;n!==r;++n){let s=A[n],U=t[s.id];U.needsUpdate!==!1&&s.setValue(e,U.value,i)}}static seqWithValue(e,A){let t=[];for(let i=0,n=e.length;i!==n;++i){let r=e[i];r.id in A&&t.push(r)}return t}};function jh(a,e,A){let t=a.createShader(e);return a.shaderSource(t,A),a.compileShader(t),t}var ED=37297,bD=0;function Jh(a,e,A){let t=a.getShaderParameter(e,a.COMPILE_STATUS),i=a.getShaderInfoLog(e).trim();if(t&&i==="")return"";let n=/ERROR: 0:(\d+)/.exec(i);if(n){let r=parseInt(n[1]);return A.toUpperCase()+`

`+i+`

`+(function(s,U){let o=s.split(`
`),l=[],c=Math.max(U-6,0),u=Math.min(U+6,o.length);for(let h=c;h<u;h++){let p=h+1;l.push(`${p===U?">":" "} ${p}: ${o[h]}`)}return l.join(`
`)})(a.getShaderSource(e),r)}return i}function vD(a,e){let A=(function(t){let i=DA.getPrimaries(DA.workingColorSpace),n=DA.getPrimaries(t),r;switch(i===n?r="":i===Ts&&n===Ps?r="LinearDisplayP3ToLinearSRGB":i===Ps&&n===Ts&&(r="LinearSRGBToLinearDisplayP3"),t){case at:case Ao:return[r,"LinearTransferOETF"];case QA:case Ll:return[r,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[r,"LinearTransferOETF"]}})(e);return`vec4 ${a}( vec4 value ) { return ${A[0]}( ${A[1]}( value ) ); }`}function yD(a,e){let A;switch(e){case kp:A="Linear";break;case Xp:A="Reinhard";break;case Op:A="OptimizedCineon";break;case Gp:A="ACESFilmic";break;case zp:A="AgX";break;case Vp:A="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),A="Linear"}return"vec3 "+a+"( vec3 color ) { return "+A+"ToneMapping( color ); }"}function oa(a){return a!==""}function Fh(a,e){let A=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,A).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Nh(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var wD=/^[ \t]*#include +<([\w\d./]+)>/gm;function Nu(a){return a.replace(wD,RD)}var CD=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function RD(a,e){let A=nA[e];if(A===void 0){let t=CD.get(e);if(t===void 0)throw new Error("Can not resolve #include <"+e+">");A=nA[t],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,t)}return Nu(A)}var SD=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function kh(a){return a.replace(SD,xD)}function xD(a,e,A,t){let i="";for(let n=parseInt(e);n<parseInt(A);n++)i+=t.replace(/\[\s*i\s*\]/g,"[ "+n+" ]").replace(/UNROLLED_LOOP_INDEX/g,n);return i}function Xh(a){let e="precision "+a.precision+` float;
precision `+a.precision+" int;";return a.precision==="highp"?e+=`
#define HIGH_PRECISION`:a.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function LD(a,e,A,t){let i=a.getContext(),n=A.defines,r=A.vertexShader,s=A.fragmentShader,U=(function(J){let te="SHADOWMAP_TYPE_BASIC";return J.shadowMapType===Jd?te="SHADOWMAP_TYPE_PCF":J.shadowMapType===Jp?te="SHADOWMAP_TYPE_PCF_SOFT":J.shadowMapType===Ni&&(te="SHADOWMAP_TYPE_VSM"),te})(A),o=(function(J){let te="ENVMAP_TYPE_CUBE";if(J.envMap)switch(J.envMapMode){case Pn:case Jn:te="ENVMAP_TYPE_CUBE";break;case Ja:te="ENVMAP_TYPE_CUBE_UV"}return te})(A),l=(function(J){let te="ENVMAP_MODE_REFLECTION";return J.envMap&&J.envMapMode===Jn&&(te="ENVMAP_MODE_REFRACTION"),te})(A),c=(function(J){let te="ENVMAP_BLENDING_NONE";if(J.envMap)switch(J.combine){case _s:te="ENVMAP_BLENDING_MULTIPLY";break;case Fp:te="ENVMAP_BLENDING_MIX";break;case Np:te="ENVMAP_BLENDING_ADD"}return te})(A),u=(function(J){let te=J.envMapCubeUVHeight;if(te===null)return null;let Ae=Math.log2(te)-2,Me=1/te;return{texelWidth:1/(3*Math.max(Math.pow(2,Ae),112)),texelHeight:Me,maxMip:Ae}})(A),h=A.isWebGL2?"":(function(J){return[J.extensionDerivatives||J.envMapCubeUVHeight||J.bumpMap||J.normalMapTangentSpace||J.clearcoatNormalMap||J.flatShading||J.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(J.extensionFragDepth||J.logarithmicDepthBuffer)&&J.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",J.extensionDrawBuffers&&J.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(J.extensionShaderTextureLOD||J.envMap||J.transmission)&&J.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(oa).join(`
`)})(A),p=(function(J){return[J.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(oa).join(`
`)})(A),f=(function(J){let te=[];for(let Ae in J){let Me=J[Ae];Me!==!1&&te.push("#define "+Ae+" "+Me)}return te.join(`
`)})(n),m=i.createProgram(),M,T,D=A.glslVersion?"#version "+A.glslVersion+`
`:"";A.isRawShaderMaterial?(M=["#define SHADER_TYPE "+A.shaderType,"#define SHADER_NAME "+A.shaderName,f].filter(oa).join(`
`),M.length>0&&(M+=`
`),T=[h,"#define SHADER_TYPE "+A.shaderType,"#define SHADER_NAME "+A.shaderName,f].filter(oa).join(`
`),T.length>0&&(T+=`
`)):(M=[Xh(A),"#define SHADER_TYPE "+A.shaderType,"#define SHADER_NAME "+A.shaderName,f,A.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",A.batching?"#define USE_BATCHING":"",A.instancing?"#define USE_INSTANCING":"",A.instancingColor?"#define USE_INSTANCING_COLOR":"",A.useFog&&A.fog?"#define USE_FOG":"",A.useFog&&A.fogExp2?"#define FOG_EXP2":"",A.map?"#define USE_MAP":"",A.envMap?"#define USE_ENVMAP":"",A.envMap?"#define "+l:"",A.lightMap?"#define USE_LIGHTMAP":"",A.aoMap?"#define USE_AOMAP":"",A.bumpMap?"#define USE_BUMPMAP":"",A.normalMap?"#define USE_NORMALMAP":"",A.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",A.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",A.displacementMap?"#define USE_DISPLACEMENTMAP":"",A.emissiveMap?"#define USE_EMISSIVEMAP":"",A.anisotropy?"#define USE_ANISOTROPY":"",A.anisotropyMap?"#define USE_ANISOTROPYMAP":"",A.clearcoatMap?"#define USE_CLEARCOATMAP":"",A.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",A.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",A.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",A.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",A.specularMap?"#define USE_SPECULARMAP":"",A.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",A.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",A.roughnessMap?"#define USE_ROUGHNESSMAP":"",A.metalnessMap?"#define USE_METALNESSMAP":"",A.alphaMap?"#define USE_ALPHAMAP":"",A.alphaHash?"#define USE_ALPHAHASH":"",A.transmission?"#define USE_TRANSMISSION":"",A.transmissionMap?"#define USE_TRANSMISSIONMAP":"",A.thicknessMap?"#define USE_THICKNESSMAP":"",A.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",A.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",A.mapUv?"#define MAP_UV "+A.mapUv:"",A.alphaMapUv?"#define ALPHAMAP_UV "+A.alphaMapUv:"",A.lightMapUv?"#define LIGHTMAP_UV "+A.lightMapUv:"",A.aoMapUv?"#define AOMAP_UV "+A.aoMapUv:"",A.emissiveMapUv?"#define EMISSIVEMAP_UV "+A.emissiveMapUv:"",A.bumpMapUv?"#define BUMPMAP_UV "+A.bumpMapUv:"",A.normalMapUv?"#define NORMALMAP_UV "+A.normalMapUv:"",A.displacementMapUv?"#define DISPLACEMENTMAP_UV "+A.displacementMapUv:"",A.metalnessMapUv?"#define METALNESSMAP_UV "+A.metalnessMapUv:"",A.roughnessMapUv?"#define ROUGHNESSMAP_UV "+A.roughnessMapUv:"",A.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+A.anisotropyMapUv:"",A.clearcoatMapUv?"#define CLEARCOATMAP_UV "+A.clearcoatMapUv:"",A.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+A.clearcoatNormalMapUv:"",A.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+A.clearcoatRoughnessMapUv:"",A.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+A.iridescenceMapUv:"",A.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+A.iridescenceThicknessMapUv:"",A.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+A.sheenColorMapUv:"",A.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+A.sheenRoughnessMapUv:"",A.specularMapUv?"#define SPECULARMAP_UV "+A.specularMapUv:"",A.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+A.specularColorMapUv:"",A.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+A.specularIntensityMapUv:"",A.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+A.transmissionMapUv:"",A.thicknessMapUv?"#define THICKNESSMAP_UV "+A.thicknessMapUv:"",A.vertexTangents&&A.flatShading===!1?"#define USE_TANGENT":"",A.vertexColors?"#define USE_COLOR":"",A.vertexAlphas?"#define USE_COLOR_ALPHA":"",A.vertexUv1s?"#define USE_UV1":"",A.vertexUv2s?"#define USE_UV2":"",A.vertexUv3s?"#define USE_UV3":"",A.pointsUvs?"#define USE_POINTS_UV":"",A.flatShading?"#define FLAT_SHADED":"",A.skinning?"#define USE_SKINNING":"",A.morphTargets?"#define USE_MORPHTARGETS":"",A.morphNormals&&A.flatShading===!1?"#define USE_MORPHNORMALS":"",A.morphColors&&A.isWebGL2?"#define USE_MORPHCOLORS":"",A.morphTargetsCount>0&&A.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",A.morphTargetsCount>0&&A.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+A.morphTextureStride:"",A.morphTargetsCount>0&&A.isWebGL2?"#define MORPHTARGETS_COUNT "+A.morphTargetsCount:"",A.doubleSided?"#define DOUBLE_SIDED":"",A.flipSided?"#define FLIP_SIDED":"",A.shadowMapEnabled?"#define USE_SHADOWMAP":"",A.shadowMapEnabled?"#define "+U:"",A.sizeAttenuation?"#define USE_SIZEATTENUATION":"",A.numLightProbes>0?"#define USE_LIGHT_PROBES":"",A.useLegacyLights?"#define LEGACY_LIGHTS":"",A.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",A.logarithmicDepthBuffer&&A.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(oa).join(`
`),T=[h,Xh(A),"#define SHADER_TYPE "+A.shaderType,"#define SHADER_NAME "+A.shaderName,f,A.useFog&&A.fog?"#define USE_FOG":"",A.useFog&&A.fogExp2?"#define FOG_EXP2":"",A.map?"#define USE_MAP":"",A.matcap?"#define USE_MATCAP":"",A.envMap?"#define USE_ENVMAP":"",A.envMap?"#define "+o:"",A.envMap?"#define "+l:"",A.envMap?"#define "+c:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",A.lightMap?"#define USE_LIGHTMAP":"",A.aoMap?"#define USE_AOMAP":"",A.bumpMap?"#define USE_BUMPMAP":"",A.normalMap?"#define USE_NORMALMAP":"",A.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",A.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",A.emissiveMap?"#define USE_EMISSIVEMAP":"",A.anisotropy?"#define USE_ANISOTROPY":"",A.anisotropyMap?"#define USE_ANISOTROPYMAP":"",A.clearcoat?"#define USE_CLEARCOAT":"",A.clearcoatMap?"#define USE_CLEARCOATMAP":"",A.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",A.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",A.iridescence?"#define USE_IRIDESCENCE":"",A.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",A.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",A.specularMap?"#define USE_SPECULARMAP":"",A.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",A.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",A.roughnessMap?"#define USE_ROUGHNESSMAP":"",A.metalnessMap?"#define USE_METALNESSMAP":"",A.alphaMap?"#define USE_ALPHAMAP":"",A.alphaTest?"#define USE_ALPHATEST":"",A.alphaHash?"#define USE_ALPHAHASH":"",A.sheen?"#define USE_SHEEN":"",A.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",A.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",A.transmission?"#define USE_TRANSMISSION":"",A.transmissionMap?"#define USE_TRANSMISSIONMAP":"",A.thicknessMap?"#define USE_THICKNESSMAP":"",A.vertexTangents&&A.flatShading===!1?"#define USE_TANGENT":"",A.vertexColors||A.instancingColor?"#define USE_COLOR":"",A.vertexAlphas?"#define USE_COLOR_ALPHA":"",A.vertexUv1s?"#define USE_UV1":"",A.vertexUv2s?"#define USE_UV2":"",A.vertexUv3s?"#define USE_UV3":"",A.pointsUvs?"#define USE_POINTS_UV":"",A.gradientMap?"#define USE_GRADIENTMAP":"",A.flatShading?"#define FLAT_SHADED":"",A.doubleSided?"#define DOUBLE_SIDED":"",A.flipSided?"#define FLIP_SIDED":"",A.shadowMapEnabled?"#define USE_SHADOWMAP":"",A.shadowMapEnabled?"#define "+U:"",A.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",A.numLightProbes>0?"#define USE_LIGHT_PROBES":"",A.useLegacyLights?"#define LEGACY_LIGHTS":"",A.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",A.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",A.logarithmicDepthBuffer&&A.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",A.toneMapping!==fn?"#define TONE_MAPPING":"",A.toneMapping!==fn?nA.tonemapping_pars_fragment:"",A.toneMapping!==fn?yD("toneMapping",A.toneMapping):"",A.dithering?"#define DITHERING":"",A.opaque?"#define OPAQUE":"",nA.colorspace_pars_fragment,vD("linearToOutputTexel",A.outputColorSpace),A.useDepthPacking?"#define DEPTH_PACKING "+A.depthPacking:"",`
`].filter(oa).join(`
`)),r=Nu(r),r=Fh(r,A),r=Nh(r,A),s=Nu(s),s=Fh(s,A),s=Nh(s,A),r=kh(r),s=kh(s),A.isWebGL2&&A.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,M=[p,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,T=["precision mediump sampler2DArray;","#define varying in",A.glslVersion===Bu?"":"layout(location = 0) out highp vec4 pc_fragColor;",A.glslVersion===Bu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+T);let b=D+M+r,L=D+T+s,y=jh(i,i.VERTEX_SHADER,b),x=jh(i,i.FRAGMENT_SHADER,L);function X(J){if(a.debug.checkShaderErrors){let te=i.getProgramInfoLog(m).trim(),Ae=i.getShaderInfoLog(y).trim(),Me=i.getShaderInfoLog(x).trim(),Fe=!0,me=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(Fe=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(i,m,y,x);else{let Ue=Jh(i,y,"vertex"),se=Jh(i,x,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Program Info Log: `+te+`
`+Ue+`
`+se)}else te!==""?console.warn("THREE.WebGLProgram: Program Info Log:",te):Ae!==""&&Me!==""||(me=!1);me&&(J.diagnostics={runnable:Fe,programLog:te,vertexShader:{log:Ae,prefix:M},fragmentShader:{log:Me,prefix:T}})}i.deleteShader(y),i.deleteShader(x),N=new ga(i,m),Y=(function(te,Ae){let Me={},Fe=te.getProgramParameter(Ae,te.ACTIVE_ATTRIBUTES);for(let me=0;me<Fe;me++){let Ue=te.getActiveAttrib(Ae,me),se=Ue.name,$=1;Ue.type===te.FLOAT_MAT2&&($=2),Ue.type===te.FLOAT_MAT3&&($=3),Ue.type===te.FLOAT_MAT4&&($=4),Me[se]={type:Ue.type,location:te.getAttribLocation(Ae,se),locationSize:$}}return Me})(i,m)}let N,Y;i.attachShader(m,y),i.attachShader(m,x),A.index0AttributeName!==void 0?i.bindAttribLocation(m,0,A.index0AttributeName):A.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m),this.getUniforms=function(){return N===void 0&&X(this),N},this.getAttributes=function(){return Y===void 0&&X(this),Y};let re=A.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return re===!1&&(re=i.getProgramParameter(m,ED)),re},this.destroy=function(){t.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=A.shaderType,this.name=A.shaderName,this.id=bD++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=y,this.fragmentShader=x,this}var QD=0,ku=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let A=e.vertexShader,t=e.fragmentShader,i=this._getShaderStage(A),n=this._getShaderStage(t),r=this._getShaderCacheForMaterial(e);return r.has(i)===!1&&(r.add(i),i.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let A=this.materialCache.get(e);for(let t of A)t.usedTimes--,t.usedTimes===0&&this.shaderCache.delete(t.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let A=this.materialCache,t=A.get(e);return t===void 0&&(t=new Set,A.set(e,t)),t}_getShaderStage(e){let A=this.shaderCache,t=A.get(e);return t===void 0&&(t=new Xu(e),A.set(e,t)),t}},Xu=class{constructor(e){this.id=QD++,this.code=e,this.usedTimes=0}};function HD(a,e,A,t,i,n,r){let s=new Ba,U=new ku,o=[],l=i.isWebGL2,c=i.logarithmicDepthBuffer,u=i.vertexTextures,h=i.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(m){return m===0?"uv":`uv${m}`}return{getParameters:function(m,M,T,D,b){let L=D.fog,y=b.geometry,x=m.isMeshStandardMaterial?D.environment:null,X=(m.isMeshStandardMaterial?A:e).get(m.envMap||x),N=X&&X.mapping===Ja?X.image.height:null,Y=p[m.type];m.precision!==null&&(h=i.getMaxPrecision(m.precision),h!==m.precision&&console.warn("THREE.WebGLProgram.getParameters:",m.precision,"not supported, using",h,"instead."));let re=y.morphAttributes.position||y.morphAttributes.normal||y.morphAttributes.color,J=re!==void 0?re.length:0,te,Ae,Me,Fe,me=0;if(y.morphAttributes.position!==void 0&&(me=1),y.morphAttributes.normal!==void 0&&(me=2),y.morphAttributes.color!==void 0&&(me=3),Y){let UA=vi[Y];te=UA.vertexShader,Ae=UA.fragmentShader}else te=m.vertexShader,Ae=m.fragmentShader,U.update(m),Me=U.getVertexShaderID(m),Fe=U.getFragmentShaderID(m);let Ue=a.getRenderTarget(),se=b.isInstancedMesh===!0,$=b.isBatchedMesh===!0,ce=!!m.map,ye=!!m.matcap,C=!!X,R=!!m.aoMap,K=!!m.lightMap,le=!!m.bumpMap,F=!!m.normalMap,ie=!!m.displacementMap,O=!!m.emissiveMap,z=!!m.metalnessMap,q=!!m.roughnessMap,fe=m.anisotropy>0,pe=m.clearcoat>0,w=m.iridescence>0,ge=m.sheen>0,W=m.transmission>0,j=fe&&!!m.anisotropyMap,ue=pe&&!!m.clearcoatMap,Le=pe&&!!m.clearcoatNormalMap,Ne=pe&&!!m.clearcoatRoughnessMap,Ee=w&&!!m.iridescenceMap,Ce=w&&!!m.iridescenceThicknessMap,be=ge&&!!m.sheenColorMap,Xe=ge&&!!m.sheenRoughnessMap,ae=!!m.specularMap,k=!!m.specularColorMap,De=!!m.specularIntensityMap,je=W&&!!m.transmissionMap,He=W&&!!m.thicknessMap,Zi=!!m.gradientMap,It=!!m.alphaMap,Yn=m.alphaTest>0,Gt=!!m.alphaHash,tA=!!m.extensions,HA=!!y.attributes.uv1,Z=!!y.attributes.uv2,jA=!!y.attributes.uv3,Ki=fn;return m.toneMapped&&(Ue!==null&&Ue.isXRRenderTarget!==!0||(Ki=a.toneMapping)),{isWebGL2:l,shaderID:Y,shaderType:m.type,shaderName:m.name,vertexShader:te,fragmentShader:Ae,defines:m.defines,customVertexShaderID:Me,customFragmentShaderID:Fe,isRawShaderMaterial:m.isRawShaderMaterial===!0,glslVersion:m.glslVersion,precision:h,batching:$,instancing:se,instancingColor:se&&b.instanceColor!==null,supportsVertexTextures:u,outputColorSpace:Ue===null?a.outputColorSpace:Ue.isXRRenderTarget===!0?Ue.texture.colorSpace:at,map:ce,matcap:ye,envMap:C,envMapMode:C&&X.mapping,envMapCubeUVHeight:N,aoMap:R,lightMap:K,bumpMap:le,normalMap:F,displacementMap:u&&ie,emissiveMap:O,normalMapObjectSpace:F&&m.normalMapType===1,normalMapTangentSpace:F&&m.normalMapType===0,metalnessMap:z,roughnessMap:q,anisotropy:fe,anisotropyMap:j,clearcoat:pe,clearcoatMap:ue,clearcoatNormalMap:Le,clearcoatRoughnessMap:Ne,iridescence:w,iridescenceMap:Ee,iridescenceThicknessMap:Ce,sheen:ge,sheenColorMap:be,sheenRoughnessMap:Xe,specularMap:ae,specularColorMap:k,specularIntensityMap:De,transmission:W,transmissionMap:je,thicknessMap:He,gradientMap:Zi,opaque:m.transparent===!1&&m.blending===1,alphaMap:It,alphaTest:Yn,alphaHash:Gt,combine:m.combine,mapUv:ce&&f(m.map.channel),aoMapUv:R&&f(m.aoMap.channel),lightMapUv:K&&f(m.lightMap.channel),bumpMapUv:le&&f(m.bumpMap.channel),normalMapUv:F&&f(m.normalMap.channel),displacementMapUv:ie&&f(m.displacementMap.channel),emissiveMapUv:O&&f(m.emissiveMap.channel),metalnessMapUv:z&&f(m.metalnessMap.channel),roughnessMapUv:q&&f(m.roughnessMap.channel),anisotropyMapUv:j&&f(m.anisotropyMap.channel),clearcoatMapUv:ue&&f(m.clearcoatMap.channel),clearcoatNormalMapUv:Le&&f(m.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ne&&f(m.clearcoatRoughnessMap.channel),iridescenceMapUv:Ee&&f(m.iridescenceMap.channel),iridescenceThicknessMapUv:Ce&&f(m.iridescenceThicknessMap.channel),sheenColorMapUv:be&&f(m.sheenColorMap.channel),sheenRoughnessMapUv:Xe&&f(m.sheenRoughnessMap.channel),specularMapUv:ae&&f(m.specularMap.channel),specularColorMapUv:k&&f(m.specularColorMap.channel),specularIntensityMapUv:De&&f(m.specularIntensityMap.channel),transmissionMapUv:je&&f(m.transmissionMap.channel),thicknessMapUv:He&&f(m.thicknessMap.channel),alphaMapUv:It&&f(m.alphaMap.channel),vertexTangents:!!y.attributes.tangent&&(F||fe),vertexColors:m.vertexColors,vertexAlphas:m.vertexColors===!0&&!!y.attributes.color&&y.attributes.color.itemSize===4,vertexUv1s:HA,vertexUv2s:Z,vertexUv3s:jA,pointsUvs:b.isPoints===!0&&!!y.attributes.uv&&(ce||It),fog:!!L,useFog:m.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:m.flatShading===!0,sizeAttenuation:m.sizeAttenuation===!0,logarithmicDepthBuffer:c,skinning:b.isSkinnedMesh===!0,morphTargets:y.morphAttributes.position!==void 0,morphNormals:y.morphAttributes.normal!==void 0,morphColors:y.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:me,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:m.dithering,shadowMapEnabled:a.shadowMap.enabled&&T.length>0,shadowMapType:a.shadowMap.type,toneMapping:Ki,useLegacyLights:a._useLegacyLights,decodeVideoTexture:ce&&m.map.isVideoTexture===!0&&DA.getTransfer(m.map.colorSpace)===SA,premultipliedAlpha:m.premultipliedAlpha,doubleSided:m.side===2,flipSided:m.side===Ht,useDepthPacking:m.depthPacking>=0,depthPacking:m.depthPacking||0,index0AttributeName:m.index0AttributeName,extensionDerivatives:tA&&m.extensions.derivatives===!0,extensionFragDepth:tA&&m.extensions.fragDepth===!0,extensionDrawBuffers:tA&&m.extensions.drawBuffers===!0,extensionShaderTextureLOD:tA&&m.extensions.shaderTextureLOD===!0,extensionClipCullDistance:tA&&m.extensions.clipCullDistance&&t.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:l||t.has("EXT_frag_depth"),rendererExtensionDrawBuffers:l||t.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:l||t.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:m.customProgramCacheKey()}},getProgramCacheKey:function(m){let M=[];if(m.shaderID?M.push(m.shaderID):(M.push(m.customVertexShaderID),M.push(m.customFragmentShaderID)),m.defines!==void 0)for(let T in m.defines)M.push(T),M.push(m.defines[T]);return m.isRawShaderMaterial===!1&&((function(T,D){T.push(D.precision),T.push(D.outputColorSpace),T.push(D.envMapMode),T.push(D.envMapCubeUVHeight),T.push(D.mapUv),T.push(D.alphaMapUv),T.push(D.lightMapUv),T.push(D.aoMapUv),T.push(D.bumpMapUv),T.push(D.normalMapUv),T.push(D.displacementMapUv),T.push(D.emissiveMapUv),T.push(D.metalnessMapUv),T.push(D.roughnessMapUv),T.push(D.anisotropyMapUv),T.push(D.clearcoatMapUv),T.push(D.clearcoatNormalMapUv),T.push(D.clearcoatRoughnessMapUv),T.push(D.iridescenceMapUv),T.push(D.iridescenceThicknessMapUv),T.push(D.sheenColorMapUv),T.push(D.sheenRoughnessMapUv),T.push(D.specularMapUv),T.push(D.specularColorMapUv),T.push(D.specularIntensityMapUv),T.push(D.transmissionMapUv),T.push(D.thicknessMapUv),T.push(D.combine),T.push(D.fogExp2),T.push(D.sizeAttenuation),T.push(D.morphTargetsCount),T.push(D.morphAttributeCount),T.push(D.numDirLights),T.push(D.numPointLights),T.push(D.numSpotLights),T.push(D.numSpotLightMaps),T.push(D.numHemiLights),T.push(D.numRectAreaLights),T.push(D.numDirLightShadows),T.push(D.numPointLightShadows),T.push(D.numSpotLightShadows),T.push(D.numSpotLightShadowsWithMaps),T.push(D.numLightProbes),T.push(D.shadowMapType),T.push(D.toneMapping),T.push(D.numClippingPlanes),T.push(D.numClipIntersection),T.push(D.depthPacking)})(M,m),(function(T,D){s.disableAll(),D.isWebGL2&&s.enable(0),D.supportsVertexTextures&&s.enable(1),D.instancing&&s.enable(2),D.instancingColor&&s.enable(3),D.matcap&&s.enable(4),D.envMap&&s.enable(5),D.normalMapObjectSpace&&s.enable(6),D.normalMapTangentSpace&&s.enable(7),D.clearcoat&&s.enable(8),D.iridescence&&s.enable(9),D.alphaTest&&s.enable(10),D.vertexColors&&s.enable(11),D.vertexAlphas&&s.enable(12),D.vertexUv1s&&s.enable(13),D.vertexUv2s&&s.enable(14),D.vertexUv3s&&s.enable(15),D.vertexTangents&&s.enable(16),D.anisotropy&&s.enable(17),D.alphaHash&&s.enable(18),D.batching&&s.enable(19),T.push(s.mask),s.disableAll(),D.fog&&s.enable(0),D.useFog&&s.enable(1),D.flatShading&&s.enable(2),D.logarithmicDepthBuffer&&s.enable(3),D.skinning&&s.enable(4),D.morphTargets&&s.enable(5),D.morphNormals&&s.enable(6),D.morphColors&&s.enable(7),D.premultipliedAlpha&&s.enable(8),D.shadowMapEnabled&&s.enable(9),D.useLegacyLights&&s.enable(10),D.doubleSided&&s.enable(11),D.flipSided&&s.enable(12),D.useDepthPacking&&s.enable(13),D.dithering&&s.enable(14),D.transmission&&s.enable(15),D.sheen&&s.enable(16),D.opaque&&s.enable(17),D.pointsUvs&&s.enable(18),D.decodeVideoTexture&&s.enable(19),T.push(s.mask)})(M,m),M.push(a.outputColorSpace)),M.push(m.customProgramCacheKey),M.join()},getUniforms:function(m){let M=p[m.type],T;if(M){let D=vi[M];T=$p.clone(D.uniforms)}else T=m.uniforms;return T},acquireProgram:function(m,M){let T;for(let D=0,b=o.length;D<b;D++){let L=o[D];if(L.cacheKey===M){T=L,++T.usedTimes;break}}return T===void 0&&(T=new LD(a,M,m,n),o.push(T)),T},releaseProgram:function(m){if(--m.usedTimes==0){let M=o.indexOf(m);o[M]=o[o.length-1],o.pop(),m.destroy()}},releaseShaderCache:function(m){U.remove(m)},programs:o,dispose:function(){U.dispose()}}}function jD(){let a=new WeakMap;return{get:function(e){let A=a.get(e);return A===void 0&&(A={},a.set(e,A)),A},remove:function(e){a.delete(e)},update:function(e,A,t){a.get(e)[A]=t},dispose:function(){a=new WeakMap}}}function JD(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.z!==e.z?a.z-e.z:a.id-e.id}function Oh(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function Gh(){let a=[],e=0,A=[],t=[],i=[];function n(r,s,U,o,l,c){let u=a[e];return u===void 0?(u={id:r.id,object:r,geometry:s,material:U,groupOrder:o,renderOrder:r.renderOrder,z:l,group:c},a[e]=u):(u.id=r.id,u.object=r,u.geometry=s,u.material=U,u.groupOrder=o,u.renderOrder=r.renderOrder,u.z=l,u.group=c),e++,u}return{opaque:A,transmissive:t,transparent:i,init:function(){e=0,A.length=0,t.length=0,i.length=0},push:function(r,s,U,o,l,c){let u=n(r,s,U,o,l,c);U.transmission>0?t.push(u):U.transparent===!0?i.push(u):A.push(u)},unshift:function(r,s,U,o,l,c){let u=n(r,s,U,o,l,c);U.transmission>0?t.unshift(u):U.transparent===!0?i.unshift(u):A.unshift(u)},finish:function(){for(let r=e,s=a.length;r<s;r++){let U=a[r];if(U.id===null)break;U.id=null,U.object=null,U.geometry=null,U.material=null,U.group=null}},sort:function(r,s){A.length>1&&A.sort(r||JD),t.length>1&&t.sort(s||Oh),i.length>1&&i.sort(s||Oh)}}}function FD(){let a=new WeakMap;return{get:function(e,A){let t=a.get(e),i;return t===void 0?(i=new Gh,a.set(e,[i])):A>=t.length?(i=new Gh,t.push(i)):i=t[A],i},dispose:function(){a=new WeakMap}}}function ND(){let a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let A;switch(e.type){case"DirectionalLight":A={direction:new S,color:new Re};break;case"SpotLight":A={position:new S,direction:new S,color:new Re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":A={position:new S,color:new Re,distance:0,decay:0};break;case"HemisphereLight":A={direction:new S,skyColor:new Re,groundColor:new Re};break;case"RectAreaLight":A={color:new Re,position:new S,halfWidth:new S,halfHeight:new S}}return a[e.id]=A,A}}}var kD=0;function XD(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function OD(a,e){let A=new ND,t=(function(){let U={};return{get:function(o){if(U[o.id]!==void 0)return U[o.id];let l;switch(o.type){case"DirectionalLight":case"SpotLight":l={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te};break;case"PointLight":l={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te,shadowCameraNear:1,shadowCameraFar:1e3}}return U[o.id]=l,l}}})(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let U=0;U<9;U++)i.probe.push(new S);let n=new S,r=new Ze,s=new Ze;return{setup:function(U,o){let l=0,c=0,u=0;for(let Y=0;Y<9;Y++)i.probe[Y].set(0,0,0);let h=0,p=0,f=0,m=0,M=0,T=0,D=0,b=0,L=0,y=0,x=0;U.sort(XD);let X=o===!0?Math.PI:1;for(let Y=0,re=U.length;Y<re;Y++){let J=U[Y],te=J.color,Ae=J.intensity,Me=J.distance,Fe=J.shadow&&J.shadow.map?J.shadow.map.texture:null;if(J.isAmbientLight)l+=te.r*Ae*X,c+=te.g*Ae*X,u+=te.b*Ae*X;else if(J.isLightProbe){for(let me=0;me<9;me++)i.probe[me].addScaledVector(J.sh.coefficients[me],Ae);x++}else if(J.isDirectionalLight){let me=A.get(J);if(me.color.copy(J.color).multiplyScalar(J.intensity*X),J.castShadow){let Ue=J.shadow,se=t.get(J);se.shadowBias=Ue.bias,se.shadowNormalBias=Ue.normalBias,se.shadowRadius=Ue.radius,se.shadowMapSize=Ue.mapSize,i.directionalShadow[h]=se,i.directionalShadowMap[h]=Fe,i.directionalShadowMatrix[h]=J.shadow.matrix,T++}i.directional[h]=me,h++}else if(J.isSpotLight){let me=A.get(J);me.position.setFromMatrixPosition(J.matrixWorld),me.color.copy(te).multiplyScalar(Ae*X),me.distance=Me,me.coneCos=Math.cos(J.angle),me.penumbraCos=Math.cos(J.angle*(1-J.penumbra)),me.decay=J.decay,i.spot[f]=me;let Ue=J.shadow;if(J.map&&(i.spotLightMap[L]=J.map,L++,Ue.updateMatrices(J),J.castShadow&&y++),i.spotLightMatrix[f]=Ue.matrix,J.castShadow){let se=t.get(J);se.shadowBias=Ue.bias,se.shadowNormalBias=Ue.normalBias,se.shadowRadius=Ue.radius,se.shadowMapSize=Ue.mapSize,i.spotShadow[f]=se,i.spotShadowMap[f]=Fe,b++}f++}else if(J.isRectAreaLight){let me=A.get(J);me.color.copy(te).multiplyScalar(Ae),me.halfWidth.set(.5*J.width,0,0),me.halfHeight.set(0,.5*J.height,0),i.rectArea[m]=me,m++}else if(J.isPointLight){let me=A.get(J);if(me.color.copy(J.color).multiplyScalar(J.intensity*X),me.distance=J.distance,me.decay=J.decay,J.castShadow){let Ue=J.shadow,se=t.get(J);se.shadowBias=Ue.bias,se.shadowNormalBias=Ue.normalBias,se.shadowRadius=Ue.radius,se.shadowMapSize=Ue.mapSize,se.shadowCameraNear=Ue.camera.near,se.shadowCameraFar=Ue.camera.far,i.pointShadow[p]=se,i.pointShadowMap[p]=Fe,i.pointShadowMatrix[p]=J.shadow.matrix,D++}i.point[p]=me,p++}else if(J.isHemisphereLight){let me=A.get(J);me.skyColor.copy(J.color).multiplyScalar(Ae*X),me.groundColor.copy(J.groundColor).multiplyScalar(Ae*X),i.hemi[M]=me,M++}}m>0&&(e.isWebGL2?a.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=we.LTC_FLOAT_1,i.rectAreaLTC2=we.LTC_FLOAT_2):(i.rectAreaLTC1=we.LTC_HALF_1,i.rectAreaLTC2=we.LTC_HALF_2):a.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=we.LTC_FLOAT_1,i.rectAreaLTC2=we.LTC_FLOAT_2):a.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=we.LTC_HALF_1,i.rectAreaLTC2=we.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=l,i.ambient[1]=c,i.ambient[2]=u;let N=i.hash;N.directionalLength===h&&N.pointLength===p&&N.spotLength===f&&N.rectAreaLength===m&&N.hemiLength===M&&N.numDirectionalShadows===T&&N.numPointShadows===D&&N.numSpotShadows===b&&N.numSpotMaps===L&&N.numLightProbes===x||(i.directional.length=h,i.spot.length=f,i.rectArea.length=m,i.point.length=p,i.hemi.length=M,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.pointShadow.length=D,i.pointShadowMap.length=D,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=T,i.pointShadowMatrix.length=D,i.spotLightMatrix.length=b+L-y,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=y,i.numLightProbes=x,N.directionalLength=h,N.pointLength=p,N.spotLength=f,N.rectAreaLength=m,N.hemiLength=M,N.numDirectionalShadows=T,N.numPointShadows=D,N.numSpotShadows=b,N.numSpotMaps=L,N.numLightProbes=x,i.version=kD++)},setupView:function(U,o){let l=0,c=0,u=0,h=0,p=0,f=o.matrixWorldInverse;for(let m=0,M=U.length;m<M;m++){let T=U[m];if(T.isDirectionalLight){let D=i.directional[l];D.direction.setFromMatrixPosition(T.matrixWorld),n.setFromMatrixPosition(T.target.matrixWorld),D.direction.sub(n),D.direction.transformDirection(f),l++}else if(T.isSpotLight){let D=i.spot[u];D.position.setFromMatrixPosition(T.matrixWorld),D.position.applyMatrix4(f),D.direction.setFromMatrixPosition(T.matrixWorld),n.setFromMatrixPosition(T.target.matrixWorld),D.direction.sub(n),D.direction.transformDirection(f),u++}else if(T.isRectAreaLight){let D=i.rectArea[h];D.position.setFromMatrixPosition(T.matrixWorld),D.position.applyMatrix4(f),s.identity(),r.copy(T.matrixWorld),r.premultiply(f),s.extractRotation(r),D.halfWidth.set(.5*T.width,0,0),D.halfHeight.set(0,.5*T.height,0),D.halfWidth.applyMatrix4(s),D.halfHeight.applyMatrix4(s),h++}else if(T.isPointLight){let D=i.point[c];D.position.setFromMatrixPosition(T.matrixWorld),D.position.applyMatrix4(f),c++}else if(T.isHemisphereLight){let D=i.hemi[p];D.direction.setFromMatrixPosition(T.matrixWorld),D.direction.transformDirection(f),p++}}},state:i}}function Vh(a,e){let A=new OD(a,e),t=[],i=[];return{init:function(){t.length=0,i.length=0},state:{lightsArray:t,shadowsArray:i,lights:A},setupLights:function(n){A.setup(t,n)},setupLightsView:function(n){A.setupView(t,n)},pushLight:function(n){t.push(n)},pushShadow:function(n){i.push(n)}}}function GD(a,e){let A=new WeakMap;return{get:function(t,i=0){let n=A.get(t),r;return n===void 0?(r=new Vh(a,e),A.set(t,[r])):i>=n.length?(r=new Vh(a,e),n.push(r)):r=n[i],r},dispose:function(){A=new WeakMap}}}var Rs=class extends WA{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ss=class extends WA{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function VD(a,e,A){let t=new br,i=new Te,n=new Te,r=new bA,s=new Rs({depthPacking:3201}),U=new Ss,o={},l=A.maxTextureSize,c={[Ci]:Ht,[Ht]:Ci,2:2},u=new pi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Te},radius:{value:4}},vertexShader:`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fragmentShader:`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`}),h=u.clone();h.defines.HORIZONTAL_PASS=1;let p=new AA;p.setAttribute("position",new pA(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let f=new OA(p,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Jd;let M=this.type;function T(y,x){let X=e.update(f);u.defines.VSM_SAMPLES!==y.blurSamples&&(u.defines.VSM_SAMPLES=y.blurSamples,h.defines.VSM_SAMPLES=y.blurSamples,u.needsUpdate=!0,h.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new ei(i.x,i.y)),u.uniforms.shadow_pass.value=y.map.texture,u.uniforms.resolution.value=y.mapSize,u.uniforms.radius.value=y.radius,a.setRenderTarget(y.mapPass),a.clear(),a.renderBufferDirect(x,null,X,u,f,null),h.uniforms.shadow_pass.value=y.mapPass.texture,h.uniforms.resolution.value=y.mapSize,h.uniforms.radius.value=y.radius,a.setRenderTarget(y.map),a.clear(),a.renderBufferDirect(x,null,X,h,f,null)}function D(y,x,X,N){let Y=null,re=X.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(re!==void 0)Y=re;else if(Y=X.isPointLight===!0?U:s,a.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0){let J=Y.uuid,te=x.uuid,Ae=o[J];Ae===void 0&&(Ae={},o[J]=Ae);let Me=Ae[te];Me===void 0&&(Me=Y.clone(),Ae[te]=Me,x.addEventListener("dispose",L)),Y=Me}return Y.visible=x.visible,Y.wireframe=x.wireframe,Y.side=N===Ni?x.shadowSide!==null?x.shadowSide:x.side:x.shadowSide!==null?x.shadowSide:c[x.side],Y.alphaMap=x.alphaMap,Y.alphaTest=x.alphaTest,Y.map=x.map,Y.clipShadows=x.clipShadows,Y.clippingPlanes=x.clippingPlanes,Y.clipIntersection=x.clipIntersection,Y.displacementMap=x.displacementMap,Y.displacementScale=x.displacementScale,Y.displacementBias=x.displacementBias,Y.wireframeLinewidth=x.wireframeLinewidth,Y.linewidth=x.linewidth,X.isPointLight===!0&&Y.isMeshDistanceMaterial===!0&&(a.properties.get(Y).light=X),Y}function b(y,x,X,N,Y){if(y.visible===!1)return;if(y.layers.test(x.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&Y===Ni)&&(!y.frustumCulled||t.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,y.matrixWorld);let J=e.update(y),te=y.material;if(Array.isArray(te)){let Ae=J.groups;for(let Me=0,Fe=Ae.length;Me<Fe;Me++){let me=Ae[Me],Ue=te[me.materialIndex];if(Ue&&Ue.visible){let se=D(y,Ue,N,Y);y.onBeforeShadow(a,y,x,X,J,se,me),a.renderBufferDirect(X,null,J,se,y,me),y.onAfterShadow(a,y,x,X,J,se,me)}}}else if(te.visible){let Ae=D(y,te,N,Y);y.onBeforeShadow(a,y,x,X,J,Ae,null),a.renderBufferDirect(X,null,J,Ae,y,null),y.onAfterShadow(a,y,x,X,J,Ae,null)}}let re=y.children;for(let J=0,te=re.length;J<te;J++)b(re[J],x,X,N,Y)}function L(y){y.target.removeEventListener("dispose",L);for(let x in o){let X=o[x],N=y.target.uuid;N in X&&(X[N].dispose(),delete X[N])}}this.render=function(y,x,X){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||y.length===0)return;let N=a.getRenderTarget(),Y=a.getActiveCubeFace(),re=a.getActiveMipmapLevel(),J=a.state;J.setBlending(0),J.buffers.color.setClear(1,1,1,1),J.buffers.depth.setTest(!0),J.setScissorTest(!1);let te=M!==Ni&&this.type===Ni,Ae=M===Ni&&this.type!==Ni;for(let Me=0,Fe=y.length;Me<Fe;Me++){let me=y[Me],Ue=me.shadow;if(Ue===void 0){console.warn("THREE.WebGLShadowMap:",me,"has no shadow.");continue}if(Ue.autoUpdate===!1&&Ue.needsUpdate===!1)continue;i.copy(Ue.mapSize);let se=Ue.getFrameExtents();if(i.multiply(se),n.copy(Ue.mapSize),(i.x>l||i.y>l)&&(i.x>l&&(n.x=Math.floor(l/se.x),i.x=n.x*se.x,Ue.mapSize.x=n.x),i.y>l&&(n.y=Math.floor(l/se.y),i.y=n.y*se.y,Ue.mapSize.y=n.y)),Ue.map===null||te===!0||Ae===!0){let ce=this.type!==Ni?{minFilter:At,magFilter:At}:{};Ue.map!==null&&Ue.map.dispose(),Ue.map=new ei(i.x,i.y,ce),Ue.map.texture.name=me.name+".shadowMap",Ue.camera.updateProjectionMatrix()}a.setRenderTarget(Ue.map),a.clear();let $=Ue.getViewportCount();for(let ce=0;ce<$;ce++){let ye=Ue.getViewport(ce);r.set(n.x*ye.x,n.y*ye.y,n.x*ye.z,n.y*ye.w),J.viewport(r),Ue.updateMatrices(me,ce),t=Ue.getFrustum(),b(x,X,Ue.camera,me,this.type)}Ue.isPointLightShadow!==!0&&this.type===Ni&&T(Ue,X),Ue.needsUpdate=!1}M=this.type,m.needsUpdate=!1,a.setRenderTarget(N,Y,re)}}function zD(a,e,A){let t=A.isWebGL2,i=new function(){let w=!1,ge=new bA,W=null,j=new bA(0,0,0,0);return{setMask:function(ue){W===ue||w||(a.colorMask(ue,ue,ue,ue),W=ue)},setLocked:function(ue){w=ue},setClear:function(ue,Le,Ne,Ee,Ce){Ce===!0&&(ue*=Ee,Le*=Ee,Ne*=Ee),ge.set(ue,Le,Ne,Ee),j.equals(ge)===!1&&(a.clearColor(ue,Le,Ne,Ee),j.copy(ge))},reset:function(){w=!1,W=null,j.set(-1,0,0,0)}}},n=new function(){let w=!1,ge=null,W=null,j=null;return{setTest:function(ue){ue?le(a.DEPTH_TEST):F(a.DEPTH_TEST)},setMask:function(ue){ge===ue||w||(a.depthMask(ue),ge=ue)},setFunc:function(ue){if(W!==ue){switch(ue){case 0:a.depthFunc(a.NEVER);break;case 1:a.depthFunc(a.ALWAYS);break;case 2:a.depthFunc(a.LESS);break;case 3:default:a.depthFunc(a.LEQUAL);break;case 4:a.depthFunc(a.EQUAL);break;case 5:a.depthFunc(a.GEQUAL);break;case 6:a.depthFunc(a.GREATER);break;case 7:a.depthFunc(a.NOTEQUAL)}W=ue}},setLocked:function(ue){w=ue},setClear:function(ue){j!==ue&&(a.clearDepth(ue),j=ue)},reset:function(){w=!1,ge=null,W=null,j=null}}},r=new function(){let w=!1,ge=null,W=null,j=null,ue=null,Le=null,Ne=null,Ee=null,Ce=null;return{setTest:function(be){w||(be?le(a.STENCIL_TEST):F(a.STENCIL_TEST))},setMask:function(be){ge===be||w||(a.stencilMask(be),ge=be)},setFunc:function(be,Xe,ae){W===be&&j===Xe&&ue===ae||(a.stencilFunc(be,Xe,ae),W=be,j=Xe,ue=ae)},setOp:function(be,Xe,ae){Le===be&&Ne===Xe&&Ee===ae||(a.stencilOp(be,Xe,ae),Le=be,Ne=Xe,Ee=ae)},setLocked:function(be){w=be},setClear:function(be){Ce!==be&&(a.clearStencil(be),Ce=be)},reset:function(){w=!1,ge=null,W=null,j=null,ue=null,Le=null,Ne=null,Ee=null,Ce=null}}},s=new WeakMap,U=new WeakMap,o={},l={},c=new WeakMap,u=[],h=null,p=!1,f=null,m=null,M=null,T=null,D=null,b=null,L=null,y=new Re(0,0,0),x=0,X=!1,N=null,Y=null,re=null,J=null,te=null,Ae=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Me=!1,Fe=0,me=a.getParameter(a.VERSION);me.indexOf("WebGL")!==-1?(Fe=parseFloat(/^WebGL (\d)/.exec(me)[1]),Me=Fe>=1):me.indexOf("OpenGL ES")!==-1&&(Fe=parseFloat(/^OpenGL ES (\d)/.exec(me)[1]),Me=Fe>=2);let Ue=null,se={},$=a.getParameter(a.SCISSOR_BOX),ce=a.getParameter(a.VIEWPORT),ye=new bA().fromArray($),C=new bA().fromArray(ce);function R(w,ge,W,j){let ue=new Uint8Array(4),Le=a.createTexture();a.bindTexture(w,Le),a.texParameteri(w,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(w,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let Ne=0;Ne<W;Ne++)!t||w!==a.TEXTURE_3D&&w!==a.TEXTURE_2D_ARRAY?a.texImage2D(ge+Ne,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,ue):a.texImage3D(ge,0,a.RGBA,1,1,j,0,a.RGBA,a.UNSIGNED_BYTE,ue);return Le}let K={};function le(w){o[w]!==!0&&(a.enable(w),o[w]=!0)}function F(w){o[w]!==!1&&(a.disable(w),o[w]=!1)}K[a.TEXTURE_2D]=R(a.TEXTURE_2D,a.TEXTURE_2D,1),K[a.TEXTURE_CUBE_MAP]=R(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),t&&(K[a.TEXTURE_2D_ARRAY]=R(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),K[a.TEXTURE_3D]=R(a.TEXTURE_3D,a.TEXTURE_3D,1,1)),i.setClear(0,0,0,1),n.setClear(1),r.setClear(0),le(a.DEPTH_TEST),n.setFunc(3),q(!1),fe(1),le(a.CULL_FACE),z(0);let ie={[xn]:a.FUNC_ADD,101:a.FUNC_SUBTRACT,102:a.FUNC_REVERSE_SUBTRACT};if(t)ie[103]=a.MIN,ie[104]=a.MAX;else{let w=e.get("EXT_blend_minmax");w!==null&&(ie[103]=w.MIN_EXT,ie[104]=w.MAX_EXT)}let O={200:a.ZERO,201:a.ONE,202:a.SRC_COLOR,[EU]:a.SRC_ALPHA,210:a.SRC_ALPHA_SATURATE,208:a.DST_COLOR,206:a.DST_ALPHA,203:a.ONE_MINUS_SRC_COLOR,[bU]:a.ONE_MINUS_SRC_ALPHA,209:a.ONE_MINUS_DST_COLOR,207:a.ONE_MINUS_DST_ALPHA,211:a.CONSTANT_COLOR,212:a.ONE_MINUS_CONSTANT_COLOR,213:a.CONSTANT_ALPHA,214:a.ONE_MINUS_CONSTANT_ALPHA};function z(w,ge,W,j,ue,Le,Ne,Ee,Ce,be){if(w!==0){if(p===!1&&(le(a.BLEND),p=!0),w===5)ue=ue||ge,Le=Le||W,Ne=Ne||j,ge===m&&ue===D||(a.blendEquationSeparate(ie[ge],ie[ue]),m=ge,D=ue),W===M&&j===T&&Le===b&&Ne===L||(a.blendFuncSeparate(O[W],O[j],O[Le],O[Ne]),M=W,T=j,b=Le,L=Ne),Ee.equals(y)!==!1&&Ce===x||(a.blendColor(Ee.r,Ee.g,Ee.b,Ce),y.copy(Ee),x=Ce),f=w,X=!1;else if(w!==f||be!==X){if(m===xn&&D===xn||(a.blendEquation(a.FUNC_ADD),m=xn,D=xn),be)switch(w){case 1:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case 2:a.blendFunc(a.ONE,a.ONE);break;case 3:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case 4:a.blendFuncSeparate(a.ZERO,a.SRC_COLOR,a.ZERO,a.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",w)}else switch(w){case 1:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case 2:a.blendFunc(a.SRC_ALPHA,a.ONE);break;case 3:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case 4:a.blendFunc(a.ZERO,a.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",w)}M=null,T=null,b=null,L=null,y.set(0,0,0),x=0,f=w,X=be}}else p===!0&&(F(a.BLEND),p=!1)}function q(w){N!==w&&(w?a.frontFace(a.CW):a.frontFace(a.CCW),N=w)}function fe(w){w!==0?(le(a.CULL_FACE),w!==Y&&(w===1?a.cullFace(a.BACK):w===2?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):F(a.CULL_FACE),Y=w}function pe(w,ge,W){w?(le(a.POLYGON_OFFSET_FILL),J===ge&&te===W||(a.polygonOffset(ge,W),J=ge,te=W)):F(a.POLYGON_OFFSET_FILL)}return{buffers:{color:i,depth:n,stencil:r},enable:le,disable:F,bindFramebuffer:function(w,ge){return l[w]!==ge&&(a.bindFramebuffer(w,ge),l[w]=ge,t&&(w===a.DRAW_FRAMEBUFFER&&(l[a.FRAMEBUFFER]=ge),w===a.FRAMEBUFFER&&(l[a.DRAW_FRAMEBUFFER]=ge)),!0)},drawBuffers:function(w,ge){let W=u,j=!1;if(w)if(W=c.get(ge),W===void 0&&(W=[],c.set(ge,W)),w.isWebGLMultipleRenderTargets){let ue=w.texture;if(W.length!==ue.length||W[0]!==a.COLOR_ATTACHMENT0){for(let Le=0,Ne=ue.length;Le<Ne;Le++)W[Le]=a.COLOR_ATTACHMENT0+Le;W.length=ue.length,j=!0}}else W[0]!==a.COLOR_ATTACHMENT0&&(W[0]=a.COLOR_ATTACHMENT0,j=!0);else W[0]!==a.BACK&&(W[0]=a.BACK,j=!0);j&&(A.isWebGL2?a.drawBuffers(W):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(W))},useProgram:function(w){return h!==w&&(a.useProgram(w),h=w,!0)},setBlending:z,setMaterial:function(w,ge){w.side===2?F(a.CULL_FACE):le(a.CULL_FACE);let W=w.side===Ht;ge&&(W=!W),q(W),w.blending===1&&w.transparent===!1?z(0):z(w.blending,w.blendEquation,w.blendSrc,w.blendDst,w.blendEquationAlpha,w.blendSrcAlpha,w.blendDstAlpha,w.blendColor,w.blendAlpha,w.premultipliedAlpha),n.setFunc(w.depthFunc),n.setTest(w.depthTest),n.setMask(w.depthWrite),i.setMask(w.colorWrite);let j=w.stencilWrite;r.setTest(j),j&&(r.setMask(w.stencilWriteMask),r.setFunc(w.stencilFunc,w.stencilRef,w.stencilFuncMask),r.setOp(w.stencilFail,w.stencilZFail,w.stencilZPass)),pe(w.polygonOffset,w.polygonOffsetFactor,w.polygonOffsetUnits),w.alphaToCoverage===!0?le(a.SAMPLE_ALPHA_TO_COVERAGE):F(a.SAMPLE_ALPHA_TO_COVERAGE)},setFlipSided:q,setCullFace:fe,setLineWidth:function(w){w!==re&&(Me&&a.lineWidth(w),re=w)},setPolygonOffset:pe,setScissorTest:function(w){w?le(a.SCISSOR_TEST):F(a.SCISSOR_TEST)},activeTexture:function(w){w===void 0&&(w=a.TEXTURE0+Ae-1),Ue!==w&&(a.activeTexture(w),Ue=w)},bindTexture:function(w,ge,W){W===void 0&&(W=Ue===null?a.TEXTURE0+Ae-1:Ue);let j=se[W];j===void 0&&(j={type:void 0,texture:void 0},se[W]=j),j.type===w&&j.texture===ge||(Ue!==W&&(a.activeTexture(W),Ue=W),a.bindTexture(w,ge||K[w]),j.type=w,j.texture=ge)},unbindTexture:function(){let w=se[Ue];w!==void 0&&w.type!==void 0&&(a.bindTexture(w.type,null),w.type=void 0,w.texture=void 0)},compressedTexImage2D:function(){try{a.compressedTexImage2D.apply(a,arguments)}catch(w){console.error("THREE.WebGLState:",w)}},compressedTexImage3D:function(){try{a.compressedTexImage3D.apply(a,arguments)}catch(w){console.error("THREE.WebGLState:",w)}},texImage2D:function(){try{a.texImage2D.apply(a,arguments)}catch(w){console.error("THREE.WebGLState:",w)}},texImage3D:function(){try{a.texImage3D.apply(a,arguments)}catch(w){console.error("THREE.WebGLState:",w)}},updateUBOMapping:function(w,ge){let W=U.get(ge);W===void 0&&(W=new WeakMap,U.set(ge,W));let j=W.get(w);j===void 0&&(j=a.getUniformBlockIndex(ge,w.name),W.set(w,j))},uniformBlockBinding:function(w,ge){let W=U.get(ge).get(w);s.get(ge)!==W&&(a.uniformBlockBinding(ge,W,w.__bindingPointIndex),s.set(ge,W))},texStorage2D:function(){try{a.texStorage2D.apply(a,arguments)}catch(w){console.error("THREE.WebGLState:",w)}},texStorage3D:function(){try{a.texStorage3D.apply(a,arguments)}catch(w){console.error("THREE.WebGLState:",w)}},texSubImage2D:function(){try{a.texSubImage2D.apply(a,arguments)}catch(w){console.error("THREE.WebGLState:",w)}},texSubImage3D:function(){try{a.texSubImage3D.apply(a,arguments)}catch(w){console.error("THREE.WebGLState:",w)}},compressedTexSubImage2D:function(){try{a.compressedTexSubImage2D.apply(a,arguments)}catch(w){console.error("THREE.WebGLState:",w)}},compressedTexSubImage3D:function(){try{a.compressedTexSubImage3D.apply(a,arguments)}catch(w){console.error("THREE.WebGLState:",w)}},scissor:function(w){ye.equals(w)===!1&&(a.scissor(w.x,w.y,w.z,w.w),ye.copy(w))},viewport:function(w){C.equals(w)===!1&&(a.viewport(w.x,w.y,w.z,w.w),C.copy(w))},reset:function(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),t===!0&&(a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null)),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),o={},Ue=null,se={},l={},c=new WeakMap,u=[],h=null,p=!1,f=null,m=null,M=null,T=null,D=null,b=null,L=null,y=new Re(0,0,0),x=0,X=!1,N=null,Y=null,re=null,J=null,te=null,ye.set(0,0,a.canvas.width,a.canvas.height),C.set(0,0,a.canvas.width,a.canvas.height),i.reset(),n.reset(),r.reset()}}}function YD(a,e,A,t,i,n,r){let s=i.isWebGL2,U=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,o=typeof navigator!="undefined"&&/OculusBrowser/g.test(navigator.userAgent),l=new WeakMap,c,u=new WeakMap,h=!1;try{h=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(C,R){return h?new OffscreenCanvas(C,R):Ms("canvas")}function f(C,R,K,le){let F=1;if((C.width>le||C.height>le)&&(F=le/Math.max(C.width,C.height)),F<1||R===!0){if(typeof HTMLImageElement!="undefined"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&C instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&C instanceof ImageBitmap){let ie=R?yU:Math.floor,O=ie(F*C.width),z=ie(F*C.height);c===void 0&&(c=p(O,z));let q=K?p(O,z):c;return q.width=O,q.height=z,q.getContext("2d").drawImage(C,0,0,O,z),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+O+"x"+z+")."),q}return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C}return C}function m(C){return bu(C.width)&&bu(C.height)}function M(C,R){return C.generateMipmaps&&R&&C.minFilter!==At&&C.minFilter!==kA}function T(C){a.generateMipmap(C)}function D(C,R,K,le,F=!1){if(s===!1)return R;if(C!==null){if(a[C]!==void 0)return a[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ie=R;if(R===a.RED&&(K===a.FLOAT&&(ie=a.R32F),K===a.HALF_FLOAT&&(ie=a.R16F),K===a.UNSIGNED_BYTE&&(ie=a.R8)),R===a.RED_INTEGER&&(K===a.UNSIGNED_BYTE&&(ie=a.R8UI),K===a.UNSIGNED_SHORT&&(ie=a.R16UI),K===a.UNSIGNED_INT&&(ie=a.R32UI),K===a.BYTE&&(ie=a.R8I),K===a.SHORT&&(ie=a.R16I),K===a.INT&&(ie=a.R32I)),R===a.RG&&(K===a.FLOAT&&(ie=a.RG32F),K===a.HALF_FLOAT&&(ie=a.RG16F),K===a.UNSIGNED_BYTE&&(ie=a.RG8)),R===a.RGBA){let O=F?gs:DA.getTransfer(le);K===a.FLOAT&&(ie=a.RGBA32F),K===a.HALF_FLOAT&&(ie=a.RGBA16F),K===a.UNSIGNED_BYTE&&(ie=O===SA?a.SRGB8_ALPHA8:a.RGBA8),K===a.UNSIGNED_SHORT_4_4_4_4&&(ie=a.RGBA4),K===a.UNSIGNED_SHORT_5_5_5_1&&(ie=a.RGB5_A1)}return ie!==a.R16F&&ie!==a.R32F&&ie!==a.RG16F&&ie!==a.RG32F&&ie!==a.RGBA16F&&ie!==a.RGBA32F||e.get("EXT_color_buffer_float"),ie}function b(C,R,K){return M(C,K)===!0||C.isFramebufferTexture&&C.minFilter!==At&&C.minFilter!==kA?Math.log2(Math.max(R.width,R.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?R.mipmaps.length:1}function L(C){return C===At||C===Pa||C===Pr?a.NEAREST:a.LINEAR}function y(C){let R=C.target;R.removeEventListener("dispose",y),(function(K){let le=t.get(K);if(le.__webglInit===void 0)return;let F=K.source,ie=u.get(F);if(ie){let O=ie[le.__cacheKey];O.usedTimes--,O.usedTimes===0&&X(K),Object.keys(ie).length===0&&u.delete(F)}t.remove(K)})(R),R.isVideoTexture&&l.delete(R)}function x(C){let R=C.target;R.removeEventListener("dispose",x),(function(K){let le=K.texture,F=t.get(K),ie=t.get(le);if(ie.__webglTexture!==void 0&&(a.deleteTexture(ie.__webglTexture),r.memory.textures--),K.depthTexture&&K.depthTexture.dispose(),K.isWebGLCubeRenderTarget)for(let O=0;O<6;O++){if(Array.isArray(F.__webglFramebuffer[O]))for(let z=0;z<F.__webglFramebuffer[O].length;z++)a.deleteFramebuffer(F.__webglFramebuffer[O][z]);else a.deleteFramebuffer(F.__webglFramebuffer[O]);F.__webglDepthbuffer&&a.deleteRenderbuffer(F.__webglDepthbuffer[O])}else{if(Array.isArray(F.__webglFramebuffer))for(let O=0;O<F.__webglFramebuffer.length;O++)a.deleteFramebuffer(F.__webglFramebuffer[O]);else a.deleteFramebuffer(F.__webglFramebuffer);if(F.__webglDepthbuffer&&a.deleteRenderbuffer(F.__webglDepthbuffer),F.__webglMultisampledFramebuffer&&a.deleteFramebuffer(F.__webglMultisampledFramebuffer),F.__webglColorRenderbuffer)for(let O=0;O<F.__webglColorRenderbuffer.length;O++)F.__webglColorRenderbuffer[O]&&a.deleteRenderbuffer(F.__webglColorRenderbuffer[O]);F.__webglDepthRenderbuffer&&a.deleteRenderbuffer(F.__webglDepthRenderbuffer)}if(K.isWebGLMultipleRenderTargets)for(let O=0,z=le.length;O<z;O++){let q=t.get(le[O]);q.__webglTexture&&(a.deleteTexture(q.__webglTexture),r.memory.textures--),t.remove(le[O])}t.remove(le),t.remove(K)})(R)}function X(C){let R=t.get(C);a.deleteTexture(R.__webglTexture);let K=C.source;delete u.get(K)[R.__cacheKey],r.memory.textures--}let N=0;function Y(C,R){let K=t.get(C);if(C.isVideoTexture&&(function(le){let F=r.render.frame;l.get(le)!==F&&(l.set(le,F),le.update())})(C),C.isRenderTargetTexture===!1&&C.version>0&&K.__version!==C.version){let le=C.image;if(le===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else{if(le.complete!==!1)return void Fe(K,C,R);console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete")}}A.bindTexture(a.TEXTURE_2D,K.__webglTexture,a.TEXTURE0+R)}let re={[Tn]:a.REPEAT,[wt]:a.CLAMP_TO_EDGE,[Dr]:a.MIRRORED_REPEAT},J={[At]:a.NEAREST,[Pa]:a.NEAREST_MIPMAP_NEAREST,[Pr]:a.NEAREST_MIPMAP_LINEAR,[kA]:a.LINEAR,[$s]:a.LINEAR_MIPMAP_NEAREST,[Oi]:a.LINEAR_MIPMAP_LINEAR},te={512:a.NEVER,519:a.ALWAYS,513:a.LESS,515:a.LEQUAL,514:a.EQUAL,518:a.GEQUAL,516:a.GREATER,517:a.NOTEQUAL};function Ae(C,R,K){if(K?(a.texParameteri(C,a.TEXTURE_WRAP_S,re[R.wrapS]),a.texParameteri(C,a.TEXTURE_WRAP_T,re[R.wrapT]),C!==a.TEXTURE_3D&&C!==a.TEXTURE_2D_ARRAY||a.texParameteri(C,a.TEXTURE_WRAP_R,re[R.wrapR]),a.texParameteri(C,a.TEXTURE_MAG_FILTER,J[R.magFilter]),a.texParameteri(C,a.TEXTURE_MIN_FILTER,J[R.minFilter])):(a.texParameteri(C,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE),a.texParameteri(C,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE),C!==a.TEXTURE_3D&&C!==a.TEXTURE_2D_ARRAY||a.texParameteri(C,a.TEXTURE_WRAP_R,a.CLAMP_TO_EDGE),R.wrapS===wt&&R.wrapT===wt||console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),a.texParameteri(C,a.TEXTURE_MAG_FILTER,L(R.magFilter)),a.texParameteri(C,a.TEXTURE_MIN_FILTER,L(R.minFilter)),R.minFilter!==At&&R.minFilter!==kA&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),R.compareFunction&&(a.texParameteri(C,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(C,a.TEXTURE_COMPARE_FUNC,te[R.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let le=e.get("EXT_texture_filter_anisotropic");if(R.magFilter===At||R.minFilter!==Pr&&R.minFilter!==Oi||R.type===wi&&e.has("OES_texture_float_linear")===!1||s===!1&&R.type===Ta&&e.has("OES_texture_half_float_linear")===!1)return;(R.anisotropy>1||t.get(R).__currentAnisotropy)&&(a.texParameterf(C,le.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,i.getMaxAnisotropy())),t.get(R).__currentAnisotropy=R.anisotropy)}}function Me(C,R){let K=!1;C.__webglInit===void 0&&(C.__webglInit=!0,R.addEventListener("dispose",y));let le=R.source,F=u.get(le);F===void 0&&(F={},u.set(le,F));let ie=(function(O){let z=[];return z.push(O.wrapS),z.push(O.wrapT),z.push(O.wrapR||0),z.push(O.magFilter),z.push(O.minFilter),z.push(O.anisotropy),z.push(O.internalFormat),z.push(O.format),z.push(O.type),z.push(O.generateMipmaps),z.push(O.premultiplyAlpha),z.push(O.flipY),z.push(O.unpackAlignment),z.push(O.colorSpace),z.join()})(R);if(ie!==C.__cacheKey){F[ie]===void 0&&(F[ie]={texture:a.createTexture(),usedTimes:0},r.memory.textures++,K=!0),F[ie].usedTimes++;let O=F[C.__cacheKey];O!==void 0&&(F[C.__cacheKey].usedTimes--,O.usedTimes===0&&X(R)),C.__cacheKey=ie,C.__webglTexture=F[ie].texture}return K}function Fe(C,R,K){let le=a.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(le=a.TEXTURE_2D_ARRAY),R.isData3DTexture&&(le=a.TEXTURE_3D);let F=Me(C,R),ie=R.source;A.bindTexture(le,C.__webglTexture,a.TEXTURE0+K);let O=t.get(ie);if(ie.version!==O.__version||F===!0){A.activeTexture(a.TEXTURE0+K);let z=DA.getPrimaries(DA.workingColorSpace),q=R.colorSpace===yi?null:DA.getPrimaries(R.colorSpace),fe=R.colorSpace===yi||z===q?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,R.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,R.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);let pe=(function(Xe){return!s&&(Xe.wrapS!==wt||Xe.wrapT!==wt||Xe.minFilter!==At&&Xe.minFilter!==kA)})(R)&&m(R.image)===!1,w=f(R.image,pe,!1,i.maxTextureSize);w=ye(R,w);let ge=m(w)||s,W=n.convert(R.format,R.colorSpace),j,ue=n.convert(R.type),Le=D(R.internalFormat,W,ue,R.colorSpace,R.isVideoTexture);Ae(le,R,ge);let Ne=R.mipmaps,Ee=s&&R.isVideoTexture!==!0&&Le!==zd,Ce=O.__version===void 0||F===!0,be=b(R,w,ge);if(R.isDepthTexture)Le=a.DEPTH_COMPONENT,s?Le=R.type===wi?a.DEPTH_COMPONENT32F:R.type===un?a.DEPTH_COMPONENT24:R.type===Qn?a.DEPTH24_STENCIL8:a.DEPTH_COMPONENT16:R.type===wi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),R.format===Hn&&Le===a.DEPTH_COMPONENT&&R.type!==xl&&R.type!==un&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),R.type=un,ue=n.convert(R.type)),R.format===Mr&&Le===a.DEPTH_COMPONENT&&(Le=a.DEPTH_STENCIL,R.type!==Qn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),R.type=Qn,ue=n.convert(R.type))),Ce&&(Ee?A.texStorage2D(a.TEXTURE_2D,1,Le,w.width,w.height):A.texImage2D(a.TEXTURE_2D,0,Le,w.width,w.height,0,W,ue,null));else if(R.isDataTexture)if(Ne.length>0&&ge){Ee&&Ce&&A.texStorage2D(a.TEXTURE_2D,be,Le,Ne[0].width,Ne[0].height);for(let Xe=0,ae=Ne.length;Xe<ae;Xe++)j=Ne[Xe],Ee?A.texSubImage2D(a.TEXTURE_2D,Xe,0,0,j.width,j.height,W,ue,j.data):A.texImage2D(a.TEXTURE_2D,Xe,Le,j.width,j.height,0,W,ue,j.data);R.generateMipmaps=!1}else Ee?(Ce&&A.texStorage2D(a.TEXTURE_2D,be,Le,w.width,w.height),A.texSubImage2D(a.TEXTURE_2D,0,0,0,w.width,w.height,W,ue,w.data)):A.texImage2D(a.TEXTURE_2D,0,Le,w.width,w.height,0,W,ue,w.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){Ee&&Ce&&A.texStorage3D(a.TEXTURE_2D_ARRAY,be,Le,Ne[0].width,Ne[0].height,w.depth);for(let Xe=0,ae=Ne.length;Xe<ae;Xe++)j=Ne[Xe],R.format!==qt?W!==null?Ee?A.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,Xe,0,0,0,j.width,j.height,w.depth,W,j.data,0,0):A.compressedTexImage3D(a.TEXTURE_2D_ARRAY,Xe,Le,j.width,j.height,w.depth,0,j.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ee?A.texSubImage3D(a.TEXTURE_2D_ARRAY,Xe,0,0,0,j.width,j.height,w.depth,W,ue,j.data):A.texImage3D(a.TEXTURE_2D_ARRAY,Xe,Le,j.width,j.height,w.depth,0,W,ue,j.data)}else{Ee&&Ce&&A.texStorage2D(a.TEXTURE_2D,be,Le,Ne[0].width,Ne[0].height);for(let Xe=0,ae=Ne.length;Xe<ae;Xe++)j=Ne[Xe],R.format!==qt?W!==null?Ee?A.compressedTexSubImage2D(a.TEXTURE_2D,Xe,0,0,j.width,j.height,W,j.data):A.compressedTexImage2D(a.TEXTURE_2D,Xe,Le,j.width,j.height,0,j.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ee?A.texSubImage2D(a.TEXTURE_2D,Xe,0,0,j.width,j.height,W,ue,j.data):A.texImage2D(a.TEXTURE_2D,Xe,Le,j.width,j.height,0,W,ue,j.data)}else if(R.isDataArrayTexture)Ee?(Ce&&A.texStorage3D(a.TEXTURE_2D_ARRAY,be,Le,w.width,w.height,w.depth),A.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,w.width,w.height,w.depth,W,ue,w.data)):A.texImage3D(a.TEXTURE_2D_ARRAY,0,Le,w.width,w.height,w.depth,0,W,ue,w.data);else if(R.isData3DTexture)Ee?(Ce&&A.texStorage3D(a.TEXTURE_3D,be,Le,w.width,w.height,w.depth),A.texSubImage3D(a.TEXTURE_3D,0,0,0,0,w.width,w.height,w.depth,W,ue,w.data)):A.texImage3D(a.TEXTURE_3D,0,Le,w.width,w.height,w.depth,0,W,ue,w.data);else if(R.isFramebufferTexture){if(Ce)if(Ee)A.texStorage2D(a.TEXTURE_2D,be,Le,w.width,w.height);else{let Xe=w.width,ae=w.height;for(let k=0;k<be;k++)A.texImage2D(a.TEXTURE_2D,k,Le,Xe,ae,0,W,ue,null),Xe>>=1,ae>>=1}}else if(Ne.length>0&&ge){Ee&&Ce&&A.texStorage2D(a.TEXTURE_2D,be,Le,Ne[0].width,Ne[0].height);for(let Xe=0,ae=Ne.length;Xe<ae;Xe++)j=Ne[Xe],Ee?A.texSubImage2D(a.TEXTURE_2D,Xe,0,0,W,ue,j):A.texImage2D(a.TEXTURE_2D,Xe,Le,W,ue,j);R.generateMipmaps=!1}else Ee?(Ce&&A.texStorage2D(a.TEXTURE_2D,be,Le,w.width,w.height),A.texSubImage2D(a.TEXTURE_2D,0,0,0,W,ue,w)):A.texImage2D(a.TEXTURE_2D,0,Le,W,ue,w);M(R,ge)&&T(le),O.__version=ie.version,R.onUpdate&&R.onUpdate(R)}C.__version=R.version}function me(C,R,K,le,F,ie){let O=n.convert(K.format,K.colorSpace),z=n.convert(K.type),q=D(K.internalFormat,O,z,K.colorSpace);if(!t.get(R).__hasExternalTextures){let fe=Math.max(1,R.width>>ie),pe=Math.max(1,R.height>>ie);F===a.TEXTURE_3D||F===a.TEXTURE_2D_ARRAY?A.texImage3D(F,ie,q,fe,pe,R.depth,0,O,z,null):A.texImage2D(F,ie,q,fe,pe,0,O,z,null)}A.bindFramebuffer(a.FRAMEBUFFER,C),ce(R)?U.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,le,F,t.get(K).__webglTexture,0,$(R)):(F===a.TEXTURE_2D||F>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&F<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,le,F,t.get(K).__webglTexture,ie),A.bindFramebuffer(a.FRAMEBUFFER,null)}function Ue(C,R,K){if(a.bindRenderbuffer(a.RENDERBUFFER,C),R.depthBuffer&&!R.stencilBuffer){let le=s===!0?a.DEPTH_COMPONENT24:a.DEPTH_COMPONENT16;if(K||ce(R)){let F=R.depthTexture;F&&F.isDepthTexture&&(F.type===wi?le=a.DEPTH_COMPONENT32F:F.type===un&&(le=a.DEPTH_COMPONENT24));let ie=$(R);ce(R)?U.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,ie,le,R.width,R.height):a.renderbufferStorageMultisample(a.RENDERBUFFER,ie,le,R.width,R.height)}else a.renderbufferStorage(a.RENDERBUFFER,le,R.width,R.height);a.framebufferRenderbuffer(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.RENDERBUFFER,C)}else if(R.depthBuffer&&R.stencilBuffer){let le=$(R);K&&ce(R)===!1?a.renderbufferStorageMultisample(a.RENDERBUFFER,le,a.DEPTH24_STENCIL8,R.width,R.height):ce(R)?U.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,le,a.DEPTH24_STENCIL8,R.width,R.height):a.renderbufferStorage(a.RENDERBUFFER,a.DEPTH_STENCIL,R.width,R.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.RENDERBUFFER,C)}else{let le=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let F=0;F<le.length;F++){let ie=le[F],O=n.convert(ie.format,ie.colorSpace),z=n.convert(ie.type),q=D(ie.internalFormat,O,z,ie.colorSpace),fe=$(R);K&&ce(R)===!1?a.renderbufferStorageMultisample(a.RENDERBUFFER,fe,q,R.width,R.height):ce(R)?U.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,fe,q,R.width,R.height):a.renderbufferStorage(a.RENDERBUFFER,q,R.width,R.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function se(C){let R=t.get(C),K=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!R.__autoAllocateDepthBuffer){if(K)throw new Error("target.depthTexture not supported in Cube render targets");(function(le,F){if(F&&F.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(A.bindFramebuffer(a.FRAMEBUFFER,le),!F.depthTexture||!F.depthTexture.isDepthTexture)throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");t.get(F.depthTexture).__webglTexture&&F.depthTexture.image.width===F.width&&F.depthTexture.image.height===F.height||(F.depthTexture.image.width=F.width,F.depthTexture.image.height=F.height,F.depthTexture.needsUpdate=!0),Y(F.depthTexture,0);let ie=t.get(F.depthTexture).__webglTexture,O=$(F);if(F.depthTexture.format===Hn)ce(F)?U.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,ie,0,O):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,ie,0);else{if(F.depthTexture.format!==Mr)throw new Error("Unknown depthTexture format");ce(F)?U.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,ie,0,O):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,ie,0)}})(R.__webglFramebuffer,C)}else if(K){R.__webglDepthbuffer=[];for(let le=0;le<6;le++)A.bindFramebuffer(a.FRAMEBUFFER,R.__webglFramebuffer[le]),R.__webglDepthbuffer[le]=a.createRenderbuffer(),Ue(R.__webglDepthbuffer[le],C,!1)}else A.bindFramebuffer(a.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer=a.createRenderbuffer(),Ue(R.__webglDepthbuffer,C,!1);A.bindFramebuffer(a.FRAMEBUFFER,null)}function $(C){return Math.min(i.maxSamples,C.samples)}function ce(C){let R=t.get(C);return s&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function ye(C,R){let K=C.colorSpace,le=C.format,F=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===vU||K!==at&&K!==yi&&(DA.getTransfer(K)===SA?s===!1?e.has("EXT_sRGB")===!0&&le===qt?(C.format=vU,C.minFilter=kA,C.generateMipmaps=!1):R=Is.sRGBToLinear(R):le===qt&&F===Ln||console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",K)),R}this.allocateTextureUnit=function(){let C=N;return C>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),N+=1,C},this.resetTextureUnits=function(){N=0},this.setTexture2D=Y,this.setTexture2DArray=function(C,R){let K=t.get(C);C.version>0&&K.__version!==C.version?Fe(K,C,R):A.bindTexture(a.TEXTURE_2D_ARRAY,K.__webglTexture,a.TEXTURE0+R)},this.setTexture3D=function(C,R){let K=t.get(C);C.version>0&&K.__version!==C.version?Fe(K,C,R):A.bindTexture(a.TEXTURE_3D,K.__webglTexture,a.TEXTURE0+R)},this.setTextureCube=function(C,R){let K=t.get(C);C.version>0&&K.__version!==C.version?(function(le,F,ie){if(F.image.length!==6)return;let O=Me(le,F),z=F.source;A.bindTexture(a.TEXTURE_CUBE_MAP,le.__webglTexture,a.TEXTURE0+ie);let q=t.get(z);if(z.version!==q.__version||O===!0){A.activeTexture(a.TEXTURE0+ie);let fe=DA.getPrimaries(DA.workingColorSpace),pe=F.colorSpace===yi?null:DA.getPrimaries(F.colorSpace),w=F.colorSpace===yi||fe===pe?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,F.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,F.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,w);let ge=F.isCompressedTexture||F.image[0].isCompressedTexture,W=F.image[0]&&F.image[0].isDataTexture,j=[];for(let De=0;De<6;De++)j[De]=ge||W?W?F.image[De].image:F.image[De]:f(F.image[De],!1,!0,i.maxCubemapSize),j[De]=ye(F,j[De]);let ue=j[0],Le=m(ue)||s,Ne=n.convert(F.format,F.colorSpace),Ee=n.convert(F.type),Ce=D(F.internalFormat,Ne,Ee,F.colorSpace),be=s&&F.isVideoTexture!==!0,Xe=q.__version===void 0||O===!0,ae,k=b(F,ue,Le);if(Ae(a.TEXTURE_CUBE_MAP,F,Le),ge){be&&Xe&&A.texStorage2D(a.TEXTURE_CUBE_MAP,k,Ce,ue.width,ue.height);for(let De=0;De<6;De++){ae=j[De].mipmaps;for(let je=0;je<ae.length;je++){let He=ae[je];F.format!==qt?Ne!==null?be?A.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+De,je,0,0,He.width,He.height,Ne,He.data):A.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+De,je,Ce,He.width,He.height,0,He.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):be?A.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+De,je,0,0,He.width,He.height,Ne,Ee,He.data):A.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+De,je,Ce,He.width,He.height,0,Ne,Ee,He.data)}}}else{ae=F.mipmaps,be&&Xe&&(ae.length>0&&k++,A.texStorage2D(a.TEXTURE_CUBE_MAP,k,Ce,j[0].width,j[0].height));for(let De=0;De<6;De++)if(W){be?A.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+De,0,0,0,j[De].width,j[De].height,Ne,Ee,j[De].data):A.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+De,0,Ce,j[De].width,j[De].height,0,Ne,Ee,j[De].data);for(let je=0;je<ae.length;je++){let He=ae[je].image[De].image;be?A.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+De,je+1,0,0,He.width,He.height,Ne,Ee,He.data):A.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+De,je+1,Ce,He.width,He.height,0,Ne,Ee,He.data)}}else{be?A.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+De,0,0,0,Ne,Ee,j[De]):A.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+De,0,Ce,Ne,Ee,j[De]);for(let je=0;je<ae.length;je++){let He=ae[je];be?A.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+De,je+1,0,0,Ne,Ee,He.image[De]):A.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+De,je+1,Ce,Ne,Ee,He.image[De])}}}M(F,Le)&&T(a.TEXTURE_CUBE_MAP),q.__version=z.version,F.onUpdate&&F.onUpdate(F)}le.__version=F.version})(K,C,R):A.bindTexture(a.TEXTURE_CUBE_MAP,K.__webglTexture,a.TEXTURE0+R)},this.rebindTextures=function(C,R,K){let le=t.get(C);R!==void 0&&me(le.__webglFramebuffer,C,C.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),K!==void 0&&se(C)},this.setupRenderTarget=function(C){let R=C.texture,K=t.get(C),le=t.get(R);C.addEventListener("dispose",x),C.isWebGLMultipleRenderTargets!==!0&&(le.__webglTexture===void 0&&(le.__webglTexture=a.createTexture()),le.__version=R.version,r.memory.textures++);let F=C.isWebGLCubeRenderTarget===!0,ie=C.isWebGLMultipleRenderTargets===!0,O=m(C)||s;if(F){K.__webglFramebuffer=[];for(let z=0;z<6;z++)if(s&&R.mipmaps&&R.mipmaps.length>0){K.__webglFramebuffer[z]=[];for(let q=0;q<R.mipmaps.length;q++)K.__webglFramebuffer[z][q]=a.createFramebuffer()}else K.__webglFramebuffer[z]=a.createFramebuffer()}else{if(s&&R.mipmaps&&R.mipmaps.length>0){K.__webglFramebuffer=[];for(let z=0;z<R.mipmaps.length;z++)K.__webglFramebuffer[z]=a.createFramebuffer()}else K.__webglFramebuffer=a.createFramebuffer();if(ie)if(i.drawBuffers){let z=C.texture;for(let q=0,fe=z.length;q<fe;q++){let pe=t.get(z[q]);pe.__webglTexture===void 0&&(pe.__webglTexture=a.createTexture(),r.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(s&&C.samples>0&&ce(C)===!1){let z=ie?R:[R];K.__webglMultisampledFramebuffer=a.createFramebuffer(),K.__webglColorRenderbuffer=[],A.bindFramebuffer(a.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let q=0;q<z.length;q++){let fe=z[q];K.__webglColorRenderbuffer[q]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,K.__webglColorRenderbuffer[q]);let pe=n.convert(fe.format,fe.colorSpace),w=n.convert(fe.type),ge=D(fe.internalFormat,pe,w,fe.colorSpace,C.isXRRenderTarget===!0),W=$(C);a.renderbufferStorageMultisample(a.RENDERBUFFER,W,ge,C.width,C.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+q,a.RENDERBUFFER,K.__webglColorRenderbuffer[q])}a.bindRenderbuffer(a.RENDERBUFFER,null),C.depthBuffer&&(K.__webglDepthRenderbuffer=a.createRenderbuffer(),Ue(K.__webglDepthRenderbuffer,C,!0)),A.bindFramebuffer(a.FRAMEBUFFER,null)}}if(F){A.bindTexture(a.TEXTURE_CUBE_MAP,le.__webglTexture),Ae(a.TEXTURE_CUBE_MAP,R,O);for(let z=0;z<6;z++)if(s&&R.mipmaps&&R.mipmaps.length>0)for(let q=0;q<R.mipmaps.length;q++)me(K.__webglFramebuffer[z][q],C,R,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+z,q);else me(K.__webglFramebuffer[z],C,R,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+z,0);M(R,O)&&T(a.TEXTURE_CUBE_MAP),A.unbindTexture()}else if(ie){let z=C.texture;for(let q=0,fe=z.length;q<fe;q++){let pe=z[q],w=t.get(pe);A.bindTexture(a.TEXTURE_2D,w.__webglTexture),Ae(a.TEXTURE_2D,pe,O),me(K.__webglFramebuffer,C,pe,a.COLOR_ATTACHMENT0+q,a.TEXTURE_2D,0),M(pe,O)&&T(a.TEXTURE_2D)}A.unbindTexture()}else{let z=a.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(s?z=C.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),A.bindTexture(z,le.__webglTexture),Ae(z,R,O),s&&R.mipmaps&&R.mipmaps.length>0)for(let q=0;q<R.mipmaps.length;q++)me(K.__webglFramebuffer[q],C,R,a.COLOR_ATTACHMENT0,z,q);else me(K.__webglFramebuffer,C,R,a.COLOR_ATTACHMENT0,z,0);M(R,O)&&T(z),A.unbindTexture()}C.depthBuffer&&se(C)},this.updateRenderTargetMipmap=function(C){let R=m(C)||s,K=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let le=0,F=K.length;le<F;le++){let ie=K[le];if(M(ie,R)){let O=C.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:a.TEXTURE_2D,z=t.get(ie).__webglTexture;A.bindTexture(O,z),T(O),A.unbindTexture()}}},this.updateMultisampleRenderTarget=function(C){if(s&&C.samples>0&&ce(C)===!1){let R=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],K=C.width,le=C.height,F=a.COLOR_BUFFER_BIT,ie=[],O=C.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,z=t.get(C),q=C.isWebGLMultipleRenderTargets===!0;if(q)for(let fe=0;fe<R.length;fe++)A.bindFramebuffer(a.FRAMEBUFFER,z.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+fe,a.RENDERBUFFER,null),A.bindFramebuffer(a.FRAMEBUFFER,z.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+fe,a.TEXTURE_2D,null,0);A.bindFramebuffer(a.READ_FRAMEBUFFER,z.__webglMultisampledFramebuffer),A.bindFramebuffer(a.DRAW_FRAMEBUFFER,z.__webglFramebuffer);for(let fe=0;fe<R.length;fe++){ie.push(a.COLOR_ATTACHMENT0+fe),C.depthBuffer&&ie.push(O);let pe=z.__ignoreDepthValues!==void 0&&z.__ignoreDepthValues;if(pe===!1&&(C.depthBuffer&&(F|=a.DEPTH_BUFFER_BIT),C.stencilBuffer&&(F|=a.STENCIL_BUFFER_BIT)),q&&a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,z.__webglColorRenderbuffer[fe]),pe===!0&&(a.invalidateFramebuffer(a.READ_FRAMEBUFFER,[O]),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[O])),q){let w=t.get(R[fe]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,w,0)}a.blitFramebuffer(0,0,K,le,0,0,K,le,F,a.NEAREST),o&&a.invalidateFramebuffer(a.READ_FRAMEBUFFER,ie)}if(A.bindFramebuffer(a.READ_FRAMEBUFFER,null),A.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),q)for(let fe=0;fe<R.length;fe++){A.bindFramebuffer(a.FRAMEBUFFER,z.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+fe,a.RENDERBUFFER,z.__webglColorRenderbuffer[fe]);let pe=t.get(R[fe]).__webglTexture;A.bindFramebuffer(a.FRAMEBUFFER,z.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+fe,a.TEXTURE_2D,pe,0)}A.bindFramebuffer(a.DRAW_FRAMEBUFFER,z.__webglMultisampledFramebuffer)}},this.setupDepthRenderbuffer=se,this.setupFrameBufferTexture=me,this.useMultisampledRTT=ce}function sf(a,e,A){let t=A.isWebGL2;return{convert:function(i,n=""){let r,s=DA.getTransfer(n);if(i===Ln)return a.UNSIGNED_BYTE;if(i===kd)return a.UNSIGNED_SHORT_4_4_4_4;if(i===Xd)return a.UNSIGNED_SHORT_5_5_5_1;if(i===1010)return a.BYTE;if(i===1011)return a.SHORT;if(i===xl)return a.UNSIGNED_SHORT;if(i===Nd)return a.INT;if(i===un)return a.UNSIGNED_INT;if(i===wi)return a.FLOAT;if(i===Ta)return t?a.HALF_FLOAT:(r=e.get("OES_texture_half_float"),r!==null?r.HALF_FLOAT_OES:null);if(i===1021)return a.ALPHA;if(i===qt)return a.RGBA;if(i===1024)return a.LUMINANCE;if(i===1025)return a.LUMINANCE_ALPHA;if(i===Hn)return a.DEPTH_COMPONENT;if(i===Mr)return a.DEPTH_STENCIL;if(i===vU)return r=e.get("EXT_sRGB"),r!==null?r.SRGB_ALPHA_EXT:null;if(i===1028)return a.RED;if(i===Od)return a.RED_INTEGER;if(i===1030)return a.RG;if(i===Gd)return a.RG_INTEGER;if(i===Vd)return a.RGBA_INTEGER;if(i===PU||i===TU||i===DU||i===MU)if(s===SA){if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r===null)return null;if(i===PU)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===TU)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===DU)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===MU)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else{if(r=e.get("WEBGL_compressed_texture_s3tc"),r===null)return null;if(i===PU)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===TU)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===DU)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===MU)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}if(i===$c||i===eu||i===Au||i===tu){if(r=e.get("WEBGL_compressed_texture_pvrtc"),r===null)return null;if(i===$c)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===eu)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Au)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===tu)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(i===zd)return r=e.get("WEBGL_compressed_texture_etc1"),r!==null?r.COMPRESSED_RGB_ETC1_WEBGL:null;if(i===iu||i===nu){if(r=e.get("WEBGL_compressed_texture_etc"),r===null)return null;if(i===iu)return s===SA?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===nu)return s===SA?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}if(i===ru||i===au||i===su||i===ou||i===Uu||i===lu||i===cu||i===uu||i===du||i===hu||i===pu||i===fu||i===mu||i===gu){if(r=e.get("WEBGL_compressed_texture_astc"),r===null)return null;if(i===ru)return s===SA?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===au)return s===SA?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===su)return s===SA?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ou)return s===SA?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Uu)return s===SA?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===lu)return s===SA?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===cu)return s===SA?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===uu)return s===SA?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===du)return s===SA?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===hu)return s===SA?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===pu)return s===SA?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===fu)return s===SA?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===mu)return s===SA?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===gu)return s===SA?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}if(i===IU||i===Pu||i===Tu){if(r=e.get("EXT_texture_compression_bptc"),r===null)return null;if(i===IU)return s===SA?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Pu)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Tu)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}if(i===36283||i===Du||i===Mu||i===Iu){if(r=e.get("EXT_texture_compression_rgtc"),r===null)return null;if(i===IU)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Du)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Mu)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Iu)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}return i===Qn?t?a.UNSIGNED_INT_24_8:(r=e.get("WEBGL_depth_texture"),r!==null?r.UNSIGNED_INT_24_8_WEBGL:null):a[i]!==void 0?a[i]:null}}}var SU=class extends tt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},di=class extends PA{constructor(){super(),this.isGroup=!0,this.type="Group"}},ZD={type:"move"},us=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new di,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new di,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new S,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new S),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new di,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new S,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new S),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let A=this._hand;if(A)for(let t of e.hand.values())this._getHandJoint(A,t)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,A,t){let i=null,n=null,r=null,s=this._targetRay,U=this._grip,o=this._hand;if(e&&A.session.visibilityState!=="visible-blurred"){if(o&&e.hand){r=!0;for(let f of e.hand.values()){let m=A.getJointPose(f,t),M=this._getHandJoint(o,f);m!==null&&(M.matrix.fromArray(m.transform.matrix),M.matrix.decompose(M.position,M.rotation,M.scale),M.matrixWorldNeedsUpdate=!0,M.jointRadius=m.radius),M.visible=m!==null}let l=o.joints["index-finger-tip"],c=o.joints["thumb-tip"],u=l.position.distanceTo(c.position),h=.02,p=.005;o.inputState.pinching&&u>h+p?(o.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!o.inputState.pinching&&u<=h-p&&(o.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else U!==null&&e.gripSpace&&(n=A.getPose(e.gripSpace,t),n!==null&&(U.matrix.fromArray(n.transform.matrix),U.matrix.decompose(U.position,U.rotation,U.scale),U.matrixWorldNeedsUpdate=!0,n.linearVelocity?(U.hasLinearVelocity=!0,U.linearVelocity.copy(n.linearVelocity)):U.hasLinearVelocity=!1,n.angularVelocity?(U.hasAngularVelocity=!0,U.angularVelocity.copy(n.angularVelocity)):U.hasAngularVelocity=!1));s!==null&&(i=A.getPose(e.targetRaySpace,t),i===null&&n!==null&&(i=n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(ZD)))}return s!==null&&(s.visible=i!==null),U!==null&&(U.visible=n!==null),o!==null&&(o.visible=r!==null),this}_getHandJoint(e,A){if(e.joints[A.jointName]===void 0){let t=new di;t.matrixAutoUpdate=!1,t.visible=!1,e.joints[A.jointName]=t,e.add(t)}return e.joints[A.jointName]}},Ou=class extends Ri{constructor(e,A){super();let t=this,i=null,n=1,r=null,s="local-floor",U=1,o=null,l=null,c=null,u=null,h=null,p=null,f=A.getContextAttributes(),m=null,M=null,T=[],D=[],b=new Te,L=null,y=new tt;y.layers.enable(1),y.viewport=new bA;let x=new tt;x.layers.enable(2),x.viewport=new bA;let X=[y,x],N=new SU;N.layers.enable(1),N.layers.enable(2);let Y=null,re=null;function J($){let ce=D.indexOf($.inputSource);if(ce===-1)return;let ye=T[ce];ye!==void 0&&(ye.update($.inputSource,$.frame,o||r),ye.dispatchEvent({type:$.type,data:$.inputSource}))}function te(){i.removeEventListener("select",J),i.removeEventListener("selectstart",J),i.removeEventListener("selectend",J),i.removeEventListener("squeeze",J),i.removeEventListener("squeezestart",J),i.removeEventListener("squeezeend",J),i.removeEventListener("end",te),i.removeEventListener("inputsourceschange",Ae);for(let $=0;$<T.length;$++){let ce=D[$];ce!==null&&(D[$]=null,T[$].disconnect(ce))}Y=null,re=null,e.setRenderTarget(m),h=null,u=null,c=null,i=null,M=null,se.stop(),t.isPresenting=!1,e.setPixelRatio(L),e.setSize(b.width,b.height,!1),t.dispatchEvent({type:"sessionend"})}function Ae($){for(let ce=0;ce<$.removed.length;ce++){let ye=$.removed[ce],C=D.indexOf(ye);C>=0&&(D[C]=null,T[C].disconnect(ye))}for(let ce=0;ce<$.added.length;ce++){let ye=$.added[ce],C=D.indexOf(ye);if(C===-1){for(let K=0;K<T.length;K++){if(K>=D.length){D.push(ye),C=K;break}if(D[K]===null){D[K]=ye,C=K;break}}if(C===-1)break}let R=T[C];R&&R.connect(ye)}}this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let ce=T[$];return ce===void 0&&(ce=new us,T[$]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function($){let ce=T[$];return ce===void 0&&(ce=new us,T[$]=ce),ce.getGripSpace()},this.getHand=function($){let ce=T[$];return ce===void 0&&(ce=new us,T[$]=ce),ce.getHandSpace()},this.setFramebufferScaleFactor=function($){n=$,t.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){s=$,t.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return o||r},this.setReferenceSpace=function($){o=$},this.getBaseLayer=function(){return u!==null?u:h},this.getBinding=function(){return c},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function($){if(i=$,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",J),i.addEventListener("selectstart",J),i.addEventListener("selectend",J),i.addEventListener("squeeze",J),i.addEventListener("squeezestart",J),i.addEventListener("squeezeend",J),i.addEventListener("end",te),i.addEventListener("inputsourceschange",Ae),f.xrCompatible!==!0&&await A.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(b),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let ce={antialias:i.renderState.layers!==void 0||f.antialias,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:n};h=new XRWebGLLayer(i,A,ce),i.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),M=new ei(h.framebufferWidth,h.framebufferHeight,{format:qt,type:Ln,colorSpace:e.outputColorSpace,stencilBuffer:f.stencil})}else{let ce=null,ye=null,C=null;f.depth&&(C=f.stencil?A.DEPTH24_STENCIL8:A.DEPTH_COMPONENT24,ce=f.stencil?Mr:Hn,ye=f.stencil?Qn:un);let R={colorFormat:A.RGBA8,depthFormat:C,scaleFactor:n};c=new XRWebGLBinding(i,A),u=c.createProjectionLayer(R),i.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),M=new ei(u.textureWidth,u.textureHeight,{format:qt,type:Ln,depthTexture:new Cs(u.textureWidth,u.textureHeight,ye,void 0,void 0,void 0,void 0,void 0,void 0,ce),stencilBuffer:f.stencil,colorSpace:e.outputColorSpace,samples:f.antialias?4:0}),e.properties.get(M).__ignoreDepthValues=u.ignoreDepthValues}M.isXRRenderTarget=!0,this.setFoveation(U),o=null,r=await i.requestReferenceSpace(s),se.setContext(i),se.start(),t.isPresenting=!0,t.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};let Me=new S,Fe=new S;function me($,ce){ce===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(ce.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(i===null)return;N.near=x.near=y.near=$.near,N.far=x.far=y.far=$.far,Y===N.near&&re===N.far||(i.updateRenderState({depthNear:N.near,depthFar:N.far}),Y=N.near,re=N.far);let ce=$.parent,ye=N.cameras;me(N,ce);for(let C=0;C<ye.length;C++)me(ye[C],ce);ye.length===2?(function(C,R,K){Me.setFromMatrixPosition(R.matrixWorld),Fe.setFromMatrixPosition(K.matrixWorld);let le=Me.distanceTo(Fe),F=R.projectionMatrix.elements,ie=K.projectionMatrix.elements,O=F[14]/(F[10]-1),z=F[14]/(F[10]+1),q=(F[9]+1)/F[5],fe=(F[9]-1)/F[5],pe=(F[8]-1)/F[0],w=(ie[8]+1)/ie[0],ge=O*pe,W=O*w,j=le/(-pe+w),ue=j*-pe;R.matrixWorld.decompose(C.position,C.quaternion,C.scale),C.translateX(ue),C.translateZ(j),C.matrixWorld.compose(C.position,C.quaternion,C.scale),C.matrixWorldInverse.copy(C.matrixWorld).invert();let Le=O+j,Ne=z+j,Ee=ge-ue,Ce=W+(le-ue),be=q*z/Ne*Le,Xe=fe*z/Ne*Le;C.projectionMatrix.makePerspective(Ee,Ce,be,Xe,Le,Ne),C.projectionMatrixInverse.copy(C.projectionMatrix).invert()})(N,y,x):N.projectionMatrix.copy(y.projectionMatrix),(function(C,R,K){K===null?C.matrix.copy(R.matrixWorld):(C.matrix.copy(K.matrixWorld),C.matrix.invert(),C.matrix.multiply(R.matrixWorld)),C.matrix.decompose(C.position,C.quaternion,C.scale),C.updateMatrixWorld(!0),C.projectionMatrix.copy(R.projectionMatrix),C.projectionMatrixInverse.copy(R.projectionMatrixInverse),C.isPerspectiveCamera&&(C.fov=2*Ma*Math.atan(1/C.projectionMatrix.elements[5]),C.zoom=1)})($,N,ce)},this.getCamera=function(){return N},this.getFoveation=function(){if(u!==null||h!==null)return U},this.setFoveation=f
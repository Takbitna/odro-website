/* style.css */
@import url('https://cdn.jsdelivr.net/npm/pretendard/dist/web/static/pretendard.css');
* { margin:0; padding:0; box-sizing:border-box; }
html { overflow:auto; }
body { overflow:hidden; width:100%; height:100%; font-family:Pretendard,sans-serif; background:#000; color:#fff; }

#landingCanvas { position:fixed; top:0; left:0; width:100%; height:100%; z-index:100; }
#gridOverlay { position:fixed; top:0; left:0; width:100%; height:100%;
  background-image:
    linear-gradient(#fff 0.5px, transparent 0.5px),
    linear-gradient(90deg, #fff 0.5px, transparent 0.5px);
  background-size:40px 40px;
  opacity:1;
  pointer-events:none;
  z-index:101;
}

#mainContent { display:none; overflow-y:auto; height:100%; background:#fff; color:#000; }

.site-header { position:sticky; top:0; background:#fff; border-bottom:1px solid #000; padding:1rem; z-index:400; }
.container { width:90%; max-width:1200px; margin:0 auto; }
.logo { font-size:1.5rem; font-weight:700; color:#000; }

.nav-list { list-style:none; display:flex; gap:1rem; }
.nav-link { font-weight:500; color:#000; text-decoration:none; position:relative; padding-bottom:.25rem; }
.nav-link.active::after { content:''; position:absolute; left:0; bottom:0; width:100%; height:2px; background:#0047AB; }
.nav-link:hover { color:#0047AB; }

.section-title { font-size:2rem; font-weight:700; margin:2rem 0 1rem; border-bottom:1px solid #000; padding-bottom:.5rem; }

.page { display:none; opacity:0; transition:opacity .5s ease; border-top:1px solid #000; }
.page.active { display:block; opacity:1; }

.hero { display:flex; justify-content:center; align-items:center; height:80vh; font-size:3rem; font-weight:700; color:#fff; border-bottom:1px solid #000; }

.product-grid { display:grid; grid-template-columns: repeat(auto-fit, minmax(250px,1fr)); gap:2rem; margin:2rem 0; }
.product-item { background:#f5f5f5; padding:1rem; border:1px solid #000; text-align:center; }
.product-item img { width:100%; height:auto; transition:transform .3s; }
.product-item:hover img { transform: scale(1.1); }
.product-name { font-size:1.1rem; font-weight:600; margin:0.5rem 0; }

.about-text { padding:2rem; font-size:1rem; line-height:1.6; font-weight:400; color:#000; }

.contact-form { display:flex; flex-direction:column; gap:1rem; max-width:400px; margin:2rem auto; }
.contact-form input, .contact-form textarea { padding:.75em; border:1px solid #000; border-radius:0; font-weight:300; }

.btn { padding:.75em 1.5em; border:2px solid #000; background:#fff; color:#000; border-radius:0; cursor:pointer; font-weight:600; transition:background .3s; }
.btn:hover { background:#0047AB; color:#fff; }

.site-footer { text-align:center; padding:2rem 0; background:#fff; color:#000; border-top:1px solid #000; }

@media (max-width:768px) {
  .nav-list { flex-direction:column; }
}

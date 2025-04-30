// script.js
(()=>{
  const canvas=document.getElementById('landingCanvas'), ctx=canvas.getContext('2d'); let w,h; const particles=[];
  function resize(){ w=canvas.width=window.innerWidth; h=canvas.height=window.innerHeight; }
  window.addEventListener('resize', resize); resize();
  class Particle{ constructor(x,y,vx,vy,size){ this.x=x; this.y=y; this.vx=vx; this.vy=vy; this.size=size; this.alpha=1; } update(){ this.x+=this.vx; this.y+=this.vy; this.alpha-=0.002; } draw(){ ctx.globalAlpha=this.alpha; ctx.fillStyle='#fff'; ctx.beginPath(); ctx.arc(this.x, this.y, this.size, 0, Math.PI*2); ctx.fill(); ctx.globalAlpha=1; }}
  function spawnWave(){ const count=Math.floor(200*2/3); for(let i=0;i<count;i++){ const angle=Math.random()*Math.PI*2; const speed=Math.random()*1.5+0.3; const size=Math.random()*3+1; particles.push(new Particle(w/2,h/2,Math.cos(angle)*speed,Math.sin(angle)*speed,size)); }}
  window.addEventListener('mousemove', e=>{ for(let i=0;i<2;i++){ particles.push(new Particle(e.clientX, e.clientY, (Math.random()-0.5)*0.6, (Math.random()-0.5)*0.6, Math.random()*3+1)); } });
  function animate(){ ctx.fillStyle='rgba(0,0,0,0.05)'; ctx.fillRect(0,0,w,h); particles.forEach((p,i)=>{ p.update(); p.draw(); if(p.alpha<=0) particles.splice(i,1); }); requestAnimationFrame(animate); }
  spawnWave(); animate();

  // 텍스트 시퀀스
  setTimeout(()=>{
    // 전체 텍스트
    ctx.clearRect(0,0,w,h);
    ctx.font='bold 80px Pretendard'; ctx.textAlign='center'; ctx.fillStyle='#fff'; ctx.fillText('Anywhere, ODR*', w/2, h/2);
    // '*'만 남기기
    setTimeout(()=>{
      ctx.clearRect(0,0,w,h);
      ctx.fillText('*', w/2, h/2);
      // '*' 디졸브
      setTimeout(()=>{ ctx.clearRect(0,0,w,h); }, 2000);
    }, 2000);
  }, 3000);

  // 1분 후 메인 컨텐츠 표시
  function showMainContent(){ canvas.style.display='none'; document.getElementById('gridOverlay').style.display='none'; document.getElementById('mainContent').style.display='block'; document.body.style.overflow='auto'; }
  setTimeout(showMainContent, 60000);

  // 오류 발생 시 즉시 메인 표시
  window.onerror = showMainContent;

  // SPA 네비게이션
  document.querySelectorAll('.nav-link').forEach(link=>link.addEventListener('click', e=>{
    e.preventDefault(); document.querySelector('.nav-link.active').classList.remove('active'); link.classList.add('active'); document.querySelector('.page.active').classList.remove('active'); document.getElementById('page-'+link.dataset.target).classList.add('active');
  }));

  // 카트 로직
  const cartIcon=document.getElementById('cartIcon'), cartPanel=document.getElementById('cartPanel'), closeCart=document.getElementById('closeCart'), cartCount=document.getElementById('cartCount'), cartItems=document.getElementById('cartItems'), cartTotal=document.getElementById('cartTotal'), checkoutBtn=document.getElementById('checkoutBtn'); let cart=[];
  document.querySelectorAll('.add-cart').forEach(btn=>btn.addEventListener('click', ()=>{ const item=btn.parentElement; const name=item.dataset.name; const price=parseInt(item.dataset.price); cart.push({name,price}); updateCart(); cartPanel.classList.add('open'); }));
  cartIcon.addEventListener('click', ()=>cartPanel.classList.add('open'));
  closeCart.addEventListener('click', ()=>cartPanel.classList.remove('open'));
  checkoutBtn.addEventListener('click', ()=>alert('Proceed to payment (not implemented)'));
  function updateCart(){ cartItems.innerHTML=''; let total=0; cart.forEach(i=>{ total+=i.price; const li=document.createElement('li'); li.textContent=`${i.name} - ₩${i.price}`; cartItems.appendChild(li); }); cartCount.textContent=cart.length; cartTotal.textContent=total; }
})();

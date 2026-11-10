(function(){
var rm=matchMedia('(prefers-reduced-motion:reduce)').matches,$=function(s){return document.querySelectorAll(s)};
var m=document.querySelector('.menu'),l=document.querySelector('.links');
if(m)m.onclick=function(){m.setAttribute('aria-expanded',l.classList.toggle('open'))};
$('.links a').forEach(function(a){a.addEventListener('click',function(){l.classList.remove('open')})});
var nav=document.querySelector('nav'),pb=document.createElement('div'),tp=document.createElement('button');
pb.className='prog';tp.className='top';tp.setAttribute('aria-label','Kembali ke atas');tp.innerHTML='&uarr;';
document.body.append(pb,tp);tp.onclick=function(){scrollTo({top:0,behavior:rm?'auto':'smooth'})};
function sc(){var y=scrollY,h=document.documentElement.scrollHeight-innerHeight;
pb.style.transform='scaleX('+(h>0?y/h:0)+')';nav.classList.toggle('sm',y>20);tp.classList.toggle('show',y>500)}
addEventListener('scroll',sc,{passive:true});sc();
var rv=new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;
var el=e.target;el.classList.add('in');rv.unobserve(el);setTimeout(function(){el.style.transitionDelay=''},1100)})},{threshold:.12});
$('.card,.head,.tl article,.row,.photo,.ctab,.mq').forEach(function(el){
var i=[].indexOf.call(el.parentNode.children,el);el.style.transitionDelay=Math.min(i,5)*90+'ms';el.classList.add('rv');rv.observe(el)});
var co=new IntersectionObserver(function(es){es.forEach(function(e){
if(!e.isIntersecting)return;var el=e.target,n=+el.dataset.n,d=+el.dataset.d||0,s=el.dataset.s||'',t0=null;co.unobserve(el);
function f(t){t0=t0||t;var p=Math.min((t-t0)/1300,1),v=n*(1-Math.pow(1-p,3));
el.textContent=v.toLocaleString('id-ID',{minimumFractionDigits:d,maximumFractionDigits:d})+s;if(p<1)requestAnimationFrame(f)}
if(rm)return;requestAnimationFrame(f)})},{threshold:.5});
$('[data-n]').forEach(function(e){co.observe(e)});
var ty=document.getElementById('ty');
if(ty){var w=JSON.parse(ty.dataset.w),wi=0,ci=0,dl=0;
if(rm)ty.textContent=w[0];else(function t(){var s=w[wi],d=dl?30:65;ci+=dl?-1:1;ty.textContent=s.slice(0,ci);
if(!dl&&ci===s.length){dl=1;d=1600}else if(dl&&!ci){dl=0;wi=(wi+1)%w.length;d=350}setTimeout(t,d)})()}
$('.card').forEach(function(c){c.addEventListener('pointermove',function(e){var r=c.getBoundingClientRect();
c.style.setProperty('--mx',e.clientX-r.left+'px');c.style.setProperty('--my',e.clientY-r.top+'px')})});
if(!rm&&matchMedia('(hover:hover)').matches)$('.photo,.frame').forEach(function(c){
c.addEventListener('pointermove',function(e){var r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;
c.style.transform='perspective(900px) rotateY('+x*7+'deg) rotateX('+-y*7+'deg)'});
c.addEventListener('pointerleave',function(){c.style.transform=''})});
if(!rm){var cv=document.createElement('canvas'),x=cv.getContext('2d'),W=0,H=0,P=[],mx=-999,my=-999,dp=Math.min(devicePixelRatio||1,2);
cv.className='net';cv.setAttribute('aria-hidden','true');document.body.prepend(cv);
function rs(){if(innerWidth===W&&P.length)return;W=innerWidth;H=innerHeight;cv.width=W*dp;cv.height=H*dp;x.setTransform(dp,0,0,dp,0,0);
var n=Math.min(90,Math.floor(W*H/17000));P=[];for(var i=0;i<n;i++)P.push({x:Math.random()*W,y:Math.random()*H,vx:(Math.random()-.5)*.35,vy:(Math.random()-.5)*.35})}
rs();addEventListener('resize',rs);addEventListener('pointermove',function(e){mx=e.clientX;my=e.clientY});
(function f(){x.clearRect(0,0,W,H);
for(var i=0;i<P.length;i++){var a=P[i];a.x+=a.vx;a.y+=a.vy;if(a.x<0||a.x>W)a.vx*=-1;if(a.y<0||a.y>H)a.vy*=-1;
x.fillStyle='rgba(0,200,255,.7)';x.beginPath();x.arc(a.x,a.y,1.6,0,6.3);x.fill();
for(var j=i+1;j<P.length;j++){var b=P[j],d=Math.hypot(a.x-b.x,a.y-b.y);
if(d<130){x.strokeStyle='rgba(40,120,255,'+(1-d/130)*.35+')';x.beginPath();x.moveTo(a.x,a.y);x.lineTo(b.x,b.y);x.stroke()}}
var dm=Math.hypot(a.x-mx,a.y-my);
if(dm<170){x.strokeStyle='rgba(0,220,255,'+(1-dm/170)*.6+')';x.beginPath();x.moveTo(a.x,a.y);x.lineTo(mx,my);x.stroke()}}
requestAnimationFrame(f)})()}
var f=document.getElementById('cf');
if(f)f.onsubmit=function(e){e.preventDefault();var v=function(i){return f.elements[i].value};
location.href='mailto:andreanatma@gmail.com?subject='+encodeURIComponent(v('s')||'Pesan dari website CV')+'&body='+encodeURIComponent('Nama: '+v('n')+'\nEmail: '+v('e')+'\n\n'+v('m'));
document.getElementById('ok').hidden=false};
})();

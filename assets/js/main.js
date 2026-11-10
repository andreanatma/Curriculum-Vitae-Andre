(function(){
var m=document.querySelector('.menu'),l=document.querySelector('.links');
if(m)m.onclick=function(){m.setAttribute('aria-expanded',l.classList.toggle('open'))};
var io=new IntersectionObserver(function(es){es.forEach(function(e){
if(!e.isIntersecting)return;var el=e.target,n=+el.dataset.n,d=+el.dataset.d||0,s=el.dataset.s||'',t0=null;io.unobserve(el);
function f(t){t0=t0||t;var p=Math.min((t-t0)/1100,1),v=n*(1-Math.pow(1-p,3));
el.textContent=v.toLocaleString('id-ID',{minimumFractionDigits:d,maximumFractionDigits:d})+s;if(p<1)requestAnimationFrame(f)}
requestAnimationFrame(f)})},{threshold:.5});
document.querySelectorAll('[data-n]').forEach(function(e){io.observe(e)});
var f=document.getElementById('cf');
if(f)f.onsubmit=function(e){e.preventDefault();var v=function(i){return f.elements[i].value};
location.href='mailto:andreanatma@gmail.com?subject='+encodeURIComponent(v('s')||'Pesan dari website CV')+'&body='+encodeURIComponent('Nama: '+v('n')+'\nEmail: '+v('e')+'\n\n'+v('m'));
document.getElementById('ok').hidden=false};
})();

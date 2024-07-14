/* eslint-disable @typescript-eslint/no-explicit-any */
import gsap from "gsap";
class HoverButton {
    el: HTMLElement | null ;
    hover: boolean;
    x: any;
    y: any;
    width: any;
    height: any;
    constructor(el:HTMLElement | null) {
      this.el = el;
      this.hover = false;
      this.calculatePosition();
      this.attachEventsListener();
    }
    
    attachEventsListener() {
      // console.log('Yes it is called')
      // if(!this.el) return
      window.addEventListener('mousemove', e => this.onMouseMove(e));
      window.addEventListener('resize', () => this.calculatePosition());
    }
    
    calculatePosition() {
      if(!this.el) return
      gsap.set(this.el, {
        x: 0,
        y: 0,
        scale: 1
      });
      const box = this.el.getBoundingClientRect();
      this.x = box.left + (box.width * 0.5);
      this.y = box.top + (box.height * 0.5);
      this.width = box.width;
      this.height = box.height;
      // console.log(this.width,this.height)
    }
    
    onMouseMove(e: MouseEvent) {
      let hover = false;
      const hoverArea = (this.hover ? 0.7 : 0.5);
      const x = e.clientX - this.x;
      const y = e.clientY - this.y;
      const distance = Math.sqrt( x*x + y*y );
      // console.log(distance)
      if (distance < (this.width * hoverArea)) {
        // if(this.el) this.el.style.background='green'
        hover = true;
          if (!this.hover) {
            this.hover = true;
          }
          this.onHover(e.clientX, e.clientY);
      }
      
      if(!hover && this.hover) {
        this.onLeave();
        this.hover = false;
      }
    }
    
    onHover(x: number, y: number) {
      gsap.to(this.el,  {
        x: (x - this.x) * 0.4,
        y: (y - this.y) * 0.4,
        scale: 1.05,
        ease: 'power2.out',
        duration: 0.4
      });
      if(this.el){
        this.el.style.zIndex = '10';
      }
    }
    onLeave() {
      gsap.to(this.el, {
        x: 0,
        y: 0,
        scale: 1,
        ease: 'elastic.out(1.2, 0.4)',
        duration: 0.7
      });
      if(this.el){
        this.el.style.zIndex = '1';
      }
    }
  }
  
//   const btn1 = document.querySelector('li:nth-child(1) button');
//   new HoverButton(btn1);
  
//   const btn2 = document.querySelector('li:nth-child(2) button');
//   new HoverButton(btn2);
  
//   const btn3 = document.querySelector('li:nth-child(3) button');
//   new HoverButton(btn3);

export default HoverButton
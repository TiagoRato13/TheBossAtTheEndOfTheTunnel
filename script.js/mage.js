class Mage extends Component{
    constructor(x, y, w, h){
        super(x, y, w, h)
        this.health = 10;
        this.strength = 5;
        this.intervalId = null;
        this.frames = 0;
        this.animation = 0;
        
        //IDLE
        const idle1 = new Image();
        const idle2 = new Image();
        const idle3 = new Image();
        const idle4 = new Image();
        const idle5 = new Image();
        const idle6 = new Image();
        const idle7 = new Image();

        idle1.src = "/docs/assets/Images/Lightning Mage/idle/Idle1.png";
        idle2.src = "/docs/assets/Images/Lightning Mage/idle/Idle2.png";
        idle3.src = "/docs/assets/Images/Lightning Mage/idle/Idle3.png";
        idle4.src = "/docs/assets/Images/Lightning Mage/idle/Idle4.png";
        idle5.src = "/docs/assets/Images/Lightning Mage/idle/Idle5.png";
        idle6.src = "/docs/assets/Images/Lightning Mage/idle/Idle6.png";
        idle7.src = "/docs/assets/Images/Lightning Mage/idle/Idle7.png";


        //RUN
         const run1 = new Image();
         const run2 = new Image();
         const run3 = new Image();
         const run4 = new Image();
         const run5 = new Image();
         const run6 = new Image();
         const run7 = new Image();
         const run8 = new Image();

        run1.src = "./docs/assets/Images/Lightning Mage/run/Run1.png";
        run2.src = "./docs/assets/Images/Lightning Mage/run/Run2.png";
        run3.src = "./docs/assets/Images/Lightning Mage/run/Run3.png";
        run4.src = "./docs/assets/Images/Lightning Mage/run/Run4.png";
        run5.src = "./docs/assets/Images/Lightning Mage/run/Run5.png";
        run6.src = "./docs/assets/Images/Lightning Mage/run/Run6.png";
        run7.src = "./docs/assets/Images/Lightning Mage/run/Run7.png";
        run8.src = "./docs/assets/Images/Lightning Mage/run/Run8.png";

        this.image = idle1;
        this.mageRun = [run1, run2, run3, run4, run5, run6, run7, run8];
        this.mageIdle = [idle1, idle2, idle3, idle4, idle5, idle6, idle7];
    }

    start(){
        this.intervalId = setInterval(this.update, 1000 / 60);
    }

    update = () => {
        this.frames++;
        this.draw();
        this.clear()
    }

    clear() {
        ctx.clearRect(0, 0, this.width, this.height);
    }

    draw(){
        if(this.frames % 12 === 0) {
            this.animation = (this.animation + 1) % this.mageIdle.length
        } 

        ctx.drawImage(this.mageIdle[this.animation], this.x, this.y, this.w, this.h);
    }

    moveRight(){
        this.x += this.moveX;
    }
}
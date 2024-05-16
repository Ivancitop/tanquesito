AFRAME.registerComponent("walk",{
    init:function(){
        this.moving();
    },
    moving:function(){
        window.addEventListener("keydown",e=>{
            if(e.key=="ArrowUp"||e.key=="ArrowDown"||e.key=="ArrowRight"||e.key=="ArrowLeft" ){
                var entity= document.querySelector("#paso");
                entity.components.sound.playSound();
            }
        })
    }
})
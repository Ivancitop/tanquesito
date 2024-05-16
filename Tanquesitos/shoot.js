AFRAME.registerComponent("pistola",{
    init:function(){
        this.shootBullet();
 
    },
    shootBullet:function(){
        window.addEventListener("keydown",(e)=>{
            if(e.key=="z"){
                var bala = document.createElement("a-entity");
                bala.setAttribute("geometry",{
                    primitive:"sphere",
                    radius:0.1
                });
                bala.setAttribute("material","color","black");
                var cam = document.querySelector("#cameraRank");
                pos = cam.getAttribute("position");
                bala.setAttribute("position",{
                    x:pos.x,
                    y:pos.y+1,
                    z:pos.z-1
                });
                var camera = document.querySelector("#camera").object3D;
                var direction = new THREE.Vector3();
                camera.getWorldDirection(direction);
                bala.setAttribute("velocity",direction.multiplyScalar(-10));
                var scene = document.querySelector("#scene");
                bala.setAttribute("dynamic-body",{
                    shape:"sphere",
                    mass:"0"
                });
                bala.addEventListener("collide",this.removeBullets);
                scene.appendChild(bala);
                this.balazo();
            }
        })
    },
    removeBullets:function(e){
        console.log(e.detail.target.el);
        console.log(e.detail.body.el);
        var element = e.detail.target.el;
        var box = e.detail.body.el;
        if(box.id.includes("b")){
            /*box.setAttribute("material",{
                opacity:0.1,
                transparent:true
            });*/
            var inputs = new CANNON.Vec3(-3);
            var worldPoint= new CANNON.Vec3().copy(box.getAttribute("position"));
            box.body.applyImpulse(inputs,worldPoint);

            element.removeEventListener("collide",this.shoot);
            var scene = document.querySelector("#scene");
            scene.removeChild(element);
        }
        
        
    },
    balazo:function(){
        var sonidoEl = document.querySelector("#disparo");
        sonidoEl.components.sound.playSound();
    }
    
})